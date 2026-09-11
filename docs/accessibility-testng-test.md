---
id: accessibility-testng-test
title: TestNG
sidebar_label: TestNG
description: "Run Accessibility Automation with Selenium and TestNG: capabilities, hooks, TestNG suite layout, and how to review reports in the dashboard."
keywords:
  - TestMu AI
  - Accessibility
  - TestNG
  - Selenium
  - Automation
url: https://www.testmuai.com/support/docs/accessibility-testng-test/
site_name: TestMu AI
slug: accessibility-testng-test/
canonical: https://www.testmuai.com/support/docs/accessibility-testng-test/
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
          "name": "TestNG",
          "item": `${BRAND_URL}/support/docs/accessibility-testng-test/`
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-testng-test/"
    },
    "headline": "TestNG",
    "description": "Run Accessibility Automation with Selenium and TestNG: capabilities, hooks, TestNG suite layout, and how to review reports in the dashboard.",
    "url": "https://www.testmuai.com/support/docs/accessibility-testng-test/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Accessibility Testing",
    "keywords": [
      "TestMu AI",
      "Accessibility",
      "TestNG"
    ],
    "proficiencyLevel": "Beginner",
    "dependencies": "TestMu AI username and access key (environment variables); A Selenium + TestNG project already hitting the TestMu AI grid (hub URL and capabilities); Accessibility entitlement for your organization; Access to the Automation dashboard and the Accessibility tab for the session build.",
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
        "name": "2. Add Accessibility capabilities",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "capabilities.setCapability(\"accessibility\", true);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "2. Add Accessibility capabilities",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "capabilities.setCapability(\"accessibility\", true);\ncapabilities.setCapability(\"accessibility.wcagVersion\", \"wcag21aa\");\ncapabilities.setCapability(\"accessibility.bestPractice\", false);\ncapabilities.setCapability(\"accessibility.needsReview\", true);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "After navigation and when the page is stable, call",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "driver.executeScript(\"lambda-accessibility-scan\");"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Scan on every navigation without hooks",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "capabilities.setCapability(\"accessibility\", true);\ncapabilities.setCapability(\"accessibility.autoscan\", true);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "5. Execute and open the report",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "mvn test"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

# TestNG

Use this guide when your **Selenium** web tests run with **TestNG** and you want **Accessibility Automation** in the same sessions. The runner does not change how Accessibility works on the grid: you still enable it with **capabilities**, then either use **on-demand hooks** or **auto-scan**. Details match the main [Selenium Accessibility Automation](/support/docs/accessibility-automation-test/) doc; this page adds a **TestNG-shaped onboarding path**.

> **Browsers:** Accessibility Automation is supported on **Chrome and Edge** (recent versions). Set `browserName` accordingly.

## Prerequisites

- TestMu AI **username and access key** ([environment variables](/support/docs/using-environment-variables-for-authentication-credentials/))
- A **Selenium + TestNG** project already hitting the TestMu AI grid (hub URL and capabilities)
- **Accessibility** entitlement for your organization
- Access to the **Automation** dashboard and the **Accessibility** tab for the session build

## Onboarding path (first successful run)

### 1. Confirm your TestNG entry point

Most teams initialize the driver in a **Base test class** (`@BeforeMethod` / `@BeforeClass`) or a small factory. You only need **one** place where `DesiredCapabilities` or `MutableCapabilities` is built so every test method gets Accessibility enabled.

### 2. Add Accessibility capabilities

Enable Accessibility and optional WCAG / best-practice flags (full reference: [Configure Accessibility Automation](/support/docs/accessibility-automation-settings/)).

**Minimal enable:**

<VerifiedTag value="Verified" />

```java
capabilities.setCapability("accessibility", true);
```

**Optional tuning (example):**

<VerifiedTag value="Verified" />

```java
capabilities.setCapability("accessibility", true);
capabilities.setCapability("accessibility.wcagVersion", "wcag21aa");
capabilities.setCapability("accessibility.bestPractice", false);
capabilities.setCapability("accessibility.needsReview", true);
```

### 3. Choose scan mode

**A. On-demand (recommended for most suites)**  
After navigation and when the page is stable, call:

<VerifiedTag value="Verified" />

```java
driver.executeScript("lambda-accessibility-scan");
```

If you enable `accessibility` but **never** call this hook (and do not use auto-scan), **no Accessibility report** is produced for that navigation.

**B. Continuous auto-scan**  
Scan on every navigation without hooks:

<VerifiedTag value="Verified" />

```java
capabilities.setCapability("accessibility", true);
capabilities.setCapability("accessibility.autoscan", true);
```

### 4. Wire TestNG suite XML (optional but typical)

Point your `testng.xml` (or Gradle/Maven TestNG config) at the packages or classes that use the shared base class so every included test inherits the same driver setup. Run a **single** `@Test` first to validate capabilities before scaling the suite.

### 5. Execute and open the report

<VerifiedTag value="Verified" />

```bash
mvn test
```

(or your TestNG CLI / IDE run configuration.)

Then open the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard), select the session, and use the **Accessibility** tab for the generated report (same flow as the [Selenium guide](/support/docs/accessibility-automation-test/)).

## What gets reported

Reports use the **standard Accessibility automation pipeline**: issues, severity, WCAG mapping, and the same dashboard views as other Selenium-based runs.

## Troubleshooting

| Symptom | What to check |
|--------|----------------|
| No Accessibility tab / empty report | Confirm `accessibility: true` and that you either call `lambda-accessibility-scan` or set `accessibility.autoscan`. |
| Wrong WCAG level | Adjust `accessibility.wcagVersion` in [settings reference](/support/docs/accessibility-automation-settings/). |
| Flaky scans | Prefer **hooks** after explicit waits rather than autoscan on heavy SPAs. |

## Related docs

- [Selenium](/support/docs/accessibility-automation-test/)
- [Configure Accessibility Automation](/support/docs/accessibility-automation-settings/)
- [JUnit 5](/support/docs/accessibility-junit5-test/) (same model, different runner)
- [CI/CD Integration Guide](/support/docs/accessibility-cicd-integration-guide/)
