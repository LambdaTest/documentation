'use strict';

/**
 * Sitemap exclusions — the "don't list pages that shouldn't be crawled" layer.
 *
 * Ported from the sitemap pipeline used by lambdatest-website-next,
 * Learninghub-blog and lambdatest-website-other-dynamic-pages (see
 * SITEMAP-PIPELINE.md in lambdatest-website-next). Those repos drop noindex and
 * redirected pages from their sitemaps; this brings the same behaviour here.
 *
 * Docusaurus already handles NOINDEX for us: @docusaurus/plugin-sitemap reads the
 * rendered Helmet head of every route and drops anything serving
 * <meta name="robots" content="noindex">. That covers frontmatter, MDX <head>
 * blocks and component-rendered tags alike, so none of the reference repos'
 * noindex heuristics are ported — we just delegate to defaultCreateSitemapItems.
 *
 * What Docusaurus does NOT catch is REDIRECTED pages, and this site has two kinds:
 *
 *   Class A — in-repo client-side redirects. A page whose whole body is
 *     <Redirect to="..."/> (or window.location.replace) is statically generated
 *     and serves HTTP 200 with no Location header, so neither the build nor an
 *     HTTP probe can tell it from a real page. Found by scanning source.
 *
 *   Class B — CDN/edge 301s at CloudFront/Cloudflare. Invisible from the repo.
 *     Found by `npm run sitemap-live-check -- --fix`, which records them in
 *     sitemap-live-exclusions.json (same schema as the other three repos).
 *
 * Both classes feed one filter, applied via `createSitemapItems` in
 * docusaurus.config.js.
 *
 * Run `node scripts/sitemap-exclusions.js` to print what would be excluded.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DOCS_DIR = path.join(ROOT, 'docs');
const PAGES_DIR = path.join(ROOT, 'src', 'pages');
const LIVE_EXCLUSIONS_FILE = path.join(ROOT, 'sitemap-live-exclusions.json');

// Mirrors docusaurus.config.js `baseUrl` and the docs preset's default
// `routeBasePath`. Kept as constants so this module stays require-able from the
// config itself without a circular import.
const BASE_URL = '/support/';
const DOCS_ROUTE_BASE = 'docs';

/**
 * If the filter would drop more than this share of the sitemap, something is
 * wrong (a bad scan, or a mass-redirect event recorded by the live checker) and
 * we fail the build rather than silently shipping a gutted sitemap. The
 * reference pipeline learned this the hard way — see SITEMAP-PIPELINE.md.
 */
const MAX_DROP_RATIO = Number(process.env.SITEMAP_MAX_DROP_RATIO || 0.1);

// ---------------------------------------------------------------- path helpers

/** `/support/docs/foo` -> `/support/docs/foo/` (site uses trailingSlash: true). */
function normalizeRoute(route) {
  let r = String(route || '').trim();
  if (!r) return '';
  const hash = r.indexOf('#');
  if (hash !== -1) r = r.slice(0, hash);
  const query = r.indexOf('?');
  if (query !== -1) r = r.slice(0, query);
  if (!r.startsWith('/')) r = `/${r}`;
  if (!r.endsWith('/')) r = `${r}/`;
  return r.replace(/\/{2,}/g, '/');
}

/** Accepts a full URL or a bare path and returns the normalized path. */
function toRoute(urlOrPath) {
  const raw = String(urlOrPath || '').trim();
  if (!raw) return '';
  if (/^https?:\/\//i.test(raw)) {
    try {
      return normalizeRoute(new URL(raw).pathname);
    } catch {
      return '';
    }
  }
  return normalizeRoute(raw);
}

// ------------------------------------------------------- source-scan internals

/**
 * Read a source file, dropping a UTF-8 BOM. 172 of the docs carry one, and a
 * leading U+FEFF stops the frontmatter regex below from matching at all — which
 * would silently fall back to the filename and compute the wrong route.
 * gray-matter strips it for Docusaurus, so the two must agree.
 */
function readText(file) {
  const src = fs.readFileSync(file, 'utf8');
  return src.charCodeAt(0) === 0xfeff ? src.slice(1) : src;
}

/**
 * Strip fenced and inline code so a docs page that *documents* `<Redirect>` or
 * `window.location.replace` is not mistaken for one that performs a redirect.
 */
