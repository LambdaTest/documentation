---
id: kane-cli-claude-code-plugin
title: Kane CLI Plugin for Claude Code
sidebar_label: Claude Code Plugin
description: "Install kane-qe, the Kane CLI plugin for Claude Code: a live band above the prompt for every Kane CLI test, a result card in the chat, a pane for steps, assurance and history, and a nudge to test what Claude changed."
keywords:
  - kane cli claude code plugin
  - kane-qe
  - claude code plugin
  - claude code browser testing
  - kane cli
  - kaneai
  - testmu ai
url: https://www.testmuai.com/support/docs/kane-cli-claude-code-plugin/
site_name: TestMu AI
slug: kane-cli-claude-code-plugin/
canonical: https://www.testmuai.com/support/docs/kane-cli-claude-code-plugin/
---

import BrandName from '@site/src/component/BrandName';

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
        },{
          "@type": "ListItem",
          "position": 4,
          "name": "Claude Code Plugin",
          "item": "https://www.testmuai.com/support/docs/kane-cli-claude-code-plugin/"
        }]
      })
    }}
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
      "@id": "https://www.testmuai.com/support/docs/kane-cli-claude-code-plugin/"
    },
    "headline": "Kane CLI Plugin for Claude Code",
    "description": "Install kane-qe, the Kane CLI plugin for Claude Code: a live band above the prompt for every Kane CLI test, a result card in the chat, a pane for steps, assurance and history, and a nudge to test what Claude changed.",
    "url": "https://www.testmuai.com/support/docs/kane-cli-claude-code-plugin/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Kane CLI",
    "keywords": [
      "kane cli claude code plugin",
      "kane-qe",
      "claude code plugin"
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
        "name": "Install inside Claude Code",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "/plugin install kane-qe --marketplace LambdaTest/kane-claude-plugin"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Install from a terminal",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "claude plugin marketplace add LambdaTest/kane-claude-plugin\nclaude plugin install kane-qe@lambdatest"
      }
    ]
  }) }}
/>

