---
id: report-portal-cypress
title: Report Portal IO Integration for Cypress on TestMu AI
sidebar_label: "ReportPortal Integration"
hide_title: true
toc_max_heading_level: 2
description: "Integrate ReportPortal.io with TestMu AI for Cypress: copy your ReportPortal credentials, create a reporter config file, wire it into lambdatest-config.json, and view results."
keywords:
  - testmu ai integrations
  - report portal io
  - reportportal for cypress
  - testmu ai cypress with report portal io
  - cypress automation
  - testmu ai integration with report portal

url: https://www.testmuai.com/support/docs/report-portal-cypress/
site_name: TestMu AI
slug: report-portal-cypress/
canonical: https://www.testmuai.com/support/docs/report-portal-cypress/
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
          "item": "https://www.testmuai.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.testmuai.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Report Portal IO Integration for Cypress on TestMu AI",
          "item": "https://www.testmuai.com/support/docs/report-portal-cypress/"
        }]
      })
    }}
></script>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/report-portal-cypress/"
    },
    "headline": "Report Portal IO Integration for Cypress on TestMu AI",
    "description": "Integrate ReportPortal.io with TestMu AI for Cypress: copy your ReportPortal credentials, create a reporter config file, wire it into lambdatest-config.json, and view results.",
    "url": "https://www.testmuai.com/support/docs/report-portal-cypress/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
    "keywords": [
      "testmu ai integrations",
      "report portal io",
      "reportportal for cypress"
    ],
    "author": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "url": "https://www.testmuai.com/"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
      "url": "https://www.testmuai.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testmuai.com/logo.png"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testmu-ai/",
        "https://x.com/testmuai",
        "https://www.youtube.com/@TestMuAI"
      ]
    },
    "dateModified": "2026-09-27T00:00:00+05:30"
  }) }}
/>

# Report Portal IO Integration for Cypress on TestMu AI
***

This article guides you on how to integrate the **<BrandName />** platform with the **ReportPortal.io** platform for running your **Cypress** automation tests. Before you get started, make sure you have an account on [ReportPortal.io](http://reportportal.io/).

:::note

By default, the **<BrandName />** Cypress-Multi-Reporter mechanism generates **mochawesome**. To override it with another reporting option (ReportPortal in this case), create a separate file to define the reporting configuration and add the ReportPortal agent dependency.

:::

## Steps To Integrate
***

1. Navigate to [ReportPortal.io](http://reportportal.io/) and log in to your account. Then open your **Report Portal IO Profile**.

<img loading="lazy" src={require('../assets/images/report-portal-cypress/report1.webp').default} alt="ReportPortal.io profile page opened after logging in to your account" width="1353" height="622" className="doc_img"/>

***

2. Copy the ReportPortal credentials shown on your profile page.

<img loading="lazy" src={require('../assets/images/report-portal-cypress/report2.webp').default} alt="Copying the ReportPortal.io credentials from the profile page" width="1353" height="622" className="doc_img"/>

***

3. Open your Cypress project and create a new file for defining the ReportPortal configuration and credentials.

<img loading="lazy" src={require('../assets/images/report-portal-cypress/report3.webp').default} alt="Creating a new reporter config file in the Cypress project to hold the ReportPortal configuration" width="1353" height="622" className="doc_img"/>

***

4. Define the file name in the `reporter_config_file` capability of the `lambdatest-config.json` file, as shown in the screenshot below.

<img loading="lazy" src={require('../assets/images/report-portal-cypress/report4.webp').default} alt="Setting the reporter_config_file capability in lambdatest-config.json to point to the ReportPortal reporter config file" width="1353" height="622" className="doc_img"/>

***

5. Define the **ReportPortal.io** dependency (`@reportportal/agent-js-cypress`) in your `lambdatest-config.json` or `package.json` file.

<img loading="lazy" src={require('../assets/images/report-portal-cypress/report5.webp').default} alt="Adding the @reportportal/agent-js-cypress dependency in lambdatest-config.json or package.json" width="1353" height="622" className="doc_img"/>

***

6. The integration is now done. Open the Dashboard to see the results.

<img loading="lazy" src={require('../assets/images/report-portal-cypress/report6.webp').default} alt="Cypress test results from the ReportPortal.io integration shown on the TestMu AI Automation Dashboard" width="1353" height="622" className="doc_img"/>

:::tip

That's all. You have successfully integrated **ReportPortal.io** and **<BrandName />** for running your **Cypress** tests. In case you have any questions or need any additional information, reach out at our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24X7 Chat Support**</span> or mail us directly at support@testmuai.com.

:::

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={`${BRAND_URL}/support/docs/`}>
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
        ReportPortal Integration
      </span>
    </li>
  </ul>
</nav>
