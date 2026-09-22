---
id: rook-coding-agents
title: Use Rook with Coding Agents
sidebar_label: Choose a Coding Agent
description: Choose a Rook skill setup guide for coding CLIs, VS Code, Windsurf, or Antigravity IDE, using the public Rook skill bundle.
hide_title: false
slug: rook-coding-agents/
---

# Use Rook with Coding Agents

The Rook skill teaches a coding assistant to use Rook CLI to test an AI agent in your repository. You describe the testing goal; the assistant follows Rook's setup, execution, permission, and evidence workflow. You still review the target, spending, and real-world effects before execution.

The skill is **not** the Rook executable, an editor extension, or a Rook MCP server. Install the [public CLI](/support/docs/rook-installation/) separately. Testing the coding assistant itself also requires a suitable agent profile; installing this skill alone does not configure that target.

## Choose Your Client

Each page includes its own installation, discovery check, first prompt, troubleshooting, and local/hosted result review.

| Client | Setup provided here | Skill location |
| --- | --- | --- |
| [Claude Code](/support/docs/rook-claude-code/) | Rook npm skill installer | `~/.claude/skills/rook/` |
| [Codex CLI](/support/docs/rook-codex/) | Rook npm skill installer | `~/.agents/skills/rook/` |
| [Gemini CLI](/support/docs/rook-gemini-cli/) | Rook npm skill installer | `~/.gemini/skills/rook/` |
| [GitHub Copilot CLI](/support/docs/rook-copilot-cli/) | Public skill in a project directory | `.github/skills/rook/` |
| [OpenCode](/support/docs/rook-opencode/) | Public skill in a project directory | `.opencode/skills/rook/` |
| [Cursor CLI](/support/docs/rook-cursor-cli/) | Public skill in a project directory | `.cursor/skills/rook/` |
| [Antigravity CLI](/support/docs/rook-antigravity-cli/) | Public skill in a project directory | `.agents/skills/rook/` |
| [VS Code with GitHub Copilot](/support/docs/rook-vscode/) | Public skill in a project directory | `.github/skills/rook/` |
| [Windsurf Cascade](/support/docs/rook-windsurf/) | Public skill in a project directory | `.windsurf/skills/rook/` |
| [Antigravity IDE](/support/docs/rook-antigravity-ide/) | Public skill in a project directory | `.agents/skills/rook/` |

The first three are explicit targets of the [public Rook skill installer](https://github.com/LambdaTest/rook/tree/main/skill-installer). The other guides use the clients' documented Agent Skills compatibility; they do not add new installer flags or imply a live certification of every client/version. Their pages link the corresponding vendor documentation.

## Install for the Three Packaged Clients

With Node.js 22+ and npm:

```bash
npx @testmuai/rook-skill@latest
```

This installs for Claude Code, Codex, and Gemini CLI under your home directory. To avoid installing all three, follow the selected client's page and use its `--agent` flag. The currently published skill package is 0.1.0; its version is independent of Rook CLI 0.1.3.

For a team-scoped installation or another compatible client, copy the complete `skill-installer/skills` bundle from [LambdaTest/rook](https://github.com/LambdaTest/rook/tree/main/skill-installer/skills), including `references/`. The individual guides provide non-overwriting, revision-pinned examples. Do not substitute a similarly named skill from an unrelated repository.

## What a Useful First Session Looks Like

1. The assistant loads the public skill and checks the installed CLI and workspace state.
2. It identifies the target agent, authentication needs, invocation profile, hooks, and possible writes.
3. You approve a small, explicitly scoped test and its expected cost.
4. It records the run ID and presents Pass, Fail, and Unable to Verify with evidence—not just a successful shell exit.
5. You inspect the same run in the [local or hosted UI](/support/docs/agent-assurance-results-and-evidence/).

For automation after that rehearsal, choose [GitHub Actions](/support/docs/rook-github-actions/), [Jenkins](/support/docs/rook-jenkins/), or [Argo CD](/support/docs/rook-argocd/). These pipelines invoke the CLI directly; they do not require a coding assistant or skill installer on the runner.
