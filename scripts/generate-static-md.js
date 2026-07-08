/**
 * Generates a plain-Markdown copy of every doc for the "View as Markdown" /
 * "Copy page as Markdown for LLMs" feature (see CopyPageButton).
 *
 * For each source doc in /docs, this:
 *   1. Reads the YAML frontmatter to resolve the public slug.
 *   2. Strips frontmatter, MDX imports/exports, JSX/HTML tags and Docusaurus
 *      admonition fences to produce clean, LLM-friendly Markdown.
 *   3. Writes the result to /static/docs/<slug>.md so it is served at
 *      <baseUrl>/docs/<slug>.md alongside the rendered page.
 *
 * The output files are gitignored and regenerated on every build (wired into
 * the `prestart` / `prebuild` npm scripts), so adding a new doc automatically
 * produces its Markdown export — no manual step required.
 *
 * Usage:
 *   node scripts/generate-static-md.js                 # all docs
 *   node scripts/generate-static-md.js docs/foo.md ... # only the given files
 */

const fs = require('fs');
const path = require('path');

const DOCS_DIR = path.join(__dirname, '..', 'docs');
const OUT_DIR = path.join(__dirname, '..', 'static', 'docs');

// llms.txt is served by this docs site under the /support/ baseUrl.
const LLMS_TXT_URL = 'https://www.testmuai.com/support/docs/llms.txt';

// Agent-facing directive inserted near the top of every generated Markdown file
// so LLMs/crawlers can discover the machine-readable index.
const MD_DIRECTIVE = `> For the full site index for AI agents, see [llms.txt](${LLMS_TXT_URL}).`;

/** Parse the leading `--- ... ---` YAML frontmatter block (shallow key: value). */
function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) return { data: {}, body: raw };

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
  return { data, body: raw.slice(match[0].length) };
}

/** Resolve the on-disk output name (matching the URL slug) for a doc. */
function resolveSlug(data, fileName) {
  const fileBase = fileName.replace(/\.mdx?$/, '');
  const base = data.slug || data.id || fileBase;
  const name = base
    .replace(/^\//, '')
    .replace(/\/$/, '')
    .split('/')
    .pop();
  // Root slugs (e.g. "/") collapse to an empty name — fall back to the filename.
  return name || fileBase;
}

const BRAND_NAME = 'TestMu AI';
const BRAND_URL = 'https://testmuai.com';

/** Convert MDX/Docusaurus-flavoured Markdown into clean, portable Markdown. */
function toPlainMarkdown(body) {
  // 1. Shield fenced code blocks (with any leading indent) so later transforms
  //    never touch their content.
  const codeBlocks = [];
  body = body.replace(/^[ \t]*```[\s\S]*?```/gm, (block) => {
    codeBlocks.push(block.replace(/^[ \t]+/gm, '')); // de-indent nested fences
    return `\u0000CODE${codeBlocks.length - 1}\u0000`;
  });

  // 1b. Remove HTML/MDX comments (code blocks are already shielded).
  body = body.replace(/<!--[\s\S]*?-->/g, '');

  // 2. Resolve inline brand components before any tag stripping so nested tags
  //    inside attributes (e.g. alt="... <BrandName /> ...") don't break parsing.
  body = body.replace(/<BrandName\s*\/>/g, BRAND_NAME);
  body = body.replace(/<BrandName\s*>[\s\S]*?<\/BrandName>/g, BRAND_NAME);
  body = body.replace(/\{`?\$\{BRAND_URL\}`?\}/g, BRAND_URL);
  body = body.replace(/\{BRAND_URL\}/g, BRAND_URL);

  // 3. Drop structural JSX/HTML blocks together with their content.
  body = body.replace(/<(script|style|head|nav)\b[\s\S]*?<\/\1>/gi, '');
  body = body.replace(/<(script|style|head|nav)\b[^>]*\/>/gi, '');

  // 4. Turn "card" components (multi-line, self-closing) into heading + text.
  body = body.replace(/<([A-Za-z][\w]*[Cc]ard)\b([\s\S]*?)\/>/g, (full, name, attrs) => {
    const heading =
      (attrs.match(/(?:heading|title|label)\s*=\s*"([^"]*)"/) || [])[1];
    const description =
      (attrs.match(/description\s*=\s*"([^"]*)"/) || [])[1];
    const parts = [];
    if (heading) parts.push(`### ${heading}`);
    if (description) parts.push(description);
    return parts.length ? `\n${parts.join('\n\n')}\n` : '';
  });

  // 5. Remove MDX import/export statements.
  body = body.replace(/^[ \t]*import\s[\s\S]*?from\s+['"][^'"]+['"];?[ \t]*$/gm, '');
  body = body.replace(/^[ \t]*export\s+(?:default|const|function|let|var)\b.*$/gm, '');

  // 6. Flatten Docusaurus admonition fences (:::note Title ... :::).
  body = body.replace(/^[ \t]*:::[a-zA-Z]+[ \t]*(.*)$/gm, (m, title) =>
    title.trim() ? `**${title.trim()}**` : ''
  );
  body = body.replace(/^[ \t]*:::[ \t]*$/gm, '');

  // 7. Strip remaining JSX/HTML tags (incl. multi-line and JSX expression
  //    attributes such as onClick={() => ...} or style={{ ... }}), keeping the
  //    inner text. Iterate to a fixed point to unwind nested markup.
  const TAG = /<\/?[A-Za-z][A-Za-z0-9]*(?:"[^"]*"|'[^']*'|\{(?:[^{}]|\{[^{}]*\})*\}|[^"'{}>])*>/g;
  let prev;
  do {
    prev = body;
    body = body.replace(TAG, '');
  } while (body !== prev);
  // Safety net for any malformed tag the structured pass could not match.
  body = body.replace(/<\/?[A-Za-z][\s\S]*?>/g, '');

  // 8. Drop images (local screenshot paths don't resolve in a standalone file)
  //    but keep real Markdown links intact for portable, faithful output.
  body = body.replace(/!\[[^\]]*\]\([^)]*\)/g, '');
  body = body.replace(/\[\s*\]\([^)]*\)/g, ''); // links emptied by image removal
  // Remove list markers left empty once their only content (an image) is gone.
  body = body.replace(/^[ \t]*[-*+][ \t]*$/gm, '');
  body = body.replace(/^[ \t]*\d+[.)][ \t]*$/gm, '');

  // 9. Remove standalone thematic-break lines (redundant under ATX headings).
  body = body.replace(/^[ \t]*([-*_])(?:[ \t]*\1){2,}[ \t]*$/gm, '');

  // 10. Restore the shielded code blocks.
  body = body.replace(/\u0000CODE(\d+)\u0000/g, (m, i) => codeBlocks[Number(i)]);

  // 11. Tidy whitespace.
  return (
    body
      .replace(/[ \t]+$/gm, '')
      .replace(/\n{3,}/g, '\n\n')
      .trim() + '\n'
  );
}

