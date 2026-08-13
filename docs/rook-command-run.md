---
id: rook-command-run
title: Rook /run Command
sidebar_label: /run
description: Execute selected scenarios against a live autonomous agent and produce evidence-backed verdicts.
slug: rook-command-run/
---

# <code>/run</code> Command

Use <code>/run</code> after selecting an agent, generating scenarios, and activating a verified invocation profile. This command makes real calls to the live target.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-run.png').default} alt="Rook run command help with filters concurrency narrative and RCA" width="1556" height="1466" className="doc_img"/>

## Interactive syntax

~~~text
/run [--only <ids>] [--class <list>] [--category <list>]
     [--tag <list>] [--concurrency <n>] [--no-narrative]
     [--rca] [-- selection in words]
~~~

## Headless syntax

~~~bash
rook run [--entity <id>] [--only <ids>] [--no-narrative] \
  [--allow <exact-rule>] [--verbose] [--json]
~~~

Interactive class, category, tag, concurrency, natural-language selection, and RCA options are not exposed by the current headless command.

## Options

| Option | Purpose |
|---|---|
| <code>--only</code> | Run specified scenario IDs; comma-separated. |
| <code>--class</code> | Select functional, non-functional, or adversarial scenarios. |
| <code>--category</code> | Select scenario categories. |
| <code>--tag</code> | Select scenarios carrying any listed tag. |
| <code>--concurrency</code> | Number executed at once; interactive default is 3. |
| <code>--no-narrative</code> | Skip the model-written run summary. |
| <code>--rca</code> | Cluster failures and write a proposed remedy for each cause. |

## Safe first run

~~~text
/run --only SC-001 --concurrency 1 --no-narrative
~~~

Review the preflight target, profile, scenario count, estimated credits, and write warning. Approve only a staging target and test data you are authorized to change.

:::warning Live effects
Rook does not sandbox or roll back the target agent. Refunds, bookings, emails, tickets, and file writes are real.
:::

## Real-world follow-up

After a safe refund lookup passes:

~~~text
/run --class functional --tag refund --concurrency 1
~~~

Investigate observed failures:

~~~text
/run --only SC-004,SC-011 --concurrency 1 --rca
~~~

RCA is an evidence-grounded hypothesis. Rook writes the proposal but does not modify your agent.

## Results and interruption

Completed results are written below <code>.testmuai/rook/</code>. Press <code>Esc</code> to abort the active operation. Rook cancels an in-flight HTTP request or sends <code>SIGTERM</code> to an in-flight command, then preserves scenario results that had already completed.

An interrupted target call may already have produced an external effect even when Rook recorded no response or verdict for that scenario. Inspect the target system before retrying a write scenario.

**Unable to Verify** is not a failure. It means the profile did not expose enough independent evidence. Check verification coverage before relying on the pass rate.

In CI, exit code 0 describes verdicts that were produced. Also confirm the run record says the requested suite completed.

## Common problems

- No active verified profile: add and test one with <code>/profile</code>.
- All scenarios skipped: inspect <code>/scenarios list</code> for capability gaps.
- Cross-scenario interference: reset fixtures and use concurrency 1.
- Wrong target: stop before confirmation and select the intended profile.

## Related commands

[<code>/scenarios</code>](/support/docs/rook-command-scenarios/) · [<code>/profile</code>](/support/docs/rook-command-profile/) · [<code>/ui</code>](/support/docs/rook-command-ui/) · [<code>rook report</code>](/support/docs/rook-command-report/)
