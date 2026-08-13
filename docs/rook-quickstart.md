---
id: rook-quickstart
title: Test Your First AI Agent With Rook
hide_title: false
sidebar_label: Test Your First Agent
description: Run a complete Rook test journey against the sample triage agent, from discovery to evidence review.
keywords:
  - rook quickstart
  - test ai agent cli
  - ai agent testing tutorial
  - agent test scenarios
url: https://www.testmuai.com/support/docs/rook-quickstart/
site_name: TestMu AI
slug: rook-quickstart/
canonical: https://www.testmuai.com/support/docs/rook-quickstart/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": BRAND_URL },
      { "@type": "ListItem", "position": 2, "name": "Support", "item": `${BRAND_URL}/support/docs/` },
      { "@type": "ListItem", "position": 3, "name": "Rook Quickstart", "item": `${BRAND_URL}/support/docs/rook-quickstart/` }
    ]
  }) }}
/>

# Test Your First AI Agent With Rook

This guide tests the sample `triage-service` end to end. It is a local HTTP agent that reads support tickets, assigns a severity and team, and drafts a reply. The model behavior inside the sample is stubbed, so the target service itself needs no model key.

You will use Rook to discover the service, generate scenarios, create an HTTP invocation profile, run the scenarios, and inspect evidence.

## Prerequisites

- [Rook installed and authenticated](/support/docs/rook-installation/).
- Access to the Rook source repository, which contains `sample/triage-service`.
- Node.js 20 or newer.
- A test environment. Do not use a production agent for this walkthrough.

## Step 1: Start the Sample Agent

Open a terminal and run:

```bash
git clone https://github.com/LambdatestIncPrivate/rook.git
cd rook/sample/triage-service
npm start
```

The service listens on `http://127.0.0.1:9110`. Check it from a second terminal:

```bash
curl -s http://127.0.0.1:9110/healthz
```

Expected response:

```json
{"ok":true}
```

Keep the service running during the test.

## Step 2: Start Rook in the Agent Workspace

In the second terminal:

```bash
cd rook/sample/triage-service
rook
```

Rook shows the six-step journey. Run `/guide` at any time for an explanation or `/help <command>` for flags.

<img loading="lazy" src={require('../assets/images/rook/rook-terminal-guide.png').default} alt="Rook interactive guide explaining the agent testing sequence" width="835" height="1066" className="doc_img"/>

## Step 3: Explore the Codebase

At the Rook prompt, enter:

```text
/explore .
```

Rook scans the current workspace, proposes a plan before spending credits, and asks before tool calls that need permission. Review the proposed read scope and approve it only if it is the directory you intended to inspect.

When discovery completes, Rook registers the triage agent and writes its record below:

```text
.testmuai/rook/agents/<agent-id>/
```

If Rook finds multiple agents, list or select them:

```text
/agent
/agent use <id>
```

## Step 4: Generate Scenarios

Generate the default mix:

```text
/generate
```

Rook uses the discovered features, tools, policies, and known data to generate three classes of scenarios:

- Functional scenarios such as happy paths, invalid requests, and ticket boundaries.
- Non-functional scenarios such as quality, repeatability, and performance.
- Adversarial scenarios such as prompt injection, hallucination, and policy violations.

For a smaller first run, request a fixed total:

```text
/generate --total 12
```

Review what was produced:

```text
/scenarios list
```

<img loading="lazy" src={require('../assets/images/rook/rook-terminal-scenarios.png').default} alt="Rook scenario list showing categories and runnability reasons" width="1100" height="999" className="doc_img"/>

## Step 5: Add an Invocation Profile

Enter:

```text
/profile add
```

Name the profile `local-http`, choose or paste a cURL request, and use this request:

```bash
curl http://127.0.0.1:9110/v1/triage \
  -H 'content-type: application/json' \
  -d '{"input":"please look at T-1043","session_id":"demo"}'
```

Rook identifies which value should receive `{{goal}}`, which fields remain fixed, and where the answer lives in the response. Confirm the mapping only after it shows:

- `input` as the scenario text.
- `session_id` as the per-scenario session handle.
- `$.output` as the extracted result.

Rook invokes the agent once with a harmless goal before making the profile active. If the service is unavailable or the result path is wrong, save the profile and retry later with:

```text
/profile test local-http
```

Inspect the active profile:

```text
/profile show local-http
/profile curl local-http
```

## Step 6: Run One Scenario First

List the scenario IDs and select a harmless functional scenario:

```text
/run --only <selected-scenario-id> --concurrency 1 --no-narrative
```

Replace `<selected-scenario-id>` with the ID shown by `/scenarios list`. IDs are assigned as generation batches finish, so a particular category is not guaranteed to receive `SC-001`.

Before execution, Rook prints:

- The selected scenario count.
- The exact profile target.
- Effective concurrency.
- Estimated credits.
- A warning when the discovered agent declares write-capable tools.

<img loading="lazy" src={require('../assets/images/rook/rook-terminal-run-permission.png').default} alt="Rook permission prompt before running a scenario against an agent with write tools" width="1225" height="676" className="doc_img"/>

Choose **yes** for a one-time grant after confirming the target is the local sample. Do not choose **always** until you understand the exact stored permission.

## Step 7: Run the Suite

After the one-scenario check succeeds, run all runnable scenarios:

```text
/run
```

Rook uses concurrency `3` by default. Set it to `1` when file changes must be attributed to an individual scenario or the target has shared mutable state:

```text
/run --concurrency 1
```

Press `Esc` to interrupt. Rook stops at a scenario boundary and preserves completed results on disk.

## Step 8: Open the Browser Report

Enter:

```text
/ui
```

The local, read-only viewer opens on a loopback URL. It reads `.testmuai/rook/`; it does not upload the report or mutate the workspace.

<img loading="lazy" src={require('../assets/images/rook/rook-browser-agents.png').default} alt="Rook browser view listing discovered agents and their test history" width="1440" height="900" className="doc_img"/>

Open the agent, select a run, and then open a scenario to see its request, response, acceptance criteria, evidence, artifacts, and verification gaps.

<img loading="lazy" src={require('../assets/images/rook/rook-browser-run-detail.png').default} alt="Rook browser run detail showing pass fail and verification coverage" width="1440" height="900" className="doc_img"/>

## Step 9: Read the Result Correctly

- Treat **Fail** as an observed agent defect.
- Treat **Unable to Verify** as a harness or observation gap, not as an agent failure.
- Check coverage before trusting the pass rate.
- Open the criterion evidence instead of relying only on the run summary.
- Run the unchanged scenario more than once before calling nondeterministic behavior fixed or flaky.

For a deeper investigation of failures, run:

```text
/run --only SC-001,SC-004 --rca
```

RCA runs after failure clustering and may consume additional credits. The produced remedy is a hypothesis grounded in the run evidence and source, not an automatically applied fix.

## Step 10: Stop the Sample

Exit Rook:

```text
/exit
```

Return to the terminal running `triage-service` and press `Ctrl+C`.

The evidence remains under `sample/triage-service/.testmuai/rook/` until you remove or archive it.

## Next Steps

- [Connect other agent types](/support/docs/rook-connect-and-explore-agents/)
- [Configure HTTP, command, async, multimodal, or MCP profiles](/support/docs/rook-profiles/)
- [Generate and curate scenarios](/support/docs/rook-scenarios/)
- [Run targeted suites safely](/support/docs/rook-run-tests/)
