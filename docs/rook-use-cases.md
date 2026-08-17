---
id: rook-use-cases
title: Rook Autonomous Agent Testing Use Cases
hide_title: false
sidebar_label: Real-world Use Cases
description: Real examples for testing agents from PRDs, knowledge bases, code, remote APIs, local commands, artifacts, multiple agents, and profiles.
keywords:
  - rook use cases
  - test agent from prd
  - black box agent testing
  - multimodal agent testing
url: https://www.testmuai.com/support/docs/rook-use-cases/
site_name: TestMu AI
slug: rook-use-cases/
canonical: https://www.testmuai.com/support/docs/rook-use-cases/
---

# Rook Autonomous Agent Testing Use Cases

You do not need the Rook source code, and your workspace does not need to contain the source code of the agent under test. Rook can start from a PRD, knowledge base, checked-out implementation, or another local specification, then invoke a live remote or local target through a profile.

Use this page to choose the journey that matches the access you actually have.

:::note Current public release
These are supported testing patterns and setup examples. As verified on August 17, 2026, the default production controller in public Rook 0.1.0 is unavailable, so controller-backed commands cannot complete until that service is deployed. You can prepare the workspaces, PRDs, profiles, test data, and expected evidence now.
:::

## Access Matrix

| Your access | Explore | Invoke | What Rook can establish |
|---|---|---|---|
| PRD only | The PRD file | A live HTTP or command profile is still required | Conformance of observable behavior to intended requirements |
| PRD and knowledge base | The containing folder | HTTP or command profile | Policy answers, boundaries, workflows, and observable effects |
| Remote API, no code | A local PRD/API specification | HTTP profile | Black-box behavior exposed by the response and configured observations |
| Source workspace | The repository or agent directory | HTTP or command profile | Source-aware scenarios plus live behavior |
| GitHub repository | A local checkout of your repository | HTTP or command profile | Same as source workspace; raw GitHub URLs are not explored |
| Local CLI agent | Its docs or code | Command profile | stdout, stderr, exit status, sessions, and configured file changes |
| Artifact-producing agent | PRD, docs, or code | Sync or async profile | Text, JSON, local files, and downloadable result links |
| Several environments or models | Explore once | One profile per variant | Repeatable comparison while each run stays pinned to one profile |

## Use Case 1: Only a PRD, No Agent Code

**Situation:** A QA engineer receives <code>refund-agent-prd.md</code> and a staging endpoint. Engineering does not provide the implementation repository.

**Goal:** Verify eligibility rules, missing-input questions, duplicate refund protection, and receipt creation.

~~~text
refund-validation/
└── refund-agent-prd.md
~~~

Start from the file:

~~~bash
cd refund-validation
rook
~~~

~~~text
/explore refund-agent-prd.md
/generate --total 15 -- cover missing order ID, identity verification, duplicate requests, policy cutoff, and receipt output
/profile add
/scenarios list
/run --only SC-001 --concurrency 1
~~~

Use an HTTP profile such as:

~~~bash
curl https://refund-agent.staging.example.com/v1/chat \
  -H 'authorization: Bearer replace-with-your-token' \
  -H 'content-type: application/json' \
  -d '{"message":"I need a refund for order ORD-1042","session_id":"test-session"}'
~~~

**Interpretation:** The PRD supplies expected behavior. The API response and observations supply actual evidence. Rook should not infer implementation tools or mark a backend refund successful merely because the PRD says that tool exists.

## Use Case 2: PRD Plus a Knowledge Base

**Situation:** A support agent answers from product policies, warranty tables, and escalation instructions. The workspace contains documents but no executable agent.

~~~text
support-agent-test/
├── PRD.md
└── knowledge/
    ├── refunds.md
    ├── warranty.md
    └── escalation.md
~~~

Explore the folder with focus:

~~~text
/explore . -- treat PRD.md as requirements and knowledge/ as the approved answer source
/generate --class functional,adversarial -- category boundaries, conflicting policies, unsupported claims, and escalation
~~~

Connect the remote support endpoint with <code>/profile add</code>. Add read-only verification only when it can observe an effect without creating or changing it.

**Useful checks:**

