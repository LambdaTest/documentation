---
id: agent-assurance-mcp
toc_max_heading_level: 2
title: Configure MCP Servers in Agent Assurance
hide_title: false
sidebar_label: MCP Servers
description: Add, inspect, approve, enable, disable, and troubleshoot MCP servers used by Agent Assurance for AI agent discovery and verification.
keywords:
  - rook mcp
  - mcp agent testing
  - model context protocol verification
  - rook mcp approve
url: https://www.testmuai.com/support/docs/agent-assurance-mcp/
site_name: TestMu AI
slug: agent-assurance-mcp/
canonical: https://www.testmuai.com/support/docs/agent-assurance-mcp/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import VerifiedTag from '@site/src/component/verifiedTag';

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": BRAND_URL },
      { "@type": "ListItem", "position": 2, "name": "Support", "item": `${BRAND_URL}/support/docs/` },
      { "@type": "ListItem", "position": 3, "name": "MCP Servers", "item": `${BRAND_URL}/support/docs/agent-assurance-mcp/` }
    ]
  }) }}
/>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/agent-assurance-mcp/"
    },
    "headline": "Configure MCP Servers in Agent Assurance",
    "description": "Add, inspect, approve, enable, disable, and troubleshoot MCP servers used by Agent Assurance for AI agent discovery and verification.",
    "url": "https://www.testmuai.com/support/docs/agent-assurance-mcp/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Agent Testing",
    "keywords": [
      "rook mcp",
      "mcp agent testing",
      "model context protocol verification"
    ],
    "proficiencyLevel": "Beginner",
    "author": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "url": "https://www.testmuai.com/"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
      "url": "https://www.testmuai.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testmuai.com/logo.png"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testmu-ai/",
        "https://x.com/testmuai",
        "https://www.youtube.com/@TestMuAI"
      ]
    },
    "hasPart": [
      {
        "@type": "SoftwareSourceCode",
        "name": "Interactive",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "/mcp\n/mcp list"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Headless",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "rook mcp list\nrook mcp list --json"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Local scope is the default",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "rook mcp add github -- npx -y @modelcontextprotocol/server-github"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Add a project or user definition",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "rook mcp add github --scope project \\\n  --env 'GITHUB_TOKEN=${GITHUB_TOKEN}' \\\n  -- npx -y @modelcontextprotocol/server-github\n\nrook mcp add github --scope user \\\n  --env 'GITHUB_TOKEN=${GITHUB_TOKEN}' \\\n  -- npx -y @modelcontextprotocol/server-github"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Record a Remote Server",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "rook mcp add notion \\\n  --transport http \\\n  --url https://mcp.example.com/mcp \\\n  --header 'Authorization: Bearer ${NOTION_TOKEN}'"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Inspect a Definition",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "rook mcp get github\nrook mcp get github --json"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Interactive",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "/mcp approve <name>"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Headless",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "rook mcp approve <name>"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "When a project and discovered definition share the name, specify which one",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "rook mcp approve <name> --origin project\nrook mcp approve <name> --origin discovered"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Enable, Disable, or Remove",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "/mcp enable <name>\n/mcp disable <name>"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Headless",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "rook mcp enable <name>\nrook mcp disable <name>\nrook mcp remove <name> --scope local"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "A scenario can require a verifier",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "verification_requires:\n  - type: mcp\n    server: github\n    op: issues.get"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Permission Prompts Still Apply",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "mcp_call(billing.get_refund_status)"
      }
    ],
    "dateModified": "2026-08-25T16:54:35+05:30"
  }) }}
/>

# Configure MCP Servers in Agent Assurance

Rook uses MCP primarily as an evidence source. A judge can call an approved read-only tool to confirm that a ticket, refund, pull request, or other effect exists, rather than trusting the tested agent's claim.

Exploration also records MCP servers declared by the target agent. These declarations are evidence about the target, and Rook never silently replaces or rewrites them.

## List Servers

Interactive:

<VerifiedTag value="Verified" />

```text
/mcp
/mcp list
```

Headless:

<VerifiedTag value="Verified" />

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

