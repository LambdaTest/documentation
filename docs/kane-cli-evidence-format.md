---
id: kane-cli-evidence-format
title: The .evidence Format
sidebar_label: The .evidence Format
description: "The open, framework-agnostic .evidence format behind kane-cli packs: the L0 and L1 profiles, what sealing guarantees, and the Apache-2.0 evidence-cli tooling."
keywords:
  - evidence format
  - open test evidence format
  - evidence cli
  - L0 L1 profile
  - framework agnostic test evidence
  - kaneai
  - testmu ai
url: https://www.testmuai.com/support/docs/kane-cli-evidence-format/
site_name: TestMu AI
slug: kane-cli-evidence-format/
canonical: https://www.testmuai.com/support/docs/kane-cli-evidence-format/
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

The `.evidence` pack is not a kane-cli-only file. It is an **open, framework-agnostic format** with its own specification, validator, and Apache-2.0 licensed tooling, published at [github.com/LambdaTest/evidence-cli](https://github.com/LambdaTest/evidence-cli).

One shape, whatever made it: a browser agent, a Playwright suite, a Jest run, or an API check. A pack is readable by a CI dashboard, an auditor, or a human without knowing the framework that wrote it.

## Who writes what

This is the part worth understanding, because it explains what the format guarantees and what it does not.

| Part of the pack | Written by |
|---|---|
| `run.yaml` identity, `tests/<id>/result.yaml`, the test definition | kane-cli |
| Per-step folders, screenshots, console, network, and trace logs | the kane-cli runner |
| The derived totals, the definition hashes, the run-level failure index, and the seal | `evidence finalize` |

The tooling in `evidence-cli` **captures nothing**. It has no browser and no runtime. It validates a pack, derives what can be derived, and seals it. A screenshot is in your pack because kane-cli put it there.

That is the point of the split: the container is open, so anything can produce a pack, and any tool can read one.

## Profiles

A profile is a rung on one contract. `L1` adds requirements to `L0` and never rewrites it.

| Profile | Requires |
|---|---|
| **L0** | The minimal core: a top-level `run.yaml`, and per test a definition file plus a `result.yaml`. |
| **L1** | All of L0, plus the captured artifact layer: declared logs, the `steps/` layer, a `coverage/` directory, and the run-level failure index. Video is optional. |

The definition file is **opaque**. The format references and hashes it, and never parses it. It can be a `test.md` from kane-cli, a `login.spec.ts` from Playwright, or anything else.

:::note
The contract version and the profile are different axes. The version, currently `0.1`, is the meaning of the fields. Adding a profile is additive and never changes it. Only a breaking change to an existing meaning bumps the version.
:::

## What sealing does and does not give you

`finalize` rolls up the totals, writes each definition's content hash, sets the run to `finalized`, and seals the directory into the zip. The seal replaces the live directory in place, atomically, so a complete copy exists at every instant.

The definition hash makes the pack **tamper-evident** for the thing that was tested: change the test file after the fact and the hash no longer matches. Packs are **not signed**, so this is evidence of change, not proof of origin.

## Using the format directly

If you want to produce or read packs outside kane-cli, the tooling is on npm:

```bash
npm install -g @testmuai/evidence-cli
```

```bash
evidence validate my-run.evidence --profile L0
evidence finalize my-run.evidence/
```

The standalone CLI ships `validate`, `finalize`, and `merge`, with exit codes `0` valid, `1` invalid, and `2` usage error. It reads its config from `~/.testmuai/evidence/config.json`, and the active profile resolves from the `--profile` flag, then the config, then the built-in default of `L0`.

It is also a library, so `validate` and `finalize` can be called in process:

```ts
import { validate, finalize } from "@testmuai/evidence-cli";

const report = await validate("my-run.evidence", { profile: "L1" });
if (!report.valid) {
  for (const d of report.diagnostics) {
    console.error(`${d.severity} ${d.location}: ${d.message} [${d.code}]`);
  }
}
```

:::note
The standalone `evidence` CLI defaults to the `L0` profile, while `kane-cli evidence validate` defaults to `L1`, because a kane-cli pack always carries the captured layer.
:::

## Next steps

- [Pack structure](/support/docs/kane-cli-evidence-pack-structure/) — the layout in full.
- [Validating packs](/support/docs/kane-cli-evidence-validate/) — the checks the validator runs.
