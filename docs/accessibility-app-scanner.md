---
id: accessibility-app-scanner
title: Accessibility App Scanner (Overview)
sidebar_label: Accessibility App Scanner
description: Manual mobile app accessibility testing on real devices—upload, session, scan screens, review issues, and export reports.
slug: accessibility-app-scanner/
url: https://www.testmuai.com/support/docs/accessibility-app-scanner/
site_name: TestMu AI
canonical: https://www.testmuai.com/support/docs/accessibility-app-scanner/
---

# Accessibility App Scanner (Overview)

Accessibility App Scanner is the **manual** mobile app workflow for reviewing accessibility issues on **real Android or iOS devices**, screen by screen, without writing Appium code.

## When to use this

Use App Scanner when you want to **inspect** Android or iOS app screens interactively and validate findings as you move through the app—ideal for exploratory passes, design reviews, or reproducing issues filed by users.

## Prerequisites

- Access to **Accessibility** and **App Scanner** for your organization
- A **build** of the app you are authorized to test (store build, enterprise IPA/APK, or uploaded artifact per your workflow)
- A **device profile** that matches your audience (OS version, screen size)

## Onboarding: first manual scan

1. **Upload or select** the application package in the App Scanner flow (follow in-product prompts for accepted formats).
2. **Pick a real device** pool that matches your target users (OS + locale).
3. **Launch the session** and wait until the app is installed and foregrounded.
4. **Navigate critical journeys** (onboarding, login, checkout, settings). After each major screen stabilizes, trigger the **scan** action the UI provides.
5. **Review issues** in the side panel or overlay—open each item to see rule text, element context, and suggested remediation where available.
6. **Save or end** the session so results appear under Accessibility **Reports** for dashboard analysis ([Navigating the Dashboard](/support/docs/accessibility-testing-navigating-dashboard/)).
7. Optional: run a **[Screen Reader](/support/docs/screen-reader-on-accessibility/)** pass on the same build for manual confirmation.

## Typical workflow (summary)

1. Upload or select the app.
2. Start the device session.
3. Scan important screens manually.
4. Review the issues.
5. Save the report and move into dashboard analysis if needed.

## Product boundary

App Scanner is a manual mobile-app workflow. If you are running Appium code, use [Native App Automation Appium (Overview)](/support/docs/accessibility-native-app-automation-test/). If you are authoring the flow in KaneAI, use [Mobile App Accessibility Testing](/support/docs/kaneai-mobile-app-accessibility/).

## Related docs

- [Native App Automation Appium (Overview)](/support/docs/accessibility-native-app-automation-test/)
- [Mobile App Accessibility Testing](/support/docs/kaneai-mobile-app-accessibility/)
- [Tag Support for Accessibility Scans](/support/docs/accessibility-tag-support/)
