---
id: rook-command-env
title: Rook /env Command
sidebar_label: /env
description: Store and manage secret values referenced by Rook invocation profiles.
slug: rook-command-env/
---

# <code>/env</code> Command

Use <code>/env</code> to manage tokens, endpoint values, and other variables referenced by profiles without writing literal secrets into project files.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-env.png').default} alt="Rook environment command help with list set show and remove" className="doc_img"/>

## Syntax

~~~text
/env
/env list
/env set <json>
/env show <key>
/env rm <key>
~~~

The same commands work from a shell by replacing the leading slash with <code>rook</code>, for example <code>rook env list</code> and <code>rook env set '&#123;"API_KEY":"…"&#125;'</code>.

## Subcommands

| Command | Effect |
|---|---|
| <code>/env list</code> | List variable names and masked values. |
| <code>/env set &#123;"KEY":"value"&#125;</code> | Set one or several string values from one JSON object. Names are normalized to uppercase. |
| <code>/env show KEY</code> | Print the complete value into terminal scrollback. |
| <code>/env rm KEY</code> | Remove the stored value. |

## Recommended secret flow

~~~text
/env set {"REFUND_API_TOKEN":"paste-value-here","AGENT_BASE_URL":"https://staging.example.com"}
/env list
/profile add staging
~~~

The generated hook script reads <code>process.env.REFUND_API_TOKEN</code>, and the profile records only the variable name and its purpose.

The current command requires the value as an argument. For sensitive values, prefer an attended TUI session and clear the terminal afterward; a shell command can remain in shell history. Avoid <code>/env show</code> unless full disclosure into scrollback is intentional.

## Storage and scope

Variables are stored with restrictive permissions in one file below the global Rook home. They are not written into the workspace's <code>.testmuai/rook/</code> profile files.

Each value is scoped to the current workspace's absolute path. Another workspace using the same Rook home does not inherit it. A variable exported by the shell shadows a different stored value with the same name.

When <code>/profile add</code> finds a credential in supplied material, the generated script must read it from an environment variable. Use the exact name shown by the authoring flow.

## Common problems

- Missing-variable profile error: set the exact case-sensitive key.
- Wrong endpoint or account: remove and reset the value, then rerun <code>/profile test</code>.
- Secret shown in a screenshot: rotate it immediately; masking in <code>/env list</code> does not undo earlier disclosure.

## Related commands

[<code>/profile</code>](/support/docs/rook-command-profile/) · [Prompt-based profiles](/support/docs/agent-assurance-profiles/) · [Lifecycle phases and hooks](/support/docs/rook-hooks-and-phases/)
