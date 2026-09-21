---
id: rook-copilot-cli
title: Use Rook with GitHub Copilot CLI
sidebar_label: GitHub Copilot CLI
description: Set up the public Rook skill in GitHub Copilot CLI, verify discovery, test an AI agent safely, and review local and hosted evidence.
toc_max_heading_level: 2
hide_title: false
slug: rook-copilot-cli/
---

# Use Rook with GitHub Copilot CLI

Use GitHub Copilot CLI to operate Rook from your agent repository: inspect the implementation, prepare a test profile, generate scenarios, and explain recorded results. The coding assistant runs Rook CLI; installing a skill does not turn Rook into an MCP server or automatically test the assistant itself.

## Before You Start

- Install and sign in to GitHub Copilot CLI; its account or model-provider access is separate from your Rook account.
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
  if test -e .github/skills/rook; then
    echo "An existing rook skill needs review; nothing was overwritten." >&2
    exit 1
  fi
  mkdir -p .github/skills
  cp -R "$rook_skill_checkout/rook/skill-installer/skills" .github/skills/rook
)
```

Keep `.github/skills/rook/SKILL.md` and the entire `references/` directory together. Review the files before committing the project skill for teammates. The temporary checkout contains public source only and can be removed after review.

For an update, review a newer public revision, back up the existing skill, and replace the **whole bundle** in a reviewed change. The Rook npm installer does not manage this manual copy. To stop using it, remove only this project's `.github/skills/rook` after preserving custom changes.

## Confirm the Client Loaded It

From the agent repository, launch the client:

```bash
copilot
```

Start Copilot in this repository and run `/skills list`, then `/skills info rook`. Use `/skills reload` if you added the folder while the session was open.

The `.github/skills/rook` project folder can also be used by GitHub Copilot in VS Code. This is the standalone `copilot` CLI, not the older `gh copilot` command. Keep its tool approvals enabled and approve only the reviewed Rook commands.

## Test Your Agent Through a Prompt

Start with an inspection-only request:

```text
/rook Inspect this repository and explain the next safe setup step. Do not run paid commands or invoke the target yet.
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

<img loading="lazy" src={require('../assets/images/rook/rook-local-result.png').default} alt="Local Rook scenario result with criterion-level evidence for the HTTP smoke-test sample" width="1440" height="900" className="doc_img"/>

### Hosted Web UI

Open the uploaded scenario's **Verdict** and **Artefacts** tabs and match its run ID to the CLI report. This is an example result view, not a client-specific test capture.

<img loading="lazy" src={require('../assets/images/rook/rook-web-result-verdict.png').default} alt="Hosted Rook Verdict tab illustrating review of an uploaded scenario result" width="1440" height="900" className="doc_img"/>

See [results and evidence](/support/docs/agent-assurance-results-and-evidence/) for interpreting missing observations and [both UI walkthroughs](/support/docs/rook-web-ui/) for navigation.

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
- [Public Rook skill](https://github.com/LambdaTest/rook/blob/main/skill-installer/skills/SKILL.md) and [GitHub Copilot CLI skill documentation](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-skills).

Installation/discovery instructions are based on the public sources above. Availability still depends on your client version, account policy, and execution environment; this guide does not claim a live end-to-end test in every client.
