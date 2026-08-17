---
id: rook-quickstart
title: Test Your First Autonomous Agent with Rook
hide_title: false
sidebar_label: Test Your First Agent
description: Test an existing remote agent from a PRD and API request without cloning or building Rook.
keywords:
  - rook quickstart
  - autonomous agent testing tutorial
  - test remote ai agent
url: https://www.testmuai.com/support/docs/rook-quickstart/
site_name: TestMu AI
slug: rook-quickstart/
canonical: https://www.testmuai.com/support/docs/rook-quickstart/
---

# Test Your First Autonomous Agent with Rook

This walkthrough tests a refund agent from its PRD and a staging API. It represents a common end-user setup: you have product requirements and access to a live endpoint, but the agent source code is not in your workspace.

Replace the example filenames, URL, token, and JSON fields with values from your own agent.

## What You Need

- [Rook installed](/support/docs/rook-installation/), with <code>rook doctor</code> showing the intended environment.
- A reachable Rook controller and an authenticated LambdaTest account.
- A local PRD or specification for the agent.
- A working staging cURL request.
- Test data that the agent is allowed to read or change.

Do not use a production refund endpoint for this walkthrough.

:::warning Public 0.1.0 limitation
As verified on August 17, 2026, the production controller hostname in public version 0.1.0 is not resolvable, so the model-backed steps in this walkthrough cannot complete with the default production configuration. Do not substitute a private or staging controller unless your Rook administrator explicitly gives you that environment and access. You can still install the CLI, read <code>/guide</code> and <code>/help</code>, run diagnostics, and prepare the PRD and staging request.
:::

## Step 1: Open the Specification Workspace

Open a terminal in the folder that contains your product materials:

~~~text
refund-agent-test/
├── refund-agent-prd.md
└── knowledge/
    └── refund-policy.md
~~~

The folder does not need to contain agent code.

Start Rook:

~~~bash
cd refund-agent-test
rook
~~~

<img loading="lazy" src={require('../assets/images/rook/rook-terminal-home.png').default} alt="Rook terminal home before the first autonomous agent test" width="1111" height="911" className="doc_img"/>

## Step 2: Explore the PRD and Knowledge Base

At the Rook prompt, enter:

~~~text
/explore . -- focus on refund-agent-prd.md and knowledge/refund-policy.md
~~~

For one standalone document, use:

~~~text
/explore refund-agent-prd.md
~~~

Rook reads the selected local materials and proposes the agent it found. Confirm the agent only if the name, purpose, rules, and source files match your intended target.

The discovered record describes expected behavior. It does not prove the live service implements the PRD.

## Step 3: Generate Focused Scenarios

Start with a small, reviewable set:

~~~text
/generate --total 12 -- verify eligibility, required identity checks, duplicate requests, and receipt creation
~~~

List the scenarios:

~~~text
/scenarios list
~~~

Review the exact order IDs, policy thresholds, and expected artifacts. Exclude a scenario that is unsafe for the current environment:

~~~text
/scenarios exclude SC-009
~~~

## Step 4: Add the Staging Profile and Store Its Token

Enter:

~~~text
/profile add
~~~

Name the profile <code>refund-staging</code> and paste a working request such as:

~~~bash
curl https://refund-agent.staging.example.com/v1/chat \
  -H 'content-type: application/json' \
  -H 'authorization: Bearer replace-with-your-token' \
  -d '{"message":"check refund status for order ORD-1042","session_id":"quickstart"}'
~~~

During setup, map:

- <code>message</code> to the scenario goal.
- <code>session_id</code> to the per-scenario conversation handle.
- The actual response field, such as <code>$.reply.text</code>, to the result.

Rook lifts the Authorization credential out of the profile, replaces it with <code>$&#123;ROOK_AGENT_TOKEN&#125;</code>, and securely asks for the value. Use <code>/env list</code> afterward to confirm the generated variable name without printing the secret.

Rook invokes the profile once with a harmless goal. Confirm the extracted answer only if it is the agent's real response, not a request ID or status field.

Inspect the saved profile:

~~~text
/profile show refund-staging
/profile curl refund-staging
~~~

## Step 5: Run One Safe Scenario

Choose one read-only scenario from <code>/scenarios list</code>:

~~~text
/run --only SC-001 --concurrency 1 --no-narrative
~~~

Before confirming, check:

- The selected agent and profile.
- The staging hostname.
- The scenario count.
- The estimated credits.
- Any warning about write-capable tools.

Rook cannot roll back a refund, message, ticket, or other action taken by the agent.

<img loading="lazy" src={require('../assets/images/rook/rook-terminal-run-permission.png').default} alt="Rook run confirmation showing the live target and write warning" width="1225" height="676" className="doc_img"/>

## Step 6: Run the Approved Set

After the first scenario behaves correctly:

~~~text
/run --concurrency 1
~~~

Use concurrency 1 while scenarios share accounts, order records, or mutable state. Increase it only after the target and fixtures are isolated.

Press <code>Esc</code> to abort the active operation. Rook preserves completed scenario results, but the in-flight target call is cancelled and may already have produced an external effect. Inspect target state before retrying a write.

## Step 7: Review Evidence

Open the local viewer:

~~~text
/ui
~~~

<img loading="lazy" src={require('../assets/images/rook/rook-browser-run-detail.png').default} alt="Rook browser run detail with verdicts and verification coverage" width="1440" height="900" className="doc_img"/>

Open each failure or **Unable to Verify** result. Check the request, response, criterion evidence, artifacts, and verification gaps.

- **Fail** means Rook observed a failed criterion.
- **Unable to Verify** means the current profile did not expose enough evidence.
- A claim such as “refund issued” in the agent's text is not independent proof that the refund exists.

Add read-only MCP verification or another safe observation when state changes must be proven.

## Step 8: End the Session

~~~text
/exit
~~~

Results remain below <code>.testmuai/rook/</code> in your specification workspace.

## Next Steps

- [Use Rook with PRDs, knowledge bases, source code, remote agents, and multiple profiles](/support/docs/rook-use-cases/)
- [Configure more profile shapes](/support/docs/rook-profiles/)
- [Open the full command index](/support/docs/rook-command-reference/)
