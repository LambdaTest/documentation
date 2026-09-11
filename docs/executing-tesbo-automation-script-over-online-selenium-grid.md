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
          "name": "Selenium With Tesbo",
          "item": `${BRAND_URL}/support/docs/executing-tesbo-automation-script-over-online-selenium-grid/`
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
      "@id": "https://www.testmuai.com/support/docs/executing-tesbo-automation-script-over-online-selenium-grid/"
    },
    "headline": "Selenium With Tesbo",
    "description": "Run Tesbo keyword-driven automation scripts on the TestMu AI cloud Selenium grid across 3000+ browsers.",
    "url": "https://www.testmuai.com/support/docs/executing-tesbo-automation-script-over-online-selenium-grid/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
    "keywords": [
      "tesbo selenium grid setup",
      "tesbo keyword driven testing",
      "run tesbo tests on cloud"
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
        "codeRepository": "https://github.com/LambdaTest/LamdaTest_Tesbo_Demo",
        "text": "git clone https://github.com/LambdaTest/LamdaTest_Tesbo_Demo\ncd LamdaTest_Tesbo_Demo"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Set the Selenium address, enable the grid, and define your desired capabilities",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JSON",
        "text": "{\n  \"run\": {\n    \"baseUrl\": \"https://www.seleniumeasy.com/test/\",\n    \"seleniumAddress\": \"https://{userName}:{ApiKey}@hub.lambdatest.com/wd/hub\",\n    \"by\": {\n      \"tag\": [\"FO1\"]\n    },\n    \"browser\": {\n      \"name\": [\"chrome\"]\n    },\n    \"capabilities\": {\n      \"chrome\": {\n        \"build\": \"Tesbo_With_TestMuAI\",\n        \"name\": \"Tesbo\",\n        \"platformName\": \"Windows 10\",\n        \"browserName\": \"Chrome\",\n        \"browserVersion\": \"latest\"\n      }\n    },\n    \"parallel\": {\n      \"status\": false,\n      \"count\": \"3\"\n    },\n    \"retryAnalyser\": {\n      \"count\": \"0\"\n    },\n    \"highlightElement\": true,\n    \"IsGrid\": true\n  }\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Set the parallel status to true and specify the count in config.json",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JSON",
        "text": "\"parallel\": {\n  \"status\": true,\n  \"count\": \"3\"\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "To run across multiple browsers, add more capabilities",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JSON",
        "text": "\"capabilities\": {\n  \"chrome\": {\n    \"build\": \"Tesbo_With_TestMuAI\",\n    \"name\": \"Tesbo\",\n    \"platformName\": \"Windows 10\",\n    \"browserName\": \"Chrome\",\n    \"browserVersion\": \"latest\"\n  },\n  \"firefox\": {\n    \"build\": \"Tesbo_With_TestMuAI\",\n    \"name\": \"Tesbo\",\n    \"platformName\": \"Windows 10\",\n    \"browserName\": \"Firefox\",\n    \"browserVersion\": \"latest\"\n  },\n  \"safari\": {\n    \"build\": \"Tesbo_With_TestMuAI\",\n    \"name\": \"Tesbo\",\n    \"platformName\": \"MacOS Catalina\",\n    \"browserName\": \"Safari\",\n    \"browserVersion\": \"latest\"\n  }\n}"
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
      "name": "Selenium With Tesbo",
      "description": "Run Tesbo keyword-driven automation scripts on the TestMu AI cloud Selenium grid across 3000+ browsers.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Clone the Sample Project",
          "text": "Pull the sample repo to your local machine and navigate into the project directory.",
          "url": "https://www.testmuai.com/support/docs/executing-tesbo-automation-script-over-online-selenium-grid/#step-1-clone-the-sample-project"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Set Your Credentials",
          "text": "Add your TestMu AI credentials as environment variables so the test can authenticate with the grid. Visit the TestMu AI Dashboard, navigate to the left sidebar, and select Credentials. Copy your Username and Access Key, then set them as environment variables: {`export LTUSERNAME=\"${ YOURLAMBDATEST_USERNAME()}\" export LTACCESSKEY=\"${ YOURLAMBDATESTACCESS_KEY()}\"`} {`set LTUSERNAME=\"${ YOURLAMBDATEST_USERNAME()}\" set LTACCESSKEY=\"${ YOURLAMBDATESTACCESS_KEY()}\"`}",
          "url": "https://www.testmuai.com/support/docs/executing-tesbo-automation-script-over-online-selenium-grid/#step-2-set-your-credentials"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 3: Configure Your Test Capabilities",
          "text": "Define the browser, version, and OS for your test run. Update config.json to point to the TestMu AI Selenium Grid. Set the Selenium address, enable the grid, and define your desired capabilities: Key settings: seleniumAddress - Points to the TestMu AI hub URL with your credentials IsGrid - Set to true to run on the cloud grid capabilities - Define browser, version, and platform Use the Capabilities Generator to auto-generate capabilities for any browser, version, and OS combination.",
          "url": "https://www.testmuai.com/support/docs/executing-tesbo-automation-script-over-online-selenium-grid/#step-3-configure-your-test-capabilities"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Step 4: Run the Test",
          "text": "Trigger the test from your IDE. Hit the run button in your IDE. Your Tesbo test scripts execute on the TestMu AI Selenium Grid.",
          "url": "https://www.testmuai.com/support/docs/executing-tesbo-automation-script-over-online-selenium-grid/#step-4-run-the-test"
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Step 5: Run Tests in Parallel",
          "text": "Run multiple Tesbo tests simultaneously across different browsers to reduce execution time. Set the parallel status to true and specify the count in config.json: To run across multiple browsers, add more capabilities:",
          "url": "https://www.testmuai.com/support/docs/executing-tesbo-automation-script-over-online-selenium-grid/#step-5-run-tests-in-parallel"
        },
        {
          "@type": "HowToStep",
          "position": 6,
          "name": "Step 6: View Your Results",
          "text": "Check the Automation Dashboard to see exactly what happened during your test. Visit the TestMu AI Automation Dashboard to see your test results. Each session includes: Video recording of the full test execution Screenshots captured at each step Console logs from the browser Network logs for every request and response Selenium command logs showing each driver action Home Support Selenium With Tesbo",
          "url": "https://www.testmuai.com/support/docs/executing-tesbo-automation-script-over-online-selenium-grid/#step-6-view-your-results"
        }
      ]
    }
  ]) }}
