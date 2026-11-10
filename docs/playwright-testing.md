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
    "headline": "How to Run Your First Playwright Test on TestMu AI",
    "description": "Run your first Playwright test on TestMu AI across real browsers and operating systems, then scale it to parallel runs and the Node.js SDK.",
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
      "playwright testing testmu ai",
      "run playwright tests on cloud",
      "playwright parallel testing",
      "playwright node sdk"
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
        "programmingLanguage": "Shell",
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
        "name": "Run Your First Test",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "const { chromium } = require('playwright')\nconst { expect } = require('@playwright/test');\n\n(async () => {\n  const capabilities = {\n    'browserName': 'Chrome', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`\n    'browserVersion': 'latest',\n    'LT:Options': {\n      'platform': 'Windows 10',\n      'build': 'Playwright Sample Build',\n      'name': 'Playwright Sample Test',\n      'user': process.env.LT_USERNAME,\n      'accessKey': process.env.LT_ACCESS_KEY,\n      'network': true,\n      'video': true,\n      'console': true\n    }\n  }\n\n  const browser = await chromium.connect({\n    wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`\n  })\n\n  const page = await browser.newPage()\n\n  await page.goto('https://duckduckgo.com')\n\n  const element = await page.$('[name=\"q\"]')\n  await element.click()\n  await element.type('TestMu AI')\n  await element.press('Enter')\n  const title = await page.title()\n\n  try {\n    expect(title).toEqual('TestMu AI at DuckDuckGo')\n    // Mark the test as completed or failed\n    await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'passed', remark: 'Title matched' } })}`)\n  } catch {\n    await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status: 'failed', remark: 'Title not matched' } })}`)\n  }\n\n  await browser.close()\n})()"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Run Tests in Parallel",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "const { chromium } = require('playwright')\nconst { expect } = require('@playwright/test')\n\nconst parallelTests = async (capability) => {\n  console.log('Initialising test:: ', capability['LT:Options']['name'])\n\n  const browser = await chromium.connect({\n    wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capability))}`\n  })\n\n  const page = await browser.newPage()\n\n  await page.goto('https://duckduckgo.com')\n\n  const element = await page.$('[name=\"q\"]')\n  await element.click()\n  await element.type('TestMu AI')\n  await element.press('Enter')\n  const title = await page.title()\n\n  await browser.close()\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Run Tests With the SDK",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npm install @lambdatest/playwright-node-sdk\nnpx playwright-node-sdk --init\nnpx playwright-node-sdk playwright test"
      }
    ],
    "dateModified": "2026-09-27T00:00:00+05:30"
  }) }}
/>

# How to Run Your First Playwright Test on TestMu AI
***

If you do End-to-End (E2E) testing with Playwright, you can run those same tests on TestMu AI instead of your local machine. This gives your Playwright suite access to real browsers and operating system combinations, so you catch issues that only appear on specific platforms. You point Playwright at the TestMu AI grid through a CDP WebSocket endpoint, pass your credentials and a `capabilities` object, then view the results on the Automation Dashboard.

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
***

This section builds a single Playwright script that connects to the TestMu AI grid and runs one test. Start with the connection snippet, then use the full script that searches Bing and reports its status.

:::note
Prefer not to edit your test scripts? Run your existing Playwright suite on the grid with **no code changes** using the SDK. See [Run Tests With the SDK](#run-tests-with-the-sdk).
:::

1. Add the code snippet below to your test script.

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

After the connection is in place, you can run your first Playwright test on TestMu AI. The full test script below searches the term `TestMu AI` on DuckDuckGo and marks the session as passed or failed based on the page title.

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

2. Run the test with the command below.

<VerifiedTag value="Verified" />

```bash
npm run test
```

## Run Tests in Parallel
***

Once your first test runs, you can execute the same test across multiple [supported browser and OS configurations](/support/docs/playwright-bundled-browser-support/) at once. Define a `capabilities` array with one entry per configuration, then run each through a shared function.

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
source: "node-js-playwright-sample-sdk:latest" # GitHub branch and tag

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

# Refer to the capability generator for detailed configurations: https://www.testmuai.com/capabilities-generator/
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

### Override Your Playwright Config

The `playwrightConfigOptions` block in `lambdatest.yml` overrides your project's native Playwright configuration for the cloud run, so you can adjust test selection and global options without editing `playwright.config.js`.

- **testDir** sets the folder Playwright looks in for test files:

<VerifiedTag value="Verified" />

```yaml
playwrightConfigOptions:
  testDir: './tests'
```

- **testMatch** and **testIgnore** are glob patterns that include or exclude specific test files:

<VerifiedTag value="Verified" />

```yaml
playwrightConfigOptions:
  testMatch: /.*\.e2e\.js/
  testIgnore: /.*\.spec\.js/
