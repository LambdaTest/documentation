---
id: rook-web-run-details
title: Rook Web UI — Run Details and Plan
sidebar_label: Run Details & Plan
description: Investigate a Rook run's completion state, pinned version and profile, selection plan, scenario outcomes, and missing evidence.
slug: rook-web-run-details/
canonical: https://www.testmuai.com/support/docs/rook-web-run-details/
---

# Run Details and Plan

Open **Projects → your project → your agent → Runs → run name**. This page summarizes one recorded execution. You can also reach it from a scenario's History or a result's **Open full run** link.

<img loading="lazy" src={require('../assets/images/rook/rook-web-run.png').default} alt="Completed docs-smoke-0.1.3 run with one passed scenario, unavailable coverage, the local-triage profile, and its result row" className="doc_img"/>

## Establish the Run Context

Read the run name and completion state, then the hosted run ID, agent version, concurrency, duration, and credits where supplied. Use the hosted ID when discussing the browser record with your team; it may differ from the local run directory ID.

**completed** describes the run's execution state, not whether every test passed. Read the outcome tiles and scenario rows. The example executed one scenario and passed it, but **Coverage —** means coverage is unavailable. It does not establish full coverage of the five discovered features.

## Inspect the Plan

Click **View plan** to read the recorded <code>run.yaml</code>.

<img loading="lazy" src={require('../assets/images/rook/rook-web-run-plan.png').default} alt="Recorded Rook run plan with version and profile pins, SC-002 included, and SC-001 excluded by the only flag" className="doc_img"/>

Check the included scenario IDs and reasons, exclusions, concurrency, test mode, and pinned agent and profile revisions. This answers “What was selected?” before you inspect “What happened?” The plan is not a live phase-progress view.

In this smoke test, SC-002 was included and SC-001 was excluded by <code>--only</code>. A selection-time exclusion in the plan is not necessarily counted as an execution-time **Skipped** result. That is why the plan can list SC-001 under <code>skipped</code> while the run's Skipped tile is zero.

## Check the Invocation Profile

**Invoke profile** identifies the profile used by this run and its available script path. **View Full Spec** opens the recorded profile revision. Use it to investigate a changed target, hook mapping, or environment requirement; the current profile on Summary may have changed since this run.

The browser does not edit hooks or resume phases. If you intentionally stopped a run before judging, use the CLI's [phase controls](/support/docs/rook-hooks-and-phases/#run-only-part-of-the-lifecycle) to complete the remaining work and synchronize it.

## Open a Scenario Result

The table shows scenario ID and title, criterion indicators, compliance, latency, and status. Click the **scenario ID** to open that run's [result and evidence](/support/docs/rook-web-result-details/). Compliance and latency describe that recorded result, not the entire feature catalog.

When available, additional panels show gaps, latency summaries, failures by tool, and adversarial analysis. A skipped-results section gives recorded skip reasons. Missing panels mean that analysis was not supplied; they are not proof that no problems exist. If an **Errored** outcome appears, inspect the result to distinguish execution problems from an inability to verify the response.

For **No graded results in this run**, inspect the plan, run state, completed phases, and upload status. Do not interpret an empty results table as all tests passing.

## Next Step

Read [Results and Artefacts](/support/docs/rook-web-result-details/) for a criterion-by-criterion investigation, or return to [Runs](/support/docs/rook-web-runs/) to choose another execution.
