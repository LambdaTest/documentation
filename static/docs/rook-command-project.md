# /project Command

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Use /project to choose the TestMu AI project that owns discovered agents, versions, and runs in the current workspace.

## Syntax

~~~text
/project
/project use
/project create
~~~

From a shell:

~~~bash
rook project
rook project use
rook project create
~~~

## Behavior

| Command | Effect |
|---|---|
| /project | Open a TUI picker. In a shell, print available projects and mark the active one. |
| /project use &lt;id&gt; | Validate the project against TestMu AI and save it as the active project for this workspace. |
| /project create &lt;name&gt; | Create a project and select it immediately. |

The active-project pointer is stored locally, alongside a separate working tree for each selected project. TestMu AI remains the authority for the projects the account can access.

## Why Selection Comes First

Rook scopes the local agent tree below the project ID. Switching projects changes which active agent, features, scenarios, profiles, and runs Rook sees; switching back restores that project's previous active agent.

If access to the active project is revoked, Rook asks you to choose another project. Signing in again does not repair a project-level permission failure.

## Related Commands

[/status](/support/docs/rook-command-status/) · [/explore](/support/docs/rook-command-explore/) · [/sync](/support/docs/rook-command-sync/)
