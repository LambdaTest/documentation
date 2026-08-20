---
id: kane-cli-evidence-merge
title: Merging Evidence Packs
sidebar_label: Merging Packs
description: "Combine several kane-cli evidence packs into a single sealed pack with kane-cli evidence merge, including the strict default policy and collision handling."
keywords:
  - kane cli evidence merge
  - merge evidence packs
  - nightly evidence rollup
  - kaneai
  - testmu ai
url: https://www.testmuai.com/support/docs/kane-cli-evidence-merge/
site_name: TestMu AI
slug: kane-cli-evidence-merge/
canonical: https://www.testmuai.com/support/docs/kane-cli-evidence-merge/
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

`kane-cli evidence merge` combines several packs into one, for example the packs from a set of related runs you want to hand over as a single file:

```bash
kane-cli evidence merge <targets...> --run-id nightly-2026-07-11
```

Targets are execution ids or pack paths, and **order matters**. Earlier targets win where the policy has to choose.

| Flag | Description | Default |
|---|---|---|
| `--run-id <id>` | Run id for the merged pack, **required** | — |
| `-o, --out <path>` | Output path | `.testmuai/evidence/<run-id>.evidence` |
| `--rules <path>` | Custom merge-rules file, replaces the defaults wholesale | built-in defaults |
| `--on-collision <action>` | `error`, `prefer-first`, `prefer-latest`, or `discard` | `error` |
| `--title <title>` | Title for the merged run | first eligible pack's |
| `--no-finalize` | Keep the merged pack live instead of sealing it | seals by default |
| `--json` | Machine-readable merge report | off |
| `--env <name>` | Environment (`prod` or `stage`) | active env |

`--rules` and `--on-collision` are mutually exclusive.

Exit codes: `0` merged, `1` policy abort, `2` usage error.

## The default policy

Out of the box, merge is strict:

- inputs must be **sealed and valid**,
- duplicate run ids are skipped,
- packs from **different projects or organisations** are refused,
- a test-id collision is an **error**, unless you choose another action with `--on-collision`.

## A nightly roll-up

```bash
kane-cli evidence merge \
  .testmuai/evidence/*.evidence \
  --run-id nightly-2026-07-11 \
  --title "Nightly regression"
```

With no `-o`, the merged pack is written to `.testmuai/evidence/<run-id>.evidence`, which stays unique as long as the run id does.

The result is one sealed pack holding the tests from every pack that passed the policy. Packs the policy skipped contribute nothing, and the merge report (`--json`) lists what was skipped and why.

## Next steps

- [Validating packs](/support/docs/kane-cli-evidence-validate/) — confirm the merged pack before handing it over.
- [Viewing evidence](/support/docs/kane-cli-evidence-viewing/) — open the merged pack.
