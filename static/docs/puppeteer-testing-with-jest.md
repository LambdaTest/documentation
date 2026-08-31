# How to Run Puppeteer Tests With Jest on TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

If you write Puppeteer tests with Jest, you can run the same specs across real browsers and operating systems on TestMu AI instead of a single local machine. This gives you Jest's structured output and assertions on a browser farm, whether you target a single test or an entire suite. You connect Puppeteer to the TestMu AI cloud grid through a `browserWSEndpoint` in your Jest configuration, then run the suite with the standard `npm run test` command.

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

## Run Puppeteer Jest Tests on TestMu AI


The sample test script searches for TestMu AI on DuckDuckGo and verifies the page title. Configure the capabilities, then run the suite with a single command.

1. To run the Puppeteer tests using Jest on TestMu AI, make the required changes to the `jest-puppeteer.config.js` file.

```js
const caps_chrome = {
browserName    : 'Chrome',
browserVersion : 'latest',
'LT:Options'   : {
platform   : 'Windows 10',
build      : 'Sample Puppeteer-Jest',
name       : 'Puppeteer-jest test on Chrome',
resolution : '1366x768',
user       : process.env.LT_USERNAME,
accessKey  : process.env.LT_USER_KEY,
network    : true
}
};

const caps_edge = {
browserName    : 'MicrosoftEdge',
browserVersion : 'latest',
'LT:Options'   : {
platform   : 'Windows 10',
build      : 'Sample Puppeteer-Jest',
name       : 'Puppeteer-jest test on Edge',
resolution : '1366x768',
user       : process.env.LT_USERNAME,
accessKey  : process.env.LT_USER_KEY,
network    : true
}
};

module.exports = {
connect : {
browserWSEndpoint : `wss://cdp.lambdatest.com/puppeteer?capabilities=${encodeURIComponent(
JSON.stringify(caps_chrome)
)}`
}
};

```

2. Run the following command to execute your test.

```bash
npm run test
```

3. Visit the TestMu AI Automation Dashboard to see the results of your Puppeteer Jest tests.

## Using the Jest Agent Skill With TestMu AI


The Jest Agent Skill helps AI coding assistants generate production-ready Jest test automation for TestMu AI. It is part of the [TestMu AI agent skills collection](https://github.com/LambdaTest/agent-skills/), and you can read the [Jest Agent Skill reference on GitHub](https://github.com/LambdaTest/agent-skills/tree/main/jest-skill).

The jest-skill package includes the following files:

```text
jest-skill/
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

### Installing the Jest Agent Skill


Clone the agent skills repository and copy the Jest Agent Skill into your tool's skills directory.

```bash
# Clone the repo and copy the skill you need
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/jest-skill .claude/skills/

# Or for Cursor / Copilot
cp -r agent-skills/jest-skill .cursor/skills/
```


To install all available framework skills instead of only the Jest Agent Skill, clone the repository directly into your tool's skills directory (for example, `.claude/skills/`, `.cursor/skills/`, `.gemini/skills/`, or `.agent/skills/`).


## Related Puppeteer Guides


Continue with the guides below to configure and scale your Puppeteer runs on TestMu AI.

* [Run your first Puppeteer test on TestMu AI](/support/docs/puppeteer-testing/)
* [Run Puppeteer tests with Mocha](/support/docs/puppeteer-testing-with-mocha/)
* [Configure Puppeteer capabilities](/support/docs/capabilities-for-puppeteer/)
