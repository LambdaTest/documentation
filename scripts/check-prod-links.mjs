#!/usr/bin/env node
/**
 * check-prod-links.mjs - Is every internal link target live on production?
 *
 * One file, kept identical in the four repos that serve https://www.testmuai.com. It works out which one it runs in:
 *   Learninghub-blog                         /blog/, /learning-hub/ and the tutorial hubs    production ships from main
 *   lambdatest-website-next                  the website: /<slug>/ product and feature pages production ships from main
 *   lambdatest-website-other-dynamic-pages   /free-online-tools/, /software-testing-questions/, /video/ ...   main
 *   documentation                            /support/docs/                                  production ships from testmuCom
 * Change it in all four together.
 *
 * A page in your working tree, on a *-stage branch, on origin/stage, on https://stage.testmuinternal.ai, in a
 * registry (tools.json, BlogList.json, a chapter registry, a docs sidebar) or in a sibling repo's checkout is NOT live
 * until it reaches production, and a link to it is a 404 there. Being on the production branch is not proof either:
 * the CDN redirects pages that are still in git. Only production can say whether a page is live; this script asks it.
 * (On 2026-11-23, 90 blog, 13 website, 7 docs and 1 free-tool page that exist on stage returned 404 on production,
 * and live pages had stage edits linking some of them.)
 *
 * Usage (from anywhere inside the repo):
 *   node scripts/check-prod-links.mjs <file...> [--ships-with <route|file>,...]   pages, docs, data files, registries
 *   node scripts/check-prod-links.mjs --routes /blog/a/,/kane-ai/                   a link plan, before writing
 *   node scripts/check-prod-links.mjs --changed origin/<production branch>          before a pull request or
 *        cherry-pick to that branch: every content file this branch changes against it; the pages in that diff ship
 *        together. The base must be the same commit as origin/<production branch> (or upstream/..., for a fork):
 *        main, or testmuCom for docs. Anything else (stage, a stale local main, origin/HEAD when it points at another
 *        branch, a SHA) exits 2; --any-base lifts that, for testing the script only.
 *   add --list to print what would be checked without sending requests (it still exits 1 on a missing doc, image or
 *   sidebar id, or a stage-host link: those need no request).
 * --ships-with accepts only a page this checkout serves (a page file, a route of a [dynamic] page, a doc); another
 * repo's page never ships in this repo's pull request, so it is dropped with a warning.
 * --routes takes production paths as they are served: /support/docs/<slug>/ for a docs page, /docs/kane-cli-<x> (no
 * trailing slash) for the Kane CLI docs, full https://www.testmuai.com/... URLs also work.
 *
 * What it reads: every internal URL a file links. In JS/JSX: href, link and url props of any name (hubHref, ctaHref,
 * docHref, cta_href, "mainHref" ...), ${baseUrl}/... and absolute https://www.testmuai.com/... URLs, including the
 * <a href> inside HTML strings; BreadCrumb pageHref/subHref and the dynamic pages' video slugs, which have no leading
 * slash. In JSON: those keys plus arrays such as tools.json related_tools, and QuestionData.json slugs. In docs
 * Markdown: [text](url) links, reference definitions, <a href>, <Link to>, ${BRAND_URL} links, relative ./x.md links
 * (resolved through the target's frontmatter slug) and sidebar doc ids. A root-relative Markdown link in the docs gets
 * the /support/ base, as Docusaurus renders it.
 * Not links, so skipped: code samples (<SyntaxHighlighter>, <CodeBlock>, <pre>, <code>, fenced blocks, inline code,
 * `code` and `command` props, the constants they render), widget sample constants (SAMPLE_*, *Placeholder, useState
 * initial strings), comments, rendered prose text, docs frontmatter and JSON-LD scripts in docs.
 * One GET per distinct path; same-site redirects are followed (up to 3 hops) and judged by where they land.
 *
 *   ERROR  not live: 4xx, 5xx, no answer, or a redirect that lands on one. Link a live page instead, or ship the
 *          target in the same pull request to the production branch and name it in --ships-with. Also: a link to the
 *          stage host; in the docs, a .md file, sidebar doc id or image/file (../assets/..., require(...)) that is not
 *          in this checkout (the production build fails on a missing image).
 *   WARN   a redirect that lands on a live page (link the destination), a noindex page, a host other than
 *          www.testmuai.com; run in the docs repo, a link to a doc that is a client-side <Redirect>. With --changed: a
 *          branch far ahead of the base (everything in it counts as shipping together), and live URLs the branch
 *          takes away (a deleted page, a changed docs slug: links to them break once it ships).
 *   SHIPS  not live yet, but the file's own URL, or a route named in --ships-with (or in the --changed diff):
 *          allowed only because it reaches production in the same pull request as the link. The summary lists them.
 *          --ships-with never applies to a file in another git repository: that repo ships on its own.
 *
 * Exit codes: 0 = every target live or shipping (warnings allowed), 1 = a target is not live, 2 = usage (also: a
 * --changed base that is not production, or JS files to check without @babel/parser: run npm install first).
 * Network only (8 requests at a time to production); no API keys. Needs @babel/parser from node_modules for JS files.
 */
import { readFileSync, existsSync, readdirSync } from "fs";
import { relative, resolve, sep, dirname, join, isAbsolute, basename } from "path";
import { execFileSync } from "child_process";
import { createRequire } from "module";

const PROD = "https://www.testmuai.com";
const ASSET = /\.(png|jpe?g|webp|avif|gif|svg|ico|pdf|xml|txt|json|js|mjs|css|mp4|webm|mp3|wav|zip|gz|tar|jar|apk|ipa|exe|dmg|sh|ps1|py|ya?ml|csv|woff2?|ttf|webmanifest)$/i;
const FILE_EXT = /\.[a-z][a-z0-9]{0,5}$/i; // a last path segment that names a file (x.md, x.html), not a page slug
const die = (m) => { console.error(`check-prod-links: ${m}`); process.exit(2); };

