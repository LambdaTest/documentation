# Review Rook Tests in the Web UI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

The Rook Web UI is live at [stage-rook.lambdatestinternal.com](https://stage-rook.lambdatestinternal.com/). Use it to review synchronized projects, agent versions, invocation profiles, scenarios, runs, and their evidence with your team.

**Use the CLI to create and run tests; use the Web UI to investigate and share results.** Opening the browser does not run your target or publish local changes.

This guide was checked against the live stage UI with a Rook 0.1.3 run on September 11, 2026. Screenshots use the public triage sample from the [quickstart](/support/docs/agent-assurance-quickstart/).

## Open the Right Environment

| Environment | Web UI | CLI setting |
|---|---|---|
| Production | [rook.testmuai.com](https://rook.testmuai.com) | Public package default, or ROOK_ENV=prod |
| Stage | [stage-rook.lambdatestinternal.com](https://stage-rook.lambdatestinternal.com/) | ROOK_ENV=stage |
| Local evidence | Loopback URL printed by the CLI | rook ui --local |

For stage, set the environment **before** authentication, project selection, sync, and runs:

```bash
export ROOK_ENV=stage
rook whoami
rook project
rook status
rook ui
```

Sign in if required. Browser sign-in is separate from CLI authentication; use the same account, organization, and environment. Exported LT_USERNAME and LT_ACCESS_KEY override stored CLI browser credentials. See [login](/support/docs/rook-command-login/) if the identities differ.

Changing ROOK_ENV does not change the URL your target-agent hook calls. Review both the Rook environment and the target profile.

## Make Local Work Visible

From your agent workspace:

```bash
rook project use <project-id>
rook agent use <agent-id>
rook sync
rook run --only <reviewed-scenario-id> --concurrency 1 --name smoke
rook ui
```

Replace the placeholders with your own IDs and approve only reviewed operations. Project definitions remain local until sync. A normal run then records results against the synchronized version. Use rook runs sync to retry outstanding uploads after a connection problem.

Runs created with --test intentionally do not appear on the shared timeline. Review them with rook ui --local instead.

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

On **Summary**, the **Profiles** section lists each recorded profile, its phases, and script paths. Use **View Full Spec** to inspect the profile declaration. Profiles can map prepare, open, execute, close, and collect; judge belongs to Rook.

Only defined hooks appear. The quickstart's single-turn fixture has just execute, so absent login or collection hooks are expected. To change them, use [prompt-based profile authoring](/support/docs/agent-assurance-profiles/) in the CLI, review the scripts, test them, and sync again.

## Open a Run

Select **Runs**, then the named execution. Check its completion state, agent version, concurrency, scenario counts, profile, and any missing metrics. **View plan** shows the recorded selection; **Invoke profile → View Full Spec** shows the profile used for this run.

The screenshot shows one scenario passed and no failures, but coverage is unavailable. It does not establish full feature coverage. A run stopped before judge also does not have a finished assurance verdict; complete its [remaining phases](/support/docs/rook-hooks-and-phases/#run-only-part-of-the-lifecycle) first.

## Inspect a Scenario Result

Open a scenario from the run, not just from the current scenario catalog. That preserves the context of the execution you are investigating.

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
| Project or agent is missing | Confirm the browser account, ROOK_ENV, selected project, and that rook sync succeeded. |
| Run exists locally but not in the browser | Check for --test, then use rook runs sync for outstanding normal-run uploads. |
| Local edits are absent | The Web UI shows synchronized records, not your current unsynchronized files. |
| A file, trace, or metric is missing | Confirm the hook actually collected it, the run completed the relevant phase, and uploads finished. Missing evidence is not an observed failure or zero value. |
| Sign-in loops or access is denied | Use the stage account for stage. Browser login and exported CLI credentials may belong to different accounts. |
| You need offline or exact on-disk evidence | Run rook ui --local from the correct workspace. |

**Stage display discrepancies observed on September 11, 2026**
In the verified smoke test, the agent list and Summary displayed a 1% pass rate for a run that passed 1 of 1 scenarios. Summary also showed an empty tool section despite a five-tool summary count. The run and scenario pages correctly showed the passing result and its criterion evidence.

If aggregate values disagree, cross-check the run's counts, recorded specification, and rook report &lt;run-id&gt; --json. Do not use the aggregate percentage alone as a release gate. These are observed stage display discrepancies, not failures of the sample agent.

## Next Steps

[Understand verdicts and coverage](/support/docs/agent-assurance-results-and-evidence/) · [Profiles and hook contract](/support/docs/rook-profiles-and-hooks/) · [Architecture](/support/docs/rook-architecture/) · [CI completion checks](/support/docs/agent-assurance-ci-cd/)
