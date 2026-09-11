# /report Command

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Use /report to read a stored run from disk. Without a run ID, Rook uses the most recent run for the active agent.

## Syntax

```text
/report [run-id]
/report [run-id] --rca
/report [run-id] --rca --allow '<rule>'
```

The shell form is rook report with the same argument and options.

Without --rca, report is a free local read: it does not contact the target, create a session, or spend credits. With --rca, Rook groups failures, investigates likely causes, writes explanations into the report, and spends credits.

Use repeatable --allow rules only when an RCA verifier needs a reviewed tool operation in unattended execution.

## Related Commands

[Results and evidence](/support/docs/agent-assurance-results-and-evidence/) · [/run](/support/docs/rook-command-run/) · [/ui](/support/docs/rook-command-ui/)

## Automation and Hosted Review

Use rook report &lt;run-id&gt; --json to read the structured local report. Successful command completion means the report was read, not that the agent passed. Inspect its totals and the run’s completion using the [CI checks](/support/docs/agent-assurance-ci-cd/).

Use rook ui to open synchronized results in the [Web UI](/support/docs/rook-web-ui/) or rook ui --local for the files on this machine.
