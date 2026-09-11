---
id: agent-assurance-connect-and-explore-agents
toc_max_heading_level: 2
title: Connect and Explore AI Agents
hide_title: false
sidebar_label: Connect and Explore Agents
description: Explore agents from a workspace, external checkout, PRD, or GitHub repository and manage multiple discovered agents in Agent Assurance.
keywords:
  - rook explore agent
  - connect ai agent
  - test agent github repository
  - ai agent prd testing
url: https://www.testmuai.com/support/docs/agent-assurance-connect-and-explore-agents/
site_name: TestMu AI
slug: agent-assurance-connect-and-explore-agents/
canonical: https://www.testmuai.com/support/docs/agent-assurance-connect-and-explore-agents/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import VerifiedTag from '@site/src/component/verifiedTag';

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": BRAND_URL },
      { "@type": "ListItem", "position": 2, "name": "Support", "item": `${BRAND_URL}/support/docs/` },
      { "@type": "ListItem", "position": 3, "name": "Explore Agents", "item": `${BRAND_URL}/support/docs/agent-assurance-connect-and-explore-agents/` }
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
      "@id": "https://www.testmuai.com/support/docs/agent-assurance-connect-and-explore-agents/"
    },
    "headline": "Connect and Explore AI Agents",
    "description": "Explore agents from a workspace, external checkout, PRD, or GitHub repository and manage multiple discovered agents in Agent Assurance.",
    "url": "https://www.testmuai.com/support/docs/agent-assurance-connect-and-explore-agents/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Agent Assurance Platform",
    "keywords": [
      "rook explore agent",
      "connect ai agent",
      "test agent github repository"
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

# Connect and Explore AI Agents

Exploration tells Rook what an agent is supposed to do before you tell it how to invoke the agent. Rook reads local material such as source code, prompts, skills, manifests, tool declarations, tests, README files, and product requirements.

The target can be a complete application, one agent directory, or a documentation-only workspace. Rook works with any agent framework.

## Explore the Current Workspace

Start Rook from the repository root and run:

<VerifiedTag value="Verified" />

```text
/explore .
```

The headless equivalent is:

<VerifiedTag value="Verified" />

```bash
rook explore .
```

Use a narrower path when a monorepo contains a specific agent package:

<VerifiedTag value="Verified" />

```text
/explore packages/travel-agent
```

Rook scans deterministically first, then gives its discovery subagent read tools scoped to the authorized workspace. The result depends on how many candidates it finds:

- **One candidate:** Rook asks whether to register it.
- **Several candidates:** Choose the candidates you want.

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

Discovery does not invent missing facts. If a tool's write behavior cannot be established, Rook records it as unknown rather than guessing from its name.

Before discovery, select the environment and project with <code>rook project</code>. For the [stage Web UI](/support/docs/rook-web-ui/), set <code>ROOK_ENV=stage</code> before authentication and project operations.

## Give Exploration Extra Context

Put free-form guidance after `--`:

<VerifiedTag value="Verified" />

```text
/explore . -- focus on the refund approval threshold and identity checks
```

In headless mode:

<VerifiedTag value="Verified" />

```bash
rook explore . \
  -- "focus on the refund approval threshold and identity checks"
```

The instruction guides the discovery model, but it does not widen the filesystem scope.

Use `--force` after a substantial change or when you want to ignore the incremental freshness check:

<VerifiedTag value="Verified" />

```text
/explore --force
```

Normally Rook hashes the relevant files and re-reads only what changed.

## Explore a PRD Without Source Code

Create a clean directory containing the material you are authorized to share:

<VerifiedTag value="Verified" />

```text
travel-agent-spec/
  PRD.md
  policies.md
  api-examples.md
  fixtures/
```

Start Rook inside that directory:

<VerifiedTag value="Verified" />

```bash
cd travel-agent-spec
rook
```

Then run:

<VerifiedTag value="Verified" />

```text
/explore . -- the deployed agent is a multi-turn travel planner
```

If no structural agent signal is found, Rook can ask whether to register the directory anyway. A documentation-only exploration generates requirement-grounded scenarios, but it has less evidence about implementation details, tool behavior, and side effects than a source-backed exploration.

You still need an invocation profile that reaches the deployed agent. See [Configure Rook Profiles](/support/docs/rook-profiles-and-hooks/#add-a-profile-interactively).

## Explore a GitHub Repository

Rook does not read a GitHub URL directly. Clone the repository, enter the checkout, and run Rook locally:

<VerifiedTag value="Verified" />

```bash
git clone https://github.com/<owner>/<repository>.git
cd <repository>
rook
```

Then:

<VerifiedTag value="Verified" />

```text
/explore .
```

If you paste a GitHub URL into `/explore`, Rook refuses it before spending credits and prints the corresponding clone workflow.

For a pull request, check out the exact head you want to test:

<VerifiedTag value="Verified" />

```bash
gh repo clone <owner>/<repository>
cd <repository>
gh pr checkout <number>
rook
```

This keeps the source state, scenario evidence, and tested revision reproducible.

:::warning
Never clone or check out untrusted code and then run its setup scripts without reviewing them first.
:::

## Explore an External Local Directory

You can explicitly point interactive Rook at a directory outside the current workspace:

<VerifiedTag value="Verified" />

```text
/explore ../another-agent
```

The path must be typed by a human. A model suggestion or stored record cannot grant a new external read scope.

:::note Current external-workspace limitation
Rook can read and report an external directory, but the current pre-alpha release does not persist an external agent record. To keep discovery state and generate scenarios, `cd` into that checkout and start Rook there.
:::

Rook also refuses two paths to keep read scope tight:

- **A parent directory that contains the current workspace:** This would mix evaluator files with target files.
- **A single external file:** Granting its entire parent directory would be broader than the path you selected.

## Manage Multiple Agents

The browser inventory shows all registered agents and their scenario and run history.

<img loading="lazy" src={require('../assets/images/rook/rook-browser-agents.png').default} alt="Rook agent inventory for a workspace containing multiple agents" width="1440" height="900" className="doc_img"/>

Interactive commands:

<VerifiedTag value="Verified" />

```text
/agent
/agent use <id>
```

Headless commands:

<VerifiedTag value="Verified" />

```bash
rook agent
rook agent
rook agent use <id>
```

The current command lists or selects agents; it does not provide an `rm` subcommand.

## Explore All Discovered Agents in Headless Mode

Select a project before discovery. For automation, supply focused guidance and explicit, reviewed permissions; the older `--all` flag is not available:

<VerifiedTag value="Verified" />

```bash
rook explore . --json -- "discover the agents in this reviewed workspace"
```

Use `--allow` only for a narrowly reviewed tool call:

<VerifiedTag value="Verified" />

```bash
rook explore . --allow 'bash(npm test)'
```

`--allow` is additive authorization. It does not create a sandbox, and it does not restrict any other already approved grant.

## Re-Explore After Changes

Run `/explore` again when prompts, tools, policies, skills, or agent source change. Rook compares the current files with the stored index and updates the existing record, so it keeps your scenario and run history.

After exploration, run `/generate` to refresh scenarios. Rook shows a plan and names the stale prerequisite before it spends credits.

## Review Discovered Agents Locally or Online

Run `rook ui --local` to see the current workspace's **agents** list. Open an agent and scroll through its findings, features, profiles, scenarios, and runs. This does not require publishing the discovery result.

For team review, sync the reviewed definitions and run `rook ui`. In the hosted Web UI, open project → agent → **Summary**, **Versions**, or **Features**. Those screens show uploaded records, not your latest unsynchronized exploration. Neither UI performs discovery or edits the definition. See [local agents](/support/docs/rook-web-ui/#local-agent) and [hosted agent configuration](/support/docs/rook-web-ui/#agent-configuration) in the same walkthrough.
