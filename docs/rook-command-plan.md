---
id: rook-command-plan
title: Rook /plan Command
sidebar_label: /plan
description: View the signed-in LambdaTest account plan and available Rook credits.
slug: rook-command-plan/
---

# <code>/plan</code> Command

Use <code>/plan</code> to check the LambdaTest account plan and credit balance before generating or executing a suite.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-plan.png').default} alt="Rook plan command help" width="1556" height="1466" className="doc_img"/>

## Syntax

~~~text
/plan
~~~

Headless:

~~~bash
rook plan
rook plan --json
~~~

## Real-world use

Before generating 50 refund scenarios:

~~~text
/plan
/budget
/generate --total 15
~~~

The plan response is account-level information from LambdaTest. <code>/budget</code> is session-level information about what this Rook session has spent and its configured phase caps.

## What changes

Nothing in the project is changed. The command reads the authenticated account and credit balance.

## Common problems

- If authentication is missing or expired, run <code>/login</code> and <code>/auth status</code>.
- If the controller cannot be reached, run <code>/doctor</code>.
- If automation consumes the result, use <code>rook plan --json</code>.

## Related commands

[<code>/budget</code>](/support/docs/rook-command-budget/) · [<code>/auth</code>](/support/docs/rook-command-auth/) · [<code>/login</code>](/support/docs/rook-command-login/)