```

- **setup** and **teardown** are scripts that run before and after your suite:

<VerifiedTag value="Verified" />

```yaml
playwrightConfigOptions:
  setup:
    - name: 'setup1'
      testMatch: '**/*.setup.ts'
      teardown: 'teardown1'
  teardown:
    - name: 'teardown1'
      testMatch: '/teardown\.ts/'
```

- **use** sets global options applied to every test in the run, such as a shared `baseURL`:

<VerifiedTag value="Verified" />

```yaml
playwrightConfigOptions:
  use:
    baseURL: 'https://www.example.com'
```

### Run a Specific Test File

Because the SDK wraps the standard `playwright test` command, you can pass any Playwright CLI option through it. For example, to run a single test file:

<VerifiedTag value="Verified" />

```bash
npx playwright-node-sdk playwright test tests/my-test.spec.js
```


## Run Playwright BDD Tests
***

[playwright-bdd](https://github.com/vitalets/playwright-bdd) lets you run Gherkin `.feature` files on Playwright's test runner. On TestMu AI, the `@lambdatest/playwright-node-sdk` runs the generated specs across the browser and OS matrix defined in your `lambdatest.yml`.

:::tip Sample repo
<a href="https://github.com/LambdaTest/playwright-sample/tree/main/playwright-bdd" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="TestMu AI Playwright BDD sample repository on GitHub" className="doc_img"/> View on GitHub</a>
:::

### How Playwright BDD Works

Playwright BDD converts your Gherkin into runnable Playwright specs, then the SDK runs them on the cloud:

1. Write `.feature` files and map each step to a Playwright action in the `steps/` folder.
2. `npx bddgen` generates Playwright spec files into the `.features-gen` folder.
3. The Playwright Node SDK runs those specs on TestMu AI using the configuration in `lambdatest.yml`.

### Running Your BDD Tests

Clone the sample repository, then install the dependencies, which include `playwright-bdd` and `@lambdatest/playwright-node-sdk`:

```bash
npm install
```

> Verified with `playwright-bdd@8.3.1`, `@playwright/test@1.53.0`, and `@lambdatest/playwright-node-sdk@1.0.2` (October 2026).

Set your TestMu AI **Username** and **Access Key** as environment variables (see [Prerequisites](#prerequisites)), then generate the specs and run them on the cloud grid in a single command:

```bash
npx bddgen && npx playwright-node-sdk playwright test
```

Define your target browsers and operating systems in `lambdatest.yml`. For the full configuration, refer to the [Playwright BDD sample repository](https://github.com/LambdaTest/playwright-sample/tree/main/playwright-bdd).

### Testing Locally Hosted Pages With Playwright BDD

To run your Playwright BDD tests against locally hosted or firewalled pages, enable the tunnel under a `tunnelSettings` block in your `lambdatest.yml`:

```yaml title="lambdatest.yml"
tunnelSettings:
  tunnel: true
  # autostart: true
  tunnelName: "tunnel-name"
  # localdirectory: "./log"
  verbose: true
  loglevel: "debug"
```

Set `tunnel: true` to route traffic through the tunnel, and `tunnelName` to reuse an already-running tunnel by name. The `verbose` and `loglevel` keys control the tunnel's logging output. See [how to test locally hosted pages](/support/docs/testing-locally-hosted-pages/).

### Viewing the BDD Results

Each scenario appears on the TestMu AI Automation Dashboard with its name, status, logs, and session video.

{/* TODO (screenshot): Save the Playwright BDD run from the dashboard to
    ../assets/images/playwright-testing/playwright-bdd-execution.webp
    Then replace this comment with:
    <img loading="lazy" src={require('../assets/images/playwright-testing/playwright-bdd-execution.webp').default} alt="TestMu AI Automation Dashboard showing a completed Playwright BDD run with each Gherkin scenario, its status, and session video" className="doc_img"/> */}


## View Your Playwright Test Results
***

The TestMu AI Automation Dashboard is where you review the results of your Playwright tests after running them on the grid. Use it to confirm a run passed and to open individual sessions for debugging.

You can view the details of the Playwright test session you just executed. For example, the screenshot below shows the test execution details of a Playwright test, including test name, test ID, selected configurations, test logs, basic info, input config, and the test session video.

<img loading="lazy" src={require('../assets/images/playwright-testing/playwright-test-execution-cloud.png').default} alt="Playwright test execution results on cloud" width="1444" height="703"  className="doc_img"/>


## Related Playwright Guides
***

Continue with the guides below to migrate, configure, and customize your Playwright runs on TestMu AI.

- [Migrate your existing Playwright suite to the cloud](/support/docs/migrate-existing-playwright-tests/) moves tests you already run locally onto the TestMu AI grid.
- [Set up Playwright test execution on TestMu AI](/support/docs/playwright-test-execution-setup/) configures your project to run Playwright tests on the cloud.
- [Configure Playwright capabilities](/support/docs/playwright-test-execution-setup/) customizes browser, OS, and session options for your runs.
- [Automate WebView components with Playwright](/support/docs/playwright-webview-test/) tests WebView apps on the TestMu AI grid.

