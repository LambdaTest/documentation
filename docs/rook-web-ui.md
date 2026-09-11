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

These guides were checked against every Rook page in the signed-in stage UI with a Rook 0.1.3 run on September 11, 2026. Screenshots capture only the visible webpage using agent-browser, without browser chrome or the desktop. The walkthrough uses the public triage sample from the [quickstart](/support/docs/agent-assurance-quickstart/).

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

## Page-by-Page Guide

The documentation sidebar places all these guides under **Agent Assurance Platform → Autonomous Agent Testing → Web UI**. Each guide explains how to reach the page, its fields and actions, a real example, and what to do when data is missing.

| Page | What you can do there |
|---|---|
| [Projects and First Sign-In](/support/docs/rook-web-projects/) | Find a synchronized project; understand onboarding, account selection, and an empty project list. |
| [Agents](/support/docs/rook-web-agents/) | Choose an agent and interpret its version, readiness labels, tools, and recent-run information. |
| [Agent Summary](/support/docs/rook-web-agent-summary/) | Inspect source context, findings, profiles, hook phases, and recorded scripts. |
| [Versions and Call Graph](/support/docs/rook-web-versions/) | Read a version's full specification and declared tool, subagent, and MCP relationships. |
| [Features](/support/docs/rook-web-features/) | Review behavior definitions, validation rules, edge cases, and links to scenarios. |
| [Scenarios and Filters](/support/docs/rook-web-scenarios/) | Filter the catalog by feature, class, latest result, or category; find tests that have never run. |
| [Scenario Details](/support/docs/rook-web-scenario-details/) | Read the goal, acceptance criteria, execution settings, and history. |
| [Runs](/support/docs/rook-web-runs/) | Find a named execution, its recorded agent version, outcome summary, and plan. |
| [Run Details and Plan](/support/docs/rook-web-run-details/) | Check completion, scenario selection, the pinned profile, results, and skip reasons. |
| [Results and Artefacts](/support/docs/rook-web-result-details/) | Investigate Request, Response, Verdict, and Artefacts alongside criterion evidence. |
| [Insights](/support/docs/rook-web-insights/) | Read aggregate trends, tool failures, verification gaps, and adversarial results with their limitations. |

The six agent tabs are **Summary**, **Versions**, **Features**, **Scenarios**, **Runs**, and **Insights**. Scenario definitions, run details, and individual results open as separate pages. Use the breadcrumb to move back to the agent or project.

## Review Your First Result

Follow **Projects → project → agent → Runs → run name → scenario ID**. This keeps the evidence tied to the execution you are investigating.

1. On **Run Details**, check the agent version, invocation profile, and **View plan**. Confirm the intended scenarios were included.
2. On the result's **Request** tab, check the goal and invoked script.
3. On **Response**, compare the actual answer and recorded observations with the expected behavior.
4. Read every acceptance criterion's Expected, Achieved, and Evidence fields. Use **Verdict** and **Artefacts** for the supporting records.

The sample has five features, two generated scenarios, and one executed scenario. A passing smoke result does not establish complete feature coverage. Use **Features** for behaviors without scenarios and **Scenarios → Result → never run** for generated tests without results.

For profile creation, hook editing, and lifecycle control, use [Prompt-Based Profile Authoring](/support/docs/agent-assurance-profiles/) and [Lifecycle Phases](/support/docs/rook-hooks-and-phases/) in the CLI. The hosted pages review recorded configuration and results; they are not a browser-based profile generator or phase runner.

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
In the verified smoke test, Agents, Summary, Runs, and Insights displayed a 1% pass rate for a run that passed 1 of 1 scenarios. Summary showed an empty tool section despite a five-tool count, and scenario History showed 0 pass despite four passing criteria. Insights also presented coverage and version labels that should not be treated as complete coverage or authoritative version mapping. The guides call out these discrepancies beside the relevant screenshots. The run detail counts and result's criterion evidence showed the passing result correctly.

If aggregate values disagree, cross-check the run's counts, recorded specification, and <code>rook report &lt;run-id&gt; --json</code>. Do not use the aggregate percentage alone as a release gate. These are observed stage display discrepancies, not failures of the sample agent.
:::

## Next Steps

[Understand verdicts and coverage](/support/docs/agent-assurance-results-and-evidence/) · [Profiles and hook contract](/support/docs/rook-profiles-and-hooks/) · [Architecture](/support/docs/rook-architecture/) · [CI completion checks](/support/docs/agent-assurance-ci-cd/)
