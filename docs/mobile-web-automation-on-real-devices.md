---
id: mobile-web-automation-on-real-devices
title: Mobile Web Automation Testing on Real Devices
sidebar_label: Test on Real Mobile Browsers
description: Run mobile web automation tests via Appium on real Android and iOS devices from Samsung, Apple, and more.
keywords:
  - mobile web automation real device
  - appium test real android ios
  - isRealMobile capability appium
  - mobile web testing python appium
  - run appium test on iphone
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/mobile-web-automation-on-real-devices/
site_name: TestMu AI
slug: mobile-web-automation-on-real-devices/
canonical: https://www.testmuai.com/support/docs/mobile-web-automation-on-real-devices/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import VerifiedTag from '@site/src/component/verifiedTag';


<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/mobile-web-automation-on-real-devices/"
    },
    "headline": "Mobile Web Automation Testing on Real Devices",
    "description": "Run mobile web automation tests via Appium on real Android and iOS devices from Samsung, Apple, and more.",
    "url": "https://www.testmuai.com/support/docs/mobile-web-automation-on-real-devices/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
    "keywords": [
      "mobile web automation real device",
      "appium test real android ios",
      "isRealMobile capability appium"
    ],
    "proficiencyLevel": "Beginner",
    "author": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "url": "https://www.testmuai.com/"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
      "url": "https://www.testmuai.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testmuai.com/logo.png"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testmu-ai/",
        "https://x.com/testmuai",
        "https://www.youtube.com/@TestMuAI"
      ]
    },
    "hasPart": [
      {
        "@type": "SoftwareSourceCode",
        "name": "Prerequisites",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "pip install Appium-Python-Client"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Performing Mobile Web Automation on Real Devices",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Python",
        "text": "//todo.py\n\n#!/usr/local/bin/python\n# -*- coding: utf-8 -*-\nimport time\nfrom appium import webdriver\n\ndesired_cap = {\n  'w3c': True,\n  'platformName': 'iOS',\n  'platformVersion': '13',\n  'deviceName':\"iPhone 11\",\n  'nativeWebScreenshot':True,\n  'build': 'Demo',\n  'isRealMobile' : True,// real mobile device capability\n  'console': True,     \n  'visual': True,\n  'network': True,\n  'tunnel' : False,\n  \"newCommandTimeout\": 300\n}\n    \nurl = \"https://LT_USERNAME:LT_ACCESS_KEY@mobile-hub.lambdatest.com/wd/hub\"\ndriver = webdriver.Remote(desired_capabilities = desired_cap, command_executor = url)\n\ndriver.get(\"https://lambdatest.github.io/sample-todo-app/\")\ntime.sleep(2)\n\nlist1 = driver.find_element_by_xpath(\"//input[@name='li1']\")\nlist1.click()\ntime.sleep(1)\n\nlist2 = driver.find_element_by_xpath(\"//input[@name='li2']\")\nlist2.click()\ntime.sleep(1)\n\ninputfield = driver.find_element_by_id(\"sampletodotext\")\ninputfield.click()\ninputfield.send_keys(\"item 1\")\ndriver.hide_keyboard()\ntime.sleep(1)\n\ndriver.execute_script(\"document.getElementById('addbutton').click();\")\ntime.sleep(1)\n\ninputfield = driver.find_element_by_id(\"sampletodotext\")\ninputfield.click()\ninputfield.send_keys(\"item 2\")\ndriver.hide_keyboard()\ntime.sleep(1)\n\ndriver.execute_script(\"document.getElementById('addbutton').click();\")\ntime.sleep(5)\n\ndriver.quit() "
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 3",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "url = \"https://LT_USERNAME:LT_ACCESS_KEY@mobile-hub.lambdatest.com/wd/hub\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 4",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "python todo.py"
      }
    ],
    "dateModified": "2026-06-09T15:09:24+05:30"
  }) }}
/>

# Mobile Web Automation Testing on Real Devices
***

