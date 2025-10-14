---
id: accessibility-faq
title: Accessibility Tool Frequently Asked Questions!!
hide_title: false
sidebar_label:  FAQs
description: This document consists of frequently asked questions related to the accessibility tool of LambdaTest. It will help you to answer some of your common questions.
keywords:
    - LambdaTest
    - Accessibility
    - Testing
    - selenium
    - Automation
    - Accessibility Testing Settings
    - Accessibility FAQa
url: https://www.lambdatest.com/support/docs/accessibility-faq/
site_name: LambdaTest
slug: accessibility-faq/
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
          "item": "https://www.lambdatest.com/support/docs/accessibility-faq/"
        }]
      })
    }}
></script>

## 1. What is the latest WCAG version supported in the Accessibility Web Engine?
LambdaTest supports **WCAG 2.2 AA**, the latest version of the Web Content Accessibility Guidelines. Additionally, we offer compatibility with the following versions: WCAG 2.0 A, WCAG 2.0 AA, WCAG 2.1 A, WCAG 2.1 AA, WCAG 2.1 AAA, and WCAG 2.2 A.

## 2. Does LambdaTest offer screen reader support?
Yes, LambdaTest offers comprehensive support for screen readers across a variety of platforms:

- **Windows:** Full compatibility with NVDA, ensuring smooth accessibility testing for users relying on this screen reader.
- **macOS:** Seamless integration with VoiceOver, delivering robust testing for macOS users.
- **Mobile:** We are actively enhancing support for VoiceOver on Android and TalkBack on iOS. These mobile screen reader features are in development and will soon be fully supported, ensuring an inclusive and smooth accessibility testing experience across all major mobile platforms.

## 3. Which browsers are supported for accessibility testing?
LambdaTest's accessibility testing tools are optimized for **Chromium-based browsers**, **version 90 and above**, including **Google Chrome, Microsoft Edge**, and other Chromium-based browsers. Using the latest browser version ensures optimal compatibility and performance with our tools.

## 4. Do I need to add explicit wait times to scan for accessibility?
For web accessibility tests, there is no need to add explicit wait times. Our advanced tools automatically detect when DOM elements are fully loaded and trigger accessibility scans immediately. This ensures an efficient, uninterrupted testing process without the need for manual timing adjustments.

For Native App Accessibility testing, the scan is initiated as soon as the user invokes the `lambda-accessibility-scan` hook during the active session.

## 5. How can I enable accessibility testing for my account/organization?
Accessibility testing is a premium feature that requires activation. To enable it, please contact our sales team via our [website](https://www.lambdatest.com/accessibility-automation) or reach out to your account manager. They will provide detailed pricing and plan options. Once you select your plan, our team will activate the feature for your account.

## 6. How many accessibility automation scans can my organization run?
There are no limits on the number of pages you can scan for accessibility, enabling you to conduct thorough web accessibility testing across your entire site. However, there are limitations on the number of parallel tests (or threads) you can run, depending on your subscription plan.

For native app accessibility testing, the number of scans is determined by your native app accessibility plan.

## 7. Why does it show a sub-version (e.g., 1.41.3) even though I selected WCAG 2.1 AA?
When you select WCAG 2.1 AA as your testing standard, you are targeting the overall accessibility guidelines. The sub-versions (e.g., 1.4.1, 1.1.1) represent specific success criteria within that standard. These sub-versions offer more detailed insights, as they reflect individual guidelines within WCAG 2.1 AA, helping you understand your site's accessibility in a more granular way.

## 8. Is it possible to scan private or non-public websites?
Yes, LambdaTest can scan private or non-public websites:

- **DevTools:** When running locally, DevTools can scan your locally hosted projects directly.
- **Accessibility Automation:** Just like using a tunnel to access locally hosted websites, we support tunneling for Accessibility Automation.
- **Native App Accessibility:** Both the App Scanner and Native App Automation tools support tunnel functionality, allowing you to scan private applications or web pages securely.

## 9. On what basis are the different statuses (e.g., critical, minor) assigned?
The severity statuses (e.g., critical, major, minor) are assigned based on several factors determined by a proprietary algorithm:

- The impact on users with disabilities
- The frequency of the issue across the site
- The complexity of the fix required
- Legal compliance implications

This approach ensures that accessibility improvements can be prioritized effectively.

## 10. What frameworks are supported for accessibility testing?
Currently, we support **Selenium**, **Cypress**, **Playwright**, and **Appium** for Native Applications on both **Android** and **iOS** platforms.

## 11. Can I share the dashboard link with others?
Yes, you can share the dashboard link with members of your organization. However, to protect sensitive information, external sharing is restricted to users within your organization. We also provide a **Share Report** feature, allowing you to generate a time-limited link that can be shared with external stakeholders.

## 12. What is the LambdaTest accessibility score and how should it be interpreted?
The LambdaTest accessibility score is a proprietary metric designed to provide a quick overview of your site's accessibility. It is calculated based on:

- The number and severity of issues detected
- Coverage of WCAG success criteria
- Accessibility of key user flows

> A higher score indicates better accessibility, but it is important to consider the score as a general guide rather than a definitive measure of compliance. Always refer to the detailed reports alongside the score for a comprehensive understanding of your site's accessibility.

## 13. How many parallel automated accessibility tests can I run?
The number of parallel automated accessibility tests you can run depends on your automation plan's parallel test limits. For instance, if your plan includes 2 parallels, you can run 2 concurrent tests.

## 14. Can I run tests on mobile apps?
Yes, you can test for accessibility issues on Native Mobile Applications using the **App Scanner** or **Native Accessibility Automation** tools. Refer to the documentation for setup instructions.

## 15. Do you support accessibility testing for PDFs?
Currently, we do not support accessibility testing for PDF documents. Our focus is primarily on web content accessibility. For PDF accessibility, we recommend using specialized PDF accessibility tools or consulting with PDF accessibility experts.

## 16. How many pages can be scanned in a workflow scan for accessibility?
There is no limit on the number of pages that can be scanned in a workflow scan. This enables you to:

- Test entire websites or large web applications comprehensively
- Create custom workflows that cover all critical user journeys
- Perform detailed accessibility audits without artificial constraints

For very large websites, we recommend dividing scans into smaller, logical segments for easier analysis and faster results.

## 17. Does accessibility testing increase latency in automation tests?
There may be a slight increase in latency depending on the total number of commands executed, as we ensure all components and DOM elements (for web) and app tree elements (for native applications) are thoroughly scanned.

## 18. Is LambdaTest’s accessibility testing suite supported for GDPR users?
Yes, all LambdaTest accessibility testing products are fully GDPR-compliant. For more information, please contact your account manager or our support team.

## 19. What engine/tool does LambdaTest use for native app testing?
We use our proprietary accessibility testing engine for **Android** and **iOS** native applications. We continuously expand our App Accessibility guidelines to ensure comprehensive testing support. Visit our page for the latest updates and new requirements.

## 20. Does LambdaTest’s accessibility engine support shadow elements like pop-ups?
Yes, our web accessibility engine supports **Shadow DOM** elements, including pop-ups and other shadow-based components.