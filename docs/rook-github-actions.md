---
id: rook-github-actions
title: Run Rook in GitHub Actions
sidebar_label: GitHub Actions
description: Run a reviewed Rook suite from a manually triggered GitHub Actions workflow.
hide_title: false
slug: rook-github-actions/
---

# Run Rook in GitHub Actions

Run a reviewed Rook suite from a manually triggered GitHub Actions workflow. This example uses the public CLI, a protected environment, explicit scenario selection, and evidence upload even when the gate fails. It does not install a coding-agent skill or require a dedicated Rook action.

## Prepare the Reviewed Suite

Use a safe target that is reachable from the runner. In a local rehearsal, select the project and agent, create and test the profile, review its hooks and possible writes, and prove the selected scenarios work. Commit the reviewed `.testmuai/rook/` definitions and required hook scripts without credentials or old run histories. Do not generate new scenarios inside the release gate.

Download [rook-ci.sh](pathname:///support/resources/rook/rook-ci.sh), inspect it, and commit it as `ci/rook-ci.sh` in **your agent repository**. The examples below call that checked-in file, not a script downloaded at execution time. The script requires Bash, jq, tar, and Rook CLI.

Configure these values:

| Setting | Meaning |
| --- | --- |
| `LT_USERNAME`, `LT_ACCESS_KEY` | Rook account credentials, supplied only by the platform's secret store. |
| `ROOK_PROJECT_ID`, `ROOK_AGENT_ID` | IDs matching the committed workspace definitions. |
| `ROOK_PROFILE` | A reviewed, reachable test profile, for example `staging`. |
| `ROOK_SCENARIO_IDS` | An explicit comma-separated suite, for example `SC-001,SC-004,SC-014`. Use your own IDs. |
| `ROOK_ALLOW_RULES` | Optional newline-separated, exact tool grants observed during rehearsal. No blanket approval is added. |
| Target credentials | Variables required by your profile, such as `AGENT_TOKEN`; these are separate from Rook credentials. |

The `staging` profile names **your test target**, not the Rook service. `ROOK_ENV=prod` selects the public Rook service. The script uses the LT environment credential pair and isolated `ROOK_HOME`; it does not copy a developer's browser session.

Execution calls the real target and can spend Rook credits. Review the suite, tool grants, fixture isolation, and spending before enabling a job. Use a fresh checkout/output directory and avoid concurrent jobs against shared mutable fixtures.

## What Makes the Job Pass

The shared script selects the project, agent, and profile; syncs the reviewed agent; and runs only the selected scenarios. It checks the process status, `halted`, `discarded`, and the run ID, then fetches **that run's** JSON report.

This example deliberately uses a **strict release policy**: every selected scenario must pass, with no Unable to Verify, unjudged, skipped/not-run, unrunnable, or compromised results. Missing fields, malformed JSON, a mismatched run ID, or an unexpected scenario count fail closed. A command exit of zero by itself is insufficient.

Unable to Verify remains its own verdict even when it blocks a release. The public skill's [general CI recipe](https://github.com/LambdaTest/rook/blob/main/skill-installer/skills/references/ci.md) allows that outcome alone; this stricter policy is a documented choice, not a change to Rook's verdict semantics. Add criterion-level requirements if your release needs evidence beyond scenario totals.

## Configure GitHub

1. Add the reviewed definitions, hook scripts, and `ci/rook-ci.sh` to your trusted default branch.
2. Create an environment named `rook-assurance`. Restrict deployment branches to your reviewed branch and configure required reviewers where your GitHub plan supports them.
3. Add environment secrets `LT_USERNAME`, `LT_ACCESS_KEY`, and any target secrets. The example uses `AGENT_TOKEN`; rename or remove it to match your profile.
4. Add environment variables `ROOK_PROJECT_ID`, `ROOK_AGENT_ID`, `ROOK_PROFILE`, `ROOK_SCENARIO_IDS`, and optional `ROOK_ALLOW_RULES`.
5. Ensure the target is reachable from the runner. For a private endpoint, use an approved network-connected runner; localhost on your laptop is not reachable from GitHub's runner.

## Add the Workflow

Save this as `.github/workflows/rook-assurance.yml`. [Download the workflow](pathname:///support/resources/rook/github-actions.yml).

```yaml
name: Rook assurance
on:
  workflow_dispatch:
permissions:
  contents: read
concurrency:
  group: rook-assurance
  cancel-in-progress: false
jobs:
  assurance:
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-24.04
    timeout-minutes: 30
    environment: rook-assurance
    env:
      ROOK_ENV: prod
      ROOK_HOME: ${{ runner.temp }}/rook-home
      ROOK_PROJECT_ID: ${{ vars.ROOK_PROJECT_ID }}
      ROOK_AGENT_ID: ${{ vars.ROOK_AGENT_ID }}
      ROOK_PROFILE: ${{ vars.ROOK_PROFILE }}
      ROOK_SCENARIO_IDS: ${{ vars.ROOK_SCENARIO_IDS }}
      ROOK_ALLOW_RULES: ${{ vars.ROOK_ALLOW_RULES }}
      ROOK_RUN_NAME: github-${{ github.run_id }}-${{ github.run_attempt }}
    steps:
      - uses: actions/checkout@v7
        with:
          persist-credentials: false
      - name: Install pinned public Rook CLI
        shell: bash
        run: |
          set -euo pipefail
          curl -fsSL https://raw.githubusercontent.com/LambdaTest/rook/main/install.sh \
            -o "$RUNNER_TEMP/install-rook.sh"
          bash "$RUNNER_TEMP/install-rook.sh" --version 0.1.3 --dir "$RUNNER_TEMP/rook-bin"
          echo "$RUNNER_TEMP/rook-bin" >> "$GITHUB_PATH"
          command -v jq
      - name: Run the reviewed suite
        shell: bash
        env:
          LT_USERNAME: ${{ secrets.LT_USERNAME }}
          LT_ACCESS_KEY: ${{ secrets.LT_ACCESS_KEY }}
          AGENT_TOKEN: ${{ secrets.AGENT_TOKEN }}
        run: bash ci/rook-ci.sh
      - name: Preserve results even on failure
        if: always()
        uses: actions/upload-artifact@v7
        with:
          name: rook-${{ github.run_id }}-${{ github.run_attempt }}
          path: rook-results/
          if-no-files-found: warn
          retention-days: 7
```

Change the `main` branch condition if your reviewed default branch has another name. The manual trigger avoids exposing credentials to untrusted pull-request code. Do not replace it with `pull_request_target` plus a checkout of an untrusted PR. Serialize jobs that share test fixtures.

The workflow pins Rook CLI to the public 0.1.3 release and installs it only in the job's temporary directory. Action major versions are shown for readability; review and pin action commit SHAs for your organization's production policy. The hosted Ubuntu runner provides jq. A self-hosted runner needs the same tools and the minimum runtime requirements of the selected actions.

## Run and Check the Workflow

Open **Actions → Rook assurance → Run workflow** on the reviewed branch, then approve the environment if required. Inspect **Run the reviewed suite** for the run ID and verdict counts. The **Preserve results even on failure** step publishes a seven-day artifact from `rook-results/`; an early setup failure can legitimately produce no artifact.

A red assurance step must remain red after uploading evidence. Do not add `continue-on-error` to the gate. If you later make this a required check, ensure its trigger runs for every event where branch protection expects it; a manual-only workflow is not an automatic PR check.

## Troubleshooting GitHub Actions

- **Missing credentials or variables:** check the environment name and approval status, not just repository-level settings.
- **Branch skipped:** match the job's branch condition to your reviewed branch.
- **Runner cannot reach the agent:** use a routable test endpoint or an approved private runner.
- **No evidence artifact:** inspect setup/sync failure first. Only `rook-results/` is uploaded, never home credentials.
- **Permission refusal:** reproduce the requested tool rule locally and approve the exact reviewed rule in `ROOK_ALLOW_RULES`.

The workflow follows [GitHub workflow syntax](https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax), [checkout](https://github.com/actions/checkout), and [artifact upload](https://github.com/actions/upload-artifact) documentation.

## Review Results Locally and on the Web

The gate prints the run ID and saves `run.json`, `report.json`, and, when a run directory exists, `evidence.tar.gz`. Keep failure output too. The archive contains this agent's run folders, not `ROOK_HOME`; a clean checkout avoids including earlier runs. Set retention and access controls because target responses and evidence can contain sensitive data.

To investigate locally, restore the reviewed checkout and extract the **trusted** evidence archive at its repository root, preserving the `.testmuai/rook/projects/…` hierarchy. Select the matching project and agent, then run `rook report <run-id> --json` or `rook ui --local`. Inspect a run's scenario → criteria → files.

<img loading="lazy" src={require('../assets/images/rook/rook-local-evidence.png').default} alt="Local Rook files panel illustrating retained request, response, hook, snapshot, and verdict evidence" width="1440" height="900" className="doc_img"/>

For uploaded results, open [Rook projects](https://rook.lambdatest.com/projects) → project → agent → run. Match the run ID before reviewing **Response**, **Verdict**, and **Artefacts**. A hosted record is useful for sharing, but the pipeline's validated report determines the gate.

<img loading="lazy" src={require('../assets/images/rook/rook-web-run.png').default} alt="Hosted Rook run review illustrating completion, profile, and scenario outcomes" width="1440" height="900" className="doc_img"/>

These are existing smoke-test result captures, not screenshots of this CI integration executing. A local URL on a CI runner is not accessible to teammates; do not expose the local UI publicly. If a hosted upload is missing, retain the evidence and investigate [result synchronization](/support/docs/agent-assurance-troubleshooting/) rather than rerunning paid tests blindly.

## Related Guides

- [CI/CD policy and common setup](/support/docs/agent-assurance-ci-cd/)
- [Profiles, hooks, and phases](/support/docs/rook-profiles-and-hooks/)
- [Public Rook headless contract](https://github.com/LambdaTest/rook/blob/main/skill-installer/skills/references/headless-contract.md)

These are reference integrations for your reviewed environment. Syntax and gate behavior can be validated locally, but a successful deployment/build must be demonstrated in your own configured platform.
