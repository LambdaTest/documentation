---
id: applitools-integration-cypress
title: Applitools Integration With TestMu AI For Cypress
sidebar_label: Applitools Integration For Cypress
description: Run Applitools with Cypress on TestMu AI for automated cross browser testing on real browsers and operating systems, right from your Applitools instance.
keywords:
  - testmu ai integrations
  - applitools for cypress
  - testmu ai cypress
  - cypress automation
  - testmu ai integration with applitools
  - applitools integration
  - cross browser testing
  - free cross browser testing tool
url: https://www.testmuai.com/support/docs/applitools-integration-with-testmu/
site_name: TestMu AI
slug: applitools-integration-cypress/
canonical: https://www.testmuai.com/support/docs/applitools-integration-cypress/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
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

---


import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

**Applitools** provides an end-to-end software testing platform powered by **Visual AI**. This article will guide you on how to integrate your **Cypress** automation tests with **Applitools** and **<BrandName />**.

> Before getting started, make sure you have made accounts in **<BrandName />** and **Applitools** platforms.

## Setting Up Applitools Dependencies And Packages

---

You can download or clone the sample GitHub project from the following repo - [Cypress-LambdaTest-Applitools-Integration](https://github.com/gaurav8760/Cypress-LambdaTest-Applitools-Integration). Navigate to your project directory and follow these steps:

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

- Add the access token of your Applitools account in the `applitools.config.js` file as highlighted in the below screenshot. You can find your **Applitools API** key by logging into your Applitools account and going to your **Profile > My API Key**.

  ***

  <img loading="lazy" src={require('../assets/images/applitools-cypress/applitools1.webp').default} alt="Image" width="1353" height="622" className="doc_img"/>

  > Set the **testConcurrency** and **browser configuration** as per the requirement.

- Install Applitools Eyes dependencies using the below command:

  <VerifiedTag value="Verified" />

  ```bash
  npm install @applitools/eyes-cypress --save-dev
  ```

  > It will create Applitools Eyes to an Existing Node.js Cypress Project.

## Setting up <BrandName /> CLI and Dependencies

---

- Install the <BrandName /> CLI using below command:

  <VerifiedTag value="Verified" />

  ```bash
  npm install -g lambdatest-cypress-cli
  ```

- Setup configurations on which you want to run your test using the below command:

  <VerifiedTag value="Verified" />

  ```bash
  lambdatest-cypress init
  ```

  > It will create a **lambdatest-config.json** file in the root directory of your project.

- Add spec file path in the `run_setting` and your **<BrandName /> credentials** in the auth section of the `lambdatest-config.json` file as shown in the image below.

  ***

  <img loading="lazy" src={require('../assets/images/applitools-cypress/applitools2.webp').default} alt="Image" width="1353" height="622" className="doc_img"/>

## Running The Sample Project

---

Execute your first test case using the below command:

<VerifiedTag value="Verified" />

```bash
lambdatest-cypress run
```

<img loading="lazy" src={require('../assets/images/applitools-cypress/applitools3.webp').default} alt="Image" width="1353" height="622" className="doc_img"/>

---

> The first test case that you execute will be considered as the base image by default by Applitools.

<img loading="lazy" src={require('../assets/images/applitools-cypress/applitools4.webp').default} alt="Image" width="1353" height="622" className="doc_img"/>

---

Edit the URL in the `applitoolsIntegration.spec.js` file and run your second test by using the same run command.

<img loading="lazy" src={require('../assets/images/applitools-cypress/applitools5.webp').default} alt="Image" width="1353" height="622" className="doc_img"/>

---

Applitools will compare the base image with this test and highlight the difference.

<img loading="lazy" src={require('../assets/images/applitools-cypress/applitools6.webp').default} alt="Image" width="1353" height="622" className="doc_img"/>

> That's all! you have successfully integrated **Applitools** and **<BrandName />** for running your **Cypress** tests. In case you have any questions or need any additional information, you could reach out at our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24X7 Chat Support**</span> or mail us directly at support@testmuai.com.


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
