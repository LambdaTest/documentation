# Appium with C#

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

In this documentation, you will learn how to trigger a automation script of **CSharp** for application testing with **Appium** on TestMu AI, set the [**desired capabilities**](/support/docs/desired-capabilities-in-appium/) for appium testing, and other advanced features of TestMu AI.

## Prerequisites

- Your TestMu AI [Username and Access key](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/security).
- Install the MS Visual Studio 2013 or later version for C#. We recommend using the latest version.

## Try our Sample Repository

### Step 1: Get a Sample Project
You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

**Sample repo**
All the code samples in this documentation can be found on **TestMu AI's Github Repository**. You can either download or clone the repository to quickly run your tests.  View on GitHub

> Open the Android/iOS project using the file with a .sln extension.

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

```csharp title="csharp-appium-first.sln"
using System;
using OpenQA.Selenium.Appium;
using OpenQA.Selenium.Support.UI;
using OpenQA.Selenium.Appium.iOS;
using System.Threading;

namespace csharp_appium_first

{
class Program
{
static void Main(string[] args)
{
AppiumOptions caps = new AppiumOptions();

// Set your LambdaTest access credentials
//highlight-next-line
caps.AddAdditionalCapability("LT_USERNAME", "username"); //Enter the Username here
//highlight-next-line
caps.AddAdditionalCapability("LT_ACCESSKEY", "accessKey");  //Enter the Access key here

// Set URL of the application under test
//highlight-next-line
caps.AddAdditionalCapability("app", "APP_URL"); //Enter the App URL here.

// Specify device and os_version
caps.AddAdditionalCapability("deviceName", "iPhone 12"); //Change the device name here
caps.AddAdditionalCapability("platformVersion", "15");
caps.AddAdditionalCapability("platformName", "iOS");
caps.AddAdditionalCapability("isRealMobile", true);
caps.AddAdditionalCapability("network", false);

// Specify the platformName
//caps.PlatformName = "iOS";

// Set other LambdaTest capabilities
caps.AddAdditionalCapability("project", "First CSharp project");
caps.AddAdditionalCapability("build", "CSharp iOS");
caps.AddAdditionalCapability("name", "first_test");

// Initialize the remote Webdriver using LambdaTest remote URL
// and desired capabilities defined above
IOSDriver<IOSElement> driver = new IOSDriver<IOSElement>(
new Uri("https://mobile-hub.lambdatest.com/wd/hub"), caps);

// Test case for the sample iOS app.
// If you have uploaded your app, update the test case here.
IOSElement color = (IOSElement)new WebDriverWait(driver, TimeSpan.FromSeconds(30)).Until(
SeleniumExtras.WaitHelpers.ExpectedConditions.ElementToBeClickable(MobileBy.Id("color"))
);
color.Click();
color.Click();

IOSElement text = (IOSElement)new WebDriverWait(driver, TimeSpan.FromSeconds(30)).Until(
SeleniumExtras.WaitHelpers.ExpectedConditions.ElementToBeClickable(MobileBy.Id("Text"))
);
text.Click();

IOSElement toast = (IOSElement)new WebDriverWait(driver, TimeSpan.FromSeconds(30)).Until(
SeleniumExtras.WaitHelpers.ExpectedConditions.ElementToBeClickable(MobileBy.Id("toast"))
);
toast.Click();

IOSElement nf = (IOSElement)new WebDriverWait(driver, TimeSpan.FromSeconds(30)).Until(
SeleniumExtras.WaitHelpers.ExpectedConditions.ElementToBeClickable(MobileBy.Id("notification"))
);
nf.Click();

IOSElement gl = (IOSElement)new WebDriverWait(driver, TimeSpan.FromSeconds(30)).Until(
SeleniumExtras.WaitHelpers.ExpectedConditions.ElementToBeClickable(MobileBy.Id("geoLocation"))
);
gl.Click();

Thread.Sleep(5000);

driver.Navigate().Back();

IOSElement st = (IOSElement)new WebDriverWait(driver, TimeSpan.FromSeconds(30)).Until(
SeleniumExtras.WaitHelpers.ExpectedConditions.ElementToBeClickable(MobileBy.Id("speedTest"))
);
st.Click();

Thread.Sleep(5000);

driver.Navigate().Back();

IOSElement browser = (IOSElement)new WebDriverWait(driver, TimeSpan.FromSeconds(30)).Until(
SeleniumExtras.WaitHelpers.ExpectedConditions.ElementToBeClickable(MobileBy.AccessibilityId("Browser"))
);
browser.Click();

IOSElement inputBox = (IOSElement)new WebDriverWait(driver, TimeSpan.FromSeconds(30)).Until(
SeleniumExtras.WaitHelpers.ExpectedConditions.ElementToBeClickable(MobileBy.Id("url"))
);
inputBox.Click();

driver.Quit();

}
}
}
```

- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**

