# /report Command

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Use /report to read a stored run from disk. Without a run ID, Rook uses the most recent run for the active agent.

## Syntax

~~~text
/report [run-id]
/report [run-id] --rca
/report [run-id] --rca --allow ''
~~~

The shell form is rook report with the same argument and options.

Without --rca, report is a free local read: it does not contact the target, create a session, or spend credits. With --rca, Rook groups failures, investigates likely causes, writes explanations into the report, and spends credits.

Use repeatable --allow rules only when an RCA verifier needs a reviewed tool operation in unattended execution.

## Related Commands

[Results and evidence](/support/docs/agent-assurance-results-and-evidence/) · [/run](/support/docs/rook-command-run/) · [/ui](/support/docs/rook-command-ui/)
