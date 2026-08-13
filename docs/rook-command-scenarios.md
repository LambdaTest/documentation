---
id: rook-command-scenarios
title: Rook /scenarios Command
sidebar_label: /scenarios
description: List and curate generated Rook test scenarios before executing a live agent.
slug: rook-command-scenarios/
---

# <code>/scenarios</code> Command

Use <code>/scenarios</code> to review what Rook generated, see whether each scenario can run with the active profile, and control inclusion without immediately executing anything.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-scenarios.png').default} alt="Rook scenarios command help showing list exclude include and delete" width="1556" height="1466" className="doc_img"/>

## Interactive syntax

~~~text
/scenarios list
/scenarios exclude <ids>
/scenarios include <ids>
/scenarios delete <ids>
~~~

## Headless syntax

~~~bash
rook scenarios list [--entity <id>] [--json]
rook scenarios exclude <ids...> [--entity <id>]
rook scenarios include <ids...> [--entity <id>]
rook scenarios delete <ids...> [--entity <id>]
~~~

## Subcommands

| Subcommand | Use |
|---|---|
| <code>list</code> | Show every scenario and current runnability. |
| <code>exclude</code> | Keep a scenario on disk but omit it from normal runs. |
| <code>include</code> | Re-enable an excluded scenario. |
| <code>delete</code> | Permanently remove the live scenario definition. |

## Real-world review

~~~text
/scenarios list
/scenarios exclude SC-009
/scenarios include SC-012
~~~

Exclude <code>SC-009</code> when it would issue a real refund in the current environment. Keep it available for a later disposable fixture rather than deleting it.

## Read runnability correctly

A skipped or unrunnable scenario is not an agent failure. It means the active profile lacks a required capability, such as:

- Multi-turn conversation state.
- A supported response transport.
- Native file or image input.
- Observable tool calls.
- A safe way to verify an external write.

Changing profiles can change runnability. List scenarios again after <code>/profile use</code> or <code>/profile edit</code>.

## State and safety

List does not change state. Exclude and include update scenario metadata. Delete removes the active scenario definitions from disk, so prefer exclude when you may need the scenario later.

Scenario IDs are assigned during generation; do not assume a particular category will always be <code>SC-001</code>.

## Related commands

[<code>/generate</code>](/support/docs/rook-command-generate/) · [<code>/profile</code>](/support/docs/rook-command-profile/) · [<code>/run</code>](/support/docs/rook-command-run/)
