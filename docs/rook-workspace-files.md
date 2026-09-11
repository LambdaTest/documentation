---
id: rook-workspace-files
toc_max_heading_level: 2
title: Rook Workspace Files
hide_title: false
sidebar_label: What Lands on Disk
description: Understand the Rook workspace tree, immutable run snapshots, local machine state, and generated gitignore rules.
keywords:
  - rook workspace
  - testmuai rook files
  - rook run evidence
url: https://www.testmuai.com/support/docs/rook-workspace-files/
site_name: TestMu AI
slug: rook-workspace-files/
canonical: https://www.testmuai.com/support/docs/rook-workspace-files/
---
import VerifiedTag from '@site/src/component/verifiedTag';
import { BRAND_URL } from '@site/src/component/BrandName';


<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Rook Workspace Files",
          "item": `${BRAND_URL}/support/docs/rook-workspace-files/`
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
      "@id": "https://www.testmuai.com/support/docs/rook-workspace-files/"
    },
    "headline": "Rook Workspace Files",
    "description": "Understand the Rook workspace tree, immutable run snapshots, local machine state, and generated gitignore rules.",
    "url": "https://www.testmuai.com/support/docs/rook-workspace-files/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Agent Testing",
    "keywords": [
      "rook workspace",
      "testmuai rook files",
      "rook run evidence"
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
        "name": "Repository Tree",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": ".testmuai/rook/\n\u251c\u2500\u2500 settings.json                         active project and permission rules\n\u251c\u2500\u2500 .gitignore                            machine-only and sensitive exclusions\n\u251c\u2500\u2500 cache/                                derived indexes; safe to rebuild\n\u2514\u2500\u2500 projects/\n    \u2514\u2500\u2500 <project-id>/\n        \u251c\u2500\u2500 project.yaml\n        \u251c\u2500\u2500 active                        selected agent\n        \u251c\u2500\u2500 jobs/                         in-flight upstream writes\n        \u2514\u2500\u2500 agents/\n            \u2514\u2500\u2500 <agent-id>/\n                \u251c\u2500\u2500 agent.yaml            derived agent definition\n                \u251c\u2500\u2500 state.json            machine-local server IDs\n                \u251c\u2500\u2500 features/\n                \u2502   \u251c\u2500\u2500 F-001.yaml\n                \u2502   \u2514\u2500\u2500 F-005.yaml\n                \u251c\u2500\u2500 scenarios/\n                \u2502   \u251c\u2500\u2500 SC-001.yaml\n                \u2502   \u2514\u2500\u2500 SC-011.yaml\n                \u251c\u2500\u2500 profiles/\n                \u2502   \u251c\u2500\u2500 active\n                \u2502   \u2514\u2500\u2500 staging.yaml\n                \u251c\u2500\u2500 scripts/\n                \u2502   \u2514\u2500\u2500 order-desk.mjs\n                \u2514\u2500\u2500 runs/\n                    \u2514\u2500\u2500 01M0VPKFSDC07CWWF51FGAVCCR/\n                        \u251c\u2500\u2500 run.yaml\n                        \u251c\u2500\u2500 agent.yaml\n                        \u251c\u2500\u2500 features.yaml\n                        \u251c\u2500\u2500 profile.yaml\n                        \u251c\u2500\u2500 scenarios/\n                        \u2514\u2500\u2500 report.yaml"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "On first use, Rook adds a .gitignore below .testmuai/rook/ for data that should not travel",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Gitignore",
        "text": "*.log\n.env\ncache/\nprojects/*/jobs/\nprojects/*/agents/*/state.json"
      }
    ],
    "dateModified": "2026-09-04T12:50:18+05:30"
  }) }}
/>

# Rook Workspace Files

Rook uses plain files rather than a hidden workspace database. That makes agents, test definitions, profiles, and evidence packs available for normal review, diffing, editing, and version control.

## Repository Tree

<VerifiedTag value="Verified" />

```text
.testmuai/rook/
├── settings.json                         active project and permission rules
├── .gitignore                            machine-only and sensitive exclusions
├── cache/                                derived indexes; safe to rebuild
└── projects/
    └── <project-id>/
        ├── project.yaml
        ├── active                        selected agent
        ├── jobs/                         in-flight upstream writes
        └── agents/
            └── <agent-id>/
                ├── agent.yaml            derived agent definition
                ├── state.json            machine-local server IDs
                ├── features/
                │   ├── F-001.yaml
                │   └── F-005.yaml
                ├── scenarios/
                │   ├── SC-001.yaml
                │   └── SC-011.yaml
                ├── profiles/
                │   ├── active
                │   └── staging.yaml
                ├── scripts/
                │   └── order-desk.mjs
                └── runs/
                    └── 01M0VPKFSDC07CWWF51FGAVCCR/
                        ├── run.yaml
                        ├── agent.yaml
                        ├── features.yaml
                        ├── profile.yaml
                        ├── scenarios/
                        └── report.yaml
```

## Why Runs Copy Their Inputs

Every run directory is self-contained. It snapshots:

- the agent definition as it was;
- the feature set as it was;
- the selected profile as it was;
- the scenarios as they were;
- all per-scenario verdicts and evidence;
- the final report.

This makes a verdict readable later even after the working agent, profile, features, and scenario definitions have all changed. It also lets reports distinguish a regression from a definition change.

## Files Excluded From Git

On first use, Rook adds a `.gitignore` below `.testmuai/rook/` for data that should not travel:

<VerifiedTag value="Verified" />

```gitignore
*.log
.env
cache/
projects/*/jobs/
projects/*/agents/*/state.json
```

These entries cover logs, credentials, derived caches, in-flight jobs, and machine-specific IDs. Rook appends missing defaults rather than rewriting the file, because a repository may have intentional local policy.

## What Is Safe to Review and Commit

Project YAML, agent definitions, features, scenarios, profiles containing references, hook scripts without embedded credentials, and completed evidence packs are designed to be readable project artifacts.

Before committing:

1. Review hook scripts for accidental literal secrets.
2. Confirm profile YAML contains only references such as `${API_KEY}`.
3. Inspect run evidence for target data that should not leave the test environment.
4. Keep machine-only `.gitignore` entries intact.

## Global State Lives Elsewhere

Credentials, actual environment values, history, logs, and installed versions are stored under `~/.testmuai/rook/` by default. Set `ROOK_HOME` to isolate that state for CI or another account.

## Synchronization

`rook sync` copies a reviewed project tree upstream as one write. Run results are stored locally first; `rook runs sync` reconciles finished runs that still owe remote records. Neither operation changes the historical input snapshots inside an existing run.

## Review Files in Either UI

Use `rook ui --local` from this workspace to browse its agents and runs, then open a run's scenario and scroll to **files**. The local UI reads the directory tree above, including unsynchronized and test-mode evidence. Keep that tree intact when moving an approved evidence bundle.

Use `rook ui` for the hosted Web UI's uploaded versions and run artifacts. Local edits are not visible there until synchronized, and `--test` runs stay local. Hosted IDs may differ from run-directory IDs; use the UI's links instead of constructing URLs. See the [local and hosted walkthrough](/support/docs/rook-web-ui/#choose-your-ui).

## Related Documentation

- [Concepts and data model](/support/docs/rook-concepts/)
- [Architecture](/support/docs/rook-architecture/)
- [Environment and secrets](/support/docs/rook-environment-and-secrets/)
- [Verdicts and reports](/support/docs/agent-assurance-results-and-evidence/)
