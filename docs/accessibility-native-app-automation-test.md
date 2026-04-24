---
id: accessibility-native-app-automation-test
title: Native App Automation Appium (Overview)
sidebar_label: Native App Automation
description: Appium-based native app accessibility automation with lambda-accessibility-scan, capabilities, and dashboard reports.
slug: accessibility-native-app-automation-test/
url: https://www.testmuai.com/support/docs/accessibility-native-app-automation-test/
site_name: TestMu AI
canonical: https://www.testmuai.com/support/docs/accessibility-native-app-automation-test/
---

# Native App Automation Appium (Overview)

Native App Automation uses **Appium** with the **`lambda-accessibility-scan`** hook to generate accessibility results during **Android** or **iOS** test runs on the TestMu AI grid.

## When to use this

Use this page when your team **already runs Appium** for functional tests and wants accessibility checks in the **same execution path** with deterministic checkpoints.

## Prerequisites

- Appium client and test project targeting TestMu AI **real devices** or emulators per your subscription
- `LT_USERNAME` / `LT_ACCESS_KEY` available to the process
- Accessibility enabled on the mobile session (see framework guides below for capability examples)

## Onboarding: first automated mobile accessibility run

1. **Reuse a green Appium suite** without accessibility first—confirm install, locators, and hub connectivity.
2. **Add accessibility capability** on the session (exact key names align with your Appium server version; mirror the examples in [Appium TestNG](/support/docs/accessibility-appium-testng/) or [Appium WebdriverIO](/support/docs/accessibility-appium-webdriverio/)).
3. After each **stable screen** (post-navigation waits), call:

```java
driver.executeScript("lambda-accessibility-scan");
```

4. **Run a single test method** to validate a report appears under Accessibility for that build.
5. Open **[Navigating the Dashboard](/support/docs/accessibility-testing-navigating-dashboard/)** and locate the session’s accessibility report.
6. Expand coverage to full suites only after reports look stable.

## Typical workflow (summary)

1. Upload the app and configure the Appium session.
2. Enable Accessibility in the session capabilities.
3. Trigger `lambda-accessibility-scan` at important checkpoints.
4. Review the report in the dashboard.

## Product boundary

This page is for direct Appium-based automation. If you are authoring the flow in KaneAI, use [Mobile App Accessibility Testing](/support/docs/kaneai-mobile-app-accessibility/). If you want manual screen-by-screen testing, use [Accessibility App Scanner (Overview)](/support/docs/accessibility-app-scanner/).

## Related docs

- [Appium TestNG](/support/docs/accessibility-appium-testng/)
- [Appium WebdriverIO](/support/docs/accessibility-appium-webdriverio/)
- [Accessibility App Scanner (Overview)](/support/docs/accessibility-app-scanner/)
- [Tag Support for Accessibility Scans](/support/docs/accessibility-tag-support/)
