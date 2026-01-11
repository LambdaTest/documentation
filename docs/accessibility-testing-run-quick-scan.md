---
id: accessibility-testing-run-quick-scan
title: Run Your Quick Scan
hide_title: false
sidebar_label: Run Your Quick Scan
description: Improve your website's accessibility by running a quick scan with TestMu AI Accessibility DevTools and efficiently review and resolve any issues found.
keywords:
    - TestMu AI
    - Accessibility
    - Testing
    - DevTools
    - run quick scan
    - test issues
url: https://www.testmu.ai/support/docs/accessibility-testing-run-quick-scan
site_name: LambdaTest
slug: accessibility-testing-run-quick-scan
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
          "name": "What is Accessibility Testing",
          "item": `${BRAND_URL}/support/docs/accessibility-testing-run-quick-scan/`
        }]
      })
    }}
></script>
## Prerequisite

- You have to [setup the Accessibility DevTools](/support/docs/accessibility-testing-install-devtools) in your browser.

## Trigger the Accessibility DevTool

- Go to the **Inspect** panel >> **<BrandName /> Accessibility DevTools** of your required website.
- Click on the **Full Page Scan** button to start the scanning for **Accessibility Issue** for that particular page.

<img loading="lazy" src={require('../assets/images/accessibility-testing/full-page-scanner/1.png').default} alt="automation-dashboard" className="doc_img"/>

## Review Your Issues

- This will list down all of the issues after scanning your complete webpage.
- You can click on those issues to check with which particular element it is causing issue.

<img loading="lazy" src={require('../assets/images/accessibility-testing/full-page-scanner/2.png').default} alt="automation-dashboard" className="doc_img"/>
