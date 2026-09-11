---
id: playwright-testing-guide
title: How To Run Playwright Tests On TestMu AI Platform
hide_title: true
sidebar_label: Run Your First Test
description: Here you can learn how to run Playwright tests on the TestMu AI test automation platform on real browsers and operating systems.
keywords:
  - playwright testing
  - playwright e2e testing 
  - playwright mobile testing
  - playwright testing tool
  - playwright testing on testmu ai
  - playwright testing testmu ai

url: https://www.testmuai.com/support/docs/playwright-testing/
site_name: TestMu AI
slug: playwright-testing/
canonical: https://www.testmu.ai/support/docs/playwright-testing/
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

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/playwright-testing/"
    },
    "headline": "How To Run Playwright Tests On TestMu AI Platform",
    "description": "Here you can learn how to run Playwright tests on the TestMu AI test automation platform on real browsers and operating systems.",
    "url": "https://www.testmuai.com/support/docs/playwright-testing/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Web Automation",
    "keywords": [
      "playwright testing",
      "playwright e2e testing",
      "playwright mobile testing"
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
        "name": "Prerequisites",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "npm install"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Prerequisites",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Prerequisites",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "set LT_USERNAME=\"YOUR_LAMBDATEST_USERNAME\"\nset LT_ACCESS_KEY=\"YOUR_LAMBDATEST_ACCESS_KEY\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 4",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "export LT_USERNAME=\"YOUR_LAMBDATEST_USERNAME\"\nexport LT_ACCESS_KEY=\"YOUR_LAMBDATEST_ACCESS_KEY\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Run Your First Test",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "(async () => {\n  const capabilities = {\n    'browserName': 'Chrome', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`\n    'browserVersion': 'latest',\n    'LT:Options': {\n      'platform': 'Windows 10',\n      'build': 'Playwright Sample Build',\n      'name': 'Playwright Sample Test',\n      'user': process.env.LT_USERNAME,\n      'accessKey': process.env.LT_ACCESS_KEY,\n      'network': true,\n      'video': true,\n      'console': true\n    }\n  }\n\n  const browser = await chromium.connect({\n    wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`\n  })"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 6",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "const { chromium } = require('playwright')\nconst { expect } = require('@playwright/test');\n\n(async () => {\n  const capabilities = {\n    'browserName': 'Chrome', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`\n    'browserVersion': 'latest',\n    'LT:Options': {\n      'platform': 'Windows 10',\n      'build': 'Playwright Sample Build',\n      'name': 'Playwright Sample Test',\n      'user': process.env.LT_USERNAME,\n      'accessKey': process.env.LT_ACCESS_KEY,\n      'network': true,\n      'video': true,\n      'console': true\n    }\n  }\n\n  const browser = await chromium.connect({\n    wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`\n  })\n\n  const page = await browser.newPage()\n\n  await page.goto('https://duckduckgo.com')\n\n  const element = await page.$('[name=\"q\"]')\n  await element.click()\n  await element.type('TestMu AI')\n  await element.press('Enter')\n  const title = await page.title()\n\n  try {\n    expect(title).toEqual('TestMu AI at DuckDuckGo')\n    // Mark the test as completed or failed\n    await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'passed', remark: 'Title matched' } })}`)\n  } catch {\n    await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'failed', remark: 'Title not matched' } })}`)\n  }\n\n  await browser.close()\n})()\n"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 7",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "node playwright-single.js"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 8",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\nRun the parallel test:\n\n```bash\nnode playwright-parallel.js"
      }
    ],
    "dateModified": "2026-09-10T15:46:57+05:30"
  }) }}
/>

# Getting Started With Playwright Testing
* * *
Playwright is a Node.js library that uses a single API to automate Chromium, Firefox, and WebKit. It is designed to enable powerful, reliable, and efficient automated browser testing. Playwright can also automate Microsoft Edge since it is built on the open-source Chromium web framework.

<BrandName /> allows you to run Playwright tests across real browsers and operating system combinations. This guide will cover the basics of getting started with Playwright testing on the <BrandName /> platform.


*You can run tests using Playwright versions **v1.15.0** to the latest.*

## Prerequisites
***

>Note: All the code samples in this documentation can be found in the <BrandName />'s Repository on GitHub. You can either download or clone the repository to quickly run your tests.
<a href="https://github.com/LambdaTest/playwright-sample/tree/main/playwright-test-js" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image"  className="doc_img"/> View on GitHub</a>

1. Clone the <BrandName />-Playwright repository on your system.

2. Install the npm dependencies.

<VerifiedTag value="Verified" />

```
npm install
```

3. Add browserWSEndpoint (browser end point URL) in your test script.

```js
wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
```

