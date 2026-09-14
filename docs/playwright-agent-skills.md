---
id: playwright-agent-skills
title: How to Run Playwright Tests With Agent Skills on TestMu AI
hide_title: true
sidebar_label: "Run Test With Agent Skills"
description: Install TestMu AI Agent Skills to have AI coding assistants like Claude Code and Cursor generate and run Playwright test automation for you.
toc_max_heading_level: 2
keywords:
  - playwright agent skills
  - ai test automation
  - playwright ai coding
  - agent skills playwright
  - testmu ai agent skills
url: https://www.testmuai.com/support/docs/playwright-agent-skills/
site_name: TestMu AI
slug: playwright-agent-skills/
canonical: https://www.testmuai.com/support/docs/playwright-agent-skills/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

import VerifiedTag from '@site/src/component/verifiedTag';

# How to Run Playwright Tests With Agent Skills on TestMu AI
***

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
          "name": "Playwright Agent Skills",
          "item": "https://www.testmuai.com/support/docs/playwright-agent-skills/"
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
      "@id": "https://www.testmuai.com/support/docs/playwright-agent-skills/"
    },
    "headline": "Run Your Playwright Tests Using Agent Skills",
    "description": "Learn how to use TestMu AI Agent Skills to generate production-ready Playwright test automation using AI coding assistants like Claude Code, GitHub Copilot, and Cursor.",
    "url": "https://www.testmuai.com/support/docs/playwright-agent-skills/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Web Automation",
    "keywords": [
      "playwright agent skills",
      "ai test automation",
      "playwright ai coding"
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
        "name": "Clone the repository and copy the Playwright skill into your AI tool's skills directory",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/agent-skills",
        "text": "git clone https://github.com/LambdaTest/agent-skills.git\n\n# For Claude Code\ncp -r agent-skills/playwright-skill .claude/skills/\n\n# For Cursor\ncp -r agent-skills/playwright-skill .cursor/skills/\n\n# For GitHub Copilot\ncp -r agent-skills/playwright-skill .github/skills/\n\n# For Gemini CLI\ncp -r agent-skills/playwright-skill .gemini/skills/"
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
        "text": "\"Write Playwright tests for the login page and run them on TestMu AI cloud using Chrome and Firefox\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Running Your First Test Using Agent Skills",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\"Set up a Playwright TypeScript project with Page Object Model and run tests on TestMu AI\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Running Your First Test Using Agent Skills",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\"Run Playwright tests on real mobile devices on TestMu AI cloud\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "What's Included in the Playwright Skill",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "playwright-skill/\n\u251c\u2500\u2500 SKILL.md\n\u2514\u2500\u2500 reference/\n    \u251c\u2500\u2500 playbook.md\n    \u2514\u2500\u2500 advanced-patterns.md"
      }
    ],
    "dateModified": "2026-09-09T19:13:32+05:30"
  }) }}
/>


If you use an AI coding assistant, you can skip the manual Playwright project setup and let Agent Skills generate the test automation for you. Agent Skills give the assistant the project structure, dependency versions, and cloud execution patterns it needs to write working Playwright tests on the first pass. You install the skill into your tool's skills directory, set your credentials, then describe the tests you want in natural language.

