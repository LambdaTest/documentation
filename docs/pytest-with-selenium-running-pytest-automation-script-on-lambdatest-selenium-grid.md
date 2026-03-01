---
id: pytest-with-selenium-running-pytest-automation-script-on-lambdatest-selenium-grid
title: PyTest Automation:Run PyTest Automation Testing on Selenium Grid Cloud
hide_title: true
sidebar_label: pytest
description: Learn how to run PyTest Selenium automated test scripts (with examples) on TestMu AI Selenium Grid having 3000+ different desktop and mobile browsers on cloud.
keywords:
  - pytest
  - pytest selenium
  - python selenium
  - pytest automation testing
  - selenium webdriver python
  - selenium python testing tutorial
  - python selenium framework
  - testmu ai python
  - framework on testmu ai
url: https://www.testmuai.com/support/docs/pytest-with-selenium-running-pytest-automation-script-on-testmu-selenium-grid/
site_name: TestMu AI
slug: pytest-with-selenium-running-pytest-automation-script-on-testmu-selenium-grid/
canonical: https://www.testmuai.com/support/docs/pytest-with-selenium-running-pytest-automation-script-on-testmu-selenium-grid/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import CookieTrackingLogin from '@site/src/component/CookieTracking';

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
          "name": "PyTest Automation :Run PyTest Automation Testing on TestMu AI Selenium Grid",
          "item": `${BRAND_URL}/support/docs/pytest-with-selenium-running-pytest-automation-script-on-testmu-selenium-grid/`
        }]
      })
    }}
></script>

# PyTest with Selenium: Tutorial to Run Your First Test on <BrandName />
* * *

