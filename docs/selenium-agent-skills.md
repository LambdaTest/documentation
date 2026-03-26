---
id: selenium-agent-skills
title: Running Your First Selenium Test Using Agent Skills
hide_title: false
sidebar_label: Run Your Test With Agent Skills
description: Learn how to use TestMu AI Agent Skills to generate production-ready Selenium test automation using AI coding assistants like Claude Code, GitHub Copilot, and Cursor.
keywords:
  - selenium agent skills
  - ai test automation
  - selenium ai coding
  - agent skills selenium
  - testmu ai agent skills
  - selenium webdriver ai
url: https://www.testmuai.com/support/docs/selenium-agent-skills/
site_name: TestMu AI
slug: selenium-agent-skills/
canonical: https://www.testmuai.com/support/docs/selenium-agent-skills/
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
          "name": "Selenium Agent Skills",
          "item": "https://www.testmuai.com/support/docs/selenium-agent-skills/"
        }]
    })
  }}
></script>

# Running Your First Selenium Test Using Agent Skills

Instead of manually setting up your Selenium project, you can use **Agent Skills** to let your AI coding assistant generate production-ready Selenium test automation for you.

The [selenium-skill](https://github.com/LambdaTest/agent-skills/tree/main/selenium-skill) is part of [TestMu AI Agent Skills](https://github.com/LambdaTest/agent-skills/)  - structured packages that teach AI coding assistants how to write production-grade test automation code.

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

## Installing the Selenium Agent Skill

Clone the repository and copy the Selenium skill into your AI tool's skills directory:

```bash
git clone https://github.com/LambdaTest/agent-skills.git

# For Claude Code
cp -r agent-skills/selenium-skill .claude/skills/

# For Cursor
cp -r agent-skills/selenium-skill .cursor/skills/

# For GitHub Copilot
cp -r agent-skills/selenium-skill .github/skills/

# For Gemini CLI
cp -r agent-skills/selenium-skill .gemini/skills/
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
"Write Selenium tests for the login page and run them on TestMu AI cloud using Chrome and Firefox"
```

```
"Set up a Selenium Java project with TestNG, Page Object Model, and run tests on TestMu AI"
```

```
"Execute Selenium tests across 5 browsers in parallel on TestMu AI, tag the build as 'release-v1.0'"
```

The Agent Skill automatically handles:

1. **Project setup**  - Creates the right folder structure, dependencies, and config files
2. **Language detection**  - Maps your request to the correct language (Java, Python, JavaScript, C#, Ruby, or PHP)
3. **Execution target**  - Configures local or <BrandName /> cloud execution based on your request
4. **Best practices**  - Uses explicit waits, proper locator strategies, and Page Object Model patterns

## What's Included in the Selenium Skill

```
selenium-skill/
├── SKILL.md
└── reference/
    ├── playbook.md
    └── advanced-patterns.md
```

| Section | Details |
|---------|---------|
| **Project Setup** | Dependencies, versions, configuration files, project structure |
| **Core Patterns** | Complete, runnable code examples with best practices |
| **Cloud Integration** | <BrandName /> RemoteWebDriver and capabilities configuration |
| **CI/CD Integration** | GitHub Actions workflows with reporting and parallel execution |
| **Debugging Guide** | 11+ common exceptions mapped to solutions |
| **Best Practices** | 14+ actionable recommendations for production code |

## Supported Languages and Frameworks

The Selenium Agent Skill supports 6 languages. Additionally, each framework below has its **own dedicated Agent Skill** with framework-specific patterns and configurations:

### Java
| Framework | Agent Skill | Documentation |
|-----------|------------|---------------|
| TestNG | [testng-skill](https://github.com/LambdaTest/agent-skills/tree/main/testng-skill) | [TestNG with Selenium](/docs/testng-with-selenium-running-java-automation-scripts-on-testmu-selenium-grid/) |
| JUnit 5 | [junit-5-skill](https://github.com/LambdaTest/agent-skills/tree/main/junit-5-skill) | [JUnit with Selenium](/docs/junit-with-selenium-running-junit-automation-scripts-on-testmu-selenium-grid/) |
| Cucumber | [cucumber-skill](https://github.com/LambdaTest/agent-skills/tree/main/cucumber-skill) | [Cucumber with Selenium](/docs/running-cucumber-scripts-with-testng-and-selenium/) |
| Selenide | [selenide-skill](https://github.com/LambdaTest/agent-skills/tree/main/selenide-skill) | [Selenide Framework](/docs/selenide-tests-with-testmu-online-selenium-grid-for-automated-cross-browser-testing/) |
| Gauge | [gauge-skill](https://github.com/LambdaTest/agent-skills/tree/main/gauge-skill) | [Gauge Framework](/docs/running-gauge-tests-on-testmu-selenium-grid/) |
| Geb | [geb-skill](https://github.com/LambdaTest/agent-skills/tree/main/geb-skill) | [Geb Framework](/docs/run-geb-tests-on-selenium-grid/) |
| Serenity BDD | [serenity-bdd-skill](https://github.com/LambdaTest/agent-skills/tree/main/serenity-bdd-skill) | [Serenity BDD](/docs/serenity-test-on-selenium-grid/) |

### JavaScript
| Framework | Agent Skill | Documentation |
|-----------|------------|---------------|
| Mocha | [mocha-skill](https://github.com/LambdaTest/agent-skills/tree/main/mocha-skill) | [Mocha with Selenium](/docs/automation-testing-with-mocha-and-selenium/) |
| Jest | [jest-skill](https://github.com/LambdaTest/agent-skills/tree/main/jest-skill) | [Jest with Selenium](/docs/automation-testing-with-selenium-and-jest/) |
| WebdriverIO | [webdriverio-skill](https://github.com/LambdaTest/agent-skills/tree/main/webdriverio-skill) | [WebdriverIO](/docs/webdriverio-with-selenium-running-webdriverio-automation-scripts-on-testmu-selenium-grid/) |
| Nightwatch.js | [nightwatchjs-skill](https://github.com/LambdaTest/agent-skills/tree/main/nightwatchjs-skill) | [Nightwatch.js](/docs/nightwatch-with-selenium-running-nightwatch-automation-scripts-on-testmu-selenium-grid/) |
| Protractor | [protractor-skill](https://github.com/LambdaTest/agent-skills/tree/main/protractor-skill) | [Protractor](/docs/protractor-with-selenium-running-protractor-automation-scripts-on-testmu-selenium-grid/) |
| TestCafe | [testcafe-skill](https://github.com/LambdaTest/agent-skills/tree/main/testcafe-skill) | [TestCafe](/docs/npm-plugin-for-testcafe-integration-with-testmu/) |
| Jasmine | [jasmine-skill](https://github.com/LambdaTest/agent-skills/tree/main/jasmine-skill) | [Jasmine with Karma](/docs/jasmine-with-karma-running-jasmine-tests-on-testmu-selenium-grid/) |
| Karma | [karma-skill](https://github.com/LambdaTest/agent-skills/tree/main/karma-skill) | [Karma Integration](/docs/karma-integration-with-testmu/) |
| CucumberJS | [cucumber-skill](https://github.com/LambdaTest/agent-skills/tree/main/cucumber-skill) | [CucumberJS](/docs/cucumberjs-with-selenium-running-cucumberjs-automation-scripts-on-testmu-selenium-grid/) |
| NemoJS | [nemojs-skill](https://github.com/LambdaTest/agent-skills/tree/main/nemojs-skill) | [NemoJS](/docs/selenium-tests-with-nemojs/) |

### C#
| Framework | Agent Skill | Documentation |
|-----------|------------|---------------|
| NUnit | [nunit-skill](https://github.com/LambdaTest/agent-skills/tree/main/nunit-skill) | [NUnit with Selenium](/docs/nunit-with-selenium-running-nunit-automation-scripts-on-testmu-selenium-grid/) |
| MSTest | [mstest-skill](https://github.com/LambdaTest/agent-skills/tree/main/mstest-skill) | [MSTest with Selenium](/docs/mstest-with-selenium-running-mstest-automation-scripts-on-testmu-selenium-grid/) |
| xUnit | [xunit-skill](https://github.com/LambdaTest/agent-skills/tree/main/xunit-skill) | [xUnit with Selenium](/docs/selenium-with-xunit/) |
| SpecFlow | [specflow-skill](https://github.com/LambdaTest/agent-skills/tree/main/specflow-skill) | [SpecFlow with Selenium](/docs/specflow-with-selenium-running-specflow-automation-scripts-on-testmu-selenium-grid/) |

### Python
| Framework | Agent Skill | Documentation |
|-----------|------------|---------------|
| pytest | [pytest-skill](https://github.com/LambdaTest/agent-skills/tree/main/pytest-skill) | [pytest with Selenium](/docs/pytest-with-selenium-running-pytest-automation-script-on-testmu-selenium-grid/) |
| unittest | [unittest-skill](https://github.com/LambdaTest/agent-skills/tree/main/unittest-skill) | [unittest](/docs/running-unit-testing-in-python-on-testmu-selenium-grid/) |
| Robot Framework | [robot-framework-skill](https://github.com/LambdaTest/agent-skills/tree/main/robot-framework-skill) | [Robot Framework](/docs/robot-with-selenium-running-robot-automation-scripts-on-testmu-selenium-grid/) |
| Behave | [behave-skill](https://github.com/LambdaTest/agent-skills/tree/main/behave-skill) | [Behave with Selenium](/docs/behave-with-selenium-running-behave-automation-scripts-on-testmu-selenium-grid/) |
| Lettuce | [lettuce-skill](https://github.com/LambdaTest/agent-skills/tree/main/lettuce-skill) | [Lettuce with Selenium](/docs/automation-testing-selenium-with-lettuce/) |

### PHP
| Framework | Agent Skill | Documentation |
|-----------|------------|---------------|
| PHPUnit | [phpunit-skill](https://github.com/LambdaTest/agent-skills/tree/main/phpunit-skill) | [PHPUnit](/docs/phpunit-with-selenium-running-phpunit-automation-scripts-on-testmu-selenium-grid/) |
| Behat | [behat-skill](https://github.com/LambdaTest/agent-skills/tree/main/behat-skill) | [Behat](/docs/behat-with-selenium-running-behat-automation-scripts-on-testmu-selenium-grid/) |
| Laravel Dusk | [laravel-dusk-skill](https://github.com/LambdaTest/agent-skills/tree/main/laravel-dusk-skill) | [Laravel Dusk](/docs/laravel-dusk-with-selenium-running-laravel-dusk-automation-scripts-on-testmu-selenium-grid/) |
| Codeception | [codeception-skill](https://github.com/LambdaTest/agent-skills/tree/main/codeception-skill) | [Codeception](/docs/codeception-integration-with-testmu/) |

### Ruby
| Framework | Agent Skill | Documentation |
|-----------|------------|---------------|
| RSpec | [rspec-skill](https://github.com/LambdaTest/agent-skills/tree/main/rspec-skill) | [RSpec](/docs/rspec-with-selenium-running-rspec-automation-scripts-on-testmu-selenium-grid/) |
| Capybara | [capybara-skill](https://github.com/LambdaTest/agent-skills/tree/main/capybara-skill) | [Capybara](/docs/ruby-with-capybara-running-automation-scripts-on-testmu-selenium-grid/) |
| Test::Unit | [testunit-skill](https://github.com/LambdaTest/agent-skills/tree/main/testunit-skill) | [Test::Unit](/docs/testunit-with-selenium-running-testunit-automation-scripts-on-testmu-selenium-grid/) |

## Supported AI Tools

| Tool | Type | Installation Path |
|------|------|-------------------|
| Claude Code | CLI | `.claude/skills/` |
| GitHub Copilot | Extension | `.github/skills/` |
| Cursor | IDE | `.cursor/skills/` |
| Gemini CLI | CLI | `.gemini/skills/` |
| Codex CLI | CLI | `.codex/skills/` |
| OpenCode | CLI | `.opencode/skills/` |
| Claude.ai | Web | Settings → Features → Skills |

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
        Selenium Agent Skills
      </span>
    </li>
  </ul>
</nav>
