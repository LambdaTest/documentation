---
id: download-artefacts-cypress
title: Downloading Artefacts For A Cypress Project
sidebar_label: Download Artefacts For Cypress Project
description: This article guides you on how to download the artefacts for a cypress project from TestMu AI Cloud machine.
keywords:
  - Cypress Automation
  - Cypress Testing Guide
  - Cypress Artefacts
  - Download Artefacts
  - Artefacts for Cypress
  - Cypress Test Automation
  - Cypress Automation Testing
  - Running Cypress Tests
  - Cypress Project

url: https://www.testmuai.com/support/docs/download-artefacts-cypress/
site_name: TestMu AI
slug: download-artefacts-cypress/
canonical: https://www.testmuai.com/support/docs/download-artefacts-cypress/
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
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Downloading Artefacts For A Cypress Project",
          "item": `${BRAND_URL}/support/docs/download-artefacts-cypress/`
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
      "@id": "https://www.testmuai.com/support/docs/download-artefacts-cypress/"
    },
    "headline": "Downloading Artefacts For A Cypress Project",
    "description": "This article guides you on how to download the artefacts for a cypress project from TestMu AI Cloud machine.",
    "url": "https://www.testmuai.com/support/docs/download-artefacts-cypress/",
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
      "Cypress Testing Guide",
      "Cypress Artefacts"
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
        "name": "Before getting started, you would have to update the lambdatest-cypress cli using the command below",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npm install -g lambdatest-cypress-cli"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Add --sync Flag",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "lambdatest-cypress run --sync=true"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Get session_id In lambdatest_run.json",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\nNow pass the session_id by running the following command.\n\n```json\nlambdatest-cypress generate-report --session_id 6c899177-047e-4432-a9a7-17776e23aae3"
      }
    ],
    "dateModified": "2026-09-09T19:13:32+05:30"
  }) }}
/>

---


import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import VerifiedTag from '@site/src/component/verifiedTag';

This article guides you on how to download the artefacts for a Cypress project from <BrandName /> Cloud machine.

:::tip Sample repo

In this demo we are demonstrating using <BrandName />'s sample Cypress Cloud repo. You can find all the resources used for this article in the linked repo. <a href="https://github.com/LambdaTest/Cypress-Cloud" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>

:::

## Downloading The Data From The <BrandName /> Cloud Machine

---

Assuming that you have run a Cypress test on lambdatest platform ( if not, this article [here](/support/docs/getting-started-with-cypress-testing/) will guide you in running your first Cypress test on <BrandName />), you need to follow these steps below:

### Update <BrandName /> Cypress CLI

---

Before getting started, you would have to update the **lambdatest-cypress cli** using the command below:

<VerifiedTag value="Verified" />

```bash
npm install -g lambdatest-cypress-cli
```

### Add downloads Capability

---

Add **"downloads"** capability in the `lambdatest-config.json` file and define the files/directories that you wanted to download in this capability. You can mention multiple file paths in this capability separated by a comma. Refer to the below example for the same.

<img loading="lazy" src={require('../assets/images/cypress/cypress4.png').default} alt="Image" width="1282" height="722" className="doc_img"/>

### Add --sync Flag

---

Append `-sync` flag in the run command as mentioned below and run your test on the <BrandName /> platform. 

<VerifiedTag value="Verified" />

```bash
lambdatest-cypress run --sync=true
```

Once the test gets executed, you will find a `build_id` on the console corresponding to the executed test.

<img loading="lazy" src={require('../assets/images/cypress/cypress5.png').default} alt="Image" width="1282" height="722" className="doc_img"/>

### Get session_id In lambdatest_run.json
---

Go to your `lambdatest_run.json` file and copy the `session_id`.

<VerifiedTag value="Verified" />

```json title=lambdatest_run.json
{
   "build_id": "7724863",
   "session_id": "6c899177-047e-4432-a9a7-17776e23aae3"
}
```

Now pass the session_id by running the following command.

<VerifiedTag value="Verified" />

```json
lambdatest-cypress generate-report --session_id 6c899177-047e-4432-a9a7-17776e23aae3
```

### View The Downloaded Folder
---

- A new folder with the name **lambdatest-artifacts** will get created in the **root** directory of your project and all the files will be downloaded in this folder.

<img loading="lazy" src={require('../assets/images/cypress/cypress6.png').default} alt="Image" width="1282" height="722" className="doc_img"/>

- The file name will be created with the session_id combined with the browser name, browser version, and the test id corresponding to it.

  <img loading="lazy" src={require('../assets/images/cypress/cypress7.png').default} alt="Image" width="1282" height="722" className="doc_img"/>

:::tip Support
That's all! In case you have any questions or need any additional information, you could reach out at our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**[24X7 Chat Support]**</span> or mail us directly at support@testmuai.com.
:::


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
      Download Artefacts For Cypress Project
      </span>
    </li>
  </ul>
</nav>
