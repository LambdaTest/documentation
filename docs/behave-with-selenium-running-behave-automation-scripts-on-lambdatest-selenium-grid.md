---
id: behave-with-selenium-running-behave-automation-scripts-on-lambdatest-selenium-grid
title: Running Behave Automation Testing Scripts on Cloud Selenium Grid
hide_title: true
sidebar_label: Behave
description: Effortlessly run Behave automation scripts on TestMu AI Selenium Grid, ensuring fast and reliable testing with comprehensive support and documentation.
keywords:
  - behave
  - behave selenium
  - python selenium
  - behave automation testing
  - selenium webdriver behave
  - selenium python testing tutorial
  - python selenium framework
  - testmu ai python
  - framework on testmu ai
image: /assets/images/og-images/Behave-with-Selenium.jpg
url: https://www.lambdatest.com/support/docs/behave-with-selenium-running-behave-automation-scripts-on-lambdatest-selenium-grid/
site_name: LambdaTest
slug: behave-with-selenium-running-behave-automation-scripts-on-lambdatest-selenium-grid/
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
          "name": "Behave With Selenium: Run Behave Automation Testing Scripts On Selenium Grid",
          "item": "https://www.lambdatest.com/support/docs/behave-with-selenium-running-behave-automation-scripts-on-lambdatest-selenium-grid/"
        }]
      })
    }}
></script>

