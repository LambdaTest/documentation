---
id: rook-command-report
title: rook report Command
sidebar_label: rook report
description: Print a default or explicitly selected Rook run from a normal shell or CI job.
slug: rook-command-report/
---

# <code>rook report</code> Command

Use <code>rook report</code> to print verdicts without opening the TUI or browser viewer.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-report.png').default} alt="Rook report command help with run entity and JSON options" width="1556" height="956" className="doc_img"/>

## Syntax

~~~bash
rook report
rook report <run-id>
rook report [run-id] --entity <agent-id>
rook report [run-id] --json
~~~

| Argument or option | Purpose |
|---|---|
| <code>run-id</code> | Select a stored run. When omitted, Rook reverse-sorts run IDs and selects the first one. |
| <code>--entity</code> | Select the agent whose run data should be read. |
| <code>--json</code> | Produce machine-readable output. |

## Real-world examples

Show the default run:

~~~bash
rook report
~~~

Run IDs contain a timestamp with one-second precision plus a random suffix. If concurrent processes can start runs for the same agent in the same second, do not rely on the default ordering; pass the exact run ID printed by the run you want to report.

Export one refund-agent run for CI processing:

~~~bash
rook report 2026-08-13T10-15-00-a1b2c3 --entity refund-agent --json
~~~

## How to use the output

Read verdict counts together with verification gaps and completion state. **Unable to Verify** criteria do not become failures, and an interrupted run may still contain valid completed scenarios.

For human investigation, use <code>/ui</code> to open full request, response, and evidence detail.

## State and errors

This command only reads stored project data; it does not call the live agent or generate a new narrative.

- If no run is found, run from the correct workspace or provide <code>--entity</code> and a valid run ID.
- If scripts need stable parsing, use <code>--json</code> instead of matching human-oriented text.

## Related commands

[<code>/run</code>](/support/docs/rook-command-run/) · [<code>/ui</code>](/support/docs/rook-command-ui/) · [CI/CD](/support/docs/rook-ci-cd/)
