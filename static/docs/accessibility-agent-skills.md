# Run Your Accessibility Tests Using Agent Skills

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Accessibility testing checks your pages against WCAG rules for issues like missing alt text, unlabeled form fields, and low colour contrast. Adding it to a test suite means enabling the right capabilities and triggering scans at the pages you care about. You can hand that off to your AI coding agent instead.

The [`accessibility-skill`](https://github.com/LambdaTest/agent-skills/tree/main/accessibility-skill) is part of [TestMu AI Agent Skills](https://github.com/LambdaTest/agent-skills), a library of instruction packs that give AI coding agents the know-how to build working test automation on TestMu AI. Tell it which pages to scan, and it wires accessibility into your existing framework and runs the scan on the TestMu AI cloud.

## Prerequisites

- A [TestMu AI account](https://accounts.lambdatest.com/register)
- Your TestMu AI **Username** and **Access Key** from the [Automation Dashboard](https://accounts.lambdatest.com/detail/profile)
- An existing Selenium, Playwright, or Cypress suite that runs on the TestMu AI cloud
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

If you prefer installing all available framework skills, clone the repository directly into your tool's skills directory (e.g., `.claude/skills/`, `.cursor/skills/`).

## Set Up Your Authentication

Accessibility scanning runs on the TestMu AI cloud alongside your automation, so it uses your account credentials. Export them as environment variables:

```bash
export LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
export LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```

```powershell
$env:LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
$env:LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```

## How to Run Accessibility Tests Using the Accessibility Skill

Once the skill is installed and your credentials are set, you drive everything through natural-language prompts. Your agent reads the skill, applies the right pattern for your framework, and runs the scan on the TestMu AI cloud. You do not write the capabilities or the scan hooks yourself.

### Step 1: Ask the agent to add accessibility scanning

Describe the pages you want scanned and, if it matters, the WCAG version:

> "Add accessibility scanning to my Selenium suite. Scan the homepage and the checkout page against WCAG 2.1 AA."

From this, the agent will:

- Enable the `accessibility` capability on your driver, along with settings like `accessibility.wcagVersion`
- Add the `lambda-accessibility-scan` hook at the pages you named, or enable `accessibility.autoscan` to scan every navigation on Selenium
- Wire the run to execute your suite on the TestMu AI cloud

### Step 2: Run the accessibility scan

Ask the agent to run it, or run your usual test command yourself:

```bash
mvn test
```

Your suite runs on the TestMu AI cloud, and a WCAG scan is captured at each point the hook is called (or on every navigation, with autoscan).

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
