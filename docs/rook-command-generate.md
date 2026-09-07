---
id: rook-command-generate
title: Rook /generate Command
sidebar_label: /generate
description: Generate grounded functional, non-functional, and adversarial scenarios for the active agent.
slug: rook-command-generate/
---

# <code>/generate</code> Command

Use <code>/generate</code> after exploration to write test scenarios for the active agent's discovered features.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-generate.png').default} alt="Current Rook generate command help with total, class, category, force, allow, JSON, and verbose options" className="doc_img"/>

## Syntax

~~~text
/generate [options] [-- free-text instruction]
~~~

The shell form is <code>rook generate</code> with the same options.

| Option | Purpose |
|---|---|
| <code>--total &lt;n&gt;</code> | Approximate target size for the complete suite. |
| <code>--class &lt;names&gt;</code> | Comma-separated classes. Default: <code>functional,adversarial</code>. |
| <code>--category &lt;names&gt;</code> | Comma-separated scenario categories. |
| <code>--force</code> | Re-derive scenarios even when feature hashes are unchanged. |
| <code>--allow &lt;rule&gt;</code> | Pre-authorize one exact tool rule for this launch. Repeatable. |
| <code>--json</code> | Emit machine-readable events. |
| <code>--verbose</code> | Show subagent activity and credits as work happens. |

~~~text
/generate --total 20 --class functional,adversarial
/generate --category boundary,reliability -- emphasize retries and duplicate requests
~~~

Generation reads the current feature model, plans coverage, writes scenarios, and checks runnability. It does not invoke the live target. Unchanged features reuse their scenarios without a model call; <code>--force</code> intentionally bypasses that optimization.

Generated files remain editable. A scenario whose origin is human is not silently replaced during later generation.

## Related Commands

[Scenario guide](/support/docs/agent-assurance-scenarios/) · [<code>/explore</code>](/support/docs/rook-command-explore/) · [<code>/scenarios</code>](/support/docs/rook-command-scenarios/) · [<code>/sync</code>](/support/docs/rook-command-sync/)
