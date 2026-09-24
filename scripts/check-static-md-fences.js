/**
 * Fence-fidelity check for the Markdown copies written by generate-static-md.js.
 *
 * Every fenced code block in a source doc must come out of the generator with
 * the same code: the same non-blank lines, in the same order, with the same
 * relative indentation. Only the fence's own indentation may be removed (the
 * CommonMark rule for a fence nested in a list or JSX). YAML and Python change
 * meaning when inner indentation is lost, and AI agents read these files
 * through llms.txt.
 *
 * Run after the generator:
 *   node scripts/generate-static-md.js && node scripts/check-static-md-fences.js
 *
 * Errors (exit 1):
 *   - a code line whose text or indentation differs from the source;
 *   - a source fence that is never closed, or that another opening fence
 *     interrupts. Every later fence in that file then pairs the wrong way
 *     round, on the site and in the generated copy alike.
 * Warnings (exit 1 only with --strict):
 *   - a source code block missing from the generated copy (for example when a
 *     tag-stripping step removes a whole region of the page);
 *   - a slug produced by more than one doc, which is then not checked.
 */

const fs = require('fs');
const path = require('path');

const DOCS_DIR = path.join(__dirname, '..', 'docs');
const OUT_DIR = path.join(__dirname, '..', 'static', 'docs');
const STRICT = process.argv.includes('--strict');

/** Same shallow frontmatter read as generate-static-md.js, plus where the body starts. */
function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) return { data: {}, body: raw, bodyLine: 0 };
  const data = {};
  for (const line of match[1].split(/\r?\n/)) {
    const kv = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!kv) continue;
    let value = kv[2].trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    data[kv[1]] = value;
  }
  const bodyLine = (match[0].match(/\n/g) || []).length;
  return { data, body: raw.slice(match[0].length), bodyLine };
}

/** Same slug rule as generate-static-md.js. */
function resolveSlug(data, fileName) {
  const fileBase = fileName.replace(/\.mdx?$/, '');
  const base = data.slug || data.id || fileBase;
  const name = base.replace(/^\//, '').replace(/\/$/, '').split('/').pop();
  return name || fileBase;
}

/**
 * Fenced blocks of a Markdown text, line based. Each block keeps the fence's
 * indentation, its 1-based start line and its content lines. `firstLine` is
 * the number of lines that precede `text` in its file.
 */
function fences(text, firstLine = 0) {
  const lines = text.split(/\r?\n/);
  const blocks = [];
  const unclosed = [];
  let open = null;
  lines.forEach((line, i) => {
    const number = firstLine + i + 1;
    if (!open) {
      // An info string cannot contain a backtick, so "```status``` | x" is inline code.
      const m = line.match(/^([ \t]*)(`{3,})[^`]*$/);
      if (m) open = { indent: m[1].length, marker: m[2], start: number, lines: [] };
      return;
    }
    // Lenient close: "``` -->" (a fence inside an HTML comment) still closes.
    const close = line.match(/^[ \t]*(`{3,})(?![`\w])/);
    if (close && close[1].length >= open.marker.length) {
      blocks.push(open);
      open = null;
      return;
    }
    const inner = line.match(/^[ \t]*(`{3,})[ \t]*[A-Za-z][\w+#.-]*[ \t]*$/);
    if (inner && inner[1].length >= open.marker.length) {
      unclosed.push({ start: open.start, next: number });
    }
    open.lines.push({ text: line, number });
  });
  if (open) unclosed.push({ start: open.start, next: null });
  return { blocks, unclosed };
}

/** Non-blank code lines with trailing whitespace removed (the generator trims both). */
const codeLines = (block) =>
  block.lines
    .map((l) => ({ ...l, text: l.text.replace(/[ \t]+$/, '') }))
    .filter((l) => l.text.trim() !== '');

/** A source line as the rendered site shows it: at most the fence indent removed. */
const outdent = (text, width) => text.replace(new RegExp(`^[ \\t]{0,${width}}`), '');

const signature = (lines) => lines.map((l) => l.text.replace(/\s+/g, '')).join('\n');

function main() {
  const errors = [];
  const warnings = [];
  let blocksChecked = 0;

  // Two docs with one slug overwrite each other's output in directory order,
  // which is not stable across file systems, so those slugs are not checked.
  const bySlug = new Map();
  const duplicated = new Set();
  const sources = fs
    .readdirSync(DOCS_DIR)
    .filter((f) => /\.mdx?$/.test(f))
    .sort();
  for (const file of sources) {
    const raw = fs.readFileSync(path.join(DOCS_DIR, file), 'utf8').replace(/^\uFEFF/, '');
    const { data, body, bodyLine } = parseFrontmatter(raw);
    if (String(data.draft).toLowerCase() === 'true') continue;
    const slug = resolveSlug(data, file);
    if (bySlug.has(slug)) duplicated.add(slug);
    bySlug.set(slug, { file, body, bodyLine });
  }
  for (const slug of duplicated) {
    warnings.push(`slug "${slug}" is produced by more than one doc; not checked`);
    bySlug.delete(slug);
  }

  for (const [slug, { file, body, bodyLine }] of bySlug) {
    const outPath = path.join(OUT_DIR, `${slug}.md`);
    if (!fs.existsSync(outPath)) {
      errors.push(`docs/${file}: no generated file static/docs/${slug}.md`);
      continue;
    }

    const source = fences(body, bodyLine);
    if (source.unclosed.length) {
      // Comparing lines here would only repeat this one defect many times.
      for (const u of source.unclosed) {
        errors.push(
          `docs/${file} line ${u.start}: code fence is not closed` +
            (u.next ? ` before the fence at line ${u.next}` : ' before the end of the file')
        );
      }
      continue;
    }

    const outBlocks = fences(fs.readFileSync(outPath, 'utf8')).blocks.map((b) => ({
      lines: codeLines(b),
      used: false,
    }));

    for (const src of source.blocks) {
      const expected = codeLines(src).map((l) => ({ ...l, text: outdent(l.text, src.indent) }));
      if (!expected.length) continue;
      const sig = signature(expected);
      const match = outBlocks.find((b) => !b.used && signature(b.lines) === sig);
      if (!match) {
        warnings.push(`docs/${file} line ${src.start}: code block missing from static/docs/${slug}.md`);
        continue;
      }
      match.used = true;
      blocksChecked++;
      expected.forEach((line, i) => {
        const got = match.lines[i];
        if (got.text !== line.text) {
          errors.push(
            `docs/${file} line ${line.number} -> static/docs/${slug}.md line ${got.number}: ` +
              `expected ${JSON.stringify(line.text)}, got ${JSON.stringify(got.text)}`
          );
        }
      });
    }
  }

  for (const w of warnings) console.warn(`warning: ${w}`);
  for (const e of errors) console.error(`error: ${e}`);
  console.log(
    `Checked ${blocksChecked} code block(s) in ${bySlug.size} doc(s): ${errors.length} error(s), ${warnings.length} warning(s).`
  );
  if (errors.length || (STRICT && warnings.length)) process.exit(1);
}

main();
