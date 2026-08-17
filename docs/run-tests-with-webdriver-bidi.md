---
id: run-tests-with-webdriver-bidi
title: Run Web Automation Tests With WebDriver BiDi on TestMu AI
hide_title: true
sidebar_label: BiDi Testing
description: Run web automation over the WebDriver BiDi protocol on TestMu AI with WebdriverIO. Capture screenshots, validate the page, and subscribe to browser events.
keywords:
  - run web automation tests with webdriver bidi
  - webdriver bidi testmu ai
  - webdriverio bidi cloud
  - bidi cross browser automation
  - bidi network events testing
url: https://www.testmuai.com/support/docs/run-tests-with-webdriver-bidi/
site_name: TestMu AI
slug: run-tests-with-webdriver-bidi/
canonical: https://www.testmuai.com/support/docs/run-tests-with-webdriver-bidi/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
          "name": "Run Web Automation Tests With WebDriver BiDi",
          "item": `${BRAND_URL}/support/docs/run-tests-with-webdriver-bidi/`
        }]
      })
    }}
></script>

# How to Run Web Automation Tests With WebDriver BiDi
***

WebDriver BiDi is a W3C standard protocol for browser automation. It adds bidirectional, event-driven communication on top of WebDriver, so a test both drives the browser and subscribes to its events, such as console logs and network traffic, across Chrome, Firefox, and Edge. 

On TestMu AI, WebdriverIO connects to a cloud browser with BiDi enabled and runs your automation there, and an AI agent can observe the same browser's events.

## Prerequisites
***

Before you start, make sure you have the following in place.

