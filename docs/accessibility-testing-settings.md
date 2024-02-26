---
id: accessibility-testing-settings
title: Configure Settings
hide_title: false
sidebar_label: Configure Settings
description: Customize your testing experience with LambdaTest Accessibility DevTools' comprehensive settings to meet your specific needs and preferences.
keywords:
    - LambdaTest
    - Accessibility
    - Testing
    - DevTools
    - Accessibility Testing Settings
url: https://www.lambdatest.com/support/docs/accessibility-testing-settings/
site_name: LambdaTest
slug: accessibility-testing-settings/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Accessibility Testing Settings",
          "item": "https://www.lambdatest.com/support/docs/accessibility-testing-settings/"
        }]
      })
    }}
></script>
LambdaTest Accessibility DevTools offer a comprehensive set of settings to customize your testing experience and tailor it to your specific needs.

- Click on your **profile icon** >> **Settings** button.

<img loading="lazy" src={require('../assets/images/accessibility-testing/settings/1.png').default} alt="automation-dashboard" className="doc_img"/>

## Scan Settings

### WCAG Version

You can select any WCAG Version to run compliance tests with a specific version.

> The recommended version is **WCAG 2.1 AA**.

<img loading="lazy" src={require('../assets/images/accessibility-testing/settings/4.png').default} alt="automation-dashboard" className="doc_img"/>

### Review Issues

There are certain issues that are required reviews by QA or Developers to mark them as issues and clarifies that it needs to be resolved.

- Click on the **Review** button.

<img loading="lazy" src={require('../assets/images/accessibility-testing/settings/5.png').default} alt="automation-dashboard" width="1346" height="647" className="doc_img"/>

- This will open the list of issues that needs to be reviewed.
- Click on the particular issue >> select that particular element that you want to confirm it as an issue.
- Click on **Yes** option to confirm it as an issue.
- You can also **Undo** that particular issue. This means if you will visit that issue again, you can see an **undo** option which will unlist it again from the list of **confirmed issues**.

<img loading="lazy" src={require('../assets/images/accessibility-testing/settings/6.png').default} alt="automation-dashboard" className="doc_img"/>

### Best Practices

**Best practices** are those issues that may not violate Accessibility guidelines but fixing them will enhance your user experience.

## Other Settings

### Autosave Reports

>**Note :** By default, this option is activated.

- Toggle to activate / deactivate the option.
- This option ensures that your tests are consistently saved on the dashboard.

<img loading="lazy" src={require('../assets/images/accessibility-testing/settings/3.png').default} alt="automation-dashboard" className="doc_img"/>