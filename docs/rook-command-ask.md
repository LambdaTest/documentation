---
id: rook-command-ask
title: rook ask Command
sidebar_label: rook ask
description: Send one prose-only orchestrator prompt to Rook without opening the interactive TUI.
slug: rook-command-ask/
---

# <code>rook ask</code> Command

Use <code>rook ask</code> for one prose-only orchestrator turn in a script or normal shell. The current headless form has no workspace tools and does not dispatch Rook commands.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-ask.png').default} alt="Rook ask command help with verbose and JSON options" width="1556" height="956" className="doc_img"/>

## Syntax

~~~bash
rook ask <prompt...>
rook ask <prompt...> --verbose
rook ask <prompt...> --json
~~~

| Option | Purpose |
|---|---|
| <code>--verbose</code> | Show tool activity and credit use. |
| <code>--json</code> | Emit newline-delimited machine-readable events instead of prose. |

## When to use it

- Ask for general testing guidance without starting the TUI.
- Turn a requirement into suggested risks or test ideas.
- Get a machine-readable model response for a prompt that does not depend on workspace state.

Use an explicit headless command to inspect or change stored state. For example, use <code>rook agent list</code>, <code>rook report</code>, or <code>rook run --only SC-001</code> rather than asking for those operations in prose.

## Real-world examples

~~~bash
rook ask "Suggest boundary cases for a refund policy with a 30-day cutoff."
rook ask "What evidence would independently prove that an agent created a ticket?"
rook ask "Explain risks in testing a booking agent against shared staging data." --json
~~~

## What happens

Rook performs one orchestrator loop from the supplied text, prints the response, and exits. It does not open the interactive prompt, read project files, inspect stored agents or runs, or execute a proposed slash command.

For a natural-language request that must read current workspace state or route to a command, start <code>rook</code> and enter the request in the TUI.

## Common problems

- <strong>The answer does not know the current project:</strong> this command has no workspace tools; use the TUI or an explicit headless command.
- <strong>The requested action did not run:</strong> <code>rook ask</code> prints a response only; invoke the named command yourself.
- <strong>Automation cannot parse output:</strong> add <code>--json</code> and process one JSON object per line.

## Related commands

[<code>rook</code>](/support/docs/rook-command-start/) · [<code>/agent</code>](/support/docs/rook-command-agent/) · [<code>/scenarios</code>](/support/docs/rook-command-scenarios/) · [<code>rook report</code>](/support/docs/rook-command-report/)
