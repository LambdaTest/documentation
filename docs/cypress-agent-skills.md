---
id: cypress-agent-skills
title: How to Run Cypress Tests With Agent Skills on TestMu AI
hide_title: true
toc_max_heading_level: 2
sidebar_label: "Run Test With Agent Skills"
description: Use TestMu AI Agent Skills to generate production-ready Cypress test automation with AI coding assistants like Claude Code, GitHub Copilot, and Cursor.
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

import VerifiedTag from '@site/src/component/verifiedTag';

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

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/cypress-agent-skills/"
    },
    "headline": "Run Your Cypress Tests Using Agent Skills",
    "description": "Learn how to use TestMu AI Agent Skills to generate production-ready Cypress test automation using AI coding assistants like Claude Code, GitHub Copilot, and Cursor.",
    "url": "https://www.testmuai.com/support/docs/cypress-agent-skills/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Web Automation",
    "keywords": [
      "cypress agent skills",
      "ai test automation",
      "cypress ai coding"
    ],
    "proficiencyLevel": "Beginner",
    "dependencies": "A TestMu AI account. If you don't have one, sign up for free.; Your TestMu AI Username and Access Key from the Automation Dashboard.; An AI coding assistant: Claude Code, GitHub Copilot, Cursor, Gemini CLI, or any compatible tool..",
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
        "name": "Clone the repository and copy the Cypress skill into your AI tool's skills directory",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/agent-skills",
        "text": "git clone https://github.com/LambdaTest/agent-skills.git\n\n# For Claude Code\ncp -r agent-skills/cypress-skill .claude/skills/\n\n# For Cursor\ncp -r agent-skills/cypress-skill .cursor/skills/\n\n# For GitHub Copilot\ncp -r agent-skills/cypress-skill .github/skills/\n\n# For Gemini CLI\ncp -r agent-skills/cypress-skill .gemini/skills/"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Configure your TestMu AI credentials as environment variables",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "export LT_USERNAME=\"YOUR_LAMBDATEST_USERNAME\"\nexport LT_ACCESS_KEY=\"YOUR_LAMBDATEST_ACCESS_KEY\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Once installed, simply ask your AI assistant to write tests in natural language",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\"Write Cypress E2E tests for the login page and run them on TestMu AI cloud using Chrome and Firefox\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Running Your First Test Using Agent Skills",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\"Set up Cypress component tests for the React dashboard and upload screenshots on failure\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Running Your First Test Using Agent Skills",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\"Run Cypress tests across multiple browsers in parallel on TestMu AI\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "What's Included in the Cypress Skill",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "cypress-skill/\n\u251c\u2500\u2500 SKILL.md\n\u2514\u2500\u2500 reference/\n    \u251c\u2500\u2500 playbook.md\n    \u2514\u2500\u2500 advanced-patterns.md"
      }
    ],
    "dateModified": "2026-09-09T19:13:32+05:30"
  }) }}
/>


# How to Run Cypress Tests With Agent Skills on TestMu AI
***

If you use an AI coding assistant to write Cypress tests, Agent Skills let it scaffold production-ready automation instead of you configuring the project by hand. You get correct project structure, dependency versions, cloud execution patterns, and CI/CD workflows generated in one prompt. You install the [cypress-skill](https://github.com/LambdaTest/agent-skills/tree/main/cypress-skill) package into your AI tool's skills directory, set your credentials, then describe the tests you want in natural language.

The cypress-skill is part of the [TestMu AI Agent Skills](https://github.com/LambdaTest/agent-skills/) collection, structured packages that teach AI coding assistants how to write production-grade test automation code.

## About Agent Skills
***

Agent Skills are self-contained packages of instructions, code patterns, debugging guides, and CI/CD configurations for specific testing frameworks. Once installed, your AI assistant works like a **Senior QA automation architect** with knowledge of:

- Proper project structure for each framework
- Correct dependency versions and configurations
- Both local and TestMu AI cloud execution patterns
- Common pitfalls and debugging approaches
- CI/CD integration with GitHub Actions

## Prerequisites
***

Before you install the skill, make sure you have an account, your credentials, and a supported AI coding assistant in place.

- A TestMu AI account. If you don't have one, <a href={BRAND_URL}>sign up for free</a>.
- Your TestMu AI **Username** and **Access Key** from the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/).
- An AI coding assistant: [Claude Code](https://claude.ai/code), [GitHub Copilot](https://github.com/features/copilot), [Cursor](https://cursor.sh/), [Gemini CLI](https://github.com/google-gemini/gemini-cli), or any compatible tool.

## Installing the Cypress Agent Skill
***

Clone the repository and copy the Cypress skill into your AI tool's skills directory. Each tool reads skills from its own folder, so use the command that matches your assistant.

<VerifiedTag value="Verified" />

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
***

The skill runs your tests on the TestMu AI cloud, so it needs your credentials at runtime. Configure your TestMu AI **Username** and **Access Key** as environment variables:

<VerifiedTag value="Verified" />

```bash
export LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
export LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```

## Running Your First Test Using Agent Skills
***

Once installed, describe the tests you want in natural language and the AI assistant generates and runs them. Any of the prompts below is a valid starting point:

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
3. **Execution target** - Configures local or TestMu AI cloud execution via `lambdatest-config.json`
4. **Best practices** - Uses `data-cy` selectors, `cy.intercept()` for network, `cy.session()` for auth

## What's Included in the Cypress Skill
***

The skill ships as a small package of instruction files that your AI assistant reads to learn the framework. Its structure and the topics each part covers are shown below.

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
| **Cloud Integration** | TestMu AI `lambdatest-config.json` and `npx lambdatest-cypress run` setup |
| **CI/CD Integration** | GitHub Actions workflows with reporting and parallel execution |
| **Debugging Guide** | 15+ common issues mapped to solutions |
| **Best Practices** | Actionable recommendations for production code |

## Supported AI Tools
***

The Cypress Agent Skill works with any assistant that reads local skill files. Install it into the path that matches your tool from the table below.

| Tool | Type | Installation Path |
|------|------|-------------------|
| Claude Code | CLI | `.claude/skills/` |
| GitHub Copilot | Extension | `.github/skills/` |
| Cursor | IDE | `.cursor/skills/` |
| Gemini CLI | CLI | `.gemini/skills/` |
| Codex CLI | CLI | `.codex/skills/` |
| OpenCode | CLI | `.opencode/skills/` |
| Claude.ai | Web | Settings > Features > Skills |

## Related Cypress Guides
***

Continue with the guides below to run and configure your Cypress tests on TestMu AI.

- [Run your first Cypress test on TestMu AI](/support/docs/getting-started-with-cypress-testing/) covers cloning the sample project and executing a test.
- [Reference the Cypress CLI commands](/support/docs/cypress-cli-commands/) documents the full lambdatest-cypress CLI.
- [Choose supported browsers and operating systems](/support/docs/supported-browsers-and-os/) lists the browsers, versions, and platforms you can target.

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
