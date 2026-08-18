# Getting Started With Playwright Testing

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Playwright is a Node.js library that uses a single API to automate Chromium, Firefox, and WebKit. It is designed to enable powerful, reliable, and efficient [automated browser testing](https://www.lambdatest.com/automated-browser-testing). Playwright can also automate Microsoft Edge since it is built on the open-source Chromium web framework.

TestMu AI allows you to run Playwright tests across real browsers and operating system combinations. This guide will cover the basics of getting started with Playwright testing on the TestMu AI platform.

*You can run tests using Playwright versions **v1.15.0** to the latest.*

## Prerequisites

>Note: All the code samples in this documentation can be found in the TestMu AI's Repository on GitHub. You can either download or clone the repository to quickly run your tests.
 View on GitHub

1. Clone the TestMu AI-Playwright repository on your system.

2. Install the npm dependencies.

```
npm install
```

3. Add browserWSEndpoint (browser end point URL) in your test script.

```js
wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
```

4. In order to run your Playwright tests, you will need to set your TestMu AI username and access key in the environment variables. Click the **Access Key** button at the top-right of the Automation Dashboard to access it.

**Windows**

```js
set LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
set LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```

**macOS/Linux**

```js
export LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
export LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```

## Run Your First Test

1. Add the below code snippet in your test scripts.

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

Once you are done with the above-mentioned steps, you can initiate your first Playwright test on TestMu AI.

The below test script searches the term 'TestMu AI' on Bing.

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
})()

```

2. Pass the below command to run the test.

```
node playwright-single.js
```

## View your Playwright test results

The TestMu AI Automation Dashboard is where you can see the results of your Playwright tests after running them on the TestMu AI platform.

The below screenshot of TestMu AI Automation Dashboard shows the Playwright build on the left and the build sessions associated with the selected build on the right.

On clicking the session name of the respective test, you can view the details of Playwright test session that you just executed. For example, the below screenshot shows a test execution details of Playwright test like Test Name, Test ID, selected configurations, test logs, basic info, input config, and test session video.

## Related Playwright guides

- [Playwright WebView Testing](/support/docs/playwright-webview-test/) — automate WebView components using Playwright on TestMu AI.
- [Migrate Existing Playwright Tests](/support/docs/migrate-existing-playwright-tests/) — move your existing Playwright suite to the TestMu AI cloud.
