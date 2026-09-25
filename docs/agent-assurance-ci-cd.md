---
id: agent-assurance-ci-cd
toc_max_heading_level: 2
title: Run Agent Assurance in CI/CD
hide_title: false
sidebar_label: CI/CD and Automation
description: Run Rook 0.1.3 in CI with environment credentials, pinned public installation, explicit permissions, completion checks, and preserved evidence.
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
import VerifiedTag from '@site/src/component/verifiedTag';

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

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/agent-assurance-ci-cd/"
    },
    "headline": "Run Agent Assurance in CI/CD",
    "description": "Run Rook 0.1.3 in CI with environment credentials, pinned public installation, explicit permissions, completion checks, and preserved evidence.",
    "url": "https://www.testmuai.com/support/docs/agent-assurance-ci-cd/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Agent Assurance",
    "keywords": [
      "rook ci cd",
      "ai agent testing github actions",
      "rook headless"
    ],
    "proficiencyLevel": "Beginner",
    "author": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "url": "https://www.testmuai.com/"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
      "url": "https://www.testmuai.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testmuai.com/logo.png"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testmu-ai/",
        "https://x.com/testmuai",
        "https://www.youtube.com/@TestMuAI"
      ]
    },
    "dateModified": "2026-09-11"
  }) }}
/>

# Run Agent Assurance in CI/CD

Use CI only after the same agent, profile, and scenarios work locally. Commit reviewed definitions and hook scripts; keep model-driven discovery and generation separate from the release gate.

This recipe targets **Rook 0.1.3**. It runs an explicit suite, preserves evidence, and checks completion and verdict counts instead of interpreting a successful CLI process as a successful agent test.

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

