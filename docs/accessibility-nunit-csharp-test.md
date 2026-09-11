---
id: accessibility-nunit-csharp-test
title: NUnit (C#)
sidebar_label: NUnit (C#)
description: "Run Accessibility Automation with Selenium C# and NUnit: RemoteWebDriver capabilities, test lifecycle, and reports."
keywords:
  - TestMu AI
  - Accessibility
  - NUnit
  - Selenium
  - C#
url: https://www.testmuai.com/support/docs/accessibility-nunit-csharp-test/
site_name: TestMu AI
slug: accessibility-nunit-csharp-test/
canonical: https://www.testmuai.com/support/docs/accessibility-nunit-csharp-test/
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-nunit-csharp-test/"
    },
    "headline": "NUnit (C#)",
    "description": "Run Accessibility Automation with Selenium C# and NUnit: RemoteWebDriver capabilities, test lifecycle, and reports.",
    "url": "https://www.testmuai.com/support/docs/accessibility-nunit-csharp-test/",
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
      "NUnit"
    ],
    "proficiencyLevel": "Beginner",
    "dependencies": "LT_USERNAME / LT_ACCESS_KEY (or your chosen secret injection in CI); Selenium 4 RemoteWebDriver pointing at the TestMu AI hub; NUnit 3+ test project.",
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
        "name": "Typical pattern in [SetUp] or a one-time fixture",
        "codeSampleType": "code snippet",
        "programmingLanguage": "C#",
        "text": "var options = new ChromeOptions();\noptions.BrowserVersion = \"latest\";\noptions.AddAdditionalOption(\"accessibility\", true);\noptions.AddAdditionalOption(\"accessibility.wcagVersion\", \"wcag21aa\"); // optional\n// options.AddAdditionalOption(\"accessibility.autoscan\", true);   // optional\nvar driver = new RemoteWebDriver(new Uri(\"https://hub.lambdatest.com/wd/hub\"), options.ToCapabilities());"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "After navigation and waits",
        "codeSampleType": "code snippet",
        "programmingLanguage": "C#",
        "text": "((IJavaScriptExecutor)driver).ExecuteScript(\"lambda-accessibility-scan\");"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "3. Run NUnit",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "dotnet test"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

# NUnit (C#)

Use this guide for **Selenium C#** tests executed with **NUnit**. Accessibility is enabled on the **RemoteWebDriver** session using the same capability keys as Java ([reference](/support/docs/accessibility-automation-settings/)); NUnit only controls **how and when** tests run.

> **Browsers:** Use **Chrome or Edge** with supported versions.

## Prerequisites

- `LT_USERNAME` / `LT_ACCESS_KEY` (or your chosen secret injection in CI)
- Selenium 4 `RemoteWebDriver` pointing at the TestMu AI hub
- NUnit 3+ test project

## Onboarding path

### 1. Set capabilities in your driver factory

Typical pattern in `[SetUp]` or a one-time fixture:

<VerifiedTag value="Verified" />

```csharp
var options = new ChromeOptions();
options.BrowserVersion = "latest";
options.AddAdditionalOption("accessibility", true);
options.AddAdditionalOption("accessibility.wcagVersion", "wcag21aa"); // optional
// options.AddAdditionalOption("accessibility.autoscan", true);   // optional
var driver = new RemoteWebDriver(new Uri("https://hub.lambdatest.com/wd/hub"), options.ToCapabilities());
```

Exact hub URL and capability names should match your existing grid configuration; only the **`accessibility*`** keys are specific to this feature.

### 2. Invoke the scan hook (if not using auto-scan)

After navigation and waits:

<VerifiedTag value="Verified" />

```csharp
((IJavaScriptExecutor)driver).ExecuteScript("lambda-accessibility-scan");
```

Without **either** the hook **or** `accessibility.autoscan`, you will not get Accessibility reports.

### 3. Run NUnit

```bash
dotnet test
```

or Visual Studio Test Explorer.

### 4. Open the Accessibility report

Automation Dashboard → build → **Accessibility** tab (same as [Selenium guide](/support/docs/accessibility-automation-test/)).

## Troubleshooting

| Symptom | What to check |
|--------|----------------|
| Capability ignored | Selenium 4 requires `AddAdditionalOption` on `ChromeOptions` (or equivalent) for vendor-specific keys. Verify spelling. |
| No report | Confirm hook or autoscan as above. |

## Related docs

- [Selenium](/support/docs/accessibility-automation-test/)
- [Configure Accessibility Automation](/support/docs/accessibility-automation-settings/)
- [CI/CD Integration Guide](/support/docs/accessibility-cicd-integration-guide/)
