# How to Run Selenium Tests With Python on TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Run your Python Selenium tests on the TestMu AI cloud grid across 10,000+ browser/device combinations. The setup is the same for every framework: you connect to the grid and pass your capabilities. This guide covers that shared flow once, then gives you a per-framework quickstart in the tabs below.

## Prerequisites

Complete these steps before running your first Python Selenium test.

Have these in place before you run any of the frameworks below.

1. [Create a TestMu AI account](https://www.testmuai.com/register/) if you don't have one.
2. Get your **Username** and **Access Key** from the [TestMu AI Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard).
3. Install [Python](https://www.python.org/downloads/) and pip.
4. Install the Selenium client and WebDriver bindings, and (recommended) `virtualenv` to isolate dependencies.

## Set Your Credentials

Clone the repository and install dependencies.

```bash
git clone https://github.com/LambdaTest/python-selenium-sample
cd python-selenium-sample
```

Install the Selenium driver using pip:
```bash
pip install selenium
export PYTHONWARNINGS="ignore:Unverified HTTPS request"   //Disable ssl warning
```

## Step 2: Set Your Credentials

Configure your credentials to connect to the TestMu AI Selenium Grid.

Set TestMu AI `Username` and `Access Key` in environment variables.

  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

  {`set LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
set LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

## How the Sample Test Works

Define browser, version, and OS settings for your test run.

In the Python script, update your test capabilities. This code passes browser, browser version, and operating system information, along with TestMu AI Selenium grid capabilities via the capabilities object.

```python
capabilities = {
"build": "your build name",
"name": "your test name",
"platformName": "Windows 10",
"browserName": "Chrome",
"browserVersion": "latest",
}
```

**Capabilities Generator**
Use the TestMu AI [Capabilities Generator](https://www.testmuai.com/capabilities-generator/) to auto-generate the capabilities class for your test requirements.

## Run a Test in Your Framework

Use AI coding assistants to generate and run Python Selenium tests with the TestMu AI Agent Skill.

The [selenium-skill](https://github.com/LambdaTest/agent-skills/tree/main/selenium-skill) is part of [TestMu AI Agent Skills](https://github.com/LambdaTest/agent-skills/) - structured packages that teach AI coding assistants how to write production-grade test automation.

Install the skill:

```bash
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/selenium-skill .claude/skills/

# For Cursor / Copilot
cp -r agent-skills/selenium-skill .cursor/skills/
```

2. Set your browser and OS in the capabilities dictionary:

```python
capabilities = {
"build": "UnitTest-Selenium-Sample",
"name": "UnitTest-Selenium-Test",
"platformName": "Windows 11",
"browserName": "Chrome",
"browserVersion": "latest",
}
```

3. Install the dependencies:

```bash
pip install -r requirements.txt
```

4. Run the test:

```bash
python lambdatest_test.py
```

The test then appears on the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build). A green status confirms it passed.

pytest keeps capabilities in `conftest.py` and runs in parallel via `pytest-xdist`.

1. Clone the [sample GitHub project](https://github.com/LambdaTest/pytest-selenium-sample):

```bash
git clone https://github.com/LambdaTest/pytest-selenium-sample
cd pytest-selenium-sample
```

2. Set your browser and OS in `conftest.py`:

```python title="conftest.py"
capabilities = {
"build": "Sample PY Build",
"platformName": "Windows 11",
"browserName": "Chrome",
"browserVersion": "latest",
}
```

3. Install the dependencies:

```bash
pip install -r requirements.txt
```

4. Run the test. The actual pytest run is the `pytest` command (which also enables parallel execution); the plain `python` invocation runs the script directly:

```bash
python tests/lt_sample_todo.py
pytest -s -n=2 tests/lt_sample_todo.py
```

The test then appears on the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build). A green status confirms it passed.

Robot Framework uses Selenium2Library, with capabilities and the grid URL declared as variables in a `.robot` file, run through a Makefile.

1. Clone the [sample GitHub project](https://github.com/LambdaTest/Robot-Selenium-Sample):

```bash
git clone https://github.com/LambdaTest/Robot-Selenium-Sample
cd Robot-Selenium-Sample
```

2. Set your browser and OS in the variables block of `common.robot`:

```robotframework title="common.robot"
*** Settings ***
Library  Selenium2Library

*** Variables ***
@{_tmp}
...  browserName: %{browserName},
...  platformName: %{platform},
...  browserVersion: %{version},
...  name: RobotFramework Lambda Test
${BROWSER}          %{ROBOT_BROWSER}
${CAPABILITIES}     ${EMPTY.join(${_tmp})}
${REMOTE_URL}       https://${KEY}@hub.lambdatest.com/wd/hub
```

3. Install the dependencies:

```bash
pip install -r requirements.txt
```

4. Run a single test, or all in parallel:

```bash
make test_Windows_10_chrome_latest
make run_all_in_parallel
```

The test then appears on the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build). A green status confirms it passed.

Behave is BDD for Python: feature files plus step definitions, with capabilities in a JSON config.

1. Clone the [sample GitHub project](https://github.com/LambdaTest/Python-Behave-Selenium):

```bash
git clone https://github.com/LambdaTest/Python-Behave-Selenium
cd Python-Behave-Selenium
```

2. Set your browser and OS in `config/config.json`:

```json title="config/config.json"
[
{
"platformName": "Windows 10",
"browserName": "chrome",
"browserVersion": "latest",
"build": "Behave Selenium Sample",
"name": "Behave Sample Test"
}
]
```

3. Install the dependencies:

```bash
pip install -r requirements.txt
```

4. Run the test:

```bash
behave features/test.feature
```

The test then appears on the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build). A green status confirms it passed.

**Deprecated**
Lettuce is unmaintained (since 2016, Python 2 only). For new projects, use the actively maintained **Behave** or **pytest** frameworks instead (see the Behave and pytest tabs).

Lettuce is a BDD framework for Python: feature files plus step definitions, with capabilities in a JSON config.

1. Clone the [sample GitHub project](https://github.com/LambdaTest/sample-lettuce):

```bash
git clone https://github.com/LambdaTest/sample-lettuce
cd sample-lettuce
```

2. Set your browser and OS in `config.json`.

3. Install the dependencies:

```bash
pip install -r requirements.txt
```

4. Run the test:

```bash
python tests/lt_sample_todo.py
```

The test then appears on the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build). A green status confirms it passed.

## View Your Results

Your test results, including video, network logs, and command-by-command execution, appear on the [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build).

**Next steps:** If this is your first run, walk through [running your first Selenium test](/support/docs/testmu-running-your-first-selenium-test/) end to end. From there, explore the full set of [Selenium automation capabilities](/support/docs/selenium-automation-capabilities/) you can pass to the grid, learn how to [debug your Selenium tests](/support/docs/debugging-options/), and organize and [filter your Selenium tests](/support/docs/filter-your-selenium-tests/) as your suite grows.

## Next Steps

Continue with these related guides:

- [Running Your First Selenium Test](/support/docs/testmu-running-your-first-selenium-test/)
- [Selenium Automation Capabilities](/support/docs/selenium-automation-capabilities/)
- [Debugging Options](/support/docs/debugging-options/)
- [Filter Your Selenium Tests](/support/docs/filter-your-selenium-tests/)
