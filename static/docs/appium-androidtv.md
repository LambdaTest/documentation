# Android TV Automation

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/llms.txt).

## Tutorial To Run Your First Test On TestMu AI

As smart TVs continue to grow in popularity, relying solely on manual testing is no longer sufficient. Automating Android TV testing provides broader device coverage, enhances user experience by validating remote-based navigation and voice commands, and eliminates repetitive manual tasks. It also helps uncover issues earlier in the development cycle, ensuring a smooth and consistent experience across different Android TV models.
In this guide, you will learn how to set up and run your **Android TV** automation testing scripts with **Appium** on the **TestMu AI Real Device Cloud platform**.

> Android TV support is available only with Private Device Plan.
To enable it for your organization, please contact us via **24×7 chat support** or you can also drop a mail to **support@testmuai.com**.

## Objective

By the end of this topic, you will be able to:

1.  Set up an environment for testing your Apps using **Android TV** with **Appium**.
2.  Understand and configure the core capabilities required for your Appium test suite.
3.  Explore the advanced features of TestMu AI.

## Prerequisites

Before you can start performing App automation testing with Appium, you would need to follow these steps:

- You have access to TestMu AI username and accessKey. If you have not registered yet, you can do the same by visiting our website. You will be able to access the credentials in the [TestMu AI Profile](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/details/profile)
- Install the latest Python build from the [official website](https://www.python.org/downloads/). We recommend using the latest version.
- Make sure **pip** is installed in your system. You can install **pip** from [pip documentation](https://pip.pypa.io/en/stable/installation/).

## Supported Models

| Device Model          | Platform Version |
|----------------------|------------------|
| Nvidia Shield TV      | Android 11       |

## Run Your First Test

### 1. Set Up Authentication

Make sure you have your TestMu AI credentials with you to run test automation scripts on TestMu AI. To obtain your access credentials, [purchase a plan](https://billing.lambdatest.com/billing/plans) or access the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/). Then, set TestMu AI `Username` and `Access Key` in environment variables with following commands.

  {`export LT_USERNAME=${ YOUR_LAMBDATEST_USERNAME()} \\
export LT_ACCESS_KEY=${ YOUR_LAMBDATEST_ACCESS_KEY()}`}

  {`set LT_USERNAME=${ YOUR_LAMBDATEST_USERNAME()} \`
set LT_ACCESS_KEY=${ YOUR_LAMBDATEST_ACCESS_KEY()}`}

### 2. Upload your application
Upload your **Android TV** application (.ipa file) to the TestMu AI servers using our **REST API**. You need to provide your **Username** and **AccessKey** in the format `Username:AccessKey` in the **cURL** command for authentication. Make sure to add the path of the **appFile** in the cURL request. Here is an example cURL request to upload your app using our REST API:

 **Using App File from System:**

{`curl -u "$LT_USERNAME:$LT_ACCESS_KEY" \
-X POST "https://manual-api.lambdatest.com/app/upload/realDevice" \
-F "appFile=@smarttube_stable.apk" \
-F "name=androidtv_app" \
-F "type=androidtv"
`}

### 3. Configure Desired Capabilities

In your automation script, set up the **platform capability** to specify that you are testing on an Android TV device.

```java
DesiredCapabilities capabilities = new DesiredCapabilities();
HashMap<String, Object> ltOptions = new HashMap<String, Object>();

ltOptions.put("build", "Android TV Demo");
ltOptions.put("name", "Android TV Demo");
ltOptions.put("deviceName", "Nvidia Shield TV");
ltOptions.put("platformVersion", "11");
ltOptions.put("platformName", "androidtv");
ltOptions.put("isRealMobile", true);
ltOptions.put("privateCloud", true);
ltOptions.put("w3c", true);
ltOptions.put("automationName", "UiAutomator2");
ltOptions.put("app", "lt://APP_ID");
/* Optional Capability */
/* ltOptions.put("appPackage", "org.smarttube.stable"); */

capabilities.setCapability("LT:Options", ltOptions);
```

Shown below is an execution snapshot from TestMu AI Dashboard:

## Additional Links

- [Advanced Configuration for Capabilities](/support/docs/desired-capabilities-in-appium/)
- [How to test locally hosted apps](/support/docs/testing-locally-hosted-pages/)
- [How to integrate TestMu AI with CI/CD](/support/docs/integrations-with-ci-cd-tools/)
