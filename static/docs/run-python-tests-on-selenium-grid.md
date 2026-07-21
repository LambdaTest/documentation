# Quick Guide To Run Python Tests On TestMu AI Selenium Grid

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

TestMu AI Selenium Automation Grid is a cloud based scalable [Selenium testing](https://www.testmuai.com/selenium-automation) platform which enables you to run your automation scripts on 3000+ different browsers and operating systems. You can leverage TestMu AI Selenium grid to not only decrease the build time of Python automation scripts, but also increase your test coverage and check for more range of browsers for cross browser compatibility. This post will help you in getting started with configuring and running your Python based automation test scripts on TestMu AI Selenium cloud platform.

## Prerequisites

- Make sure that you have the latest Python build installed. You can download the latest Python build from [this page](https://www.python.org/downloads/).

- You would need Python package manager, pip, as well. Usually latest python installers come prepacked with pip. However, if you don’t have pip, you can install it using the below command:

        curl https://bootstrap.pypa.io/get-pip.py | python

## Installing Selenium Dependencies For Python

Make sure that you have installed Selenium dependencies before executing your tests. You can use pip to install Selenium using following command:

    pip install selenium
    export PYTHONWARNINGS="ignore:Unverified HTTPS request"   //Disable SSL warning

## Sample Python & Selenium Test To Get You started

Now we are all set to execute the first Python test on TestMu AI Selenium Grid. Checkout the sample code below. This is a simple python code that uses TestMu AI Selenium grid to open up Google. You can also download it from our [GitHub repo](https://github.com/LambdaTest/python-selenium-sample).

### Sample Python & Selenium Automation Script

```
"""
LambdaTest Selenium automation sample example
Configuration
----------
username: Username can be found at automation dashboard
accessToken:  AccessToken can be generated from automation dashboard or profile section

Result
-------
Execute Python Automation Tests on LambdaTest Distributed Selenium Grid
"""
import unittest
import time
from selenium import webdriver
from selenium.webdriver.common.keys import Keys

class LTAutomate(unittest.TestCase):

"""
Setup remote driver
Params
----------
platform : Supported platform - (Windows 10, Windows 8.1, Windows 8, Windows 7,  macOS High Sierra, macOS Sierra, OS X El Capitan, OS X Yosemite, OS X Mavericks)
browserName : Supported platform - (chrome, firefox, Internet Explorer, MicrosoftEdge)
version :  Supported list of version can be found at https://www.testmuai.com/capabilities-generator/

Result
-------
"""
def setUp(self):
# username: Username can be found at automation dashboard
username="{YOUR_LAMBDATEST_USERNAME}"
# accessToken:  AccessToken can be generated from automation dashboard or profile section
accessToken="{YOUR_LAMBDATEST_ACCESS_KEY}"
# gridUrl: gridUrl can be found at automation dashboard
gridUrl = "hub.lambdatest.com/wd/hub"

desired_cap = {
'platform' : "win10",
'browserName' : "chrome",
'version' :  "67.0",
# Resolution of machine
"resolution": "1024x768",
"name": "LambdaTest python google search test ",
"build": "LambdaTest python google search build",
"network": True,
"video": True,
"visual": True,
"console": True,
}

# URL: https://{username}:{accessToken}@hub.lambdatest.com/wd/hub
url = "https://"+username+":"+accessToken+"@"+gridUrl

print("Initiating remote driver on platform: "+desired_cap["platform"]+" browser: "+desired_cap["browserName"]+" version: "+desired_cap["version"])
self.driver = webdriver.Remote(
desired_capabilities=desired_cap,
command_executor= url
)

"""
Setup remote driver
Params
----------
Execute test:  navigate google.com search LambdaTest
Result
-------
print title
"""
def test_search_in_google(self):
driver = self.driver
print("Driver initiated successfully.  Navigate url")
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
def tearDown(self):
self.driver.quit()

if __name__ == "__main__":
unittest.main()

```

You can execute the test from your terminal through this command.

    python google-search-lambdatest.py

The first thing to note here, is the use of remote WebDriver. Also checkout how the test passed on the enthronement configuration via desired_cap class.

To use your choice of environment for the test you can leverage our Capability Generator tool.

TestMu AI Capability Generator Tool

> **Tear Down**: The tear down method helps TestMu AI platform understand when the execution of a test is finished. It’s important to tear down each test or else it will give timeout errors.
