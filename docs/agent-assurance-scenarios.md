---
id: agent-assurance-scenarios
title: Generate and Manage Agent Assurance Test Scenarios
hide_title: false
sidebar_label: Scenarios
description: Generate, review, edit, filter, exclude, and understand Agent Assurance functional, non-functional, and adversarial test scenarios.
keywords:
  - rook scenarios
  - ai agent test cases
  - adversarial agent testing
  - agent scenario yaml
url: https://www.testmuai.com/support/docs/agent-assurance-scenarios/
site_name: TestMu AI
slug: agent-assurance-scenarios/
canonical: https://www.testmuai.com/support/docs/agent-assurance-scenarios/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": BRAND_URL },
      { "@type": "ListItem", "position": 2, "name": "Support", "item": `${BRAND_URL}/support/docs/` },
      { "@type": "ListItem", "position": 3, "name": "Scenarios", "item": `${BRAND_URL}/support/docs/agent-assurance-scenarios/` }
    ]
  }) }}
/>

# Generate and Manage Agent Assurance Test Scenarios

Rook generates scenarios from the active agent's discovered features, tools, policies, examples, and known data. A scenario is a plain YAML file containing the exact goal sent to the agent, acceptance criteria, forbidden behavior, observation requirements, timeout, repeat count, and tags.

## Generate the Default Suite

In the TUI:

```text
/generate
```

In headless mode:

```bash
rook generate
```

Rook first shows a plan:

- When exploration is missing, the plan includes `/explore` before generation.
- When stored exploration appears stale, Rook warns you. Normal generation still proceeds from the stored feature model.
- Run `/explore --force` first when you need scenarios based on the current source.

Review the steps and estimated credits before proceeding.

## Scenario Taxonomy

Rook has three classes and 18 categories.

| Class | Categories | Purpose |
|---|---|---|
| `functional` | `happy_path`, `negative`, `boundary`, `integration`, `state_context` | Main behavior, error handling, limits, dependencies, and conversation memory |
| `non_functional` | `performance`, `token_economy`, `reliability`, `quality` | Latency, cost, repeatability, completeness, tone, and format |
| `adversarial` | `prompt_injection`, `jailbreak`, `data_exfiltration`, `pii_leakage`, `harmful_content`, `hallucination`, `hijacking`, `policy_violation`, `technical_injection` | Attacks, unsafe behavior, leakage, invention, off-task behavior, and injection |

Performance and reliability scenarios normally repeat because one sample does not establish latency or consistency.

## Control the Suite Size and Focus

Generate a fixed total:

```text
/generate --total 30
```

Generate one or more classes:

```text
/generate --class functional,adversarial --total 24
```

Generate named categories:

```text
/generate --category happy_path,prompt_injection,policy_violation --total 18
```

Flags are comma-separated and repeatable in headless mode:

```bash
rook generate \
  --category happy_path \
  --category prompt_injection,policy_violation \
  --total 18
```

Every selected category receives at least one scenario when the total permits it. If the total is smaller than the category list, Rook narrows the selection instead of exceeding your requested budget.

Add domain guidance after `--` in the TUI:

```text
/generate --class adversarial -- focus on refund approval and PII exposure
```

The headless equivalent uses `--instruction` only on `rook explore`; headless `rook generate` currently exposes class, category, and total selectors but not a free-form instruction flag.

Use `--force` in the TUI to regenerate even when the active agent appears current:

```text
/generate --force --total 20
```

Use `--no-validate` only when you want to skip the model runnability pass. Deterministic capability checks still apply when the suite runs.

## Review Scenario Runnability

List scenarios:

```text
/scenarios list
```

Or:

```bash
rook scenarios list --entity <agent-id>
rook scenarios list --entity <agent-id> --json
```

Runnability is recomputed from the scenario and the active profile, not fixed when the scenario is generated. Rook skips scenarios before invocation when the input or conversation cannot be executed. Common runtime skip reasons include:

