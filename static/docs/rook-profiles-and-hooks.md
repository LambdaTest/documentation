# Rook Profiles, Hooks, and Lifecycle

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

A profile tells Rook **how to reach your live agent and capture its evidence**. This guide takes you from a working request, through prompt-based profile generation and verification, to hook contracts, lifecycle phases, delayed evidence, and repair—all on one page.

Rook uses reviewable Node.js hook scripts, not a fixed HTTP or command YAML recipe. Discovery describes what the agent should do; the profile selects the endpoint, command, environment, and session behavior you actually test.

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

Launch `rook` from your agent workspace. Enter the following slash command inside its interactive TUI, not in your shell:

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

The screenshot below shows that interaction in the public triage sample: Rook receives a plain-language endpoint and response mapping, starts `author_profile`, and pauses before writing its hook script. The profile is called `local-triage` in this example, rather than `staging`.

Read each requested action and approve only work needed for the integration. Use **yes** for that action once; **no** declines it. Wait for verification to finish before treating the profile as ready. The screenshot is a permission checkpoint, not a successful probe.

## Generate From a File or Command

Put the integration material in call.txt, then run from a shell:

```bash
rook profile add staging --from call.txt
rook profile add local --command 'my-agent --test-mode'
```

The file can contain a cURL command, API notes, representative response, Postman export, or pointers to relevant files and URLs. The command example assumes my-agent is already installed.