- Does the agent ask for the product model before applying model-specific policy?
- Does it refuse instructions embedded in an untrusted knowledge article?
- Does it cite the correct policy version?
- Does it escalate when documents conflict instead of inventing a rule?

**Limit:** Documentation can show what the agent should know. It does not prove which documents the deployed agent retrieved.

## Use Case 3: Remote Agent with No Workspace Code

**Situation:** A vendor gives you an API URL, credentials, a request example, and an API specification.

Keep the specification in a small local test workspace:

~~~text
travel-agent-contract/
├── PRD.md
└── api-contract.md
~~~

~~~text
/explore .
/generate --total 20 -- test ambiguous dates, unavailable flights, budget limits, and confirmation before booking
/profile add
~~~

The profile might invoke:

~~~bash
curl https://travel-agent.staging.example.com/v2/trips \
  -H 'authorization: Bearer replace-with-your-token' \
  -H 'content-type: application/json' \
  -d '{"goal":"Find a refundable flight to Singapore next Friday","thread_id":"rook-demo"}'
~~~

Use a conversation field when the agent returns a thread or session ID. Without that mapping, a scenario that requires follow-up questions cannot run as a real conversation.

For both HTTP examples, <code>/profile add</code> replaces the Authorization value with <code>$&#123;ROOK_AGENT_TOKEN&#125;</code> and securely asks for the real token. Stored values are scoped to the current workspace.

Rook cannot explore the remote URL itself. It explores local material and invokes the remote target through the profile.

## Use Case 4: Full Agent Source Workspace

**Situation:** The team owns a coding agent with prompts, tool definitions, subagents, skills, and implementation code.

Check out your own repository and run Rook at the narrowest useful root:

~~~bash
git clone https://github.com/your-org/coding-agent.git
cd coding-agent
rook
~~~

~~~text
/explore .
/agent
/generate --class functional,non_functional,adversarial
/profile add
/run --concurrency 1
~~~

Source access lets Rook derive scenarios from implemented tools and policies. The profile still invokes the agent externally; discovery alone is not a test run.

If the repository is a monorepo, prefer:

~~~text
/explore services/code-review-agent
~~~

This narrows discovery and makes the proposed agent boundary easier to review. It is not a filesystem access boundary: discovery tools remain rooted at the workspace where Rook was launched. Use an isolated checkout when sibling files must not be inspected.

## Use Case 5: A GitHub URL Is All You Were Given

Rook does not clone or explore a GitHub URL directly. Clone the repository yourself so you control the branch, credentials, submodules, and files Rook may read:

~~~bash
git clone --branch feature/refund-v2 https://github.com/your-org/refund-agent.git
cd refund-agent
rook
~~~

Then use <code>/explore .</code>. For a private repository, authenticate Git using your organization's normal process. This is your agent repository; it is unrelated to installing or cloning Rook.

## Use Case 6: A Local Command Agent

**Situation:** A research or coding agent runs as a command and may write files.

Create a command profile through <code>/profile add</code>. Example invocation:

~~~text
research-agent --prompt "{{goal}}" --format json
~~~

Configure:

- The argument or stdin position for the scenario goal.
- A resume argument when multi-turn sessions are supported.
- The result source, such as stdout.
- An output folder such as <code>./reports</code> for filesystem observation.
- A reset command if fixtures must be restored between scenarios.

Run one scenario with concurrency 1. A non-zero exit status is an invocation error even when the command prints partial output.

## Use Case 7: Async Reports, PDFs, Images, and Mixed Results

**Situation:** A report agent returns a job ID, asks the caller to poll, and eventually returns explanatory text plus a PDF or image link.

Use an asynchronous HTTP profile with:

- The initial request.
- The JSON path that returns the job handle.
- A polling request and completion condition.
- The text result path.
- Artifact locations or downloadable result URLs.

Example test intent:

~~~text
/generate -- create an executive risk summary, a PDF report, and a chart; verify required sections and artifact metadata
/run --only SC-004 --concurrency 1
~~~

Rook can collect the result text and common files such as PDF, image, CSV, JSON, Markdown, HTML, and archives. It can record image size and dimensions.

**Current input limit:** Native file or image attachment delivery is not implemented. Put a test URL in the goal or provide an agent-specific adapter that resolves the file before invoking the live agent.

