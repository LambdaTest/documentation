---
id: accessibility-junit5-test
title: JUnit 5
sidebar_label: JUnit 5
description: "Run Accessibility Automation with Selenium and JUnit 5: capabilities, lifecycle hooks, and dashboard reporting."
keywords:
  - TestMu AI
  - Accessibility
  - JUnit 5
  - Selenium
  - Jupiter
url: https://www.testmuai.com/support/docs/accessibility-junit5-test/
site_name: TestMu AI
slug: accessibility-junit5-test/
canonical: https://www.testmuai.com/support/docs/accessibility-junit5-test/
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
          "name": "JUnit 5",
          "item": `${BRAND_URL}/support/docs/accessibility-junit5-test/`
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-junit5-test/"
    },
    "headline": "JUnit 5",
    "description": "Run Accessibility Automation with Selenium and JUnit 5: capabilities, lifecycle hooks, and dashboard reporting.",
    "url": "https://www.testmuai.com/support/docs/accessibility-junit5-test/",
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
      "JUnit 5"
    ],
    "proficiencyLevel": "Beginner",
    "dependencies": "TestMu AI credentials as environment variables (guide); JUnit 5 on the classpath (junit-jupiter-api, etc.) driving Selenium; Accessibility enabled for your account.",
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
        "name": "2. Enable Accessibility on the session",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "capabilities.setCapability(\"accessibility\", true);\ncapabilities.setCapability(\"accessibility.wcagVersion\", \"wcag21aa\"); // optional"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "3. Trigger scans",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "driver.executeScript(\"lambda-accessibility-scan\");"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "3. Trigger scans",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "capabilities.setCapability(\"accessibility.autoscan\", true);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "4. Run and verify",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "mvn test"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

# JUnit 5

Use this guide when your **Selenium** tests use **JUnit 5 (Jupiter)**. Accessibility is still driven entirely by **grid capabilities** and the **`lambda-accessibility-scan`** hook (or **auto-scan**), identical to the [Selenium Accessibility Automation](/support/docs/accessibility-automation-test/) flow. Only the test lifecycle annotations differ.

> **Browsers:** Use **Chrome or Edge** with supported versions for Accessibility Automation.

## Prerequisites

- TestMu AI credentials as **environment variables** ([guide](/support/docs/using-environment-variables-for-authentication-credentials/))
- JUnit 5 on the classpath (`junit-jupiter-api`, etc.) driving Selenium
- Accessibility enabled for your account

## Onboarding path

### 1. Centralize driver creation

Use `@BeforeEach` or `@BeforeAll` (with a static WebDriver if you share one per class) to build `MutableCapabilities` / `ChromeOptions` once. Every test method should inherit the same Accessibility flags.

### 2. Enable Accessibility on the session

```java
capabilities.setCapability("accessibility", true);
capabilities.setCapability("accessibility.wcagVersion", "wcag21aa"); // optional
```

See [Configure Accessibility Automation](/support/docs/accessibility-automation-settings/) for all flags.

### 3. Trigger scans

**Hook after stable UI:**

```java
driver.executeScript("lambda-accessibility-scan");
```

**Or auto-scan every navigation:**

```java
capabilities.setCapability("accessibility.autoscan", true);
```

### 4. Run and verify

<VerifiedTag value="Verified" />

```bash
mvn test
```

Open the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard) → session → **Accessibility** tab.

### 5. Scale to the full suite

Add `@Tag("a11y")` or parallel config if you want selective Accessibility runs in CI; keep capability setup shared so behavior stays consistent.

## Troubleshooting

| Symptom | What to check |
|--------|----------------|
| No report | `accessibility: true` plus hook **or** `accessibility.autoscan`. |
| Multiple scans on one test | You called the hook more than once; reduce to one stable checkpoint per logical page. |

## Related docs

- [Selenium](/support/docs/accessibility-automation-test/)
- [Configure Accessibility Automation](/support/docs/accessibility-automation-settings/)
- [TestNG](/support/docs/accessibility-testng-test/)
- [CI/CD Integration Guide](/support/docs/accessibility-cicd-integration-guide/)
