---
id: agent-assurance-ci-cd
title: Run Agent Assurance in CI/CD
hide_title: false
sidebar_label: CI/CD and Automation
description: Run Agent Assurance headlessly in CI, consume NDJSON output, handle exit codes, isolate state, and build a safe agent testing gate.
keywords:
  - rook ci cd
  - ai agent testing github actions
  - rook headless
  - agent testing pipeline
url: https://www.testmuai.com/support/docs/agent-assurance-ci-cd/
site_name: TestMu AI
slug: agent-assurance-ci-cd/
canonical: https://www.testmuai.com/support/docs/agent-assurance-ci-cd/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": BRAND_URL },
      { "@type": "ListItem", "position": 2, "name": "Support", "item": `${BRAND_URL}/support/docs/` },
      { "@type": "ListItem", "position": 3, "name": "CI/CD", "item": `${BRAND_URL}/support/docs/agent-assurance-ci-cd/` }
    ]
  }) }}
/>

# Run Agent Assurance in CI/CD

Rook's headless commands use the same discovery, generation, profile, permission, execution, judging, and evidence paths as the interactive TUI. Use them to build a release gate after you have proved the workflow interactively against the same agent and profile.

## Prepare the Project Interactively

Before enabling a pipeline:

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
export ROOK_HOME="$RUNNER_TEMP/rook-home"
```

For a persistent self-hosted runner, choose a stable protected path so token renewal is retained. Ensure only the runner identity can read it.

Project evidence continues to be written under:

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
