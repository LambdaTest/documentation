# /generate Command

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Use /generate after exploration to write test scenarios for the active agent's discovered features.

## Syntax

~~~text
/generate [options] [-- free-text instruction]
~~~

The shell form is rook generate with the same options.

| Option | Purpose |
|---|---|
| --total &lt;n&gt; | Approximate target size for the complete suite. |
| --class &lt;names&gt; | Comma-separated classes. Default: functional,adversarial. |
| --category &lt;names&gt; | Comma-separated scenario categories. |
| --force | Re-derive scenarios even when feature hashes are unchanged. |
| --allow &lt;rule&gt; | Pre-authorize one exact tool rule for this launch. Repeatable. |
| --json | Emit machine-readable events. |
| --verbose | Show subagent activity and credits as work happens. |

~~~text
/generate --total 20 --class functional,adversarial
/generate --category boundary,reliability -- emphasize retries and duplicate requests
~~~

Generation reads the current feature model, plans coverage, writes scenarios, and checks runnability. It does not invoke the live target. Unchanged features reuse their scenarios without a model call; --force intentionally bypasses that optimization.

Generated files remain editable. A scenario whose origin is human is not silently replaced during later generation.

## Related Commands

[Scenario guide](/support/docs/agent-assurance-scenarios/) · [/explore](/support/docs/rook-command-explore/) · [/scenarios](/support/docs/rook-command-scenarios/) · [/sync](/support/docs/rook-command-sync/)
