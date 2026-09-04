# Rook Lifecycle Phases and Hooks

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Rook reaches an agent through **hooks**: scripts assigned to named points in a fixed run lifecycle. This makes agents behind logins, sessions, CLIs, asynchronous APIs, sockets, and custom evidence systems testable without forcing them into a predefined transport schema.

A profile must define an execute hook. The other hooks are optional. Rook owns their order; your scripts own how each phase talks to the target.

~~~text
prepare                         once per run
  open                          once per scenario
    execute × N                 once per turn
  close                         once per scenario
  collect                       once per scenario
  judge                         Rook evaluates the recorded result
~~~

## Run and Hook Phases

| Phase | Scope | Typical work | If it fails |
|---|---|---|---|
| prepare | Once per run | Log in, mint a token, seed fixtures, or warm a cache. | The problem is reported and the run preserves its records. |
| open | Before each scenario | Create a target session or reset scenario-specific state. | The problem is reported with the scenario. |
| execute | Once per turn | Send the goal and return the agent's answer. This is the only required hook. | The scenario fails. |
| close | After each scenario's turns | End a session or release a lock, seat, or other resource. | Rook records and reports the problem without discarding the answer. |
| collect | After close | Fetch traces, tool calls, usage, logs, and other delayed evidence. | The scenario fails; the phase can be retried later when evidence is available. |
| judge | After evidence is available | Rook evaluates each acceptance criterion. | The result records why a verdict could not be completed. |

judge is a Rook-owned run phase, not a user hook. The other five phases can map to one script or to separate scripts.

## Define Hooks in a Profile

Hook paths are relative to the active agent's directory unless you provide an absolute path.

~~~yaml
id: refund-staging
name: Refund staging
hooks:
  prepare: scripts/refund-agent.mjs
  open: scripts/refund-agent.mjs
  execute:
    script: scripts/refund-agent.mjs
    timeout_seconds: 300
  close: scripts/refund-agent.mjs
  collect:
    script: scripts/refund-agent.mjs
    delay_seconds: 60
    timeout_seconds: 120
env:
  - variable: REFUND_API_TOKEN
    purpose: Calls the staging refund agent
capabilities:
  multi_turn: true
  calls: true
  usage: true
concurrency: 1
~~~

Use /profile add to have Rook generate and verify this profile and its scripts from a prompt, cURL command, command line, integration note, file, or URL. You can inspect and edit the generated files afterward.

## Hook Input Contract

Rook invokes a hook as:

~~~text
node
~~~

The phase name is the only argument. Context arrives through ROOK_* environment variables:

| Variable | Available context |
|---|---|
| ROOK_HOOK | Current hook: prepare, open, execute, close, or collect. |
| ROOK_WORKSPACE, ROOK_PROJECT, ROOK_AGENT | Workspace and active TestMu AI entities. |
| ROOK_RUN_ID | Current run, beginning with prepare. |
| ROOK_SCENARIO_ID, ROOK_SESSION | Current scenario, beginning with open. |
| ROOK_TURN | Current turn during execute. |
| ROOK_CONVERSATION | Conversation handle returned by open or the preceding execute. |
| ROOK_STATE_DIR | Durable state for one scenario. |
| ROOK_RUN_STATE_DIR | Durable state shared across the whole run. |

The scenario goal is sent on standard input during execute only. This avoids placing arbitrary model-written text in command arguments. A CLI hook must forward the goal to its child process and close the child's input stream.

## Hook Output Contract

Write progress and diagnostics to standard error. Standard output must contain one JSON object when a phase returns data.

~~~json
{
  "output": "Your refund was approved.",
  "conversation": "thread_abc123",
  "usage": { "input": 1200, "output": 340 },
  "calls": [
    { "name": "issue_refund", "arguments": { "order": "ORD-1042" } }
  ]
}
~~~

- output is required from execute and is the answer Rook judges.
- conversation allows later turns and phases to continue the same target session.
- usage enables token-economy scenarios when the target exposes counts.
- calls enables tool-call assertions. Return calls: [] when you observed that no calls occurred; omitting it means calls were not observable.
- collect can return trace data, calls, usage, and other evidence after the target has finished.

Exit with 0 on success and a non-zero code on failure. Rook captures standard error as the diagnosis. Failures from execute and collect fail the scenario; failures in other phases are reported while the run preserves completed work.

## State Between Phases

Use ROOK_STATE_DIR for state that belongs to one scenario, such as a target session ID or fixture. Use ROOK_RUN_STATE_DIR for state established once in prepare, such as a run-wide access token.

Rook also writes each completed hook result to the run directory as it happens. This makes a later collect invocation able to recover the conversation and prior phase record after a delay, restart, or different process.

## Run Only Part of the Lifecycle

Use phase selection when evidence becomes available after the agent responds:

~~~bash
rook run --phases prepare,open,execute,close
# Wait for the trace or log pipeline.
rook run --run  --phases collect,judge
~~~

--run continues the same run in place. --resume creates a new run and carries compatible completed work forward.

You can also omit a suffix:

~~~bash
rook run --skip collect,judge
~~~

Selections follow the fixed lifecycle order. Rook refuses a hole such as prepare,close when it would skip a defined prerequisite between the selected phases.

## Timeouts, Delays, and Concurrency

Default hook timeouts are 60 seconds for prepare, 30 for open, 300 for execute, 30 for close, and 120 for collect. Override timeout_seconds on an individual hook when its real latency differs.

Use delay_seconds only when an external system batches evidence and there is nothing to poll. It represents the minimum time since the preceding phase finished; Rook waits only for the remaining time. Prefer polling inside collect whenever the evidence source exposes a readiness signal.

Rook runs one scenario at a time by default. Increase --concurrency only when hooks and fixtures isolate concurrent scenarios. If open resets shared state, keep concurrency at 1.

## Related Documentation

[Prompt-based profiles](/support/docs/agent-assurance-profiles/) · [Run tests](/support/docs/agent-assurance-run-tests/) · [/profile](/support/docs/rook-command-profile/) · [/run](/support/docs/rook-command-run/)
