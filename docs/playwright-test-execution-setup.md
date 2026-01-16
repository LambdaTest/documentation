---
id: playwright-test-execution-setup
title: Playwright Test Execution Setup
hide_title: true
sidebar_label: Test Execution Setup
description: Learn how to configure the desired capability for selecting browsers and OS, organzing tests, changing desktop resolution, and more for your Playwright tests.
keywords:
  - playwright testing
  - playwright e2e testing 
  - playwright mobile testing
  - playwright testing tool
  - playwright testing on testmu ai
  - playwright testing testmu ai

url: https://www.testmu.ai/support/docs/playwright-test-execution-setup/
site_name: LambdaTest
slug: playwright-test-execution-setup/
canonical: https://www.testmu.ai/support/docs/playwright-test-execution-setup/
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
          "name": "Test Execution Setup",
          "item": `${BRAND_URL}/support/docs/playwright-test-execution-setup/`
        }]
      })
    }}
></script>

# Playwright - Test Execution Setup
* * *

Whenever you run a Playwright test, you must specify the operating system and the browser you wish to use. The <BrandName /> Desired Capabilities Generator allows you to automatically create the capabilities class needed to run your Playwright automation scripts on <BrandName />. 

In this document, learn how to configure the desired capability for selecting browsers and OS, organzing tests, changing desktop resolution, and more for your Playwright tests.


## Choosing Browser And OS
***


To perform Playwright testing on <BrandName />, you need to define the `browserName`, `browserVersion`, and `platform` capabilities in your automation scripts.

| Key | Expected Values | Description | Capability|
| -------- | -----| ------------ | --------------|
| browserName   |  Chrome, Microsoft Edge<br/> <br/>**Playwright Bundled Browsers**: pw-chromium, pw-webkit, and pw-firefox |   Specify the browser to test on    |  `const capability = {"browserName": "pw-webkit"}`|
| browserVersion  |  Chrome 83 & above, Edge 83 & above | Specify the browser version to test on |  `const capability = {"browserVersion": "latest"}`|
| platform  |  **Windows**: 11, 10, 8, 8.1, 7 <br/><br/> **macOS**: Monterey, Big Sur, Catiline, Mojave |    Specify the platform name    | `const capability = { "LT:Options": {"platform": "Windows 10",}}` |

### Playwright Supported Browsers
---

Following is a list of compatible Playwright bundled browsers that you can use to run tests on the <BrandName /> platform.

| Playwright Versions | Compatible Browsers | 
| --------------------|---------------------| 
| v1.44               | **Chromium** 125.0 <br/> **Firefox** 125.0.1 <br/> **WebKit** 17.4 |
| v1.43               | **Chromium** 124.0 <br/> **Firefox** 124.0 <br/> **WebKit** 17.4 |
| v1.42               | **Chromium** 123.0 <br/> **Firefox** 123.0 <br/> **WebKit** 17.4 |
| v1.41               | **Chromium** 121.0 <br/> **Firefox** 121.0 <br/> **WebKit** 17.4 |
| v1.40               | **Chromium** 120.0 <br/> **Firefox** 119.0 <br/> **WebKit** 17.4 |
| v1.39               | **Chromium** 119.0 <br/> **Firefox** 118.0 <br/> **WebKit** 17.4 |
| v1.38               | **Chromium** 117.0 <br/> **Firefox** 117.0 <br/> **WebKit** 17.0 |
| v1.37               | **Chromium** 116.0 <br/> **Firefox** 115.0 <br/> **WebKit** 17.0 |
| v1.36               | **Chromium** 115.0 <br/> **Firefox** 115.0 <br/> **WebKit** 17.0 |
| v1.35               | **Chromium** 115.0 <br/> **Firefox** 113.0 <br/> **WebKit** 16.4 |
| v1.34               | **Chromium** 115.0 <br/> **Firefox** 113.0 <br/> **WebKit** 16.4 |
| v1.33               | **Chromium** 113.0 <br/> **Firefox** 112.0 <br/> **WebKit** 16.4 |
| v1.32               | **Chromium** 112.0 <br/> **Firefox** 111.0 <br/> **WebKit** 16.4 |
| v1.31               | **Chromium** 111.0 <br/> **Firefox** 109.0 <br/> **WebKit** 16.4 |
| v1.30               | **Chromium** 110.0 <br/> **Firefox** 108.0 <br/> **WebKit** 16.4 |
| v1.29               | **Chromium** 109.0 <br/> **Firefox** 107.0 <br/> **WebKit** 16.0 |
| v1.28               | **Chromium** 108.0 <br/> **Firefox** 106.0 <br/> **WebKit** 16.4 |
| v1.27               | **Chromium** 107.0 <br/> **Firefox** 105.0 <br/> **WebKit** 16.0 |
| v1.26               | **Chromium** 106.0 <br/> **Firefox** 104.0 <br/> **WebKit** 16.0 |
| v1.25               | **Chromium** 105.0 <br/> **Firefox** 103.0 <br/> **WebKit** 16.0 |
| v1.24               | **Chromium** 103.0 <br/> **Firefox** 102.0 <br/> **WebKit** 16.0 |
| v1.23               | **Chromium** 103.0 <br/> **Firefox** 100.0 <br/> **WebKit** 15.4 |
| v1.22               | **Chromium** 102.0 <br/> **Firefox** 99.0 <br/> **WebKit** 15.4  |
| v1.21               | **Chromium** 101.0 <br/> **Firefox** 98.0 <br/> **WebKit** 15.4  |
| v1.20               | **Chromium** 101.0 <br/> **Firefox** 97.0 <br/> **WebKit** 15.4  |
| v1.19               | **Chromium** 100.0 <br/> **Firefox** 96.0 <br/> **WebKit** 15.4  |
| v1.18               | **Chromium** 99.0 <br/> **Firefox** 95.0 <br/> **WebKit** 15.4   |
| v1.17               | **Chromium** 98.0 <br/> **Firefox** 94.0 <br/> **WebKit** 15.4   |
| v1.16               | **Chromium** 97.0 <br/> **Firefox** 93.0 <br/> **WebKit** 15.4   |
| v1.15               | **Chromium** 96.0 <br/> **Firefox** 92.0 <br/> **WebKit** 15.0   |

