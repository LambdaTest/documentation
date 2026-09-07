# Rook Permissions and Safety

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Rook's internal roles can call tools while discovering, generating, invoking, and verifying. Every call must be covered by a rule or approved through an interactive prompt.

## Rule Grammar

Rules identify the tool and the allowed subject:

```text
bash(npm test)              exact command
bash(git *)                 glob over the command
read_file(.)                any file below the current path
mcp_start(payments)         one named MCP server
mcp_call(billing.lookup)    one server tool
```

Add `@phase` to limit a grant to one phase:

```text
bash(git *)@explore
read_file(.)@generate
```

## Why Rules Are Phase-Scoped

Approving `bash(git *)` while Rook explores a repository does not imply that the same operation should be allowed while judging an adversarial target. The operator is authorizing work in the context they can see—exploration, generation, execution, or judging—not an internal role name that may be difficult to reason about.

Use the narrowest subject and phase that covers the intended operation.

## Permission Lists

| List | Applies to | How it is written |
|---|---|---|
| `allow` | Actions explicitly requested or approved by a person | Selecting a persistent “always” choice at an interactive prompt |
| `deny` | Human-requested and model-selected actions, always | Edited by the user or administrator |
| `autonomous` | Model-selected actions during unattended work | Only by deliberate file editing or a reviewed launch grant |

Rook does not promote an interactive “always” response into unattended authority. A choice made during a terminal session should not silently become the permission model for the next CI run.

## `--yes` and `--allow`

These flags solve different problems:

| Flag | Scope | Persistence |
|---|---|---|
| `--yes` | Approves tool calls for the current command | Writes nothing to settings |
| `--allow ` | Supplies one explicit rule to the current process; repeatable | Visible in the launch command or pipeline definition |

```bash
rook explore . \
--allow 'bash(npm test)' \
--allow 'bash(git *)@explore'

rook run --yes
```

For CI, prefer reviewed `--allow` rules so authority is visible beside the job definition. Use `--yes` only when blanket approval for that command is intentional.

## The Target Agent Is Real

**Agent actions are not rolled back**
Rook invokes the target exactly as a user would. Files, refunds, tickets, messages, database changes, deployments, and other writes can be real.

Before a run, Rook reports declared write tools and asks for approval. Approval is per target so a decision for one agent is not inherited by another.

Use:

- staging or isolated targets;
- disposable accounts and fixtures;
- read-only credentials where possible;
- `--concurrency 1` until shared-state behavior is understood;
- explicit cleanup hooks for resources the scenario creates;
- narrow permissions for verification tools.

## Verification Should Not Create State

A judge is instructed to verify without changing the system. For example, calling `issue_refund` to see whether a refund exists would create the refund and invalidate the check. Provide a read endpoint, trace, filesystem observation, or read-only MCP tool instead.

Every verification tool call still passes through the same permission gate. Enabling an MCP server does not automatically authorize every tool it exposes.

## Headless Mode

Rook enters headless mode when any of these are true:

- `--yes` is present;
- standard input is not a TTY;
- a recognized runner variable is present: `CI`, `GITHUB_ACTIONS`, `GITLAB_CI`, `BUILDKITE`, or `JENKINS_URL`.

In headless mode, an operation not covered by an existing rule is refused with a reason instead of waiting for a prompt no one can answer.

## Future Mediated Execution

The current model directly invokes your agent. A mediated mode in which Rook hosts agent tools and can virtualize writes is planned; do not assume that protection exists in current runs.

## Related Documentation

- [Architecture and trust boundaries](/support/docs/rook-architecture/)
- [CI and automation](/support/docs/agent-assurance-ci-cd/)
- [MCP servers](/support/docs/agent-assurance-mcp/)
