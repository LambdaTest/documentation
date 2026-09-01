---
id: javascript-with-playwright
title: JavaScript, TypeScript, Jest, and Cucumber.js With Playwright on TestMu AI
hide_title: true
sidebar_label: JavaScript
description: Run Playwright tests in JavaScript, TypeScript, Jest, or Cucumber.js on TestMu AI across 50+ real desktop browsers and operating systems.
keywords:
  - javascript playwright testing
  - typescript playwright testing
  - jest playwright testing
  - cucumberjs playwright testing
  - playwright javascript framework
  - run playwright tests cloud

url: https://www.testmuai.com/support/docs/javascript-with-playwright/
site_name: TestMu AI
slug: javascript-with-playwright/
canonical: https://www.testmuai.com/support/docs/javascript-with-playwright/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import { CookieTrackingSignup } from '@site/src/component/CookieTracking';


<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "JavaScript with Playwright",
          "item": `${BRAND_URL}/support/docs/javascript-with-playwright/`
        }]
      })
    }}
></script>

# How to Run Playwright Tests With JavaScript on TestMu AI
***

Run your Playwright tests on the TestMu AI cloud grid to reach 50+ real desktop browsers and operating systems without maintaining local infrastructure. The connection is identical whichever framework you use: connect Playwright over a CDP WebSocket and pass a capabilities object, then pick your framework below.

## Prerequisites
***

Before running any framework below, you need a TestMu AI account, your credentials, Node.js and npm, and the Playwright sample repository.

