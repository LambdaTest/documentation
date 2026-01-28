---
id: k6-browser-testing
title: How To Run k6 Browser Tests On TestMu AI Platform
hide_title: true
sidebar_label: k6 Browser Testing
description: Learn how to run your k6 Browser tests across 40+ browsers and operating systems on the TestMu AI automation platform
keywords:
  - k6 browser testing
  - grafana browser testing
  - automation testing with k6
  - how to use k6 for testing
  - test k6
  - k6 testing tutorial
  - k6 testing testmu ai

url: https://www.testmuai.com/support/docs/k6-browser-testing/
site_name: LambdaTest
slug: k6-browser-testing/
canonical: https://www.testmuai.com/support/docs/k6-browser-testing/
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
          "name": "Getting Started With k6 browser Testing",
          "item": `${BRAND_URL}/support/docs/k6-browser-testing/`
        }]
      })
    }}
></script>

# Getting Started With k6 Browser Testing

* * *
The [k6 Browser module](https://github.com/grafana/xk6-browser) brings browser automation and end-to-end web testing to k6 while supporting core k6 features. The Browser module introduces browser-level APIs that enable seamless interaction with browsers and facilitate the collection of frontend performance metrics as an integral part of your k6 tests. 

k6 browser module aims to provide rough compatibility with the Playwright API, so you don’t need to learn a completely new API.

<div className="ytframe"> 
<div className="youtube" data-embed="DMCjvvVrLgI">
    <div className="play-button"></div>
</div>
</div>

<BrandName /> allows you to run k6 Browser tests on a browser farm of 40+ real browsers and operating system combinations. This guide will cover the basics of getting started with K6 testing on the <BrandName /> platform.

**Note**: k6 Browser is an experimental module that supports browser testing through the Chrome DevTools Protocol (CDP).

## Prerequisites

***

> Note: All the code samples in this documentation can be found in the <BrandName />'s Repository on GitHub. You can either
> download or clone the repository to quickly run your tests.
<a href="https://github.com/LambdaTest/k6-browser-tests-sample" className="github__anchor"><img loading="lazy"
> src={require('../assets/images/icons/github.png').default} alt="Image"  className="doc_img"/> View on GitHub</a>

1. Install k6. Refer the installation guide here: https://k6.io/docs/get-started/installation/

2. In order to run your k6 tests, you will need to set your <BrandName /> username and access key in the environment
   variables. Click the **Access Key** button at the top-right of the Automation Dashboard to access it.

<img loading="lazy" src={require('../assets/images/playwright-testing/key.webp').default} alt="Image" width="1444"
height="703"  className="doc_img"/>

**Windows**

```js
set LT_USERNAME = "YOUR_LAMBDATEST_USERNAME"
set LT_ACCESS_KEY = "YOUR_LAMBDATEST_ACCESS_KEY"
```

**macOS/Linux**

```js
export LT_USERNAME = "YOUR_LAMBDATEST_USERNAME"
export LT_ACCESS_KEY = "YOUR_LAMBDATEST_ACCESS_KEY"
```

## Run Your First k6 Test

* * *

Shown below are the steps on running k6 tests on the <BrandName /> platform.

1. Clone the [k6-browser-tests-sample GitHub repository](https://github.com/LambdaTest/k6-browser-tests-sample) and
   switch to the cloned directory.

```sh
git clone https://github.com/LambdaTest/k6-browser-tests-sample.git
cd k6-browser-tests-sample
```

2. Ensure you have K6 installed.

3. Configure your <BrandName /> authentication credentials.

Once you are done with the above-mentioned steps, you can initiate your first k6 test on <BrandName />.

> **Test Scenario**: The below test script runs on Chrome browser on macOS Ventura. It visits the DuckDuckGo search engine and searches for Playwright.

```js
import {chromium} from 'k6/experimental/browser';
import {expect} from 'https://jslib.k6.io/k6chaijs/4.3.4.3/index.js';

export default async function() {
  const capabilities = {
    "browserName": "Chrome",
    "browserVersion": "latest",
    "LT:Options": {
      "platform": "MacOS Ventura",
      "build": "K6 Build",
      "name": "K6 Test",
      "user": `${__ENV.LT_USERNAME}`,
      "accessKey": `${__ENV.LT_ACCESS_KEY}`,
      "network": true,
      "video": true,
      "console": true,
      'tunnel': false, // Add tunnel configuration if testing locally hosted webpage
      'tunnelName': '', // Optional
      'geoLocation': '', // country code can be fetched from https://www.lambdatest.com/capabilities-generator/
    },
  };

  const wsURL = `wss://cdp.lambdatest.com/k6?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
  const browser = chromium.connect(wsURL);

  const page = browser.newPage();

  try {
    await page.goto("https://duckduckgo.com");
    await page.screenshot({path: 'screenshots/k6Screenshot.png'});

    let element = await page.$("[name=\"q\"]");
    await element.click();
    await element.type("K6");
    await element.press("Enter");
    let title = await page.title();

    try {
      expect(title).to.equal("K6 at DuckDuckGo");
      // Mark the test as passed or failed
      await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify(
          {action: "setTestStatus", arguments: {status: "passed", remark: "Assertions passed"},})}`);
    } catch (e) {
      await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify(
          {action: "setTestStatus", arguments: {status: "failed", remark: e.stack}})}`);
      console.log("Error:: ", e.stack);
    }
  } finally {
    page.close();
    browser.close();
  }
};
```

4. Pass the below command to run the test.

```
K6_BROWSER_ENABLED=true k6 run k6_sample.js
```

## View your k6 test results

***

The <BrandName /> Automation Dashboard is where you can see the results of your k6 tests after running them on the <BrandName /> platform.

The below screenshot of <BrandName /> Automation Dashboard shows the k6 build on the left and the build sessions associated with the selected build on the right.

<img loading="lazy" src={require('../assets/images/k6-testing/k6-dashboard.png').default} alt="Image" width="1444"
height="703"  className="doc_img"/>

On clicking the session name of the respective test, you can view the details of k6 test session that you just executed. For example, the below screenshot shows a test execution details of k6 test like Test Name, Test ID, selected configurations, test logs, basic info, input config, and test session video.

----
