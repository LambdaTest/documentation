---
id: rook-command-explore
title: Rook /explore Command
sidebar_label: /explore
description: Discover autonomous agents from a PRD, knowledge base, source file, or local workspace.
slug: rook-command-explore/
---

# <code>/explore</code> Command

Use <code>/explore</code> to tell Rook what local material describes your agent. The target may be one PRD file, a documentation folder, an agent source directory, or a complete local repository.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-explore.png').default} alt="Rook explore command help with force and free-text guidance" width="1556" height="1466" className="doc_img"/>

## Interactive syntax

~~~text
/explore [path] [--force] [-- guidance]
~~~

## Headless syntax

~~~bash
rook explore [path] [--all] [--force] [--instruction <text>] \
  [--allow <exact-rule>] [--json]
~~~

| Option | Purpose |
|---|---|
| <code>path</code> | Local file or directory. Interactive <code>/explore</code> defaults to the active agent's root when one exists, otherwise <code>.</code>; headless <code>rook explore</code> defaults to <code>.</code>. |
| <code>--force</code> | Re-read even when tracked files appear unchanged. |
| <code>-- &lt;text&gt;</code> | Interactive guidance about what to emphasize or ignore. |
| <code>--instruction &lt;text&gt;</code> | Headless form of the same guidance. |
| <code>--all</code> | Headless only; register every discovered candidate without a selection question. |
| <code>--allow</code> | Headless only; authorize one exact tool rule. Repeat when necessary. |

## Real-world examples

PRD only:

~~~text
/explore docs/refund-agent-prd.md
~~~

PRD and knowledge base:

~~~text
/explore docs -- focus on PRD.md and knowledge/, and treat them as intended behavior
~~~

Source workspace:

~~~text
/explore services/travel-agent
~~~

Headless:

~~~bash
rook explore docs/refund-agent-prd.md --all --json
~~~

## Step-by-step

1. Start Rook in a workspace that contains only material it may inspect, then choose the narrowest target path that contains enough evidence.
2. Add guidance when filenames alone do not express the intended scope.
3. Start exploration. Rook scans and hashes the target, and its discovery tools may read files immediately.
4. Review any later permission request before allowing a shell command or another gated operation.
5. Review every discovered agent, its root, sources, tools, and open questions.
6. Confirm the correct agent or use <code>/agent</code> afterward.

## State and evidence

Discovery writes agent and feature records below <code>.testmuai/rook/</code>. Incremental exploration reuses unchanged material; <code>--force</code> bypasses that optimization.

A PRD or knowledge base describes what should happen. It cannot prove which tools the deployed agent implements or whether a live action succeeded.

## Limitations and errors

- URLs are rejected as exploration targets. For GitHub, clone your own repository and explore the local checkout.
- Binary documents are not source material for discovery; use readable Markdown, text, code, JSON, YAML, or similar files.
- There is no pre-read approval screen. For a target inside the launch workspace, the path narrows discovery but is not a filesystem access boundary: discovery tools remain rooted at the launch workspace and can inspect sibling files. If siblings are sensitive, copy the allowed materials into an isolated workspace before starting Rook, or configure explicit deny rules.
- If the result contains the wrong boundary, rerun with a narrower path and explicit guidance.

## Related commands

[<code>/agent</code>](/support/docs/rook-command-agent/) · [<code>/generate</code>](/support/docs/rook-command-generate/) · [Use cases](/support/docs/rook-use-cases/)
