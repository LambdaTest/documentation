---
id: agent-assurance-command-reference
toc_max_heading_level: 2
title: Rook Command Guide
hide_title: false
sidebar_label: All Commands
description: Find current Rook 0.1.3 commands, detailed guides, migration notes, and tested CLI-to-Web-UI workflows.
keywords:
  - rook commands
  - rook cli reference
  - rook slash commands
  - rook command reference
url: https://www.testmuai.com/support/docs/agent-assurance-command-reference/
site_name: TestMu AI
slug: agent-assurance-command-reference/
canonical: https://www.testmuai.com/support/docs/agent-assurance-command-reference/
---
import VerifiedTag from '@site/src/component/verifiedTag';
import { BRAND_URL } from '@site/src/component/BrandName';


<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Rook Command Guide",
          "item": `${BRAND_URL}/support/docs/agent-assurance-command-reference/`
        }]
      })
    }}
></script>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/agent-assurance-command-reference/"
    },
    "headline": "Rook Command Guide",
    "description": "Find current Rook 0.1.3 commands, detailed guides, migration notes, and tested CLI-to-Web-UI workflows.",
    "url": "https://www.testmuai.com/support/docs/agent-assurance-command-reference/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Agent Assurance Platform",
    "keywords": [
      "rook commands",
      "rook cli reference",
      "rook slash commands"
    ],
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
    "dateModified": "2026-09-11"
  }) }}
/>

# List of Rook Commands

Use <code>rook</code> to start the interactive terminal, or <code>rook &lt;command&gt;</code> from your shell. This index matches the published **0.1.3** CLI. Each command links to its detailed syntax and examples.

## First Journey

```text
login → project → explore → agent → profile add → generate → scenarios → sync → run → ui
```

Follow the [tested quickstart](/support/docs/agent-assurance-quickstart/) for a runnable sample. A normal timeline run needs sync first; <code>run --test</code> deliberately stays local.

## Discover Syntax From the CLI

```bash
rook --version
rook --help
rook run --help
rook profile add --help
```

Inside the terminal, use <code>/help run</code>. Do not paste slash commands into a normal shell.

## Command Index

### rook {#rook}

Start the interactive terminal. [Syntax and examples](/support/docs/rook-command-start/).

### rook ask {#rook-ask}

Describe a testing task in natural language. [Syntax and examples](/support/docs/rook-command-ask/).

### /project {#project}

List, select, or create a project. [Syntax and examples](/support/docs/rook-command-project/).

### /explore {#explore}

Discover agents and features from local code or requirements. [Syntax and examples](/support/docs/rook-command-explore/).

### /agent {#agent}

List or select the active agent. [Syntax and examples](/support/docs/rook-command-agent/).

### /generate {#generate}

Generate scenarios with classes, categories, a target count, and instructions. [Syntax and examples](/support/docs/rook-command-generate/).

### /profile {#profile}

Generate, inspect, select, test, or repair invocation hooks. [Syntax and examples](/support/docs/rook-command-profile/).

### /scenarios {#scenarios}

List, include, exclude, or delete scenario definitions. [Syntax and examples](/support/docs/rook-command-scenarios/).

### /sync {#sync}

Publish the reviewed project tree. [Syntax and examples](/support/docs/rook-command-sync/).

### /run {#run}

Run selected scenarios, choose phases, continue, resume, or request RCA. [Syntax and examples](/support/docs/rook-command-run/).

### /runs {#runs}

List local runs or reconcile outstanding uploads with runs sync. [Syntax and examples](/support/docs/rook-command-runs/).

### /report {#rook-report}

Read a stored report or request RCA. [Syntax and examples](/support/docs/rook-command-report/).

### /ui {#ui}

Open the hosted Web UI; add --local for on-disk evidence. [Syntax and examples](/support/docs/rook-command-ui/).

### /status {#status}

Inspect workspace and sync state. [Syntax and examples](/support/docs/rook-command-status/).

