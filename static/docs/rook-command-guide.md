# /guide Command

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Use /guide when you know you want to test an agent but do not yet know which command comes next.

## Syntax

~~~text
/guide
~~~

The shell form is rook guide.

The guide covers this sequence:

~~~text
login → project → explore → agent → generate → profile → run → sync
~~~

The built-in guide presents run before sync, but a normal timeline run requires an upstream project version. In a new project, synchronize the reviewed tree before the first normal run; use run --test only when the draft run should stay local.

The guide also explains which operations spend credits, where local files live, why secrets never synchronize, and how to inspect status at any point. It reads command metadata and state; it does not invoke the target or spend credits.

## Related Commands

[Quickstart](/support/docs/agent-assurance-quickstart/) · [/help](/support/docs/rook-command-help/) · [/status](/support/docs/rook-command-status/)
