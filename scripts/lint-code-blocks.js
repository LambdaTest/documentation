#!/usr/bin/env node
/**
 * Syntax-check fenced code blocks in Markdown/MDX docs.
 *
 * Why this exists: an audit of the SmartUI doc set found 118 code blocks that
 * could not parse or compile - missing quotes, JavaScript object literals inside
 * Python blocks, unclosed fences, curly quotes. Every one would have been caught
 * here on the commit that introduced it.
 *
 * Usage:
 *   node scripts/lint-code-blocks.js <file...>     lint specific files
 *   node scripts/lint-code-blocks.js --all         lint every doc
 *
 * Exit code 1 if any block fails.
 */
'use strict';
const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFileSync, spawnSync } = require('child_process');

const args = process.argv.slice(2);
const ALL = args.includes('--all');
let files = args.filter((a) => !a.startsWith('--'));

if (ALL) {
  const walk = (dir) =>
    fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) return walk(p);
      return /\.mdx?$/.test(e.name) ? [p] : [];
    });
  files = ['docs'].filter(fs.existsSync).flatMap(walk);
}
files = files.filter((f) => /\.mdx?$/.test(f) && fs.existsSync(f));
if (!files.length) {
  console.log('lint-code-blocks: no markdown files to check');
  process.exit(0);
}

// ── which languages we can actually validate, and how ────────────────────────
const NORMALISE = {
  js: 'javascript', node: 'javascript', nodejs: 'javascript',
  py: 'python', rb: 'ruby', cs: 'csharp', sh: 'bash', shell: 'bash', zsh: 'bash',
};
const have = (cmd) => spawnSync(cmd, ['--version'], { stdio: 'ignore' }).status === 0;
const HAVE = { node: true, python3: have('python3'), ruby: have('ruby'), bash: have('bash') };

// Markdown nests blocks inside lists and <TabItem>s, so the content arrives
// uniformly indented. Strip the common leading whitespace before parsing -
// otherwise every indented Python block is a false IndentationError.
function dedent(src) {
  const ls = src.split('\n').filter((l) => l.trim());
  if (!ls.length) return src;
  const pad = Math.min(...ls.map((l) => l.match(/^[ \t]*/)[0].length));
  return pad ? src.split('\n').map((l) => l.slice(pad)).join('\n') : src;
}

function tmp(content, ext) {
  const f = path.join(fs.mkdtempSync(path.join(os.tmpdir(), 'blk-')), 'block' + ext);
  fs.writeFileSync(f, content);
  return f;
}
function run(cmd, argv) {
  const r = spawnSync(cmd, argv, { encoding: 'utf8' });
  return { ok: r.status === 0, err: ((r.stderr || '') + (r.stdout || '')).trim().split('\n')[0] };
}

const CHECKERS = {
  javascript: (c) => (HAVE.node ? run('node', ['--check', tmp(c, '.mjs')]) : null),
  python:     (c) => (HAVE.python3 ? run('python3', ['-c', 'import ast,sys;ast.parse(open(sys.argv[1]).read())', tmp(c, '.py')]) : null),
  ruby:       (c) => (HAVE.ruby ? run('ruby', ['-c', tmp(c, '.rb')]) : null),
  bash:       (c) => (HAVE.bash ? run('bash', ['-n', tmp(c, '.sh')]) : null),
  json:       (c) => { try { JSON.parse(c); return { ok: true }; } catch (e) { return { ok: false, err: e.message }; } },
  yaml:       (c) => (HAVE.python3 ? run('python3', ['-c', 'import yaml,sys;list(yaml.safe_load_all(open(sys.argv[1])))', tmp(c, '.yml')]) : null),
};

// Blocks that are deliberately partial. A bare object/array fragment or an
// elision marker is legitimate in docs and must not fail the build.
function isFragment(code, lang) {
  const t = code.trim();
  if (/^\s*(\.\.\.|\/\/\s*\.\.\.|#\s*\.\.\.)/m.test(t)) return true;
  if (lang === 'javascript' && /^['"][^'"]+['"]\s*:/.test(t)) return true; // 'LT:Options': { ... }
  if (lang === 'javascript' && /^\{[\s\S]*\}$/.test(t) && !/[;=]/.test(t)) return true;
  if (lang === 'json' && /^\s*"[^"]+"\s*:/.test(t) && !t.startsWith('{')) return true;
  if (/^[\w.$-]+\s*:\s*[{[]/.test(t)) return true;              // bare `key: {` fragment
  if (/^(await |const |let |var )?[\w.$]+\([\s\S]*\)[;,]?$/.test(t) && !/\n/.test(t)) return false;
  return false;
}
// JSON samples in docs conventionally carry // comments. Strip before parsing,
// but still flag genuinely malformed JSON.
const stripJsonComments = (s) => s.replace(/^\s*\/\/.*$/gm, '').replace(/,(\s*[}\]])/g, '$1');

let failures = 0, checked = 0, skipped = 0;

for (const file of files) {
  const lines = fs.readFileSync(file, 'utf8').split('\n');
  let open = false, lang = '', buf = [], start = 0, fences = 0;

  for (let i = 0; i < lines.length; i++) {
    const m = /^\s*```(.*)$/.exec(lines[i]);
    if (m) {
      fences++;
      if (!open) {
        open = true; start = i + 1; buf = [];
        lang = (m[1].trim().split(/\s+/)[0] || '').toLowerCase();
      } else {
        open = false;
        const norm = NORMALISE[lang] || lang;
        const code = dedent(buf.join('\n'));
        const checker = CHECKERS[norm];
        if (checker && code.trim()) {
          if (isFragment(code, norm)) { skipped++; continue; }
          const payload = norm === 'json' ? stripJsonComments(code) : code;
          const res = checker(payload);
          if (res === null) { skipped++; continue; }   // no runtime available
          checked++;
          if (!res.ok) {
            failures++;
            console.error(`\n✖ ${file}:${start}  [${norm}]`);
            console.error(`  ${res.err}`);
            console.error(`  ${code.trim().split('\n')[0].slice(0, 90)}`);
          }
        }
      }
      continue;
    }
    if (open) buf.push(lines[i]);
  }

  if (fences % 2 !== 0) {
    failures++;
    console.error(`\n✖ ${file}  unbalanced code fences (${fences}) — a block is never closed`);
    console.error('  This silently inverts every following block: prose renders as code and code as prose.');
  }
  // Typographic quotes inside code blocks are a hard syntax error in every language.
  const smart = [];
  let inb = false;
  lines.forEach((ln, i) => {
    if (/^\s*```/.test(ln)) { inb = !inb; return; }
    if (inb && /[‘’“”]/.test(ln)) smart.push(i + 1);
  });
  if (smart.length) {
    failures++;
    console.error(`\n✖ ${file}  curly quotes inside code blocks at line(s) ${smart.slice(0, 8).join(', ')}${smart.length > 8 ? '…' : ''}`);
    console.error('  Replace ‘ ’ “ ” with ASCII \' and ".');
  }
}

const unavailable = Object.entries(HAVE).filter(([, v]) => !v).map(([k]) => k);
console.log(
  `\nlint-code-blocks: ${checked} blocks checked, ${skipped} skipped (fragment or no runtime), ` +
  `${failures} problem(s) in ${files.length} file(s)` +
  (unavailable.length ? `\n  note: no runtime for ${unavailable.join(', ')} — those blocks were skipped` : '')
);
process.exit(failures ? 1 : 0);
