---
id: accessibility-passed-test-cases
title: Accessibility Passed Test Cases
sidebar_label: Passed Test Cases
description: The Fragment Identifier feature in the Accessibility Tool allows you to treat URLs with different fragment identifiers.
keywords:
  - TestMu AI
  - Accessibility
  - Testing
  - Manual
  - Accessibility Testing Settings
  - Fragment identifier
  - wcag
url: https://www.testmu.ai/support/docs/accessibility-passed-test-cases
site_name: LambdaTest
slug: accessibility-passed-test-cases
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
          "item": `${BRAND_URL}/support/docs/accessibility-passed-test-cases/`
        }]
      })
    }}
></script>

# Pass Audits Visibility

Pass Audits Visibility shows accessibility checks that pass WCAG compliance alongside violations in your test results. By default, accessibility reports only show violations and incomplete checks. This feature provides complete transparency by including the accessibility requirements your application already meets.

## Enable Pass Audits



### Manual Testing
---

1. Navigate to **Accessibility Tool** → **Settings** → **Other Settings**
2. Enable **Show Pass Audits**
3. Run your accessibility scan to see passed audits in results

<img loading="lazy" src={require('../assets/images/accessibility-testing/features/accessibility-passed-test-cases.png').default} alt="Accessibility Passed Test Cases" className="doc_img" style={{ width: "650px", height: "auto"}}/>



### Automation Testing
---

Add the `accessibility.passedTestCases: true`  capability to your test configuration:

```javascript
'LT:Options': {
    "accessibility": true,
    "accessibility.wcagversion": "wcag21aa",
    "accessibility.bestPractice": true,
    "accessibility.needsReview": false,
    "accessibility.captureScreenshot": false,
    "accessibility.passedTestCases": true
}
```



## Results and Dashboard
---
When enabled, passed test cases will appear in the Accessibility tab of your Automation Dashboard:

<img loading="lazy" src={require('../assets/images/accessibility-testing/features/accessibility-passed-test-cases-example.png').default} alt="Accessibility Passed Test Cases Example" className="doc_img" />




## Use Cases
---
**Regression Testing**

Verify that code changes don't break previously passing accessibility checks:

```
Before: 42 passes, 12 violations
After: 39 passes, 15 violations
Alert: 3 accessibility regressions detected
```

**Compliance Reporting**

Generate comprehensive reports showing both compliance achievements and remaining work:

- Demonstrate existing accessibility compliance to stakeholders
- Track accessibility progress over development cycles
- Document WCAG compliance status for audits

**Development Confidence**

Validate that accessibility implementations are working correctly and provide positive feedback to development teams about what they're doing right.
