---
id: accessibility-automation-settings
title: Configure Accessibility Automation
hide_title: false
sidebar_label: Configure Accessibility Automation
description: Customize your testing with TestMu AI Accessibility DevTools' extensive settings, tailored to meet your specific needs and preferences.
keywords:
    - TestMu AI
    - Accessibility
    - Testing
    - DevTools
    - Accessibility Testing Settings
url: https://www.testmu.ai/support/docs/accessibility-automation-settings/
site_name: LambdaTest
slug: accessibility-automation-settings
canonical: https://www.testmu.ai/support/docs/accessibility-automation-settings/
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

```bash
accessibility : true
```

### 2. WCAG Version

- **Purpose:** Define the specific Web Content Accessibility Guidelines (WCAG) version your tests should evaluate against. WCAG defines internationally recognized standards for web accessibility.
- **Options:** Common options include WCAG 2.0, WCAG 2.1 Level A, or WCAG 2.1 Level AAA. Each level represents increasing accessibility requirements.
- **Implementation:** Specify the desired WCAG version using the wcagVersion property within your configuration file.

```bash
accessibility.wcagVersion: 'wcag21a'
```

### 3. Best Practices Checks

- **Purpose:** Include or exclude checks that go beyond the defined WCAG standards but are considered good practices for optimal usability.
- **Default Value:** The default setting is false, focusing strictly on WCAG violations.
- **Implementation:** Enable best practice checks by setting bestPractice to true in your configuration file.

```bash
accessibility.bestPractice: false
```

### 4. Needs Review

- **Purpose:** Flag potential accessibility issues that might require human evaluation for definitive assessment.
- **Implementation:** Enable needs review checks by setting needsReview to true in your configuration file. This ensures potentially ambiguous issues get flagged for manual review.

```bash
accessibility.needsReview: true
```
