---
id: agent-assurance-overview
title: What is TestMu AI Agent Assurance
hide_title: false
sidebar_label: Overview
description: Learn how TestMu AI Agent Assurance autonomously discovers, tests, and evaluates AI agents with evidence-backed verdicts from your terminal, plus real-world setups for PRDs, knowledge bases, source code, remote APIs, and local commands.
keywords:
  - rook cli
  - autonomous agent testing
  - ai agent testing cli
  - test ai agents
  - rook use cases
  - test agent from prd
  - black box agent testing
  - multimodal agent testing
url: https://www.testmuai.com/support/docs/agent-assurance-overview/
site_name: TestMu AI
slug: agent-assurance-overview/
canonical: https://www.testmuai.com/support/docs/agent-assurance-overview/
---

# What is TestMu AI Agent Assurance

TestMu AI Agent Assurance is the product for proving an AI agent you own is safe to ship. This page covers its **Autonomous Agent** category, for agents that *act*: they call tools, write files, hit APIs, and change external state.

Agent Assurance runs from your terminal as <code>rook</code>. Give it the materials that describe the agent and connect a live test target. It can then:

- Discover capabilities.
- Generate scenarios.
- Execute multi-step behavior.
- Collect evidence.
- Judge the results.

You install only the <code>rook</code> CLI. You do not need the source repository, a dedicated development environment, Docker, or your own model API key.

:::caution Pre-alpha
Commands and stored file formats can change. Test against a disposable or staging target and review the target and write warning before every run.
:::

<img loading="lazy" src={require('../assets/images/rook/rook-terminal-home.png').default} alt="Rook terminal home showing the autonomous agent testing workflow" width="1111" height="911" className="doc_img"/>

## Conversation Testing and Autonomous Testing

Agent Assurance covers both forms of agent testing, but they solve different problems.

| Choose | When it fits |
|---|---|
| **Conversation-based agent testing** | You want to test chat, voice, or phone conversations through configured turns, intents, assertions, and conversation quality. |
| **Autonomous agent testing with Agent Assurance** | Your agent plans, calls tools, changes external state, creates files, asks for missing information, delegates to subagents, or returns mixed outputs that require evidence beyond the final message. |

For example, a refund assistant may ask for an order ID, verify eligibility, issue a refund through a tool, and return both an explanation and a PDF receipt. Rook tests the whole behavior it can observe, not only whether the final sentence sounds correct.

## What You Can Give Rook

Rook works with different levels of access:

| What you have | How to begin | What it contributes |
|---|---|---|
| A PRD only | Run <code>/explore path/to/PRD.md</code> | Intended behavior, rules, constraints, examples, and open questions |
| PRD plus knowledge-base files | Run <code>/explore docs -- focus on the PRD and knowledge base</code> | Intended answers, policies, domain facts, and boundaries |
| Agent source code | Run <code>/explore .</code> in your checked-out repository | Prompts, tools, subagents, feature paths, and implementation evidence |
| A live remote API but no source | Explore a local PRD or specification, then add an HTTP profile | Black-box execution of the live target |
| A local agent CLI | Add a command profile | stdout, stderr, exit status, files, and resumable sessions when configured |

Rook does not natively explore a GitHub URL. If you want source-aware testing, check out your own repository locally and run Rook inside it. You never need to clone the Rook repository.

Documentation is specification evidence, not proof of implementation. A PRD tells Rook what should happen. A live invocation profile is still required to test what actually happens.

## The End-to-End Journey

1. <code>/explore</code> reads the selected local material and identifies one or more agents.
2. <code>/agent</code> lets you confirm or switch the active agent.
3. <code>/generate</code> creates functional, non-functional, and adversarial scenarios.
4. <code>/profile add</code> records a fixed HTTP or command invocation.
5. <code>/scenarios list</code> shows which scenarios are runnable with that profile.
6. <code>/run</code> invokes the live target and judges observable criteria.
7. <code>/ui</code> opens the local evidence viewer.

Rook stores project results as plain files below:

~~~text
<your-workspace>/.testmuai/rook/
~~~

Credentials, variables, and session settings are stored separately below <code>~/.testmuai/rook/</code>. Stored variables are partitioned by the workspace's absolute path.

## Evidence and Verdicts

Rook can use the raw response, extracted JSON or text, command output, exit status, observed file changes, downloadable artifacts, and read-only MCP verification. The available evidence depends on the profile you configure.

