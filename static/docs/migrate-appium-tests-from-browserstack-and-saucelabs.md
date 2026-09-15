# Migrate Appium Tests

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

0)\n\ndriver.quit()"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "SauceLabs",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Python",
        "text": "#samplewikipedia.py\nimport ssl\n\ntry:\n    _create_unverified_https_context = ssl._create_unverified_context\nexcept AttributeError:\n    # Legacy Python that doesn't verify HTTPS certificates by default\n    pass\nelse:\n    # Handle target environment that doesn't support HTTPS verification\n    ssl._create_default_https_context = _create_unverified_https_context\n\nfrom threading import Thread\nimport time\nfrom selenium import webdriver\nfrom selenium.webdriver.common.keys import Keys\nfrom selenium.webdriver.common.desired_capabilities import DesiredCapabilities\nfrom selenium.common.exceptions import TimeoutException\nfrom selenium.webdriver.support.ui import WebDriverWait\nfrom selenium.webdriver.support import expected_conditions as EC\nfrom appium.webdriver.common.mobileby import MobileBy\nfrom appium import webdriver\n\n# This array 'caps' defines the capabilities browser, device and OS combinations where the test will run\n\ncaps = {\n    caps['platformName'] = 'Android'\n    caps['browserName'] = 'Chrome'\n    caps['appium:deviceName'] = 'Google Pixel 3a GoogleAPI Emulator'\n    caps['appium:platformVersion'] = '11.0'\n    caps['sauce:options'] = {}\n    caps['sauce:options']['appiumVersion'] = '1.20.2'\n}\n\n# run_session function searches for 'saucelabs' on google.com\n\ndef run_session(desired_cap):\n    driver = webdriver.Remote(\n\n        command_executor=\"https://SAUCE_USERNAME:SAUCE_ACCESS_KEY@ondemand.us-west-1.saucelabs.com/wd/hub\",\n        desired_capabilities=desired_cap)\n\n    # driver.get(\"https://www.ifconfig.me\")\n    # time.sleep(10)\n    # Test case for the saucelabs sample Android app.\n# If you have uploaded your app, update the test case here.\n    search_element = WebDriverWait(driver, 30).until(\n        EC.element_to_be_clickable(\n            (MobileBy.ACCESSIBILITY_ID, \"Search Wikipedia\"))\n    )\n    search_element.click()\n    search_input = WebDriverWait(driver, 30).until(\n        EC.element_to_be_clickable(\n            (MobileBy.ID, \"org.wikipedia.alpha:id/search_src_text\"))\n    )\n    search_input.send_keys(\"saucelabs\")\n    time.sleep(5)\n    search_results = driver.find_elements_by_class_name(\n        \"android.widget.TextView\")\n    assert(len(search_results) > 0)\n\n# Invoke driver.quit() after the test is done to indicate that the test is completed.\n    driver.quit()\n\n# The Thread function takes run_session function and each set of capability from the caps array as an argument to run each session in parallel\nfor cap in caps:\n    Thread(target=run_session, args=(cap,)).start()"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "TestMu AI",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Python",
        "text": "#samplewikipedia.py\n\nimport ssl\n\ntry:\n    _create_unverified_https_context = ssl._create_unverified_context\nexcept AttributeError:\n    # Legacy Python that doesn't verify HTTPS certificates by default\n    pass\nelse:\n    # Handle target environment that doesn't support HTTPS verification\n    ssl._create_default_https_context = _create_unverified_https_context\n\nfrom threading import Thread\nimport time\nfrom selenium import webdriver\nfrom selenium.webdriver.common.keys import Keys\nfrom selenium.webdriver.common.desired_capabilities import DesiredCapabilities\nfrom selenium.common.exceptions import TimeoutException\nfrom selenium.webdriver.support.ui import WebDriverWait\nfrom selenium.webdriver.support import expected_conditions as EC\nfrom appium.webdriver.common.mobileby import MobileBy\nfrom appium import webdriver\n\n\n# This array 'caps' defines the capabilities browser, device and OS combinations where the test will run\ncaps = [\n\n    {\n        \"deviceName\": \"Google Pixel 3\",\n        \"platformName\": \"Android\",\n        \"platformVersion\": \"11\",\n        \"app\": \"\",\n        \"isRealMobile\": True,\n        \"deviceOrientation\": \"PORTRAIT\",\n        \"build\": \"Demo\",\n           },\n]\n# run_session function searches for 'lambtest' on google.com\n\n\ndef run_session(desired_cap):\n    driver = webdriver.Remote(\n        # hub.mobile-dev-1.dev.lambdatest.io/wd/hub\",\n        command_executor=\"https://LT_USERNAME:LT_ACCESS_KEY@mobile-hub.lambdatest.com/wd/hub\",\n        desired_capabilities=desired_cap)\n\n    # driver.get(\"https://www.ifconfig.me\")\n    # time.sleep(10)\n    # Test case for the lambdatest sample Android app.\n# If you have uploaded your app, update the test case here.\n    search_element = WebDriverWait(driver, 30).until(\n        EC.element_to_be_clickable(\n            (MobileBy.ACCESSIBILITY_ID, \"Search Wikipedia\"))\n    )\n    search_element.click()\n    search_input = WebDriverWait(driver, 30).until(\n        EC.element_to_be_clickable(\n            (MobileBy.ID, \"org.wikipedia.alpha:id/search_src_text\"))\n    )\n    search_input.send_keys(\"lambdatest\")\n    time.sleep(5)\n    search_results = driver.find_elements_by_class_name(\n        \"android.widget.TextView\")\n    assert(len(search_results) > 0)\n\n# Invoke driver.quit() after the test is done to indicate that the test is completed.\n    driver.quit()\n\n\n# The Thread function takes run_session function and each set of capability from the caps array as an argument to run each session in parallel\nfor cap in caps:\n    Thread(target=run_session, args=(cap,)).start()"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "The Thread function takes run_session function and each set of capability from the caps array as an argument to run each session in parallel",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Python",
        "text": "\nfrom appium import webdriver\nfrom appium.webdriver.common.mobileby import MobileBy\nfrom selenium.webdriver.support.ui import WebDriverWait\nfrom selenium.webdriver.support import expected_conditions as EC\nimport time\n\nuserName = \"BrowserStack_UserName\"\naccessKey = \"BrowserStack_AccessKey\"\n\ndesired_caps = {\n    \"build\": \"Python Android\",\n    \"device\": \"Google Pixel 3\",\n    \"app\": \"\"\n}\n\ndriver = webdriver.Remote(\"https://\" + userName + \":\" + accessKey + \"@hub-cloud.browserstack.com/wd/hub\", desired_caps)"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 14",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Python",
        "text": "\nfrom threading import Thread\nimport time\nfrom selenium import webdriver\nfrom selenium.webdriver.common.keys import Keys\nfrom selenium.webdriver.common.desired_capabilities import DesiredCapabilities\nfrom selenium.common.exceptions import TimeoutException\nfrom selenium.webdriver.support.ui import WebDriverWait\nfrom selenium.webdriver.support import expected_conditions as EC\nfrom appium.webdriver.common.mobileby import MobileBy\nfrom appium import webdriver\n\n\n# This array 'caps' defines the capabilities browser, device and OS combinations where the test will run\n\ncaps = {\n    caps['platformName'] = 'Android'\n    caps['browserName'] = 'Chrome'\n    caps['appium:deviceName'] = 'Google Pixel 3a GoogleAPI Emulator'\n    caps['appium:platformVersion'] = '11.0'\n    caps['sauce:options'] = {}\n    caps['sauce:options']['appiumVersion'] = '1.20.2'\n}\n\n\n# run_session function searches for 'saucelabs' on google.com\n\n\ndef run_session(desired_cap):\n    driver = webdriver.Remote(\n\n        command_executor=\"https://SAUCE_USERNAME:SAUCE_ACCESS_KEY@ondemand.us-west-1.saucelabs.com/wd/hub\",\n        desired_capabilities=desired_cap)\n"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "run_session function searches for 'saucelabs' on google.com",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Python",
        "text": "from threading import Thread\nimport time\nfrom selenium import webdriver\nfrom selenium.webdriver.common.keys import Keys\nfrom selenium.webdriver.common.desired_capabilities import DesiredCapabilities\nfrom selenium.common.exceptions import TimeoutException\nfrom selenium.webdriver.support.ui import WebDriverWait\nfrom selenium.webdriver.support import expected_conditions as EC\nfrom appium.webdriver.common.mobileby import MobileBy\nfrom appium import webdriver\n\ncaps = [\n\n    {\n        \"deviceName\": \"Google Pixel 3\",\n        \"platformName\": \"Android\",\n        \"platformVersion\": \"11\",\n        \"app\": \"\",\n        \"build\": \"Demo\",\n           },\n]\n\ndef run_session(desired_cap):\n    driver = webdriver.Remote(command_executor=\"https://LT_USERNAME:LT_ACCESS_KEY@mobile-hub.lambdatest.com/wd/hub\", desired_capabilities=desired_cap)\n"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Desired Capabilities In Appium",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Python",
        "text": "caps = [\n\n    {\n        \"deviceName\": \"Galaxy Tab S4\",\n        \"platformName\": \"Android\",\n        \"platformVersion\": \"10\",\n        \"build\": \"Demo\",\n    },\n]"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Running Tests On TestMu AI Appium Grid",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Python",
        "text": "#samplewikipedia.py\n\nimport ssl\n\ntry:\n    _create_unverified_https_context = ssl._create_unverified_context\nexcept AttributeError:\n    # Legacy Python that doesn't verify HTTPS certificates by default\n    pass\nelse:\n    # Handle target environment that doesn't support HTTPS verification\n    ssl._create_default_https_context = _create_unverified_https_context\n\nfrom threading import Thread\nimport time\nfrom selenium import webdriver\nfrom selenium.webdriver.common.keys import Keys\nfrom selenium.webdriver.common.desired_capabilities import DesiredCapabilities\nfrom selenium.common.exceptions import TimeoutException\nfrom selenium.webdriver.support.ui import WebDriverWait\nfrom selenium.webdriver.support import expected_conditions as EC\nfrom appium.webdriver.common.mobileby import MobileBy\nfrom appium import webdriver\n\n\n# This array 'caps' defines the capabilities of the browser, device, and OS combinations where the test will run\ncaps = [\n\n    {\n        \"deviceName\": \"Galaxy Tab S4\",\n        \"platformName\": \"Android\",\n        \"platformVersion\": \"10\",\n        \"app\": \"lt://APP10051525539885437397\",\n        \"isRealMobile\": True,\n        \"deviceOrientation\": \"PORTRAIT\",\n        \"visual\": True,\n        \"console\": True,\n        \"build\": \"Demo\",\n           },\n]\n# run_session function searches for 'lambdatest' on google.com\n\n\ndef run_session(desired_cap):\n    driver = webdriver.Remote(\n        # hub.mobile-dev-1.dev.lambdatest.io/wd/hub\",\n        command_executor=\"https://LT_USERNAME:LT_ACCESS_KEY@mobile-hub.lambdatest.com/wd/hub\",\n        desired_capabilities=desired_cap)\n\n    # driver.get(\"https://www.ifconfig.me\")\n    # time.sleep(10)\n    # Test case for the lambdatest sample Android app.\n# If you have uploaded your app, update the test case here.\n    search_element = WebDriverWait(driver, 30).until(\n        EC.element_to_be_clickable(\n            (MobileBy.ACCESSIBILITY_ID, \"Search Wikipedia\"))\n    )\n    search_element.click()\n    search_input = WebDriverWait(driver, 30).until(\n        EC.element_to_be_clickable(\n            (MobileBy.ID, \"org.wikipedia.alpha:id/search_src_text\"))\n    )\n    search_input.send_keys(\"lambdatest\")\n    time.sleep(5)\n    search_results = driver.find_elements_by_class_name(\n        \"android.widget.TextView\")\n    assert(len(search_results) > 0)\n\n# Invoke driver.quit() after the test is done to indicate that the test is completed.\n    driver.quit()\n\n\n# The Thread function takes run_session function and each set of capability from the caps array as an argument to run each session in parallel\nfor cap in caps:\n    Thread(target=run_session, args=(cap,)).start()\n"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

