---
id: mobile-web-automation-on-real-devices
title: Mobile Web Automation Testing On Real Devices
hide_title: true
sidebar_label: Mobile Web Automation On Real Devices
description: Perform mobile web automation via Appium on TestMu AI real device cloud. Test on real Android and iOS devices like iPhone, Samsung Galaxy, and Google Pixel.
keywords:
- mobile web automation
- appium mobile web automation
- mobile web test automation
- mobile web automation testmu ai
- mobile web automation real device
- how to perform mobile web automation
url: https://www.testmu.ai/support/docs/mobile-web-automation-on-real-devices/
site_name: LambdaTest
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

# Mobile Web Automation Testing On Real Devices
***

Mobile web automation involves testing websites or web apps on real mobile devices like Android and iOS. Testing the appearance and performance of websites and web apps on a real device ensures that the test runs on real-world conditions, has better performance, and improves test coverage (across devices).

 <BrandName /> allows you to perform mobile web automation via Appium on a wide range of real Android and iOS devices. You can [test on mobile devices](https://www.lambdatest.com/test-on-mobile-devices) from a wide range of OEMs like Samsung, Apple, Xiaomi, and more.

Here are the Prerequisites for performing mobile web automation on real devices using Python language. 

1.  Download the latest version of [Python](https://www.python.org/downloads/).
2.  Install the Appium dependency by running the following command from the CMD terminal.

```
pip install Appium-Python-Client
```
:::info
The above code will install the latest Python client library for Appium which only supports `w3c : True` capability.
:::


## Performing Mobile Web Automation On Real Devices
* * *

To test on a real mobile device, you need to pass the below capability in your test scripts.

`'isRealMobile': True`

You can also add the capability using the [Desired Capabilities Generator](https://www.lambdatest.com/capabilities-generator/). 

In the below Python test script, we will take an example of our sample ToDo app. We will check two checkboxes of the list and add another item to the list. The test is performed on iPhone 11 with platform version iOS 13.

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

In the below test snippet, you will need to add your <BrandName /> Username and <BrandName /> Access Key. You can get them from the [<BrandName /> dashboard](https://accounts.lambdatest.com/dashboard). In the Hub URL, we have added a beta prefix (`mobile-hub.lambdatest.com/wd/hub`).

```
url = "https://LT_USERNAME:LT_ACCESS_KEY@mobile-hub.lambdatest.com/wd/hub"
```

Execute the below command in the terminal to run the test.

```
python todo.py
```

Visit the [<BrandName /> Automation Dashboard](https://automation.lambdatest.com/), you’ll find the complete mobile web automation test details along with the `REAL DEVICE (BETA)` label as highlighted below.

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
