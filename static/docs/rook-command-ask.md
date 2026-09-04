# rook ask Command

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Use rook ask for one natural-language orchestrator turn without opening the TUI. Inside the TUI, prose entered without a leading slash follows the same classify-and-dispatch path.

## Syntax

~~~bash
rook ask
rook ask  --verbose
rook ask  --json
~~~

| Option | Purpose |
|---|---|
| --verbose | Show subagent activity, tool activity, and credits while the request runs. |
| --json | Emit machine-readable events. |

The orchestrator can answer questions from Rook workspace state or dispatch an existing command. Requests that spend credits, invoke a target, or need permission still pass through the same gates as the explicit command.

~~~bash
rook ask "Which agent is active and is its tree synchronized?"
rook ask "Run only the boundary scenarios with the staging profile"
rook ask "Explain the latest failures" --verbose
~~~

For deterministic automation, prefer the explicit command and flags. Natural language is useful for attended work and one-off requests, but it is not a stable machine interface.

## Related Commands

[Command reference](/support/docs/agent-assurance-command-reference/) · [/status](/support/docs/rook-command-status/) · [/help](/support/docs/rook-command-help/)