// ---- which repo ------------------------------------------------------------------------------------------------
const gitRoot = (start) => {
  for (let d = start; ; d = dirname(d)) {
    if (existsSync(join(d, ".git"))) return d;
    if (dirname(d) === d) return null;
  }
};
const kindOf = (root) => {
  const has = (p) => existsSync(join(root, p));
  if (has("docusaurus.config.js")) return "docs";
  if (has("pages/free-online-tools")) return "dynamic";
  if (has("pages/learning-hub") && has("components/LearningChapters")) return "learninghub";
  if (has("pages") && has("next.config.js")) return "website";
  return null;
};
const ROOT = gitRoot(process.cwd()) || die("run inside one of the testmuai.com repos (no .git folder found)");
const REPO = kindOf(ROOT) || die(`${ROOT} is not one of the testmuai.com repos (blog, website, dynamic pages, docs)`);
const PROFILE = {
  docs: { label: "documentation", prod: "testmuCom", paths: ["docs", "src", ":(glob)sidebars*.js"],
    changed: (f) => /^docs\/[^/]+\.mdx?$/.test(f) || /^src\/.+\.(js|jsx|ts|tsx)$/.test(f) || /^sidebars[^/]*\.js$/.test(f) },
  dynamic: { label: "dynamic pages", prod: "main", paths: ["pages", "constants", "components/TestingQuestion", "components/VideoPage"],
    changed: (f) => /^pages\/.+\.(js|jsx|ts|tsx|json)$/.test(f) || /^constants\/.+\.(js|jsx|json)$/.test(f)
      || f === "components/TestingQuestion/QuestionData.json" || /^components\/VideoPage\/.+\.js$/.test(f) },
  learninghub: { label: "blog and learning hub", prod: "main", paths: ["pages", "components/LearningChapters"],
    changed: (f) => /^pages\/.+\.(js|jsx|ts|tsx)$/.test(f) || /^components\/LearningChapters\/[^/]+\.json$/.test(f) },
  website: { label: "website", prod: "main", paths: ["pages", "constants"],
    changed: (f) => /^pages\/.+\.(js|jsx|ts|tsx|json)$/.test(f) || /^constants\/.+\.(js|jsx|json)$/.test(f) },
}[REPO];
// Files from another checkout (a sibling repo) are read with that repo's rules.
const kindCache = new Map();
const fileKind = (abs) => {
  const root = gitRoot(dirname(abs));
  if (!root) return { root: null, kind: null };
  if (!kindCache.has(root)) kindCache.set(root, kindOf(root));
  return { root, kind: kindCache.get(root) };
};

// ---- arguments -------------------------------------------------------------------------------------------------
const argv = process.argv.slice(2);
const files = [];
let routesArg = "", shipsArg = "", changedBase = "", listOnly = false, anyBase = false;
for (let i = 0; i < argv.length; i++) {
  if (argv[i] === "--routes") routesArg = argv[++i] || "";
  else if (argv[i] === "--ships-with") shipsArg = argv[++i] || "";
  else if (argv[i] === "--changed") changedBase = argv[++i] || die(`--changed needs a base, e.g. origin/${PROFILE.prod}`);
  else if (argv[i] === "--list") listOnly = true;
  else if (argv[i] === "--any-base") anyBase = true;
  else if (argv[i].startsWith("--")) die(`unknown option ${argv[i]}`);
  else files.push(argv[i]);
}
if (!files.length && !routesArg && !changedBase) {
  die(`usage: check-prod-links.mjs <file...> [--ships-with <route|file>,...] | --routes /a/,/b/ | --changed origin/${PROFILE.prod}`);
}
console.log(`check-prod-links: ${PROFILE.label} repo; production is ${PROD}, shipped from ${PROFILE.prod}`);

