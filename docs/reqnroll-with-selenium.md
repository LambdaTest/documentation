---
id: reqnroll-with-selenium-appium
title: Selenium With Reqnroll
sidebar_label: Reqnroll
description: Run Reqnroll Selenium and Appium tests on TestMu AI cloud grid with 5000+ real devices and 10,000+ browser/device combinations.
keywords:
  - run Reqnroll Selenium tests cloud
  - Reqnroll Appium mobile testing
  - Reqnroll Selenium grid setup
  - Reqnroll C# automation testing
  - Reqnroll parallel testing cloud
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/reqnroll-automation-with-selenium-appium-on-testmu/
site_name: TestMu AI
slug: reqnroll-automation-with-selenium-appium-on-testmu/
canonical: https://www.testmuai.com/support/docs/reqnroll-automation-with-selenium-appium-on-testmu/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import VerifiedTag from '@site/src/component/verifiedTag';


<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "TestMu AI",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Selenium With Reqnroll",
          "item": `${BRAND_URL}/support/docs/reqnroll-automation-with-selenium-appium-on-testmu/`
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
      "@id": "https://www.testmuai.com/support/docs/reqnroll-automation-with-selenium-appium-on-testmu/"
    },
    "headline": "Selenium With Reqnroll",
    "description": "Run Reqnroll Selenium and Appium tests on TestMu AI cloud grid with 5000+ real devices and 10,000+ browser/device combinations.",
    "url": "https://www.testmuai.com/support/docs/reqnroll-automation-with-selenium-appium-on-testmu/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
    "keywords": [
      "run Reqnroll Selenium tests cloud",
      "Reqnroll Appium mobile testing",
      "Reqnroll Selenium grid setup"
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
        "name": "Step 1: Clone the Sample Project",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "virtualenv venv"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Navigate to the newly created virtual environment",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "source venv/bin/activate"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Clean temporary files",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "make clean"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Build the automation project",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "make build"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Run the Reqnroll tests",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "make reqnroll-automation-test"
      }
    ],
    "dateModified": "2026-09-09T19:13:32+05:30"
  }) }}
/>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "Selenium With Reqnroll",
      "description": "Run Reqnroll Selenium and Appium tests on TestMu AI cloud grid with 5000+ real devices and 10,000+ browser/device combinations.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Clone the Sample Project",
          "text": "Clone the repository and set up the virtual environment. Navigate to the newly created virtual environment:",
          "url": "https://www.testmuai.com/support/docs/reqnroll-automation-with-selenium-appium-on-testmu/#step-1-clone-the-sample-project"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Set Your Credentials",
          "text": "Configure your credentials to connect to the TestMu AI grid. Fetch the TestMu AI Credentials from the TestMu AI Profile Section. You can export the environment variables by running the following commands in your terminal. {`export LTUSERNAME=\"${ YOURLAMBDATEST_USERNAME()}\" export LTACCESSKEY=\"${ YOURLAMBDATESTACCESS_KEY()}\"`} {`set LTUSERNAME=\"${ YOURLAMBDATEST_USERNAME()}\" set LTACCESSKEY=\"${ YOURLAMBDATESTACCESS_KEY()}\"`}",
          "url": "https://www.testmuai.com/support/docs/reqnroll-automation-with-selenium-appium-on-testmu/#step-2-set-your-credentials"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 3: Configure Your Test Capabilities",
          "text": "Update the TestMu AI Credentials in the Makefile or export them as environment variables as shown above. Use the TestMu AI Capabilities Generator to auto-generate the capabilities class for your test requirements.",
          "url": "https://www.testmuai.com/support/docs/reqnroll-automation-with-selenium-appium-on-testmu/#step-3-configure-your-test-capabilities"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Step 4: Run the Test",
          "text": "Build and execute the Reqnroll tests on the TestMu AI platform. Clean temporary files: Build the automation project: Run the Reqnroll tests:",
          "url": "https://www.testmuai.com/support/docs/reqnroll-automation-with-selenium-appium-on-testmu/#step-4-run-the-test"
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Step 5: View Your Results",
          "text": "Check the test output on the console and the TestMu AI dashboard. Navigate to the TestMu AI Automation Dashboard to check the status of the test execution. All the scenarios that are a part of respective .feature(s) files successfully executed on TestMu AI. Home Support",
          "url": "https://www.testmuai.com/support/docs/reqnroll-automation-with-selenium-appium-on-testmu/#step-5-view-your-results"
        }
      ]
    }
  ]) }}
