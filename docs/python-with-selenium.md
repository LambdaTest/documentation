---
id: python-with-selenium-running-python-automation-scripts-on-testmu-selenium-grid
title: How to Run Selenium Tests With Python on TestMu AI
toc_max_heading_level: 2
hide_title: true
sidebar_label: "Python"
description: Run Python Selenium tests on the TestMu AI cloud grid across 10,000+ browsers. Covers unittest, pytest, Robot Framework, and Behave.
keywords:
- python selenium cloud testing
- run python selenium tests online
- selenium webdriver python tutorial
- python automation testing cloud grid
- cross browser testing python selenium
- selenium remote webdriver python
- pytest robot behave unittest selenium
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/python-with-selenium-running-python-automation-scripts-on-testmu-selenium-grid/
site_name: TestMu AI
slug: python-with-selenium-running-python-automation-scripts-on-testmu-selenium-grid/
canonical: https://www.testmuai.com/support/docs/python-with-selenium-running-python-automation-scripts-on-testmu-selenium-grid/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Selenium With Python",
          "item": `${BRAND_URL}/support/docs/python-with-selenium-running-python-automation-scripts-on-testmu-selenium-grid/`
        }]
      })
    }}
></script>

# How to Run Selenium Tests With Python on TestMu AI
---


Run your Python Selenium tests on the TestMu AI cloud grid across 10,000+ browser/device combinations. The setup is the same for every framework: you connect to the grid and pass your capabilities. This guide covers that shared flow once, then gives you a per-framework quickstart in the tabs below.

## Prerequisites
---

Have these in place before you run any of the frameworks below.

1. [Create a TestMu AI account](https://www.testmuai.com/register/) if you don't have one.
2. Get your **Username** and **Access Key** from the [TestMu AI Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard).
3. Install [Python](https://www.python.org/downloads/) and pip.
4. Install the Selenium client and WebDriver bindings, and (recommended) `virtualenv` to isolate dependencies.

## Set Your Credentials
---

Every framework authenticates the same way: your Username and Access Key are read from environment variables. Set them once. Pick your operating system:

<Tabs className="docs__val" groupId="os">

<TabItem value="macos" label="macOS / Linux" default>

<div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="win-cmd" label="Windows (CMD)">

<div className="lambdatest__codeblock">
    <CodeBlock className="language-batch">
  {`set LT_USERNAME=${ YOUR_LAMBDATEST_USERNAME()}
set LT_ACCESS_KEY=${ YOUR_LAMBDATEST_ACCESS_KEY()}`}
  </CodeBlock>
</div>

</TabItem>

</Tabs>

## How the Sample Test Works
---

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

:::tip
Use the [Capabilities Generator](https://www.testmuai.com/capabilities-generator/) to build a capabilities block for any browser, version, and OS combination.
:::

## Run a Test in Your Framework
---

Each tab lists the framework-specific pieces. Clone the matching repo (it contains the full, ready-to-run project), then run.

<Tabs className="docs__val" groupId="python-framework" queryString="framework">

<TabItem value="unittest" label="unittest" default>

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

3. Install the dependencies:

```bash
pip install -r requirements.txt
```

4. Run the test:

```bash
python lambdatest_test.py
```

The test then appears on the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build). A green status confirms it passed.

</TabItem>

<TabItem value="pytest" label="pytest">

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

</TabItem>

<TabItem value="robot" label="Robot">

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

</TabItem>

<TabItem value="behave" label="Behave">

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

</TabItem>

<TabItem value="lettuce" label="Lettuce">

:::warning Deprecated
Lettuce is unmaintained (since 2016, Python 2 only). For new projects, use the actively maintained **Behave** or **pytest** frameworks instead (see the Behave and pytest tabs).
:::

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

</TabItem>

</Tabs>

## View Your Results
---

Your test results, including video, network logs, and command-by-command execution, appear on the [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build).

**Next steps:** If this is your first run, walk through [running your first Selenium test](/support/docs/testmu-running-your-first-selenium-test/) end to end. From there, explore the full set of [Selenium automation capabilities](/support/docs/selenium-automation-capabilities/) you can pass to the grid, learn how to [debug your Selenium tests](/support/docs/debugging-options/), and organize and [filter your Selenium tests](/support/docs/filter-your-selenium-tests/) as your suite grows.

## Next Steps
---

Continue with these related guides:

- [Running Your First Selenium Test](/support/docs/testmu-running-your-first-selenium-test/)
- [Selenium Automation Capabilities](/support/docs/selenium-automation-capabilities/)
- [Debugging Options](/support/docs/debugging-options/)
- [Filter Your Selenium Tests](/support/docs/filter-your-selenium-tests/)

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={`${BRAND_URL}/support/docs/`}>
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
      Selenium With Python
      </span>
    </li>
  </ul>
</nav>
