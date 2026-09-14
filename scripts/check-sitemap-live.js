#!/usr/bin/env node
'use strict';

/**
 * check-sitemap-live.js — probe every URL in the built sitemap against the live
 * site and report the URLs Google would exclude anyway.
 *
 * Ported from lambdatest-website-next/check-sitemaps-live.js. Same four
 * classes, same sitemap-live-exclusions.json schema, so the four repos stay
 * consistent. Two deliberate differences:
 *
 *  - It is NOT wired into `npm run build`. The reference repos run it inside
 *    their build; here it stays a manual step, so a deploy never depends on
 *    network conditions and never silently rewrites the shipped sitemap.
 *  - The host defaults to whatever the sitemap's own <loc> entries carry, i.e.
 *    `url` from docusaurus.config.js. That is only the live host on the branch
 *    that deploys it: a branch building for lambdatest.com produces a sitemap
 *    whose URLs 404 on that host while the pages live on testmuai.com. Pass
 *    --host=<hostname> to probe somewhere else; the run prints the host it used.
 *
 * Usage:
 *   npm run sitemap-live-check                 report only
 *   npm run sitemap-live-check -- --fix        record redirects for exclusion
 *   npm run sitemap-live-check -- --full       also classify 404/noindex/canonical
 *   npm run sitemap-live-check -- --prune      drop entries that no longer redirect
 *   npm run sitemap-live-check -- --host=www.testmuai.com
 *
 * Flags: --sitemap=<path> --host=<hostname> --budget=<seconds> --concurrency=<n>
 *        --timeout=<seconds>
 *
 * Exit codes: 0 clean or safely skipped, 1 findings that need action,
 *             2 a safety guard tripped.
 */

const fs = require('fs');
const path = require('path');

const { LIVE_EXCLUSIONS_FILE, toRoute } = require('./sitemap-exclusions');

const ROOT = path.resolve(__dirname, '..');

// ------------------------------------------------------------------- arguments

const argv = process.argv.slice(2);
const has = (flag) => argv.includes(flag);
const value = (name, fallback) => {
  const hit = argv.find((a) => a.startsWith(`--${name}=`));
  return hit ? hit.slice(name.length + 3) : fallback;
};

const FIX = has('--fix');
const PRUNE = has('--prune');
const FULL = has('--full');
const SITEMAP = path.resolve(ROOT, value('sitemap', path.join('build', 'sitemap.xml')));
const HOST = value('host', null);

/**
 * A mistyped numeric flag must not silently degrade the run. `--concurrency=abc`
 * used to coerce to NaN, which sized the worker pool to zero: nothing was probed
 * and the run reported a clean sitemap.
 */
function numberFlag(name, fallback, { min = 1, max = Infinity } = {}) {
  const raw = value(name, null);
  if (raw === null) return fallback;
  const n = Number(raw);
  if (!Number.isFinite(n) || n < min || n > max) {
    console.error(`--${name}=${raw} is not a number between ${min} and ${max}.`);
    process.exit(2);
  }
  return n;
}

const BUDGET_MS = numberFlag('budget', 300, { min: 10, max: 86400 }) * 1000;
const CONCURRENCY = numberFlag('concurrency', 16, { min: 1, max: 64 });
const TIMEOUT_MS = numberFlag('timeout', 8, { min: 1, max: 120 }) * 1000;

// Safety limits. The failure that matters is not a slow check — it is a CDN
// blip that makes every URL look redirected, whereupon --fix would blank the
// sitemap. These caps make that outcome impossible without a human.
const BAILOUT_RATIO = 0.2; // errors+redirects above this => the site, not the pages
const MAX_NEW_EXCLUSIONS = (total) => Math.max(25, Math.floor(total * 0.02));
// A blanket edge rule shows up as MANY urls sharing one destination. Both the
// ratio and the floor must be exceeded — otherwise a single legitimate redirect
// on a small sitemap looks like a site-wide rule and blocks the write.
const SAME_TARGET_RATIO = 0.05;
const SAME_TARGET_FLOOR = 5;

// ----------------------------------------------------------------------- input

function readSitemapUrls(file) {
  if (!fs.existsSync(file)) {
    console.error(`No sitemap at ${path.relative(ROOT, file)}.`);
    console.error('Run `npm run build` first, or pass --sitemap=<path>.');
    console.error('(If the branch sets noIndex, Docusaurus writes no sitemap by design.)');
    return null;
  }
  const xml = fs.readFileSync(file, 'utf8');
  const urls = [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1]);
  return [...new Set(urls)];
}

// --------------------------------------------------------------------- probing

