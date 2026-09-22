---
id: rook-antigravity-ide
title: Use Rook with Antigravity IDE
sidebar_label: Antigravity IDE
description: Set up the public Rook skill in Antigravity IDE, verify workspace discovery, safely test your AI agent, and review local and hosted evidence.
hide_title: false
slug: rook-antigravity-ide/
---

# Use Rook with Antigravity IDE

Use Antigravity IDE's agent side panel to work through a Rook test in your agent repository. The assistant can inspect code, propose a profile and scenarios, and use Rook CLI after you approve the operations. The Rook skill is an instruction bundle, not an editor extension or MCP server; it does not make the IDE itself the test target.

This page covers the standalone **Antigravity IDE**. For the terminal client (`agy`), use [Antigravity CLI](/support/docs/rook-antigravity-cli/). Google documents Antigravity 2.0 and IDE extensions separately; do not assume every interface has the same controls. Google also currently directs enterprise customers to Antigravity 2.0 or CLI rather than the standalone IDE. See the [IDE overview](https://antigravity.google/docs/ide/overview/).

## Before You Start

- Install Antigravity IDE from [Google's official download page](https://antigravity.google/download), complete sign-in, and open the agent repository as your workspace.
- [Install the public Rook CLI](/support/docs/rook-installation/). In the IDE's integrated terminal, run `rook --version` and `rook doctor`, then `rook login` if needed. Signing in to Antigravity does not sign you in to Rook.
- Use an AI agent you own and a safe test environment. Start with the [sample quickstart](/support/docs/agent-assurance-quickstart/) if you do not yet have a Rook workspace.
- Use Git and Bash for the copy example below. If using WSL or another remote environment, keep the workspace, skill, and Rook executable in the environment the IDE agent actually uses. Keep credentials out of committed files and chat.

## Install the Workspace Skill

Antigravity is **not a named target of `@testmuai/rook-skill`**. Copy the complete [public Rook skill bundle](https://github.com/LambdaTest/rook/tree/main/skill-installer/skills) into the workspace. This is manual Agent Skills compatibility, not an automatic installer integration. Do not substitute the installer's Gemini CLI target for Antigravity.

Run this Bash block from your repository's root in the integrated terminal:

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

Keep `.agents/skills/rook/SKILL.md` and every file under `references/` together. Review the files before committing them for the team. The temporary checkout holds public source only and can be removed after review. If you already followed the Antigravity CLI guide in this repository, inspect and reuse its bundle instead of installing a second copy.

Google's [skill documentation](https://antigravity.google/docs/skills#antigravity-ide-skill-locations) specifies `.agents/skills` for project skills. The older `.agent/skills` spelling remains compatible, but use the current path for this setup and avoid duplicate `rook` copies.

For updates, review a newer source revision and replace the whole bundle after preserving local changes. The npm installer does not manage this copy. To stop using it, preserve custom changes and remove only this project's `.agents/skills/rook`; the CLI and other compatible assistants may share it.

## Confirm the IDE Loaded It

Open a new conversation in the [agent side panel](https://antigravity.google/docs/ide/agent-side-panel/), then open its **Customizations** menu and inspect the active skills for `rook`. Confirm that the selected workspace contains the copied bundle. Reopen the workspace and start a fresh conversation if it was installed during an existing session.

Use an inspection-only request first:

```text
Use the rook skill from .agents/skills/rook to inspect this repository.
Confirm the skill path and its bundled references, then explain the next safe
Rook setup step. Do not invoke the target, run paid Rook commands, install
software, or change profiles yet.
```

Ask the assistant to identify missing setup and its next proposed command. A generated plan or an IDE artifact is not proof that a Rook test ran. This walkthrough uses a named skill request; the CLI's `/skills` commands are not instructions to type in the IDE terminal.

## Approve and Run a Bounded Test

Adapt the following to your target agent and policy:

```text
Use the rook skill to help test the refund agent against its refund policy.
Use the staging profile and test fixtures only. Propose up to three scenarios.
Before each paid operation or target invocation, show the command, profile,
selected scenario, hooks, possible writes, and expected spending; ask me to approve.
After approval, run one selected scenario. Report its exact run ID and the
Pass, Fail, and Unable to Verify results with criterion-level evidence.
Do not run paid RCA or retry automatically.
```

Review the assistant's plan and proposed terminal commands. Keep command review enabled; approving a plan is not blanket approval for later target writes or paid operations. Antigravity permissions and Rook grants are separate controls, and a prompt is not a hard budget cap. Client model usage and Rook credits are separate too.

Check [profiles and hooks](/support/docs/rook-profiles-and-hooks/) and write-capable calls in `agent.yaml`. Profile creation, repair, and testing can invoke the target before a scenario run. Use [Rook's environment store](/support/docs/rook-environment-and-secrets/) or approved environment variables for credentials, and follow [permissions and safety](/support/docs/rook-permissions-and-safety/).

## Review Rook Evidence Alongside the IDE

Keep the IDE plan, code changes, and Rook verdict distinct. Require the current invocation's run ID and completion state; a successful command exit does not mean every scenario passed. In the same project terminal:

```bash
rook report <run-id> --json
rook ui --local
```

The local UI shows workspace evidence. For a shared run, sync the selected agent before execution with `rook sync`, then use `rook ui` or [Rook projects](https://rook.lambdatest.com/projects). Select project → agent → run → scenario and match the run ID. An intentional `--test` run remains local.

### Local UI

Review each criterion and its recorded files. This page-only HTTP smoke-test capture illustrates Rook's result view; it is not an Antigravity IDE screenshot or evidence that this integration was executed.

<img loading="lazy" src={require('../assets/images/rook/rook-local-result.png').default} alt="Local Rook scenario criteria and evidence for the HTTP smoke-test sample" width="1440" height="900" className="doc_img"/>

### Hosted Web UI

For uploaded results, inspect the **Verdict** and **Artefacts** tabs. This screenshot is illustrative Rook evidence, not an IDE-specific test capture.

<img loading="lazy" src={require('../assets/images/rook/rook-web-result-verdict.png').default} alt="Hosted Rook scenario Verdict tab with uploaded result evidence" width="1440" height="900" className="doc_img"/>

For missing observations or incomplete runs, see [results and evidence](/support/docs/agent-assurance-results-and-evidence/). Use [both UI walkthroughs](/support/docs/agent-assurance-results-and-evidence/) for the full navigation flow.

## Troubleshooting

| Symptom | What to check |
| --- | --- |
| `rook` is absent from active skills | Check the selected workspace, `.agents/skills/rook/SKILL.md`, and the **Customizations** menu. Start a new conversation after copying the bundle. |
| Skill instructions load but references fail | Keep the complete `references/` folder next to `SKILL.md`. |
| Duplicate or outdated instructions | Inspect the loaded path. Check legacy `.agent/skills` and user-level copies before moving or replacing anything. |
| CLI setup worked, but the IDE cannot find Rook | Check PATH and authentication in the IDE's integrated terminal and agent execution environment; restart the IDE after installation if needed. |
| Works locally but fails in WSL or a remote workspace | The execution environment needs its own reachable target, Rook installation, and approved credentials. Do not assume the host's PATH or login is shared. |
| A command needs extra permissions | Review the exact command and requested access. Do not disable all terminal or filesystem protections to make it run. |
| The IDE produced a report, but Rook shows no run | Require a saved Rook run ID and report, not only an IDE summary. Check for declined, halted, or local-only execution. |

## Next Steps and Sources

- [Use Rook from Antigravity CLI](/support/docs/rook-antigravity-cli/) or [choose another coding client](/support/docs/rook-coding-agents/).
- [Automate a reviewed suite in CI/CD](/support/docs/agent-assurance-ci-cd/).
- [Public Rook skill](https://github.com/LambdaTest/rook/blob/main/skill-installer/skills/SKILL.md), [Google's Agent Skills documentation](https://antigravity.google/docs/skills), and [Antigravity IDE overview](https://antigravity.google/docs/ide/overview/).

Setup instructions are based on these public sources. This guide does not claim a live end-to-end Rook test inside Antigravity IDE; discovery and execution depend on your installed client, account policy, and workspace environment.
