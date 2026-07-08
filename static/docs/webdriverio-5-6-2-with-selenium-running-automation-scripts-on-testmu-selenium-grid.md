# Selenium With WebDriverIO 5.6.2

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Run WebDriverIO 5.6.2 tests on the TestMu AI cloud grid. This guide covers setup, running a sample test, configuring capabilities, and testing locally hosted pages.

**Outdated Version**
This guide covers WebDriverIO 5.6.2. The current version is 8+. For the latest WebDriverIO guide, see [Selenium With WebDriverIO](/support/docs/webdriverio-with-selenium-running-webdriverio-automation-scripts-on-testmu-selenium-grid/).

**Sample repo**
All the code used in this guide is available in the sample repository.

 View on GitHub

## Prerequisites

Complete these steps before running WebDriverIO 5.6.2 Selenium tests on TestMu AI.

1. Create a [TestMu AI account](https://www.testmuai.com/register/?redirectTo=https://accounts.lambdatest.com/dashboard) and get your username and access key from the dashboard.
2. Install **NodeJS** v6 or newer from [nodejs.org](https://nodejs.org/en/).
3. Install **WebDriverIO**: `npm install webdriverio`
4. Download [Selenium JavaScript bindings](http://www.seleniumhq.org/download/) from the official website.

## Step 1: Clone the Sample Project

Clone the TestMu AI WebDriverIO Selenium sample repository to your local machine.

```bash
git clone https://github.com/LambdaTest/webdriverio-selenium
cd webdriverio-selenium
```

Install the required dependencies:
```bash
npm i selenium-webdriver
npm install
```

## Step 2: Set Your Credentials

Set your TestMu AI username and access key as environment variables.

  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

  {`set LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
set LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

## Step 3: Configure Your Test Capabilities

Update the capabilities in the config file to define the browser and platform settings.

``` js
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
version:"64.0",
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

framework: 'mocha',
mochaOpts: {
ui: 'bdd'
}
}
```

Generate capabilities for your test requirements with the [Capabilities Generator](https://www.testmuai.com/capabilities-generator/).

## Step 4: Run the Test

Execute the test using the following command.

```bash
npm run single
```

## Step 5: View Your Results

After running the test, view your results on the [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build).

The dashboard provides:
- Video recordings of each test session
- Screenshots captured at each step
- Console logs from the browser
- Network logs for debugging
- Detailed command logs

## Run WebDriverIO 5.6.2 Tests Using Agent Skills

Use AI coding assistants to generate and run WebDriverIO 5.6.2 tests with the TestMu AI Agent Skill.

The [webdriverio-skill](https://github.com/LambdaTest/agent-skills/tree/main/webdriverio-skill) is part of [TestMu AI Agent Skills](https://github.com/LambdaTest/agent-skills/) - structured packages that teach AI coding assistants how to write production-grade test automation.

Install the skill:

```bash
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/webdriverio-skill .claude/skills/

# For Cursor / Copilot
cp -r agent-skills/webdriverio-skill .cursor/skills/
```

Install all available framework skills at once by cloning the repository directly into your tool's skills directory (e.g., `.claude/skills/`, `.cursor/skills/`).
