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

const DOCS_DIR = path.join(__dirname, '..', 'docs');
const OUT_FILE = path.join(__dirname, '..', 'static', 'docs', 'llms.txt');

const SITE_ORIGIN = 'https://www.testmuai.com';
const DOCS_BASE = `${SITE_ORIGIN}/support/docs`;

const TITLE = 'TestMu AI (Formerly LambdaTest) Documentation';
const SUMMARY =
  'Documentation for TestMu AI (formerly LambdaTest) — cross-browser and ' +
  'real-device testing, automation, AI agents, accessibility, analytics, and ' +
  'integrations.';

/** Parse the leading `--- ... ---` YAML frontmatter block (shallow key: value). */
function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
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

/**
 * Resolve the public HTML page URL for a doc (matches sitemap format).
 * Docusaurus uses trailingSlash: true, so URLs end with /.
 */
function resolveHtmlUrl(data, fileName) {
  const fromFrontmatter = (data.canonical || data.url || '').trim();
  if (fromFrontmatter) {
    const url = fromFrontmatter.endsWith('/') ? fromFrontmatter : `${fromFrontmatter}/`;
    return normalizeUrl(url);
  }
  const fileBase = fileName.replace(/\.mdx?$/, '');
  const base = data.slug || data.id || fileBase;
  const slug =
    base.replace(/^\//, '').replace(/\/$/, '').split('/').pop() || fileBase;
  return normalizeUrl(`${DOCS_BASE}/${slug}/`);
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

    const title = toAscii((data.title || file.replace(/\.mdx?$/, '')).trim());
    const description = toAscii((data.description || '').trim());
    const url = resolveHtmlUrl(data, file);
    const mdUrl = resolveMdUrl(data, file);
    entries.push({ title, description, url, mdUrl });
  }

  entries.sort((a, b) => a.title.localeCompare(b.title));

  const lines = [
    `# ${toAscii(TITLE)}`,
    '',
    `> ${toAscii(SUMMARY)}`,
    '',
    'Plain-Markdown copies are served at `/support/docs/<slug>.md` for each page below.',
    '',
    'Sitemap: https://www.testmuai.com/support/sitemap.xml',
    '',
    '## Agent skill',
    '',
    `- [TestMu AI Documentation Skill](${DOCS_BASE}/SKILL.md): Product-specific operating guidance for AI agents (agentskills.io format) - how to discover docs, choose the right product area, and follow common testing workflows.`,
    '',
    '## Docs',
    '',
  ];

  for (const { title, description, url, mdUrl } of entries) {
    const link = `- [${title}](${url}) ([.md](${mdUrl}))`;
    lines.push(description ? `${link}: ${description}` : link);
  }

  fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
  fs.writeFileSync(OUT_FILE, lines.join('\n') + '\n', 'utf8');

  console.log(`✅ Generated llms.txt with ${entries.length} doc entries at static/docs/llms.txt.`);
}

main();
