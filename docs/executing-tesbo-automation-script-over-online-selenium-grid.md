---
id: executing-tesbo-automation-script-over-online-selenium-grid
title: Selenium With Tesbo
hide_title: false
sidebar_label: Tesbo
description: Run Tesbo keyword-driven automation scripts on the TestMu AI cloud Selenium grid across 3000+ browsers.
keywords:
  - tesbo selenium grid setup
  - tesbo keyword driven testing
  - run tesbo tests on cloud
  - tesbo cross browser testing
  - tesbo parallel testing selenium
  - tesbo automation tutorial
image: /assets/images/og-images/selenium-testing-og.png
url: https://www.testmuai.com/support/docs/executing-tesbo-automation-script-over-online-selenium-grid/
site_name: TestMu AI
slug: executing-tesbo-automation-script-over-online-selenium-grid/
canonical: https://www.testmuai.com/support/docs/executing-tesbo-automation-script-over-online-selenium-grid/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
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
          "name": "Selenium With Tesbo",
          "item": `${BRAND_URL}/support/docs/executing-tesbo-automation-script-over-online-selenium-grid/`
        }]
      })
    }}
></script>

---

Run [Tesbo](https://tesbo.io/) keyword-driven automation scripts on the TestMu AI cloud grid. Tesbo is a hybrid framework built on Selenium that lets you write automation scripts in plain English using a keyword-driven approach.

:::tip Sample repo
All the code used in this guide is available in the sample repository.

<div style={{display: 'flex', justifyContent: 'flex-start'}}>
<a href="https://github.com/LambdaTest/LamdaTest_Tesbo_Demo" className="github__anchor" target="_blank"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
</div>
:::

## Prerequisites
---

Make sure you have the following set up before you start.

1. [Create a TestMu AI account](https://accounts.lambdatest.com/register) if you don't have one.
2. Get your **Username** and **Access Key** from the [TestMu AI Dashboard](https://accounts.lambdatest.com/dashboard).
3. Install [Java Development Kit (JDK)](https://www.oracle.com/java/technologies/downloads/) 1.6 or higher.
4. Install an IDE such as Eclipse or IntelliJ.

## Step 1: Clone the Sample Project
---

Pull the sample repo to your local machine and navigate into the project directory.

```bash
git clone https://github.com/LambdaTest/LamdaTest_Tesbo_Demo
cd LamdaTest_Tesbo_Demo
```

## Step 2: Set Your Credentials
---

Add your TestMu AI credentials as environment variables so the test can authenticate with the grid.

Visit the [TestMu AI Dashboard](https://accounts.lambdatest.com/dashboard), navigate to the left sidebar, and select **Credentials**. Copy your **Username** and **Access Key**, then set them as environment variables:

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

Define the browser, version, and OS for your test run.

Update `config.json` to point to the TestMu AI Selenium Grid. Set the Selenium address, enable the grid, and define your desired capabilities:

```json
{
  "run": {
    "baseUrl": "https://www.seleniumeasy.com/test/",
    "seleniumAddress": "https://{userName}:{ApiKey}@hub.lambdatest.com/wd/hub",
    "by": {
      "tag": ["FO1"]
    },
    "browser": {
      "name": ["chrome"]
    },
    "capabilities": {
      "chrome": {
        "build": "Tesbo_With_TestMuAI",
        "name": "Tesbo",
        "platformName": "Windows 10",
        "browserName": "Chrome",
        "browserVersion": "latest"
      }
    },
    "parallel": {
      "status": false,
      "count": "3"
    },
    "retryAnalyser": {
      "count": "0"
    },
    "highlightElement": true,
    "IsGrid": true
  }
}
```

Key settings:
- **seleniumAddress** - Points to the TestMu AI hub URL with your credentials
- **IsGrid** - Set to `true` to run on the cloud grid
- **capabilities** - Define browser, version, and platform

:::tip
Use the [Capabilities Generator](https://www.testmuai.com/capabilities-generator/) to auto-generate capabilities for any browser, version, and OS combination.
:::

## Step 4: Run the Test
---

Trigger the test from your IDE.

Hit the run button in your IDE. Your Tesbo test scripts execute on the TestMu AI Selenium Grid.

## Step 5: Run Tests in Parallel
---

Run multiple Tesbo tests simultaneously across different browsers to reduce execution time.

Set the parallel status to `true` and specify the count in `config.json`:

```json
"parallel": {
  "status": true,
  "count": "3"
}
```

To run across multiple browsers, add more capabilities:

```json
"capabilities": {
  "chrome": {
    "build": "Tesbo_With_TestMuAI",
    "name": "Tesbo",
    "platformName": "Windows 10",
    "browserName": "Chrome",
    "browserVersion": "latest"
  },
  "firefox": {
    "build": "Tesbo_With_TestMuAI",
    "name": "Tesbo",
    "platformName": "Windows 10",
    "browserName": "Firefox",
    "browserVersion": "latest"
  },
  "safari": {
    "build": "Tesbo_With_TestMuAI",
    "name": "Tesbo",
    "platformName": "MacOS Catalina",
    "browserName": "Safari",
    "browserVersion": "latest"
  }
}
```

## Step 6: View Your Results
---

Check the Automation Dashboard to see exactly what happened during your test.

Visit the [TestMu AI Automation Dashboard](https://automation.lambdatest.com/build) to see your test results. Each session includes:

- **Video recording** of the full test execution
- **Screenshots** captured at each step
- **Console logs** from the browser
- **Network logs** for every request and response
- **Selenium command logs** showing each driver action



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
       Selenium With Tesbo
      </span>
    </li>
  </ul>
</nav>
