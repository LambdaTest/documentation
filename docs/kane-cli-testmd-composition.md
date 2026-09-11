---
id: kane-cli-testmd-composition
title: Composing tests with @import
sidebar_label: Composing Tests (@import)
description: "Split a test.md into reusable helper files with @import: syntax, path resolution, optional imports, what propagates, variables across imports, helper outputs and sharing helpers across projects."
keywords:
  - kane cli import
  - test.md helpers
  - reusable flows
  - login helper
  - testmu ai
url: https://www.testmuai.com/support/docs/kane-cli-testmd-composition/
site_name: TestMu AI
slug: kane-cli-testmd-composition/
canonical: https://www.testmuai.com/support/docs/kane-cli-testmd-composition/
---
import VerifiedTag from '@site/src/component/verifiedTag';


<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.testmuai.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.testmuai.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Composing tests with @import",
          "item": "https://www.testmuai.com/support/docs/kane-cli-testmd-composition/"
        }]
      }) }}
></script>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/kane-cli-testmd-composition/"
    },
    "headline": "Composing tests with @import",
    "description": "Split a test.md into reusable helper files with @import: syntax, path resolution, optional imports, what propagates, variables across imports, helper outputs and sharing helpers across projects.",
    "url": "https://www.testmuai.com/support/docs/kane-cli-testmd-composition/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Kane CLI",
    "keywords": [
      "kane cli import",
      "test.md helpers",
      "reusable flows"
    ],
    "proficiencyLevel": "Beginner",
    "author": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "url": "https://www.testmuai.com/"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
      "url": "https://www.testmuai.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testmuai.com/logo.png"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testmu-ai/",
        "https://x.com/testmuai",
        "https://www.youtube.com/@TestMuAI"
      ]
    },
    "hasPart": [
      {
        "@type": "SoftwareSourceCode",
        "name": "There is no kane-cli new-helper command \u2014 just write the file",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Markdown",
        "text": "---\nmode: testing\n---\n\n# Login helper\n\n## Open the login page\nOpen https://app.example.com/login.\n\n## Sign in\nType {{tester_email}} in the email field and {{tester_password}} in the password field, then submit. Verify the URL contains /home."
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "It can be referenced from any test",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Markdown",
        "text": "## Sign in\n@import ./helpers/login.md"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "@import syntax",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Markdown",
        "text": "## Step heading\n@import <path>"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Rules",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Markdown",
        "text": "## OK\n@import ./helpers/login.md\n\n## OK with optional\n```yaml\noptional: true"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "NOT OK \u2014 extra config",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "timeout: 60"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "NOT OK \u2014 body mixes prose and import",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n## How paths resolve\n\nPath resolution is relative to the file that contains the `@import`, never to your shell:\n"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "How paths resolve",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\nWhen `checkout_test.md` imports `../../helpers/login.md`, the path is relative to `tests/e2e/`, so it resolves to `helpers/login.md`. When `login.md` imports `./submit-button.md`, the path is relative to `helpers/`, so it resolves to `helpers/submit-button.md`.\n\nYou can also use absolute paths:\n\n```markdown\n@import /Users/me/project/helpers/login.md"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "A test like this",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Markdown",
        "text": "## Sign in\n@import ./helpers/login.md\n\n## Open settings\nClick the user menu and choose Settings."
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "A root-level @import step can be marked optional in the same way a prose step can",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Markdown",
        "text": "## Skip the tour if it shows up\n```yaml\noptional: true"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Skip the tour if it shows up",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\nIf the helper fails, the run continues to the next step. The `Result.md` entry is suffixed with `(optional)`.\n\nOptional is intentionally **not** allowed on nested `@import` steps \u2014 only the root test decides which imports may fail. Helpers cannot decide on their own that they may be skipped.\n\n## What propagates through `@import`\n\nSome settings travel with the import; others are run-wide and apply only at the root.\n\n**Propagate to imported steps:**\n\n- `variables` \u2014 the root file's variables (and any added by `--variables-file` / `--variables`) are visible inside helpers. A helper can reference `{{tester_email}}` if the root test defines it.\n- `global_context` and `local_context` \u2014 context is shared across the whole run.\n- Per-step settings on an objective inside a helper apply to that step.\n\n**Do not propagate (root-only):**\n\n- Chrome settings: `target`, `chrome_profile`, `cdp_endpoint`, `ws_endpoint`, `headless`.\n- `mode` (`action` vs `testing`).\n- `on_lock_conflict`.\n- Authentication.\n\nThese are decided once for the whole run from the root file (or its CLI flags). Setting them in a helper's frontmatter has no effect \u2014 the helper's chrome / mode / auth keys are silently ignored.\n\nA practical consequence: there is only **one** browser per run, with **one** auth context. A helper cannot, for example, open a fresh Chrome with a different profile.\n\n## Variables across imports\n\nVariables are namespaced flat across the whole run \u2014 a single map merged at the root. A helper sees whatever variables the root configuration produces.\n\n```markdown\n---\n# checkout_test.md\nvariables:\n  tester_email: \"alice@example.com\"\n  tester_password:\n    value: \"s3cret\"\n    secret: true\n---\n\n## Sign in\n@import ./helpers/login.md\n\n## Add a product\nOpen https://app.example.com/products and add the first item to cart."
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Add a product",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Markdown",
        "text": "---\n# helpers/login.md (variables block here is optional)\n---\n\n## Open the login page\nOpen https://app.example.com/login.\n\n## Submit credentials\nType {{tester_email}} and {{tester_password}}, then submit."
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "The recording for each call site lives next to the helper file",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "checkout_test.md\nhelpers/\n  login.md\n  helper-output-login-checkout-2/   # for the @import at root step 2\n    Result.md\n    .internal/...                   # cached recordings for this call site\n  helper-output-login-checkout-4/   # for the @import at root step 4\n    Result.md\n    .internal/..."
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Sharing is a filesystem operation",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "cp /projA/common/login.md /projB/common/login.md\n# Optional \u2014 copy the cached recordings too, so projB doesn't have to re-author:\ncp -r /projA/common/helper-output-login-*  /projB/common/"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "A small suite with a shared login helper and two tests that use it",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "tests/\n  checkout_test.md\n  dashboard_test.md\nhelpers/\n  login.md"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "helpers/login.md",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Markdown",
        "text": "---\nmode: testing\n---\n\n# Login helper\n\n## Open the login page\nOpen https://app.example.com/login.\n\n## Submit credentials\nType \"{{tester_email}}\" in the email field and \"{{tester_password}}\" in the password field. Submit the form. Verify the URL contains /home."
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "tests/checkout_test.md",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Markdown",
        "text": "---\nmode: testing\nvariables:\n  tester_email: \"alice@example.com\"\n  tester_password:\n    value: \"s3cret-pa55\"\n    secret: true\n---\n\n# Checkout\n\n## Sign in\n@import ../helpers/login.md\n\n## Add product to cart\nClick the search box, type \"wireless headphones\", press Enter, click the first product, then click Add to Cart.\n\n## Verify cart badge\nVerify the cart icon in the header shows a count of 1 or higher."
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "tests/dashboard_test.md",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Markdown",
        "text": "---\nmode: testing\nvariables:\n  tester_email: \"alice@example.com\"\n  tester_password:\n    value: \"s3cret-pa55\"\n    secret: true\n---\n\n# Dashboard\n\n## Sign in\n@import ../helpers/login.md\n\n## Open the recent activity panel\nClick \"Recent activity\" in the left sidebar. Verify a list of activity rows is rendered."
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "After running both tests once, the layout on disk is",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "tests/\n  checkout_test.md\n  dashboard_test.md\n  output-checkout/\n    Result.md\n    .internal/...\n  output-dashboard/\n    Result.md\n    .internal/...\nhelpers/\n  login.md\n  helper-output-login-checkout-1/\n    Result.md\n    .internal/...\n  helper-output-login-dashboard-1/\n    Result.md\n    .internal/..."
      }
    ],
    "dateModified": "2026-09-03T14:41:00+05:30"
  }) }}
