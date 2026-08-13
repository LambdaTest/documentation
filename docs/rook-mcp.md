---
id: rook-mcp
title: Configure MCP Servers in Rook
hide_title: false
sidebar_label: MCP Servers
description: Add, inspect, approve, enable, disable, and troubleshoot MCP servers used by Rook for AI agent discovery and verification.
keywords:
  - rook mcp
  - mcp agent testing
  - model context protocol verification
  - rook mcp approve
url: https://www.testmuai.com/support/docs/rook-mcp/
site_name: TestMu AI
slug: rook-mcp/
canonical: https://www.testmuai.com/support/docs/rook-mcp/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": BRAND_URL },
      { "@type": "ListItem", "position": 2, "name": "Support", "item": `${BRAND_URL}/support/docs/` },
      { "@type": "ListItem", "position": 3, "name": "Rook MCP", "item": `${BRAND_URL}/support/docs/rook-mcp/` }
    ]
  }) }}
/>

# Configure MCP Servers in Rook

Rook uses MCP primarily as an evidence source. A judge can call an approved read-only tool to confirm that a ticket, refund, pull request, or other effect exists instead of trusting the tested agent's claim.

Exploration also records MCP servers declared by the target agent. Those declarations are evidence about the target and are never silently replaced or rewritten.

## List Servers

Interactive:

```text
/mcp
/mcp list
```

Headless:

```bash
rook mcp list
rook mcp list --json
```

Each row reports the server name, origin, transport, state, source, and connection or tool status when available.

## MCP Origins and Precedence

| Origin | Storage | Visibility | Approval required |
|---|---|---|---|
| `local` | Per-project section of `~/.testmuai/rook/settings.json` | Current project, private | No |
| `project` | `<project>/.testmuai/rook/mcp.json` | Current project, committable | Yes |
| `user` | `~/.testmuai/rook/mcp.json` | Every project, private | No |
| `discovered` | Target agent's recorded MCP materials | Active agent | Yes |

Configured definition precedence is `local > project > user` by server name.

The repository-root `.mcp.json` belongs to the agent under test. Rook reads it as evidence and never writes its own configuration there. Project configuration belongs in `.testmuai/rook/mcp.json`.

## Add a Stdio Server

Local scope is the default:

```bash
rook mcp add github -- npx -y @modelcontextprotocol/server-github
```

Add a project or user definition:

```bash
rook mcp add github --scope project \
  --env 'GITHUB_TOKEN=${GITHUB_TOKEN}' \
  -- npx -y @modelcontextprotocol/server-github

rook mcp add github --scope user \
  --env 'GITHUB_TOKEN=${GITHUB_TOKEN}' \
  -- npx -y @modelcontextprotocol/server-github
```

Everything after `--` is the stdio command and its arguments. `--env` can be repeated.

Keep secret references in configuration. Rook expands `${VAR}` only when resolving a server to run and displays the raw unexpanded definition.

## Record a Remote Server

```bash
rook mcp add notion \
  --transport http \
  --url https://mcp.example.com/mcp \
  --header 'Authorization: Bearer ${NOTION_TOKEN}'
```

:::note Remote transport status
HTTP, SSE, and WebSocket definitions are accepted, stored, and listed for forward compatibility, but the current pre-alpha release connects only to stdio MCP servers. Remote entries appear as `unsupported-transport`.
:::

## Inspect a Definition

```bash
rook mcp get github
rook mcp get github --json
```

Rook leaves `${VAR}` references unexpanded in display output so tokens do not leak to the terminal, model context, browser, or transcript.

## Approve Repository-Controlled Servers

A project or discovered stdio definition can execute a command from a cloned repository, so it is inert until a person approves its exact fingerprint.

Interactive:

```text
/mcp approve <name>
```

Headless:

```bash
rook mcp approve <name>
```

When a project and discovered definition share the name, specify which one:

```bash
rook mcp approve <name> --origin project
rook mcp approve <name> --origin discovered
```

Rook prints the command before writing the approval. Review the executable, arguments, environment references, working assumptions, and package source.

Approval is pinned to the raw definition, not only the server name. If the command, arguments, or environment references change, the server returns to `pending-approval` and is marked as changed since approval. Rotating the value of the referenced secret does not require reapproval.

## Enable, Disable, or Remove

```text
/mcp enable <name>
/mcp disable <name>
```

Headless:

```bash
rook mcp enable <name>
rook mcp disable <name>
rook mcp remove <name> --scope local
```

Disabling applies to every origin with that name. Removing deletes the definition only from the selected scope.

## Name Collisions and Shadowing

When a configured server and a discovered target server share a name:

- The configured entry is used for invocation once it resolves as enabled.
- The discovered entry remains visible as evidence and is marked shadowed.
- The target's declaration is not overwritten.
- A pending or rejected configured entry does not hide an otherwise usable discovered entry.

Approval never guesses between two same-named definitions.

## MCP and Scenario Runnability

A scenario can require a verifier:

```yaml
verification_requires:
  - type: mcp
    server: github
    op: issues.get
```

If the server cannot be called, Rook names it in the skip reason. The next run recomputes MCP capability, so enabling a server can make the scenario runnable without regenerating it.

A separate concern is observing the tested agent's own MCP calls. Configure that through the profile. Registry availability answers whether Rook can call a server; profile observation answers whether Rook can see the target's calls. Both gates may apply.

## Permission Prompts Still Apply

An enabled registry entry does not grant every use. Starting a server, listing its tools, and calling a tool still pass through Rook's permission gate with specific subjects such as:

```text
mcp_call(billing.get_refund_status)
```

Only approve a state-changing MCP call when the test explicitly requires that real effect.

## Troubleshoot MCP State

| State | Meaning | Action |
|---|---|---|
| `enabled` | Definition is eligible to start | Inspect connection status or tools if calls still fail |
| `disabled` | Disabled for this project | Run `rook mcp enable <name>` if intentional |
| `pending-approval` | Repository-controlled definition is not trusted or changed | Review and approve the exact definition |
| `rejected` | The definition was refused | Re-review and explicitly approve only if the decision changed |
| `unsupported-transport` | Definition uses HTTP, SSE, or WebSocket | Use a stdio bridge or wait for transport support |
| `malformed` | Required command data is absent or invalid | Fix the source configuration |

Malformed scope files and duplicate discovered names are reported with their source rather than silently dropped.
