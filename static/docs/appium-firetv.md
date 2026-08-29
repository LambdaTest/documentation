# How to Run Fire TV Appium Tests on TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Running Fire TV tests on TestMu AI executes Appium automation for Amazon Fire TV apps on the real device cloud. Configure the required desired capabilities, connect to the hub, and run scripts to validate Fire TV app behaviour without hardware.

**Supported on:** Real devices

## Tutorial To Run Your First Test On TestMu AI



**Plus Plan Feature**
This feature is available exclusively with the **Real Device Plus Automation Cloud** Plan.

To unlock this feature, purchase or upgrade to the required [plan](https://www.testmuai.com/pricing/). If you need assistance, please contact your TestMu AI support representative, reach out to our **[24×7 Chat Support]**, or email us at **support@testmuai.com**.




## Objective

By the end of this topic, you will be able to:

1.  Set up an environment for testing your Apps using **Fire TV** with **Appium**.
2.  Understand and configure the core capabilities required for your Appium test suite.
3.  Explore the advanced features of TestMu AI.

**Sample repo**

All the code samples in this documentation can be found on **TestMu AI's Github Repository**. You can either download or clone the repository to quickly run your tests.  View on GitHub



## Prerequisites



Before you can start performing App automation testing with Appium, you would need to follow these steps:

- You have access to TestMu AI username and accessKey. If you have not registered yet, you can do the same by visiting our website. You will be able to access the credentials in the [TestMu AI Profile](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/details/profile)
- Install the latest Python build from the [official website](https://www.python.org/downloads/). We recommend using the latest version.
- Make sure **pip** is installed in your system. You can install **pip** from [pip documentation](https://pip.pypa.io/en/stable/installation/).

## Run your first test



### 1. Upload your application
Upload your **Fire TV** application (.apk file) to the TestMu AI servers using our **REST API**. You need to provide your **Username** and **AccessKey** in the format `Username:AccessKey` in the **cURL** command for authentication. Make sure to add the path of the **appFile** in the cURL request. Here is an example cURL request to upload your app using our REST API:

 **Using App File from System:**


{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "appFile=@"/Users/macuser/Downloads/fireos-sample-app.apk"" -F "name="fireos_app""
`}







- If you do not have any **.apk** file, you can run your sample tests on TestMu AI by using our sample :link: [FireTV app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/fireos-sample-app.apk).
- Response of above cURL will be a **JSON** object containing the `APP_URL` of the format - ``lt://APP123456789123456789`` and will be used in the next step.



### 2. Clone the sample project

1. Clone the TestMu AI's [LT-appium-firetv](https://github.com/LambdaTest/LT-appium-firetv) and navigate to the code directory as shown below:

```bash
git clone https://github.com/LambdaTest/LT-appium-firetv
cd LT-appium-firetv
```

### 3. Set up your authentication

Make sure you have your TestMu AI credentials with you to run test automation scripts on TestMu AI. To obtain your access credentials, [purchase a plan](https://billing.lambdatest.com/billing/plans) or access the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/). Then, set TestMu AI `Username` and `Access Key` in environment variables with following commands.






  {`export LT_USERNAME=${ YOUR_LAMBDATEST_USERNAME()} \\
export LT_ACCESS_KEY=${ YOUR_LAMBDATEST_ACCESS_KEY()}`}









  {`set LT_USERNAME=${ YOUR_LAMBDATEST_USERNAME()} \`
set LT_ACCESS_KEY=${ YOUR_LAMBDATEST_ACCESS_KEY()}`}






### 4. Write your automation script

An automation script for the sample application available above has been provided below. Ensure to update the `APP_URL`, `username` and `accessKey` in the code scripts before running the tests.


```python title="firetv.py"
from xml.dom.expatbuilder import Rejecter
from appium import webdriver
from selenium.webdriver.common.by import By
import time


def getCaps():
desired_cap= {
"deviceName" : "Amazon Fire TV Stick",
"platformVersion" :  "7",
"platformName":"fireos",
"isRealMobile":True,
"build": "firetv",
"video": True,
"app":"APP_URL",  #Add app url here
"network": False,
"geoLocation": "RU",
"devicelog": True,
"visual":True
}

return desired_cap

def runTest():
username = "YOUR_LAMBDATEST_USERNAME"           #Add your username here
accessToken = "YOUR_LAMBDATEST_ACCESSKEY"       #Add your accessKey here

gridUrl = "mobile-hub-internal.lambdatest.com/wd/hub"

# capabilities
desired_cap = getCaps()
url = "http://"+username+":"+accessToken+"@"+gridUrl

print("Initiating remote driver on platform: " +
desired_cap["deviceName"]+" browser: "+" version: "+desired_cap["platformVersion"])

start = time.time()
driver = webdriver.Remote(
desired_capabilities=desired_cap,
command_executor=url
)

# run test
print(driver.session_id)
time.sleep(10)

inputfield = driver.find_element(by = By.ID, value ="enterText")
inputfield.send_keys("https://ifconfig.me")

time.sleep(2)

inputfield = driver.find_element(by = By.ID, value ="JustAButton")
inputfield.click()

time.sleep(10)
list2 = driver.find_element(by= By.XPATH, value="//*[@resource-id='ip_address_cell']")
print(list2.text)

time.sleep(50)

driver.execute_script("lambda-status=passed")

driver.quit()
end = time.time()

print("time taken: ", end - start)


if __name__ == "__main__":
runTest()
```

### Configure the test capabilities

You can update your custom capabilities in test scripts. In this sample project, we are passing platform name, platform version, device name and app url (generated earlier) along with other capabilities like build name and test name via capabilities object. The capabilities object in the sample code are defined as:

**Supported Model:**
- Device: `"Amazon Fire TV Stick"` ; OS Version:`"7"`

**Supported Capabilities:**
Same as Android.

**Platform:**
`"fireos"`

```python title="firetv.py"
def getCaps():
desired_cap= {
"deviceName" : "Amazon Fire TV Stick",
"platformVersion" :  "7",
"platformName":"fireos",
"isRealMobile":True,
"build": "firetv",
"video": True,
"app":"APP_URL",  #Add app url here
"network": False,
"geoLocation": "RU",
"devicelog": True,
"visual":True
}
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
python firetv.py
```


If you are unable to run the automation script with the above mentioned commands try **'python3'** command except for **'python'**.


Your test results would be displayed on the test console (or command-line interface if you are using terminal/cmd) and on the [TestMu AI App Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/build).


## Additional Links



- [Advanced Configuration for Capabilities](/support/docs/desired-capabilities-in-appium/)
- [How to test locally hosted apps](/support/docs/testing-locally-hosted-pages/)
- [How to integrate TestMu AI with CI/CD](/support/docs/integrations-with-ci-cd-tools/)
