---
id: rook-command-profile
title: Rook /profile Command
sidebar_label: /profile
description: Generate, repair, verify, inspect, list, or select the hook-based profile Rook uses to invoke an agent.
slug: rook-command-profile/
---

# <code>/profile</code> Command

A profile names the reviewable hook scripts Rook uses to invoke a live agent. Use <code>/profile</code> to generate those scripts from a prompt, repair them from a failure, verify the target, inspect lifecycle phases, or select a profile.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-profile.png').default} alt="Current Rook profile command help showing use, show, prompt-based add, fix, and test" className="doc_img"/>

## Syntax

~~~text
/profile
/profile use <id>
/profile show <id>
/profile add [name]
/profile add <name> --command '<argv>'
/profile add <name> --from <material-file>
/profile fix [id] [--what <text>]
/profile test [id] [--goal <text>]
~~~

The shell form uses <code>rook profile</code> with the same subcommands and options. Pipe a cURL command, integration description, or other material to <code>rook profile add &lt;name&gt;</code> when <code>--from</code> is omitted.

## Subcommands

| Command | Effect |
|---|---|
| <code>/profile</code> | Open a TUI picker. In a shell, list profiles, mark the active one, and show unverified or missing-variable state. |
| <code>/profile use &lt;id&gt;</code> | Select an existing profile by ID. Verify it before using it for a run. |
| <code>/profile show &lt;id&gt;</code> | Print each lifecycle phase and script, non-default timeouts or delays, required variables, and reported capabilities. |
| <code>/profile add [name]</code> | Ask how the agent is reached, then generate scripts, run them, and correct them from the actual response. |
| <code>/profile add &lt;name&gt; --command</code> | Generate a hook script for the supplied local command line. Rook sends the goal through the generated script rather than requiring a template token in the command. |
| <code>/profile add &lt;name&gt; --from</code> | Generate from a file containing a cURL command, specification, Postman export, notes, paths, URLs, or a combination of material. |
| <code>/profile fix [id]</code> | Run a broken profile, diagnose the response or error, and repair its scripts. Add <code>--what</code> when you already know what changed. |
| <code>/profile test [id]</code> | Invoke once without a model rewrite, show what came back, and update observed capabilities when it succeeds. |

<code>add</code> and <code>fix</code> also accept <code>--yes</code>, repeatable <code>--allow</code>, <code>--json</code>, and <code>--verbose</code>. Use approval bypasses only for a reviewed, launch-scoped authoring task.

Profile creation writes one or more <code>.mjs</code> scripts and maps them to <code>prepare</code>, <code>open</code>, <code>execute</code>, <code>close</code>, or <code>collect</code>. <code>execute</code> is required. Rook reads credential-shaped values from local environment variables and refuses literal assignments in generated scripts.

Verification is local to this machine because endpoint reachability is local. A newly authored profile is promoted automatically only after it returns an agent answer; profiles that have not been proved from this workspace remain visibly marked <code>unverified</code>. Run <code>/profile test</code> before selecting one manually.

Rook does not provide profile edit or remove commands. Profiles are plain files so changes can be reviewed and diffed with the rest of the workspace.

## Related Commands

[Prompt-based profiles](/support/docs/agent-assurance-profiles/) · [Lifecycle phases and hooks](/support/docs/rook-hooks-and-phases/) · [<code>/env</code>](/support/docs/rook-command-env/) · [<code>/run</code>](/support/docs/rook-command-run/)
