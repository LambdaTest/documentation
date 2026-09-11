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
import VerifiedTag from '@site/src/component/verifiedTag';

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/accessibility-native-app-automation-test/"
    },
    "headline": "Native App Automation Appium (Overview)",
    "description": "Appium-based native app accessibility automation with lambda-accessibility-scan, capabilities, and dashboard reports.",
    "url": "https://www.testmuai.com/support/docs/accessibility-native-app-automation-test/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
    "keywords": [],
    "proficiencyLevel": "Beginner",
    "dependencies": "A native Android or iOS app. Hybrid apps with embedded webview content are not supported; Appium client and test project targeting TestMu AI real devices or emulators per your subscription; LT_USERNAME / LT_ACCESS_KEY available to the process; Accessibility enabled on the mobile session (see framework guides below for capability examples).",
    "author": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "url": "https://www.testmuai.com/"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
      "url": "https://www.testmuai.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testmuai.com/logo.png"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testmu-ai/",
        "https://x.com/testmuai",
        "https://www.youtube.com/@TestMuAI"
      ]
    },
    "hasPart": [
      {
        "@type": "SoftwareSourceCode",
        "name": "After each stable screen (post-navigation waits), call",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "driver.executeScript(\"lambda-accessibility-scan\");"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

# Native App Automation Appium (Overview)

Native App Automation uses **Appium** with the **`lambda-accessibility-scan`** hook to generate accessibility results during **Android** or **iOS** test runs on the TestMu AI grid.

:::warning
Scans on real devices are **hook driven only**. The `accessibility.autoscan` capability used in web automation is **not supported on real devices**, so a full app flow cannot be scanned automatically. Call `lambda-accessibility-scan` at every screen you want covered. See [Scan Configurations via Capabilities](/support/docs/accessibility-automation-scan-configurations/).
:::

## When to use this

Use this page when your team **already runs Appium** for functional tests and wants accessibility checks in the **same execution path** with deterministic checkpoints.

## Prerequisites

- A **native** Android or iOS app. Hybrid apps with embedded webview content are not supported
- Appium client and test project targeting TestMu AI **real devices** or emulators per your subscription
- `LT_USERNAME` / `LT_ACCESS_KEY` available to the process
- Accessibility enabled on the mobile session (see framework guides below for capability examples)

## Onboarding: first automated mobile accessibility run

1. **Reuse a green Appium suite** without accessibility first: confirm install, locators, and hub connectivity.
2. **Add accessibility capability** on the session (exact key names align with your Appium server version; mirror the examples in [Appium TestNG](/support/docs/accessibility-appium-testng/) or [Appium WebdriverIO](/support/docs/accessibility-appium-webdriverio/)).
3. After each **stable screen** (post-navigation waits), call:

<VerifiedTag value="Verified" />

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

:::warning
Accessibility scanning supports **native** Android and iOS apps only. **Hybrid apps**, meaning native apps with embedded webview content, are **not supported**. This applies to both Native App Automation and [App Scanner](/support/docs/accessibility-app-scanner/). To check the web content itself, test the web application directly with [Manual Testing (DevTools)](/support/docs/accessibility-devtools/) or [web Automation](/support/docs/accessibility-automation-test/).
:::

## Related docs

- [Scan Configurations via Capabilities (Automation)](/support/docs/accessibility-automation-scan-configurations/)
- [Appium TestNG](/support/docs/accessibility-appium-testng/)
- [Appium WebdriverIO](/support/docs/accessibility-appium-webdriverio/)
- [Accessibility App Scanner (Overview)](/support/docs/accessibility-app-scanner/)
- [Tag Support for Accessibility Scans](/support/docs/accessibility-tag-support/)