1. A TestMu AI **Username** and **Access Key**. Get them from your TestMu AI Profile section. Don't have an account? <a href="https://www.testmuai.com/register/" onClick={CookieTrackingSignup}>Sign up for free</a>.
2. [Node.js](https://nodejs.org/en/) and npm installed.
3. Clone the sample repository. Each framework option lives in its own subdirectory:

:::tip Sample repo
<a href="https://github.com/LambdaTest/playwright-sample" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="TestMu AI Playwright sample repository on GitHub" className="doc_img"/> View on GitHub</a>
:::

```bash
git clone https://github.com/LambdaTest/playwright-sample.git
cd playwright-sample
```

You can find your Username and Access Key on the TestMu AI Automation Dashboard by clicking the **Access Key** button at the top-right.

<img loading="lazy" src={require('../assets/images/auth_lt.png').default} alt="Username and Access Key shown in the TestMu AI Profile section" width="1444" height="703"  className="doc_img"/>

## Set Your Credentials
***

Every framework authenticates the same way: your Username and Access Key are read from environment variables. Set them once. Pick your operating system:

<Tabs className="docs__val" groupId="os">

<TabItem value="macos" label="macOS / Linux" default>

<div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="win-cmd" label="Windows (CMD)">

<div className="lambdatest__codeblock">
    <CodeBlock className="language-batch">
  {`set LT_USERNAME=${ YOUR_LAMBDATEST_USERNAME()}
set LT_ACCESS_KEY=${ YOUR_LAMBDATEST_ACCESS_KEY()}`}
  </CodeBlock>
</div>

</TabItem>

</Tabs>

## How the Sample Test Works
***

Every framework below builds a `capabilities` object (browser, version, platform, and your `LT:Options`) and connects Playwright to the grid at `wss://cdp.lambdatest.com/playwright`:

```js
wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
```

What changes between them is only the setup file that holds this connection: a Playwright test fixture, a runner config, or a Cucumber.js world. That is what each tab covers.

:::tip
Use the [Capabilities Generator](https://www.testmuai.com/capabilities-generator/) to build a capabilities block for any browser, version, and OS combination.
:::

## Run a Test in Your Framework
***

Each tab lists the framework-specific pieces. Move into the matching subdirectory of the cloned repo, edit the setup file that holds the grid connection, install dependencies, then run.

<Tabs className="docs__val" groupId="js-framework" queryString="framework">

<TabItem value="playwright-test" label="JavaScript" default>

The JavaScript path connects to the grid through a Playwright Test fixture in `lambdatest-setup.js`, which patches the capabilities per project and reports test status.

1. Go to the sample directory and install dependencies:

```bash
cd playwright-test-js
npm install
```

2. The grid connection lives in `lambdatest-setup.js`, a Playwright test fixture that patches the capabilities per project and reports test status:

```js title="lambdatest-setup.js"
/**
 * Add the file in your test suite to run tests on LambdaTest.
 * Import `test` object from this file in the tests.
 */
const base = require('@playwright/test')
const path = require('path')
const { chromium } = require('playwright')
const cp = require('child_process');
const playwrightClientVersion = cp.execSync('npx playwright --version').toString().trim().split(' ')[1];

// LambdaTest capabilities
const capabilities = {
  'browserName': 'Chrome', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
  'browserVersion': 'latest',
  'LT:Options': {
    'platform': 'Windows 10',
    'build': 'Playwright Build',
    'name': 'Playwright Test',
    'user': process.env.LT_USERNAME,
    'accessKey': process.env.LT_ACCESS_KEY,
    'network': true,
    'video': true,
    'console': true,
    'tunnel': false, // Add tunnel configuration if testing locally hosted webpage
    'tunnelName': '', // Optional
    'geoLocation': '', // country code can be fetched from https://www.lambdatest.com/capabilities-generator/
    'playwrightClientVersion': playwrightClientVersion
  }
}

// Patching the capabilities dynamically according to the project name.
const modifyCapabilities = (configName, testName) => {
  let config = configName.split('@lambdatest')[0]
  let [browserName, browserVersion, platform] = config.split(':')
  capabilities.browserName = browserName ? browserName : capabilities.browserName
  capabilities.browserVersion = browserVersion ? browserVersion : capabilities.browserVersion
  capabilities['LT:Options']['platform'] = platform ? platform : capabilities['LT:Options']['platform']
  capabilities['LT:Options']['name'] = testName
}

const getErrorMessage = (obj, keys) => keys.reduce((obj, key) => (typeof obj == 'object' ? obj[key] : undefined), obj)

exports.test = base.test.extend({
  page: async ({ page, playwright }, use, testInfo) => {
    // Configure LambdaTest platform for cross-browser testing
    let fileName = testInfo.file.split(path.sep).pop()
    if (testInfo.project.name.match(/lambdatest/)) {
      modifyCapabilities(testInfo.project.name, `${testInfo.title} - ${fileName}`)

      const browser = await chromium.connect({
        wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
      })

      const ltPage = await browser.newPage(testInfo.project.use)
      await use(ltPage)

      const testStatus = {
        action: 'setTestStatus',
        arguments: {
          status: testInfo.status,
          remark: getErrorMessage(testInfo, ['error', 'message'])
        }
      }
      await ltPage.evaluate(() => {},
        `lambdatest_action: ${JSON.stringify(testStatus)}`)
      await ltPage.close()
      await browser.close()
    } else {
      // Run tests in local in case of local config provided
      await use(page)
    }
  }
})
```

3. Run the test:

```bash
npm run test
```

</TabItem>

<TabItem value="typescript" label="TypeScript">

TypeScript uses the same fixture pattern, written in `lambdatest-setup.ts`, which builds the capabilities object and connects Playwright to the grid.

1. Go to the sample directory and install dependencies:

```bash
cd playwright-test-ts
npm install
```

2. The grid connection lives in `lambdatest-setup.ts` (the TypeScript version of the fixture). Edit the capabilities to set your browser, version, and platform:

```ts title="lambdatest-setup.ts"
/**
 * Add the file in your test suite to run tests on LambdaTest.
 * Import `test` object from this file in the tests.
 */

import * as base from "@playwright/test";
import path from "path";
import { chromium } from "playwright";

// LambdaTest capabilities
const capabilities = {
  browserName: "Chrome", // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
  browserVersion: "latest",
  "LT:Options": {
    platform: "Windows 10",
    build: "Playwright TypeScript Build",
    name: "Playwright TypeScript Test",
    user: process.env.LT_USERNAME,
    accessKey: process.env.LT_ACCESS_KEY,
    network: true,
    video: true,
    console: true,
    tunnel: false, // Add tunnel configuration if testing locally hosted webpage
    tunnelName: "", // Optional
    geoLocation: '', // country code can be fetched from https://www.lambdatest.com/capabilities-generator/
  },
};

// Patching the capabilities dynamically according to the project name.
const modifyCapabilities = (configName, testName) => {
  let config = configName.split("@lambdatest")[0];
  let [browserName, browserVersion, platform] = config.split(":");
  capabilities.browserName = browserName
    ? browserName
    : capabilities.browserName;
  capabilities.browserVersion = browserVersion
    ? browserVersion
    : capabilities.browserVersion;
  capabilities["LT:Options"]["platform"] = platform
    ? platform
    : capabilities["LT:Options"]["platform"];
  capabilities["LT:Options"]["name"] = testName;
};

const getErrorMessage = (obj, keys) =>
  keys.reduce(
    (obj, key) => (typeof obj == "object" ? obj[key] : undefined),
    obj
  );

const test = base.test.extend({
  page: async ({ page, playwright }, use, testInfo) => {
    // Configure LambdaTest platform for cross-browser testing
    let fileName = testInfo.file.split(path.sep).pop();
    if (testInfo.project.name.match(/lambdatest/)) {
      modifyCapabilities(
        testInfo.project.name,
        `${testInfo.title} - ${fileName}`
      );

      const browser = await chromium.connect({
        wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
          JSON.stringify(capabilities)
        )}`,
      });

      const ltPage = await browser.newPage(testInfo.project.use);
      await use(ltPage);

      const testStatus = {
        action: "setTestStatus",
        arguments: {
          status: testInfo.status,
          remark: getErrorMessage(testInfo, ["error", "message"]),
        },
      };
      await ltPage.evaluate(() => {},
      `lambdatest_action: ${JSON.stringify(testStatus)}`);
      await ltPage.close();
      await browser.close();
    } else {
      // Run tests in local in case of local config provided
      await use(page);
    }
  },
});

