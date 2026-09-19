---
id: integrate-lambdatest-with-cypress
title: Integrate TestMu AI with Cypress Dashboard
sidebar_label: Integrate TestMu AI with Cypress Dashboard
description: This article guides you on how to integrate TestMu AI platform with Cypress Dashboard.
keywords:
  - Cypress Automation
  - Cypress With TestMu AI
  - TestMu AI With Cypress
  - Cypress Dashboard
  - TestMu AI Cypress Integration
  - Cypress Test Automation
  - Cypress Automation Testing
  - Running Cypress Tests With TestMu AI
  - Integrate TestMu AI With Cypress
  - TestMu AI Cloud Platform

url: https://www.testmuai.com/support/docs/integrate-testmu-with-cypress/
site_name: TestMu AI
slug: integrate-testmu-with-cypress/
canonical: https://www.testmuai.com/support/docs/integrate-testmu-with-cypress/
---
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
          "name": "Integrate TestMu AI with Cypress Dashboard",
          "item": `${BRAND_URL}/support/docs/integrate-testmu-with-cypress/`
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
      "@id": "https://www.testmuai.com/support/docs/integrate-testmu-with-cypress/"
    },
    "headline": "Integrate TestMu AI with Cypress Dashboard",
    "description": "This article guides you on how to integrate TestMu AI platform with Cypress Dashboard.",
    "url": "https://www.testmuai.com/support/docs/integrate-testmu-with-cypress/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Web Automation",
    "keywords": [
      "Cypress Automation",
      "Cypress With TestMu AI",
      "TestMu AI With Cypress"
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
        "name": "Update TestMu AI Cypress CLI",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npm install -g lambdatest-cypress-cli"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Update TestMu AI Cypress CLI",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "lambdatest-cypress --version"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Add the projectId to your Cypress config",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "const { defineConfig } = require('cypress')\n\nmodule.exports = defineConfig({\n  projectId: '<your-project-id>',\n  e2e: {\n    setupNodeEvents(on, config) {\n      return config\n    },\n  },\n})"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Run your tests with the record flag",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "lambdatest-cypress run --cy=\"--record;--key <key_value>\""
      }
    ],
    "dateModified": "2026-09-09T19:13:32+05:30"
  }) }}
/>

---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

Run your Cypress tests on the <BrandName /> cloud grid while recording the results to the Cypress Dashboard (Cypress Cloud). Create a project in Cypress Cloud, add its `projectId` to `cypress.config.js`, then start the run with `lambdatest-cypress run` and Cypress's `--record` flag so the results appear on both dashboards.

> This guide uses [<BrandName />'s sample Cypress Cloud repo](https://github.com/LambdaTest/Cypress-Cloud). You can find all the resources used in this article in the linked repository.

## Steps to Integrate <BrandName /> With Cypress Dashboard

---

This guide assumes you have already run a Cypress test on <BrandName />. If you haven't, the [getting started with Cypress testing](/support/docs/getting-started-with-cypress-testing/) guide walks you through your first run. Once that is done, follow the steps below.

### Update the <BrandName /> Cypress CLI

---

Update the **lambdatest-cypress-cli** to the latest version:

<VerifiedTag value="Verified" />

```bash
npm install -g lambdatest-cypress-cli
```

Confirm the installed version (the latest is `3.0.50`):

<VerifiedTag value="Verified" />

```bash
lambdatest-cypress --version
```

### Create a Project on Cypress Dashboard

---

Log in to [Cypress Cloud](https://cloud.cypress.io/), open the **Projects** page, and click **New project**. Enter a project name, choose **Private** or **Public** access, then click **Create project**.

<img loading="lazy" src={require('../assets/images/cypress/cypress-integration/cypress-create-project.webp').default} alt="Cypress Cloud Create a new project form with project name, access, and team settings" width="1424" height="838" className="doc_img"/>

### Choose Your CI Provider

---

Select the CI provider you use, such as **GitHub Actions**, then click **Next**. Cypress Cloud uses this only to tailor its setup instructions - you can still record runs from your terminal.

<img loading="lazy" src={require('../assets/images/cypress/cypress-integration/cypress-choose-ci-provider.webp').default} alt="Cypress Cloud project setup step to choose a CI provider such as GitHub Actions" width="1408" height="836" className="doc_img"/>

### Copy Your Record Key

---

On the project setup screen, copy the **record key** shown under **Try it first** and in the `CYPRESS_RECORD_KEY` field. You will pass this key to the run command in a later step.

<img loading="lazy" src={require('../assets/images/cypress/cypress-integration/cypress-record-key.webp').default} alt="Cypress Cloud project setup screen showing the record key and the record run command" width="1398" height="840" className="doc_img"/>

:::tip
Treat the record key like a password. Set it as the `CYPRESS_RECORD_KEY` environment variable instead of hard-coding it in scripts or committing it to source control.
:::

You can find the record command for any project later from the **Projects** page in Cypress Cloud.

<img loading="lazy" src={require('../assets/images/cypress/cypress-integration/cypress-projects-record-run.webp').default} alt="Cypress Cloud Projects page listing a project with its record run command" width="1423" height="840" className="doc_img"/>

### Add the Project ID to Your Cypress Config

---

When you create the project, Cypress Cloud also generates a unique `projectId`. Add it to the `cypress.config.js` file of your project so each recorded run is linked to the correct project:

```javascript
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '<your-project-id>',
  e2e: {
    setupNodeEvents(on, config) {
      return config
    },
  },
})
```

:::note
Cypress 10 and later use `cypress.config.js` instead of the older `cypress.json`. You can find your `projectId` on the project's **Settings** page in Cypress Cloud.
:::

### Run Your Tests With the Record Flag

---

Start the run on the <BrandName /> grid and pass Cypress's `--record` and `--key` flags through the CLI. Replace `<key_value>` with the record key you copied earlier:

<VerifiedTag value="Verified" />

```bash
lambdatest-cypress run --cy="--record;--key <key_value>"
```

### View Results on Both Dashboards

---

The integration is complete. Your tests run on the <BrandName /> grid, and the recorded results are sent to the Cypress Dashboard.

Open the [<BrandName /> Automation Dashboard](https://automation.lambdatest.com/build) to see the run with its command logs, video, and other test artifacts. The same run is also available in Cypress Cloud under your project.

<img loading="lazy" src={require('../assets/images/cypress/cypress-integration/cypress-testmu-dashboard.webp').default} alt="TestMu AI Automation Dashboard showing a passed Cypress test with command logs and video" width="1442" height="773" className="doc_img"/>

> That's all! In case you have any questions or need any additional information, you could reach out at our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**[24X7 Chat Support]**</span> or mail us directly at support@testmuai.com.

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
      Integrate <BrandName /> With Cypress Dashboard
      </span>
    </li>
  </ul>
</nav>