async function probe(url, method) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      method,
      redirect: 'manual',
      signal: controller.signal,
      headers: { 'user-agent': 'testmu-docs-sitemap-check/1.0' },
    });
    return res;
  } finally {
    clearTimeout(timer);
  }
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function classify(url) {
  for (let attempt = 0; attempt < 2; attempt += 1) {
    try {
      const res = await probe(url, FULL ? 'GET' : 'HEAD');
      const status = res.status;

      if (status >= 300 && status < 400) {
        const location = res.headers.get('location') || '';
        return { url, status, klass: 'REDIRECT', detail: location };
      }
      if (status === 404 || status === 410) {
        return { url, status, klass: 'MISSING', detail: '' };
      }
      // An X-Robots-Tag added at the edge is the one noindex the build cannot
      // see; Docusaurus already drops pages that render the meta tag themselves.
      const xRobots = res.headers.get('x-robots-tag') || '';
      if (/noindex/i.test(xRobots)) {
        return { url, status, klass: 'NOINDEX', detail: `x-robots-tag: ${xRobots}` };
      }
      if (FULL && res.ok) {
        const html = await res.text();
        const meta = /<meta[^>]+name=["']robots["'][^>]*content=["']([^"']*noindex[^"']*)["']/i.exec(html);
        if (meta) return { url, status, klass: 'NOINDEX', detail: `meta robots: ${meta[1]}` };
        const canonical = /<link[^>]+rel=["']canonical["'][^>]*href=["']([^"']+)["']/i.exec(html);
        if (canonical && toRoute(canonical[1]) !== toRoute(url)) {
          return { url, status, klass: 'CANONICAL', detail: canonical[1] };
        }
      }
      return { url, status, klass: 'OK', detail: '' };
    } catch (err) {
      if (attempt === 0) {
        await sleep(250 + Math.floor(Math.random() * 250));
        continue;
      }
      return { url, status: 0, klass: 'FETCH-ERR', detail: String(err.message || err) };
    }
  }
  return { url, status: 0, klass: 'FETCH-ERR', detail: 'unreachable' };
}

async function runPool(urls, deadline) {
  const results = [];
  let cursor = 0;
  let abortedForBudget = false;

  async function worker() {
    while (cursor < urls.length) {
      if (Date.now() > deadline) {
        abortedForBudget = true;
        return;
      }
      const url = urls[cursor++];
      results.push(await classify(url));
      if (results.length % 100 === 0) {
        process.stdout.write(`  ...${results.length}/${urls.length}\n`);
      }
    }
  }

  await Promise.all(Array.from({ length: Math.min(CONCURRENCY, urls.length) }, worker));
  return { results, abortedForBudget };
}

// ------------------------------------------------------------------ exclusions

function readExclusions() {
  if (!fs.existsSync(LIVE_EXCLUSIONS_FILE)) return [];
  const parsed = JSON.parse(fs.readFileSync(LIVE_EXCLUSIONS_FILE, 'utf8'));
  return Array.isArray(parsed) ? parsed : [];
}

function writeExclusions(entries) {
  const sorted = [...entries].sort((a, b) => a.url.localeCompare(b.url));
  fs.writeFileSync(LIVE_EXCLUSIONS_FILE, `${JSON.stringify(sorted, null, 2)}\n`, 'utf8');
}

/** Same field names and reason format as the three reference repos. */
function toEntry(result, today) {
  const target = result.detail ? toRoute(result.detail) || result.detail : '(no location header)';
  return {
    url: toRoute(result.url),
    reason: `live ${result.status} -> ${target}`,
    detected: today,
  };
}

// ------------------------------------------------------------------------ main

async function main() {
  const startedAt = Date.now();
  let urls = readSitemapUrls(SITEMAP);
  if (urls === null) return 1;
  if (HOST && urls.length) {
    urls = urls.map((u) => {
      const parsed = new URL(u);
      parsed.host = HOST;
      return parsed.toString();
    });
  }
  if (!urls.length) {
    console.error(`${path.relative(ROOT, SITEMAP)} contains no <loc> entries.`);
    return 1;
  }

  console.log(
    `Probing ${urls.length} URLs from ${path.relative(ROOT, SITEMAP)} ` +
      `against ${new URL(urls[0]).origin} ` +
      `(${FULL ? 'GET' : 'HEAD'}, concurrency ${CONCURRENCY}, ${BUDGET_MS / 1000}s budget)...`
  );

  const { results, abortedForBudget } = await runPool(urls, startedAt + BUDGET_MS);

  const by = (k) => results.filter((r) => r.klass === k);
  const redirects = by('REDIRECT');
  const errors = by('FETCH-ERR');
  const elapsed = ((Date.now() - startedAt) / 1000).toFixed(0);

  console.log(`\nChecked ${results.length}/${urls.length} URLs in ${elapsed}s`);
  for (const k of ['OK', 'REDIRECT', 'MISSING', 'NOINDEX', 'CANONICAL', 'FETCH-ERR']) {
    const n = by(k).length;
    if (n) console.log(`  ${k.padEnd(10)} ${n}`);
  }

  for (const k of ['REDIRECT', 'MISSING', 'NOINDEX', 'CANONICAL']) {
    const rows = by(k);
    if (!rows.length) continue;
    console.log(`\n${k}:`);
    for (const r of rows) console.log(`  ${r.status} ${toRoute(r.url)}${r.detail ? ` -> ${r.detail}` : ''}`);
  }

  if (abortedForBudget) {
    console.log(`\nSKIPPED: budget of ${BUDGET_MS / 1000}s expired before all URLs were checked.`);
    console.log('Nothing was written. Re-run with a larger --budget for a complete pass.');
    return 0;
  }

  // Guard 1 — if a fifth of the site errors or redirects, the site is having a
  // moment. That is never a content change worth recording.
  const suspicious = (errors.length + redirects.length) / results.length;
  if (suspicious > BAILOUT_RATIO) {
    console.log(
      `\nSKIPPED: ${(suspicious * 100).toFixed(1)}% of URLs errored or redirected ` +
        `(limit ${BAILOUT_RATIO * 100}%). This looks like a site-wide condition, not stale pages.`
    );
    console.log('Nothing was written.');
    return 0;
  }

  if (PRUNE) {
    // Recorded exclusions are, by design, absent from the sitemap — the filter
    // already dropped them — so they are never in `results`. Pruning against
    // `results` would therefore delete every entry. Re-probe them directly, and
    // remove an entry only on a definite 200: an error, a 404 or a still-live
    // redirect all leave it in place.
    const before = readExclusions();
    if (!before.length) {
      console.log('\nNothing to prune.');
    } else {
      const origin = new URL(urls[0]).origin;
      console.log(`\nPruning: re-probing ${before.length} recorded exclusion(s) against ${origin}...`);
      const probe = await runPool(
        before.map((e) => `${origin}${toRoute(e.url)}`),
        startedAt + BUDGET_MS
      );
      if (probe.abortedForBudget) {
        console.log('SKIPPED prune: budget expired before every exclusion was re-probed. Nothing written.');
      } else {
        const byRoute = new Map(probe.results.map((r) => [toRoute(r.url), r]));
        const after = before.filter((e) => {
          const r = byRoute.get(toRoute(e.url));
          return !r || r.klass !== 'OK';
        });
        const removed = before.length - after.length;
        const pruneCap = Math.max(25, Math.floor(before.length * 0.5));
        if (removed > pruneCap) {
          console.error(
            `REFUSING to prune ${removed} of ${before.length} exclusion(s) — above the ${pruneCap} cap. ` +
              'That many entries going healthy at once looks like a probe problem, not a content change.'
          );
          return 2;
        }
        if (removed > 0) {
          writeExclusions(after);
          console.log(`Pruned ${removed} exclusion(s) that now return 200:`);
          for (const e of before.filter((x) => !after.includes(x))) console.log(`  ${toRoute(e.url)}`);
        } else {
          console.log('Nothing to prune — every recorded exclusion still redirects or is unreachable.');
        }
      }
    }
  }

  if (!redirects.length) {
    console.log('\nNo live redirects in the sitemap.');
    return 0;
  }

  if (!FIX) {
    console.log(`\n${redirects.length} redirecting URL(s) are in the sitemap.`);
    console.log('Re-run with --fix to record them in sitemap-live-exclusions.json.');
    return 1;
  }

  // Guard 2 — a blanket edge rule shows up as one shared destination.
  const targets = new Map();
  for (const r of redirects) {
    const key = toRoute(r.detail) || r.detail || '(none)';
    targets.set(key, (targets.get(key) || 0) + 1);
  }
  const [topTarget, topCount] = [...targets.entries()].sort((a, b) => b[1] - a[1])[0];
  if (topCount >= SAME_TARGET_FLOOR && topCount / results.length > SAME_TARGET_RATIO) {
    console.error(
      `\nREFUSING to write: ${topCount} URLs all redirect to ${topTarget} ` +
        `(>${SAME_TARGET_RATIO * 100}% of the sitemap). That is a blanket edge rule, not per-page drift.`
    );
    return 2;
  }

  const existing = readExclusions();
  const known = new Set(existing.map((e) => toRoute(e.url)));
  const today = new Date().toISOString().slice(0, 10);
  const additions = redirects.map((r) => toEntry(r, today)).filter((e) => !known.has(e.url));

  if (!additions.length) {
    console.log('\nAll redirecting URLs are already excluded. No change.');
    return 0;
  }

  // Guard 3 — cap how much one run may remove.
  const cap = MAX_NEW_EXCLUSIONS(results.length);
  if (additions.length > cap) {
    console.error(
      `\nREFUSING to write: ${additions.length} new exclusions exceeds the ${cap}-per-run cap.`
    );
    console.error('Investigate the list above; add entries by hand if they are genuinely all correct.');
    return 2;
  }

  writeExclusions([...existing, ...additions]);
  console.log(`\nRecorded ${additions.length} new exclusion(s) in sitemap-live-exclusions.json:`);
  for (const a of additions) console.log(`  ${a.url} — ${a.reason}`);
  console.log('\nReview the diff, commit it, and the next build will drop these URLs.');
  return 0;
}

// Set exitCode and let the event loop drain instead of calling process.exit():
// with parallel fetches still tearing down, process.exit() trips a libuv
// assertion on Windows and the process dies with 127 on an otherwise clean run.
main()
  .then((code) => {
    process.exitCode = code;
  })
  .catch((err) => {
    console.error(err);
    process.exitCode = 2;
  });
