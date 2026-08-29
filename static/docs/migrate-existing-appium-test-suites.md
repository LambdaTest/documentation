# How to Migrate Appium Tests to TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Migrating Appium tests to TestMu AI moves your existing suites from a local grid or another cloud onto its real device automation cloud. Update authentication with your credentials, swap in TestMu AI desired capabilities, and execute the same scripts remotely.

TestMu AI offers an online Appium automation grid to perform App automation. Therefore you can easily migrate Appium tests from your local grid to the TestMu AI platform. You can use TestMu AI's desired capabilities in your tests, authenticate your test session, and execute tests on the cloud.

## Changes In The Test Script


To move from the local grid to the cloud-based Appium grid, you need to make some changes to your automation scripts like authentication, desired capabilities etc.

## Authentication


To run tests on TestMu AI, you will need TestMu AI authentication credentials: TestMu AI Username and a TestMu AI Access Key. If you do not have a TestMu AI account, visit the TestMu AI register page and create one.

You can get the TestMu AI Username and TestMu AI Access Key from your TestMu AI Profile.



## Desired Capabilities In Appium


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

## Running Tests On TestMu AI Appium Grid


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

## Testing Locally Hosted Apps


## Supported Languages And Frameworks


>That’s all! In case you have any questions or need any additional information, you could reach out at our **24X7 Chat Support** or mail us directly at support@testmuai.com.