/**
 * Insert the llms.txt directive as a blockquote just after the leading H1
 * heading (or at the very top if the document has no heading).
 */
function insertLlmsDirective(markdown) {
  const lines = markdown.split('\n');
  const headingIdx = lines.findIndex((l) => /^#\s/.test(l));
  if (headingIdx === -1) {
    return `${MD_DIRECTIVE}\n\n${markdown}`;
  }
  const before = lines.slice(0, headingIdx + 1);
  const after = lines.slice(headingIdx + 1);
  while (after.length && after[0].trim() === '') after.shift();
  return [...before, '', MD_DIRECTIVE, '', ...after].join('\n');
}

function generateForFile(absPath) {
  const raw = fs.readFileSync(absPath, 'utf8').replace(/^\uFEFF/, '');
  const { data, body } = parseFrontmatter(raw);

  if (String(data.draft).toLowerCase() === 'true') return null; // skip drafts

  const slug = resolveSlug(data, path.basename(absPath));
  let markdown = toPlainMarkdown(body);

  // Prepend the frontmatter title as an H1 when the body has no top-level heading.
  const firstLine = markdown.split('\n').find((l) => l.trim()) || '';
  if (data.title && !/^#\s/.test(firstLine)) {
    markdown = `# ${data.title}\n\n${markdown}`;
  }

  markdown = insertLlmsDirective(markdown);

  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(path.join(OUT_DIR, `${slug}.md`), markdown, 'utf8');
  return slug;
}

function main() {
  const args = process.argv.slice(2);
  const targets = args.length
    ? args.map((p) => path.resolve(p))
    : fs
        .readdirSync(DOCS_DIR)
        .filter((f) => /\.mdx?$/.test(f))
        .map((f) => path.join(DOCS_DIR, f));

  let count = 0;
  const seen = new Map();

  for (const file of targets) {
    if (!fs.existsSync(file)) {
      console.warn(`⚠️  Skipped missing file: ${file}`);
      continue;
    }
    const slug = generateForFile(file);
    if (!slug) continue;
    if (seen.has(slug)) {
      console.warn(
        `⚠️  Duplicate slug "${slug}" — ${path.basename(file)} overwrote ${seen.get(slug)}`
      );
    }
    seen.set(slug, path.basename(file));
    count++;
  }

  console.log(`✅ Generated ${count} static Markdown file(s) in static/docs/.`);
}

main();
