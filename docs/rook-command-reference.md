---
id: rook-command-reference
title: Rook Command Reference
hide_title: false
sidebar_label: Command Reference
description: Complete reference for Rook interactive slash commands, headless commands, flags, aliases, output, and exit codes.
keywords:
  - rook commands
  - rook cli reference
  - rook slash commands
  - rook flags
url: https://www.testmuai.com/support/docs/rook-command-reference/
site_name: TestMu AI
slug: rook-command-reference/
canonical: https://www.testmuai.com/support/docs/rook-command-reference/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": BRAND_URL },
      { "@type": "ListItem", "position": 2, "name": "Support", "item": `${BRAND_URL}/support/docs/` },
      { "@type": "ListItem", "position": 3, "name": "Rook Commands", "item": `${BRAND_URL}/support/docs/rook-command-reference/` }
    ]
  }) }}
/>

# Rook Command Reference

Run `rook` without a subcommand for the interactive TUI. Enter `/help` for the complete list or `/help <command>` for command-specific flags.

<img loading="lazy" src={require('../assets/images/rook/rook-terminal-help.png').default} alt="Rook interactive help listing all slash commands" width="1227" height="1222" className="doc_img"/>

## Interactive Workflow Commands

### `/explore [path] [--force] [-- instruction]`

Reads a local workspace, discovers agents, or refreshes the active agent.

- `path`: current directory by default.
- `--force`: re-read even when files appear unchanged.
- Text after `--`: guidance for what discovery should emphasize or ignore.

### `/agent [use|rm]`

- `/agent`: list registered agents.
- `/agent use <id>`: set the active agent.
- `/agent rm <id>`: forget the agent and its stored project data.

### `/generate`

```text
/generate [--total <n>] [--class <list>] [--category <list>]
          [--no-validate] [--force] [-- instruction]
```

- `--total`: total scenario budget, integer from 1 to 100000.
- `--class`: `functional`, `non_functional`, or `adversarial`; comma-separated.
- `--category`: one or more of the 18 category names; comma-separated.
- `--no-validate`: skip model-based runnability validation.
- `--force`: generate even when the agent and scenarios appear current.
- Text after `--`: generation focus.

### `/profile`

- `/profile add`: create and verify an HTTP or command profile.
- `/profile list`: list profiles and the active profile.
- `/profile use <name>`: switch to a verified profile.
- `/profile show <name>`: show invocation and scenario capability information.
- `/profile edit <name>`: edit fields and observation behavior.
- `/profile test <name>`: invoke once and verify result extraction.
- `/profile curl <name>`: render an HTTP profile as cURL.
- `/profile rm <name>`: remove a profile.

### `/run`

```text
/run [--only <ids>] [--class <list>] [--category <list>]
     [--tag <list>] [--concurrency <n>] [--no-narrative]
     [--rca] [-- description]
```

- `--only`: scenario IDs, comma-separated.
- `--class`: scenario classes, comma-separated.
- `--category`: scenario categories, comma-separated.
- `--tag`: scenarios containing any requested tag.
- `--concurrency`: positive integer; default `3`.
- `--no-narrative`: skip the run-level model summary.
- `--rca`: investigate failure clusters and write remedy files.
- Text after `--`: natural-language scenario selection from the deterministic filtered list.

### `/ui [--no-open]`

Opens the read-only browser viewer. `--no-open` prints the loopback URL without launching the browser.

## Interactive Workspace Commands

| Command | Purpose |
|---|---|
| `/scenarios list` | List scenarios and current runnability |
| `/scenarios exclude <ids>` | Mark scenarios excluded without deleting them |
| `/scenarios include <ids>` | Re-include excluded scenarios |
| `/scenarios delete <ids>` | Delete live scenario definitions |
| `/plan` | Show LambdaTest plan and credit balance |
| `/auth status` or `/auth` | Verify the stored token against the controller |
| `/env list` | List variable names with masked values |
| `/env set <key> [value]` | Store a value; securely prompt when value is omitted |
| `/env show <key>` | Print the complete value into terminal scrollback |
| `/env rm <key>` | Delete a stored value |
| `/mcp list` or `/mcp` | List MCP definitions and states |
| `/mcp enable <name>` | Enable a server name for the project |
| `/mcp disable <name>` | Disable a server name for the project |
| `/mcp approve <name>` | Review and approve a project or discovered definition |
| `/budget` | Show session spend, remaining credits, budget level, and phase caps |
| `/doctor` | Show environment, controller, authentication, workspace, and agents |

