---
id: report-portal-cypress
title: Integrate ReportPortal.io with LambdaTest for Cypress
sidebar_label: Report Portal IO Integration For Cypress
description: This article will guide you on how to integrate the LambdatTest platform with Report Portal platform for running your Cypress automation tests.
keywords:
  - lambdatest integrations
  - report portal io
  - reportportal for cypress
  - lambdatest cypress with report portal io
  - cypress automation
  - lambdatest integration with report portal
  - cross browser testing
  - free cross browser testing tool
url: https://www.lambdatest.com/support/docs/applitools-integration-with-lambdatest/
site_name: LambdaTest
slug: report-portal-cypress/
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
          "name": "Report Portal Cypress",
          "item": "https://www.lambdatest.com/support/docs/report-portal-cypress/"
        }]
      })
    }}
></script>

This article will guide you on how to integrate the **LambdaTest** platform with **ReportPortal.io** platform for running your **Cypress** automation tests. Before you can get started, make sure you have an account on [ReportPortal.io](http://reportportal.io/).

> By default, the LambdaTest **Cypress-Multi-Reporter** mechanism generates **mochaawesome**. To override it with some other reporting options (report portal in this case), you have to create a different file to define the reporting configuration.

## Steps to Integrate ReportPortal.io
**Step 1:** Navigate to [ReportPortal.io](http://reportportal.io/) and login into your account. Then open your **Report Portal IO Profile**.

<img loading="lazy" src={require('../assets/images/cypress/report-portal-cypress/1.png').default} alt="Image" className="doc_img"/>

**Step 2:** Click on the **API Keys** tab and generate a new API key. Now switch to **Configuration examples** tab and copy the configuration code snippet as per your desired programming language

<img loading="lazy" src={require('../assets/images/cypress/report-portal-cypress/2.png').default} alt="Image" className="doc_img"/>

**Step 3:** Go to your Cypress project and create a new file for defining report portal configuration/credentials

<img loading="lazy" src={require('../assets/images/cypress/report-portal-cypress/3.png').default} alt="Image" className="doc_img"/>

**Step 4:** Define the file name in the `reporter_config_file` capability of `lambdatest-config.json` file as mentioned in the below screenshot

<img loading="lazy" src={require('../assets/images/cypress/report-portal-cypress/4.png').default} alt="Image" className="doc_img"/>

**Step 5:** Install the **reportportal.io** dependency (`@reportportal/agent-js-cypress`) in your Cypress project. You can check this in your `lambdatest-config.json` or `package.json` file.

<img loading="lazy" src={require('../assets/images/cypress/report-portal-cypress/5.png').default} alt="Image" className="doc_img"/>

Now run your tests and go to the dashboard to check your results.

<img loading="lazy" src={require('../assets/images/cypress/report-portal-cypress/6.png').default} alt="Image" className="doc_img"/>
