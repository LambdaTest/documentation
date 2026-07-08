# Jest with Playwright: Running Your First Test

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/llms.txt).

Learn how to use Playwright with Jest framework to automate web application testing across 50+ real browsers and operating systems on TestMu AI cloud platform.

## Prerequisites

1. You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

**Sample repo**
Download or clone the code sample for the Playwright Jest from the TestMu AI GitHub repository to run the tests.

 View on GitHub

```js
git clone https://github.com/LambdaTest/playwright-sample.git
cd playwright-sample
cd playwright-jest-js
```

2. Install the npm dependencies.

```
npm install
```

3. A TestMu AI Username and Access key. You can get it from your TestMu AI Profile section. Don't have an account, sign up for free.

4. To run Playwright tests, set your TestMu AI Username and Access key in the Environment Variables.

## Run your Playwright tests with Jest

Navigate to the `jest-playwright.config.js` file in the `playwright-jest-js` directory and provide your TestMu AI Username and Access key.

```js
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

Pass the below command in the terminal to run the test.

```js
npm run test
```

## View your test results

Go to the [TestMu AI Web Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build) to see your Playwright JavaScript test results.

## Using the Jest Agent Skill with TestMu AI

The [jest-skill](https://github.com/LambdaTest/agent-skills/tree/main/jest-skill) is a part of [TestMu AI Skills](https://github.com/LambdaTest/agent-skills/) that guide AI coding assistants in generating production-ready test automation.

The jest-skill package includes:

```
jest-skill/
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

### Installing Jest Agent Skill

Install a Jest Agent Skill using the command below:

```
# Clone the repo and copy the skill you need
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/jest-skill .claude/skills/

# Or for Cursor / Copilot
cp -r agent-skills/jest-skill .cursor/skills/
```

**Note**: If you prefer installing all available framework skills instead of only jest-skill, clone the repository directly into your tool's skills directory (for example, .claude/skills/, .cursor/skills/, .gemini/skills/, or .agent/skills/).
