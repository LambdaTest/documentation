---
id: rook-command-runs
title: Rook /runs Command
sidebar_label: /runs
description: Reconcile completed local Rook runs whose results were not fully recorded upstream.
slug: rook-command-runs/
---

# <code>/runs</code> Command

Use <code>/runs sync</code> when a run completed locally but a network or service interruption prevented all verdicts from reaching upstream.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-runs.png').default} alt="Rook runs command help showing the sync subcommand" className="doc_img"/>

## Syntax

~~~text
/runs sync
/runs sync <agent-id>
~~~

From a shell:

~~~bash
rook runs sync
rook runs sync <agent-id>
~~~

The active agent is used when no ID is supplied.

## What It Does

Rook reads completed run evidence already on disk and posts only records still owed upstream. It does not invoke the target, rejudge scenarios, call a model, or spend credits.

This command repairs result synchronization. Use <code>/sync</code> for agent specifications, features, scenarios, and profile revisions.

## Related Commands

[<code>/status</code>](/support/docs/rook-command-status/) · [<code>/sync</code>](/support/docs/rook-command-sync/) · [<code>/report</code>](/support/docs/rook-command-report/)
