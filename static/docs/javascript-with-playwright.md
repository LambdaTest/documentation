# JavaScript and TypeScript with Playwright

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Run Playwright tests written in plain JavaScript, with Jest, or in TypeScript across real browsers and operating systems on the TestMu AI cloud platform. The connection to the grid is the same whichever you use: you connect Playwright over a CDP WebSocket. This guide covers the shared steps once, then gives you the setup for each in the tabs below.

## Prerequisites

1. A TestMu AI **Username** and **Access Key**. Get them from your TestMu AI Profile. Don't have an account? Sign up for free.
2. [Node.js](https://nodejs.org/en/) and npm installed.
3. Clone the sample repository (each option lives in its own subdirectory):

**Sample repo**
 View on GitHub

```bash
git clone https://github.com/LambdaTest/playwright-sample.git
cd playwright-sample
```

## Set your credentials

Set your Username and Access Key as environment variables. Pick your operating system:

  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

  {`set LT_USERNAME=${ YOUR_LAMBDATEST_USERNAME()}
set LT_ACCESS_KEY=${ YOUR_LAMBDATEST_ACCESS_KEY()}`}

## How the test connects

Each option builds a `capabilities` object (browser, version, platform, and your `LT:Options`) and connects Playwright to the grid at `wss://cdp.lambdatest.com/playwright`:

```js
wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
```

What changes between them is only the setup file that holds this connection. Pick yours below.

## Set Up and Run Your Tests

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

1. Go to the sample directory and install dependencies:

```bash
cd playwright-jest-js
npm install
```

2. `jest-playwright.config.js` defines a `connectOptions` endpoint per browser (Chromium, Firefox, WebKit), each with its own capabilities:

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
'browserName': 'pw-firefox',
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
'tunnel': false,
'tunnelName': '',
'geoLocation': '',
}
};

const caps_webkit = {
'browserName': 'pw-webkit',
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
'tunnel': false,
'tunnelName': '',
'geoLocation': '',
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

1. Go to the sample directory and install dependencies:

```bash
cd playwright-test-ts
npm install
```

2. The grid connection lives in `lambdatest-setup.ts` (the TypeScript version of the fixture):

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

## View your test results

Go to the [TestMu AI Web Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build) to see your Playwright test results.
