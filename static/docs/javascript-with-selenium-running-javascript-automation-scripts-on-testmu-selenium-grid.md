# Selenium With JavaScript

Run JavaScript Selenium tests on the TestMu AI cloud grid. This guide covers setup, running a sample test, configuring capabilities, and testing locally hosted pages.

**Sample repo**
All the code used in this guide is available in the sample repository.

 View on GitHub

## Prerequisites

Complete these steps before running JavaScript Selenium tests on TestMu AI.

1. Create a [TestMu AI account](https://www.testmuai.com/register/?redirectTo=https://accounts.lambdatest.com/dashboard) and get your username and access key from the dashboard.
2. Install **NodeJS** v6 or newer from [nodejs.org](https://nodejs.org/en/).
3. Install **npm** from the [official npm website](https://www.npmjs.com/).
4. Download [Selenium JavaScript bindings](https://www.selenium.dev/downloads/) from the official website.

## Step 1: Clone the Sample Project

Clone the TestMu AI JavaScript Selenium sample repository to your local machine.

```bash
git clone https://github.com/LambdaTest/nodejs-selenium-sample
cd nodejs-selenium-sample
```

Install the required dependencies:
```bash
npm install selenium-webdriver
```

## Step 2: Set Your Credentials

Set your TestMu AI username and access key as environment variables.

  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

  {`set LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
set LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

## Step 3: Configure Your Test Capabilities

Update the capabilities object in your test script to define the browser and platform settings.

```js
// index.js
const capabilities = {
build: 'NodeJS build',      // Name of the build
name: 'Test 1',             // Name of the test
platformName: 'Windows 10', // Name of Operating System
browserName: 'chrome',      // Name of the browser
browserVersion: 'latest',   // Version of the browser
resolution: '1280x800',     // Resolution of the screen
network: true,              // Enable to capture browser network logs
visual: true,               // Enable to capture screenshot on every command
console: true,              // Enable to capture the console log
video: true                 // Enable to capture the video recording of the test
}
```

Generate capabilities for your test requirements with the [Capabilities Generator](https://www.testmuai.com/capabilities-generator/).

## Step 4: Run the Test

Execute the test using one of the following commands.

```bash
npm test
```

Or run the file directly:

```bash
node index.js
```

## Step 5: View Your Results

After running the test, view your results on the [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build).

The dashboard provides:
- Video recordings of each test session
- Screenshots captured at each step
- Console logs from the browser
- Network logs for debugging
- Detailed command logs

## Run JavaScript Selenium Tests Using Agent Skills

Use AI coding assistants to generate and run JavaScript Selenium tests with the TestMu AI Agent Skill.

The [selenium-skill](https://github.com/LambdaTest/agent-skills/tree/main/selenium-skill) is part of [TestMu AI Agent Skills](https://github.com/LambdaTest/agent-skills/) - structured packages that teach AI coding assistants how to write production-grade test automation.

Install the skill:

```bash
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/selenium-skill .claude/skills/

# For Cursor / Copilot
cp -r agent-skills/selenium-skill .cursor/skills/
```

Install all available framework skills at once by cloning the repository directly into your tool's skills directory (e.g., `.claude/skills/`, `.cursor/skills/`).