## From Local Grid, BrowserStack Or SauceLabs To TestMu AI

TestMu AI offers an online Appium automation grid to perform App automation. The online Appium Grid is available on local grid, BrowserStack, Sauce Labs and TestMu AI. Therefore, you can effortlessly migrate your current Appium automation scripts (or suites) from local grid, Sauce Labs or BrowserStack to TestMu AI.

In this documentation, we look at how to leverage TestMu AI cloud for App automation and migrate your test scripts (or test suites) from your local grid, Sauce Labs or BrowserStack. You can use TestMu AI's desired capabilities in your tests, authenticate your test session, and execute tests on the cloud.

## Introduction

Migrating your current local grid, BroweseStack or Sauce Labs tests to TestMu AI requires a few tweaks in your code. In this guide, we'll look at how to leverage TestMu AI's desired capabilities in your tests, authenticate your test session, and execute tests on our cloud browsers.

## Migration From BrowserStack And SauceLabs

## Changes In The Test Script

To move from the local grid, BroweseStack or Sauce Labs to TestMu AI, you need to make some changes to your test suites such as authentication, desired capabilities etc.

### Authentication

Firstly, you need to change the authentication in the configuration settings of your test suite. For running tests on TestMu AI Appium Grid, you need to have a valid `user_name` and `access_key` to perform tests on our cloud Grid. In case you don’t have an account on TestMu AI, visit the TestMu AI **signup** page and create a new account.

