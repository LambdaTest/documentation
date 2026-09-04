# Rook Concepts and Data Model

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

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
