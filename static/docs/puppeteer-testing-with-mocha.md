# How to Run Puppeteer Tests With Mocha on TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

If you write Puppeteer tests with Mocha, you can run the same specs across real browsers and operating systems on TestMu AI instead of a single local machine. This gives you serial, structured Mocha reporting on a browser farm that maps failures back to the right test cases. You connect Puppeteer to the TestMu AI cloud grid through a `browserWSEndpoint`, define your browser capabilities, and run the suite with the standard `npm run test` command.

## Prerequisites


Before you run your first suite, clone the sample repository and set the credentials TestMu AI uses to authenticate your session.


All the code samples in this documentation are available in the TestMu AI repository on GitHub. Download or clone the repository to run your tests quickly.


 View on GitHub

1. Clone the TestMu AI Puppeteer repository on your system.

2. Install the npm dependencies.

```
npm install
```

3. Set your TestMu AI username and access key in the environment variables. Click the **Access Key** button at the top-right of the Automation Dashboard to find them.



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

## Run Puppeteer Mocha Tests on TestMu AI


The sample test script searches for TestMu AI on DuckDuckGo and verifies the page title. Configure the capabilities, then run the suite with a single command.

1. To run the Puppeteer Mocha tests on TestMu AI, make the required changes to the `google.spec.js` file.

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

2. Run the following command to execute your test.

```bash
npm run test
```

3. Visit the TestMu AI Automation Dashboard to see the results of your Puppeteer Mocha tests.

## Using the Mocha Agent Skill With TestMu AI


The Mocha Agent Skill helps AI coding assistants generate production-ready Mocha test automation for TestMu AI. It is part of the [TestMu AI agent skills collection](https://github.com/LambdaTest/agent-skills/), and you can read the [Mocha Agent Skill reference on GitHub](https://github.com/LambdaTest/agent-skills/tree/main/mocha-skill).

The mocha-skill package includes the following files:

```text
mocha-skill/
├── SKILL.md
└── reference/
├── playbook.md
└── advanced-patterns.md
```

It provides structured guidance for the following areas:

* Project structure and setup
* Dependency configuration
* Local execution
* TestMu AI cloud execution
* Debugging patterns
* CI/CD integration

### Installing the Mocha Agent Skill


Clone the agent skills repository and copy the Mocha Agent Skill into your tool's skills directory.

```bash
# Clone the repo and copy the skill you need
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/mocha-skill .claude/skills/

# Or for Cursor / Copilot
cp -r agent-skills/mocha-skill .cursor/skills/
```


To install all available framework skills instead of only the Mocha Agent Skill, clone the repository directly into your tool's skills directory (for example, `.claude/skills/`, `.cursor/skills/`, `.gemini/skills/`, or `.agent/skills/`).


## Related Puppeteer Guides


Continue with the guides below to configure and scale your Puppeteer runs on TestMu AI.

* [Run your first Puppeteer test on TestMu AI](/support/docs/puppeteer-testing/)
* [Run Puppeteer tests with Jest](/support/docs/puppeteer-testing-with-jest/)
* [Configure Puppeteer capabilities](/support/docs/capabilities-for-puppeteer/)
