---
id: agent-assurance-quickstart
title: How to Get Started With Agent Assurance
hide_title: false
sidebar_label: Quickstart
description: Install and authenticate the Agent Assurance CLI (rook), then test your first autonomous agent from a PRD and a live staging API. No source code or model API key required.
keywords:
  - agent assurance getting started
  - install rook cli
  - rook authentication
  - rook quickstart
  - autonomous agent testing tutorial
  - test remote ai agent
url: https://www.testmuai.com/support/docs/agent-assurance-quickstart/
site_name: TestMu AI
slug: agent-assurance-quickstart/
canonical: https://www.testmuai.com/support/docs/agent-assurance-quickstart/
---

# How to Get Started With Agent Assurance

TestMu AI Agent Assurance tests autonomous agents you own. These agents *act* by calling tools, writing files, and changing external state. This guide takes you from a clean machine to your first evidence-backed run: install and authenticate the <code>rook</code> CLI, then test a live agent from its PRD and a staging API.

You install only the <code>rook</code> CLI. You do not need to clone the source repository, build any code, start a controller, or bring your own model API key.

:::caution Pre-alpha
Commands and stored file formats can change. Test against a disposable or staging target and review the target and write warning before every run.
:::

## Install and authenticate the CLI

This section installs the packaged <code>rook</code> CLI. You do not clone the source repository, install its dependencies, start a controller, or build any code.

### Prerequisites

- macOS or Linux.
- Node.js 20 or newer.
- A TestMu AI account with Agent Assurance access.
- The runtime needed by your own target agent. For example, a remote HTTP agent must be reachable and a local command agent must be installed on <code>PATH</code>.

Check Node.js:

~~~bash
node --version
~~~

The major version must be 20 or newer.

### Step 1: Install the packaged CLI

Run:

~~~bash
curl -fsSL https://raw.githubusercontent.com/LambdaTest/rook/main/install.sh | bash
~~~

The installer:

1. Checks for Node.js 20 or newer.
2. Finds the newest <code>rook</code> release.
3. Downloads and verifies the release archive.
4. Installs it below <code>~/.testmuai/rook/versions/&lt;version&gt;</code>.
5. Links the <code>rook</code> executable into a writable directory on <code>PATH</code>.

If the final message prints a PATH command, run that exact command and open a new terminal.

### Step 2: Verify the CLI

~~~bash
rook --version
rook doctor
~~~

<code>rook doctor</code> checks the CLI version, Node.js, workspace, selected environment, controller reachability, authentication, and terminal support.

### Step 3: Sign in

Start browser authentication:

~~~bash
rook login
~~~

Or start the interactive terminal and enter <code>/login</code>:

~~~bash
rook
~~~

After the browser flow, verify the account:

~~~bash
rook whoami
~~~

Authentication is global. Multiple <code>rook</code> sessions on the same machine use the credentials stored below <code>~/.testmuai/rook/</code>.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-whoami.png').default} alt="Rook whoami command help in a terminal" width="1556" height="956" className="doc_img"/>

### Install a specific release

Release identifiers use a commit SHA. Pin a known version for CI or a controlled rollout:

~~~bash
export ROOK_VERSION="<commit-sha>"

curl -fsSL https://raw.githubusercontent.com/LambdaTest/rook/main/install.sh | bash
~~~

Installed versions remain side by side, so installing a new build does not overwrite the previous version directory.

### Update the CLI

Run the same installer again, then verify the selected version:

~~~bash
rook --version
rook doctor
~~~

### Troubleshooting the install

| Symptom | What to do |
|---|---|
| <code>rook: command not found</code> | Run the PATH or link command printed by the installer, then open a new terminal. |
| Node.js version error | Install Node.js 20 or newer and rerun the installer. |
| Release asset connection resets | Retry outside the VPN or corporate proxy; the download uses GitHub's release asset CDN. |
| Agent Assurance account is not recognized | Run <code>rook login</code>, then <code>rook whoami</code>. |