Mobile web automation involves testing websites or web apps on real mobile devices like Android and iOS. Testing appearance and performance on a real device ensures that the test runs on real-world conditions, delivers better performance, and improves test coverage across devices.

 TestMu AI allows you to perform mobile web automation via Appium on a wide range of real Android and iOS devices. You can [test on mobile devices](https://www.testmuai.com/test-on-mobile-devices/) from OEMs like Samsung, Apple, Xiaomi, and more.

## Prerequisites
---
Install Python and the Appium client library before running mobile web tests.

1. Download the latest version of [Python](https://www.python.org/downloads/).
2. Install the Appium dependency by running the following command from the CMD terminal.

<VerifiedTag value="Verified" />

```
pip install Appium-Python-Client
```
:::info
The above code installs the latest Python client library for Appium which only supports `w3c : True` capability. Currently, we provide support for Chrome on Android and Safari on iOS for real device browser automation.
:::


## Performing Mobile Web Automation on Real Devices
---
Pass the isRealMobile capability in your test scripts to run on a real device.

To test on a real mobile device, pass the below capability in your test scripts.

`'isRealMobile': True`

You can also add the capability using the [Desired Capabilities Generator](https://www.testmuai.com/capabilities-generator/). 

In the below Python test script, we take an example of our sample ToDo app. We check two checkboxes of the list and add another item to the list. The test runs on iPhone 11 with platform version iOS 13.

<VerifiedTag value="Verified" />

```python
//todo.py

#!/usr/local/bin/python
# -*- coding: utf-8 -*-
import time
from appium import webdriver

desired_cap = {
  'w3c': True,
  'platformName': 'iOS',
  'platformVersion': '13',
  'deviceName':"iPhone 11",
  'nativeWebScreenshot':True,
  'build': 'Demo',
  'isRealMobile' : True,// real mobile device capability
  'console': True,     
  'visual': True,
  'network': True,
  'tunnel' : False,
  "newCommandTimeout": 300
}
    
url = "https://LT_USERNAME:LT_ACCESS_KEY@mobile-hub.lambdatest.com/wd/hub"
driver = webdriver.Remote(desired_capabilities = desired_cap, command_executor = url)

driver.get("https://lambdatest.github.io/sample-todo-app/")
time.sleep(2)

list1 = driver.find_element_by_xpath("//input[@name='li1']")
list1.click()
time.sleep(1)

list2 = driver.find_element_by_xpath("//input[@name='li2']")
list2.click()
time.sleep(1)

inputfield = driver.find_element_by_id("sampletodotext")
inputfield.click()
inputfield.send_keys("item 1")
driver.hide_keyboard()
time.sleep(1)

driver.execute_script("document.getElementById('addbutton').click();")
time.sleep(1)

inputfield = driver.find_element_by_id("sampletodotext")
inputfield.click()
inputfield.send_keys("item 2")
driver.hide_keyboard()
time.sleep(1)

driver.execute_script("document.getElementById('addbutton').click();")
time.sleep(5)

driver.quit() 
```

In the below test snippet, add your TestMu AI Username and TestMu AI Access Key. Get them from the [TestMu AI dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard). In the Hub URL, we added a beta prefix (`mobile-hub.lambdatest.com/wd/hub`).

<VerifiedTag value="Verified" />

```
url = "https://LT_USERNAME:LT_ACCESS_KEY@mobile-hub.lambdatest.com/wd/hub"
```

Execute the below command in the terminal to run the test.

<VerifiedTag value="Verified" />

```
python todo.py
```

Visit the [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/) to find the mobile web automation test details along with the `REAL DEVICE (BETA)` label as highlighted below.

<img loading="lazy" src={require('../assets/images/mobile-web-automation/mobile-web-automation-2.webp').default} alt="Image"  className="doc_img"/>

## Mobile Web Automation Sample for Appium Python Client 3 and Later
---
Appium Python Client 3 removed the `desired_capabilities` argument, so the latest client that the prerequisites install passes capabilities through an options object. The sample below opens the Selenium Playground ToDo app in Chrome on a real Android device, checks two items and adds a new one. Set your TestMu AI Username and Access Key as the `LT_USERNAME` and `LT_ACCESS_KEY` environment variables before you run it.

```python
# todo_real_android.py
import os

from appium import webdriver
from appium.options.common import AppiumOptions
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait

username = os.environ["LT_USERNAME"]
access_key = os.environ["LT_ACCESS_KEY"]

options = AppiumOptions()
options.set_capability("platformName", "android")
options.set_capability("browserName", "Chrome")
options.set_capability("lt:options", {
    "deviceName": "Galaxy S24",
    "platformVersion": "14",
    "isRealMobile": True,  # real mobile device capability
    "build": "Mobile Web Automation Demo",
    "name": "ToDo app in Chrome on a real Android device",
})

driver = webdriver.Remote(
    command_executor=f"https://{username}:{access_key}@mobile-hub.lambdatest.com/wd/hub",
    options=options,
)

try:
    driver.get("https://www.testmuai.com/selenium-playground/todo-app/")
    driver.find_element(By.NAME, "li1").click()
    driver.find_element(By.NAME, "li2").click()
    driver.find_element(By.ID, "sampletodotext").send_keys("item 1")
    driver.execute_script("document.getElementById('addbutton').click();")
    WebDriverWait(driver, 10).until(
        lambda d: d.find_elements(By.XPATH, "//li/span[text()='item 1']")
    )
finally:
    driver.quit()
```

To run the same test in Safari on a real iPhone, set `platformName` to `ios` and `browserName` to `Safari`, and choose an iOS device in `lt:options`, for example `"deviceName": "iPhone 15"` with `"platformVersion": "18"`. Run the file with `python todo_real_android.py` and find the session in the Automation Dashboard as described above.

>That’s all! you have successfully executed the mobile web automation test on real devices. In case you have any questions or need any additional information, you could reach out at our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24X7 Chat Support**</span> or mail us directly at support@testmuai.com.

