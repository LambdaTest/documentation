---
id: accessibility-testing
title: Getting Started with Accessibility Testing
sidebar_label: Getting Started
description: Overview of TestMu AI Accessibility Testing across web, mobile apps, reports, checklists, and integrated product surfaces. Includes quick setup to get your first report.
slug: accessibility-testing/
---

# Getting Started with Accessibility Testing

TestMu AI Accessibility Testing helps teams find, understand, and fix accessibility issues across websites, web apps, and mobile apps.

## What Accessibility Testing covers

- **Manual Testing (DevTools)** -- browser-based scanning and assisted testing for websites and web apps.
- **Automation** -- automated accessibility checks in supported test frameworks (Selenium, Cypress, Playwright, and more).
- **Test Scheduling** -- recurring site scans driven by sitemaps, crawlers, or manual URL lists inside the Accessibility product (not the same doc set as the standalone Web Scanner product).
- **Web Scanner** -- the separate **Web Scanner** product in the docs sidebar, where you add URLs and run accessibility scans on that surface. Use Accessibility **Test Scheduling** when your workflow is native to Accessibility scheduling, not Web Scanner.
- **Mobile App Testing** -- manual and automated accessibility testing for native Android and iOS apps, including KaneAI-authored flows.
- **Reports** -- dashboard, issue views, [exporting and sharing](/support/docs/accessibility-exporting-sharing-reports/), passed tests, and bug reporting (issue-tracker connections live under **External integrations** in the sidebar, not inside Reports).
- **Integrations** (sidebar) -- **Integrations with TestMu AI products** (Web Scanner, KaneAI, HyperExecute with Selenium, and related surfaces) and **External integrations** (CI/CD, Jira/Slack) for how Accessibility connects to the rest of your toolchain.
- **Features** (sidebar: **Web**, then **Mobile**, then **Common**) -- **Web**: hide/restore, AI issue detection, capture screenshot, web score, fragment identifier, and PDF scanning; **Mobile**: scan tags; **Common**: remediation guidance and analytics widgets.
- **Checklists** -- coverage summaries, WCAG rule repositories, and manual verification guidance.
- **Accessibility MCP Server** -- AI-assisted accessibility analysis only. For installing and configuring the **platform-wide** TestMu AI MCP Server (all tools), use [TestMu AI MCP Server](/support/docs/testmu-mcp-server/) in the main docs sidebar.

## Choose your path

| If you want to... | Start here |
|-----|-----|
| Test a website manually | [Manual Testing (DevTools)](/support/docs/accessibility-devtools/) |
| Run your first browser scan quickly | [Run a Quick Scan](/support/docs/accessibility-testing-run-quick-scan/) |
| Run automated web tests | [Automation](/support/docs/accessibility-automation/) |
| Schedule recurring scans | [Test Scheduling](/support/docs/accessibility-test-scheduling/) |
| Use Web Scanner for scans | [Web Scanner](/support/docs/web-scanner-getting-started/) |
| Test a mobile app manually | [Manual App Scanner](/support/docs/accessibility-app-scanner/) |
| Run mobile automation | [Appium Automation](/support/docs/accessibility-native-app-automation-test/) |
| Author mobile flows in KaneAI | [KaneAI Mobile App Testing](/support/docs/kaneai-mobile-app-accessibility/) |
| View reports and issues | [Reports](/support/docs/accessibility-testing-navigating-dashboard/) |
| Connect CI/CD or Jira/Slack | [CI/CD Integration Guide](/support/docs/accessibility-cicd-integration-guide/) · [Integrations (Jira / Slack)](/support/docs/accessibility-report-integrations/) |
| Look up supported rules and gaps | [Web](/support/docs/accessibility-web-what-we-cover/) · [iOS](/support/docs/accessibility-ios-what-we-cover/) · [Android](/support/docs/accessibility-android-what-we-cover/) |
| Use AI-assisted analysis | [Accessibility MCP Server](/support/docs/accessibility-mcp-server/) |

Not sure which tool fits? See [Choose Your Tool](/support/docs/accessibility-choosing-the-right-tool/) for a detailed comparison.

## Quick setup

Use this section when you want the fastest path from "I need to test accessibility" to "I have my first report."

### Prerequisites

- Access to the Accessibility feature for your account
- A website, web app, or mobile app you are authorized to test
- The correct browser, device, framework, or scan surface for your use case

### First-run checklist

1. Pick the right product surface from the table above.
2. Confirm whether your flow is manual, automated, scheduled, or integrated through Web Scanner or KaneAI.
3. Run the scan.
4. Open the report in the [dashboard](/support/docs/accessibility-testing-navigating-dashboard/).
5. Review issue counts, severity, and next actions.

### Common mistakes to avoid

- Using DevTools when you actually need scheduled or automated execution.
- Using Web Scanner docs for the Accessibility-native scheduling surface.
- Using KaneAI guidance when your team is running direct Appium automation.

## Accessibility standards

Accessibility Testing helps you work toward standards such as WCAG, ADA, EAA, and Section 508. Automated testing covers many rules, but it does not replace manual verification for every accessibility requirement. See the [Web](/support/docs/accessibility-web-what-we-cover/), [iOS](/support/docs/accessibility-ios-what-we-cover/), and [Android](/support/docs/accessibility-android-what-we-cover/) checklists for supported rules plus each platform’s **manual test checklist**, with links into each rule repository.