### /plan {#plan}

Check your account plan and credits. [Syntax and examples](/support/docs/rook-command-plan/).

### /login {#login}

Authenticate through the browser or account credentials. [Syntax and examples](/support/docs/rook-command-login/).

### /auth {#auth}

Check effective authentication. [Syntax and examples](/support/docs/rook-command-auth/).

### /whoami {#rook-whoami}

Show the authenticated identity. [Syntax and examples](/support/docs/rook-command-whoami/).

### /logout {#logout}

Clear stored authentication; exported credentials must be managed separately. [Syntax and examples](/support/docs/rook-command-logout/).

### /env {#env}

Manage workspace-scoped local variables. [Syntax and examples](/support/docs/rook-command-env/).

### /mcp {#mcp}

Configure MCP servers, approval, and connectivity. [Syntax and examples](/support/docs/rook-command-mcp/).

### /doctor {#doctor}

Diagnose installation, connectivity, account, and workspace. [Syntax and examples](/support/docs/rook-command-doctor/).

### /update {#update}

Check for and apply supported CLI updates. [Syntax and examples](/support/docs/rook-command-update/).

### /docs {#docs}

Open documentation from Rook. [Syntax and examples](/support/docs/rook-command-docs/).

### /guide {#guide}

Show the testing sequence. [Syntax and examples](/support/docs/rook-command-guide/).

### /help {#help}

Inspect commands and their current options. [Syntax and examples](/support/docs/rook-command-help/).

### /clear {#clear}

Clear visible TUI scrollback. [Syntax and examples](/support/docs/rook-command-clear/).

### /exit {#exit}

Leave the TUI without deleting test evidence. [Syntax and examples](/support/docs/rook-command-exit/).

### Export diagnostic logs {#export}

```bash
rook export logs --out ./rook-diagnostics.zip
```

Use <code>rook export logs --help</code> for session selection. Diagnostic bundles can contain paths, session text, and sensitive target data; review them before sharing.

## Migration From Older Examples

| Older syntax | Rook 0.1.3 |
|---|---|
| <code>--entity</code> | Select with <code>rook project use</code> and <code>rook agent use</code> before the command. |
| <code>profile list</code>, <code>agent list</code> | Use bare <code>profile</code> or <code>agent</code>. |
| <code>profile edit</code>, <code>profile curl</code>, <code>profile rm</code> | Use <code>profile fix</code>, <code>show</code>, or deliberately edit the plain files. These subcommands are absent. |
| Fixed <code>kind/invoke/result</code> profile YAML | Generate reviewable <code>hooks</code> scripts with <code>profile add</code>. |
| <code>explore --instruction</code>, <code>--all</code> | Supply guidance after <code>--</code>; use current help for unattended approvals. |
| <code>generate --no-validate</code> | Removed. Review generated scenarios and current runnability. |
| <code>run --no-narrative</code> | Removed. |
| <code>ui</code> for a local server | Use <code>ui --local</code>; bare <code>ui</code> opens the hosted app. |

### /budget {#budget}

This older command is not in 0.1.3. Use <code>/plan</code> for account credits and read cost/progress output for the active operation.

### /new {#new}

This older command is not in 0.1.3. Exit and start <code>rook</code> again to begin another terminal session; project files remain on disk.

## Structured Output and Exit Codes

Supported <code>--json</code> commands return command-specific JSON documents; do not assume a universal NDJSON event stream. Keep stderr separate when capturing stdout.

For <code>run</code> and <code>report</code>, successful process completion does not prove an agent passed or the full suite finished. Use the [CI completion and verdict gate](/support/docs/agent-assurance-ci-cd/#gate-on-completion-and-verdicts).

[Flags, variables, and keys](/support/docs/rook-cli-reference/) · [Permissions and safety](/support/docs/rook-permissions-and-safety/) · [Web UI](/support/docs/rook-web-ui/)
