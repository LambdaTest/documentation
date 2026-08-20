---
id: kane-cli-evidence-validate
title: Validating Evidence Packs
sidebar_label: Validating Packs
description: "Check a kane-cli evidence pack's integrity and completeness with kane-cli evidence validate, including the L0 and L1 profiles and CI-friendly exit codes."
keywords:
  - kane cli evidence validate
  - validate evidence pack
  - evidence profile L0 L1
  - evidence pack ci
  - kaneai
  - testmu ai
url: https://www.testmuai.com/support/docs/kane-cli-evidence-validate/
site_name: TestMu AI
slug: kane-cli-evidence-validate/
canonical: https://www.testmuai.com/support/docs/kane-cli-evidence-validate/
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

`kane-cli evidence validate` checks a pack's integrity and completeness:

```bash
kane-cli evidence validate <execution-id-or-path>
```

The target can be an execution id, resolved against the project store, a live pack directory, or a sealed `.evidence` file.

| Flag | Description | Default |
|---|---|---|
| `--profile <profile>` | Validation profile, `L0` or `L1` | `L1` |
| `--json` | Machine-readable report | off |

Exit codes: `0` valid, `1` invalid, `2` not found. `--json` plus the exit code makes this easy to gate in CI or scripts.

## Gating a pipeline

```bash
kane-cli evidence validate .testmuai/evidence/<execution_id>.evidence --json > report.json || exit 1
```

## What validation checks

Validation is **status-gated**. A pack that is still `running` or was `aborted` is checked for structure only. A `finalized` pack gets the full seal checks as well.

**Structure, on every run status:**

- the manifest anchor `run.yaml` and its identity fields are present,
- each test's recorded id equals its `tests/<id>/` directory name,
- every test directory has a `result.yaml` and a declared definition path, and the file at that path exists,
- the definition path is contained, with no leading `/`, no `..`, and no escape out of the pack,
- step ordinals are unique and strictly increasing, with gaps allowed.

**Full seal, added when the run is `finalized`:**

- `ended` and `totals` are present, and `ended` is at or after `started`,
- `totals` equals the rolled-up per-test verdicts, and the test count equals the sum of the verdict buckets,
- every definition hash is present and matches its file.

A test status that disagrees with its own steps is a **warning**, never a failure. The test verdict is authored, so the validator checks it, it does not overrule it.

## Profiles

| Profile | What it requires |
|---|---|
| `L0` | The minimal core: `run.yaml`, and for each test a definition file and a `result.yaml`. |
| `L1` | Everything in L0, plus the captured artifact layer: declared logs, the `steps/` layer, a `coverage/` directory, and the run-level failure index. |

kane-cli packs carry the captured layer, so they validate at `L1`, which is why it is the default for this command.

:::note
A missing per-step screenshot is a **warning**, not an error. Not every framework captures a frame per step, and not every step needs a folder.
:::

## When a pack will not open

If a pack will not open in the viewer, validate it. An unsealed or truncated pack, for example from a run that was killed hard, reports as invalid, and the run's session directory still holds the raw logs.

## Next steps

- [Merging packs](/support/docs/kane-cli-evidence-merge/) — combine several runs into one file.
- [The .evidence format](/support/docs/kane-cli-evidence-format/) — what the profiles mean.
