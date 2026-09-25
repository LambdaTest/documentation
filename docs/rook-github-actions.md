---
id: rook-github-actions
title: Run Rook in GitHub Actions
sidebar_label: GitHub Actions
description: Run a reviewed Rook suite from a manually triggered GitHub Actions workflow.
hide_title: false
toc_max_heading_level: 2
slug: rook-github-actions/
---

# Run Rook in GitHub Actions

Run a reviewed Rook suite from a manually triggered GitHub Actions workflow. This example uses the public CLI, a protected environment, explicit scenario selection, and evidence upload even when the gate fails. It does not install a coding-agent skill or require a dedicated Rook action.

## Set This Up with a Coding Agent {#prompt-led-setup}

You can ask Claude Code or another [configured coding assistant](/support/docs/rook-coding-agents/) to prepare this integration in plain language. Paste the prompts into the assistant's chat. **The assistant authors and reviews the pipeline; the runner executes Rook CLI commands.** No coding assistant or skill package is required on the runner.

### 1. Inspect the Existing Setup

```text
Use the rook skill to inspect this repository for GitHub Actions integration.
Identify the existing pipeline, selected Rook project and agent, tested profile,
reviewed scenario IDs, hooks, possible target writes, and missing prerequisites.
Ask me to confirm the target, exact suite, tool grants, and Rook credit use.
Do not change files, invoke the target, generate scenarios, or trigger a job yet.
```

Provide the agent repository, test target, and your intended suite—not credential values. If no reviewed suite exists, first ask the assistant to help discover the agent, prepare its profile, generate scenarios, and rehearse a small approved test. Do not make CI generation the substitute for that review.

### 2. Ask for the Integration Files

```text
Use the rook skill and the reference files on this page to add a GitHub Actions
Rook gate to this repository. Preserve any existing workflow responsibilities.
Create or adapt .github/workflows/rook-assurance.yml and ci/rook-ci.sh.
Use a manual trigger on the reviewed default branch, a protected rook-assurance
environment, read-only repository permissions, and isolated temporary Rook state.
Run only the selected saved scenarios against the reviewed test profile.
Keep exact reviewed tool grants, the pinned public CLI, and the strict verdict
policy. Always preserve evidence without turning a failed gate green.
Show the diff and required secret/variable names, never their values.
Do not push files, configure GitHub, trigger a workflow, or run paid tests.
```

Expect a workflow diff and a checklist for the protected environment, branch restriction, credentials, target reachability, and artifact retention. The downloadable examples below are the reference implementation, not additional commands you need to type into the assistant.

### 3. Validate Before Enabling

```text
Review the generated integration without contacting the target or starting CI.
Validate syntax with available local tools and test the gate with synthetic
Pass, Fail, Unable to Verify, incomplete, missing, and malformed results.
Check exact scenario selection, current-run identity, secret handling, and
evidence retention on failure. Do not weaken the gate to make checks pass.
Report what was validated locally and what still needs platform verification.
```

Expect reviewed changes to .github/workflows/rook-assurance.yml and ci/rook-ci.sh, validation results, and a remaining setup checklist. Do not claim a live integration passed based only on generated code or mocked results.

After review, configure the environment and secrets below, merge through your normal process, and use **Actions → Rook assurance → Run workflow** for the first approved run. A generated workflow is not an executed assurance test.

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

Ask your coding assistant to investigate a downloaded/exported result without starting another test:

```text
Use the rook skill to inspect the saved artifacts from this GitHub Actions attempt.
Match the job or deployment attempt to run.json, report.json, and saved verdicts.
Explain whether the failure was setup, authorization, an incomplete run, a failed
criterion, Unable to Verify, or a compromised result. Quote the available evidence.
Suggest the smallest next step and help me open the local UI for restored evidence
or locate the uploaded run online. Do not rerun, resync a deployment, change the
gate, or start paid RCA without separate approval.
```

Use trusted artifacts in an isolated copy of the reviewed workspace; inspect archive paths before extraction and do not overwrite unrelated work. Reading evidence does not require invoking its hook scripts.

The gate prints the run ID and saves `run.json`, `report.json`, and, when a run directory exists, `evidence.tar.gz`. Keep failure output too. The archive contains this agent's run folders, not `ROOK_HOME`; a clean checkout avoids including earlier runs. Set retention and access controls because target responses and evidence can contain sensitive data.

To investigate locally, restore the reviewed checkout and extract the **trusted** evidence archive at its repository root, preserving the `.testmuai/rook/projects/…` hierarchy. Select the matching project and agent, then run `rook report <run-id> --json` or `rook ui --local`. Open the run's scenario, read **Acceptance criteria**, and choose **Request**, **Response**, **Verdict**, or **Artefacts** in **Evidence**. Keep the full archive: hook records, snapshots, and nested files are not all listed in the drawer. See the [earlier local layout](/support/docs/rook-web-ui/#earlier-local-ui) if your CLI predates this viewer.

<img loading="lazy" src={require('../assets/images/rook/rook-local-evidence.png').default} alt="Local Rook Artefacts drawer illustrating retained CommerceCare collect and judge evidence" width="1440" height="900" className="doc_img"/>

For uploaded results, open [Rook projects](https://rook.lambdatest.com/projects) → project → agent → Runs → run → scenario. Match the run ID before choosing **Response**, **Verdict**, or **Artefacts** in the **Evidence** drawer. A hosted record is useful for sharing, but the pipeline's validated report determines the gate.

<img loading="lazy" src={require('../assets/images/rook/rook-web-run.png').default} alt="Hosted Rook run review illustrating completion, profile, and scenario outcomes" width="1440" height="900" className="doc_img"/>

These are saved demo results—CommerceCare locally and the separate triage example online—not screenshots of this CI integration executing. A local URL on a CI runner is not accessible to teammates; do not expose the local UI publicly. If a hosted upload is missing, retain the evidence and investigate [result synchronization](/support/docs/rook-web-ui/#troubleshooting) rather than rerunning paid tests blindly.

## Related Guides

- [CI/CD policy and common setup](/support/docs/agent-assurance-ci-cd/)
- [Profiles, hooks, and phases](/support/docs/rook-profiles-and-hooks/)
- [Public Rook headless contract](https://github.com/LambdaTest/rook/blob/main/skill-installer/skills/references/headless-contract.md)

These are reference integrations for your reviewed environment. Syntax and gate behavior can be validated locally, but a successful deployment/build must be demonstrated in your own configured platform.
