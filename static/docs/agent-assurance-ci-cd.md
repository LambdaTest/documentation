# Run Agent Assurance in CI/CD

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

rook-events.ndjson"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Use --verbose when diagnostic tool activity and cost events are needed",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "rook run --entity refund-desk --only SC-001 --verbose --json"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Example GitHub Actions Job",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "name: Rook agent assurance\n\non:\n  pull_request:\n\njobs:\n  rook:\n    runs-on: self-hosted\n    permissions:\n      contents: read\n    env:\n      ROOK_HOME: /var/lib/rook-ci/home\n      ROOK_AGENT_TOKEN: ${{ secrets.ROOK_AGENT_TOKEN }}\n    steps:\n      - uses: actions/checkout@v4\n\n      - name: Install pinned public Rook release\n        run: |\n          curl -fsSL https://raw.githubusercontent.com/LambdaTest/rook/main/install.sh \\\n            | bash -s -- --version 0.1.1 --dir \"$RUNNER_TEMP/rook-bin\"\n          echo \"$RUNNER_TEMP/rook-bin\" >> \"$GITHUB_PATH\"\n\n      - name: Verify Rook environment\n        run: |\n          rook --version\n          rook doctor\n          rook auth status\n\n      - name: Run release-gate scenarios\n        run: |\n          rook profile use staging --entity refund-desk\n          rook run \\\n            --entity refund-desk \\\n            --only SC-001,SC-004,SC-014 \\\n            --no-narrative \\\n            --allow 'run(https://refund-agent.staging.example.com/v1/chat)' \\\n            --json | tee rook-events.ndjson\n\n      - name: Print report\n        if: always()\n        run: rook report --entity refund-desk\n\n      - name: Upload evidence\n        if: always()\n        uses: actions/upload-artifact@v4\n        with:\n          name: rook-evidence\n          path: .testmuai/rook/agents/refund-desk/runs/"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Move generation into a separate scheduled or manually approved workflow",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "rook explore . --force --all --json\nrook generate --entity refund-desk --total 30 --json"
      }
    ],
    "dateModified": "2026-09-07T12:29:55+05:30"
  }) }}
/>

# Run Agent Assurance in CI/CD

Rook's headless commands use the same discovery, generation, profile, permission, execution, judging, and evidence paths as the interactive TUI. Use them to build a release gate after you have proved the workflow interactively against the same agent and profile.

This recipe targets **Rook 0.1.11**. It runs an explicit suite, preserves evidence, and checks completion and verdict counts instead of interpreting a successful CLI process as a successful agent test.

## Set Up CI/CD Through Prompts {#prompt-led-setup}

If you use the [Rook skill in a coding assistant](/support/docs/rook-coding-agents/), describe the outcome in chat. You do not need to type each Rook command below. **The assistant authors and reviews the pipeline; the runner executes Rook CLI commands.** Installing a skill alone does not create a CI job or give the assistant access to your CI account.

### 1. Establish the Inputs

```text
Use the rook skill to inspect this repository and plan CI/CD for its AI agent.
Identify the existing CI platform, Rook project and agent, invocation profile,
reviewed scenarios, required environment-variable names, and target side effects.
Ask me for missing choices. Confirm whether the result should be shared or local,
the verdict policy, tool grants, and credit use. Do not run tests or change files.
```

Expect a concrete setup checklist. Have a reachable test target and a locally rehearsed suite before enabling unattended execution. Supply secret **names** in chat; enter values through your CI secret manager.

### 2. Request the Pipeline

```text
Use the rook skill and this CI/CD guide to prepare the integration for the
platform we selected. Reuse the reviewed suite and adapt the existing pipeline.
Keep discovery and scenario generation outside the release gate.
Pin the public Rook CLI, isolate its home state, use secret references, and run
only the exact approved scenario IDs with the reviewed profile and tool grants.
Use the strict release policy described here: every selected scenario must pass.
Check completion, current-run identity, and required report fields, not just
process exit. Preserve evidence even on failure without making the job green.
Show the proposed files and configuration checklist. Do not push, trigger CI,
deploy, or run paid Rook operations.
```

The platform guides below provide complete prompts and reference files for GitHub Actions, Jenkins, and Argo CD. The public skill provides Rook's headless/evidence contract; platform configuration must also follow the platform's own documentation.

### 3. Review, Validate, and Enable Deliberately

```text
Validate the proposed integration locally without invoking the agent or CI.
Check syntax and exercise the gate with synthetic passing, failed, unverifiable,
incomplete, and malformed results. Check that secret values are never printed
or archived and that evidence survives a failed gate.
Show the diff, validation results, and the platform configuration I must finish.
Do not weaken the policy or claim the integration was tested live.
```

