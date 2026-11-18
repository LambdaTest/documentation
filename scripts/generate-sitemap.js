#!/usr/bin/env node
/**
 * Generates sitemap.xml (repo root) - a sitemap that lists ONLY the Kane CLI docs.
 *
 * Why this exists: https://www.testmuai.com/sitemap.xml is the main-site
 * sitemap index and the Docusaurus support sitemap lives at
 * /support/sitemap.xml. Both stay as they are. This file is served by
 * Mintlify at https://www.testmuai.com/docs/sitemap.xml and is referenced
 * from the main index and robots.txt.
 *
 * It MUST live at the repo root (next to docs.json, like robots.txt), not in
 * docs/. A root sitemap.xml overrides Mintlify's auto-generated sitemap, which
 * lists pages as /docs/docs/<slug> (non-canonical). A file in docs/ is only
 * served at /docs/docs/sitemap.xml and never replaces the default.
 *
 * The page list comes from the "Kane CLI" group in docs.json, so the sitemap
 * always matches the sidebar. <lastmod> is the last git commit date of each
 * page's source file.
 *
 * Re-run after adding, removing, or editing Kane CLI pages, and commit the
 * regenerated sitemap.xml:
 *
 *   node scripts/generate-sitemap.js
 */

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const DOCS_JSON = path.join(ROOT, 'docs.json');
const OUT_FILE = path.join(ROOT, 'sitemap.xml');

const SITE_ORIGIN = 'https://www.testmuai.com';
// Top-level navigation group that holds the Kane CLI docs.
const GROUP_NAME = 'Kane CLI';

/** Recursively collect page-path strings from a docs.json navigation node. */
function collectPages(node, acc) {
  if (typeof node === 'string') {
    acc.push(node);
  } else if (Array.isArray(node)) {
    for (const child of node) collectPages(child, acc);
  } else if (node && typeof node === 'object') {
    for (const key of ['navigation', 'tabs', 'groups', 'pages', 'anchors']) {
      if (node[key]) collectPages(node[key], acc);
    }
  }
  return acc;
}

/** Find every navigation group whose name is GROUP_NAME. */
function findGroups(node, acc) {
  if (Array.isArray(node)) {
    for (const child of node) findGroups(child, acc);
  } else if (node && typeof node === 'object') {
    if (node.group === GROUP_NAME) {
      acc.push(node);
      return;
    }
    for (const key of ['navigation', 'tabs', 'groups', 'pages', 'anchors']) {
      if (node[key]) findGroups(node[key], acc);
    }
  }
  return acc;
}

function resolveSourceFile(pagePath) {
  for (const ext of ['.mdx', '.md']) {
    const abs = path.join(ROOT, pagePath + ext);
    if (fs.existsSync(abs)) return abs;
  }
  return null;
}

/** Frontmatter flag check (shallow). */
function frontmatterFlag(raw, key) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return false;
  const re = new RegExp(`^${key}:\\s*["']?true["']?\\s*$`, 'im');
  return re.test(match[1]);
}

/** Last commit date (ISO date) for a file; falls back to file mtime. */
function lastModified(abs) {
  try {
    const out = execFileSync('git', ['log', '-1', '--format=%cI', '--', abs], {
      cwd: ROOT,
      encoding: 'utf8',
    }).trim();
    if (out) return out.slice(0, 10);
  } catch (_) {
    /* not a git checkout - fall through */
  }
  return fs.statSync(abs).mtime.toISOString().slice(0, 10);
}

function escapeXml(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function main() {
  const docsJson = JSON.parse(fs.readFileSync(DOCS_JSON, 'utf8'));
  const groups = findGroups(docsJson.navigation, []);
  if (!groups.length) {
    console.error(`No "${GROUP_NAME}" group found in docs.json.`);
    process.exit(1);
  }

  const pagePaths = [];
  const seen = new Set();
  for (const group of groups) {
    for (const p of collectPages(group.pages, [])) {
      if (!/^docs\//.test(p) || seen.has(p)) continue;
      seen.add(p);
      pagePaths.push(p);
    }
  }

  const urls = [];
  const skipped = [];
  for (const pagePath of pagePaths) {
    const abs = resolveSourceFile(pagePath);
    if (!abs) {
      skipped.push(`${pagePath} (no source file)`);
      continue;
    }
    const raw = fs.readFileSync(abs, 'utf8');
    if (frontmatterFlag(raw, 'noindex') || frontmatterFlag(raw, 'hidden')) {
      skipped.push(`${pagePath} (noindex/hidden)`);
      continue;
    }
    // No trailing slash: production 308-redirects "/slug/" to "/slug" and the
    // page canonical is the slash-less URL.
    urls.push({ loc: `${SITE_ORIGIN}/${pagePath}`, lastmod: lastModified(abs) });
  }

  const body = urls
    .map(
      ({ loc, lastmod }) =>
        `  <url>\n    <loc>${escapeXml(loc)}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`
    )
    .join('\n');
  const xml =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    body +
    '\n</urlset>\n';

  fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
  fs.writeFileSync(OUT_FILE, xml, 'utf8');

  console.log(`Generated sitemap.xml with ${urls.length} Kane CLI URLs.`);
  if (skipped.length) {
    console.warn(`Skipped ${skipped.length}:\n   ${skipped.join('\n   ')}`);
  }
}

main();
