---
id: agent-assurance-profiles
toc_max_heading_level: 2
title: Configure Agent Assurance Invocation Profiles
hide_title: false
sidebar_label: Invocation Profiles
description: Generate and verify Rook profiles from prompts, cURL requests, files, or commands, with reviewable lifecycle hooks and real evidence.
keywords:
  - rook profile
  - ai agent http testing
  - ai agent curl profile
  - multimodal agent testing
url: https://www.testmuai.com/support/docs/agent-assurance-profiles/
site_name: TestMu AI
slug: agent-assurance-profiles/
canonical: https://www.testmuai.com/support/docs/agent-assurance-profiles/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import VerifiedTag from '@site/src/component/verifiedTag';

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": BRAND_URL },
      { "@type": "ListItem", "position": 2, "name": "Support", "item": `${BRAND_URL}/support/docs/` },
      { "@type": "ListItem", "position": 3, "name": "Invocation Profiles", "item": `${BRAND_URL}/support/docs/agent-assurance-profiles/` }
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
      "@id": "https://www.testmuai.com/support/docs/agent-assurance-profiles/"
    },
    "headline": "Configure Agent Assurance Invocation Profiles",
    "description": "Generate and verify Rook profiles from prompts, cURL requests, files, or commands, with reviewable lifecycle hooks and real evidence.",
    "url": "https://www.testmuai.com/support/docs/agent-assurance-profiles/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Agent Assurance Platform",
    "keywords": [
      "rook profile",
      "ai agent http testing",
      "ai agent curl profile"
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

# Configure Agent Assurance Invocation Profiles

A profile tells Rook **how to reach your live agent and capture its evidence**. Discovery describes what the agent should do; a profile chooses the endpoint, command, environment, and session behavior you actually test.

Rook 0.1.3 uses Node.js hook scripts, not a fixed HTTP or command YAML recipe. Rook can generate those scripts from your integration notes, try them against the target, and repair them using the actual response.

## Before You Start

Select a project and agent. Make one harmless request outside Rook first, and gather:

- The working cURL request or local command, with secrets replaced by environment-variable names.
- The request field that receives the goal and the response field containing the answer.
- Session creation/resume details, if the target is genuinely multi-turn.
- Any polling needed for asynchronous results.
- Where real tool calls, usage, files, or traces can be read.
- Test fixtures and restrictions on writes.

Profile authoring and repair use credits and invoke the target. Those calls have real effects. Start with a staging endpoint and a harmless probe goal.

## Add a Profile Interactively

```text
/profile add staging
```

Describe the integration in plain language. For example:

```text
Call POST https://agent.staging.example.com/v1/chat.
Read AGENT_TOKEN from the environment and use it as a Bearer token.
Send the goal in the message field.
The answer is response.reply.text; return that as agent_reply.
This endpoint has no conversational state.
Use "show the status of test order ORD-1042" to verify it.
Do not issue refunds or change the test order during verification.
```

This is a template; replace the endpoint, fields, and fixture with a request you have verified.

## Generate From a File or Command

Put the integration material in <code>call.txt</code>, then run from a shell:

```bash
rook profile add staging --from call.txt
rook profile add local --command 'my-agent --test-mode'
```

The file can contain a cURL command, API notes, representative response, Postman export, or pointers to relevant files and URLs. The command example assumes <code>my-agent</code> is already installed.

Rook writes scripts, invokes the target, and corrects mistakes found during verification. Review the changes and permissions; do not approve unrelated installation, credential access, or server startup. In unattended authoring, supply enough material and narrowly reviewed <code>--allow</code> rules. See the [command options](/support/docs/rook-command-profile/).

## Inspect and Test the Result

```bash
rook profile
rook profile show staging
rook profile test staging --goal "show the status of test order ORD-1042"
rook profile use staging
```

The bare command lists profiles in a shell or opens a picker in the TUI. <code>profile test</code> invokes the existing hooks without asking a model to rewrite them. Check that the returned value is an agent answer, not a job ID or success status.

Generated files live below:

```text
.testmuai/rook/projects/<project-id>/agents/<agent-id>/
  profiles/staging.yaml
  scripts/staging.mjs
```

For a single-turn HTTP target, a minimal generated profile looks like:

```yaml
id: staging
name: staging
hooks:
  execute: scripts/staging.mjs
env:
  - variable: AGENT_TOKEN
    purpose: Access to the staging agent
capabilities:
  calls: false
  usage: false
  multi_turn: false
concurrency: 1
```

Hook paths resolve from the **active agent directory**, not the workspace root.

## Return the Answer and Evidence

During <code>execute</code>, Rook passes the scenario goal on stdin. Your script writes one JSON object on stdout and diagnostics on stderr:

```json
{
  "agent_reply": "Order ORD-1042 is awaiting shipment.",
  "calls": [
    { "name": "get_order", "arguments": { "id": "ORD-1042" } }
  ]
}
```

The answer key is <code>agent_reply</code>, even if the target API calls its field <code>output</code>, <code>message</code>, or <code>reply</code>. Map the real response in the script. Do not invent calls or token counts to satisfy a criterion.

See the [full hook contract](/support/docs/rook-profiles-and-hooks/) for context variables, output fields, timeouts, and error behavior.

## Add Phases Only Where Needed

| Need | Profile hook |
|---|---|
| Authenticate or prepare shared state once | <code>prepare</code> |
| Open a real session or reset one scenario's fixtures | <code>open</code> |
| Send each turn and return the answer | <code>execute</code> (required) |
| Close a session or release resources | <code>close</code> |
| Poll for delayed traces, calls, logs, or artifacts | <code>collect</code> |

Rook owns <code>judge</code>; it is not a user script. Tell the profile author how each required phase should behave. For a polling API, explain the job handle, polling request, terminal states, and timeout. For streaming or file-based integrations, the hook must implement the actual transport or upload; a capability declaration alone does not do it.

For multi-turn targets, return the real <code>conversation</code> handle and use <code>ROOK_CONVERSATION</code> on later turns. An echoed request ID is not proof of conversation state.

## Repair a Profile

```bash
rook profile fix staging --what "the response answer moved from reply.text to result.answer"
rook profile test staging --goal "show the status of test order ORD-1042"
rook sync
```

Repair can change scripts and spend credits. Inspect the diff and test it before syncing. Rook has no <code>profile edit</code>, <code>profile curl</code>, or <code>profile rm</code> subcommands in 0.1.3; edit the plain files deliberately when needed.

## Keep Credentials Out of the Profile

Use your shell or CI secret manager to provide target credentials. Generated hooks should read <code>process.env.AGENT_TOKEN</code>; the profile records the variable's name and purpose, not its value.

For local stored values, see [Environment and Secrets](/support/docs/rook-environment-and-secrets/). <code>rook env list</code> masks values; <code>rook env show</code> exposes them. Do not place real tokens in command examples, prompt files, logs, or screenshots.

## Review Profiles in the Web UI

After <code>rook sync</code>, the agent's **Summary** page shows its profiles and mapped phases. Use **View Full Spec** to inspect the recorded profile. A run's **Profile** link identifies the revision used for that run—not necessarily the current local file.

[Web UI walkthrough](/support/docs/rook-web-ui/) · [Lifecycle phases](/support/docs/rook-hooks-and-phases/) · [Run tests](/support/docs/agent-assurance-run-tests/)
