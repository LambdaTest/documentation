---
id: puppeteer-testing-guide
title: How to Run Your First Puppeteer Test on TestMu AI
hide_title: true
toc_max_heading_level: 2
sidebar_label: "Run First Test"
description: Run your first Puppeteer test on real browsers and operating systems by connecting to the TestMu AI cloud over the CDP WebSocket endpoint.
keywords:
  - puppeteer testing testmu ai
  - run puppeteer tests on cloud
  - puppeteer automation testing
  - puppeteer cdp websocket endpoint
  - puppeteer testing tutorial

url: https://www.testmuai.com/support/docs/puppeteer-testing/
site_name: TestMu AI
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

# How to Run Your First Puppeteer Test on TestMu AI
***

If you automate Chrome with Puppeteer over the DevTools Protocol, you can run those same tests against real browsers and operating systems by connecting to TestMu AI. This gives your Puppeteer scripts access to a browser farm of real browser and OS combinations instead of a single local machine. You point Puppeteer's `connect` call at the TestMu AI CDP WebSocket endpoint, pass your capabilities, then view every run in the Automation Dashboard.

## Prerequisites
***

Before you run a test, set up the sample project and your credentials. All code samples in this documentation are available in the TestMu AI repository on GitHub, which you can download or clone to run your tests quickly.
<a href="https://github.com/LambdaTest/puppeteer-sample" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="GitHub icon linking to the TestMu AI Puppeteer sample repository"  className="doc_img"/> View on GitHub</a>

1. Clone the TestMu AI Puppeteer repository on your system.

2. Install the npm dependencies.

```bash
npm install
```

3. Add `browserWSEndpoint` (the browser endpoint URL) in your test script.

```js
`wss://cdp.lambdatest.com/puppeteer?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
```

4. Set your TestMu AI username and access key in the environment variables. Click the **Access Key** button at the top-right of the Automation Dashboard to access it.

<img loading="lazy" src={require('../assets/images/playwright-testing/key.webp').default} alt="Access Key button at the top-right of the TestMu AI Automation Dashboard" width="1444" height="703"  className="doc_img"/>

**Windows**

```bash
set LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
set LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```

**macOS/Linux**

```bash
export LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
export LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```

## Run Your First Puppeteer Test
***

With the project cloned and your credentials set, follow these steps to run a Puppeteer test on the TestMu AI platform.

1. Clone the [TestMu AI Puppeteer sample repository](https://github.com/LambdaTest/puppeteer-sample) and switch to the cloned directory.

```bash
git clone https://github.com/LambdaTest/puppeteer-sample.git
cd puppeteer-sample
```

2. Ensure you have npm dependencies installed.

3. Configure your TestMu AI authentication credentials.

Once these steps are complete, you can run your first Puppeteer test on TestMu AI.

>**Test Scenario**: The below test script runs on the Chrome browser on Windows 10. It visits the TestMu AI platform, opens the Pricing page, then navigates to the Automation Testing page.

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
            'accessKey': process.env.LT_ACCESS_KEY || "Your Access Key",
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

4. Run the test with the command below.

```bash
node navigation.js
```

## View Your Puppeteer Test Results
***

After a run finishes, the TestMu AI Automation Dashboard is where you see the results of your Puppeteer tests. It shows the Puppeteer build on the left and the build sessions associated with the selected build on the right.

<img loading="lazy" src={require('../assets/images/puppeteer-testing/dashboard.png').default} alt="TestMu AI Automation Dashboard listing the Puppeteer build and its associated sessions" width="1444" height="703"  className="doc_img"/>

Click the session name of a test to view the details of the Puppeteer session you just executed. The session view shows Test Name, Test ID, selected configurations, test logs, basic info, input config, and the test session video.

<img loading="lazy" src={require('../assets/images/puppeteer-testing/logs.png').default} alt="Puppeteer session details showing test name, configurations, logs, and session video" width="1347" height="616"  className="doc_img"/>

## Related Puppeteer Guides
***

Continue with these related guides to configure and extend your Puppeteer runs on TestMu AI.

- [Configure your environment to execute Puppeteer tests](/support/docs/puppeteer-test-execution-setup/) walks through the setup needed before a cloud run.
- [Set browser, OS, and build capabilities for Puppeteer](/support/docs/capabilities-for-puppeteer/) covers the full capabilities reference.
- [Run Puppeteer tests with the Mocha framework](/support/docs/puppeteer-testing-with-mocha/) shows how to structure tests with Mocha.

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
