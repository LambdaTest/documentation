---
id: reqnroll-with-selenium-appium
title: Selenium With Reqnroll
sidebar_label: Reqnroll
description: Run Reqnroll Selenium and Appium tests on TestMu AI cloud grid with 10000+ browsers and real devices.
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

```bash
virtualenv venv
```

<p align="center">
<img loading="lazy" src={require('../assets/images/uploads/reqnroll-virtual-environment.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>
</p>

Navigate to the newly created virtual environment:

```bash
source venv/bin/activate
```

## Step 2: Set Your Credentials
---
Configure your credentials to connect to the TestMu AI grid.

Fetch the TestMu AI Credentials from the [TestMu AI Profile Section](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard). You can export the environment variables by running the following commands in your terminal.

<Tabs className="docs__val">

<TabItem value="bash" label="macOS / Linux" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows" default>

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
```bash
make clean
```

<p align="center">
<img loading="lazy" src={require('../assets/images/uploads/reqnroll-step4.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>
</p>

Build the automation project:
```bash
make build
```

<p align="center">
<img loading="lazy" src={require('../assets/images/uploads/reqnroll-step5.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>
</p>

Run the Reqnroll tests:
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
