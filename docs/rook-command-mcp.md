---
id: rook-command-mcp
title: Rook /mcp Command
sidebar_label: /mcp
description: Inspect, add, approve, enable, disable, or remove MCP server definitions used by Rook.
slug: rook-command-mcp/
---

# <code>/mcp</code> Command

Use <code>/mcp</code> to manage MCP servers that Rook can discover or use for read-only verification and controlled tool access.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-mcp.png').default} alt="Rook MCP command help with list enable disable and approve" className="doc_img"/>

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

For stdio servers, pass the command as the positional value after the server name. Supported transports are <code>stdio</code>, <code>http</code>, <code>sse</code>, and <code>ws</code>; remote transports require <code>--url</code>.

## Real-world verification example

A refund agent says it issued a refund. Configure a separate MCP server that has a read-only <code>get_refund_status</code> tool:

~~~bash
rook mcp add refund-reader 'refund-mcp-server --read-only' --scope project
rook mcp approve refund-reader --origin project
rook mcp enable refund-reader
~~~

Review the server definition and every exposed tool before approval. A verifier must not call <code>issue_refund</code> to check whether a refund exists; that would create the state it claims to observe.

## Trust and state

Project and discovered MCP definitions require explicit approval. Enable/disable controls project usability; approval records trust in the reviewed definition. A changed definition may require review again.

Use variable references for headers and environment values. <code>rook mcp get</code> leaves references unexpanded so inspection does not reveal the secret.

## MCP Targets and Profile Hooks

Rook invocation profiles are script-based. To test an agent reached through MCP, describe its client flow to <code>/profile add</code>; Rook generates the <code>execute</code> hook that performs the call.

Enabled MCP servers in this command remain Rook tools for discovery or independent read-only verification. That registry is separate from the profile hook used to invoke the agent under test.

## Related commands

[MCP concepts](/support/docs/agent-assurance-mcp/) · [<code>/profile</code>](/support/docs/rook-command-profile/) · [<code>/run</code>](/support/docs/rook-command-run/) · [<code>/env</code>](/support/docs/rook-command-env/)
