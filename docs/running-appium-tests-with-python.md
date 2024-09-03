---
id: python-with-appium
title: Automated App Testing With Python And Appium
hide_title: true
sidebar_label: Python
description: Quick guide to get started with Appium App Automation using Python on the LambdaTest platform.
keywords:
- appium python mobile automation
- appium using python tutorial
- appium python test
- appium parallel execution python
- appium with python
- appium and python
url: https://www.lambdatest.com/support/docs/running-appium-tests-with-python/
site_name: LambdaTest
slug: running-appium-tests-with-python/
---
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
          "name": "Languages & Frameworks",
          "item": "https://www.lambdatest.com/support/docs/running-appium-tests-with-python/"
        }]
      })
    }}
></script>

# Running Appium Tests With Python
***

LambdaTest Appium Grid enables you to perform app test automation on 3000+ real devices and OS versions. You can run app automated tests in Python using Appium on a cloud-based scalable [automation testing](#) platform.

This documentation will help in configuring and running your Python tests on the LambdaTest platform using Appium.

## Prerequisites
***

>
You can either download or clone our repository to quickly run the tests. All the code samples in this documentation can be found at [ <img loading="lazy" src={require('../assets/images/GitHub_icon/github-icon.webp').default} alt="Image" width="25" height="25" /> GitHub Python LambdaTest Repository](#). 

Before start testing apps with Python, make sure you have the following things configured on your system.

1. Download the latest version of [Python](https://www.python.org/downloads/).
2. Install [Appium’s Python client library](https://pypi.org/project/Appium-Python-Client/).
3. Set your LambdaTest username and access key in environment variables. You can get them from the [LambdaTest app automation dashboard](https://automation.lambdatest.com/).
4. A mobile app - `.apk/.aab` file for Android and `.ipa` file for iOS. If you don't already have one, use LambdaTest Android Sample App and iOS Sample App.

## Uploading Your App
***

To upload Android or iOS apps on LambdaTest cloud, you have to use the REST API. 

Below is the cURL command to upload the app.

```python
curl --location --request POST 'https://manual-api.lambdatest.com/app/upload/realDevice' \
--header 'Authorization: Basic <Your_LambdaTest_AccessKey>' \
--form 'name="lambda1"' \
--form 'appFile=@"C:\Users\admin\Downloads\WikipediaSample.apk"'
```
Once the app is uploaded, you would get a response command for the above cURL request.

```python
"app":"lt://APP10051525539885437397"
```
The app URL (`"app":"lt://APP10051525539885437397"`) received in the response of the cURL command will be used in your Python automation scripts to set the desired app capability.

## Running Your Python Tests
***

To run the test, you need to make some tweaks in the desired capability of your Python scripts. 

Use the response cURL command value (`"lt://APP10051525539885437397"`) to configure the ‘app’ capability. Define the ‘deviceName’, 'platformName', 'platformVersion' and 'isRealMobile' capabilities for the Android or iOS device on which you want to run the test.

The below Python test script runs on Wikipedia application, it starts by opening the app and going to the search section of the app and finding a term - “LambdaTest”.

```python
#samplewikipedia.py

import ssl

try:
    _create_unverified_https_context = ssl._create_unverified_context
except AttributeError:
    # Legacy Python that doesn't verify HTTPS certificates by default
    pass
else:
    # Handle target environment that doesn't support HTTPS verification
    ssl._create_default_https_context = _create_unverified_https_context

from threading import Thread
import time
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from appium.webdriver.common.mobileby import MobileBy
from appium import webdriver


# This array 'caps' defines the capabilities browser, device and OS combinations where the test will run
caps = [

    {
        "deviceName": "Galaxy Tab S4",
        "platformName": "Android",
        "platformVersion": "10",
        "app": "lt://APP10051525539885437397",
        "isRealMobile": True,
        "deviceOrientation": "PORTRAIT",
        "visual": True,
        "console": True,
        "build": "Demo",
           },
]
# run_session function searches for 'lambtest' on google.com


def run_session(desired_cap):
    driver = webdriver.Remote(
        # hub.mobile-dev-1.dev.lambdatest.io/wd/hub",
        command_executor="https://LT_USERNAME:LT_ACCESS_KEY@mobile-hub.lambdatest.com/wd/hub",
        desired_capabilities=desired_cap)

    # driver.get("https://www.ifconfig.me")
    # time.sleep(10)
    # Test case for the lambdatest sample Android app.
# If you have uploaded your app, update the test case here.
    search_element = WebDriverWait(driver, 30).until(
        EC.element_to_be_clickable(
            (MobileBy.ACCESSIBILITY_ID, "Search Wikipedia"))
    )
    search_element.click()
    search_input = WebDriverWait(driver, 30).until(
        EC.element_to_be_clickable(
            (MobileBy.ID, "org.wikipedia.alpha:id/search_src_text"))
    )
    search_input.send_keys("lambdatest")
    time.sleep(5)
    search_results = driver.find_elements_by_class_name(
        "android.widget.TextView")
    assert(len(search_results) > 0)

# Invoke driver.quit() after the test is done to indicate that the test is completed.
    driver.quit()


# The Thread function takes run_session function and each set of capability from the caps array as an argument to run each session in parallel
for cap in caps:
    Thread(target=run_session, args=(cap,)).start()

```
Run the below command in the terminal to run the test.

```
python samplewikipedia.py
```

## Viewing Appium Test Reports
***

Go to [LambdaTest App Automation dashboard](#) to access the results of your test sessions. You can view the comprehensive test execution insights and debugging statistics like video recording, Appium logs, network logs, and device logs.

 <img loading="lazy" src={require('../assets/images/app-automation/dashboard.webp').default} alt="Integrating LambdaTest With Testsigma" width="1281" height="722" className="doc_img"/>

## Parallel Testing With Python
***

Parallel Testing involves running the same test on the different devices and OS versions or different tests on the same device and OS version. LambdaTest allows you to perform extensive parallel testing across different 3000+ real devices and operating systems combination on cloud Appium grid. 

To get started with Parallel testing, you can choose best test automation frameworks like [Behave](#) and [unittest](#) to automate Python test scripts.

>That’s all! In case you have any questions or need any additional information, you could reach out at our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24X7 Chat Support**</span> or mail us directly at support@lambdatest.com.

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
      Run Appium Tests With Python
      </span>
    </li>
  </ul>
</nav>