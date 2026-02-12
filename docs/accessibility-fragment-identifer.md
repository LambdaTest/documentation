---
id: accessibility-fragment-identifier
title: Accessibility Fragment Identifier
sidebar_label: Fragment Identifier
description: The Fragment Identifier feature in the Accessibility Tool allows you to treat URLs with different fragment identifiers.
keywords:
  - TestMu AI
  - Accessibility
  - Testing
  - Manual
  - Accessibility Testing Settings
  - Fragment identifier
  - wcag
url: https://www.testmuai.com/support/docs/accessibility-fragment-identifier/
site_name: TestMu AI
slug: accessibility-fragment-identifier/
canonical: https://www.testmuai.com/support/docs/accessibility-fragment-identifier/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
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
          "name": "Accessibility Android Test",
          "item": `${BRAND_URL}/support/docs/accessibility-android-test/`
        }]
      })
    }}
></script>

# Fragment Identifier for Accessibility Testing

---

The Fragment Identifier feature in the Accessibility Tool allows you to treat URLs with different fragment identifiers (the part after `#`) as separate entities for accessibility issue tracking and management. This advanced feature enhances the precision of accessibility audits by categorizing issues based on specific page sections or states.

## Enabling Fragment Identifier

---

To enable the Fragment Identifier feature:

1. Navigate to **Accessibility DevTools** → **Settings**
2. Go to **Other Settings** section
3. Locate the **Fragment Identifier** option
4. Toggle the setting to **enabled**

<img loading="lazy" src={require('../assets/images/accessibility-testing/features/accessibility-fragment-identifier.png').default} alt="Native Mobile App Testing" className="doc_img" style={{ width: "650px", height: "auto"}}/>

> **Note:** This feature is **disabled by default**. When disabled, URLs with different fragment identifiers are treated as the same URL for issue tracking.

## How Fragment Identifier Works

---

Fragment identifiers are the portion of a URL that comes after the `#` symbol. They typically reference specific sections, anchors, or states within a webpage.

### Default Behavior (Feature Disabled)

```
URL: https://example.com/page#section1
URL: https://example.com/page#section2
URL: https://example.com/page#section3

Result: All issues grouped under "https://example.com/page"
```

### Enhanced Behavior (Feature Enabled)

```
URL: https://example.com/page#section1
URL: https://example.com/page#section2
URL: https://example.com/page#section3

Result: Issues categorized separately:
- "https://example.com/page#section1"
- "https://example.com/page#section2"
- "https://example.com/page#section3"
```

## Benefits

---

1. **Granular Issue Tracking**: Track accessibility issues with precision for specific page sections
2. **Enhanced SPA Support**: Better support for modern single-page applications using hash-based routing
3. **Improved Workflow**: Assign and manage issues for specific page areas independently
4. **Detailed Reporting**: Generate more comprehensive reports with section-specific insights


