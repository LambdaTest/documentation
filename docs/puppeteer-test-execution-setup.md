---
id: puppeteer-test-execution
title: How to Set Up the Puppeteer Test Environment on TestMu AI
hide_title: true
toc_max_heading_level: 2
sidebar_label: "Set Up Test Environment"
description: Configure capabilities to select browsers and OS, organize tests, set resolution, and enable debugging logs for Puppeteer tests on TestMu AI.
keywords:
  - puppeteer testing
  - automation testing with puppeteer
  - how to use puppeteer for testing
  - test puppeteer
  - puppeteer testing tutorial
  - puppeteer testing testmu ai

url: https://www.testmuai.com/support/docs/puppeteer-test-execution-setup/
site_name: TestMu AI
slug: puppeteer-test-execution-setup/
canonical: https://www.testmuai.com/support/docs/puppeteer-test-execution-setup/
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
          "name": "Puppeteer Test Execution Setup",
          "item": `${BRAND_URL}/support/docs/puppeteer-test-execution-setup/`
        }]
      })
    }}
></script>

# How to Set Up the Puppeteer Test Environment on TestMu AI
***

When you run a Puppeteer test on TestMu AI, you must tell the cloud machine which operating system and browser to use. Setting the right capabilities gives your scripts access to the browser, OS, resolution, and debugging logs each run needs. You do it by defining a capabilities object in your Puppeteer script and passing it to the CDP endpoint, so every test targets the exact environment you want.

The TestMu AI Capability Generator can auto-create the capabilities class for your Puppeteer scripts. The sections below cover selecting browsers and OS, organizing tests, changing desktop resolution, and enabling debugging logs.

## Choosing the Browser and OS
***

To run a Puppeteer test on TestMu AI, define the browser, browser version, and platform in your automation script. The three capabilities below set the exact environment the test targets.

| Key | Expected Values | Description | Example |
| -------- | -----| ------- | ----------------- |
| browserName   |  Chrome, Edge |   Specify the browser to test on    |  `const capability = {"browserName": "Chrome"}`
| browserVersion  |  Chrome 83 & above, Edge 83 & above |   Specify the browser version to test on    |  `const capability = {"browserVersion": "113.0"}`
| platform  |  **Windows**: 11, 10, 8, 8.1, 7 <br/><br/> **macOS**: Monterey, Big Sur, Catiline, Mojave |    Specify the platform name    | `const capability = { "LT:Options": {"platform": "Windows 10",}}`

## Organizing Tests With Build and Name Capabilities
***

Name your test cases and group your builds so runs stay easy to find in the dashboard. Use the capabilities below to organize your Puppeteer tests.

| Key | Values | Description | Capability|
| -------- | -----| ------------ | ---------|
| build   |  Puppeteer Sample Build |   Represent the build number for your test | `const capability = { "LT:Options": {"build": "<build_name>",}}`
| name   |  Puppeteer Sample Test |    Represents the name of a test   | `const capability = { "LT:Options": {"name": "<test_name>",}}`
| projectName   | Example: My Test |   Represent the name of your project    |  `const capability = { "LT:Options": {"projectName": "<project_name>",}}` |
| tags   |  ["tag1", "tag2", "tag3"] |  Group your Puppeteer tests |``const capability = {"LT:Options": { "tags": ["tag1", "tag2", "tag3"], }}`` |
| buildTags   |  ["build1", "build2", "build3"] |  Group your Puppeteer builds |`const capability = {"LT:Options": { "buildTags": ["build1", "build2", "build3"] }}` |

The script below configures the `build` and `name` capabilities inside the `LT:Options` object.

```js
// add test code after initializing your browser
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
            'user': process.env.LT_USERNAME || "LT_USERNAME",
            'accessKey': process.env.LT_ACCESS_KEY || "LT_ACCESS_KEY",
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

## Getting Session Details
***

Each Puppeteer test generates its own logs on TestMu AI. To read the information for the current session, add the snippet below to your Puppeteer test script.

```js
let response = await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({ action: 'getTestDetails' })}`)
console.log("Test details: ", JSON.parse(response).data);
```

Upon executing the script, you will get the details for the particular test session as a JSON response as shown below.

```js
{
  data: {
    test_id: 'RWA9R-AC4V8-GJRET-YHBO2',
    build_id: 9415381,
    name: 'Puppeteer Sample Test',
    user_id: 1001150,
    username: 'newuser',
    test_type: 'puppeteer',
    platform: 'win10',
    browser: 'Chrome',
    browser_version: '107.0',
    status_ind: 'running',
    session_id: 'RWA9R-AC4V8-GJRET-YHBO2',
    build_name: 'Puppeteer Sample Build',
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

## Changing Desktop Resolutions
***

Puppeteer tests run at `1920x1080` by default on desktop browsers. Set the `resolution` capability to run at a different screen resolution.

| Capability | Description  | Expected Values | Example |
| -------- | -----| ------------ | -----------------------------|
| resolution   |  Specifying your desktop resolution before initiating the test |   String, **Default value**: 1920x1080 <br/> <br/> **Windows 11 & 10**: `1024x768, 1280x800, 1280x1024, 1366x768, 1440x900, 1680x1050, 1600x1200, 1920x1200, 1920x1080 and 2048x1536` <br/><br/> **macOS**: `1024x768, 1280x960, 1280x1024, 1600x1200 and 1920x1080`  | const caps = <br/>&lbrace;<br/>'resolution': '1024x768',<br/>&rbrace;; |

## Changing Browser Window Size
***

To change the browser window size during a Puppeteer test, call `page.setViewport()` as shown below.

```js
await page.setViewport({
            width: 1024,
            height: 768,
            deviceScaleFactor: 1,
          });
