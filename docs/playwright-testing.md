---
id: playwright-testing-guide
title: How to Run Your First Playwright Test on TestMu AI
hide_title: true
toc_max_heading_level: 2
sidebar_label: "Run First Test"
description: Run your first Playwright test on TestMu AI across real browsers and operating systems, then scale it to parallel runs and the Node.js SDK.
keywords:
  - playwright testing testmu ai
  - run playwright tests on cloud
  - playwright parallel testing
  - playwright node sdk
  - playwright e2e testing

url: https://www.testmuai.com/support/docs/playwright-testing/
site_name: TestMu AI
slug: playwright-testing/
canonical: https://www.testmuai.com/support/docs/playwright-testing/
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


# How to Run Your First Playwright Test on TestMu AI
***

If you write end-to-end tests with Playwright, you can run those same tests on TestMu AI instead of your local machine. This gives your Playwright suite access to real browsers and operating system combinations, so you catch issues that only appear on specific platforms. You point Playwright at the TestMu AI grid through a CDP WebSocket endpoint, pass your credentials and a `capabilities` object, then view the results on the Automation Dashboard.

TestMu AI supports Playwright versions v1.15.0 through the latest release, and automates Chromium, Firefox, WebKit, and Microsoft Edge.

## Prerequisites
***

Set up the following before you run the test so Playwright can authenticate and connect to the TestMu AI grid.

:::tip Sample repo

Clone the TestMu AI Playwright sample repository used in this document to follow along with the same files shown here. <a href="https://github.com/LambdaTest/playwright-sample/tree/main/playwright-test-js" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="TestMu AI Playwright sample repository on GitHub" className="doc_img"/> View on GitHub</a>

:::

1. Clone the TestMu AI Playwright repository on your system.

2. Install the npm dependencies.

<VerifiedTag value="Verified" />

```bash
npm install
```

3. Add the `wsEndpoint` (browser endpoint URL) to your test script.

<VerifiedTag value="Verified" />

```js
wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
```

4. Set your TestMu AI username and access key in the environment variables. Click the **Access Key** button at the top-right of the Automation Dashboard to find both values.

<img loading="lazy" src={require('../assets/images/playwright-testing/key.webp').default} alt="Access Key button at the top-right of the TestMu AI Automation Dashboard" width="1444" height="703"  className="doc_img"/>

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

## Run Your First Test
---

1. Add the below code snippet in your test scripts.

<VerifiedTag value="Verified" />

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

<VerifiedTag value="Verified" />

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

<VerifiedTag value="Verified" />

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

## Run Tests With the SDK
***

If you would rather not edit your scripts to connect to the grid, run your existing Playwright suite with the [`@lambdatest/playwright-node-sdk`](https://www.npmjs.com/package/@lambdatest/playwright-node-sdk) CLI and no code changes. You define credentials, capabilities, and run settings in a single `lambdatest.yml` file. The SDK also manages the TestMu AI Tunnel for local testing and drops into any CI/CD pipeline.

**1. Install the SDK** as a dev dependency in your project:

<VerifiedTag value="Verified" />

```bash
npm install @lambdatest/playwright-node-sdk
```

**2. Generate the config file,** then set your credentials, platforms, and run settings in it:

<VerifiedTag value="Verified" />

```bash
npx playwright-node-sdk --init
```

<details>
<summary>Example lambdatest.yml</summary>

<VerifiedTag value="Verified" />

```yaml
# Access your LambdaTest credentials from https://accounts.lambdatest.com/security/username-accesskey
# It's recommended to use environment variables for your credentials.
user: {YOUR_LAMBDATEST_USERNAME}
accessKey: {YOUR_LAMBDATEST_ACCESS_KEY}

# Build name for your test run
build: "Playwright Node.js SDK Build"

# Name of the test suite
name: "Playwright Test Suite"

# Global base configuration
framework: "playwright" # Framework name
source: "node-js-playwright-sample-sdk:v1" # GitHub branch and tag

# Optional: Build and project tags for organization and filtering
buildTags: ["playwright", "nodejs", "typescript"]
tags: ["smoke", "regression"]
projectName: "Playwright Node SDK Testing"

# Define the number of parallel sessions for each configuration
parallelsPerPlatform: 2

# Optional: Advanced settings applied to all tests
network: false # To capture network HAR logs (may impact test execution speed)
console: false # To capture browser console logs (may impact test execution speed)
video: true # To capture video for debugging (may impact test execution speed)
tunnel: false # To test pages behind a VPN/private network or from a local system
dedicatedProxy: false
idleTimeout: 300
timezone: "UTC"
visual: true # To capture a screenshot for each command (may impact test execution speed)
headless: false # To run tests in headless mode. Note: Video will not be available for headless tests.
commandLog: true # To capture commands that are executed on the platform
resolution: "1280x960" # To set the global resolution/viewport size to execute tests

# Tunnel-specific tests
tunnel_settings:
  # tunnel: true
  # autostart: true
  # tunnelName: "app-behind-firewall-localhost-test-tunnel"

# Global Playwright configuration (inherited by all platforms unless overridden)
playwrightConfigOptions:
  testDir: "tests"

# Refer to the capability generator for detailed configurations: https://www.lambdatest.com/capabilities-generator/
platforms:
  - platform: "macOS Sequoia" # Or "Windows 11", "android", "ios"
    browserName: "chrome" # Or pw-firefox, pw-webkit
    browserVersion: "latest"
```

</details>

**3. Run your tests** through the SDK wrapper (you can pass any standard Playwright CLI option):

<VerifiedTag value="Verified" />

```bash
npx playwright-node-sdk playwright test
```

When you run this, the SDK reads `lambdatest.yml`, starts the TestMu AI Tunnel if enabled, generates a temporary Playwright config that connects to the grid, runs your tests, and reports results (video, screenshots, network, and console logs) to your Dashboard.

## View Your Playwright Test Results
***

The TestMu AI Automation Dashboard is where you review the results of your Playwright tests after running them on the grid. Use it to confirm a run passed and to open individual sessions for debugging.

The screenshot below shows the Playwright build on the left and the build sessions associated with the selected build on the right.

<img loading="lazy" src={require('../assets/images/playwright-testing/dashboard.webp').default} alt="TestMu AI Automation Dashboard listing Playwright builds and their associated sessions" width="1444" height="703"  className="doc_img"/>

Click the session name of a test to view its details. For example, the screenshot below shows the test execution details of a Playwright test, including test name, test ID, selected configurations, test logs, basic info, input config, and the test session video.

<img loading="lazy" src={require('../assets/images/playwright-testing/pw-build.webp').default} alt="Playwright test session details showing configurations, logs, and session video on TestMu AI" width="1347" height="616"  className="doc_img"/>

## Related Playwright Guides
***

Continue with the guides below to migrate, configure, and customize your Playwright runs on TestMu AI.

- [Migrate your existing Playwright suite to the cloud](/support/docs/migrate-existing-playwright-tests/) moves tests you already run locally onto the TestMu AI grid.
- [Set up Playwright test execution on TestMu AI](/support/docs/playwright-test-execution-setup/) configures your project to run Playwright tests on the cloud.
- [Configure Playwright capabilities](/support/docs/capabilities-for-playwright/) customizes browser, OS, and session options for your runs.
- [Test WebView apps with Playwright](/support/docs/playwright-webview-test/) automates WebView components using Playwright on TestMu AI.