/>
Real test suites repeat themselves. Many tests start with the same login flow. Many regression tests visit the same setup pages before doing anything interesting. Copy-pasting those steps into every test makes them brittle and tedious to update.

`@import` lets you extract a repeating flow into a helper file and reuse it from many tests. Helpers are first-class `_test.md`-style files that live alongside your tests. Editing one helper updates every test that imports it.

This page covers helper files, the `@import` syntax, the rules the resolver enforces, and how recordings work across imports. To learn the file format, see [Writing test.md files](/support/docs/kane-cli-testmd/). To learn how runs and replays work, see [Running test.md files](/support/docs/kane-cli-testmd-running/).

## Why split a test

A few common cases where splitting pays off:

- **Login.** Almost every test starts logged in. Put the login flow in `helpers/login.md` and `@import` it from every test.
- **Setup.** Visiting a dashboard, switching tenants, accepting a cookie banner — pull these out so a single update fixes every test that relies on them.
- **Long regression flows.** A 30-step checkout test is hard to read and harder to debug. Split it into 4–5 helpers describing each phase (browse, add-to-cart, checkout, payment, confirmation).
- **Negative test cases.** Share a setup helper between the happy-path test and the negative-path test, so the only thing each test owns is the assertion that distinguishes them.

## Helper files

