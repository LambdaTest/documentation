---
id: hyperexecute-how-to-resolve-version-conflict
title: How to Resolve Version Conflict Issues
hide_title: false
sidebar_label: How to Resolve Version Conflict Issues
description: Resolve version conflicts by ensuring consistency across YAML, package files, and environment variables for frameworks like Selenium, Playwright, and Cypress to avoid errors.
keywords:
    - hyperexecute yaml
    - resolve version conflicts
url: https://www.testmuai.com/support/docs/hyperexecute-how-to-perform-group-based-test-discovery-in-testng/
site_name: TestMu AI
slug: hyperexecute-how-to-resolve-version-conflict/
canonical: https://www.testmuai.com/support/docs/hyperexecute-how-to-resolve-version-conflict/
---


import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

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
          "name": "How to Resolve Version Conflict",
          "item": `${BRAND_URL}/support/docs/hyperexecute-how-to-resolve-version-conflict/`
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
      "@id": "https://www.testmuai.com/support/docs/hyperexecute-how-to-perform-group-based-test-discovery-in-testng/"
    },
    "headline": "How to Resolve Version Conflict Issues",
    "description": "Resolve version conflicts by ensuring consistency across YAML, package files, and environment variables for frameworks like Selenium, Playwright, and Cypress to avoid errors.",
    "url": "https://www.testmuai.com/support/docs/hyperexecute-how-to-perform-group-based-test-discovery-in-testng/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "HyperExecute",
    "keywords": [
      "hyperexecute yaml",
      "resolve version conflicts"
    ],
    "proficiencyLevel": "Beginner",
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
        "name": "Selenium - Java",
        "codeSampleType": "code snippet",
        "programmingLanguage": "XML",
        "text": "<dependency>\n    <groupId>org.testng<\/groupId>\n    <artifactId>testng<\/artifactId>\n    <version>7.5<\/version>\n    <scope>test<\/scope>\n<\/dependency>"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Selenium/Playwright/Puppeteer/Cypress - JavaScript",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JSON",
        "text": "{\n  \"dependencies\": {\n    \"selenium-webdriver\": \"4.1.0\",\n    \"cypress\": \"9.5.0\",\n    \"playwright\": \"1.15.0\"\n  }\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Selenium/Playwright - C# (.NET)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "XML",
        "text": "<PropertyGroup>\n    <TargetFramework>net6.0<\/TargetFramework>\n    <OutputType>Library<\/OutputType>\n<\/PropertyGroup>"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>
Maintaining consistent versions across testing frameworks in your project setup is crucial to avoid runtime errors, compatibility issues, and unexpected behaviors. This guide focuses on specifying framework versions in YAML configuration files and aligning them with the version details in project-specific files like `package.json`, `pom.xml`, `.csproj`, and system environment variables for frameworks like Selenium, Playwright, Puppeteer, Cypress, Maestro, and Appium.

## Why Version Consistency Matters
When versions defined in YAML configuration files do not match those in project files, it can lead to:

- **Dependency Conflicts :** Incompatibility between framework components, leading to failures.
- **Runtime Errors :** Unexpected crashes or malfunctions during test execution.
- **Inconsistent Test Results :** Version mismatches can produce different outcomes or misbehave in automated test cases.
To prevent these issues, it is recommended to ensure that framework versions match between the YAML pre-steps and project files.

## Framework-Specific Guidelines
This section provides detailed instructions for version consistency across different frameworks.

### Selenium - Java
For Java projects using Selenium, TestNG and Cucumber dependencies should match between the YAML pre-steps and the pom.xml file.

- **TestNG :** Ensure the TestNG version in your `pom.xml` matches the version specified in the YAML configuration under [`pre-steps`](/support/docs/deep-dive-into-hyperexecute-yaml/#pre):
```xml
<dependency>
    <groupId>org.testng</groupId>
    <artifactId>testng</artifactId>
    <version>7.5</version>
    <scope>test</scope>
</dependency>
```

> Always verify compatibility between Java and TestNG versions as specified in TestNG's documentation to avoid compatibility conflicts.

### Selenium/Playwright/Puppeteer/Cypress - JavaScript
For JavaScript frameworks like Selenium, Playwright, Puppeteer, and Cypress, the framework versions specified in the YAML configuration should align with `package.json`:

```json
{
  "dependencies": {
    "selenium-webdriver": "4.1.0",
    "cypress": "9.5.0",
    "playwright": "1.15.0"
  }
}
```

Consistency ensures dependencies are installed with the expected versions, avoiding issues like dependency mismatch and incompatible libraries.

### Selenium/Playwright - C# (.NET)
For .NET projects, Selenium and Playwright versions should match between the YAML pre-steps and the `.csproj` file, which specifies NuGet packages:

```xml
<PropertyGroup>
    <TargetFramework>net6.0</TargetFramework>
    <OutputType>Library</OutputType>
</PropertyGroup>
```