The following are the changes in the parameters:

- Username
- Access Key

You can find the `Username` and `Access Key` in the **TestMu AI Profile Section** of the **Automation Dashboard**.

When migrating from BrowserStack or Sauce Labs to TestMu AI, you need to make the following changes in the existing code:

1. UserName
2. AccessKey
3. Hub URL
4. Desired Capabilities

Here is a side-by-side comparison of each of the fields that we have highlighted above:

| Property  | Type   | BrowserStack                                    | Sauce Labs                                     | TestMu AI                                    |
| --------- | ------ | ----------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| UserName  | String | UserName to access Appium Grid on BrowserStack  | UserName to access Appium Grid on Sauce Labs  | UserName to access Appium Grid on TestMu AI  |
| AccessKey | String | AccessKey to access Appium Grid on BrowserStack | AccessKey to access Appium Grid on Sauce Labs | AccessKey to access Appium Grid on TestMu AI |
| Hub URL   | String | @hub-cloud.browserstack.com/wd/hub              | ondemand.us-west-1.saucelabs.com/wd/hub       | @hub.lambdatest.com/wd/hub                    |

For a Python-based implementation, here are the changes in the script for the authentication process.

**BrowserStack**

```python
userName = "BrowserStack_UserName"
accessKey = "BrowserStack_AccessKey"
```

