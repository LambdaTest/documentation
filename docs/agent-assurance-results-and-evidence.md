---
id: agent-assurance-results-and-evidence
toc_max_heading_level: 2
title: Understand Agent Assurance Results and Evidence
hide_title: false
sidebar_label: Results and Evidence
description: Review Rook verdicts, completion, coverage, hook evidence, and artifacts in the hosted Web UI, local viewer, or CLI report.
keywords:
  - rook report
  - ai agent test evidence
  - unable to verify
  - ai agent test results
url: https://www.testmuai.com/support/docs/agent-assurance-results-and-evidence/
site_name: TestMu AI
slug: agent-assurance-results-and-evidence/
canonical: https://www.testmuai.com/support/docs/agent-assurance-results-and-evidence/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import VerifiedTag from '@site/src/component/verifiedTag';

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": BRAND_URL },
      { "@type": "ListItem", "position": 2, "name": "Support", "item": `${BRAND_URL}/support/docs/` },
      { "@type": "ListItem", "position": 3, "name": "Results and Evidence", "item": `${BRAND_URL}/support/docs/agent-assurance-results-and-evidence/` }
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
      "@id": "https://www.testmuai.com/support/docs/agent-assurance-results-and-evidence/"
    },
    "headline": "Understand Agent Assurance Results and Evidence",
    "description": "Review Rook verdicts, completion, coverage, hook evidence, and artifacts in the hosted Web UI, local viewer, or CLI report.",
    "url": "https://www.testmuai.com/support/docs/agent-assurance-results-and-evidence/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Agent Assurance Platform",
    "keywords": [
      "rook report",
      "ai agent test evidence",
      "unable to verify"
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

# Understand Agent Assurance Results and Evidence

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

On a run's scenario result, **criteria** shows the expected and achieved outcomes and supporting evidence. Scroll to **sent to the agent**, **what came back**, and **files** for the request, response, and raw records. These are sections of one page, not tabs. Click a file to inspect it and use Back to return.

<img loading="lazy" src={require('../assets/images/rook/rook-local-result.png').default} alt="Local Rook scenario result with passing status and criterion-by-criterion evidence" className="doc_img"/>

This view can show evidence before upload, including a local `--test` run. Refresh after files change. An absent verdict or file means it was not recorded or is unavailable; do not turn that absence into a pass. See [local navigation and files](/support/docs/rook-web-ui/#local-results).

### In the Hosted Web UI

Open the scenario **from its run**, then use **Request**, **Response**, **Verdict**, and **Artefacts**. The criterion cards show expected, achieved, evidence, and confidence where available. The scenario catalog instead shows the current definition and history.

<img loading="lazy" src={require('../assets/images/rook/rook-web-result-verdict.png').default} alt="Hosted Rook Verdict tab with verdict.yaml and acceptance-criterion evidence" className="doc_img"/>

Only uploaded evidence is available here. Check the recorded run version and profile, not just today's agent summary. If aggregate percentages disagree with the run's counts, inspect the criterion records and local report; see the documented [screenshot display notes](/support/docs/rook-web-ui/#screenshot-display-notes).

## Fix Verification Gaps

| Gap | Next action |
|---|---|
| Tool calls are unavailable | Use <code>profile fix</code> or edit the hook to return actual <code>calls</code>; test it again. |
| Criteria expect fields absent from the answer | Align the criterion and returned evidence; do not silently weaken the business requirement. |
| Delayed traces or files have not arrived | Add a <code>collect</code> hook and continue the same run with <code>--run</code>. |
| Target usage is missing | Return observed <code>usage</code> only if the target provides it. |
| Multi-turn context is unavailable | Implement real session handling and return a <code>conversation</code> handle. |
| Required MCP verifier is unavailable | Check its definition, connection, and approval with <code>rook mcp</code>. |
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
  scenarios/<scenario-id>/
    snapshot.yaml
    request.json
    response.json
    hooks.json
    verdict.yaml
    evidence/
```

<code>run.yaml</code> preserves the plan, selected phases, pinned versions, included/skipped scenarios, and upstream IDs. <code>report.yaml</code> stores the summary and totals. Each scenario's <code>snapshot.yaml</code> preserves its definition; <code>hooks.json</code> preserves phase records. Additional artifacts and RCA files depend on the run.

Editing today's scenario or profile does not rewrite the saved input snapshots of an earlier run. Local run IDs and hosted IDs can differ; use the links supplied by the UI rather than constructing URLs from local directory names.

## Print or Export a Report

Select the correct project and agent first:

```bash
rook project use <project-id>
rook agent use <agent-id>
rook runs
rook report <run-id>
rook report <run-id> --json
```

Without a run ID, <code>report</code> reads the latest local run. In 0.1.3, the JSON record contains <code>run_id</code>, <code>name</code>, <code>dir</code>, and <code>report</code>, whose <code>totals</code> include planned, executed, passed, failed, unverifiable, unjudged, and not-run counts.

A successful report command means the report was read; it does **not** mean the agent passed. See the [CI gate example](/support/docs/agent-assurance-ci-cd/) for explicit completion and result checks.

## Recover Missing Hosted Results

```bash
rook status
rook sync
rook runs sync
rook ui
```

<code>sync</code> publishes project definitions; <code>runs sync</code> reconciles finished runs with outstanding uploads. Confirm the same account, environment, project, and agent in the CLI and browser. Runs created with <code>--test</code> deliberately stay off the shared timeline.

## Compare Runs and Use RCA

Before calling a change a regression, compare scenario definitions, profile revisions, selected phases, and coverage. Repeat unchanged cases when investigating nondeterminism.

Use <code>rook report &lt;run-id&gt; --rca</code> or <code>rook run --rca</code> for failure-cluster investigation. RCA spends credits and provides an evidence-grounded hypothesis—not a verified fix. Reproduce the issue before changing the agent.

## Share Evidence Safely

Share a hosted run link with teammates who have access to the same environment and project. It is not an anonymous public report.

Review local requests, responses, goals, traces, and artifacts for secrets and customer data before uploading or committing them. Do not publish the global Rook credential store or terminal session logs. Treat agent-produced HTML and files as untrusted content.
