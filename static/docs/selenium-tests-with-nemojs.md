# Selenium With NemoJS

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Run NemoJS tests on the TestMu AI cloud grid. This guide covers setup, running a sample test, configuring capabilities, and testing locally hosted pages.

**Sample repo**
All the code used in this guide is available in the sample repository.

 View on GitHub

## Prerequisites

Complete these steps before running NemoJS Selenium tests on TestMu AI.

1. Create a [TestMu AI account](https://www.testmuai.com/register/?redirectTo=https://accounts.lambdatest.com/dashboard) and get your username and access key from the dashboard.
2. Install **NodeJS** from [nodejs.org](https://nodejs.org/en/).
3. Install **npm**: `npm init`
4. Install **NemoJS**: `npm install --save-dev nemo`

## Step 1: Clone the Sample Project

Clone the TestMu AI NemoJS sample repository to your local machine.

```bash
git clone https://github.com/LambdaTest/Nemo-Lambdatest-sample
cd Nemo-Lambdatest-sample
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

Set the environment variables in the `nemo.config.js` file with your TestMu AI Username and Access Key.

## Step 3: Configure Your Test Capabilities

Update the capabilities in `nemo.config.js` to define the browser and platform settings.

``` js
"withCapabilities": [{
"build": "LT Nemo Sample Tests",
"name": "LT Nemo sample test",
"platformName" : "Windows 10",
"browserName" : "Chrome",
"browserVersion" : "latest",
"user": "env:LT_USERNAME",
"accessKey": "env:LT_ACCESS_KEY"
}]
```

Generate capabilities for your test requirements with the [Capabilities Generator](https://www.testmuai.com/capabilities-generator/).

## Step 4: Run the Test

Execute the test using the following command.

**Single test:**
``` js
npx nemo -P chrome
```

**Parallel tests:**
``` js
npx nemo -P chrome,chrome_2,firefox
```

## Step 5: View Your Results

After running the test, view your results on the [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build).

The dashboard provides:
- Video recordings of each test session
- Screenshots captured at each step
- Console logs from the browser
- Network logs for debugging
- Detailed command logs

## Run NemoJS Tests Using Agent Skills

Use AI coding assistants to generate and run NemoJS tests with the TestMu AI Agent Skill.

The [nemojs-skill](https://github.com/LambdaTest/agent-skills/tree/main/nemojs-skill) is part of [TestMu AI Agent Skills](https://github.com/LambdaTest/agent-skills/) - structured packages that teach AI coding assistants how to write production-grade test automation.

Install the skill:

```bash
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/nemojs-skill .claude/skills/

# For Cursor / Copilot
cp -r agent-skills/nemojs-skill .cursor/skills/
```

Install all available framework skills at once by cloning the repository directly into your tool's skills directory (e.g., `.claude/skills/`, `.cursor/skills/`).
