---
id: rook-overview
title: Autonomous Agent Testing with Rook
hide_title: false
sidebar_label: What is Rook
description: Learn how the Rook CLI autonomously discovers, tests, and evaluates AI agents with evidence-backed verdicts.
keywords:
  - rook cli
  - autonomous agent testing
  - ai agent testing cli
  - test ai agents
url: https://www.testmuai.com/support/docs/rook-overview/
site_name: TestMu AI
slug: rook-overview/
canonical: https://www.testmuai.com/support/docs/rook-overview/
---

# Autonomous Agent Testing with Rook

Rook is a terminal application that autonomously tests AI agents you own. Give it the materials that describe the agent, connect a live test target, and Rook can discover capabilities, generate scenarios, execute multi-step behavior, collect evidence, and judge the results.

You install only the Rook CLI. You do not need the Rook source repository, a Rook development environment, Docker, or your own model API key.

Rook 0.1.0 is publicly available through npm, a checksummed shell installer, and Homebrew, with full support for macOS and Linux on x64 and arm64. The npm package also publishes a Windows x64 runtime, subject to the startup limitation described in [Install the Rook CLI](/support/docs/rook-installation/). The shell and Homebrew packages carry a matching Node.js runtime; npm installation requires Node.js 20 or newer.

:::warning Pre-alpha
Commands and stored file formats can change. Test against a disposable or staging target and review the target and write warning before every run.
:::

:::warning Public 0.1.0 controller availability
As verified on August 17, 2026, the production controller hostname configured in public version 0.1.0 is not resolvable. You can install Rook, inspect commands, run local diagnostics, and open the read-only viewer, but the model-backed testing sequence requires the production service to be available. Confirm connectivity before planning an end-to-end evaluation.
:::

<img loading="lazy" src={require('../assets/images/rook/rook-terminal-home.png').default} alt="Rook terminal home showing the autonomous agent testing workflow" width="1111" height="911" className="doc_img"/>

## Conversation Testing and Autonomous Testing

Both forms of agent testing are available under the Agent Testing Platform, but they solve different problems.

| Choose | When it fits |
|---|---|
| **Conversation-based agent testing** | You want to test chat, voice, or phone conversations through configured turns, intents, assertions, and conversation quality. |
| **Autonomous agent testing with Rook** | Your agent plans, calls tools, changes external state, creates files, asks for missing information, delegates to subagents, or returns mixed outputs that require evidence beyond the final message. |

For example, a refund assistant may ask for an order ID, verify eligibility, issue a refund through a tool, and return both an explanation and a PDF receipt. Rook tests the whole behavior it can observe, not only whether the final sentence sounds correct.

## What You Can Give Rook

Rook works with different levels of access:

| What you have | How to begin | What it contributes |
|---|---|---|
| A PRD only | Run <code>/explore path/to/PRD.md</code> | Intended behavior, rules, constraints, examples, and open questions |
| PRD plus knowledge-base files | Run <code>/explore docs -- focus on the PRD and knowledge base</code> | Intended answers, policies, domain facts, and boundaries |
| Agent source code | Run <code>/explore .</code> in your checked-out repository | Prompts, tools, subagents, feature paths, and implementation evidence |
| A live remote API but no source | Explore a local PRD or specification, then add an HTTP profile | Black-box execution of the live target |
| A local agent CLI | Add a command profile | stdout, stderr, exit status, files, and resumable sessions when configured |

Rook does not natively explore a GitHub URL. If you want source-aware testing, check out your own repository locally and run Rook inside it. You never need to clone the Rook repository.

Documentation is specification evidence, not proof of implementation. A PRD can tell Rook what should happen; a live invocation profile is still required to test what actually happens.

## The End-to-End Journey

1. <code>/explore</code> reads the selected local material and identifies one or more agents.
2. <code>/agent</code> lets you confirm or switch the active agent.
3. <code>/generate</code> creates functional, non-functional, and adversarial scenarios.
4. <code>/profile add</code> records a fixed HTTP or command invocation.
5. <code>/scenarios list</code> shows which scenarios are runnable with that profile.
6. <code>/run</code> invokes the live target and judges observable criteria.
7. <code>/ui</code> opens the local evidence viewer.

Rook stores project results as plain files below:

~~~text
<your-workspace>/.testmuai/rook/
~~~

Credentials, variables, and session settings are stored separately below <code>~/.testmuai/rook/</code>. Stored variables are partitioned by the workspace's absolute path.

## Evidence and Verdicts

Rook can use the raw response, extracted JSON or text, command output, exit status, observed file changes, downloadable artifacts, and read-only MCP verification. The available evidence depends on the profile you configure.

| Verdict | Meaning |
|---|---|
| **Pass** | Every criterion Rook could verify passed. |
| **Fail** | At least one criterion was observed to fail. |
| **Unable to Verify** | The available profile and evidence could not establish the result. It is not counted as a failure. |

Always read coverage together with pass rate. A run with a high pass rate and low verification coverage is not strong release evidence.

## Supported Outputs and Current Limits

Rook can collect text, JSON, local files, and downloadable links. This supports agents that produce PDFs, images, CSV files, Markdown, reports, or archives.

Current pre-alpha limits include:

- Text and URL inputs can be passed in the scenario goal. Native file, image, and pull-request attachment delivery is not yet implemented.
- Rook can record image dimensions and file evidence, but it cannot judge image pixels. Visual correctness may be **Unable to Verify**.
- HTTP JSON and text responses are executable. SSE, NDJSON, and WebSocket transports can be recorded but are not executed.
- Direct MCP profiles are not executable by <code>/profile test</code> or <code>/run</code>. Use an HTTP or command adapter for the target agent.

## Safety

:::warning Target actions are real
Rook does not sandbox or roll back the agent under test. Refunds, emails, tickets, database updates, and filesystem writes happen in the target environment.
:::

Use staging endpoints, disposable fixtures, and <code>--concurrency 1</code> for the first run. Start with one harmless scenario and approve only the exact target you intended.

## Next Steps

- [Install the Rook CLI](/support/docs/rook-installation/)
- [Test your first agent](/support/docs/rook-quickstart/)
- [Choose a real-world setup](/support/docs/rook-use-cases/)
- [Browse every command](/support/docs/rook-command-reference/)
- [Review public releases and the changelog](https://github.com/LambdaTest/rook)