export default test;
```

3. Run the test:

```bash
npm run test
```

</TabItem>

<TabItem value="jest" label="Jest">

Jest connects through `jest-playwright.config.js`, which defines a `connectOptions` endpoint per browser (Chromium, Firefox, WebKit), each with its own capabilities.

1. Go to the sample directory and install dependencies:

```bash
cd playwright-jest-js
npm install
```

2. Open `jest-playwright.config.js` in the `playwright-jest-js` directory and provide your TestMu AI Username and Access Key. Each browser gets its own capabilities and `wsEndpoint`:

```js title="jest-playwright.config.js"
const cp = require('child_process');
const playwrightClientVersion = cp.execSync('npx playwright --version').toString().trim().split(' ')[1];

const caps_chromium = {
  'browserName': 'pw-chromium', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
  'browserVersion': 'latest',
  'LT:Options': {
    'platform': 'Windows 10',
    'build': 'Playwright-Jest Build',
    'name': 'Playwright-Jest Test on Chromium',
    'user': process.env.LT_USERNAME,
    'accessKey': process.env.LT_ACCESS_KEY,
    'network': true,
    'video': true,
    'console': true,
    'tunnel': false, // Add tunnel configuration if testing locally hosted webpage
    'tunnelName': '', // Optional
    'geoLocation': '', // country code can be fetched from https://www.lambdatest.com/capabilities-generator/
    'playwrightClientVersion': playwrightClientVersion
  }
};

const caps_firefox = {
  'browserName': 'pw-firefox', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
  'browserVersion': 'latest',
  'LT:Options': {
    'platform': 'Windows 10',
    'build': 'Playwright-Jest Build ',
    'name': 'Playwright-Jest Test on Firefox',
    'user': process.env.LT_USERNAME,
    'accessKey': process.env.LT_ACCESS_KEY,
    'network': true,
    'video': true,
    'console': true,
    'tunnel': false, // Add tunnel configuration if testing locally hosted webpage
    'tunnelName': '', // Optional
    'geoLocation': '', // country code can be fetched from https://www.lambdatest.com/capabilities-generator/
  }
};

const caps_webkit = {
  'browserName': 'pw-webkit', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
  'browserVersion': 'latest',
  'LT:Options': {
    'platform': 'Windows 10',
    'build': 'Playwright-Jest Build',
    'name': 'Playwright-Jest Test on WebKit',
    'user': process.env.LT_USERNAME,
    'accessKey': process.env.LT_ACCESS_KEY,
    'network': true,
    'video': true,
    'console': true,
    'tunnel': false, // Add tunnel configuration if testing locally hosted webpage
    'tunnelName': '', // Optional
    'geoLocation': '', // country code can be fetched from https://www.lambdatest.com/capabilities-generator/
  }
};

