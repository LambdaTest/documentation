---
id: autoheal-with-hooks
title: How to use AutoHeal using Hooks
hide_title: false
sidebar_label: AutoHeal using Hooks
description: Learn how to use TestMu AI Auto Healing feature in your Selenium tests to avoid test flakiness and increase reliability of your test suites.
keywords:
- auto heal testmu ai
- auto heal test flakiness restrictions
- auto healing testmu ai
url: https://www.testmu.ai/support/docs/autoheal-with-hooks
site_name: LambdaTest
slug: autoheal-with-hooks
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
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
          "name": "AutoHeal with Hooks",
          "item": `${BRAND_URL}/support/docs/autoheal-with-hooks/`
        }]
      })
    }}
></script>
Autoheal feature automatically handles dynamic element changes during Selenium test execution. This is especially useful for tests where elements’ IDs, XPaths, or attributes may change between runs. Autoheal ensures your tests are more resilient and reduces flakiness.

Autoheal can be started or stopped at any point in your test script using simple hooks. This allows for precise control over when your tests should attempt element healing, improving reliability and reducing flaky tests. This guide explains how to enable and disable Autoheal in your Selenium scripts using the lambdatest hooks.

## Using Autoheal Hooks in Tests
Autoheal hooks can be inserted anywhere in the script depending on where you need dynamic element handling. Typical flow:

- Navigate to your test page.
- [Start Autoheal](/support/docs/autoheal-with-hooks/#enable-autoheal) before interacting with elements that may change.
- Perform element actions (find, click, send keys, etc.).
- [Stop Autoheal](/support/docs/autoheal-with-hooks/#disable-autoheal) after these actions.
- Continue the rest of your test normally.

This gives you fine-grained control over Autoheal, improving test stability without affecting unrelated test steps.

## Enable AutoHeal
Use the following hook to **start** Autoheal at any point in your Selenium test script:

```javascript
driver.execute_script('lambdatest_executor:{"action":"lambda-heal-start"}')
```

**Usage :** Place this hook right before interacting with elements that may dynamically change during the test.

## Disable AutoHeal
Use the following hook to **stop** Autoheal at any point in your Selenium test script:

```javascript
driver.execute_script('lambdatest_executor:{"action":"lambda-heal-stop"}')
```

**Usage :** Place this hook immediately after the actions requiring Autoheal are completed. This ensures subsequent test steps execute with normal Selenium behavior.

## Sample Script

```python title="Test.py"
import os
import time
from selenium import webdriver

platform = os.getenv('HYPEREXECUTE_PLATFORM')

desired_cap_chrome = {
  "build" : "Lambdatest Build 2",
  "name" : "Autoheal Test via Hooks",
  "platform" : "Windows 10",
  "browserName" : "Chrome",
  "version" : "latest",
  "visual" : False,
  "video" : True,
  "network": True,
  "console": True,
  'goog:chromeOptions': {'args': ['--window-size=400x300']},
}

hub = f"https://{os.getenv('LT_USERNAME')}:{os.getenv('LT_ACCESS_KEY')}@hub.lambdatest.com/wd/hub"

def OneTest(caps, sleepTime):
  begin = time.time()
  driver = webdriver.Remote(command_executor=hub, desired_capabilities=caps)
  end = time.time()
  print(f"Startup time for {caps['browserName']} {end - begin} , {begin} , {end}")
  driver.get("https://www.selenium.dev")
  time.sleep(sleepTime)

  driver.execute_script('lambdatest_executor:{"action":"lambda-heal-start"}') #start hook for autoheal

  driver.find_element_by_id('td-block-1')
  driver.execute_script("document.getElementById(\"td-block-1\").id=\"updatedtd-block-1\";")
  driver.find_element_by_id('updatedtd-block-1')
  driver.find_element_by_id("td-block-1")

  driver.execute_script('lambdatest_executor:{"action":"lambda-heal-stop"}')  #stop hook for autoheal
    
  driver.execute_script("console.log('Test started');")
  driver.execute_script("console.info('Navigated to selenium.dev');")
  driver.execute_script("console.warn('This is a warning message');")
  driver.execute_script("console.error('This is an error message');")
  driver.execute_script("console.debug('Debugging test flow');")
  driver.execute_script("console.log('Test completed successfully');")
  driver.quit()

test_autoheal(desired_cap_chrome)
```

With these steps, you can seamlessly integrate <BrandName /> HyperExecute Autoheal into your Selenium tests, reducing flaky tests and improving stability.
