---
id: playwright-android-guide
title: How To Run Playwright Tests On TestMu AI Android Devices
hide_title: true
sidebar_label: Getting Started
description: Here you can learn how to run Playwright tests on the TestMu AI android devices.
keywords:
  - playwright testing
  - playwright mobile testing
  - playwright testing tool
  - playwright testing on testmu ai
  - playwright testing testmu ai
  - playwright android

url: https://www.testmuai.com/support/docs/playwright-android/
site_name: LambdaTest
slug: playwright-android/
canonical: https://www.testmuai.com/support/docs/playwright-android/
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
          "name": "Getting Started With Playwright Testing",
          "item": `${BRAND_URL}/support/docs/playwright-testing/`
        }]
      })
    }}
></script>

# Getting Started With Playwright Testing on Android Real Devices
* * *
Playwright is a Node.js library that uses a single API to automate Chromium, Firefox, and WebKit. It is designed to enable powerful, reliable, and efficient [automated browser testing](https://www.lambdatest.com/automated-browser-testing). Playwright has experimental support for Android automation. This includes Chrome for Android and Android WebView.

<BrandName /> allows you to run Playwright tests across 100+ different android devices. This guide will cover the basics of getting started with Playwright testing on android devices on the <BrandName /> platform.

:::tip 
- To run test using Playwright android, we currently support versions from `1.20.0` to `1.56.1`
-  excluding `1.54.0` which is not supported.
:::


## Prerequisites
***

>Note: All the code samples in this documentation can be found in the <BrandName />'s Repository on GitHub. You can either download or clone the repository to quickly run your tests.
<a href="https://github.com/LambdaTest/playwright-sample/" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image"  className="doc_img"/> View on GitHub</a>

1. Clone the <BrandName />-Playwright repository on your system using the following command.
```
git clone https://github.com/LambdaTest/playwright-sample/
cd playwright-sample
```

2. Install the npm dependencies.

```
npm install
```

3. Add browserWSEndpoint (browser end point URL) in your test script.

```js
wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
```

4. In order to run your Playwright tests, you will need to set your <BrandName /> username and access key in the environment variables. Click the **Access Key** button at the top-right of the Automation Dashboard to access it.

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

## Run Your First Test
---

1. Add the below code snippet in your test scripts to initiate your first Playwright test on <BrandName />.

```javascript title="lambdatest-setup.js"
const {_android} = require("playwright");
const expect = require("chai").expect;

(async () => {
    const capabilities = {
        "LT:Options": {
            "platformName": "android",
            "deviceName": "Pixel 5",
            "platformVersion": "11",
            "isRealMobile": true,
            "build": "Playwright android build",
            "name": "Playwright android test",
            "user": process.env.LT_USERNAME,
            "accessKey": process.env.LT_ACCESS_KEY_STAGE,
            "network": true,
            "video": true,
            "console": true,
            "projectName": "New Project",
        },
    };

    let device = await _android.connect(
        `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
            JSON.stringify(capabilities))}`,
    );

    console.log(`Model:: ${device.model()}, serial:: ${device.serial()}`);

    await device.shell("am force-stop com.android.chrome");

    let context = await device.launchBrowser();
    // highlight-next-line
    context.setDefaultTimeout(120000);
    let page = await context.newPage();

    await page.goto("https://duckduckgo.com");
    let element = await page.$("[name=\"q\"]");
    await element.click();
    await element.type("Playwright");
    await element.press("Enter");
    let title = await page.title();

    try {
        expect(title).to.equal("Playwright at DuckDuckGo");
        // Mark the test as completed or failed
        await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({ action: "setTestStatus", arguments: {status: "passed", remark: "Assertions passed" },})}`);
    } catch (e) {
        await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({action: "setTestStatus", arguments: { status: "failed", remark: e.stack }})}`);
        console.log("Error:: ", e.stack);
    }

    await page.close();
    await context.close();
    await device.close();
})();
```

:::tip
The timeout value specified in the Playwright configuration is not being honored during mobile browser automation tests on real devices, defaulting to 30 seconds, whereas it works correctly on desktop browsers. To resolve the issue, add the following line to the `lambdatest-setup.js` file:

```javascript
context.setDefaultTimeout(120000);  // Set your desired timeout value.
```
:::


2. Pass the below command to run the test.

```
node playwright-android-real-device.js
```

## View your Playwright test results
***

The <BrandName /> Automation Dashboard is where you can see the results of your Playwright tests after running them on the <BrandName /> platform. 

The below screenshot of <BrandName /> Automation Dashboard shows the Playwright build on the left and the build sessions associated with the selected build on the right.

<img loading="lazy" src={require('../assets/images/playwright-testing/playwright-android-build-view.webp').default} alt="Image" width="1444" height="703"  className="doc_img"/>

On clicking the session name of the respective test, you can view the details of Playwright test session that you just executed. For example, the below screenshot shows a test execution details of Playwright test like Test Name, Test ID, selected configurations, test logs, basic info, input config, and test session video. 

<img loading="lazy" src={require('../assets/images/playwright-testing/playwright-android-dashboard.webp').default} alt="Image" width="1347" height="616"  className="doc_img"/>