# Behave With Selenium: Tutorial to Run Your First Test on LambdaTest
***
In this topic, you will learn how to configure and run your automation testing scripts on [LambdaTest Selenium cloud platform](https://www.lambdatest.com/selenium-automation) using **Python** framework **Behave**.

## Objective
***
By the end of this topic, you will be able to:

1. Set up an environment for testing your hosted web pages using **Behave** framework with **Selenium**.
2. Understand and configure the core capabilities required for your Selenium test suite.
4. Test your locally hosted pages on LambdaTest platform.
5. Explore advanced features of LambdaTest.

>**Note:** All the code samples in this documentation can be found in the [LambdaTest's Behave Repository on GitHub](https://github.com/LambdaTest/Python-Behave-Selenium). You can either download or clone the repository to quickly run your tests.

## Prerequisites For Running Behave Selenium Tests
* * *
Before you can start performing Python automation testing using Behave, you would need to:

* Install the latest Python build from the [official website](https://www.python.org/downloads/). We recommend using the latest version.
* Make sure **pip** is installed in your system. You can install **pip** from [official pip documentation](https://pip.pypa.io/en/stable/installation/).
* Download the latest **Selenium Client** and its **WebDriver bindings** from the [official website](https://www.selenium.dev/downloads/). Latest versions of **Selenium Client** and **WebDriver** are ideal for running your automation script on LambdaTest Selenium cloud grid.
* Install **virtualenv** which is the recommended way to run your tests. It will isolate the build from other setups you may have running and ensure that the tests run with the specified versions of the modules.
```bash
pip install virtualenv
```
### Installing Selenium Dependencies And Tutorial Repo

**Step 1:** Clone the LambdaTest’s [Python-Behave-Selenium repository](https://github.com/LambdaTest/Python-Behave-Selenium) and navigate to the code directory as shown below:
```bash
git clone https://github.com/LambdaTest/Python-Behave-Selenium
cd Python-Behave-Selenium
```
**Step 2:** Create a virtual environment in your project folder the environment name is arbitrary.
```bash
virtualenv venv
```
**Step 3:** Activate the environment.
```bash
source venv/bin/activate
```
**Step 4:** Install the [required packages](https://github.com/LambdaTest/Python-Behave-Selenium/blob/master/requirements.txt) from the cloned project directory:
```bash
pip install -r requirements.txt
```
### Setting Up Your Authentication
Make sure you have your LambdaTest credentials with you to run test automation scripts on LambdaTest Selenium Grid. You can obtain these credentials from the [LambdaTest Automation Dashboard](https://automation.lambdatest.com/build) or through [LambdaTest Profile](https://accounts.lambdatest.com/login).

**Step 5:** Set LambdaTest `Username` and `Access Key` in environment variables.
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
```python
Feature: Test to add item
 
Scenario: Test sample-todo-app
  Given I go to sample-todo-app to add item
  Then I Click on first checkbox and second checkbox
  When I enter item to add
  When I click add button
  Then I should verify the added item
```
The Python script below tests a simple to-do application with basic functionalities like mark items as done, add items in list, calculate total pending items etc.
```python
from selenium import webdriver
import os
from configparser import ConfigParser
 
caps={}
 
def before_all(context):   
    config = ConfigParser()
    print ((os.path.join(os.getcwd(), 'config.cfg')))
    my_file = (os.path.join(os.getcwd(), 'config.cfg'))
    config.read(my_file)
     
    if os.getenv('LT_USERNAME', 0) == 0:
        context.user_name = config.get('Environment', 'UserName')
    if os.getenv('LT_ACCESS_KEY', 0)  == 0:
        context.access_key = config.get('Environment', 'AccessKey' )
    if os.getenv('LT_OPERATING_SYSTEM', 0) == 0:
        context.os = config.get('Environment', 'OS' )
    if os.getenv('LT_BROWSER', 0)  == 0:
        context.browser = config.get('Environment', 'Browser' )
    if os.getenv('LT_BROWSER_VERSION', 0)  == 0:
        context.browser_version = config.get('Environment', 'BrowserVersion' )
 
    remote_url= "https://"+context.user_name+":"+context.app_key+"@hub.lambdatest.com/wd/hub"
    caps['name'] = "Behave Sample Test"
    caps['build'] = "Behave Selenium Sample"
    caps['browserName'] = context.browser      
    caps['version'] = context.browser_version
    print ( caps )
    print ( remote_url )
    context.driver = webdriver.Remote(command_executor=remote_url,desired_capabilities=caps)
 
@given('I go to sample-todo-app to add item')
def step(context):
    before_all(context)
    context.driver.get('https://lambdatest.github.io/sample-todo-app/')
 
@then('I Click on first checkbox and second checkbox')
def click_on_checkbox_one(context):
    context.driver.find_element_by_name('li1').click()
    context.driver.find_element_by_name('li2').click()
 
@when('I enter item to add')
def enter_item_name(context):
    context.driver.find_element_by_id('sampletodotext').send_keys("Yey, Let's add it to list")
 
@when('I click add button')
def click_on_add_button(context):
    context.driver.find_element_by_id('addbutton').click()
 
@then('I should verify the added item')
def see_login_message(context):
    context.driver.implicitly_wait(10)
    added_item = context.driver.find_element_by_xpath("//span[@class='done-false']").text
    print(added_item)
    print(added_item)
    if added_item in "Yey, Let's add it to list":
        return True
    else:
        return False
 
def after_all(context):
    context.browser.quit()
```
### Configuration of Your Test Capabilities

**Step 6:** In `config/config.json`, you need to update your test capabilities. In this code, we are passing browser, browser version, and operating system information, along with LambdaTest Selenium grid capabilities via capabilities object. The capabilities object in the above code are defined as:
```python
[
    {
      "platform": "Windows 10",
      "browserName": "chrome",
      "version": "latest",
      "build": "Behave Selenium Sample",
      "name": "Behave Sample Test"
    }
  ]
```
> You can also use **dev** and **beta** browser versions. To generate capabilities for your test requirements, you can use our inbuilt 🔗 <a href={`${BRAND_URL}/capabilities-generator/`}>Capabilities Generator Tool</a>.

### Executing the Test

**Step 7:** The tests can be executed in the terminal using the following command.
```bash
behave features/test.feature 
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
     Behave Automation Testing 
     </span>
    </li>
  </ul>
</nav>