A helper file is any `.md` file whose name does **not** end in `_test.md`. There is no `kane-cli new-helper` command — just write the file:

<VerifiedTag value="Verified" />

```markdown
---
mode: testing
---

# Login helper

## Open the login page
Open https://app.example.com/login.

## Sign in
Type {{tester_email}} in the email field and {{tester_password}} in the password field, then submit. Verify the URL contains /home.
```

Save this as `helpers/login.md`. It can be referenced from any test:

<VerifiedTag value="Verified" />

```markdown
## Sign in
@import ./helpers/login.md
```

Helpers cannot be run directly — `kane-cli testmd run ./helpers/login.md` is rejected because the filename does not end in `_test.md`. Helpers are only reachable through `@import` from a test.

## `@import` syntax

`@import` is a step body. It replaces a prose objective in a step.

<VerifiedTag value="Verified" />

```markdown
## Step heading
@import <path>
```

Rules:

- The step body must contain `@import` and nothing else. Mixing prose and `@import` in the same body is a parse error.
- `<path>` may be relative or absolute. Relative paths resolve against the directory of the **importing file**, not against your shell's working directory.
- The imported file must exist; missing paths are a parse error.
- The `yaml` block of an `@import` step may only contain `optional`. Any other key is rejected.

<VerifiedTag value="Verified" />

```markdown
## OK
@import ./helpers/login.md

## OK with optional
```yaml
optional: true
```
@import ./helpers/skip-tour.md

## NOT OK — extra config

<VerifiedTag value="Verified" />

```yaml
timeout: 60
```
@import ./helpers/login.md

## NOT OK — body mixes prose and import
Click somewhere first.
@import ./helpers/login.md

<VerifiedTag value="Verified" />

```

## How paths resolve

Path resolution is relative to the file that contains the `@import`, never to your shell:

```
tests/
  e2e/
    checkout_test.md       # contains: @import ../../helpers/login.md
  helpers/
    login.md               # contains: @import ./submit-button.md
    submit-button.md

<VerifiedTag value="Verified" />

```

When `checkout_test.md` imports `../../helpers/login.md`, the path is relative to `tests/e2e/`, so it resolves to `helpers/login.md`. When `login.md` imports `./submit-button.md`, the path is relative to `helpers/`, so it resolves to `helpers/submit-button.md`.

You can also use absolute paths:

```markdown
@import /Users/me/project/helpers/login.md
```

…but absolute paths break as soon as a teammate clones the repo on a different machine. Prefer relative paths.

## What `@import` does at run time

When the resolver hits an `@import` step, it inlines every step from the imported file into the run, in order, at that position. The imported file's frontmatter — except for variables and context — is **not** merged into the run. The result is a flat list of steps from the root file's perspective.

A test like this:

<VerifiedTag value="Verified" />

```markdown
## Sign in
@import ./helpers/login.md

## Open settings
Click the user menu and choose Settings.
```

