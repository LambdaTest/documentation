---
id: rook-web-agents
title: Rook Web UI — Agents
sidebar_label: Agents
description: Read a Rook project's agent inventory, readiness labels, tool counts, and recent-run information.
slug: rook-web-agents/
canonical: https://www.testmuai.com/support/docs/rook-web-agents/
---

# Agents

Open **Projects → your project** to see its agent inventory. Use this page to choose the agent you want to review and identify missing setup before attempting a run.

<img loading="lazy" src={require('../assets/images/rook/rook-web-agents.png').default} alt="Rook Agents table showing support-triage-agent version 1, five tools including three writes, five features, two scenarios, and its last run" className="doc_img"/>

## Read the Inventory

| Column | What it tells you |
|---|---|
| **Agent** | Local agent ID, recorded version, description, and readiness or run-count labels. Click the ID to open Summary. |
| **Tools** | Discovered tool count and how many can write. A write count describes capability, not operations performed by the last run. |
| **Features** | Discovered behaviors. This is not a count of tested behaviors. |
| **Scenarios** | Generated scenario definitions, including ones that have not run. |
| **Pass rate** | Recent aggregate result context; verify the underlying run before making a release decision. |
| **Last run** | Most recent recorded execution, or a readiness state such as **never run** or **discovered only**. |

The example has five features and two scenarios, but only one run. Open **support-triage-agent** to see the agent's six tabs. Its Summary heading uses the display name **triage-service**; the table and breadcrumb use the local ID. Those labels refer to the same agent.

## Resolve Missing Setup

A **no-profile** label means Rook has no synchronized invocation profile for the agent. [Create and test a profile](/support/docs/agent-assurance-profiles/), then sync. A **no-scenarios** label means you need to [generate and review scenarios](/support/docs/agent-assurance-scenarios/) before running them. A discovered subagent is not automatically an independently runnable target.

If the agent is missing entirely, confirm the selected CLI project and agent with <code>rook status</code>, then synchronize. This page does not discover agents from source code or edit their configuration. See [Connect and Explore Agents](/support/docs/agent-assurance-connect-and-explore-agents/).

:::caution Stage percentage discrepancy
On September 11, 2026, this table displayed **1%** for the sample's **1 of 1 passed** run. The screenshot preserves the observed UI. Use the [run's actual counts](/support/docs/rook-web-run-details/) and criterion evidence, not this percentage alone.
:::

## Next Step

Open [Agent Summary](/support/docs/rook-web-agent-summary/) to check source context, profiles, and hooks, or go to [Runs](/support/docs/rook-web-runs/) to investigate a known execution.
