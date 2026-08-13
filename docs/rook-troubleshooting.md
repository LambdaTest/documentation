---
id: rook-troubleshooting
title: Troubleshoot Rook
hide_title: false
sidebar_label: Troubleshooting and FAQ
description: Diagnose Rook installation, authentication, controller, profile, scenario, MCP, evidence, tmux, and browser-viewer problems.
keywords:
  - rook troubleshooting
  - rook cli errors
  - rook agent unreachable
  - rook faq
url: https://www.testmuai.com/support/docs/rook-troubleshooting/
site_name: TestMu AI
slug: rook-troubleshooting/
canonical: https://www.testmuai.com/support/docs/rook-troubleshooting/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": BRAND_URL },
      { "@type": "ListItem", "position": 2, "name": "Support", "item": `${BRAND_URL}/support/docs/` },
      { "@type": "ListItem", "position": 3, "name": "Troubleshoot Rook", "item": `${BRAND_URL}/support/docs/rook-troubleshooting/` }
    ]
  }) }}
/>

# Troubleshoot Rook

Start with diagnostics:

```bash
rook --version
rook doctor
rook auth status
```

In the TUI, run `/doctor`. It reports the active environment, controller, authentication state, project storage directory, and registered agents.

<img loading="lazy" src={require('../assets/images/rook/rook-terminal-doctor.png').default} alt="Rook doctor diagnostics showing local environment and controller reachability" width="1227" height="520" className="doc_img"/>

## Installation Problems

### `rook: command not found`

Open a new terminal after installation and check:

```bash
command -v rook
echo "$PATH"
```

If you installed a tarball manually, link `rook-<sha>/bin/rook` into a directory already on `PATH`.

### Node.js version error

Rook requires Node.js 20 or newer:

```bash
node --version
```

Upgrade Node.js and rerun `rook --version`.

### GitHub download is unauthorized

Confirm that the authenticated GitHub account can read the private repository:

```bash
gh auth status
gh repo view LambdatestIncPrivate/rook
```

Then retry the installer using `gh auth token`.

### Download resets after the release lookup

Release assets are served from a different GitHub asset domain. A VPN or corporate proxy can allow the repository request and reset the redirected asset download. Try the installer off VPN or use:

```bash
gh release download --repo LambdatestIncPrivate/rook --pattern '*.tar.gz'
```

## Authentication and Credits

### Rook says you are signed out

```bash
rook login
rook auth status
```

If the token was revoked, logging in again is required. Nothing signs in automatically.

### Controller is unreachable

Check `rook doctor`. A network failure is not evidence that the token is invalid. Verify VPN, DNS, proxy, and controller availability before repeating login.

In local development, confirm the controller listens on `http://localhost:8080` and has a configured model provider.

### Credits or budget are exhausted

```text
/plan
/budget
```

Rook warns at 70%, stops starting new work at 90%, and halts at 100%. In-flight work finishes and completed scenarios remain on disk. Narrow the suite before increasing the budget.

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

```text
/explore --force
```

If the wrong agent is active, run `/agent` and `/agent use <id>` first.

## Profile and Invocation Problems

### `rook does not know how to invoke this agent`

Create and verify a profile:

```text
/profile add
/profile test <name>
```

<img loading="lazy" src={require('../assets/images/rook/rook-terminal-scenarios.png').default} alt="Rook scenario list explaining that scenarios are skipped because no profile exists" width="1100" height="999" className="doc_img"/>

### The profile invokes successfully but extracts the wrong value

Run `/profile show <name>` and `/profile test <name>`. Paste a representative response and set `result.path` to the actual answer, not a status, ID, or metadata field.

### A required environment variable is missing

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

The machine may trust a private certificate that Node.js does not. Configure `tls.trust: system` or an explicit `ca_file`. Preserve `-k` only when disabling verification is an intentional test-environment decision.

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

Read the grouped skip reasons. Fix the first execution blocker: verified profile, supported text or URL input, readable response type, conversation mapping, or required MCP verifier. Native attachment, PR-reference, and image-input delivery are not implemented in the current pre-alpha release.

