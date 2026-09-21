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

The gate prints the run ID and saves `run.json`, `report.json`, and, when a run directory exists, `evidence.tar.gz`. Keep failure output too. The archive contains this agent's run folders, not `ROOK_HOME`; a clean checkout avoids including earlier runs. Set retention and access controls because target responses and evidence can contain sensitive data.

To investigate locally, restore the reviewed checkout and extract the **trusted** evidence archive at its repository root, preserving the `.testmuai/rook/projects/…` hierarchy. Select the matching project and agent, then run `rook report <run-id> --json` or `rook ui --local`. Inspect a run's scenario → criteria → files.

<img loading="lazy" src={require('../assets/images/rook/rook-local-evidence.png').default} alt="Local Rook files panel illustrating retained request, response, hook, snapshot, and verdict evidence" width="1440" height="900" className="doc_img"/>

For uploaded results, open [Rook projects](https://rook.lambdatest.com/projects) → project → agent → run. Match the run ID before reviewing **Response**, **Verdict**, and **Artefacts**. A hosted record is useful for sharing, but the pipeline's validated report determines the gate.

<img loading="lazy" src={require('../assets/images/rook/rook-web-run.png').default} alt="Hosted Rook run review illustrating completion, profile, and scenario outcomes" width="1440" height="900" className="doc_img"/>

These are existing smoke-test result captures, not screenshots of this CI integration executing. A local URL on a CI runner is not accessible to teammates; do not expose the local UI publicly. If a hosted upload is missing, retain the evidence and investigate [result synchronization](/support/docs/rook-web-ui/#troubleshooting) rather than rerunning paid tests blindly.

## Related Guides

- [CI/CD policy and common setup](/support/docs/agent-assurance-ci-cd/)
- [Profiles, hooks, and phases](/support/docs/rook-profiles-and-hooks/)
- [Public Rook headless contract](https://github.com/LambdaTest/rook/blob/main/skill-installer/skills/references/headless-contract.md)

These are reference integrations for your reviewed environment. Syntax and gate behavior can be validated locally, but a successful deployment/build must be demonstrated in your own configured platform.
