---
id: rook-command-exit
title: Rook /exit Command
sidebar_label: /exit
description: Stop the current Rook interactive session and its local viewer cleanly.
slug: rook-command-exit/
---

# <code>/exit</code> Command

Use <code>/exit</code> to leave the interactive terminal cleanly.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-exit.png').default} alt="Rook exit command help" width="1556" height="1466" className="doc_img"/>

## Syntax

~~~text
/exit
~~~

There is no headless <code>rook exit</code> command because headless commands exit after completing their work.

## What happens

- Rook requests a graceful stop for an active run.
- An in-flight HTTP request is cancelled or an in-flight command receives <code>SIGTERM</code>.
- Completed scenario results remain on disk.
- Rook waits briefly for the run manifest and history to be finalized before forcing process exit.
- A local browser viewer started by this Rook session is stopped.
- The terminal application exits.

## Real-world shutdown

After reviewing a run:

~~~text
/exit
~~~

Then stop your own local agent service separately if you started one. Rook does not own or automatically terminate the agent under test.

## If the session does not exit

Rook waits for up to a short grace period while the active command unwinds. A target action may have happened before cancellation even if its response was never recorded; inspect target state before retrying a write.

Exiting does not log out and does not delete project state. Use <code>/logout</code> only when you also intend to clear credentials.

## Related commands

[<code>/run</code>](/support/docs/rook-command-run/) · [<code>/ui</code>](/support/docs/rook-command-ui/) · [<code>/logout</code>](/support/docs/rook-command-logout/)
