---
id: rook-command-budget
title: Rook /budget Command
sidebar_label: /budget
description: View current Rook session spending and configured phase limits.
slug: rook-command-budget/
---

# <code>/budget</code> Command

Use <code>/budget</code> to view what the current Rook session has spent, what remains, and the configured phase caps.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-budget.png').default} alt="Rook budget command help" width="1556" height="1466" className="doc_img"/>

## Syntax

~~~text
/budget
~~~

There is no headless <code>rook budget</code> command in the current release.

## Real-world use

Check cost before expanding a suite:

~~~text
/budget
/generate --total 12
/budget
/run --only SC-001 --concurrency 1
~~~

Credits, not tokens, are the unit shown for run budgets because provider and model costs vary.

## What it shows

- Session spend.
- Remaining credits available to the session.
- Current budget level.
- Limits assigned to phases such as discovery, generation, execution, and judging.

## Current limitation

Although the terminal's short command description mentions adjustment, the current command is display-only. It does not change spend limits. Do not document or automate unsupported <code>set</code> or <code>reset</code> subcommands.

## State and boundaries

The command does not spend credits or modify the project. Budget exhaustion is applied at boundaries rather than interrupting a live model or target call mid-request; completed work is preserved.

Use <code>/plan</code> for the account plan and overall credit balance. Use <code>/budget</code> for this Rook session.

## Related commands

[<code>/plan</code>](/support/docs/rook-command-plan/) · [<code>/generate</code>](/support/docs/rook-command-generate/) · [<code>/run</code>](/support/docs/rook-command-run/)