/>

---

Run Reqnroll tests on the TestMu AI cloud grid. This guide covers setup, running a sample test, configuring capabilities, and testing locally hosted pages.

:::tip Sample repo
All the code used in this guide is available in the sample repository.

<div style={{display: 'flex', justifyContent: 'flex-start'}}>
<a href="https://github.com/LambdaTest/reqnroll-automation-sample/" className="github__anchor" target="_blank"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
</div>
:::

## Prerequisites
---
Complete the following steps before running Reqnroll Selenium tests.

1. Download and install **Selenium WebDriver** from the [official website](https://www.selenium.dev/downloads/).
2. Install the latest version of **Reqnroll**.
3. Install the **.Net** framework for developing applications using C#.
4. Download [Selenium WebDriver Language Binding](https://www.selenium.dev/downloads/) for C# and extract them to the appropriate folder.
5. Install a [.NET Core SDK](https://dotnet.microsoft.com/en-us/download) of 2.1 or greater version.
6. Get your TestMu AI Username and Access Key from the [TestMu AI Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard).

## Step 1: Clone the Sample Project
---
Clone the repository and set up the virtual environment.

<VerifiedTag value="Verified" />

```bash
virtualenv venv
```

<p align="center">
<img loading="lazy" src={require('../assets/images/uploads/reqnroll-virtual-environment.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>
</p>

Navigate to the newly created virtual environment:

<VerifiedTag value="Verified" />

```bash
source venv/bin/activate
```

## Step 2: Set Your Credentials
---
Configure your credentials to connect to the TestMu AI grid.

Fetch the TestMu AI Credentials from the [TestMu AI Profile Section](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard). You can export the environment variables by running the following commands in your terminal.

<Tabs className="docs__val">

<TabItem value="bash" label="macOS / Linux" default>

  <VerifiedTag value="Verified" />

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows" default>

  <VerifiedTag value="Verified" />

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
  {`set LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
set LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>

</TabItem>
</Tabs>

## Step 3: Configure Your Test Capabilities
---
Update the TestMu AI Credentials in the Makefile or export them as environment variables as shown above.

:::tip Capabilities Generator
Use the TestMu AI [Capabilities Generator](https://www.testmuai.com/capabilities-generator/) to auto-generate the capabilities class for your test requirements.
:::

## Step 4: Run the Test
---
Build and execute the Reqnroll tests on the TestMu AI platform.

Clean temporary files:

<VerifiedTag value="Verified" />

```bash
make clean
```

<p align="center">
<img loading="lazy" src={require('../assets/images/uploads/reqnroll-step4.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>
</p>

Build the automation project:

<VerifiedTag value="Verified" />

```bash
make build
```

<p align="center">
<img loading="lazy" src={require('../assets/images/uploads/reqnroll-step5.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>
</p>

Run the Reqnroll tests:

<VerifiedTag value="Verified" />

```bash
make reqnroll-automation-test
```

<p align="center">
<img loading="lazy" src={require('../assets/images/uploads/reqnroll-step6.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>
</p>

<p align="center">
<img loading="lazy" src={require('../assets/images/uploads/reqnroll-step6.0.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>
</p>

## Step 5: View Your Results
---
Check the test output on the console and the TestMu AI dashboard.

Navigate to the [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/) to check the status of the test execution.

<p align="center">
<img loading="lazy" src={require('../assets/images/uploads/reqnroll-cloud-execution.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>
</p>

All the scenarios that are a part of respective *.feature(s)* files successfully executed on TestMu AI.

<p align="center">
<img loading="lazy" src={require('../assets/images/uploads/reqnroll-step7.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>
</p>

<p align="center">
<img loading="lazy" src={require('../assets/images/uploads/reqnroll-step7.1.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>
</p>



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
      <span className="breadcrumbs__link"> Selenium With Reqnroll </span>
    </li>
  </ul>
</nav>
