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
canonical: https://www.testmu.ai/support/docs/mobile-web-automation-on-real-devices/
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
          "name": "Mobile Web Automation On Real Devices (Beta)",
          "item": `${BRAND_URL}/support/docs/mobile-web-automation-on-real-devices/`
        }]
      })
    }}
></script>

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

```
pip install Appium-Python-Client
```
:::info
The above code installs the latest Python client library for Appium which only supports `w3c : True` capability.
:::


## Performing Mobile Web Automation on Real Devices
---
Pass the isRealMobile capability in your test scripts to run on a real device.

To test on a real mobile device, pass the below capability in your test scripts.

`'isRealMobile': True`

You can also add the capability using the [Desired Capabilities Generator](https://www.testmuai.com/capabilities-generator/). 

In the below Python test script, we take an example of our sample ToDo app. We check two checkboxes of the list and add another item to the list. The test runs on iPhone 11 with platform version iOS 13.

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

```
url = "https://LT_USERNAME:LT_ACCESS_KEY@mobile-hub.lambdatest.com/wd/hub"
```

Execute the below command in the terminal to run the test.

```
python todo.py
```

Visit the [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/) to find the mobile web automation test details along with the `REAL DEVICE (BETA)` label as highlighted below.

<img loading="lazy" src={require('../assets/images/mobile-web-automation/mobile-web-automation-2.webp').default} alt="Image"  className="doc_img"/>

>That’s all! you have successfully executed the mobile web automation test on real devices. In case you have any questions or need any additional information, you could reach out at our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24X7 Chat Support**</span> or mail us directly at support@testmuai.com.

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
       Mobile Web Automation
      </span>
    </li>
  </ul>
</nav>