…with a `login.md` containing two steps, runs as four steps in total: two from the helper, then "Open settings". `Result.md` reports the import as one entry that summarises the helper's outcome.

## Rules the resolver enforces

The resolver catches structural problems at parse time, before any browser launches. The full list:

| Rule | What happens if you break it |
|---|---|
| Tests cannot be imported. Only files **not** ending in `_test.md` may appear after `@import`. | `cannot @import a test file: only helpers may be imported (got <path>)` |
| No cycles. A helper cannot import a chain that eventually comes back to it. | `cyclic reference: a.md → b.md → a.md` |
| Imports must resolve. The target file must exist. | `@import path not found: <path>` |
| `optional` is allowed on `@import` only at the root file. | `intermediate-ref 'optional' is not supported in v1: <file>:<line>` |
| `@import` steps may not carry config other than `optional`. | `step config on @import may only contain 'optional': got <key>` |

There is no built-in depth limit — helpers can import helpers can import helpers. In practice keep nesting shallow; deeply chained helpers are hard to read and hard to debug.

## Optional imports

A root-level `@import` step can be marked optional in the same way a prose step can:

<VerifiedTag value="Verified" />

```markdown
## Skip the tour if it shows up
```yaml
optional: true
```
@import ./helpers/dismiss-product-tour.md

<VerifiedTag value="Verified" />

```

If the helper fails, the run continues to the next step. The `Result.md` entry is suffixed with `(optional)`.

Optional is intentionally **not** allowed on nested `@import` steps — only the root test decides which imports may fail. Helpers cannot decide on their own that they may be skipped.

## What propagates through `@import`

Some settings travel with the import; others are run-wide and apply only at the root.

**Propagate to imported steps:**

- `variables` — the root file's variables (and any added by `--variables-file` / `--variables`) are visible inside helpers. A helper can reference `{{tester_email}}` if the root test defines it.
- `global_context` and `local_context` — context is shared across the whole run.
- Per-step settings on an objective inside a helper apply to that step.

**Do not propagate (root-only):**

- Chrome settings: `target`, `chrome_profile`, `cdp_endpoint`, `ws_endpoint`, `headless`.
- `mode` (`action` vs `testing`).
- `on_lock_conflict`.
- Authentication.

These are decided once for the whole run from the root file (or its CLI flags). Setting them in a helper's frontmatter has no effect — the helper's chrome / mode / auth keys are silently ignored.

A practical consequence: there is only **one** browser per run, with **one** auth context. A helper cannot, for example, open a fresh Chrome with a different profile.

## Variables across imports

Variables are namespaced flat across the whole run — a single map merged at the root. A helper sees whatever variables the root configuration produces.

```markdown
---
# checkout_test.md
variables:
  tester_email: "alice@example.com"
  tester_password:
    value: "s3cret"
    secret: true
---

## Sign in
@import ./helpers/login.md

## Add a product
Open https://app.example.com/products and add the first item to cart.
```

<VerifiedTag value="Verified" />

```markdown
---
# helpers/login.md (variables block here is optional)
---

## Open the login page
Open https://app.example.com/login.

## Submit credentials
Type {{tester_email}} and {{tester_password}}, then submit.
```

The helper uses `{{tester_email}}` and `{{tester_password}}` directly because the root test defined them. You can also define defaults in the helper's frontmatter; the root test's values override them.

Variables set on an individual **step** in the root test are visible **only on that step** — they do not bleed into the helper that follows. If you need a value visible inside a helper, put it in the root frontmatter, not in a per-step `yaml` block.

## Helper outputs

A helper imported at multiple call sites in the same root test records each call site independently. The same helper imported by step 2 and step 4 produces two separate recordings — one per call site — because the browser state on entry is different.

The recording for each call site lives next to the helper file:

<VerifiedTag value="Verified" />

```
checkout_test.md
helpers/
  login.md
  helper-output-login-checkout-2/   # for the @import at root step 2
    Result.md
    .internal/...                   # cached recordings for this call site
  helper-output-login-checkout-4/   # for the @import at root step 4
    Result.md
    .internal/...
```

