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
    "articleSection": "Agent Testing",
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
    "hasPart": [
      {
        "@type": "SoftwareSourceCode",
        "name": "Start with diagnostics",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "rook --version\nrook doctor\nrook auth status"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Open a new terminal after installation and check",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "command -v rook\necho \"$PATH\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "For a shell installation, rerun the public installer with a writable directory that is already on PATH",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "curl -fsSL https://raw.githubusercontent.com/LambdaTest/rook/main/install.sh \\\n  | bash -s -- --dir \"$HOME/bin\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "The npm installation requires npm to run under Node.js 22 or newer",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "node --version"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Allow release-assets.githubusercontent.com, retry outside the VPN, or rerun the public installer from an approved network",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "curl -fsSL https://raw.githubusercontent.com/LambdaTest/rook/main/install.sh | bash"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Rook says you are signed out",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "rook login\nrook auth status"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Credits or budget are exhausted",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "/plan\n/budget"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Use",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "/explore --force"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Create and verify a profile",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "/profile add\n/profile test <name>"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "A required environment variable is missing",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "/env list\n/env set <VARIABLE_NAME>"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Run with",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "/run --concurrency 1"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Use",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "/ui --no-open"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Start a named session",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "tmux new-session -s rook-test\nrook"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "List sessions",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "tmux list-sessions"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "View and interact with the session again",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "tmux attach-session -t rook-test"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Capture recent terminal output without attaching",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "tmux capture-pane -p -S -200 -t rook-test"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "If the session contains only disposable test processes and must be terminated, run",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "tmux kill-session -t rook-test"
      }
    ],
    "dateModified": "2026-09-07T12:29:55+05:30"
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

If the token was revoked, log in again. Nothing signs in automatically.

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
/budget
```

Rook enforces these budget thresholds:

- **70%:** Rook warns you.
- **90%:** Rook stops starting new work.
- **100%:** Rook halts.

In-flight work finishes, and completed scenarios remain on disk. Narrow the suite before increasing the budget.

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

Run `/profile show <name>` and `/profile test <name>`. Paste a representative response, then set `result.path` to the actual answer, not a status, ID, or metadata field.

### A required environment variable is missing

<VerifiedTag value="Verified" />

```text
/env list
/env set <VARIABLE_NAME>
```

The profile should keep `${VARIABLE_NAME}`, not the literal secret.

### HTTP agent returns 401 or 403

- Confirm the profile header scheme and variable name.
- Confirm the stored value is for the target agent, not the Rook controller.
- Check whether the endpoint expects a different tenant, scope, audience, or environment.
- Reproduce the request with `/profile curl <name>` after safely adding the secret outside shared logs.

### TLS works in cURL but not Rook

The machine may trust a private certificate that Node.js does not. Configure `tls.trust: system` or an explicit `ca_file`. Keep `-k` only when disabling verification is an intentional test-environment decision.

### Async agent never completes

Check:

- `poll.handle_path` points into the initial response.
- The poll request includes required headers.
- `ready_when.json_path` and terminal values match the actual response.
- `max_attempts`, interval, and timeout allow the expected duration.

### Multi-turn scenarios are skipped

Configure `conversation.kind`, the response ID path, and how the next request sends or resumes the session. Rook intentionally refuses to simulate multi-turn behavior as independent calls.

### Streaming response is skipped

SSE, NDJSON, and WebSocket response kinds are recorded but not executed in the current release. Use a non-streaming JSON or text endpoint when available.

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

Check `run.yaml` for the status and stop reason. Budget, authentication, interrupt, and controller failures halt at scenario boundaries. Completed evidence is preserved. Rook does not invent verdicts for scenarios that never ran.

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

Use:

<VerifiedTag value="Verified" />

```text
/ui --no-open
```

Open the printed `http://127.0.0.1:<port>` URL manually. Rook tries a range of loopback ports beginning at 7757. Check whether local security software blocks the process.

The viewer runs only while the Rook TUI process is running.

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
