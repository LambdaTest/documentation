# Parallel Testing With Playwright

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

TestMu AI allows you to perform parallel testing with Playwright across real browsers and OS to automate your several test cases simultaneously. You can run one test case across various browsers, or you can run multiple test case scenarios in the same browser with different browser versions.

Shown below are the steps on running parallel tests with Playwright on the TestMu AI platform.

1. Clone the [TestMu AI-Playwright GitHub repository](https://github.com/LambdaTest/playwright-sample) and switch to the cloned directory.

```js
git clone https://github.com/LambdaTest/playwright-sample.git
cd playwright-sample-main
```

2. Ensure you have npm dependencies installed.

3. Configure your TestMu AI authentication credentials.

Once you are done with the above-mentioned steps, you can run your parallel tests with Playwright on TestMu AI.

The below test script searches the term 'TestMu AI' on Bing.

```js
const { chromium } = require('playwright')
const { expect } = require('@playwright/test')

const parallelTests = async (capability) => {
console.log('Initialising test:: ', capability['LT:Options']['name'])

const browser = await chromium.connect({
wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capability))}`
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
}

// Capabilities array for with the respective configuration for the parallel tests
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
'platform': 'Windows 8',
'build': 'Playwright Sample Build',
'name': 'Playwright Sample Test on Windows 8 - MicrosoftEdge',
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
'platform': 'MacOS Big sur',
'build': 'Playwright Sample Build',
'name': 'Playwright Sample Test on MacOS Big sur - Chrome',
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

4. Pass the below command to run the test.

```
node playwright-parallel.js
```

## View your Playwright test results

The TestMu AI Automation Dashboard is where you can see the results of your Playwright tests after running them on the TestMu AI platform.

The below screenshot of TestMu AI Automation Dashboard shows the Playwright build on the left and the build sessions associated with the selected build on the right.

On clicking the session name of the respective test, you can view the details of Playwright test session that you just executed. For example, the below screenshot shows a test execution details of Playwright test like Test Name, Test ID, selected configurations, test logs, basic info, input config, and test session video.
