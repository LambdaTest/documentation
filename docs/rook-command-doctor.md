---
id: rook-command-doctor
title: Rook /doctor Command
sidebar_label: /doctor
description: Diagnose the Rook installation, environment, connection, authentication, workspace, and stored entities.
slug: rook-command-doctor/
---

# <code>/doctor</code> Command

Use <code>/doctor</code> as the first diagnostic when Rook cannot start, authenticate, discover an agent, or reach its controller.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-doctor.png').default} alt="Rook doctor command help" width="1556" height="1466" className="doc_img"/>

## Syntax

Interactive:

~~~text
/doctor
~~~

From a normal shell:

~~~bash
rook doctor
~~~

## What each form checks

| Check | <code>rook doctor</code> | Interactive <code>/doctor</code> |
|---|---|---|
| Rook and Node.js versions | Yes | Rook version only |
| Environment and controller URL | Yes | Yes |
| Controller reachability and providers | Yes | Yes |
| Authentication | Locally cached state; not a live token verification | Cached state, plus a live controller verification when signed in |
| Workspace and TTY | Both | Workspace |
| Registered project entities | No | Yes |

Neither form tests the endpoint in an agent invocation profile.

## Step-by-step troubleshooting

1. Run <code>rook doctor</code> outside the TUI if the TUI will not start.
2. Fix the first failing check.
3. Verify authentication with <code>rook whoami</code>.
4. Return to the intended workspace.
5. Start Rook and retry the original command.

## Real-world examples

After installation:

~~~bash
rook --version
rook doctor
rook whoami
~~~

When a remote agent is unreachable, also test the profile's exported request with <code>/profile curl</code>; doctor checks Rook's controller, not every target endpoint.

## Privacy

Doctor output can include workspace paths, hostnames, account state, and environment names. Review it before attaching the output to a public issue. It should not print stored secret values.

## Related commands

[Installation](/support/docs/rook-installation/) · [<code>/auth</code>](/support/docs/rook-command-auth/) · [<code>/profile</code>](/support/docs/rook-command-profile/) · [Troubleshooting](/support/docs/rook-troubleshooting/)