- No active verified profile.
- An input kind cannot be delivered.
- A streamed response cannot be read.
- A multi-turn scenario has no conversation mapping.
- A required MCP verification server is unavailable.

Missing usage reporting, tool-call observation, or filesystem observation is different. Rook can still invoke the agent and grade the criteria it can see:

- The affected criteria become **Unable to Verify**.
- The run still consumes time and credits.
- The message names the profile field or MCP configuration that can close the gap.

## Scenario YAML Anatomy

A simplified scenario looks like:

```yaml
id: SC-014
feature_id: refund-request
class: functional
category: state_context
title: Ask for missing order and identity details before refunding
goal: >-
  Refund my last order. I do not have the order number with me.
input:
  kind: text
  attachments: []
expectation:
  acceptance_criteria:
    - id: AC-1
      statement: The agent asks for the order identifier.
      check: llm_judge
    - id: AC-2
      statement: The agent does not issue a refund before identity verification.
      check: mcp_probe
  forbidden:
    - claims the refund was completed without verification
  output_kind: text
  mcp:
    - server: billing
      tool: issue_refund
      expect: not_called
verification_requires:
  - type: mcp
    server: billing
    op: issue_refund
executable: true
skip_reason: null
repeat: 1
timeout_seconds: 120
multi_turn: true
setup_messages: []
max_turns: 4
tags: [refund, identity]
```

Important fields:

- `goal` is handed to the target verbatim.
- `acceptance_criteria` are graded independently.
- `forbidden` values are leakage or hallucination tripwires.
- `output_kind` prevents text judging from pretending to assess a file or image.
- `verification_requires` names evidence dependencies.
- `preconditions` document fixtures Rook expects but does not create automatically.
- `repeat` controls repeated samples.
- `multi_turn`, `setup_messages`, and `max_turns` bound a conversation.
- `excluded` records a user's durable decision not to run the scenario.

## Input and Output Modalities

Scenario input kinds are `text`, `text+file`, `url`, `pr_ref`, and `image`. The current executor passes `text` and `url` values through the goal.

**Not yet implemented:** Native file attachment, `pr_ref`, and image-input delivery. Do not use them as executable release gates. The profile schema can record an attachment field or upload endpoint, but the runner does not currently transmit `scenario.input.attachments`.

Expected output kinds are `text`, `json`, `file`, `image`, and `none`.

For a PDF, CSV, image, or other produced file, write criteria that distinguish:

1. The artifact exists.
2. Its type, size, or dimensions are correct.
3. Its content is correct.

Rook may prove the first two while marking the third **Unable to Verify**. This reports more usefully than either failing the whole scenario or claiming the artifact content passed without reading it.

## Curate the Suite

Exclude a scenario without deleting it:

```text
/scenarios exclude SC-014 SC-021
```

Re-include it:

```text
/scenarios include SC-014
```

Delete permanently:

```text
/scenarios delete SC-021
```

Headless equivalents:

```bash
rook scenarios exclude SC-014 SC-021 --entity <agent-id>
rook scenarios include SC-014 --entity <agent-id>
rook scenarios delete SC-021 --entity <agent-id>
```

Deletion removes the live scenario file, but completed runs keep a snapshot of the definitions they executed. Historical evidence does not change when the active suite changes.

## Manual Editing Guidelines

Scenario files are plain YAML under `.testmuai/rook/agents/<agent-id>/scenarios/`. You can review them in a pull request and edit them with normal tools.

When editing manually:

- Keep scenario IDs unique because IDs are filenames and historical keys.
- Use specific goals and observable acceptance criteria.
- Separate expected effects from claims in the reply.
- Declare preconditions instead of silently assuming fixture state.
- Add `verification_requires` for effects that need an external read.
- Set `output_kind` for generated files and images.
- Keep secret values out of goals, fixtures, and expected output.
- Increase `repeat` only when multiple samples answer a real reliability or performance question.

Run `rook scenarios list` after editing to surface schema and capability problems before spending on a suite.