```csharp title="csharp-appium-first.sln"
using System;
using OpenQA.Selenium.Appium;
using OpenQA.Selenium.Support.UI;
using OpenQA.Selenium.Appium.Android;
using System.Threading;

namespace csharp_appium {
class Program {
static void Main(string[] args) {
AppiumOptions caps = new AppiumOptions();

caps.AddAdditionalCapability("user", "########"); //Add the LT Username
caps.AddAdditionalCapability("accessKey", "########"); //Add the LT Access key

// Set URL of the application under test
caps.AddAdditionalCapability("app", "###########"); //Add the App ID

// Specify device and os_version
caps.AddAdditionalCapability("deviceName", "Galaxy S21 Ultra 5G"); //Add the Device Details
caps.AddAdditionalCapability("platformVersion", "11");
caps.AddAdditionalCapability("platformName", "Android");
caps.AddAdditionalCapability("isRealMobile", true);
caps.AddAdditionalCapability("network", false);
caps.AddAdditionalCapability("w3c", true);
caps.AddAdditionalCapability("visual", true);
caps.AddAdditionalCapability("video", true);
caps.AddAdditionalCapability("project", "CSharp Sample Android");
caps.AddAdditionalCapability("build", "CSharp Sample Android");
caps.AddAdditionalCapability("name", "CSharp Sample Android");

// Initialize the remote Webdriver using LambdaTest remote URL
// and desired capabilities defined above
AndroidDriver < AndroidElement > driver = new AndroidDriver < AndroidElement > (
new Uri("https://mobile-hub.lambdatest.com/wd/hub"), caps);

// Test case for the sample Android app.
// If you have uploaded your app, update the test case here.
AndroidElement color = (AndroidElement) new WebDriverWait(driver, TimeSpan.FromSeconds(30)).Until(
SeleniumExtras.WaitHelpers.ExpectedConditions.ElementToBeClickable(MobileBy.Id("color"))
);
color.Click();
color.Click();

AndroidElement text = (AndroidElement) new WebDriverWait(driver, TimeSpan.FromSeconds(30)).Until(
SeleniumExtras.WaitHelpers.ExpectedConditions.ElementToBeClickable(MobileBy.Id("Text"))
);
text.Click();

AndroidElement toast = (AndroidElement) new WebDriverWait(driver, TimeSpan.FromSeconds(30)).Until(
SeleniumExtras.WaitHelpers.ExpectedConditions.ElementToBeClickable(MobileBy.Id("toast"))
);
toast.Click();

AndroidElement nf = (AndroidElement) new WebDriverWait(driver, TimeSpan.FromSeconds(30)).Until(
SeleniumExtras.WaitHelpers.ExpectedConditions.ElementToBeClickable(MobileBy.Id("notification"))
);
nf.Click();

AndroidElement gl = (AndroidElement) new WebDriverWait(driver, TimeSpan.FromSeconds(30)).Until(
SeleniumExtras.WaitHelpers.ExpectedConditions.ElementToBeClickable(MobileBy.Id("geoLocation"))
);
gl.Click();

Thread.Sleep(5000);

driver.Navigate().Back();

AndroidElement st = (AndroidElement) new WebDriverWait(driver, TimeSpan.FromSeconds(30)).Until(
SeleniumExtras.WaitHelpers.ExpectedConditions.ElementToBeClickable(MobileBy.Id("speedTest"))
);
st.Click();

Thread.Sleep(5000);

driver.Navigate().Back();
```

### Step 5: Configure the Test Capabilities

You can update your custom capabilities in test scripts. In this sample project, we are passing platform name, platform version, device name and app url _(generated earlier)_ along with other capabilities like build name and test name via capabilities object.

The capabilities object in the sample code are defined as:

```csharp title="iOS(.ipa)"
AppiumOptions caps = new AppiumOptions();
caps.AddAdditionalCapability("LT_USERNAME", "username");
caps.AddAdditionalCapability("LT_ACCESSKEY", "accessKey");
caps.setCapability("platformName", "iOS");
caps.setCapability("deviceName", "iPhone 13 Pro");
caps.setCapability("isRealMobile", true);
caps.setCapability("platformVersion","15.0");
caps.setCapability("Visual", true);
caps.setCapability("Console", true);
caps.setCapability("Network", false);

```

```csharp title="Android(.apk)"
AppiumOptions caps = new AppiumOptions();
caps.AddAdditionalCapability("LT_USERNAME", "username");
caps.AddAdditionalCapability("LT_ACCESSKEY", "accessKey");
caps.setCapability("platformName", "Android");
caps.setCapability("deviceName", "Galaxy S20");
caps.setCapability("isRealMobile", true);
caps.setCapability("platformVersion","11");
caps.setCapability("Visual", true);
caps.setCapability("Console", true);
caps.setCapability("Network", false);

```

- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**

- You must add the generated **APP_URL** to the `app` capability in the config file.
- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**
- You can generate capabilities for your test requirements with the help of our inbuilt [**Capabilities Generator tool**](https://www.testmuai.com/capabilities-generator/).For more details, please refer to our guide on [**Desired Capabilities in Appium**](/support/docs/desired-capabilities-in-appium/).

### Step 6: Execute and Monitor your Tests

- Click the **Play** icon to run the test.

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
