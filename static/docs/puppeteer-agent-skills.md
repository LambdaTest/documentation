# Run Your Puppeteer Tests Using Agent Skills

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Instead of manually setting up your Puppeteer project, you can use **Agent Skills** to let your AI coding assistant generate production-ready Puppeteer automation for you.

The [puppeteer-skill](https://github.com/LambdaTest/agent-skills/tree/main/puppeteer-skill) is part of [TestMu AI Agent Skills](https://github.com/LambdaTest/agent-skills/) - structured packages that teach AI coding assistants how to write production-grade test automation code.

## What Are Agent Skills?

Agent Skills are self-contained packages of instructions, code patterns, debugging guides, and CI/CD configurations for specific testing frameworks. Once installed, your AI assistant works like a **Senior QA automation architect** with knowledge of:

- Proper project structure for each framework
- Correct dependency versions and configurations
- Both local and TestMu AI cloud execution patterns
- Common pitfalls and debugging approaches
- CI/CD integration with GitHub Actions

## Prerequisites

- A TestMu AI account. If you don't have one, sign up for free.
- Your TestMu AI **Username** and **Access Key** from the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/).
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

If you prefer installing **all available framework skills**, clone the repository directly into your tool's skills directory (e.g., `.claude/skills/`, `.cursor/skills/`).

## Set Up Your Authentication

Configure your TestMu AI credentials as environment variables:

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
3. **Execution target** - Configures local or TestMu AI cloud execution via CDP WebSocket
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
| **Cloud Integration** | TestMu AI CDP WebSocket connection and capabilities configuration |
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
