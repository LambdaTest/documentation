# Puppeteer Testing With Mocha

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Mocha is a JavaScript automation testing framework to run the tests on Node.js and the browser. It enables you to run test cases serially, providing greater flexibility and accurate test reporting while mapping unidentified bugs to the correct test cases.

TestMu AI allows you to run Puppeteer tests with Mocha on a browser farm of real browsers and operating system combinations.

This guide will cover the basics of getting started with Puppeteer testing with Mocha on the TestMu AI platform.

## Prerequisites

>Note: All the code samples in this documentation can be found in the TestMu AI's Repository on GitHub. You can either download or clone the repository to quickly run your tests.
 View on GitHub

1. Clone the TestMu AI-Puppeteer repository on your system.

2. Install the npm dependencies.

```
npm install
```

3. In order to run your Puppeteer tests with Mocha, you will need to set your TestMu AI username and access key in the environment variables. Click the **Access Key** button at the top-right of the Automation Dashboard to access it.

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

## Running Tests Using Mocha

>**Test Scenario**: The below test script searches TestMu AI on DuckDuckGo and verifies the website title.

1. To run the Puppeteer Mocha tests on TestMu AI, you need make some tweaks to the `google.spec.js` file.

```js
const puppeteer = require('puppeteer');
const expect = require('chai').expect;
const caps_chrome = {
browserName    : 'Chrome',
browserVersion : 'latest',
'LT:Options'   : {
platform   : 'Windows 10',
build      : 'Sample Puppeteer-Mocha',
name       : 'Puppeteer-mocha test on Chrome',
resolution : '1366x768',
user       : process.env.LT_USERNAME,
accessKey  : process.env.LT_ACCESS_KEY,
network    : true
}
};
const caps_edge = {
browserName    : 'MicrosoftEdge',
browserVersion : 'latest',
'LT:Options'   : {
platform   : 'Windows 10',
build      : 'Sample Puppeteer-Mocha',
name       : 'Puppeteer-mocha test on Edge',
resolution : '1366x768',
user       : process.env.LT_USERNAME,
accessKey  : process.env.LT_ACCESS_KEY,
network    : true
}
};

let browser = null;
let page = null;
describe('Search Text', () => {
beforeEach(async () => {
browser = await puppeteer.connect({
browserWSEndpoint : `wss://cdp.lambdatest.com/puppeteer?capabilities=${encodeURIComponent(
JSON.stringify(caps_chrome)
)}`
});
page = await browser.newPage();
});

it('should be titled "Google"', async () => {
let text = 'Google';
await page.goto('https://www.duckduckgo.com');
var element = await page.$('[name="q"]');
await element.click();
await element.type(text);
await Promise.all([
page.keyboard.press('Enter'),
page.waitForNavigation()
]);
var title = await page.title();
try {
expect(title).equal(text + ' at DuckDuckGo', 'Expected page title is incorrect!');
await page.evaluate(
(_) => {},
`lambdatest_action: ${JSON.stringify({
action    : 'setTestStatus',
arguments : { status: 'passed', remark: 'assertion passed' }
})}`
);
} catch (e) {
await page.evaluate(
(_) => {},
`lambdatest_action: ${JSON.stringify({
action    : 'setTestStatus',
arguments : { status: 'failed', remark: e.name }
})}`
);
}
});

afterEach(async () => {
await page.close();
await browser.close();
});
});
```

2. Now pass the below command to run your test.

```
npm run test
```

3. Visit the TestMu AI Automation Dashboard to see the results of your Puppeteer Mocha tests.

## Using the Mocha Agent Skill with TestMu AI

The [mocha-skill](https://github.com/LambdaTest/agent-skills/tree/main/mocha-skill) is a part of [TestMu AI Skills](https://github.com/LambdaTest/agent-skills/) that guide AI coding assistants in generating production-ready test automation.

The mocha-skill package includes:

```
mocha-skill/
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

### Installing Mocha Agent Skill

Install a Mocha Agent Skill using the command below:

```
# Clone the repo and copy the skill you need
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/mocha-skill .claude/skills/

# Or for Cursor / Copilot
cp -r agent-skills/mocha-skill .cursor/skills/
```

**Note**: If you prefer installing all available framework skills instead of only mocha-skill, clone the repository directly into your tool's skills directory (for example, .claude/skills/, .cursor/skills/, .gemini/skills/, or .agent/skills/).
