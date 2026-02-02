---
id: accessibility-testing-full-page-scanner
title: Full Page Scanner
hide_title: false
sidebar_label: Full Page Scanner
description: Full Page Scanner scans multiple elements like HTML/CSS code, images, forms, and multimedia elements, ensuring WCAG compliance and automated issue detection.
keywords:
    - TestMu AI
    - Accessibility
    - Testing
    - DevTools
    - run quick scan
    - test issues
    - Full Page Scanner
url: https://www.testmuai.com/support/docs/accessibility-testing-full-page-scanner/
site_name: LambdaTest
slug: accessibility-testing-full-page-scanner/
canonical: https://www.testmuai.com/support/docs/accessibility-testing-full-page-scanner/
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
          "name": "How to run Full Page Scanner",
          "item": `${BRAND_URL}/support/docs/accessibility-testing-full-page-scanner/`
        }]
      })
    }}
></script>
Full Page Scanner is used to analyze the accessibility of entire web pages at once. It goes beyond individual element checks and provides a comprehensive overview of potential accessibility issues across the entire page content.

## Functionalities of Full Page Scanner

- **Scans Multiple elements :** It analyzes various aspects of your webpage, including HTML/CSS code, images, forms, multimedia, and interactive elements.
- **WCAG Compliance Checks :** It identifies potential violations against relevant WCAG guidelines (e.g., missing alt text, insufficient color contrast, keyboard navigation issues).
- **Automated Issue Detection :** It automatically highlights problems and provides detailed descriptions, pinpointing them directly on the scanned page.
- **Prioritization Options:** It prioritizes issues based on severity and potential impact, helping you focus on the most critical ones first.
- **Integration with other tools:** You can integrate the Full Page Scanner with other <BrandName /> features like screen readers and automated checks for a more comprehensive analysis.

## Execute the Full Page Scanner for Your Website

### Prerequisite

- You have to [setup the Accessibility DevTools](/support/docs/accessibility-testing-install-devtools) in your browser.

### Trigger the Accessibility DevTool

- Go to the **Inspect** panel >> **<BrandName /> Accessibility DevTools** of your required website.
- Click on the **Full Page Scan** button to start the scanning for **Accessibility Issue** for that particular page.

<img loading="lazy" src={require('../assets/images/accessibility-testing/full-page-scanner/1.png').default} alt="automation-dashboard" className="doc_img"/>

### Review Your Issues

- This will list down all of the issues after scanning your complete webpage.
- You can click on those issues to check with which particular element it is causing issue.

<img loading="lazy" src={require('../assets/images/accessibility-testing/full-page-scanner/2.png').default} alt="automation-dashboard" className="doc_img"/>
