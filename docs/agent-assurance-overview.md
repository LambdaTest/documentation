---
id: agent-assurance-overview
toc_max_heading_level: 2
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
import VerifiedTag from '@site/src/component/verifiedTag';
import { BRAND_URL } from '@site/src/component/BrandName';


<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "What is TestMu AI Agent Assurance",
          "item": `${BRAND_URL}/support/docs/agent-assurance-overview/`
        }]
      })
    }}
></script>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/agent-assurance-overview/"
    },
    "headline": "What is TestMu AI Agent Assurance",
    "description": "Learn how TestMu AI Agent Assurance autonomously discovers, tests, and evaluates AI agents with evidence-backed verdicts from your terminal, plus real-world setups for PRDs, knowledge bases, source code, remote APIs, and local commands.",
    "url": "https://www.testmuai.com/support/docs/agent-assurance-overview/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Agent Assurance Platform",
    "keywords": [
      "rook cli",
      "autonomous agent testing",
      "ai agent testing cli"
    ],
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

# What is TestMu AI Agent Assurance

TestMu AI Agent Assurance helps teams gather evidence about whether an AI agent they own is ready to ship. This page covers its **Autonomous Agent** category, for agents that *act*: they call tools, write files, hit APIs, and change external state.

Agent Assurance uses the <code>rook</code> CLI for authoring and execution, with a [local UI and hosted Web UI](/support/docs/rook-web-ui/#choose-your-ui) for reviewing evidence on your machine or with your team. Give it the materials that describe the agent and connect a live test target. It can then:

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

Rook does not natively explore a GitHub URL. If you want source-aware testing, check out your own repository locally and run Rook inside it. You do not need to clone Rook to install it; the quickstart optionally clones its public sample agent.

Documentation is specification evidence, not proof of implementation. A PRD tells Rook what should happen. A live invocation profile is still required to test what actually happens.

## The End-to-End Journey

1. Sign in and select the project with <code>/project</code>.
2. <code>/explore</code> reads local material; <code>/agent</code> selects the agent to test.
3. <code>/profile add</code> generates and verifies invocation hooks from your prompt or integration material.
4. <code>/generate</code> creates scenarios; <code>/scenarios list</code> helps you review them.
5. <code>/sync</code> publishes the reviewed project before a timeline run.
6. <code>/run</code> invokes the live target through its phases and judges the evidence.
7. <code>/ui</code> opens the hosted Web UI; <code>/ui --local</code> opens on-disk evidence.

Rook stores project results as plain files below:

<VerifiedTag value="Verified" />

```text
<your-workspace>/.testmuai/rook/
```

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
- Hook scripts must implement the actual transport, session handling, and evidence collection. Merely declaring streaming, attachment, or MCP capabilities does not implement them.

## Safety

:::warning Target actions are real
Rook does not sandbox or roll back the agent under test. Refunds, emails, tickets, database updates, and filesystem writes happen in the target environment.
:::

For the first run, use staging endpoints, disposable fixtures, and <code>--concurrency 1</code>. Start with one harmless scenario, and approve only the exact target you intended.

## Real-World Use Cases

You do not need the Rook source code, and your workspace does not need the source code of the agent under test. Rook can start from a PRD, knowledge base, checked-out implementation, or another local specification, then invoke a live remote or local target through a profile.

Use the following journeys to choose the setup that matches the access you have. Complete login and project selection first. Before every normal run, review the profile and scenarios and run <code>/sync</code>. Scenario IDs below are examples; use those in your workspace.

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

<VerifiedTag value="Verified" />

```text
refund-validation/
└── refund-agent-prd.md
```

Start from the file:

<VerifiedTag value="Verified" />

```bash
cd refund-validation
rook
```

<VerifiedTag value="Verified" />

```text
/explore refund-agent-prd.md
/generate --total 15 -- cover missing order ID, identity verification, duplicate requests, policy cutoff, and receipt output
/profile add
/scenarios list
/sync
/run --only SC-001 --concurrency 1
```

Use an HTTP profile such as:

<VerifiedTag value="Verified" />

```bash
curl https://refund-agent.staging.example.com/v1/chat \
  -H 'authorization: Bearer replace-with-your-token' \
  -H 'content-type: application/json' \
  -d '{"message":"I need a refund for order ORD-1042","session_id":"test-session"}'
```

**Interpretation:** The PRD supplies expected behavior. The API response and observations supply actual evidence. Rook should not infer implementation tools or mark a backend refund successful merely because the PRD says that tool exists.

### Use Case 2: PRD Plus a Knowledge Base

**Situation:** A support agent answers from product policies, warranty tables, and escalation instructions. The workspace contains documents but no executable agent.

<VerifiedTag value="Verified" />

```text
support-agent-test/
├── PRD.md
└── knowledge/
    ├── refunds.md
    ├── warranty.md
    └── escalation.md
```

Explore the folder with focus:

<VerifiedTag value="Verified" />

```text
/explore . -- treat PRD.md as requirements and knowledge/ as the approved answer source
/generate --class functional,adversarial -- category boundaries, conflicting policies, unsupported claims, and escalation
```

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

<VerifiedTag value="Verified" />

```text
travel-agent-contract/
├── PRD.md
└── api-contract.md
```

<VerifiedTag value="Verified" />

```text
/explore .
/generate --total 20 -- test ambiguous dates, unavailable flights, budget limits, and confirmation before booking
/profile add
```

The profile might invoke:

<VerifiedTag value="Verified" />

```bash
curl https://travel-agent.staging.example.com/v2/trips \
  -H 'authorization: Bearer replace-with-your-token' \
  -H 'content-type: application/json' \
  -d '{"goal":"Find a refundable flight to Singapore next Friday","thread_id":"rook-demo"}'
```

Use a conversation field when the agent returns a thread or session ID. Without that mapping, a scenario that requires follow-up questions cannot run as a real conversation.

For both HTTP examples, supply target credentials through environment variables and tell the profile author their names. The generated script should read them from <code>process.env</code>, never embed the values. See [Environment and Secrets](/support/docs/rook-environment-and-secrets/).

Rook cannot explore the remote URL itself. It explores local material and invokes the remote target through the profile.

### Use Case 4: Full Agent Source Workspace

**Situation:** The team owns a coding agent with prompts, tool definitions, subagents, skills, and implementation code.

Check out your own repository and run Rook at the narrowest useful root:

<VerifiedTag value="Verified" />

```bash
git clone https://github.com/your-org/coding-agent.git
cd coding-agent
rook
```

<VerifiedTag value="Verified" />

```text
/explore .
/agent
/generate --class functional,non_functional,adversarial
/profile add
/sync
/run --concurrency 1
```

Source access lets Rook derive scenarios from implemented tools and policies. The profile still invokes the agent externally; discovery alone is not a test run.

If the repository is a monorepo, prefer:

<VerifiedTag value="Verified" />

```text
/explore services/code-review-agent
```

This narrows discovery and makes the proposed agent boundary easier to review. It is not a filesystem access boundary. Discovery tools remain rooted at the workspace where Rook was launched, so use an isolated checkout when sibling files must not be inspected.

### Use Case 5: A GitHub URL Is All You Were Given

Rook does not clone or explore a GitHub URL directly. Clone the repository yourself so you control the branch, credentials, submodules, and files Rook may read:

<VerifiedTag value="Verified" />

```bash
git clone --branch feature/refund-v2 https://github.com/your-org/refund-agent.git
cd refund-agent
rook
```

Then use <code>/explore .</code>. For a private repository, authenticate Git using your organization's normal process. This is your agent repository. It is unrelated to installing or cloning Rook.

### Use Case 6: A Local Command Agent

**Situation:** A research or coding agent runs as a command and may write files.

Create a command profile through <code>/profile add</code>. Example invocation:

<VerifiedTag value="Verified" />

```text
/profile add local-research --command 'research-agent --format json'
```

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

<VerifiedTag value="Verified" />

```text
/generate -- create an executive risk summary, a PDF report, and a chart; verify required sections and artifact metadata
/run --only SC-004 --concurrency 1
```

Rook can collect the result text and common files such as PDF, image, CSV, JSON, Markdown, HTML, and archives. It can record image size and dimensions.

**Current input limit:** Native file or image attachment delivery is not implemented. Put a test URL in the goal or provide an agent-specific adapter that resolves the file before invoking the live agent.

**Current image limit:** Rook does not judge what pixels depict. A visual-content criterion can be **Unable to Verify** even when the image artifact exists.

### Use Case 8: Several Agents in One Workspace

**Situation:** A customer-service system contains a router, refund agent, order agent, and escalation agent.

<VerifiedTag value="Verified" />

```text
/explore .
/agent
/agent use refund-agent
/generate --total 12
/profile add
/sync
/run
```

Repeat <code>/agent use</code>, generation, and profile setup for each independently invokable agent. If a subagent is only reachable through the router, test it through the router, and make that boundary explicit in the profile and scenarios.

Project data is stored separately under each registered agent. The current command lists or selects agents; it has no <code>/agent rm</code> subcommand.

### Use Case 9: Several Profiles for One Agent

Profiles represent ways to invoke the same discovered behavior:

| Profile | Example purpose |
|---|---|
| <code>refund-staging</code> | Safe functional and write-path testing |
| <code>refund-prod-readonly</code> | Read-only smoke checks |
| <code>fast-model</code> | Latency/cost-oriented model configuration |
| <code>careful-model</code> | Higher-quality model configuration |
| <code>regional-eu</code> | Region-specific policy and endpoint |

<VerifiedTag value="Verified" />

```text
/profile
/profile test refund-staging
/profile use refund-staging
/run --only SC-001,SC-002 --concurrency 1
```

Switch to another verified profile and repeat the same scenario IDs. Runs retain the profile identity used at execution time.

Do not use a production profile for scenarios that can write. Rook does not provide rollback.

### Use Case 10: Continuous Regression Testing

After the interactive journey is verified, use headless commands:

<VerifiedTag value="Verified" />

```bash
rook project use <project-id>
rook agent use <agent-id>
rook sync
rook run --only SC-001,SC-002 --concurrency 1 --json
rook report --json
```

Pin the CLI version, use an isolated Rook home for CI, and provide explicit permission rules only for exact calls the job should make.

A successful process exit does not establish agent quality. Inspect completion and verdict totals using the [CI gate](/support/docs/agent-assurance-ci-cd/). Keep generation in a separately reviewed workflow.

## Local and Hosted UIs {#hosted-web-ui}

Use **`rook ui --local`** to review the current workspace's agents, definitions, runs, and evidence without a hosted login. Open agent → runs → run → scenario. This includes local `--test` results and evidence awaiting upload; keep the serving process running.

The [stage Web UI](https://stage-rook.lambdatestinternal.com/) is live. Set <code>ROOK_ENV=stage</code> before CLI login, project selection, and sync to use that environment. Public packages default to production at [rook.testmuai.com](https://rook.testmuai.com).

Use **`rook ui`** to open the hosted app for uploaded project history, versions, and team review. Open project → agent → Runs → run → scenario. Teammates need access to the same environment and project.

The [combined UI walkthrough](/support/docs/rook-web-ui/#choose-your-ui) shows both layouts and their evidence views. Neither UI creates or executes tests; those operations stay in the CLI.

## Next Steps

- [Get started with Agent Assurance](/support/docs/agent-assurance-quickstart/)
- [Follow the complete Rook sequence](/support/docs/agent-assurance-quickstart/#continue-after-your-first-test)
- [Understand the local and cloud architecture](/support/docs/rook-architecture/)
- [Connect and explore agents](/support/docs/agent-assurance-connect-and-explore-agents/)
- [Configure invocation profiles](/support/docs/rook-profiles-and-hooks/#add-a-profile-interactively)
- [Generate profiles and configure lifecycle hooks](/support/docs/rook-profiles-and-hooks/)
- [Generate and curate scenarios](/support/docs/agent-assurance-scenarios/)
- [Run tests safely](/support/docs/agent-assurance-run-tests/)
- [Review permissions, secrets, and workspace files](/support/docs/rook-permissions-and-safety/)
- [Browse every command](/support/docs/agent-assurance-command-reference/)
