# Selenium With Mocha

Run Mocha tests on the TestMu AI cloud grid. This guide covers setup, running a sample test, configuring capabilities, and testing locally hosted pages.

**Sample repo**
All the code used in this guide is available in the sample repository.

 View on GitHub

## Prerequisites

Complete these steps before running Mocha Selenium tests on TestMu AI.

1. Create a [TestMu AI account](https://www.testmuai.com/register/?redirectTo=https://accounts.lambdatest.com/dashboard) and get your username and access key from the dashboard.
2. Install **NodeJS** v6 or newer from [nodejs.org](https://nodejs.org/en/).
3. Install **npm** from the [official npm website](https://www.npmjs.com/).
4. Download [Selenium JavaScript bindings](https://www.selenium.dev/downloads/) from the official website.

## Step 1: Clone the Sample Project

Clone the TestMu AI Mocha Selenium sample repository to your local machine.

```bash
git clone https://github.com/LambdaTest/mocha-selenium-sample
cd mocha-selenium-sample
```

Install the required dependencies:
```bash
npm i
npm install selenium-webdriver
```

## Step 2: Set Your Credentials

Set your TestMu AI username and access key as environment variables.

* For **macOS/Linux**:

{`export LT_USERNAME= "${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY= "${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

* For **Windows**:

{`set LT_USERNAME= "${ YOUR_LAMBDATEST_USERNAME()}"
set LT_ACCESS_KEY= "${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

## Step 3: Configure Your Test Capabilities

Update the capabilities in `conf/single.conf.js` to define the browser and platform settings.

```js
exports.capabilities = {
'build': 'Mocha-Selenium-Sample', //Build name
'name': 'Your Test Name', // Test name
'platformName':'Windows 10', // OS name
'browserName': 'chrome', // Browser name
'browserVersion': 'latest', // Browser version
'visual': false,  // To take step by step screenshot
'network':false,  // To capture network Logs
'console':false, // To capture console logs.
'tunnel': false // If you want to run the localhost than change it to true
};
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

## Run Mocha Tests Using Agent Skills

Use AI coding assistants to generate and run Mocha tests with the TestMu AI Agent Skill.

The [mocha-skill](https://github.com/LambdaTest/agent-skills/tree/main/mocha-skill) is part of [TestMu AI Agent Skills](https://github.com/LambdaTest/agent-skills/) - structured packages that teach AI coding assistants how to write production-grade test automation.

Install the skill:

```bash
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/mocha-skill .claude/skills/

# For Cursor / Copilot
cp -r agent-skills/mocha-skill .cursor/skills/
```

Install all available framework skills at once by cloning the repository directly into your tool's skills directory (e.g., `.claude/skills/`, `.cursor/skills/`).
