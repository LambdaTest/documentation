---
id: rook-command-budget
title: Monitor Rook Credits
description: Understand the credit balance and per-session spending shown by the current Rook interface.
slug: rook-command-budget/
---

# Monitor Rook Credits

The current Rook command surface does not provide a <code>/budget</code> command. The TUI status bar shows the account balance and how many credits the current session has spent. Use <code>/plan</code> for the authenticated account and available balance.

Model-backed phases report what they spend. Rook checks credit boundaries between calls and preserves completed local work when credits are exhausted.

## Related Commands

[<code>/plan</code>](/support/docs/rook-command-plan/) · [<code>/status</code>](/support/docs/rook-command-status/)
