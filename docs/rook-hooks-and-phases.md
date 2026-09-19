---
id: rook-hooks-and-phases
title: Rook Lifecycle Phases and Hooks
hide_title: false
sidebar_label: Lifecycle Phases and Hooks
description: Learn how Rook runs prepare, open, execute, close, collect, and judge phases through script-based invocation hooks.
keywords:
  - rook hooks
  - rook run phases
  - ai agent lifecycle testing
  - deferred evidence collection
slug: rook-hooks-and-phases/
---

# Rook Lifecycle Phases and Hooks

Rook reaches an agent through **hooks**: scripts assigned to named points in a fixed run lifecycle. This makes agents behind logins, sessions, CLIs, asynchronous APIs, sockets, and custom evidence systems testable without forcing them into a predefined transport schema.

A profile must define an <code>execute</code> hook. The other hooks are optional. Rook owns their order; your scripts own how each phase talks to the target.

~~~text
prepare                         once per run
  open                          once per scenario
    execute × N                 once per turn
  close                         once per scenario
  collect                       once per scenario
  judge                         Rook evaluates the recorded result
~~~

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-run.png').default} alt="Rook run command help showing lifecycle phase selection and continuation options" className="doc_img"/>

## Run and Hook Phases

| Phase | Scope | Typical work | If it fails |
|---|---|---|---|
| <code>prepare</code> | Once per run | Log in, mint a token, seed fixtures, or warm a cache. | The problem is reported and the run preserves its records. |
| <code>open</code> | Before each scenario | Create a target session or reset scenario-specific state. | The problem is reported with the scenario. |
| <code>execute</code> | Once per turn | Send the goal and return the agent's answer. This is the only required hook. | The scenario fails. |
| <code>close</code> | After each scenario's turns | End a session or release a lock, seat, or other resource. | Rook records and reports the problem without discarding the answer. |
| <code>collect</code> | After <code>close</code> | Fetch traces, tool calls, usage, logs, and other delayed evidence. | The scenario fails; the phase can be retried later when evidence is available. |
| <code>judge</code> | After evidence is available | Rook evaluates each acceptance criterion. | The result records why a verdict could not be completed. |

<code>judge</code> is a Rook-owned run phase, not a user hook. The other five phases can map to one script or to separate scripts.

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

Use <code>/profile add</code> to have Rook generate and verify this profile and its scripts from a prompt, cURL command, command line, integration note, file, or URL. You can inspect and edit the generated files afterward.

## Hook Input Contract

Rook invokes a hook as:

~~~text
node <script> <phase>
~~~

The phase name is the only argument. Context arrives through <code>ROOK_*</code> environment variables:

| Variable | Available context |
|---|---|
| <code>ROOK_HOOK</code> | Current hook: <code>prepare</code>, <code>open</code>, <code>execute</code>, <code>close</code>, or <code>collect</code>. |
| <code>ROOK_WORKSPACE</code>, <code>ROOK_PROJECT</code>, <code>ROOK_AGENT</code> | Workspace and active TestMu AI entities. |
| <code>ROOK_RUN_ID</code> | Current run, beginning with <code>prepare</code>. |
| <code>ROOK_SCENARIO_ID</code>, <code>ROOK_SESSION</code> | Current scenario, beginning with <code>open</code>. |
| <code>ROOK_TURN</code> | Current turn during <code>execute</code>. |
| <code>ROOK_CONVERSATION</code> | Conversation handle returned by <code>open</code> or the preceding <code>execute</code>. |
| <code>ROOK_STATE_DIR</code> | Durable state for one scenario. |
| <code>ROOK_RUN_STATE_DIR</code> | Durable state shared across the whole run. |

The scenario goal is sent on standard input during <code>execute</code> only. This avoids placing arbitrary model-written text in command arguments. A CLI hook must forward the goal to its child process and close the child's input stream.

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

- <code>output</code> is required from <code>execute</code> and is the answer Rook judges.
- <code>conversation</code> allows later turns and phases to continue the same target session.
- <code>usage</code> enables token-economy scenarios when the target exposes counts.
- <code>calls</code> enables tool-call assertions. Return <code>calls: []</code> when you observed that no calls occurred; omitting it means calls were not observable.
- <code>collect</code> can return trace data, calls, usage, and other evidence after the target has finished.

Exit with <code>0</code> on success and a non-zero code on failure. Rook captures standard error as the diagnosis. Failures from <code>execute</code> and <code>collect</code> fail the scenario; failures in other phases are reported while the run preserves completed work.

## State Between Phases

Use <code>ROOK_STATE_DIR</code> for state that belongs to one scenario, such as a target session ID or fixture. Use <code>ROOK_RUN_STATE_DIR</code> for state established once in <code>prepare</code>, such as a run-wide access token.

Rook also writes each completed hook result to the run directory as it happens. This makes a later <code>collect</code> invocation able to recover the conversation and prior phase record after a delay, restart, or different process.

## Run Only Part of the Lifecycle

Use phase selection when evidence becomes available after the agent responds:

~~~bash
rook run --phases prepare,open,execute,close
# Wait for the trace or log pipeline.
rook run --run <run-id> --phases collect,judge
~~~

<code>--run</code> continues the same run in place. <code>--resume</code> creates a new run and carries compatible completed work forward.

You can also omit a suffix:

~~~bash
rook run --skip collect,judge
~~~

Selections follow the fixed lifecycle order. Rook refuses a hole such as <code>prepare,close</code> when it would skip a defined prerequisite between the selected phases.

## Timeouts, Delays, and Concurrency

Default hook timeouts are 60 seconds for <code>prepare</code>, 30 for <code>open</code>, 300 for <code>execute</code>, 30 for <code>close</code>, and 120 for <code>collect</code>. Override <code>timeout_seconds</code> on an individual hook when its real latency differs.

Use <code>delay_seconds</code> only when an external system batches evidence and there is nothing to poll. It represents the minimum time since the preceding phase finished; Rook waits only for the remaining time. Prefer polling inside <code>collect</code> whenever the evidence source exposes a readiness signal.

Rook runs one scenario at a time by default. Increase <code>--concurrency</code> only when hooks and fixtures isolate concurrent scenarios. If <code>open</code> resets shared state, keep concurrency at 1.

## Related Documentation

[Prompt-based profiles](/support/docs/agent-assurance-profiles/) · [Run tests](/support/docs/agent-assurance-run-tests/) · [<code>/profile</code>](/support/docs/rook-command-profile/) · [<code>/run</code>](/support/docs/rook-command-run/)