**kane-qe** is the Kane CLI plugin for [Claude Code](https://claude.com/claude-code). While Claude works on your code, it shows what `kane-cli` is testing, the step each test is on, why a test failed, and how much of your requirements is proven. When Claude changes code that nothing has tested yet, it says so and offers a test.

kane-qe only watches and offers. It never starts a test by itself: Claude runs `kane-cli`, because you asked or because you pressed a button that asks Claude.

:::note
kane-qe works alongside the [Kane CLI skill](/support/docs/kane-cli-skills/). The skill teaches Claude how to run `kane-cli`; the plugin shows you what those runs are doing. Use both.
:::

---

## Before You Start

You need:

- **Claude Code** with plugins that use mods (function-hook plugins), in the terminal or the desktop app.
- **Kane CLI**, installed and logged in. See [Installation](/support/docs/kane-cli-installation/) and [Authentication](/support/docs/kane-cli-authentication/).
- A **project folder** you open Claude Code in. kane-qe shows `kane-cli` runs whose folder is inside that project.

`kane-cli` runs use KaneAI credits. kane-qe itself spends none: the only `kane-cli` command it runs without being asked is the read-only coverage check.

---

## Install

Inside Claude Code:

```text
/plugin install kane-qe --marketplace LambdaTest/kane-claude-plugin
```

Or from a terminal:

```bash
claude plugin marketplace add LambdaTest/kane-claude-plugin
claude plugin install kane-qe@lambdatest
```

There is nothing to start after that. Open Claude Code in a project and the band appears above the prompt.

**For a whole team**, commit this to the project's `.claude/settings.json`. Everyone who opens the project and trusts it is offered the plugin:

```json
{
  "extraKnownMarketplaces": {
    "lambdatest": {
      "source": { "source": "github", "repo": "LambdaTest/kane-claude-plugin" },
      "autoUpdate": true
    }
  },
  "enabledPlugins": {
    "kane-qe@lambdatest": true
  }
}
```

---

## Your First Five Minutes

1. Open Claude Code in your project. The band shows `idle` and, on its third row, assurance coverage (or `not set up`).
2. Ask Claude to test something, for example: *"Use kane-cli to check that a guest can add a product to the cart."*
3. Watch the band: the test's name, its time, and the step it is on. The mascot's eyes move while it runs.
4. In the chat, Claude's `kane-cli` command becomes a one-line card with a spinner, then a card with the result.
5. Press **View steps** on the card, or type `/kane`, to see every step.

---

## The Band

Three rows above the prompt, always there. The first row always ends with **[ Open ]**, which opens the pane. The third row is always assurance coverage.

```text
 ▄▀▄▄▀▄   running  checkout_guest 44s [ Open ]
▀▀▀▀▀▀▀▀ ⠹ Fill the shipping address
▀▀▀▀▀▀▀▀ assurance ━━━━━━━━──────── 47% proven · 4 use cases
```

| What is happening | Row 1 | Row 2 |
|---|---|---|
| Nothing has run in this session | `idle` | The last result in this project from an earlier session, such as `last run ✓ login · 2h ago` |
| One test running | `running`, its name and time | A spinner and the step it is on |
| Several tests running | `3 runs`, one coloured cell per run | `now` and each running test with its time |
| A suite running | `suite`, one cell per test, `5 of 12 tests done · 3 running · 4 left` | What is running now; a failure the moment it happens |
| A suite on the remote grid | `12 tests on the grid · sent 2m 05s ago` | The grid reports its tests only when the job ends |
| Runs finished | This session's passed and failed counts | The newest failure and the step it failed on |
| Claude changed code, nothing tested it | | `⚠ 2 files changed, untested` **[ Test this change ]** |

A test started anywhere in the project shows up within two seconds: by Claude, in another terminal, or by a script. Runs from other folders do not appear.

Every row fits the width of your terminal: names are shortened first, then items drop from the right.

---

## The Card in the Chat

Every `kane-cli` test that Claude runs (`kane-cli run`, `kane-cli testmd run`, `kane-cli testrun run`) is drawn in the conversation as a card, in place of the plain shell row.

While it runs, the card is one line:

```text
⠹ kane · checkout_guest_test.md 32s · Fill the shipping address
```

When it ends, the card shows the result in three rows:

```text
╭────────────────────────────────────────────────────────────────────────────╮
│ (mascot)  kane · login_test.md                ✓ passed · 41s · 12.4 credits │
│           7 steps                                                          │
│           [ View evidence ]                         ⛨ Verified with KaneAI │
╰────────────────────────────────────────────────────────────────────────────╯
```

```text
╭─────────────────────────────────────────────────────────────────────────────╮
│ (mascot)  kane · checkout_guest_test.md     ✗ failed · 1m 06s · 31.2 credits │
│           on Fill the shipping address · Postcode field rejects valid input │
│           [ View steps ] [ View evidence ]           ⛨ Verified with KaneAI │
╰─────────────────────────────────────────────────────────────────────────────╯
```

- The border is green for a pass and red for a failure.
- A failed test shows the step it failed on and KaneAI's own reason, from the run's investigation. kane-qe never guesses it.
- A suite shows one cell per test, its counts, and up to three failed tests. A suite where every test passed says `✓ all 3 passed`.
- **View steps** (or **View tests** for a suite) opens the pane on that run. **View evidence** opens the run's evidence in your browser.
- Claude Code folds several shell commands into one line ("ran 3 shell commands"). A folded line that holds one `kane-cli` test stays folded, with the card underneath. If it holds two or more tests, it unfolds so each test gets its own card.
- Only tests that Claude runs in this conversation get a card. Other `kane-cli` commands, and other shell commands, keep their normal rows. A command that never became a test (for example, `kane-cli` was not logged in) keeps its normal row, so the CLI's own error is readable.

---

## The Pane

Open it with `/kane` or the band's **[ Open ]**. It has three tabs.

**Runs.** A card per run: failed first, then running, passed, waiting. Press a run's name for its detail:

- Each step with a tick or a cross and its time.
- The step being worked on, or the one that failed, opens to what the agent thought, the action it took, and each check.
- For a failure: *why*, *kind* (KaneAI's category, severity and how sure it is) and *where*.
- **Open evidence**.

A suite shows one row per test. A suite on the remote grid shows the grid, the job and its link. See [Remote Runs](/support/docs/kane-cli-remote-execution/).

**Assurance.** Designed and proven coverage bars, how many tests are failing or blocked, when they last ran, and a card per use case. Press a use case to see what it still owes, under *To design* and *To run*, each with the reason and the command that does it. **Close these gaps with Claude** hands that list to Claude.

**History.** The last 30 finished runs in this project, newest first: when each ran, how long it took, and where it failed or how many of a suite's tests passed.

---

## Testing What Claude Changed

When Claude edits code and no `kane-cli` test has run since, kane-qe notices. Edits to docs (`.md`, `.txt` and the like), hidden tool folders (`.claude`, `.testmuai`, `.vscode`) and git-ignored files do not count.

What happens at the end of Claude's turn depends on the **After Claude changes code** setting:

| Setting | What happens |
|---|---|
| `offer` (default) | The band shows `⚠ 2 files changed, untested` with **[ Test this change ]** |
| `auto` | Claude is asked, once, to test the change before it finishes |
| `off` | Nothing |

**Test this change** opens a card in the pane with:

- The files that changed.
- Your saved tests (in `.testmuai/tests/`) that mention the same feature, each with its last result and a **Run it** button. The closest matches come first; among equal matches, the test that failed last time leads. See [Test.md](/support/docs/kane-cli-testmd/).
- If no saved test matches: **Draft a new objective**. Claude reads the change and writes a one-line test objective. **Run the objective** hands it to Claude to run.

The warning clears as soon as a `kane-cli` test that started after the edit finishes.

---

## Assurance Coverage

If your project has a Kane CLI requirement store (a `.context` folder), the band's third row shows coverage, such as `47% proven · 4 use cases`, or `82% designed · nothing run yet` before anything has run. kane-qe reads it with `kane-cli cover gaps --json` when the session starts and after each run. That command is read-only and spends no credits. See [Assurance](/support/docs/kane-cli-assurance/) and [Coverage](/support/docs/kane-cli-assurance-coverage/).

Without a requirement store, the row says `not set up` with **[ Set up now ]**. The Assurance tab then offers **Set it up with Claude**, which asks Claude to ingest your requirement (a PRD file, a Jira, Confluence or Linear link, or a web page), extract the use cases and design the tests.

---

## Evidence

Kane CLI seals each run's evidence into a pack when it exits. **View evidence** (on a card) and **Open evidence** (in the pane) start Kane CLI's own evidence viewer on your machine and open it in your browser, in one click. A second press reuses the viewer that is already running. See [Viewing Evidence](/support/docs/kane-cli-evidence-viewing/).

If no viewer can be started, Claude is asked to open the evidence instead. Where the chat cannot take clicks (see [Limits](#limits)), the card shows the evidence file's path instead of buttons.

---

## Commands and Settings

| Command | What it does |
|---|---|
| `/kane` | Open the pane |
| `/kane assurance` | Open the Assurance tab |
| `/kane history` | Open the History tab |
| `/kane auto` | Claude tests a change before it finishes, for this session |
| `/kane ask` | The band offers a test after a change, for this session |
| `/kane off` | Nothing after a change, for this session |

Settings are under `/config` → kane-qe:

| Setting | Default | Notes |
|---|---|---|
| After Claude changes code | `offer` | `offer`, `auto` or `off`, as above |
| kane-cli command | `kane-cli` | How kane-qe starts Kane CLI, split on spaces. Change it if `kane-cli` is not on your `PATH` |

Colours follow Claude Code's theme: the design's palette on dark themes, a darker one on light themes. A theme change shows within two seconds.

---

## What It Runs and Sends

kane-qe makes no network requests of its own. It reads files on your machine, starts a few local programs, and hands text to Claude in your conversation.

- **Reads:** Kane CLI's live-run files under `~/.testmuai/kaneai/sessions/`, your project's `.testmuai/` folder (saved tests, variables, evidence), and Claude Code's theme setting. It keeps the last 30 results per project in its own store on your machine.
- **Starts:**
  - `kill -0` and `ps` to check a run is alive and name it.
  - `tail` to read new lines of a run's events.
  - `git check-ignore` and `git diff` for changes.
  - `kane-cli cover gaps --json` for coverage.
  - `kane-cli evidence serve` and your browser opener for evidence.
- **Hands to Claude:**
  - The changed files and their diff, when you press **Draft a new objective**.
  - The prompt behind each button you press (**Run it**, **Close these gaps with Claude**, **Set it up with Claude**), shown in the conversation as your message.
  - In `auto` mode, a request to test the change.

The plugin's [README](https://github.com/LambdaTest/kane-claude-plugin/blob/main/kane-qe/README.md#what-this-mod-runs-and-sends) lists every command and every prompt word for word. The <BrandName /> [privacy policy](https://www.testmuai.com/legal/privacy/) and [terms of service](https://www.testmuai.com/legal/terms-of-service/) apply.

---

## Limits

- **Buttons need a surface that takes clicks**: Claude Code's fullscreen terminal or the desktop app. Elsewhere, cards show the evidence path as text instead of buttons, and the band and pane still update.
- **`auto` mode needs the end-of-turn hook.** Where an organization manages Claude Code centrally, that hook does not run for plugins people install themselves, so Claude is never asked to test the change. Use `offer` there.
- **This project only.** Runs started in other folders are not shown.
- **What Kane CLI does not report is left out**: there are no step totals, no credits while a run is going, and no browser name.
- **A newer Kane CLI** that changes its event format shows only each run's name and time until kane-qe is updated, rather than showing something wrong. See [Agent Output](/support/docs/kane-cli-agent-output/).

---

## Troubleshooting

| Problem | What to check |
|---|---|
| No band above the prompt | Run `/plugin` and check that kane-qe is installed and enabled. After installing, run `/reload-plugins` or start a new session |
| A test is not showing | Check that it runs inside the project folder Claude Code was opened in, and that Kane CLI is logged in (`kane-cli whoami`) |
| The third row says `not set up` | The project has no requirement store yet. Press **[ Set up now ]** |
| Coverage never appears | kane-qe could not run Kane CLI. Set **kane-cli command** in `/config` → kane-qe to the full path of `kane-cli` |
| Buttons do nothing | Use Claude Code's fullscreen terminal or the desktop app |
| A card shows a plain shell row instead | Kane CLI did not start a test (for example, it was not logged in); the row shows the CLI's own error |

To report a problem, open an issue at [github.com/LambdaTest/kane-claude-plugin](https://github.com/LambdaTest/kane-claude-plugin/issues).

---

## Update and Uninstall

Update:

```bash
claude plugin update kane-qe@lambdatest
```

Then run `/reload-plugins` in any session that is already open.

Uninstall:

```bash
claude plugin uninstall kane-qe@lambdatest
```

Source code: [github.com/LambdaTest/kane-claude-plugin](https://github.com/LambdaTest/kane-claude-plugin)
