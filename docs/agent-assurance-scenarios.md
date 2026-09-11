---
id: agent-assurance-scenarios
toc_max_heading_level: 2
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
import VerifiedTag from '@site/src/component/verifiedTag';

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

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/agent-assurance-scenarios/"
    },
    "headline": "Generate and Manage Agent Assurance Test Scenarios",
    "description": "Generate, review, edit, filter, exclude, and understand Agent Assurance functional, non-functional, and adversarial test scenarios.",
    "url": "https://www.testmuai.com/support/docs/agent-assurance-scenarios/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Agent Assurance Platform",
    "keywords": [
      "rook scenarios",
      "ai agent test cases",
      "adversarial agent testing"
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
    "dateModified": "2026-09-11"
  }) }}
/>

# Generate and Manage Agent Assurance Test Scenarios

Rook generates scenarios from the active agent's discovered features, tools, policies, examples, and known data. A scenario is a plain YAML file containing the exact goal sent to the agent, acceptance criteria, forbidden behavior, observation requirements, timeout, repeat count, and tags.

## Generate the Default Suite

In the TUI:

<VerifiedTag value="Verified" />

```text
/generate
```

In headless mode:

<VerifiedTag value="Verified" />

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

Request an approximate total:

<VerifiedTag value="Verified" />

```text
/generate --total 30
```

Generate one or more classes:

<VerifiedTag value="Verified" />

```text
/generate --class functional,adversarial --total 24
```

Generate named categories:

<VerifiedTag value="Verified" />

```text
/generate --category happy_path,prompt_injection,policy_violation --total 18
```

Flags are comma-separated and repeatable in headless mode:

<VerifiedTag value="Verified" />

```bash
rook generate \
  --category happy_path \
  --category prompt_injection,policy_violation \
  --total 18
```

Every selected category receives at least one scenario when the total permits it. If the total is smaller than the category list, Rook narrows the selection instead of exceeding your requested budget.

Add domain guidance after `--` in the TUI:

<VerifiedTag value="Verified" />

```text
/generate --class adversarial -- focus on refund approval and PII exposure
```

The same instruction works in a shell: `rook generate --class adversarial -- "focus on refund approval and PII exposure"`.

Use `--force` to regenerate even when the active agent appears current:

<VerifiedTag value="Verified" />

```text
/generate --force --total 20
```

Review the generated scenarios and their required evidence. The older `--no-validate` flag is not available in 0.1.3.

Select the intended project and agent with <code>rook project use &lt;id&gt;</code> and <code>rook agent use &lt;id&gt;</code> before headless commands.

## Review Scenario Runnability

List scenarios:

<VerifiedTag value="Verified" />

```text
/scenarios list
```

Or:

<VerifiedTag value="Verified" />

```bash
rook scenarios list
rook scenarios list --json
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

<VerifiedTag value="Verified" />

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

<VerifiedTag value="Verified" />

```text
/scenarios exclude SC-014 SC-021
```

Re-include it:

<VerifiedTag value="Verified" />

```text
/scenarios include SC-014
```

Delete permanently:

<VerifiedTag value="Verified" />

```text
/scenarios delete SC-021
```

Headless equivalents:

<VerifiedTag value="Verified" />

```bash
rook scenarios exclude SC-014 SC-021
rook scenarios include SC-014
rook scenarios delete SC-021
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


## Review Scenarios in the Web UI

After <code>rook sync</code>, open the agent’s **Scenarios** tab in the [Web UI](/support/docs/rook-web-ui/). Filter by feature, class, result, or category. For historical evidence, open a scenario from the specific run; the current catalog definition may have changed since that run.