**Current image limit:** Rook does not judge what pixels depict. A visual-content criterion can be **Unable to Verify** even when the image artifact exists.

## Use Case 8: Several Agents in One Workspace

**Situation:** A customer-service system contains a router, refund agent, order agent, and escalation agent.

~~~text
/explore .
/agent
/agent use refund-agent
/generate --total 12
/profile add
/run
~~~

Repeat <code>/agent use</code>, generation, and profile setup for each independently invokable agent. If a subagent is only reachable through the router, test it through the router and make that boundary explicit in the profile and scenarios.

Project data is stored under each registered agent. Removing an agent with <code>/agent rm</code> also removes Rook's stored project data for that agent, so review the ID carefully.

## Use Case 9: Several Profiles for One Agent

Profiles represent ways to invoke the same discovered behavior:

| Profile | Example purpose |
|---|---|
| <code>refund-staging</code> | Safe functional and write-path testing |
| <code>refund-prod-readonly</code> | Read-only smoke checks |
| <code>fast-model</code> | Latency/cost-oriented model configuration |
| <code>careful-model</code> | Higher-quality model configuration |
| <code>regional-eu</code> | Region-specific policy and endpoint |

~~~text
/profile list
/profile test refund-staging
/profile use refund-staging
/run --only SC-001,SC-002 --concurrency 1
~~~

Switch to another verified profile and repeat the same scenario IDs. Runs retain the profile identity used at execution time.

Do not use a production profile for scenarios that can write. Rook does not provide rollback.

## Use Case 10: Verify What the Agent Did, Not Only What It Said

**Situation:** An expense agent reads an expense, applies a category limit, approves or rejects it, and writes an audit record for every tool call.

Suppose the policy says:

| Category | Limit | Required action above the limit |
|---|---:|---|
| Meals | $100 | Reject and notify a manager |
| Software | $200 | Reject and notify a manager |
| Travel | $1,000 | Reject and notify a manager |

The test request is:

~~~json
{
  "input": "Please review EXP-1002",
  "session_id": "rook-SC-004"
}
~~~

The live agent responds:

~~~text
EXP-1002 approved for $450. This is within the $200 limit for software.
~~~

This is a functional failure even though the reply is fluent. Strong evidence includes all three facts:

1. The expense amount is $450.
2. The policy limit is $200.
3. The session-scoped audit record contains <code>approve_expense</code> and does not contain the required manager notification.

Generate focused scenarios:

~~~text
/generate -- test every category boundary, already-reimbursed expenses, unknown IDs, and manager escalation
~~~

Configure the request's session field as <code>&#123;&#123;session&#125;&#125;</code> so the live agent's audit records can be isolated during manual investigation. In tested version 0.1.0 behavior, that generated session value is available to the agent invocation but not to the judge's read-only verification request. Rook can therefore compare $450 with the $200 policy limit, but it cannot safely attribute an audit record to this exact scenario automatically.

Record the tool-call assertion as <code>Unable to Verify</code> with version 0.1.0. Do not use <code>approve_expense</code> or another write operation to check the result; verification must not create the state it is checking. An unscoped audit lookup is also insufficient because it can mix evidence from concurrent or earlier scenarios.

<a id="use-case-10-continuous-regression-testing"></a>

## Use Case 11: Continuous Regression Testing

After the interactive journey is verified, use headless commands:

~~~bash
rook explore . --all --json
rook generate --total 20 --json
rook run --only SC-001,SC-002 --no-narrative --json
rook report --json
~~~

Pin the CLI version, use an isolated Rook home for CI, and provide explicit permission rules only for exact calls the job should make.

Exit code 0 means no defect was recorded in the verdicts that were produced. Also inspect the run record to confirm the requested suite completed; interruption or exhausted resources can leave a valid partial run.

## Choose the Next Guide

- [Connect and explore agents](/support/docs/rook-connect-and-explore-agents/)
- [Configure invocation profiles](/support/docs/rook-profiles/)
- [Generate and curate scenarios](/support/docs/rook-scenarios/)
- [Run tests safely](/support/docs/rook-run-tests/)
- [Open the command index](/support/docs/rook-command-reference/)
