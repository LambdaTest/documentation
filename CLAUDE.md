# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The TestMu AI (formerly LambdaTest) product documentation site, built with **Docusaurus 3.7** + React 18, styled with Tailwind, and searched via **Typesense**. The vast majority of content lives as flat Markdown/MDX files in `docs/` (1200+ files, all in a single directory — there are no nested content folders). The published site lives at `https://www.testmuai.com/support/` (note the `/support/` `baseUrl`).

## Commands

```bash
npm install --legacy-peer-deps   # install (peer-dep conflicts require this flag)
npm start                        # dev server with hot reload at localhost:3000
npm run build                    # production build — run before every PR
npm run serve                    # serve the production build locally
npm run clear                    # clear the Docusaurus cache when builds act stale
```

There is **no test suite and no linter**. The production build *is* the validation step: `onBrokenLinks: 'throw'` means `npm run build` fails on any broken internal link or missing image. Always run `npm run build` to verify changes before opening a PR.

`prestart`/`prebuild` hooks run automatically before `start`/`build`. Do not skip them — they generate the API reference (see below).

## Branches & deployment

- **`testmuCom`** is the default/production branch. **`stage`** is the staging branch.
- **Contribution workflow (always follow this):** cut a new branch **from `stage`**, make changes there, and raise the PR **back to `stage`** — never branch from or PR directly to `testmuCom`.
- `testmuCom` is the repo's default branch (the README describes an older `stage`/`main` flow that no longer applies).
- Push to `testmuCom` triggers `.github/workflows/testmucom-prod-deployment.yml`: builds the site, syncs `build/` to S3, and invalidates CloudFront + Cloudflare. **A merge to `testmuCom` deploys to production.**
- A second workflow re-runs the Typesense search crawler on push.
- Typesense needs `HOST` and `API` env vars (from `.env`) for search to work locally; the site renders fine without them, only search breaks.

## Authoring docs

Each doc is a Markdown/MDX file directly under `docs/`. The filename (minus extension) is the page `id` and typically matches the `slug`. Frontmatter conventions (see any existing file, e.g. `docs/accelq-integration.md`):

- `id`, `title`, `hide_title: true` (titles are usually rendered via in-page H1/JSON-LD instead), `sidebar_label`, `description`, `keywords`, `slug`, `canonical`.
- Many docs embed JSON-LD `<script type="application/ld+json">` blocks and import shared MDX components.

**A new doc is not visible until it is added to a sidebar.** Sidebars are decoupled from the file tree.

### Sidebars (important — two-file system)

- `sidebars.js` — a large (~140KB) file exporting **32 per-product sidebars** (e.g. `HyperExecuteSidebar`, `SeleniumTestingSidebar`, `KaneAISidebar`). Each is shaped `[backLink, [items...]]` — a "Back" link followed by the item tree. This is where you add a new page to its product's navigation.
- `sidebars-unified.js` — the sidebar actually wired into `docusaurus.config.js`. It `require`s `sidebars.js`, strips the back-link off each one via its `items()` helper, and composes them into a single grouped tree (Web Automation, App Automation, HyperExecute, etc.). Add a *new product sidebar* here; add a *new page* in `sidebars.js`.

### Shared MDX components

Reusable components live in `src/component/` and are imported into MDX. The most pervasive is `BrandName` (`import BrandName, { BRAND_URL } from '@site/src/component/BrandName'`) — **always use it instead of hardcoding "TestMu AI"** so the brand name stays centrally configurable. Other common ones: tag badges (`newTag`, `featureTag`, `bugFixTag`, `enhancementTag`), `realDevice`/`virtualDevice`, `videoEmbed`, `SupportedLanguages`, `CopyPageButton`, `AskAI`.

### Theme overrides

`src/theme/` contains swizzled Docusaurus components (Navbar, TOC, DocItem layout, sidebar items, etc.). Edit these to change site-wide layout/chrome rather than the underlying Docusaurus internals.

## Auto-generated API reference (do not hand-edit)

The `/api-doc/` section is fully generated and **gitignored** — regenerated on every build by the two `scripts/`:

1. `scripts/build-api-data.js` — fetches ~12 live OpenAPI YAML specs from public Swagger servers (URLs hardcoded in the `API_SPECS` array), flattens/normalizes them, and writes `src/data/api/all-apis.json`.
2. `scripts/generate-api-pages.js` — reads that JSON and emits one `.jsx` page per endpoint under `src/pages/api-doc/`, each rendering `<ApiDocPage>` (`src/pages/_ApiDocPage.jsx`).

The interactive renderer (endpoint detail, "Try It" modal, code samples) lives in `src/component/ApiReference/`. To add or change an API, edit the `API_SPECS` list in `build-api-data.js` or the upstream spec — never edit the generated JSON or page files. Because generation hits the network, an offline `build`/`start` will warn and skip unreachable specs.

## Gotchas

- Build requires Node 18+ (CI uses Node 20). `CI: false` is set in the deploy workflow so warnings don't fail the build there — but `onBrokenLinks: 'throw'` still does.
- The huge `docs/` directory is flat; use search (filename = slug) rather than browsing.
- `package.json` declares a `pnpm` `packageManager` field, but the project is installed and built with **npm** (`--legacy-peer-deps`); `pnpm-lock.yaml` is gitignored.
