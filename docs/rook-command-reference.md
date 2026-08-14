---
id: rook-command-reference
title: Rook Command Guides
hide_title: false
sidebar_label: All Commands
description: Index of every Rook interactive and headless command with links to detailed, screenshot-based guides.
keywords:
  - rook commands
  - rook cli reference
  - rook slash commands
url: https://www.testmuai.com/support/docs/rook-command-reference/
site_name: TestMu AI
slug: rook-command-reference/
canonical: https://www.testmuai.com/support/docs/rook-command-reference/
---

# Rook Command Guides

Rook has an interactive terminal for guided human testing and headless commands for shell scripts and CI. This index covers all 24 top-level command families in the current CLI.

<img loading="lazy" src={require('../assets/images/rook/rook-terminal-help.png').default} alt="Rook interactive help grouped by testing sequence workspace and session" width="1227" height="1222" className="doc_img"/>

## Start and Ask

| Command | Purpose | Detailed guide |
|---|---|---|
| <code>rook</code> | Start the interactive testing terminal. | [Open guide](/support/docs/rook-command-start/) |
| <code>rook ask</code> | Run one natural-language orchestrator turn without the TUI. | [Open guide](/support/docs/rook-command-ask/) |

## Autonomous Testing Sequence

| Interactive command | Headless equivalent | Purpose | Detailed guide |
|---|---|---|---|
| <code>/explore</code> | <code>rook explore</code> | Discover agents from local PRDs, knowledge bases, or source. | [Open guide](/support/docs/rook-command-explore/) |
| <code>/agent</code> | <code>rook agent</code> | List and select discovered agents. | [Open guide](/support/docs/rook-command-agent/) |
| <code>/generate</code> | <code>rook generate</code> | Generate functional, non-functional, and adversarial scenarios. | [Open guide](/support/docs/rook-command-generate/) |
| <code>/profile</code> | <code>rook profile</code> for read/use/remove operations | Configure and verify how Rook invokes the live target. | [Open guide](/support/docs/rook-command-profile/) |
| <code>/scenarios</code> | <code>rook scenarios</code> | Review runnability and curate scenarios. | [Open guide](/support/docs/rook-command-scenarios/) |
| <code>/run</code> | <code>rook run</code> | Execute the live agent and judge evidence. | [Open guide](/support/docs/rook-command-run/) |
| <code>/ui</code> | — | Open the local evidence viewer. | [Open guide](/support/docs/rook-command-ui/) |
| — | <code>rook report</code> | Print stored verdicts in a shell or CI. | [Open guide](/support/docs/rook-command-report/) |

## Account and Workspace

| Interactive command | Headless equivalent | Purpose | Detailed guide |
|---|---|---|---|
| <code>/plan</code> | <code>rook plan</code> | Show the account plan and credit balance. | [Open guide](/support/docs/rook-command-plan/) |
| <code>/auth</code> | <code>rook auth status</code> | Verify stored authentication. | [Open guide](/support/docs/rook-command-auth/) |
| — | <code>rook whoami</code> | Headless alias for authentication status. | [Open guide](/support/docs/rook-command-whoami/) |
| <code>/login</code> | <code>rook login</code> | Start browser authentication. | [Open guide](/support/docs/rook-command-login/) |
| <code>/logout</code> | <code>rook logout</code> | Revoke and clear credentials. | [Open guide](/support/docs/rook-command-logout/) |
| <code>/env</code> | — | Store variables referenced by profiles. | [Open guide](/support/docs/rook-command-env/) |
| <code>/mcp</code> | <code>rook mcp</code> | Manage MCP servers and trust. | [Open guide](/support/docs/rook-command-mcp/) |
| <code>/budget</code> | — | View session spending and phase limits. | [Open guide](/support/docs/rook-command-budget/) |
| <code>/doctor</code> | <code>rook doctor</code> | Diagnose installation, connection, authentication, and workspace. | [Open guide](/support/docs/rook-command-doctor/) |

## Interactive Session

| Command | Purpose | Detailed guide |
|---|---|---|
| <code>/guide</code> | Show the testing journey in order. | [Open guide](/support/docs/rook-command-guide/) |
| <code>/help</code> | List commands or explain one command. | [Open guide](/support/docs/rook-command-help/) |
| <code>/clear</code> | Clear visible TUI scrollback only. | [Open guide](/support/docs/rook-command-clear/) |
| <code>/new</code> | Start a new conversation session while keeping project data. | [Open guide](/support/docs/rook-command-new/) |
| <code>/exit</code> | Stop the Rook session and local viewer cleanly. | [Open guide](/support/docs/rook-command-exit/) |

## Discover Syntax from the CLI

Inside the TUI:

~~~text
/help
/help profile
/help run
~~~

From a normal shell:

~~~bash
rook --help
rook explore --help
rook mcp add --help
~~~

Human-readable text can evolve during pre-alpha. Prefer <code>--json</code> for automation where a headless command supports it.

## Headless Exit Codes

| Code | Meaning |
|---|---|
| <code>0</code> | No defect was recorded in the verdicts that were produced; also confirm that the requested run completed. |
| <code>1</code> | Rook could not perform the requested operation. |
| <code>2</code> | An agent defect or adversarial compromise was observed. |
| <code>3</code> | Authentication is missing or invalid. |
| <code>4</code> | Credits or a budget boundary prevented continuation. |

## Recommended First Journey

~~~text
/explore → /agent → /generate → /profile add → /scenarios list → /run → /ui
~~~

See the [end-user quickstart](/support/docs/rook-quickstart/) or choose a setup in [real-world use cases](/support/docs/rook-use-cases/).
