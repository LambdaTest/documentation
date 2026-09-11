---
id: accessibility-cucumber-java-test
title: Cucumber (Java)
sidebar_label: Cucumber (Java)
description: "Run Accessibility Automation with Java Cucumber and Selenium: hooks, step defs, shared driver, and Accessibility reports."
keywords:
  - TestMu AI
  - Accessibility
  - Cucumber
  - Java
  - BDD
url: https://www.testmuai.com/support/docs/accessibility-cucumber-java-test/
site_name: TestMu AI
slug: accessibility-cucumber-java-test/
canonical: https://www.testmuai.com/support/docs/accessibility-cucumber-java-test/
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
          "name": "Cucumber (Java)",
          "item": `${BRAND_URL}/support/docs/accessibility-cucumber-java-test/`
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-cucumber-java-test/"
    },
    "headline": "Cucumber (Java)",
    "description": "Run Accessibility Automation with Java Cucumber and Selenium: hooks, step defs, shared driver, and Accessibility reports.",
    "url": "https://www.testmuai.com/support/docs/accessibility-cucumber-java-test/",
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
      "Cucumber"
    ],
    "proficiencyLevel": "Beginner",
    "dependencies": "Cucumber JVM + a DI or PicoContainer (or Spring) setup that exposes a singleton WebDriver; TestMu AI grid URL and credentials; Accessibility entitlement.",
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
        "name": "1. Create the driver with Accessibility in @Before",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "@Before(order = 0)\npublic void setUp() {\n    MutableCapabilities caps = new MutableCapabilities();\n    caps.setCapability(\"browserName\", \"chrome\");\n    caps.setCapability(\"accessibility\", true);\n    // caps.setCapability(\"accessibility.autoscan\", true); // optional\n    driver = new RemoteWebDriver(new URL(HUB_URL), caps);\n    // inject driver into step defs\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "In a step that represents \u201cuser is on dashboard\u201d (or after Given/When that loads a URL)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "driver.executeScript(\"lambda-accessibility-scan\");"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "4. Run Cucumber and open reports",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "mvn test -Dcucumber.filter.tags=\"@smoke\""
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

# Cucumber (Java)

Cucumber scenarios still execute **ordinary Selenium** code under the hood. Enable Accessibility once on the **shared WebDriver** (usually in a **@Before** hook), then call **`lambda-accessibility-scan`** from step definitions or a small helper when a screen is stable. Behavior matches [Selenium Accessibility Automation](/support/docs/accessibility-automation-test/).

> **Browsers:** Chrome or Edge, supported versions only.

## Prerequisites

- Cucumber JVM + a DI or PicoContainer (or Spring) setup that exposes a singleton `WebDriver`
- TestMu AI grid URL and credentials
- Accessibility entitlement

## Onboarding path

### 1. Create the driver with Accessibility in `@Before`

```java
@Before(order = 0)
public void setUp() {
    MutableCapabilities caps = new MutableCapabilities();
    caps.setCapability("browserName", "chrome");
    caps.setCapability("accessibility", true);
    // caps.setCapability("accessibility.autoscan", true); // optional
    driver = new RemoteWebDriver(new URL(HUB_URL), caps);
    // inject driver into step defs
}
```

### 2. Scan after key navigations

In a step that represents “user is on dashboard” (or after `Given/When` that loads a URL):

```java
driver.executeScript("lambda-accessibility-scan");
```

Avoid calling the hook on every tiny interaction; align it with **logical pages** or states.

### 3. Optional: auto-scan for exploratory flows

If scenarios bounce across many URLs and you want full coverage without per-step hooks, enable `accessibility.autoscan` in `@Before` instead.

### 4. Run Cucumber and open reports

<VerifiedTag value="Verified" />

```bash
mvn test -Dcucumber.filter.tags="@smoke"
```

Dashboard → session → **Accessibility** tab.

### 5. CI alignment

Tag scenarios that should run Accessibility (`@a11y`) so pipelines stay fast; keep capability setup in the shared hook so tagged and untagged runs behave predictably.

## Related docs

- [Selenium](/support/docs/accessibility-automation-test/)
- [Configure Accessibility Automation](/support/docs/accessibility-automation-settings/)
- [JUnit 5](/support/docs/accessibility-junit5-test/) (often the JUnit Platform runner behind Cucumber)
- [CI/CD Integration Guide](/support/docs/accessibility-cicd-integration-guide/)
