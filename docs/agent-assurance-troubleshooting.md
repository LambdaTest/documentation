---
id: agent-assurance-troubleshooting
toc_max_heading_level: 2
title: Troubleshoot Agent Assurance
hide_title: false
sidebar_label: Troubleshooting
description: Diagnose Rook installation, authentication, profiles, skipped scenarios, RCA, evidence, MCP, and local or hosted UI problems.
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
    "description": "Diagnose Rook installation, authentication, profiles, skipped scenarios, RCA, evidence, MCP, and local or hosted UI problems.",
    "url": "https://www.testmuai.com/support/docs/agent-assurance-troubleshooting/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Agent Assurance",
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
    "dateModified": "2026-09-25"
  }) }}
/>

# Troubleshoot Agent Assurance

Start with read-only diagnostics before retrying a run. These CLI checks were reviewed against **public Rook 0.1.5** on September 25, 2026. In PowerShell, use `rook.cmd` if the npm PowerShell shim is blocked.

<VerifiedTag value="Verified" />

```bash
rook --version
rook doctor
rook auth status
```

In the TUI, run `/doctor`. It reports the Rook and Node.js versions, workspace, environment, controller/API reachability, authentication, active project, and interaction mode. It does **not** invoke your agent or prove that its profile works. Use `rook status --json` to inspect the selected agent's local state separately.

If you use a coding assistant with the [Rook skill](/support/docs/rook-coding-agents/), send this prompt instead of manually running the diagnostic sequence:

```text
Use the rook skill to diagnose this error from read-only CLI diagnostics and saved
evidence. Confirm the workspace, project, agent, CLI version, and relevant run ID.
Explain the first blocker and the smallest proposed fix. Do not change credentials,
update Rook, invoke the agent, rerun tests, or run paid RCA without my approval.
```

This interactive <code>/doctor</code> capture uses a saved demo workspace with no credentials. Both services are reachable, but authentication is missing: signing in is the next step, not changing the target profile or rerunning scenarios.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-reference-doctor.png').default} alt="Rook 0.1.5 interactive doctor output showing reachable production services and a signed-out demo session" width="2200" height="1520" className="doc_img"/>

## Installation Problems

### `rook: command not found`

Open a new terminal after installation. On macOS or Linux, check:

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

On native Windows, check the npm shim and global prefix:

```powershell
Get-Command rook.cmd -ErrorAction SilentlyContinue
npm.cmd prefix -g
rook.cmd --version
```

