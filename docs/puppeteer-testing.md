---
id: puppeteer-testing-guide
title: How To Run Puppeteer Tests On TestMu AI Platform
hide_title: true
sidebar_label: Puppeteer Testing
description: Learn how to run your Puppeteer tests across 40+ browsers and operating systems on the TestMu AI automation platform
keywords:
  - puppeteer testing
  - automation testing with puppeteer
  - how to use puppeteer for testing
  - test puppeteer
  - puppeteer testing tutorial
  - puppeteer testing testmu ai

url: https://www.testmuai.com/support/docs/puppeteer-testing/
site_name: LambdaTest
slug: puppeteer-testing/
canonical: https://www.testmuai.com/support/docs/puppeteer-testing/
---
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
          "name": "Getting Started With Puppeteer Testing",
          "item": `${BRAND_URL}/support/docs/puppeteer-testing/`
        }]
      })
    }}
></script>

# Getting Started With Puppeteer Testing
* * *
Puppeteer is a Node package that automates the Chrome browser for web testing. Over the DevTools Protocol, it provides a high-level API for controlling headless Chrome or Chromium. It may also be set to run full (non-headless) Chrome or Chromium.

<BrandName /> allows you to run Puppeteer tests on a browser farm of 40+ real browsers and operating system combinations. This guide will cover the basics of getting started with Puppeteer testing on the <BrandName /> platform.

## Prerequisites
***

>Note: All the code samples in this documentation can be found in the <BrandName />'s Repository on GitHub. You can either download or clone the repository to quickly run your tests.
<a href="https://github.com/LambdaTest/puppeteer-sample" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image"  className="doc_img"/> View on GitHub</a>

1. Clone the <BrandName />-Puppeteer repository on your system.

2. Install the npm dependencies.

```
npm install
```

3. Add browserWSEndpoint (browser end point URL) in your test script.

```js
`wss://cdp.lambdatest.com/puppeteer?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
```

4. In order to run your Puppeteer tests, you will need to set your <BrandName /> username and access key in the environment variables. Click the **Access Key** button at the top-right of the Automation Dashboard to access it.

<img loading="lazy" src={require('../assets/images/playwright-testing/key.webp').default} alt="Image" width="1444" height="703"  className="doc_img"/>


**Windows**

```js
set LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
set LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```

**macOS/Linux**

```js
export LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
export LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```

## Run Your First Puppeteer Test
* * *

Shown below are the steps on running Puppeteer tests on the <BrandName /> platform. 

1. Clone the [<BrandName />-Puppeteer GitHub repository](https://github.com/LambdaTest/puppeteer-sample) and switch to the cloned directory.

```js
git clone https://github.com/LambdaTest/puppeteer-sample.git
cd puppeteer-sample
```

2. Ensure you have npm dependencies installed. 

3. Configure your <BrandName /> authentication credentials.

Once you are done with the above-mentioned steps, you can initiate your first Puppeteer test on <BrandName />. 

>**Test Scenario**: The below test script runs on Chrome browser running Windows 10. It visits the <BrandName /> platform, clicks on the Pricing page, and navigates to the Automation Testing page.

```js
'use strict';
const { strict } = require('once');
const puppeteer = require('puppeteer');
const expect = require('chai').expect;

(async () => {    
    const capabilities = {
        'browserName': 'Chrome',
        'browserVersion': 'latest',
        'LT:Options': {
            'platform': 'Windows 10',
            'build': 'puppeteer-build-1',
            'name': 'My first Puppeteer test',
            'resolution':'1366x768',
            'user': process.env.LT_USERNAME || "Your Username",
            'accessKey': process.env.LT_ACCESS_KEY || "Your Access Key",,
            'network': true
        }
   };
    
    try {
        const browser = await puppeteer.connect({
            browserWSEndpoint:
                `wss://cdp.lambdatest.com/puppeteer?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`,
        });

        const page = await browser.newPage();
        await page.setViewport({
            width: 1024,
            height: 768,
            deviceScaleFactor: 1,
          });
        console.log("Navigating to LambdaTest");
        await page.goto('https://www.lambdatest.com/');
        console.log("Navigating to Pricing");
        await page.goto('https://www.lambdatest.com/pricing');
        console.log("Navigating to Automation");
        await page.goto('https://www.lambdatest.com/automation-testing');
        console.log("Closing browser");
        await browser.close();

    } catch (e) {
        console.log("Error - ", e);
    }
})();
```

4. Pass the below command to run the test.

```
node navigation.js
```

## View your Puppeteer test results
***

The <BrandName /> Automation Dashboard is where you can see the results of your Puppeteer tests after running them on the <BrandName /> platform. 

The below screenshot of <BrandName /> Automation Dashboard shows the Puppeteer build on the left and the build sessions associated with the selected build on the right.

<img loading="lazy" src={require('../assets/images/puppeteer-testing/dashboard.png').default} alt="Image" width="1444" height="703"  className="doc_img"/>

On clicking the session name of the respective test, you can view the details of Puppeteer test session that you just executed. For example, the below screenshot shows a test execution details of Puppeteer test like Test Name, Test ID, selected configurations, test logs, basic info, input config, and test session video. 

<img loading="lazy" src={require('../assets/images/puppeteer-testing/logs.png').default} alt="Image" width="1347" height="616"  className="doc_img"/>

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>
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
        Getting Started With Puppeteer Testing
      </span>
    </li>
  </ul>
</nav>
