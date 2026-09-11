# /auth Command

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Use /auth to verify the effective credentials against the Rook controller.

## Syntax

```text
/auth
/auth status
```

Headless:

```bash
rook auth status
rook whoami
```

/auth and /auth status perform the same status check. rook whoami is the convenient headless alias.

## Step-by-step

1. Run /auth status.
2. Confirm that the effective credentials and environment are correct.
3. If invalid, use /login.
4. Run the status check again.

## State and privacy

The status check verifies the effective authentication remotely. Exported LT_USERNAME and LT_ACCESS_KEY take precedence over a stored token. It does not print the token or change project data. Use rook whoami when you also want to see the authenticated identity.

Stored authentication is shared by sessions using the same Rook home, profile, and environment, not scoped to one agent workspace. See [login](/support/docs/rook-command-login/) for stage and unattended authentication.

## Common problems

- Expired or revoked token: sign in again.
- Controller unreachable: run /doctor and check network access.
- Wrong account: check exported LT credentials and the selected environment before changing stored login.

## Related commands

[rook whoami](/support/docs/rook-command-whoami/) · [/login](/support/docs/rook-command-login/) · [/logout](/support/docs/rook-command-logout/) · [/doctor](/support/docs/rook-command-doctor/)
