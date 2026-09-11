# rook whoami Command

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Use rook whoami outside the interactive terminal to verify which TestMu AI account is authenticated.

## Syntax

```bash
rook whoami
```

This is an alias for:

```bash
rook auth status
```

## Real-world uses

Verify a workstation before testing:

```bash
rook whoami
rook plan
```

Fail an automation setup step when a Rook identity is unavailable:

```bash
rook whoami
```

## State and errors

The command verifies the effective credentials, prints the account identity, and exits. It does not change project data or invoke an agent. Its output is human-readable in the current release.

Check ROOK_ENV and the exported LT_USERNAME/LT_ACCESS_KEY pair first: that pair overrides stored browser authentication. Unset both if you intend to use OAuth, then run rook login when required. Stored credentials are shared within the same Rook home, profile, and environment.

## Related commands

[/auth](/support/docs/rook-command-auth/) · [/login](/support/docs/rook-command-login/) · [/logout](/support/docs/rook-command-logout/) · [/plan](/support/docs/rook-command-plan/)