function stripCode(src) {
  return src
    .replace(/^[ \t]*(`{3,}|~{3,})[\s\S]*?^[ \t]*\1[ \t]*$/gm, '')
    // A fence that is never closed runs to end of file. Without this the
    // alternation above fails and NOTHING is stripped, so a documented example
    // would read as a real redirect.
    .replace(/^[ \t]*(?:`{3,}|~{3,})[\s\S]*$/m, '')
    .replace(/`[^`\n]*`/g, '');
}

/** Returns the raw frontmatter block of a Markdown file, or '' if there is none. */
function frontmatter(src) {
  const m = /^---\r?\n([\s\S]*?)\r?\n---/.exec(src);
  return m ? m[1] : '';
}

function frontmatterField(fm, field) {
  const m = new RegExp(`^${field}:[ \\t]*(.+?)[ \\t]*$`, 'm').exec(fm);
  if (!m) return '';
  return m[1].replace(/^['"]|['"]$/g, '').trim();
}

// A JSX <Redirect ...> / <Navigate ...> element — not the words "redirect" or
// "HTTP-Redirect" in prose, which is why the `<` and the delimiter both matter.
const JSX_REDIRECT = /<\s*(?:Redirect|Navigate)[\s/>]/;
const ROUTER_IMPORT = /from\s+['"]@docusaurus\/router['"]/;
const IMPERATIVE_REDIRECT =
  /window\s*\.\s*location\s*\.\s*(?:replace|assign)\s*\(|window\s*\.\s*location\s*(?:\.\s*href)?\s*=\s*['"`]/;

