---
id: rook-command-help
title: Rook /help Command
sidebar_label: /help
description: List current Rook commands by purpose or show one command's subcommands and options.
slug: rook-command-help/
---

# <code>/help</code> Command

Use <code>/help</code> to list the current command surface or inspect one command in full.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-help.png').default} alt="Current Rook help command help" className="doc_img"/>

## Syntax

~~~text
/help
/help <command>
~~~

From a shell:

~~~bash
rook help
rook help <command>
~~~

The overview groups commands into the testing sequence, workspace operations, and session/product operations. Command-specific help lists subcommands separately from cumulative options.

Help, slash-command completion, and shell parsing are derived from the same command registry. A renamed flag therefore changes all three surfaces together.

## Related Commands

[All commands](/support/docs/agent-assurance-command-reference/) · [<code>/guide</code>](/support/docs/rook-command-guide/) · [<code>/docs</code>](/support/docs/rook-command-docs/)
