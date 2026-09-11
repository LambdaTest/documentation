---
id: rook-web-ui
toc_max_heading_level: 2
title: Review Rook Tests in the Web UI
hide_title: false
sidebar_label: Web UI
description: Review synchronized Rook projects, versions, profile hooks, runs, and scenario evidence in the hosted Web UI.
keywords:
  - rook web ui
  - agent assurance results
  - autonomous agent testing dashboard
slug: rook-web-ui/
canonical: https://www.testmuai.com/support/docs/rook-web-ui/
---

# Review Rook Tests in the Web UI

The Rook Web UI is live at [stage-rook.lambdatestinternal.com](https://stage-rook.lambdatestinternal.com/). Use it to review synchronized projects, agent versions, invocation profiles, scenarios, runs, and their evidence with your team.

**Use the CLI to create and run tests; use the Web UI to investigate and share results.** Opening the browser does not run your target or publish local changes.

This guide was checked against the live stage UI with a Rook 0.1.3 run on September 11, 2026. Screenshots use the public triage sample from the [quickstart](/support/docs/agent-assurance-quickstart/).

## Open the Right Environment

| Environment | Web UI | CLI setting |
|---|---|---|
| Production | [rook.testmuai.com](https://rook.testmuai.com) | Public package default, or <code>ROOK_ENV=prod</code> |
| Stage | [stage-rook.lambdatestinternal.com](https://stage-rook.lambdatestinternal.com/) | <code>ROOK_ENV=stage</code> |
| Local evidence | Loopback URL printed by the CLI | <code>rook ui --local</code> |

For stage, set the environment **before** authentication, project selection, sync, and runs:

```bash
export ROOK_ENV=stage
rook whoami
rook project
rook status
rook ui
```

Sign in if required. Browser sign-in is separate from CLI authentication; use the same account, organization, and environment. Exported <code>LT_USERNAME</code> and <code>LT_ACCESS_KEY</code> override stored CLI browser credentials. See [login](/support/docs/rook-command-login/) if the identities differ.

Changing <code>ROOK_ENV</code> does not change the URL your target-agent hook calls. Review both the Rook environment and the target profile.

## Make Local Work Visible

From your agent workspace:

```bash
rook project use <project-id>
rook agent use <agent-id>
rook sync
rook run --only <reviewed-scenario-id> --concurrency 1 --name smoke
rook ui
```

Replace the placeholders with your own IDs and approve only reviewed operations. Project definitions remain local until <code>sync</code>. A normal run then records results against the synchronized version. Use <code>rook runs sync</code> to retry outstanding uploads after a connection problem.

Runs created with <code>--test</code> intentionally do not appear on the shared timeline. Review them with <code>rook ui --local</code> instead.

## Find Your Agent

Open **Projects**, choose the project selected in the CLI, and then open its agent. The agent list shows available features, scenarios, tool counts, and recent-run information.

The agent page has six tabs:

| Tab | What to review |
|---|---|
| **Summary** | Agent description and source context, findings, profiles and their hook phases, and available tool information. |
| **Versions** | Synchronized versions, the current version, **View call graph**, and **View Full Spec**. |
| **Features** | The behaviors Rook discovered and their related scenarios. |
| **Scenarios** | Scenario definitions and latest-result context; narrow the list by feature, class, result, or category. |
| **Runs** | Recorded executions. Open a specific run before investigating a result. |
| **Insights** | Aggregate trends where the server has recorded enough data. Missing data is not a zero measurement. |

### Review versions, profiles, and phases

Use **Versions → View Full Spec** to inspect a recorded agent definition. **View call graph** opens the relationships recorded for that version; it is not a live trace of every target invocation.

<img loading="lazy" src={require('../assets/images/rook/rook-web-versions.png').default} alt="Rook hosted Versions tab showing version 1, current status, View call graph, and View Full Spec" className="doc_img"/>

On **Summary**, the **Profiles** section lists each recorded profile, its phases, and script paths. Use **View Full Spec** to inspect the profile declaration. Profiles can map <code>prepare</code>, <code>open</code>, <code>execute</code>, <code>close</code>, and <code>collect</code>; <code>judge</code> belongs to Rook.

Only defined hooks appear. The quickstart's single-turn fixture has just <code>execute</code>, so absent login or collection hooks are expected. To change them, use [prompt-based profile authoring](/support/docs/agent-assurance-profiles/) in the CLI, review the scripts, test them, and sync again.

## Open a Run

Select **Runs**, then the named execution. Check its completion state, agent version, concurrency, scenario counts, profile, and any missing metrics. **View plan** shows the recorded selection; **Invoke profile → View Full Spec** shows the profile used for this run.

<img loading="lazy" src={require('../assets/images/rook/rook-web-run.png').default} alt="Completed Rook smoke run with one passed scenario, local-triage execute profile, View plan, and the scenario result link" className="doc_img"/>

The screenshot shows one scenario passed and no failures, but coverage is unavailable. It does not establish full feature coverage. A run stopped before <code>judge</code> also does not have a finished assurance verdict; complete its [remaining phases](/support/docs/rook-hooks-and-phases/#run-only-part-of-the-lifecycle) first.

## Inspect a Scenario Result

Open a scenario from the run, not just from the current scenario catalog. That preserves the context of the execution you are investigating.

<img loading="lazy" src={require('../assets/images/rook/rook-web-result.png').default} alt="Rook scenario result with Request, Response, Verdict, and Artefacts tabs beside four passing acceptance criteria and their evidence" className="doc_img"/>

The result page places evidence beside the acceptance criteria:

1. **Request:** check the goal, selected profile, and invocation context.
2. **Response:** inspect the actual answer, exchange, and recorded observations.
3. **Verdict:** inspect the stored evaluation record.
4. **Artefacts:** browse output and supporting evidence files when present.
5. **Acceptance criteria:** read Expected, Achieved, Evidence, and confidence for each criterion—not just its badge.

Use **Open full run** to return to the run. A scenario's latest catalog result and a result in an older run can differ because the definition, profile, or target changed.

Treat an agent's claim that it changed external state separately from proof of that change. If evidence is unavailable, read the verification gap before deciding whether the problem is the agent, the hook, or an unreachable verifier.

## Share a Result

Copy the run or result URL from your browser. Recipients need access to that environment and project; this is not an anonymous public report. Local run directory IDs and hosted IDs can differ, so do not construct hosted links by substituting a local run ID.

Review artifacts for secrets and customer information before downloading or sharing them. The local viewer's loopback URL is for your machine and is not a team-sharing link.

## Troubleshooting

| Symptom | What to check |
|---|---|
| Project or agent is missing | Confirm the browser account, <code>ROOK_ENV</code>, selected project, and that <code>rook sync</code> succeeded. |
| Run exists locally but not in the browser | Check for <code>--test</code>, then use <code>rook runs sync</code> for outstanding normal-run uploads. |
| Local edits are absent | The Web UI shows synchronized records, not your current unsynchronized files. |
| A file, trace, or metric is missing | Confirm the hook actually collected it, the run completed the relevant phase, and uploads finished. Missing evidence is not an observed failure or zero value. |
| Sign-in loops or access is denied | Use the stage account for stage. Browser login and exported CLI credentials may belong to different accounts. |
| You need offline or exact on-disk evidence | Run <code>rook ui --local</code> from the correct workspace. |

:::caution Stage display discrepancies observed on September 11, 2026
In the verified smoke test, the agent list and Summary displayed a 1% pass rate for a run that passed 1 of 1 scenarios. Summary also showed an empty tool section despite a five-tool summary count. The run and scenario pages correctly showed the passing result and its criterion evidence.

If aggregate values disagree, cross-check the run's counts, recorded specification, and <code>rook report &lt;run-id&gt; --json</code>. Do not use the aggregate percentage alone as a release gate. These are observed stage display discrepancies, not failures of the sample agent.
:::

## Next Steps

[Understand verdicts and coverage](/support/docs/agent-assurance-results-and-evidence/) · [Profiles and hook contract](/support/docs/rook-profiles-and-hooks/) · [Architecture](/support/docs/rook-architecture/) · [CI completion checks](/support/docs/agent-assurance-ci-cd/)
