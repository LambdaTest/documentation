---
id: rook-command-start
title: rook Command
sidebar_label: rook
description: Start the interactive Rook terminal and continue an autonomous agent testing workflow.
slug: rook-command-start/
---

# <code>rook</code> Command

Use <code>rook</code> to start the interactive terminal in the workspace whose agent materials and test results you want to use.

<img loading="lazy" src={require('../assets/images/rook/rook-terminal-home.png').default} alt="Rook interactive terminal home and workflow" width="1111" height="911" className="doc_img"/>

## Purpose

The interactive terminal is the best starting point for a human-led run. It keeps the current agent, profile, scenarios, spend, live subagent progress, permission questions, and next recommended command visible.

## Syntax

~~~bash
rook
rook --no-animation
rook --version
rook --help
~~~

Use <code>--no-animation</code> when recording a terminal, using a slower terminal, or preferring a static header.

## Step-by-step

1. Open the workspace containing your PRD, knowledge base, or checked-out agent source.
2. Run <code>rook</code>.
3. If prompted, use <code>/login</code>.
4. Enter <code>/guide</code> for the workflow or <code>/help</code> for all commands.
5. Continue with <code>/explore</code>, <code>/generate</code>, <code>/profile add</code>, <code>/run</code>, and <code>/ui</code>.

## Real-world example

~~~bash
cd ~/agent-tests/refund-agent
rook --no-animation
~~~

Then:

~~~text
/explore . -- focus on PRD.md and knowledge/refund-policy.md
~~~

## State and limits

The launch itself does not test the live agent. Project state is read from <code>.testmuai/rook/</code>; global authentication, variables, and sessions are read from <code>~/.testmuai/rook/</code>.

Run Rook from the intended workspace. Starting it from an unrelated folder can cause results to be stored under that folder and makes relative source, command, certificate, and observation paths resolve differently.

## Common problems

- <strong>Command not found:</strong> finish the PATH step in the [installation guide](/support/docs/rook-installation/).
- <strong>Controller or authentication error:</strong> run <code>rook doctor</code> and <code>rook whoami</code>.
- <strong>Terminal rendering problems:</strong> use <code>rook --no-animation</code> and confirm that the session has a TTY.

## Related commands

[<code>/guide</code>](/support/docs/rook-command-guide/) · [<code>/help</code>](/support/docs/rook-command-help/) · [<code>/explore</code>](/support/docs/rook-command-explore/) · [<code>/exit</code>](/support/docs/rook-command-exit/)
