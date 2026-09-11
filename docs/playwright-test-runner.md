---
id: playwright-playwrighttest
title: Running Playwright Tests With Playwright Test Runner
hide_title: true
sidebar_label: Integrate With Playwright Test Runner
description: Learn how to perform Playwright testing using Playwright test runner across multiple browser versions on the TestMu AI platform.
keywords:
 -  playwright testing with Playwright test runner
  - playwright e2e testing with Playwright test runner
  - playwright mobile testing with Playwright test runner
  - playwright testing on testmu ai Playwright test runner
  - playwright testing testmu ai 
  - playwright parallel tests
  - parallel testing with playwright
  
url: https://www.testmuai.com/support/docs/playwright-test-runner/
site_name: TestMu AI
slug: playwright-test-runner/
canonical: https://www.testmuai.com/support/docs/playwright-test-runner/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import VerifiedTag from '@site/src/component/verifiedTag';

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
          "name": "Playwright Testing With Playwright Test",
          "item": `${BRAND_URL}/support/docs/playwright-test-runner/`
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
      "@id": "https://www.testmuai.com/support/docs/playwright-test-runner/"
    },
    "headline": "Running Playwright Tests With Playwright Test Runner",
    "description": "Learn how to perform Playwright testing using Playwright test runner across multiple browser versions on the TestMu AI platform.",
    "url": "https://www.testmuai.com/support/docs/playwright-test-runner/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Web Automation",
    "keywords": [
      "playwright testing with Playwright test runner",
      "playwright e2e testing with Playwright test runner",
      "playwright mobile testing with Playwright test runner"
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
        "text": "set LT_USERNAME=\"YOUR_LAMBDATEST_USERNAME\"\nset LT_ACCESS_KEY=\"YOUR_LAMBDATEST_ACCESS_KEY\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Prerequisites",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "export LT_USERNAME=\"YOUR_LAMBDATEST_USERNAME\"\nexport LT_ACCESS_KEY=\"YOUR_LAMBDATEST_ACCESS_KEY\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Running Playwright Tests With Playwright Test Runner",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "const { devices } = require('@playwright/test')\n// Playwright config to run tests on LambdaTest platform and local\nconst config = {\ntestDir: 'tests',\ntestMatch: '**/*.spec.js',\ntimeout: 60000,\nprojects: [\n// -- LambdaTest Config --\n  // name in the format: browserName:browserVersion:platform@lambdatest\n  // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`\n  // Use additional configuration options provided by Playwright if required: https://playwright.dev/docs/api/class-testconfig\n    {\n      name: 'chrome:latest:MacOS Catalina@lambdatest',\n      use: {\n        viewport: { width: 1920, height: 1080 }\n      }\n    },\n    {\n      name: 'MicrosoftEdge:90:Windows 10@lambdatest',\n      use: {\n        ...devices['iPhone 12 Pro Max']\n      }\n    },\n  ]\n}\n\nmodule.exports = config"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 5",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "npm run test"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Testing With Playwright Test When Migrating To TestMu AI",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "const { devices } = require('@playwright/test')\n\n// Playwright config to run tests on LambdaTest platform and local\nconst config = {\n  testDir: 'tests',\n  testMatch: '**/*.spec.js',\n  timeout: 60000,\n  use: {\n    viewport: null\n  },\n  projects: [\n    // -- LambdaTest Config --\n    // name in the format: browserName:browserVersion:platform@lambdatest\n    // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`\n    // Use additional configuration options provided by Playwright if required: https://playwright.dev/docs/api/class-testconfig\n    {\n      name: 'chrome:latest:MacOS Catalina@lambdatest',\n      use: {\n        viewport: { width: 1920, height: 1080 }\n      }\n    },\n    {\n      name: 'chrome:latest:Windows 10@lambdatest',\n      use: {\n        viewport: { width: 1280, height: 720 }\n      }\n    },\n    {\n      name: 'MicrosoftEdge:90:Windows 10@lambdatest',\n      use: {\n        ...devices['iPhone 12 Pro Max']\n      }\n    },\n    {\n      name: 'pw-firefox:latest:Windows 10@lambdatest',\n      use: {\n        viewport: { width: 1280, height: 720 }\n      }\n    },\n    {\n      name: 'pw-webkit:latest:Windows 10@lambdatest',\n      use: {\n        viewport: { width: 1920, height: 1080 }\n      }\n    }\n\n  ]\n}\n"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 7",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "const { test } = require('../lambdatest-setup')\nconst { expect } = require('@playwright/test')\n\ntest.describe('Browse LambdaTest in different search engines', () => {\n  test('Search LambdaTest on Bing', async ({ page }) => {\n    await page.goto('https://www.bing.com')\n    const element = await page.$('[aria-label=\"Enter your search term\"]')\n    await element.click()\n    await element.type('LambdaTest')\n    await element.press('Enter')\n    const title = await page.title()\n\n    console.log('Page title:: ', title)\n    // Use the expect API for assertions provided by playwright\n    expect(title).toEqual(expect.stringContaining('LambdaTest'))\n  })\n})"
      }
    ],
    "dateModified": "2026-09-09T19:13:32+05:30"
  }) }}
