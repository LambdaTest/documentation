# Selenium With AngularJS and Karma

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Run AngularJS tests with Karma on the TestMu AI cloud grid. This guide covers setup, running a sample test, configuring capabilities, and testing locally hosted pages.

**Deprecated Framework**
AngularJS reached end-of-life in December 2021. Consider migrating to Angular with [Karma](/support/docs/karma-integration-with-testmu/) or [Playwright](/support/docs/playwright-testing/). This guide is maintained for existing users.

**Sample repo**
All the code used in this guide is available in the sample repository.

 View on GitHub

## Prerequisites

Complete these steps before running AngularJS tests with Karma on TestMu AI.

1. Create a [TestMu AI account](https://www.testmuai.com/register/?redirectTo=https://accounts.lambdatest.com/dashboard) and get your username and access key from the dashboard.
2. Install **NodeJS** v6 or newer from [nodejs.org](https://nodejs.org/en/).
3. Install **npm** and upgrade to the latest version: `npm install npm@latest -g`
4. Install [Angular CLI](https://angular.io/cli): `npm install -g @angular/cli`
5. Download [Selenium JavaScript bindings](https://www.selenium.dev/downloads/) from the official website.

## Step 1: Clone the Sample Project

Clone the TestMu AI AngularJS Karma sample repository to your local machine.

```bash
git clone https://github.com/LambdaTest/angular-karma-sample
cd angular-karma-sample
```

Install the required dependencies:
```bash
npm install
```

## Step 2: Set Your Credentials

Set your TestMu AI username and access key as environment variables.

  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

  {`set LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
set LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

## Step 3: Configure Your Test Capabilities

Update the capabilities in the `karma.conf.js` file to define the browser and platform settings.

```js
customLaunchers: {
chrome: {
base: 'WebDriver',
config: webdriverConfig,
browserName: 'chrome',
platform: 'windows 10',
version: '71.0',
name: 'Karma With Heartbeat',
tunnel: true, // In case karma is running on local machine
video: true, // capture video for your test
user: process.env.LT_USERNAME,
accessKey: process.env.LT_ACCESS_KEY,
pseudoActivityInterval: 15000 // 15000 ms heartbeat to avoid timeouts
}
}
```

Generate capabilities for your test requirements with the [Capabilities Generator](https://www.testmuai.com/capabilities-generator/).

## Step 4: Run the Test

Execute the test using the following command.

```bash
karma start karma.conf.js
```

Or run the test using:
```bash
npm test
```

**Parallel tests:**
```bash
ng test
```

## Step 5: View Your Results

After running the test, view your results on the [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build).

The dashboard provides:
- Video recordings of each test session
- Screenshots captured at each step
- Console logs from the browser
- Network logs for debugging
- Detailed command logs

## Run AngularJS with Karma Tests Using Agent Skills

Use AI coding assistants to generate and run AngularJS with Karma tests with the TestMu AI Agent Skill.

The [karma-skill](https://github.com/LambdaTest/agent-skills/tree/main/karma-skill) is part of [TestMu AI Agent Skills](https://github.com/LambdaTest/agent-skills/) - structured packages that teach AI coding assistants how to write production-grade test automation.

Install the skill:

```bash
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/karma-skill .claude/skills/

# For Cursor / Copilot
cp -r agent-skills/karma-skill .cursor/skills/
```

Install all available framework skills at once by cloning the repository directly into your tool's skills directory (e.g., `.claude/skills/`, `.cursor/skills/`).