These guides share a downloadable [reviewed-suite gate script](pathname:///support/resources/rook/rook-ci.sh), which you review and commit as `ci/rook-ci.sh` in your agent repository. It calls the CLI directly; a coding-agent skill is not required on the runner. For interactive authoring, use the [coding-agent setup guides](/support/docs/rook-coding-agents/).

### Choose a Verdict Policy Deliberately

The dedicated platform examples use a **strict release gate**: every explicitly selected scenario must pass, and missing evidence, Unable to Verify, incomplete work, or compromised results block the job. Blocking the job does not relabel an Unable to Verify verdict as Fail.

The [public skill's general CI recipe](https://github.com/LambdaTest/rook/blob/main/skill-installer/skills/references/ci.md) is more permissive: it reports Unable to Verify and unrunnable gaps without failing on those outcomes alone. Choose and review the policy for your application; do not silently switch policies to get a green build. All versions must check completion, use the current run ID, preserve evidence, and reject malformed or missing result fields.

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

<code>RUNNER_TEMP</code> is a GitHub Actions runner variable. On another CI platform, substitute its job-specific temporary directory. The installer uses public releases and verifies their SHA-256 checksums; no source-repository token is required.

See [release notes](https://github.com/LambdaTest/rook/releases/tag/v0.1.3) before changing the pin.

## Authenticate Without a Browser

Provide <code>LT_USERNAME</code> and <code>LT_ACCESS_KEY</code> from your CI secret manager. Rook 0.1.3 accepts this pair for unattended authentication; a copied personal OAuth credential directory is not required.

```bash
export ROOK_ENV=prod
export ROOK_HOME="$RUNNER_TEMP/rook-home"
rook whoami
rook doctor
```

Use credentials valid for the selected environment. Public installations default to production unless <code>ROOK_ENV</code> is set. Target-agent credentials, such as <code>AGENT_TOKEN</code>, are separate from Rook account credentials.

The LT environment pair takes precedence over stored browser login, even with a different <code>ROOK_HOME</code>. A missing half of the pair is an error. Never print either value or pass literal secrets in logged command arguments.

## Select the Project and Profile

Run from the workspace containing the committed <code>.testmuai/rook/</code> files:

```bash
rook project use <project-id>
rook agent use <agent-id>
rook profile use staging
rook scenarios list
rook sync
```

Replace the IDs with your reviewed project and local agent. Do not use the retired <code>--entity</code> flag.

A normal run needs a synchronized version. An intentional <code>--test</code> run stays off the shared timeline and should not be substituted silently when sync fails.

## Authorize Only the Reviewed Work

Unattended commands cannot answer permission prompts. Use the exact rule Rook requested during your local rehearsal:

```bash
rook run --only SC-001,SC-004,SC-014 \
  --profile staging --concurrency 1 --name release-gate \
  --allow '<exact-reviewed-rule>' --json > rook-run.json
```

Replace the rule placeholder with the actual tool-and-target rule for your hook. Repeat <code>--allow</code> if several operations are required. HTTP, command, and MCP integrations do not necessarily request the same rule.

Avoid blanket <code>--yes</code> for a release gate. Grants add authority; they do not sandbox the process or revoke broader saved grants. Keep the runner's state and credentials isolated.

Use an explicit shell error policy, such as <code>set -euo pipefail</code> in Bash. Do not use <code>2>&1</code> when redirecting JSON: progress and diagnostic output belongs on stderr.

## Gate on Completion and Verdicts

In 0.1.3, <code>rook run --json</code> produces one JSON document on stdout, not NDJSON. The document includes <code>ok</code>, <code>run_id</code>, <code>halted</code>, and, when available, <code>report.totals</code>.

A process exit code of zero is **not** an agent-quality gate. The current run/report paths do not implement the older documented 0/1/2/3/4 verdict mapping. A halted run or a run with failed verdicts can still produce an outcome document. Inspect its contents.

Save this as <code>check-rook-result.cjs</code> and run it after the command above:

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

Always retain <code>rook-run.json</code> and the relevant run directory, including when the job fails:

```text
.testmuai/rook/projects/<project-id>/agents/<agent-id>/runs/
```

In GitHub Actions, put evidence upload in a step with <code>if: always()</code>; see the [workflow syntax reference](https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax). Do not upload <code>ROOK_HOME</code>, shell environments, or credential files.

To retry outstanding result uploads and open the hosted view:

```bash
rook runs sync
rook ui --no-open
```

Share the run URL with authorized teammates. Open shared projects at [rook.lambdatest.com/projects](https://rook.lambdatest.com/projects). See [Web UI troubleshooting](/support/docs/rook-web-ui/#troubleshooting) if counts or results differ from the local report.

For local investigation, restore the approved workspace evidence with its project/agent directory structure intact, select that project, and run `rook ui --local` on your workstation. Open agent → runs → run → scenario to inspect criteria and files. A loopback URL printed on a CI runner is not a report your teammates can open; do not expose that server publicly. Keep the serving process running only during review.

The [local and hosted UI guide](/support/docs/rook-web-ui/#choose-your-ui) explains both paths. Neither interface replaces the JSON completion and verdict checks used by the CI gate.

### Local UI: Investigate Retained Evidence {#local-ui-example}

Open a restored run's scenario and choose **Request**, **Response**, **Verdict**, or **Artefacts** in **Evidence**. Keep the original run directory: hook records, snapshots, and nested files are not all listed in the drawer. This screenshot uses saved CommerceCare demo evidence, not a CI execution. See the [earlier local layout](/support/docs/rook-web-ui/#earlier-local-ui) if your CLI predates the redesigned viewer.

<img loading="lazy" src={require('../assets/images/rook/rook-local-evidence.png').default} alt="Local Artefacts drawer illustrating review of retained collect.json and judge-working.json evidence" width="1440" height="900" className="doc_img"/>

### Hosted Web UI: Share the Recorded Outcome {#hosted-ui-example}

Open an uploaded run to verify its completion state, profile, and scenario outcomes before sharing the link. This separate hosted example shows the triage smoke run. For CI-produced runs, use their own recorded IDs and pinned definitions; do not infer success from a job's exit code alone.

<img loading="lazy" src={require('../assets/images/rook/rook-web-run.png').default} alt="Hosted smoke-run review showing completion, invocation profile, and its recorded scenario outcome" width="1440" height="900" className="doc_img"/>

## Separate Generation From the Gate

Run generation in a separately approved workflow:

```bash
rook explore . --force -- "focus on changed refund approval rules"
rook generate --total 10 --class functional,adversarial -- "cover the changed rules"
```

Review the resulting diff, test the profile, and sync before changing the required gate. Generation is model-backed and can spend credits; it is not a deterministic assertion step.
