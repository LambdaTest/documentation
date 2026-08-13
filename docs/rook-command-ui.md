---
id: rook-command-ui
title: Rook /ui Command
sidebar_label: /ui
description: Open the local read-only Rook browser viewer for runs, evidence, artifacts, and trends.
slug: rook-command-ui/
---

# <code>/ui</code> Command

Use <code>/ui</code> to inspect Rook's project files through a local browser view.

The viewer starts with the interactive Rook session and stops when that session exits. <code>/ui</code> reprints its URL and optionally opens the browser.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-ui.png').default} alt="Rook UI command help with the no-open option" width="1556" height="1466" className="doc_img"/>

## Syntax

~~~text
/ui
/ui --no-open
~~~

| Form | Behavior |
|---|---|
| <code>/ui</code> | Print the existing local viewer URL and open the default browser. |
| <code>/ui --no-open</code> | Print the existing viewer URL without opening a browser. |

There is no top-level headless <code>rook ui</code> command in the current release; launch it from the TUI.

## Step-by-step

1. Run at least one scenario.
2. Enter <code>/ui</code>.
3. Open the active agent.
4. Select a run.
5. Open a scenario to inspect request, response, criteria, evidence, artifacts, and verification gaps.
6. Compare later runs to see changed verdicts and coverage.

<img loading="lazy" src={require('../assets/images/rook/rook-browser-scenario-evidence.png').default} alt="Rook browser scenario page showing criterion evidence and artifacts" width="1440" height="900" className="doc_img"/>

## Real-world review

For a refund flow, do not stop at the run's pass-rate card. Open the criterion that says the refund was created:

- A response sentence saying “refund issued” is the agent's claim.
- A read-only refund-status lookup or independently observed record is stronger evidence.
- If neither is available, the criterion should be **Unable to Verify**.

Also open PDF, image, CSV, or report artifacts and confirm which properties Rook evaluated.

## Data and privacy

The viewer reads the current workspace's <code>.testmuai/rook/</code> data. It is read-only and bound to a local loopback address. Opening the viewer does not upload results.

The pages can contain prompts, agent responses, paths, and evidence. Share screenshots only after checking them for customer data and tokens.

## Common problems

- <strong>No runs shown:</strong> confirm you launched Rook from the workspace where the run was created.
- <strong>Browser did not open:</strong> use <code>/ui --no-open</code> and open the printed URL manually.
- <strong>Viewer still running:</strong> exit Rook with <code>/exit</code> to stop the viewer owned by that session.

## Related commands

[<code>/run</code>](/support/docs/rook-command-run/) · [Results and evidence](/support/docs/rook-results-and-evidence/) · [<code>/exit</code>](/support/docs/rook-command-exit/)
