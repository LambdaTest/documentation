---
id: agent-assurance-results-and-evidence
toc_max_heading_level: 2
title: Understand Agent Assurance Results and Evidence
hide_title: false
sidebar_label: Results and Evidence
description: Interpret Agent Assurance verdicts, coverage, evidence, artifacts, trends, and root-cause reports in the terminal and browser viewer.
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
    "description": "Interpret Agent Assurance verdicts, coverage, evidence, artifacts, trends, and root-cause reports in the terminal and browser viewer.",
    "url": "https://www.testmuai.com/support/docs/agent-assurance-results-and-evidence/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Agent Assurance",
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
    "hasPart": [
      {
        "@type": "SoftwareSourceCode",
        "name": "Example",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "8 graded scenarios: 8 passed, 0 failed\n20 criteria: 8 verified, 12 unable to verify\npass rate: 100%\ncoverage: 40%"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "From the TUI",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "/ui"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Print the URL without opening a browser",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "/ui --no-open"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Files Written for a Run",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": ".testmuai/rook/agents/<agent-id>/\n  history.jsonl\n  history/<scenario-id>.jsonl\n  runs/<run-id>/\n    run.yaml\n    scenarios.yaml\n    analysis.yaml\n    report.evidence/\n    remedies/\n    scenarios/<scenario-id>/\n      request.json\n      response.json\n      verdict.yaml\n      artifacts/"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Print the most recent run",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "rook report"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Print a specific run",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "rook report <run-id> --entity <agent-id>"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Machine-readable output",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "rook report <run-id> --entity <agent-id> --json"
      }
    ],
    "dateModified": "2026-08-25T16:54:35+05:30"
  }) }}
/>

# Understand Agent Assurance Results and Evidence

Rook reports what the agent did separately from what the test harness could observe. Read the scenario verdict, criterion evidence, and coverage together.

## Scenario Verdicts

| Verdict | Interpretation |
|---|---|
| **Pass** | The scenario was attempted, every verifiable criterion passed, and no verifiable criterion failed. |
| **Fail** | One or more criteria were observed to fail. |
| **Unable to Verify** | Rook could not establish the outcome. This is excluded from the pass-rate denominator and is not an agent defect. |

For adversarial scenarios, a grounded partial compromise counts as **Fail**. Older runs that stored a **Partial** verdict display it as **Unable to Verify**.

A skipped, unattempted, or unjudged scenario is not a pass. Partial-phase and interrupted runs need a completion check before their results can serve as a gate.

## Pass Rate Versus Coverage

- **Pass rate** is the percentage of graded scenarios that passed.
- **Coverage** is the percentage of individual criteria Rook could verify.

Example:

```text
8 graded scenarios: 8 passed, 0 failed
20 criteria: 8 verified, 12 unable to verify
pass rate: 100%
coverage: 40%
```

A 100% pass rate at 40% coverage is not full assurance. Improve observation until coverage matches the risk of the decision the report needs to support.

## Open the Browser Viewer

From the TUI:

```text
/ui
```

Print the URL without opening a browser:

```text
/ui --no-open
```

The viewer is:

- **Bound to loopback** and server-rendered.
- **Read-only** and makes no external requests.
- **Local**: it reads the project files directly and stops with the Rook process.

The agent page summarizes features, scenarios, profiles, trends, and prior runs.

<img loading="lazy" src={require('../assets/images/rook/rook-browser-agent-detail.png').default} alt="Rook agent detail view with features scenarios run history pass rate and coverage" width="1440" height="900" className="doc_img"/>

The run page shows totals, changes from the previous run, tool-oriented analysis, grouped verification gaps, and every scenario result.

<img loading="lazy" src={require('../assets/images/rook/rook-browser-run-detail.png').default} alt="Rook run page showing pass fail unable to verify and coverage" width="1440" height="900" className="doc_img"/>

## Inspect Criterion Evidence

Open a scenario result to compare:

- The acceptance criterion.
- What Rook concluded happened.
- Direct evidence from the response, tool observation, file, or verifier.
- Confidence and any verification gap.
- The request and full exchange.
- Produced or downloaded artifacts.

<img loading="lazy" src={require('../assets/images/rook/rook-browser-scenario-evidence.png').default} alt="Rook scenario result showing failed acceptance criteria and direct response evidence" width="1440" height="900" className="doc_img"/>

Do not treat a fluent narrative as evidence by itself. Look for one of the following to support the criterion: a quote, a JSON value, an observed call, a filesystem fact, or a read-only external verification.

## Common Unable-to-Verify Reasons

