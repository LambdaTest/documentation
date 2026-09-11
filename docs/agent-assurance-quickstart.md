---
id: agent-assurance-quickstart
toc_max_heading_level: 2
title: How to Get Started With Agent Assurance
hide_title: false
sidebar_label: Quickstart
description: Install Rook, test a public local sample with prompt-generated hooks, sync a project, and review evidence in the hosted Web UI.
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
          "name": "How to Get Started With Agent Assurance",
          "item": `${BRAND_URL}/support/docs/agent-assurance-quickstart/`
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
      "@id": "https://www.testmuai.com/support/docs/agent-assurance-quickstart/"
    },
    "headline": "How to Get Started With Agent Assurance",
    "description": "Install Rook, test a public local sample with prompt-generated hooks, sync a project, and review evidence in the hosted Web UI.",
    "url": "https://www.testmuai.com/support/docs/agent-assurance-quickstart/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Agent Assurance Platform",
    "keywords": [
      "agent assurance getting started",
      "install rook cli",
      "rook authentication"
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

# How to Get Started With Agent Assurance

Run one small test before connecting a business-critical agent. This walkthrough uses Rook's public support-triage sample: a local HTTP service with in-memory tickets, no model key, and no external customer actions.

The workflow was tested with **Rook 0.1.3** on September 11, 2026. Discovery, profile generation, scenario generation, and judging use TestMu AI credits; even a small suite can involve several model calls. Review the proposed work and credit balance before approving it.

Already have a live agent? Follow the same sequence with your own [source or requirements](/support/docs/agent-assurance-connect-and-explore-agents/) and [invocation profile](/support/docs/agent-assurance-profiles/).

## Install and Authenticate the CLI

Choose one public install method:

```bash
# Homebrew
brew tap LambdaTest/rook https://github.com/LambdaTest/rook.git
brew install lambdatest/rook/rook
```

```bash
# Shell installer
curl -fsSL https://raw.githubusercontent.com/LambdaTest/rook/main/install.sh | bash
```

```bash
# npm (use Node.js 22 or newer)
npm install -g @testmuai/rook
```

Then check your installation:

```bash
rook --version
rook doctor
```

See [Install Rook](/support/docs/rook-installation/) for PATH, upgrade, and checksum help. The packaged CLI includes its runtime. The sample below also needs a separate Node.js installation and Git.

### Choose production or stage before signing in

Public packages default to production. For the [stage Web UI](https://stage-rook.lambdatestinternal.com/), set this in every terminal where you run Rook:

```bash
export ROOK_ENV=stage
rook login
rook whoami
rook plan
```

For production, use <code>ROOK_ENV=prod</code>; <code>rook ui</code> opens [rook.testmuai.com](https://rook.testmuai.com). Stage and production are separate environments. Selecting stage for Rook does **not** change your target agent's endpoint.

:::note Existing credentials
If <code>LT_USERNAME</code> and <code>LT_ACCESS_KEY</code> are exported, they take precedence over stored browser login. Use credentials for the selected environment, or unset both in this terminal before using browser login. Never paste credentials into documentation, prompts, or screenshots.
:::

## Test Your First Agent

### 1. Start the public sample

The [triage-service sample](https://github.com/LambdaTest/rook/tree/main/samples/triage-service) is the target being tested—not Rook's backend.

In a separate terminal:

```bash
git clone --depth 1 --filter=blob:none --sparse https://github.com/LambdaTest/rook.git rook-samples
cd rook-samples
git sparse-checkout set samples/triage-service
cd samples/triage-service
PORT=19110 node src/server.mjs
```

Leave it running. It keeps fixture changes in memory; restarting it resets them. From another terminal, verify the target:

```bash
curl -fsS http://127.0.0.1:19110/healthz
curl -fsS http://127.0.0.1:19110/v1/triage \
  -H 'content-type: application/json' \
  -d '{"input":"please look at T-1043"}'
```

The response should say <code>T-1043 triaged as S1 and assigned to platform.</code> and include the recorded tool steps.

### 2. Select a project and discover the agent

Open the sample folder in your Rook terminal:

```bash
cd rook-samples/samples/triage-service
export ROOK_ENV=stage
rook
```

The remaining slash commands belong inside the TUI. From a shell, replace the leading slash with <code>rook </code>.

```text
/project
```

Select an existing test project, or create one:

```text
/project create "Rook quickstart"
/explore .
/agent
```

Select the discovered triage agent. Generated IDs can differ: use the actual ID/name shown by your session. Confirm that the discovered features describe the ticket service, not unrelated files.

### 3. Generate and verify the profile from a prompt

Create a text file named <code>triage-profile.txt</code> in the sample folder with this material:

```text
Reach the running service at http://127.0.0.1:19110/v1/triage.
For execute, POST JSON {"input": <the goal read from stdin>}.
The response's output field is the agent's answer: return it as agent_reply.
Map each response step's tool and args to calls[].name and calls[].arguments.
Use "please look at T-1043" as the harmless verification goal.
No credentials are needed. Do not start another server or install dependencies.
This fixture is single-turn. Its echoed session_id is not conversational state.
Do not report the fixture's zero usage values as measured model usage.
Use concurrency 1.
```

Then run:

```text
/profile add local-triage --from triage-profile.txt
/profile show local-triage
/profile test local-triage --goal "please look at T-1043"
```

Approve only the intended local HTTP call and script work. Review the generated <code>profiles/local-triage.yaml</code> and <code>scripts/</code> files below the active agent directory. A successful probe should return the real answer and four tool calls.

The sample needs only an <code>execute</code> hook. Use [additional lifecycle hooks](/support/docs/rook-hooks-and-phases/) for login, session setup, teardown, or delayed trace collection.

### 4. Generate a small suite and review it

```text
/generate --total 2 --class functional --category happy_path -- Create two single-turn cases for existing tickets only: T-1043 must be S1/platform and T-1041 must be S2/billing. Check the answer and recorded calls. Do not require external verification or repeated samples.
/scenarios list
```

The count is a generation target, not a guarantee. Review the resulting files before running them. Check that every criterion can be evaluated from the answer or the calls your hook actually returns. For example, a JSON-path check against <code>$.steps</code> cannot inspect that field if your hook returned only an answer string.

Choose the scenario for **T-1043**. Do not assume it will always be <code>SC-002</code>.

### 5. Sync, then run one scenario

```text
/sync
/run --only <your-T-1043-scenario-id> --profile local-triage --concurrency 1 --name first-triage-run
```

Replace the placeholder with the generated scenario ID. Review the selected scenario, profile, permissions, and proposed cost before proceeding.

A normal run needs a synchronized agent version. <code>--test</code> is for an intentionally local, unsynchronized experiment; it does not add a run to the shared timeline.

### 6. Open the results

```text
/report
/ui
```

In the stage Web UI, open your project → triage agent → **Runs** → **first-triage-run** → scenario result. Inspect the request, response, and acceptance-criterion evidence. See the [Web UI walkthrough](/support/docs/rook-web-ui/) for screenshots and current stage limitations.

For unsynchronized or offline evidence:

```text
/ui --local
```

In the verified smoke test, the selected scenario passed with four observed tool calls and no unverifiable criteria. That proves this one fixture path worked—not that the whole agent is reliable. Review the four other discovered features before expanding the suite.

### 7. Stop the sample when finished

Enter <code>/exit</code> to leave Rook. Stop the sample server with <code>Ctrl+C</code> in its terminal. Rook results stay below:

```text
.testmuai/rook/projects/<project-id>/agents/<agent-id>/runs/<run-id>/
```

## Connect Your Own Agent Next

Use staging credentials and disposable data. Tell the profile author the real request, answer field, authentication, session semantics, and evidence sources. Do not claim multi-turn state, observable calls, or measured usage unless the target actually supplies them.

[Prompt-based profiles](/support/docs/agent-assurance-profiles/) · [Phases and hooks](/support/docs/rook-hooks-and-phases/) · [Review results](/support/docs/agent-assurance-results-and-evidence/) · [CI/CD](/support/docs/agent-assurance-ci-cd/)
