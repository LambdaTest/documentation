---
id: accessibility-appium-webdriverio
title: Appium WebdriverIO
sidebar_label: Appium WebdriverIO
description: "Appium WebdriverIO with Accessibility: WDIO config, async hooks, lambda-accessibility-scan, and reports."
slug: accessibility-appium-webdriverio/
url: https://www.testmuai.com/support/docs/accessibility-appium-webdriverio/
site_name: TestMu AI
canonical: https://www.testmuai.com/support/docs/accessibility-appium-webdriverio/
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-appium-webdriverio/"
    },
    "headline": "Appium WebdriverIO",
    "description": "Appium WebdriverIO with Accessibility: WDIO config, async hooks, lambda-accessibility-scan, and reports.",
    "url": "https://www.testmuai.com/support/docs/accessibility-appium-webdriverio/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Accessibility Testing",
    "keywords": [],
    "proficiencyLevel": "Beginner",
    "dependencies": "WebdriverIO + @wdio/appium-service (or your chosen runner) configured for TestMu AI; App artifact available to the grid; Accessibility entitlement.",
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
        "name": "1. Set capabilities in wdio.conf.ts (or .js)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "TypeScript",
        "text": "export const config = {\n  capabilities: [{\n    platformName: 'Android',\n    'appium:deviceName': 'Pixel.*',\n    'appium:app': 'lt://APP_ID',\n    'accessibility': true,\n  }],\n  // host/user/key per your standard WDIO LambdaTest preset\n};"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "2. Call the hook after screens load",
        "codeSampleType": "code snippet",
        "programmingLanguage": "TypeScript",
        "text": "await browser.execute('lambda-accessibility-scan');"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "3. Run the suite",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npx wdio run wdio.conf.ts"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

# Appium WebdriverIO

Use this guide when **WebdriverIO** orchestrates **Appium** tests for Android or iOS. Accessibility is enabled on the **remote options** object, and you call **`lambda-accessibility-scan`** from async tests or hooks.

## Prerequisites

- WebdriverIO + `@wdio/appium-service` (or your chosen runner) configured for TestMu AI
- App artifact available to the grid
- Accessibility entitlement

## Onboarding path

### 1. Set capabilities in `wdio.conf.ts` (or `.js`)

<VerifiedTag value="Verified" />

```ts
export const config = {
  capabilities: [{
    platformName: 'Android',
    'appium:deviceName': 'Pixel.*',
    'appium:app': 'lt://APP_ID',
    'accessibility': true,
    // 'accessibility.autoscan': true,
  }],
  // host/user/key per your standard WDIO LambdaTest preset
};
```

Match keys to your Appium server version (`appium:` prefix for W3C caps).

### 2. Call the hook after screens load

<VerifiedTag value="Verified" />

```ts
await browser.execute('lambda-accessibility-scan');
```

Use WDIO’s **`waitUntil`** patterns before executing the hook so dynamic content is present.

### 3. Run the suite

```bash
npx wdio run wdio.conf.ts
```

### 4. Review Accessibility results

Same dashboard path as other mobile automation ([overview](/support/docs/accessibility-native-app-automation-test/)).

## Troubleshooting

| Symptom | What to check |
|--------|----------------|
| `execute` undefined | Ensure the session is still active and you are not using a mocked driver in unit tests. |
| No report | Missing `accessibility: true` or hook never awaited. |

## Related docs

- [Native App Automation Appium (Overview)](/support/docs/accessibility-native-app-automation-test/)
- [Appium TestNG](/support/docs/accessibility-appium-testng/)
- [Tag Support for Accessibility Scans](/support/docs/accessibility-tag-support/)
