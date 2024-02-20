---
id: accessibility-testing
title: Accessibility Testing
hide_title: false
sidebar_label: Accessibility Testing
description: Accessibility Testing
keywords:
    - LambdaTest
    - Accessibility
    - Testing
url: https://www.lambdatest.com/support/docs/accessibility-testing/
site_name: LambdaTest
slug: accessibility-testing/
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
          "name": "What is Accessibility Testing",
          "item": "https://www.lambdatest.com/support/docs/accessibility-testing/"
        }]
      })
    }}
></script>

Imagine you have to navigate a website without a sight, relying solely on a screen reader to guide you. You are trying to interact with an app or a web-app using only voice commands due to limited mobility. Sounds scary!

This is the reality for millions of people with disabilities who encounter barriers when interacting with digital products. Accessibility testing aims to break down these barriers, ensuring everyone has equal access to information and functionality online.

## What is Accessibility Testing

Accessibility testing is the process of evaluating and improving web apps, websites, and mobile apps to ensure they are usable by everyone, regardless of their abilities.

Accessibility testing ensures that your product is usable by people with disabilities. This includes people with:

- **Visual impairments:** Blindness, low vision, color blindness.
- **Motor impairments:** Difficulty using a mouse or keyboard, relying on assistive technologies.
- **Hearing impairments:** Deafness, hearing loss, relying on captions and transcripts.
- **Cognitive impairments:** Difficulty focusing, understanding complex information, needing simpler interfaces.

## How to Setup the Accessibility DevTools

**Step 1:** Go to the Accessibility Dashboard and click on the **Download Plugin** button.

<img loading="lazy" src={require('../assets/images/accessibility-testing/1.png').default} alt="automation-dashboard" className="doc_img"/>

**Step 2:** This will redirect you to the **Chrome Web Store** from where you can download the extension.

- Click on **Add to Chrome** button to install the extension and pin the extension.

<img loading="lazy" src={require('../assets/images/accessibility-testing/2.png').default} alt="automation-dashboard" className="doc_img"/>

**Step 3:** Go to the **Inspect** panel of your desired website. Switch to the **Accessibility DevTools** panel.

- Login to your LambdaTest account.

<img loading="lazy" src={require('../assets/images/accessibility-testing/3.png').default} alt="automation-dashboard" className="doc_img"/>

## Select Your Type of Scan

Now, you need to select the type of scan as per your requirement:

### Full Page Scan

[Full Page Scan](/support/docs/full-page-scanner) gives you the comprehensive analysis of entire web page for accessibility compliance & best practices.

### Partial Page Scan

[Partial Page Scan](/support/docs/partial-page-scanner) gives you the accessibility check for selected sections or elements within a web page.

### Multi Page Scan

[Multi Page Scan](/support/docs/multi-page-scanner) assess accessibility across various pages for site-wide compliance.

### Workflow Scan

[Workflow Scan](/support/docs/workflow-scanner) sequentially ensure accessibility standards across multiple pages or flows.