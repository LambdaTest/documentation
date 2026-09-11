---
id: rook-concepts
toc_max_heading_level: 2
title: Rook Concepts and Data Model
hide_title: false
sidebar_label: Concepts
description: Understand Rook projects, agents, features, scenarios, profiles, runs, and evidence-backed verdicts.
keywords:
  - rook concepts
  - rook data model
  - autonomous agent test scenarios
url: https://www.testmuai.com/support/docs/rook-concepts/
site_name: TestMu AI
slug: rook-concepts/
canonical: https://www.testmuai.com/support/docs/rook-concepts/
---

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/rook-concepts/"
    },
    "headline": "Rook Concepts and Data Model",
    "description": "Understand Rook projects, agents, features, scenarios, profiles, runs, and evidence-backed verdicts.",
    "url": "https://www.testmuai.com/support/docs/rook-concepts/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Agent Testing",
    "keywords": [
      "rook concepts",
      "rook data model",
      "autonomous agent test scenarios"
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
        "name": "Relationships",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "Project\n\u2514\u2500\u2500 Agent\n    \u251c\u2500\u2500 Features\n    \u2502   \u2514\u2500\u2500 Scenarios pinned to feature revisions\n    \u251c\u2500\u2500 Profiles and hook scripts\n    \u2514\u2500\u2500 Runs\n        \u251c\u2500\u2500 Frozen agent, feature, profile, and scenario snapshots\n        \u2514\u2500\u2500 Per-scenario verdicts and evidence"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "A generated scenario resembles",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "title: Process eligible physical item refund under threshold\nfeature_id: F-005\ngoal: >-\n  I bought a jacket 10 days ago (Order #ORD-50122) for $250, but it does not\n  fit. I would like to return it and get a full refund.\nacceptance_criteria:\n  - statement: >-\n      The agent confirms the refund for Order #ORD-50122 is approved or issued\n      for $250.\n    check: llm_judge\n  - statement: >-\n      The agent acknowledges that the order is within the 30-day return window\n      and is an eligible physical product.\n    check: llm_judge\n  - statement: >-\n      The agent does not say that manager approval is required.\n    check: llm_judge\ncategory: happy_path\nclass: functional\nconfidence: low\ninput_kind: text\noutput_kind: text\nwhy: >-\n  Catches incorrect denial or manager escalation for a standard refund at or\n  below the documented threshold.\nlocal_id: SC-001\norigin: generated\nexecutable: true\nsources:\n  - .claude/agents/refund-desk.md\nfeature_revision_id: sha256:6b7e9f5a913d886e0e30dd871614fff85f151..."
      }
    ],
    "dateModified": "2026-09-04T12:50:18+05:30"
  }) }}
/>

# Rook Concepts and Data Model

Rook represents autonomous agent testing with seven visible, file-backed concepts. Each concept is stored in the workspace rather than hidden in an opaque local database.

## Core Concepts

| Concept | Meaning |
|---|---|
| **Project** | The grouping under which work is filed and the unit synchronized upstream. One project is active at a time. |
| **Agent** | An AI agent discovered in the source material, with a derived description of what it does. A project can contain several agents; one is active. |
| **Feature** | One capability extracted during exploration. Scenarios refer to features and pin the exact feature revision they were generated against. |
| **Scenario** | One test goal with independently graded acceptance criteria, classification, category, rationale, and source evidence. |
| **Profile** | The scripts and environment references Rook uses to invoke an agent. An agent can have several profiles, such as staging and production. |
| **Run** | One execution of selected scenarios through one profile. It includes snapshots of the agent, features, profile, scenarios, and results as they existed at execution time. |
| **Verdict** | The judge's conclusion for one scenario, including per-criterion status, quoted evidence, confidence, and explicit verification gaps. |

## Relationships

```text
Project
└── Agent
    ├── Features
    │   └── Scenarios pinned to feature revisions
    ├── Profiles and hook scripts
    └── Runs
        ├── Frozen agent, feature, profile, and scenario snapshots
        └── Per-scenario verdicts and evidence
```

This model separates three kinds of change that should not be confused:

- implementation changes update the agent and its features;
- test-definition changes update scenarios;
- target-environment changes update or switch profiles.

A run pins all three, so an old verdict remains explainable after the working tree moves on.

## A Complete Scenario

Rook writes editable YAML. A generated scenario resembles:

```yaml
title: Process eligible physical item refund under threshold
feature_id: F-005
goal: >-
  I bought a jacket 10 days ago (Order #ORD-50122) for $250, but it does not
  fit. I would like to return it and get a full refund.
acceptance_criteria:
  - statement: >-
      The agent confirms the refund for Order #ORD-50122 is approved or issued
      for $250.
    check: llm_judge
  - statement: >-
      The agent acknowledges that the order is within the 30-day return window
      and is an eligible physical product.
    check: llm_judge
  - statement: >-
      The agent does not say that manager approval is required.
    check: llm_judge
category: happy_path
class: functional
confidence: low
input_kind: text
output_kind: text
why: >-
  Catches incorrect denial or manager escalation for a standard refund at or
  below the documented threshold.
local_id: SC-001
origin: generated
executable: true
sources:
  - .claude/agents/refund-desk.md
feature_revision_id: sha256:6b7e9f5a913d886e0e30dd871614fff85f151...
```

## Why the Fields Matter

| Field | Purpose |
|---|---|
| `goal` | The user-level task passed to the agent. |
| `acceptance_criteria` | Independent requirements. A scenario fails when any verified required criterion fails. |
| `class` and `category` | Position the test within the functional, non-functional, or adversarial taxonomy. |
| `why` | Lets a reviewer decide whether the test deserves to exist. |
| `sources` | Connects the test to the material from which Rook derived it. |
| `feature_revision_id` | Distinguishes a product regression from a test whose source definition changed. |
| `executable` | Records whether the scenario can run against the current profile and evidence surface. |

Every field is reviewable and editable. Regeneration can retain current scenarios whose inputs and feature pins still match, while `--force` deliberately re-derives them.

## Local State Is the Record

The `.testmuai/rook/` directory is the authoritative workspace record. Synchronization copies reviewed state upstream; it does not replace the local model with hidden cloud state.

## Related Documentation

- [Architecture](/support/docs/rook-architecture/)
- [Scenarios and taxonomy](/support/docs/agent-assurance-scenarios/)
- [Verdicts and reports](/support/docs/agent-assurance-results-and-evidence/)
- [Workspace files](/support/docs/rook-workspace-files/)
