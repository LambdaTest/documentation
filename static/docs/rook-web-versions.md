# Versions and Call Graph

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Open **Projects → your project → your agent → Versions** to inspect the definitions Rook has synchronized. Use this page when you need to establish which agent definition a result refers to.

## Read a Version

Each row shows its version number, a **current** badge when applicable, feature and scenario counts, and recording time when available. Select a row to focus it; selecting an older row does not roll back your agent or execute anything.

**View Full Spec** opens the agent definition saved for that version. Use the viewer's copy control to copy its text when needed, after checking for sensitive information. Close the dialog to return to the list. The link is absent when no specification artifact is available.

To investigate an old execution, first check **Agent version** on its [run details page](/support/docs/rook-web-run-details/), then inspect that version here. Do not assume an older run used the current definition.

## Read the Call Graph

Click **View call graph** on the relevant version.

The graph shows declared relationships to tools, subagents, and MCP servers where discovery recorded them. In the triage sample, get_ticket and search_tickets are read-only; set_severity, assign_team, and reply_to_customer can write. Dashed edges indicate unknown mutation status, not a safe operation.

This is a **definition graph, not a runtime trace**. An edge means the agent can call that component; it does not prove that a particular scenario called it. For observed activity, inspect the scenario result's [Response and Artefacts](/support/docs/rook-web-result-details/).

## When Nothing Is Shown

**Not recorded upstream yet** means no synchronized version is available. Run rook sync in the correct CLI workspace. If the graph dialog says the version declares no subagents, tools, or MCP servers, inspect the full definition and discovery inputs before concluding that the real agent has no dependencies.

A file or graph loading error is different from an empty definition. Retry and check access to the project; do not regenerate a version solely to work around a failed read.

## Next Step

Review [Features](/support/docs/rook-web-features/) to see which behaviors were discovered and which still lack scenarios. For the system-level design, read [Rook Architecture](/support/docs/rook-architecture/).
