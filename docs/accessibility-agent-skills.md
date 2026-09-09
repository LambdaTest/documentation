---
id: accessibility-agent-skills
title: Run Your Accessibility Tests Using Agent Skills
hide_title: false
sidebar_label: Accessibility Agent Skills
description: Use TestMu AI Agent Skills to let AI coding agents add automated accessibility (WCAG) scanning to your test suite directly from natural language prompts.
keywords:
    - TestMu AI
    - Accessibility
    - Accessibility Testing
    - a11y
    - WCAG
    - Agent Skills
    - AI Coding Assistant
    - Claude Code
    - Cursor
url: https://www.testmuai.com/support/docs/accessibility-agent-skills/
site_name: TestMu AI
slug: accessibility-agent-skills/
canonical: https://www.testmuai.com/support/docs/accessibility-agent-skills/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

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
          "name": "Accessibility Agent Skills",
          "item": `${BRAND_URL}/support/docs/accessibility-agent-skills/`
        }]
      })
    }}
></script>

Accessibility testing checks your pages against WCAG rules for issues like missing alt text, unlabeled form fields, and low colour contrast. Adding it to a test suite means enabling the right capabilities and triggering scans at the pages you care about. You can hand that off to your AI coding agent instead.

The [`accessibility-skill`](https://github.com/LambdaTest/agent-skills/tree/main/accessibility-skill) is part of [<BrandName /> Agent Skills](https://github.com/LambdaTest/agent-skills), a library of instruction packs that give AI coding agents the know-how to build working test automation on <BrandName />. Tell it which pages to scan, and it wires accessibility into your existing framework and runs the scan on the <BrandName /> cloud.

## Prerequisites

- A [<BrandName /> account](https://accounts.lambdatest.com/register)
- Your <BrandName /> **Username** and **Access Key** from the [Automation Dashboard](https://accounts.lambdatest.com/detail/profile)
- An existing Selenium, Playwright, or Cypress suite that runs on the <BrandName /> cloud
- A compatible AI coding agent (Claude Code, GitHub Copilot, Cursor, Gemini CLI, or similar)

## Installing the Accessibility Agent Skill

Clone the Agent Skills repository and copy the accessibility skill into your agent's skills directory:

```bash
git clone https://github.com/LambdaTest/agent-skills.git

# For Claude Code
cp -r agent-skills/accessibility-skill .claude/skills/

# For Cursor
cp -r agent-skills/accessibility-skill .cursor/skills/

# For GitHub Copilot
cp -r agent-skills/accessibility-skill .github/skills/

# For Gemini CLI
cp -r agent-skills/accessibility-skill .gemini/skills/
```

:::tip
If you prefer installing all available framework skills, clone the repository directly into your tool's skills directory (e.g., `.claude/skills/`, `.cursor/skills/`).
:::

## Set Up Your Authentication

Accessibility scanning runs on the <BrandName /> cloud alongside your automation, so it uses your account credentials. Export them as environment variables:

<Tabs className="docs__val">
<TabItem value="bash" label="Linux / MacOS" default>

```bash
export LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
export LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```

</TabItem>
<TabItem value="powershell" label="Windows">

```powershell
$env:LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
$env:LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```

</TabItem>
</Tabs>

## How to Run Accessibility Tests Using the Accessibility Skill

Once the skill is installed and your credentials are set, you drive everything through natural-language prompts. Your agent reads the skill, applies the right pattern for your framework, and runs the scan on the <BrandName /> cloud. You do not write the capabilities or the scan hooks yourself.

### Step 1: Ask the agent to add accessibility scanning

Describe the pages you want scanned and, if it matters, the WCAG version:

> "Add accessibility scanning to my Selenium suite. Scan the homepage and the checkout page against WCAG 2.1 AA."

From this, the agent will:

- Enable the `accessibility` capability on your driver, along with settings like `accessibility.wcagVersion`
- Add the `lambda-accessibility-scan` hook at the pages you named, or enable `accessibility.autoscan` to scan every navigation on Selenium
- Wire the run to execute your suite on the <BrandName /> cloud

### Step 2: Run the accessibility scan

Ask the agent to run it, or run your usual test command yourself:

```bash
mvn test
```

Your suite runs on the <BrandName /> cloud, and a WCAG scan is captured at each point the hook is called (or on every navigation, with autoscan).

### Step 3: Review the report

The agent points you to your [Accessibility dashboard](https://accessibility.lambdatest.com/), where each scan's issues, WCAG mappings, and score live (see [Understanding the Results](#understanding-the-results)). From there you can keep iterating in plain language:

> "Also scan the pricing page and include best-practice checks."
>
> "Scan the login page against WCAG 2.1 A instead."

### Example prompts to try

- "Add accessibility scanning to my Playwright tests and scan the dashboard page"
- "Turn on autoscan for my Selenium suite so every page is checked for WCAG issues"
- "Scan my checkout flow for colour-contrast and form-label problems"
- "Include issues that need manual review in the accessibility report"

## Understanding the Results

Each scan produces a report on your [Accessibility dashboard](https://accessibility.lambdatest.com/). Issues are grouped by **severity** (Critical, Serious, Moderate, and Minor), each mapped to the **WCAG success criterion** it violates, and the scan is summarised as an **Accessibility Score** from 0 to 100.

Use the report to find and fix issues, then re-run the scan to confirm. Keep in mind that automated scanning catches only a portion of WCAG rules: it reliably flags problems like missing alt text, low contrast, and unlabeled fields, but things like meaningful alt text, logical focus order, and screen-reader experience still need manual testing. Passing an automated scan is necessary, not sufficient.

## Supported AI Tools

| Tool           | Type      | Installation Path            |
| -------------- | --------- | ---------------------------- |
| Claude Code    | CLI       | `.claude/skills/`            |
| GitHub Copilot | Extension | `.github/skills/`            |
| Cursor         | IDE       | `.cursor/skills/`            |
| Gemini CLI     | CLI       | `.gemini/skills/`            |
| Codex CLI      | CLI       | `.codex/skills/`             |
| OpenCode       | CLI       | `.opencode/skills/`          |
| Claude.ai      | Web       | Settings > Features > Skills |
