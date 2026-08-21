---
id: kane-cli-evidence
title: Evidence Packs
sidebar_label: Overview
description: "Every kane-cli run seals an evidence pack: a portable .evidence file holding the test definition, per-step screenshots, console and network logs, and failure records for the run."
keywords:
  - kane cli evidence
  - evidence pack
  - kane cli evidence pack
  - test run artifacts
  - kaneai
  - testmu ai
url: https://www.testmuai.com/support/docs/kane-cli-evidence/
site_name: TestMu AI
slug: kane-cli-evidence/
canonical: https://www.testmuai.com/support/docs/kane-cli-evidence/
---

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

Every kane-cli run produces an **evidence pack**: a single sealed `.evidence` file containing everything about the run — the test definition, a result summary, per-step screenshots (plus annotated copies highlighting what the agent acted on), browser console and network logs attributed to each step, run logs, and on failures a per-step failure record with the error, page state, and pointers into the logs.

A pack is a self-contained zip. You can open it in the hosted viewer, share it with a teammate, archive it in CI, validate it, or merge several packs into one.

## What's inside a pack

Opened in the viewer (or unzipped), a pack contains:

- **The test definition** — what was asked of the agent.
- **A result summary** — status, duration, per-step outcomes, tags, who ran it (user name/email), a share link, and the environment (browser resolution, OS version).
- **Per-step screenshots** — the page as the agent saw it, plus an **annotated** copy highlighting the element the agent acted on.
- **Browser console and network logs** — captured for the whole run and attributed to the step that produced them.
- **Run logs** — the CLI and runner logs for the execution.
- **Failure records** — on failed runs, a per-step record with the error message, the page state at failure, and references into the console/network logs.

For a mobile run, the result summary records the **device** in the run environment, for example the device model and OS version.

:::note
The pack is the **only** place run artifacts live. There is no separate per-run log directory on disk.
:::

## Where packs live

Every run except `testrun run` seals a pack in its session directory:

```text
~/.testmuai/kaneai/sessions/<session-id>/evidence/<execution_id>.evidence
```

Runs you keep are additionally copied into the **project store** in your working directory:

```text
<cwd>/.testmuai/evidence/<execution_id>.evidence
```

What lands in the project store depends on the surface:

| Surface | Copied to `.testmuai/evidence/`? |
|---|---|
| `kane-cli run` / TUI session | Only when the session is **named** (`--name`, or the save prompt at exit) |
| `kane-cli testmd run` | Always |
| `kane-cli testrun run` | Always (the pack is created directly in the store) |

An interactive TUI session maps to one pack: it accumulates every run in the session and seals when you `/exit` or start over with `/new`.

If kane-cli crashes mid-run, the next start automatically sweeps incomplete or orphaned packs. Packs belonging to live concurrent processes are untouched. There is nothing to clean up by hand.

## The `kane-cli evidence` commands

| Command | What it does |
|---|---|
| [`evidence serve`](/support/docs/kane-cli-evidence-viewing/) | Serve one or more sealed packs to the hosted viewer from a localhost-only server |
| [`evidence validate`](/support/docs/kane-cli-evidence-validate/) | Check a pack's integrity and completeness against a profile |
| [`evidence merge`](/support/docs/kane-cli-evidence-merge/) | Combine several packs into one |

## Publishing to the dashboard

Runs that upload to Test Manager attach their sealed pack automatically. Replayed `testmd` runs and `testrun` executions publish their packs to your project as well, so the dashboard shows execution evidence even for cache-replayed runs that never re-author.

## Next steps

- [Pack structure](/support/docs/kane-cli-evidence-pack-structure/) — every file inside a pack and what it is for.
- [Viewing evidence](/support/docs/kane-cli-evidence-viewing/) — open a pack in the viewer.
- [Debugging a failed run](/support/docs/kane-cli-evidence-debugging/) — the fastest path from a red run to a cause.
- [The .evidence format](/support/docs/kane-cli-evidence-format/) — the open format behind the pack.