The [Playwright Agent Skill](https://github.com/LambdaTest/agent-skills/tree/main/playwright-skill) is part of the [TestMu AI Agent Skills collection](https://github.com/LambdaTest/agent-skills/), a set of structured packages that teach AI coding assistants how to write test automation code.

## About Agent Skills
***

Agent Skills are self-contained packages of instructions, code patterns, debugging guides, and CI/CD configurations for specific testing frameworks. Once installed, your AI assistant works like a senior QA automation architect with knowledge of:

- Proper project structure for each framework
- Correct dependency versions and configurations
- Both local and TestMu AI cloud execution patterns
- Common pitfalls and debugging approaches
- CI/CD integration with GitHub Actions

## Prerequisites
***

Make sure you have an account, your credentials, and a supported assistant before installing the skill.

- A TestMu AI account. If you don't have one, <a href={BRAND_URL}>sign up for free</a>.
- Your TestMu AI **Username** and **Access Key** from the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/).
- An AI coding assistant: [Claude Code](https://claude.ai/code), [GitHub Copilot](https://github.com/features/copilot), [Cursor](https://cursor.sh/), [Gemini CLI](https://github.com/google-gemini/gemini-cli), or any compatible tool.

## Installing the Playwright Agent Skill
***

Clone the Agent Skills repository, then copy the Playwright skill into your AI tool's skills directory.

<VerifiedTag value="Verified" />

```bash
git clone https://github.com/LambdaTest/agent-skills.git

# For Claude Code
cp -r agent-skills/playwright-skill .claude/skills/

# For Cursor
cp -r agent-skills/playwright-skill .cursor/skills/

# For GitHub Copilot
cp -r agent-skills/playwright-skill .github/skills/

# For Gemini CLI
cp -r agent-skills/playwright-skill .gemini/skills/
```

:::tip
If you prefer installing **all available framework skills**, clone the repository directly into your tool's skills directory (e.g., `.claude/skills/`, `.cursor/skills/`).
:::

## Set Up Your Authentication
***

Configure your TestMu AI credentials as environment variables so the skill can connect to the grid.

<VerifiedTag value="Verified" />

```bash
export LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
export LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```

## Running Your First Test Using Agent Skills
***

Once the skill is installed, describe the tests you want in natural language and let the assistant generate and run them. Any of the prompts below is enough to get started.

<VerifiedTag value="Verified" />

```text
"Write Playwright tests for the login page and run them on TestMu AI cloud using Chrome and Firefox"
```

<VerifiedTag value="Verified" />

```text
"Set up a Playwright TypeScript project with Page Object Model and run tests on TestMu AI"
```

<VerifiedTag value="Verified" />

```text
"Run Playwright tests on real mobile devices on TestMu AI cloud"
```

The Agent Skill automatically handles:

1. **Project setup** - Creates the right folder structure, dependencies, and config files
2. **Language detection** - Maps your request to the correct language (TypeScript, JavaScript, Python, Java, or C#)
3. **Execution target** - Configures local or TestMu AI cloud execution via CDP WebSocket
4. **Best practices** - Uses web-first assertions, accessible locators (`getByRole`, `getByLabel`), and Page Object Model

## What's Included in the Playwright Skill
***

The skill ships as a small set of Markdown files that the assistant reads to build your project. The tree below shows the layout, and the table maps each area of coverage.

<VerifiedTag value="Verified" />

```text
playwright-skill/
├── SKILL.md
└── reference/
    ├── playbook.md
    └── advanced-patterns.md
```

| Section | Details |
|---------|---------|
| **Project Setup** | Dependencies, versions, configuration files, project structure |
| **Core Patterns** | Complete, runnable code examples with web-first assertions |
| **Cloud Integration** | TestMu AI CDP WebSocket connection and capabilities configuration |
| **CI/CD Integration** | GitHub Actions workflows with reporting and parallel execution |
| **Debugging Guide** | Common issues mapped to solutions |
| **Best Practices** | Actionable recommendations for production code |

## Supported Languages and Frameworks
***

The Playwright Agent Skill supports five languages. Several framework docs also reference their own dedicated Agent Skills, listed in the second table below.

### Languages
***

Pick your language to see which skill applies and where its dedicated doc lives.

| Language | Agent Skill | Documentation |
|----------|------------|---------------|
| TypeScript (default) | [playwright-skill](https://github.com/LambdaTest/agent-skills/tree/main/playwright-skill) | [TypeScript with Playwright](/docs/javascript-with-playwright/?framework=typescript) |
| JavaScript | [playwright-skill](https://github.com/LambdaTest/agent-skills/tree/main/playwright-skill) | [JavaScript with Playwright](/docs/javascript-with-playwright/) |
| Java | [playwright-skill](https://github.com/LambdaTest/agent-skills/tree/main/playwright-skill) | [Java with Playwright](/docs/java-with-playwright/) |
| Python | [playwright-skill](https://github.com/LambdaTest/agent-skills/tree/main/playwright-skill) | [Python with Playwright](/docs/python-with-playwright/) |
| C# | [playwright-skill](https://github.com/LambdaTest/agent-skills/tree/main/playwright-skill) | [C# with Playwright](/docs/csharp-with-playwright/) |

### Frameworks With Dedicated Agent Skills
***

These test runners ship their own Agent Skills that build on the Playwright skill.

| Framework | Agent Skill | Documentation |
|-----------|------------|---------------|
| Jest | [jest-skill](https://github.com/LambdaTest/agent-skills/tree/main/jest-skill) | [Jest with Playwright](/docs/javascript-with-playwright/?framework=jest) |
| JUnit 5 | [junit-5-skill](https://github.com/LambdaTest/agent-skills/tree/main/junit-5-skill) | [JUnit with Playwright](/docs/java-with-playwright/?framework=junit) |
| CucumberJS | [cucumber-skill](https://github.com/LambdaTest/agent-skills/tree/main/cucumber-skill) | [CucumberJS with Playwright](/docs/javascript-with-playwright/?framework=cucumberjs) |

## Supported AI Tools
***

The skill installs into any of the AI coding tools below. Copy it into the installation path that matches your tool.

| Tool | Type | Installation Path |
|------|------|-------------------|
| Claude Code | CLI | `.claude/skills/` |
| GitHub Copilot | Extension | `.github/skills/` |
| Cursor | IDE | `.cursor/skills/` |
| Gemini CLI | CLI | `.gemini/skills/` |
| Codex CLI | CLI | `.codex/skills/` |
| OpenCode | CLI | `.opencode/skills/` |
| Claude.ai | Web | Settings > Features > Skills |

## Related Playwright Guides
***

Continue with the guides below to run, scale, and configure Playwright tests on TestMu AI.

- [Run your first Playwright test on the cloud grid](/support/docs/playwright-testing/) walks through connecting Playwright to TestMu AI from scratch.
- [Run Playwright tests with the TestMu AI SDK](/support/docs/playwright-testing/#run-tests-with-the-sdk) runs your existing suite with no code changes.
- [Configure Playwright capabilities](/support/docs/capabilities-for-playwright/) sets browser, OS, and cloud options for your runs.

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
        Playwright Agent Skills
      </span>
    </li>
  </ul>
</nav>
