---
id: smartui-agent-skills
title: Run Your SmartUI Visual Tests Using Agent Skills
hide_title: false
sidebar_label: SmartUI Agent Skills
description: Use TestMu AI Agent Skills to let AI coding agents generate and run SmartUI visual regression tests (screenshot comparison across browsers and viewports) directly from natural language prompts.
keywords:
    - TestMu AI
    - SmartUI
    - Visual Regression
    - Visual Testing
    - Screenshot Comparison
    - Agent Skills
    - AI Coding Assistant
    - Claude Code
    - Cursor
url: https://www.testmuai.com/support/docs/smartui-agent-skills/
site_name: TestMu AI
slug: smartui-agent-skills/
canonical: https://www.testmuai.com/support/docs/smartui-agent-skills/
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
          "name": "SmartUI Agent Skills",
          "item": `${BRAND_URL}/support/docs/smartui-agent-skills/`
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
      "@id": "https://www.testmuai.com/support/docs/smartui-agent-skills/"
    },
    "headline": "Run Your SmartUI Visual Tests Using Agent Skills",
    "description": "Use TestMu AI Agent Skills to let AI coding agents generate and run SmartUI visual regression tests (screenshot comparison across browsers and viewports) directly from natural language prompts.",
    "url": "https://www.testmuai.com/support/docs/smartui-agent-skills/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "SmartUI",
    "keywords": [
      "TestMu AI",
      "SmartUI",
      "Visual Regression"
    ],
    "proficiencyLevel": "Beginner",
    "dependencies": "A TestMu AI account; Your TestMu AI Username and Access Key from the Automation Dashboard; Your SmartUI Project Token, available from the SmartUI app after creating a project; A compatible AI coding agent (Claude Code, GitHub Copilot, Cursor, Gemini CLI, or similar).",
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
        "name": "Clone the Agent Skills repository and copy the SmartUI skill into your agent's skills directory",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/agent-skills",
        "text": "git clone https://github.com/LambdaTest/agent-skills.git\n\n# For Claude Code\ncp -r agent-skills/smartui-skill .claude/skills/\n\n# For Cursor\ncp -r agent-skills/smartui-skill .cursor/skills/\n\n# For GitHub Copilot\ncp -r agent-skills/smartui-skill .github/skills/\n\n# For Gemini CLI\ncp -r agent-skills/smartui-skill .gemini/skills/"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Export your TestMu AI credentials and SmartUI project token as environment variables so the agent can run tests on the cloud (Linux / MacOS)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "export LT_USERNAME=\"YOUR_LAMBDATEST_USERNAME\"\nexport LT_ACCESS_KEY=\"YOUR_LAMBDATEST_ACCESS_KEY\"\nexport PROJECT_TOKEN=\"YOUR_SMARTUI_PROJECT_TOKEN\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Set Up Your Authentication (Windows)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "PowerShell",
        "text": "$env:LT_USERNAME=\"YOUR_LAMBDATEST_USERNAME\"\n$env:LT_ACCESS_KEY=\"YOUR_LAMBDATEST_ACCESS_KEY\"\n$env:PROJECT_TOKEN=\"YOUR_SMARTUI_PROJECT_TOKEN\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Ask the agent to run it, or run the command it generated yourself",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npx smartui exec -- npx playwright test"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Run Visual Tests Using the SmartUI Skill",
      "description": "Once the skill is installed and your credentials are set, you drive everything through natural-language prompts. Your agent reads the skill, applies the right pattern for your framework, and runs the test on the TestMu AI cloud. You do not write the configuration or the snapshot calls yourself.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Ask the agent to set up SmartUI",
          "text": "Describe the visual test you want. Be specific about the pages or components and, if it matters, the browsers and viewports: \"Add SmartUI visual regression tests to my Playwright suite. Capture the homepage and the login page across Chrome, Firefox, and Safari at desktop and mobile viewports.\" From this, the agent will: Install the SmartUI CLI and the driver for your framework Create a smartui.config.json with the browsers, viewports, and wait conditions you asked for Add the correct snapshot call at the right points in your test (for example, smartuiSnapshot(page, 'Homepage') for Playwright, or smartui.takeScreenshot for Selenium) Wire up the npx smartui exec command that runs the whole thing on the cloud",
          "url": "https://www.testmuai.com/support/docs/smartui-agent-skills/#step-1-ask-the-agent-to-set-up-smartui"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Run the visual test",
          "text": "Ask the agent to run it, or run the command it generated yourself: The agent executes your suite through the SmartUI CLI, which captures a screenshot at every snapshot call and uploads it to your project for comparison.",
          "url": "https://www.testmuai.com/support/docs/smartui-agent-skills/#step-2-run-the-visual-test"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 3: Review and iterate",
          "text": "The agent reports the outcome and links you to the build in your SmartUI dashboard, where the visual comparisons live (see Understanding the Results). From there you can keep iterating in plain language: \"The header changed on purpose, approve the new baseline.\" \"Add a snapshot of the checkout page and re-run.\"",
          "url": "https://www.testmuai.com/support/docs/smartui-agent-skills/#step-3-review-and-iterate"
        }
      ]
    }
  ]) }}
