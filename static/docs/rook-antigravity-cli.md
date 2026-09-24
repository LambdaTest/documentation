# Use Rook with Antigravity CLI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Use Antigravity CLI (`agy`) to operate Rook from your agent repository: inspect the implementation, prepare a profile, propose scenarios, and explain recorded results. Antigravity is the coding assistant; Rook CLI performs the agent testing. Installing this skill does not configure Antigravity itself as the agent under test or create a Rook MCP server.

Prefer an editor? Use the [Antigravity IDE guide](/support/docs/rook-antigravity-ide/). Both guides use the same project skill folder, so you only need to copy the bundle once per repository.

## Before You Start

- Follow Google's [Antigravity CLI installation and authentication guide](https://antigravity.google/docs/cli/install/). Check `agy --version` and `agy --help` in your terminal. Your Antigravity account and model usage are separate from Rook authentication and credits.
- [Install the public Rook CLI](/support/docs/rook-installation/), run `rook --version` and `rook doctor`, and use `rook login` if needed.
- Open a repository containing an AI agent you own and a safe test environment. Complete the [sample quickstart](/support/docs/agent-assurance-quickstart/) first if you have not used Rook before.
- The copy example below requires Git and Bash. On Windows, use a compatible shell such as WSL and keep the client, repository, and Rook installation in the same execution environment. Do not put target credentials in the skill or chat.

## Install the Rook Skill

