# Run Agent Assurance in CI/CD

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Use CI only after the same agent, profile, and scenarios work locally. Commit reviewed definitions and hook scripts; keep model-driven discovery and generation separate from the release gate.

This recipe targets **Rook 0.1.3**. It runs an explicit suite, preserves evidence, and checks completion and verdict counts instead of interpreting a successful CLI process as a successful agent test.

## Prepare a Reviewed Suite

1. Select the correct environment, project, and agent.
2. Explore, author a profile, generate scenarios, and prove one safe run locally.
3. Review the profile hooks and every selected scenario, including their live side effects.
4. Commit the project definition, scenarios, profiles, and scripts without secrets.
5. Provide isolated fixtures and a reachable staging target on the runner.
6. Sync the reviewed tree before a normal timeline run.

Do not run untrusted pull-request hook scripts with repository secrets. Use a reviewed branch and a protected CI environment. Restrict access to self-hosted runners.

## Install a Pinned Public Release

```bash
curl -fsSL https://raw.githubusercontent.com/LambdaTest/rook/main/install.sh \
| bash -s -- --version 0.1.3 --dir "$RUNNER_TEMP/rook-bin"
export PATH="$RUNNER_TEMP/rook-bin:$PATH"
rook --version
```

RUNNER_TEMP is a GitHub Actions runner variable. On another CI platform, substitute its job-specific temporary directory. The installer uses public releases and verifies their SHA-256 checksums; no source-repository token is required.

See [release notes](https://github.com/LambdaTest/rook/releases/tag/v0.1.3) before changing the pin.

## Authenticate Without a Browser

Provide LT_USERNAME and LT_ACCESS_KEY from your CI secret manager. Rook 0.1.3 accepts this pair for unattended authentication; a copied personal OAuth credential directory is not required.

```bash
export ROOK_ENV=stage
export ROOK_HOME="$RUNNER_TEMP/rook-home"
rook whoami
rook doctor
```

Use credentials valid for the selected environment. Public installations default to production unless ROOK_ENV is set. Target-agent credentials, such as AGENT_TOKEN, are separate from Rook account credentials.

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

In 0.1.3, rook run --json produces one JSON document on stdout, not NDJSON. The document includes ok, run_id, halted, and, when available, report.totals.

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
.testmuai/rook/projects/<project-id>/agents/<agent-id>/runs/
```

In GitHub Actions, put evidence upload in a step with if: always(); see the [workflow syntax reference](https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax). Do not upload ROOK_HOME, shell environments, or credential files.

To retry outstanding result uploads and open the hosted view:

```bash
rook runs sync
rook ui --no-open
```

Share the run URL with authorized teammates. The stage UI is at [stage-rook.lambdatestinternal.com](https://stage-rook.lambdatestinternal.com/). See [Web UI troubleshooting](/support/docs/rook-web-ui/#troubleshooting) if counts or results differ from the local report.

## Separate Generation From the Gate

Run generation in a separately approved workflow:

```bash
rook explore . --force -- "focus on changed refund approval rules"
rook generate --total 10 --class functional,adversarial -- "cover the changed rules"
```

Review the resulting diff, test the profile, and sync before changing the required gate. Generation is model-backed and can spend credits; it is not a deterministic assertion step.
