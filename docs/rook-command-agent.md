---
id: rook-command-agent
title: Rook /agent Command
sidebar_label: /agent
description: List or select autonomous agents discovered in the active Rook project.
slug: rook-command-agent/
---

# <code>/agent</code> Command

Use <code>/agent</code> when the selected project contains several discovered agents or when you need to confirm which agent later phases use.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-agent.png').default} alt="Current Rook agent command help showing the use subcommand" className="doc_img"/>

## Syntax

~~~text
/agent
/agent use <id>
~~~

From a shell:

~~~bash
rook agent
rook agent use <id>
~~~

Bare <code>/agent</code> opens a picker and marks the active agent. Bare <code>rook agent</code> prints the same inventory. There is no separate <code>list</code> subcommand.

Selecting an agent changes the active-agent pointer inside the selected project; it does not invoke the live target. The active agent determines which specification, features, scenarios, profiles, runs, reports, and sync state later commands use.

Agent removal is intentionally not a command. Rook's project data is stored as readable files; remove or edit it through the reviewed repository workflow when that is genuinely required.

## Example

~~~text
/agent
/agent use refund-agent
/generate --total 12 -- focus on eligibility and duplicate refunds
~~~

## Related Commands

[<code>/project</code>](/support/docs/rook-command-project/) · [<code>/explore</code>](/support/docs/rook-command-explore/) · [<code>/generate</code>](/support/docs/rook-command-generate/)
