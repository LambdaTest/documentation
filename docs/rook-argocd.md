---
id: rook-argocd
title: Verify Agent Deployments with Rook and Argo CD
sidebar_label: Argo CD
description: Run Rook as a Kubernetes Job after Argo CD has applied an application and its resources are healthy.
hide_title: false
toc_max_heading_level: 2
slug: rook-argocd/
---

# Verify Agent Deployments with Rook and Argo CD

Run Rook as a Kubernetes Job after Argo CD has applied an application and its resources are healthy. This is a post-deployment assurance check, not a CI build job or an Argo Workflows template. A failed Rook gate marks the sync operation failed; it does not automatically undo the deployment.

## Set This Up with a Coding Agent {#prompt-led-setup}

You can ask Claude Code or another [configured coding assistant](/support/docs/rook-coding-agents/) to prepare this integration in plain language. Paste the prompts into the assistant's chat. **The assistant authors and reviews the pipeline; the runner executes Rook CLI commands.** No coding assistant or skill package is required on the runner.

### 1. Inspect the Existing Setup

```text
Use the rook skill to inspect this repository for Argo CD integration.
Identify the existing pipeline, selected Rook project and agent, tested profile,
reviewed scenario IDs, hooks, possible target writes, and missing prerequisites.
Ask me to confirm the target, exact suite, tool grants, and Rook credit use.
Do not change files, invoke the target, generate scenarios, or trigger a job yet.
```

Provide the agent repository, test target, and your intended suite—not credential values. If no reviewed suite exists, first ask the assistant to help discover the agent, prepare its profile, generate scenarios, and rehearse a small approved test. Do not make CI generation the substitute for that review.

### 2. Ask for the Integration Files

```text
Use the rook skill and the reference files on this page to prepare an Argo CD
PostSync assurance check for the deployed test agent. Preserve existing manifests.
Create or adapt ci/rook.Dockerfile, ci/rook-ci.sh, and the PostSync Job manifest
in the application's rendered path. Use an immutable reviewed-suite image,
secret references, isolated Rook home, and persistent evidence per pod attempt.
Run only the reviewed scenario IDs and profile, with exact tool grants and the
strict verdict policy. Keep automatic Job retries off; explain re-sync costs.
List the required namespace, Secret keys, PVC access, runtime dependencies,
and target URL. Explain that PostSync failure does not roll back the deployment.
Do not build or push an image, apply manifests, sync Argo CD, or run paid tests.
```

Expect a Dockerfile and manifest diff, the existing shared gate script, and an infrastructure checklist. The skill supplies the Rook testing contract; your assistant also needs to follow Argo CD/Kubernetes documentation for deployment details. Do not invent a public prebuilt Rook image or a rollback guarantee.

### 3. Validate Before Enabling

```text
Review the generated integration without contacting the target or starting CI.
Validate syntax with available local tools and test the gate with synthetic
Pass, Fail, Unable to Verify, incomplete, missing, and malformed results.
Check exact scenario selection, current-run identity, secret handling, and
evidence retention on failure. Do not weaken the gate to make checks pass.
Report what was validated locally and what still needs platform verification.
```

Expect reviewed changes to ci/rook.Dockerfile, the PostSync Job manifest, and ci/rook-ci.sh, validation results, and a remaining setup checklist. Do not claim a live integration passed based only on generated code or mocked results.

After review, build and publish the reviewed image through your trusted CI, record its digest, provision the namespace dependencies below, and approve a full application sync. Generating these files does not deploy the hook; selective sync skips hooks.

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

## Choose the Right Hook

Use **PostSync** to test the newly deployed agent. A PreSync hook runs before the new application resources are applied, so it cannot validate a service that exists only after this deployment. Use a separate pre-promotion environment or pipeline if the check must block production rollout.

