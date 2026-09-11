---
id: accessibility-appium-testng
title: Appium TestNG
sidebar_label: Appium TestNG
description: "Appium TestNG with Accessibility: session capabilities, lambda-accessibility-scan checkpoints, and dashboard review."
slug: accessibility-appium-testng/
url: https://www.testmuai.com/support/docs/accessibility-appium-testng/
site_name: TestMu AI
canonical: https://www.testmuai.com/support/docs/accessibility-appium-testng/
---
import VerifiedTag from '@site/src/component/verifiedTag';
import { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Appium TestNG",
          "item": `${BRAND_URL}/support/docs/accessibility-appium-testng/`
        }]
      })
    }}
></script>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/accessibility-appium-testng/"
    },
    "headline": "Appium TestNG",
    "description": "Appium TestNG with Accessibility: session capabilities, lambda-accessibility-scan checkpoints, and dashboard review.",
    "url": "https://www.testmuai.com/support/docs/accessibility-appium-testng/",
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
    "dependencies": "Appium Java client (or matching stack) + TestNG; App build reachable by the grid; Accessibility entitlement.",
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
        "name": "Illustrative Java pattern (adapt platform names, device, and app paths to your suite)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "UiAutomator2Options options = new UiAutomator2Options();\noptions.setDeviceName(\"Pixel.*\");\noptions.setApp(\"lt://APP_ID\"); // or storage URL per your setup\noptions.setCapability(\"accessibility\", true);\nAppiumDriver driver = new AndroidDriver(new URL(\"https://mobile-hub.lambdatest.com/wd/hub\"), options);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "2. Call the scan hook after navigation",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "((JavascriptExecutor) driver).executeScript(\"lambda-accessibility-scan\");"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "3. Run TestNG",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "mvn test"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

# Appium TestNG

Use this guide when **Appium** drives Android or iOS tests and **TestNG** is your runner. Accessibility still depends on **session capabilities** plus **`lambda-accessibility-scan`** at stable UI states.

## Prerequisites

- Appium Java client (or matching stack) + TestNG
- App build reachable by the grid
- Accessibility entitlement

## Onboarding path

### 1. Configure capabilities in `@BeforeClass` / `@BeforeMethod`

Illustrative Java pattern (adapt platform names, device, and app paths to your suite):

```java
UiAutomator2Options options = new UiAutomator2Options();
options.setDeviceName("Pixel.*");
options.setApp("lt://APP_ID"); // or storage URL per your setup
options.setCapability("accessibility", true);
// options.setCapability("accessibility.autoscan", true); // optional
AppiumDriver driver = new AndroidDriver(new URL("https://mobile-hub.lambdatest.com/wd/hub"), options);
```

Use the **official capability set** your account documentation lists for the current Appium version; the critical addition is `"accessibility": true`.

### 2. Call the scan hook after navigation

```java
((JavascriptExecutor) driver).executeScript("lambda-accessibility-scan");
```

Place this **after** explicit waits for loading spinners, animations, or lazy content.

### 3. Run TestNG

<VerifiedTag value="Verified" />

```bash
mvn test
```

### 4. Review reports

Open **[Navigating the Dashboard](/support/docs/accessibility-testing-navigating-dashboard/)** and locate the session’s accessibility results.

## Troubleshooting

| Symptom | What to check |
|--------|----------------|
| Hook throws | Driver must be a session where accessibility capability was set; verify spelling `lambda-accessibility-scan`. |
| Empty report | Hook never called and autoscan off; or page never reached stable state. |

## Related docs

- [Native App Automation Appium (Overview)](/support/docs/accessibility-native-app-automation-test/)
- [Appium WebdriverIO](/support/docs/accessibility-appium-webdriverio/)
- [Tag Support for Accessibility Scans](/support/docs/accessibility-tag-support/)
