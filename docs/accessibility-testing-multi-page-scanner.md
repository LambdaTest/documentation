---
id: accessibility-testing-multi-page-scanner
title: Multi Page Scanner
hide_title: false
sidebar_label: Multi Page Scanner
description: Multi-Page Scanner scans across multiple web pages for a comprehensive overview of potential issues and prioritizes fixes impacting the user experience.
keywords:
    - TestMu AI
    - Accessibility
    - Testing
    - DevTools
    - run quick scan
    - test issues
    - Multi Page Scanner
url: https://www.lambdatest.com/support/docs/accessibility-testing-multi-page-scanner/
site_name: LambdaTest
slug: accessibility-testing-multi-page-scanner/
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
          "name": "How to run Multi Page Scanner",
          "item": "https://www.lambdatest.com/support/docs/accessibility-testing-multi-page-scanner/"
        }]
      })
    }}
></script>
The Multi Page Scanner analyzes accessibility across multiple webpages within a website or application, providing a comprehensive overview of potential issues. 

You can use Multi Page Scanner for:

- Testing large websites or applications with multiple interconnected pages.
- Identifying common accessibility patterns and prioritizing fixes that impact the entire user experience.
- Combining with Full Page and Partial Page scans for targeted analysis of specific sections or pages.

## Functionalities of Multi Page Scanner

- Crawls your website based on user-defined settings like starting URL, crawl depth, and exclusion patterns.
- Performs accessibility checks on each scanned page using the same principles as the Full Page Scanner.
- Generates a consolidated report highlighting issues across all scanned pages, prioritizing them based on severity and impact.

## Execute the Full Page Scanner for Your Website

### Prerequisite

- You have to [setup the Accessibility DevTools](/support/docs/accessibility-testing-install-devtools) in your browser.

### Trigger the Accessibility DevTool

- Go to the **Inspect** panel >> **LambdaTest Accessibility DevTools** of your required website.
- Click on the **Multi Page Scan** button to start the scanning for **Accessibility Issue** for that particular page.

<img loading="lazy" src={require('../assets/images/accessibility-testing/multi-page-scanner/1.png').default} alt="automation-dashboard" className="doc_img"/>

### Scan the Multiple Webpages

- Simply add all the URLs of the webpages that you want to scan.
- Click on the **Start Scan** button.

<img loading="lazy" src={require('../assets/images/accessibility-testing/multi-page-scanner/2.png').default} alt="automation-dashboard" className="doc_img"/>

### Review Your Issues

- This will list down all of the issues after scanning all the listed webpages.

<img loading="lazy" src={require('../assets/images/accessibility-testing/multi-page-scanner/3.png').default} alt="automation-dashboard" className="doc_img"/>

- You can also filter out your issues list by selecting any specific page.

<img loading="lazy" src={require('../assets/images/accessibility-testing/multi-page-scanner/4.png').default} alt="automation-dashboard" className="doc_img"/>