The directory name encodes:

- The helper file's stem (`login`)
- The root test's stem (`checkout`)
- The index of the importing step in the root file (`2`, `4`).

When you import the same helper from two **different** root tests, the directory name's middle segment changes. `login.md` imported by `checkout_test.md` and `dashboard_test.md` produces `helper-output-login-checkout-2/` and `helper-output-login-dashboard-1/`. They are independent recordings on disk and replay independently.

`Result.md` inside a `helper-output-...` directory has the same shape as a top-level `Result.md`. Open it in an editor or Markdown viewer to inspect what the helper did at that call site.

Like the test's own `output-<stem>/`, `helper-output-...` directories are safe — and recommended — to commit to git.

## Editing a helper

When you edit a step in a helper:

- The cache for **that step inside every call site** invalidates.
- Subsequent steps in the same helper invocation also re-author (the same "rest of the file" rule from [Running test.md files](/support/docs/kane-cli-testmd-running/#edits-cascade-to-the-rest-of-the-file) applies inside helpers).
- The root tests' steps that come **after** the `@import` also re-author, because the helper changed what the browser looks like when control returns to the root test.

In practice: a one-line edit to a heavily-imported helper triggers a lot of re-authoring on the next run. That is by design — the alternative is to replay against state the helper no longer produces.

## Sharing helpers across projects

There is no built-in command to share a helper across two checkouts. Sharing is a filesystem operation:

<VerifiedTag value="Verified" />

```bash
cp /projA/common/login.md /projB/common/login.md
# Optional — copy the cached recordings too, so projB doesn't have to re-author:
cp -r /projA/common/helper-output-login-*  /projB/common/
```

Because `@import` paths resolve relative to the importing file, the same helper layout works in both projects without rewriting the imports. As long as `common/login.md` exists next to each project's tests, `@import ../common/login.md` works.

## Worked example

A small suite with a shared login helper and two tests that use it:

<VerifiedTag value="Verified" />

```
tests/
  checkout_test.md
  dashboard_test.md
helpers/
  login.md
```

### `helpers/login.md`

<VerifiedTag value="Verified" />

```markdown
---
mode: testing
---

# Login helper

## Open the login page
Open https://app.example.com/login.

## Submit credentials
Type "{{tester_email}}" in the email field and "{{tester_password}}" in the password field. Submit the form. Verify the URL contains /home.
```

### `tests/checkout_test.md`

<VerifiedTag value="Verified" />

```markdown
---
mode: testing
variables:
  tester_email: "alice@example.com"
  tester_password:
    value: "s3cret-pa55"
    secret: true
---

# Checkout

## Sign in
@import ../helpers/login.md

## Add product to cart
Click the search box, type "wireless headphones", press Enter, click the first product, then click Add to Cart.

## Verify cart badge
Verify the cart icon in the header shows a count of 1 or higher.
```

### `tests/dashboard_test.md`

<VerifiedTag value="Verified" />

```markdown
---
mode: testing
variables:
  tester_email: "alice@example.com"
  tester_password:
    value: "s3cret-pa55"
    secret: true
---

# Dashboard

## Sign in
@import ../helpers/login.md

## Open the recent activity panel
Click "Recent activity" in the left sidebar. Verify a list of activity rows is rendered.
```

After running both tests once, the layout on disk is:

<VerifiedTag value="Verified" />

```
tests/
  checkout_test.md
  dashboard_test.md
  output-checkout/
    Result.md
    .internal/...
  output-dashboard/
    Result.md
    .internal/...
helpers/
  login.md
  helper-output-login-checkout-1/
    Result.md
    .internal/...
  helper-output-login-dashboard-1/
    Result.md
    .internal/...
```

Editing the login flow in `helpers/login.md` re-authors the login steps and everything after them in both `checkout_test.md` and `dashboard_test.md` on the next run.

## Next steps

- [Writing test.md files](/support/docs/kane-cli-testmd/) — frontmatter, step syntax, variables.
- [Running a test.md](/support/docs/kane-cli-testmd-running/) — the run command, flags, replay model, output.