1. A TestMu AI account. [Sign up on TestMu AI](https://www.testmuai.com/register/) if you do not have one.
2. Node.js 18 or later installed.

## Running Web Automation Tests With WebDriver BiDi
***

Setting the `webSocketUrl` capability to `true` enables WebDriver BiDi in WebdriverIO. WebdriverIO connects to the TestMu AI hub and returns a cloud browser that it controls over BiDi. 

The example opens a product listing on the [E-Commerce Playground](https://ecommerce-playground.lambdatest.io/), captures a screenshot, and validates that the products loaded.

**Requirements**

- **Node.js 18 or later** (check with `node -v`).
- The **`webdriverio`** package (installed in step 1).
- Your TestMu AI **Username** and **Access Key** (set as environment variables in step 2).

:::note
These examples are written in TypeScript. You're free to use plain JavaScript instead (remove the type annotations and save the file as `.js`), or use any other WebDriver BiDi client your stack supports. The capabilities are the same.
:::

**1. Install WebdriverIO.** The package is published on the npm registry as [`webdriverio`](https://www.npmjs.com/package/webdriverio).

```bash
npm install webdriverio
```

A successful install adds the package to your project:

```text
added 247 packages, and audited 248 packages in 20s
```

**2. Set your credentials.** Copy your **Username** and **Access Key** from **Settings → Account Settings**, then set them as environment variables.

<Tabs groupId="os">
  <TabItem value="unix" label="macOS / Linux" default>

```bash
export LT_USERNAME="your_username"
export LT_ACCESS_KEY="your_access_key"
```

  </TabItem>
  <TabItem value="powershell" label="Windows (PowerShell)">

```powershell
$env:LT_USERNAME="your_username"
$env:LT_ACCESS_KEY="your_access_key"
```

  </TabItem>
  <TabItem value="cmd" label="Windows (CMD)">

```batch
set LT_USERNAME=your_username
set LT_ACCESS_KEY=your_access_key
```

  </TabItem>
</Tabs>

**3. Create `bidi-test.ts`.** It connects to the hub with BiDi enabled, opens the listing, captures a screenshot, validates the products, and marks the test **passed** or **failed** on the dashboard.

```typescript
// bidi-test.ts
import { remote } from 'webdriverio';

async function run() {
  const browser = await remote({
    hostname: 'hub.lambdatest.com',
    port: 443,
    protocol: 'https',
    path: '/wd/hub',
    capabilities: {
      browserName: 'Chrome',
      browserVersion: 'latest',
      webSocketUrl: true, // enable WebDriver BiDi
      'LT:Options': {
        platformName: 'Windows 10',
        build: 'BiDi Web Automation',
        name: 'Product Listing',
        username: process.env.LT_USERNAME,
        accessKey: process.env.LT_ACCESS_KEY,
        w3c: true,
      },
    },
  });

  try {
    await browser.url(
      'https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=25'
    );

    // Action: capture a screenshot of the listing
    await browser.saveScreenshot('./components.png');

    // Validation: the category rendered its products
    const products = await browser.$$('.product-thumb');
    const title = await browser.getTitle();
    if (products.length === 0) throw new Error('No products found on the page');

    console.log(`Passed: "${title}" loaded ${products.length} products, screenshot saved`);

    // Mark the test as passed on the TestMu AI dashboard
    await browser.executeScript('lambda-status=passed', []);
  } catch (e) {
    // Mark the test as failed so the dashboard reflects the real outcome
    await browser.executeScript('lambda-status=failed', []);
    throw e;
  } finally {
    await browser.deleteSession();
  }
}

run().catch((e) => {
  console.error('Run failed:', e.message);
  process.exit(1);
});
```

**4. Run it** with a TypeScript runner:

```bash
npx tsx bidi-test.ts
```

WebdriverIO connects over BiDi, runs the checks, and marks the session **Passed**:

```text
Passed: "Components" loaded 15 products, screenshot saved
```

To view your test results, head over to the TestMu AI Web Automation dashboard.

<img loading="lazy" src={require('../assets/images/bidi-test-runs-on-testmuai.webp').default} alt="WebDriver BiDi test execution on TestMu AI" width="1920" height="938" className="doc_img"/>


## Running Web Automation With WebDriver BiDi From an AI Agent
***

BiDi's event stream is what makes it useful for agents: the agent subscribes to browser events and validates against what the browser actually does, not just the DOM it queries. 

Here the agent watches network responses to confirm the page loaded its resources.

**1. Create `agent-bidi.ts`.** It subscribes to BiDi network events, opens the listing, validates the browser's real activity, and marks the test **passed** or **failed** on the dashboard.

```typescript
// agent-bidi.ts
import { remote } from 'webdriverio';

async function run() {
  const browser = await remote({
    hostname: 'hub.lambdatest.com',
    port: 443,
    protocol: 'https',
    path: '/wd/hub',
    capabilities: {
      browserName: 'Chrome',
      browserVersion: 'latest',
      webSocketUrl: true,
      'LT:Options': {
        platformName: 'Windows 10',
        build: 'BiDi Web Automation',
        name: 'Agent Event Monitor',
        username: process.env.LT_USERNAME,
        accessKey: process.env.LT_ACCESS_KEY,
        w3c: true,
      },
    },
  });

  let responses = 0;
  try {
    // Subscribe to BiDi network events so the agent sees the browser's real activity
    await browser.sessionSubscribe({ events: ['network.responseCompleted'] });
    browser.on('network.responseCompleted', () => {
      responses += 1;
    });

    await browser.url(
      'https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=25'
    );
    await browser.pause(3000);

    if (responses === 0) throw new Error('No network responses observed');
    console.log(`Validated: the page issued ${responses} network responses over BiDi`);

    // Mark the test as passed on the TestMu AI dashboard
    await browser.executeScript('lambda-status=passed', []);
  } catch (e) {
    // Mark the test as failed so the dashboard reflects the real outcome
    await browser.executeScript('lambda-status=failed', []);
    throw e;
  } finally {
    await browser.deleteSession();
  }
}

run().catch((e) => {
  console.error('Run failed:', e.message);
  process.exit(1);
});
```

**2. Run it:**

```bash
npx tsx agent-bidi.ts
```

The agent subscribes to the event stream and reports what the browser actually did:

```text
Validated: the page issued 56 network responses over BiDi
```

You can view your test results in the TestMu AI Web Automation dashboard.

:::tip Get started faster with ready-made cookbooks
The [Browser Cloud agent skills](/support/docs/browser-cloud-skills/) are ready-made cookbooks that teach any AI agent (Claude, Cursor, and other LLM tools) to generate production-grade cloud browser automation for you. Drop the skill into your assistant and it writes integrations like the ones above, so you can get started with Browser Cloud at the earliest.
:::


## Related TestMu AI Guides
***

- [How to run web automation tests with CDP](/support/docs/run-tests-with-chrome-devtools-protocol/) for the Chrome DevTools Protocol path on Chromium browsers.
- [How to run BiDi tests with the WebdriverIO sample project](/support/docs/selenium-bidi-integration/) for a ready-to-clone repository.
- [How to run BiDi tests on HyperExecute](/support/docs/hyperexecute-bidi-testing/) to scale BiDi runs across a test matrix.

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
        Run Web Automation Tests With WebDriver BiDi
      </span>
    </li>
  </ul>
</nav>
