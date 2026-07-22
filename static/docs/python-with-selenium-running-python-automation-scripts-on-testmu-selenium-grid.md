# Selenium With Python

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Run your Python Selenium tests on the TestMu AI cloud grid across 3000+ browser and OS combinations. The setup is the same for every framework: you connect to the grid and pass your capabilities. This guide covers that shared flow once, then gives you a per-framework quickstart in the tabs below.

## Prerequisites

1. [Create a TestMu AI account](https://www.testmuai.com/register/) if you don't have one.
2. Get your **Username** and **Access Key** from the [TestMu AI Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard).
3. Install [Python](https://www.python.org/downloads/) and pip.
4. Install the Selenium client and WebDriver bindings, and (recommended) `virtualenv` to isolate dependencies.

## Set your credentials

Every framework authenticates the same way: your Username and Access Key are read from environment variables. Set them once. Pick your operating system:

  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

  {`set LT_USERNAME=${ YOUR_LAMBDATEST_USERNAME()}
set LT_ACCESS_KEY=${ YOUR_LAMBDATEST_ACCESS_KEY()}`}

## How the sample test works

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

## Run a test in your framework

Each tab lists the framework-specific pieces. Clone the matching repo (it contains the full, ready-to-run project), then run.

The standard-library `unittest` framework connects a remote WebDriver to the grid, with capabilities inline in the test.

1. Clone the [sample GitHub project](https://github.com/LambdaTest/Python-UnitTest-Selenium):

```bash
git clone https://github.com/LambdaTest/Python-UnitTest-Selenium
cd Python-UnitTest-Selenium
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

3. Run the test:

```bash
python lambdatest_test.py
```

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

3. Run a single test, or in parallel:

```bash
python tests/lt_sample_todo.py
pytest -s -n=2 tests/lt_sample_todo.py
```

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

3. Run a single test, or all in parallel:

```bash
make test_Windows_10_chrome_latest
make run_all_in_parallel
```

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

3. Run the test:

```bash
behave features/test.feature
```

## Legacy frameworks

This framework is deprecated and kept only for existing suites. For new projects, use one of the frameworks above.

- **Lettuce** (unmaintained since 2016, Python 2 only): [sample GitHub project](https://github.com/LambdaTest/sample-lettuce). Set your browser and OS in `config.json`, then run `python tests/lt_sample_todo.py`. Migrate to Behave or pytest.

## View your results

Your test results, including video, network logs, and command-by-command execution, appear on the [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build).
