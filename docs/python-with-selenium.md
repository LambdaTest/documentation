---
id: python-with-selenium-running-python-automation-scripts-on-lambdatest-selenium-grid
title: Selenium Python:Running Python Automation Testing Scripts on Cloud Selenium Grid
hide_title: true
sidebar_label: Python
description: Learn how to run Python Selenium automated test scripts (with examples) on TestMu AI Selenium Grid cloud of 3000+ desktop and mobile browsers.
keywords:
- python selenium
- python selenium tutorial
- python selenium webdriver
- python selenium testing
- selenium automation testing
- selenium testing tool
- selenium testing tutorial

url: https://www.testmu.ai/support/docs/python-with-selenium-running-python-automation-scripts-on-testmu-selenium-grid
site_name: LambdaTest
slug: python-with-selenium-running-python-automation-scripts-on-testmu-selenium-grid
canonical: https://www.testmu.ai/support/docs/python-with-selenium-running-python-automation-scripts-on-testmu-selenium-grid/
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
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Selenium Python:Run Python Automation Testing Scripts on Cloud Selenium Grid",
          "item": `${BRAND_URL}/support/docs/python-with-selenium-running-python-automation-scripts-on-testmu-selenium-grid/`
        }]
      })
    }}
></script>
# Python with Selenium: Tutorial to Run Your First Test on <BrandName />
***
This post will help you in getting started with configuring and running your Python-based automation test scripts on [<BrandName /> Selenium cloud platform](https://www.lambdatest.com/selenium-automation).  

## Objective
***
By the end of this topic, you will be able to:

1. Set up an environment for testing your hosted web pages using **Python** with Selenium.
2. Understand and configure the core capabilities required for your Selenium test suite.
3. Test your locally hosted pages on <BrandName /> platform.
4. Explore advanced features of <BrandName />.

>**Note:** All the code samples in this documentation can be found in the [<BrandName />'s Repository on GitHub](https://github.com/LambdaTest/python-selenium-sample). You can either download or clone the repository to quickly run your tests.

## Prerequisites For Running Selenium Python Scripts
***

Before you can start performing **Python** automation testing with **Selenium**, you would need to:

* Install the latest Python build from the [official website](https://www.python.org/downloads/). We recommend using the latest version.
* Make sure **pip** is installed in your system. You can install **pip** from [https://pip.pypa.io/en/stable/installation/](https://pip.pypa.io/en/stable/installation/).
* Download the latest **Selenium Client** and its **WebDriver bindings** from the [official website](https://www.selenium.dev/downloads/). Latest versions of **Selenium Client** and **WebDriver** are ideal for running your automation script on <BrandName /> Selenium cloud grid.

### Installing Selenium Dependencies and Tutorial Repo

**Step 1:** Clone the <BrandName />’s [python-selenium-sample repository](https://github.com/LambdaTest/python-selenium-sample) and navigate to the code directory as shown below:
```bash
git clone https://github.com/LambdaTest/python-selenium-sample
cd python-selenium-sample
```
**Step 2:** Download the driver from the link, or you can use **pip** to install it.
```bash
pip install selenium
export PYTHONWARNINGS="ignore:Unverified HTTPS request"   //Disable ssl warning
```
### Setting up Your Authentication
Make sure you have your <BrandName /> credentials with you to run test automation scripts on <BrandName /> Selenium Grid. You can obtain these credentials from the [<BrandName /> Automation Dashboard](https://automation.lambdatest.com/build) or through [<BrandName /> Profile](https://accounts.lambdatest.com/login).

**Step 3:** Set <BrandName /> `Username` and `Access Key` in environment variables.
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
Let’ start with a simple Selenium Remote WebDriver test first. The test automation script below tests a simple to-do application with basic functionalities like mark items as done, add items in a list, calculate total pending items etc.
```python
# google-search-lambdatest.py

import time
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options
import os


"""
    LambdaTest selenium automation sample example
    Configuration
    ----------
    username: Username can be found at automation dashboard
    accessToken:  AccessToken can be generated from automation dashboard or profile section

    Result
    -------
    Execute Test on lambdatest Distributed Grid perform selenium automation based 
"""

# username: Username can be found at automation dashboard
username = os.getenv("LT_USERNAME")
# accessToken:  AccessToken can be generated from automation dashboard or profile section
accessToken = os.getenv("LT_ACCESS_KEY")
# gridUrl: gridUrl can be found at automation dashboard
gridUrl = "hub.lambdatest.com/wd/hub"


capabilities = {
    'LT:Options': {
        "build": "your build name",
        "name": "your test name",
        "platformName": "Windows 10"
    },
    "browserName": "Chrome",
    "browserVersion": "latest",
}

url = "https://"+username+":"+accessToken+"@"+gridUrl


"""
    ----------
    platformName : Supported platform - (Windows 10, Windows 8.1, Windows 8, Windows 7,  macOS High Sierra, macOS Sierra, OS X El Capitan, OS X Yosemite, OS X Mavericks)
    browserName : Supported platform - (chrome, firefox, Internet Explorer, MicrosoftEdge)
    browserVersion :  Supported list of version can be found at https://www.lambdatest.com/capabilities-generator/

    Result
    -------
"""

driver = webdriver.Remote(
    command_executor=url,
    desired_capabilities=capabilities
)

"""
	----------
	Execute test:  navigate google.com search LambdaTest
	Result
	----------
	print title
"""

driver.get("https://www.google.com/ncr")

print("Searching lambdatest on google.com ")
time.sleep(8)
elem = driver.find_element_by_name("q")
elem.send_keys("lambdatest.com")
elem.submit()

print("Printing title of current page :"+driver.title)
driver.execute_script("lambda-status=passed")
print("Requesting to mark test : pass")

"""
	Quit selenium driver
"""
driver.quit()
```

### Configuration of Your Test Capabilities

**Step 4:** In the python script, you need to update your test capabilities. In this code, we are passing browser, browser version, and operating system information, along with <BrandName /> Selenium grid capabilities via capabilities object. The capabilities object in the above code are defined as:
```python
capabilities = {
        "build": "your build name",
        "name": "your test name",
        "platformName": "Windows 10"
        "browserName": "Chrome",
        "browserVersion": "latest",
}
```
> You can generate capabilities for your test requirements with the help of our inbuilt **<a href={`${BRAND_URL}/capabilities-generator/`}>Capabilities Generator Tool</a>**.

### Executing the Test

**Step 5:** You would need to execute the below command in your terminal/cmd.
```bash
python google-search-lambdatest.py
```
Your test results would be displayed on the test console (or command-line interface if you are using terminal/cmd) and on <BrandName /> automation dashboard. [<BrandName /> Automation Dashboard](https://automation.lambdatest.com/build) will help you view all your text logs, screenshots and video recording for your entire automation tests.

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
      Run Python Automation Testing Scripts on Cloud Selenium Grid      
      </span>
    </li>
  </ul>
</nav>
