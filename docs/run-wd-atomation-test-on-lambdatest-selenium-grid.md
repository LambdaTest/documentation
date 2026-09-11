---
id: run-wd-atomation-test-on-lambdatest-selenium-grid
title: Selenium With WD
sidebar_label: WD
description: Run WD Selenium automation scripts on TestMu AI cloud grid with 3000+ real browsers and operating systems.
keywords:
  - wd selenium grid testing
  - run wd framework tests cloud
  - wd parallel testing selenium
  - wd automation setup guide
  - wd selenium cloud execution
image: /assets/images/og-images/selenium-testing-og.png
url: https://www.testmuai.com/support/docs/wd-with-selenium-running-wd-automation-scripts-on-testmu-selenium-grid/
site_name: TestMu AI
slug: wd-with-selenium-running-wd-automation-scripts-on-testmu-selenium-grid/
canonical: https://www.testmu.ai/support/docs/wd-with-selenium-running-wd-automation-scripts-on-testmu-selenium-grid/
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
          "name": "Selenium With WD",
          "item": `${BRAND_URL}/support/docs/wd-with-selenium-running-wd-automation-scripts-on-testmu-selenium-grid/`
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
      "@id": "https://www.testmuai.com/support/docs/wd-with-selenium-running-wd-automation-scripts-on-testmu-selenium-grid/"
    },
    "headline": "Selenium With WD",
    "description": "Run WD Selenium automation scripts on TestMu AI cloud grid with 3000+ real browsers and operating systems.",
    "url": "https://www.testmuai.com/support/docs/wd-with-selenium-running-wd-automation-scripts-on-testmu-selenium-grid/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
    "keywords": [
      "wd selenium grid testing",
      "run wd framework tests cloud",
      "wd parallel testing selenium"
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
        "codeRepository": "https://github.com/LambdaTest/wd-selenium-sample",
        "text": "git clone https://github.com/LambdaTest/wd-selenium-sample\ncd wd-selenium-sample"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Install the required dependencies",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npm i"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 3: Configure Your Test Capabilities",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "capabilities: [{\n    browserName: 'chrome',\n    platform: 'Windows 10',\n    version: 'latest',\n    name: \"single-test\",\n    build: \"wd-lambdatest-sample\",\n    geoLocation : \"US\"\n  }]"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 4: Run the Test",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npm run single"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 4: Run the Test",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npm run parallel"
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
      "name": "Selenium With WD",
      "description": "Run WD Selenium automation scripts on TestMu AI cloud grid with 3000+ real browsers and operating systems.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Clone the Sample Project",
          "text": "Clone the TestMu AI WD Selenium sample repository to your local machine. Install the required dependencies:",
          "url": "https://www.testmuai.com/support/docs/wd-with-selenium-running-wd-automation-scripts-on-testmu-selenium-grid/#step-1-clone-the-sample-project"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Set Your Credentials",
          "text": "Set your TestMu AI username and access key as environment variables. {`export LTUSERNAME=\"${ YOURLAMBDATEST_USERNAME()}\" export LTACCESSKEY=\"${ YOURLAMBDATESTACCESS_KEY()}\"`} {`set LTUSERNAME=\"${ YOURLAMBDATEST_USERNAME()}\" set LTACCESSKEY=\"${ YOURLAMBDATESTACCESS_KEY()}\"`}",
          "url": "https://www.testmuai.com/support/docs/wd-with-selenium-running-wd-automation-scripts-on-testmu-selenium-grid/#step-2-set-your-credentials"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 3: Configure Your Test Capabilities",
          "text": "Update the capabilities in conf/single.conf.js to define the browser and platform settings. Generate capabilities for your test requirements with the Capabilities Generator.",
          "url": "https://www.testmuai.com/support/docs/wd-with-selenium-running-wd-automation-scripts-on-testmu-selenium-grid/#step-3-configure-your-test-capabilities"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Step 4: Run the Test",
          "text": "Execute the test using the following command. Single test: Parallel tests:",
          "url": "https://www.testmuai.com/support/docs/wd-with-selenium-running-wd-automation-scripts-on-testmu-selenium-grid/#step-4-run-the-test"
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Step 5: View Your Results",
          "text": "After running the test, view your results on the TestMu AI Automation Dashboard. The dashboard provides: Video recordings of each test session Screenshots captured at each step Console logs from the browser Network logs for debugging Detailed command logs Home Support Selenium With WD",
          "url": "https://www.testmuai.com/support/docs/wd-with-selenium-running-wd-automation-scripts-on-testmu-selenium-grid/#step-5-view-your-results"
        }
      ]
    }
  ]) }}
/>

---

Run WD tests on the TestMu AI cloud grid. This guide covers setup, running a sample test, configuring capabilities, and testing locally hosted pages.

:::warning Unmaintained Framework
The WD library is largely unmaintained. Consider migrating to [WebDriverIO](/support/docs/webdriverio-with-selenium-running-webdriverio-automation-scripts-on-testmu-selenium-grid/) or [Playwright](/support/docs/playwright-testing/). This guide is maintained for existing users.
:::

:::tip Sample repo
All the code used in this guide is available in the sample repository.

<div style={{display: 'flex', justifyContent: 'flex-start'}}>
<a href="https://github.com/LambdaTest/wd-selenium-sample" className="github__anchor" target="_blank"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
</div>
:::

## Prerequisites
---
Complete these steps before running WD Selenium tests on TestMu AI.

1. Create a [TestMu AI account](https://www.testmuai.com/register/?redirectTo=https://accounts.lambdatest.com/dashboard) and get your username and access key from the dashboard.
2. Install **NodeJS** v6 or newer from [nodejs.org](https://nodejs.org/en/).
3. Install **npm** from the [official npm website](https://www.npmjs.com/).
4. Download [Selenium JavaScript bindings](https://www.selenium.dev/downloads/) from the official website.

## Step 1: Clone the Sample Project
---
Clone the TestMu AI WD Selenium sample repository to your local machine.

<VerifiedTag value="Verified" />

```bash
git clone https://github.com/LambdaTest/wd-selenium-sample
cd wd-selenium-sample
```

Install the required dependencies:

<VerifiedTag value="Verified" />

```bash
npm i
```

## Step 2: Set Your Credentials
---
Set your TestMu AI username and access key as environment variables.

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
Update the capabilities in `conf/single.conf.js` to define the browser and platform settings.

```js
capabilities: [{
    browserName: 'chrome',
    platform: 'Windows 10',
    version: 'latest',
    name: "single-test",
    build: "wd-lambdatest-sample",
    geoLocation : "US"
  }]
```

:::tip
Generate capabilities for your test requirements with the [Capabilities Generator](https://www.testmuai.com/capabilities-generator/).
:::

## Step 4: Run the Test
---
Execute the test using the following command.

**Single test:**

<VerifiedTag value="Verified" />

```bash
npm run single
```

**Parallel tests:**

<VerifiedTag value="Verified" />

```bash
npm run parallel
```

## Step 5: View Your Results
---
After running the test, view your results on the [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build).

The dashboard provides:
- Video recordings of each test session
- Screenshots captured at each step
- Console logs from the browser
- Network logs for debugging
- Detailed command logs

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
       Selenium With WD
      </span>
    </li>
  </ul>
</nav>