In this topic, you will learn how to configure and run your Python automation testing scripts on [<BrandName /> Selenium cloud platform](https://www.lambdatest.com/selenium-automation) **Python** framework **PyTest**.

## Objective
***
By the end of this topic, you will be able to:

1. Set up an environment for testing your hosted web pages using **PyTest** framework with **Selenium**.
2. Understand and configure the core capabilities required for your Selenium test suite.
3. Test your locally hosted pages on <BrandName /> platform.
4. Explore advanced features of <BrandName />.

>**Note:** All the code samples in this documentation can be found in the [<BrandName />'s Repository on GitHub](https://github.com/LambdaTest/pytest-selenium-sample). You can either download or clone the repository to quickly run your tests.

## Prerequisites to Perform PyTest automation testing With <BrandName /> Selenium Grid
* * *
Before you can start performing **Python** automation testing using **pytest**, you would need to:

* Install the latest Python build from the [official website](https://www.python.org/downloads/). We recommend using the latest version.
* Make sure **pip** is installed in your system. You can install **pip** from [here](https://pip.pypa.io/en/stable/installation/).
* Download the latest **Selenium Client** and its **WebDriver bindings** from the [official website](https://www.selenium.dev/downloads/). Latest versions of **Selenium Client** and **WebDriver** are ideal for running your automation script on <BrandName /> Selenium cloud grid.
* Install **virtualenv** which is the recommended way to run your tests. It will isolate the build from other setups you may have running and ensure that the tests run with the specified versions of the modules.
```bash
pip install virtualenv
```
### Installing Selenium Dependencies and Tutorial Repo

**Step 1:** Clone the <BrandName />’s [pytest-selenium-sample repository](https://github.com/LambdaTest/pytest-selenium-sample) and navigate to the code directory as shown below:
```bash
git clone https://github.com/LambdaTest/pytest-selenium-sample
cd pytest-selenium-sample
```
**Step 2:** Create a virtual environment in your project folder the environment name is arbitrary.
```bash
virtualenv venv
```
**Step 3:** Activate the environment.
```bash
source venv/bin/activate
```
**Step 4:** Install the [required packages](https://github.com/LambdaTest/pytest-selenium-sample/blob/master/requirements.txt) from the cloned project directory:
```bash
pip install -r requirements.txt
```
### Setting up Your Authentication
Make sure you have your <BrandName /> credentials with you to run test automation scripts on <BrandName /> Selenium Grid. You can obtain these credentials from the [<BrandName /> Automation Dashboard](https://automation.lambdatest.com/build) or through <a href="https://accounts.lambdatest.com/login" onClick={CookieTrackingLogin}><BrandName /> Profile</a>.

**Step 5:** Set <BrandName /> `Username` and `Access Key` in environment variables.
  * For **Linux/macOS**:
  ```bash
  export LT_USERNAME="YOUR_USERNAME" export LT_ACCESS_KEY="YOUR ACCESS KEY"
  ```
  * For **Windows**:
  ```bash
  set LT_USERNAME="YOUR_USERNAME" set LT_ACCESS_KEY="YOUR ACCESS KEY"
  ```

## Run Your First Test 
***
### Sample Test Case
Let’s check the sample test script in tests/lt_sample_todo.py from the cloned repo.
```python
# tests/lt_sample_todo.py

import pytest
import sys

@pytest.mark.usefixtures('driver')
class TestLink:

    def test_title(self, driver):
        """
        Verify click and title of page
        :return: None
        """
        driver.get('https://lambdatest.github.io/sample-todo-app/')
        driver.find_element_by_name("li1").click()
        driver.find_element_by_name("li2").click()

        title = "Sample page - lambdatest.com"
        assert title == driver.title


    def test_item(self, driver):
        """
        Verify item submission
        :return: None
        """
        driver.get('https://lambdatest.github.io/sample-todo-app/')
        sample_text = "Happy Testing at LambdaTest"
        email_text_field = driver.find_element_by_id("sampletodotext")
        email_text_field.send_keys(sample_text)

        driver.find_element_by_id("addbutton").click()
        
        li6 = driver.find_element_by_name("li6")
        sys.stderr.write(li6)
        # assert sample_text in li6
```
### Configuration of Your Test Capabilities

**Step 6:**  In the `conftest.py` file, you need to update your test capabilities. In this code, we are passing browser, browser version, and operating system information, along with <BrandName /> Selenium grid capabilities via capabilities object. The capabilities that we have used in the code are defined as:
```python
capabilities = {
        "build": "Sample PY Build",
        "platformName": "Windows 11",
        "browserName": "Chrome",
        "browserVersion": "latest",
}
```
> You can generate capabilities for your test requirements with the help of our inbuilt **<a href={`${BRAND_URL}/capabilities-generator/`}>Capabilities Generator Tool</a>**.

### Executing the Test

**Step 7:** You would need to navigate to `tests` directory and execute the below command in your terminal/cmd.
```bash
cd tests //navigate to tests directory
python lt_sample_todo.py
```
Your test results would be displayed on the test console (or command-line interface if you are using terminal/cmd) and on <BrandName /> automation dashboard. [<BrandName /> Automation Dashboard](https://automation.lambdatest.com/build) will help you view all your text logs, screenshots and video recording for your entire automation tests.

## Run Your Parallel Tests Using PyTest Framework
***
### Executing Parallel Tests Using PyTest
To run parallel tests using PyTest, we would have to execute the below command in the terminal:
```bash
pytest -s -n=2 tests/lt_sample_todo.py
```
In the above command, we have used -s to disable the output capture & -n is used to specify the number of parallel test execution. Your test results would be displayed on the test console (or command-line interface if you are using terminal/cmd) and on [<BrandName /> automation dashboard](https://automation.lambdatest.com/build).

## Testing Locally Hosted or Privately Hosted Projects
***
You can test your locally hosted or privately hosted projects with [<BrandName /> Selenium grid cloud](https://www.lambdatest.com/selenium-automation) using <BrandName /> Tunnel app. All you would have to do is set up an SSH tunnel using <BrandName /> Tunnel app and pass toggle `tunnel = True` via desired capabilities. <BrandName /> Tunnel establishes a secure SSH protocol based tunnel that allows you in testing your locally hosted or privately hosted pages, even before they are made live.

>Refer our [<BrandName /> Tunnel documentation](/support/docs/testing-locally-hosted-pages/) for more information.

Here’s how you can establish <BrandName /> Tunnel.

>Download the binary file of:
>* [<BrandName /> Tunnel for Windows](https://downloads.lambdatest.com/tunnel/v3/windows/64bit/LT_Windows.zip)
* [<BrandName /> Tunnel for Mac](https://downloads.lambdatest.com/tunnel/v3/mac/64bit/LT_Mac.zip)
* [<BrandName /> Tunnel for Linux](https://downloads.lambdatest.com/tunnel/v3/linux/64bit/LT_Linux.zip)

Open command prompt and navigate to the binary folder.

Run the following command:
```bash
LT -user {user’s login email} -key {user’s access key}
```
So if your user name is lambdatest@example.com and key is 123456, the command would be:
```bash
LT -user lambdatest@example.com -key 123456
```
Once you are able to connect **<BrandName /> Tunnel** successfully, you would just have to pass on tunnel capabilities in the code shown below :

**Tunnel Capability**
```bash
"tunnel" : true
```
## Using the Pytest Agent Skill with TestMu AI
***

The [pytest-skill](https://github.com/LambdaTest/agent-skills/tree/main/pytest-skill) is a part of [TestMu AI Skills](https://github.com/LambdaTest/agent-skills/) that guide AI coding assistants in generating production-ready test automation.

The pytest-skill package includes:

```
pytest-skill/
├── SKILL.md
└── reference/
    ├── playbook.md
    └── advanced-patterns.md
```

It provides structured guidance for:

* Project structure and setup
* Dependency configuration
* Local execution
* TestMu AI cloud execution
* Debugging patterns
* CI/CD integration


### Installing Pytest Agent Skill
***

Install a Pytest Agent Skill using the command below:

```
# Clone the repo and copy the skill you need
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/pytest-skill .claude/skills/

# Or for Cursor / Copilot
cp -r agent-skills/pytest-skill .cursor/skills/
```

**Note**: If you prefer installing all available framework skills instead of only pytest-skill, clone the repository directly into your tool's skills directory (for example, .claude/skills/, .cursor/skills/, .gemini/skills/, or .agent/skills/).


## Additional Links
***
* [Advanced Configuration for Capabilities](/support/docs/selenium-automation-capabilities/)
* [How to test locally hosted apps](/support/docs/testing-locally-hosted-pages/)
* [How to integrate <BrandName /> with CI/CD](/support/docs/integrations-with-ci-cd-tools/)


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
      PyTest Automation Testing
      </span>
    </li>
  </ul>
</nav>