## Test your first agent

This walkthrough tests a refund agent from its PRD and a staging API. It represents a common setup: you have product requirements and access to a live endpoint, but the agent source code is not in your workspace.

Replace the example filenames, URL, token, and JSON fields with values from your own agent.

### What you need

- The <code>rook</code> CLI installed and authenticated (complete [Install and authenticate the CLI](#install-and-authenticate-the-cli) above).
- A local PRD or specification for the agent.
- A working staging cURL request.
- Test data that the agent is allowed to read or change.

Do not use a production refund endpoint for this walkthrough.

### Step 1: Open the specification workspace

Open a terminal in the folder that contains your product materials:

~~~text
refund-agent-test/
├── refund-agent-prd.md
└── knowledge/
    └── refund-policy.md
~~~

The folder does not need to contain agent code.

Start <code>rook</code>:

~~~bash
cd refund-agent-test
rook
~~~

<img loading="lazy" src={require('../assets/images/rook/rook-terminal-home.png').default} alt="Rook terminal home before the first autonomous agent test" width="1111" height="911" className="doc_img"/>

### Step 2: Explore the PRD and knowledge base

At the <code>rook</code> prompt, enter:

~~~text
/explore . -- focus on refund-agent-prd.md and knowledge/refund-policy.md
~~~

For one standalone document, use:

~~~text
/explore refund-agent-prd.md
~~~

Agent Assurance reads the selected local materials and proposes the agent it found. Confirm the agent only if the name, purpose, rules, and source files match your intended target.

The discovered record describes expected behavior. It does not prove the live service implements the PRD.

### Step 3: Generate focused scenarios

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

### Step 4: Add the staging profile and store its token

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

Agent Assurance lifts the Authorization credential out of the profile, replaces it with <code>$&#123;ROOK_AGENT_TOKEN&#125;</code>, and prompts securely for the value. Run <code>/env list</code> afterward to confirm the generated variable name without printing the secret.

Agent Assurance then invokes the profile once with a harmless goal. Confirm the extracted answer only if it is the agent's real response, not a request ID or status field.

Inspect the saved profile:

~~~text
/profile show refund-staging
/profile curl refund-staging
~~~

### Step 5: Run one safe scenario

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

Agent Assurance cannot roll back a refund, message, ticket, or other action taken by the agent.

<img loading="lazy" src={require('../assets/images/rook/rook-terminal-run-permission.png').default} alt="Rook run confirmation showing the live target and write warning" width="1225" height="676" className="doc_img"/>

### Step 6: Run the approved set

After the first scenario behaves correctly:

~~~text
/run --concurrency 1
~~~

Use concurrency 1 while scenarios share accounts, order records, or mutable state. Increase it only after the target and fixtures are isolated.

Press <code>Esc</code> to abort the active operation. Agent Assurance preserves completed scenario results, but it cancels the in-flight target call, which may already have produced an external effect. Inspect target state before retrying a write.

### Step 7: Review evidence

Open the local viewer:

~~~text
/ui
~~~

<img loading="lazy" src={require('../assets/images/rook/rook-browser-run-detail.png').default} alt="Rook browser run detail with verdicts and verification coverage" width="1440" height="900" className="doc_img"/>

Open each failure or **Unable to Verify** result. Check the request, response, criterion evidence, artifacts, and verification gaps.

- **Fail** means a failed criterion was observed.
- **Unable to Verify** means the current profile did not expose enough evidence.
- A claim such as “refund issued” in the agent's text is not independent proof that the refund exists.

Add read-only MCP verification or another safe observation when state changes must be proven.

### Step 8: End the session

~~~text
/exit
~~~

Results remain below <code>.testmuai/rook/</code> in your specification workspace.

## Next steps

- [Choose a real-world setup](/support/docs/agent-assurance-overview/#real-world-use-cases)
- [Configure more profile shapes](/support/docs/agent-assurance-profiles/)
- [Open the full command index](/support/docs/agent-assurance-command-reference/)
