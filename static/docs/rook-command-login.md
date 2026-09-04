# /login Command

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Use /login when Rook has no stored credential or the existing token is invalid.

## Syntax

Interactive:

~~~text
/login
~~~

Headless launcher:

~~~bash
rook login
~~~

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
- Status still invalid: run /logout, then start a fresh login.
- Controller unreachable: diagnose network and environment with rook doctor.

## Related commands

[Installation](/support/docs/rook-installation/) · [/auth](/support/docs/rook-command-auth/) · [rook whoami](/support/docs/rook-command-whoami/) · [/logout](/support/docs/rook-command-logout/)
