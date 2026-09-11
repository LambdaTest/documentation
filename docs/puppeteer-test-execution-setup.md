---
id: puppeteer-test-execution
title: Test Execution Setup For Running Puppeteer Tests
hide_title: true
sidebar_label: Test Execution Setup 
description: Learn how to configure the desired capability for selecting browsers and OS, organzing tests, changing desktop resolution, and more for your Puppeteer tests.
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
canonical: https://www.testmu.ai/support/docs/puppeteer-test-execution-setup/
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

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/puppeteer-test-execution-setup/"
    },
    "headline": "Test Execution Setup For Running Puppeteer Tests",
    "description": "Learn how to configure the desired capability for selecting browsers and OS, organzing tests, changing desktop resolution, and more for your Puppeteer tests.",
    "url": "https://www.testmuai.com/support/docs/puppeteer-test-execution-setup/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Web Automation",
    "keywords": [
      "puppeteer testing",
      "automation testing with puppeteer",
      "how to use puppeteer for testing"
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
        "name": "Organizing Tests",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "# add test code after initializing your browser\n'use strict';\nconst { strict } = require('once');\nconst puppeteer = require('puppeteer');\nconst expect = require('chai').expect;\n\n(async () => {    \n    const capabilities = {\n        'browserName': 'Chrome',\n        'browserVersion': 'latest',\n        'LT:Options': {\n            'platform': 'Windows 10',\n            'build': 'puppeteer-build-1',\n            'name': 'My first Puppeteer test',\n            'resolution':'1366x768',\n            'user': process.env.LT_USERNAME || \"LT_USERNAME\",\n            'accessKey': process.env.LT_ACCESS_KEY || \"LT_ACCESS_KEY\",\n            'network': true\n        }\n   };\n    \n    try {\n        const browser = await puppeteer.connect({\n            browserWSEndpoint:\n                `wss://cdp.lambdatest.com/puppeteer?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`,\n        });\n\n        const page = await browser.newPage();\n        await page.setViewport({\n            width: 1024,\n            height: 768,\n            deviceScaleFactor: 1,\n          });\n        console.log(\"Navigating to LambdaTest\");\n        await page.goto('https://www.lambdatest.com/');\n        console.log(\"Navigating to Pricing\");\n        await page.goto('https://www.lambdatest.com/pricing');\n        console.log(\"Navigating to Automation\");\n        await page.goto('https://www.lambdatest.com/automation-testing');\n        console.log(\"Closing browser\");\n        await browser.close();\n\n    } catch (e) {\n        console.log(\"Error - \", e);\n    }\n})();"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Getting Session Details",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "let response = await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({ action: 'getTestDetails' })}`)\nconsole.log(\"Test details: \", JSON.parse(response).data);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Getting Session Details",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "{\n  data: {\n    test_id: 'RWA9R-AC4V8-GJRET-YHBO2',\n    build_id: 9415381,\n    name: 'Puppeteer Sample Test',\n    user_id: 1001150,\n    username: 'newuser',\n    test_type: 'puppeteer',\n    platform: 'win10',\n    browser: 'Chrome',\n    browser_version: '107.0',\n    status_ind: 'running',\n    session_id: 'RWA9R-AC4V8-GJRET-YHBO2',\n    build_name: 'Puppeteer Sample Build',\n    create_timestamp: '2022-12-07 10:53:16',\n    start_timestamp: '2022-12-07 10:53:16',\n    remark: 'running',\n    console_logs_url: 'https://api.lambdatest.com/automation/api/v1/sessions/RWA9R-AC4V8-GJRET-YHBO2/log/console',\n    network_logs_url: 'https://api.lambdatest.com/automation/api/v1/sessions/RWA9R-AC4V8-GJRET-YHBO2/log/network',\n    command_logs_url: 'https://api.lambdatest.com/automation/api/v1/sessions/RWA9R-AC4V8-GJRET-YHBO2/log/command',\n    video_url: 'https://automation.lambdatest.com/public/video?testID=RWA9R-AC4V8-GJRET-YHBO2&auth=50471585dd55293d204fe87f63400f5f',\n    screenshot_url: 'https://video-bundler.lambdatest.com/RWA9R-AC4V8-GJRET-YHBO2/screenshots.zip?orgId=588659&createTimestamp=1670410396&testCreateTimestamp=2022-12-07%2010:53:16'\n  },\n  message: 'Retrieve session was successful',\n  status: 'success'\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Changing Browser Window Size",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "\nawait page.setViewport({\n            width: 1024,\n            height: 768,\n            deviceScaleFactor: 1,\n          });"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Mark Tests As Passed Or Failed",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status:'passed', remark: 'Title matched' } })}`)"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Mark Tests As Passed Or Failed",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status:'failed', remark: 'Title not matched' } })}`)"
      }
    ],
    "dateModified": "2026-09-09T19:13:32+05:30"
  }) }}
/>

# Puppeteer - Test Execution Setup
* * *

Whenever you run a Puppeteer test, you must specify the operating system and the browser you wish to use. The <BrandName /> Desired Capabilities Generator allows you to automatically create the capabilities class needed to run your Puppeteer automation scripts on <BrandName />. 

In this guide, learn how to configure the desired capability for selecting browsers and OS, organzing tests, changing desktop resolution, and more for your Puppeteer tests.


## Choosing Browser And OS
***

To perform Puppeteer testing on <BrandName />, you need to define the `browserName`, `browserVersion`, and `platform` capabilities in your automation scripts.

| Key | Expected Values | Description | Example |
| -------- | -----| ------- | ----------------- |
| browserName   |  Chrome, Edge |   Specify the browser to test on    |  `const capability = {"browserName": "Chrome"}`
| browserVersion  |  Chrome 83 & above, Edge 83 & above |   Specify the browser version to test on    |  `const capability = {"browserVersion": "113.0"}`
| platform  |  **Windows**: 11, 10, 8, 8.1, 7 <br/><br/> **macOS**: Monterey, Big Sur, Catiline, Mojave |    Specify the platform name    | `const capability = { "LT:Options": {"platform": "Windows 10",}}`

## Organizing Tests
***

You can name your test cases and categorize your builds by build, and name for easier analysis. You will need to use the name, and build capabilities to organize Puppeteer  automated tests.

| Key | Values | Description | Capability|
| -------- | -----| ------------ | ---------|
| build   |  Puppeteer Sample Build |   Represent the build number for your test | `const capability = { "LT:Options": {"build": "<build_name>",}}`
| name   |  Puppeteer Sample Test |    Represents the name of a test   | `const capability = { "LT:Options": {"name": "<test_name>",}}`
| projectName   | Example: My Test |   Represent the name of your project    |  `const capability = { "LT:Options": {"projectName": "<project_name>",}}` |
| tags   |  ["tag1", "tag2", "tag3"] |  Group your Puppeteer tests |``const capability = {"LT:Options": { "tags": ["tag1", "tag2", "tag3"], }}`` |
| buildTags   |  ["build1", "build2", "build3"] |  Group your Puppeteer builds |`const capability = {"LT:Options": { "buildTags": ["build1", "build2", "build3"] }}` |

Shown below is the script that configure the `build` and `name` capabilities. 

```js
# add test code after initializing your browser
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

