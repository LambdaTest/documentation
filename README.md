# TestMu AI (Formerly LambdaTest) Documentation 

<p align="center">
  <a href="https://www.testmuai.com/"><img src="https://img.shields.io/badge/MADE%20BY%20TestMu%20AI-000000.svg?style=for-the-badge&labelColor=000" alt="Made by TestMu AI"></a>
<a href="https://docusaurus.io/"><img src="https://img.shields.io/badge/Built%20with-Docusaurus-3ECC5F.svg?style=for-the-badge&labelColor=000000" alt="Docusaurus"></a>
</p>

## Getting Started

[TestMu AI](https://www.testmuai.com/) (Formerly LambdaTest) is the world's first full-stack AI Agentic Quality Engineering platform that empowers teams to test intelligently, smarter, and ship faster. Built for scale, it offers a full-stack testing cloud with 5000+ real devices and 10,000+ browser/device combinations. With AI-native test management, MCP servers, and agent-based automation, TestMu AI supports Selenium, Appium, Playwright, and all major frameworks.

This repository powers TestMu AI documentations built with Docusaurus and React. Contributions are welcome, whether it is fixing a typo or adding a new topic. The docs team will review and ship your changes.

- [Sign up on TestMu AI](https://www.testmuai.com/register/) (Formerly LambdaTest).
- Browse the [TestMu AI Documentation](https://www.testmuai.com/support/docs/) for product guides and references.

### Prerequisites

- [Node.js](https://nodejs.org/en/download/) 18.0 or higher (verify with `node -v`)
- [Git](https://git-scm.com/downloads)
- A code editor such as [VS Code](https://code.visualstudio.com/download)

### Setup

Clone the repo, switch to the `stage` branch and install dependencies:

```bash
git clone git@github.com:LambdaTest/documentation.git && cd documentation
git checkout stage
npm install --legacy-peer-deps
```

Work directly in this repo; you do not need a fork.

`stage`, and so your checkout, holds docs that have not reached production. Before you link one, read [Links: only to pages live in production](#links-only-to-pages-live-in-production).

### Run locally

Start the dev server with hot reload:

```bash
npm start
```

The site runs at `http://localhost:3000`. Stop the server with `Ctrl + C`.

### Build and verify links

Before opening a PR, run a production build to catch missing images and broken links rendered through `<Link>` (root-relative Markdown links, `<Link to>`, sidebar links and doc ids):

```bash
npm run build
npm run serve
```

The build flags issues per file. Fix them, rebuild, and re-serve to verify.

A passing build is not proof that your links are live. The build checks links only against this branch's own routes, and on `stage` those include docs that are not in production. It never checks absolute `https://www.testmuai.com/...` links, `${BRAND_URL}` links, raw `<a href>`, the `src/pages/docs.js` cards or CDN redirects, and `npm run serve` serves your local build, not production. After the build, run the production link check below.

### Links: only to pages live in production

Production is https://www.testmuai.com/support/docs/, built from `testmuCom`. A doc in `docs/`, a sidebar id, an entry in `static/docs/llms.txt` or a page on the stage site is not proof that a page is live: on 2026-11-23, 7 docs on `stage` returned 404 in production (e.g. /support/docs/hyperexecute-workflow-governance/). Check every doc you add or change a link in, and check a link plan before you write it:

```bash
node scripts/check-prod-links.mjs docs/<file>.md                  # pass src/ files the same way; for a new sidebar entry, check its target with --routes
node scripts/check-prod-links.mjs --routes /support/docs/a/,/blog/b/,/kane-ai/   # production paths as served
```

Exit 1 means a target is not live: fix the ones you added or changed before you open the PR (step 3 under "Publishing workflow" covers lines that were already there). A missing image or file that a doc uses is an error too: commit it with the doc. Exit 2 means the check did not run (run `npm install` first if it says `@babel/parser` was not found). No CI runs this check, so run it yourself. A `!` warning is a redirect (link the destination), a noindex page (live, but it passes no SEO value), a host other than `www.testmuai.com` (use `https://www.testmuai.com`), a Kane CLI link with a trailing slash (drop the slash) or a link to one of the in-repo `<Redirect>` docs, which return 200 and move the reader in the browser (link the target it names).

- Link a doc by its frontmatter `slug:`, never by its file name or its `url:` field. Paths are case-sensitive (`/support/docs/Device-reservation/` is 200, `/support/docs/device-reservation/` is 404).
- Write other docs as `[text](/support/docs/<slug>/)` or `[text](/docs/<slug>/)`. Write blog, learning hub and website pages as absolute `https://www.testmuai.com/<path>/` URLs, and the Kane CLI docs as `https://www.testmuai.com/docs/<slug>` with no trailing slash.
- When a target is not live, link a live page on the same subject or drop the link and note it as a follow-up. Never point readers at stage.
- Blog, learning hub, website and free-tools pages ship from their own repos: link one only once it returns 200 in production, and never name it in `--ships-with`: it cannot ship with a docs PR, and the check drops a route this repo does not serve with a warning, so the link stays NOT LIVE.

### Sitemap

`build/sitemap.xml` is generated by `@docusaurus/plugin-sitemap` and published at
`/support/sitemap.xml`, where it is a child of the marketing site's sitemap index.
Following the pipeline used by the website repos, three classes of page are kept out
of it:

| Excluded | How |
| --- | --- |
| Noindexed pages | The plugin reads each route's rendered head and drops anything serving `<meta name="robots" content="noindex">`. Nothing to configure. |
| Redirecting pages | `scripts/sitemap-exclusions.js` scans `docs/` and `src/pages/` for client-side `<Redirect>` pages. These serve HTTP 200, so nothing else can detect them. Link the page they redirect to, not the redirect. |
| CDN-redirected pages | Recorded in `sitemap-live-exclusions.json` by `npm run sitemap-live-check -- --fix`. These routes are in the build but 301 in production (e.g. `/support/docs/kane-cli-*` to `https://www.testmuai.com/docs/kane-cli-*`): link the destination, not the route. |

```bash
npm run sitemap-exclusions       # list what will be excluded, no build needed
npm run sitemap-live-check       # probe the live site, report only
npm run sitemap-live-check -- --fix     # record CDN redirects for exclusion
npm run sitemap-live-check -- --prune   # drop entries that now return 200
```

The checker probes whatever host the built sitemap names, i.e. `url` from
`docusaurus.config.js`. On a branch that builds for a different host than the one
serving the pages, pass `--host=www.testmuai.com`; every run prints the host it
used.

Unlike the website repos, the live check is **not** wired into the build — deploys
never depend on network conditions. Run it by hand, review the diff, commit it, and
the next build drops those URLs. The filter refuses to remove more than 10% of the
sitemap in one go.

Setting `DOCS_NOINDEX=true` marks every page noindex (the stage deploy does this).
That also suppresses the sitemap entirely: the plugin skips a noindexed build.

### Publishing workflow

The repo uses two branches. Every change reaches them through a PR; `testmuCom` also needs one approval.

- `stage`: staging environment, used for review before production
- `testmuCom`: production. A page is live when it returns 200 on https://www.testmuai.com, which it does only after it reaches `testmuCom`.

`main` has not moved since 2026-06-04 and is not production, and a local `origin/HEAD` that points at it is stale: compare against `origin/testmuCom`, never `origin/main`.

Branch names follow `<prefix>/<ticket-id>`, where the ticket is the one the PR delivers. Allowed prefixes: `feat/`, `bug/`, `hotfix/`, `chore/`, `revert/`, `release/`, `feature/`, `bugfix/`. Other names are rejected on push.

Workflow:

1. Create your branch from the latest `stage`:

   ```bash
   git checkout stage && git pull origin stage
   git checkout -b feat/TE-1234
   ```

2. Commit your changes and push the branch to this repo:

   ```bash
   git push origin feat/TE-1234
   ```

3. Run `node scripts/check-prod-links.mjs` on every doc and `src/` file you changed (for a sidebar entry you added, check its target with `--routes /support/docs/<slug>/`), then open a PR from your branch against `stage`, link the ticket and tag the docs team for review. Only the links you add or change must pass: `sidebars.js` and some docs on `stage` already link stage-only docs, so leave a NOT LIVE line you did not touch, note it in the PR body, and never delete another doc's sidebar entry or link to make the check pass. A link to a doc that is not live yet is allowed only when that doc reaches `testmuCom` in the same PR as your link: name it with `--ships-with docs/<new-doc>.md` (or `/support/docs/<slug>/`) and list the pairs in the PR body as "ships together".
4. Once merged, verify your changes on the staging site. Stage includes docs that are not in production, so a link that works there is not proof it is live; the production link check is.
5. When the feature is ready for production, share the related PRs with the docs team. They will merge to `testmuCom` through a PR from a branch based on `testmuCom` (e.g. `feat/TE-1234-prod`, or a fork's `testmuCom`). Before that PR, on that branch:
   - Run `git fetch origin testmuCom`, then `node scripts/check-prod-links.mjs --changed origin/testmuCom`; it treats the docs the branch changes as shipping together. In a fork clone, where `origin` is the fork, use the remote that points at LambdaTest/documentation instead (usually `upstream/testmuCom`). If the check reports `0 content file(s) changed` on a branch that changes docs, the base is wrong.
   - If the branch does not have `scripts/check-prod-links.mjs` yet, run a stage checkout's copy from inside it: `node <stage-checkout>/scripts/check-prod-links.mjs --changed origin/testmuCom` (it checks the repo you run it from).
   - Run `npm run build`. Built from `testmuCom` plus your changes, it fails on a missing image or a `<Link>`-rendered link to a doc that is not in the PR, before the merge instead of at deploy time.

   Never merge a linking doc or sidebar entry without its target doc and its images: on 2026-11-16 the production deploy failed (Actions run 43907645012) because a merged doc linked /support/docs/phone-agent-performance-testing/, which had not reached `testmuCom`.

Merges to `testmuCom` deploy to the live documentation site. The build runs after the merge: a broken root-relative, `<Link>` or sidebar link, or a missing image, fails the deploy, and production stays on the last good build until the branch is fixed. A broken absolute, `${BRAND_URL}` or raw `<a href>` link deploys silently as a 404.

## Contributions

Contributions are welcome. Open an issue to discuss your idea before submitting a pull request. When reporting bugs, include your Node.js version, OS, and a link to the affected doc page.

## TestMu AI (Formerly LambdaTest) Certifications

Earn free [TestMu AI Certifications](https://www.testmuai.com/certifications/) for testers, developers, and QA engineers. Validate your skills in Selenium, Cypress, Playwright, Appium, Espresso and more. Industry-recognized, shareable on LinkedIn, and built by practitioners, not marketers.

## Learning Resources by TestMu AI (Formerly LambdaTest)

Learn modern testing through tutorials, guides, videos, and weekly updates:

* [TestMu AI Blog](https://www.testmuai.com/blog/)
* [TestMu AI Learning Hub](https://www.testmuai.com/learning-hub/)
* [TestMu AI on YouTube](https://www.youtube.com/@TestMuAI)
* [TestMu AI Newsletter](https://www.testmuai.com/newsletter/)

## LambdaTest is Now TestMu AI

On **January 12, 2026**, [LambdaTest evolved to TestMu AI](https://www.testmuai.com/lambdatest-is-now-testmuai/), the world's first fully autonomous **Agentic AI Quality Engineering Platform**.

Same team. Same infrastructure. Same customer accounts. All existing LambdaTest logins, scripts, capabilities, and integrations continue to work without change.

👉 Find the new home for [LambdaTest](https://www.testmuai.com).

### How LambdaTest Evolved into TestMu AI

In 2017, we launched LambdaTest with a simple mission: make testing fast, reliable, and accessible. As LambdaTest grew, we expanded into Test Intelligence, Visual Regression Testing, Accessibility Testing, API Testing, and Performance Testing, covering the full depth of the testing lifecycle.

As software development entered the AI era, testing had to evolve, too. We rebuilt the architecture to be AI-native from the ground up, with autonomous agents that **plan, author, execute, analyze, and optimize tests** while keeping humans in the loop. The platform integrates with your repos, CI, IDEs, and terminals, continuously learning from every code change and development signal.

That evolution earned a new name: **TestMu AI**, built for an AI-first future of quality engineering. TestMu is not a new name for us. It is the name of our annual community conference, which has brought together 100,000+ quality engineers to discuss how AI would reshape testing, long before that became an industry norm.

What started as a high-performance cloud testing platform has transformed into an AI-native, multi-agent system powering a connected, end-to-end quality layer. That evolution defined a new identity: LambdaTest evolved into TestMu AI, built for an AI-first future of quality engineering.

## Support

Got a question? Email [support@testmuai.com](mailto:support@testmuai.com) or chat with us 24x7 from our chat portal.