module.exports = {
    connectOptions: {
        chromium: {
          wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(caps_chromium))}`
        },
        firefox: {
          wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(caps_firefox))}`
        },
        webkit: {
            wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(caps_webkit))}`
        }
      },
      browsers: ['chromium', 'firefox', 'webkit'],
}
```

3. Run the test:

```bash
npm run test
```

</TabItem>

<TabItem value="cucumberjs" label="Cucumber.js">

Cucumber.js runs BDD scenarios written in Gherkin. The grid connection lives in a `setup.js` file, where a Cucumber `Before` hook builds the capabilities object and connects Playwright to the grid.

1. Move into the Cucumber.js sample directory inside the cloned repo and install dependencies:

```bash
cd playwright-cucumber-js
npm install
```

2. In your `setup.js` file, specify your TestMu AI Username and Access Key, then add the `browserName`, `browserVersion`, and `platform`:

```js title="setup.js"
const { setWorldConstructor, World, Before, After} = require("@cucumber/cucumber");
const { chromium } = require('playwright')

class CustomWorld extends World{
  async setTestStatus(status, remark) {
    await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status, remark } })}`)
  }
}

Before(async (scenario) => {
  const capabilities = {
    'browserName': 'Chrome', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
    'browserVersion': 'latest',
    'LT:Options': {
      'platform': 'Windows 10',
      'build': 'Playwright Sample Build with Cucumber Runner',
      'name': scenario.pickle.name,
      'user': process.env.LT_USERNAME,
      'accessKey': process.env.LT_ACCESS_KEY,
      'network': true,
      'video': true,
      'console': true,
      'tunnel': false, // Add tunnel configuration if testing locally hosted webpage
      'tunnelName': '' // Optional
    }
  }

  // Create page and browser globals to be used in the scenarios
  global.browser = await chromium.connect({
    wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
  })

  const context = await global.browser.newContext();

  global.page = await context.newPage();
})

After(async () => {
  await global.browser.close()
})

setWorldConstructor(CustomWorld);
```

3. Run the test:

```bash
npm run test
```

Visit the TestMu AI Automation Dashboard to view the results of your executed test with the Cucumber.js test runner.

**Migrating an Existing Cucumber.js Suite to TestMu AI**

If you already have a Cucumber.js suite running locally, wire it to the grid with these steps.

1. In your `setup.js` file, add `Before` and `After` code blocks for setting up and closing the remote browsers:

```js title="setup.js"
Before(async (scenario) => {
  const capabilities = {
    'browserName': 'Chrome', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
    'browserVersion': 'latest',
    'LT:Options': {
      'platform': 'Windows 10',
      'build': 'Playwright Sample Build with Cucumber Runner',
      'name': scenario.pickle.name,
      'user': process.env.LT_USERNAME,
      'accessKey': process.env.LT_ACCESS_KEY,
      'network': true,
      'video': true,
      'console': true,
      'tunnel': false, // Add tunnel configuration if testing locally hosted webpage
      'tunnelName': '' // Optional
    }
  }

  // Create page and browser globals to be used in the scenarios
  global.browser = await chromium.connect({
    wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
  })

  const context = await global.browser.newContext();

  global.page = await context.newPage();
})

After(async () => {
  await global.browser.close()
})

setWorldConstructor(CustomWorld);
```

2. In the `CustomWorld` class, create a `setTestStatus` function that marks your test passed or failed on the TestMu AI platform:

```js title="setup.js"
class CustomWorld extends World{
  async setTestStatus(status, remark) {
    await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status, remark } })}`)
  }
}
```

3. After any assertions in your script, mark the test status as passed as shown below:

```js
try {
    assert.equal(title,
        "How to use HyperExecute for scalable and reliable web automation testing | TestMu AI",
        "Page title does not match");

    await this.setTestStatus("passed", "Title matched");
  } catch (e) {
    await this.setTestStatus("failed", e);
    throw(e);
  }
```

4. Run your test.

</TabItem>

</Tabs>

## View Your Results
***

Go to the [TestMu AI Web Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build) to see your Playwright test results, including video, network logs, and command-by-command execution.

## Related Playwright Guides
***

Continue with these related guides:

- [How to build a capabilities block with the Capabilities Generator](https://www.testmuai.com/capabilities-generator/)
- [How to sign up for a free TestMu AI account](https://www.testmuai.com/register/)

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
      JavaScript with Playwright
      </span>
    </li>
  </ul>
</nav>