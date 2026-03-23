---
id: cypress-agent-skills
title: Run Your Cypress Tests Using Agent Skills
hide_title: false
sidebar_label: Run Your Test With Agent Skills
description: Learn how to use TestMu AI Agent Skills to generate production-ready Cypress test automation using AI coding assistants like Claude Code, GitHub Copilot, and Cursor.
keywords:
  - cypress agent skills
  - ai test automation
  - cypress ai coding
  - agent skills cypress
  - testmu ai agent skills
url: https://www.testmuai.com/support/docs/cypress-agent-skills/
site_name: TestMu AI
slug: cypress-agent-skills/
canonical: https://www.testmuai.com/support/docs/cypress-agent-skills/
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
          "name": "Cypress Agent Skills",
          "item": "https://www.testmuai.com/support/docs/cypress-agent-skills/"
        }]
    })
  }}
></script>

# Run Your Cypress Tests Using Agent Skills

Instead of manually setting up your Cypress project, you can use **Agent Skills** to let your AI coding assistant generate production-ready Cypress test automation for you.

The [cypress-skill](https://github.com/LambdaTest/agent-skills/tree/main/cypress-skill) is part of [TestMu AI Agent Skills](https://github.com/LambdaTest/agent-skills/) - structured packages that teach AI coding assistants how to write production-grade test automation code.

## What Are Agent Skills?

Agent Skills are self-contained packages of instructions, code patterns, debugging guides, and CI/CD configurations for specific testing frameworks. Once installed, your AI assistant works like a **Senior QA automation architect** with knowledge of:

- Proper project structure for each framework
- Correct dependency versions and configurations
- Both local and <BrandName /> cloud execution patterns
- Common pitfalls and debugging approaches
- CI/CD integration with GitHub Actions

## Prerequisites

- A <BrandName /> account. If you don't have one, <a href={BRAND_URL}>sign up for free</a>.
- Your <BrandName /> **Username** and **Access Key** from the [Automation Dashboard](https://automation.lambdatest.com/).
- An AI coding assistant: [Claude Code](https://claude.ai/code), [GitHub Copilot](https://github.com/features/copilot), [Cursor](https://cursor.sh/), [Gemini CLI](https://github.com/google-gemini/gemini-cli), or any compatible tool.

## Installing the Cypress Agent Skill

Clone the repository and copy the Cypress skill into your AI tool's skills directory:

```bash
git clone https://github.com/LambdaTest/agent-skills.git

# For Claude Code
cp -r agent-skills/cypress-skill .claude/skills/

# For Cursor
cp -r agent-skills/cypress-skill .cursor/skills/

# For GitHub Copilot
cp -r agent-skills/cypress-skill .github/skills/

# For Gemini CLI
cp -r agent-skills/cypress-skill .gemini/skills/
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
"Write Cypress E2E tests for the login page and run them on TestMu AI cloud using Chrome and Firefox"
```

```
"Set up Cypress component tests for the React dashboard and upload screenshots on failure"
```

```
"Run Cypress tests across multiple browsers in parallel on TestMu AI"
```

The Agent Skill automatically handles:

1. **Project setup** - Creates the right folder structure, dependencies, and config files
2. **Test type detection** - Routes to E2E (`cypress/e2e/`), Component (`cypress/component/`), or API tests
3. **Execution target** - Configures local or <BrandName /> cloud execution via `lambdatest-config.json`
4. **Best practices** - Uses `data-cy` selectors, `cy.intercept()` for network, `cy.session()` for auth

## What's Included in the Cypress Skill

```
cypress-skill/
├── SKILL.md
└── reference/
    ├── playbook.md
    └── advanced-patterns.md
```

| Section | Details |
|---------|---------|
| **Project Setup** | Dependencies, versions, configuration files, project structure |
| **Core Patterns** | Complete, runnable code examples with Cypress chaining best practices |
| **Cloud Integration** | <BrandName /> `lambdatest-config.json` and `npx lambdatest-cypress run` setup |
| **CI/CD Integration** | GitHub Actions workflows with reporting and parallel execution |
| **Debugging Guide** | 15+ common issues mapped to solutions |
| **Best Practices** | Actionable recommendations for production code |

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
        Cypress Agent Skills
      </span>
    </li>
  </ul>
</nav>
