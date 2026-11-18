/**
 * Generates the Kane CLI llms.txt index (https://llmstxt.org/) for the
 * Mintlify docs build.
 *
 * Mirrors the Docusaurus setup on the testmuCom branch
 * (scripts/generate-llms-txt.js) but adapted for Mintlify:
 *
 *   - The page list is driven by docs.json navigation, NOT a readdir of
 *     /docs. The /docs folder on this branch also contains non-Kane-CLI
 *     files, so globbing would pull in pages that are not part of this site.
 *   - Links point at Mintlify's native plain-Markdown copies at
 *     /docs/<slug>.md (Mintlify serves these automatically), so there is no
 *     separate static-Markdown generator to run.
 *   - Output is written to /docs/llms.txt, which Mintlify serves at
 *     https://www.testmuai.com/docs/llms.txt — the exact URL that Mintlify's
 *     own per-page .md files already point agents to.
 *
 * Mintlify's cloud build has no prebuild hook, so this is NOT run
 * automatically. Re-run it whenever the Kane CLI nav or page frontmatter
 * changes, and commit the regenerated docs/llms.txt:
 *
 *   node scripts/generate-llms-txt.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DOCS_JSON = path.join(ROOT, 'docs.json');
const OUT_FILE = path.join(ROOT, 'docs', 'llms.txt');

const SITE_ORIGIN = 'https://www.testmuai.com';
const SITEMAP_URL = `${SITE_ORIGIN}/sitemap.xml`;
// The skill ships in the kane-cli repository; there is no /docs/SKILL.md copy.
const SKILL_URL =
  'https://raw.githubusercontent.com/LambdaTest/kane-cli/main/skill-installer/skills/SKILL.md';
const AGENTS_MD_URL = `${SITE_ORIGIN}/kane-cli-agent/AGENTS.md`;

const TITLE = 'Kane CLI Documentation';
const SUMMARY =
  'Kane CLI by TestMu AI (formerly LambdaTest) - an AI-powered command-line ' +
  'tool that runs browser and native mobile end-to-end (E2E) tests in natural ' +
  'language, from your terminal, IDE, or CI pipeline.';

/** Parse the leading `--- ... ---` YAML frontmatter block (shallow key: value). */
function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) return {};

  const data = {};
  for (const line of match[1].split(/\r?\n/)) {
    const kv = line.match(/^([A-Za-z0-9_"-]+):\s*(.*)$/);
    if (!kv) continue; // skip nested / list lines — we only need top-level keys
    let key = kv[1].replace(/^["']|["']$/g, '');
    let value = kv[2].trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    data[key] = value;
  }
  return data;
}

// Map common typographic (non-ASCII) punctuation to ASCII equivalents, so the
// output can't render as mojibake when served with the wrong charset.
const CHAR_MAP = {
  '‘': "'", '’': "'", '‚': "'", '‛': "'",
  '“': '"', '”': '"', '„': '"', '‟': '"',
  '–': '-', '—': '-', '‑': '-', '‒': '-', '―': '-',
  '…': '...',
  '•': '-', '·': '-',
  ' ': ' ',
  '‹': '<', '›': '>', '«': '<<', '»': '>>',
  '™': '(TM)', '®': '(R)', '©': '(C)',
  '→': '->', '←': '<-',
};

/** Convert a string to plain ASCII, mapping known punctuation and stripping the rest. */
function toAscii(str) {
  return str
    .replace(
      /[‘’‚‛“”„‟–—‑‒―…•· ‹›«»™®©→←]/g,
      (m) => CHAR_MAP[m] || ''
    )
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^\x00-\x7F]/g, '')
    .replace(/[ \t]{2,}/g, ' ')
    .trim();
}

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

/** Resolve the on-disk source file for a docs.json page path. */
function resolveSourceFile(pagePath) {
  for (const ext of ['.mdx', '.md']) {
    const abs = path.join(ROOT, pagePath + ext);
    if (fs.existsSync(abs)) return abs;
  }
  return null;
}

function main() {
  const docsJson = JSON.parse(fs.readFileSync(DOCS_JSON, 'utf8'));

  // Only page strings that live under docs/ are real content pages; external
  // anchors (Status, Blog, ...) are absolute URLs and get filtered out here.
  const pagePaths = [];
  const seen = new Set();
  for (const p of collectPages(docsJson.navigation, [])) {
    if (!/^docs\//.test(p)) continue;
    if (seen.has(p)) continue;
    seen.add(p);
    pagePaths.push(p);
  }

  const entries = [];
  const missing = [];
  for (const pagePath of pagePaths) {
    const abs = resolveSourceFile(pagePath);
    if (!abs) {
      missing.push(pagePath);
      continue;
    }
    const raw = fs.readFileSync(abs, 'utf8').replace(/^﻿/, '');
    const data = parseFrontmatter(raw);
    if (String(data.draft).toLowerCase() === 'true') continue;

    const title = toAscii(
      (data.title || data.sidebarTitle || path.basename(pagePath)).trim()
    );
    const description = toAscii((data.description || '').trim());
    const mdUrl = `${SITE_ORIGIN}/${pagePath}.md`;
    entries.push({ title, description, mdUrl });
  }

  const lines = [
    `# ${toAscii(TITLE)}`,
    '',
    `> ${toAscii(SUMMARY)}`,
    '',
    'Each link below points to the plain-Markdown copy at `/docs/<slug>.md`.',
    '',
    `Sitemap: ${SITEMAP_URL}`,
    '',
    '## Agent skill',
    '',
    `- [Kane CLI Agent Skill](${SKILL_URL}): Instructions that teach an AI coding agent how to use kane-cli - when to invoke it, how to build the command, how to read the NDJSON output, and how to diagnose a failed run.`,
    `- [Kane CLI AGENTS.md for coding agents](${AGENTS_MD_URL}): The full instruction file for agents that read AGENTS.md, such as Cursor and GitHub Copilot.`,
    '',
    '## Docs',
    '',
  ];

  for (const { title, description, mdUrl } of entries) {
    const link = `- [${title}](${mdUrl})`;
    lines.push(description ? `${link}: ${description}` : link);
  }

  fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
  fs.writeFileSync(OUT_FILE, lines.join('\n') + '\n', 'utf8');

  console.log(
    `✅ Generated docs/llms.txt with ${entries.length} Kane CLI doc entries.`
  );
  if (missing.length) {
    console.warn(
      `⚠️  ${missing.length} nav page(s) had no source file and were skipped:\n   ` +
        missing.join('\n   ')
    );
  }
}

main();