If the shim exists but is not found, add the printed npm prefix to your **user PATH**, then reopen PowerShell. If installation is missing, follow [Windows setup](/support/docs/rook-installation/#windows). A `rook.ps1 cannot be loaded` error does not require weakening the machine's execution policy: use `rook.cmd`. Do not run the Bash installer in native PowerShell; there is no public `install.ps1`.

Keep Rook, Node.js, the checkout, and local target processes in the same environment. A Windows installation and a WSL installation are separate; see [WSL setup](/support/docs/rook-installation/#windows-wsl).

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
- After reviewing the discovery scope and credit use, run `/explore . --force` to analyze added material.
- If you know the directory is an agent, accept the explicit registration prompt.

An “up to date” message or zero newly analyzed files is not proof that an agent is ready to run. Check the selected agent and its discovered features with `/status` before generating scenarios.

### A GitHub URL is rejected

This is expected. Clone the repository and run Rook in the local checkout. Direct URL exploration is not supported.

### External exploration says nothing was recorded

The current release can read an explicitly selected external directory but cannot persist its record. Change into the external checkout and start Rook there.

### Re-exploration says the agent is up to date

Confirm that the right agent is selected with `/agent` and `/agent use <id>`. If its source changed and you want to pay for fresh analysis, use:

<VerifiedTag value="Verified" />

```text
/explore --force
```

## Profile and Invocation Problems

### `rook does not know how to invoke this agent`

Create and verify a profile after reviewing its target endpoint, hooks, required secrets, and test goal:

<VerifiedTag value="Verified" />

```text
/profile add
/profile test <name>
```

Profile authoring or repair can spend credits and use approved tools. A profile test invokes the target and can change its state. Prefer a disposable target and an explicit **reply-only goal** for a connection check; approve the test separately from drafting the profile. See [profiles and lifecycle hooks](/support/docs/rook-profiles-and-hooks/).

Use <code>/help profile</code> to check the available operations before approving a repair or connection test:

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-profile.png').default} alt="Rook 0.1.5 interactive profile help showing add, fix, test, and test goal options" width="2200" height="1680" className="doc_img"/>

### The profile invokes successfully but extracts the wrong value

Run <code>/profile show &lt;name&gt;</code> and inspect its script. The execute hook must return the answer as <code>agent_reply</code>. Use <code>/profile fix &lt;name&gt; --what the answer field is wrong</code> with representative response material, then test again. Do not return a status or request ID as the answer.

### A required environment variable is missing

<VerifiedTag value="Verified" />

```text
/env list
/env set {"VARIABLE_NAME":"value"}
```

The profile should record the variable name; its script reads <code>process.env.VARIABLE_NAME</code>. Prefer your shell or secret manager for sensitive values because command arguments can remain in history. Rook also supports <code>rook env set --from /path/to/private.env</code> or a JSON file. Keep that file outside version control and restrict access. Do not put real secret values in screenshots, assistant prompts, or support tickets.

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
- A recognized input kind and a hook that can deliver it
- Readable response type
- Conversation mapping
- Required MCP verifier

Public 0.1.5 recognizes <code>text</code>, <code>text+file</code>, <code>url</code>, <code>pr_ref</code>, <code>image</code>, and <code>structured</code> input kinds. Recognition alone does not prove your hook uploads an attachment or sends an image correctly: inspect the saved request and profile capabilities. Unknown input kinds and unsupported conversation setup can still block execution.

A <code>token_economy</code> scenario is blocked if the profile does not report usage. Other missing observations, such as tool-call or filesystem evidence, can leave affected criteria **Unable to Verify**. Read the exact skip reason and criterion evidence rather than assuming every observation gap is harmless.

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

Inspect the CLI outcome, <code>run.yaml</code> plan and phases, <code>report.yaml</code> totals, and each scenario’s saved records. Do not assume every CLI version writes a top-level <code>status</code> field in the plan file. An interrupt can cancel an in-flight call after the target already changed state. Check target state before approving a retry or resume.

## Result and Evidence Problems

### Why is Unable to Verify not Fail?

It means Rook did not have evidence to decide. Marking it Fail would claim the agent violated a criterion that the harness never observed. Improve observation, then rerun.

### The agent says it created something, but Rook cannot verify it

Add a read-only MCP tool, read endpoint, or filesystem observation. Do not use a create/update tool as a verifier because verification would change state.

### Image exists but content is unverifiable

Rook records file existence, byte size, kind, and supported image dimensions. It does not currently interpret image pixels. Connect an approved image evaluator or accept the explicit content gap.

### Old run changed after scenario edits

Current runs snapshot scenario definitions. If an older pre-alpha run lacks a snapshot, Rook does not fall back to the live store because that would present mutable data as historical evidence.

### Where is the root-cause analysis? {#rca-troubleshooting}

A normal <code>rook report &lt;run-id&gt;</code> reads saved results; it does not automatically investigate their causes. First review the failed criteria and evidence for the exact run. Then, with separate approval for credit use and tool access, request <code>rook report &lt;run-id&gt; --rca</code>. Follow the [RCA walkthrough](/support/docs/agent-assurance-command-reference/#root-cause-analysis) for the full sequence and report fields.

- **No cause or remedy is present:** analysis may not have run or may not have enough evidence. Missing fields mean unknown, not “no problem.”
- **A previous explanation is not reused:** reuse depends on a known, matching agent version. Changed or unknown versions can need fresh paid analysis. Do not keep retrying RCA as a diagnostic probe.
- **RCA output does not parse as JSON:** let the approved analysis finish, then use <code>rook report &lt;run-id&gt; --json</code> as a separate saved-report read. Do not request another paid analysis just to obtain JSON.
- **The verdict did not change:** RCA proposes causes and remedies; it does not fix your agent or convert **Unable to Verify** to **Pass**. Validate an approved fix in a new, explicitly scoped run.

Saved-report RCA is different from adding <code>--rca</code> to <code>rook run</code>: the latter also invokes the target for the selected scenarios.

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

On a run's scenario result, open **Evidence** and choose **Request**, **Response**, **Verdict**, or **Artefacts**. This saved CommerceCare demo has collect and judge artifacts. The drawer does not list the full workspace: inspect `hooks.json`, `snapshot.yaml`, and nested records in the [original run directory](/support/docs/rook-workspace-files/) when needed. A missing upload does not mean the target was never invoked. For older layouts, stale bookmarks, or missing viewer assets, see [local UI troubleshooting](/support/docs/rook-web-ui/#earlier-local-ui).

<img loading="lazy" src={require('../assets/images/rook/rook-local-evidence.png').default} alt="Local CommerceCare Artefacts drawer used to inspect saved collect and judge evidence before retrying" width="1440" height="900" className="doc_img"/>

#### Hosted Web UI: Check What Was Uploaded {#hosted-ui-example}

Open **run → scenario → Evidence → Artefacts** for additional uploaded files; use the drawer's other tabs for request, response, and verdict. This sample has judge-working.json. Local files and this tab are not one-to-one lists: the main records have their own hosted tabs.

<img loading="lazy" src={require('../assets/images/rook/rook-web-result-artefacts.png').default} alt="Hosted evidence drawer with Artefacts selected and judge-working.json available for inspection" width="1440" height="900" className="doc_img"/>

## MCP Problems

### Server is pending approval

Review its raw command and approve the exact project or discovered definition. A changed definition requires reapproval.

### Server is unsupported transport

Only stdio connections execute today. HTTP, SSE, and WebSocket definitions remain visible but unavailable.

### Server is enabled but a call still prompts

Registry enablement and call permission are separate gates. The registry makes the server eligible. The permission prompt authorizes that specific start or tool call.

### Server disappeared behind another definition

Run `rook mcp list` and inspect origins. A local, project, or user definition may shadow a discovered server with the same name. The discovered row remains visible and is not overwritten.

## Share a Useful Support Report {#support-report}

Include the CLI version, operating system, installation method, exact command with secrets removed, first error, and whether you are reviewing the local or hosted UI. Include the selected project/agent and run ID only in an authorized support channel.

Use a **session ID**, not a scenario run ID, when locating diagnostic session files:

```bash
rook doctor --session <session-id>
rook export logs --out ./rook-diagnostics.zip --session <session-id>
```

If you do not have a session ID, start with <code>rook export logs --out ./rook-diagnostics.zip</code>. Export creates a local bundle; it does not upload it. Avoid <code>--all-sessions</code> unless support needs the broader scope. Review the archive for credentials, prompts, target data, paths, and transcripts before sharing. See [diagnostic export options](/support/docs/agent-assurance-command-reference/#export).

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
