# Runs

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Open **Projects → your project → your agent → Runs**. This is the shared execution history for that agent. Use it to find a named run and establish which recorded version it tested.

## Choose an Execution

| Column | How to use it |
|---|---|
| **Run** | Click the human-readable name to open the run's details. |
| **Agent version** | Identifies the version this execution used, which may differ from the current version. |
| **Result** | Outcome distribution across passed, partial, failed, errored/unverifiable, and skipped results where recorded. Hover or focus the bar for its count summary. |
| **Pass** | Aggregate pass percentage; cross-check the actual run counts if it disagrees with the result bar. |
| **Coverage** | Recorded coverage, or a dash when unavailable. |
| **Credits** | Recorded consumption, not an estimate for your next execution. |
| **Plan** | **View plan** opens the saved selection plan without leaving the list. |
| **Duration** | Recorded run duration, not just the target agent's response latency. |

The sample run took about 18 seconds overall, while its scenario result reports 87 ms of agent latency. Those values describe different parts of the workflow and should not be treated as interchangeable.

Use pagination when more runs are available. To compare two executions, open each run and check its version, profile revision, and scenario selection before interpreting a change in results. This page does not provide a side-by-side diff or a browser Run button.

**Stage percentage discrepancy**
On September 11, 2026, the sample's result bar correctly reported **1 passed**, but the Pass column displayed **1%**. Open the run and its criterion evidence rather than using that aggregate percentage as a release gate.

## Find a Missing Run

**This agent has never been run** means no run is available in this view. Follow the setup hint: an agent needs reviewed scenarios, a usable profile, and synchronized definitions before a shared execution is meaningful.

If you already ran it locally, check:

1. The browser and CLI use the same account, organization, project, and environment.
2. The run was not created with --test; test-mode runs intentionally stay off the shared timeline.
3. Uploads completed. Use rook runs sync to retry outstanding normal-run uploads, then reload the page.

Use rook ui --local for on-disk evidence. See [Web UI setup and troubleshooting](/support/docs/rook-web-ui/) for the complete environment checklist.

## Next Step

Open [Run Details and Plan](/support/docs/rook-web-run-details/) to establish execution context, then open a scenario result to investigate its verdict.
