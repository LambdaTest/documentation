# rook Command

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Use rook to start the interactive terminal in the workspace whose agent material and testing state you want to use.

## Syntax

~~~bash
rook
rook --no-animation
rook --version
rook --help
~~~

The TUI keeps the active project, agent, profile, credits, command duration, progress, and permission questions visible. Use --no-animation for recordings, slow terminals, or a static startup.

## First Start

1. Change to the workspace containing your checked-out agent, PRD, or test specification.
2. Run rook.
3. Use /login if the session is not authenticated.
4. Choose a project with /project.
5. Enter /guide for the workflow or /help for every command.

Run Rook from the intended workspace. The current directory selects the local .testmuai/rook/ store; project content is kept below projects/&lt;project-id&gt;/. The workspace is also the base for relative source, command, certificate, and evidence paths.

## Related Commands

[/guide](/support/docs/rook-command-guide/) · [/help](/support/docs/rook-command-help/) · [/project](/support/docs/rook-command-project/) · [/exit](/support/docs/rook-command-exit/)
