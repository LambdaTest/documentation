# /clear Control

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Enter /clear in the TUI to clear retained command-output state and return to the prompt.

~~~text
/clear
~~~

This does not delete projects, agents, scenarios, profiles, runs, evidence, credentials, variables, permissions, or authentication. The startup context remains because it belongs to the current TUI session. Output already committed to terminal scrollback can remain visible until the terminal itself is cleared or Rook is restarted.

There is no rook clear shell command.

## Related Controls

[/help](/support/docs/rook-command-help/) · [/exit](/support/docs/rook-command-exit/)
