---
id: accessibility-testing-workflow-scanner
title: Workflow Scanner
hide_title: false
sidebar_label: Workflow Scanner
description: Enhance website accessibility with Workflow Scan, a tool that records and analyzes real-time interactions to ensure easy navigation for users with disabilities.
keywords:
    - TestMu AI
    - Accessibility
    - Testing
    - DevTools
    - run quick scan
    - test issues
    - Workflow Scanner
url: https://www.testmuai.com/support/docs/accessibility-testing-workflow-scanner/
site_name: LambdaTest
slug: accessibility-testing-workflow-scanner/
canonical: https://www.testmuai.com/support/docs/accessibility-testing-workflow-scanner/
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
          "name": "How to run Workflow Scanner",
          "item": `${BRAND_URL}/support/docs/accessibility-testing-workflow-scanner/`
        }]
      })
    }}
></script>
Workflow Scan allows you to record multiple real-time interactions and page loads within a user journey on a website and then analyze them for accessibility issues. This helps ensure that users with disabilities can easily navigate and interact with your website across different scenarios.

## Functionalities of Workflow Scan:

- **Identify real-world accessibility issues :** Goes beyond static page analysis and identifies problems users might encounter during interaction.
- **Test complex user flows :** Ensures accessibility throughout navigation, forms, and interactive elements.
- **Save time and effort :** Tests multiple pages at once without needing individual scans.
- **Prioritize issues based on usage :** Focuses on problems encountered in typical user journeys.

## Execute the Full Page Scanner for Your Website

### Prerequisite

- You have to [setup the Accessibility DevTools](/support/docs/accessibility-testing-install-devtools) in your browser.

### Trigger the Accessibility DevTool

- Go to the **Inspect** panel >> **<BrandName /> Accessibility DevTools** of your required website.
- Click on the **Workflow Scan** button to start the scanning for **Accessibility Issue** for that particular page.

<img loading="lazy" src={require('../assets/images/accessibility-testing/workflow-scanner/1.png').default} alt="automation-dashboard" className="doc_img"/>

### Review Your Issues

- This will list down all of the issues after scanning all of your webpages that you have searched for.

<img loading="lazy" src={require('../assets/images/accessibility-testing/workflow-scanner/2.png').default} alt="automation-dashboard" className="doc_img"/>