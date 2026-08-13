---
id: rook-overview
title: Rook Agent Testing CLI Overview
hide_title: false
sidebar_label: What is Rook
description: Learn how Rook discovers, tests, and evaluates AI agents from the terminal with evidence-backed verdicts.
keywords:
  - rook cli
  - ai agent testing cli
  - agent assurance
  - test ai agents
url: https://www.testmuai.com/support/docs/rook-overview/
site_name: TestMu AI
slug: rook-overview/
canonical: https://www.testmuai.com/support/docs/rook-overview/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": BRAND_URL },
      { "@type": "ListItem", "position": 2, "name": "Support", "item": `${BRAND_URL}/support/docs/` },
      { "@type": "ListItem", "position": 3, "name": "Rook", "item": `${BRAND_URL}/support/docs/rook-overview/` }
    ]
  }) }}
/>

# Rook Agent Testing CLI Overview

Rook is a terminal application for testing AI agents that you own. Point it at an agent's workspace, describe how to invoke the live agent, and Rook will discover its capabilities, generate relevant scenarios, execute them, and produce evidence-backed verdicts.

Rook is useful when the agent's behavior is not a fixed request-and-response contract. An agent may ask follow-up questions, call tools, update a ticket, create a refund, write a PDF, or return a mixture of text and files. Rook records what it can observe and says **Unable to Verify** when the available evidence is insufficient.

> **Pre-alpha:** Command behavior and stored file formats can change. Use a test or staging target and review the permission prompt before every run.

<img loading="lazy" src={require('../assets/images/rook/rook-terminal-home.png').default} alt="Rook terminal home screen showing the agent testing workflow" width="1111" height="911" className="doc_img"/>

## What Rook Does

Rook follows six stages:

1. **Explore:** Read the codebase and identify agents, prompts, tools, skills, subagents, policies, and dependencies.
2. **Select:** Register the discovered agents and choose the active agent.
3. **Generate:** Create functional, non-functional, and adversarial scenarios from the discovered behavior.
4. **Profile:** Record a fixed, reviewable way to invoke the agent through HTTP or a local command. MCP profiles can be recorded and invoked once with `/profile test`, but full-suite execution does not support them yet.
5. **Run and judge:** Invoke the live agent, collect the response and observable effects, and evaluate every acceptance criterion.
6. **Review:** Show verdicts, evidence, gaps, trends, and optional root-cause analysis in the terminal and local browser view.

Rook stores project results as plain files under:

```text
<project>/.testmuai/rook/
```

It does not require a project database. Global credentials, settings, variables, and terminal sessions are stored separately under `~/.testmuai/rook/`.

## Supported Agent Shapes

Rook is framework-independent. It can discover an agent from conventional manifests or from ordinary code containing a prompt, tool registry, or model loop.

| Agent shape | Typical connection | Example |
|---|---|---|
| HTTP chat or workflow agent | HTTP profile created from a cURL request | Support, refund, travel, research, or customer-service agent |
| Local coding or automation agent | Command profile | `claude -p "{{goal}}"` or another local CLI |
| MCP tool agent | HTTP or command adapter for suite execution | Direct MCP profiles can be registered and tested once, but `/run` cannot drive them in the current pre-alpha release |
| Synchronous agent | One request returns the final answer | Classification or question-answering agent |
| Asynchronous agent | Initial request returns a job handle that Rook polls | Report, image, or document generation agent |
| Multi-turn agent | Session field or resume flag carries context | Refund flow that asks for an order ID and verification details |
| File-producing agent | File or link is collected as an artifact | PDF report, image, CSV, JSON, or text file |

Rook can record `sse`, `ndjson`, and `websocket` response types, but the current release cannot execute those streaming transports. Scenarios that require an unreadable response are skipped with a specific reason.

MCP servers remain useful for target discovery and independent, read-only verification. This is separate from using an MCP profile as the agent-under-test transport.

## Black-Box Execution and White-Box Evidence

Rook invokes the target from the outside, as a user would. Source access improves test generation and verification, but it does not replace the live invocation.

The guiding evidence rule is:

> The agent's own claim about what it did is weaker than an independently observed response, file change, or tool result.

Depending on the profile and scenario, Rook can use:

- The raw request and response.
- Extracted text or JSON.
- A command's stdout, stderr, and exit code.
- Files created inside explicitly observed paths.
- Artifact metadata, previews, and image dimensions.
- MCP tools that can read the target's state without changing it.
- Tool-call observations when the profile exposes them.

Rook never calls a state-changing verification tool merely to check whether an effect happened. If verifying a refund would require issuing another refund, the criterion is **Unable to Verify**.

## Verdicts and Coverage

Rook separates agent quality from harness visibility:

| Result | Meaning |
|---|---|
| **Pass** | All verifiable criteria passed and no verifiable criterion failed. |
| **Fail** | At least one criterion was observed to fail. |
| **Unable to Verify** | Rook could not establish the outcome from the available evidence. This is not counted as a failure. |

Two report numbers answer different questions:

- **Pass rate** tells you how the graded scenarios performed.
- **Coverage** tells you how much of the criteria Rook could actually verify.

A 100% pass rate with 40% coverage is weak assurance. Improve the profile's observation settings or add read-only MCP verification before treating it as a release signal.

## Safety Model

> **Target writes are real:** Rook does not virtualize or roll back the tested agent's actions. If the agent issues refunds, sends messages, creates tickets, modifies files, or calls production tools, those effects are real.

Use these safeguards:

- Point profiles at a test or staging environment.
- Seed disposable fixtures and provide a reset command where possible.
- Start with one harmless scenario and `--concurrency 1`.
- Read the target, scenario count, estimated credits, and write warning before confirming.
- Use exact permission grants. A grant applies to a tool and target, not to every future command.
- Never place literal secrets in a committed profile. Use `${VAR}` references and `/env set`.

## Choose Your Next Guide

- [Install Rook](/support/docs/rook-installation/)
- [Test your first agent](/support/docs/rook-quickstart/)
- [Connect and explore an agent](/support/docs/rook-connect-and-explore-agents/)
- [Create an invocation profile](/support/docs/rook-profiles/)
- [Understand results and evidence](/support/docs/rook-results-and-evidence/)