Argo CD does not run hooks during selective sync. Require a normal full-application sync for this verification, and do not treat a selective sync as having passed Rook. See [Argo CD phases and waves](https://argo-cd.readthedocs.io/en/stable/user-guide/sync-waves/).

## Prepare the Namespace

Before enabling the hook, provision the following in the same application namespace:

- A Secret named `rook-ci-credentials`, managed through your secret-management process, with `LT_USERNAME`, `LT_ACCESS_KEY`, and the target's required keys. The example includes `AGENT_TOKEN`; remove or replace it if your profile differs. Never commit literal credentials.
- A PVC named `rook-evidence`, with enough space, an appropriate retention policy, and write access for UID/GID 10001. For example:

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: rook-evidence
spec:
  accessModes: [ReadWriteOnce]
  resources:
    requests:
      storage: 2Gi
```

This example uses the cluster's default StorageClass. Change it for your storage provisioner. A PVC is persistent storage, not an automatic off-cluster backup; configure backup/export and access controls before using it as release evidence.

The target profile must reach the deployed service through its cluster DNS or a routable test URL. Add appropriate network policy and image-pull credentials for your environment. The job does not need a Kubernetes API token unless your reviewed hooks specifically require one.

## Build a Reviewed-Suite Image

Download the [Dockerfile](pathname:///support/resources/rook/Dockerfile) and save it as `ci/rook.Dockerfile`. Build from the reviewed **agent repository root** after adding `ci/rook-ci.sh` and the committed workspace definitions.

```dockerfile
FROM debian:bookworm-slim
ARG ROOK_VERSION=0.1.3
RUN apt-get update && apt-get install -y --no-install-recommends \
    bash ca-certificates curl jq tar gzip git \
    && curl -fsSL https://raw.githubusercontent.com/LambdaTest/rook/main/install.sh \
       -o /tmp/install-rook.sh \
    && bash /tmp/install-rook.sh --version "$ROOK_VERSION" --dir /usr/local/bin \
    && useradd --create-home --uid 10001 rook
WORKDIR /workspace
# Build with the reviewed repository root as the context; never COPY personal home state.
COPY --chown=10001:10001 .testmuai/rook/ .testmuai/rook/
COPY --chown=10001:10001 ci/rook-ci.sh ci/rook-ci.sh
# Add only reviewed hook scripts and their runtime dependencies if your profile needs them.
USER 10001
ENV ROOK_ENV=prod ROOK_HOME=/tmp/rook-home
ENTRYPOINT ["bash", "ci/rook-ci.sh"]
```

Add only the hook files, agent code, and language runtimes the selected profile actually requires. A remote HTTP profile may need none; a command-based profile does. Keep credentials and old run histories out of the build context and image. Pin your base image by digest according to your organization's policy.

Build, scan, and publish this image through your existing trusted CI. Record its source revision and immutable image digest alongside the application revision. There is no prebuilt public image implied by this example.

## Add the PostSync Job

Put this manifest in the path rendered by your Argo CD Application. [Download the Job manifest](pathname:///support/resources/rook/argocd-job.yaml). Replace the registry/image digest, project ID, agent ID, profile, and scenario list before syncing.

```yaml
apiVersion: batch/v1
kind: Job
metadata:
  name: rook-assurance
  annotations:
    argocd.argoproj.io/hook: PostSync
    argocd.argoproj.io/hook-delete-policy: BeforeHookCreation
spec:
  backoffLimit: 0
  activeDeadlineSeconds: 1800
  template:
    spec:
      restartPolicy: Never
      automountServiceAccountToken: false
      securityContext:
        runAsNonRoot: true
        runAsUser: 10001
        runAsGroup: 10001
        fsGroup: 10001
      containers:
        - name: rook
          # Build this image from the reviewed suite; replace with your registry and digest.
          image: registry.example.com/team/rook-assurance@sha256:REPLACE_IMAGE_DIGEST
          imagePullPolicy: IfNotPresent
          securityContext:
            allowPrivilegeEscalation: false
            capabilities:
              drop: [ALL]
          resources:
            requests:
              cpu: 250m
              memory: 256Mi
            limits:
              cpu: '1'
              memory: 1Gi
          env:
            - name: POD_UID
              valueFrom:
                fieldRef:
                  fieldPath: metadata.uid
            - name: ROOK_RESULTS_DIR
              value: /evidence/$(POD_UID)
            - name: ROOK_RUN_NAME
              value: argocd-$(POD_UID)
            - name: ROOK_PROJECT_ID
              value: REPLACE_PROJECT_ID
            - name: ROOK_AGENT_ID
              value: REPLACE_AGENT_ID
            - name: ROOK_PROFILE
              value: staging
            - name: ROOK_SCENARIO_IDS
              value: SC-001,SC-004,SC-014
            - name: ROOK_ALLOW_RULES
              value: ''
            - name: LT_USERNAME
              valueFrom:
                secretKeyRef:
                  name: rook-ci-credentials
                  key: LT_USERNAME
            - name: LT_ACCESS_KEY
              valueFrom:
                secretKeyRef:
                  name: rook-ci-credentials
                  key: LT_ACCESS_KEY
            - name: AGENT_TOKEN
              valueFrom:
                secretKeyRef:
                  name: rook-ci-credentials
                  key: AGENT_TOKEN
          volumeMounts:
            - name: evidence
              mountPath: /evidence
      volumes:
        - name: evidence
          persistentVolumeClaim:
            claimName: rook-evidence
```

The pod UID gives each attempt a distinct evidence directory on the PVC. `backoffLimit: 0` prevents Kubernetes from automatically retrying a paid test; the deadline bounds the job's lifetime. Argo CD sync retries and manual re-syncs can still start new paid runs. Make those retries deliberate.

`BeforeHookCreation` replaces the previous named Job on the next sync. Evidence on the PVC survives that Job replacement. The example does not delete successful/failed hook Jobs immediately, so their status and logs remain inspectable until the next attempt. A hard kill or node failure can prevent the shell's exit trap from finishing the evidence archive; retain partial JSON and central logs, and do not treat missing evidence as success.

## Verify the Deployment Outcome

After a full sync, inspect the `rook-assurance` Job in the Argo CD resource tree and the `rook` container logs. A successful Kubernetes Job means the gate exited zero; a failed Job requires inspecting the Rook outcome and evidence, not just retrying the deployment.

Retrieve `/evidence/<pod-uid>/` through your approved PVC backup/export or read-only maintenance-pod process. A completed pod cannot be relied on for `kubectl exec` or `kubectl cp`. Keep the PVC and its evidence after deleting a Job, and ensure later pruning does not remove your only copy.

## Troubleshooting Argo CD

- **Hook never starts:** check application health, the hook annotation, and whether selective sync bypassed hooks.
- **Image pull fails:** replace the example registry/digest and configure namespace image-pull access.
- **Pod remains pending:** inspect PVC binding, scheduling, and storage access mode.
- **Evidence permission denied:** verify volume ownership and the storage driver's `fsGroup` support.
- **Target unavailable:** confirm the profile points at the deployed service, not a developer's localhost.
- **Sync failed after rollout:** the application may still be running; use your existing rollback/promotion policy. A PostSync failure is not automatic rollback.

See [Argo CD hook lifecycle](https://argo-cd.readthedocs.io/en/stable/user-guide/sync-waves/) for hook ordering, failure behavior, and deletion policies.

## Review Results Locally and on the Web

Ask your coding assistant to investigate a downloaded/exported result without starting another test:

```text
Use the rook skill to inspect the saved artifacts from this Argo CD attempt.
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
