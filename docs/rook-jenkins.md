---
id: rook-jenkins
title: Run Rook in Jenkins
sidebar_label: Jenkins
description: Use a Jenkins declarative Pipeline to run a reviewed Rook suite and archive its results.
hide_title: false
toc_max_heading_level: 2
slug: rook-jenkins/
---

# Run Rook in Jenkins

Use a Jenkins declarative Pipeline to run a reviewed Rook suite and archive its results. Jenkins executes the CLI directly; no coding assistant, skill package, or Rook-specific Jenkins plugin is required.

## Set This Up with a Coding Agent {#prompt-led-setup}

You can ask Claude Code or another [configured coding assistant](/support/docs/rook-coding-agents/) to prepare this integration in plain language. Paste the prompts into the assistant's chat. **The assistant authors and reviews the pipeline; the runner executes Rook CLI commands.** No coding assistant or skill package is required on the runner.

### 1. Inspect the Existing Setup

```text
Use the rook skill to inspect this repository for Jenkins integration.
Identify the existing pipeline, selected Rook project and agent, tested profile,
reviewed scenario IDs, hooks, possible target writes, and missing prerequisites.
Ask me to confirm the target, exact suite, tool grants, and Rook credit use.
Do not change files, invoke the target, generate scenarios, or trigger a job yet.
```

Provide the agent repository, test target, and your intended suite—not credential values. If no reviewed suite exists, first ask the assistant to help discover the agent, prepare its profile, generate scenarios, and rehearse a small approved test. Do not make CI generation the substitute for that review.

### 2. Ask for the Integration Files

```text
Use the rook skill and the reference files on this page to add a Jenkins
Rook gate to this repository. Preserve the existing pipeline stages.
Create or adapt Jenkinsfile and ci/rook-ci.sh for a disposable Linux build agent.
Use scoped Credentials Binding, a build-specific checkout, isolated Rook home,
a timeout, and concurrency controls for the test fixtures.
Run only the selected saved scenarios against the reviewed profile with exact
tool grants, the pinned public CLI, and the strict verdict policy.
Archive evidence even when the gate fails; do not convert that failure to success.
Show the diff, runner prerequisites, and credential IDs without secret values.
Do not push, configure Jenkins, start a build, or run paid tests.
```

Expect a Jenkinsfile diff plus a checklist of node labels, required tools, credential IDs/types, network access, and artifact retention. The examples below show what Jenkins executes; you can ask the assistant to adapt them without translating the request into Rook commands.

### 3. Validate Before Enabling

```text
Review the generated integration without contacting the target or starting CI.
Validate syntax with available local tools and test the gate with synthetic
Pass, Fail, Unable to Verify, incomplete, missing, and malformed results.
Check exact scenario selection, current-run identity, secret handling, and
evidence retention on failure. Do not weaken the gate to make checks pass.
Report what was validated locally and what still needs platform verification.
```

Expect reviewed changes to Jenkinsfile and ci/rook-ci.sh, validation results, and a remaining setup checklist. Do not claim a live integration passed based only on generated code or mocked results.

After review, configure the trusted Pipeline job, credentials, and runner below, then choose **Build Now** for the first approved build. Generating a Jenkinsfile does not configure your Jenkins server or prove the suite passed.

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

## Configure Jenkins

1. Use a Pipeline job pointing at a reviewed branch. Do not provide these credentials to jobs running untrusted PR code.
2. Provide a disposable Linux agent with label `rook-linux`, Bash, jq, tar, curl, Git, and network access to the public Rook service and your test target.
3. Install the standard Pipeline, Git, and Credentials Binding capabilities needed by this Jenkinsfile.
4. Add **Secret text** credentials with IDs `rook-lt-username` and `rook-lt-access-key`. Add `rook-agent-token` only if your profile needs that target credential.
5. Replace the project/agent placeholders, profile, selected scenario IDs, and tool grants in the Jenkinsfile. An empty grants value does not automatically authorize prompted operations.

## Add the Jenkinsfile