4. In order to run your Playwright tests, you will need to set your <BrandName /> username and access key in the environment variables. Click the **Access Key** button at the top-right of the Automation Dashboard to access it.


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

1. Add the below code snippet in your test scripts.

```js
(async () => {
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
  ```

Once you are done with the above-mentioned steps, you can initiate your first Playwright test on <BrandName />. 

The below test script searches the term '<BrandName />' on DuckDuckGo.

```js
const { chromium } = require('playwright')
const { expect } = require('@playwright/test');

(async () => {
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

  const page = await browser.newPage()

  await page.goto('https://duckduckgo.com')

  const element = await page.$('[name="q"]')
  await element.click()
  await element.type('TestMu AI')
  await element.press('Enter')
  const title = await page.title()

  try {
    expect(title).toEqual('TestMu AI at DuckDuckGo')
    // Mark the test as completed or failed
    await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'passed', remark: 'Title matched' } })}`)
  } catch {
    await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'failed', remark: 'Title not matched' } })}`)
  }

  await browser.close()
})()

```

2. Pass the below command to run the test.

<VerifiedTag value="Verified" />

```
node playwright-single.js
```

## Run Tests in Parallel
---

Once your first test runs, you can execute the same test across multiple browser and OS configurations at once. Define a `capabilities` array (one entry per configuration) and run each through a shared function.

The example below runs the DuckDuckGo search test on three configurations: Chrome on Windows 10, Microsoft Edge on Windows 11, and Chrome on macOS Sonoma.

```js title="playwright-parallel.js"
const { chromium } = require('playwright')
const { expect } = require('@playwright/test')

const parallelTests = async (capability) => {
  console.log('Initialising test:: ', capability['LT:Options']['name'])

  const browser = await chromium.connect({
    wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capability))}`
  })

  const page = await browser.newPage()

  await page.goto('https://duckduckgo.com')

  const element = await page.$('[name="q"]')
  await element.click()
  await element.type('TestMu AI')
  await element.press('Enter')
  const title = await page.title()

  try {
    expect(title).toEqual('TestMu AI at DuckDuckGo')
    // Mark the test as completed or failed
    await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'passed', remark: 'Title matched' } })}`)
  } catch {
    await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'failed', remark: 'Title not matched' } })}`)
  }

  await browser.close()
}

// Capabilities array with the respective configuration for the parallel tests
const capabilities = [
  {
    'browserName': 'Chrome', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
    'browserVersion': 'latest',
    'LT:Options': {
      'platform': 'Windows 10',
      'build': 'Playwright Sample Build',
      'name': 'Playwright Sample Test on Windows 10 - Chrome',
      'user': process.env.LT_USERNAME,
      'accessKey': process.env.LT_ACCESS_KEY,
      'network': true,
      'video': true,
      'console': true
    }
  },
  {
    'browserName': 'MicrosoftEdge',
    'browserVersion': 'latest',
    'LT:Options': {
      'platform': 'Windows 11',
      'build': 'Playwright Sample Build',
      'name': 'Playwright Sample Test on Windows 11 - MicrosoftEdge',
      'user': process.env.LT_USERNAME,
      'accessKey': process.env.LT_ACCESS_KEY,
      'network': true,
      'video': true,
      'console': true
    }
  },
  {
    'browserName': 'Chrome',
    'browserVersion': 'latest',
    'LT:Options': {
      'platform': 'MacOS Sonoma',
      'build': 'Playwright Sample Build',
      'name': 'Playwright Sample Test on MacOS Sonoma - Chrome',
      'user': process.env.LT_USERNAME,
      'accessKey': process.env.LT_ACCESS_KEY,
      'network': true,
      'video': true,
      'console': true
    }
  }]

capabilities.forEach(async (capability) => {
  await parallelTests(capability)
})
```

Run the parallel test:

<VerifiedTag value="Verified" />

```bash
node playwright-parallel.js
```

## View your Playwright test results
***

The <BrandName /> Automation Dashboard is where you can see the results of your Playwright tests after running them on the <BrandName /> platform. 

You can view the details of Playwright test session that you just executed. 

For example, the below screenshot shows a test execution details of Playwright test like Test Name, Test ID, selected configurations, test logs, basic info, input config, and test session video. 


<img loading="lazy" src={require('../assets/images/playwright-testing/playwright-test-execution-cloud.png').default} alt="Playwright test execution results on cloud" width="1444" height="703"  className="doc_img"/>


## Related Playwright guides

- [Playwright WebView Testing](/support/docs/playwright-webview-test/) - automate WebView components using Playwright on TestMu AI.
- [Migrate Existing Playwright Tests](/support/docs/migrate-existing-playwright-tests/) - move your existing Playwright suite to the TestMu AI cloud.




