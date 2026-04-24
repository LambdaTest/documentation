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
url: https://www.testmuai.com/support/docs/accessibility-devtools-settings/
site_name: TestMu AI
slug: accessibility-devtools-settings/
canonical: https://www.testmuai.com/support/docs/accessibility-devtools-settings/
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

This page covers the settings available in the Accessibility DevTools browser extension. These settings apply when you run scans manually through the DevTools panel.

:::note
If you are configuring settings for automated test execution (Selenium, Cypress, Playwright, etc.), see [Configure Accessibility Automation](/support/docs/accessibility-automation-settings/) instead.
:::

## Access DevTools settings

Click on your **profile icon** and then **Settings**.

<img loading="lazy" src={require('../assets/images/accessibility-testing/settings/1.png').default} alt="Accessibility DevTools settings" className="doc_img"/>

## WCAG version

Select which **WCAG version** your DevTools scans should check against. Options include WCAG 2.0, WCAG 2.1 A, WCAG 2.1 AA, WCAG 2.1 AAA, WCAG 2.2 A, and WCAG 2.2 AA. The recommended version is **WCAG 2.1 AA**.

<img loading="lazy" src={require('../assets/images/accessibility-testing/settings/4.png').default} alt="WCAG version selector" className="doc_img"/>

## Review Issues

Some issues require manual review before they can be confirmed as true violations. When this setting is enabled, the scan results include a **Needs Review** category.

<img loading="lazy" src={require('../assets/images/accessibility-testing/settings/5.png').default} alt="Needs Review issues" width="1346" height="647" className="doc_img"/>

To review an issue:

1. Click on the issue to expand it.
2. Select the element you want to evaluate.
3. Click **Yes** to confirm it as an issue, or leave it unconfirmed.
4. Use **Undo** to reverse a confirmation.

<img loading="lazy" src={require('../assets/images/accessibility-testing/settings/6.png').default} alt="Review and confirm issues" className="doc_img"/>

## Best Practices

Enable this setting to include issues that go beyond WCAG requirements but improve overall user experience. Best practice issues are reported separately from WCAG violations.

## Autosave Reports

This option is enabled by default. When active, scan results are automatically saved to the Accessibility dashboard. Toggle it off if you want to review results without persisting them.

<img loading="lazy" src={require('../assets/images/accessibility-testing/settings/3.png').default} alt="Autosave reports setting" className="doc_img"/>

## Related docs

- [Configure Accessibility Automation](/support/docs/accessibility-automation-settings/)
- [Run Your Quick Scan](/support/docs/accessibility-testing-run-quick-scan/)
- [Navigating the Dashboard](/support/docs/accessibility-testing-navigating-dashboard/)
