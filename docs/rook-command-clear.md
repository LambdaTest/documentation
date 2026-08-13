---
id: rook-command-clear
title: Rook /clear Command
sidebar_label: /clear
description: Clear the visible scrollback in the current Rook interactive session.
slug: rook-command-clear/
---

# <code>/clear</code> Command

Use <code>/clear</code> to remove previous messages from the visible Rook terminal when you want a clean screen.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-clear.png').default} alt="Rook clear command help" width="1556" height="1466" className="doc_img"/>

## Syntax

~~~text
/clear
~~~

There is no headless <code>rook clear</code> command.

## What it does

It clears only the current TUI scrollback. It does not:

- Delete agents, profiles, scenarios, runs, or evidence.
- Start a new session.
- Clear authentication or environment variables.
- Remove <code>.testmuai/rook/</code> project data.

## Real-world use

After inspecting verbose discovery output:

~~~text
/clear
/scenarios list
~~~

This makes the next list easier to read without changing its underlying data.

Use <code>/new</code> when you want a new conversation session. Use the specific agent, profile, scenario, environment, or logout commands when you intend to change stored state.

## Related commands

[<code>/new</code>](/support/docs/rook-command-new/) · [<code>/exit</code>](/support/docs/rook-command-exit/)
