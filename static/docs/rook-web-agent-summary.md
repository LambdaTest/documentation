# Agent Summary, Profiles, and Hooks

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Open **Projects → your project → your agent → Summary**. This page answers: “What did Rook discover, and how is this agent configured to run?” It shows synchronized records, not unsaved changes in your local repository.

## Check the Agent and Source Context

The heading identifies the agent and current version. **Description** summarizes its purpose; the counters show features, scenarios, tools, runs, last pass rate, and coverage when available.

**Context** lists the source materials used for discovery. A checkpoint digest identifies the recorded context; it does not prove that the target currently deployed matches that source. Use **View Full Spec** beneath Context to read the agent definition and **View findings** to inspect recorded discovery findings. If no findings artifact exists, the page says **No findings recorded**—that is not a clean bill of health.

## Inspect Profiles and Hook Phases

Each **Profiles** row shows the profile ID, declared hook phases, and the available script path. There are two different file actions:

- **View Full Spec** on the profile row opens its YAML declaration: hook mappings, environment requirements, and capabilities.
- A linked **script path** opens the recorded script, rather than the profile YAML. A plain-text path has no available script artifact to open.

In this example, local-triage defines only execute. That is sufficient for this single-turn fixture; it does not imply that the other lifecycle phases are broken. Profiles can supply prepare, open, execute, close, and collect hooks. Rook performs judge itself. See [Lifecycle Phases](/support/docs/rook-hooks-and-phases/) for ordering and phase-specific inputs and outputs.

The Web UI does not generate or edit profiles. To connect a new target, use [Prompt-Based Profile Authoring](/support/docs/agent-assurance-profiles/) in the CLI, review the resulting scripts and permissions, test the profile, then run rook sync. A visible profile is not proof of successful verification on your current machine.

## Interpret Tools and Missing Values

The **Tools** section lists recorded tools with read, write, or unknown access information when available. Unknown access is not equivalent to read-only. A dash for coverage means no measurement is available, not zero coverage.

**Stage display discrepancies**
On September 11, 2026, the sample Summary showed **1%** for a **1 of 1 passed** run and an empty Tools section despite the five-tool headline count. Check the version's [full specification and call graph](/support/docs/rook-web-versions/) for declared tools, and the [run details](/support/docs/rook-web-run-details/) for actual results.

## Next Step

Use [Versions](/support/docs/rook-web-versions/) to inspect a recorded definition, or [Runs](/support/docs/rook-web-runs/) to find the profile revision used by a particular execution.
