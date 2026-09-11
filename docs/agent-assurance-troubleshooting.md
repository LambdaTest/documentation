---
id: agent-assurance-troubleshooting
toc_max_heading_level: 2
title: Troubleshoot Agent Assurance
hide_title: false
sidebar_label: Troubleshooting
description: Diagnose Agent Assurance installation, authentication, controller, profile, scenario, MCP, evidence, tmux, and browser-viewer problems.
keywords:
  - rook troubleshooting
  - rook cli errors
  - rook agent unreachable
  - rook faq
url: https://www.testmuai.com/support/docs/agent-assurance-troubleshooting/
site_name: TestMu AI
slug: agent-assurance-troubleshooting/
canonical: https://www.testmuai.com/support/docs/agent-assurance-troubleshooting/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import VerifiedTag from '@site/src/component/verifiedTag';

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": BRAND_URL },
      { "@type": "ListItem", "position": 2, "name": "Support", "item": `${BRAND_URL}/support/docs/` },
      { "@type": "ListItem", "position": 3, "name": "Troubleshoot Agent Assurance", "item": `${BRAND_URL}/support/docs/agent-assurance-troubleshooting/` }
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
      "@id": "https://www.testmuai.com/support/docs/agent-assurance-troubleshooting/"
    },
    "headline": "Troubleshoot Agent Assurance",
    "description": "Diagnose Agent Assurance installation, authentication, controller, profile, scenario, MCP, evidence, tmux, and browser-viewer problems.",
    "url": "https://www.testmuai.com/support/docs/agent-assurance-troubleshooting/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Agent Assurance Platform",
    "keywords": [
      "rook troubleshooting",
      "rook cli errors",
      "rook agent unreachable"
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

# Troubleshoot Agent Assurance

Start with diagnostics:

<VerifiedTag value="Verified" />

```bash
rook --version
rook doctor
rook auth status
```

In the TUI, run `/doctor`. It reports:

- The active environment
- The controller
- The authentication state
- The project storage directory
- Registered agents

<img loading="lazy" src={require('../assets/images/rook/rook-terminal-doctor.png').default} alt="Rook doctor diagnostics showing local environment and controller reachability" width="1227" height="520" className="doc_img"/>

## Installation Problems

### `rook: command not found`

Open a new terminal after installation and check:

<VerifiedTag value="Verified" />

```bash
command -v rook
echo "$PATH"
```

For a shell installation, rerun the public installer with a writable directory that is already on `PATH`:

<VerifiedTag value="Verified" />

```bash
curl -fsSL https://raw.githubusercontent.com/LambdaTest/rook/main/install.sh \
  | bash -s -- --dir "$HOME/bin"
```

### npm reports a Node.js engine error

Homebrew and shell installations carry a matching Node.js runtime. The npm installation requires npm to run under Node.js 22 or newer:

<VerifiedTag value="Verified" />

```bash
node --version
```

Upgrade the Node.js version used by npm and rerun `npm install -g @testmuai/rook`, or use Homebrew or the shell installer.

### Download resets after the release lookup

Release assets are served from a different GitHub asset domain. A VPN or corporate proxy can allow the public repository request but reset the redirected asset download. Allow `release-assets.githubusercontent.com`, retry outside the VPN, or rerun the public installer from an approved network:

<VerifiedTag value="Verified" />

```bash
curl -fsSL https://raw.githubusercontent.com/LambdaTest/rook/main/install.sh | bash
```

## Authentication and Credits

### Rook says you are signed out

<VerifiedTag value="Verified" />

```bash
rook login
rook auth status
```

First check <code>ROOK_ENV</code> and exported <code>LT_USERNAME</code>/<code>LT_ACCESS_KEY</code>. The pair takes precedence over stored browser login. If those variables are unintended, unset both in this terminal before signing in again.

### Controller is unreachable

Check `rook doctor`. A network failure is not evidence that the token is invalid. Before repeating login, verify:

- VPN
- DNS
- Proxy
- Controller availability

If the controller remains unreachable, confirm the network, VPN, or proxy requirements with your Rook administrator.

### Credits or budget are exhausted

<VerifiedTag value="Verified" />

```text
/plan
```

The current CLI has no <code>/budget</code> command. Read the account balance and operation cost output. Completed evidence remains on disk when work stops; narrow the suite before retrying.

## Discovery Problems

### Rook finds no agent

- Start from the repository or agent directory rather than a parent folder.
- Put the PRD, prompts, tool definitions, README, and examples inside the authorized workspace.
- Run `/explore . --force` after adding material.
- If you know the directory is an agent, accept the explicit registration prompt.

### A GitHub URL is rejected

This is expected. Clone the repository and run Rook in the local checkout. Direct URL exploration is not supported.

### External exploration says nothing was recorded

The current release can read an explicitly selected external directory but cannot persist its record. Change into the external checkout and start Rook there.

### Re-exploration says the agent is up to date

Use:

<VerifiedTag value="Verified" />

```text
/explore --force
```

If the wrong agent is active, run `/agent` and `/agent use <id>` first.

## Profile and Invocation Problems

### `rook does not know how to invoke this agent`

Create and verify a profile:

<VerifiedTag value="Verified" />

```text
/profile add
/profile test <name>
```

<img loading="lazy" src={require('../assets/images/rook/rook-terminal-scenarios.png').default} alt="Rook scenario list explaining that scenarios are skipped because no profile exists" width="1100" height="999" className="doc_img"/>

### The profile invokes successfully but extracts the wrong value

Run <code>/profile show &lt;name&gt;</code> and inspect its script. The execute hook must return the answer as <code>agent_reply</code>. Use <code>/profile fix &lt;name&gt; --what the answer field is wrong</code> with representative response material, then test again. Do not return a status or request ID as the answer.

### A required environment variable is missing

<VerifiedTag value="Verified" />

```text
/env list
/env set {"VARIABLE_NAME":"value"}
```

The profile should record the variable name; its script reads <code>process.env.VARIABLE_NAME</code>. Prefer your shell or secret manager for sensitive values because command arguments can remain in history.

### HTTP agent returns 401 or 403

- Confirm the profile header scheme and variable name.
- Confirm the stored value is for the target agent, not the Rook controller.
- Check whether the endpoint expects a different tenant, scope, audience, or environment.
- Inspect the generated script and reproduce the request outside Rook without printing credentials. Use <code>/profile fix</code> to repair it; <code>/profile curl</code> is not a current command.

### TLS works in cURL but not Rook

The machine may trust a private certificate that Node.js does not. Configure the hook’s HTTP client or Node.js trust with your approved CA, then test the profile again. Prefer trusted certificates over disabling verification. The old <code>invoke.tls</code> profile recipe does not configure a script-based hook.

### Async agent never completes

Check:

- The hook extracts the correct job handle.
- Polling includes required authentication.
- Terminal success and failure states match the actual API.
- Poll intervals and hook timeout allow the expected duration.

### Multi-turn scenarios are skipped

Have the hook return the real <code>conversation</code> handle and use <code>ROOK_CONVERSATION</code> for subsequent turns. Rook intentionally refuses to simulate multi-turn behavior as independent calls.

### Streaming response is skipped

The hook must implement the stream or socket client, assemble a usable answer, and emit one JSON object on stdout. Do not forward raw streaming events as hook output. Use a non-streaming endpoint if it is easier to verify.

## Scenario and Run Problems

### Nothing matched a selector

Run `/scenarios list`. Rook also prints the available classes, categories, and tags after an empty selector. Verify spelling and use commas between values.

### Nothing can be attempted

Read the grouped skip reasons, then fix the first execution blocker:

- Verified profile
- Supported text or URL input
- Readable response type
- Conversation mapping
- Required MCP verifier

Native attachment, PR-reference, and image-input delivery are not implemented in the current pre-alpha release.

Usage reporting, tool-call observation, and filesystem observation normally do not prevent invocation. Their affected criteria become **Unable to Verify**, so improve those evidence sources before treating the result as a complete gate.

### Run needs permission in headless mode

Add an exact reviewed `--allow` rule. Headless mode cannot answer a prompt. Do not use broad wildcards simply to make CI pass.

### File evidence cannot be attributed

Run with:

<VerifiedTag value="Verified" />

```text
/run --concurrency 1
```

Concurrent scenarios can write the same observed path, so attribution would otherwise be unreliable.

### Run stopped midway

Inspect the CLI outcome, <code>run.yaml</code> plan and phases, <code>report.yaml</code> totals, and each scenario’s saved records. Do not assume a <code>status</code> field exists in the 0.1.3 plan file. An interrupt can cancel an in-flight call after the target already changed state. Check target state before retrying.

## Result and Evidence Problems

### Why is Unable to Verify not Fail?

It means Rook did not have evidence to decide. Marking it Fail would claim the agent violated a criterion that the harness never observed. Improve observation, then rerun.

### The agent says it created something, but Rook cannot verify it

Add a read-only MCP tool, read endpoint, or filesystem observation. Do not use a create/update tool as a verifier because verification would change state.

### Image exists but content is unverifiable

Rook records file existence, byte size, kind, and supported image dimensions. It does not currently interpret image pixels. Connect an approved image evaluator or accept the explicit content gap.

### Old run changed after scenario edits

Current runs snapshot scenario definitions. If an older pre-alpha run lacks a snapshot, Rook does not fall back to the live store because that would present mutable data as historical evidence.

### Browser viewer does not open

First identify which UI you meant to open:

- **Local UI:** `rook ui --local` starts a loopback viewer over workspace files. No hosted sign-in is needed, but the server must still be running.
- **Hosted Web UI:** `rook ui` opens the selected environment's website. Browser sign-in, project access, and uploaded records are required. It does not start a local server.

If the local browser launch failed, use:

<VerifiedTag value="Verified" />

```text
/ui --local --no-open
```

Open the printed `http://127.0.0.1:<port>` URL manually. Rook tries a range of loopback ports beginning at 7757. Check whether local security software blocks the process.

The local viewer runs only while its serving command or TUI remains running. Bare <code>/ui</code> opens the hosted app instead.

For missing hosted projects, runs, or inconsistent summary percentages, use the [Web UI troubleshooting table](/support/docs/rook-web-ui/#troubleshooting). Confirm account/environment alignment, project sync, and outstanding run uploads before rerunning the target.

### A run appears in one UI but not the other

The local UI reads the workspace and selected project on this machine; the hosted UI reads uploaded records. For a missing local run, confirm the original workspace and that its run directory is present. Opening a hosted record does not download it locally.

For a missing hosted run, check `ROOK_ENV`, browser identity, and outstanding normal-run uploads with `rook runs sync`. A `--test` run deliberately stays local. Neither UI can recover evidence that was never written. See [how to navigate each UI](/support/docs/rook-web-ui/#choose-your-ui) before rerunning a target that may already have changed state.

#### Local UI: Check What Was Written {#local-ui-example}

On a run's scenario result, scroll to **files**. The sample lists the request, response, hooks, snapshot, verdict, and judge artifact. Inspect these records before retrying; a missing upload does not mean the target was never invoked.

<img loading="lazy" src={require('../assets/images/rook/rook-local-evidence.png').default} alt="Local evidence file list used to investigate what a run saved before retrying or uploading" width="1440" height="900" className="doc_img"/>

#### Hosted Web UI: Check What Was Uploaded {#hosted-ui-example}

Open **run → scenario → Artefacts** for additional uploaded files; use the other tabs for request, response, and verdict. This sample has judge-working.json. Local files and this tab are not one-to-one lists: the main records have their own hosted tabs.

<img loading="lazy" src={require('../assets/images/rook/rook-web-result-artefacts.png').default} alt="Hosted Artefacts tab listing judge-working.json beside the result's acceptance criteria" width="1440" height="900" className="doc_img"/>

## MCP Problems

### Server is pending approval

Review its raw command and approve the exact project or discovered definition. A changed definition requires reapproval.

### Server is unsupported transport

Only stdio connections execute today. HTTP, SSE, and WebSocket definitions remain visible but unavailable.

### Server is enabled but a call still prompts

Registry enablement and call permission are separate gates. The registry makes the server eligible. The permission prompt authorizes that specific start or tool call.

### Server disappeared behind another definition

Run `rook mcp list` and inspect origins. A local, project, or user definition may shadow a discovered server with the same name. The discovered row remains visible and is not overwritten.

## Running Rook in tmux

Start a named session:

<VerifiedTag value="Verified" />

```bash
tmux new-session -s rook-test
rook
```

Detach without stopping Rook by pressing `Ctrl+B`, then `D`.

List sessions:

<VerifiedTag value="Verified" />

```bash
tmux list-sessions
```

View and interact with the session again:

<VerifiedTag value="Verified" />

```bash
tmux attach-session -t rook-test
```

Capture recent terminal output without attaching:

<VerifiedTag value="Verified" />

```bash
tmux capture-pane -p -S -200 -t rook-test
```

Stop the application normally with `/exit`. If the session contains only disposable test processes and must be terminated, run:

<VerifiedTag value="Verified" />

```bash
tmux kill-session -t rook-test
```

Killing a session is abrupt. Prefer `/exit` so Rook can close its browser viewer and finish boundary cleanup.

## Frequently Asked Questions

### Does Rook require source code?

No. You can explore and test a PRD-only workspace against a remote profile, but source gives better implementation, tool, and verification context.

### Can Rook test a remote agent?

Yes. Keep the code or PRD local for exploration and point an HTTP profile at the authorized remote test endpoint.

### Can I give Rook only a GitHub URL?

Not currently. Clone the repository first.

### Can Rook test production?

Technically a profile can point there, but Rook provides no rollback or write virtualization. The recommended workflow is a disposable test or staging environment.

### Does a passing report prove the agent is safe?

No. It proves only what the selected scenarios and available evidence established. Review:

- Scenario breadth
- Coverage
- Verification gaps
- Repeatability
- Target configuration

### Where is my data stored?

Project evidence is under `<project>/.testmuai/rook/`. Global credentials, settings, variables, and sessions are under `~/.testmuai/rook/`, or the directory selected by `ROOK_HOME`.
