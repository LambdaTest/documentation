---
id: espresso-agent-skills
title: How to Run Espresso Tests With Agent Skills on TestMu AI
toc_max_heading_level: 2
hide_title: true
sidebar_label: "Run Tests With Agent Skills"
description: Run Espresso tests using AI agent skills on TestMu AI. Generate and execute Android UI automation on real devices from natural-language prompts.
keywords:
  - espresso agent skills
  - ai android test automation
  - espresso ai coding
  - agent skills espresso
  - testmu ai agent skills
  - espresso real device ai
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/espresso-agent-skills/
site_name: TestMu AI
slug: espresso-agent-skills/
canonical: https://www.testmuai.com/support/docs/espresso-agent-skills/
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
          "name": "How to Run Espresso Tests With Agent Skills on TestMu AI",
          "item": `${BRAND_URL}/support/docs/espresso-agent-skills/`
        }]
    })
  }}
></script>

# How to Run Espresso Tests With Agent Skills on TestMu AI
---


Running Espresso tests with Agent Skills on TestMu AI lets your AI coding assistant generate Android UI automation from natural-language prompts, scaffolding Gradle configuration, test code, and cloud execution so you run Espresso suites on real devices without manual setup.

Instead of manually wiring up your Espresso project, use **Agent Skills** to let your AI coding assistant generate production-ready Android UI automation for you. The [espresso-skill](https://github.com/LambdaTest/agent-skills/tree/main/espresso-skill) is part of [TestMu AI Agent Skills](https://github.com/LambdaTest/agent-skills/) - structured packages that teach AI assistants how to write production-grade test code and run it on real devices.

## What Agent Skills Are
---

Self-contained packages of instructions, code patterns, and configurations for a specific testing framework.

Once installed, your AI assistant works like a senior Android QA automation architect with knowledge of:

- Proper Espresso project structure in Java and Kotlin
- Correct Gradle dependencies and build configuration
- Both local and TestMu AI real-device cloud execution patterns
- Common pitfalls and debugging approaches
- CI/CD integration with GitHub Actions

## Prerequisites
---

Make sure you have the following set up before you start.

1. [Create a TestMu AI account](https://www.testmuai.com/register/) if you don't have one.
2. Get your **Username** and **Access Key** from the [TestMu AI Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard).
3. Install an AI coding assistant: [Claude Code](https://claude.ai/code), [GitHub Copilot](https://github.com/features/copilot), [Cursor](https://cursor.sh/), [Gemini CLI](https://github.com/google-gemini/gemini-cli), or any compatible tool.

## Step 1: Install the Espresso Agent Skill
---

Clone the repository and copy the Espresso skill into your AI tool's skills directory.

```bash
git clone https://github.com/LambdaTest/agent-skills.git

# For Claude Code
cp -r agent-skills/espresso-skill .claude/skills/

# For Cursor
cp -r agent-skills/espresso-skill .cursor/skills/

# For GitHub Copilot
cp -r agent-skills/espresso-skill .github/skills/

# For Gemini CLI
cp -r agent-skills/espresso-skill .gemini/skills/
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
"Write an Espresso test for my Android app's login screen and run it on TestMu AI real devices"
```

```
"Set up an Espresso project in Kotlin with a RecyclerView test and run it on TestMu AI"
```

```
"Run my Espresso test suite across a Pixel 7 and a Galaxy S23 in parallel on TestMu AI, tag the build as 'release-v1.0'"
```

The Agent Skill automatically handles:

1. **Project setup** - Creates the right Gradle configuration, dependencies, and instrumentation runner
2. **Language detection** - Maps your request to Java or Kotlin
3. **Execution target** - Configures local or TestMu AI real-device execution based on your request
4. **Best practices** - Uses Espresso idioms (ViewMatchers, ViewActions, ViewAssertions) and IdlingResource for synchronization

## What's Included in the Espresso Skill
---

A breakdown of everything the skill package contains.

```
espresso-skill/
├── SKILL.md
└── reference/
    ├── playbook.md
    └── advanced-patterns.md
```

| Section | Details |
|---------|---------|
| **Project Setup** | Gradle dependencies, instrumentation runner, project structure |
| **Core Patterns** | Complete, runnable code examples with best practices |
| **Cloud Integration** | TestMu AI real-device capabilities and app-upload configuration |
| **CI/CD Integration** | GitHub Actions workflows with reporting and parallel execution |
| **Debugging Guide** | Common build and shard errors mapped to solutions |
| **Best Practices** | Actionable recommendations for production Android test code |

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

- [Run Your First Espresso Test](/support/docs/getting-started-with-espresso-testing/)
- [Espresso Supported Capabilities](/support/docs/espresso-supported-capabilities/)
- [Debug Espresso Tests](/support/docs/debugging-espresso-tests/)

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
        How to Run Espresso Tests With Agent Skills on TestMu AI
      </span>
    </li>
  </ul>
</nav>
