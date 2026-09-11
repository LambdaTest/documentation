/**
 * Generates the site's llms.txt index (https://llmstxt.org/) from the docs.
 *
 * For every source doc in /docs this reads the YAML frontmatter (title,
 * description, url/slug) and emits a single Markdown index at
 * /static/docs/llms.txt, served at <baseUrl>/docs/llms.txt (i.e.
 * https://www.testmuai.com/support/docs/llms.txt).
 *
 * The per-page Markdown blockquote (scripts/generate-static-md.js) points AI
 * agents to this file, so it must exist and list the documentation.
 *
 * Output is regenerated on every build (wired into the `prestart` / `prebuild`
 * npm scripts) — no manual step required.
 */

const fs = require('fs');
const path = require('path');

const {
  GROUPS,
  OTHER,
  GROUP_ORDER,
  buildGroupMap,
  groupFor,
  lastSegment,
} = require('./lib/doc-groups');

const DOCS_DIR = path.join(__dirname, '..', 'docs');
const STATIC_DOCS_DIR = path.join(__dirname, '..', 'static', 'docs');
const OUT_FILE = path.join(STATIC_DOCS_DIR, 'llms.txt');
const FULL_FILE = path.join(STATIC_DOCS_DIR, 'llms-full.txt');
const CHILD_DIR = path.join(STATIC_DOCS_DIR, 'llms');
const OPENAPI_MD = path.join(STATIC_DOCS_DIR, 'OpenAPI.md');

// Files in static/docs/ that are served but are not doc pages, so the
// served-vs-indexed comparison below must ignore them.
const NON_DOC_MD = new Set(['OpenAPI.md', 'SKILL.md']);

// Surfaces as an annotation in the GitHub Actions run summary instead of a line
// buried in a 10-minute build log.
const warn = (message) =>
  console.warn(process.env.GITHUB_ACTIONS ? `::warning::${message}` : message);

const SITE_ORIGIN = 'https://www.testmuai.com';
const DOCS_BASE = `${SITE_ORIGIN}/support/docs`;

const TITLE = 'TestMu AI (Formerly LambdaTest) Documentation';
const SUMMARY =
  'Documentation for TestMu AI (formerly LambdaTest) — cross-browser and ' +
  'real-device testing, automation, AI agents, accessibility, analytics, and ' +
  'integrations.';

/** Parse the leading `--- ... ---` YAML frontmatter block (shallow key: value). */
function parseFrontmatter(raw) {
  const match = raw.replace(/^﻿/, '').match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) return {};

  const data = {};
  for (const line of match[1].split(/\r?\n/)) {
    const kv = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!kv) continue; // skip nested / list lines — we only need top-level keys
    let value = kv[2].trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    data[kv[1]] = value;
  }
  return data;
}

/** Collapse accidental duplicate slashes in a URL path (keeps the // in the scheme). */
function normalizeUrl(url) {
  return url.replace(/([^:])\/{2,}/g, '$1/');
}

/** Resolve the plain-Markdown URL (matches generate-static-md.js output). */
function resolveMdUrl(data, fileName) {
  const fileBase = fileName.replace(/\.mdx?$/, '');
  const base = data.slug || data.id || fileBase;
  const slug =
    base.replace(/^\//, '').replace(/\/$/, '').split('/').pop() || fileBase;
  return normalizeUrl(`${DOCS_BASE}/${slug}.md`);
}

// Map common typographic (non-ASCII) punctuation to ASCII equivalents. Keeps
// the output plain-ASCII so it can't render as mojibake (e.g. "â€”") when a
// server/tool serves the file with the wrong charset.
const CHAR_MAP = {
  '\u2018': "'", '\u2019': "'", '\u201A': "'", '\u201B': "'", // ‘ ’ ‚ ‛
  '\u201C': '"', '\u201D': '"', '\u201E': '"', '\u201F': '"', // “ ” „ ‟
  '\u2013': '-', '\u2014': '-', '\u2011': '-', '\u2012': '-', '\u2015': '-', // – — ‑ ‒ ―
  '\u2026': '...', // …
  '\u2022': '-', '\u00B7': '-', // • ·
  '\u00A0': ' ', // non-breaking space
  '\u2039': '<', '\u203A': '>', '\u00AB': '<<', '\u00BB': '>>', // ‹ › « »
  '\u2122': '(TM)', '\u00AE': '(R)', '\u00A9': '(C)', // ™ ® ©
  '\u2192': '->', '\u2190': '<-', // → ←
};

/** Convert a string to plain ASCII, mapping known punctuation and stripping the rest. */
// A few descriptions are stored with HTML entities in the frontmatter itself;
// an agent reading the index should see the character, not the entity.
function decodeEntities(str) {
  return str
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&'); // last, so "&amp;quot;" does not double-decode
}

function toAscii(str) {
  return str
    .replace(
      /[\u2018\u2019\u201A\u201B\u201C\u201D\u201E\u201F\u2013\u2014\u2011\u2012\u2015\u2026\u2022\u00B7\u00A0\u2039\u203A\u00AB\u00BB\u2122\u00AE\u00A9\u2192\u2190]/g,
      (m) => CHAR_MAP[m] || ''
    )
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '') // strip combining diacritics
    .replace(/[^\x00-\x7F]/g, '') // drop any remaining non-ASCII
    .replace(/[ \t]{2,}/g, ' ')
    .trim();
}