| Gap | What to change |
|---|---|
| Tool call could not be observed | Configure `/profile edit` so tool calls are observable, or add a read-only verifier. |
| Required MCP server unavailable | Inspect `/mcp`, approve or enable the intended definition, and verify it connects. |
| File path was not watched | Add an allowed path to the profile's `observe.filesystem`. |
| Concurrent file writes cannot be attributed | Re-run with `--concurrency 1`. |
| Agent did not report token usage | Set `observe.usage` only if the response genuinely reports it. |
| Image content cannot be read | Use an external image evaluator or accept evidence only for existence and dimensions. |
| Multi-turn state cannot be carried | Configure the conversation session field or command resume flag. |
| Stream cannot be read | Use a JSON/text endpoint or wait for streaming transport support. |
| Verification would change state | Provide a read-only status tool or API. Do not call the write again. |

## Files Written for a Run

```text
.testmuai/rook/projects/<project-id>/agents/<agent-id>/runs/<run-id>/
  run.yaml
  agent.yaml
  features.yaml
  profile.yaml
  report.yaml
  scenario-inventory.yaml
  scenarios/<scenario-id>/
    snapshot.yaml
    request.json
    response.json
    hooks.json
    verdict.yaml
    evidence/
```

<code>run.yaml</code> preserves the plan, selected phases, pinned versions, included/skipped scenarios, and upstream IDs. <code>report.yaml</code> stores the summary and totals. Since 0.1.11, <code>scenario-inventory.yaml</code> pins the definition of every scenario the run considered, including those it could not run, and <code>run.yaml</code> records the run's <code>inventory</code> and <code>coverage_gaps</code>. The run summary is computed from the recorded verdicts; writing it does not call a model. Each scenario's <code>snapshot.yaml</code> preserves its definition; <code>hooks.json</code> preserves phase records. Additional artifacts and RCA files depend on the run.

Completed runs read their scenario snapshot, not the current scenario directory. Editing or deleting a live scenario does not rewrite historical evidence.

## Print a Report in Headless Mode

Launch `rook` in the workspace containing your saved run. In the interactive TUI, select the correct project and agent, then open the report:

```text
/project
/agent
/report <run-id>
```

Replace `<run-id>` with the saved run's ID. `/report` without an ID reads the latest local run. If Rook asks you to sign in, use `/login` and retry the report command. Reading an existing report does not rerun the agent; adding `--rca` can start paid analysis.

This is the completed report from the Rook 0.1.5 [interactive quickstart](/support/docs/agent-assurance-quickstart/), not a help screen:

<img loading="lazy" src={require('../assets/images/rook/guides/rook-tui-report.png').default} alt="Rook's saved first-triage-run report showing one executed and passed scenario, no unverifiable results, and four untested feature areas" width="2200" height="1520" className="doc_img"/>

Read the run ID and name, execution counts, verdicts, and coverage warning together. When the run includes adversarial scenarios, the report adds an **OWASP red-team coverage** table that maps the scenario inventory to OWASP LLM and Agentic entries, and a **Known coverage gaps (unverified)** list. A control with no mapped scenario remains unverified. `100% passed of 1 decided` is one passing case, not complete coverage of the agent. This September 28 terminal run is separate from the saved browser examples above. Use `/help report` for additional output and RCA options.

For shell-based output or automation:

```bash
rook report
```

Without a run ID, <code>report</code> reads the latest local run. The JSON record contains <code>run_id</code>, <code>name</code>, <code>dir</code>, and <code>report</code>, whose <code>totals</code> include planned, executed, passed, failed, unverifiable, unjudged, and not-run counts. The report can also carry <code>summary_claims</code>, <code>coverage_gaps</code>, and <code>redteam_coverage</code>.

A successful report command means the report was read; it does **not** mean the agent passed. See the [CI gate example](/support/docs/agent-assurance-ci-cd/) for explicit completion and result checks.

## Recover Missing Hosted Results

```bash
rook report <run-id> --entity <agent-id>
```

Machine-readable output:

```bash
rook report <run-id> --entity <agent-id> --json
```

## Compare Runs

Run history can identify:

- Newly failing scenarios.
- Fixed scenarios.
- Repeated flips on an unchanged definition, which indicate flakiness.
- Scenario definition changes, which break direct trend comparison.
- Coverage changes, including a suite that appears stable because it lost visibility.

The scenario definition hash distinguishes a behavioral change from a changed test. Re-run unchanged scenarios several times before labeling nondeterminism.

## Use RCA Carefully

`/run --rca` groups failures with shared evidence and writes one hypothesis per cause rather than repeating the same diagnosis for every scenario.

Read a remedy as:

1. The deterministic cluster and affected scenarios.
2. The observed failure evidence.
3. The source the investigation read.
4. A proposed cause and remediation.

The proposed cause is still an inference. Reproduce it independently and add a regression test before changing the agent.

## Sharing Evidence

Project evidence is reviewable as ordinary files. Before you commit or attach it:

- Review requests, responses, artifacts, and scenario goals for secrets or customer data.
- Keep terminal transcripts out of the project; Rook stores sessions globally for this reason.
- Do not render an agent-produced HTML file as a trusted page. The viewer serves artifacts with restrictive content handling.
- Share only the agent and run directories required for the review.
