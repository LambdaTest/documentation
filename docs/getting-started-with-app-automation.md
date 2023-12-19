---
id: getting-started-with-mobile-app-automation
title: Getting Started With Mobile App Automation 
hide_title: true
sidebar_label: Getting Started
description: Learn how to get started with App Automation on the LambdaTest platform using a wide range of real Android and iOS devices.
keywords:
- mobile app automation using appium
- appium automation for mobile apps
- mobile app automation testing using appium
url: https://www.lambdatest.com/support/docs/getting-started-with-app-automation/
site_name: LambdaTest
slug: getting-started-with-app-automation/
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
          "name": "Getting Started With Mobile App Automation",
          "item": "https://www.lambdatest.com/support/docs/getting-started-with-app-automation/"
        }]
      })
    }}
></script>

# Getting Started With Mobile App Automation 
***

Mobile app automation is the process that automates the testing of web and native apps on mobile devices. LambdaTest app automation allows you to perform mobile automated testing of web, native and hybrid apps on real Android and iOS devices. With LambdaTest real device cloud, you can easily evaluate how well your mobile apps perform across a wide range of mobile devices.

In this documentation, you will learn how to get started with your first mobile app automation test using the Appium framework. 

>**Note**: *Currently, LambdaTest supports the Appium framework (**v1.21.0**) for mobile app automation. However, the other frameworks will be rolled out soon.*

Shown below are the languages and frameworks supported by LambdaTest Appium Grid.

<div className="lt_row lt_framework_list_row">
    <div className="lt_col lt_framework_wrapper"> 
      <img loading="lazy" src={require('../assets/images/getting-started/java-icon.webp').default} alt="Java" width="200" height="200" className="language-icon"/>
      <ul className="lt_framework_list">
  <li>
  <a className="lt_primary" href="#">Java</a>
 </li>
        
  <li>
          <a href="#">TestNG</a>
  </li>
        
  <li>
          <a href="#">JUnit</a>
  </li>
        
  </ul>
    </div>
    <div className="lt_col lt_framework_wrapper">
      <img loading="lazy" src={require('../assets/images/getting-started/php-icon.webp').default} alt="PHP" width="2500" height="1250" className="language-icon"/>
      <ul className="lt_framework_list">
        <li>
          <a className="lt_primary" href="#">PHP</a>
        </li>
        
  <li>
  <a href="#">PHPUnit</a>
  </li>
        
  </ul>
    </div>
    <div className="lt_col lt_framework_wrapper">
       <img loading="lazy" src={require('../assets/images/getting-started/ruby-icon.webp').default} alt="Ruby" width="200" height="200" className="language-icon"/>
      <ul className="lt_framework_list">
        <li>
          <a className="lt_primary" href="#">Ruby</a>
        </li>
        
  <li>
          <a href="#">Cucumber</a>
        </li>
        
  </ul>
    </div>
    <div className="lt_col lt_framework_wrapper">
     <img loading="lazy" src={require('../assets/images/getting-started/c-sharp-icon.webp').default} alt="C#" width="200" height="200" className="language-icon"/>
      <ul className="lt_framework_list">
        <li>
          <a className="lt_primary" href="#">C#</a>
        </li>
       
 
  <li>
          <a href="#">NUnit</a>
    </li>
      </ul>
    </div>
    <div className="lt_col lt_framework_wrapper">
      <img loading="lazy" src={require('../assets/images/getting-started/python-icon.webp').default} alt="Python" width="200" height="200" className="language-icon"/>
      <ul className="lt_framework_list">
        <li>
          <a className="lt_primary" href="#">Python</a>
        </li>
        <li>
  <a href="#">Behave</a>
  </li>
  <li>
 <a href="#">Lettuce</a>
  </li>
        
        

    
         
 
  </ul>
    </div>
  </div>
  <div className="lt-framework-list-footer">
    <p>We support all Appium-compatible languages and frameworks, so if your favorite isn't listed, let us know.<br/>Don't worry, the test can still be run. <span className="doc__lt" onClick={() => window.openLTChatWidget()}>Contact Us</span> for any help.</p>
  </div>

 

## Running First Appium Test
***

Before automating mobile apps, ensure you have App automation access enabled on your LambdaTest account. We will use the Python language to run the first test. Make sure you have the following things installed on your machine.

### Prerequisites
* * *

