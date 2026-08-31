---
id: appium-agent-skills
title: How to Run Appium Tests With Agent Skills on TestMu AI
toc_max_heading_level: 2
hide_title: true
sidebar_label: "Run Tests With Agent Skills"
description: Run Appium tests using AI agent skills on TestMu AI. Generate and execute mobile app automation on real devices from natural-language prompts.
keywords:
  - appium agent skills
  - ai mobile test automation
  - appium ai coding
  - agent skills appium
  - testmu ai agent skills
  - appium real device ai
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/appium-agent-skills/
site_name: TestMu AI
slug: appium-agent-skills/
canonical: https://www.testmuai.com/support/docs/appium-agent-skills/
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
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "How to Run Appium Tests With Agent Skills on TestMu AI",
          "item": `${BRAND_URL}/support/docs/appium-agent-skills/`
        }]
    })
  }}
></script>

# How to Run Appium Tests With Agent Skills on TestMu AI
---

Agent Skills on TestMu AI let your AI coding assistant generate production-grade Appium automation from natural-language prompts. Install the appium-skill package, then your assistant writes correct project structure, dependencies, and desired capabilities and runs tests on real Android and iOS.

Instead of manually setting up your Appium project, use **Agent Skills** to let your AI coding assistant generate production-ready mobile app automation for you. The [appium-skill](https://github.com/LambdaTest/agent-skills/tree/main/appium-skill) is part of [TestMu AI Agent Skills](https://github.com/LambdaTest/agent-skills/) - structured packages that teach AI assistants how to write production-grade test code and run it on real devices.

## What Agent Skills Are
---

Self-contained packages of instructions, code patterns, and configurations for a specific testing framework.

Once installed, your AI assistant works like a senior mobile QA automation architect with knowledge of:

- Proper Appium project structure for each language
- Correct dependency versions and desired capabilities
- Both local and TestMu AI real-device cloud execution patterns
- Common pitfalls and debugging approaches
- CI/CD integration with GitHub Actions

## Prerequisites
---

Make sure you have the following set up before you start.

1. [Create a TestMu AI account](https://www.testmuai.com/register/) if you don't have one.
2. Get your **Username** and **Access Key** from the [TestMu AI Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard).
3. Install an AI coding assistant: [Claude Code](https://claude.ai/code), [GitHub Copilot](https://github.com/features/copilot), [Cursor](https://cursor.sh/), [Gemini CLI](https://github.com/google-gemini/gemini-cli), or any compatible tool.

## Step 1: Install the Appium Agent Skill
---

Clone the repository and copy the Appium skill into your AI tool's skills directory.

```bash
git clone https://github.com/LambdaTest/agent-skills.git

# For Claude Code
cp -r agent-skills/appium-skill .claude/skills/

# For Cursor
cp -r agent-skills/appium-skill .cursor/skills/

# For GitHub Copilot
cp -r agent-skills/appium-skill .github/skills/

# For Gemini CLI
cp -r agent-skills/appium-skill .gemini/skills/
```

:::tip
Install **all available framework skills** at once by cloning the repository directly into your tool's skills directory (e.g., `.claude/skills/`, `.cursor/skills/`).
:::

## Step 2: Set Your Credentials
---

Add your TestMu AI credentials as environment variables so the generated tests can authenticate with the real device cloud.

Visit the [TestMu AI Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard), navigate to the left sidebar, and select **Credentials**. Copy your **Username** and **Access Key**, then run:

```bash
export LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
export LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```

## Step 3: Run Your First Test
---

Ask your AI assistant to write tests in natural language.

```
"Write an Appium test in Python for my Android app's login flow and run it on TestMu AI real devices"
```

```
"Set up an Appium Java project with TestNG and Page Object Model, and run it on TestMu AI"
```

```
"Run my Appium test across an iPhone 14 and a Galaxy S23 in parallel on TestMu AI, tag the build as 'release-v1.0'"
```

The Agent Skill automatically handles:

1. **Project setup** - Creates the right folder structure, dependencies, and config files
2. **Language detection** - Maps your request to the correct language (Java, Python, JavaScript, C#, Ruby, or PHP)
3. **Execution target** - Configures local, real-device, or virtual-device execution on TestMu AI based on your request
4. **Best practices** - Uses explicit waits, proper locator strategies, and Page Object Model patterns

## What's Included in the Appium Skill
---

A breakdown of everything the skill package contains.

```
appium-skill/
├── SKILL.md
└── reference/
    ├── playbook.md
    └── advanced-patterns.md
```

| Section | Details |
|---------|---------|
| **Project Setup** | Dependencies, versions, configuration files, project structure |
| **Core Patterns** | Complete, runnable code examples with best practices |
| **Cloud Integration** | TestMu AI real-device capabilities and hub configuration |
| **CI/CD Integration** | GitHub Actions workflows with reporting and parallel execution |
| **Debugging Guide** | Common exceptions mapped to solutions |
| **Best Practices** | Actionable recommendations for production mobile test code |

## Supported Languages and Frameworks
---

The Appium Agent Skill supports every language TestMu AI runs Appium tests on. Each language guide below covers its frameworks as tabs.

| Language | Frameworks | Guide |
|----------|-----------|-------|
| Java | JUnit, JBehave, Cucumber, TestNG | [Appium with Java](/docs/appium-java/) |
| JavaScript | WebDriverIO, Mocha | [Appium with JavaScript](/docs/appium-nodejs/) |
| Python | Behave, Robot, Gauge, PyTest | [Appium with Python](/docs/appium-python/) |
| Ruby | Cucumber, RSpec | [Appium with Ruby](/docs/appium-ruby/) |
| PHP | Behat | [Appium with PHP](/docs/appium-php/) |
| C# | NUnit | [Appium with C#](/docs/appium-csharp/) |
| Kotlin | N/A | [Appium with Kotlin](/docs/appium-kotlin/) |
| Flutter | N/A | [Testing Flutter Apps](/docs/testing-flutter-apps/) |

## Supported AI Tools
---

Pick the tool you use and install the skill to the corresponding path.

| Tool | Type | Installation Path |
|------|------|-------------------|
| Claude Code | CLI | `.claude/skills/` |
| GitHub Copilot | Extension | `.github/skills/` |
| Cursor | IDE | `.cursor/skills/` |
| Gemini CLI | CLI | `.gemini/skills/` |
| Codex CLI | CLI | `.codex/skills/` |
| OpenCode | CLI | `.opencode/skills/` |
| Claude.ai | Web | Settings > Features > Skills |

## Next Steps
---

Continue with these related guides:

- [Run Your First Appium Test](/support/docs/getting-started-with-appium-testing/)
- [Appium Automation Capabilities](/support/docs/desired-capabilities-in-appium/)
- [Upload Apps to the Real Device Cloud](/support/docs/application-setup-via-api/)

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={`${BRAND_URL}/support/docs/`}>
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
        How to Run Appium Tests With Agent Skills on TestMu AI
      </span>
    </li>
  </ul>
</nav>