Usage reporting, tool-call observation, and filesystem observation normally do not prevent invocation. Their affected criteria become **Unable to Verify**, so improve those evidence sources before treating the result as a complete gate.

### Run needs permission in headless mode

Add an exact reviewed `--allow` rule. Headless mode cannot answer a prompt. Do not use broad wildcards simply to make CI pass.

### File evidence cannot be attributed

Run with:

```text
/run --concurrency 1
```

Concurrent scenarios can write the same observed path, so attribution would otherwise be unreliable.

### Run stopped midway

Check `run.yaml` for status and stop reason. Budget, authentication, interrupt, and controller failures halt at scenario boundaries. Completed evidence is preserved; Rook does not invent verdicts for scenarios that never ran.

## Result and Evidence Problems

### Why is Unable to Verify not Fail?

It means Rook did not have evidence to decide. Marking it Fail would claim the agent violated a criterion that the harness never observed. Improve observation and rerun.

### The agent says it created something, but Rook cannot verify it

Add a read-only MCP tool, read endpoint, or filesystem observation. Do not use a create/update tool as a verifier because verification would change state.

### Image exists but content is unverifiable

Rook records file existence, byte size, kind, and supported image dimensions. It does not currently interpret image pixels. Connect an approved image evaluator or accept the explicit content gap.

### Old run changed after scenario edits

Current runs snapshot scenario definitions. If an older pre-alpha run lacks a snapshot, Rook does not fall back to the live store because that would present mutable data as historical evidence.

### Browser viewer does not open

Use:

```text
/ui --no-open
```

Open the printed `http://127.0.0.1:<port>` URL manually. Rook tries a range of loopback ports beginning at 7757. Check whether local security software blocks the process.

The viewer exists only while the Rook TUI process is running.

## MCP Problems

### Server is pending approval

Review its raw command and approve the exact project or discovered definition. A changed definition requires reapproval.

### Server is unsupported transport

Only stdio connections execute today. HTTP, SSE, and WebSocket definitions remain visible but unavailable.

### Server is enabled but a call still prompts

Registry enablement and call permission are separate gates. The registry makes the server eligible; the permission prompt authorizes that specific start or tool call.

### Server disappeared behind another definition

Run `rook mcp list` and inspect origins. A local, project, or user definition may shadow a discovered server with the same name. The discovered row remains visible and is not overwritten.

## Running Rook in tmux

Start a named session:

```bash
tmux new-session -s rook-test
rook
```

Detach without stopping Rook by pressing `Ctrl+B`, then `D`.

List sessions:

```bash
tmux list-sessions
```

View and interact with the session again:

```bash
tmux attach-session -t rook-test
```

Capture recent terminal output without attaching:

```bash
tmux capture-pane -p -S -200 -t rook-test
```

Stop the application normally with `/exit`. If the session contains only disposable test processes and must be terminated:

```bash
tmux kill-session -t rook-test
```

Killing a session is abrupt. Prefer `/exit` so Rook can close its browser viewer and finish boundary cleanup.

## Frequently Asked Questions

### Does Rook require source code?

No. A PRD-only workspace can be explored and tested against a remote profile, but source gives better implementation, tool, and verification context.

### Can Rook test a remote agent?

Yes. Keep the code or PRD local for exploration and point an HTTP profile at the authorized remote test endpoint.

### Can I give Rook only a GitHub URL?

Not currently. Clone the repository first.

### Can Rook test production?

Technically a profile can point there, but Rook provides no rollback or write virtualization. The documented and recommended workflow is a disposable test or staging environment.

### Does a passing report prove the agent is safe?

No. It proves only what the selected scenarios and available evidence established. Review scenario breadth, coverage, verification gaps, repeatability, and target configuration.

### Where is my data stored?

Project evidence is under `<project>/.testmuai/rook/`. Global credentials, settings, variables, and sessions are under `~/.testmuai/rook/`, or the directory selected by `ROOK_HOME`.
