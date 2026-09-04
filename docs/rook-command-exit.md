---
id: rook-command-exit
title: Rook /exit Control
sidebar_label: /exit
description: Close the current Rook TUI after in-flight local bookkeeping is settled.
slug: rook-command-exit/
---

# <code>/exit</code> Control

Enter <code>/exit</code> or <code>/quit</code> at an idle TUI prompt to close Rook.

~~~text
/exit
/quit
~~~

Rook waits for pending job-end records to settle and stops any local evidence viewer owned by the session. Exiting does not log out or delete project files.

While a command is running, press <code>Esc</code> to request an orderly interruption. Completed scenario evidence is preserved. Pressing <code>Ctrl+C</code> exits the TUI and also runs the exit bookkeeping path.

There is no <code>rook exit</code> shell command.

## Related Commands

[<code>/run</code>](/support/docs/rook-command-run/) · [<code>/runs</code>](/support/docs/rook-command-runs/) · [<code>/logout</code>](/support/docs/rook-command-logout/)