## Organizing Tests
***

You can name your test cases and categorize your Playwright builds by build number, build name, test and build tags for easier analysis. Use the following capabilities to organize your Playwright tests.

| Key | Values | Description | Capability |
| -------- | -----| ------------ | -------- |
| build   |  Playwright Sample Build | Represent the build number for your test |```const capability = {"LT:Options": {"build": "<build_name>",}}```  |
| name   |  Playwright Sample Test | Represents the name of a test | `const capability = {"LT:Options": {"name": "<test_name>",}}` |
| projectName   |  Playwright Sample Project | Represents the name of a project | `const capability = {"LT:Options": {"projectName": "<project_name>",}}` |
| tags   |  ["tag1", "tag2", "tag3"] |  Group your Playwright tests |``const capability = {"LT:Options": { "tags": ["tag1", "tag2", "tag3"], }}`` |
| buildTags   |  ["build1", "build2", "build3"] |  Group your Playwright builds |`const capability = {"LT:Options": { "buildTags": ["build1", "build2", "build3"] }}` |


<!-- Shown below is the script that configure the `build` and `name` capabilities. 

```js
const { chromium } = require('playwright');

const capabilities = {
    'browserName': 'Chrome', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
    'browserVersion': 'latest',
    'LT:Options': {
      'platform': 'Windows 10',
      'build': 'Playwright Sample Build',
      'name': 'Playwright Sample Test',
      'user': process.env.LT_USERNAME,
      'accessKey': process.env.LT_ACCESS_KEY,
      'network': true,
      'video': true,
      'console': true
    }
  }

  const browser = await chromium.connect({
    wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
  })
``` -->

## Changing Desktop Resolutions
***

Playwright tests run with a `1920x1080` resolution by default for desktop browsers. With our `resolution` capability, you can set a different screen resolution for your tests.

| Capability | Description  | Expected Values | Example |
| -------- | -----| ------------ | -----------------------------|
| resolution   |  Specifying your desktop resolution before initiating the test |   String, **Default value**: 1920x1080 <br/> <br/> **Windows 11 & 10**: `1024x768, 1280x800, 1280x1024, 1366x768, 1440x900, 1680x1050, 1600x1200, 1920x1200, 1920x1080 and 2048x1536` <br/><br/> **macOS**: `1024x768, 1280x960, 1280x1024, 1600x1200 and 1920x1080`  | `const capabilities = { 'LT:Options': {'resolution': '2048x1536',}}` |

## Changing Browser Window Size
***

The default viewport size for Playwright tests is 1280x720. If you wish to maximize the browser window during your Playwright test, you can do it as shown in the code below.

```js
// Create context with given viewport
const context = await browser.newContext({
  viewport: { width: 1280, height: 1024 }
});
```
The above Playwright test runs on a default viewport of 1280x1024. However, you can also select any other viewport when creating a `new context`.

If you resize viewport for individual page then run the below command.

```js
await page.setViewportSize({ width: 1600, height: 1200 });
```

## Setting Browser Options
***

Playwright lets you set browser arguments for Chromium based browsers. When selecting Chrome and Edge, you can set browser options  using `'goog:chromeOptions'` and `'ms:edgeOptions'` capability as shown below.

**For Chrome**

