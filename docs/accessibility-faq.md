---
id: accessibility-faq
title: Accessibility Tool Frequently Asked Questions!!
hide_title: false
sidebar_label:  FAQs
description: This document consists of frequently asked questions related to the accessibility tool of TestMu AI. It will help you to answer some of your common questions.
keywords:
    - TestMu AI
    - Accessibility
    - Testing
    - selenium
    - Automation
    - Accessibility Testing Settings
    - Accessibility FAQa
url: https://www.testmu.ai/support/docs/accessibility-faq/
site_name: LambdaTest
slug: accessibility-faq/
canonical: https://www.testmu.ai/support/docs/accessibility-faq/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
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
          "name": "Accessibility FAQ",
          "item": `${BRAND_URL}/support/docs/accessibility-faq/`
        }]
      })
    }}
></script>
## What's the latest WCAG version supported?
We adhere to **WCAG 2.2 AA**, the most recent version of the Web Content Accessibility Guidelines. In addition to this, we support the following versions: WCAG 2.0 A, WCAG 2.0 AA, WCAG 2.1 A, WCAG 2.1 AA, WCAG 2.1 AAA, and WCAG 2.2 A.

## Do you have screen reader support?
Yes, we provide comprehensive screen reader support:

- **Windows:** Full support for popular screen readers like JAWS and NVDA.
- **macOS:** Complete support for VoiceOver.
- **Mobile:** We actively develop support for VoiceOver on Android and TalkBack on iOS. These mobile screen reader supports are expected to be fully implemented soon, enhancing our accessibility testing capabilities across all major platforms.

## Which browsers are supported?
Our accessibility testing tools are optimized for **Chromium-based** browsers, **version 90 and above**. This includes **Google Chrome, Microsoft Edge, and other Chromium-based browsers**. Using the latest version ensures the best compatibility and performance with our tools.

## Do I need to add explicit wait time to scan for accessibility?
No, you don't need to add explicit wait times. Our advanced tools are designed with built-in intelligence to detect when DOM elements are loaded automatically. They then immediately initiate accessibility scans for these elements. This feature ensures a seamless and efficient testing process without manual intervention for timing.

## How can I enable accessibility for my account/organization?
Accessibility testing is a premium feature that requires activation. To enable it, contact our sales team through our [website](https://www.lambdatest.com/accessibility-automation) or your account manager. They will provide you with pricing details and plan options. Once you've chosen a plan, our team will activate the feature for your account.

## How many accessibility automation scans does one organization get?
Although there is limitations on the number of parallel tests or threads you can run but there are no restrictions on the number of pages you can scan for thorough accessibility testing.

## Why is it showing a sub-version (e.g. 1.41.3) even though I have selected WCAG 2.1 AA?
WCAG 2.1 AA is the overall accessibility standard you've selected for testing. The sub-versions (like 1.4.1 or 1.1.1) are specific guidelines within that standard. These sub-versions represent individual success criteria that fall under WCAG 2.1 AA. While you test against the broader WCAG 2.1 AA standard, the results show compliance with these more specific guidelines to provide detailed insights into your site's accessibility.

## Is it possible to scan private or non-public websites?
Yes, our system is fully capable of scanning private or non-public websites.

- **DevTools:** DevTools runs on your local system, it can directly scan your locally hosted projects.
- **Accessibility Automation:**  The same way you use a tunnel to access any websites hosted locally, we can do the same for Accessibility Automation.

## On what basis are the different statuses (e.g., critical, minor) assigned?
Our system uses a proprietary algorithm to assign severity statuses to accessibility issues. These statuses (such as critical, major, minor) are based on several factors:

- Impact on user experience for people with disabilities
- Frequency of the issue across the site
- Complexity of the fix required
- Legal compliance implications
This nuanced approach helps you prioritize your accessibility improvements effectively.

## What frameworks are supported?
Currently we offer support for Selenium, Cypress and PlayWright.

## Can I share the dashboard link with anyone?
Yes, you can share dashboard links with anyone within your organization. However, for security reasons, access is limited to members of your organization to protect potentially sensitive information about your web applications.

## What is the accessibility score given by <BrandName /> and how should it be interpreted?
The <BrandName /> accessibility score is a proprietary metric designed to give you a quick overview of your site's accessibility. It's calculated based on:
- Number and severity of issues detected
- Coverage of WCAG success criteria
- Overall accessibility of key user flows
> A higher score indicates better accessibility, but it's important to note that this score should be used as a general guide rather than a definitive measure of compliance. Always review the detailed reports alongside the score for a comprehensive understanding of your site's accessibility.

## How many parallel automated accessibility tests can I run?
The number of parallel automated accessibility tests you can run depends on the number of parallels included in your automation plan. For example, if your plan includes 2 parallels, you can run 2 concurrent tests.

## Can I run tests on mobile browsers/apps?
Currently, our accessibility testing tools are optimized for desktop web environments. Mobile browser and app testing is not supported at this time. However, we recognize the growing importance of mobile accessibility and are actively working on expanding our capabilities to include mobile platforms in future updates.

## Do you support accessibility testing for PDFs?
At present, we do not support accessibility testing for PDF documents. Our focus is on web content accessibility. For PDF accessibility, we recommend using specialized PDF accessibility tools or consulting with PDF accessibility experts.

## How many pages can be scanned for accessibility in a workflow scan?
There is currently no limitation on the number of pages that can be scanned in a workflow scan. This allows you to:

- Test entire websites or large web applications comprehensively
- Create custom workflows that cover all critical user journeys
- Conduct thorough accessibility audits without artificial constraints
However, for very large sites, we recommend breaking scans into logical segments for more manageable analysis and faster results.