/** Best-effort extraction of the redirect target, for the human-readable reason. */
function redirectTarget(src) {
  const jsx = /<\s*(?:Redirect|Navigate)\b[^>]*\b(?:to|href)\s*=\s*(?:"([^"]+)"|'([^']+)'|\{\s*['"`]([^'"`]+)['"`]\s*\})/.exec(src);
  if (jsx) return jsx[1] || jsx[2] || jsx[3];
  const imperative = /window\s*\.\s*location\s*(?:\.\s*(?:replace|assign)\s*\(|(?:\.\s*href)?\s*=)\s*['"`]([^'"`]+)['"`]/.exec(src);
  if (imperative) return imperative[1];
  return '';
}

// ------------------------------------------------- class A: in-repo redirects

/**
 * `docs/<path>.md` -> its route. A frontmatter `slug` wins over the file path,
 * and — like Docusaurus — a slug is always resolved under routeBasePath, so a
 * leading slash means "root of the docs section", not root of the site.
 * `slug: /` (docs/support.md) therefore yields /support/docs/, not /.
 * There is deliberately no `id` fallback: Docusaurus derives a doc URL from the
 * slug or the file path, never from `id`.
 */
function docRoute(relPath, fm) {
  const slug = frontmatterField(fm, 'slug');
  const fromPath = relPath.replace(/\\/g, '/').replace(/\.mdx?$/, '');
  const rel = (slug || fromPath).replace(/^\/+/, '');
  return normalizeRoute(`${BASE_URL}${DOCS_ROUTE_BASE}/${rel}`);
}

function scanDocs(dir = DOCS_DIR, relative = '') {
  if (!fs.existsSync(dir)) return [];
  const found = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const rel = relative ? `${relative}/${entry.name}` : entry.name;
    const file = path.join(dir, entry.name);
    // Docusaurus supports nested docs and colocated asset folders; walk both
    // rather than failing the build on the first subdirectory someone adds.
    if (entry.isDirectory()) {
      found.push(...scanDocs(file, rel));
      continue;
    }
    if (!/\.mdx?$/.test(entry.name)) continue;
    const src = readText(file);
    const body = stripCode(src);
    // Docs are prose; require BOTH the router import and a real JSX element so
    // that a page merely discussing redirects is never dropped.
    if (!(ROUTER_IMPORT.test(body) && JSX_REDIRECT.test(body))) continue;
    found.push({
      route: docRoute(rel, frontmatter(src)),
      source: path.posix.join('docs', rel),
      target: redirectTarget(body),
    });
  }
  return found;
}

/** src/pages/<...>.js -> route, mirroring the pages plugin's own mapping. */
function pageRoute(relative) {
  const withoutExt = relative.replace(/\.(jsx?|tsx?|mdx?)$/, '');
  const asRoute = withoutExt.replace(/(^|\/)index$/, '$1');
  return normalizeRoute(`${BASE_URL}${asRoute}`);
}

function scanPages(dir = PAGES_DIR, relative = '') {
  if (!fs.existsSync(dir)) return [];
  const found = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    // `_`-prefixed files are private to the pages plugin; `api-doc/<name>/` dirs
    // are generated by scripts/generate-api-pages.js and are real content.
    if (entry.name.startsWith('_') || entry.name.startsWith('.')) continue;
    const rel = relative ? `${relative}/${entry.name}` : entry.name;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      found.push(...scanPages(full, rel));
      continue;
    }
    if (!/\.(jsx?|tsx?)$/.test(entry.name)) continue;
    const src = readText(full);
    // Real components, not prose — either form is a genuine redirect here.
    if (!(JSX_REDIRECT.test(src) || IMPERATIVE_REDIRECT.test(src))) continue;
    found.push({
      route: pageRoute(rel),
      source: path.posix.join('src/pages', rel),
      target: redirectTarget(src),
    });
  }
  return found;
}

function findRepoRedirects() {
  return [...scanDocs(), ...scanPages()].sort((a, b) => a.route.localeCompare(b.route));
}

// ------------------------------------------------------ class B: live redirects

/**
 * sitemap-live-exclusions.json — same shape as the three reference repos:
 *   [{ "url": "/support/docs/foo/", "reason": "live 301 -> /support/docs/bar/",
 *      "detected": "2026-09-08" }]
 */
function loadLiveExclusions() {
  if (!fs.existsSync(LIVE_EXCLUSIONS_FILE)) return [];
  let parsed;
  try {
    parsed = JSON.parse(fs.readFileSync(LIVE_EXCLUSIONS_FILE, 'utf8'));
  } catch (err) {
    throw new Error(`sitemap-live-exclusions.json is not valid JSON: ${err.message}`);
  }
  if (!Array.isArray(parsed)) {
    throw new Error('sitemap-live-exclusions.json must contain a JSON array.');
  }
  return parsed
    .filter((e) => e && typeof e.url === 'string')
    .map((e) => ({ route: toRoute(e.url), reason: e.reason || 'live redirect', detected: e.detected || '' }))
    .filter((e) => e.route);
}

// ------------------------------------------------------------- the filter itself

function buildExcluder() {
  const repoRedirects = findRepoRedirects();
  const liveExclusions = loadLiveExclusions();

  const reasons = new Map();
  for (const r of repoRedirects) {
    reasons.set(r.route, `redirect(source:${r.source}${r.target ? ` -> ${r.target}` : ''})`);
  }
  for (const e of liveExclusions) {
    // A live finding never overwrites the more precise source-scan reason.
    if (!reasons.has(e.route)) reasons.set(e.route, `redirect(live:${e.reason})`);
  }

  return {
    repoRedirects,
    liveExclusions,
    reasons,
    isExcluded: (urlOrPath) => reasons.has(toRoute(urlOrPath)),
    reasonFor: (urlOrPath) => reasons.get(toRoute(urlOrPath)) || '',
  };
}

/**
 * Factory for docusaurus.config.js `sitemap.createSitemapItems`.
 *
 * Always delegates to defaultCreateSitemapItems first — that is what applies
 * ignorePatterns AND the per-route noindex check. Walking `routes` by hand here
 * would lose both (the plugin deliberately does not expose `head` to user
 * hooks), so noindexed pages would silently come back.
 */
function createSitemapItemsFilter({ maxDropRatio = MAX_DROP_RATIO } = {}) {
  return async function createSitemapItems({ defaultCreateSitemapItems, ...rest }) {
    const items = await defaultCreateSitemapItems(rest);
    if (!items.length) return items;

    const { isExcluded, reasonFor, repoRedirects, liveExclusions } = buildExcluder();
    const kept = [];
    const dropped = [];
    const duplicates = [];
    // Two plugins can generate the same route — src/pages/docs.js and the docs
    // plugin's routeBasePath both claim /support/docs/, and the build warns about
    // it. A sitemap must list each URL once, so keep the first and note the rest.
    const seen = new Set();
    for (const item of items) {
      const route = toRoute(item.url);
      if (isExcluded(route)) {
        dropped.push(item);
      } else if (seen.has(route)) {
        duplicates.push(item);
      } else {
        seen.add(route);
        kept.push(item);
      }
    }

    const ratio = dropped.length / items.length;
    if (ratio > maxDropRatio) {
      throw new Error(
        `[sitemap] Refusing to drop ${dropped.length}/${items.length} URLs ` +
          `(${(ratio * 100).toFixed(1)}% > ${(maxDropRatio * 100).toFixed(0)}% limit). ` +
          'This usually means sitemap-live-exclusions.json recorded a site-wide redirect event. ' +
          'Review that file before building again.'
      );
    }

    console.log(
      `[sitemap] ${kept.length} URLs kept, ${dropped.length} dropped, ${duplicates.length} deduped ` +
        `(${repoRedirects.length} in-repo redirects, ${liveExclusions.length} live exclusions on file).`
    );
    for (const item of dropped) {
      console.log(`[sitemap]   dropped ${toRoute(item.url)} — ${reasonFor(item.url)}`);
    }
    for (const item of duplicates) {
      console.log(`[sitemap]   deduped ${toRoute(item.url)} — route generated more than once`);
    }

    return kept;
  };
}

module.exports = {
  BASE_URL,
  LIVE_EXCLUSIONS_FILE,
  MAX_DROP_RATIO,
  toRoute,
  normalizeRoute,
  findRepoRedirects,
  loadLiveExclusions,
  buildExcluder,
  createSitemapItemsFilter,
};

// `node scripts/sitemap-exclusions.js` — show what the filter would remove.
if (require.main === module) {
  const { repoRedirects, liveExclusions } = buildExcluder();
  console.log(`In-repo client-side redirects (${repoRedirects.length}):`);
  for (const r of repoRedirects) {
    console.log(`  ${r.route.padEnd(56)} ${r.source}${r.target ? ` -> ${r.target}` : ''}`);
  }
  console.log(`\nLive redirect exclusions on file (${liveExclusions.length}):`);
  for (const e of liveExclusions) {
    console.log(`  ${e.route.padEnd(56)} ${e.reason}${e.detected ? ` [${e.detected}]` : ''}`);
  }
}
