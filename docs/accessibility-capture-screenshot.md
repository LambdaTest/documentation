---
id: accessibility-capture-screenshot
title: Accessibility Capture Screenshot
sidebar_label: Capture Screenshot
description: The Fragment Identifier feature in the Accessibility Tool allows you to treat URLs with different fragment identifiers.
keywords:
  - TestMu AI
  - Accessibility
  - Testing
  - Manual
  - Accessibility Testing Settings
  - Fragment identifier
  - wcag
url: https://www.testmu.ai/support/docs/accessibility-capture-screenshot
site_name: LambdaTest
slug: accessibility-capture-screenshot
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
          "name": "Accessibility Android Test",
          "item": `${BRAND_URL}/support/docs/accessibility-capture-screenshot/`
        }]
      })
    }}
></script>

# Capture Screenshot for Accessibility Testing

Automatically capture visual evidence of accessibility issues during automated testing. Screenshots include red bounding boxes that highlight the exact location of accessibility violations, providing immediate visual context for debugging and issue resolution.

## Enable Capture Screenshot


### Manual Testing

---

1. Navigate to **Accessibility Tool** → **Settings** → **Other Settings**
2. Enable **Capture Screenshots**
3. Run your accessibility scan to capture annotated screenshots
   <img loading="lazy" src={require('../assets/images/accessibility-testing/features/accessibility-capture-screenshot.png').default} alt="Accessibility Passed Test Cases" className="doc_img" style={{ width: "650px", height: "auto"}}/>

### Automation Testing

---

Add the `accessibility.captureScreenshot: true` capability to your test configuration:

```javascript
'LT:Options': {
    "accessibility": true,
    "accessibility.wcagversion": "wcag21aa",
    "accessibility.bestPractice": true,
    "accessibility.needsReview": false,
    "accessibility.captureScreenshot": true,
    "accessibility.passedTestCases": false
}
```

## Understanding Screenshot Capture

---

### Visual Annotations

Screenshots include visual indicators that help identify accessibility issues:

- **Red Bounding Boxes**: Highlight elements with accessibility violations
- **Full Page Coverage**: Captures entire webpage content, not just visible viewport
- **Issue Mapping**: Each highlighted area corresponds to specific violations in the report

> This feature is available across all supported testing frameworks and in Accessibility Devtools

## Results and Dashboard

---

### Accessibility Dashboard

When enabled, screenshots appear in the Accessibility tab of your Automation Dashboard:

<img loading="lazy" src={require('../assets/images/accessibility-testing/features/accessibility-capture-screenshot-example.png').default} alt="Accessibility Passed Test Cases" className="doc_img" />

- **Image View Section**: Dedicated area for viewing captured screenshots
- **Thumbnail Gallery**: Quick overview of all captured screenshots from the test session
- **Issue Correlation**: Click on violations to see corresponding highlighted areas on screenshots

## When to Enable

---

**Enable screenshot capture when:**

- Debugging complex accessibility issues that require visual context
- Creating comprehensive accessibility documentation
- Working with teams that need visual evidence for issue understanding
- Conducting accessibility audits or compliance reviews
