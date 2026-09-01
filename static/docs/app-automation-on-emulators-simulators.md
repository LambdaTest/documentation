# How to Run App Tests on Emulators on TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

App automation on TestMu AI runs mobile app tests across cloud-based emulators and simulators, eliminating physical devices while validating functionality across many configurations. It supports the Appium framework, letting you clone a sample project, upload your app, and set capabilities.

**Note**

Currently, App Automation is available for Emulators and Simulators in the Beta phase, with support for the Appium framework. To use this feature, [Contact Sales](https://www.testmuai.com/contact-us).

## Prerequisites

Bеforе you gеt startеd with App Automation on LambdaTеst, makе surе you havе thе following prеrеquisitеs in placе:

1. Sign up for a LambdaTеst account if you havеn't alrеady.

2. Install [Appium Java Client](https://github.com/appium/java-client).

3. A TestMu AI Username and Access Key.

4. Ensure you have an access to an **Android** app (*.apk* or *.aab* file) or an **iOS** *zip* file (containing *.app* file).

Don't have **.apk** or **.app** filеs? You can still run your samplе tеsts on LambdaTеst using our samplе Android and iOS applications, accеssiblе through thе following links:

* [Samplе Android App](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk)
* [Samplе iOS App](https://prod-mobile-artefacts.lambdatest.com/assets/docs/firefox.zip)

## Run Your First Test

Here are the following steps to run your first app automated test on Emulators and Simulators.

### Step 1: Upload Your Application

Upload your **iOS** application (*.app* file) or **Android** application (*.apk* file) to the TestMu AI servers using our **REST API**. You need to provide your **Username** and **AccessKey** in the format `Username:AccessKey` in the **cURL** command for authentication. Make sure to add the path of the **appFile** in the cURL request. Here is an example cURL request to upload your app using our REST API:

{`curl -u ":" \
--location --request POST 'https://manual-api.lambdatest.com/app/upload/virtualDevice' \
--form 'name="Android_App"' \
--form 'appFile=@"/Users/macuser/Downloads/proverbial_android.apk"'
`}

{`curl -u ":" \
--location --request POST 'https://manual-api.lambdatest.com/app/upload/virtualDevice' \
--form 'name="Android_App"' \
--form 'appFile=@"/Users/macuser/Downloads/proverbial_android.apk"'
`}

{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" \\
--location --request POST 'https://manual-api.lambdatest.com/app/upload/virtualDevice' \\
--form 'name="Android_App"' \\
--form 'url="https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk"'`}

{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST "https://manual-api.lambdatest.com/app/upload/virtualDevice" --header "Content-Type: application/x-www-form-urlencoded" --data-urlencode "url=:https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk" --data-urlencode "name=Proverbial_App"`}

**Note**

Response of above cURL will be a **JSON** object containing the `App URL` of the format - ``lt://APP123456789123456789`` and will be used in the Step 2.

### Step 2: Write Your Automation Script

1. Write your automation script in your preferred language that Appium framework supports.

In the below test script, ensure to update the `app_url`, `username` and `accesskey`.

**Set the Capability**
To run the test on Emulator/Simulator, set the `isRealMobile` capability to `false`.

```python
# Tested on python3, Selenium 4.9.0, Appium-Python-Client 2.2.0

from appium import webdriver
from selenium.webdriver.common.by import By
import time

def startingTest():
print(f"Starting test")
desiredCap = caps[0].copy()

print(
f"deviceName {desiredCap['lt:options'].get('deviceName')}, platformVersion {desiredCap['lt:options'].get('platformVersion')}"
)

try:
driver = webdriver.Remote(command_executor=url, desired_capabilities=desiredCap)
except Exception as e:
print("err", e)
return

try:
print(f"driver created")
time.sleep(10)

ctx = driver.current_context
print("ctx", ctx)
sessionId = driver.session_id
print("sessionId", sessionId)
isKeyBoardShown = driver.is_keyboard_shown()
print(f"isKeyboardShown {isKeyBoardShown}")
isLocked = driver.is_locked()
print("isLocked", isLocked)
isInstalled = driver.is_app_installed("com.example.QAapp")
print("isInstalled", isInstalled)

print(driver.page_source)
elem = driver.find_element(By.ID, "com.example.QAapp:id/webpage").click()
print("element", elem)
time.sleep(2)

driver.find_element(By.ID, "com.example.QAapp:id/websiteName").send_keys(
"ThisIsDemoText"
)
driver.find_element(By.ID, "websiteName").clear()
elem = driver.find_element(By.ID, "com.example.QAapp:id/findButton")
print("element", elem)

driver.find_element(By.ID, "com.example.QAapp:id/websiteName").click()
params = {"command": "input-text", "text": "thisIsMyText"}
result = driver.execute_script("lambda-adb", params)
print("result", result)
time.sleep(2)

driver.find_element(By.ID, "com.example.QAapp:id/websiteName").send_keys(
"https://www.ifconfig.me"
)
driver.find_element(By.ID, "findButton").click()
time.sleep(2)
driver.find_element(By.ID, "com.example.QAapp:id/websiteName").send_keys(
"https://google.com"
)
driver.find_element(By.ID, "findButton").click()
time.sleep(2)

if desiredCap["lt:options"].get("tunnel"):
driver.find_element(By.ID, "com.example.QAapp:id/websiteName").send_keys(
"http://localhost.lambdatest.com:8001"
)
driver.find_element(By.ID, "findButton").click()
time.sleep(5)

driver.orientation = "LANDSCAPE"

print("Quitting test")
driver.quit()
except Exception as e:
print(e)
driver.quit()

USERNAME = "YOUR_USERNAME"
ACCESS_KEY = "YOUR_ACCESS_KEY"
url = "https://{USERNAME}:{ACCESS_KEY}@mobile-hub.lambdatest.com/wd/hub"

buildName = "Testing build"
numTests = 1

caps = [
{
"lt:options": {
"w3c": True,
"platformName": "Android",
"allowInvisibleElements": True,
"deviceName": "Galaxy A33 5G",
"platformVersion": "13",
"app": "YOUR_APP_URL",
"devicelog": True,
"build": buildName,
"visual": True,
"network": True,
"tunnel": False,
"video": True,
"isRealMobile": false,
},
}
]
startingTest()
```

```python
from appium import webdriver
from selenium.webdriver.common.by import By
import time

def simulatorTest():
print(f"Starting test")
try:
driver = webdriver.Remote(command_executor=url, desired_capabilities=caps)
except Exception as e:
print(f"Error creating driver", e)
return

try:
print(f"driver created")
time.sleep(10)
for i in range(0, 1):
ctx = driver.current_context
print("ctx", ctx)

sshot = driver.get_screenshot_as_base64()
print("sshot", sshot[:100])

print("Getting page source")
print("page_src1", driver.page_source)

sessionId = driver.session_id
print("sessionId", sessionId)
driver.is_keyboard_shown()
isLocked = driver.is_locked()
print("isLocked", isLocked)
element = driver.switch_to.active_element
print(f"element", element)
element.send_keys("https://google.com\n")
time.sleep(5)

if caps["lt:options"].get("tunnel"):
driver.find_element(By.NAME, "url").send_keys(
"http://localhost.lambdatest.com:8001\n"
)
time.sleep(5)

driver.find_element(By.NAME, "url").send_keys("https://mylocationnow.io/\n")
time.sleep(5)

driver.find_element(By.NAME, "url").send_keys("http://www.fast.com\n")
time.sleep(2)

print(f"Quitting")
driver.quit()
except Exception as e:
print(f', error platformVersion {caps["lt:options"]["platformVersion"]} :: {e}')
driver.execute_script("lambda-status=failed")
driver.quit()

# prod
url = "https://{USERNAME}:{ACCESS_KEY}@mobile-hub.lambdatest.com/wd/hub"

buildName = "Testing build"
numTests = 1

caps = {
"lt:options": {
"w3c": True,
"platformName": "ios",
"deviceName": "iPhone 12",
"platformVersion": "14.5",
"app": "YOUR_APP_URL",
"devicelog": True,
"build": buildName,
"visual": True,
"network": True,
"video": True,
"isRealMobile": false,
},
}

simulatorTest()
```

2. Create `.XML` file in order to run your test and define device capabilities. Please find sample code below for the same.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE suite SYSTEM "http://testng.org/testng-1.0.dtd">
<suite thread-count="100" name="Mobile" parallel="tests">

<test name="AppTest 1">
<parameter name="version" value="11"/>
<parameter name="platform" value="Android"/>
<parameter name="device" value="Galaxy S21 Ultra 5G"/>
<classes>
<class name="AndroidApp"/>
</classes>
</test>

<test name="AppTest 2">
<parameter name="version" value="11"/>
<parameter name="platform" value="Android"/>
<parameter name="device" value="Galaxy S21"/>
<classes>
<class name="AndroidApp"/>
</classes>
</test>
</suite>
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE suite SYSTEM "http://testng.org/testng-1.0.dtd">
<suite thread-count="100" name="Mobile" parallel="tests">

<test name="iOSApp 1">
<parameter name="version" value="14"/>
<parameter name="platform" value="iOS"/>
<parameter name="device" value="iPhone 11"/>
<classes>
<class name="iOSApp"/>
</classes>
</test>

<test name="iOSApp 2">
<parameter name="version" value="14"/>
<parameter name="platform" value="iOS"/>
<parameter name="device" value="iPhone 12 Pro"/>
<classes>
<class name="iOSApp"/>
</classes>
</test>
</suite>
```

### Step 3: Execute Your Test Case

Debug and run your code. Run `iOSApp.java` or `AndroidApp.java` in your editor.

### Step 4: View Test Execution

Once you have run your tests, you can view the test execution along with logs. You will be able to see the test cases passing or failing. You can view the same at TestMu AI [App Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/build).

## More About Desired Capabilities

Sample Capabilities for both Android and iOS are mentioned below -

```java
{
"deviceName": "Galaxy Tab S4",
"platformName": "android",
"platformVersion": "10",
"app": "App_url",
"visual": true,
"console": true,
"deviceOrientation": "PORTRAIT",
"build": "new-12",
"isRealMobile": false,
}
```

```java
{
"deviceName": "iPhone 12 Mini",
"platformName": "ios",
"platformVersion": "14",
"app": "App_url",
"isRealMobile": false,
"visual": true,
"console": true,
"build": "lt-web-4",
"network": false,
}
```
