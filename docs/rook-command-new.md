---
id: rook-command-new
title: Rook /new Command
sidebar_label: /new
description: Start a fresh Rook conversation session while keeping project data.
slug: rook-command-new/
---

# <code>/new</code> Command

Use <code>/new</code> to start a fresh interactive conversation without leaving Rook or deleting the current workspace's testing data.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-new.png').default} alt="Rook new session command help" width="1556" height="1466" className="doc_img"/>

## Syntax

~~~text
/new
~~~

There is no headless <code>rook new</code> command.

## Effect

The command:

- Clears the TUI content.
- Creates a new session identifier.
- Clears a process halt so work can continue.
- Keeps discovered agents, profiles, scenarios, run evidence, authentication, and environment variables.

## Real-world use

Use <code>/new</code> after finishing one natural-language investigation and before asking Rook about a separate agent concern:

~~~text
/new
Which scenarios depend on multi-turn conversation state?
~~~

This is not a project reset. To switch agents, use <code>/agent use</code>. To remove stored entities, use their explicit remove or delete commands.

The input is disabled while a long-running command is active. Press <code>Esc</code> to abort it, wait for the prompt to return, and then enter <code>/new</code>. Check target state before retrying any interrupted write.

## Related commands

[<code>/clear</code>](/support/docs/rook-command-clear/) · [<code>rook ask</code>](/support/docs/rook-command-ask/) · [<code>/exit</code>](/support/docs/rook-command-exit/)