Review the changed files and finish protected-environment, credentials, networking, and retention setup. Then explicitly approve the first workflow/build/deployment check using your platform's normal controls. The assistant cannot bypass those requirements, and enabling retries can cause additional paid target calls.

## Maintain and Investigate CI/CD Through Prompts {#guided-ci-actions}

These follow-ups apply after the initial setup. Give the assistant the relevant repository revision and trusted job artifacts; never paste secret values.

| Task | Prompt to send | Review before acting |
| --- | --- | --- |
| Add Rook to an existing pipeline | “Use the rook skill to add the reviewed assurance suite without replacing existing build or deployment stages. Show the diff and preserve current permissions, approvals, and artifact controls. Do not push or trigger it.” | Correct placement and platform-specific failure behavior; Argo CD PostSync does not roll back a deployment. |
| Change the test selection | “Use Rook's saved scenarios to propose the new exact suite for this gate. Explain changed coverage, side effects, and credits. Update configuration only after I confirm; do not execute it.” | Selected IDs and expected count must agree; never shrink the suite to hide a failing scenario. |
| Refresh generated coverage | “Use the rook skill to propose a separately approved discovery and generation task for the changed agent. Show the scenario/profile diff before proposing a gate change.” | Model-backed generation can spend credits. Rehearse and review new definitions before adopting them. |
| Investigate a failed job | “Use the rook skill to read this attempt's saved run/report/verdict files. Separate setup errors, incomplete execution, Fail, Unable to Verify, and compromised results. Cite evidence and propose a next step; do not retry or start paid RCA.” | Match the current run ID. An older successful report must not make this job pass. |
| Review a verdict policy | “Explain the current gate policy and how it treats missing or unverifiable evidence. Propose a policy change only for review; do not reclassify verdicts or edit the gate yet.” | The strict release gate here differs from the public skill's more permissive general CI example. |
| Upgrade the runner's CLI | “Compare the pinned Rook release with the public release notes. Propose an update with compatibility checks for the output fields the gate requires. Do not change the pin or run paid probes until approved.” | Update the reviewed examples and validate their contract together; a newer version is not automatically compatible. |
| Review results visually | “Use the rook skill to inspect the trusted evidence archive, restore it to an isolated workspace after checking its paths, and open the local UI. If uploaded, help locate the same run online. Do not rerun tests to get a link.” | Keep the project/agent/run hierarchy intact, match IDs, and control access to sensitive evidence. |

The command sections later on this page explain **what the assistant automates and what the runner executes**. Keep them as implementation references; they are not additional chat instructions.

## Choose Your CI/CD Platform

| Platform | What the dedicated guide provides |
| --- | --- |
| [GitHub Actions](/support/docs/rook-github-actions/) | A protected-environment workflow, secret configuration, and evidence upload after success or failure. |
| [Jenkins](/support/docs/rook-jenkins/) | A declarative Jenkinsfile with scoped credentials, isolated Rook state, and archived results. |
| [Argo CD](/support/docs/rook-argocd/) | A PostSync Kubernetes Job, a reviewed-suite image, secret references, and persistent evidence. |

These guides share a downloadable [reviewed-suite gate script](/support/resources/rook/rook-ci.sh), which you review and commit as `ci/rook-ci.sh` in your agent repository. It calls the CLI directly; a coding-agent skill is not required on the runner. For interactive authoring, use the [coding-agent setup guides](/support/docs/rook-coding-agents/).

### Choose a Verdict Policy Deliberately

The dedicated platform examples use a **strict release gate**: every explicitly selected scenario must pass, and missing evidence, Unable to Verify, incomplete work, or compromised results block the job. Blocking the job does not relabel an Unable to Verify verdict as Fail.

