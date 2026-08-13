---
id: rook-command-whoami
title: rook whoami Command
sidebar_label: rook whoami
description: Check the current Rook account from a shell or automation.
slug: rook-command-whoami/
---

# <code>rook whoami</code> Command

Use <code>rook whoami</code> outside the interactive terminal to verify which LambdaTest account is authenticated.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-whoami.png').default} alt="Rook whoami command help showing JSON output" width="1556" height="956" className="doc_img"/>

## Syntax

~~~bash
rook whoami
rook whoami --json
~~~

This is an alias for:

~~~bash
rook auth status
~~~

## Real-world uses

Verify a workstation before testing:

~~~bash
rook whoami
rook plan
~~~

Fail an automation setup step when the expected Rook identity is unavailable:

~~~bash
rook whoami --json
~~~

Use a JSON parser to inspect the structured result instead of matching the human display.

## State and errors

The command verifies the stored token and exits. It does not change project data or invoke an agent.

If it reports no or invalid authentication, run <code>rook login</code>. If it reports the wrong account, log out first; credentials are shared by Rook workspaces using the same Rook home.

## Related commands

[<code>/auth</code>](/support/docs/rook-command-auth/) · [<code>/login</code>](/support/docs/rook-command-login/) · [<code>/logout</code>](/support/docs/rook-command-logout/) · [<code>/plan</code>](/support/docs/rook-command-plan/)
