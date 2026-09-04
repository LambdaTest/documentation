---
id: rook-command-clear
title: Rook /clear Control
sidebar_label: /clear
description: Clear command output from the current Rook TUI without changing project or session state.
slug: rook-command-clear/
---

# <code>/clear</code> Control

Enter <code>/clear</code> in the TUI to clear retained command-output state and return to the prompt.

~~~text
/clear
~~~

This does not delete projects, agents, scenarios, profiles, runs, evidence, credentials, variables, permissions, or authentication. The startup context remains because it belongs to the current TUI session. Output already committed to terminal scrollback can remain visible until the terminal itself is cleared or Rook is restarted.

There is no <code>rook clear</code> shell command.

## Related Controls

[<code>/help</code>](/support/docs/rook-command-help/) · [<code>/exit</code>](/support/docs/rook-command-exit/)
