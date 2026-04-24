---
id: accessibility-choosing-the-right-tool
title: Choosing the Right Accessibility Tool
sidebar_label: Choosing the Right Accessibility Tool
description: Pick DevTools, Automation, Test Scheduling, Web Scanner, mobile paths, reports, checklists, or MCP based on your workflow—with links to each doc.
keywords:
  - TestMu AI
  - Accessibility
  - DevTools
  - Automation
  - Web Scanner
  - Appium
url: https://www.testmuai.com/support/docs/accessibility-choosing-the-right-tool/
site_name: TestMu AI
slug: accessibility-choosing-the-right-tool/
canonical: https://www.testmuai.com/support/docs/accessibility-choosing-the-right-tool/
---

# Choosing the Right Accessibility Tool

TestMu AI **Accessibility Testing** spans browser DevTools, web automation, scheduled and Web Scanner scans, native mobile (manual and Appium), reports, checklists, and optional AI/MCP workflows. Use this page as a **router**: match your situation to a starting doc, then follow the linked guides for setup and onboarding.

If you are new to the product, read **[Getting Started with Accessibility Testing](/support/docs/accessibility-testing/)** first—it lists every major path in one place.

---

## Quick decision table

| I need to… | Start here |
|------------|----------------|
| Manually scan a website in the browser | [Accessibility DevTools (Overview)](/support/docs/accessibility-devtools/) |
| Run accessibility inside Selenium/Cypress/Playwright/etc. | [Accessibility Automation (Overview)](/support/docs/accessibility-automation/) → your [framework doc](#use-automation-when) |
| Schedule recurring scans inside Accessibility (sitemap/CSV/crawler) | [Test Scheduling - Sitemap (Overview)](/support/docs/accessibility-test-scheduling/) |
| Run scans from the **Web Scanner** product | [Getting Started with Web Scanner](/support/docs/web-scanner-getting-started/) → [Starting an Accessibility Scan with Web Scanner](/support/docs/web-scanner-accessibility-scan/) |
| Manually test a **native app** on a real device | [Accessibility App Scanner (Overview)](/support/docs/accessibility-app-scanner/) |
| Get accessibility from **Appium** code | [Native App Automation Appium (Overview)](/support/docs/accessibility-native-app-automation-test/) |
| Author mobile flows in **KaneAI** with scans | [KaneAI Mobile App Testing](/support/docs/kaneai-mobile-app-accessibility/) |
| Read dashboards, exports, and triage | [Navigating the Dashboard](/support/docs/accessibility-testing-navigating-dashboard/) |
| See what automation covers vs manual gaps | [Web](/support/docs/accessibility-web-what-we-cover/) · [iOS](/support/docs/accessibility-ios-what-we-cover/) · [Android](/support/docs/accessibility-android-what-we-cover/) checklists |
| Use **AI** or MCP for analysis | [Accessibility MCP Server](/support/docs/accessibility-mcp-server/) (accessibility-only) vs [TestMu AI MCP Server](/support/docs/testmu-mcp-server/) (platform-wide) |

**Scheduling vs Web Scanner:** [Test Scheduling](/support/docs/accessibility-test-scheduling/) is the **Accessibility-native** recurring flow. [Web Scanner](/support/docs/web-scanner-getting-started/) is a **separate product** for URL-based scans. If you are unsure, compare [Accessibility DevTools (Overview)](/support/docs/accessibility-devtools/) (product boundary) and [Test Scheduling product boundary](/support/docs/accessibility-test-scheduling/#product-boundary).

---

## Use DevTools when

- you want **manual** or browser-assisted scanning on a live page
- you need quick investigation without writing test code
- you want scan types such as [quick scan](/support/docs/accessibility-testing-run-quick-scan/), [full page](/support/docs/accessibility-testing-full-page-scanner/), [partial page](/support/docs/accessibility-testing-partial-page-scanner/), [multi-page](/support/docs/accessibility-testing-multi-page-scanner/), [workflow](/support/docs/accessibility-testing-workflow-scanner/), or [keyboard](/support/docs/accessibility-keyboard-scan/) scan
- you need to tune DevTools behavior—see [DevTools Settings](/support/docs/accessibility-devtools-settings/) and [Update DevTools](/support/docs/accessibility-update-devtools-extension/)

**Start:** [Accessibility DevTools (Overview)](/support/docs/accessibility-devtools/) → [Install Toolkit](/support/docs/accessibility-testing-install-devtools/) if you have not installed the extension yet.

---

## Use Automation when

- you want accessibility checks inside **automated** test runs (CI/CD, nightly builds)
- you need **regression** coverage tied to the same suite as functional tests
- you use a supported **web** stack on the grid

**Hub doc:** [Automating Accessibility Testing with Selenium](/support/docs/accessibility-automation-test/) (Chrome/Edge, capabilities, `lambda-accessibility-scan` hook vs `accessibility.autoscan`).

**Framework-specific entry points:**

- [Selenium](/support/docs/accessibility-automation-test/) (Java-oriented hub; same capability model for other JVM languages where applicable)
- [Cypress v10](/support/docs/cypress-v10-accessibility-test/) · [Cypress v9 (Legacy)](/support/docs/cypress-v9-accessibility-test/)
- [Playwright](/support/docs/playwright-accessibility-test/)
- [TestNG](/support/docs/accessibility-testng-test/) · [JUnit 5](/support/docs/accessibility-junit5-test/)
- [NUnit (C#)](/support/docs/accessibility-nunit-csharp-test/)
- [Robot Framework](/support/docs/accessibility-robot-framework-test/)
- [Cucumber (Java)](/support/docs/accessibility-cucumber-java-test/)
- [HyperExecute integration — Selenium accessibility](/support/docs/selenium-hyperexecute-accessibility-tests/)

**Configuration and pipeline:**

- [Configure Accessibility Automation](/support/docs/accessibility-automation-settings/) (WCAG version, best practice, needs review; listed as “Automation Settings” in the sidebar in some releases)
- [CI/CD Integration Guide](/support/docs/accessibility-cicd-integration-guide/)

---

## Use Test Scheduling when

- you want **recurring** site scans without opening DevTools each time
- you need **sitemap**, **CSV**, or **crawler**-driven URL discovery
- you want the **Accessibility-native** scheduling surface—not the Web Scanner app

**Start:** [Test Scheduling - Sitemap (Overview)](/support/docs/accessibility-test-scheduling/).

**Common next steps:**

- [Sitemap Extraction & URL Import](/support/docs/accessibility-sitemap-extraction-url-import/)
- [Create Scheduled Scan](/support/docs/accessibility-test-scheduling-scan/) · [Edit Scheduled Scan](/support/docs/accessibility-test-scheduling-edit/)
- [Crawler](/support/docs/accessibility-test-crawler/)

**Advanced URL grouping:** If hash-based routes should split issues, enable [Fragment Identifier](/support/docs/accessibility-fragment-identifier/) in DevTools settings (web URL grouping context).

---

## Use App Scanner (Manual) when

- you are validating **native Android or iOS** screens interactively
- you want to inspect issues **screen by screen** on real devices without Appium

**Start:** [Accessibility App Scanner (Overview)](/support/docs/accessibility-app-scanner/).

**Contrast with automation:** [Native App Automation Appium (Overview)](/support/docs/accessibility-native-app-automation-test/) · [Appium TestNG](/support/docs/accessibility-appium-testng/) · [Appium WebdriverIO](/support/docs/accessibility-appium-webdriverio/).

---

## Use Native App Automation when

- you already run **Appium** for mobile functional tests
- you want **`lambda-accessibility-scan`** checkpoints and dashboard reports from those runs

**Start:** [Native App Automation Appium (Overview)](/support/docs/accessibility-native-app-automation-test/).

**Tags:** [Tag Support for Accessibility Scans](/support/docs/accessibility-tag-support/) when you need scan metadata across runs.

---

## Use Web Scanner when

- you are already inside the **Web Scanner** product
- you want **URL-based** accessibility scanning from that workflow (wizard, scheduling tab, etc.)
- you do **not** need DevTools or framework automation to start

**Start:** [Getting Started with Web Scanner](/support/docs/web-scanner-getting-started/) → [Starting an Accessibility Scan with Web Scanner](/support/docs/web-scanner-accessibility-scan/).

**Also useful:** [Adding URLs](/support/docs/web-scanner-adding-urls/) · [Scheduling Options](/support/docs/web-scanner-scheduling-options/) · [Advanced Features](/support/docs/web-scanner-advanced-features/).

---

## Use KaneAI when

- you are **authoring** a mobile test in KaneAI (not maintaining raw Appium projects)
- you want to insert accessibility scan steps inside the **authored** flow

**Start:** [KaneAI Mobile App Testing](/support/docs/kaneai-mobile-app-accessibility/).

---

## Use Reports when

- you need the **dashboard**, issue breakdowns, exports, or ticketing handoff after any scan type

**Core flow:** [Navigating the Dashboard](/support/docs/accessibility-testing-navigating-dashboard/) → [Issue Summary](/support/docs/accessibility-testing-dashboard-issue-summary/) → [All Issues](/support/docs/accessibility-testing-dashboard-all-issues/) (reports may also surface **[Accessibility Web Score](/support/docs/accessibility-web-score/)** when enabled).

**Sharing and tracking:**

- [Exporting & Sharing Reports](/support/docs/accessibility-exporting-sharing-reports/)
- [Integrations (Jira / Slack)](/support/docs/accessibility-report-integrations/)
- [Bug Report](/support/docs/accessibility-report-bug/)
- [Passed Test Cases](/support/docs/accessibility-passed-test-cases/) (fuller pass/fail story when enabled)

---

## Use Features (product options) when

- you need **hide/restore**, **AI issue detection**, **PDF** scans, **screenshots**, **tags**, **fragment identifiers**, **analytics widgets**, or deep **remediation** guidance alongside reports

In the sidebar, **Features** is grouped as **Web**, **Mobile**, and **Common** (same order as below).

### Web

- [Hide and Restore Issues](/support/docs/accessibility-hide-restore-issues/)
- [AI Issue Detection Agent](/support/docs/accessibility-ai-issue-detection-agent/)
- [Capture Screenshot](/support/docs/accessibility-capture-screenshot/)
- [Accessibility Web Score](/support/docs/accessibility-web-score/)
- [Fragment Identifier](/support/docs/accessibility-fragment-identifier/)
- [PDF Accessibility Scanning](/support/docs/accessibility-pdf-accessibility-scanning/)

### Mobile

- [Tag Support](/support/docs/accessibility-tag-support/)

### Common

- [Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
- [Analytics Widgets](/support/docs/analytics-modules-accessibility-widgets/)

---

## Use Screen Reader testing when

- you must validate behavior with **assistive technology** (not only automated rules)

**Hub:** [Screen Reader Overview](/support/docs/screen-reader-on-accessibility/).

**By platform:**

- [NVDA on Windows](/support/docs/accessibility-nvda-windows/)
- [JAWS on Windows](/support/docs/accessibility-jaws-windows/)
- [VoiceOver on macOS](/support/docs/accessibility-voiceover-macos/)
- [TalkBack on Android](/support/docs/accessibility-talkback-android/)

Pair screen reader sessions with [Keyboard Scan](/support/docs/accessibility-keyboard-scan/) for keyboard-only coverage on web.

---

## Use Checklists and Rule References when

- you need to know **which WCAG-aligned rules** automation covers **per platform**
- you want the **manual test checklist** (beyond automated rules) in one glance
- you need **rule-level** remediation text

**Checklists:** [Web](/support/docs/accessibility-web-what-we-cover/) · [iOS](/support/docs/accessibility-ios-what-we-cover/) · [Android](/support/docs/accessibility-android-what-we-cover/).

**Rule repositories:** [Web](/support/docs/accessibility-web-rule-repository/) · [Android](/support/docs/accessibility-android-rule-repository/) · [iOS](/support/docs/accessibility-ios-rule-repository/).

**Compliance framing (not legal advice):** [Accessibility Compliance Guide](/support/docs/accessibility-compliance-guide/) · [VPAT Report Generation](/support/docs/accessibility-vpat-report-generation/).

---

## Use Accessibility MCP Server when

- you want **AI-assisted** accessibility analysis through an **MCP-compatible** client, scoped to **Accessibility** workflows

**Doc:** [Accessibility MCP Server](/support/docs/accessibility-mcp-server/).

**Not the same as** installing the full multi-tool MCP stack: use [Introducing TestMu AI MCP Server](/support/docs/testmu-mcp-server/) for platform-wide MCP setup, then return here for accessibility-specific usage.

---

## Related docs

- [Getting Started with Accessibility Testing](/support/docs/accessibility-testing/)
- [Accessibility FAQs](/support/docs/accessibility-faq/)
- [Supported WCAG Versions & Browsers](/support/docs/accessibility-supported-wcag-browsers/)
- [Starting an Accessibility Scan with Web Scanner](/support/docs/web-scanner-accessibility-scan/)
- [Mobile App Accessibility Testing (KaneAI)](/support/docs/kaneai-mobile-app-accessibility/)
- [Screen Reader Overview](/support/docs/screen-reader-on-accessibility/)
- [Web checklist](/support/docs/accessibility-web-what-we-cover/) · [iOS checklist](/support/docs/accessibility-ios-what-we-cover/) · [Android checklist](/support/docs/accessibility-android-what-we-cover/)
- [Accessibility MCP Server](/support/docs/accessibility-mcp-server/) · [TestMu AI MCP Server](/support/docs/testmu-mcp-server/)
