---
id: rook-command-report
title: Rook /report Command
sidebar_label: /report
description: Print findings from a local Rook run and optionally generate root-cause analysis for failure clusters.
slug: rook-command-report/
---

# <code>/report</code> Command

Use <code>/report</code> to read a stored run from disk. Without a run ID, Rook uses the most recent run for the active agent.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-report.png').default} alt="Current Rook report command help showing run ID, RCA, and allow options" className="doc_img"/>

## Syntax

~~~text
/report [run-id]
/report [run-id] --rca
/report [run-id] --rca --allow '<rule>'
~~~

The shell form is <code>rook report</code> with the same argument and options.

Without <code>--rca</code>, report is a free local read: it does not contact the target, create a session, or spend credits. With <code>--rca</code>, Rook groups failures, investigates likely causes, writes explanations into the report, and spends credits.

Use repeatable <code>--allow</code> rules only when an RCA verifier needs a reviewed tool operation in unattended execution.

## Related Commands

[Results and evidence](/support/docs/agent-assurance-results-and-evidence/) · [<code>/run</code>](/support/docs/rook-command-run/) · [<code>/ui</code>](/support/docs/rook-command-ui/)
