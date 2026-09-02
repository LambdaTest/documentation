# JavaScript with Playwright: Running Your First Test

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Run Playwright tests written in plain JavaScript, with Jest, or in TypeScript across real browsers and operating systems on the TestMu AI cloud platform. The connection to the grid is the same whichever you use: you connect Playwright over a CDP WebSocket. This guide covers the shared steps once, then gives you the setup for each in the tabs below.

## Prerequisites

1. You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

**Sample repo**
Download or clone the code sample for the Playwright JavaScript from the TestMu AI GitHub repository to run the tests.

 View on GitHub

```bash
git clone https://github.com/LambdaTest/playwright-sample.git
cd playwright-sample
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

## View your test results

Go to the [TestMu AI Web Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build) to see your Playwright JavaScript test results.

## Using the Playwright Agent Skill with TestMu AI

The [playwright-skill](https://github.com/LambdaTest/agent-skills/tree/main/playwright-skill) is a part of [TestMu AI Skills](https://github.com/LambdaTest/agent-skills/) that guide AI coding assistants in generating production-ready test automation.

The playwright-skill package includes:

```
playwright-skill/
├── SKILL.md
└── reference/
├── playbook.md
└── advanced-patterns.md
```

It provides structured guidance for:

* Project structure and setup
* Dependency configuration
* Local execution
* TestMu AI cloud execution
* Debugging patterns
* CI/CD integration

### Installing Playwright Agent Skill

Install a Playwright Agent Skill using the command below:

```
# Clone the repo and copy the skill you need
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/playwright-skill .claude/skills/

# Or for Cursor / Copilot
cp -r agent-skills/playwright-skill .cursor/skills/
```

**Note**: If you prefer installing all available framework skills instead of only playwright-skill, clone the repository directly into your tool's skills directory (for example, .claude/skills/, .cursor/skills/, .gemini/skills/, or .agent/skills/).
