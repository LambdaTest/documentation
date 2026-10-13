# Use Rook with Cursor CLI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Use Cursor CLI to operate Rook from your agent repository: inspect the implementation, prepare a test profile, generate scenarios, and explain recorded results. The coding assistant runs Rook CLI; installing a skill does not turn Rook into an MCP server or automatically test the assistant itself.

## Before You Start

- Install and sign in to Cursor CLI; its account or model-provider access is separate from your Rook account.
- [Install the public Rook CLI](/support/docs/rook-installation/) and run `rook --version`, `rook doctor`, then `rook login` if needed.
- Open a repository containing an AI agent you own and a safe test environment. If this is your first run, complete the [sample quickstart](/support/docs/agent-assurance-quickstart/) first.
- Use Git and Bash for the project-skill example below. On Windows, use a compatible shell such as WSL. Keep target credentials in Rook's environment store or approved environment variables, never in the skill or chat.

## Install the Rook Skill

This client supports the Agent Skills format, but it is **not a named target of `@testmuai/rook-skill`**. Use its project skill directory with the unmodified bundle from the [public Rook repository](https://github.com/LambdaTest/rook/tree/main/skill-installer/skills). This is a standards-based integration, not a separate Rook plugin.

Run this Bash example from your agent repository. It copies only the skill bundle from a pinned public source revision, and stops if a destination already exists:

```bash
(
set -eu
rook_skill_checkout=$(mktemp -d)
git clone --filter=blob:none https://github.com/LambdaTest/rook.git "$rook_skill_checkout/rook"
git -C "$rook_skill_checkout/rook" checkout --detach f199cb99c589b565e48a3a29781475daee907533
if test -e .cursor/skills/rook; then
echo "An existing rook skill needs review; nothing was overwritten." >&2
exit 1
fi
mkdir -p .cursor/skills
cp -R "$rook_skill_checkout/rook/skill-installer/skills" .cursor/skills/rook
)
```

Keep `.cursor/skills/rook/SKILL.md` and the entire `references/` directory together. Review the files before committing the project skill for teammates. The temporary checkout contains public source only and can be removed after review.

For an update, review a newer public revision, back up the existing skill, and replace the **whole bundle** in a reviewed change. The Rook npm installer does not manage this manual copy. To stop using it, remove only this project's `.cursor/skills/rook` after preserving custom changes.

## Confirm the Client Loaded It

From the agent repository, launch the client:

```bash
agent
```

Start a fresh Cursor CLI session in the repository and ask it to load `rook`. Confirm it reads `.cursor/skills/rook/SKILL.md` and can resolve the bundled `references/` files.

The same project skill folder works with Cursor's editor Agent. This guide uses the local Cursor CLI (`agent`); it does not provision a Cloud Agent or copy your local credentials to one. See the [Cursor CLI overview](https://cursor.com/docs/cli/overview) if the executable is missing.

## Test Your Agent Through a Prompt

Start with an inspection-only request:

```text
Use the rook skill from .cursor/skills/rook to inspect this repository. Explain the next safe setup step. Do not run paid commands or invoke the target yet.
```

A useful response identifies the selected project/agent, available profiles, missing setup, and the next command. It should not claim that tests ran merely because it read the skill.

Once you have checked the target and approved the cost, give a bounded testing request:

```text
Use Rook to test the refund agent in this repository against its refund policy.
Use the staging profile and test fixtures only. Propose up to three scenarios.
Before invoking the target, show me the selected scenario, hooks, possible writes,
and expected credit spending, then ask for confirmation.
After approval, run one selected scenario and report its run ID, Pass, Fail,
Unable to Verify, and criterion-level evidence. Do not run paid RCA or retry
automatically.
```

Substitute your agent and policy. The assistant should discover/select the agent, configure or test its [profile and hooks](/support/docs/rook-profiles-and-hooks/), and review generated scenarios before execution. A normal shared run requires `rook sync`; use `--test` only when you deliberately want a local-only result.

Profile creation, repair, testing, and scenario execution can invoke the real target. Inspect `agent.yaml` for write-capable calls before approving them. Discovery, generation, execution, and other model-backed operations can spend credits; the client's own model costs are separate. A prompt is not a hard spending cap. See [permissions and safety](/support/docs/rook-permissions-and-safety/).

## Review the Actual Result

Ask for the current invocation's run ID and report. A zero process exit code does not mean every scenario passed. Keep **Pass**, **Fail**, and **Unable to Verify** separate; include incomplete work and the recorded evidence for each criterion.

From the same project workspace:

```bash
rook report <run-id> --json
rook ui --local
```

The local UI reads workspace evidence. For uploaded runs, use `rook ui` or open [Rook projects](https://rook.lambdatest.com/projects), then select the project → agent → run → scenario. An intentional `--test` run stays local; do not expect it on the shared timeline.

### Local UI

Open the scenario's criteria and files to inspect what actually happened. This existing HTTP smoke-test capture illustrates result review; it is not a screenshot of this coding client or proof that this integration was executed.

### Hosted Web UI

Open the uploaded scenario's **Verdict** and **Artefacts** tabs and match its run ID to the CLI report. This is an example result view, not a client-specific test capture.

See [results and evidence](/support/docs/agent-assurance-results-and-evidence/) for interpreting missing observations and [both UI walkthroughs](/support/docs/rook-web-ui/) for navigation.

## More Actions You Can Ask the Skill to Perform {#guided-skill-actions}

Use these follow-ups in the same conversation after checking the project, agent, and profile. Replace example IDs with saved IDs from your workspace. Each request has an explicit review or stopping point; the assistant should check the installed CLI's help rather than invent unsupported flags.

### Maintain Coverage and Connections

| When you need to… | Prompt to send | Check before continuing |
| --- | --- | --- |
| Refresh changed features | “Use Rook to inspect the changed refund implementation and current discovery. Propose focused rediscovery and refresh only stale scenario coverage after I approve the credit use. Show the definition diff; do not run tests.” | Existing scenarios remain reviewable; a forced regeneration is a separate deliberate choice. |
| Broaden test coverage | “Use Rook to propose functional boundary and integration tests, non-functional quality tests, and adversarial prompt-injection or PII-leakage tests for this agent. Explain what can be observed, then ask before paid generation.” | Class/category coverage and measurable criteria; unsupported observations remain gaps. |
| Curate the suite | “Use Rook to list scenarios, exclude SC-004 from future runs, and re-include SC-009. Confirm which IDs changed. Keep both on disk; do not permanently delete anything.” | Exclusion is reversible. For permanent deletion, request it separately and confirm the exact IDs. |
| Choose a filtered run | “Use Rook to preview runnable adversarial scenarios tagged refunds. Show their IDs and any exclusions or capability gaps. Wait for approval before running only that selection.” | Exact selected IDs and count, not just a filter description; no unrelated scenarios. |
| Manage target credentials | “Use Rook to identify this profile's required environment-variable names and check masked configuration. Guide me through setting or rotating them securely; never reveal values in chat, logs, or committed files.” | Rook account credentials and target credentials are separate. Confirm scope before removing a stored variable. |
| Connect MCP tools | “Use Rook to list configured and discovered MCP servers. Inspect the chosen server's origin, scope, command or URL, and secret references. Propose adding or enabling it if needed; ask before trusting it or making tool calls.” | Review discovered/project servers before approval. Local/user declarations do not wait for that approval step. |
| Disconnect an MCP server | “Use Rook to show where this named server is configured and which tests need it. After I confirm, disable it. Do not remove its configuration unless I explicitly request removal.” | Correct name and scope; explain affected scenarios and confirm the resulting state. |

### Recover or Investigate a Run

| When you need to… | Prompt to send | Expected result |
| --- | --- | --- |
| Repair a broken connection | “Use the rook skill to inspect the saved profile response and hook records. Explain the likely connection problem and proposed repair. Ask before profile repair or a new reply-only test, because either can invoke the target.” | Diagnosis first, then an approved repair and observed test response; no blind paid retries. |
| Resume interrupted work | “Use Rook to inspect run RUN_ID and identify completed and unfinished work. Explain what a resumed run would carry forward, repeat, or invoke. Wait for approval of writes and credits before resuming.” | Preserve the original run; report the new run ID, carried-forward work, and newly executed work separately. |
| Wait for delayed evidence | “Use Rook to plan a phased run that stops after prepare, open, execute, and close. Ask before execution. When I confirm evidence is ready, propose collect and judge for that same run ID without rerunning the agent.” | Partial execution is not a final verdict; collection may use hooks/tools, and judging can spend credits. Approve the second step too. |
| Explain saved results | “Use the rook skill to read only the saved evidence for RUN_ID. Explain each failed or unverifiable criterion with evidence. Do not start setup, a new test, or paid analysis.” | Pass, Fail, Unable to Verify, and incomplete work stay distinct. Inspect available read-only observations before declaring an effect unobservable. |
| Compare two runs | “Use Rook's saved snapshots and verdicts for RUN_A and RUN_B to separate new failures, fixed cases, changed criteria, and possible flaky outcomes. Do not rerun either suite.” | Compare only available evidence; changed scenarios are not the same as regressions. Two differing runs alone do not establish a flakiness rate. |
| Request root-cause analysis | “First explain RUN_ID using saved evidence. If paid Rook root-cause analysis would help, explain its scope and credit use and ask for separate approval. Do not retry tests or edit agent code.” | Distinguish recorded evidence from a suspected cause; preserve the original verdict and report any additional spend. |

### Get Help or Automate the Reviewed Suite

| When you need to… | Prompt to send | Expected result |
| --- | --- | --- |
| Find the next step | “Use the rook skill to inspect readiness and explain what is blocking progress. If Rook's paid question-answering operation would help, ask before using it. Do not execute a suggested command automatically.” | A state-based recommendation. The skill's chat workflow is not the same as calling paid `rook ask`. |
| Prepare a support report | “Use the rook skill to diagnose this saved failure without rerunning it. Prepare a report with CLI version, OS, run/scenario IDs, and relevant evidence. If needed, export logs locally for my review; do not upload them.” | Review/redact logs before sharing. Never include home credentials or session transcripts; a verdict dispute needs the criterion and cited evidence. |
| Review an update | “Check my installed Rook version against the public release and identify relevant changes. Propose an update only if needed; ask before changing the installation. Check the skill version separately.” | A reviewed compatibility plan; a different version alone does not require an update or paid probe. |
| Add CI/CD | “Use the rook skill to turn this reviewed suite into a pipeline for my CI platform. Keep discovery and generation out of the gate, preserve evidence, and show the proposed files and secret names. Do not push, trigger, or deploy.” | Review the diff and verdict policy before enabling the job. Follow the prompt-led [CI/CD guide](/support/docs/agent-assurance-ci-cd/) for platform-specific steps. |

These workflows follow the [public Rook skill](https://github.com/LambdaTest/rook/blob/main/skill-installer/skills/SKILL.md) and its [bundled references](https://github.com/LambdaTest/rook/tree/main/skill-installer/skills/references). They describe requests the assistant can carry out with the installed CLI and your permissions, not guarantees that every request will succeed in every environment.

## Troubleshooting

| Symptom | What to check |
| --- | --- |
| Skill is missing | Confirm the exact `SKILL.md` filename, its directory, and the active workspace; restart or reload the client's skills. |
| Skill loads but references fail | Copy the full `references/` folder beside `SKILL.md`; do not install just one raw Markdown file. |
| `rook` is not found | Check PATH in the client's command-execution environment, not only your regular terminal. |
| Wrong instructions are loaded | Look for another `rook` skill at project or user scope; inspect the selected path before changing files. |
| Agent cannot run a command | Review client approvals and Rook grants separately; approve the specific operation, not all future commands. |
| “Passed” but no evidence | Require the exact run ID, completion state, and saved verdict; a natural-language claim is insufficient. |

## Next Steps and Sources

- [Choose another coding client](/support/docs/rook-coding-agents/).
- [Automate a reviewed suite in CI/CD](/support/docs/agent-assurance-ci-cd/).
- [Public Rook skill](https://github.com/LambdaTest/rook/blob/main/skill-installer/skills/SKILL.md) and [Cursor CLI skill documentation](https://cursor.com/docs/skills).

Installation/discovery instructions are based on the public sources above. Availability still depends on your client version, account policy, and execution environment; this guide does not claim a live end-to-end test in every client.
