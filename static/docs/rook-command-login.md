# /login Command

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Use /login when Rook has no stored credential or the existing token is invalid.

## Syntax

Interactive:

```text
/login
```

Headless launcher:

```bash
rook login
```

## Choose the Environment

Public packages default to production. For [stage results](/support/docs/rook-web-ui/), set export ROOK_ENV=stage before signing in. Browser sessions and CLI credentials are separate; use the same account and environment in both.

## Unattended Authentication

Rook 0.1.3 accepts LT_USERNAME and LT_ACCESS_KEY from the shell or CI secret manager. When both are present, operations use them ahead of any stored browser login. Supplying only one is an error.

rook login also accepts --username, --access-key, and --oauth. Prefer secret-manager environment injection over literal command arguments. To use a stored OAuth account consistently, unset both LT variables in that terminal; forcing OAuth login does not stop exported credentials taking precedence in later commands.

## Step-by-step

1. Run /login or rook login.
2. Complete the TestMu AI flow in the browser.
3. Return to the terminal.
4. Verify the identity with /auth status or rook whoami.

## State and security

Successful login stores credentials in the global Rook home, not the project directory. Do not copy that state into a repository or share it between users.

If a browser cannot open, follow the URL or instruction printed by the command. Do not paste login callbacks or tokens into tickets or screenshots.

## Common problems

- Browser opens with the wrong account: sign out there or use a separate browser profile, then retry.
- Status still invalid: check ROOK_ENV and whether exported LT credentials override the stored login before signing in again.
- Controller unreachable: diagnose network and environment with rook doctor.

## Related commands

[Installation](/support/docs/rook-installation/) · [/auth](/support/docs/rook-command-auth/) · [rook whoami](/support/docs/rook-command-whoami/) · [/logout](/support/docs/rook-command-logout/)