Antigravity is **not a named target of `@testmuai/rook-skill`**. Use a manual project installation of the complete [public Rook skill bundle](https://github.com/LambdaTest/rook/tree/main/skill-installer/skills). This is a standards-based setup, not an Antigravity-specific Rook plugin. The installer's `--agent gemini-cli` option installs for Gemini CLI, not Antigravity.

Run this Bash block from your agent repository. It uses the same pinned public revision as the other manual-client guides and refuses to replace an existing file, directory, or symlink:

```bash
(
set -eu
if test -e .agents/skills/rook || test -L .agents/skills/rook; then
echo "An existing rook skill needs review; nothing was overwritten." >&2
exit 1
fi
rook_skill_checkout=$(mktemp -d)
git clone --filter=blob:none https://github.com/LambdaTest/rook.git "$rook_skill_checkout/rook"
git -C "$rook_skill_checkout/rook" checkout --detach f199cb99c589b565e48a3a29781475daee907533
mkdir -p .agents/skills
cp -R "$rook_skill_checkout/rook/skill-installer/skills" .agents/skills/rook
)
```

Keep `.agents/skills/rook/SKILL.md` and the entire `references/` directory together. Review the bundle before committing it for teammates. The temporary checkout contains public source only and can be removed after review. If you already installed it through the IDE guide, inspect that copy and skip this step.

For updates, review a newer public revision, preserve any local changes, and replace the whole bundle in a reviewed change. The npm installer does not update or uninstall this manual copy. To remove it, preserve custom changes and remove only this project's `.agents/skills/rook`; other compatible assistants may also use it.

## Confirm the CLI Loaded It

Launch Antigravity from the repository root:

```bash
agy
```

Inside the interactive CLI, enter `/skills` and check for `rook`. Skills are exposed as slash commands, so use `/rook` for the first request below. These are Antigravity prompt commands, not shell commands. If the skill was added while a session was running, start a fresh session. See Google's [CLI reference](https://antigravity.google/docs/cli/reference/) and [skill locations](https://antigravity.google/docs/skills#cli-skill-locations).

Start with inspection only:

```text
/rook Inspect this repository and explain the next safe Rook setup step.
Confirm the skill path and its bundled references. Do not invoke the target,
run paid Rook commands, install software, or change profiles yet.
```

Check that the response identifies `.agents/skills/rook/SKILL.md`, missing setup, and the next proposed command. Skill discovery alone is not a successful Rook test.

## Run a Small, Reviewed Test

After reviewing the target and cost, adapt this prompt to your agent:

```text
/rook Help test the refund agent in this repository against its refund policy.
Use the staging profile and test fixtures only. Propose up to three scenarios.
Before each paid operation or target invocation, show the command, profile,
selected scenario, hooks, possible writes, and expected spending; ask me to approve.
After approval, run one selected scenario. Report its exact run ID and the
Pass, Fail, and Unable to Verify results with criterion-level evidence.
Do not run paid RCA or retry automatically.
```

Review the [profile and hooks](/support/docs/rook-profiles-and-hooks/) and `agent.yaml` before execution. Profile creation, repair, and testing can reach the target too; Rook cannot undo target-side changes. Use [Rook's environment store](/support/docs/rook-environment-and-secrets/) or approved environment variables for secrets.

Keep Antigravity command approvals and Rook permissions in place. Do not enable `--dangerously-skip-permissions` just to complete this walkthrough. A prompt is not a spending cap: review both the client's model usage and Rook credits. See [permissions and safety](/support/docs/rook-permissions-and-safety/).

## Review the Actual Result

Require the current invocation's run ID, completion state, and evidence. Exit code zero does not guarantee that scenarios passed. From the same Rook workspace, run:

```bash
rook report <run-id> --json
rook ui --local
```

The local UI reads workspace evidence. For a normal shared run, sync the selected agent before execution with `rook sync`. Then use `rook ui` or open [Rook projects](https://rook.lambdatest.com/projects) and select project → agent → run → scenario. Deliberate `--test` runs stay local and do not appear on the shared timeline.

### Local UI

Inspect the scenario criteria and recorded files. This existing HTTP smoke-test screenshot illustrates Rook result review; it is not an Antigravity CLI capture or proof of a live Antigravity-driven run.

### Hosted Web UI

Match the uploaded run ID to the CLI report, then review **Verdict** and **Artefacts**. The screenshot is an example result view, not client-specific test evidence.

See [results and evidence](/support/docs/agent-assurance-results-and-evidence/) for incomplete or unverifiable outcomes and [both UI walkthroughs](/support/docs/rook-web-ui/) for navigation.

## Troubleshooting

| Symptom | What to check |
| --- | --- |
| `agy` is not found | Follow Google's CLI installation guide and reopen the terminal. Installing the IDE alone is not a CLI verification. |
| `/skills` does not list `rook` | Start `agy` in the repository containing `.agents/skills/rook/SKILL.md`, then start a fresh session. Check the selected skill path for duplicate copies. |
| Installed with `--agent gemini-cli`, but no skill appears | That installer target is for Gemini CLI. Use the project bundle above for Antigravity. |
| References cannot be read | Copy the complete `references/` folder beside `SKILL.md`, not only the Markdown entry file. |
| Rook works in another terminal but not through Antigravity | Check PATH, working directory, and access in the client's command environment. Review denied operations individually instead of disabling protections. |
| Login, sandbox, or network failure | Verify Rook authentication in the execution environment and allow only the access needed for the approved operation. Never paste credentials into the prompt. |
| Assistant says “passed,” but no run is visible | Ask for the run ID and saved report. Check whether execution was declined, halted, incomplete, or intentionally local-only. |

## Next Steps and Sources

- [Use the same project skill in Antigravity IDE](/support/docs/rook-antigravity-ide/).
- [Choose another coding client](/support/docs/rook-coding-agents/) or [automate a reviewed suite in CI/CD](/support/docs/agent-assurance-ci-cd/).
- [Public Rook skill](https://github.com/LambdaTest/rook/blob/main/skill-installer/skills/SKILL.md), [Antigravity CLI overview](https://antigravity.google/docs/cli/overview/), and [Google's Agent Skills documentation](https://antigravity.google/docs/skills).

Setup instructions were checked against public documentation. The locally available `agy` 1.1.2 version/help commands were checked; this is not a minimum-version recommendation or a live end-to-end integration test. Client versions, account policies, and execution environments can differ.
