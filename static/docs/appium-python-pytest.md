# Appium with Pytest

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

In this documentation, you will learn how to trigger a automation script of **Pytest** for application testing with **Appium** on TestMu AI, set the [**desired capabilities**](/support/docs/desired-capabilities-in-appium/) for appium testing, and other advanced features of TestMu AI.

## Prerequisites

- Your TestMu AI [Username and Access key](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/security).
- You should have [Python](https://www.python.org/downloads/) installed.
- Download and install [**pip**](https://pip.pypa.io/en/stable/installation/).
- Install pytest on your system with following pip command:

```bash
pip install pytest
```

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
from os import environ
import pytest
from appium import webdriver

@pytest.fixture(scope='function')
def test_setup_ios(request):
test_name = request.node.name
build = environ.get('BUILD', "Pytest IOS Sample")
caps = {}
caps["deviceName"] = "iPhone 11"
caps["platformName"] = "iOS"
caps["platformVersion"] = "14"
caps["app"] = "lt://proverbial-ios"     #Enter the app (.ipa) url here
caps["isRealMobile"] = True
caps['build'] = build
caps['name'] = test_name
caps['project'] = project_name
driver = webdriver.Remote("https://<username>:<accessKey>@mobile-hub.lambdatest.com/wd/hub", caps)   #Add LambdaTest username and accessKey here
request.cls.driver = driver

yield driver

def fin():
#browser.execute_script("lambda-status=".format(str(not request.node.rep_call.failed if "passed" else "failed").lower()))
if request.node.rep_call.failed:
driver.execute_script('lambda-status=failed')
else:
driver.execute_script('lambda-status=passed')
driver.quit()
request.addfinalizer(fin)

@pytest.hookimpl(tryfirst=True, hookwrapper=True)
def pytest_runtest_makereport(item, call):
# this sets the result as a test attribute for LambdaTest reporting.
# execute all other hooks to obtain the report object
outcome = yield
rep = outcome.get_result()

# set an report attribute for each phase of a call, which can
# be "setup", "call", "teardown"
setattr(item, "rep_" + rep.when, rep)
```

```python title="conftest.py"
from os import environ
import pytest
from appium import webdriver

@pytest.fixture(scope='function')
def test_setup_android(request):
test_name = request.node.name
build = environ.get('BUILD', "Pytest Android Sample")
caps = {}
caps["deviceName"] = "Galaxy S21 5G"
caps["platformName"] = "Android"
caps["platformVersion"] = "11"
caps["app"] = "lt://proverbial-android"   #Enter the app (.apk) url here
caps["isRealMobile"] = True
caps['build'] = build
caps['name'] = test_name
caps['project'] = project_name
driver = webdriver.Remote("https://<username>:<accessKey>@mobile-hub.lambdatest.com/wd/hub", caps)  #Add LambdaTest username and accessKey here
request.cls.driver = driver

yield driver

def fin():
#browser.execute_script("lambda-status=".format(str(not request.node.rep_call.failed if "passed" else "failed").lower()))
if request.node.rep_call.failed:
driver.execute_script('lambda-status=failed')
else:
driver.execute_script('lambda-status=passed')
driver.quit()
request.addfinalizer(fin)

@pytest.hookimpl(tryfirst=True, hookwrapper=True)
def pytest_runtest_makereport(item, call):
# this sets the result as a test attribute for LambdaTest reporting.
# execute all other hooks to obtain the report object
outcome = yield
rep = outcome.get_result()

# set an report attribute for each phase of a call, which can
# be "setup", "call", "teardown"
setattr(item, "rep_" + rep.when, rep)
```

### Step 5: Configure the Test Capabilities

You can update your custom capabilities in test scripts. In this sample project, we are passing platform name, platform version, device name and app url _(generated earlier)_ along with other capabilities like build name and test name via capabilities object.

The capabilities object in the sample code are defined as:

```python title="iOS(.ipa)"
caps = {
"deviceName": "iPhone 11",
"platformName": "iOS",
"platformVersion": "14",
"app": "lt://proverbial-ios"     # Enter the app (.ipa) URL here,
"isRealMobile": True,
"build": build,
"name": test_name,
"project": project_name
}
```

```python title="Android(.apk)"
caps = {
"deviceName": "Galaxy S21 5G",
"platformName": "Android",
"platformVersion": "11",
"app": "lt://proverbial-android"     # Enter the app (.apk) URL here,
"isRealMobile": True,
"build": build,
"name": test_name,
"project": project_name
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
pytest test_ios.py
```

```bash
pytest test.py
```

If you are unable to run the automation script with the above mentioned commands try using `python -m` before the given commands.

> Your test results would be displayed on the test console (or CLI if you are using terminal/cmd) and on the [TestMu AI App Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/build).

## Using the Pytest Agent Skill with TestMu AI

The [pytest-skill](https://github.com/LambdaTest/agent-skills/tree/main/pytest-skill) is a part of [TestMu AI Skills](https://github.com/LambdaTest/agent-skills/) that guide AI coding assistants in generating production-ready test automation.

The pytest-skill package includes:

```
pytest-skill/
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

### Installing Pytest Agent Skill

Install a Pytest Agent Skill using the command below:

```
# Clone the repo and copy the skill you need
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/pytest-skill .claude/skills/

# Or for Cursor / Copilot
cp -r agent-skills/pytest-skill .cursor/skills/
```

**Note**: If you prefer installing all available framework skills instead of only pytest-skill, clone the repository directly into your tool's skills directory (for example, .claude/skills/, .cursor/skills/, .gemini/skills/, or .agent/skills/).

## Reference Guides

- [Advanced Configuration for Capabilities](/support/docs/desired-capabilities-in-appium/)
- [How to test locally hosted apps](/support/docs/testing-locally-hosted-pages/)
- [How to integrate TestMu AI with CI/CD](/support/docs/integrations-with-ci-cd-tools/)
