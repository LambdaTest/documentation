---
id: rook-command-guide
title: Rook /guide Command
sidebar_label: /guide
description: Show Rook's recommended autonomous agent testing workflow inside the terminal.
slug: rook-command-guide/
---

# <code>/guide</code> Command

Use <code>/guide</code> when you need the end-to-end testing sequence and the meaning of its stages without leaving the terminal.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-guide.png').default} alt="Rook guide command help" width="1556" height="1466" className="doc_img"/>

## Syntax

~~~text
/guide
~~~

There is no headless <code>rook guide</code> command in the current release.

## What it explains

The guide presents the normal sequence:

~~~text
/explore → /agent → /generate → /profile → /scenarios → /run → /ui
~~~

It also explains key ideas such as live target effects, evidence, profiles, and **Unable to Verify**.

<img loading="lazy" src={require('../assets/images/rook/rook-terminal-guide.png').default} alt="Rook terminal guide explaining the autonomous agent testing journey" width="835" height="1066" className="doc_img"/>

## When to use it

- Your first Rook session.
- You return to a partially completed workspace.
- You are unsure whether to regenerate, configure a profile, or run.
- You are demonstrating the workflow to another tester.

The command reads current session context but does not invoke the target, spend test credits, or modify project state.

For exact flags and subcommands, use <code>/help &lt;command&gt;</code>. The guide explains the journey; help explains syntax.

## Related commands

[<code>rook</code>](/support/docs/rook-command-start/) · [<code>/help</code>](/support/docs/rook-command-help/) · [Quickstart](/support/docs/rook-quickstart/)
