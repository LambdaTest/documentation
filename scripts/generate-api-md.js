/**
 * Generates plain-Markdown copies of the API reference for the "View as
 * Markdown" item of CopyPageButton, which opens `<page URL>.md`.
 *
 * Output (gitignored, regenerated on every build via prestart / prebuild):
 *   static/api-doc.md                                → /support/api-doc.md
 *       index of every API and endpoint
 *   static/api-doc/<api>/<group>/<endpoint>.md       → /support/api-doc/<api>/<group>/<endpoint>.md
 *       one file per endpoint page
 *
 * Reads src/data/api/all-apis.json, so run scripts/build-api-data.js first.
 *
 * Usage: node scripts/generate-api-md.js
 */

'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DATA_FILE = path.join(ROOT, 'src', 'data', 'api', 'all-apis.json');
const STATIC_DIR = path.join(ROOT, 'static');
const INDEX_FILE = path.join(STATIC_DIR, 'api-doc.md');
const OUT_DIR = path.join(STATIC_DIR, 'api-doc');

const SITE = 'https://www.testmuai.com';
const API_BASE = `${SITE}/support/api-doc`;
const LLMS_TXT_URL = `${SITE}/support/docs/llms.txt`;
const MD_DIRECTIVE = `> For the full site index for AI agents, see [llms.txt](${LLMS_TXT_URL}).`;

// Must match src/component/ApiReference/utils.js and scripts/generate-api-pages.js.
function slugify(str) {
  return str
    .toLowerCase()
    .replace(/\.$/, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/** Escape a value for a Markdown table cell. */
function cell(value) {
  return String(value == null ? '' : value)
    .replace(/\r?\n+/g, ' ')
    .replace(/\|/g, '\\|')
    .trim();
}

function paramTable(params, withLocation) {
  const head = withLocation
    ? '| Name | In | Type | Required | Description |\n| --- | --- | --- | --- | --- |'
    : '| Name | Type | Required | Description |\n| --- | --- | --- | --- |';
  const rows = params.map((p) => {
    const cols = [`\`${cell(p.name)}\``];
    if (withLocation) cols.push(cell(p.in));
    cols.push(cell(p.type), p.required ? 'Yes' : 'No', cell(p.description));
    return `| ${cols.join(' | ')} |`;
  });
  return [head, ...rows].join('\n');
}

function jsonBlock(value) {
  const text = typeof value === 'string' ? value : JSON.stringify(value, null, 2);
  // Use a fence longer than any backtick run in the content.
  const longest = Math.max(2, ...(text.match(/`+/g) || []).map((s) => s.length));
  const fence = '`'.repeat(longest + 1);
  return `${fence}json\n${text}\n${fence}`;
}

function endpointMarkdown(api, groupName, ep, pageUrl) {
  const out = [];
  out.push(`# ${ep.name.replace(/\.$/, '')}`);
  out.push(MD_DIRECTIVE);
  out.push(`API: ${api.name}${groupName !== api.name ? ` › ${groupName}` : ''}  \nSource: ${pageUrl}`);
  if (ep.deprecated) out.push('> **Deprecated:** this endpoint is deprecated.');
  out.push('```http\n' + `${ep.method} ${api.baseUrl || ''}${ep.path}` + '\n```');

  if (api.servers && api.servers.length > 1) {
    out.push(
      '## Servers\n\n' +
        api.servers.map((s) => `- \`${s.url}\`${s.description ? ` (${s.description})` : ''}`).join('\n'),
    );
  }

  if (ep.description) out.push(ep.description.trim());

  if (ep.auth && ep.auth.length) {
    out.push('## Authentication\n\n' + paramTable(ep.auth, true));
  }
  if (ep.pathParams && ep.pathParams.length) {
    out.push('## Path parameters\n\n' + paramTable(ep.pathParams, false));
  }
  if (ep.queryParams && ep.queryParams.length) {
    out.push('## Query parameters\n\n' + paramTable(ep.queryParams, false));
  }

  const body = ep.requestBody;
  if (body) {
    const parts = ['## Request body'];
    if (body.contentType) parts.push(`Content type: \`${body.contentType}\``);
    if (body.description) parts.push(body.description.trim());
    if (body.variants && body.variants.length) {
      for (const v of body.variants) {
        parts.push(`### ${v.name}`);
        if (v.properties && v.properties.length) parts.push(paramTable(v.properties, false));
        if (v.example !== undefined) parts.push(jsonBlock(v.example));
      }
    } else {
      if (body.properties && body.properties.length) parts.push(paramTable(body.properties, false));
      if (body.example !== undefined) parts.push('Example:\n\n' + jsonBlock(body.example));
    }
    out.push(parts.join('\n\n'));
  }

  const codes = Object.keys(ep.responses || {});
  if (codes.length) {
    const parts = ['## Responses'];
    for (const code of codes) {
      const r = ep.responses[code] || {};
      parts.push(`### ${code}${r.description ? ` — ${cell(r.description)}` : ''}`);
      if (r.example !== undefined) parts.push(jsonBlock(r.example));
    }
    out.push(parts.join('\n\n'));
  }

  return out.join('\n\n') + '\n';
}

function main() {
  if (!fs.existsSync(DATA_FILE)) {
    console.error(`❌ ${path.relative(ROOT, DATA_FILE)} not found. Run scripts/build-api-data.js first.`);
    process.exit(1);
  }
  const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));

  // Start clean so removed endpoints do not leave stale files behind.
  fs.rmSync(OUT_DIR, { recursive: true, force: true });

  const index = [
    '# TestMu AI API Reference',
    MD_DIRECTIVE,
    `Source: ${API_BASE}/`,
    'Every endpoint below links to its page and to a plain-Markdown copy (append `.md` to any endpoint URL).',
  ];
  let count = 0;

  for (const api of data.apis) {
    const apiSlug = slugify(api.name);
    const section = [`## ${api.name}`];
    if (api.baseUrl) section.push(`Base URL: \`${api.baseUrl}\``);

    for (const group of api.groups) {
      const groupName = group.noHeading ? api.name : group.name;
      const groupSlug = slugify(groupName);
      const items = [];

      for (const ep of group.endpoints || []) {
        const epSlug = slugify(ep.name);
        const rel = `${apiSlug}/${groupSlug}/${epSlug}`;
        const pageUrl = `${API_BASE}/${rel}/`;
        const file = path.join(OUT_DIR, apiSlug, groupSlug, `${epSlug}.md`);
        fs.mkdirSync(path.dirname(file), { recursive: true });
        fs.writeFileSync(file, endpointMarkdown(api, groupName, ep, pageUrl), 'utf8');
        items.push(
          `- [${ep.name.replace(/\.$/, '')}](${pageUrl}) — \`${ep.method} ${ep.path}\` ([Markdown](${API_BASE}/${rel}.md))`,
        );
        count++;
      }

      if (!items.length) continue;
      if (groupName !== api.name) section.push(`### ${groupName}`);
      section.push(items.join('\n'));
    }
    index.push(section.join('\n\n'));
  }

  fs.writeFileSync(INDEX_FILE, index.join('\n\n') + '\n', 'utf8');
  console.log(`✅ Generated API Markdown: static/api-doc.md + ${count} endpoint files.`);
}

main();
