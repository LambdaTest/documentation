---
id: migrate-playwright-tests
title: Migrate Existing Playwright Test Suites On TestMu AI
hide_title: true
sidebar_label: Migrate Playwright Tests
description: Learn how to run migrate existing Playwright test scripts or suitesfrom your local grid on the TestMu AI platform.
keywords:
  - playwright testing
  - playwright e2e testing 
  - playwright mobile testing
  - playwright testing tool
  - playwright testing on testmu ai
  - playwright testing testmu ai
  - migrate playwright tests on testmu ai

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

# Migrate Your Existing Playwright Tests
* * *

<BrandName /> offers an online automation platform for test automation. Therefore you can easily migrate Playwright tests from your local grid to the <BrandName /> platform. 

In this documentation, we look at how to migrate your existing Playwright test scripts (or test suites) from your local grid to <BrandName />. This lets you automate Playwright scripts across 40+ browsers and operating systems on <BrandName /> cloud platform.

## Sample Playwright Script Running On A Local Machine
***

With just a few lines of code tweaks in your test script, you can migrate your Playwright tests running on a local grid to <BrandName />. A sample Playwright script below launches a browser on your local machine and runs the script.

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

## Changes In Scripts To Run Playwright Tests On <BrandName />
***

The above script shows that `playwright['chromium'].launch` runs in a Chromium browser window. To run the test scripts on <BrandName /> platform, you will need to add the following instead of `playwright['chromium'].launch`.

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

In the above code snippet, you need to connect to the CDP endpoint at <BrandName /> using `chromium.connect` method. The `capabilities` variable contains additional parameters that enable a specific browser and OS combination to be assigned to your test on <BrandName />.

## Selecting Browser-OS Combinations For Test Runs
***

To run your script, you can choose any of the browsers and OS combinations. Just specify the browserName, browserVersion, platform in the capabilities JSON before calling the CDP endpoint.



## Using the Playwright Agent Skill with TestMu AI
***

The [playwright-skill](https://github.com/LambdaTest/agent-skills/tree/main/playwright-skill) is a part of [TestMu AI Skills](https://github.com/LambdaTest/agent-skills/) that guide AI coding assistants in generating production-ready test automation.

The playwright-skill package includes:

```
playwright-skill/
├── SKILL.md
└── reference/
    ├── playbook.md
    └── advanced-patterns.md
```

It provides structured guidance for:

* Project structure and setup
* Dependency configuration
* Local execution
* TestMu AI cloud execution
* Debugging patterns
* CI/CD integration


### Installing Playwright Agent Skill
***

Install a Playwright Agent Skill using the command below:

```
# Clone the repo and copy the skill you need
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/playwright-skill .claude/skills/

# Or for Cursor / Copilot
cp -r agent-skills/playwright-skill .cursor/skills/
```

**Note**: If you prefer installing all available framework skills instead of only playwright-skill, clone the repository directly into your tool's skills directory (for example, .claude/skills/, .cursor/skills/, .gemini/skills/, or .agent/skills/).

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