The [public skill's general CI recipe](https://github.com/LambdaTest/rook/blob/main/skill-installer/skills/references/ci.md) is more permissive: it reports Unable to Verify and unrunnable gaps without failing on those outcomes alone. Choose and review the policy for your application; do not silently switch policies to get a green build. All versions must check completion, use the current run ID, preserve evidence, and reject malformed or missing result fields.

## Prepare a Reviewed Suite

1. Run `/explore`, `/generate`, `/profile add`, and a one-scenario `/run` locally.
2. Review the generated `.testmuai/rook/` agent records, scenarios, and profile.
3. Replace all literal credentials with `${VAR}` references.
4. Commit the project Rook files that define the suite and profile.
5. Keep global credentials, environment values, permission grants, and sessions out of the repository.
6. Seed test fixtures and verify the profile reset command.

> **Authentication in unattended environments:** The current pre-alpha release uses the interactive LambdaTest login flow and exposes no dedicated service-token login flag. Use a protected persistent runner with a pre-authenticated `ROOK_HOME`, or follow your organization's approved secret provisioning process. Never commit or upload a personal Rook credential store as a repository artifact.

## Isolate Global State

Set `ROOK_HOME` to a protected runner directory:

```bash
curl -fsSL https://raw.githubusercontent.com/LambdaTest/rook/main/install.sh \
| bash -s -- --version 0.1.11 --dir "$RUNNER_TEMP/rook-bin"
export PATH="$RUNNER_TEMP/rook-bin:$PATH"
rook --version
```

RUNNER_TEMP is a GitHub Actions runner variable. On another CI platform, substitute its job-specific temporary directory. The installer uses public releases and verifies their SHA-256 checksums; no source-repository token is required.

See [release notes](https://github.com/LambdaTest/rook/releases/tag/v0.1.11) before changing the pin.

## Authenticate Without a Browser

Provide LT_USERNAME and LT_ACCESS_KEY from your CI secret manager. Rook 0.1.11 accepts this pair for unattended authentication; a copied personal OAuth credential directory is not required.

```bash
export ROOK_ENV=prod
export ROOK_HOME="$RUNNER_TEMP/rook-home"
```

For a persistent self-hosted runner, choose a stable protected path so token renewal is retained. Ensure only the runner identity can read it.

The LT environment pair takes precedence over stored browser login, even with a different ROOK_HOME. A missing half of the pair is an error. Never print either value or pass literal secrets in logged command arguments.

## Select the Project and Profile

Run from the workspace containing the committed .testmuai/rook/ files:

```bash
rook project use <project-id>
rook agent use <agent-id>
rook profile use staging
rook scenarios list
rook sync
```

Replace the IDs with your reviewed project and local agent. Do not use the retired --entity flag.

A normal run needs a synchronized version. An intentional --test run stays off the shared timeline and should not be substituted silently when sync fails.

## Authorize Only the Reviewed Work

Unattended commands cannot answer permission prompts. Use the exact rule Rook requested during your local rehearsal:

```bash
rook run --only SC-001,SC-004,SC-014 \
--profile staging --concurrency 1 --name release-gate \
--allow '<exact-reviewed-rule>' --json > rook-run.json
```

Replace the rule placeholder with the actual tool-and-target rule for your hook. Repeat --allow if several operations are required. HTTP, command, and MCP integrations do not necessarily request the same rule.

Avoid blanket --yes for a release gate. Grants add authority; they do not sandbox the process or revoke broader saved grants. Keep the runner's state and credentials isolated.

Use an explicit shell error policy, such as set -euo pipefail in Bash. Do not use 2>&1 when redirecting JSON: progress and diagnostic output belongs on stderr.

## Gate on Completion and Verdicts

rook run --json produces one JSON document on stdout, not NDJSON. The document includes ok, run_id, halted, and, when available, report.totals.

A process exit code of zero is **not** an agent-quality gate. The current run/report paths do not implement the older documented 0/1/2/3/4 verdict mapping. A halted run or a run with failed verdicts can still produce an outcome document. Inspect its contents.

Save this as check-rook-result.cjs and run it after the command above:

```javascript
const fs = require('node:fs');

const result = JSON.parse(fs.readFileSync('rook-run.json', 'utf8'));
const totals = result.report?.totals;
const expected = 3; // Must match the reviewed --only list.

const complete =
result.ok === true &&
typeof result.run_id === 'string' &&
result.halted === false &&
!result.discarded &&
totals?.planned === expected &&
totals.executed === expected &&
totals.decided === expected &&
totals.passed === expected &&
totals.failed === 0 &&
totals.unverifiable === 0 &&
totals.unjudged === 0 &&
totals.not_run === 0 &&
totals.unrunnable === 0;

if (!complete) {
console.error('Rook gate failed: incomplete, failed, or unverifiable suite.');
process.exit(1);
}
console.log('Rook gate passed for the selected suite.');
```

```bash
node check-rook-result.cjs
```

This gate fails closed when required totals are missing. Adapt the expected count deliberately; do not reduce it to match an unexpectedly small result. Also enforce any required **criterion-level** evidence/coverage policy from the saved verdicts—scenario totals alone do not prove every criterion was observable.

Do not apply this full-suite gate to a partial-phase run. Finish collection and judging first.

## Preserve and Share Evidence {#example-github-actions-job}

Always retain rook-run.json and the relevant run directory, including when the job fails:

```text
$GITHUB_WORKSPACE/.testmuai/rook/
```

## Verify the Environment

```bash
rook --version
rook doctor
rook auth status
rook plan --json
```

An unreachable controller does not mean a token is invalid. When `rook auth status` cannot reach the controller, it can return success with a warning. The next real operation still fails if connectivity is unavailable.

## Run a Deterministic Suite

Use explicit agent and scenario IDs in CI:

```bash
rook agent list --json
rook profile use staging --entity refund-desk
rook run \
--entity refund-desk \
--only SC-001,SC-004,SC-014 \
--no-narrative \
--json
```

Headless `rook run` currently does not expose class, category, tag, concurrency, free-form selection, or RCA flags. Resolve and review the intended IDs in the committed suite.

## Authorize Required Operations

An unattended command cannot answer a permission prompt. Pass exact, temporary allowances that were reviewed with the workflow:

```bash
rook run \
--entity refund-desk \
--only SC-001,SC-004 \
--allow 'run(https://refund-agent.staging.example.com/v1/chat)' \
--json
```

The allowance applies only to that process. Repeat `--allow` for each exact rule.

Avoid broad shell or MCP allowances. `--allow` adds authority; it does not remove a broader permission already stored in the selected `ROOK_HOME`.

## Consume JSON Output

`--json` emits newline-delimited JSON events. Process one object per line rather than parsing human prose:

```bash
rook run --entity refund-desk --only SC-001 --json > rook-events.ndjson
```

Use `--verbose` when diagnostic tool activity and cost events are needed:

```bash
rook run --entity refund-desk --only SC-001 --verbose --json
```

Do not assume every command returns one aggregate JSON object. Preserve the NDJSON stream as a job artifact for debugging.

## Handle Exit Codes

| Exit code | Meaning | Recommended pipeline action |
|---|---|---|
| `0` | No agent defect was recorded in the verdicts that were produced | Check run completion, coverage, and Unable-to-Verify output before continuing |
| `1` | Rook could not test the agent or the requested state was not reached | Fail as infrastructure or harness error |
| `2` | Agent failure or adversarial compromise was observed | Fail as an agent-quality finding |
| `3` | Authentication is required or no longer valid | Stop and repair runner authentication |
| `4` | Session budget or credits were exhausted | Stop, review scope, and adjust approved budget or credits |

An observed agent failure outranks an invocation error if both occur in one run.

> **Exit code `0` does not prove suite completion:** In the current pre-alpha release, `rook run` and `rook report` derive their exit status from recorded verdicts. An interrupted or partial run can therefore exit `0` when its completed scenarios contain no recorded defect. A release gate must also inspect the saved `run.yaml`: require a completed status, review the stop reason, and compare selected scenario counts against completed verdict counts. Fail closed when the requested suite did not finish.

## Example GitHub Actions Job

This example assumes a protected self-hosted runner already has an authenticated Rook home and can reach the staging agent and controller.

```yaml
name: Rook agent assurance

on:
pull_request:

jobs:
rook:
runs-on: self-hosted
permissions:
contents: read
env:
ROOK_HOME: /var/lib/rook-ci/home
ROOK_AGENT_TOKEN: ${{ secrets.ROOK_AGENT_TOKEN }}
steps:
- uses: actions/checkout@v4

- uses: actions/setup-node@v4
with:
node-version: 20

- name: Install pinned Rook build
env:
ROOK_VERSION: <reviewed-commit-sha>
run: |
curl -fsSL https://raw.githubusercontent.com/LambdaTest/rook/main/install.sh | bash

- name: Verify Rook environment
run: |
rook --version
rook doctor
rook auth status

- name: Run release-gate scenarios
run: |
rook profile use staging --entity refund-desk
rook run \
--entity refund-desk \
--only SC-001,SC-004,SC-014 \
--no-narrative \
--allow 'run(https://refund-agent.staging.example.com/v1/chat)' \
--json | tee rook-events.ndjson

- name: Print report
if: always()
run: rook report --entity refund-desk

- name: Upload evidence
if: always()
uses: actions/upload-artifact@v4
with:
name: rook-evidence
path: .testmuai/rook/agents/refund-desk/runs/
```

**Pin Rook by commit SHA** and review updates before changing it. Scope the repository token to read access for the private release repository.

## Separate Generation From the Gate

Scenario generation uses models and can change the suite. A stable release gate should run reviewed, committed scenario IDs. Move generation into a separate scheduled or manually approved workflow:

```bash
rook explore . --force --all --json
rook generate --entity refund-desk --total 30 --json
```

Review the resulting scenario diff before it changes the required gate.

## Preserve Evidence on Failure

Upload the NDJSON stream and the run directory with `if: always()`. A failed invocation still records the request, and a budget or controller stop preserves completed scenarios.

**Before granting broad access to CI logs or artifacts, review them for secrets and personal data.**
