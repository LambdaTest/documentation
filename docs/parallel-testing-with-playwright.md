---
id: parallel-playwright-test
title: How To Run Playwright Tests In Parallel
hide_title: true
sidebar_label: Parallel Testing
description: Here you can learn how to run parallel tests with Playwright across multiple browser versions on the TestMu AI automation platform.
keywords:
 -  playwright testing
  - playwright e2e testing 
  - playwright mobile testing
  - playwright testing tool
  - playwright testing on testmu ai
  - playwright testing testmu ai
  - playwright parallel tests
  - parallel testing with playwright
  
url: https://www.testmuai.com/support/docs/parallel-testing-with-playwright/
site_name: TestMu AI
slug: parallel-testing-with-playwright/
canonical: https://www.testmuai.com/support/docs/parallel-testing-with-playwright/
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
          "name": "Parallel Testing With Playwright",
          "item": `${BRAND_URL}/support/docs/parallel-testing-with-playwright/`
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
      "@id": "https://www.testmuai.com/support/docs/parallel-testing-with-playwright/"
    },
    "headline": "How To Run Playwright Tests In Parallel",
    "description": "Here you can learn how to run parallel tests with Playwright across multiple browser versions on the TestMu AI automation platform.",
    "url": "https://www.testmuai.com/support/docs/parallel-testing-with-playwright/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
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
        "name": "Parallel Testing With Playwright",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "codeRepository": "https://github.com/LambdaTest/playwright-sample",
        "text": "git clone https://github.com/LambdaTest/playwright-sample.git\ncd playwright-sample-main"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Parallel Testing With Playwright",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "const { chromium } = require('playwright')\nconst { expect } = require('@playwright/test')\n\nconst parallelTests = async (capability) => {\n  console.log('Initialising test:: ', capability['LT:Options']['name'])\n\n  const browser = await chromium.connect({\n    wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capability))}`\n  })\n\n  const page = await browser.newPage()\n\n  await page.goto('https://www.bing.com')\n\n  const element = await page.$('[aria-label=\"Enter your search term\"]')\n  await element.click()\n  await element.type('LambdaTest')\n  await element.press('Enter')\n  const title = await page.title()\n\n  try {\n    expect(title).toEqual('LambdaTest - Search')\n    // Mark the test as completed or failed\n    await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'passed', remark: 'Title matched' } })}`)\n  } catch {\n    await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'failed', remark: 'Title not matched' } })}`)\n  }\n\n  await browser.close()\n}\n\n// Capabilities array for with the respective configuration for the parallel tests\nconst capabilities = [\n  {\n    'browserName': 'Chrome', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`\n    'browserVersion': 'latest',\n    'LT:Options': {\n      'platform': 'Windows 10',\n      'build': 'Playwright Sample Build',\n      'name': 'Playwright Sample Test on Windows 10 - Chrome',\n      'user': process.env.LT_USERNAME,\n      'accessKey': process.env.LT_ACCESS_KEY,\n      'network': true,\n      'video': true,\n      'console': true\n    }\n  },\n  {\n    'browserName': 'MicrosoftEdge',\n    'browserVersion': 'latest',\n    'LT:Options': {\n      'platform': 'Windows 8',\n      'build': 'Playwright Sample Build',\n      'name': 'Playwright Sample Test on Windows 8 - MicrosoftEdge',\n      'user': process.env.LT_USERNAME,\n      'accessKey': process.env.LT_ACCESS_KEY,\n      'network': true,\n      'video': true,\n      'console': true\n    }\n  },\n  {\n    'browserName': 'Chrome',\n    'browserVersion': 'latest',\n    'LT:Options': {\n      'platform': 'MacOS Big sur',\n      'build': 'Playwright Sample Build',\n      'name': 'Playwright Sample Test on MacOS Big sur - Chrome',\n      'user': process.env.LT_USERNAME,\n      'accessKey': process.env.LT_ACCESS_KEY,\n      'network': true,\n      'video': true,\n      'console': true\n    }\n  }]\n\ncapabilities.forEach(async (capability) => {\n  await parallelTests(capability)\n})\n"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 3",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "node playwright-parallel.js"
      }
    ],
    "dateModified": "2026-09-09T19:13:32+05:30"
  }) }}
/>

# Parallel Testing With Playwright
* * *

<BrandName /> allows you to perform parallel testing with Playwright across real browsers and OS to automate your several test cases simultaneously. You can run one test case across various browsers, or you can run multiple test case scenarios in the same browser with different browser versions.


Shown below are the steps on running parallel tests with Playwright on the <BrandName /> platform. 

1. Clone the [<BrandName />-Playwright GitHub repository](https://github.com/LambdaTest/playwright-sample) and switch to the cloned directory.

```js
git clone https://github.com/LambdaTest/playwright-sample.git
cd playwright-sample-main
```

2. Ensure you have npm dependencies installed. 

3. Configure your <BrandName /> authentication credentials.

Once you are done with the above-mentioned steps, you can run your parallel tests with Playwright on <BrandName />. 

The below test script searches the term '<BrandName />' on Bing.

```js
const { chromium } = require('playwright')
const { expect } = require('@playwright/test')

const parallelTests = async (capability) => {
  console.log('Initialising test:: ', capability['LT:Options']['name'])

  const browser = await chromium.connect({
    wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capability))}`
  })

  const page = await browser.newPage()

  await page.goto('https://www.bing.com')

  const element = await page.$('[aria-label="Enter your search term"]')
  await element.click()
  await element.type('LambdaTest')
  await element.press('Enter')
  const title = await page.title()

  try {
    expect(title).toEqual('LambdaTest - Search')
    // Mark the test as completed or failed
    await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'passed', remark: 'Title matched' } })}`)
  } catch {
    await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'failed', remark: 'Title not matched' } })}`)
  }

  await browser.close()
}

// Capabilities array for with the respective configuration for the parallel tests
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
      'platform': 'Windows 8',
      'build': 'Playwright Sample Build',
      'name': 'Playwright Sample Test on Windows 8 - MicrosoftEdge',
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
      'platform': 'MacOS Big sur',
      'build': 'Playwright Sample Build',
      'name': 'Playwright Sample Test on MacOS Big sur - Chrome',
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

4. Pass the below command to run the test.

```
node playwright-parallel.js
```

## View your Playwright test results
***

The <BrandName /> Automation Dashboard is where you can see the results of your Playwright tests after running them on the <BrandName /> platform. 

The below screenshot of <BrandName /> Automation Dashboard shows the Playwright build on the left and the build sessions associated with the selected build on the right.

<img loading="lazy" src={require('../assets/images/playwright-testing/dashboard.webp').default} alt="Image" width="1444" height="703"  className="doc_img"/>

On clicking the session name of the respective test, you can view the details of Playwright test session that you just executed. For example, the below screenshot shows a test execution details of Playwright test like Test Name, Test ID, selected configurations, test logs, basic info, input config, and test session video. 

<img loading="lazy" src={require('../assets/images/playwright-testing/pw-build.webp').default} alt="Image" width="1347" height="616"  className="doc_img"/>


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
        Parallel Testing With Playwright
      </span>
    </li>
  </ul>
</nav>
