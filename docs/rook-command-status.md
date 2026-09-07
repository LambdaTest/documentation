---
id: rook-command-status
title: Rook /status Command
sidebar_label: /status
description: Compare local Rook agent state with upstream versions and inspect pending run synchronization.
slug: rook-command-status/
---

# <code>/status</code> Command

Use <code>/status</code> to understand where the current machine stands before synchronizing or running tests.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-status.png').default} alt="Rook status command help showing agent and JSON options" className="doc_img"/>

## Syntax

~~~text
/status
/status --agent <id>
/status --json
~~~

The shell form is <code>rook status</code> with the same options.

## Tree States

| State | Meaning | Next action |
|---|---|---|
| <code>unsynced</code> | This agent has never been recorded upstream. | Run <code>/sync</code>. |
| <code>clean</code> | Local content matches the recorded version. | No action. |
| <code>ahead</code> | Local content changed after the last sync. | Review and run <code>/sync</code>. |
| <code>behind</code> | Upstream advanced while this machine stayed on an older version. | Reconcile upstream changes before syncing. |
| <code>diverged</code> | Local and upstream histories both moved. | Reconcile the branch; Rook does not overwrite it silently. |
| <code>unknown</code> | Local state is known, but upstream could not be checked. | Restore connectivity and rerun status. |

Status returns upstream run information for <code>--agent</code>, or for the active agent when the option is omitted. It identifies unfinished local runs and completed runs whose scenario results still need reconciliation.

Status exits successfully even when the tree is not clean; the state is data, not a command failure. In automation, inspect the <code>--json</code> response.

## Related Commands

[<code>/sync</code>](/support/docs/rook-command-sync/) · [<code>/runs</code>](/support/docs/rook-command-runs/) · [<code>/project</code>](/support/docs/rook-command-project/)
