# CLAUDE.md

Guidance for Claude Code and other agents working in this repository. This file is shared through git; personal notes go in `CLAUDE.local.md`, which is gitignored.

## What this repo is

The TestMu AI documentation, served at https://www.testmuai.com/support/docs/. It is a Docusaurus 3 site: `docusaurus.config.js` sets `baseUrl: '/support/'`, `trailingSlash: true` and `onBrokenLinks: 'throw'`. Every doc is a flat file in `docs/*.md` or `docs/*.mdx` (no subfolders). `sidebars.js` and `sidebars-unified.js` build the navigation, `src/pages/docs.js` is the docs home (/support/docs/) and `src/pages/faq/index.jsx` is /support/faq/. Setup, local runs and the sitemap pipeline are in `README.md`.

```bash
npm install --legacy-peer-deps
npm start        # dev server at http://localhost:3000
npm run build    # fails on broken <Link> links and missing images, checked against THIS branch only (see below)
```

## How a doc's URL is formed

A doc is served at `/support/docs/<slug>/`, where `<slug>` is its frontmatter `slug:`, else its `id:`, else the file name without the extension. Paths are case-sensitive: `docs/device-reservation.md` has `slug: Device-reservation/`, so `/support/docs/Device-reservation/` is 200 and `/support/docs/device-reservation/` is 404.
- Never build a link from the file name: 209 docs have a slug that differs from it (`docs/ai-test-failure-analysis.md` is `/support/docs/ai-powered-test-failure-analysis/`).
- Never copy a doc's `url:` field as a link: 28 docs have a `url:` that is not their route (`docs/kane-ai-smart-variables.md` says `/kane-smart-variables/`, a 404).
- In a new doc, set `slug: <slug>/` and make `url:` and `canonical:` `https://www.testmuai.com/support/docs/<slug>/` (not the testmu.ai host).
- 228 docs start with a UTF-8 BOM: strip it before you read the frontmatter.

## Branches and pull requests

