# Understand Agent Assurance Results and Evidence

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

A result answers two different questions: **what did the agent do, and how much could Rook verify?** Read the scenario verdict alongside its criteria and evidence. A good-looking percentage alone is not a release decision.

## Open Hosted or Local Results

Choose where the evidence lives before interpreting a missing run:

| | Local UI | Hosted Web UI |
|---|---|---|
| Command | `rook ui --local` | `rook ui` |
| Data | Current workspace's on-disk records, including `--test` runs | Synchronized project history in the selected environment |
| Open a result | Agents → agent → runs → run → scenario | Projects → project → agent → Runs → run → scenario |
| Access | No browser login; local server must stay running | Browser login and access to the project |
| Share | Review and sanitize the evidence files; loopback URLs are not team links | Copy the hosted run/result URL for authorized teammates |

For hosted review, open [rook.lambdatest.com/projects](https://rook.lambdatest.com/projects) or use:

```bash
export ROOK_ENV=prod
rook ui
```

Use the same environment for CLI authentication, project selection, synchronization, and browser review. A normal run needs its definitions synchronized first; `rook runs sync` retries outstanding normal-run uploads. `--test` runs deliberately stay off the shared timeline.

For on-disk evidence, including unsynchronized test runs:

```bash
rook ui --local
rook ui --local --no-open
```

The local viewer binds to loopback, reads the current workspace, and needs no authentication or network access for its data. Keep the serving process running while reviewing it. It is a different interface from the hosted app.

The [combined UI walkthrough](/support/docs/rook-web-ui/#choose-your-ui) covers both interfaces on one page.

## Scenario Verdicts

| Verdict | Interpretation |
|---|---|
| **Pass** | The attempted scenario has passing verifiable criteria and no observed failed criterion. Check for remaining gaps. |
| **Fail** | Rook observed one or more criteria fail. |
| **Unable to Verify** | Available evidence was insufficient to establish the outcome. This is not automatically an agent defect. |

For adversarial scenarios, a grounded partial compromise counts as **Fail**. Older runs that stored a **Partial** verdict display it as **Unable to Verify**.

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

### In the Local UI

On a run's scenario result, filter **Acceptance criteria** by **All**, **Pass**, **Fail**, or **Unable to Verify**. Expand a card or use **Expand all** to compare expected and achieved outcomes with supporting evidence. Choose **Request**, **Response**, **Verdict**, or **Artefacts** in the **Evidence** panel to open its drawer. Close the drawer to return to the criteria. See the [earlier layout](/support/docs/rook-web-ui/#earlier-local-ui) if your public CLI still uses scrolling sections.

Since 0.1.16, the result also shows the scenario as it was when the run used it: its feature, class, category, criteria, timeout, multi-turn setting, input and output, and an adversarial scenario's attack intent. The icon next to the title opens the scenario's page, and the feature opens as it was for that run.

Since 0.1.17, a failed result shows a **Why it failed** card, and an unverifiable one shows **Why it couldn't be verified**, in place of the earlier Summary box. The run's page has a collapsible **Failure analysis** section with one card per failure cluster; each card lists the scenarios affected and links to their results. A run made with `--rca` shows each cluster's cause, remedy and files. Without `--rca`, the card says how to get them. The section appears once the run has finished.

This view can show evidence before upload, including a local `--test` run. The redesigned viewer refreshes when workspace records change. The CommerceCare example separates an unmet response requirement from missing tool/state evidence; the hosted triage example below is a different run. An absent verdict or file means it was not recorded or is unavailable; do not turn that absence into a pass. See [local navigation and files](/support/docs/rook-web-ui/#local-results).

### In the Hosted Web UI

Open the scenario **from its run**. Read the criterion cards and filter by outcome, then select **Request**, **Response**, **Verdict**, or **Artefacts** in the **Evidence** panel to open its drawer. Close the drawer to return to the criteria. Cards show expected, achieved, evidence, and confidence where available. The scenario catalog instead shows the current definition and history. Since 0.1.16, the result also shows the scenario as it was for that run, with its attack intent where it has one. The icon next to the title opens that version of the scenario, or says it no longer exists, and the feature opens as it was for that run. Since 0.1.17, the run's page and its failed or unverifiable results also show the run's failure analysis, as in the Local UI.

Passing criterion cards start collapsed. Click a card or **Expand all** to read its assessment. The screenshot shows the saved verdict in the evidence drawer; close the drawer to return to the cards.

Only uploaded evidence is available here. Check the recorded run version and profile, not just today's agent summary. If aggregate percentages disagree with the run's counts, inspect the criterion records and local report; see the documented [screenshot display notes](/support/docs/rook-web-ui/#screenshot-display-notes).

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
  scenario-inventory.yaml
  scenarios/<scenario-id>/
    snapshot.yaml
    request.json
    response.json
    hooks.json
    verdict.yaml
    evidence/
```

run.yaml preserves the plan, selected phases, pinned versions, included/skipped scenarios, and upstream IDs. report.yaml stores the summary and totals. Since 0.1.11, scenario-inventory.yaml pins the definition of every scenario the run considered, including those it could not run, and run.yaml records the run's inventory and coverage_gaps. The run summary is computed from the recorded verdicts; writing it does not call a model. Each scenario's snapshot.yaml preserves its definition; hooks.json preserves phase records. Additional artifacts and RCA files depend on the run.

Editing today's scenario or profile does not rewrite the saved input snapshots of an earlier run. Local run IDs and hosted IDs can differ; use the links supplied by the UI rather than constructing URLs from local directory names.

## Print or Export a Report

Launch `rook` in the workspace containing your saved run. In the interactive TUI, select the correct project and agent, then open the report:

```text
/project
/agent
/report <run-id>
```

Replace `` with the saved run's ID. `/report` without an ID reads the latest local run. If Rook asks you to sign in, use `/login` and retry the report command. Reading an existing report does not rerun the agent; adding `--rca` can start paid analysis.

This is the completed report from the Rook 0.1.11 [interactive quickstart](/support/docs/agent-assurance-quickstart/), not a help screen:

Read the run ID and name, execution counts, and verdicts together. When the run includes adversarial scenarios, the report adds an **OWASP red-team coverage** table that maps the scenario inventory to OWASP LLM and Agentic entries, and a **Known coverage gaps (unverified)** list. A control with no mapped scenario remains unverified. `1 of 1 executed · 100% passed` is one passing case, not complete coverage of the agent. This October 13 terminal run is separate from the saved browser examples above. Use `/help report` for additional output and RCA options.

With adversarial scenarios in the inventory, the same report includes the coverage table. This excerpt is from a Rook 0.1.11 run of the triage-service sample on October 13, 2026, with rows elided:

```text
OWASP red-team coverage (scenario inventory; unmapped controls remain unverified)
risk | generated | executed | reached | verified | Pass | Fail | Unable to Verify
redteam | 4 | 0 | 0 | 0 | 0 | 0 | 4
owasp:asi01 | 1 | 0 | 0 | 0 | 0 | 0 | 1
owasp:llm01 | 1 | 0 | 0 | 0 | 0 | 0 | 1
owasp:llm02 | 2 | 0 | 0 | 0 | 0 | 0 | 2
owasp:llm07 | 1 | 0 | 0 | 0 | 0 | 0 | 1
...
Known coverage gaps (unverified):
  F-001 · cross-session-memory-poisoning: no scenario generated; applicability remains unverified
  F-003 · retrieval-boundary: no scenario generated; applicability remains unverified
```

Read the columns left to right. **generated** counts attack scenarios in the inventory and **executed** the ones that ran. **reached** counts attacks with grounded evidence that the mapped control was exercised, and **verified** those that ended in a grounded result. **Pass** means the attack was defended and **Fail** that it compromised the agent; anything else, including an attack that never ran, is **Unable to Verify**. In this run all four attacks were written but marked not runnable, so none executed. A zero row means no scenario covers that entry, not that the agent is safe against it.

For shell-based output or automation:

```bash
rook project use <project-id>
rook agent use <agent-id>
rook report <run-id>
rook report <run-id> --json
```

Without a run ID, report reads the latest local run. The JSON record contains run_id, name, dir, and report, whose totals include planned, executed, passed, failed, unverifiable, unjudged, and not-run counts. The report can also carry summary_claims, coverage_gaps, and redteam_coverage.

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
