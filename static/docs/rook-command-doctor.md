# /doctor Command

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Use /doctor as the first diagnostic when Rook cannot authenticate, select a project, reach a service, or start normal work.

## Syntax

~~~text
/doctor
~~~

From a shell:

~~~bash
rook doctor
~~~

Doctor is intentionally ungated. It remains available when identity, project, connectivity, update, or budget state would block another command.

## Output

Doctor reports:

- Exact Rook and Node.js versions.
- Workspace path and configured environment.
- Controller and API URLs, each with an independent reachability probe.
- Derived identity and authentication status.
- Active project, interaction mode, and TTY state.
- Overall connectivity state derived from identity and the two service probes.

A service that returns an HTTP refusal is still reachable. Doctor distinguishes “the service answered” from “the current credential or project may use it.” It does not test the agent endpoint in an invocation profile; use /profile test for that.

Doctor output can contain local paths, account state, and hostnames. Review it before attaching it to a public issue.

## Related Commands

[Troubleshooting](/support/docs/agent-assurance-troubleshooting/) · [/auth](/support/docs/rook-command-auth/) · [/project](/support/docs/rook-command-project/) · [/profile](/support/docs/rook-command-profile/)
