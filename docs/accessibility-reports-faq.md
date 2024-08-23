---
id: accessibility-reports-faq
title: Reporting and Analysis
hide_title: false
sidebar_label: Reporting and Analysis
description: This document consists of frequently asked questions related to the accessibility tool of LambdaTest. It will help you to answer some of your common questions.
keywords:
    - LambdaTest
    - Accessibility
    - Testing
    - selenium
    - Automation
    - Accessibility Testing Settings
    - Accessibility FAQa
url: https://www.lambdatest.com/support/docs/accessibility-reports-faq/
site_name: LambdaTest
slug: accessibility-reports-faq/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
          "name": "Accessibility FAQ",
          "item": "https://www.lambdatest.com/support/docs/accessibility-reports-faq/"
        }]
      })
    }}
></script>

### On what basis are the different statuses (e.g., critical, minor) assigned?
Our system uses a proprietary algorithm to assign severity statuses to accessibility issues. These statuses (such as critical, major, minor) are based on several factors:

- Impact on user experience for people with disabilities
- Frequency of the issue across the site
- Complexity of the fix required
- Legal compliance implications
This nuanced approach helps you prioritize your accessibility improvements effectively.

### What frameworks are supported?
We offer broad support for popular testing frameworks:

- **Selenium:** Ideal for Java, Python, C#, and other language users.
- **Cypress:** Perfect for modern web testing with JavaScript.
- **Playwright:** Great for cross-browser testing with a single API.
Each framework is fully integrated with our accessibility testing tools, allowing you to incorporate accessibility checks into your existing test suites seamlessly.

### Can I share the dashboard link with anyone?
Yes, you can share dashboard links with anyone within your organization. This feature promotes collaboration and transparency in your accessibility efforts. However, for security reasons, access is limited to members of your organization to protect potentially sensitive information about your web applications.

### What is the accessibility score given by LambdaTest and how should it be interpreted?
The LambdaTest accessibility score is a proprietary metric designed to give you a quick overview of your site's accessibility. It's calculated based on:
- Number and severity of issues detected
- Coverage of WCAG success criteria
- Overall accessibility of key user flows
> A higher score indicates better accessibility, but it's important to note that this score should be used as a general guide rather than a definitive measure of compliance. Always review the detailed reports alongside the score for a comprehensive understanding of your site's accessibility.