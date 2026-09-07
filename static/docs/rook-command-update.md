# /update Command

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Use /update to check for a newer public Rook release and show the appropriate upgrade command for a Homebrew, npm, or shell installation.

## Syntax

~~~text
/update
/update auto
/update --json
~~~

The shell form is rook update with the same argument and option.

Public releases use semantic versions such as 0.1.1. Shell installations keep versioned release directories side by side and record the binary directory so an update continues to use the same location.

If you previously chose “never ask again” in the TUI update notice, run /update auto to re-enable automatic notices.

## Related Commands

[Installation](/support/docs/rook-installation/) · [/docs](/support/docs/rook-command-docs/) · [/doctor](/support/docs/rook-command-doctor/)
