# Troubleshoot Agent Assurance

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Start with diagnostics:

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

## Installation Problems

### `rook: command not found`

Open a new terminal after installation and check:

```bash
command -v rook
echo "$PATH"
```

For a shell installation, rerun the public installer with a writable directory that is already on `PATH`:

```bash
curl -fsSL https://raw.githubusercontent.com/LambdaTest/rook/main/install.sh \
| bash -s -- --dir "$HOME/bin"
```

### npm reports a Node.js engine error

Homebrew and shell installations carry a matching Node.js runtime. The npm installation requires npm to run under Node.js 22 or newer:

```bash
node --version
```

Upgrade the Node.js version used by npm and rerun `npm install -g @testmuai/rook`, or use Homebrew or the shell installer.

### Download resets after the release lookup

Release assets are served from a different GitHub asset domain. A VPN or corporate proxy can allow the public repository request but reset the redirected asset download. Allow `release-assets.githubusercontent.com`, retry outside the VPN, or rerun the public installer from an approved network:

```bash
curl -fsSL https://raw.githubusercontent.com/LambdaTest/rook/main/install.sh | bash
```

## Authentication and Credits

### Rook says you are signed out

```bash
rook login
rook auth status
```

First check ROOK_ENV and exported LT_USERNAME/LT_ACCESS_KEY. The pair takes precedence over stored browser login. If those variables are unintended, unset both in this terminal before signing in again.

### Controller is unreachable

Check `rook doctor`. A network failure is not evidence that the token is invalid. Before repeating login, verify:

- VPN
- DNS
- Proxy
- Controller availability

If the controller remains unreachable, confirm the network, VPN, or proxy requirements with your Rook administrator.

### Credits or budget are exhausted

```text
/plan
```

The current CLI has no /budget command. Read the account balance and operation cost output. Completed evidence remains on disk when work stops; narrow the suite before retrying.

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

If the wrong agent is active, run `/agent` and `/agent use ` first.

## Profile and Invocation Problems

### `rook does not know how to invoke this agent`

Create and verify a profile:

```text
/profile add
/profile test <name>
```

### The profile invokes successfully but extracts the wrong value

Run /profile show &lt;name&gt; and inspect its script. The execute hook must return the answer as agent_reply. Use /profile fix &lt;name&gt; --what the answer field is wrong with representative response material, then test again. Do not return a status or request ID as the answer.

### A required environment variable is missing

```text
/env list
/env set {"VARIABLE_NAME":"value"}
```

The profile should record the variable name; its script reads process.env.VARIABLE_NAME. Prefer your shell or secret manager for sensitive values because command arguments can remain in history.

### HTTP agent returns 401 or 403

- Confirm the profile header scheme and variable name.
- Confirm the stored value is for the target agent, not the Rook controller.
- Check whether the endpoint expects a different tenant, scope, audience, or environment.
- Inspect the generated script and reproduce the request outside Rook without printing credentials. Use /profile fix to repair it; /profile curl is not a current command.

### TLS works in cURL but not Rook

The machine may trust a private certificate that Node.js does not. Configure the hook’s HTTP client or Node.js trust with your approved CA, then test the profile again. Prefer trusted certificates over disabling verification. The old invoke.tls profile recipe does not configure a script-based hook.

### Async agent never completes

Check:

- The hook extracts the correct job handle.
- Polling includes required authentication.
- Terminal success and failure states match the actual API.
- Poll intervals and hook timeout allow the expected duration.

### Multi-turn scenarios are skipped

Have the hook return the real conversation handle and use ROOK_CONVERSATION for subsequent turns. Rook intentionally refuses to simulate multi-turn behavior as independent calls.

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

```text
/run --concurrency 1
```

Concurrent scenarios can write the same observed path, so attribution would otherwise be unreliable.

### Run stopped midway

Inspect the CLI outcome, run.yaml plan and phases, report.yaml totals, and each scenario’s saved records. Do not assume a status field exists in the 0.1.3 plan file. An interrupt can cancel an in-flight call after the target already changed state. Check target state before retrying.

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

```text
/ui --local --no-open
```

Open the printed `http://127.0.0.1:` URL manually. Rook tries a range of loopback ports beginning at 7757. Check whether local security software blocks the process.

The local viewer runs only while its serving command or TUI remains running. Bare /ui opens the hosted app instead.

For missing hosted projects, runs, or inconsistent summary percentages, use the [Web UI troubleshooting table](/support/docs/rook-web-ui/#troubleshooting). Confirm account/environment alignment, project sync, and outstanding run uploads before rerunning the target.

### A run appears in one UI but not the other

The local UI reads the workspace and selected project on this machine; the hosted UI reads uploaded records. For a missing local run, confirm the original workspace and that its run directory is present. Opening a hosted record does not download it locally.

For a missing hosted run, check `ROOK_ENV`, browser identity, and outstanding normal-run uploads with `rook runs sync`. A `--test` run deliberately stays local. Neither UI can recover evidence that was never written. See [how to navigate each UI](/support/docs/rook-web-ui/#choose-your-ui) before rerunning a target that may already have changed state.

#### Local UI: Check What Was Written {#local-ui-example}

On a run's scenario result, scroll to **files**. The sample lists the request, response, hooks, snapshot, verdict, and judge artifact. Inspect these records before retrying; a missing upload does not mean the target was never invoked.

#### Hosted Web UI: Check What Was Uploaded {#hosted-ui-example}

Open **run → scenario → Artefacts** for additional uploaded files; use the other tabs for request, response, and verdict. This sample has judge-working.json. Local files and this tab are not one-to-one lists: the main records have their own hosted tabs.

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

Stop the application normally with `/exit`. If the session contains only disposable test processes and must be terminated, run:

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

Project evidence is under `/.testmuai/rook/`. Global credentials, settings, variables, and sessions are under `~/.testmuai/rook/`, or the directory selected by `ROOK_HOME`.