Commit this at your repository root beside the reviewed definitions and `ci/rook-ci.sh`. [Download the Jenkinsfile](pathname:///support/resources/rook/Jenkinsfile).

```groovy
pipeline {
  agent { label 'rook-linux' }
  options {
    skipDefaultCheckout(true)
    disableConcurrentBuilds()
    timeout(time: 30, unit: 'MINUTES')
  }
  environment {
    ROOK_ENV = 'prod'
    ROOK_PROJECT_ID = 'REPLACE_PROJECT_ID'
    ROOK_AGENT_ID = 'REPLACE_AGENT_ID'
    ROOK_PROFILE = 'staging'
    ROOK_SCENARIO_IDS = 'SC-001,SC-004,SC-014'
    ROOK_ALLOW_RULES = ''
  }
  stages {
    stage('Reviewed checkout and assurance') {
      steps {
        // A new directory per build avoids stale result files in reused workspaces.
        dir("rook-job-${env.BUILD_NUMBER}") {
          checkout scm
          withCredentials([
            string(credentialsId: 'rook-lt-username', variable: 'LT_USERNAME'),
            string(credentialsId: 'rook-lt-access-key', variable: 'LT_ACCESS_KEY'),
            string(credentialsId: 'rook-agent-token', variable: 'AGENT_TOKEN')
          ]) {
            sh '''#!/usr/bin/env bash
set -euo pipefail
set +x
job_temp=$(mktemp -d "${TMPDIR:-/tmp}/rook-jenkins.XXXXXX")
export ROOK_HOME="$job_temp/home"
export ROOK_RUN_NAME="jenkins-$BUILD_NUMBER"
curl -fsSL https://raw.githubusercontent.com/LambdaTest/rook/main/install.sh \
  -o "$job_temp/install-rook.sh"
bash "$job_temp/install-rook.sh" --version 0.1.3 --dir "$job_temp/bin"
export PATH="$job_temp/bin:$PATH"
bash ci/rook-ci.sh
'''
          }
        }
      }
    }
  }
  post {
    always {
      dir("rook-job-${env.BUILD_NUMBER}") {
        archiveArtifacts artifacts: 'rook-results/**', allowEmptyArchive: true
      }
    }
  }
}
```

The pipeline uses a build-specific checkout directory and temporary Rook home. Use disposable agents or your organization's secure temporary-directory cleanup policy so credentials and transcripts do not remain on a shared machine after a job. `disableConcurrentBuilds()` serializes this job, not every other job targeting the same fixtures.

The shell script is single-quoted in Groovy so secrets are expanded by Bash, not interpolated into Groovy strings. Shell tracing is disabled. Jenkins masking is a safeguard, not permission to print secrets.

## Run and Inspect the Build

Run **Build Now** for the trusted job. A successful build requires the complete selected suite to satisfy the strict gate. A failed shell step leaves the build failed while `post { always { … } }` archives results.

Open the build's **Artifacts** and download `rook-results/run.json`, `report.json`, and `evidence.tar.gz` when present under the build-specific directory. Configure Jenkins build/artifact retention and access control for your team's evidence policy.

Rook's JSON report is not JUnit XML. This example uses `archiveArtifacts`, not a `junit` publisher. If you build a JUnit adapter later, preserve Unable to Verify and incomplete outcomes instead of reporting them as passed tests.

## Troubleshooting Jenkins

- **Job waits for an executor:** provision a node matching `rook-linux`.
- **Credential binding fails:** verify the credential IDs, Secret text type, and folder/job access.
- **Interpreter or jq missing:** install the prerequisites in the agent image, not on the Jenkins controller.
- **Job cannot reach the target:** check networking from the build agent.
- **Stale output directory:** use a new build/checkout; do not reuse a prior successful report.
- **Artifacts absent:** inspect checkout, installation, authentication, and sync before assuming a test ran.

See [Jenkins Pipeline and credential handling](https://www.jenkins.io/doc/book/pipeline/jenkinsfile/) for the platform behavior used here.

## Review Results Locally and on the Web

Ask your coding assistant to investigate a downloaded/exported result without starting another test:

```text
Use the rook skill to inspect the saved artifacts from this Jenkins attempt.
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
