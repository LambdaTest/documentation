---
id: accessibility-mcp-server
title: Accessibility MCP Tool
sidebar_label: Accessibility MCP Tool
description: Use the Accessibility MCP Tool for supported AI-assisted accessibility analysis workflows.
slug: accessibility-mcp-server/
url: https://www.testmuai.com/support/docs/accessibility-mcp-server/
site_name: TestMu AI
canonical: https://www.testmuai.com/support/docs/accessibility-mcp-server/
---

# Accessibility MCP Tool

Accessibility MCP Tool enables supported AI-assisted Accessibility workflows for public URLs and selected local app analysis flows. It is a tool within the [TestMu AI MCP Server](/support/docs/testmu-mcp-server/).

This page describes what the Accessibility MCP Tool is, when an MCP-connected, AI-assisted analysis flow makes sense, and how that surface differs from DevTools, Automation, and Web Scanner. Use it to orient prerequisites and boundaries before connecting a client or routing work into an MCP-based accessibility review.

## When to use this

Use the Accessibility MCP Tool when you want an AI-assisted workflow that can request Accessibility analysis through supported MCP-compatible clients and tools.

## What it is good for

- analyzing supported public URLs through an MCP-based workflow
- supporting selected local-app analysis flows where MCP support is available
- routing users into an AI-assisted accessibility review flow instead of a browser-extension or framework-execution flow

## Prerequisites

- access to the Accessibility MCP Tool feature
- an MCP-compatible client or workflow that can connect to the server
- a public URL or supported local application flow you are authorized to test

## Onboarding checklist (first connection)

1. Install and verify the **platform** MCP prerequisites from [Introducing TestMu AI MCP Server](/support/docs/testmu-mcp-server/) if your client expects the shared endpoint model.
2. Confirm with your admin that **Accessibility MCP** is enabled for the workspace (feature flag or contract).
3. In your MCP client (for example Cursor, VS Code extension, or internal agent), add the **Accessibility MCP server definition** supplied in your account documentation—endpoint, auth mode, and scopes differ by release; copy from the in-product help or support article your CS team provides.
4. Start with a **single public URL** smoke test authorized for scanning; avoid sensitive or authenticated pages until tunnel or auth patterns are validated.
5. Compare MCP output with a **DevTools or automation report** for the same URL so you trust the interpretation before relying on it in compliance conversations.
6. Escalate gaps to support with **client name**, **server version**, and **timestamp** if tool calls fail.

## Product boundary

Accessibility MCP Tool is a dedicated product surface. It is not the same as:

- **Accessibility DevTools**, which is for browser-based manual and assisted testing
- **Accessibility Automation**, which is for framework-driven automated execution
- **Web Scanner**, which is an integrated URL-scanning surface

## Related docs

- [Introducing TestMu AI MCP Server](/support/docs/testmu-mcp-server/) (platform-wide MCP setup)
- [Choosing the Right Accessibility Tool](/support/docs/accessibility-choosing-the-right-tool/)
- [Accessibility DevTools (Overview)](/support/docs/accessibility-devtools/)
- [Accessibility Automation (Overview)](/support/docs/accessibility-automation/)
- [Starting an Accessibility Scan with Web Scanner](/support/docs/web-scanner-accessibility-scan/)