```js
const { chromium } = require('playwright');

const capabilities = {
    'browserName': 'Chrome', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
    'browserVersion': 'latest',
    'LT:Options': {
      'platform': 'Windows 10',
      'build': 'Playwright Sample Build',
      'name': 'Playwright Sample Test',
      'user': process.env.LT_USERNAME,
      'accessKey': process.env.LT_ACCESS_KEY,
      'goog:chromeOptions':[
         '--user-agent=<Any custom user agent>',
       ],

    }
  }

  const browser = await chromium.connect({
    wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
  })
  ```

  **For Edge**

  ```js
  const { chromium } = require('playwright');

const capabilities = {
    'browserName': 'Chrome', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
    'browserVersion': 'latest',
    'LT:Options': {
      'platform': 'Windows 10',
      'build': 'Playwright Sample Build',
      'name': 'Playwright Sample Test',
      'user': process.env.LT_USERNAME,
      'accessKey': process.env.LT_ACCESS_KEY,
      'ms:edgeOptions':[
         '--user-agent=<Any custom user agent>',
       ],

    }
  }

  const browser = await chromium.connect({
    wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
  })
  ```

>**Note**: You can define any Chromium based argument from the [list of Chromium command line arguments](https://peter.sh/experiments/chromium-command-line-switches/).

## Getting Session Details
***

When you run a Playwright test on <BrandName />, it generates different logs for each test session. To get relevant information for the specific session, use the snippet provided below in your Playwright test scripts. 

```js
let response = JSON.parse(await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({ action: 'getTestDetails' })}`))
console.log(response); 
```

Upon executing the script, you will get the details for the particular test session as a JSON response as shown below.

```js
{
  data: {
    test_id: 'RWA9R-AC4V8-GJRET-YHBO2',
    build_id: 9415381,
    name: 'Playwright Sample Test',
    user_id: 1001150,
    username: 'kaustubhd',
    test_type: 'playwright',
    platform: 'win10',
    browser: 'Chrome',
    browser_version: '107.0',
    status_ind: 'running',
    session_id: 'RWA9R-AC4V8-GJRET-YHBO2',
    build_name: 'Playwright Sample Build',
    create_timestamp: '2022-12-07 10:53:16',
    start_timestamp: '2022-12-07 10:53:16',
    remark: 'running',
    console_logs_url: 'https://api.lambdatest.com/automation/api/v1/sessions/RWA9R-AC4V8-GJRET-YHBO2/log/console',
    network_logs_url: 'https://api.lambdatest.com/automation/api/v1/sessions/RWA9R-AC4V8-GJRET-YHBO2/log/network',
    command_logs_url: 'https://api.lambdatest.com/automation/api/v1/sessions/RWA9R-AC4V8-GJRET-YHBO2/log/command',
    video_url: 'https://automation.lambdatest.com/public/video?testID=RWA9R-AC4V8-GJRET-YHBO2&auth=50471585dd55293d204fe87f63400f5f',
    screenshot_url: 'https://video-bundler.lambdatest.com/RWA9R-AC4V8-GJRET-YHBO2/screenshots.zip?orgId=588659&createTimestamp=1670410396&testCreateTimestamp=2022-12-07%2010:53:16'
  },
  message: 'Retrieve session was successful',
  status: 'success'
}
```



## Configuring Geolocation
***

You can run your Playwright tests across 53+ geographies using the `'geoLocation'` capability as shown below.

| Key | Values | Description | Capability |
| -------- | -----| ------------ | -------- |
| geoLocation   |  US | Represents the geolocation - United States  |`const capabilities = { "LT:Options": { 'geoLocation': 'US', }}`  |

## Debugging Tests
***

By specifying the capabilities for the debugging tools, you can debug and fix your failed Playwright test sessions using network logs, console logs, and video logs.


| Key | Values | Description | Desired Capability |
| -------- | -----| ------------ | --------------|
| network   | true/false |   Enable network logs    |  `const capabilities = { 'LT:Options': {'network': true,}}` |
| console  | true/false |   Enable browser console logs  | `const capabilities = { 'LT:Options': {'console': true,}}` |
| video   |  true/false |    Enable Video recording of the entire screen     | `const capabilities = { 'LT:Options': {'video': true,}}` |

## Mark Tests As Passed Or Failed
***

While running Playwright tests on the <BrandName /> platform, you may come across a scenario in which a test that failed in your local instance turns up to be successful on <BrandName />. For verifying expected behavior, it is critical to identify automated tests as **Passed** or **Failed** based on your testing requirements.

By default, the Status of each test that runs successfully is marked as **Completed**, and if there are any issues, the Status is marked as **Failed**.

Shown below is syntax how to mark Playwright tests as **Passed** or **Failed**.

1. To mark test status as **passed**.

```
await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status:'passed', remark: 'Title matched' } })}`)
```

2. To mark test status as **failed**.

```
await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status:'failed', remark: 'Title not matched' } })}`)
```
---