| Verdict | Meaning |
|---|---|
| **Pass** | Every criterion Rook could verify passed. |
| **Fail** | At least one criterion was observed to fail. |
| **Unable to Verify** | The available profile and evidence could not establish the result. It is not counted as a failure. |

Always read coverage together with pass rate. A high pass rate with low verification coverage is not strong release evidence.

## Supported Outputs and Current Limits

Rook can collect text, JSON, local files, and downloadable links. This supports agents that produce PDFs, images, CSV files, Markdown, reports, or archives.

Current pre-alpha limits include:

- Text and URL inputs can be passed in the scenario goal. Native file, image, and pull-request attachment delivery is not yet implemented.
- Rook can record image dimensions and file evidence, but it cannot judge image pixels. Visual correctness may be **Unable to Verify**.
- HTTP JSON and text responses are executable. SSE, NDJSON, and WebSocket transports can be recorded but are not executed.
- Direct MCP profiles are not executable by <code>/profile test</code> or <code>/run</code>. Use an HTTP or command adapter for the target agent.

## Safety

:::warning Target actions are real
Rook does not sandbox or roll back the agent under test. Refunds, emails, tickets, database updates, and filesystem writes happen in the target environment.
:::

For the first run, use staging endpoints, disposable fixtures, and <code>--concurrency 1</code>. Start with one harmless scenario, and approve only the exact target you intended.

## Real-World Use Cases

You do not need the Rook source code, and your workspace does not need the source code of the agent under test. Rook can start from a PRD, knowledge base, checked-out implementation, or another local specification, then invoke a live remote or local target through a profile.

Use the following journeys to choose the setup that matches the access you have.

### Access Matrix

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

### Use Case 1: Only a PRD, No Agent Code

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

### Use Case 2: PRD Plus a Knowledge Base

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

### Use Case 3: Remote Agent with No Workspace Code

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

### Use Case 4: Full Agent Source Workspace

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

This narrows discovery and makes the proposed agent boundary easier to review. It is not a filesystem access boundary. Discovery tools remain rooted at the workspace where Rook was launched, so use an isolated checkout when sibling files must not be inspected.

### Use Case 5: A GitHub URL Is All You Were Given

Rook does not clone or explore a GitHub URL directly. Clone the repository yourself so you control the branch, credentials, submodules, and files Rook may read:

~~~bash
git clone --branch feature/refund-v2 https://github.com/your-org/refund-agent.git
cd refund-agent
rook
~~~

Then use <code>/explore .</code>. For a private repository, authenticate Git using your organization's normal process. This is your agent repository. It is unrelated to installing or cloning Rook.

### Use Case 6: A Local Command Agent

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

Run one scenario with concurrency 1. A non-zero exit status is an invocation error, even when the command prints partial output.

### Use Case 7: Async Reports, PDFs, Images, and Mixed Results

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

### Use Case 8: Several Agents in One Workspace

**Situation:** A customer-service system contains a router, refund agent, order agent, and escalation agent.

~~~text
/explore .
/agent
/agent use refund-agent
/generate --total 12
/profile add
/run
~~~

Repeat <code>/agent use</code>, generation, and profile setup for each independently invokable agent. If a subagent is only reachable through the router, test it through the router, and make that boundary explicit in the profile and scenarios.

Project data is stored under each registered agent. Removing an agent with <code>/agent rm</code> also removes Rook's stored project data for that agent, so review the ID carefully.

### Use Case 9: Several Profiles for One Agent

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

### Use Case 10: Continuous Regression Testing

After the interactive journey is verified, use headless commands:

~~~bash
rook explore . --all --json
rook generate --total 20 --json
rook run --only SC-001,SC-002 --no-narrative --json
rook report --json
~~~

Pin the CLI version, use an isolated Rook home for CI, and provide explicit permission rules only for exact calls the job should make.

Exit code 0 means no defect was recorded in the verdicts that were produced. Also inspect the run record to confirm the requested suite completed. Interruption or exhausted resources can leave a valid partial run.

## Next Steps

- [Get started with Agent Assurance](/support/docs/agent-assurance-quickstart/)
- [Connect and explore agents](/support/docs/agent-assurance-connect-and-explore-agents/)
- [Configure invocation profiles](/support/docs/agent-assurance-profiles/)
- [Generate and curate scenarios](/support/docs/agent-assurance-scenarios/)
- [Run tests safely](/support/docs/agent-assurance-run-tests/)
- [Browse every command](/support/docs/agent-assurance-command-reference/)
