# Appium with Python

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/llms.txt).

In this documentation, you will learn how to trigger a automation script of **Python** for application testing with **Appium** on TestMu AI, set the [**desired capabilities**](/support/docs/desired-capabilities-in-appium/) for appium testing, and other advanced features of TestMu AI.

## Prerequisites

- Your TestMu AI [Username and Access key](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/security).
- You should have [Python](https://www.python.org/downloads/) installed.
- Download and install [**pip**](https://pip.pypa.io/en/stable/installation/).

## Try our Sample Repository

### Step 1: Get a Sample Project
You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

**Sample repo**
All the code samples in this documentation can be found on **TestMu AI's Github Repository**. You can either download or clone the repository to quickly run your tests.  View on GitHub

### Step 2: Setup the Environment Variables

You need to export your environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in your [TestMu AI Profile page](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/security). Run the below mentioned commands in your terminal to setup the environment variables.

  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

  {`set LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
set LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

### Step 3: Upload your Application
Upload your **_iOS_** application (.ipa file) or **_android_** application (.apk or .aab file) to the TestMu AI servers using our **REST API**. You need to provide your **Username** and **AccessKey** in the format `Username:AccessKey` in the **cURL** command for authentication.

Make sure to add the path of the **appFile** in the cURL request. Below is an example cURL request to upload your app using our REST API:

      {`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "appFile=@"/Users/macuser/Downloads/proverbial_android.apk"" -F "name="proverbial_app""`}

      {`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "url=:https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk" -F "name=Proverbial_App"`}

- If you do not have any **.apk** or **.ipa** file, you can run your sample tests on TestMu AI by using our sample apps, :link: [Android app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk) or :link: [iOS app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_ios.ipa).

- Response of above cURL will be a **JSON** object containing the `APP_URL` of the format - `lt://APP123456789123456789` and will be used in the next step

### Step 4: Update your Automation Script

An automation script for the sample application given above has been provided here. Ensure to update the `APP_URL`, `username` and `accessKey` in the code scripts before running the tests.

```python title="ios.py"
from appium import webdriver
from appium.webdriver.common.mobileby import MobileBy
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
import os

desired_caps = {
"deviceName": "iPhone 12",
"platformName": "ios",
"platformVersion": "14",
"isRealMobile": True,
#highlight-next-line
"app": "APP_URL",  # Enter app (.ipa) url
"build": "Python Vanilla iOS",
"name": "Sample Test - Python",
"network": False,
"visual": True,
"video": True
}

def startingTest():
if os.environ.get("LT_USERNAME") is None:
username = "username" #Add username here
else:
username = os.environ.get("LT_USERNAME")
if os.environ.get("LT_ACCESS_KEY") is None:
accesskey = "accesskey" #Add accessKey here
else:
accesskey = os.environ.get("LT_ACCESS_KEY")

try:
driver = webdriver.Remote(desired_capabilities=desired_caps, command_executor="https://" +
username+":"+accesskey+"@mobile-hub.lambdatest.com/wd/hub")
time.sleep(3)
colorElement = WebDriverWait(driver, 20).until(
EC.element_to_be_clickable((MobileBy.ACCESSIBILITY_ID, "color")))
colorElement.click()
textElement = WebDriverWait(driver, 20).until(
EC.element_to_be_clickable((MobileBy.ACCESSIBILITY_ID, "Text")))
textElement.click()
toastElement = WebDriverWait(driver, 20).until(
EC.element_to_be_clickable((MobileBy.ACCESSIBILITY_ID, "toast")))
toastElement.click()
notification = WebDriverWait(driver, 20).until(
EC.element_to_be_clickable((MobileBy.ACCESSIBILITY_ID, "notification")))
notification.click()
time.sleep(3)
geolocation = WebDriverWait(driver, 20).until(
EC.element_to_be_clickable((MobileBy.ACCESSIBILITY_ID, "geoLocation")))
geolocation.click()
time.sleep(5)
driver.back()
home = WebDriverWait(driver, 20).until(
EC.element_to_be_clickable((MobileBy.ACCESSIBILITY_ID, "Home")))
home.click()
speedTest = WebDriverWait(driver, 20).until(
EC.element_to_be_clickable((MobileBy.ACCESSIBILITY_ID, "speedTest")))
speedTest.click()
time.sleep(5)
driver.back()
browser = WebDriverWait(driver, 20).until(
EC.element_to_be_clickable((MobileBy.ACCESSIBILITY_ID, "Browser")))
browser.click()
url = WebDriverWait(driver, 20).until(
EC.element_to_be_clickable((MobileBy.ACCESSIBILITY_ID, "url")))
url.send_keys("https://www.testmuai.com")
find = WebDriverWait(driver, 20).until(
EC.element_to_be_clickable((MobileBsy.ACCESSIBILITY_ID, "find")))
find.click()
driver.quit()
except:
driver.quit()

startingTest()
```

```python title="android.py"
from appium import webdriver
from appium.webdriver.common.mobileby import MobileBy
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
import os

desired_caps = {
"deviceName": "Galaxy S20",
"platformName": "Android",
"platformVersion": "10",
#highlight-next-line
"app": "APP_URL",  # Enter app (.apk) url
"isRealMobile": True,
"build": "Python Vanilla Android",
"name": "Sample Test - Python",
"network": False,
"visual": True,
"video": True
}

def startingTest():
if os.environ.get("LT_USERNAME") is None:
username = "username" #Add username here
else:
username = os.environ.get("LT_USERNAME")
if os.environ.get("LT_ACCESS_KEY") is None:
accesskey = "accesskey" #Add accessKey here
else:
accesskey = os.environ.get("LT_ACCESS_KEY")

try:
driver = webdriver.Remote(desired_capabilities=desired_caps, command_executor="https://" +
username+":"+accesskey+"@mobile-hub.lambdatest.com/wd/hub")
colorElement = WebDriverWait(driver, 20).until(EC.element_to_be_clickable(
(MobileBy.ID, "com.lambdatest.proverbial:id/color")))
colorElement.click()

textElement = WebDriverWait(driver, 20).until(
EC.element_to_be_clickable((MobileBy.ID, "com.lambdatest.proverbial:id/Text")))
textElement.click()

toastElement = WebDriverWait(driver, 20).until(EC.element_to_be_clickable(
(MobileBy.ID, "com.lambdatest.proverbial:id/toast")))
toastElement.click()

notification = WebDriverWait(driver, 20).until(EC.element_to_be_clickable(
(MobileBy.ID, "com.lambdatest.proverbial:id/notification")))
notification.click()

geolocation = WebDriverWait(driver, 20).until(EC.element_to_be_clickable(
(MobileBy.ID, "com.lambdatest.proverbial:id/geoLocation")))
geolocation.click()
time.sleep(5)

driver.back()

home = WebDriverWait(driver, 20).until(EC.element_to_be_clickable(
(MobileBy.ID, "com.lambdatest.proverbial:id/buttonPage")))
home.click()

speedTest = WebDriverWait(driver, 20).until(EC.element_to_be_clickable(
(MobileBy.ID, "com.lambdatest.proverbial:id/speedTest")))
speedTest.click()
time.sleep(5)

driver.back()

browser = WebDriverWait(driver, 20).until(EC.element_to_be_clickable(
(MobileBy.ID, "com.lambdatest.proverbial:id/webview")))
browser.click()

url = WebDriverWait(driver, 20).until(EC.element_to_be_clickable(
(MobileBy.ID, "com.lambdatest.proverbial:id/url")))
url.send_keys("https://www.testmuai.com")

find = WebDriverWait(driver, 20).until(EC.element_to_be_clickable(
(MobileBy.ID, "com.lambdatest.proverbial:id/find")))
find.click()
driver.quit()
except:
driver.quit()

startingTest()
```

- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**

### Step 5: Configure the Test Capabilities

You can update your custom capabilities in test scripts. In this sample project, we are passing platform name, platform version, device name and app url _(generated earlier)_ along with other capabilities like build name and test name via capabilities object.

The capabilities object in the sample code are defined as:

```python title="iOS(.ipa)"
desired_caps = {
"deviceName":"iPhone 12",
"platformName":"ios",
"platformVersion":"14",
"isRealMobile":True,
#highlight-next-line
"app":"YOUR_APP_URL",
"build":"Python Vanilla iOS",
"name":"Sample Test - Python",
"network":False,
"visual":True,
"video":True
}
```

```python title="Android(.apk)"
desired_caps = {
"deviceName":"Galaxy S20",
"platformName":"Android",
"platformVersion":"10",
"isRealMobile":True,
#highlight-next-line
"app":"YOUR_APP_URL",
"build":"Python Vanilla Android",
"name":"Sample Test - Python",
"network":False,
"visual":True,
"video":True
}
```

- You must add the generated **APP_URL** to the `app` capability in the config file.
- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**
- You can generate capabilities for your test requirements with the help of our inbuilt [**Capabilities Generator tool**](https://www.testmuai.com/capabilities-generator/).For more details, please refer to our guide on [**Desired Capabilities in Appium**](/support/docs/desired-capabilities-in-appium/).

### Step 6: Execute and Monitor your Tests

- Install the required packages from the cloned project directory:

```bash
pip install -r requirements.txt
```

- Run the following command in the directory where your project has been saved to execute your build.

```bash
python3 ios.py
```

```bash
python3 android.py
```

If you are unable to run the automation script with the above mentioned commands try **'python'** command except for **'python3'**.

  > Your test results would be displayed on the test console (or CLI if you are using terminal/cmd) and on the [TestMu AI App Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/build).

## Using the Appium Agent Skill with TestMu AI

The [appium-skill](https://github.com/LambdaTest/agent-skills/tree/main/appium-skill) is a part of [TestMu AI Skills](https://github.com/LambdaTest/agent-skills/) that guide AI coding assistants in generating production-ready test automation.

The appium-skill package includes:

```
appium-skill/
├── SKILL.md
└── reference/
├── playbook.md
└── advanced-patterns.md
```

It provides structured guidance for:

* Project structure and setup
* Dependency configuration
* Local execution
* TestMu AI cloud execution
* Debugging patterns
* CI/CD integration

### Installing Appium Agent Skill

Install a Appium Agent Skill using the command below:

```
# Clone the repo and copy the skill you need
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/appium-skill .claude/skills/

# Or for Cursor / Copilot
cp -r agent-skills/appium-skill .cursor/skills/
```

**Note**: If you prefer installing all available framework skills instead of only appium-skill, clone the repository directly into your tool's skills directory (for example, .claude/skills/, .cursor/skills/, .gemini/skills/, or .agent/skills/).

## Reference Guides

- [Advanced Configuration for Capabilities](/support/docs/desired-capabilities-in-appium/)
- [How to test locally hosted apps](/support/docs/testing-locally-hosted-pages/)
- [How to integrate TestMu AI with CI/CD](/support/docs/integrations-with-ci-cd-tools/)