// "/blog/x/?q#h" -> "/blog/x/": the comparison key for self, --ships-with and the diff.
const key = (p) => {
  let s = p.replace(/[?#].*$/, "");
  if (!s.endsWith("/") && !FILE_EXT.test(s.split("/").pop())) s += "/";
  return s;
};
const repoRel = (f) => relative(ROOT, resolve(f)).split(sep).join("/");
const inRepo = (f) => { const r = relative(ROOT, resolve(f)); return !r.startsWith("..") && !isAbsolute(r); };
// A file inside ANOTHER git repository (a sibling testmuai.com repo) ships on that repo's own pipeline, so it can
// never reach production in the same pull request. Scratch files (a hub-audit proposal) are not in a repository.
const otherRepo = (f) => !inRepo(f) && !!gitRoot(dirname(resolve(f)));

// ---- docs routes (Docusaurus: baseUrl /support/, routeBasePath docs, trailingSlash true) ------------------------
// The route comes from the frontmatter slug, else the id, else the file name. Never from the file name alone or
// from the `url:` field: 209 docs have a slug that differs from the file name, 28 a url: that is not their route.
function frontmatter(src) {
  const m = src.replace(/^\uFEFF/, "").match(/^---\r?\n([\s\S]*?)\r?\n---/);
  const get = (k) => {
    const v = m && m[1].match(new RegExp(`^${k}:[ \\t]*(.*?)[ \\t]*$`, "m"));
    return v ? v[1].replace(/^(['"])(.*)\1$/, "$2").trim() : "";
  };
  return { slug: get("slug"), id: get("id") };
}
function docRoute(abs, src) {
  const fm = frontmatter(src ?? readFileSync(abs, "utf8"));
  let s = fm.slug || fm.id || basename(abs).replace(/\.mdx?$/, "");
  s = `/support/docs/${s.replace(/^\//, "")}`.replace(/\/{2,}/g, "/");
  return s.endsWith("/") ? s : `${s}/`;
}
const docsIndexes = new Map(); // docs root -> { byFile, byId, redirects }
function docsIndex(root) {
  if (docsIndexes.has(root)) return docsIndexes.get(root);
  const ix = { byFile: new Map(), byId: new Map(), redirects: new Map() };
  const dir = join(root, "docs");
  for (const n of existsSync(dir) ? readdirSync(dir) : []) {
    if (!/\.mdx?$/.test(n)) continue;
    const src = readFileSync(join(dir, n), "utf8");
    const route = docRoute(join(dir, n), src);
    ix.byFile.set(n, route);
    ix.byId.set(frontmatter(src).id || n.replace(/\.mdx?$/, ""), route);
    // A doc that renders <Redirect to="..."> answers 200 and moves the reader in the browser: a client-side redirect.
    const r = src.match(/<Redirect\s+to=["']([^"']+)["']/);
    if (r) ix.redirects.set(route, r[1]);
  }
  docsIndexes.set(root, ix);
  return ix;
}
// A root-relative link that Docusaurus renders through <Link> (Markdown links, <Link to>, sidebar hrefs) gets the
// /support/ base and a trailing slash; a raw <a href> is served exactly as written.
const docsLinkPath = (u) => {
  const [, p0, tail] = u.match(/^([^?#]*)(.*)$/);
  let p = /^\/support(\/|$)/.test(p0) ? p0 : `/support${p0}`;
  if (!p.endsWith("/") && !FILE_EXT.test(p.split("/").pop())) p += "/";
  return p + tail;
};

// ---- the route a file serves -----------------------------------------------------------------------------------
function routeOfFile(f) {
  if (!inRepo(f)) return null;
  const r = repoRel(f);
  if (REPO === "docs") {
    if (/^docs\/[^/]+\.mdx?$/.test(r)) return existsSync(resolve(f)) ? docRoute(resolve(f)) : null;
    const m = r.match(/^src\/pages\/(.+?)\.(?:js|jsx|ts|tsx|md|mdx)$/);
    if (!m || /(^|\/)_|\[/.test(m[1])) return null;
    const p = m[1].replace(/(^|\/)index$/, "");
    return `/support/${p ? `${p}/` : ""}`;
  }
  const m = r.match(/^pages\/(.+?)\.(?:js|jsx|ts|tsx)$/);
  if (!m || m[1].includes("[") || /^api\//.test(m[1]) || /(^|\/)(_app|_document|_error|404|500)$/.test(m[1])) return null;
  const p = m[1].replace(/(^|\/)index$/, "");
  return p ? `/${p}/` : "/";
}
// A route as typed: "/blog/x/", "blog/x/", "pages/blog/x/", a page or doc file, a full estate URL, or the path Git
// Bash makes of "/blog/x/" ("C:/Program Files/Git/blog/x/") when it rewrites arguments that look like POSIX paths.
const cleanPath = (s) => {
  s = s.trim().replace(/^[A-Za-z]:[\\/].*?[\\/]Git(?=[\\/])/i, "").replace(/\\/g, "/").replace(/^(https?);\/\//i, "$1://");
  s = s.replace(/^https?:\/\/(www\.)?testmuai\.com/i, "");
  return s.startsWith("/") ? s : `/${s}`;
};
const toRoute = (s) => {
  s = s.trim();
  if (!s) return null;
  if (/\.(js|jsx|ts|tsx|md|mdx)$/.test(s)) return routeOfFile(s);
  const dir = s.replace(/\\/g, "/").match(/^(?:\.\/)?pages\/(.+?)\/?$/);
  if (dir && REPO !== "docs") return `/${dir[1]}/`;
  // In the docs repo a page that ships with this pull request is a doc: /docs/x/ is the Markdown form of /support/docs/x/.
  if (REPO === "docs" && /^\/docs\//.test(cleanPath(s))) return key(docsLinkPath(cleanPath(s)));
  return key(cleanPath(s));
};
// Does this checkout serve the route? A page file, a [dynamic] page in the parent folder (routes built from data,
// such as /webinar/<x>/ or /free-online-tools/<agent>/), or in the docs a doc or src/pages file.
function servedHere(route) {
  const p = route.replace(/[?#].*$/, "").replace(/^\/|\/$/g, "");
  if (REPO === "docs") {
    if ([...docsIndex(ROOT).byFile.values()].includes(key(route))) return true;
    const sp = p.replace(/^support\/?/, "");
    return ["js", "jsx", "ts", "tsx", "md", "mdx"].some((e) => existsSync(join(ROOT, "src", "pages", `${sp || "index"}.${e}`)) || existsSync(join(ROOT, "src", "pages", sp, `index.${e}`)));
  }
  const base = join(ROOT, "pages", ...(p ? p.split("/") : []));
  if (["js", "jsx", "ts", "tsx"].some((e) => existsSync(join(base, `index.${e}`)) || (p && existsSync(`${base}.${e}`)))) return true;
  try { return !!p && readdirSync(dirname(base)).some((n) => n.startsWith("[")); } catch { return false; }
}
const ships = new Map(); // route -> why it may be missing from production
for (const s of shipsArg.split(",").map((x) => x.trim()).filter(Boolean)) {
  const r = toRoute(s);
  // A page in another repo never ships in this repo's pull request, and a route nothing here serves cannot ship either.
  if (r && servedHere(r)) ships.set(r, "--ships-with");
  else console.log(`check-prod-links: WARNING - --ships-with ${s} is not a page this checkout serves (another repo's page, a typo or a file that does not exist), so it does not count as shipping.`);
}

const git = (args) => execFileSync("git", args, { cwd: ROOT, encoding: "utf8", maxBuffer: 512 * 1024 * 1024, stdio: ["ignore", "pipe", "pipe"] }).trim();
const commitOf = (ref) => { try { return git(["rev-parse", "--verify", "--quiet", `${ref}^{commit}`]); } catch { return ""; } };
if (changedBase) {
  // A diff against the wrong branch gives the wrong "ships together" set (docs main has not moved since June 2026; the
  // website's origin/HEAD points at a prod branch frozen in May 2025). The base must be the production branch itself.
  const baseCommit = commitOf(changedBase) || die(`--changed ${changedBase}: no such commit here. Run git fetch origin ${PROFILE.prod}, then --changed origin/${PROFILE.prod}`);
  const prodRefs = ["origin", "upstream"].map((r) => `${r}/${PROFILE.prod}`).filter((r) => commitOf(r));
  if (!anyBase && !prodRefs.some((r) => commitOf(r) === baseCommit)) {
    let sym = ""; try { sym = git(["rev-parse", "--abbrev-ref", changedBase]); } catch { /* a SHA or an expression */ }
    die(`--changed must compare against the production branch: production for the ${PROFILE.label} repo ships from ${PROFILE.prod}, and ${changedBase}${sym && sym !== changedBase ? ` (${sym})` : ""} is not ${prodRefs.join(" or ") || `origin/${PROFILE.prod}`}. Run git fetch origin ${PROFILE.prod}, then --changed origin/${PROFILE.prod}`);
  }
  let out = "", gone = "", ahead = 0;
  try {
    out = git(["diff", "--name-only", "--diff-filter=ACMR", `${changedBase}...HEAD`, "--", ...PROFILE.paths]);
    gone = git(["diff", "--name-only", "--no-renames", "--diff-filter=D", `${changedBase}...HEAD`, "--", ...PROFILE.paths]);
    ahead = Number(git(["rev-list", "--count", `${changedBase}..HEAD`])) || 0;
  } catch (e) { die(`git diff ${changedBase}...HEAD failed: ${String(e.stderr || e.message).trim().slice(0, 300)}`); }
  const changed = out.split("\n").map((s) => s.trim()).filter((f) => f && PROFILE.changed(f));
  for (const f of changed) {
    const abs = join(ROOT, f);
    if (!existsSync(abs)) continue;
    files.push(abs);
    const r = routeOfFile(abs);
    if (r && !ships.has(r)) ships.set(r, `in the diff against ${changedBase}`);
  }
  console.log(`check-prod-links: ${changed.length} content file(s) changed against ${changedBase}, ${ahead} commit(s) ahead of it`);
  if (ahead > 200) {
    console.log(`check-prod-links: WARNING - this branch is ${ahead} commits ahead of ${changedBase}, so every page in that diff counts as shipping together. That is only true if this pull request merges all of it. For a cherry-pick, run --changed on the branch cut from ${PROFILE.prod} that the pull request is opened from.`);
  }
  // A URL this branch takes away stops being live when it ships: links to it from pages that stay become 404s.
  // That is a page production still has (at the base tip) that this branch deletes, or a doc whose slug it changes.
  const removed = [];
  const atBase = (f) => { try { return git(["show", `${changedBase}:${f}`]); } catch { return null; } };
  const LIMIT = 300;
  const goneFiles = gone.split("\n").map((s) => s.trim()).filter((f) => f && PROFILE.changed(f));
  for (const f of goneFiles.slice(0, LIMIT)) {
    const src = atBase(f);
    if (src == null) continue;
    const r = REPO === "docs" && /^docs\/[^/]+\.mdx?$/.test(f) ? docRoute(join(ROOT, f), src) : routeOfFile(join(ROOT, f));
    if (r && !servedHere(r)) removed.push(r);
  }
  if (REPO === "docs") {
    for (const f of changed.filter((x) => /^docs\/[^/]+\.mdx?$/.test(x)).slice(0, LIMIT)) {
      const src = atBase(f);
      if (src == null || !existsSync(join(ROOT, f))) continue;
      const was = docRoute(join(ROOT, f), src), now = docRoute(join(ROOT, f));
      if (was !== now && !servedHere(was)) removed.push(`${was} (now ${now})`);
    }
  }
  if (removed.length) {
    console.log(`check-prod-links: WARNING - this branch takes ${removed.length} live URL(s) away: ${removed.slice(0, 20).join(", ")}${removed.length > 20 ? " ..." : ""}. Once it ships they are gone (unless the CDN redirects them): search the repo for links to them and repoint those links in this pull request.`);
  }
  if (goneFiles.length > LIMIT) console.log(`check-prod-links: (only the first ${LIMIT} of ${goneFiles.length} deleted files were looked at)`);
}

// ---- what is not a link ----------------------------------------------------------------------------------------
// A path inside sample code (a CSS selector, sample HTML for a widget, a page object for another site), in a comment
// or in a sentence is not a link.
const require = createRequire(import.meta.url);
let babel = null;
try { babel = require("@babel/parser"); } catch { /* fall back to the regex mask */ }
// Without the parser the JS checks are incomplete (no comments or sample code masked, no BreadCrumb, VideoPage or
// sidebar links read), so the gate refuses to vouch for JS files instead of passing them quietly.
if (!babel && files.some((f) => /\.(js|jsx|ts|tsx|mjs|cjs)$/i.test(f))) {
  die("@babel/parser was not found next to this script, so JS/JSX files cannot be checked fully. Run npm install in this checkout, or run the copy in a checkout that has node_modules (it checks the repo you run it from).");
}
const CODE_TAG = /^(SyntaxHighlighter|CodeBlock|pre|code)$/;
const CODE_PROP = /^(code|command)$/; // CodeBlock tabs [{ code }], <CopyCommandPill command="..."> - sample code
const SAMPLE_NAME = /sample|placeholder/i; // const SAMPLE_HTML = `<a href="/pricing/">` - input for a widget
const jsxName = (nm) => !nm ? "" : nm.type === "JSXIdentifier" ? nm.name : nm.type === "JSXMemberExpression" ? nm.property.name : "";
const strOf = (v) => !v ? null : v.type === "StringLiteral" ? v.value
  : v.type === "TemplateLiteral" && !v.expressions.length ? v.quasis[0].value.cooked : null;

// Links written without a leading slash, or with one that the component rewrites. Returns a production path or null.
const slugLike = /^[a-z0-9][\w.-]*(\/[\w.-]+)*\/?$/i;
function bareRule(kind, rel, name, value, el) {
  // <BreadCrumb pageHref="vs/" subHref="x/"> renders ${baseUrl}/${pageHref} (website and blog repos)
  if ((kind === "website" || kind === "learninghub") && el === "BreadCrumb" && /^(pageHref|subHref)$/.test(name) && slugLike.test(value)) return `/${value}`;
  if (kind === "dynamic" && /^components\/VideoPage\//.test(rel) && slugLike.test(value)) {
    if (name === "pageHref") return `/video/${value.replace(/\/$/, "")}/`;
    if (name === "authorHref") return `/video/author/${value.replace(/\/$/, "")}/`;
    if (name === "href") return value.startsWith("video/") ? `/${value}` : `/video/${value.replace(/\/$/, "")}/`;
  }
  if (kind === "docs" && value.startsWith("/") && (name === "to" || (name === "href" && el === "Link"))) return docsLinkPath(value);
  return null;
}

// JS/JSX: ranges to blank out, plus links found through the syntax tree.
function analyseJs(src, kind, rel, ts) {
  const ranges = [], found = [];
  try {
    if (!babel) throw new Error("no parser");
    const ast = babel.parse(src, { sourceType: "module", plugins: ts ? ["jsx", "typescript"] : ["jsx"], errorRecovery: true });
    for (const c of ast.comments || []) ranges.push([c.start, c.end]);
    const decls = new Map(), rendered = new Set();
    const maskValue = (v) => { if (!v) return; if (v.type === "Identifier") rendered.add(v.name); else ranges.push([v.start, v.end]); };
    const take = (name, v, el, node) => {
      const s = strOf(v);
      if (s == null || !name) return;
      const path = bareRule(kind, rel, name, s, el);
      if (path) { found.push({ idx: v.start, path }); if (kind === "docs") ranges.push([node.start, node.end]); }
    };
    const SKIP = new Set(["loc", "extra", "leadingComments", "trailingComments", "innerComments", "comments", "tokens"]);
    const walk = (n, el) => {
      if (Array.isArray(n)) { for (const x of n) walk(x, el); return; }
      if (!n || typeof n !== "object" || typeof n.type !== "string") return;
      switch (n.type) {
        case "VariableDeclarator":
          if (n.id?.type === "Identifier" && n.init) {
            decls.set(n.id.name, n.init);
            if (SAMPLE_NAME.test(n.id.name)) ranges.push([n.init.start, n.init.end]);
          }
          break;
        case "JSXText": // rendered prose: "[href='/exercise/...']" quoted as a CSS selector in a sentence
          ranges.push([n.start, n.end]);
          break;
        case "JSXElement":
          if (n.closingElement && CODE_TAG.test(jsxName(n.openingElement.name))) {
            ranges.push([n.openingElement.end, n.closingElement.start]);
            for (const c of n.children) if (c.type === "JSXExpressionContainer" && c.expression?.type === "Identifier") rendered.add(c.expression.name);
          }
          break;
        case "JSXOpeningElement":
          el = jsxName(n.name);
          break;
        case "JSXAttribute": {
          const name = typeof n.name?.name === "string" ? n.name.name : "";
          const v = n.value?.type === "JSXExpressionContainer" ? n.value.expression : n.value;
          if (CODE_PROP.test(name)) maskValue(v); else take(name, v, el, n);
          break;
        }
        case "ObjectProperty": {
          const name = n.key?.type === "Identifier" ? n.key.name : n.key?.type === "StringLiteral" ? n.key.value : "";
          if (CODE_PROP.test(name)) maskValue(n.value); else take(name, n.value, null, n);
          break;
        }
        case "CallExpression":
          if (n.callee?.type === "Identifier" && n.callee.name === "useState") {
            for (const a of n.arguments) if (a.type === "StringLiteral" || a.type === "TemplateLiteral") ranges.push([a.start, a.end]);
          }
          break;
        default:
      }
      for (const k of Object.keys(n)) if (!SKIP.has(k) && n[k] && typeof n[k] === "object") walk(n[k], el);
    };
    walk(ast.program, "");
    for (const name of rendered) { const init = decls.get(name); if (init) ranges.push([init.start, init.end]); }
  } catch {
    for (const m of src.matchAll(/<(SyntaxHighlighter|CodeBlock|pre|code)\b[^>]*>([\s\S]*?)<\/\1>/g)) {
      const start = m.index + m[0].indexOf(">") + 1;
      ranges.push([start, start + m[2].length]);
    }
    for (const m of src.matchAll(/\{\/\*[\s\S]*?\*\/\}/g)) ranges.push([m.index, m.index + m[0].length]);
  }
  return { ranges, found };
}

// Docs sidebars: doc ids (bare strings in the sidebar arrays, { type: "doc", id }) and link hrefs.
function analyseSidebar(src, root) {
  const found = [], missing = [];
  if (!babel) return { found, missing };
  let ast;
  try { ast = babel.parse(src, { sourceType: "module", errorRecovery: true }); } catch { return { found, missing }; }
  const ix = docsIndex(root);
  const docId = (id, at) => {
    const route = ix.byId.get(id);
    if (route) found.push({ idx: at, path: route });
    else missing.push({ idx: at, what: `sidebar doc id "${id}" has no file in docs/ in this checkout` });
  };
  const walk = (n, parentKey) => {
    if (Array.isArray(n)) { for (const x of n) walk(x, parentKey); return; }
    if (!n || typeof n !== "object" || typeof n.type !== "string") return;
    if (n.type === "ArrayExpression") { // [backLink, [ "doc-id", { type: "doc", id } ]]
      for (const x of n.elements) {
        if (x?.type === "StringLiteral" && !/class|props|keywords|tags/i.test(parentKey)) docId(x.value, x.start);
        else walk(x, parentKey);
      }
      return;
    }
    if (n.type === "ObjectExpression") {
      const props = {};
      for (const p of n.properties) {
        const k = p.key?.type === "Identifier" ? p.key.name : p.key?.type === "StringLiteral" ? p.key.value : "";
        if (k) props[k] = p.value;
      }
      const type = strOf(props.type);
      const id = strOf(props.id);
      if (id && (!type || type === "doc" || type === "ref")) docId(id, props.id.start);
      const href = strOf(props.href);
      if (href && href.startsWith("/")) found.push({ idx: props.href.start, path: docsLinkPath(href) });
      for (const p of n.properties) {
        const k = p.key?.type === "Identifier" ? p.key.name : p.key?.type === "StringLiteral" ? p.key.value : "";
        walk(p.value, k);
      }
      return;
    }
    for (const k of Object.keys(n)) if (k !== "loc" && n[k] && typeof n[k] === "object") walk(n[k], parentKey);
  };
  walk(ast.program, "");
  return { found, missing };
}

// Docs Markdown/MDX: ranges that are not prose or links.
function mdxMask(src) {
  const ranges = [];
  const fm = src.match(/^---\r?\n[\s\S]*?\r?\n---/);
  if (fm) ranges.push([0, fm[0].length]); // the page's own url/canonical, keywords ...
  let pos = 0, open = null;
  for (const line of src.split("\n")) { // fenced code (``` or ~~~), including GitHub reference fences
    const m = line.match(/^\s*(`{3,}|~{3,})/);
    if (open) {
      if (m && m[1][0] === open.ch && m[1].length >= open.len && /^\s*[`~]+\s*$/.test(line)) { ranges.push([open.start, pos + line.length]); open = null; }
    } else if (m) open = { ch: m[1][0], len: m[1].length, start: pos };
    pos += line.length + 1;
  }
  if (open) ranges.push([open.start, src.length]);
  const BLOCKS = [
    /<!--[\s\S]*?-->/g, // HTML comments
    /\{\/\*[\s\S]*?\*\/\}/g, // MDX comments
    /<(CodeBlock|pre|code)\b[^>]*>[\s\S]*?<\/\1>/g, // code
    /<script\b[\s\S]*?(?:<\/script>|\}\}\s*\/>)/g, // JSON-LD: the page's own URL and copies of the FAQ text
  ];
  for (const re of BLOCKS) for (const m of src.matchAll(re)) ranges.push([m.index, m.index + m[0].length]);
  return ranges;
}
const mask = (src, ranges) => {
  if (!ranges.length) return src;
  const a = src.split("");
  for (const [s, e] of ranges) for (let i = s; i < e; i++) if (a[i] !== "\n") a[i] = " ";
  return a.join("");
};

// ---- extraction ------------------------------------------------------------------------------------------------
const END = `[^"'\`\\s)<>\\\\}\\]|,;&]*`; // a URL path stops at quotes, space, brackets and list punctuation
const PATTERNS = [
  { re: new RegExp(`\\$\\{baseUrl\\}(\\/${END})`, "g"), path: 1 }, // ${baseUrl}/blog/x/ (href, schema, canonical)
  { re: new RegExp(`https?:\\/\\/((?:www\\.)?(?:testmuai\\.com|testmu\\.ai))(\\/${END})?`, "gi"), path: 2, host: 1 }, // absolute estate URLs
  // any href/link/url prop, whatever its prefix: href="/x/", hubHref: "/x/", "mainHref": "/x/", link: '/x/', href=\"/x/\"
  { re: /(?:\b[\w$]*(?:href|link|url)|["'][\w$]*(?:href|link|url)["'])\s*[:=]\s*\{?\s*\\?["'`](\/(?!\/)[^"'`\s\\]*)/gi, path: 1 },
];
const STAGE = /https?:\/\/stage\.testmuinternal\.ai[^"'`\s)<>\\]*/gi;

const refs = []; // {file, line, path, route, self, outside}
const stageRefs = [], hostWarns = [], localErrors = [];
const tidy = (p) => (p || "/").replace(/#.*$/, "").replace(/[.:!?]+$/, "") || "/";
const decode = (p) => { try { return decodeURIComponent(p); } catch { return p; } };
// Line numbers: newline offsets once per file, then a binary search (masking keeps every newline in place).
const newlines = (s) => { const out = []; for (let i = s.indexOf("\n"); i >= 0; i = s.indexOf("\n", i + 1)) out.push(i); return out; };

for (const f of files) {
  if (!existsSync(f)) die(`no such file: ${f}`);
  const abs = resolve(f);
  const { root: fRoot, kind } = fileKind(abs);
  const rel = fRoot ? relative(fRoot, abs).split(sep).join("/") : abs;
  let raw = readFileSync(abs, "utf8").replace(/^\uFEFF/, "");
  if (kind === "docs") raw = raw.replace(/\$\{\s*BRAND_URL\s*\}/g, PROD); // ${BRAND_URL}/x/ is an absolute estate URL
  const NL = newlines(raw);
  const lineAt = (_src, idx) => { let lo = 0, hi = NL.length; while (lo < hi) { const mid = (lo + hi) >> 1; if (NL[mid] < idx) lo = mid + 1; else hi = mid; } return lo + 1; };
  const self = routeOfFile(abs);
  const outside = otherRepo(abs);
  const seen = new Set();
  const add = (idx, path, src) => {
    path = tidy(path);
    if (path.includes("${") || ASSET.test(path.replace(/\?.*$/, ""))) return;
    const line = lineAt(src, idx);
    const isSelf = !!self && key(path) === self;
    const id = isSelf ? "self" : `${line}|${path}`;
    if (seen.has(id)) return;
    seen.add(id);
    refs.push({ file: f, line, path, route: key(path), self: isSelf, outside });
  };
  let src = raw;
  const isMd = /\.mdx?$/i.test(abs), isJson = /\.json$/i.test(abs), isJs = /\.(js|jsx|ts|tsx|mjs|cjs)$/i.test(abs);
  const sidebar = kind === "docs" && isJs && /^sidebars[^/]*\.js$/.test(rel);
  if (sidebar) { // doc ids and root-relative hrefs here; absolute and stage-host hrefs in the passes below
    const { found, missing } = analyseSidebar(raw, fRoot);
    for (const x of found) add(x.idx, x.path, raw);
    for (const x of missing) localErrors.push({ file: f, line: lineAt(raw, x.idx), what: x.what });
  } else if (isJson) {
    // Keys that hold links, including arrays (tools.json related_tools) and bare slugs (QuestionData.json).
    let data = null;
    try { data = JSON.parse(raw); } catch { /* the regex pass below still runs */ }
    let cursor = 0;
    const at = (s) => { const needle = JSON.stringify(s); let i = raw.indexOf(needle, cursor); if (i < 0) i = raw.indexOf(needle); else cursor = i + needle.length; return i; };
    const walk = (v, k) => {
      if (Array.isArray(v)) { for (const x of v) walk(x, k); return; }
      if (v && typeof v === "object") { for (const [kk, vv] of Object.entries(v)) walk(vv, kk); return; }
      if (typeof v !== "string") return;
      let path = null;
      if (/href|link|url|related/i.test(k) && /^\/(?!\/)/.test(v)) path = v;
      else if (kind === "dynamic" && rel === "components/TestingQuestion/QuestionData.json" && k === "href" && slugLike.test(v)) path = `/software-testing-questions/${v.replace(/\/$/, "")}/`;
      if (path) { const i = at(v); if (i >= 0) add(i, path, raw); }
    };
    if (data) walk(data, "");
  } else if (isMd) {
    const pass1 = mask(raw, mdxMask(raw));
    // inline code `...`, but not a JSX template literal: href={`https://...`} (its backticks are set aside first, so
    // its closing backtick cannot pair with the next inline-code backtick on the line)
    const probe = pass1.replace(/\{\s*`[^`\n]*`\s*\}/g, (m) => m.replace(/`/g, "'"));
    const inline = [...probe.matchAll(/(?<!\\)`[^`\n]+`(?!`)/g)].map((m) => [m.index, m.index + m[0].length]);
    src = mask(pass1, inline);
    const docs = kind === "docs"; // outside the docs (public/agents.md, a link plan) a link is served as written
    const docsDir = fRoot ? join(fRoot, "docs") : "";
    const viaLink = (u, idx) => { // Markdown link, reference definition or <Link to>: rendered by Docusaurus <Link>
      u = u.trim().replace(/^<|>$/g, "");
      if (!u || /^(#|mailto:|tel:|data:|javascript:|pathname:)/i.test(u) || u.startsWith("//")) return;
      if (/^[a-z][a-z0-9+.-]*:/i.test(u)) return; // absolute URLs: the estate pattern below picks them up
      if (u.startsWith("/")) { add(idx, docs ? docsLinkPath(u) : u, src); return; }
      if (!docs) return;
      const [, p, tail] = u.match(/^([^?#]*)(.*)$/);
      if (/\.mdx?$/i.test(p)) { // ./other-doc.md -> that doc's route
        const target = resolve(dirname(abs), decode(p));
        const route = dirname(target) === docsDir ? docsIndex(fRoot).byFile.get(basename(target)) : null;
        if (route) add(idx, route + tail.replace(/#.*$/, ""), src);
        else localErrors.push({ file: f, line: lineAt(src, idx), what: `links ${p}, which is not a file in docs/ in this checkout` });
        return;
      }
      if (FILE_EXT.test(p.split("/").pop() || "")) { localFile(p, idx); return; } // ../assets/images/x.png
      if (self) add(idx, new URL(u, PROD + self).pathname, src);
    };
    // An image or file the doc points at must be in the same branch: a doc merged to testmuCom without its image
    // fails the production build ("Can't resolve ../assets/images/..."), which happened 4 times in November 2026.
    const localFile = (p, idx) => {
      if (!docs || existsSync(resolve(dirname(abs), decode(p)))) return;
      localErrors.push({ file: f, line: lineAt(src, idx), what: `uses ${p}, which is not in this checkout (the production build fails on a missing file)` });
    };
    for (const m of src.matchAll(/\]\(\s*(<[^>]+>|[^\s)]+)/g)) viaLink(m[1], m.index);
    for (const m of src.matchAll(/^[ \t]{0,3}\[[^\]\n]+\]:[ \t]*(<[^>]+>|\S+)/gm)) viaLink(m[1], m.index);
    const tagAt = (i) => { const lt = src.lastIndexOf("<", i); const t = lt >= 0 && src.slice(lt, i).match(/^<([A-Za-z][\w.]*)/); return t ? t[1] : ""; };
    for (const m of src.matchAll(/\b(href|to)\s*=\s*\{?\s*["'`]([^"'`\s]+)/g)) {
      if (docs && (m[1] === "to" || tagAt(m.index) === "Link")) viaLink(m[2], m.index); // <Link to|href>: rendered by Docusaurus
      else if (m[1] === "href" && m[2].startsWith("/") && !m[2].startsWith("//")) add(m.index, m[2], src); // raw <a href>: served as written
    }
    for (const m of src.matchAll(/(?:\brequire\(\s*|\bfrom\s+|\bsrc=\{?\s*)["'](\.{1,2}\/[^"'\s]+)["']/g)) {
      if (FILE_EXT.test(m[1].split("/").pop())) localFile(m[1], m.index); // require('../assets/x.png'), import x from './y.png'
    }
  } else if (isJs) {
    const { ranges, found } = analyseJs(raw, kind, rel, /\.tsx?$/i.test(abs));
    src = mask(raw, ranges);
    for (const x of found) add(x.idx, x.path, raw);
  }
  for (const { re, path: pi, host: hi } of PATTERNS) {
    if ((isMd || sidebar) && re !== PATTERNS[1].re) continue; // Markdown and sidebars: relative links were read above
    for (const m of src.matchAll(re)) {
      if (hi && !/^www\.testmuai\.com$/i.test(m[hi])) hostWarns.push({ file: f, line: lineAt(src, m.index), url: m[0] });
      add(m.index, m[pi], src);
    }
  }
  for (const m of src.matchAll(STAGE)) stageRefs.push({ file: f, line: lineAt(src, m.index), url: m[0] });
}
for (const r of routesArg.split(",").map((s) => s.trim()).filter(Boolean)) {
  const path = cleanPath(r).replace(/#.*$/, "");
  refs.push({ file: "--routes", line: 0, path, route: key(path), self: false, outside: false });
}

if (listOnly) { // no requests; the errors that need none (missing doc, image or sidebar id, stage host) still exit 1
  for (const r of refs) console.log(`${r.file}\tL${r.line}\t${r.path}${r.self ? "\t(self)" : ""}`);
  for (const e of localErrors) console.log(`${e.file}\tL${e.line}\tERROR: ${e.what}`);
  for (const s of stageRefs) console.log(`${s.file}\tL${s.line}\tERROR: ${s.url} links the stage host`);
  for (const h of hostWarns) console.log(`${h.file}\tL${h.line}\tWARN: ${h.url} uses a host other than www.testmuai.com`);
  console.log(`check-prod-links: ${refs.length} reference(s), ${new Set(refs.map((r) => r.path)).size} distinct path(s); --list sends no requests`);
  process.exitCode = localErrors.length || stageRefs.length ? 1 : 0;
  process.exit();
}

// ---- production status -----------------------------------------------------------------------------------------
async function get(url) {
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const res = await fetch(url, {
        redirect: "manual",
        headers: { "user-agent": "Mozilla/5.0 (check-prod-links)" },
        signal: AbortSignal.timeout(30000),
      });
      if ((res.status >= 500 || res.status === 429) && attempt === 0) {
        await res.arrayBuffer().catch(() => {});
        await new Promise((r) => setTimeout(r, 1500));
        continue;
      }
      const row = { code: res.status, location: res.headers.get("location") || "", noindex: false, client: false };
      const body = await res.text().catch(() => "");
      if (res.status === 200) {
        const meta = body.match(/<meta[^>]+name=["']robots["'][^>]*>/i);
        row.noindex = !!meta && /noindex/i.test(meta[0]);
        const refresh = body.match(/<meta[^>]+http-equiv=["']refresh["'][^>]*content=["']\s*\d+\s*;\s*url=([^"'\s]+)/i);
        if (refresh && new URL(refresh[1], url).href !== url) Object.assign(row, { code: 307, location: refresh[1], client: true });
      }
      return row;
    } catch (e) {
      if (attempt === 1) return { code: "ERR", location: String(e.cause?.code || e.message).slice(0, 60), noindex: false };
      await new Promise((r) => setTimeout(r, 1500));
    }
  }
}
// Follows same-site redirects (up to 3 hops): production 301s every slashless path, including ones whose slashed
// form is a 404, so a redirect is judged by where it lands.
async function probe(path) {
  let url = PROD + path;
  const hops = [];
  for (let i = 0; ; i++) {
    const r = await get(url);
    const isRedirect = typeof r.code === "number" && r.code >= 300 && r.code < 400 && r.location;
    if (!isRedirect) return { final: r.code, noindex: r.noindex, hops, err: r.code === "ERR" ? r.location : "" };
    const next = new URL(r.location, url);
    if (next.origin !== PROD) return { final: "OFFSITE", hops: [...hops, next.href], noindex: false };
    hops.push(next.pathname + next.search + (r.client ? " (client-side redirect)" : ""));
    if (i === 2) return { final: "LOOP", hops, noindex: false };
    url = next.href;
  }
}
const status = new Map(); // path -> probe result
const queue = [...new Set(refs.map((r) => r.path))];
await Promise.all(Array.from({ length: 8 }, async () => {
  while (queue.length) { const p = queue.shift(); status.set(p, await probe(p)); }
}));

// ---- report ----------------------------------------------------------------------------------------------------
const tally = { live: 0, notLive: 0, redirect: 0, noindex: 0, ships: 0 };
const shipping = new Map();
const byFile = new Map();
const push = (f, s) => { if (!byFile.has(f)) byFile.set(f, []); byFile.get(f).push(s); };
// Each path is tallied under the worst verdict any of its references got (a path can be this page's own URL in one
// file and a NOT LIVE link in another), and the exit code comes from the references themselves, never the order.
const RANK = { live: 0, noindex: 1, redirect: 2, ships: 3, notLive: 4 };
const worst = new Map();
const count = (p, kind) => { if (!worst.has(p) || RANK[kind] > RANK[worst.get(p)]) worst.set(p, kind); };
let blocked = false;
const outsideNoted = new Set();
const warned = new Set();
const clientRedirects = REPO === "docs" ? docsIndex(ROOT).redirects : new Map();
for (const r of refs) {
  const s = status.get(r.path);
  const at = r.line ? `L${r.line} ` : "";
  const via = s.hops.length ? ` -> ${s.hops.join(" -> ")}` : "";
  const client = s.final === 200 && clientRedirects.get(key(r.path.replace(/\?.*$/, "")));
  if (client && !r.self) {
    if (warned.has(`${r.file}|${r.path}`)) continue;
    warned.add(`${r.file}|${r.path}`);
    count(r.path, "redirect");
    push(r.file, `  ! ${at}${r.path} -> 200, but the doc is a <Redirect> to ${client} (client-side redirect: link the destination)`);
    continue;
  }
  if (s.final === 200 && !s.hops.length && !s.noindex) { count(r.path, "live"); continue; }
  // A warning (redirect, noindex) is printed once per file and path, not once per line.
  if ((s.final === 200 || s.final === "OFFSITE") && warned.has(`${r.file}|${r.path}`)) continue;
  if (s.final === 200 || s.final === "OFFSITE") warned.add(`${r.file}|${r.path}`);
  if (s.final === 200 && !s.hops.length) { count(r.path, "noindex"); push(r.file, `  ! ${at}${r.path} -> 200, noindex (live, but passes no SEO value)`); continue; }
  if (s.final === 200 && /^\/docs\/[^/]+\/$/.test(r.path) && s.hops[0]?.startsWith("/docs/docs/")) {
    count(r.path, "redirect"); // the Kane CLI docs are served without a trailing slash
    push(r.file, `  ! ${at}${r.path}${via} (the Kane CLI docs take no trailing slash: write ${r.path.slice(0, -1)})`);
    continue;
  }
  if ((s.final === 200 || s.final === "OFFSITE") && r.self) {
    count(r.path, "redirect"); // a canonical or schema URL of a page the CDN redirects elsewhere
    push(r.file, `  ! ${at}${r.path}${via} (this page's own URL redirects on production: links to this page should point at the destination)`);
    continue;
  }
  if (s.final === 200 || s.final === "OFFSITE") {
    count(r.path, "redirect");
    push(r.file, `  ! ${at}${r.path}${via} (redirect${s.final === "OFFSITE" ? " off the site" : ", lands on a live page"}: link the destination)${s.noindex ? " [destination is noindex]" : ""}`);
    continue;
  }
  const why = s.final === "LOOP" ? "more than 3 redirects" : s.err ? `no answer (${s.err})` : s.hops.length ? `redirects to a ${s.final}` : `${s.final}`;
  if (r.self) {
    count(r.path, "ships");
    shipping.set(r.route, "this page's own URL (a new page)");
    push(r.file, `  ~ ${r.route} -> ${why}: this page's own URL, not live yet (a new page)`);
    continue;
  }
  if (!r.outside && ships.has(r.route)) {
    count(r.path, "ships");
    shipping.set(r.route, ships.get(r.route));
    push(r.file, `  ~ ${at}${r.path}${via} -> ${why}, ships in the same pull request (${ships.get(r.route)})`);
    continue;
  }
  count(r.path, "notLive");
  blocked = true;
  push(r.file, `  x ${at}${r.path}${via} -> ${why}: NOT LIVE on production`);
  if (r.outside && ships.has(r.route) && !outsideNoted.has(r.file)) {
    outsideNoted.add(r.file);
    push(r.file, "    (this file is in another repository, so --ships-with does not apply: that repo ships on its own. Link the page once it is live)");
  }
}
for (const kind of worst.values()) tally[kind]++;
for (const e of localErrors) { tally.notLive++; blocked = true; push(e.file, `  x L${e.line} ${e.what}`); }
for (const s of stageRefs) { tally.notLive++; blocked = true; push(s.file, `  x L${s.line} ${s.url} -> links the stage host; use a live production path`); }
const hostSeen = new Set();
for (const h of hostWarns) {
  if (hostSeen.has(`${h.file}|${h.url}`)) continue;
  hostSeen.add(`${h.file}|${h.url}`);
  push(h.file, `  ! L${h.line} ${h.url} -> this host redirects; use https://www.testmuai.com`);
}

for (const [f, lines] of byFile) { console.log(f); lines.forEach((l) => console.log(l)); }
console.log(`check-prod-links: ${status.size} path(s) checked on ${PROD}: ${tally.live} live, ${tally.notLive} NOT live, ${tally.redirect} redirected, ${tally.noindex} noindex, ${tally.ships} shipping with this pull request`);
if (shipping.size) console.log(`Ship together in ONE pull request to ${PROFILE.prod}, never the linking page first: ${[...shipping].map(([r, w]) => `${r} (${w})`).join(", ")}`);
if (blocked) console.log("RESULT: BLOCKED - a link points at a page that is not live on production. Link a live page, or remove the link; a stage-only page is not live.");
// exitCode, not process.exit(): exiting while fetch sockets close trips a libuv assertion on Windows (exit 127).
process.exitCode = blocked ? 1 : 0;
