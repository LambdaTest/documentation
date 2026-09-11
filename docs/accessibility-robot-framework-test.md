---
id: accessibility-robot-framework-test
title: Robot Framework
sidebar_label: Robot Framework
description: "Run Accessibility Automation when Robot Framework drives Selenium: variables, Open Browser keywords, hooks, and reports."
keywords:
  - TestMu AI
  - Accessibility
  - Robot Framework
  - Selenium
url: https://www.testmuai.com/support/docs/accessibility-robot-framework-test/
site_name: TestMu AI
slug: accessibility-robot-framework-test/
canonical: https://www.testmuai.com/support/docs/accessibility-robot-framework-test/
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
          "name": "Robot Framework",
          "item": `${BRAND_URL}/support/docs/accessibility-robot-framework-test/`
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-robot-framework-test/"
    },
    "headline": "Robot Framework",
    "description": "Run Accessibility Automation when Robot Framework drives Selenium: variables, Open Browser keywords, hooks, and reports.",
    "url": "https://www.testmuai.com/support/docs/accessibility-robot-framework-test/",
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
      "Robot Framework"
    ],
    "proficiencyLevel": "Beginner",
    "dependencies": "Robot Framework + SeleniumLibrary (or compatible library) installed; Remote URL and credentials for TestMu AI; Accessibility enabled for your workspace.",
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
        "name": "Define suite or global variables so every test uses the same grid options",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Robot",
        "text": "*** Variables ***\n${LT_OPTIONS}    {\"accessibility\": true, \"accessibility.wcagVersion\": \"wcag21aa\"}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "After the page is ready",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Robot",
        "text": "Execute Javascript    return document.readyState\nExecute Javascript    lambda-accessibility-scan"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "If you prefer scans on every navigation without Robot keywords",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Robot",
        "text": "# In capabilities JSON / dict\naccessibility.autoscan    ${True}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "5. Run the suite and review reports",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "robot --outputdir results tests/"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

# Robot Framework

Robot Framework sits **above** Selenium: Accessibility is still configured on the **underlying browser session** (desired capabilities passed into `Open Browser` or your library’s remote configuration). This page is the onboarding path for teams using **SeleniumLibrary** (or equivalent) against the TestMu AI grid.

> **Browsers:** Use **Chrome or Edge** with supported versions for Accessibility Automation.

## Prerequisites

- Robot Framework + SeleniumLibrary (or compatible library) installed
- Remote URL and credentials for TestMu AI
- Accessibility enabled for your workspace

## Onboarding path

### 1. Encode capabilities as variables

Define suite or global variables so every test uses the same grid options:

```robot
*** Variables ***
${LT_OPTIONS}    {"accessibility": true, "accessibility.wcagVersion": "wcag21aa"}
```

Exact syntax depends on how you merge JSON into capabilities for your `Open Browser` keyword. Some teams use a **custom keyword** that builds the options dict in Python and passes it to `Create Dictionary` / `Evaluate`.

### 2. Open Browser with Accessibility on

Pass the merged capabilities into `Open Browser` (or your wrapper) so the remote session includes `"accessibility": true`. Match the pattern you already use for `browserName`, `platformName`, and auth.

### 3. On-demand scan with Execute Javascript

After the page is ready:

```robot
Execute Javascript    return document.readyState
Execute Javascript    lambda-accessibility-scan
```

Use the second line only when you are **not** using `accessibility.autoscan`.

### 4. Auto-scan alternative

If you prefer scans on every navigation without Robot keywords:

```robot
# In capabilities JSON / dict
accessibility.autoscan    ${True}
```

### 5. Run the suite and review reports

<VerifiedTag value="Verified" />

```bash
robot --outputdir results tests/
```

Then open the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard) for the session and the **Accessibility** tab.

## Troubleshooting

| Symptom | What to check |
|--------|----------------|
| No report | Robot must forward `accessibility` to the remote session; inspect the session capabilities in the dashboard. |
| Hook errors | Ensure `Execute Javascript` runs in browser context and spelling is exactly `lambda-accessibility-scan`. |

## Related docs

- [Accessibility Automation (Overview)](/support/docs/accessibility-automation/)
- [Selenium](/support/docs/accessibility-automation-test/)
- [Configure Accessibility Automation](/support/docs/accessibility-automation-settings/)
