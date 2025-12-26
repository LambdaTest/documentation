---
id: automation-testing-selenium-with-lettuce
title: Lettuce Automation:Run Lettuce Automation Testing on Selenium Grid Cloud
hide_title: true
sidebar_label: Lettuce
description: Learn how to run Lettuce Selenium automated test scripts (with examples) on LambdaTest Selenium Grid having 3000+ different desktop and mobile browsers on cloud.
keywords:
  - lettuce
  - lettuce selenium
  - python selenium
  - lettuce automation testing
  - selenium webdriver python
  - selenium python testing tutorial
  - python selenium framework
  - lambdatest python
  - framework on lambdatest
url: https://www.lambdatest.com/support/docs/automation-testing-selenium-with-lettuce/
site_name: LambdaTest
slug: automation-testing-selenium-with-lettuce/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Lettuce Automation :Run Lettuce Automation Testing on LambdaTest Selenium Grid",
          "item": "https://www.lambdatest.com/support/docs/automation-testing-selenium-with-lettuce/"
        }]
      })
    }}
></script>

# Lettuce with Selenium: Tutorial to Run Your First Test on LambdaTest
* * *

In this topic, you will learn how to configure and run your Python automation testing scripts on [LambdaTest Selenium cloud platform](https://www.lambdatest.com/selenium-automation) **Python** framework **Lettuce**.

## Objective
***
By the end of this topic, you will be able to:

1. Set up an environment for testing your hosted web pages using **Lettuce** framework with **Selenium**.
2. Understand and configure the core capabilities required for your Selenium test suite.
3. Test your locally hosted pages on LambdaTest platform.
4. Explore advanced features of LambdaTest.

>**Note:** All the code samples in this documentation can be found in the [LambdaTest's Repository on GitHub](https://github.com/LambdaTest/sample-lettuce). You can either download or clone the repository to quickly run your tests.

## Prerequisites to Perform Lettuce automation testing With LambdaTest Selenium Grid
* * *
Before you can start performing **Python** automation testing using **UnitTest**, you would need to:

* Install the latest Python build from the [official website](https://www.python.org/downloads/). We recommend using the latest version.
* Make sure **pip** is installed in your system. You can install **pip** from [here](https://pip.pypa.io/en/stable/installation/).
* Download the latest **Selenium Client** and its **WebDriver bindings** from the [official website](https://www.selenium.dev/downloads/). Latest versions of **Selenium Client** and **WebDriver** are ideal for running your automation script on LambdaTest Selenium cloud grid.
* Install **virtualenv** which is the recommended way to run your tests. It will isolate the build from other setups you may have running and ensure that the tests run with the specified versions of the modules.
```bash
pip install virtualenv
```
### Installing Selenium Dependencies and Tutorial Repo

**Step 1:** Clone the LambdaTest’s [Lettuce-selenium-sample repository](https://github.com/LambdaTest/sample-lettuce) and navigate to the code directory as shown below:
```bash
git clone https://github.com/LambdaTest/sample-lettuce
cd sample-lettuce
```
**Step 2:** Create a virtual environment in your project folder the environment name is arbitrary.
```bash
virtualenv venv
```
**Step 3:** Activate the environment.
```bash
source venv/bin/activate
```
**Step 4:** Install the [required packages](https://github.com/LambdaTest/sample-lettuce/blob/master/requirements.txt) from the cloned project directory:
```bash
pip install -r requirements.txt
```
### Setting up Your Authentication
Make sure you have your LambdaTest credentials with you to run test automation scripts on LambdaTest Selenium Grid. You can obtain these credentials from the [LambdaTest Automation Dashboard](https://automation.lambdatest.com/build) or through [LambdaTest Profile](https://accounts.lambdatest.com/login).

**Step 5:** Set LambdaTest `Username` and `Access Key` in environment variables.
   * For **Linux/macOS**:

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`export LT_USERNAME= "${ YOUR_LAMBDATEST_USERNAME()}" 
export LT_ACCESS_KEY= "${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
</CodeBlock>
</div>

  * For **Windows**:

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`$env:LT_USERNAME= "${ YOUR_LAMBDATEST_USERNAME()}" 
$env:LT_ACCESS_KEY= "${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
</CodeBlock>
</div>

### Configuration of Your Test Capabilities

**Step 6:**  In the `config.json` file, you need to update your test capabilities. In this code, we are passing browser, browser version, and operating system information, along with LambdaTest Selenium grid capabilities via capabilities object. The capabilities that we have used in the code are defined as:
```python
capabilities = {
        "build": "Sample lettuce Build",
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
Your test results would be displayed on the test console (or command-line interface if you are using terminal/cmd) and on LambdaTest automation dashboard. [LambdaTest Automation Dashboard](https://automation.lambdatest.com/build) will help you view all your text logs, screenshots and video recording for your entire automation tests.

## Testing Locally Hosted or Privately Hosted Projects
***
You can test your locally hosted or privately hosted projects with [LambdaTest Selenium grid cloud](https://www.lambdatest.com/selenium-automation) using LambdaTest Tunnel app. All you would have to do is set up an SSH tunnel using LambdaTest Tunnel app and pass toggle `tunnel = True` via desired capabilities. LambdaTest Tunnel establishes a secure SSH protocol based tunnel that allows you in testing your locally hosted or privately hosted pages, even before they are made live.

>Refer our [LambdaTest Tunnel documentation](/support/docs/testing-locally-hosted-pages/) for more information.

Here’s how you can establish LambdaTest Tunnel.

>Download the binary file of:
>* [LambdaTest Tunnel for Windows](https://downloads.lambdatest.com/tunnel/v3/windows/64bit/LT_Windows.zip)
* [LambdaTest Tunnel for Mac](https://downloads.lambdatest.com/tunnel/v3/mac/64bit/LT_Mac.zip)
* [LambdaTest Tunnel for Linux](https://downloads.lambdatest.com/tunnel/v3/linux/64bit/LT_Linux.zip)

Open command prompt and navigate to the binary folder.

Run the following command:
```bash
LT -user {user’s login email} -key {user’s access key}
```
So if your user name is lambdatest@example.com and key is 123456, the command would be:
```bash
LT -user lambdatest@example.com -key 123456
```
Once you are able to connect **LambdaTest Tunnel** successfully, you would just have to pass on tunnel capabilities in the code shown below :

**Tunnel Capability**
```bash
"tunnel" : true
```
## Additional Links
***
* [Advanced Configuration for Capabilities](/support/docs/selenium-automation-capabilities/)
* [How to test locally hosted apps](/support/docs/testing-locally-hosted-pages/)
* [How to integrate LambdaTest with CI/CD](/support/docs/integrations-with-ci-cd-tools/)

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com">
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com/support/docs/">
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
      Lettuce Automation Testing 
      </span>
    </li>
  </ul>
</nav>