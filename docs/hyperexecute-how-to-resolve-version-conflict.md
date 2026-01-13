---
id: hyperexecute-how-to-resolve-version-conflict
title: How to Resolve Version Conflict Issues
hide_title: false
sidebar_label: How to Resolve Version Conflict Issues
description: Resolve version conflicts by ensuring consistency across YAML, package files, and environment variables for frameworks like Selenium, Playwright, and Cypress to avoid errors.
keywords:
    - hyperexecute yaml
    - resolve version conflicts
url: https://www.testmu.ai/support/docs/hyperexecute-how-to-perform-group-based-test-discovery-in-testng
site_name: LambdaTest
slug: hyperexecute-how-to-resolve-version-conflict
canonical: https://www.testmu.ai/support/docs/hyperexecute-how-to-resolve-version-conflict/
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