---
id: rook-profiles-and-hooks
title: Rook Profiles and Hook Contract
hide_title: false
sidebar_label: Profiles & Hooks
description: Generate invocation profiles, understand lifecycle hook inputs and outputs, declare observed capabilities, and split execution from evidence collection.
keywords:
  - rook profiles
  - rook hooks
  - rook execute hook
  - prompt based agent profile
url: https://www.testmuai.com/support/docs/rook-profiles-and-hooks/
site_name: TestMu AI
slug: rook-profiles-and-hooks/
canonical: https://www.testmuai.com/support/docs/rook-profiles-and-hooks/
---

# Rook Profiles and Hook Contract

A profile is a name, the scripts Rook runs to reach an agent, and references to the values those scripts require. Because invocation is executable code instead of a fixed transport schema, anything callable from Node.js can be tested.

## Let Rook Write the Profile

```bash
rook profile add
rook profile add staging --from call.txt
rook profile add local --command 'claude -p'
rook profile test
rook profile fix --what 'the auth header is wrong'
rook profile show staging
rook profile use staging
```

`profile add` accepts a cURL command, command line, API specification, local file, URL, or plain-language notes. Rook writes the hook script, invokes the real target with a small goal, shows the extracted answer, and corrects the implementation when the observed response differs from its assumptions.

`profile fix` runs an existing profile, diagnoses the failure, and repairs the script. Supply `--what` when you already know the problem.

## Lifecycle

Rook passes the phase name as the only script argument. A script implements the phases it needs and exits successfully for the rest. Only `execute` is required.

```text
once per run        once per scenario                     per run
┌─────────┐   ┌─────────────────────────────────────┐   ┌───────┐
│ prepare │ → │ open → execute × turns → close → collect │ → │ judge │
└─────────┘   └─────────────────────────────────────┘   └───────┘
  60 s          30 s    300 s       30 s     120 s       Rook-owned
```

| Phase | When | Typical responsibility | When omitted |
|---|---|---|---|
| `prepare` | Once per run | Sign in, mint a token, or warm a cache | No setup, or scripts read static local environment values |
| `open` | Before each scenario | Create a session or reset fixtures | The target needs no explicit session |
| `execute` | Once per turn | Send the goal and return the answer | Not allowed; this phase is required |
| `close` | After each scenario | End the session or release resources | The target needs no teardown |
| `collect` | After `close` | Fetch traces, logs, usage, calls, or delayed artifacts | The reply is the complete evidence surface |
| `judge` | After collection | Grade criteria from the recorded evidence | Owned by Rook, not the profile |

Authentication, transport, session management, and evidence collection are separate slots. A CLI can require authentication and a session; an HTTP endpoint can require neither. Multi-turn behavior is not its own phase—Rook calls `execute` once for each turn.

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
| `ROOK_STATE_DIR` | Every phase | Per-scenario state directory that survives its phases |
| `ROOK_RUN_ID` | From `prepare` | Current run ID |
| `ROOK_SCENARIO_ID` | From `open` | Current scenario ID |
| `ROOK_SESSION` | From `open` | Stable Rook session ID for the scenario |
| `ROOK_TURN` | `execute` | One-based turn number |
| `ROOK_CONVERSATION` | `execute`, `close`, `collect` | Handle returned by `open` or the previous `execute` |

On `execute`, the arbitrary scenario goal arrives on standard input. No other phase receives standard input. Keeping model-written text out of command-line arguments avoids breakage from quotes, newlines, dollar signs, and backticks.

## Hook Output

Write one JSON object to standard output for `execute` and `collect`. Write diagnostics to standard error.

```json
{
  "output": "Your order ships Tuesday.",
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
| `output` | Required from `execute`; this is the agent answer that Rook judges. |
| `conversation` | A target conversation handle returned from `open` or `execute` and passed back on later turns. |
| `usage` | Observed input and output token counts; enables token-economy scenarios. |
| `calls` | Observed tool calls; enables assertions about what the agent did or did not call. |
| Additional fields | Preserved as run evidence, such as a trace URL or artifact reference. |

If the first turn of a multi-turn scenario returns no conversation handle, Rook stops the scenario. Treating independent calls as one conversation would produce misleading results.

A non-zero exit is a failed hook and standard error is its diagnosis. An `execute` or `collect` failure fails the affected scenario. Failures in the other optional phases are reported while the run preserves completed work.

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
| `hooks` | Phase-to-script mapping. Each entry can also define a timeout and delay. Relative paths resolve from the workspace. |
| `env` | Required local environment references and their operational purpose. The structure has no secret-value field. |
| `capabilities` | Observed evidence capabilities that determine scenario runnability. |
| `hook_env` | Additional references supplied to every hook. Rook-owned `ROOK_*` values take precedence. |
| `concurrency` | Default number of scenarios in flight. Use `1` when hooks touch shared state. |

## Capabilities Are Observed

| Capability | Becomes true when | Enables |
|---|---|---|
| `multi_turn` | A hook returns a conversation handle | Multi-turn and state-context scenarios |
| `calls` | Hook output includes actual target tool calls | `not_called` assertions and action-versus-claim checks |
| `usage` | Hook output contains token counts | Token-economy scenarios |

Rook compares declared capabilities with a real profile test. Optimistic claims are unsafe: declaring `calls` without returning call evidence could make a must-not-call criterion appear to pass without having been observed.

## Timeouts and Delayed Evidence

Default phase timeouts are:

| Phase | Default |
|---|---:|
| `prepare` | 60 seconds |
| `open` | 30 seconds |
| `execute` | 300 seconds |
| `close` | 30 seconds, with a 5-second floor |
| `collect` | 120 seconds |

`delay_seconds` is a minimum elapsed time since the preceding phase, not an unconditional sleep. If collection starts after that interval has already passed, Rook waits nothing. Prefer polling within the collect script when a real readiness signal exists.

For longer evidence delays, split the run:

```bash
rook run --phases prepare,open,execute,close
rook run --run <run-id> --phases collect,judge
```

A phase selection may be a prefix or suffix, never a sequence with a hole.

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

## Related Documentation

- [Prompt-based profile authoring](/support/docs/agent-assurance-profiles/)
- [Lifecycle phases and hooks](/support/docs/rook-hooks-and-phases/)
- [Environment and secrets](/support/docs/rook-environment-and-secrets/)
- [Running scenarios](/support/docs/agent-assurance-run-tests/)
