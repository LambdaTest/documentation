---
id: migrate-existing-appium-test-suites
title:  Migrate Appium Tests From Local Grid
hide_title: true
sidebar_label: Migrate From Local Grid
description: This documentation will guide you through the process of migrating your existing Appium test suites from your local grid setup or another cloud testing tools to run on TestMu AI.
keywords:
- migrate appium tests from local grid 
- migrate appium tests from local grid to testmu ai cloud
- migrate appium tests from local grid to testmu ai
- how to migrate appium tests from local grid to testmu ai
url: https://www.testmuai.com/support/docs/migrate-existing-appium-test-suites/
site_name: LambdaTest
slug: migrate-existing-appium-test-suites/
canonical: https://www.testmuai.com/support/docs/migrate-existing-appium-test-suites/
---
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
          "name": "Migration",
          "item": `${BRAND_URL}/support/docs/migrate-existing-appium-test-suites/`
        }]
      })
    }}
></script>

# Migrate Appium Tests From Local Grid
***
 
<BrandName /> offers an online Appium automation grid to perform App automation. Therefore you can easily migrate Appium tests from your local grid to the <BrandName /> platform. 

In this documentation, we look at how to leverage <BrandName /> cloud for App automation and migrate your test scripts (or test suites) from your local grid. You can use <BrandName />'s desired capabilities in your tests, authenticate your test session, and execute tests on the cloud.

## Changes In The Test Script
***

To move from the local grid to the cloud-based Appium grid, you need to make some changes to your automation scripts like authentication, desired capabilities etc.

## Authentication
***

To run tests on <BrandName />, you will need <BrandName /> authentication credentials: <BrandName /> Username and a <BrandName /> Access Key. If you do not have a <BrandName /> account, visit the [<BrandName /> register page](https://accounts.lambdatest.com/register) and create one.

You can get the <BrandName /> Username and <BrandName /> Access Key from your <BrandName /> Profile.

<img loading="lazy" src={require('../assets/images/getting-started-app-automation/lt-creds.webp').default} alt="Image"  width="1366" height="625" className="doc_img"/>

## Desired Capabilities In Appium
***

Appium's Desired Capabilities are a collection of key-value pairs wrapped inside a JSON object. These key-value pairs request the Appium server for the required test automation session.

Let’s say you want to run an app test in Python on SAMSUNG GALAXY TAB S4 running ANDROID 10. You can define the same in the form of capability as given below.

```python
caps = [

    {
        "deviceName": "Galaxy Tab S4",
        "platformName": "Android",
        "platformVersion": "10",
        "build": "Demo",
    },
]
```

## Running Tests On <BrandName /> Appium Grid
***

To begin, change the authentication in your test suite's configuration settings. To run the tests on <BrandName /> Appium Grid, you need a valid user name and access key. If you were already performing tests on your local grid, you will need to modify your test script to initialize an Appium driver along with your desired capabilities.

Pass the capabilities to `@hub.lambdatest.com/wd/hub` with your <BrandName /> authentication details, and you are done. Here is the sample Python test script.

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


# This array 'caps' defines the capabilities of the browser, device, and OS combinations where the test will run
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
# run_session function searches for 'lambdatest' on google.com


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

## Testing Locally Hosted Apps
***

## Supported Languages And Frameworks
***

>That’s all! In case you have any questions or need any additional information, you could reach out at our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24X7 Chat Support**</span> or mail us directly at support@testmuai.com.

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
      Migrate From Local Grid
      </span>
    </li>
  </ul>
</nav>

<!--- To Be Added
Test Websites Locally
How to migrate if you are using one of the test frameworks? 
Run tests in parallel
Learn how to set debugging options
Select browsers and devices
Mark tests as passed or failed
--->
