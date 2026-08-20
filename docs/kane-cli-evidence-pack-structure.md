---
id: kane-cli-evidence-pack-structure
title: Evidence Pack Structure
sidebar_label: Pack Structure
description: "What is inside a kane-cli .evidence pack and what each part is for, from the run.yaml manifest anchor to per-step screenshots, logs, and failure records."
keywords:
  - evidence pack structure
  - run.yaml
  - result.yaml
  - evidence pack layout
  - kane cli evidence
  - kaneai
  - testmu ai
url: https://www.testmuai.com/support/docs/kane-cli-evidence-pack-structure/
site_name: TestMu AI
slug: kane-cli-evidence-pack-structure/
canonical: https://www.testmuai.com/support/docs/kane-cli-evidence-pack-structure/
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

A `.evidence` file is a standard zip. `unzip -l <pack>` lists it, and `unzip -p <pack> <entry>` prints one file without extracting the whole pack.

## The layout

```text
<execution_id>.evidence
├── run.yaml                          # Run manifest: title, status, started/ended, totals
├── failure.yaml                      # Run-level failure rollup
└── tests/
    └── <test-id>/                    # One directory per test in the run
        ├── test.md                   # The test definition
        ├── result.yaml               # Verdict, per-step outcomes, tags, executed-by,
        │                             #   share identifiers, environment (browser/OS/resolution)
        ├── logs/
        │   ├── meta.yaml             # Declares every log file below
        │   ├── tui.log               # Session narrative
        │   ├── <n>-run.log           # Runner log, one set per run index n (0, 1, …)
        │   ├── <n>-actions.ndjson    # Step-by-step actions the agent performed
        │   ├── <n>-console.ndjson    # Browser console output, attributed per step
        │   └── <n>-network.har       # Network traffic (HAR), attributed per step
        ├── steps/
        │   └── <ordinal>-<step-id>/  # One directory per executed step
        │       ├── screenshot.png    # The page as the agent saw it
        │       ├── annotated.png     # Same shot with the acted-on element highlighted
        │       ├── step.json         # Step metadata: kind, status, duration, url,
        │       │                     #   action id, click coordinates, element rect
        │       └── failure.yaml      # Failed/broken steps only: error, page state,
        │                             #   console/network references, triage
        ├── auteur/
        │   └── execution.json        # Full execution trajectory (step.json's action id
        │                             #   joins to operations in this tree)
        └── v16-trajectory/           # Per-run planning summaries and diagrams
```

A `testrun` pack has one `tests/<test-id>/` directory per member, all under the same root.

## The load-bearing files

Three files are load-bearing at **L0**, the minimal profile.

| File | Role |
|---|---|
| `run.yaml` | The manifest anchor. A directory or zip **is a pack** if and only if it has a top-level `run.yaml`. Holds run identity, lifecycle status, and the derived totals. Being a pack is not the same as passing validation, see [Validating packs](/support/docs/kane-cli-evidence-validate/). |
| `tests/<id>/test.md` | The test definition, that is, what was asked of the agent. It is **opaque**: the format references and hashes it, and never parses it. |
| `tests/<id>/result.yaml` | The structured per-step outcomes for that test. |

At **L1**, the profile a kane-cli pack validates against, four more artifacts are required once the run is finalized: each test's `logs/` (with its `meta.yaml`), each test's `steps/` directory, a global `coverage/` directory, and the pack-root `failure.yaml`.

## Reading a pack without unzipping it

The sealed zip is **flat**: its entries are exactly the contents of the pack directory, with `run.yaml` at the archive root and no wrapping folder. Because nothing is solid-compressed, a consumer can read the zip's central directory and then fetch only the entries it needs.

That is why the hosted viewer opens a very large pack after fetching only a few kilobytes.

## Run status and test verdicts

The format keeps two axes separate.

**Run lifecycle**, in `run.yaml.status`:

| Status | Meaning |
|---|---|
| `running` | The run is in flight. Totals, `ended`, and definition hashes are not yet authoritative. |
| `finalized` | The pack is sealed. This is the only authoritative state. |
| `aborted` | The run ended without sealing. |

**Test verdicts**, used at both test level and step level:

| Verdict | Meaning |
|---|---|
| `passed` | The oracle was satisfied. |
| `failed` | The oracle was evaluated and the product was wrong, that is, a real defect. |
| `broken` | The oracle could not be evaluated, because of an environment, infrastructure, or test fault. |
| `skipped` | Not executed. |

The `failed` versus `broken` split is the heart of the model: it separates "the product is wrong" from "we could not tell". A run can be `finalized` and still contain `failed` tests. The lifecycle is not a verdict.

## Next steps

- [Viewing evidence](/support/docs/kane-cli-evidence-viewing/) — open a pack in the viewer.
- [Validating packs](/support/docs/kane-cli-evidence-validate/) — check a pack's integrity.
- [The .evidence format](/support/docs/kane-cli-evidence-format/) — the profiles and the open contract.
