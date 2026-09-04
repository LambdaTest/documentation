---
id: rook-command-update
title: Rook /update Command
sidebar_label: /update
description: Check for a newer Rook build and display the versioned installation path.
slug: rook-command-update/
---

# <code>/update</code> Command

Use <code>/update</code> to check for a newer Rook build and learn how to install it.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-update.png').default} alt="Rook update command help showing auto and JSON forms" className="doc_img"/>

## Syntax

~~~text
/update
/update auto
/update --json
~~~

The shell form is <code>rook update</code> with the same argument and option.

Archive installations keep versioned releases side by side. The installed and available versions use commit SHAs so a CLI and controller build can be identified precisely.

If you previously chose “never ask again” in the TUI update notice, run <code>/update auto</code> to re-enable automatic notices.

## Related Commands

[Installation](/support/docs/rook-installation/) · [<code>/docs</code>](/support/docs/rook-command-docs/) · [<code>/doctor</code>](/support/docs/rook-command-doctor/)
