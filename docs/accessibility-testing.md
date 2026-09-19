---
id: accessibility-testing
title: Getting Started with Accessibility Testing
sidebar_label: Overview
description: Overview of TestMu AI Accessibility Testing across web, mobile apps, reports, and checklists, with quick setup to get your first report.
slug: accessibility-testing/
toc_max_heading_level: 2
---

# Getting Started with Accessibility Testing

---

TestMu AI Accessibility Testing is a suite for finding, understanding, and fixing accessibility issues across websites, web apps, and native mobile apps. It combines browser-based scanning, framework automation, real-device app testing, assistive-technology checks, scheduled scans, and a reporting dashboard so teams can work toward standards such as WCAG, ADA, EAA, and Section 508 from a single product.

## What each section covers

The documentation is organized so you can move from a first scan to automation, reporting, and compliance without leaving the Accessibility product.

- **Getting Started**: onboarding paths, including [Test With Browser DevTools](/support/docs/accessibility-devtools/), [Test With Native App Scanner](/support/docs/accessibility-app-scanner/), [Automate Your First Accessibility Test](/support/docs/accessibility-automation-test/), [Run Tests With Agent Skills](/support/docs/accessibility-agent-skills/), [Supported Automation Capabilities](/support/docs/accessibility-automation-scan-configurations/), [Test With Assistive Technologies](/support/docs/screen-reader-on-accessibility/), [View Reports](/support/docs/accessibility-testing-navigating-dashboard/), and [Test Scheduling](/support/docs/accessibility-test-scheduling/).
- **Supported Languages & Frameworks**: framework-native accessibility checks for [Selenium](/support/docs/accessibility-testng-test/), [Cypress](/support/docs/cypress-v10-accessibility-test/), [Playwright](/support/docs/playwright-accessibility-test/), and [Appium](/support/docs/accessibility-native-app-automation-test/).
- **Features**: product options that extend scans and reports, such as issue detection, screenshots, tags, remediation guidance, and analytics widgets.
- **Checklist**: what automation covers per platform, plus the manual test checklist, in the [accessibility checklist](/support/docs/accessibility-web-what-we-cover/).
- **Rule Repository**: rule-level definitions and remediation text in the [accessibility rule repository](/support/docs/accessibility-rule-repository/).
- **Web Scanner**: URL-based accessibility scanning from the separate [Web Scanner](/support/docs/web-scanner-getting-started/) product.
- **Integrations**: how Accessibility connects to your toolchain through the [CI/CD integration guide](/support/docs/accessibility-cicd-integration-guide/) and [JIRA and Slack report integrations](/support/docs/accessibility-report-integrations/).
- **References**: supporting material, including [accessibility FAQs](/support/docs/accessibility-faq/), [supported WCAG standards and browsers](/support/docs/accessibility-supported-wcag-browsers/), the [accessibility compliance guide](/support/docs/accessibility-compliance-guide/), and [VPAT report generation](/support/docs/accessibility-vpat-report-generation/).

## Choose your path

Pick the surface that matches your workflow and jump straight into its setup guide.

