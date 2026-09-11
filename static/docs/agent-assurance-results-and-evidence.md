# Understand Agent Assurance Results and Evidence

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

A result answers two different questions: **what did the agent do, and how much could Rook verify?** Read the scenario verdict alongside its criteria and evidence. A good-looking percentage alone is not a release decision.

## Open Hosted or Local Results

```bash
rook ui
```

This opens the hosted Web UI for the selected environment. Use it for synchronized project history and team review. For stage:

```bash
export ROOK_ENV=stage
rook ui
```

Open project → agent → **Runs** → run → scenario result. The [Web UI walkthrough](/support/docs/rook-web-ui/) explains each screen and current stage display limitations.

For on-disk evidence, including unsynchronized test runs:

```bash
rook ui --local
rook ui --local --no-open
```

The local viewer binds to loopback, reads the current workspace, and needs no authentication or network access for its data. Keep the serving process running while reviewing it. It is a different interface from the hosted app.

## Scenario Verdicts

| Verdict | Interpretation |
|---|---|
| **Pass** | The attempted scenario has passing verifiable criteria and no observed failed criterion. Check for remaining gaps. |
| **Fail** | Rook observed one or more criteria fail. |
| **Unable to Verify** | Available evidence was insufficient to establish the outcome. This is not automatically an agent defect. |

A skipped, unattempted, or unjudged scenario is not a pass. Partial-phase and interrupted runs need a completion check before their results can serve as a gate.

## Pass Rate Versus Coverage

Pass rate measures passed scenarios among those with a decided verdict. Coverage describes how much of the intended behavior or criteria was actually tested or verified. Always check which denominator a report uses.

```text
8 decided scenarios: 8 passed, 0 failed
20 acceptance criteria: 8 verified, 12 unable to verify

Scenario pass rate: 100%
Criterion verification coverage: 40%
```

A missing metric or dash means **not available**, not zero and not full coverage. The tested triage sample passed one scenario but left four of its five discovered feature areas untested.

## Inspect Criterion Evidence

For a result, compare:

1. **Request:** the goal, input, and session context sent to the target.
2. **Response:** the actual answer, exchange, observed calls, and available usage.
3. **Acceptance criteria:** each statement, verdict, supporting evidence, and verification gap.
4. **Artefacts:** collected output files and supporting evidence, where available.
5. **Run context:** the pinned agent version, profile revision, and selected phases.

An agent's claim that it sent a message or created a refund is not independent proof of that write. Look for observed calls, trace data, a read-only status check, or another authoritative observation.

Hooks must return actual observations. Invented usage or calls turn missing evidence into misleading scores.

## Fix Verification Gaps

| Gap | Next action |
|---|---|
| Tool calls are unavailable | Use profile fix or edit the hook to return actual calls; test it again. |
| Criteria expect fields absent from the answer | Align the criterion and returned evidence; do not silently weaken the business requirement. |
| Delayed traces or files have not arrived | Add a collect hook and continue the same run with --run. |
| Target usage is missing | Return observed usage only if the target provides it. |
| Multi-turn context is unavailable | Implement real session handling and return a conversation handle. |
| Required MCP verifier is unavailable | Check its definition, connection, and approval with rook mcp. |
| Verification would perform another write | Provide a read-only observation instead. |
| Evidence cannot be attributed to a scenario | Isolate fixtures and sessions, or use concurrency 1. |

## Files Written for a Run

The 0.1.3 smoke test wrote:

```text
.testmuai/rook/projects/<project-id>/agents/<agent-id>/runs/<run-id>/
run.yaml
agent.yaml
features.yaml
profile.yaml
report.yaml
scenarios/<scenario-id>/
snapshot.yaml
request.json
response.json
hooks.json
verdict.yaml
evidence/
```

run.yaml preserves the plan, selected phases, pinned versions, included/skipped scenarios, and upstream IDs. report.yaml stores the summary and totals. Each scenario's snapshot.yaml preserves its definition; hooks.json preserves phase records. Additional artifacts and RCA files depend on the run.

Editing today's scenario or profile does not rewrite the saved input snapshots of an earlier run. Local run IDs and hosted IDs can differ; use the links supplied by the UI rather than constructing URLs from local directory names.

## Print or Export a Report

Select the correct project and agent first:

```bash
rook project use <project-id>
rook agent use <agent-id>
rook runs
rook report <run-id>
rook report <run-id> --json
```

Without a run ID, report reads the latest local run. In 0.1.3, the JSON record contains run_id, name, dir, and report, whose totals include planned, executed, passed, failed, unverifiable, unjudged, and not-run counts.

A successful report command means the report was read; it does **not** mean the agent passed. See the [CI gate example](/support/docs/agent-assurance-ci-cd/) for explicit completion and result checks.

## Recover Missing Hosted Results

```bash
rook status
rook sync
rook runs sync
rook ui
```

sync publishes project definitions; runs sync reconciles finished runs with outstanding uploads. Confirm the same account, environment, project, and agent in the CLI and browser. Runs created with --test deliberately stay off the shared timeline.

## Compare Runs and Use RCA

Before calling a change a regression, compare scenario definitions, profile revisions, selected phases, and coverage. Repeat unchanged cases when investigating nondeterminism.

Use rook report &lt;run-id&gt; --rca or rook run --rca for failure-cluster investigation. RCA spends credits and provides an evidence-grounded hypothesis—not a verified fix. Reproduce the issue before changing the agent.

## Share Evidence Safely

Share a hosted run link with teammates who have access to the same environment and project. It is not an anonymous public report.

Review local requests, responses, goals, traces, and artifacts for secrets and customer data before uploading or committing them. Do not publish the global Rook credential store or terminal session logs. Treat agent-produced HTML and files as untrusted content.
