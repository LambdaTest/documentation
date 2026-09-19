---
id: rook-command-project
title: Rook /project Command
sidebar_label: /project
description: List, select, or create the TestMu AI project that owns the current Rook workspace.
slug: rook-command-project/
---

# <code>/project</code> Command

Use <code>/project</code> to choose the TestMu AI project that owns discovered agents, versions, and runs in the current workspace.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-project.png').default} alt="Rook project command help showing use and create subcommands" className="doc_img"/>

## Syntax

~~~text
/project
/project use <id>
/project create <name>
~~~

From a shell:

~~~bash
rook project
rook project use <id>
rook project create <name>
~~~

## Behavior

| Command | Effect |
|---|---|
| <code>/project</code> | Open a TUI picker. In a shell, print available projects and mark the active one. |
| <code>/project use &lt;id&gt;</code> | Validate the project against TestMu AI and save it as the active project for this workspace. |
| <code>/project create &lt;name&gt;</code> | Create a project and select it immediately. |

The active-project pointer is stored locally, alongside a separate working tree for each selected project. TestMu AI remains the authority for the projects the account can access.

## Why Selection Comes First

Rook scopes the local agent tree below the project ID. Switching projects changes which active agent, features, scenarios, profiles, and runs Rook sees; switching back restores that project's previous active agent.

If access to the active project is revoked, Rook asks you to choose another project. Signing in again does not repair a project-level permission failure.

## Related Commands

[<code>/status</code>](/support/docs/rook-command-status/) · [<code>/explore</code>](/support/docs/rook-command-explore/) · [<code>/sync</code>](/support/docs/rook-command-sync/)
