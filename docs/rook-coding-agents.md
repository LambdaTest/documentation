---
id: rook-coding-agents
title: Use Rook with Coding Agents
sidebar_label: Choose a Coding Agent
description: Choose a Rook skill setup guide for coding CLIs, VS Code, Windsurf, or Antigravity IDE, using the public Rook skill bundle.
toc_max_heading_level: 2
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

This installs for Claude Code, Codex, and Gemini CLI under your home directory. To avoid installing all three, follow the selected client's page and use its `--agent` flag. The currently published skill package is 0.1.0; its version is independent of the CLI, whose latest public release checked on September 25, 2026 is 0.1.5.

On Windows, complete [Rook's native setup](/support/docs/rook-installation/#windows) first and use `npx.cmd` for the installer in PowerShell. Each coding client has its own platform requirements. The manual-copy recipes and CI examples in these docs use Bash; run them in a supported Bash environment such as WSL, keeping the client and skill in that same environment.

For a team-scoped installation or another compatible client, copy the complete `skill-installer/skills` bundle from [LambdaTest/rook](https://github.com/LambdaTest/rook/tree/main/skill-installer/skills), including `references/`. The individual guides provide non-overwriting, revision-pinned examples. Do not substitute a similarly named skill from an unrelated repository.

## Test Your Agent Through Prompts {#test-your-agent-through-a-prompt}

After installing the skill in your chosen client, **type these requests in your coding assistant's chat, not in a terminal**. You describe the goal; the assistant uses the Rook skill to choose and execute the appropriate CLI operations. You do not need to translate each request into a Rook command.

Work through the steps in the same conversation. Replace the example refund agent, policy, profile, and IDs with yours. If a step is already complete, ask the assistant to inspect and reuse it.

### 1. Check Readiness

```text
Use the rook skill. Inspect this repository and my Rook setup.
Confirm the loaded skill and its references, CLI version, authentication,
selected project and agent, profiles, and available credit balance.
Explain what is missing. Do not install or update software, change definitions,
invoke the target, or run paid Rook operations yet.
```

Expect a readiness summary and the next necessary step, not a claim that tests ran. Complete any required sign-in through the approved login flow; never paste credentials into chat. An unreadable credit balance means **unknown**, not unlimited.

### 2. Select and Understand the Agent

```text
Use the rook skill to prepare testing for the refund agent in this repository.
Show the available projects and agents so I can choose; ask before creating one.
Reuse existing discovery if it is current. Otherwise propose a focused discovery
of the relevant source and wait for approval of its scope and Rook credit use.
Explain the discovered features, tools, write-capable calls, and coverage gaps.
Do not generate scenarios or invoke the target yet.
```

Check the selected project and agent IDs, source scope, and feature summary before continuing. Discovery analyzes the implementation; it is not evidence that a test passed. If no agent was registered, resolve that gap before generating scenarios.

### 3. Create or Repair a Profile from a Description

```text
Use the rook skill to prepare a staging profile for this agent.
Infer the invocation from its source and existing configuration, and ask me for
any missing endpoint, command, or MCP details instead of guessing.
Show the proposed profile, required environment-variable names, and hooks.
Explain prepare, open, execute, close, and collect; Rook owns judging.
Keep secret values out of chat, profiles, and committed files. Before creation, repair, or
testing, explain costs and possible target writes and wait for my approval.
After approval, validate with a reply-only goal and show the observed response.
```

A profile is how Rook reaches the agent. Only `execute` is required; add other hooks when your target needs them. Profile creation and repair can make real test calls before any scenario run. A reply-only goal reduces risk but does not sandbox the target. Check that execution returned an agent reply and that the claimed evidence capabilities were actually observed. See [profile and hook contracts](/support/docs/rook-profiles-and-hooks/) for implementation details.

### 4. Generate and Review Scenarios

```text
Use the rook skill to cover this agent's refund limits and identity checks.
Propose a small functional and adversarial suite and explain the Rook credit use.
Wait for my approval before generation. Then list the saved scenario IDs,
feature coverage, acceptance criteria, and any excluded or unrunnable cases.
Recommend one safe smoke scenario. Do not execute the suite yet.
```

Review the actual saved scenarios, not just the assistant's proposed examples. Ask for the missing observation or profile capability when a scenario is unrunnable. Generating scenarios does not execute them, and generation can spend credits.

### 5. Run Only the Reviewed Scope

```text
Use the rook skill to run the one smoke scenario I selected with the staging
profile and isolated test fixtures. Confirm its exact ID, hooks, tool grants,
possible target writes, and Rook credit use before asking for my approval.
I want a shared result: explain and sync the reviewed definitions before running.
After approval, run only that scenario and preserve the run ID and evidence,
including failures or partial results. Do not retry or run paid RCA automatically.
```

For a private rehearsal, replace the entire sentence beginning “I want a shared result” with “Keep this run local-only; do not sync or publish it.” That selects a deliberate test-mode run, which will not appear on the hosted timeline. Do not silently switch to local-only execution after a sync failure.

The assistant's permissions and Rook's tool grants are separate. Keep both in place and prefer narrowly scoped grants. Approval to inspect is not approval to spend credits or invoke the target. The client's model usage is separate from Rook credits, and a prompt is **not a hard spending cap**; see [permissions and safety](/support/docs/rook-permissions-and-safety/).

## Review the Actual Result {#review-the-actual-result}

### 6. Read Evidence and Open the Right UI

```text
Use the rook skill to review the exact run ID from the operation we just ran,
not an older default report. Show completion state, planned/executed counts,
Pass, Fail, Unable to Verify, incomplete work, and reported credit spend.
For failures and verification gaps, cite criterion-level saved evidence.
Open the local Rook UI for this workspace, or give me its local address if you
cannot open a browser. If the run was uploaded, help me find that same run in
the hosted UI. Do not rerun tests or start paid analysis.
```

Expect an actual run ID and evidence location. A zero process exit or `ok: true` alone is not proof of a completed, passing run; refused or halted work must be reported accurately. If no run started, there is no new result to open.

The local UI reads workspace evidence. For uploaded runs, open [Rook projects](https://rook.lambdatest.com/projects), then select project → agent → Runs → run → scenario and match the run ID. A local-only run is absent from that timeline by design. Ask the assistant to inspect pending uploads before proposing synchronization; do not rerun tests just to obtain a link.

## More Actions You Can Ask the Skill to Perform {#guided-skill-actions}

Use these follow-ups in the same conversation after checking the project, agent, and profile. Replace example IDs with saved IDs from your workspace. Each request has an explicit review or stopping point; the assistant should check the installed CLI's help rather than invent unsupported flags.

### Maintain Coverage and Connections

| When you need to… | Prompt to send | Check before continuing |
| --- | --- | --- |
| Refresh changed features | “Use Rook to inspect the changed refund implementation and current discovery. Propose focused rediscovery and refresh only stale scenario coverage after I approve the credit use. Show the definition diff; do not run tests.” | Existing scenarios remain reviewable; a forced regeneration is a separate deliberate choice. |
| Broaden test coverage | “Use Rook to propose functional boundary and integration tests, non-functional reliability tests, and adversarial prompt-injection or PII-leakage tests for this agent. Explain what can be observed, then ask before paid generation.” | Class/category coverage and measurable criteria; unsupported observations remain gaps. |
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

## Take the Reviewed Suite into CI/CD

Ask your assistant to prepare [GitHub Actions](/support/docs/rook-github-actions/), [Jenkins](/support/docs/rook-jenkins/), or [Argo CD](/support/docs/rook-argocd/) using the same reviewed profiles and scenarios. Each guide starts with prompts for authoring and reviewing the integration, then shows the files the runner executes. A coding assistant and skill installer are not required on the runner.
