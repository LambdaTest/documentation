---
id: rook-command-generate
title: Rook /generate Command
sidebar_label: /generate
description: Generate functional, non-functional, and adversarial scenarios for the active agent.
slug: rook-command-generate/
---

# <code>/generate</code> Command

Use <code>/generate</code> after exploration to build scenarios from the active agent's requirements, policies, tools, features, and known data.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-generate.png').default} alt="Rook generate command help with scenario filters and validation options" width="1556" height="1466" className="doc_img"/>

## Interactive syntax

~~~text
/generate [--total <n>] [--class <list>] [--category <list>]
          [--no-validate] [--force] [-- guidance]
~~~

## Headless syntax

~~~bash
rook generate [--entity <id>] [--class <list>] [--category <list>] \
  [--total <n>] [--no-validate] [--allow <exact-rule>] [--verbose] [--json]
~~~

## Options

| Option | Purpose |
|---|---|
| <code>--total</code> | Set the total scenario count. |
| <code>--class</code> | Choose <code>functional</code>, <code>non_functional</code>, or <code>adversarial</code>; comma-separated. |
| <code>--category</code> | Limit generation to named categories; comma-separated. |
| <code>--no-validate</code> | Skip the model-based runnability preflight. |
| <code>--force</code> | Interactive only; generate even when agent evidence and scenarios appear current. |
| Text after <code>--</code> | Focus generation on a business rule, threshold, or risk. |

## Real-world examples

Refund workflow:

~~~text
/generate --total 18 --class functional,adversarial -- verify identity, policy cutoff, duplicate requests, tool confirmation, and receipt evidence
~~~

Travel planning:

~~~text
/generate --category boundaries -- ambiguous dates, budget caps, unavailable inventory, and confirmation before booking
~~~

## Step-by-step

1. Confirm the active agent with <code>/agent</code>.
2. Start with 10–20 scenarios that a person can review.
3. Supply real identifiers and thresholds in the PRD or guidance.
4. Keep validation enabled unless you intentionally want draft scenarios.
5. Run <code>/scenarios list</code> and inspect exclusions and capability gaps.

## State and limitations

Generation writes scenario files under the active agent's project data. It does not invoke the live agent.

A scenario can be well designed but unrunnable with the active profile—for example, it needs multi-turn state, native file input, tool-call observation, or write verification that the profile does not expose.

Skipping validation saves a pass but defers those findings until later. It does not make unsupported inputs executable.

## Related commands

[<code>/explore</code>](/support/docs/rook-command-explore/) · [<code>/scenarios</code>](/support/docs/rook-command-scenarios/) · [<code>/profile</code>](/support/docs/rook-command-profile/) · [<code>/run</code>](/support/docs/rook-command-run/)
