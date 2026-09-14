---
id: applitools-integration-cypress
title: How to Integrate Applitools With Cypress on TestMu AI
hide_title: true
toc_max_heading_level: 2
sidebar_label: Applitools Integration For Cypress
description: Integrate Applitools Visual AI with Cypress on TestMu AI to run automated visual and cross browser tests on real browsers and operating systems.
keywords:
  - applitools cypress testmu ai integration
  - applitools visual testing with cypress
  - cypress visual regression testing
  - run applitools tests on testmu ai
  - applitools eyes cypress
url: https://www.testmuai.com/support/docs/applitools-integration-with-testmu/
site_name: TestMu AI
slug: applitools-integration-cypress/
canonical: https://www.testmuai.com/support/docs/applitools-integration-cypress/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import VerifiedTag from '@site/src/component/verifiedTag';

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
          "name": "Applitools Integration With TestMu AI For Cypress",
          "item": `${BRAND_URL}/support/docs/applitools-integration-cypress/`
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
      "@id": "https://www.testmuai.com/support/docs/applitools-integration-with-testmu/"
    },
    "headline": "Applitools Integration With TestMu AI For Cypress",
    "description": "Run Applitools with Cypress on TestMu AI for automated cross browser testing on real browsers and operating systems, right from your Applitools instance.",
    "url": "https://www.testmuai.com/support/docs/applitools-integration-with-testmu/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Web Automation",
    "keywords": [
      "testmu ai integrations",
      "applitools for cypress",
      "testmu ai cypress"
    ],
    "proficiencyLevel": "Beginner",
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
    "hasPart": [
      {
        "@type": "SoftwareSourceCode",
        "name": "Navigate to your project directory and follow these steps",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "  npm install"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Setting Up Applitools Dependencies And Packages",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "  npx eyes-setup"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Setting Up Applitools Dependencies And Packages",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "  npm install @applitools/eyes-cypress --save-dev"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Setting up TestMu AI CLI and Dependencies",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "  npm install -g lambdatest-cypress-cli"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Setting up TestMu AI CLI and Dependencies",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "  lambdatest-cypress init"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Execute your first test case using the below command",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "lambdatest-cypress run"
      }
    ],
    "dateModified": "2026-09-09T19:13:32+05:30"
  }) }}
/>
# How to Integrate Applitools With Cypress on TestMu AI
***

If you run Cypress tests with Applitools Visual AI, you can execute those visual checks across real browsers and operating systems by connecting them to TestMu AI. This catches visual regressions on the browser and OS combinations your users actually run, not just your local machine. You configure the Applitools access token and TestMu AI credentials in your project, then run the tests through the TestMu AI CLI.

:::note
Before you begin, create accounts on both the TestMu AI and Applitools platforms.
:::

## Set Up Applitools Dependencies and Packages
***

Start by installing the Applitools packages and adding your API key so Cypress can send visual checks to Applitools. Download or clone the sample GitHub project from the [Cypress-LambdaTest-Applitools-Integration repository](https://github.com/gaurav8760/Cypress-LambdaTest-Applitools-Integration), navigate to your project directory, and follow these steps.

- Install the **NPM dependencies** using the below command:

  <VerifiedTag value="Verified" />

  ```bash
  npm install
  ```

- Set up **Applitools Eyes** using the below command:

  <VerifiedTag value="Verified" />

  ```bash
  npx eyes-setup
  ```

- Add the access token of your Applitools account in the `applitools.config.js` file as highlighted in the screenshot below. Find your **Applitools API** key by logging into your Applitools account and going to **Profile > My API Key**.

  <img loading="lazy" src={require('../assets/images/applitools-cypress/applitools1.webp').default} alt="Applitools access token added to the applitools.config.js configuration file" width="1353" height="622" className="doc_img"/>

  :::tip
  Set the **testConcurrency** and **browser configuration** values to match your requirements.
  :::

- Install Applitools Eyes dependencies using the below command:

  <VerifiedTag value="Verified" />

  ```bash
  npm install @applitools/eyes-cypress --save-dev
  ```

  This adds Applitools Eyes to an existing Node.js Cypress project.

## Set Up the TestMu AI CLI and Dependencies
***

With Applitools ready, configure the TestMu AI CLI so the tests run on the cloud grid. These steps install the CLI, generate a config file, and add your credentials.

- Install the TestMu AI CLI using the below command:

  <VerifiedTag value="Verified" />

  ```bash
  npm install -g lambdatest-cypress-cli
  ```

- Set up the configuration for your test run using the below command:

  <VerifiedTag value="Verified" />

  ```bash
  lambdatest-cypress init
  ```

  This creates a **lambdatest-config.json** file in the root directory of your project.

- Add the spec file path in the `run_setting` and your **TestMu AI credentials** in the auth section of the `lambdatest-config.json` file as shown in the image below.

  <img loading="lazy" src={require('../assets/images/applitools-cypress/applitools2.webp').default} alt="Spec file path and TestMu AI credentials configured in the lambdatest-config.json file" width="1353" height="622" className="doc_img"/>

## Run the Sample Project
***

Run the sample tests to generate a baseline and then compare a second run against it. Execute your first test case using the below command:

<VerifiedTag value="Verified" />

```bash
lambdatest-cypress run
```

<img loading="lazy" src={require('../assets/images/applitools-cypress/applitools3.webp').default} alt="TestMu AI Cypress run command executing the first Applitools test in the terminal" width="1353" height="622" className="doc_img"/>

Applitools treats the first test case you execute as the base image by default.

<img loading="lazy" src={require('../assets/images/applitools-cypress/applitools4.webp').default} alt="First Applitools test run captured as the baseline image in the Applitools dashboard" width="1353" height="622" className="doc_img"/>

Edit the URL in the `applitoolsIntegration.spec.js` file and run your second test using the same run command.

<img loading="lazy" src={require('../assets/images/applitools-cypress/applitools5.webp').default} alt="Updated URL in the applitoolsIntegration.spec.js file for the second test run" width="1353" height="622" className="doc_img"/>

Applitools compares the base image with this test and highlights the difference.

<img loading="lazy" src={require('../assets/images/applitools-cypress/applitools6.webp').default} alt="Applitools highlighting the visual difference between the baseline and the second test run" width="1353" height="622" className="doc_img"/>

## Related Cypress Guides
***

Continue with the guides below to run and report on your Cypress tests on TestMu AI.

- [Run your first Cypress test on TestMu AI](/support/docs/getting-started-with-cypress-testing/) sets up and executes your initial Cypress run on the cloud grid.
- [Integrate the Cypress Dashboard with TestMu AI](/support/docs/integrate-testmu-with-cypress/) views and analyzes your Cypress results across both dashboards.
- [Generate Mochawesome reports for Cypress](/support/docs/cypress-mochaawesome-report/) produces detailed reports for your Cypress test runs.

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={BRAND_URL}>
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
       Applitools Integration For Cypress
      </span>
    </li>
  </ul>
</nav>
