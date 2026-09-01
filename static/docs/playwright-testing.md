# How to Run Your First Playwright Test on TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

If you write end-to-end tests with Playwright, you can run those same tests on TestMu AI instead of your local machine. This gives your Playwright suite access to real browsers and operating system combinations, so you catch issues that only appear on specific platforms. You point Playwright at the TestMu AI grid through a CDP WebSocket endpoint, pass your credentials and a `capabilities` object, then view the results on the Automation Dashboard.

TestMu AI supports Playwright versions v1.15.0 through the latest release, and automates Chromium, Firefox, WebKit, and Microsoft Edge.

## Prerequisites

Set up the following before you run the test so Playwright can authenticate and connect to the TestMu AI grid.

**Sample repo**

Clone the TestMu AI Playwright sample repository used in this document to follow along with the same files shown here.  View on GitHub

1. Clone the TestMu AI Playwright repository on your system.

2. Install the npm dependencies.

```bash
npm install
```

3. Add the `wsEndpoint` (browser endpoint URL) to your test script.

```js
wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
```

4. Set your TestMu AI username and access key in the environment variables. Click the **Access Key** button at the top-right of the Automation Dashboard to find both values.

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

This section builds a single Playwright script that connects to the TestMu AI grid and runs one test. Start with the connection snippet, then use the full script that searches Bing and reports its status.

1. Add the code snippet below to your test script.

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

After the connection is in place, you can run your first Playwright test on TestMu AI. The full test script below searches the term `LambdaTest` on Bing and marks the session as passed or failed based on the page title.

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

2. Run the test with the command below.

```bash
node playwright-single.js
```

## Run Tests in Parallel

Once your first test runs, you can execute the same test across multiple browser and OS configurations at once. Define a `capabilities` array with one entry per configuration, then run each through a shared function.

The example below runs the Bing search test on three configurations: Chrome on Windows 10, Microsoft Edge on Windows 8, and Chrome on macOS Big Sur.

```js title="playwright-parallel.js"
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

Run the parallel test:

```bash
node playwright-parallel.js
```

## Run Tests With the SDK

If you would rather not edit your scripts to connect to the grid, run your existing Playwright suite with the [`@lambdatest/playwright-node-sdk`](https://www.npmjs.com/package/@lambdatest/playwright-node-sdk) CLI and no code changes. You define credentials, capabilities, and run settings in a single `lambdatest.yml` file. The SDK also manages the TestMu AI Tunnel for local testing and drops into any CI/CD pipeline.

**1. Install the SDK** as a dev dependency in your project:

```bash
npm install @lambdatest/playwright-node-sdk
```

**2. Generate the config file,** then set your credentials, platforms, and run settings in it:

```bash
npx playwright-node-sdk --init
```

Example lambdatest.yml

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

**3. Run your tests** through the SDK wrapper (you can pass any standard Playwright CLI option):

```bash
npx playwright-node-sdk playwright test
```

When you run this, the SDK reads `lambdatest.yml`, starts the TestMu AI Tunnel if enabled, generates a temporary Playwright config that connects to the grid, runs your tests, and reports results (video, screenshots, network, and console logs) to your Dashboard.

## View Your Playwright Test Results

The TestMu AI Automation Dashboard is where you review the results of your Playwright tests after running them on the grid. Use it to confirm a run passed and to open individual sessions for debugging.

The screenshot below shows the Playwright build on the left and the build sessions associated with the selected build on the right.

Click the session name of a test to view its details. For example, the screenshot below shows the test execution details of a Playwright test, including test name, test ID, selected configurations, test logs, basic info, input config, and the test session video.

## Related Playwright Guides

Continue with the guides below to migrate, configure, and customize your Playwright runs on TestMu AI.

- [Migrate your existing Playwright suite to the cloud](/support/docs/migrate-existing-playwright-tests/) moves tests you already run locally onto the TestMu AI grid.
- [Set up Playwright test execution on TestMu AI](/support/docs/playwright-test-execution-setup/) configures your project to run Playwright tests on the cloud.
- [Configure Playwright capabilities](/support/docs/capabilities-for-playwright/) customizes browser, OS, and session options for your runs.
