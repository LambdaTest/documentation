---
id: rook-command-guide
title: Rook /guide Command
sidebar_label: /guide
description: Show Rook's first-run sequence, cost boundaries, storage model, and explicit synchronization behavior.
slug: rook-command-guide/
---

# <code>/guide</code> Command

Use <code>/guide</code> when you know you want to test an agent but do not yet know which command comes next.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-guide.png').default} alt="Current Rook guide command help" className="doc_img"/>

## Syntax

~~~text
/guide
~~~

The shell form is <code>rook guide</code>.

The guide covers this sequence:

~~~text
login → project → explore → agent → generate → profile → run → sync
~~~

The built-in guide presents <code>run</code> before <code>sync</code>, but a normal timeline run requires an upstream project version. In a new project, synchronize the reviewed tree before the first normal run; use <code>run --test</code> only when the draft run should stay local.

The guide also explains which operations spend credits, where local files live, why secrets never synchronize, and how to inspect status at any point. It reads command metadata and state; it does not invoke the target or spend credits.

## Related Commands

[Quickstart](/support/docs/agent-assurance-quickstart/) · [<code>/help</code>](/support/docs/rook-command-help/) · [<code>/status</code>](/support/docs/rook-command-status/)
