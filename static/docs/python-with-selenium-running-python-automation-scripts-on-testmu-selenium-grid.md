# Selenium With Python

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Run your Python Selenium tests on the TestMu AI cloud grid across 10,000+ browser/device combinations. The setup is the same for every framework: you connect to the grid and pass your capabilities. This guide covers that shared flow once, then gives you a per-framework quickstart in the tabs below.

## Prerequisites

Have these in place before you run any of the frameworks below.

## Step 1: Clone the Sample Project

Every framework authenticates the same way: your Username and Access Key are read from environment variables. Set them once. Pick your operating system:

  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

  {`set LT_USERNAME=${ YOUR_LAMBDATEST_USERNAME()}
set LT_ACCESS_KEY=${ YOUR_LAMBDATEST_ACCESS_KEY()}`}

## Step 3: Configure Your Test Capabilities

Every framework below connects to the grid at `hub.lambdatest.com/wd/hub` and passes your browser and OS choices through a capabilities dictionary:

```python
capabilities = {
"build": "your build name",
"name": "your test name",
"platformName": "Windows 10",
"browserName": "Chrome",
"browserVersion": "latest",
}
```

What changes between frameworks is only how those capabilities are supplied: inline, a `conftest.py`, a `.robot` variables block, or a JSON config. That is what each tab covers.

Use the [Capabilities Generator](https://www.testmuai.com/capabilities-generator/) to build a capabilities block for any browser, version, and OS combination.

## Step 4: Run the Test

Execute the Python Selenium test from the command line.

```bash
python google-search-lambdatest.py
```

## Step 5: View Your Results

Check the test output on the console and the TestMu AI dashboard.

Visit the [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build) to view your test results. The dashboard provides:

- Text logs for each test step
- Screenshots captured during execution
- Video recordings of the full test session

## Run Python Selenium Tests Using Agent Skills

Each tab lists the framework-specific pieces. Clone the matching repo (it contains the full, ready-to-run project), then run.

The standard-library `unittest` framework connects a remote WebDriver to the grid, with capabilities inline in the test.

1. Clone the [sample GitHub project](https://github.com/LambdaTest/Python-UnitTest-Selenium):

```bash
git clone https://github.com/LambdaTest/Python-UnitTest-Selenium
cd Python-UnitTest-Selenium
```

Install all available framework skills at once by cloning the repository directly into your tool's skills directory (e.g., `.claude/skills/`, `.cursor/skills/`).
