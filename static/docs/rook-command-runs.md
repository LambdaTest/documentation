# /runs Command

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Use /runs sync when a run completed locally but a network or service interruption prevented all verdicts from reaching upstream.

## Syntax

~~~text
/runs sync
/runs sync
~~~

From a shell:

~~~bash
rook runs sync
rook runs sync
~~~

The active agent is used when no ID is supplied.

## What It Does

Rook reads completed run evidence already on disk and posts only records still owed upstream. It does not invoke the target, rejudge scenarios, call a model, or spend credits.

This command repairs result synchronization. Use /sync for agent specifications, features, scenarios, and profile revisions.

## Related Commands

[/status](/support/docs/rook-command-status/) · [/sync](/support/docs/rook-command-sync/) · [/report](/support/docs/rook-command-report/)