1. Download the latest version of [Python](https://www.python.org/downloads/).
2. Make sure you have [Appium’s Python client library](https://pypi.org/project/Appium-Python-Client/) installed.
3. Set your LambdaTest username and access key in environment variables. You can get them from the [LambdaTest automation dashboard](https://automation.lambdatest.com/).
4. A mobile app - `.apk/.aab` file for Android and `.ipa` file for iOS. If you don't already have one, use LambdaTest Android Sample App and iOS Sample App.

### Uploading The Mobile App
***

To upload Android or iOS apps on LambdaTest cloud, you have to use the REST API. Below is the cURL command to upload the app.

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
The app URL (`"app":"lt://APP10051525539885437397"`) received in the response of the cURL command will be used in your Appium automation scripts to set the desired app capability.


To run the appium app test, you need to make some tweaks in the desired capability of the below Python test script. Use the response cURL command value (`"lt://APP10051525539885437397"`) to configure the ‘app’ capability. 

Define the ‘deviceName’, 'platformName', 'platformVersion' and 'isRealMobile' capabilities for the Android or iOS device on which you want to run the test.

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
Pass the below command in the terminal to run the test.

```
python samplewikipedia.py
```
### Viewing Appium Test Reports
***

The results of your test sessions can be accessed via the LambdaTest App Automation dashboard. You can view the Appium test execution details and debugging statistics such as video recording, Appium logs, network logs, and device logs by digging deeper into the parameters of a given test session.

 <img loading="lazy" src={require('../assets/images/app-automation/dashboard.webp').default} alt="Integrating LambdaTest With Testsigma" width="1281" height="722" className="doc_img"/>


## Parallel Testing With Appium
***

Parallel testing allows you to run the same App automation test concurrently on different device and OS combinations, or different tests concurrently on the same device and OS combination. With LambdaTest you can run parallel tests across 3000+ real devices and OS combinations.

To run our parallel tests, we will use the Webdriver IO framework. Make sure you have following things installed on your machine.

### Prerequisites
***

1. Download the latest version of [Node.js](https://nodejs.org/en/)
2. Set your LambdaTest username and access key in environment variables. You can get them from the [LambdaTest automation dashboard](https://automation.lambdatest.com/).
4. A mobile app - `.apk/.aab` file for Android and `.ipa` file for iOS. If you don't already have one, use LambdaTest Android Sample App and iOS Sample App.

### Uploading The Mobile App
***

To upload Android or iOS apps on LambdaTest cloud, you have to use the REST API. Below is the cURL command to upload the app.

```js
curl --location --request POST 'https://manual-api.lambdatest.com/app/upload/realDevice' \
--header 'Authorization: Basic <Your_LambdaTest_AccessKey>' \
--form 'name="lambda1"' \
--form 'appFile=@"C:\Users\admin\Downloads\WikipediaSample.apk"'
```
Once the app is uploaded, you would get a response command for the above cURL request.

```js
"app":"lt://APP10051525539885437397"
```
The app URL (`"app":"lt://APP10051525539885437397"`) received in the response of the cURL command will be used in your Appium automation scripts to set the desired app capability.

Define the ‘deviceName’, 'platformName', 'platformVersion' and 'isRealMobile' capabilities for the Android or iOS device on which you want to run the test.

The below WebdriverIO test script runs on Wikipedia application, it starts by opening the app and going to the search section of the app and finding a term - “LambdaTest”. 

```js
exports.config = {
  services: [
    [
      "lambdatest",
      {
        tunnel: false,
        lambdatestOpts: {
          logFile: "tunnel.log"
        }
      }
    ]
  ],
  user: process.env.LT_USERNAME || 'LT_USERNAME',
  key: process.env.LT_ACCESS_KEY || 'LT_ACCESS_KEY',

  updateJob: false,
  specs: [
    './examples/run-parallel-test/specs/single_test.js'
  ],
  exclude: [],

  maxInstances: 10,
  commonCapabilities: {
    build: 'DemoParallel',
    name: 'parallel_test',
    isRealMobile: true,
    app: 'lt://APP10020521641402841671430'
  },

  capabilities: [{
    platformName : "Android",
		deviceName : "Galaxy S9",
		platformVersion : "10"
  }, {
    platformName : "Android",
		deviceName : "Galaxy S9 Plus",
		platformVersion : "10"
  }],

  logLevel: 'info',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  path: "/wd/hub",
  hostname: "mobile-hub.lambdatest.com",
  port: 80,

  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 20000
  }
};

// Code to support common capabilities
exports.config.capabilities.forEach(function(caps){
  for(var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
```

Run the below command in the terminal to run the test.

```js
cd samplewikipedia
npm i
```
### Viewing Appium Test Reports
***

Go to the LambdaTest App Automation Dashboard and you can access the results of parallel test sessions.

 <img loading="lazy" src={require('../assets/images/app-automation/dashboard-parallel.webp').default} alt="Integrating LambdaTest With Testsigma" width="1281" height="722" className="doc_img"/>


## Supported Mobile Devices
***

LambdaTest platform supports a wide range of real Android and iOS that lets you perform mobile app automation using Appium at scale. To get the list of supported mobile devices, visit our [list of real devices](https://www.lambdatest.com/list-of-real-devices) page.

>That’s all! you have successfully executed the Mobile app automation test with Appium on real devices. In case you have any questions or need any additional information, you could reach out at our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24X7 Chat Support**</span> or mail us directly at support@lambdatest.com.

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
       Getting Started With Mobile App Automation
      </span>
    </li>
  </ul>
</nav>