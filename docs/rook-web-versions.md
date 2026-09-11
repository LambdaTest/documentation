---
id: rook-web-versions
title: Rook Web UI — Versions and Call Graph
sidebar_label: Versions & Call Graph
description: Inspect synchronized agent versions, their full specifications, and declared tool, subagent, and MCP relationships.
slug: rook-web-versions/
canonical: https://www.testmuai.com/support/docs/rook-web-versions/
---

# Versions and Call Graph

Open **Projects → your project → your agent → Versions** to inspect the definitions Rook has synchronized. Use this page when you need to establish which agent definition a result refers to.

<img loading="lazy" src={require('../assets/images/rook/rook-web-versions.png').default} alt="Rook Versions tab with the current version, feature and scenario counts, timestamp, View call graph, and View Full Spec" className="doc_img"/>

## Read a Version

Each row shows its version number, a **current** badge when applicable, feature and scenario counts, and recording time when available. Select a row to focus it; selecting an older row does not roll back your agent or execute anything.

**View Full Spec** opens the agent definition saved for that version. Use the viewer's copy control to copy its text when needed, after checking for sensitive information. Close the dialog to return to the list. The link is absent when no specification artifact is available.

To investigate an old execution, first check **Agent version** on its [run details page](/support/docs/rook-web-run-details/), then inspect that version here. Do not assume an older run used the current definition.

## Read the Call Graph

Click **View call graph** on the relevant version.

<img loading="lazy" src={require('../assets/images/rook/rook-web-call-graph.png').default} alt="Rook call graph for triage-service with two read-only tool edges and three write-capable tool edges" className="doc_img"/>

The graph shows declared relationships to tools, subagents, and MCP servers where discovery recorded them. In the triage sample, <code>get_ticket</code> and <code>search_tickets</code> are read-only; <code>set_severity</code>, <code>assign_team</code>, and <code>reply_to_customer</code> can write. Dashed edges indicate unknown mutation status, not a safe operation.

This is a **definition graph, not a runtime trace**. An edge means the agent can call that component; it does not prove that a particular scenario called it. For observed activity, inspect the scenario result's [Response and Artefacts](/support/docs/rook-web-result-details/).

## When Nothing Is Shown

**Not recorded upstream yet** means no synchronized version is available. Run <code>rook sync</code> in the correct CLI workspace. If the graph dialog says the version declares no subagents, tools, or MCP servers, inspect the full definition and discovery inputs before concluding that the real agent has no dependencies.

A file or graph loading error is different from an empty definition. Retry and check access to the project; do not regenerate a version solely to work around a failed read.

## Next Step

Review [Features](/support/docs/rook-web-features/) to see which behaviors were discovered and which still lack scenarios. For the system-level design, read [Rook Architecture](/support/docs/rook-architecture/).