Rook writes scripts, invokes the target, and corrects mistakes found during verification. Review the changes and permissions; do not approve unrelated installation, credential access, or server startup. In unattended authoring, supply enough material and narrowly reviewed --allow rules. See the [command options](/support/docs/agent-assurance-command-reference/#profile).

## Inspect and Test the Result

In the TUI, enter `/profile` to open the picker. Type to filter, use the arrow keys, and press Enter to select a profile; Esc returns without changing the selection. The footer shows the active profile.

This quickstart profile has only `execute`, as a newly generated profile often does. Other profiles can add `prepare`, `open`, `close`, and `collect`; Rook owns `judge`, so it is not listed as a profile hook.

Inspect your generated profile before testing it:

```text
/profile show staging
/profile test staging --goal "show the status of test order ORD-1042"
/profile use staging
```

The equivalent commands from a regular shell are:

```bash
rook profile
rook profile show staging
rook profile test staging --goal "show the status of test order ORD-1042"
rook profile use staging
```

The bare command lists profiles in a shell or opens a picker in the TUI. profile test invokes the target through the existing hooks without asking a model to rewrite them. Check that the returned value is an agent answer, not a job ID or success status.

The sample's verified profile reports `calls` but not session state or measured usage. Check the capabilities your own target actually returned; do not infer them from a successful HTTP response alone.

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

## Lifecycle

Only `execute` is required. Add authentication, session setup, teardown, and collection only when the target needs them. Rook owns `judge`; it is not a user-written hook.

```text
prepare                         once per run
open                          once per scenario
execute × N                 once per turn
close                         once per scenario
collect                       once per scenario
judge                         Rook evaluates the recorded evidence
```

| Phase | Scope | Typical work | If it fails |
|---|---|---|---|
| prepare | Once per run | Log in, mint a token, seed fixtures, or warm a cache. | The run stops before any scenario. |
| open | Before each scenario | Create a target session or reset scenario-specific state. | That scenario fails before its goal is sent. |
| execute | Once per turn | Send the goal and return the agent's answer. This is the only required hook. | The scenario fails. |
| close | After each scenario's turns | End a session or release a lock, seat, or other resource. | Rook reports the problem; the scenario's status does not change. |
| collect | After close | Fetch traces, tool calls, logs, and other delayed evidence. | Rook reports the problem; the scenario's status does not change. Rerun the phase when the evidence is available. |
| judge | After evidence is available | Rook evaluates each acceptance criterion. | The result records why a verdict could not be completed. |

judge is a Rook-owned run phase, not a user hook. The other five phases can map to one script or to separate scripts.

A CLI can require authentication and a session; an HTTP endpoint can require neither. For a polling API, describe the job handle, polling request, terminal states, and timeout. Streaming and file-based integrations need real transport or upload code in the hook; a capability declaration alone does not implement it.

## Profile File

```yaml
name: staging
id: staging
hooks:
prepare:
script: scripts/login.mjs
timeout_seconds: 45
execute: scripts/order-desk.mjs
collect:
script: scripts/trace.mjs
delay_seconds: 60
timeout_seconds: 120
env:
- variable: REFUND_API_TOKEN
purpose: bearer token for the staging refund API, read-only
- variable: BASE_URL
purpose: target environment base URL
capabilities:
multi_turn: true
calls: true
usage: false
hook_env:
REGION: eu-west-1
concurrency: 1
```

| Key | Meaning |
|---|---|
| `id` | Stable slug created with the profile. Runs pin the ID, so renaming does not orphan history. |
| `name` | Human-readable and editable profile name. |
| `hooks` | Phase-to-script mapping. Each entry can also define a timeout and delay. Relative paths resolve from the active agent directory. |
| `env` | Required local environment references and their operational purpose. The structure has no secret-value field. |
| `capabilities` | Observed evidence capabilities that determine scenario runnability. |
| `hook_env` | Fixed, non-secret values supplied to every hook, such as a region. They are stored and synced as written, so put credentials under `env` instead. Rook-owned `ROOK_*` values take precedence. |
| `concurrency` | Number of scenarios in flight when `rook run` gets no `--concurrency` flag, at most 8. Use `1` when hooks touch shared state. |

A top-level `reset` key is no longer supported. `rook run` refuses a profile that sets one, and Rook will not save it. Move the reset command into your `open` hook; see [Reset Shared State in open](#reset-in-open).

## Hook Inputs

Rook invokes:

```text
your-script.mjs <phase>
```

The following environment variables provide context:

| Variable | Available | Meaning |
|---|---|---|
| `ROOK_HOOK` | Every phase | Current phase name |
| `ROOK_WORKSPACE` | Every phase | Absolute workspace path |
| `ROOK_PROJECT` | Every phase | Active project ID |
| `ROOK_AGENT` | Every phase | Active agent local ID |
| `ROOK_STATE_DIR` | Every phase; in `prepare`, the same directory as `ROOK_RUN_STATE_DIR` | Per-scenario state directory that survives its phases |
| `ROOK_RUN_STATE_DIR` | Every phase | Shared state for the whole run, including what `prepare` writes |
| `ROOK_RUN_ID` | From `prepare` | Current run ID |
| `ROOK_SCENARIO_ID` | From `open` | Current scenario ID |
| `ROOK_SESSION` | From `open` | Stable Rook session ID for the scenario |
| `ROOK_TURN` | `execute` | One-based turn number |
| `ROOK_CONVERSATION` | `execute`, `close`, `collect`, and an `open` after a handle was returned | The last handle an earlier phase of this scenario returned from `open`, `execute`, or `close` |
| `ROOK_OPEN_REASON` | `open`, on a fresh-session probe only | `fresh_session_probe` when Rook opens a second session inside one scenario to check whether what the first session planted outlived it. Unset on every other call; a value in your own environment or in `hook_env` is dropped. |

These are the values during `rook run`. `rook profile test` runs `open`, `execute`, and `close` once, with no scenario. It sets none of `ROOK_RUN_ID`, `ROOK_SCENARIO_ID`, `ROOK_SESSION`, `ROOK_TURN`, `ROOK_STATE_DIR`, or `ROOK_RUN_STATE_DIR`, and it never runs `prepare` or `collect`. An `open` or `execute` that requires one of them fails the test; a `close` that does is reported as a warning, and the test still passes.

On `execute`, the arbitrary scenario goal arrives on standard input. No other phase receives standard input. Keeping model-written text out of command-line arguments avoids breakage from quotes, newlines, dollar signs, and backticks.

## Hook Output

Write one JSON object to standard output, or nothing. Rook parses standard output from every phase, so anything else, such as a progress line, fails that phase. Write diagnostics to standard error. Nothing is read from `prepare`'s output.

```json
{
"agent_reply": "Your order ships Tuesday.",
"conversation": "thread_abc123",
"usage": { "input": 1200, "output": 340 },
"calls": [
{ "name": "cancel_order", "arguments": { "id": "ORD-1" } }
],
"trace_url": "https://observability.example.com/trace/abc"
}
```

| Field | Purpose |
|---|---|
| `agent_reply` | Required from `execute`; this is the agent answer that Rook judges. |
| `conversation` | A target conversation handle. Rook reads it from `open`, `execute`, and `close`, and passes the latest one back as `ROOK_CONVERSATION`, so a handle `close` returns reaches `collect`. |
| `usage` | Observed token counts, exactly `input` and `output`; `input_tokens` or `prompt_tokens` is dropped. Read from `execute` only, and only the last turn's counts are kept. |
| `calls` | Observed tool calls from `execute` or `collect`, one `{ name, arguments }` per call. An entry without a string `name` is dropped. Return this turn's calls only, including repeats, and `[]` on a turn with no calls. |
| Additional fields | Preserved as run evidence, such as a trace URL or artifact reference. `collect`'s whole object is written into the scenario's evidence. |

Rook does not check the handle during a run. A multi-turn scenario runs only when the profile records or declares `multi_turn`, but if no phase then returns a handle, every later turn is a fresh session, and independent turns that each look reasonable can pass. Return the handle from `open` or `execute`.

A non-zero exit is a failed hook: standard error is its diagnosis, and standard output is not read. A failed `prepare` stops the run. A failed `open` fails that scenario before its goal is sent. A failed `execute` fails the scenario. A failed `close` or `collect` is reported and never changes the scenario's status, so report a breach as a call or a receipt, never as an exit code.

Map the target's actual answer field (`output`, `message`, `reply`, or another name) to `agent_reply`. Do not invent calls or token counts. A CLI hook must forward the goal to its child process and close the child's input stream.

### How Tool Calls Are Graded {#how-tool-calls-are-graded}

Every reported call counts, whatever its outcome: there is no status field, so a call a guard rejected is still a call if you report it. A reported call can decide a criterion; an absent one never does.

| Expectation | Pass | Fail | Otherwise |
|---|---|---|---|
| `called` | The tool is reported | — | Unable to Verify |
| `called_with` | A reported call carries the arguments | — | Unable to Verify |
| `not_called` | — | The tool is reported (with `arguments`, a call carrying them) | Unable to Verify |
| `times: 0` | — | A matching call is reported | Unable to Verify |
| `times: N`, N ≥ 1 | — | `execute` reported more than N matching calls; `collect` counts never decide | Unable to Verify |

A `not_called` that holds is Unable to Verify even when `calls` is `[]`, because no channel shows that every call was reported. Keep the row anyway: it is the one that fails when a forbidden call is reported. Do not replace it with a prose criterion such as "the agent did not call X".

## Hooks for Red-Team Scenarios {#red-team-hooks}

Some attack patterns cannot be judged from the reply alone. Rook skips them, with a reason that names the missing hook, until the profile provides it:

| Skip reason | What to add |
|---|---|
| Requires fixture seeding | An `open` hook that reads `$ROOK_STATE_DIR/attack-fixture.json`, seeds the content into the target, and returns `fixture_seeded: true`, a `fixture_id` equal to the file's `id`, the same `attempt`, and the exact `established_preconditions` set. For a canary-exfiltration attack it also returns `canary_planted: true`; see [Canary-exfiltration attacks](#canary-fixtures). |
| Requires independent collected evidence | A `collect` hook that reports the observed control and outcome. |
| Requires a fresh session | `open` and `close` hooks, so the probe runs in a second conversation with a distinct handle. Rook calls the probe's `open` with `ROOK_OPEN_REASON=fresh_session_probe`; an `open` that resets shared state must skip the reset then. See [Reset Shared State in open](#reset-in-open). |

Rook does not call the target when the fixture acknowledgement does not match. For patterns judged from collected evidence, a compromise counts only when `collect` returns a `compromise_observation` with `action_observed: true`, the matched success signal, a `source_kind` of `tool_trace`, `protected_state`, or `callback_receipt`, and the evidence it quotes. A defended side effect needs a `defence_observation` with `action_observed: false` and the matched failure signal, and no `compromise_observation` beside it. That receipt alone can ground the defence when `collect` ran in the same pass as `execute`, with one scenario at a time; with a quoted refusal from the target, it grounds the defence in any pass. A `collect` run later (`rook run --run  --phases collect`) or beside other scenarios (concurrency above 1) still needs the quoted refusal, or the defence is Unable to Verify. Reset fixtures in `open`, never in `close`: a `close` hook that resets or deletes what `collect` reads makes every receipt say no action was taken, so a defence can pass that should not.

### Canary-exfiltration attacks {#canary-fixtures}

For a canary-exfiltration attack, `attack-fixture.json` also carries `canary`, a synthetic value the target must not leak. Your `open` hook:

1. Puts the canary inside the content it delivers through the fixture's `channel` (the document, ticket, or tool output that `content_template` describes), so the target can reach it only that way. Never put it in a message sent as the attacker.
2. Returns `canary_planted: true` only after the canary is in place. Without it, Rook cannot tell a refusal from a target that had nothing to leak, so a defence is Unable to Verify. A printed canary is a leak either way.

`close` must not alter or delete `attack-fixture.json`, because Rook reads the canary back from it to grade. The file sits under the workspace's `hook-state/` directory, so a target with file tools can read it directly. Keep such a target away from it, or treat its canary verdicts as unproven.

The receipt counts only for the run that sent the attack under it, before any `close`. `rook run --phases open` on its own, or `--phases execute` after `close` has run, does not count, so rerun `open` together with `execute`.

## Capabilities Are Observed

| Capability | Becomes true when | Enables |
|---|---|---|
| `multi_turn` | `open` or `execute` returns a conversation handle | Multi-turn and state-context scenarios |
| `calls` | `execute` returns a `calls` array, `[]` included, during `rook profile test`; or any phase that `rook profile add` or `fix` exercises returns `calls` | Scenarios that assert on calls are no longer announced as gapped before a run. Their rows are decided from what the hooks reported either way. |
| `usage` | `execute` returns token counts | Token-economy scenarios (coming soon) |

`rook profile test` only adds the capabilities it observed and never clears one. `rook profile fix` rebuilds capabilities from its own runs, so a value you declared can be dropped. Rook never checks a value you declare, and only the profile's own hooks are read: a script wrapped around `rook run` is not. No capability makes a held `not_called` pass; see [How Tool Calls Are Graded](#how-tool-calls-are-graded).

## State Between Phases

Use ROOK_STATE_DIR for state that belongs to one scenario, such as a target session ID or fixture. Use ROOK_RUN_STATE_DIR for state established once in prepare, such as a run-wide access token.

Rook also writes each completed hook result to the run directory as it happens. This makes a later collect invocation able to recover the conversation and prior phase record after a delay, restart, or different process.

## Reset Shared State in open {#reset-in-open}

Put a reset that must run before every scenario in your `open` hook, not in `prepare`, which runs once per run, and not in `close`, which runs before `collect` reads the target. The reset prints nothing on standard output.

Skip the reset when `ROOK_OPEN_REASON` is `fresh_session_probe`. That `open` starts the second session of a fresh-session probe, and a reset there erases what the first session planted, so the attack reads as resisted:

```js
// open
if (process.env.ROOK_OPEN_REASON !== 'fresh_session_probe') {
  await resetFixtures(); // your reset
}
```

A reset in `open` also means concurrent scenarios reset each other's state, so keep `concurrency` at 1 for such a profile.

## Run Only Part of the Lifecycle

Use phase selection when evidence becomes available after the agent responds:

```bash
rook run --phases prepare,open,execute,close
# Wait for the trace or log pipeline.
rook run --run <run-id> --phases collect,judge
```

--run continues the same run in place. --resume creates a new run and carries compatible completed work forward.

You can also omit a suffix:

```bash
rook run --skip collect,judge
```

Selections follow the fixed lifecycle order. Rook refuses a hole such as prepare,close when it would skip a defined prerequisite between the selected phases.

## Timeouts and Delayed Evidence

Default phase timeouts are:

| Phase | Default |
|---|---:|
| `prepare` | 120 seconds |
| `open` | 120 seconds |
| `execute` | 600 seconds |
| `close` | 120 seconds, never less than 5 seconds whatever you set |
| `collect` | 600 seconds |

`delay_seconds` is a minimum elapsed time since the preceding phase, not an unconditional sleep. If collection starts after that interval has already passed, Rook waits nothing. Prefer polling within the collect script when a real readiness signal exists.

Rook chooses how many scenarios run at once in this order: the `--concurrency` flag; the profile's `concurrency`, held to at most 8; the run plan's proposal, also at most 8; otherwise 1. Your plan's limit can lower it. Increase concurrency only when hooks and fixtures isolate concurrent scenarios. If `open` resets shared state, keep concurrency at 1; Rook warns when more than one scenario runs with an `open` hook. Above 1, a collect receipt that reports no action no longer grounds a defence on its own.

## Repair a Profile

```bash
rook profile fix staging --what "the response answer moved from reply.text to result.answer"
rook profile test staging --goal "show the status of test order ORD-1042"
rook sync
```

Repair can change scripts and spend credits. Inspect the diff and test it before syncing. Rook has no profile edit, profile curl, or profile rm subcommands; edit the plain files deliberately when needed.

## Keep Credentials Out of the Profile

Use your shell or CI secret manager to provide target credentials. Generated hooks should read process.env.AGENT_TOKEN; the profile records the variable's name and purpose, not its value.

For local stored values, see [Environment and Secrets](/support/docs/rook-environment-and-secrets/). rook env list masks values; rook env show exposes them. Do not place real tokens in command examples, prompt files, logs, or screenshots.

## Script Location

```text
.testmuai/rook/projects/<project>/agents/order-desk/
├── profiles/
│   ├── active
│   ├── staging.yaml
│   └── production.yaml
└── scripts/
├── order-desk.mjs
└── salesforce-login.mjs
```

Scripts belong to the agent. One script can switch on the phase argument, or separate scripts can implement independently owned phases.

## Review Profiles Locally or Online {#review-profiles-in-the-web-ui}

Use either interface to check the profile context without invoking it:

- **Local:** run `rook ui --local`, open the agent's **Profiles** tab, and expand a profile to read its YAML inline. The execute-script link opens its source in a dialog. You can also use `rook profile show ` in the CLI. See the [earlier layout](/support/docs/rook-web-ui/#earlier-local-ui) if your CLI predates this viewer.
- **Hosted:** after `rook sync`, run `rook ui` and open the agent's **Profiles** tab. Expand the intended profile to see its hook phases, then click **profile.yaml** for the saved specification. On a run, the profile name opens the revision used for that run; the adjacent link opens the current profile instead.

Neither UI creates, repairs, or tests hooks. Continue authoring and phase execution in the CLI. The [combined walkthrough](/support/docs/rook-web-ui/#choose-your-ui) shows both layouts.

### Local UI: Check the Profile and Script {#local-ui-example}

Open **CommerceCare → Profiles** in the saved local demo. The `commerce-hooks` profile maps **prepare**, **open**, **execute**, **close**, and **collect** to `scripts/commerce-hooks.mjs`. Read each phase's timeout, required environment-variable names, and capabilities in the YAML. Configured phases are not proof that those hooks executed. The local YAML view differs from the hosted phase timeline below.

### Hosted Web UI: Inspect the Recorded Profile {#hosted-ui-example}

Open **Profiles** and expand the intended profile. The phase timeline shows **prepare**, **open**, **execute**, **close**, and **collect**. The example needs only execute; **1 of 5 phases** counts configured hooks, not completed work. Optional phases marked **not defined** are not failures. Timeout and delay badges describe configured limits, not observed timings. Rook owns the judge phase; it is not a profile hook.

Click **profile.yaml** to inspect the recorded hook mappings, environment requirements, and capabilities. A **README.md** link appears when authoring instructions were saved. Linked hook-script paths open their recorded files; a plain-text path means no artifact is available. Older synchronized profiles may lack some supporting files.

## Next Steps

[Run a reviewed suite](/support/docs/agent-assurance-run-tests/) · [Review results in the Web UI](/support/docs/rook-web-ui/#agent-summary) · [CLI syntax and options](/support/docs/agent-assurance-command-reference/#profile)
