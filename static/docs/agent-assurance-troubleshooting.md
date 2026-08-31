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

If you installed a tarball manually, link `rook-/bin/rook` into a directory already on `PATH`.

### Node.js version error

Rook requires Node.js 20 or newer:

```bash
node --version
```

Upgrade Node.js and rerun `rook --version`.

### Download resets after the release lookup

Release assets are served from a different GitHub asset domain. A VPN or corporate proxy can allow the repository request but reset the redirected asset download. Run the installer off VPN, or use:

```bash
gh release download --repo LambdaTest/rook --pattern '*.tar.gz'
```

## Authentication and Credits

### Rook says you are signed out

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

Run `/profile show ` and `/profile test `. Paste a representative response, then set `result.path` to the actual answer, not a status, ID, or metadata field.

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
- Reproduce the request with `/profile curl ` after safely adding the secret outside shared logs.

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

```text
/ui --no-open
```

Open the printed `http://127.0.0.1:` URL manually. Rook tries a range of loopback ports beginning at 7757. Check whether local security software blocks the process.

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