| If you want to... | Start here |
|-----|-----|
| Run your first browser scan quickly | [Run a quick scan](/support/docs/accessibility-devtools/#run-a-quick-scan) |
| Install the browser toolkit | [Install the toolkit](/support/docs/accessibility-devtools/#install-the-toolkit) |
| Create a recurring scheduled scan | [Create a scheduled scan](/support/docs/accessibility-test-scheduling/#create-a-scheduled-scan) |
| View issues after a scan | [Issue summary](/support/docs/accessibility-testing-navigating-dashboard/#issue-summary) |
| Test a keyboard-only flow | [Keyboard scan](/support/docs/accessibility-devtools/#keyboard-scan) |

Not sure which tool fits? See [Choose the Right Tool](#choose-the-right-tool) for a detailed comparison of every surface.

## Quick setup

Use this section for the fastest path from "I need to test accessibility" to "I have my first report."

### Prerequisites

- Access to the Accessibility feature for your account
- A website, web app, or mobile app you are authorized to test
- The correct browser, device, framework, or scan surface for your use case

### First-run checklist

1. Pick the right product surface from the table above.
2. Confirm whether your flow is manual, automated, scheduled, or integrated through Web Scanner.
3. Run the scan.
4. Open the report in the [dashboard](/support/docs/accessibility-testing-navigating-dashboard/).
5. Review issue counts, severity, and next actions.

### Common mistakes to avoid

- Using DevTools when you actually need scheduled or automated execution.
- Using the Web Scanner product when your workflow is native to Accessibility scheduling.
- Running raw Appium automation when your team authors flows with agent skills, or the reverse.

## How scan consumption works

Understand what triggers a billable scan before you scale up a suite, so counts stay predictable.

Accessibility scan consumption is based on **how scans are triggered**, not on the number of unique URLs visited or the number of DOM changes on a page.

### Manual scan (`lambda-accessibility-scan`)

- Each scan hook invocation consumes **1 accessibility scan**.
- Calling the hook 3 times consumes 3 scans, regardless of how many automation commands run in between.
- Calling the hook twice on the same page consumes 2 scans.

### AutoScan (`accessibility.autoscan: true`)

- A scan is triggered by **interactive automation commands** such as navigation, clicks, and `executeScript()`.
- Each such command consumes **1 accessibility scan**.
- **Read only operations do not consume scans.** Examples are `findElement()`, explicit waits, and attribute reads.

In short, consumption is determined by the automation actions that trigger a scan, not by unique URLs or DOM changes. On an interaction heavy flow this matters, because every interaction on the same page counts as its own scan, so autoScan can consume more scans than the number of pages the test visits. Use the `lambda-accessibility-scan` hook when you want to control exactly how many scans a run consumes. See [Automating Accessibility Testing with Selenium](/support/docs/accessibility-automation-test/) for both approaches.

:::note
autoScan applies to **web** automation. On real devices, app automation scans are triggered only by the `lambda-accessibility-scan` hook, so each hook call is 1 scan. See [Native App Automation](/support/docs/accessibility-native-app-automation-test/).
:::

## Accessibility standards

Automated checks accelerate compliance, but they cover only part of every standard.

Accessibility Testing helps you work toward standards such as WCAG, ADA, EAA, and Section 508. Automated testing covers many rules, but it does not replace manual verification for every accessibility requirement. See the [accessibility checklist](/support/docs/accessibility-web-what-we-cover/) for the rules automation covers per platform plus each platform's manual test checklist.

## Related accessibility guides

Extend your coverage with complementary tooling and assistive-technology testing.

- [Accessibility Testing with Deque's axe](/support/docs/deque-integration/): run automated accessibility checks using Deque's axe across 3000+ browsers.
- [Screen Reader and VoiceOver on Real Devices](/support/docs/screen-reader-voiceover-real-devices-browser/): perform manual screen reader and VoiceOver testing on real devices.
- [Accessibility NUnit C# Test](/support/docs/accessibility-testng-test/): run automated accessibility checks from an NUnit (C#) test.

## Choose the Right Tool

Match your situation to a starting doc, then follow the linked guides for setup and onboarding.

TestMu AI Accessibility Testing spans browser DevTools, web automation, scheduled and Web Scanner scans, native mobile (manual and Appium), reports, checklists, and optional AI and agent-skill workflows. Each subsection below tells you when to reach for a surface and where to begin.

**Scheduling vs Web Scanner:** scheduling is the **Accessibility-native** recurring flow, while Web Scanner is a **separate product** for URL-based scans. If you are unsure, review the [DevTools product boundary](/support/docs/accessibility-devtools/#product-boundary) and the [scheduling product boundary](/support/docs/accessibility-test-scheduling/#product-boundary).

### Use DevTools when

- you want **manual** or browser-assisted scanning on a live page
- you need quick investigation without writing test code
- you want scan types such as [full page scan](/support/docs/accessibility-devtools/#full-page-scan), [partial page scan](/support/docs/accessibility-devtools/#partial-page-scan), [multi-page scan](/support/docs/accessibility-devtools/#multi-page-scan), [workflow scan](/support/docs/accessibility-devtools/#workflow-scan), or [keyboard scan](/support/docs/accessibility-devtools/#keyboard-scan)
- you need to tune extension behavior in [DevTools settings](/support/docs/accessibility-devtools/#devtools-settings) or [update the DevTools extension](/support/docs/accessibility-devtools/#update-the-devtools-extension)

**Start:** [Install the toolkit](/support/docs/accessibility-devtools/#install-the-toolkit) if you have not installed the extension yet.

### Use Automation when

- you want accessibility checks inside **automated** test runs (CI/CD, nightly builds)
- you need **regression** coverage tied to the same suite as functional tests
- you use a supported **web** stack on the grid

**Hub doc:** [Automate your first accessibility test](/support/docs/accessibility-automation-test/) covers Chrome/Edge, capabilities, and the `lambda-accessibility-scan` hook vs `accessibility.autoscan`.

**Framework-specific entry points:**

- [Selenium accessibility testing](/support/docs/accessibility-testng-test/)
- [Cypress accessibility testing](/support/docs/cypress-v10-accessibility-test/)
- [Playwright accessibility testing](/support/docs/playwright-accessibility-test/)

**Configuration and pipeline:**

- [Supported automation capabilities](/support/docs/accessibility-automation-scan-configurations/) for WCAG version, best practice, and needs-review settings
- [CI/CD integration guide](/support/docs/accessibility-cicd-integration-guide/)

### Use Test Scheduling when

- you want **recurring** site scans without opening DevTools each time
- you need **sitemap**, **CSV**, or **crawler**-driven URL discovery
- you want the **Accessibility-native** scheduling surface, not the Web Scanner app

**Start:** [Test scheduling](/support/docs/accessibility-test-scheduling/#create-a-scheduled-scan) to create your first scheduled scan.

### Use App Scanner (Manual) when

- you are validating **native Android or iOS** screens interactively
- you want to inspect issues **screen by screen** on real devices without Appium

**Start:** [Test with native app scanner](/support/docs/accessibility-app-scanner/).

### Use Native App Automation when

- you already run **Appium** for mobile functional tests
- you want **`lambda-accessibility-scan`** checkpoints and dashboard reports from those runs

**Start:** [Native app automation with Appium](/support/docs/accessibility-native-app-automation-test/).

### Use Agent Skills when

- you want to drive accessibility scans through **AI agent skills** rather than maintaining raw automation projects
- you want to insert accessibility scan steps inside an **agent-authored** flow

**Start:** [Run tests with agent skills](/support/docs/accessibility-agent-skills/).

### Use Web Scanner when

- you are already inside the **Web Scanner** product
- you want **URL-based** accessibility scanning from that workflow (wizard, scheduling tab, etc.)
- you do **not** need DevTools or framework automation to start

**Start:** [Getting started with Web Scanner](/support/docs/web-scanner-getting-started/).

### Use Reports when

- you need the **dashboard**, issue breakdowns, exports, or ticketing handoff after any scan type

**Core flow:** [View reports](/support/docs/accessibility-testing-navigating-dashboard/) then drill into the [issue summary](/support/docs/accessibility-testing-navigating-dashboard/#issue-summary), [all issues](/support/docs/accessibility-testing-navigating-dashboard/#all-issues), and the [accessibility score](/support/docs/accessibility-testing-navigating-dashboard/#accessibility-score) when enabled.

**Sharing and tracking:**

- [Exporting and sharing reports](/support/docs/accessibility-testing-navigating-dashboard/#exporting-and-sharing-reports)
- [JIRA and Slack integrations](/support/docs/accessibility-report-integrations/)
- [Report a bug](/support/docs/accessibility-testing-navigating-dashboard/#report-a-bug)
- [Passed test cases](/support/docs/accessibility-testing-navigating-dashboard/#passed-test-cases)

### Use Screen Reader testing when

- you must validate behavior with **assistive technology** (not only automated rules)

**Hub:** [Test with assistive technologies](/support/docs/screen-reader-on-accessibility/).

**By platform:**

- [NVDA on Windows](/support/docs/screen-reader-on-accessibility/#nvda-on-windows)
- [JAWS on Windows](/support/docs/screen-reader-on-accessibility/#jaws-on-windows)
- [VoiceOver on macOS](/support/docs/screen-reader-on-accessibility/#voiceover-on-macos)
- [TalkBack on Android](/support/docs/screen-reader-on-accessibility/#talkback-on-android)

### Use Checklists and Rule References when

- you need to know **which WCAG-aligned rules** automation covers **per platform**
- you want the **manual test checklist** (beyond automated rules) in one glance
- you need **rule-level** remediation text

**Coverage:** [accessibility checklist](/support/docs/accessibility-web-what-we-cover/) for per-platform coverage and the [accessibility rule repository](/support/docs/accessibility-rule-repository/) for rule-level definitions.

**Compliance framing (not legal advice):** [Accessibility compliance guide](/support/docs/accessibility-compliance-guide/) and [VPAT report generation](/support/docs/accessibility-vpat-report-generation/) for customer-owned ACR evidence templates.

### Use Accessibility MCP Server when

- you want **AI-assisted** accessibility analysis through an **MCP-compatible** client, scoped to **Accessibility** workflows

**Doc:** [Accessibility MCP Server](/support/docs/accessibility-mcp-server/).

For platform-wide MCP setup across all tools, use the [TestMu AI MCP Server](/support/docs/testmu-mcp-server/), then return here for accessibility-specific usage.
