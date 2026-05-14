---
id: kane-cli-testmd
title: Test.md
sidebar_label: Test.md
description: "Write browser tests as Markdown files that replay from cache after the first run: no LLM cost, faster execution. Commit tests to git, share recordings, and run in CI."
keywords:
  - kane cli testmd
  - kane cli replayable tests
  - kane cli test files
  - kaneai
  - testmu ai
  - markdown tests
  - browser test automation
url: https://www.testmuai.com/support/docs/kane-cli-testmd/
site_name: TestMu AI
slug: kane-cli-testmd/
displayed_sidebar: KaneCLISidebar
canonical: https://www.testmuai.com/support/docs/kane-cli-testmd/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

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
          "name": "Kane CLI",
          "item": "https://www.testmuai.com/support/docs/kane-cli-introduction/"
        }]
      })
    }}
></script>

`testmd` lets you write browser tests as Markdown files (`_test.md`) and commit them to your repo. On the first run, the AI agent authors each step and saves a recording. On every subsequent run, each step **replays from cache** with no LLM cost and much faster execution. Commit the test file and its recordings to git so teammates and CI can re-run the same tests without re-authoring.

## Quick Start

**Step 1:** Create a test file. The filename must end in `_test.md`:

```markdown
---
mode: testing
---

# Amazon search

## Open Amazon
Open https://www.amazon.com.

## Search for headphones
Type "wireless headphones" into the search box and submit.
Verify at least one product result is visible.
```

**Step 2:** Run the test:

```bash
kane-cli testmd run amazon_test.md --agent
```

On the first run, the agent authors each step and caches the recording. On every later run, the steps replay from cache instantly.

:::tip
Always combine `--agent` with `--headless` in CI/CD environments to avoid display server errors.
:::

---

## When to Use testmd vs run

`kane-cli run` is one-shot. It runs an objective, uploads results, and exits. It is ideal for quick, one-off verifications like checking if a page loads correctly or extracting a value from a live site.

`kane-cli testmd run` is for tests you want to persist. Use it when you are building a login flow smoke test, a regression suite, or any test you plan to re-run across builds. The test file lives in your repo, recordings are cached and committed alongside it, and every subsequent run replays from cache without consuming LLM credits. Teammates and CI pick up the same recordings and replay them identically.

