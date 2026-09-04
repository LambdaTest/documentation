# /scenarios Command

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Use /scenarios to inspect the active agent's suite and curate what runs by default.

## Syntax

~~~text
/scenarios
/scenarios list [--json]
/scenarios exclude  [--json]
/scenarios include  [--json]
/scenarios delete  [--json]
~~~

The shell form uses rook scenarios. list is the default subcommand, so /scenarios and /scenarios list are equivalent.

| Subcommand | Effect |
|---|---|
| list | Show what would run, stale or blocked scenarios, and reasons a profile cannot execute a scenario. |
| exclude | Keep scenarios on disk and in history, but omit them from default runs. |
| include | Return excluded scenarios to the default run set. |
| delete | Permanently remove the named local scenario files. |

Use explicit IDs. Unknown IDs are reported so a typo cannot look like a successful exclusion.

## Related Commands

[Scenario guide](/support/docs/agent-assurance-scenarios/) · [/generate](/support/docs/rook-command-generate/) · [/run](/support/docs/rook-command-run/)
