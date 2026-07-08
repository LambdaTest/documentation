# Selenium With WebDriverIO

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/llms.txt).

Run WebDriverIO tests on the TestMu AI cloud grid. This guide covers setup, running a sample test, configuring capabilities, and testing locally hosted pages.

**Sample repo**
All the code used in this guide is available in the sample repository.

 View on GitHub

## Prerequisites

Complete these steps before running WebDriverIO Selenium tests on TestMu AI.

1. Create a [TestMu AI account](https://www.testmuai.com/register/?redirectTo=https://accounts.lambdatest.com/dashboard) and get your username and access key from the dashboard.
2. Install **NodeJS** v6 or newer from [nodejs.org](https://nodejs.org/en/).
3. Install **npm** from the [official npm website](https://www.npmjs.com/).
4. Download [Selenium JavaScript bindings](http://www.seleniumhq.org/download/) from the official website.

## Step 1: Clone the Sample Project

Clone the TestMu AI WebDriverIO Selenium sample repository to your local machine.

```bash
git clone https://github.com/LambdaTest/webdriverio-selenium.git
cd webdriverio-selenium
```

Install the required dependencies:
```bash
npm i webdriverio
npm i selenium-webdriver
npm i
```

## Step 2: Set Your Credentials

Set your TestMu AI username and access key as environment variables.

  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

  {`set LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
set LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

## Step 3: Configure Your Test Capabilities

Update the capabilities in `conf/single.conf.js` to define the browser and platform settings.

```js
//single.conf.js
user= process.env.LT_USERNAME || "<your username>",
key= process.env.LT_ACCESS_KEY || "<your accessKey>",

exports.config = {

updateJob: false,
user,
key,
specs: [
'./tests/specs/single_test.js'
],
exclude: [],

capabilities: [{
browserName: 'chrome',
browserVersion: 'latest',
platformName: 'Windows 10',
name:"Test webdriverio",
build:"build 1",
}],
sync: true,
logLevel: 'info',
coloredLogs: true,
screenshotPath: './errorShots/',
baseUrl: '',
waitforTimeout: 100000,
connectionRetryTimeout: 90000,
connectionRetryCount: 1,
path: '/wd/hub',
hostname: 'hub.lambdatest.com',
port: 80,

beforeSession: function (config, capabilities, specs) {
capabilities.name=specs[0].split(/(\\|\/)/g).pop() || undefined;
},
after: function (result, capabilities, specs) {
driver.execute("lambda-status=".concat(result==0?"passed":"failed"),undefined);
},

framework: 'mocha',
mochaOpts: {
ui: 'bdd'
}
}
```

Generate capabilities for your test requirements with the [Capabilities Generator](https://www.testmuai.com/capabilities-generator/).

## Step 4: Run the Test

Execute the test using the following command.

**Single test:**
```bash
npm run single
```

**Parallel tests:**
```bash
npm run parallel
```

## Step 5: View Your Results

After running the test, view your results on the [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build).

The dashboard provides:
- Video recordings of each test session
- Screenshots captured at each step
- Console logs from the browser
- Network logs for debugging
- Detailed command logs

## Run WebDriverIO Tests Using Agent Skills

Use AI coding assistants to generate and run WebDriverIO tests with the TestMu AI Agent Skill.

The [webdriverio-skill](https://github.com/LambdaTest/agent-skills/tree/main/webdriverio-skill) is part of [TestMu AI Agent Skills](https://github.com/LambdaTest/agent-skills/) - structured packages that teach AI coding assistants how to write production-grade test automation.

Install the skill:

```bash
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/webdriverio-skill .claude/skills/

# For Cursor / Copilot
cp -r agent-skills/webdriverio-skill .cursor/skills/
```

Install all available framework skills at once by cloning the repository directly into your tool's skills directory (e.g., `.claude/skills/`, `.cursor/skills/`).