If you run an ad-hoc objective with `kane-cli run` and later decide you want to keep it, use the `--name` flag to save it as a `_test.md` file (see [Recording a Test from a Live Session](#recording-a-test-from-a-live-session) below).

---

## File Format

A `_test.md` file has four parts in order:

### YAML Frontmatter

Configuration between `---` markers at the top of the file:

```yaml
---
mode: testing
max_steps: 30
headless: true
---
```

**Supported keys:**

| Key | Scope | Description |
|-----|-------|-------------|
| `mode` | root | `testing` (default) or `action`. Testing mode pushes through auth walls for negative-test assertions. Action mode halts on auth walls. |
| `max_steps` | root + step | Max agent reasoning steps per step. Default: `30` |
| `timeout` | root + step | Hard kill per step, in seconds |
| `headless` | root | Run Chrome with no visible window |
| `variables` | root + step | Variables with `{{name}}` syntax, same format as [Variables & Context](/support/docs/kane-cli-variables-and-context/) |
| `code_export` | root + step | Generate Playwright code after the run |
| `code_language` | root + step | `python` or `javascript` for code export |
| `global_context` / `local_context` | root + step | Inline Markdown or file path for agent context |

### Title and Steps

After the frontmatter, add a `# H1` title for the test. This is purely decorative. Kane CLI ignores everything before the first `## ` heading.

Each `## H2` heading marks a test step. The heading text is a label for your reference; the agent reads the **step body** underneath it. Write the body as either plain English prose describing what the agent should do, or a single `@import <path>` line to pull in a reusable helper file. Do not mix prose and `@import` in the same step.

### Per-Step Config Overrides

You can override frontmatter settings for individual steps by adding a `yaml` fenced block immediately under the step heading:

````markdown
## Submit the form
```yaml
timeout: 90
optional: true
```
Click submit and verify the confirmation banner.
````

Setting `optional: true` tells Kane CLI that a failure on this step should not fail the overall test. The run continues to the next step.

---

## Replay and Cascade Rule

This is the most important concept in `testmd`.

### Replay

After the first run, each step replays from its cached recording with no AI agent, no LLM cost, and much faster execution. A step replays only if **all** of these hold:

- A recording for that step exists
- The step's prose is unchanged since the recording
- The step's `yaml` block is unchanged
- No earlier step invalidated it

### Cascade

Editing step N **re-authors step N and every step after it**. Each step starts where the previous step left off (URL, login state, open tabs). When step 3 changes, step 4 cannot safely replay against state that no longer exists.

:::warning
A one-line tweak at the top of a 20-step test re-authors all 20 steps on the next run. To minimize re-authoring, edit only the steps you need to change.
:::

**Useful commands:**

| Action | How |
|--------|-----|
| Re-record one step | Edit only that step (steps after it cascade automatically) |
| Force full re-authoring | Use `--author` flag for one run |
| Wipe cache entirely | Run `rm -rf output-<stem>/` |

---

## Reusing Flows with `@import`

Extract repeating flows (login, setup, cookie banner dismissal) into helper files:

```markdown
## Sign in
@import ./helpers/login.md
```

**Rules:**

- Helper filename **must not** end in `_test.md`. Only `_test.md` files are valid entry points
- Path resolves relative to the **importing file**, not the shell's working directory
- The step body must be exactly `@import <path>` with no mixed prose or extra lines
- The step's `yaml` block may contain **only** `optional`
- `optional: true` on `@import` is allowed only at the root file level, not on nested imports
- Variables and context propagate into helpers automatically

:::note
Editing a helper re-authors that step in **every test that imports it**, plus everything after the import in those tests. The same cascade rule applies.
:::

---

## Recording a Test from a Live Session

Run an ad-hoc objective with the `--name` flag to save it as a replayable test file:

```bash
kane-cli run "Search for noise-cancelling headphones on amazon.com" --name amazon-search
```

On exit, Kane CLI writes the test file to `.testmuai/tests/amazon-search_test.md`. Move that file into your repo and re-run it with `testmd run`.

:::note
Without `--name`, ad-hoc runs are ephemeral and nothing is written to disk.
:::

---

## Commands

| Command | Purpose |
|---------|---------|
| `kane-cli testmd run <path> --agent` | Run a test file |
| `kane-cli testmd list` | List `*_test.md` files under the current directory |
| `kane-cli testmd status <path>` | Show Test Manager identity and local sync state |
| `kane-cli testmd export <path>` | Regenerate code export from existing recordings (no browser launch) |
| `kane-cli testmd delete <path>` | Delete the test and its `output-<stem>/` cache locally. Does NOT delete from Test Manager |

---

## Flags for `testmd run`

All [`kane-cli run` flags](/support/docs/kane-cli-cli-reference/) apply (`--agent`, `--headless`, `--max-steps`, `--timeout`, `--variables`, etc.), plus these additional flags:

| Flag | Default | Description |
|------|---------|-------------|
| `--name <name>` | none | Persist the run under this name. Must match `[a-zA-Z0-9_-]+` |
| `--on-lock-conflict <mode>` | none | Behavior when another user holds the test's edit lock: `readonly` (replay-only, no upload), `fail` (exit 2), or `wait` (block until released) |
| `--retry` | off | On replay failure, restart with a shrinking replay window |
| `--retry-count <n>` | `3` | Max retry restarts before falling back to full re-author |
| `--author` | off | Force authoring every step, skipping replay entirely |
| `--code-language <lang>` | `python` | Code export language: `python` or `javascript` |

:::note
Flag values win over frontmatter for all settings **except** `variables`. The file owns variables. You can add new keys via flags but cannot override file-defined ones.
:::

---

## Output Directory

After a run, Kane CLI creates an output directory next to the test file:

```
amazon_test.md
output-amazon/
  Result.md                      # Human-readable run report
  .internal/                     # Cached recordings, do not edit
  playwright-python-code/        # Only if code_export is enabled
```

`output-<stem>/` is **commit-safe**. Commit it to git so teammates and CI replay the same recordings.

For tests using `@import`, helper recordings land next to the helper file in `helper-output-<helper>-<root>-<step>/` directories. These are also commit-safe.

### Result.md

After each run, `Result.md` is generated with:

| Section | Contents |
|---------|----------|
| Frontmatter | `status`, `started`, `duration_s`, `session_id` |
| Step results | One entry per step: `✓ passed`, `✗ failed`, or `⏭ skipped` (suffixed `(optional)` for soft-failing optional steps) |
| Import failure paths | For `@import` steps that failed, the path to the failing sub-step inside the helper |

:::tip
To check whether a test passed or where it failed, read `Result.md` instead of re-running the test.
:::

---

## CI/CD Usage

```bash
kane-cli testmd run ./tests/checkout_test.md \
  --agent \
  --headless \
  --on-lock-conflict wait \
  --retry
```

| Flag | Purpose |
|------|---------|
| `--agent` | Structured NDJSON to stdout |
| `--headless` | No browser window |
| `--on-lock-conflict wait` | Block instead of failing if a teammate is editing the same test |
| `--retry` | Automatically recover from transient replay failures |

### Exit Codes

| Code | Meaning |
|------|---------|
| 0 | ✅ Passed |
| 1 | ❌ Failed (test ran but did not pass) |
| 2 | ⚠️ Error (auth, setup, parse error, or `--on-lock-conflict fail`) |
| 3 | ⏱️ Timeout, cancelled, or `--on-lock-conflict wait` timed out |

---

## Common Parse Errors

Parse errors abort **before** any browser launch with exit code `2`:

| Error Message | Fix |
|---------------|-----|
| `frontmatter is missing closing '---'` | Add the trailing `---` |
| `invalid YAML in frontmatter` | Validate the YAML block |
| `step body must be exactly one of prose / @import` | Split into two steps |
| `step config on @import may only contain 'optional'` | Remove other keys from the yaml block |
| `cannot @import a test file` | Imports may only reference helpers (not files ending in `_test.md`) |
| `cyclic reference` | Restructure helpers to break the circular dependency |
| `chrome config is global-only` | Move Chrome key to root frontmatter |
| `'<key>' is run-level and cannot be set per-step` | Move `mode` / `on_lock_conflict` to root frontmatter |
| `unknown config key` | Remove or fix the key |
| `auth/identity keys are CLI-only` | Pass `username` / `access_key` as CLI flags, not in frontmatter |

---

## Example: Full Test with Imports

**`tests/checkout_test.md`:**

```markdown
---
mode: testing
headless: true
variables:
  username:
    value: "testuser@example.com"
  password:
    value: "s3cret!"
    secret: true
---

# Checkout flow

## Login
@import ./helpers/login.md

## Add item to cart
Go to the products page, search for "wireless headphones", and click "Add to Cart" on the first result.

## Verify cart
Go to the cart page. Assert the cart contains 1 item. Store the total price as 'cart_total'.

## Complete checkout
Click "Proceed to Checkout", fill in shipping details, and assert the order confirmation page loads.
```

**`tests/helpers/login.md`:**

```markdown
Go to https://app.example.com/login.
Enter {{username}} in the email field.
Enter {{password}} in the password field.
Click "Sign In".
Assert the dashboard loads.
```

**Run:**

```bash
kane-cli testmd run tests/checkout_test.md --agent
```

---

## Next Steps

- [Writing Objectives](/support/docs/kane-cli-writing-objectives/): Learn how to write effective natural language objectives
- [Variables & Context](/support/docs/kane-cli-variables-and-context/): Parameterize tests with variables, secrets, and context files
- [Agent Mode](/support/docs/kane-cli-agent-mode/): Parse structured NDJSON output from Kane CLI
- [CI/CD Integration](/support/docs/kane-cli-cicd/): Add Kane CLI to your pipeline
- [CLI Reference](/support/docs/kane-cli-cli-reference/): Full flag and command reference
- [Troubleshooting](/support/docs/kane-cli-troubleshooting/): Debug common issues
