# How to Run Appium C# Tests on TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Running Appium C# tests on TestMu AI automates native and hybrid mobile apps on real Android and iOS devices. Set your credentials, upload the app, configure desired capabilities, then execute tests with Vanilla C# or NUnit and review detailed results.

**Supported on:** Real &amp; Virtual devices

Prefer another language? See [all supported Appium languages and frameworks](/support/docs/appium-agent-skills/#supported-languages-and-frameworks).

## Prerequisites


Make sure you have the following set up before you start.

- Your TestMu AI [Username and Access key](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/security).
- Install the MS Visual Studio 2013 or later version for C#. We recommend using the latest version.
- Access to an Android app (.apk or .aab file) or an iOS app (.ipa file).

For **NUnit**, you also need:

- Install the framework [NUnit3.0](https://nunit.org/), and [NuGet](https://www.nuget.org/downloads) plugin for Visual Studio and add the NuGet CLI executable installed in your path.

## Set Your Credentials


You need to export your environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in your [TestMu AI Profile page](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/security). Run the below mentioned commands in your terminal to setup the environment variables.





  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}






  {`set LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
set LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}





## Upload Your App


Upload your **_iOS_** application (.ipa file) or **_android_** application (.apk or .aab file) to the TestMu AI servers using our **REST API**. You need to provide your **Username** and **AccessKey** in the format `Username:AccessKey` in the **cURL** command for authentication.

Make sure to add the path of the **appFile** in the cURL request. Below is an example cURL request to upload your app using our REST API:






      {`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "appFile=@"/Users/macuser/Downloads/proverbial_android.apk"" -F "name="proverbial_app""`}







      {`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "url=:https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk" -F "name=Proverbial_App"`}








- If you do not have any **.apk** or **.ipa** file, you can run your sample tests on TestMu AI by using our sample apps, :link: [Android app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk) or :link: [iOS app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_ios.ipa).

- Response of above cURL will be a **JSON** object containing the `APP_URL` of the format - `lt://APP123456789123456789` and will be used in the next step



## Run a Test With Your Framework


Pick your framework below. Each tab is a complete, self-contained flow: get the sample project, update the automation script, configure capabilities, and execute your tests.





### Step 1: Get a Sample Project
You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

**Sample repo**
All the code samples in this documentation can be found on **TestMu AI's Github Repository**. You can either download or clone the repository to quickly run your tests.  View on GitHub


> Open the Android/iOS project using the file with a .sln extension.

### Step 2: Update your Automation Script

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


The Android `csharp-appium-first.sln` snippet above is reproduced exactly as it appears in the source sample; the source ends here and does not include the remaining test steps or closing braces. Refer to the [sample repository](https://github.com/LambdaTest/LT-appium-csharp) for the full file.





### Step 3: Configure the Test Capabilities

You can update your custom capabilities in test scripts. In this sample project, we are passing platform name, platform version, device name and app url _(generated earlier)_ along with other capabilities like build name and test name via capabilities object.

The capabilities object in the sample code are defined as:





```csharp title="iOS(.ipa)"
AppiumOptions caps = new AppiumOptions();
caps.AddAdditionalCapability("LT_USERNAME", "username");
caps.AddAdditionalCapability("LT_ACCESSKEY", "accessKey");
caps.AddAdditionalCapability("platformName", "iOS");
caps.AddAdditionalCapability("deviceName", "iPhone 13 Pro");
caps.AddAdditionalCapability("isRealMobile", true);
caps.AddAdditionalCapability("platformVersion","15.0");
caps.AddAdditionalCapability("Visual", true);
caps.AddAdditionalCapability("Console", true);
caps.AddAdditionalCapability("Network", false);

```




```csharp title="Android(.apk)"
AppiumOptions caps = new AppiumOptions();
caps.AddAdditionalCapability("LT_USERNAME", "username");
caps.AddAdditionalCapability("LT_ACCESSKEY", "accessKey");
caps.AddAdditionalCapability("platformName", "Android");
caps.AddAdditionalCapability("deviceName", "Galaxy S20");
caps.AddAdditionalCapability("isRealMobile", true);
caps.AddAdditionalCapability("platformVersion","11");
caps.AddAdditionalCapability("Visual", true);
caps.AddAdditionalCapability("Console", true);
caps.AddAdditionalCapability("Network", false);

```


- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**








- You must add the generated **APP_URL** to the `app` capability in the config file.
- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**
- You can generate capabilities for your test requirements with the help of our inbuilt [**Capabilities Generator tool**](https://www.testmuai.com/capabilities-generator/).For more details, please refer to our guide on [**Desired Capabilities in Appium**](/support/docs/desired-capabilities-in-appium/).



### Step 4: Execute and Monitor your Tests

- Click the **Play** icon to run the test.

  > Your test results would be displayed on the test console (or CLI if you are using terminal/cmd) and on the [TestMu AI App Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/build).





### Step 1: Get a Sample Project
You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

**Sample repo**
All the code samples in this documentation can be found on **TestMu AI's Github Repository**. You can either download or clone the repository to quickly run your tests.  View on GitHub


> Open the Android/iOS project using the file with a .sln extension.

### Install and Setup the Dependencies

- Install the NuGet packages for the project:
```bash
nuget.exe install ..\NUnitSelenium\packages.config
```
- Clean and rebuild the project
```bash
nmake clean build
```

### Step 2: Update your Automation Script

An automation script for the sample application given above has been provided here. Ensure to update the `APP_URL`, `username` and `accessKey` in the code scripts before running the tests.

```csharp title="NUnitAppiumTests.cs"
using System;
using OpenQA.Selenium;
using OpenQA.Selenium.Remote;

using NUnit.Framework;
using System.Threading;
using System.Collections.Generic;
using OpenQA.Selenium.Appium;
using OpenQA.Selenium.Appium.Android;
using OpenQA.Selenium.Appium.iOS;
using OpenQA.Selenium.Support.UI;

namespace NUnitSelenium
{
//-------------------Running two parallel test cases----------------------------
//highlight-next-line
[TestFixture("OnePlus 6", "8", "Android", "APP_URL")]    // Android Testing
//highlight-next-line
[TestFixture("iPhone 11", "14", "iOS", "APP_URL")]      // iOS testing
[Parallelizable(ParallelScope.Fixtures)]
public class NUnitSeleniumSample
{
//--------------------We can initialize username and access Key with hub url to authenticate our test script-------------------------------------
public static string LT_USERNAME = Environment.GetEnvironmentVariable("LT_USERNAME") ==null ? "your username" : Environment.GetEnvironmentVariable("LT_USERNAME");
public static string LT_ACCESS_KEY = Environment.GetEnvironmentVariable("LT_ACCESS_KEY") == null ? "your accessKey" : Environment.GetEnvironmentVariable("LT_ACCESS_KEY");
public static bool tunnel = Boolean.Parse(Environment.GetEnvironmentVariable("LT_TUNNEL")== null ? "false" : Environment.GetEnvironmentVariable("LT_TUNNEL"));
public static string build = Environment.GetEnvironmentVariable("LT_BUILD") == null ? "your build name" : Environment.GetEnvironmentVariable("LT_BUILD");
public static string seleniumUri = "https://mobile-hub.lambdatest.com:443/wd/hub";

//-------------------------Initialization of Driver--------------------------
AndroidDriver<AndroidElement> driver;

// Initialization some parameter
private String deviceName;
private String platformVersion;
private String platformName;
private String app;

public NUnitSeleniumSample(String deviceName, String platformVersion, String platformName, String app)
{
this.deviceName = deviceName;
this.platformVersion = platformVersion;
this.platformName = platformName;
this.app = app;
}

[SetUp]
public void Init()
{
//-----------------------------------Create instance for passing capabilities-----------------------------------------------------------------
AppiumOptions capabilities = new AppiumOptions();
//highlight-next-line
capabilities.AddAdditionalCapability("user", "LT_USERNAME");   //Add LambdaTest username here
//highlight-next-line
capabilities.AddAdditionalCapability("accessKey", "LT_ACCESS_KEY");   //Add LambdaTest accessKey here
capabilities.AddAdditionalCapability("app",app);
capabilities.AddAdditionalCapability("deviceName", deviceName);
capabilities.AddAdditionalCapability("platformVersion", platformVersion);
capabilities.AddAdditionalCapability("platformName", platformName);
capabilities.AddAdditionalCapability("build", "Csharp NUnit");
capabilities.AddAdditionalCapability("name", "NUnit Test");
capabilities.AddAdditionalCapability("isRealMobile", true);

driver = new AndroidDriver<AndroidElement> (new Uri(seleniumUri), capabilities, TimeSpan.FromSeconds(600));

// Console.Out.WriteLine(driver);
Console.Out.WriteLine("On Which Device/Platform test is running:"+deviceName+" "+platformVersion+" "+platformName);

}

[Test]
public void Todotest()
{
{
//----------------------Text Color Changes---------------------------------
Console.WriteLine("1.Text Color Changes");
AndroidElement searchElement = (AndroidElement)new WebDriverWait(
driver, TimeSpan.FromSeconds(20)).Until(
SeleniumExtras.WaitHelpers.ExpectedConditions.ElementToBeClickable(
MobileBy.Id("color"))
);
System.Threading.Thread.Sleep(1000);
searchElement.Click();
System.Threading.Thread.Sleep(1000);
searchElement.Click();

System.Threading.Thread.Sleep(1000);

//----------------------Text Changes by clicking a button---------------------------------
Console.WriteLine("2.Text Changes by clicking a button");

AndroidElement changeelement = (AndroidElement)new WebDriverWait(
driver, TimeSpan.FromSeconds(10)).Until(
SeleniumExtras.WaitHelpers.ExpectedConditions.ElementToBeClickable(
MobileBy.Id("Text"))
);
changeelement.Click();

System.Threading.Thread.Sleep(1000);

//----------------------Toast---------------------------------
Console.WriteLine("3.Toast");

AndroidElement toast = (AndroidElement)new WebDriverWait(
driver, TimeSpan.FromSeconds(10)).Until(
SeleniumExtras.WaitHelpers.ExpectedConditions.ElementToBeClickable(
MobileBy.Id("toast"))
);
toast.Click();

System.Threading.Thread.Sleep(1000);

//----------------------Notification By clicking a button---------------------------------
Console.WriteLine("4.Notification Button clicked");

AndroidElement Notification = (AndroidElement)new WebDriverWait(
driver, TimeSpan.FromSeconds(10)).Until(
SeleniumExtras.WaitHelpers.ExpectedConditions.ElementToBeClickable(
MobileBy.Id("notification"))
);
Notification.Click();
System.Threading.Thread.Sleep(2000);

//----------------------Geolocation button---------------------------------
Console.WriteLine("5.Geolocation");

AndroidElement geolocation = (AndroidElement)new WebDriverWait(
driver, TimeSpan.FromSeconds(10)).Until(
SeleniumExtras.WaitHelpers.ExpectedConditions.ElementToBeClickable(
MobileBy.Id("geoLocation"))
);
geolocation.Click();
System.Threading.Thread.Sleep(4000);
driver.PressKeyCode(AndroidKeyCode.Back);
System.Threading.Thread.Sleep(1000);

//----------------------Speed Test Button---------------------------------
Console.WriteLine("6.Speed Test Button Clicked");

AndroidElement speed = (AndroidElement)new WebDriverWait(
driver, TimeSpan.FromSeconds(10)).Until(
SeleniumExtras.WaitHelpers.ExpectedConditions.ElementToBeClickable(
MobileBy.Id("speedTest"))
);
speed.Click();
System.Threading.Thread.Sleep(5000);
driver.PressKeyCode(AndroidKeyCode.Back);
System.Threading.Thread.Sleep(1000);


//----------------------Browser Button---------------------------------
//   Console.WriteLine("Browser Button Clicked");

AndroidElement BROWSER = (AndroidElement)new WebDriverWait(
driver, TimeSpan.FromSeconds(30)).Until(
SeleniumExtras.WaitHelpers.ExpectedConditions.ElementToBeClickable(
MobileBy.XPath("//android.widget.FrameLayout[@content-desc=\"Browser\"]/android.widget.FrameLayout/android.widget.ImageView"))

);
BROWSER.Click();


AndroidElement url = (AndroidElement)new WebDriverWait(
driver, TimeSpan.FromSeconds(10)).Until(
SeleniumExtras.WaitHelpers.ExpectedConditions.ElementToBeClickable(
MobileBy.Id("url"))
);

url.Click();

url.SendKeys("www.lambdatest.com");

System.Threading.Thread.Sleep(1000);

driver.PressKeyCode(AndroidKeyCode.Back);

System.Threading.Thread.Sleep(3000);
}
}

[TearDown]
public void Cleanup()

{

bool passed = TestContext.CurrentContext.Result.Outcome.Status == NUnit.Framework.Interfaces.TestStatus.Passed;
try
{
//-----------------Marking Test status passed or failed -----------------------------------------
((IJavaScriptExecutor)driver).ExecuteScript("lambda-status=" + (passed ? "passed" : "failed"));

}
finally
{
//---------------------Quit the session-----------------------

driver.Quit();
}
}
}
}

```

- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**


### Step 3: Configure the Test Capabilities

You can update your custom capabilities in test scripts. In this sample project, we are passing platform name, platform version, device name and app url _(generated earlier)_ along with other capabilities like build name and test name via capabilities object.

The capabilities object in the sample code are defined as:

```csharp
AppiumOptions capabilities = new AppiumOptions();
capabilities.AddAdditionalCapability("user", "LT_USERNAME");   //Add LambdaTest username here
capabilities.AddAdditionalCapability("accessKey", "LT_ACCESS_KEY");   //Add LambdaTest accessKey here
capabilities.AddAdditionalCapability("app",app);
capabilities.AddAdditionalCapability("deviceName", deviceName);
capabilities.AddAdditionalCapability("platformVersion", platformVersion);
capabilities.AddAdditionalCapability("platformName", platformName);
capabilities.AddAdditionalCapability("build", "Csharp NUnit");
capabilities.AddAdditionalCapability("name", "NUnit Test");
capabilities.AddAdditionalCapability("isRealMobile", true);
```


- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**




- You must add the generated **APP_URL** to the `app` capability in the config file.
- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**
- You can generate capabilities for your test requirements with the help of our inbuilt [**Capabilities Generator tool**](https://www.testmuai.com/capabilities-generator/).For more details, please refer to our guide on [**Desired Capabilities in Appium**](/support/docs/desired-capabilities-in-appium/).



### Step 4: Execute and Monitor your Tests

Run the following command in your project directory to execute your build and run the tests parallelly.

```bash
nmake all
```

OR

Go to **Build menu** in Visual Studio Code menu bar and click on **Build Solution**. After the solution is built navigate built navigate to **Test menu** and click on **Test All** to execute the tests.

**Warning**
Make sure that **DotNetSeleniumExtras.WaitHelpers** in the NuGet packages which you can check from **Project Menu -> Manage NuGet Packages**.


  > Your test results would be displayed on the test console (or CLI if you are using terminal/cmd) and on the [TestMu AI App Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/build).





## View Your Results


Open the [TestMu AI App Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/build) to see your test. Each session includes a video recording, step-by-step screenshots, device logs, and network logs.

## Next Steps


Continue with these related guides:

- [Advanced Configuration for Capabilities](/support/docs/desired-capabilities-in-appium/)
- [How to test locally hosted apps](/support/docs/testing-locally-hosted-pages/)
- [How to integrate TestMu AI with CI/CD](/support/docs/integrations-with-ci-cd-tools/)
- [Appium languages and frameworks](/support/docs/appium-agent-skills/#supported-languages-and-frameworks)
