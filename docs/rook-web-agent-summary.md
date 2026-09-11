---
id: rook-web-agent-summary
title: Rook Web UI — Agent Summary, Profiles, and Hooks
sidebar_label: Agent Summary
description: Inspect an agent's description, source context, findings, invocation profiles, lifecycle hooks, and recorded scripts in Rook.
slug: rook-web-agent-summary/
canonical: https://www.testmuai.com/support/docs/rook-web-agent-summary/
---

# Agent Summary, Profiles, and Hooks

Open **Projects → your project → your agent → Summary**. This page answers: “What did Rook discover, and how is this agent configured to run?” It shows synchronized records, not unsaved changes in your local repository.

<img loading="lazy" src={require('../assets/images/rook/rook-web-agent-summary.png').default} alt="Rook Summary with description, discovery context, specification and findings links, and the local-triage profile with its execute script" className="doc_img"/>

## Check the Agent and Source Context

The heading identifies the agent and current version. **Description** summarizes its purpose; the counters show features, scenarios, tools, runs, last pass rate, and coverage when available.

**Context** lists the source materials used for discovery. A checkpoint digest identifies the recorded context; it does not prove that the target currently deployed matches that source. Use **View Full Spec** beneath Context to read the agent definition and **View findings** to inspect recorded discovery findings. If no findings artifact exists, the page says **No findings recorded**—that is not a clean bill of health.

## Inspect Profiles and Hook Phases

Each **Profiles** row shows the profile ID, declared hook phases, and the available script path. There are two different file actions:

- **View Full Spec** on the profile row opens its YAML declaration: hook mappings, environment requirements, and capabilities.
- A linked **script path** opens the recorded script, rather than the profile YAML. A plain-text path has no available script artifact to open.

<img loading="lazy" src={require('../assets/images/rook/rook-web-profile-spec.png').default} alt="Profile YAML dialog showing local-triage, its execute hook at scripts/local-triage.mjs, and the calls capability" className="doc_img"/>

In this example, <code>local-triage</code> defines only <code>execute</code>. That is sufficient for this single-turn fixture; it does not imply that the other lifecycle phases are broken. Profiles can supply <code>prepare</code>, <code>open</code>, <code>execute</code>, <code>close</code>, and <code>collect</code> hooks. Rook performs <code>judge</code> itself. See [Lifecycle Phases](/support/docs/rook-hooks-and-phases/) for ordering and phase-specific inputs and outputs.

The Web UI does not generate or edit profiles. To connect a new target, use [Prompt-Based Profile Authoring](/support/docs/agent-assurance-profiles/) in the CLI, review the resulting scripts and permissions, test the profile, then run <code>rook sync</code>. A visible profile is not proof of successful verification on your current machine.

## Interpret Tools and Missing Values

The **Tools** section lists recorded tools with read, write, or unknown access information when available. Unknown access is not equivalent to read-only. A dash for coverage means no measurement is available, not zero coverage.

:::caution Stage display discrepancies
On September 11, 2026, the sample Summary showed **1%** for a **1 of 1 passed** run and an empty Tools section despite the five-tool headline count. Check the version's [full specification and call graph](/support/docs/rook-web-versions/) for declared tools, and the [run details](/support/docs/rook-web-run-details/) for actual results.
:::

## Next Step

Use [Versions](/support/docs/rook-web-versions/) to inspect a recorded definition, or [Runs](/support/docs/rook-web-runs/) to find the profile revision used by a particular execution.