**Sauce Labs**

```python
userName = "SAUCE_USERNAME"
accessKey = "SAUCE_ACCESS_KEY"
```

**TestMu AI**

```python
userName = "LambdaTest_UserName"
accessKey = "LambdaTest_AccessKey"
```

### Changes To The Hub URL

Now you have to modify the hub URL in your test suite's configuration settings. The Hub URL is of the String type and specifies the Hub location to which the Appium tests will be routed for execution.

For a Python-based implementation, here are the changes in the script for Hub URL.

**BrowserStack**

```
@hub-cloud.browserstack.com/wd/hub
```

**Sauce Labs**

```
@ondemand.us-west-1.saucelabs.com/wd/hub
```

**TestMu AI**

```
@mobile-hub.lambdatest.com/wd/hub
```

### Desired Capability Generator

Capabilities generator allows you to specify the desired capabilities (or capabilities), which are configuration options that allow you to specify the following:

1. Device
2. Operating system

You can also select other advanced options available in the TestMu AI Capabilities Generator.

For the migration, we have taken Java-based Appium tests. Below are the screenshots of the capability generator of BrowserStack and TestMu AI.

#### **BrowserStack**

#### **Sauce Labs**

#### **TestMu AI**

The comparison of the capabilities generated by BrowserStack and TestMu AI capabilities generator:

| Capabilities     | BrowserStack | Sauce Labs       | TestMu AI      |
| ---------------- | ------------ | --------------- | --------------- |
| Device           | device       | deviceName      | deviceName      |
| Operating System | os_version   | platformVersion | platformVersion |

The following is an overview of the comparison of Desired Capabilities for the Java language:

**BrowserStack**

```js
//demo.java
DesiredCapabilities capabilities = new DesiredCapabilities();
capabilities.setCapability("os_version", "9.0");
capabilities.setCapability("device", "Google Pixel 3");
capabilities.setCapability("browserstack.appium_version", "1.21.0");
```

**Sauce Labs**

```java
//demo.java
MutableCapabilities caps = new MutableCapabilities();
caps.setCapability("platformName", "Android");
caps.setCapability("browserName", "Chrome");
caps.setCapability("appium:deviceName", "Google Pixel 3 GoogleAPI Emulator");
caps.setCapability("appium:platformVersion", "12.0");
MutableCapabilities sauceOptions = new MutableCapabilities();
sauceOptions.setCapability("appiumVersion", "1.21.0");
caps.setCapability("sauce:options", sauceOptions);
```

**TestMu AI**

```js
//demo.java
DesiredCapabilities capabilities = new DesiredCapabilities();
capabilities.setCapability("build", "your build name");
capabilities.setCapability("name", "your test name");
capabilities.setCapability("platformName", "Android");
capabilities.setCapability("deviceName", "Google Pixel 3");
capabilities.setCapability("isRealMobile", true);
capabilities.setCapability("platformVersion","9");
```

### Example: Migration To TestMu AI

Let's look an example that shows the entire migration process. The test scenario is to open a Wikipedia app that search the term ‘lambdatest’. The following test runs on Google Pixel 3 running Android 11.

#### **BrowserStack**