/>

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

1. [Create a TestMu AI account](https://www.testmuai.com/register/) if you don't have one.
2. Get your **Username** and **Access Key** from the [TestMu AI Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard).
3. Install [Java Development Kit (JDK)](https://www.oracle.com/java/technologies/downloads/) 1.6 or higher.
4. Install an IDE such as Eclipse or IntelliJ.

## Step 1: Clone the Sample Project
---

Pull the sample repo to your local machine and navigate into the project directory.

<VerifiedTag value="Verified" />

```bash
git clone https://github.com/LambdaTest/LamdaTest_Tesbo_Demo
cd LamdaTest_Tesbo_Demo
```

## Step 2: Set Your Credentials
---

Add your TestMu AI credentials as environment variables so the test can authenticate with the grid.

Visit the [TestMu AI Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard), navigate to the left sidebar, and select **Credentials**. Copy your **Username** and **Access Key**, then set them as environment variables:

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

Define the browser, version, and OS for your test run.

Update `config.json` to point to the TestMu AI Selenium Grid. Set the Selenium address, enable the grid, and define your desired capabilities:

<VerifiedTag value="Verified" />

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

<VerifiedTag value="Verified" />

```json
"parallel": {
  "status": true,
  "count": "3"
}
```

To run across multiple browsers, add more capabilities:

<VerifiedTag value="Verified" />

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

Visit the [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build) to see your test results. Each session includes:

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
