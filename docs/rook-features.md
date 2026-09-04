---
id: rook-features
title: Rook Features
hide_title: false
sidebar_label: Features
description: Explore Rook features for agent discovery, prompt-based profiles, lifecycle hooks, phased execution, evidence, synchronization, and automation.
keywords:
  - rook features
  - ai agent assurance
  - autonomous agent testing
  - evidence based agent evaluation
slug: rook-features/
---

# Rook Features

Rook combines a guided terminal interface with a scriptable CLI. Both surfaces run the same commands and write the same local evidence. Its prompt-based profile author and lifecycle hooks can reach agents that need custom authentication, sessions, CLIs, asynchronous calls, or delayed evidence collection.

## Feature Map

| Capability | What Rook does | Primary commands |
|---|---|---|
| Project-aware workspaces | Files agents, versions, and runs under a selected TestMu AI project while keeping each project's local tree separate | <code>/project</code>, <code>/status</code> |
| Agent discovery | Scans local signals, identifies parent and subagent relationships, and analyzes only agents whose relevant material changed | <code>/explore</code>, <code>/agent</code> |
| Grounded feature extraction | Records behavior, tools, inputs, outputs, data constraints, approval gates, and source evidence as readable files | <code>/explore</code> |
| Scenario generation | Produces functional, non-functional, and adversarial scenarios across explicit classes and categories | <code>/generate</code>, <code>/scenarios</code> |
| Prompt-based profile generation | Accepts a cURL command, command line, Postman export, file, URL, or plain-language description; writes hook scripts; runs them; and corrects them from the observed reply | <code>/profile add</code>, <code>/profile fix</code> |
| Script-based invocation hooks | Runs custom scripts at <code>prepare</code>, <code>open</code>, <code>execute</code>, <code>close</code>, and <code>collect</code> so transport, authentication, sessions, and evidence remain independently configurable | <code>/profile</code>, <code>/env</code> |
| Phased live runs | Selects scenarios with filters or free-text guidance, shows the plan, supports concurrency, partial lifecycle execution, test mode, continuation, resume, and optional RCA | <code>/run</code>, <code>/run --phases</code> |
| Evidence-backed verdicts | Stores per-criterion decisions, exchanges, observed effects, artifacts, and explicit verification gaps | <code>/report</code>, <code>/ui</code> |
| Local-first versioning | Keeps discovery and generated content on disk until an explicit atomic sync; detects ahead, behind, and diverged trees | <code>/sync</code>, <code>/status</code> |
| Interrupted-run recovery | Keeps completed scenario evidence, can carry decided work forward, and can reconcile results that were not recorded upstream | <code>/run --resume</code>, <code>/runs sync</code> |
| MCP configuration and trust | Resolves local, project, user, and discovered MCP definitions with explicit approval for project-controlled commands | <code>/mcp</code> |
| Human and CI operation | Prompts in attended terminals and refuses or uses explicit launch-scoped grants when nobody can answer | <code>--allow</code>, <code>--json</code>, <code>--verbose</code> |
| Hosted and offline review | Opens synchronized results in the hosted app or serves the current workspace from disk without an account or network | <code>/ui</code>, <code>/ui --local</code> |

## Prompt-Based Profile Generation

Start <code>/profile add</code> and describe how you reach the agent. You can paste or point Rook at any combination of:

- a working cURL command;
- a local agent command line;
- a Postman export, API specification, integration note, or source file;
- a file path or URL containing the relevant material; or
- a plain-language description of the target.

Rook reads the material, asks only for information it cannot determine, writes reviewable <code>.mjs</code> hook scripts, invokes the target, and corrects the scripts from the actual response. If an existing profile stops working, <code>/profile fix</code> runs it, reads the failure, and repairs it. <code>/profile test</code> performs the cheaper verification call without rewriting anything.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-profile.png').default} alt="Rook profile help showing prompt-based add, repair, verification, inspection, and selection commands" className="doc_img"/>

Profiles store script paths, required environment-variable names, and observed capabilities—not credential values. The generated files remain on disk for review and editing.

## Lifecycle Phases and Hooks

Rook owns a fixed lifecycle while each profile supplies the scripts that reach the target:

| Phase | When it runs | Typical use |
|---|---|---|
| <code>prepare</code> | Once per run | Authenticate, seed fixtures, or warm a cache. |
| <code>open</code> | Before each scenario | Create a session or reset scenario state. |
| <code>execute</code> | Once per turn | Send the goal and return <code>output</code>. Required. |
| <code>close</code> | After each scenario | End a session or release a resource. |
| <code>collect</code> | After <code>close</code> | Fetch traces, calls, logs, usage, or delayed evidence. |
| <code>judge</code> | After evidence is available | Rook evaluates the recorded response and evidence. |

Use <code>--phases</code> or <code>--skip</code> to run a contiguous part of the lifecycle. Use <code>--run &lt;id&gt;</code> to continue the same run later—for example, call the agent now and collect a trace after the logging pipeline catches up. See [Lifecycle Phases and Hooks](/support/docs/rook-hooks-and-phases/) for the complete script contract and state model.

## Incremental by Default

Rook hashes the relevant source and stored model before doing expensive work. Re-running <code>/explore</code>, <code>/generate</code>, or <code>/sync</code> against unchanged content is a no-op. Use <code>--force</code> only when you intentionally want to re-derive discovery or generated scenarios.

When several agents are found, Rook records their relationships and keeps a separate specification, feature set, scenario set, profiles, runs, and sync state for each agent.

## Scenario Classes and Categories

Generation supports three classes:

- <code>functional</code>: expected workflows, negative paths, boundaries, integrations, and state or context handling.
- <code>non_functional</code>: performance, token economy, reliability, and output quality.
- <code>adversarial</code>: prompt injection, jailbreak, data exfiltration, PII leakage, harmful content, hallucination, hijacking, policy violation, and technical injection.

Use <code>--class</code>, <code>--category</code>, <code>--total</code>, and free-text instructions to shape a suite. Generated scenarios remain editable files; human-authored scenarios are not silently replaced by regeneration.

## Deliberate Publication

An agent version pins its specification, features, and scenarios. Invocation profiles have their own revision lifetime, so changing a staging URL does not redefine the agent or invalidate its scenario history. A run pins both the agent version and the profile revision it actually used.

<code>/sync</code> sends every local agent as one project-level transaction by default. Use <code>--agent &lt;id&gt;</code> only when you intentionally want to synchronize one agent. If another machine moved the upstream version first, Rook reports a branch instead of silently overwriting it.

## Runs That Explain Themselves

Before execution, Rook builds a run plan. You can accept it, discard it, or describe what to change. The plan is written to disk so unattended runs remain auditable.

Useful run controls include:

- <code>--only</code>, <code>--class</code>, <code>--category</code>, and <code>--tag</code> for deterministic selection.
- <code>--profile</code> to override the active profile for one run.
- <code>--name</code> to label the run.
- <code>--concurrency 1..8</code> to control simultaneous target calls; the default is one unless the planner proposes another value.
- <code>--test</code> to test the current dirty tree without adding the run to the shared project timeline.
- <code>--phases prepare,open,execute,close</code> to stop before delayed evidence collection, then <code>--run &lt;run-id&gt; --phases collect,judge</code> to continue that run in place.
- <code>--skip</code> to omit a phase suffix when a verdict or collected evidence is intentionally not needed yet.
- <code>--resume &lt;run-id&gt;</code> to reuse compatible completed verdicts and judge surviving responses that were not graded.
- <code>--rca</code> to explain failure clusters and recommend changes. RCA costs additional credits.

## Evidence That Preserves Uncertainty

Rook records a verdict per acceptance criterion. A run may pass while still naming verification gaps. Evidence produced by a reader, verifier, or human answer is copied into the run so a verdict remains understandable after the live environment has changed.

Judges must not mutate the state they are verifying. If the only available check would perform another write, the correct result is <strong>Unable to Verify</strong>.

## TUI and Headless Parity

Start <code>rook</code> for the TUI. Slash commands, completion, <code>/help</code>, and <code>/guide</code> are derived from the same command registry used by shell invocations. This keeps flags and subcommands consistent across both surfaces.

Long-running commands emit structured progress. In the TUI, Rook renders active subagents and parallel scenario lanes; in automation, <code>--json</code> emits machine-readable events and <code>--verbose</code> exposes tool activity and credit use.