```python

from appium import webdriver
from appium.webdriver.common.mobileby import MobileBy
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

userName = "BrowserStack_UserName"
accessKey = "BrowserStack_AccessKey"

desired_caps = {
"build": "Python Android",
"device": "Google Pixel 3",
"app": "<app_url>"
}

driver = webdriver.Remote("https://" + userName + ":" + accessKey + "@hub-cloud.browserstack.com/wd/hub", desired_caps)

search_element = WebDriverWait(driver, 30).until(
EC.element_to_be_clickable((MobileBy.ACCESSIBILITY_ID, "Search Wikipedia"))
)
search_element.click()

search_input = WebDriverWait(driver, 30).until(
EC.element_to_be_clickable((MobileBy.ID, "org.wikipedia.alpha:id/search_src_text"))
)
search_input.send_keys("BrowserStack")
time.sleep(5)

search_results = driver.find_elements_by_class_name("android.widget.TextView")
assert(len(search_results) > 0)

driver.quit()
```

#### **SauceLabs**

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

caps = {
caps['platformName'] = 'Android'
caps['browserName'] = 'Chrome'
caps['appium:deviceName'] = 'Google Pixel 3a GoogleAPI Emulator'
caps['appium:platformVersion'] = '11.0'
caps['sauce:options'] = {}
caps['sauce:options']['appiumVersion'] = '1.20.2'
}

# run_session function searches for 'saucelabs' on google.com

def run_session(desired_cap):
driver = webdriver.Remote(

command_executor="https://SAUCE_USERNAME:SAUCE_ACCESS_KEY@ondemand.us-west-1.saucelabs.com/wd/hub",
desired_capabilities=desired_cap)

# driver.get("https://www.ifconfig.me")
# time.sleep(10)
# Test case for the saucelabs sample Android app.
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
search_input.send_keys("saucelabs")
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

#### **TestMu AI**

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
"deviceName": "Google Pixel 3",
"platformName": "Android",
"platformVersion": "11",
"app": "<lt_app_url>",
"isRealMobile": True,
"deviceOrientation": "PORTRAIT",
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

The majority of the implementation, as shown above, remains unchanged. Only changes to the infrastructure are made (i.e. instead of BrowserStack, the app automation tests would be run on TestMu AI).

Let's analyze what has changed from the implementation point of view.

**BrowserStack**

```python

from appium import webdriver
from appium.webdriver.common.mobileby import MobileBy
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

userName = "BrowserStack_UserName"
accessKey = "BrowserStack_AccessKey"

desired_caps = {
"build": "Python Android",
"device": "Google Pixel 3",
"app": "<app_url>"
}

driver = webdriver.Remote("https://" + userName + ":" + accessKey + "@hub-cloud.browserstack.com/wd/hub", desired_caps)
```

**Sauce Labs**

```python

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

caps = {
caps['platformName'] = 'Android'
caps['browserName'] = 'Chrome'
caps['appium:deviceName'] = 'Google Pixel 3a GoogleAPI Emulator'
caps['appium:platformVersion'] = '11.0'
caps['sauce:options'] = {}
caps['sauce:options']['appiumVersion'] = '1.20.2'
}

# run_session function searches for 'saucelabs' on google.com

def run_session(desired_cap):
driver = webdriver.Remote(

command_executor="https://SAUCE_USERNAME:SAUCE_ACCESS_KEY@ondemand.us-west-1.saucelabs.com/wd/hub",
desired_capabilities=desired_cap)

```

**TestMu AI**

```python
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

caps = [

{
"deviceName": "Google Pixel 3",
"platformName": "Android",
"platformVersion": "11",
"app": "<lt_app_url>",
"build": "Demo",
},
]

def run_session(desired_cap):
driver = webdriver.Remote(command_executor="https://LT_USERNAME:LT_ACCESS_KEY@mobile-hub.lambdatest.com/wd/hub", desired_capabilities=desired_cap)

```

We have discussed how to migrate from Sauce Labs or BrowserStack to TestMu AI. Let’s explore how to migrate from the local grid to the cloud-based Appium grid.

## Migration From Local Grid

### Desired Capabilities In Appium

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

### Running Tests On TestMu AI Appium Grid

To begin, change the authentication in your test suite's configuration settings. To run the tests on TestMu AI Appium Grid, you need a valid user name and access key. If you were already performing tests on your local grid, you will need to modify your test script to initialize an Appium driver along with your desired capabilities.

Pass the capabilities to `@hub.lambdatest.com/wd/hub` with your TestMu AI authentication details, and you are done. Here is the sample Python test script.

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

> That’s all! In case you have any questions or need any additional information, you could reach out at our **24X7 Chat Support** or mail us directly at support@testmuai.com.