```

## Naming Your Project
***

Group related builds under a project by setting the `projectName` key to a name of your choice. Use the capability below.

| Key | Values | Description | Capability |
| -------- | -----| ------------ | --------------|
| projectName   | Example: My Test |   Represent the name of your project    |  `const capabilities = { 'LT:Options': {'projectName': 'My Test',}}` |

## Debugging Tests With Logs and Video
***

Enable network logs, console logs, and video recording to debug failed Puppeteer sessions. Set the capabilities below to capture each type of log.

| Key | Values | Description | Capability |
| -------- | -----| ------------ | --------------|
| network   | true/false |   Enable network logs    |  `const capabilities = { 'LT:Options': {'network': true,}}` |
| console  | true/false |   Enable browser console logs  | `const capabilities = { 'LT:Options': {'console': true,}}` |
| video   |  true/false |    Enable Video recording of the entire screen     | `const capabilities = { 'LT:Options': {'video': true,}}` |

## Mark Tests as Passed or Failed
***

A test that fails on your local machine can still pass on TestMu AI, so set the status explicitly to match your own assertions. By default, a test that finishes without error is marked **Completed**, and one that hits an error is marked **Failed**. Use the `setTestStatus` action to override this.

1. To mark test status as **passed**:

```js
await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status:'passed', remark: 'Title matched' } })}`)
```

2. To mark test status as **failed**:

```js
await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status:'failed', remark: 'Title not matched' } })}`)
```


The TestMu AI Capability Generator can auto-create the capabilities class for your Puppeteer scripts. The full set of capabilities you can configure is listed below.

| Key | Expected Values | Description | Capability |
| -------- | -----| ------- | ----------------- |
| browserName   |  Chrome, Edge |   Specify the browser to test on    |  `const capability = {"browserName": "Chrome"}`
| browserVersion  |  Chrome 83 & above, Edge 83 & above |   Specify the browser version to test on    |  `const capability = {"browserVersion": "113.0"}`
| platform  |  **Windows**: 11, 10, 8, 8.1, 7 <br/><br/> **macOS**: Monterey, Big Sur, Catiline, Mojave |    Specify the platform name    | `const capability = { "LT:Options": {"platform": "Windows 10",}}`
| build   |  Puppeteer Sample Build |   Represent the build number for your test | `const capability = { "LT:Options": {"build": "<build_name>",}}`
| name   |  Puppeteer Sample Test |    Represents the name of a test   | `const capability = { "LT:Options": {"name": "<test_name>",}}`
| resolution   |  Specifying your desktop resolution before initiating the test |   String, **Default value**: 1920x1080 <br/> <br/> **Windows 11 & 10**: `1024x768, 1280x800, 1280x1024, 1366x768, 1440x900, 1680x1050, 1600x1200, 1920x1200, 1920x1080 and 2048x1536` <br/><br/> **macOS**: `1024x768, 1280x960, 1280x1024, 1600x1200 and 1920x1080`  | `const capability = {"LT:Options": {"resolution": '1024x768'}}` |
| projectName   | Example: My Test |   Represent the name of your project    |  `const capability = { "LT:Options": {"projectName": "<project_name>",}}` |
| tags   |  ["tag1", "tag2", "tag3"] |  Group your Puppeteer tests |``const capability = {"LT:Options": { "tags": ["tag1", "tag2", "tag3"], }}`` |
| buildTags   |  ["build1", "build2", "build3"] |  Group your Puppeteer builds |`const capability = {"LT:Options": { "buildTags": ["build1", "build2", "build3"] }}` |
| network   | true/false |   Enable network logs    |  `const capability = { "LT:Options": {"network": true,}}` |
| console  | true/false |   Enable browser console logs  | `const capabilities = { "LT:Options": {"console": true,}}` |
| video   |  true/false |    Enable video recording of the entire screen     | `const capability = { "LT:Options": {"video": true,}}` |
| tunnel   |  true/false |    Enable tunnel for local testing     | `const capability = { "LT:Options": {"tunnel": true,}}` |
| tunnelName   |  true/false | Specify tunnel name     | `const capability = { "LT:Options": {"tunnelName": "<tunnel_name>",}}` |
| geoLocation   |  AR (Argentina) | Specify country code | `const capability = { "LT:Options": {"geoLocation": "AR",}}` |
| idleTimeout | number| Specifies the timeout of the commands in seconds. <br /><br /> <b>Default value:</b> 300 <br /><br /> <b>Max value:</b> 1800<br /><br /> If a value greater than 1800 is added, idleTimeout will be set to 1800.| `const capability = { "LT:Options": {"idleTimeout": "<number>",}}`|

## Related Puppeteer Guides
***

Continue with the guides below to run and scale your Puppeteer tests on TestMu AI.

- [Run your first Puppeteer test on TestMu AI](/support/docs/puppeteer-testing/) walks through the end-to-end setup.
- [Run Puppeteer tests with Mocha](/support/docs/puppeteer-testing-with-mocha/) covers the Mocha test runner integration.
- [Run Puppeteer tests with Jest](/support/docs/puppeteer-testing-with-jest/) covers the Jest test runner integration.

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
       Puppeteer - Test Execution Setup
      </span>
    </li>
  </ul>
</nav>
