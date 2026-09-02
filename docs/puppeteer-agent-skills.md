---
id: puppeteer-agent-skills
title: Run Your Puppeteer Tests Using Agent Skills
hide_title: false
sidebar_label: Run Your Test With Agent Skills
description: Learn how to use TestMu AI Agent Skills to generate production-ready Puppeteer test automation using AI coding assistants like Claude Code, GitHub Copilot, and Cursor.
keywords:
  - puppeteer agent skills
  - ai test automation
  - puppeteer ai coding
  - agent skills puppeteer
  - testmu ai agent skills
url: https://www.testmuai.com/support/docs/puppeteer-agent-skills/
site_name: TestMu AI
slug: puppeteer-agent-skills/
canonical: https://www.testmuai.com/support/docs/puppeteer-agent-skills/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "TestMu AI",
          "item": "https://www.testmuai.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.testmuai.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Puppeteer Agent Skills",
          "item": "https://www.testmuai.com/support/docs/puppeteer-agent-skills/"
        }]
    })
  }}
></script>

# Run Your Puppeteer Tests Using Agent Skills

Instead of manually setting up your Puppeteer project, you can use **Agent Skills** to let your AI coding assistant generate production-ready Puppeteer automation for you.

The [puppeteer-skill](https://github.com/LambdaTest/agent-skills/tree/main/puppeteer-skill) is part of [TestMu AI Agent Skills](https://github.com/LambdaTest/agent-skills/) - structured packages that teach AI coding assistants how to write production-grade test automation code.

## What Are Agent Skills?

Agent Skills are self-contained packages of instructions, code patterns, debugging guides, and CI/CD configurations for specific testing frameworks. Once installed, your AI assistant works like a **Senior QA automation architect** with knowledge of:

- Proper project structure for each framework
- Correct dependency versions and configurations
- Both local and <BrandName /> cloud execution patterns
- Common pitfalls and debugging approaches
- CI/CD integration with GitHub Actions

## Prerequisites

- A <BrandName /> account. If you don't have one, <a href={BRAND_URL}>sign up for free</a>.
- Your <BrandName /> **Username** and **Access Key** from the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/).
- An AI coding assistant: [Claude Code](https://claude.ai/code), [GitHub Copilot](https://github.com/features/copilot), [Cursor](https://cursor.sh/), [Gemini CLI](https://github.com/google-gemini/gemini-cli), or any compatible tool.

## Installing the Puppeteer Agent Skill

Clone the repository and copy the Puppeteer skill into your AI tool's skills directory:

```bash
git clone https://github.com/LambdaTest/agent-skills.git

# For Claude Code
cp -r agent-skills/puppeteer-skill .claude/skills/

# For Cursor
cp -r agent-skills/puppeteer-skill .cursor/skills/

# For GitHub Copilot
cp -r agent-skills/puppeteer-skill .github/skills/

# For Gemini CLI
cp -r agent-skills/puppeteer-skill .gemini/skills/
```

:::tip
If you prefer installing **all available framework skills**, clone the repository directly into your tool's skills directory (e.g., `.claude/skills/`, `.cursor/skills/`).
:::

## Set Up Your Authentication

Configure your <BrandName /> credentials as environment variables:

```bash
export LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
export LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```

## Running Your First Test Using Agent Skills

Once installed, simply ask your AI assistant to write tests in natural language:

```
"Write Puppeteer tests to scrape product data and run them on TestMu AI cloud"
```

```
"Set up Puppeteer with Jest for E2E testing and generate PDF reports"
```

```
"Run headless Chrome tests on TestMu AI with network interception"
```

The Agent Skill automatically handles:

1. **Project setup** - Creates the right folder structure, dependencies, and config files
2. **Language detection** - Maps your request to JavaScript or TypeScript
3. **Execution target** - Configures local or <BrandName /> cloud execution via CDP WebSocket
4. **Best practices** - Uses `waitForSelector`, proper navigation handling, and network interception patterns

## What's Included in the Puppeteer Skill

```
puppeteer-skill/
├── SKILL.md
└── reference/
    ├── playbook.md
    └── advanced-patterns.md
```

| Section | Details |
|---------|---------|
| **Project Setup** | Dependencies, versions, configuration files, project structure |
| **Core Patterns** | Complete, runnable code examples with proper wait strategies |
| **Cloud Integration** | <BrandName /> CDP WebSocket connection and capabilities configuration |
| **CI/CD Integration** | GitHub Actions workflows with reporting and parallel execution |
| **Debugging Guide** | 12+ common issues mapped to solutions |
| **Best Practices** | Actionable recommendations for production code |

## Supported Frameworks with Dedicated Agent Skills

The following framework docs under Puppeteer reference their own dedicated Agent Skills:

| Framework | Agent Skill | Documentation |
|-----------|------------|---------------|
| Jest | [jest-skill](https://github.com/LambdaTest/agent-skills/tree/main/jest-skill) | [Puppeteer with Jest](/docs/puppeteer-testing-with-jest/) |
| Mocha | [mocha-skill](https://github.com/LambdaTest/agent-skills/tree/main/mocha-skill) | [Puppeteer with Mocha](/docs/puppeteer-testing-with-mocha/) |
| pytest (Pyppeteer) | [pytest-skill](https://github.com/LambdaTest/agent-skills/tree/main/pytest-skill) | [Puppeteer with pytest](/docs/puppeteer-testing-with-pytest-pyppeteer/) |

## Supported AI Tools

| Tool | Type | Installation Path |
|------|------|-------------------|
| Claude Code | CLI | `.claude/skills/` |
| GitHub Copilot | Extension | `.github/skills/` |
| Cursor | IDE | `.cursor/skills/` |
| Gemini CLI | CLI | `.gemini/skills/` |
| Codex CLI | CLI | `.codex/skills/` |
| OpenCode | CLI | `.opencode/skills/` |
| Claude.ai | Web | Settings > Features > Skills |

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.testmuai.com">
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.testmuai.com/support/docs/">
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
        Puppeteer Agent Skills
      </span>
    </li>
  </ul>
</nav>
