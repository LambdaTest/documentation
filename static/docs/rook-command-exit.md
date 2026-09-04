# /exit Control

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Enter /exit or /quit at an idle TUI prompt to close Rook.

~~~text
/exit
/quit
~~~

Rook waits for pending job-end records to settle and stops any local evidence viewer owned by the session. Exiting does not log out or delete project files.

While a command is running, press Esc to request an orderly interruption. Completed scenario evidence is preserved. Pressing Ctrl+C exits the TUI and also runs the exit bookkeeping path.

There is no rook exit shell command.

## Related Commands

[/run](/support/docs/rook-command-run/) · [/runs](/support/docs/rook-command-runs/) · [/logout](/support/docs/rook-command-logout/)
