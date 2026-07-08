# Apple TV With Appium

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/llms.txt).

## Tutorial To Run Your First Test On TestMu AI

As smart TVs continue to grow in popularity, relying solely on manual testing is no longer sufficient. Automating Apple TV testing provides broader device coverage, enhances user experience by validating remote-based navigation, and eliminates repetitive manual tasks. It also helps uncover issues earlier in the development cycle, ensuring a smooth and consistent experience across different Apple TV models.
In this guide, you will learn how to set up and run your **Apple TV** automation testing scripts with **Appium** on the **TestMu AI Real Device Cloud platform**.

> To enable it for your organization, please contact us via **24×7 chat support** or you can also drop a mail to **support@testmuai.com**.

## Objective

By the end of this topic, you will be able to:

1.  Set up an environment for testing your Apps using **Apple TV** with **Appium**.
2.  Understand and configure the core capabilities required for your Appium test suite.
3.  Explore the advanced features of TestMu AI.

**Sample repo**

All the code samples in this documentation can be found on **TestMu AI's Github Repository**. You can either download or clone the repository to quickly run your tests.  View on GitHub

## Prerequisites

Before you can start performing App automation testing with Appium, you would need to follow these steps:

- You have access to TestMu AI username and accessKey. If you have not registered yet, you can do the same by visiting our website. You will be able to access the credentials in the [TestMu AI Profile](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/details/profile)
- Install the latest Python build from the [official website](https://www.python.org/downloads/). We recommend using the latest version.
- Make sure **pip** is installed in your system. You can install **pip** from [pip documentation](https://pip.pypa.io/en/stable/installation/).

## Supported Models ##

| Device                      | OS Version             |
|-----------------------------|------------------------|
|        Apple TV             | 18                     |
|        Apple TV 4K          | 18                     |

## Run your first test

### 1. Upload your application
Upload your **Apple TV** application (.ipa file) to the TestMu AI servers using our **REST API**. You need to provide your **Username** and **AccessKey** in the format `Username:AccessKey` in the **cURL** command for authentication. Make sure to add the path of the **appFile** in the cURL request. Here is an example cURL request to upload your app using our REST API:

 **Using App File from System:**

{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "appFile=@"/Users/macuser/Downloads/apple-tv-sample-app.ipa"" -F "name="appletv_app""
`}

- If you do not have any **.ipa** file, you can run your sample tests on TestMu AI by using our sample :link: [AppleTV app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/apple-tv-sample-app.ipa).
- Response of above cURL will be a **JSON** object containing the `APP_URL` of the format - ``lt://APP123456789123456789`` and will be used in the next step.

### 2. Clone the sample project

1. Clone the TestMu AI’s [LT-appium-appletv](https://github.com/LambdaTest/LT-appium-appletv) and navigate to the code directory as shown below:

```bash
git clone https://github.com/LambdaTest/LT-appium-appletv
cd LT-appium-appletv
```

### 3. Set up your authentication

Make sure you have your TestMu AI credentials with you to run test automation scripts on TestMu AI. To obtain your access credentials, [purchase a plan](https://billing.lambdatest.com/billing/plans) or access the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/). Then, set TestMu AI `Username` and `Access Key` in environment variables with following commands.

  {`export LT_USERNAME=${ YOUR_LAMBDATEST_USERNAME()} \\
export LT_ACCESS_KEY=${ YOUR_LAMBDATEST_ACCESS_KEY()}`}

  {`set LT_USERNAME=${ YOUR_LAMBDATEST_USERNAME()} \`
set LT_ACCESS_KEY=${ YOUR_LAMBDATEST_ACCESS_KEY()}`}

### 4. Write your automation script

An automation script for the sample application available above has been provided below. Ensure to update the `APP_URL`, `username` and `accessKey` in the code scripts before running the tests.

```python title="appletv.py"
from appium import webdriver
import os
import time
from appium.webdriver.common.appiumby import AppiumBy

def getCaps():
ltOPtions = {
"deviceName" : "Apple TV",
"platformVersion" :  "18",
"platform" : "tvos",
"isRealMobile": True,
"build": "Apple TV Testing",
"video": True,
"app":"APP_URL",   #Enter app url here
"network": True,
"devicelog": True,
"visual" : True
}

desired_caps = {"lt:options": ltOPtions}

return desired_caps

def runTest():
if os.environ.get("LT_USERNAME") is None:
# Enter LT username below if environment variables have not been added
username = "username"
else:
username = os.environ.get("LT_USERNAME")
if os.environ.get("LT_ACCESS_KEY") is None:
# Enter LT accesskey below if environment variables have not been added
accesskey = "accesskey"
else:
accesskey = os.environ.get("LT_ACCESS_KEY")

# grid url
gridUrl = "mobile-hub.lambdatest.com/wd/hub"

# capabilities
desired_cap = getCaps()
url = "https://"+username+":"+accesskey+"@"+gridUrl

print("Initiating remote driver on platform: "+desired_cap["lt:options"]["deviceName"])
driver = webdriver.Remote(
desired_capabilities=desired_cap,
command_executor= url
)

# run test
print(driver.session_id)

element = driver.switch_to.active_element
active = element.get_attribute('label')

if active != "Keyboard":
element = driver.find_element(by=AppiumBy.ACCESSIBILITY_ID, value="EnterWebsiteName")
element.click()
time.sleep(1)

element = driver.find_element(by=AppiumBy.ACCESSIBILITY_ID, value="EnterWebsiteName")
element.clear()
time.sleep(1)

element = driver.find_element(by=AppiumBy.CLASS_NAME, value="//XCUIElementTypeApplication[@name=\"chief.qaTvTestApp\"]/XCUIElementTypeWindow/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther[3]/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeTextView/XCUIElementTypeOther/XCUIElementTypeOther")
element.send_keys("https://ifconfig.me")

driver.execute_script('mobile: pressButton', { 'name': 'Right' })
driver.execute_script('mobile: pressButton', { 'name': 'Right' })
driver.execute_script('mobile: pressButton', { 'name': 'Right' })
driver.execute_script('mobile: pressButton', { 'name': 'Right' })
driver.execute_script('mobile: pressButton', { 'name': 'Right' })
driver.execute_script('mobile: pressButton', { 'name': 'Right' })
driver.execute_script('mobile: pressButton', { 'name': 'Right' })
driver.execute_script('mobile: pressButton', { 'name': 'Right' })
driver.execute_script('mobile: pressButton', { 'name': 'Right' })
driver.execute_script('mobile: pressButton', { 'name': 'Right' })
driver.execute_script('mobile: pressButton', { 'name': 'Down' })
driver.execute_script('mobile: pressButton', { 'name': 'Down' })
driver.execute_script('mobile: pressButton', { 'name': 'Down' })

element = driver.switch_to.active_element
element.click()
time.sleep(1)

driver.execute_script('mobile: pressButton', { 'name': 'Right' })
element = driver.switch_to.active_element
element.click()
time.sleep(3)
driver.execute_script("lambda-status=passed")
driver.quit()

if __name__ == "__main__":
runTest()
```

### Configure the test capabilities

You can update your custom capabilities in test scripts. In this sample project, we are passing platform name, platform version, device name and app url (generated earlier) along with other capabilities like build name and test name via capabilities object. The capabilities object in the sample code are defined as:

**Supported Capabilities:**
Same as iOS

**Platform:**
`"tvOS"`

```python title="appletv.py"
def getCaps():
ltOPtions = {
"deviceName" : "Apple TV",
"platformVersion" :  "18",
"platform" : "tvos",
"isRealMobile": True,
"build": "Apple TV Testing",
"video": True,
"app":"APP_URL",   #Enter app url here
"network": True,
"devicelog": True,
"visual" : True
}

desired_caps = {"lt:options": ltOPtions}
```

**Note**

- You must add the generated **APP_URL** to the `"app"` capability in the config file.
- You can generate capabilities for your test requirements with the help of our inbuilt **Capabilities Generator**.For more details, please refer to our guide on [Desired Capabilities in Appium](/support/docs/desired-capabilities-in-appium/).

### 5. Execute your test case

1. Install the required packages from the cloned project directory:

```bash
pip install -r requirements.txt
```

2. Run the following command in the directory where your project has been saved to execute your build.

```python
python appletv.py
```

If you are unable to run the automation script with the above mentioned commands try **'python3'** command except for **'python'**.

Your test results would be displayed on the test console (or command-line interface if you are using terminal/cmd) and on the [TestMu AI App Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/build).

## Additional Links

- [Advanced Configuration for Capabilities](/support/docs/desired-capabilities-in-appium/)
- [How to test locally hosted apps](/support/docs/testing-locally-hosted-pages/)
- [How to integrate TestMu AI with CI/CD](/support/docs/integrations-with-ci-cd-tools/)
