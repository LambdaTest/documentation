---
id: rook-command-env
title: Rook /env Command
sidebar_label: /env
description: Store and manage secret values referenced by Rook invocation profiles.
slug: rook-command-env/
---

# <code>/env</code> Command

Use <code>/env</code> to manage tokens, endpoint values, and other variables referenced by profiles without writing literal secrets into project files.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-env.png').default} alt="Rook environment command help with list set show and remove" width="1556" height="1466" className="doc_img"/>

## Syntax

~~~text
/env
/env list
/env set <key> [value]
/env show <key>
/env rm <key>
~~~

There is no top-level headless <code>rook env</code> command in the current release.

## Subcommands

| Command | Effect |
|---|---|
| <code>/env list</code> | List variable names and masked values. |
| <code>/env set KEY</code> | Prompt securely for a value. |
| <code>/env set KEY value</code> | Set a value typed in the command line. |
| <code>/env show KEY</code> | Print the complete value into terminal scrollback. |
| <code>/env rm KEY</code> | Remove the stored value. |

## Recommended secret flow

~~~text
/env set ROOK_AGENT_TOKEN
/env list
/profile add
~~~

Reference the variable in the profile request instead of embedding the credential.

Avoid <code>/env set KEY value</code> for sensitive values because the value becomes visible while typing and may remain in terminal history. Avoid <code>/env show</code> unless full disclosure into scrollback is intentional.

## Storage and scope

Variables are stored with restrictive permissions in one file below the global Rook home. They are not written into the workspace's <code>.testmuai/rook/</code> profile files.

Each value is scoped to the current workspace's absolute path. Another workspace using the same Rook home does not inherit it. A variable exported by the shell shadows a different stored value with the same name.

When <code>/profile add</code> lifts an Authorization header out of a pasted cURL request, it normally generates <code>ROOK_AGENT_TOKEN</code> and asks for the value. Use the exact name shown by the setup flow.

## Common problems

- Missing-variable profile error: set the exact case-sensitive key.
- Wrong endpoint or account: remove and reset the value, then rerun <code>/profile test</code>.
- Secret shown in a screenshot: rotate it immediately; masking in <code>/env list</code> does not undo earlier disclosure.

## Related commands

[<code>/profile</code>](/support/docs/rook-command-profile/) · [Invocation profiles](/support/docs/rook-profiles/)
