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

/** Resolve the canonical public URL for a doc from its frontmatter. */
function resolveUrl(data, fileName) {
  if (data.url) return normalizeUrl(data.url);
  if (data.canonical) return normalizeUrl(data.canonical);
  const fileBase = fileName.replace(/\.mdx?$/, '');
  const base = (data.slug || data.id || fileBase).replace(/^\//, '').replace(/\/$/, '');
  return normalizeUrl(`${DOCS_BASE}/${base || fileBase}/`);
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

    const title = (data.title || file.replace(/\.mdx?$/, '')).trim();
    const description = (data.description || '').trim();
    const url = resolveUrl(data, file);
    entries.push({ title, description, url });
  }

  entries.sort((a, b) => a.title.localeCompare(b.title));

  const lines = [
    `# ${TITLE}`,
    '',
    `> ${SUMMARY}`,
    '',
    'A plain-Markdown version of any page is available by appending `.md` to its URL.',
    '',
    '## Docs',
    '',
  ];

  for (const { title, description, url } of entries) {
    lines.push(description ? `- [${title}](${url}): ${description}` : `- [${title}](${url})`);
  }

  fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
  fs.writeFileSync(OUT_FILE, lines.join('\n') + '\n', 'utf8');

  console.log(`✅ Generated llms.txt with ${entries.length} doc entries at static/docs/llms.txt.`);
}

main();
