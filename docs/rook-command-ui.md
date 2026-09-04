---
id: rook-command-ui
title: Rook /ui Command
sidebar_label: /ui
description: Open hosted Rook results or serve a read-only viewer directly from local workspace evidence.
slug: rook-command-ui/
---

# <code>/ui</code> Command

Use <code>/ui</code> to review synchronized results in the hosted TestMu AI application. Add <code>--local</code> to serve the evidence currently on disk.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-ui.png').default} alt="Current Rook UI command help showing local and no-open options" className="doc_img"/>

## Syntax

~~~text
/ui
/ui --local
/ui --local --no-open
~~~

The shell form is <code>rook ui</code> with the same options.

| Form | Result |
|---|---|
| <code>/ui</code> | Print and open the hosted application. It displays content recorded by sync and run uploads. |
| <code>/ui --local</code> | Start a loopback server over the current workspace's files and open it. |
| <code>--no-open</code> | Print the URL without launching a browser. |

The local viewer is read-only, makes no external request for workspace data, and does not require authentication or network access. It continues serving until the command or TUI session exits.

Use the hosted view for shared project history. Use <code>--local</code> for unsynchronized work, offline investigation, or the exact evidence present on this machine.

## Related Commands

[Results and evidence](/support/docs/agent-assurance-results-and-evidence/) · [<code>/sync</code>](/support/docs/rook-command-sync/) · [<code>/report</code>](/support/docs/rook-command-report/)