/>

# Playwright Testing With Playwright Test Runner
* * *

Playwright Test Runner is used for end-to-end automated testing of websites and web apps across all major browsers. You can run parallel tests, get context isolation out of the box, capture videos, screenshots, and other test artifacts on test failure, and use fixtures with Playwright test runner.

<BrandName /> enables you to run Playwright tests with the Playwright test runner across real browser and operating system combinations. This guide will outline the fundamentals of getting started with Playwright testing on the <BrandName /> platform using the Playwright test runner.

## Prerequisites
***

>Note: All the code samples in this documentation can be found in the <BrandName />'s Repository on GitHub. You can either download or clone the repository to quickly run your tests.
<a href="https://github.com/LambdaTest/playwright-sample/" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image"  className="doc_img"/> View on GitHub</a>

1. Clone the <BrandName />-Playwright repository on your system.

2. Install the npm dependencies.

```
npm install
```

3. In order to run your Playwright tests with Playwright test runner, you will need to set your <BrandName /> username and access key in the environment variables. Click the **Access Key** button at the top-right of the Automation Dashboard to access it.

<img loading="lazy" src={require('../assets/images/playwright-testing/key.webp').default} alt="Image" width="1444" height="703"  className="doc_img"/>


**Windows**

<VerifiedTag value="Verified" />

```js
set LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
set LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```

**macOS/Linux**

<VerifiedTag value="Verified" />

```js
export LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
export LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```

## Running Playwright Tests With Playwright Test Runner
*** 

In your `playwright.config.js` file, add the browserName, browserVersion, and platform in the below projects configuration.

<VerifiedTag value="Verified" />

```js
const { devices } = require('@playwright/test')
// Playwright config to run tests on LambdaTest platform and local
const config = {
testDir: 'tests',
testMatch: '**/*.spec.js',
timeout: 60000,
projects: [
// -- LambdaTest Config --
  // name in the format: browserName:browserVersion:platform@lambdatest
  // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
  // Use additional configuration options provided by Playwright if required: https://playwright.dev/docs/api/class-testconfig
    {
      name: 'chrome:latest:MacOS Catalina@lambdatest',
      use: {
        viewport: { width: 1920, height: 1080 }
      }
    },
    {
      name: 'MicrosoftEdge:90:Windows 10@lambdatest',
      use: {
        ...devices['iPhone 12 Pro Max']
      }
    },
  ]
}

module.exports = config
```
Pass the below command to run the test.

```
npm run test
```

Visit the <BrandName /> Automation dashboard to view the results of your executed test with Playwright test runner.

## Testing With Playwright Test When Migrating To <BrandName />
***

If you are migrating test suites to <BrandName />, then follow the below steps.


1. Add the `lambdatest-setup.js` to your project route.

2. Include the `playwright.config.js` in your project in the below format.

<VerifiedTag value="Verified" />

```js
const { devices } = require('@playwright/test')

// Playwright config to run tests on LambdaTest platform and local
const config = {
  testDir: 'tests',
  testMatch: '**/*.spec.js',
  timeout: 60000,
  use: {
    viewport: null
  },
  projects: [
    // -- LambdaTest Config --
    // name in the format: browserName:browserVersion:platform@lambdatest
    // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
    // Use additional configuration options provided by Playwright if required: https://playwright.dev/docs/api/class-testconfig
    {
      name: 'chrome:latest:MacOS Catalina@lambdatest',
      use: {
        viewport: { width: 1920, height: 1080 }
      }
    },
    {
      name: 'chrome:latest:Windows 10@lambdatest',
      use: {
        viewport: { width: 1280, height: 720 }
      }
    },
    {
      name: 'MicrosoftEdge:90:Windows 10@lambdatest',
      use: {
        ...devices['iPhone 12 Pro Max']
      }
    },
    {
      name: 'pw-firefox:latest:Windows 10@lambdatest',
      use: {
        viewport: { width: 1280, height: 720 }
      }
    },
    {
      name: 'pw-webkit:latest:Windows 10@lambdatest',
      use: {
        viewport: { width: 1920, height: 1080 }
      }
    }

  ]
}

```

3. Add your test script path in `playwright.config.js`.

4. Import the test object from `lambdatest-setup.js` and run your tests.

<VerifiedTag value="Verified" />

```js
const { test } = require('../lambdatest-setup')
const { expect } = require('@playwright/test')

test.describe('Browse LambdaTest in different search engines', () => {
  test('Search LambdaTest on Bing', async ({ page }) => {
    await page.goto('https://www.bing.com')
    const element = await page.$('[aria-label="Enter your search term"]')
    await element.click()
    await element.type('LambdaTest')
    await element.press('Enter')
    const title = await page.title()

    console.log('Page title:: ', title)
    // Use the expect API for assertions provided by playwright
    expect(title).toEqual(expect.stringContaining('LambdaTest'))
  })
})
```




To generate Playwright tests with AI coding assistants, see [Run Tests With Agent Skills](/support/docs/playwright-agent-skills/).

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
        Playwright Testing With Playwright Test
      </span>
    </li>
  </ul>
</nav>
