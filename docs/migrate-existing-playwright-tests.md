---
id: migrate-playwright-tests
title: How to Migrate Existing Playwright Tests to TestMu AI
hide_title: true
sidebar_label: "Migrate Playwright Tests"
description: Migrate existing Playwright test scripts from your local grid to TestMu AI by connecting to the CDP endpoint and passing browser and OS capabilities.
toc_max_heading_level: 2
keywords:
  - migrate playwright tests to testmu ai
  - migrate playwright tests from local grid
  - run playwright tests on testmu ai
  - playwright cloud testing
  - playwright testmu ai capabilities

url: https://www.testmuai.com/support/docs/migrate-existing-playwright-tests/
site_name: TestMu AI
slug: migrate-existing-playwright-tests/
canonical: https://www.testmuai.com/support/docs/migrate-existing-playwright-tests/
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
          "name": "Migrate Existing Playwright Test Suites On TestMu AI",
          "item": `${BRAND_URL}/support/docs/migrate-existing-playwright-tests/`
        }]
      })
    }}
></script>

# How to Migrate Existing Playwright Tests to TestMu AI
***

If you already run Playwright tests on a local grid, you can move them to TestMu AI to execute the same scripts across real browsers and operating systems in the cloud. The migration takes only a few lines of change: you point Playwright at the TestMu AI CDP endpoint and pass a `capabilities` object that selects the browser and OS combination for each run.

## Sample Playwright Script Running on a Local Machine
***

Start from a working local test so you can see exactly which lines change during migration. The sample Playwright script below launches a browser on your local machine and runs the script.

```js
const { chromium } = require('playwright')
const { expect } = require('@playwright/test');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });

  const page = await browser.newPage()
  await page.goto('https://www.bing.com')
  const element = await page.$('[aria-label="Enter your search term"]')
  await element.click()
  await element.type('LambdaTest')
  await element.press('Enter')
  const title = await page.title()

  expect(title).toEqual('LambdaTest - Search')

  await browser.close()
})()
```

## Changes in Scripts to Run Playwright Tests on TestMu AI
***

The local script uses `playwright['chromium'].launch`, which opens a browser on your own machine. To run the same test on TestMu AI, replace that launch call with a connection to the TestMu AI CDP endpoint, as shown below.

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
    }
  }

  const browser = await chromium.connect({
    wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
  })

  // Test code ...

  await browser.close()
})()
```

In the code snippet above, the `chromium.connect` method connects to the CDP endpoint at TestMu AI. The `capabilities` variable contains the parameters that assign a specific browser and OS combination to your test on TestMu AI.

## Selecting Browser-OS Combinations for Test Runs
***

You can run your script on any supported browser and OS combination. Specify the `browserName`, `browserVersion`, and `platform` in the `capabilities` JSON before calling the CDP endpoint.

## Related Playwright Guides
***

Continue with the guides below to configure and expand your Playwright runs on TestMu AI.

- [Set up the Playwright test execution environment](/support/docs/playwright-test-execution-setup/) covers capabilities for browsers, resolution, and debugging.
- [Configure Playwright capabilities](/support/docs/capabilities-for-playwright/) documents the full capability reference.
- [Use Playwright agent skills](/support/docs/playwright-agent-skills/) extends your runs with agent-based testing.

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
        Migrate Your Playwright Tests
      </span>
    </li>
  </ul>
</nav>