function main() {
  const files = fs
    .readdirSync(DOCS_DIR)
    .filter((f) => /\.mdx?$/.test(f))
    .sort();

  const entries = [];
  for (const file of files) {
    const raw = fs
      .readFileSync(path.join(DOCS_DIR, file), 'utf8')
      .replace(/^\uFEFF/, '');
    const data = parseFrontmatter(raw);
    if (String(data.draft).toLowerCase() === 'true') continue; // skip drafts

    // Square brackets inside the link text break markdown link parsing
    // (e.g. "Bitrise CI/CD Step [XCUITest]"), so fold them to parentheses.
    const fileBase = file.replace(/\.mdx?$/, '');
    const title = toAscii(decodeEntities(data.title || fileBase).trim())
      .replace(/\[/g, '(')
      .replace(/\]/g, ')');
    const description = toAscii(decodeEntities(data.description || '').trim());
    const mdUrl = resolveMdUrl(data, file);
    const slug = mdUrl.slice(DOCS_BASE.length + 1).replace(/\.md$/, '');
    // The sidebar tree references docs by their Docusaurus id (frontmatter `id`,
    // else the file name), which differs from the URL slug for ~200 docs. Keep
    // both: the id resolves the sidebar claim, the slug is what the index links.
    const docId = data.id || fileBase;
    entries.push({ title, description, mdUrl, slug, docId });
  }

  // Assign every entry to exactly one product group. The sidebar tree is the
  // authored taxonomy; slug patterns catch docs no sidebar references; the
  // "other" group guarantees nothing is dropped.
  const groupMap = buildGroupMap();
  for (const entry of entries) {
    entry.group = groupFor(entry.docId, entry.slug, groupMap);
  }

  // Every sidebar id should correspond to a parsed doc. An unmatched id means a
  // claim that can never fire (a stale sidebar entry, or an id/slug mix-up like
  // the one this lookup used to have), so the doc silently falls to patterns.
  const parsedIds = new Set(entries.map((e) => lastSegment(e.docId)));
  const unmatchedSidebarIds = [...groupMap.keys()].filter((id) => !parsedIds.has(id));
  if (unmatchedSidebarIds.length) {
    warn(
      `llms.txt: ${unmatchedSidebarIds.length} sidebar doc id(s) match no parsed doc, so their sidebar grouping never applies: ` +
        unmatchedSidebarIds.slice(0, 10).join(', ') +
        (unmatchedSidebarIds.length > 10 ? ', ...' : '')
    );
  }

  // ---- guards, before anything is written ---------------------------------
  // Fail only on conditions that mean the index itself is wrong. Taxonomy
  // problems only warn, so a sidebar hiccup can never block a deploy.
  if (entries.length === 0) {
    console.error('llms.txt: parsed 0 docs from docs/. Refusing to write an empty index.');
    process.exit(1);
  }

  // generate-static-md.js has already run (prebuild order), so every link about
  // to be emitted must resolve to a served static/docs/<slug>.md. A miss means
  // the two generators disagree about a slug and the index would ship a dead
  // link to every agent that reads it.
  const dead = entries.filter(
    (e) => !fs.existsSync(path.join(STATIC_DOCS_DIR, `${e.slug}.md`))
  );
  if (dead.length) {
    console.error(
      `llms.txt: ${dead.length} index link(s) have no static/docs/<slug>.md behind them: ` +
        dead.slice(0, 10).map((e) => e.slug).join(', ') +
        (dead.length > 10 ? ', ...' : '')
    );
    process.exit(1);
  }

  // The reverse direction is only ever stale leftovers (a doc was renamed or
  // removed and its old .md copy is still checked in), so it warns.
  const indexedSlugs = new Set(entries.map((e) => e.slug));
  const stale = fs
    .readdirSync(STATIC_DOCS_DIR)
    .filter(
      (f) => f.endsWith('.md') && !NON_DOC_MD.has(f) && !indexedSlugs.has(f.replace(/\.md$/, ''))
    );
  if (stale.length) {
    warn(
      `llms.txt: ${stale.length} served static/docs/*.md file(s) have no source doc and are not indexed (stale leftovers): ${stale.join(', ')}`
    );
  }

  entries.sort((a, b) => a.title.localeCompare(b.title));

  const ALL_GROUPS = [...GROUPS, OTHER];
  const byGroup = new Map(GROUP_ORDER.map((k) => [k, []]));
  for (const entry of entries) byGroup.get(entry.group).push(entry);

  // Groups with no docs are skipped entirely rather than shipping empty files.
  const shipping = ALL_GROUPS.filter((g) => byGroup.get(g.key).length > 0);

  const entryLine = ({ title, description, mdUrl }) => {
    const link = `- [${title}](${mdUrl})`;
    return description ? `${link}: ${description}` : link;
  };

  const crossLinks = (selfKey) => {
    const out = [];
    if (selfKey !== 'index') out.push(`Docs index: ${DOCS_BASE}/llms.txt`);
    if (selfKey !== 'full') out.push(`All docs: ${DOCS_BASE}/llms-full.txt`);
    out.push(
      `Site index: ${SITE_ORIGIN}/llms.txt`,
      `All site pages: ${SITE_ORIGIN}/llms-full.txt`,
      `Agent instructions: ${SITE_ORIGIN}/agents.md`,
      'Sitemap: https://www.testmuai.com/support/sitemap.xml'
    );
    return out;
  };

  fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
  fs.mkdirSync(CHILD_DIR, { recursive: true });

  // ---- parent index: a short router, not a corpus ------------------------
  const index = [
    `# ${toAscii(TITLE)}`,
    '',
    `> ${toAscii(SUMMARY)}`,
    '',
    'This is a short index. Fetch the product index you need rather than the whole corpus.',
    '',
    'Each product index below lists its pages with links to the plain-Markdown copy at `/support/docs/<slug>.md`.',
    '',
    ...crossLinks('index'),
  ];

  if (fs.existsSync(OPENAPI_MD)) {
    index.push(`OpenAPI: ${DOCS_BASE}/OpenAPI.md`);
  }

  index.push(
    '',
    '## Agent skill',
    '',
    `- [TestMu AI Documentation Skill](${DOCS_BASE}/SKILL.md): Product-specific operating guidance for AI agents (agentskills.io format) - how to discover docs, choose the right product area, and follow common testing workflows.`,
    '',
    '## Product Indexes',
    ''
  );

  for (const group of shipping) {
    const n = byGroup.get(group.key).length;
    index.push(
      `- [${toAscii(group.name)}](${DOCS_BASE}/llms/${group.key}.txt): ${n} documents. ${toAscii(group.scope)}`
    );
  }

  index.push(
    '',
    '## Complete Docs List',
    '',
    `- [All documentation pages](${DOCS_BASE}/llms-full.txt): every documentation page in one file with title, description, and URL.`
  );

  fs.writeFileSync(OUT_FILE, index.join('\n') + '\n', 'utf8');

  // ---- one child index per product group ---------------------------------
  for (const group of shipping) {
    const groupEntries = byGroup.get(group.key);
    const child = [
      `# ${toAscii(TITLE)}: ${toAscii(group.name)}`,
      '',
      `> ${toAscii(group.summary)}`,
      '',
      'Each link below points to the plain-Markdown copy at `/support/docs/<slug>.md`.',
      '',
      ...crossLinks(group.key),
      '',
      `## ${toAscii(group.name)}`,
      '',
      ...groupEntries.map(entryLine),
      '',
      '## Other Product Indexes',
      '',
    ];
    for (const sibling of shipping) {
      if (sibling.key === group.key) continue;
      child.push(
        `- [${toAscii(sibling.name)}](${DOCS_BASE}/llms/${sibling.key}.txt): ${byGroup.get(sibling.key).length} documents.`
      );
    }
    fs.writeFileSync(
      path.join(CHILD_DIR, `${group.key}.txt`),
      child.join('\n') + '\n',
      'utf8'
    );
  }

  // ---- complete list: nothing served today may be lost --------------------
  const full = [
    `# ${toAscii(TITLE)}: Complete List`,
    '',
    `> ${toAscii(SUMMARY)}`,
    '',
    'Every documentation page, grouped by product. Each link points to the plain-Markdown copy at `/support/docs/<slug>.md`.',
    '',
    ...crossLinks('full'),
  ];
  for (const group of shipping) {
    full.push('', `## ${toAscii(group.name)}`, '', ...byGroup.get(group.key).map(entryLine));
  }
  fs.writeFileSync(FULL_FILE, full.join('\n') + '\n', 'utf8');

  // A swollen catch-all means the taxonomy drifted, not that the index is
  // wrong, so it is a warning: fix the patterns, do not block the deploy.
  const otherCount = byGroup.get(OTHER.key).length;
  const otherPct = entries.length ? Math.round((otherCount / entries.length) * 100) : 0;
  if (otherPct > 15) {
    warn(
      `llms.txt: "${OTHER.name}" holds ${otherCount}/${entries.length} entries (${otherPct}%). Extend the slug patterns in scripts/lib/doc-groups.js rather than shipping a junk drawer.`
    );
  }

  const indexBytes = Buffer.byteLength(index.join('\n') + '\n', 'utf8');
  console.log(
    `Generated docs llms.txt: ${entries.length} docs across ${shipping.length} product indexes.`
  );
  console.log(
    `  index ${indexBytes} bytes, children in static/docs/llms/, complete list in static/docs/llms-full.txt (other: ${otherCount}, ${otherPct}%).`
  );
}

main();
