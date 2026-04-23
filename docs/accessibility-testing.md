---
id: accessibility-testing
title: TestMu AI Accessibility Testing
hide_title: false
sidebar_label: Accessibility Testing
description: Make your digital products usable for people with disabilities through comprehensive testing and improvement using TestMu AI Accessibility DevTools
keywords:
    - TestMu AI
    - Accessibility
    - Testing
    - DevTools
url: https://www.testmuai.com/support/docs/accessibility-testing/
site_name: TestMu AI
slug: accessibility-testing/
canonical: https://www.testmuai.com/support/docs/accessibility-testing/
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
          "item": `${BRAND_URL}/support/docs/accessibility-testing/`
        }]
      })
    }}
></script>

- **Manual Testing (DevTools)** -- browser-based scanning and assisted testing for websites and web apps.
- **Automation** -- automated accessibility checks in supported test frameworks (Selenium, Cypress, Playwright, and more).
- **Test Scheduling** -- recurring site scans driven by sitemaps, crawlers, or manual URL lists inside the Accessibility product (not the same doc set as the standalone Web Scanner product).
- **Web Scanner** -- the separate **Web Scanner** product in the docs sidebar, where you add URLs and run accessibility scans on that surface. Use Accessibility **Test Scheduling** when your workflow is native to Accessibility scheduling, not Web Scanner.
- **Mobile App Testing** -- manual and automated accessibility testing for native Android and iOS apps, including KaneAI-authored flows.
- **Reports** -- dashboard, issue views, [exporting and sharing](/support/docs/accessibility-exporting-sharing-reports/), passed tests, and bug reporting (issue-tracker connections live under **External integrations** in the sidebar, not inside Reports).
- **Integrations** (sidebar) -- **Integrations with TestMu AI products** (Web Scanner, KaneAI, HyperExecute with Selenium, and related surfaces) and **External integrations** (CI/CD, Jira/Slack) for how Accessibility connects to the rest of your toolchain.
- **Features** (sidebar: **Web**, then **Mobile**, then **Common**) -- **Web**: hide/restore, AI issue detection, capture screenshot, web score, fragment identifier, and PDF scanning; **Mobile**: scan tags; **Common**: remediation guidance and analytics widgets.
- **Checklists** -- coverage summaries, WCAG rule repositories, and manual verification guidance.
- **Accessibility MCP Server** -- AI-assisted accessibility analysis only. For installing and configuring the **platform-wide** TestMu AI MCP Server (all tools), use [TestMu AI MCP Server](/support/docs/testmu-mcp-server/) in the main docs sidebar.

## What is Accessibility Testing?

| If you want to... | Start here |
|-----|-----|
| Test a website manually | [Manual Testing (DevTools)](/support/docs/accessibility-devtools/) |
| Run your first browser scan quickly | [Run a Quick Scan](/support/docs/accessibility-testing-run-quick-scan/) |
| Run automated web tests | [Automation](/support/docs/accessibility-automation/) |
| Schedule recurring scans | [Test Scheduling](/support/docs/accessibility-test-scheduling/) |
| Use Web Scanner for scans | [Web Scanner](/support/docs/web-scanner-getting-started/) |
| Test a mobile app manually | [Manual App Scanner](/support/docs/accessibility-app-scanner/) |
| Run mobile automation | [Appium Automation](/support/docs/accessibility-native-app-automation-test/) |
| Author mobile flows in KaneAI | [KaneAI Mobile App Testing](/support/docs/kaneai-mobile-app-accessibility/) |
| View reports and issues | [Reports](/support/docs/accessibility-testing-navigating-dashboard/) |
| Connect CI/CD or Jira/Slack | [CI/CD Integration Guide](/support/docs/accessibility-cicd-integration-guide/) · [Integrations (Jira / Slack)](/support/docs/accessibility-report-integrations/) |
| Look up supported rules and gaps | [Web](/support/docs/accessibility-web-what-we-cover/) · [iOS](/support/docs/accessibility-ios-what-we-cover/) · [Android](/support/docs/accessibility-android-what-we-cover/) |
| Use AI-assisted analysis | [Accessibility MCP Server](/support/docs/accessibility-mcp-server/) |

This includes people with:

- **Visual impairments:** Blindness, low vision, color blindness.
- **Motor impairments:** Difficulty using a mouse or keyboard, relying on assistive technologies.
- **Hearing impairments:** Deafness, hearing loss, relying on captions and transcripts.
- **Cognitive impairments:** Difficulty focusing, understanding complex information, needing simpler interfaces.

## Why Accessibility Testing is Important?