Each Puppeteer test generates a different log on <BrandName />. To get the information relevant to your test session, use the snippet provided below in your Puppeteer test scripts. 

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

Puppeteer tests run with a `1920x1080` resolution by default for desktop browsers. With our `resolution` capability, you can set a different screen resolution for your tests.

| Capability | Description  | Expected Values | Example |
| -------- | -----| ------------ | -----------------------------|
| resolution   |  Specifying your desktop resolution before initiating the test |   String, **Default value**: 1920x1080 <br/> <br/> **Windows 11 & 10**: `1024x768, 1280x800, 1280x1024, 1366x768, 1440x900, 1680x1050, 1600x1200, 1920x1200, 1920x1080 and 2048x1536` <br/><br/> **macOS**: `1024x768, 1280x960, 1280x1024, 1600x1200 and 1920x1080`  | const caps = <br/>&lbrace;<br/>'resolution': '1024x768',<br/>&rbrace;; |

## Changing Browser Window Size
***

If you wish to modify the browser window size during your Puppeteer test, you can do it as shown in the code below.

```js

await page.setViewport({
            width: 1024,
            height: 768,
            deviceScaleFactor: 1,
          });
```

## Naming your Project
***

You can give your project a name of your choice by using the `projectName` key. 

| Key | Values | Description | Desired Capability |
| -------- | -----| ------------ | --------------|
| projectName   | Example: My Test |   Represent the name of your project    |  `const capabilities = { 'LT:Options': {'projectName': 'My Test',}}` |


## Debugging Tests
***

By specifying the capabilities for the debugging tools, you can debug and fix your failed Puppeteer test sessions using network logs, console logs, and video logs.


| Key | Values | Description | Desired Capability |
| -------- | -----| ------------ | --------------|
| network   | true/false |   Enable network logs    |  `const capabilities = { 'LT:Options': {'network': true,}}` |
| console  | true/false |   Enable browser console logs  | `const capabilities = { 'LT:Options': {'console': true,}}` |
| video   |  true/false |    Enable Video recording of the entire screen     | `const capabilities = { 'LT:Options': {'video': true,}}` |

## Mark Tests As Passed Or Failed
***

While running Puppeteer tests on the <BrandName /> platform, you may come across a scenario in which a test that failed in your local instance turns up to be successful on <BrandName />. For verifying expected behavior, it is critical to identify automated tests as **Passed** or **Failed** based on your testing requirements.

By default, the Status of each test that runs successfully is marked as **Completed**, and if there are any issues, the Status is marked as **Failed**.

Shown below is syntax how to mark Puppeteer tests as **Passed** or **Failed**.

1. To mark test status as **passed**.

```
await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status:'passed', remark: 'Title matched' } })}`)
```

2. To mark test status as **failed**.

```
await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status:'failed', remark: 'Title not matched' } })}`)
```


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
