---
id: accessibility-devtools-settings
title: Configure Accessibility DevTools
hide_title: false
sidebar_label: Configure Accessibility DevTools
description: Customize your testing experience with TestMu AI Accessibility DevTools' comprehensive settings to meet your specific needs and preferences.
keywords:
    - TestMu AI
    - Accessibility
    - Testing
    - DevTools
    - Accessibility Testing Settings
url: https://www.testmu.ai/support/docs/accessibility-devtools-settings/
site_name: LambdaTest
slug: accessibility-devtools-settings/
canonical: https://www.testmu.ai/support/docs/accessibility-devtools-settings/
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
          "item": `${BRAND_URL}/support/docs/accessibility-devtools-settings/`
        }]
      })
    }}
></script>

<BrandName /> Accessibility DevTools offers a set of settings to configure your Accessibility Tests to ensure comprehensive and effective assessments. Key configuration options include enabling accessibility checks, selecting the appropriate **WCAG version**, and specifying to include **Best Practice** and **Needs Review**.

> Click on your **profile icon** >> **Settings** button.

<img loading="lazy" src={require('../assets/images/accessibility-testing/settings/1.png').default} alt="automation-dashboard" className="doc_img"/>

## Scan Settings

To enable the accessibility testing within your automated test suite, set the `accessibility: true` in your configuration file. You can also define other settings capabilities as described below.

```java
capabilities: [{
  accessibility : true,                 // Enable accessibility testing
  accessibility.wcagVersion: 'wcag21a', // Specify WCAG version (e.g., WCAG 2.1 Level A)
  accessibility.bestPractice: false,    // Exclude best practice issues from results
  accessibility.needsReview: true       // Include issues that need review
}]
```

### WCAG Version

- It defines which **Web Content Accessibility Guidelines (WCAG)** version your tests should adhere to. You can select any WCAG Version to run compliance tests with a specific version. Typically, WCAG 2.0, WCAG 2.1 AA, or WCAG 2.1 AAA are used in general practice, but the recommended version is **WCAG 2.1 AA**.

- To set the wcag version in your automated tests, set the capability `wcagVersion: <YOUR_WCAG_VERSION>` in your configuration file.

```bash
accessibility.wcagVersion: 'wcag21a'
```

<img loading="lazy" src={require('../assets/images/accessibility-testing/settings/4.png').default} alt="automation-dashboard" className="doc_img"/>

### Review Issues

There are certain issues that are required reviews by QA or Developers to mark them as issues and clarifies that it needs to be resolved. Click on the **Review** button in your dashbaord to initiate the process.

To enable the needs review checks in your automated tests, set the capability `needsReview: true` in your configuration file.

```bash
needsReview: true
```

<img loading="lazy" src={require('../assets/images/accessibility-testing/settings/5.png').default} alt="automation-dashboard" width="1346" height="647" className="doc_img"/>

- This will open the list of issues that needs to be reviewed.
- Click on the particular issue >> select that particular element that you want to confirm it as an issue.
- Click on **Yes** option to confirm it as an issue.
- You can also **Undo** that particular issue. This means if you will visit that issue again, you can see an **undo** option which will unlist it again from the list of **confirmed issues**.

<img loading="lazy" src={require('../assets/images/accessibility-testing/settings/6.png').default} alt="automation-dashboard" className="doc_img"/>

### Best Practices

**Best practices** are those issues that may not violate Accessibility guidelines but fixing them will enhance your user experience.

- To enable the best practices checks in your automated tests, set the capability `bestPractice: true` in your configuration file.

```bash
bestPractice: true
```

## Other Settings

### Autosave Reports

>**Note :** By default, this option is activated.

- Toggle to activate / deactivate the option.
- This option ensures that your tests are consistently saved on the dashboard.

<img loading="lazy" src={require('../assets/images/accessibility-testing/settings/3.png').default} alt="automation-dashboard" className="doc_img"/>
