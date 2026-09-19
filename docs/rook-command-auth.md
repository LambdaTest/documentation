---
id: rook-command-auth
title: Rook /auth Command
sidebar_label: /auth
description: Verify that Rook's stored authentication token is currently valid.
slug: rook-command-auth/
---

# <code>/auth</code> Command

Use <code>/auth</code> to verify stored credentials against the Rook controller.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-auth.png').default} alt="Rook auth command help showing the status subcommand" className="doc_img"/>

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

<code>/auth</code> and <code>/auth status</code> perform the same status check. <code>rook whoami</code> is the convenient headless alias.

## Step-by-step

1. Run <code>/auth status</code>.
2. Confirm that the stored credential is valid.
3. If invalid, use <code>/login</code>.
4. Run the status check again.

## State and privacy

The status check reads the stored token and verifies it remotely. It does not print the token or change project data. Use <code>rook whoami</code> when you also want to see the authenticated identity.

Authentication is global to the Rook home on this machine, not scoped to one agent workspace.

## Common problems

- Expired or revoked token: sign in again.
- Controller unreachable: run <code>/doctor</code> and check network access.
- Wrong account: run <code>/logout</code>, then <code>/login</code> with the intended account.

## Related commands

[<code>rook whoami</code>](/support/docs/rook-command-whoami/) · [<code>/login</code>](/support/docs/rook-command-login/) · [<code>/logout</code>](/support/docs/rook-command-logout/) · [<code>/doctor</code>](/support/docs/rook-command-doctor/)
