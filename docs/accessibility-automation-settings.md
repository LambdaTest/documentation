---
id: accessibility-automation-settings
title: Configure Accessibility Automation
hide_title: false
sidebar_label: Configure Accessibility Automation
description: Configure capabilities for TestMu AI Accessibility Automation including WCAG version, best practices, and needs review settings.
keywords:
    - TestMu AI
    - Accessibility
    - Testing
    - Automation
    - Accessibility Automation Settings
url: https://www.testmuai.com/support/docs/accessibility-automation-settings/
site_name: TestMu AI
slug: accessibility-automation-settings/
canonical: https://www.testmuai.com/support/docs/accessibility-automation-settings/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
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
          "name": "Accessibility Testing Settings",
          "item": `${BRAND_URL}/support/docs/accessibility-automation-settings/`
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-automation-settings/"
    },
    "headline": "Configure Accessibility Automation",
    "description": "Configure capabilities for TestMu AI Accessibility Automation including WCAG version, best practices, and needs review settings.",
    "url": "https://www.testmuai.com/support/docs/accessibility-automation-settings/",
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
      "Testing"
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
        "name": "Code sample 1",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "\"accessibility\" : true,                 // Enable accessibility testing\n\"accessibility.wcagVersion\": \"wcag21a\", // Specify WCAG version (e.g., WCAG 2.1 Level A)\n\"accessibility.bestPractice\": false,    // Exclude best practice issues from results\n\"accessibility.needsReview\": true       // Include issues that need review"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "1. Enable Accessibility Checks",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "accessibility : true"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "2. WCAG Version",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "accessibility.wcagVersion: 'wcag21a'"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "3. Best Practices Checks",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "accessibility.bestPractice: false"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "4. Needs Review",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "accessibility.needsReview: true"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>
This document details the configuration options available for your automated accessibility tests, ensuring comprehensive and efficient assessments.

To enable the accessibility testing within your automated test suite, set the accessibility: true in your configuration file. You can also define other settings capabilities as described below.

```java
"accessibility" : true,                 // Enable accessibility testing
"accessibility.wcagVersion": "wcag21a", // Specify WCAG version (e.g., WCAG 2.1 Level A)
"accessibility.bestPractice": false,    // Exclude best practice issues from results
"accessibility.needsReview": true       // Include issues that need review
```

## Key Configurations Options

By configuring these options effectively, you can tailor your accessibility tests to achieve a balance between thoroughness and efficiency, ensuring your web applications are inclusive for all users.

### 1. Enable Accessibility Checks

- **Purpose:** Activate accessibility testing within your automated test suite. This allows you to identify and address accessibility violations that might hinder usability for users with disabilities.
- **Implementation:** Set the `accessibility` property to `true` within your configuration file.

<VerifiedTag value="Verified" />

```bash
accessibility : true
```

### 2. WCAG Version

- **Purpose:** Define the specific Web Content Accessibility Guidelines (WCAG) version your tests should evaluate against. WCAG defines internationally recognized standards for web accessibility.
- **Options:** Common options include WCAG 2.0, WCAG 2.1 Level A, or WCAG 2.1 Level AAA. Each level represents increasing accessibility requirements.
- **Implementation:** Specify the desired WCAG version using the wcagVersion property within your configuration file.

<VerifiedTag value="Verified" />

```bash
accessibility.wcagVersion: 'wcag21a'
```

### 3. Best Practices Checks

- **Purpose:** Include or exclude checks that go beyond the defined WCAG standards but are considered good practices for optimal usability.
- **Default Value:** The default setting is false, focusing strictly on WCAG violations.
- **Implementation:** Enable best practice checks by setting bestPractice to true in your configuration file.

<VerifiedTag value="Verified" />

```bash
accessibility.bestPractice: false
```

### 4. Needs Review

- **Purpose:** Flag potential accessibility issues that might require human evaluation for definitive assessment.
- **Implementation:** Enable needs review checks by setting needsReview to true in your configuration file. This ensures potentially ambiguous issues get flagged for manual review.

<VerifiedTag value="Verified" />

```bash
accessibility.needsReview: true
```
