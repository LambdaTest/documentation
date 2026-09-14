---
id: playwright-playwrighttest
title: How to Use the Playwright Test Runner on TestMu AI
hide_title: true
toc_max_heading_level: 2
sidebar_label: "Playwright Test Runner"
description: Run Playwright tests with the Playwright test runner on TestMu AI across real browsers and operating systems, in parallel and with migration support.
keywords:
  - playwright test runner on testmu ai
  - run playwright tests with playwright test
  - playwright parallel testing
  - playwright e2e testing cloud
  - migrate playwright tests to testmu ai

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


# How to Use the Playwright Test Runner on TestMu AI
***

If you already write end-to-end tests with the Playwright test runner, you can run them on TestMu AI to reach real browser and operating system combinations instead of local ones. You keep parallel execution, context isolation, fixtures, and the video and screenshot artifacts captured on failure. You point the test runner at TestMu AI by naming target browsers in the `projects` array of your `playwright.config.js`.

## Prerequisites
***

Before you run tests, clone the sample repository and set your credentials in your environment. The code samples on this page come from the TestMu AI Playwright sample repository, which you can download or clone to run the tests as shown.

<a href="https://github.com/LambdaTest/playwright-sample/" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="GitHub icon linking to the TestMu AI Playwright sample repository"  className="doc_img"/> View on GitHub</a>

1. Clone the TestMu AI Playwright repository on your system.

2. Install the npm dependencies.

<VerifiedTag value="Verified" />

```bash
npm install
```

3. Set your TestMu AI username and access key in your environment variables. Click the **Access Key** button at the top-right of the Automation Dashboard to find both values.

<img loading="lazy" src={require('../assets/images/playwright-testing/key.webp').default} alt="Access Key button on the TestMu AI Automation Dashboard" width="1444" height="703"  className="doc_img"/>

**Windows**

<VerifiedTag value="Verified" />

```bash
set LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
set LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```

**macOS/Linux**

<VerifiedTag value="Verified" />

```bash
export LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
export LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```

## Run Playwright Tests With the Playwright Test Runner
***

In your `playwright.config.js` file, add the `browserName`, `browserVersion`, and `platform` to each project in the `projects` configuration below.

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
Run the following command to start the test.

<VerifiedTag value="Verified" />

```bash
npm run test
```

Visit the TestMu AI Automation Dashboard to view the results of your test executed with the Playwright test runner.

## Migrate an Existing Playwright Test Suite to TestMu AI
***

If you are migrating an existing Playwright test suite to TestMu AI, follow the steps below to wire in the setup file and point your config at the cloud.

1. Add `lambdatest-setup.js` to your project root.

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

To generate Playwright tests with AI coding assistants, see [how to run Playwright tests with agent skills](/support/docs/playwright-agent-skills/).

## Related Playwright Guides
***

Continue with the guides below to extend your Playwright setup on TestMu AI.

- [Get started with Playwright testing on TestMu AI](/support/docs/playwright-testing/) covers the base setup for cloud runs.
- [Migrate existing Playwright tests to TestMu AI](/support/docs/migrate-existing-playwright-tests/) details the full migration path.
- [Configure Playwright capabilities](/support/docs/capabilities-for-playwright/) lists every capability you can set for a run.

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
