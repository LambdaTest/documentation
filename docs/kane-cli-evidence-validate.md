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

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/kane-cli-evidence-validate/"
    },
    "headline": "Validating Evidence Packs",
    "description": "Check a kane-cli evidence pack's integrity and completeness with kane-cli evidence validate, including the L0 and L1 profiles and CI-friendly exit codes.",
    "url": "https://www.testmuai.com/support/docs/kane-cli-evidence-validate/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Kane CLI",
    "keywords": [
      "kane cli evidence validate",
      "validate evidence pack",
      "evidence profile L0 L1"
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
        "name": "kane-cli evidence validate checks a pack's integrity and completeness",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "kane-cli evidence validate <execution-id-or-path>"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Gating a pipeline",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "kane-cli evidence validate .testmuai/evidence/<execution_id>.evidence --json > report.json || exit 1"
      }
    ],
    "dateModified": "2026-08-21T00:24:19+05:30"
  }) }}
/>

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
- every test directory has a `result.yaml`, and where a `result.yaml` declares a definition path, the file at that path exists,
- a declared definition path is contained, with no leading `/`, no `..`, and no escape out of the pack,
- step ordinals are unique and strictly increasing, with gaps allowed.

**Full seal, added when the run is `finalized`:**

- `ended` and `totals` are present, and `ended` is at or after `started`,
- `totals` equals the rolled-up per-test verdicts, and the test count equals the sum of the verdict buckets,
- every declared definition carries a hash, and the hash matches its file.
- at `L1`, each test has a `logs/` directory whose `meta.yaml` declares at least one log, and a `steps/` directory; the pack has a global `coverage/` directory and the finalize-generated root `failure.yaml`.

A test marked `passed` that still has a `failed` or `broken` step is a **warning**, never a failure. The test verdict is authored, so the validator checks it, it does not overrule it.

## Profiles

| Profile | What it requires |
|---|---|
| `L0` | The minimal core: `run.yaml`, and for each test a `result.yaml`, plus its definition file where one is declared. |
| `L1` | Everything in L0, plus the captured artifact layer: declared logs, the `steps/` layer, a `coverage/` directory, and the run-level failure index. These need to be present only once the run is `finalized`. |

kane-cli packs carry the captured layer, so they validate at `L1`. That is the default for this command.

:::note
A missing per-step screenshot is a **warning**, not an error. Not every framework captures a frame per step, and not every step needs a folder.
:::

## When a pack will not open

If a pack will not open in the viewer, validate it. An unsealed pack, for example from a run that was killed hard, is checked for structure only, so it can still report valid. A truncated pack cannot be read at all and fails before any verdict.

## Next steps

- [Merging packs](/support/docs/kane-cli-evidence-merge/) — combine several runs into one file.
- [The .evidence format](/support/docs/kane-cli-evidence-format/) — what the profiles mean.
