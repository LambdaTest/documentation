---
id: rook-command-help
title: Rook /help Command
sidebar_label: /help
description: List interactive Rook commands or display flags and subcommands for one command.
slug: rook-command-help/
---

# <code>/help</code> Command

Use <code>/help</code> for command discovery inside the interactive terminal.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-help.png').default} alt="Rook help command help" width="1556" height="1466" className="doc_img"/>

## Syntax

~~~text
/help
/help <command>
~~~

Examples:

~~~text
/help explore
/help profile
/help run
~~~

The command name may be entered without the leading slash in the argument.

## What it shows

- <code>/help</code> groups every interactive command by workflow sequence, workspace, and session.
- <code>/help &lt;command&gt;</code> shows purpose, subcommands, flags, argument shapes, and free-text guidance where supported.
- The input completion menu uses the same registry, so offered flags match help.

Use shell help for headless syntax:

~~~bash
rook --help
rook generate --help
rook mcp add --help
~~~

## State

Help does not read the agent, invoke a target, spend credits, or change files.

If a command appears in these documentation pages but not in the installed CLI help, check <code>rook --version</code> and update the CLI.

## Related commands

[All commands](/support/docs/rook-command-reference/) · [<code>/guide</code>](/support/docs/rook-command-guide/) · [Installation](/support/docs/rook-installation/)