## Interactive Session Commands

| Command | Purpose |
|---|---|
| `/guide` | Explain the recommended workflow and key concepts |
| `/help [command]` | List commands or explain one command's flags |
| `/clear` | Clear terminal scrollback inside Rook |
| `/new` | Start a fresh Rook conversation session and clear a process halt |
| `/login` | Start browser authentication |
| `/logout` | Revoke and clear stored credentials |
| `/exit` | Stop the viewer and exit Rook |

## Headless Commands

### General

```text
rook [--no-animation]
rook --version
rook ask <prompt...> [--verbose] [--json]
rook doctor
```

`rook ask` runs one orchestrator turn without the TUI.

### Agents and Profiles

```text
rook agent list [--json]
rook agent use <id>

rook profile list [name] [--entity <id>] [--json]
rook profile show [name] [--entity <id>] [--json]
rook profile use [name] [--entity <id>] [--json]
rook profile rm [name] [--entity <id>] [--json]
```

### Explore

```text
rook explore [path]
  [--allow <rule> ...]
  [--all]
  [--force]
  [--instruction <text>]
  [--json]
```

- `--all`: register every candidate without the selection question.
- `--allow`: temporary exact permission rule; repeatable.

### Generate

```text
rook generate
  [--allow <rule> ...]
  [--entity <id>]
  [--class <classes> ...]
  [--category <categories> ...]
  [--total <n> ...]
  [--no-validate]
  [--verbose]
  [--json]
```

Class and category options are comma-separated and repeatable. Repeating `--total` is accepted by the CLI parser so invalid or conflicting occurrences can be diagnosed consistently; supply one total in normal use.

### Scenarios

```text
rook scenarios list [--entity <id>] [--json]
rook scenarios exclude <ids...> [--entity <id>]
rook scenarios include <ids...> [--entity <id>]
rook scenarios delete <ids...> [--entity <id>]
```

### Run and Report

```text
rook run
  [--allow <rule> ...]
  [--entity <id>]
  [--only <ids> ...]
  [--no-narrative]
  [--verbose]
  [--json]

rook report [runId] [--entity <id>] [--json]
```

`--only` is comma-separated and repeatable.

### Authentication and Account

```text
rook login [--json]
rook logout [--json]
rook auth status [--json]
rook whoami [--json]
rook plan [--json]
```

`rook whoami` is an alias for `rook auth status`.

### MCP

```text
rook mcp list [--json]
rook mcp get <name> [--json]
rook mcp add <name> [command...]
  [--scope local|project|user]
  [--transport stdio|http|sse|ws]
  [--url <url>]
  [--env <KEY=VALUE> ...]
  [--header <NAME: VALUE> ...]
  [--json]
rook mcp remove <name> [--scope local|project|user] [--json]
rook mcp enable <name> [--json]
rook mcp disable <name> [--json]
rook mcp approve <name> [--origin project|discovered] [--json]
```

For stdio, place the command after `--` so command flags are not parsed as Rook flags.

## JSON and Verbose Output

- `--json` emits NDJSON events or machine-readable line envelopes, depending on the command. Read one JSON object per line.
- `--verbose` prints subagent or tool activity and cost information on supported commands.
- Human output can change during pre-alpha; automation should prefer JSON and exit codes.

## Exit Codes

| Code | Meaning |
|---|---|
| `0` | No defect recorded in the verdicts that were produced; inspect `run.yaml` to confirm the requested run completed |
| `1` | Rook could not perform the requested test or state change |
| `2` | Agent defect or adversarial compromise |
| `3` | Authentication required or invalid |
| `4` | Budget or credits exhausted |
