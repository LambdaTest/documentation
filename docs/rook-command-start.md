---
id: rook-command-start
title: rook Command
sidebar_label: rook
description: Start the interactive Rook terminal and continue an autonomous agent testing workflow.
slug: rook-command-start/
---

# <code>rook</code> Command

Use <code>rook</code> to start the interactive terminal in the workspace whose agent material and testing state you want to use.

<img loading="lazy" src={require('../assets/images/rook/rook-terminal-home.png').default} alt="Current Rook terminal home and workflow" className="doc_img"/>

## Syntax

~~~bash
rook
rook --no-animation
rook --version
rook --help
~~~

The TUI keeps the active project, agent, profile, credits, command duration, progress, and permission questions visible. Use <code>--no-animation</code> for recordings, slow terminals, or a static startup.

## First Start

1. Change to the workspace containing your checked-out agent, PRD, or test specification.
2. Run <code>rook</code>.
3. Use <code>/login</code> if the session is not authenticated.
4. Choose a project with <code>/project</code>.
5. Enter <code>/guide</code> for the workflow or <code>/help</code> for every command.

Run Rook from the intended workspace. The current directory selects the local <code>.testmuai/rook/</code> store; project content is kept below <code>projects/&lt;project-id&gt;/</code>. The workspace is also the base for relative source, command, certificate, and evidence paths.

## Related Commands

[<code>/guide</code>](/support/docs/rook-command-guide/) · [<code>/help</code>](/support/docs/rook-command-help/) · [<code>/project</code>](/support/docs/rook-command-project/) · [<code>/exit</code>](/support/docs/rook-command-exit/)