/>

SmartUI catches visual bugs by comparing screenshots of your UI against an approved baseline. Wiring it into a test suite means installing the CLI, adding snapshot calls, and tuning a config. You can hand that off to your AI coding agent instead.

The [`smartui-skill`](https://github.com/LambdaTest/agent-skills/tree/main/smartui-skill) is part of [<BrandName /> Agent Skills](https://github.com/LambdaTest/agent-skills), a library of instruction packs that give AI coding agents the know-how to build working test automation on <BrandName />. Describe the pages you want covered, and it wires SmartUI into your existing framework and runs the comparison on the <BrandName /> cloud.

## Prerequisites

- A [<BrandName /> account](https://accounts.lambdatest.com/register)
- Your <BrandName /> **Username** and **Access Key** from the [Automation Dashboard](https://accounts.lambdatest.com/detail/profile)
- Your SmartUI **Project Token**, available from the [SmartUI app](https://smartui.lambdatest.com/) after creating a project
- A compatible AI coding agent (Claude Code, GitHub Copilot, Cursor, Gemini CLI, or similar)

## Installing the SmartUI Agent Skill

Clone the Agent Skills repository and copy the SmartUI skill into your agent's skills directory:

```bash
git clone https://github.com/LambdaTest/agent-skills.git

# For Claude Code
cp -r agent-skills/smartui-skill .claude/skills/

# For Cursor
cp -r agent-skills/smartui-skill .cursor/skills/

# For GitHub Copilot
cp -r agent-skills/smartui-skill .github/skills/

# For Gemini CLI
cp -r agent-skills/smartui-skill .gemini/skills/
```

:::tip
If you prefer installing all available framework skills, clone the repository directly into your tool's skills directory (e.g., `.claude/skills/`, `.cursor/skills/`).
:::

## Set Up Your Authentication

Export your <BrandName /> credentials and SmartUI project token as environment variables so the agent can run tests on the cloud:

<Tabs className="docs__val">
<TabItem value="bash" label="Linux / MacOS" default>

```bash
export LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
export LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
export PROJECT_TOKEN="YOUR_SMARTUI_PROJECT_TOKEN"
```

</TabItem>
<TabItem value="powershell" label="Windows">

```powershell
$env:LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
$env:LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
$env:PROJECT_TOKEN="YOUR_SMARTUI_PROJECT_TOKEN"
```

</TabItem>
</Tabs>

## How to Run Visual Tests Using the SmartUI Skill

Once the skill is installed and your credentials are set, you drive everything through natural-language prompts. Your agent reads the skill, applies the right pattern for your framework, and runs the test on the <BrandName /> cloud. You do not write the configuration or the snapshot calls yourself.

### Step 1: Ask the agent to set up SmartUI

Describe the visual test you want. Be specific about the pages or components and, if it matters, the browsers and viewports:

> "Add SmartUI visual regression tests to my Playwright suite. Capture the homepage and the login page across Chrome, Firefox, and Safari at desktop and mobile viewports."

From this, the agent will:

- Install the SmartUI CLI and the driver for your framework
- Create a `smartui.config.json` with the browsers, viewports, and wait conditions you asked for
- Add the correct snapshot call at the right points in your test (for example, `smartuiSnapshot(page, 'Homepage')` for Playwright, or `smartui.takeScreenshot` for Selenium)
- Wire up the `npx smartui exec` command that runs the whole thing on the cloud

### Step 2: Run the visual test

Ask the agent to run it, or run the command it generated yourself:

```bash
npx smartui exec -- npx playwright test
```

The agent executes your suite through the SmartUI CLI, which captures a screenshot at every snapshot call and uploads it to your project for comparison.

### Step 3: Review and iterate

The agent reports the outcome and links you to the build in your [SmartUI dashboard](https://smartui.lambdatest.com/), where the visual comparisons live (see [Understanding the Results](#understanding-the-results)). From there you can keep iterating in plain language:

> "The header changed on purpose, approve the new baseline."
>
> "Add a snapshot of the checkout page and re-run."

### Example prompts to try

- "Set up SmartUI screenshot comparison for my Cypress tests and run it on TestMu AI"
- "Capture visual snapshots of my Storybook components with SmartUI"
- "Add a full-page snapshot after the cart loads and compare across three viewports"
- "My login page snapshot is failing, show me what changed"

## Understanding the Results

The first run of a SmartUI test establishes the **baseline**, the approved reference set. No comparison happens on this run; there is nothing to compare against yet. Every later run captures fresh screenshots and compares them against the baseline, reporting a **mismatch percentage** per screenshot for each browser and viewport.

Review the comparisons in your [SmartUI dashboard](https://smartui.lambdatest.com/), where you approve intended changes to update the baseline or flag unintended differences as regressions.

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