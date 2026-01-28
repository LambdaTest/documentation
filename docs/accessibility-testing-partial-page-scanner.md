---
id: accessibility-testing-partial-page-scanner
title: Partial Page Scanner
hide_title: false
sidebar_label: Partial Page Scanner
description: Partial Page Scanner scans specific webpage elements, tests components, investigates reported issues and evaluates changes made to a specific area.
keywords:
    - TestMu AI
    - Accessibility
    - Testing
    - DevTools
    - run quick scan
    - test issues
    - Partial Page Scanner
url: https://www.testmuai.com/support/docs/accessibility-testing-partial-page-scanner/
site_name: LambdaTest
slug: accessibility-testing-partial-page-scanner/
canonical: https://www.testmuai.com/support/docs/accessibility-testing-partial-page-scanner/
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
          "name": "How to run Partial Page Scanner",
          "item": `${BRAND_URL}/support/docs/accessibility-testing-partial-page-scanner/`
        }]
      })
    }}
></script>
While the [Full Page Scanner](/support/docs/accessibility-testing-full-page-scanner/) analyzes an entire webpage, the Partial Page Scanner provides a more focused approach to accessibility evaluation.

It analyzes specific regions or elements within a webpage instead of the entire page. It is Ideal for:

- Testing specific components like forms, interactive elements, or embedded content.
- Investigating reported accessibility issues on particular sections of a webpage.
- Evaluating accessibility changes made to a specific area.

## Functionalities of Partial Page Scanner

- **Manual Selection :** Choose the specific area you want to scan by highlighting it on the webpage.
- **Targeted Analysis :** Focuses on the selected area and identifies potential accessibility issues within that region.
- **WCAG Compliance Checks :** Similar to the Full Page Scanner, it checks for violations against relevant WCAG guidelines within the chosen area.
- **Detailed Reporting :** Provides a report highlighting identified issues, descriptions, and WCAG references, specific to the scanned region.

## Execute the Partial Page Scanner for Your Website

### Prerequisite

- You have to [setup the Accessibility DevTools](/support/docs/accessibility-testing-install-devtools) in your browser.

### Trigger the Accessibility DevTool

- Go to the **Inspect** panel >> **<BrandName /> Accessibility DevTools** of your required website.
- Click on the **Partial Page Scan** button to start the scanning for **Accessibility Issue** for that particular section of the webpage.

<img loading="lazy" src={require('../assets/images/accessibility-testing/partial-page-scanner/1.png').default} alt="automation-dashboard" className="doc_img"/>

### Select Your Desired Section of the Webpage

- To start the scan, you will have to select a particular section of your webpage for which you want the analysis report.
- You can select any particular section for scanning via two ways:
  - **Element Selection :** You can select that particular element via naigating to that tag from the right panel.
  - **Mouse Selection :** You will have to toggle the **Mouse Selection** to **true** and select that particular element by clicking on the webpage directly.

- Click on **Start Scan** button.

    <img loading="lazy" src={require('../assets/images/accessibility-testing/partial-page-scanner/2.png').default} alt="automation-dashboard" className="doc_img"/>

    - It will scan that particular section and will list down the issues with that section (if found any).

    <img loading="lazy" src={require('../assets/images/accessibility-testing/partial-page-scanner/3.png').default} alt="automation-dashboard" className="doc_img"/>