:::info
Based on [**WebAIM's research**](https://webaim.org/projects/million/), there is a significant disparity in digital inclusivity, with **95.9%** of the top 1 million websites not meeting basic accessible standards. This disparity highlights the importance of accessibility testing to ensure digital spaces are accessible to all.
:::

The following explains why accessibility testing is essential:

- **Meeting Accessibility Standards:** Ensuring your platform meets essential accessibility guidelines such as WCAG, ADA, and Section 508 not only reduces legal risks but also supports inclusivity and provides equal access for all users.
- **Digital Inclusivity:** Users with disabilities can access content, eliminating barriers for those with visual, auditory, or motor impairments.
- **Wider Audience Reach:** Over 2 billion people worldwide live with impairments. By using accessibility testing, you can reach this untapped market and grow your clientele.
- **Improved Usability for All Users:** Features like enhanced colour contrast, keyboard navigation, and alternate text make your website easier to use for all users.
- **Future-Proofing Your Digital Presence:** Using inclusive design now guarantees that your platform will remain ahead of the curve and relevant as accessibility standards change.

## The European Accessibility Act (EAA)

>  The [European Accessibility Act (EAA)](https://accessible-eu-centre.ec.europa.eu/content-corner/news/eaa-comes-effect-june-2025-are-you-ready-2025-01-31_en), effective from June 2025, is a groundbreaking regulation made to improve accessibility across the European Union. This act guarantees the accessibility of digital products and services to all individuals, including the 135 million people living with disabilities in the EU. It gives businesses a clear requirement to design products and services that are accessible to everyone, breaking down digital barriers and inclusivity.

### Scope of the EAA

The EAA applies to a wide range of digital products and services, including:

- **Digital Content:** Websites, mobile applications, and electronic documents.
- **Consumer Devices:** Computers, smartphones, e-readers, and television equipment.
- **Public Services:** ATMs, ticketing machines, and other self-service terminals.
- **Financial Services:** Online banking platforms, investment services, and related digital processes.

## Accessibility Laws and Compliances

Ensuring accessibility compliance is not just good practice but a legal necessity. Several laws mandate accessibility standards to protect the rights of individuals with disabilities:

- **Web Content Accessibility Guidelines (WCAG):** These guidelines are internationally recognized and provide recommendations to make web content more accessible. They are often referenced by many laws and set the standard for compliance.
- **American Disabilities Act (ADA):** Ensures U.S. websites and digital platforms are accessible to people with disabilities. Non-compliance can result in legal actions, fines, and reputational damage.
- **Section 508 (Rehabilitation Act):** Mandates that federal agencies and contractors provide accessible electronic information technology, including websites and apps, to individuals with disabilities.
- **Accessibility for Ontarians with Disabilities Act (AODA):** A Canadian law that requires businesses in Ontario to ensure that their websites and online services are accessible to individuals with disabilities.

## Use Cases of Accessibility Testing

Accessibility testing is essential for all businesses striving to create inclusive digital experiences. Below are some key areas where accessibility testing can make a significant impact:

- **E-commerce Websites:** All users can seamlessly browse products, add items to their cart, and complete the checkout process.
- **Government Websites:** Public services are accessible to all citizens, including those with disabilities.
- **Mobile Apps:** Mobile apps offer a smooth and navigable experience for all users.
- **Educational Platforms:** Helps students access learning materials, participate in discussions, and complete assignments without barriers.
- **Financial Services:** Ensures accessibility for managing accounts, completing transactions, and accessing services.

## How <BrandName /> Helps Ensure Accessibility Compliance?

<BrandName />’s Accessibility Testing Suite simplifies the process of identifying accessibility issues across websites, web apps, and mobile apps, enabling users to make improvements quickly. Below are the different types of accessibility testing that <BrandName /> offers to help achieve compliance, create seamless and inclusive user experiences.

### Types of <BrandName /> Accessibility Testing

<div className="support_main">  
  <a href="/support/docs/accessibility-devtools">
    <div className="support_inners">
      <h3>Accessibility DevTools</h3>
      <p>Get a comprehensive accessibility analysis via browser extension.</p>
    </div>
  </a>
    <a href="/support/docs/accessibility-app-scanner">
    <div className="support_inners">
      <h3>Accessibility Manual App</h3>
      <p>Get a comprehensive accessibility analysis for your app.</p>
    </div>
  </a>
    <a href="/support/docs/accessibility-automation">
    <div className="support_inners">
      <h3>Accessibility Web Automation</h3>
      <p>Get the accessibility check for automated webapp tests and scripts.</p>
    </div>
  </a>
  <a href="/support/docs/accessibility-native-app-automation-test/">
    <div className="support_inners">
      <h3>Accessibility App Automation</h3>
      <p>Get the accessibility check for your automated app tests and scripts.</p>
    </div>
  </a>
    <a href="/support/docs/accessibility-test-scheduling">
    <div className="support_inners">
      <h3>Sitemap Scheduling</h3>
      <p>Streamline your accessibility testing by automating checks and generating comprehensive reports.</p>
    </div>
  </a>
</div>

<br /><br />

<div className="support_main ms-auto">
  <p><i>Powered By <b><a href="https://github.com/dequelabs/axe-core" target="_blank">Axe-Core</a></b></i></p><br />
  <p><i>Axe-core® is a trademark of Deque Systems, Inc. in the US and other countries.</i></p>
</div>
