# The Rook Testing Sequence

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

The first complete Rook journey has eight steps. After the initial setup, repeat only the phases affected by your agent or test changes.

## First-Run Sequence

| Step | Command | Result |
|---|---|---|
| 1 | `rook login` | Sign in to TestMu AI. Authentication is shared by terminals using the same Rook home. |
| 2 | `rook project use` | Select the project that owns the agents, scenarios, profiles, and runs. |
| 3 | `rook explore .` | Inspect the codebase and derive the agents and features it contains. |
| 4 | `rook agent use` | Select an agent when discovery found more than one. |
| 5 | `rook generate` | Create functional and adversarial scenarios for the active agent. |
| 6 | `rook profile add` | Describe how to reach the live target; Rook writes and verifies the invocation hooks. |
| 7 | `rook run` | Invoke the agent and grade the evidence returned for each scenario. |
| 8 | `rook sync` | Record the complete local project tree upstream as one deliberate write. |

You can request a later operation before completing every earlier one. Rook reports what is missing, or presents the prerequisite plan and estimated cost before it spends credits. Use `rook status` at any point to see where the workspace stands.

## Interactive and Shell Surfaces

Rook has one command set with two surfaces:

```text
# Interactive TUI
/explore .
/generate
/run
```

```bash
# Shell or CI
rook explore .
rook generate
rook run
```

The leading slash belongs only to the interactive session. Command behavior and stored state are shared.

Bare `/project`, `/agent`, and `/profile` commands open pickers. Use the arrow keys and **Enter** to select the active record. The picker is the list; these command families do not require a separate `list` subcommand.

## Ask in Plain Language

Use `rook ask` when you know the outcome but not the command:

```bash
rook ask "generate adversarial tests for refund-policy bypasses"
```

Rook resolves the request to the appropriate operation. Any operation that spends credits or needs permission still shows its plan and asks first.

## Local Changes and Sync

Exploration, generation, profile authoring, and curation write plain files under `.testmuai/rook/`. They do not silently publish workspace state.

`rook sync` records the current project tree upstream. Profile files contain environment-variable references, never their secret values. Run results are saved locally as they happen and can be reconciled upstream after connectivity returns.

## When to Repeat a Step

| Change | Repeat |
|---|---|
| Agent source, prompt, tools, or policy changed | `explore`, then regenerate affected scenarios |
| Test intent changed without an implementation change | `generate` with an instruction, then curate |
| Endpoint, authentication, or response shape changed | `profile test`, then `profile fix` if needed |
| Only the deployed target changed | `run` against the intended profile |
| Evidence arrives asynchronously | Continue the same run with `--run  --phases collect,judge` |
| Local project metadata needs publishing | `sync` |

## Related Documentation

- [Five-minute walkthrough](/support/docs/agent-assurance-quickstart/)
- [Rook concepts](/support/docs/rook-concepts/)
- [Profiles and hooks](/support/docs/rook-profiles-and-hooks/)
- [Running scenarios](/support/docs/agent-assurance-run-tests/)
