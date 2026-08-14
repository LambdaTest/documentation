---
id: rook-command-mcp
title: Rook /mcp Command
sidebar_label: /mcp
description: Inspect, add, approve, enable, disable, or remove MCP server definitions used by Rook.
slug: rook-command-mcp/
---

# <code>/mcp</code> Command

Use <code>/mcp</code> to manage MCP servers that Rook can discover or use for read-only verification and controlled tool access.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-mcp.png').default} alt="Rook MCP command help with list enable disable and approve" width="1556" height="1466" className="doc_img"/>

## Interactive syntax

~~~text
/mcp
/mcp list
/mcp enable <name>
/mcp disable <name>
/mcp approve <name>
~~~

## Headless syntax

~~~bash
rook mcp list [--json]
rook mcp get <name> [--json]
rook mcp add <name> [command...] [--scope local|project|user] \
  [--transport stdio|http|sse|ws] [--url <url>] \
  [--env <KEY=VALUE>] [--header <NAME:VALUE>] [--json]
rook mcp remove <name> [--scope local|project|user] [--json]
rook mcp enable <name> [--json]
rook mcp disable <name> [--json]
rook mcp approve <name> [--origin project|discovered] [--json]
~~~

For stdio servers, place the server command after <code>--</code> so its flags are not parsed as Rook flags.

Only <code>stdio</code> MCP servers are executable in the current release. Rook can store and list <code>http</code>, <code>sse</code>, and <code>ws</code> definitions, but marks them <code>unsupported-transport</code> and does not enable or call them.

## Real-world verification example

A refund agent says it issued a refund. Configure a separate MCP server that has a read-only <code>get_refund_status</code> tool:

~~~bash
rook mcp add refund-reader --scope project -- \
  refund-mcp-server --read-only
rook mcp approve refund-reader --origin project
rook mcp enable refund-reader
~~~

Review the server definition and every exposed tool before approval. A verifier must not call <code>issue_refund</code> to check whether a refund exists; that would create the state it claims to observe.

## Trust and state

Project and discovered MCP definitions require explicit approval. Enable/disable controls project usability; approval records trust in the reviewed definition. A changed definition may require review again.

Use variable references for headers and environment values. <code>rook mcp get</code> leaves references unexpanded so inspection does not reveal the secret.

## Current target limits

A direct MCP profile cannot currently invoke the agent under test. <code>/profile test</code> fails with a not-executable message, and <code>/run</code> cannot use that profile. Use an HTTP or command adapter for the target agent.

Enabled stdio MCP servers remain useful as Rook tools for discovery or independent read-only verification. This is separate from using MCP as the target agent's invocation profile.

## Related commands

[MCP concepts](/support/docs/rook-mcp/) · [<code>/profile</code>](/support/docs/rook-command-profile/) · [<code>/run</code>](/support/docs/rook-command-run/) · [<code>/env</code>](/support/docs/rook-command-env/)
