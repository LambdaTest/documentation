# /auth Command

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Use /auth to verify stored credentials against the Rook controller.

## Syntax

~~~text
/auth
/auth status
~~~

Headless:

~~~bash
rook auth status
rook whoami
~~~

/auth and /auth status perform the same status check. rook whoami is the convenient headless alias.

## Step-by-step

1. Run /auth status.
2. Confirm that the stored credential is valid.
3. If invalid, use /login.
4. Run the status check again.

## State and privacy

The status check reads the stored token and verifies it remotely. It does not print the token or change project data. Use rook whoami when you also want to see the authenticated identity.

Authentication is global to the Rook home on this machine, not scoped to one agent workspace.

## Common problems

- Expired or revoked token: sign in again.
- Controller unreachable: run /doctor and check network access.
- Wrong account: run /logout, then /login with the intended account.

## Related commands

[rook whoami](/support/docs/rook-command-whoami/) · [/login](/support/docs/rook-command-login/) · [/logout](/support/docs/rook-command-logout/) · [/doctor](/support/docs/rook-command-doctor/)
