# Appium with Robot

In this documentation, you will learn how to trigger a automation script of **Robot** for application testing with **Appium** on TestMu AI, set the [**desired capabilities**](/support/docs/desired-capabilities-in-appium/) for appium testing, and other advanced features of TestMu AI.

## Prerequisites

- Your TestMu AI [Username and Access key](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/security).
- You should have [Python](https://www.python.org/downloads/) installed.
- Download and install [**pip**](https://pip.pypa.io/en/stable/installation/).

## Set-up Your Virtual Environment for Linux/macOS

### Create your Virtual Environment

```python
python3 -m virtualenv venv
```

### Activate your Virtual Environment

```python
source venv/bin/activate
```
These commands will create a new virtual environment name `venv` and activate it.

## Setup Your Authentication

Replace TestMu AI `username` and `accesskey` in the `common.robot` file as mentioned below:

```js title="common.robot"
*** Settings ***
Library  AppiumLibrary

*** Variables ***

${platformName}         ios
#${platformVersion}     15  # Set your default version
${deviceName}           iPhone.*
${visual}               True
${network}              True
${isRealMobile}         True
${LT_APP_ID}            ''
${LT_GRID_URL}          ''
${TIMEOUT}              3000

*** Keywords ***

Open test app
[Timeout]   ${TIMEOUT}
${CAPABILITIES}=    Create Dictionary
...   platformName=${platformName}
...   platformVersion=${version}
...   deviceName=${deviceName}
...   visual=${visual}
...   network=${network}
...   devicelog=${devicelog}
...   isRealMobile=${isRealMobile}
...   name=LT_Appium_Robot_App_iOS
...   build=LT_Appium_Robot_App_Automation
...   app=${LT_APP_ID}
TRY
${REMOTE_URL}=    Set Variable If    '%{LT_GRID_URL}' == ''    mobile-hub.lambdatest.com    %{LT_GRID_URL}
EXCEPT
${REMOTE_URL}=    Set Variable    mobile-hub.lambdatest.com
END
TRY
${APP_ID}=    Set Variable If    '%{LT_APP_ID}' == ''    lt://proverbial-ios    %{LT_APP_ID}
EXCEPT
${APP_ID}=    Set Variable    lt://proverbial-ios
END
${REMOTE_URL}=   Set Variable       https://%{LT_USERNAME}:%{LT_ACCESS_KEY}@${REMOTE_URL}/wd/hub

Open Application  ${REMOTE_URL}  platformName=ios  platformVersion=${version}  deviceName=${deviceName}  visual=${visual}  network=${network}  devicelog=${devicelog}  isRealMobile=${isRealMobile}  app=${APP_ID}  name=LT_Appium_Robot_App_iOS  build=LT_Appium_Robot_App_Automation

Close test app
Close All Applications
```

- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**
- You can generate capabilities for your test requirements with the help of our inbuilt [**Capabilities Generator tool**](https://www.testmuai.com/capabilities-generator/). For more details, please refer to our guide on [**Desired Capabilities in Appium**](/support/docs/desired-capabilities-in-appium/).

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

An automation script file `*StepDef.py` for the sample application given above has been provided here.

```python title="IOS.robot"
*** Settings ***

Resource  ../Resources/Common.robot

Test Setup  Common.Open test app
Test Teardown  Common.Close test app

*** Variables ***
${TIMEOUT}          3000

*** Test Cases ***

Example of connecting to Lambdatest via Robot Framework
[Timeout]   ${TIMEOUT}
Click element  id=color
Click element  id=Text
Click element  id=toast
Click element  id=notification
Click element  id=geoLocation
```

```python title="Android.robot"
*** Settings ***

Resource  ../Resources/Common.robot

Test Setup  Common.Open test app
Test Teardown  Common.Close test app

*** Variables ***
${TIMEOUT}          3000

*** Test Cases ***

Example of connecting to Lambdatest via Robot Framework
[Timeout]   ${TIMEOUT}
Click element  id=color
Click element  id=Text
Click element  id=toast

Click element  id=notification
Click element  id=geoLocation
Sleep	2 seconds
Click element  id=Home
Sleep	2 seconds
Click element  id=speedTest
Sleep	2 seconds

Click element  id=Browser
Input Text   id=url	https://lambdatest.com
Click element  id=find

```

### Step 5: Configure the Test Capabilities

You can update your custom capabilities in test scripts `Makefile` file. In this sample project, we are passing platform name, platform version, device name and app url _(generated earlier)_ along with other capabilities like build name and test name via capabilities object.

```python title="Makefile"
test_Web_ios:
robot --variable version:15 --variable platformName:ios --variable deviceName:"iPhone.*" --variable isRealMobile:true --variable visual:true --variable network:true --variable console:true --variable devicelog:true Tests/AndroidIosWeb.robot

test_Web_Android:
robot --variable version:11 --variable platformName:android --variable deviceName:"Galaxy.*" --variable isRealMobile:true --variable visual:true --variable network:true --variable console:true --variable devicelog:true  Tests/AndroidIosWeb.robot
```

- You must add the generated **APP_URL** to the `app` capability in the config file.
- You can generate capabilities for your test requirements with the help of our inbuilt [**Capabilities Generator tool**](https://www.testmuai.com/capabilities-generator/).For more details, please refer to our guide on [**Desired Capabilities in Appium**](/support/docs/desired-capabilities-in-appium/).

### Step 6: Execute and Monitor your Tests

- Install the required packages from the cloned project directory:

```bash
pip install -r requirements.txt
```

- Execute the following command to run your test on TestMu AI platform:

```bash
make test_iOS1
```

```bash
make test_Android1
```

  > Your test results would be displayed on the test console (or CLI if you are using terminal/cmd) and on the [TestMu AI App Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/build).

## Using the Robot Framework Agent Skill with TestMu AI

The [robot-framework-skill](https://github.com/LambdaTest/agent-skills/tree/main/robot-framework-skill) is a part of [TestMu AI Skills](https://github.com/LambdaTest/agent-skills/) that guide AI coding assistants in generating production-ready test automation.

The robot-framework-skill package includes:

```
robot-framework-skill/
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

### Installing Robot Framework Agent Skill

Install a Robot Framework Agent Skill using the command below:

```
# Clone the repo and copy the skill you need
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/robot-framework-skill .claude/skills/

# Or for Cursor / Copilot
cp -r agent-skills/robot-framework-skill .cursor/skills/
```

**Note**: If you prefer installing all available framework skills instead of only robot-framework-skill, clone the repository directly into your tool's skills directory (for example, .claude/skills/, .cursor/skills/, .gemini/skills/, or .agent/skills/).

## Reference Guides

- [Advanced Configuration for Capabilities](/support/docs/desired-capabilities-in-appium/)
- [How to test locally hosted apps](/support/docs/testing-locally-hosted-pages/)
- [How to integrate TestMu AI with CI/CD](/support/docs/integrations-with-ci-cd-tools/)
