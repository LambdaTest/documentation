---
id: rook-command-update
title: Rook /update Command
sidebar_label: /update
description: Check for a newer public Rook release and show the upgrade command for the detected installation channel.
slug: rook-command-update/
---

# <code>/update</code> Command

Use <code>/update</code> to check for a newer public Rook release and show the appropriate upgrade command for a Homebrew, npm, or shell installation.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-update.png').default} alt="Rook update command help showing auto and JSON forms" className="doc_img"/>

## Syntax

~~~text
/update
/update auto
/update --json
~~~

The shell form is <code>rook update</code> with the same argument and option.

Public releases use semantic versions such as <code>0.1.1</code>. Shell installations keep versioned release directories side by side and record the binary directory so an update continues to use the same location.

If you previously chose “never ask again” in the TUI update notice, run <code>/update auto</code> to re-enable automatic notices.

## Related Commands

[Installation](/support/docs/rook-installation/) · [<code>/docs</code>](/support/docs/rook-command-docs/) · [<code>/doctor</code>](/support/docs/rook-command-doctor/)
