# /mcp Command

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Use /mcp to manage MCP servers that Rook can discover or use for read-only verification and controlled tool access.

## Interactive syntax

~~~text
/mcp
/mcp list
/mcp enable
/mcp disable
/mcp approve
~~~

## Headless syntax

~~~bash
rook mcp list [--json]
rook mcp get  [--json]
rook mcp add  [command...] [--scope local|project|user] \
  [--transport stdio|http|sse|ws] [--url ] \
  [--env ] [--header ] [--json]
rook mcp remove  [--scope local|project|user] [--json]
rook mcp enable  [--json]
rook mcp disable  [--json]
rook mcp approve  [--origin project|discovered] [--json]
~~~

For stdio servers, pass the command as the positional value after the server name. Supported transports are stdio, http, sse, and ws; remote transports require --url.

## Real-world verification example

A refund agent says it issued a refund. Configure a separate MCP server that has a read-only get_refund_status tool:

~~~bash
rook mcp add refund-reader 'refund-mcp-server --read-only' --scope project
rook mcp approve refund-reader --origin project
rook mcp enable refund-reader
~~~

Review the server definition and every exposed tool before approval. A verifier must not call issue_refund to check whether a refund exists; that would create the state it claims to observe.

## Trust and state

Project and discovered MCP definitions require explicit approval. Enable/disable controls project usability; approval records trust in the reviewed definition. A changed definition may require review again.

Use variable references for headers and environment values. rook mcp get leaves references unexpanded so inspection does not reveal the secret.

## MCP Targets and Profile Hooks

Rook invocation profiles are script-based. To test an agent reached through MCP, describe its client flow to /profile add; Rook generates the execute hook that performs the call.

Enabled MCP servers in this command remain Rook tools for discovery or independent read-only verification. That registry is separate from the profile hook used to invoke the agent under test.

## Related commands

[MCP concepts](/support/docs/agent-assurance-mcp/) · [/profile](/support/docs/rook-command-profile/) · [/run](/support/docs/rook-command-run/) · [/env](/support/docs/rook-command-env/)