- `stage`: cut feature branches (`<prefix>/<ticket-id>`, see README) from `stage` and open the PR into `stage`. A push deploys a noindex stage site.
- `testmuCom`: production and GitHub's default branch. A push runs `.github/workflows/testmucom-prod-deployment.yml`. PRs into it come from branches based on LambdaTest/documentation's `testmuCom`, opened in one of two ways: a `-prod` or `-testmuCom` branch in this repo (e.g. #3986 `feat/TE-36307-prod` alongside stage PR #3985, or `feature/<name>-testmuCom`), or a fork's `testmuCom` branch. Forks opened 16 of the last 30 testmuCom PRs, including #3942, whose merge failed the 2026-11-16 deploy.
- `main` has been frozen since 2026-06-04 and is not production: 463 docs on `testmuCom` are missing from it. The local `origin/HEAD -> origin/main` symref is stale. Never use `main` or `origin/HEAD` as a base, a diff target or a source of truth.
- No build and no link check runs on pull requests; the only PR check is the static Markdown fence check. The build runs at deploy time, after the merge.

## Generated files: never hand-edit

- `static/docs/*.md`, by `scripts/generate-static-md.js`. The one exception is `static/docs/SKILL.md`, the hand-kept source of the skills index.
- `static/docs/llms.txt`, by `scripts/generate-llms-txt.js`. It lists the docs of the branch it was built from, stage-only docs included, so never read the checkout's copy as the list of live docs.
- the skills index `static/.well-known/skills/index.json`, by `scripts/generate-skill-index.js` from `static/docs/SKILL.md`.
- `src/data/api/all-apis.json` and `src/pages/api-doc/*/`, by `scripts/build-api-data.js` and `scripts/generate-api-pages.js`.

All of them regenerate on `npm start` and `npm run build`.

## Internal Links: Only to Pages Live in Production

Production is `https://www.testmuai.com`, and the docs ship from `testmuCom`. A doc in your checkout, on a `*-stage` branch, on `origin/stage` or on the stage site, a sidebar id, an entry in `static/docs/llms.txt`, a sitemap or a sibling repo's checkout is not in production until it reaches `testmuCom`, and a link to it is a 404 there. On 2026-11-23, 7 docs on stage returned 404 in production (e.g. /support/docs/hyperexecute-workflow-governance/ and /support/docs/appium-agent-skills/), and the live docs `hyperexecute-workflows.md` and `hyperexecute-org-product-preferences.md`, plus `sidebars.js`, had stage edits linking hyperexecute-workflow-governance.

A passing build is not proof either. `onBrokenLinks: 'throw'` checks only links rendered through `<Link>` (root-relative Markdown links, `<Link to>`, sidebar links and doc ids), and only against the routes of the branch being built: on stage those include the stage-only docs. It never checks absolute `https://www.testmuai.com/...` links, `${BRAND_URL}` links, raw `<a href>`, the `src/pages/docs.js` cards or CDN redirects. On `testmuCom` it runs after the merge. On 2026-11-16 the production deploy failed (Actions run 43907645012, "Docusaurus found broken links") because a merged doc linked /support/docs/phone-agent-performance-testing/, which had not reached `testmuCom`, and four more November deploys failed on images merged without their files. Production stays on the last good build, and every later deploy fails, until the branch is fixed.

- **Link only to pages that return 200 in production.** Check a doc with `node scripts/check-prod-links.mjs docs/<file>.md` (pass `src/` files the same way; checking a doc does not check its sidebar entry, so check a new sidebar entry's target with `--routes`), and a link plan before you write with `node scripts/check-prod-links.mjs --routes /support/docs/a/,/blog/b/,/docs/kane-cli-modes` (production paths as served). Exit 1 (NOT LIVE) blocks delivery. No CI runs this check, so run it yourself. A `!` warning is a redirect (link the destination), a noindex page (live, but it passes no SEO value), a host other than `www.testmuai.com` (testmu.ai, bare testmuai.com: use `https://www.testmuai.com`) or a Kane CLI link with a trailing slash (drop the slash). If the script cannot run, use `curl -s -o /dev/null -w "%{http_code} %{redirect_url}" https://www.testmuai.com/<path>` and accept only 200. WebFetch is not a check: it follows redirects.
- **Write each kind of link this way:**
  - another doc: a root-relative Markdown link, `[text](/support/docs/<slug>/)` or `[text](/docs/<slug>/)`. Both render as /support/docs/<slug>/ and the build checks them against this branch. A raw `<a href>` is served exactly as written and the build never checks it (the production link check does), so it must be `/support/docs/<slug>/`.
  - blog, learning hub, website and free-tools pages: absolute `https://www.testmuai.com/<path>/`. A root-relative `/blog/x/` renders as /support/blog/x/.
  - the Kane CLI docs: `https://www.testmuai.com/docs/<slug>` with no trailing slash (the slash form 308s to /docs/docs/<slug>). `/support/docs/kane-cli-*` 301s there, so link the destination.
  - `${BRAND_URL}/<path>/` is an absolute link: the build never checks it, so it needs the production check like any other.
- **A redirect means: link the destination.** `sitemap-live-exclusions.json` lists 107 docs routes the CDN 301s. The in-repo `<Redirect>` docs serve 200 and move the reader in the browser; the check warns on a link to one and names its target (`npm run sitemap-exclusions` lists them all).
- **The one exception: pages that ship together.** A link may point at a doc that is not live yet only when both reach `testmuCom` in the same PR: a new doc, its sidebar entry and the docs that link it. Name the target by file or served path, `--ships-with docs/<new-doc>.md` or `--ships-with /support/docs/<slug>/` (`--ships-with /docs/<slug>/` is read as the same doc; in `--routes`, `/docs/<slug>` is the Kane CLI site), and list the pairs in the PR body as "ships together".
- **Pages in other repos never ship together.** The blog, learning hub, website and free tools ship on their own pipelines: link a new page there only after it returns 200 in production. Never name one of their routes or files in `--ships-with`: the script accepts only a doc or page this checkout serves and drops anything else with a warning, so the link stays NOT LIVE.
- **If a target is not live:** link a live page on the same subject (check it with `--routes`) or drop the link, and list it in your summary as a follow-up to add once the page is live. Never link the stage site.
- **The rule covers every link a doc makes:** Markdown links and reference definitions, relative `./x.md` links, `<a href>`, `<Link to>`, `${BRAND_URL}` and other absolute links, FAQ and related-resources links, sidebar doc ids and hrefs in `sidebars*.js`, and the cards and tables in `src/` (`src/pages/docs.js`, `src/pages/faq/index.jsx`, `src/component/SupportedLanguages/`). The script skips JSON-LD, so check links inside a JSON-LD FAQ or HowTo `text` string with `--routes`. `README.md` ("Build and verify links", "Links: only to pages live in production", "Publishing workflow") gives contributors the same steps.

### Before a pull request

- **Into `stage`:** run `node scripts/check-prod-links.mjs` on every doc and `src/` file you changed, with `--ships-with` for a target doc that is not live yet, e.g. `node scripts/check-prod-links.mjs docs/<new-doc>.md docs/<linking-doc>.md --ships-with docs/<new-doc>.md`. For a sidebar entry you added, check its target with `--routes /support/docs/<slug>/` rather than all of `sidebars.js` (about 1,300 requests).
  - Only the lines you add or change must pass. `sidebars.js` and some docs on stage already link stage-only docs (on 2026-11-23, six sidebar entries, e.g. hyperexecute-workflow-governance and appium-agent-skills), so a NOT LIVE line you did not touch is pre-existing. Find yours by comparing the line numbers in the output with `git diff origin/stage -- <file>`. Leave a pre-existing one, note it in the PR body, and never delete another doc's sidebar entry or link to make the check pass.
  - A doc that is on stage from an earlier PR but not live may be linked only when the PR body lists the pair as "ships together", so the docs team promotes both in one testmuCom PR. Name it in `--ships-with`. The binding check is `--changed origin/testmuCom` on the testmuCom branch.
- **Into `testmuCom`:** on the branch you open the PR from (based on LambdaTest/documentation's `testmuCom`: a `-prod` or `-testmuCom` branch, or a fork's `testmuCom`), run `git fetch origin testmuCom`, then `node scripts/check-prod-links.mjs --changed origin/testmuCom`. It checks every doc, sidebar and `src/` file the branch changes and treats them as shipping together. It refuses `origin/main` and `origin/stage`.
  - In a fork clone, `origin` is your fork, and against the fork's own `testmuCom` the diff is empty: the check reports `0 content file(s) changed` and exits 0 without checking anything. Fetch and compare the remote that points at LambdaTest/documentation instead, usually `git fetch upstream testmuCom` and `--changed upstream/testmuCom`. If the check reports 0 content files changed on a branch that changes docs, the base is wrong.
  - Never run it on a stage-based branch: that diff holds about 1,500 files, which would all count as shipping.
  - If the branch does not have `scripts/check-prod-links.mjs`, run a stage checkout's copy from inside it: `node <stage-checkout>/scripts/check-prod-links.mjs --changed origin/testmuCom` (it checks the repo you run it from).
  - Then run `npm run build` on the same branch. Built from `testmuCom` plus your changes, it fails on a missing image or a `<Link>`-rendered link to a doc that is not in the PR, before the merge instead of at deploy time. The link check already flags an image or file that a changed doc uses (`![...](../assets/...)`, `require(...)`) and that is not in your checkout: commit it with the doc.
- **Never merge a linking doc or sidebar entry to `testmuCom` without its target doc and its images.** Deleting a doc or changing its slug takes a live URL away: fix the links to the old route in the same PR. `--changed` warns with the routes of the docs the branch deletes (not of a changed slug), but it reads only the files the branch changes, so it does not find the links to them: search with `grep -rn "<old-slug>" docs/ src/ sidebars*.js`, which also finds absolute and `${BRAND_URL}` links.
