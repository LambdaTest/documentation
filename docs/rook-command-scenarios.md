---
id: rook-command-scenarios
title: Rook /scenarios Command
sidebar_label: /scenarios
description: List scenario runnability or include, exclude, and permanently delete scenarios for the active agent.
slug: rook-command-scenarios/
---

# <code>/scenarios</code> Command

Use <code>/scenarios</code> to inspect the active agent's suite and curate what runs by default.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-scenarios.png').default} alt="Current Rook scenarios command help showing list, exclude, include, and delete" className="doc_img"/>

## Syntax

~~~text
/scenarios
/scenarios list [--json]
/scenarios exclude <ids...> [--json]
/scenarios include <ids...> [--json]
/scenarios delete <ids...> [--json]
~~~

The shell form uses <code>rook scenarios</code>. <code>list</code> is the default subcommand, so <code>/scenarios</code> and <code>/scenarios list</code> are equivalent.

| Subcommand | Effect |
|---|---|
| <code>list</code> | Show what would run, stale or blocked scenarios, and reasons a profile cannot execute a scenario. |
| <code>exclude</code> | Keep scenarios on disk and in history, but omit them from default runs. |
| <code>include</code> | Return excluded scenarios to the default run set. |
| <code>delete</code> | Permanently remove the named local scenario files. |

Use explicit IDs. Unknown IDs are reported so a typo cannot look like a successful exclusion.

## Related Commands

[Scenario guide](/support/docs/agent-assurance-scenarios/) · [<code>/generate</code>](/support/docs/rook-command-generate/) · [<code>/run</code>](/support/docs/rook-command-run/)
