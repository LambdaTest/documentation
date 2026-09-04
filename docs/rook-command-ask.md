---
id: rook-command-ask
title: rook ask Command
sidebar_label: rook ask
description: Give Rook a natural-language request and let its orchestrator answer from state or dispatch a command.
slug: rook-command-ask/
---

# <code>rook ask</code> Command

Use <code>rook ask</code> for one natural-language orchestrator turn without opening the TUI. Inside the TUI, prose entered without a leading slash follows the same classify-and-dispatch path.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-ask.png').default} alt="Current Rook ask command help showing JSON and verbose options" className="doc_img"/>

## Syntax

~~~bash
rook ask <prompt...>
rook ask <prompt...> --verbose
rook ask <prompt...> --json
~~~

| Option | Purpose |
|---|---|
| <code>--verbose</code> | Show subagent activity, tool activity, and credits while the request runs. |
| <code>--json</code> | Emit machine-readable events. |

The orchestrator can answer questions from Rook workspace state or dispatch an existing command. Requests that spend credits, invoke a target, or need permission still pass through the same gates as the explicit command.

~~~bash
rook ask "Which agent is active and is its tree synchronized?"
rook ask "Run only the boundary scenarios with the staging profile"
rook ask "Explain the latest failures" --verbose
~~~

For deterministic automation, prefer the explicit command and flags. Natural language is useful for attended work and one-off requests, but it is not a stable machine interface.

## Related Commands

[Command reference](/support/docs/agent-assurance-command-reference/) · [<code>/status</code>](/support/docs/rook-command-status/) · [<code>/help</code>](/support/docs/rook-command-help/)
