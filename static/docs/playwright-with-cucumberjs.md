# Playwright Testing With Cucumber.js

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/llms.txt).

Cucumber.js is a JavaScript-based open-source framework for web automation testing. It runs on Node.js and latest web browsers. Cucumber.js allows you to write and execute tests in Gherkin - a non-technical and human-readable language.

TestMu AI enables you to run Playwright tests with Cucumber.js test runner on a browser farm of 40+ real browser and operating system combinations. This guide will outline the fundamentals of getting started with Playwright testing on the TestMu AI platform using the Cucumber.js test runner.

## Prerequisites

>Note: All the code samples in this documentation can be found in the TestMu AI's Repository on GitHub. You can either download or clone the repository to quickly run your tests.
 View on GitHub

1. Clone the TestMu AI-Playwright repository on your system.

2. Install the npm dependencies.

```
npm install
```

3. In order to run your Playwright tests with Playwright test runner, you will need to set your TestMu AI username and access key in the environment variables. Click the **Access Key** button at the top-right of the Automation Dashboard to access it.

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

## Running Playwright Tests With Cucumber.js

In your `setup.js` file, specify your TestMu AI Username and TestMu AI Access Key, add the browserName, browserVersion, and platform.

```js
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
Pass the below command to run the test.

```
npm run test
```

Visit the TestMu AI Automation dashboard to view the results of your executed test with Playwright test runner.

## Testing With Cucumber.js When Migrating To TestMu AI

1. In your `setup.js` file, add before and after code block for setting up and closing the remote browsers.

```js
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

2. In the class CustomWorld, create a function `setTestStatus` that will mark your test passed or failed on the TestMu AI platform.

```js
class CustomWorld extends World{
async setTestStatus(status, remark) {
await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({ action: 'setTestStatus', arguments: { status, remark } })}`)
}
}
```

3. After any assertions in your script mark the test status as passed as shown below:

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

4. After that, you can run your test.

## Using the Cucumber Agent Skill with TestMu AI

The [cucumber-skill](https://github.com/LambdaTest/agent-skills/tree/main/cucumber-skill) is a part of [TestMu AI Skills](https://github.com/LambdaTest/agent-skills/) that guide AI coding assistants in generating production-ready test automation.

The cucumber-skill package includes:

```
cucumber-skill/
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

### Installing Cucumber Agent Skill

Install a Cucumber Agent Skill using the command below:

```
# Clone the repo and copy the skill you need
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/cucumber-skill .claude/skills/

# Or for Cursor / Copilot
cp -r agent-skills/cucumber-skill .cursor/skills/
```

**Note**: If you prefer installing all available framework skills instead of only cucumber-skill, clone the repository directly into your tool's skills directory (for example, .claude/skills/, .cursor/skills/, .gemini/skills/, or .agent/skills/).
