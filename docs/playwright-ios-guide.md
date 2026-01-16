---
id: playwright-ios-guide
title: How To Run Playwright Tests On TestMu AI iOS Devices
hide_title: true
sidebar_label: Test on iOS Device
description: Here you can learn how to run Playwright tests on the TestMu AI iOS real devices.
keywords:
  - playwright testing
  - playwright ios
  - playwright mobile testing
  - playwright testing on testmu ai
  - playwright testing testmu ai
  - playwright real devices

url: https://www.testmu.ai/support/docs/playwright-ios-device/
site_name: LambdaTest
slug: playwright-ios-device
canonical: https://www.testmu.ai/support/docs/playwright-ios-device/
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
          "item": `${BRAND_URL}/support/docs/playwright-ios-device/`
        }]
      })
    }}
></script>

# Getting Started With Playwright Testing on iOS Real Devices
* * *
Playwright test automation on real iOS devices is now supported on <BrandName />. Test on latest iPhone and iPad safari combinations to catch device-specific issues that mobile emulation may miss. Integrate with your existing CI pipeline, and access logs and debugging artifacts for each test run.

This guide will cover the basics of getting started with Playwright testing on iOS devices on the <BrandName /> platform.

> Testing with Playwright on real iOS and Android devices is currently supported with Playwright **v1.53.2**

## Prerequisites
***

>Note: All the code samples in this documentation can be found in the <BrandName />'s Repository on GitHub. You can either download or clone the repository to quickly run your tests.
<a href="https://github.com/LambdaTest/playwright-sample/" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image"  className="doc_img"/> View on GitHub</a>

1. Clone the <BrandName />-Playwright repository on your system using the following command.
```
git clone https://github.com/LambdaTest/playwright-sample/
```

2. Install the npm dependencies.

```
npm install
```

3. Add browserWSEndpoint (browser end point URL) in your test script.

```js
wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
```

4. In order to run your Playwright tests on iOS devices , you will need to set your <BrandName /> username and access key in the environment variables. Click the **Access Key** button at the top-right of the Automation Dashboard to access it.

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

```javascript title="lambdatest-sample.js"
require('dotenv').config();
const { webkit } = require("playwright");
const { expect } = require("expect");

(async () => {
  console.log('Starting Playwright iOS Real Device test...');
  console.log('Device: iPhone 16 (iOS 18)');
  
  const capabilities = {
    "LT:Options": {
      "platformName": "ios",
      "deviceName": "iPhone 16",
      "platformVersion": "18",
      "isRealMobile": true,
      "build": "Playwright iOS Build",
      "name": "Playwright iOS test",
      "user": process.env.LT_USERNAME,
      "accessKey": process.env.LT_ACCESS_KEY,
      "network": true,
      "video": true,
      "console": true,
      "projectName": "New UI",
    },
  };

  console.log('Connecting to LambdaTest iOS cloud...');
  console.log('Username:', process.env.LT_USERNAME);
  console.log('Platform: iOS 18, Device: iPhone 16');

  let browser = await webkit.connect(
      `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
          JSON.stringify(capabilities))}`,
  );

  console.log('Connected to iOS device successfully!');
  console.log(`Device: iPhone 16, iOS 18`);

  console.log('Creating browser context...');
  let context = await browser.newContext({
    hasTouch: true,  // Enable touch support for iOS
    isMobile: true   // Enable mobile mode for iOS
  });
  let page = await context.newPage();

  console.log('Navigating to Wikipedia...');
  await page.goto('https://www.wikipedia.org/', { timeout: 30000 });
  
  console.log('Finding search input...');
  let element = await page.locator('input[name="search"]');
  
  console.log('Clicking search input...');
  await element.click();
  
  console.log('Typing "playwright"...');
  await element.fill('playwright');
  
  console.log('Clicking search input again...');
  await element.click();
  
  console.log('Current URL:', await page.url());
  
  console.log('Finding and clicking search button...');
  await page.locator('#search-form > fieldset > button').click();
  
  console.log('Waiting for search results...');
  await page.waitForTimeout(3000);
  
  console.log('Counting occurrences of "19th century"...');
  const count = await page.getByText('19th century').count();
  console.log('Found', count, 'occurrences of "19th century"');
  
  try {
    console.log('Verifying count equals 3...');
    expect(count).toEqual(3);
    console.log('iOS Test PASSED! Found exactly 3 occurrences');
    
    // Mark the test as completed or failed
    await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({ action: "setTestStatus", arguments: {status: "passed", remark: "Wikipedia test passed - found 3 occurrences of '19th century'" },})}`);
    console.log('Marked test as PASSED in LambdaTest dashboard');
    
    await teardown(page, context, browser)
  } catch (e) {
    console.log('iOS Test FAILED!');
    console.log('Error:', e.message);
    console.log('Expected: 3 occurrences of "19th century"');
    console.log('Actual count:', count);
    
    await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({action: "setTestStatus", arguments: { status: "failed", remark: e.message }})}`);
    console.log('Marked test as FAILED in LambdaTest dashboard');
    
    await teardown(page, context, browser)
    throw e.stack
  }

})().catch(err => {
  console.error('Unexpected error occurred in iOS test:');
  console.error(err);
  process.exit(1);
});

async function teardown(page, context, browser) {
  console.log('Cleaning up iOS test resources...');
  try {
    console.log('   Closing page...');
    await Promise.race([
      page.close(),
      new Promise(resolve => setTimeout(resolve, 10000)) // 10 second timeout
    ]);
    console.log('Page closed');
    
    console.log('Closing context...');
    await Promise.race([
      context.close(),
      new Promise(resolve => setTimeout(resolve, 10000)) // 10 second timeout
    ]);
    console.log('Context closed');
    
    console.log('   Closing browser connection...');
    await Promise.race([
      browser.close(),
      new Promise(resolve => setTimeout(resolve, 15000)) // 15 second timeout for browser
    ]);
    console.log('Browser closed');
    
    console.log('iOS test completed and resources cleaned up!');
  } catch (error) {
    console.log('Cleanup completed with warnings:', error.message);
  }
    process.exit(0);
} 

```
----

2. Pass the below command to run the test.

```
node playwright-ios-real-device.js
```

## View your Playwright test results
***

The <BrandName /> Automation Dashboard is where you can see the results of your Playwright iOS tests after running them on the <BrandName /> platform. 

The below screenshot of <BrandName /> Automation Dashboard shows the Playwright build on the left and the build sessions associated with the selected build on the right.

<img loading="lazy" src={require('../assets/images/playwright-testing/playwright-ios-real-device.webp').default} alt="Image" width="1444" height="703"  className="doc_img"/>

:::note

- Only Safari and Node.js integrations are currently supported; we plan to extend compatibility to additional browsers and languages soon.

- Playwright testing on real iOS devices is currently supported on latest iOS versions—iOS 17, iOS 18, and iOS 26—across both iPhones and iPads. Extension of device coverage is currently in progress.

:::



