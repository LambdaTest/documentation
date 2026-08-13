---
id: rook-command-agent
title: Rook /agent Command
sidebar_label: /agent
description: List, select, or remove autonomous agents discovered in the current Rook workspace.
slug: rook-command-agent/
---

# <code>/agent</code> Command

Use <code>/agent</code> when a workspace contains multiple discovered agents or when you need to confirm which agent receives generated scenarios and test runs.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-agent.png').default} alt="Rook agent command help showing use and remove subcommands" width="1556" height="1466" className="doc_img"/>

## Interactive syntax

~~~text
/agent
/agent use <id>
/agent rm <id>
~~~

## Headless syntax

~~~bash
rook agent list [--json]
rook agent use <id>
~~~

Headless mode does not provide the remove operation.

## Subcommands

| Command | Effect |
|---|---|
| <code>/agent</code> | List agents and show the active one. |
| <code>/agent use &lt;id&gt;</code> | Make an agent active. |
| <code>/agent rm &lt;id&gt;</code> | Forget the agent and Rook project data stored under it. |

## Real-world example

A service repository contains a router, refund worker, and escalation worker:

~~~text
/agent
/agent use refund-agent
/generate --total 12 -- focus on eligibility and duplicate refund prevention
~~~

The active agent controls which feature record, scenarios, profiles, and reports subsequent commands use unless a headless <code>--entity</code> option selects another.

## Safety and stored state

Selecting an agent changes the active project pointer; it does not invoke the live agent.

Removing an agent is materially different: it removes Rook's stored records for that agent, including associated test data. It does not delete the agent's source code or remote service, but review the ID carefully before confirming.

## Common problems

- <strong>No agents listed:</strong> run <code>/explore</code> on a PRD, docs folder, or source workspace.
- <strong>Wrong agent selected:</strong> run <code>/agent</code>, copy the exact ID, then use it.
- <strong>A subagent is not independently invokable:</strong> keep the router active and test the subagent behavior through that public boundary.

## Related commands

[<code>/explore</code>](/support/docs/rook-command-explore/) · [<code>/generate</code>](/support/docs/rook-command-generate/) · [<code>/profile</code>](/support/docs/rook-command-profile/)