The repository-root `.mcp.json` belongs to the agent under test. Rook reads it as evidence and never writes its own configuration there. Put project configuration in `.testmuai/rook/mcp.json`.

## Add a Stdio Server

Local scope is the default:

<VerifiedTag value="Verified" />

```bash
rook mcp add github -- npx -y @modelcontextprotocol/server-github
```

Add a project or user definition:

<VerifiedTag value="Verified" />

```bash
rook mcp add github --scope project \
  --env 'GITHUB_TOKEN=${GITHUB_TOKEN}' \
  -- npx -y @modelcontextprotocol/server-github

rook mcp add github --scope user \
  --env 'GITHUB_TOKEN=${GITHUB_TOKEN}' \
  -- npx -y @modelcontextprotocol/server-github
```

Everything after `--` is the stdio command and its arguments. You can repeat `--env`.

Keep secret references in configuration. Rook expands `${VAR}` only when resolving a server to run, and displays the raw unexpanded definition.

## Record a Remote Server

<VerifiedTag value="Verified" />

```bash
rook mcp add notion \
  --transport http \
  --url https://mcp.example.com/mcp \
  --header 'Authorization: Bearer ${NOTION_TOKEN}'
```

:::note Remote transport status
HTTP, SSE, and WebSocket definitions are accepted, stored, and listed for forward compatibility. The current pre-alpha release connects only to stdio MCP servers, so remote entries appear as `unsupported-transport`.
:::

## Inspect a Definition

<VerifiedTag value="Verified" />

```bash
rook mcp get github
rook mcp get github --json
```

Rook leaves `${VAR}` references unexpanded in display output so tokens do not leak to the terminal, model context, browser, or transcript.

## Approve Repository-Controlled Servers

A project or discovered stdio definition can execute a command from a cloned repository, so it stays inert until a person approves its exact fingerprint.

Interactive:

<VerifiedTag value="Verified" />

```text
/mcp approve <name>
```

Headless:

<VerifiedTag value="Verified" />

```bash
rook mcp approve <name>
```

When a project and discovered definition share the name, specify which one:

<VerifiedTag value="Verified" />

```bash
rook mcp approve <name> --origin project
rook mcp approve <name> --origin discovered
```

Rook prints the command before writing the approval. Review the:

- Executable
- Arguments
- Environment references
- Working assumptions
- Package source

Approval is pinned to the raw definition, not only the server name. If the command, arguments, or environment references change, the server returns to `pending-approval` and is marked as changed since approval. Rotating the value of the referenced secret does not require reapproval.

## Enable, Disable, or Remove

<VerifiedTag value="Verified" />

```text
/mcp enable <name>
/mcp disable <name>
```

Headless:

<VerifiedTag value="Verified" />

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

<VerifiedTag value="Verified" />

```yaml
verification_requires:
  - type: mcp
    server: github
    op: issues.get
```

If the server cannot be called, Rook names it in the skip reason. The next run recomputes MCP capability, so enabling a server can make the scenario runnable without regenerating it.

Observing the tested agent's own MCP calls is a separate concern that you configure through the profile. The two gates are independent, and both may apply:

- **Registry availability:** whether Rook can call a server.
- **Profile observation:** whether Rook can see the target's calls.

## Permission Prompts Still Apply

An enabled registry entry does not grant every use. Starting a server, listing its tools, and calling a tool each still pass through Rook's permission gate with specific subjects such as:

<VerifiedTag value="Verified" />

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

## Review MCP Evidence in Either UI

Use `rook ui --local` for the current workspace's run → scenario → **criteria**, response, and **files**. Use `rook ui` for the hosted Web UI's uploaded run → scenario → **Response**, **Verdict**, and **Artefacts**. Both can show MCP-related evidence only when it was actually recorded; declaring a tool or verifier does not prove it was called.

Neither UI starts, approves, or edits an MCP server. Resolve missing verification access with the CLI commands above, then inspect the resulting evidence. The [local and hosted walkthrough](/support/docs/rook-web-ui/#choose-your-ui) shows both review layouts.
