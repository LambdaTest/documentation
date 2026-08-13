---
id: rook-connect-and-explore-agents
title: Connect and Explore AI Agents With Rook
hide_title: false
sidebar_label: Connect and Explore Agents
description: Explore agents from a workspace, external checkout, PRD, or GitHub repository and manage multiple discovered agents in Rook.
keywords:
  - rook explore agent
  - connect ai agent
  - test agent github repository
  - ai agent prd testing
url: https://www.testmuai.com/support/docs/rook-connect-and-explore-agents/
site_name: TestMu AI
slug: rook-connect-and-explore-agents/
canonical: https://www.testmuai.com/support/docs/rook-connect-and-explore-agents/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": BRAND_URL },
      { "@type": "ListItem", "position": 2, "name": "Support", "item": `${BRAND_URL}/support/docs/` },
      { "@type": "ListItem", "position": 3, "name": "Explore Agents", "item": `${BRAND_URL}/support/docs/rook-connect-and-explore-agents/` }
    ]
  }) }}
/>

# Connect and Explore AI Agents With Rook

Exploration tells Rook what an agent is supposed to do before you tell it how to invoke the agent. Rook reads local material such as source code, prompts, skills, manifests, tool declarations, tests, README files, and product requirements.

The target can be a complete application, one agent directory, or a documentation-only workspace. Rook does not require a particular agent framework.

## Explore the Current Workspace

Start Rook from the repository root and run:

```text
/explore .
```

The headless equivalent is:

```bash
rook explore .
```

Use a narrower path when a monorepo contains a specific agent package:

```text
/explore packages/travel-agent
```

Rook scans deterministically first, then gives its discovery subagent read tools scoped to the authorized workspace. If it finds one candidate, it asks whether to register it. If it finds several, choose the candidates you want.

## What Rook Looks For

Rook can identify agents from evidence including:

- System and developer prompts.
- Model calls and agent loops.
- Tool or function registries.
- MCP server declarations.
- Framework files such as `.claude/agents/*.md`.
- Skills, subagents, routing rules, and policies.
- HTTP handlers and command entrypoints.
- Tests, fixtures, examples, and user-facing documentation.
- PRDs and other text describing intended behavior.

Discovery does not invent missing facts. If a tool's write behavior cannot be established, Rook records it as unknown instead of guessing from its name.

## Give Exploration Extra Context

Put free-form guidance after `--`:

```text
/explore . -- focus on the refund approval threshold and identity checks
```

In headless mode:

```bash
rook explore . \
  --instruction "focus on the refund approval threshold and identity checks"
```

The instruction guides the discovery model. It does not widen the filesystem scope.

Use `--force` after a substantial change or when you want to ignore the incremental freshness check:

```text
/explore --force
```

Normally Rook hashes the relevant files and re-reads only what changed.

## Explore a PRD Without Source Code

Create a clean directory containing the material you are authorized to share:

```text
travel-agent-spec/
  PRD.md
  policies.md
  api-examples.md
  fixtures/
```

Start Rook inside that directory:

```bash
cd travel-agent-spec
rook
```

Then run:

```text
/explore . -- the deployed agent is a multi-turn travel planner
```

If no structural agent signal is found, Rook can ask whether to register the directory anyway. A documentation-only exploration can generate requirement-grounded scenarios, but it has less evidence about implementation details, tool behavior, and side effects than a source-backed exploration.

You still need an invocation profile that reaches the deployed agent. See [Configure Rook Profiles](/support/docs/rook-profiles/).

## Explore a GitHub Repository

Rook does not read a GitHub URL directly. Clone the repository, enter the checkout, and run Rook locally:

```bash
git clone https://github.com/<owner>/<repository>.git
cd <repository>
rook
```

Then:

```text
/explore .
```

If you paste a GitHub URL into `/explore`, Rook refuses it before spending credits and prints the corresponding clone workflow.

For a pull request, check out the exact head you want to test:

```bash
gh repo clone <owner>/<repository>
cd <repository>
gh pr checkout <number>
rook
```

This keeps the source state, scenario evidence, and tested revision reproducible. Never clone or check out untrusted code and then run its setup scripts without reviewing them.

## Explore an External Local Directory

You can explicitly point interactive Rook at a directory outside the current workspace:

```text
/explore ../another-agent
```

The path must be typed by a human. A model suggestion or stored record cannot grant a new external read scope.

:::note Current external-workspace limitation
Rook can read and report an external directory, but the current pre-alpha release does not persist an external agent record. To keep discovery state and generate scenarios, `cd` into that checkout and start Rook there.
:::

Rook refuses a parent directory that contains the current workspace because that would mix evaluator files with target files. It also refuses a single external file because granting its entire parent directory would be broader than the path you selected.

## Manage Multiple Agents

The browser inventory shows all registered agents and their scenario and run history.

<img loading="lazy" src={require('../assets/images/rook/rook-browser-agents.png').default} alt="Rook agent inventory for a workspace containing multiple agents" width="1440" height="900" className="doc_img"/>

Interactive commands:

```text
/agent
/agent use <id>
/agent rm <id>
```

Headless commands:

```bash
rook agent list
rook agent list --json
rook agent use <id>
```

`/agent rm` forgets the agent and everything stored below its project record. Review the target ID carefully before using it.

## Explore All Discovered Agents in Headless Mode

The interactive flow asks which candidates to register. For automation, use `--all`:

```bash
rook explore . --all --json
```

Use `--allow` only for a narrowly reviewed tool call:

```bash
rook explore . --allow 'bash(npm test)'
```

`--allow` is additive authorization. It does not create a sandbox or restrict commands through any other already approved grant.

## Re-Explore After Changes

Run `/explore` again when prompts, tools, policies, skills, or agent source changes. Rook compares the current files with the stored index and updates the existing record instead of abandoning its scenario and run history.

After exploration, run `/generate` to refresh scenarios. Rook shows a plan and explains which prerequisite is stale before it spends credits.
