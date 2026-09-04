# /env Command

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Use /env to manage tokens, endpoint values, and other variables referenced by profiles without writing literal secrets into project files.

## Syntax

~~~text
/env
/env list
/env set
/env show
/env rm
~~~

The same commands work from a shell by replacing the leading slash with rook, for example rook env list and rook env set '&#123;"API_KEY":"…"&#125;'.

## Subcommands

| Command | Effect |
|---|---|
| /env list | List variable names and masked values. |
| /env set &#123;"KEY":"value"&#125; | Set one or several string values from one JSON object. Names are normalized to uppercase. |
| /env show KEY | Print the complete value into terminal scrollback. |
| /env rm KEY | Remove the stored value. |

## Recommended secret flow

~~~text
/env set {"REFUND_API_TOKEN":"paste-value-here","AGENT_BASE_URL":"https://staging.example.com"}
/env list
/profile add staging
~~~

The generated hook script reads process.env.REFUND_API_TOKEN, and the profile records only the variable name and its purpose.

The current command requires the value as an argument. For sensitive values, prefer an attended TUI session and clear the terminal afterward; a shell command can remain in shell history. Avoid /env show unless full disclosure into scrollback is intentional.

## Storage and scope

Variables are stored with restrictive permissions in one file below the global Rook home. They are not written into the workspace's .testmuai/rook/ profile files.

Each value is scoped to the current workspace's absolute path. Another workspace using the same Rook home does not inherit it. A variable exported by the shell shadows a different stored value with the same name.

When /profile add finds a credential in supplied material, the generated script must read it from an environment variable. Use the exact name shown by the authoring flow.

## Common problems

- Missing-variable profile error: set the exact case-sensitive key.
- Wrong endpoint or account: remove and reset the value, then rerun /profile test.
- Secret shown in a screenshot: rotate it immediately; masking in /env list does not undo earlier disclosure.

## Related commands

[/profile](/support/docs/rook-command-profile/) · [Prompt-based profiles](/support/docs/agent-assurance-profiles/) · [Lifecycle phases and hooks](/support/docs/rook-hooks-and-phases/)
