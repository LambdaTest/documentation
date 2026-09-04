# /plan Command

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Use /plan to check the TestMu AI account plan and credit balance before generating or executing a suite.

## Syntax

~~~text
/plan
~~~

Headless:

~~~bash
rook plan
~~~

## Real-world use

Before generating 50 refund scenarios:

~~~text
/plan
/generate --total 15
~~~

The plan response is account-level information from TestMu AI. During a long operation, the TUI status bar also shows the balance and credits used by the current session.

## What changes

Nothing in the project is changed. The command reads the authenticated account and credit balance.

## Common problems

- If authentication is missing or expired, run /login and /auth status.
- If the controller cannot be reached, run /doctor.
- In automation, treat the command's exit status as the health check; plan currently prints human-readable output.

## Related commands

[/auth](/support/docs/rook-command-auth/) · [/login](/support/docs/rook-command-login/) · [/status](/support/docs/rook-command-status/)
