# Selenium With Python Unittest

Run Python Unittest tests on the TestMu AI cloud grid. This guide covers setup, running a sample test, configuring capabilities, and testing locally hosted pages.

**Sample repo**
All the code used in this guide is available in the sample repository.

 View on GitHub

## Prerequisites

Complete these steps before running your first Unittest Selenium test.

1. Install the latest Python build from the [official website](https://www.python.org/downloads/).
2. Verify that **pip** is installed in your system. Install **pip** from [pip documentation](https://pip.pypa.io/en/stable/installation/).
3. Download the latest **Selenium Client** and its **WebDriver bindings** from the [official website](https://www.selenium.dev/downloads/).
4. Install **virtualenv** to isolate the build from other setups and ensure tests run with the specified module versions.
```bash
pip install virtualenv
```

## Step 1: Clone the Sample Project

Clone the repository and set up the environment.

```bash
git clone https://github.com/LambdaTest/Python-UnitTest-Selenium
cd Python-UnitTest-Selenium
```

Create a virtual environment and activate it:
```bash
virtualenv venv
source venv/bin/activate
```

Install the required packages:
```bash
pip install -r requirements.txt
```

## Step 2: Set Your Credentials

Configure your credentials to connect to the TestMu AI Selenium Grid.

Set TestMu AI `Username` and `Access Key` in environment variables.

  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

  {`set LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
set LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

## Step 3: Configure Your Test Capabilities

Define browser, version, and OS settings for your test run.

In the test script, update your test capabilities. This code passes browser, browser version, and operating system information, along with TestMu AI Selenium grid capabilities via the capabilities object.

```python
capabilities = {
"build": "UnitTest-Selenium-Sample",
"name": "UnitTest-Selenium-Test",
"platformName": "Windows 11",
"browserName": "Chrome",
"browserVersion": "latest",
}
```

**Capabilities Generator**
Use the TestMu AI [Capabilities Generator](https://www.testmuai.com/capabilities-generator/) to auto-generate the capabilities class for your test requirements.

## Step 4: Run the Test

Execute the Unittest Selenium test from the command line.

```bash
python lambdatest_test.py
```

## Step 5: View Your Results

Check the test output on the console and the TestMu AI dashboard.

Visit the [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build) to view your test results. The dashboard provides:

- Text logs for each test step
- Screenshots captured during execution
- Video recordings of the full test session

## Run Python Unittest Tests Using Agent Skills

Use AI coding assistants to generate and run Python Unittest tests with the TestMu AI Agent Skill.

The [unittest-skill](https://github.com/LambdaTest/agent-skills/tree/main/unittest-skill) is part of [TestMu AI Agent Skills](https://github.com/LambdaTest/agent-skills/) - structured packages that teach AI coding assistants how to write production-grade test automation.

Install the skill:

```bash
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/unittest-skill .claude/skills/

# For Cursor / Copilot
cp -r agent-skills/unittest-skill .cursor/skills/
```

Install all available framework skills at once by cloning the repository directly into your tool's skills directory (e.g., `.claude/skills/`, `.cursor/skills/`).
