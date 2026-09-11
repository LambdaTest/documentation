# Agents

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Open **Projects → your project** to see its agent inventory. Use this page to choose the agent you want to review and identify missing setup before attempting a run.

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

If the agent is missing entirely, confirm the selected CLI project and agent with rook status, then synchronize. This page does not discover agents from source code or edit their configuration. See [Connect and Explore Agents](/support/docs/agent-assurance-connect-and-explore-agents/).

**Stage percentage discrepancy**
On September 11, 2026, this table displayed **1%** for the sample's **1 of 1 passed** run. The screenshot preserves the observed UI. Use the [run's actual counts](/support/docs/rook-web-run-details/) and criterion evidence, not this percentage alone.

## Next Step

Open [Agent Summary](/support/docs/rook-web-agent-summary/) to check source context, profiles, and hooks, or go to [Runs](/support/docs/rook-web-runs/) to investigate a known execution.
