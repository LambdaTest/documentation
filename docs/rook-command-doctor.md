---
id: rook-command-doctor
title: Rook /doctor Command
sidebar_label: /doctor
description: Diagnose the Rook installation, environment, connection, authentication, workspace, and stored entities.
slug: rook-command-doctor/
---

# <code>/doctor</code> Command

Use <code>/doctor</code> as the first diagnostic when Rook cannot start, authenticate, or find the expected workspace. Headless <code>rook doctor</code> prints the configured controller and API endpoints without probing them. Interactive <code>/doctor</code> can contact the controller while resolving a signed-in session, but it is not a general connectivity test.

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
| Rook version | Exact installed version | First row shows <code>rook v&lt;version-label&gt;</code> |
| Active Node.js runtime version | Yes | No |
| Environment, controller URL, and API URL | Yes | Yes |
| Controller DNS or HTTP reachability | No | Conditional: signed-in authentication resolution can contact the controller |
| Authentication | Cached, signed-out, or local-development state | Current session state |
| Workspace and TTY | Both | Workspace storage directory only |
| Registered project entities | No | Yes |

Neither form tests the endpoint in an agent invocation profile. A signed-out interactive session also provides no controller-reachability result.

## Step-by-step troubleshooting

1. Run <code>rook doctor</code> outside the TUI if the TUI will not start.
2. Confirm the version, environment, endpoint URLs, workspace, and TTY are the ones you intended.
3. Resolve the printed controller hostname with your normal DNS tools, or retry the controller-backed command and read its specific error.
4. Verify authentication with <code>rook whoami</code> after the controller is reachable.
5. Return to the intended workspace, start Rook, and retry the original command.

## Real-world examples

After installation:

~~~bash
rook --version
rook doctor
rook whoami
~~~

When a remote agent is unreachable, also test the profile's exported request with <code>/profile curl</code>; doctor shows Rook's configured service URLs, not the health of every target endpoint.

As verified on August 17, 2026, public Rook 0.1.0 <code>rook doctor</code> can exit successfully while the configured production controller hostname is not resolvable. Treat the printed endpoint as configuration, not a green health check.

## Privacy

Doctor output can include workspace paths, hostnames, account state, and environment names. Review it before attaching the output to a public issue. It should not print stored secret values.

## Related commands

[Installation](/support/docs/rook-installation/) · [<code>/auth</code>](/support/docs/rook-command-auth/) · [<code>/profile</code>](/support/docs/rook-command-profile/) · [Troubleshooting](/support/docs/rook-troubleshooting/)
