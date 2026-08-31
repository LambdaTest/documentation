# Appium Testing - Real Device On HyperExecute

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

This page outlines how to execute your Appium tests on HyperExecute using TestNG with YAML 0.2
> HyperExecute uses [YAML 0.2](/support/docs/deep-dive-into-hyperexecute-yaml/#hyperexecute-yaml-v02-framework-flags-and-discovery-config) to perform the tests using Appium.

## Prerequisites

To run the Tests on HyperExecute from your Local System, you are required:

- [HyperExecute YAML](/support/docs/deep-dive-into-hyperexecute-yaml/#hyperexecute-yaml-v02-framework-flags-and-discovery-config) file which contains all the necessary instructions.
- [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) in order to initiate a test execution Job .
- Your TestMu AI [Username and Access key](/support/docs/hyperexecute-running-your-first-job/#how-to-get-my-username-and-access-key)
- Setup the Environmental Variable
- Ensure you have Appium’s [Java client library](https://github.com/appium/java-client) installed.
- Access to an **Android** app (.apk or .aab file) or an **iOS** app (.ipa file).

**Sample repo**
All the code samples are available on **TestMu AI's Github Repository**. You can either download or clone the repository to quickly run your tests.  View on GitHub

> If you do not have any **.apk** or **.ipa** file, you can run your sample tests on TestMu AI by using our sample :link: [Android app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk) or sample :link: [iOS app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_ios.ipa).

### Download HyperExecute CLI

The *HyperExecute CLI* is used for triggering tests on HyperExecute. It is recommend to download the HyperExecute CLI binary on the host system to perform the tests on HyperExecute. The CLI download site for various platforms is displayed below:

| Platform | HyperExecute CLI download location |
| ---------| --------------------------- |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| macOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |

### Setup Environment Variable
Export the environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in the [TestMu AI Profile page](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/details/profile).
Run the below mentioned commands in the terminal to setup the CLI and the environment variables.

  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

  {`set LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
set LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

## Steps to Run Your Test

### Step 1: Upload your Application
Upload your _iOS_ application (.ipa file) or _android_ application (.apk file) to the TestMu AI servers using our REST API. You need to provide your Username and AccessKey in the format `Username:AccessKey` in the cURL command for authentication. Make sure to add the path of the appFile in the cURL request. Here is an example cURL request to upload your app using our REST API:

{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST 'https://manual-api.lambdatest.com/app/upload/realDevice' --form 'name="Android_App"' --form 'appFile=@""'
`}

{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "appFile=@"""
`}

{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" \\
--location --request POST 'https://manual-api.lambdatest.com/app/upload/realDevice' \\
--form 'name="Android_App"' \\
--form 'url="https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk"'`}

{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST "https://manual-api.lambdatest.com/app/upload/realDevice" --header "Content-Type: application/x-www-form-urlencoded" --data-urlencode "url=:https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk" --data-urlencode "name=Proverbial_App"`}

> Response of above cURL will be a **JSON** object containing the `App URL` of the format - ``lt://APP123456789123456789`` and will be used in the next step.

### Step 2: Configure your Test Script
Write Your Automation Script in the client language of your choice from the ones supported by Appium. An automation script for the sample applications have been provided below.

Here is a sample automation script in Java for the sample app downloaded above. Ensure to update the `app_url`, `username` and `accesskey` in the below code.

```java reference title="AndroidApp.java"
https://github.com/LambdaTest/hyperexecute-real-device-appium-testng/blob/main/src/main/java/AndroidApp.java
```

```java reference title="iOSApp.java"
https://github.com/LambdaTest/hyperexecute-real-device-appium-testng/blob/main/src/main/java/iOSApp.java
```

### Step 3: Update your XML file
Create `.XML` file in order to run your test and define device capabilities. Please find sample code below for the same.

```xml reference title="android-parallel.xml"
https://github.com/LambdaTest/hyperexecute-real-device-appium-testng/blob/main/src/test/java/android-parallel.xml
```

```xml reference title="ios-parallel.xml"
https://github.com/LambdaTest/hyperexecute-real-device-appium-testng/blob/main/src/test/java/ios-parallel.xml
```

### Step 4: Configure YAML and Execute your Script

```yaml reference title="android-parallel.yaml"
https://github.com/LambdaTest/hyperexecute-real-device-appium-testng/blob/main/yaml/android/hyp-rd-android-multiple.yaml
```

```yaml reference title="ios-parallel.yaml"
https://github.com/LambdaTest/hyperexecute-real-device-appium-testng/blob/main/yaml/ios/hyp-rd-ios-multiple.yaml
```

> The ```region``` parameter specifies the region or location where the Appium tests will be executed. Our platform supports the following three regions:
- ap (Asia-Pacific)
- us (United States)
- eu (European Union)

### Step 5: Execute your Test Suite
> **NOTE :** In case of MacOS, if you get a permission denied warning while executing CLI, simply run **`chmod u+x ./hyperexecute`** to allow permission. In case you get a security popup, allow it from your **System Preferences** → **Security & Privacy** → **General tab**.

Run the below command in your terminal at the root folder of the project:

```bash
./hyperexecute --config RELATIVE_PATH_OF_YOUR_YAML_FILE
```

OR use this command if you have not exported your username and access key in the step 2.

    {`./hyperexecute --user ${ YOUR_LAMBDATEST_USERNAME()} --key ${ YOUR_LAMBDATEST_ACCESS_KEY()} --config RELATIVE_PATH_OF_YOUR_YAML_FILE `}

## Configure Smart UI

To configure SmartUI with HyperExecute, you need to simply add a capability in your test file:

```bash java
"smartUI.project": "<YOUR_SMARTUI_PROJECT_NAME>"
```

> Refer to the [Automation Capabilities Generator](https://www.testmuai.com/capabilities-generator/) to understand how to write the capability in different languages.

## More About Desired Capabilities
Sample Capabilities for both android and iOS are mentioned below -

```java
{
"deviceName": "Galaxy Tab S4",
"platformName": "android",
"platformVersion": "10",
"app": "App_url",
"visual": True,
"console": True,
"deviceOrientation": "PORTRAIT",
"build": "new-12",
"isRealMobile": True,
}
```

```java
{
"deviceName": "iPhone 12 Mini",
"platformName": "ios",
"platformVersion": "14",
"app": "App_url",
"isRealMobile": True,
"visual": True,
"console": True,
"build": "lt-web-4",
"network": True,
}
```

> For more details, please refer to our guide on [Desired Capabilities in Appium](/support/docs/desired-capabilities-in-appium/).

## Appium WebApp Testing

Appium WebApp testing runs your Appium tests against web applications loaded in the mobile browser on real devices, rather than against an installed native app. Instead of uploading an `.apk`, `.aab`, or `.ipa` and passing an `app` capability, you drive a mobile browser session with a `RemoteWebDriver` and navigate to your web URL. This means there is no application upload step, and the desired capabilities omit the `app` capability.

### Steps to Run Your Test

**Step 1:** Write your Automation Script in the client language of your choice from the ones supported by [Appium](/support/docs/appium-agent-skills/#supported-languages-and-frameworks). An automation script for the sample applications have been provided below.

Here is a sample automation script in Java. Ensure to update the `username` and `accesskey` in the below code.

```java
package com.lambdatest;

import io.appium.java_client.MobileBy;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

public class androidWeb {

String username = System.getenv("LT_USERNAME") == null ? "LT_USERNAME" //Enter the Username here
: System.getenv("LT_USERNAME");
String accessKey = System.getenv("LT_ACCESS_KEY") == null ? "LT_ACCESS_KEY"  //Enter the Access key here
: System.getenv("LT_ACCESS_KEY");
public static RemoteWebDriver driver = null;
public String gridURL = "@mobile-hub.lambdatest.com/wd/hub";
public String status = "passed";
@Before
public void setUp() throws Exception {
DesiredCapabilities capabilities = new DesiredCapabilities();

capabilities.setCapability("build", "HYP Web RD Demo");
capabilities.setCapability("name", "Java Android Web Test");
capabilities.setCapability("platformName", "android");
capabilities.setCapability("deviceName", "Galaxy. *,OnePlus. *,Pixel. *"); //Enter the name of the device here
capabilities.setCapability("isRealMobile", true);
capabilities.setCapability("region", "eu");
// capabilities.setCapability("platformVersion","9");
capabilities.setCapability("deviceOrientation", "portrait");
capabilities.setCapability("console",true);
capabilities.setCapability("network",true);
capabilities.setCapability("visual",true);
try
{
driver = new RemoteWebDriver(new URL("https://" + username + ":" + accessKey + gridURL), capabilities);
}
catch (MalformedURLException e)
{
System.out.println("Invalid grid URL");
} catch (Exception e)
{
System.out.println(e.getMessage());
}
}

@Test
public void testSimple() throws Exception
{
try
{
driver.get("https://lambdatest.github.io/sample-todo-app/");
driver.findElement(By.name("li1")).click();

System.out.println("Checking Another Box");
driver.findElement(By.name("li2")).click();

System.out.println("Checking Box");
driver.findElement(By.name("li3")).click();

System.out.println("Checking Another Box");
driver.findElement(By.name("li4")).click();

driver.findElement(By.id("sampletodotext")).sendKeys(" List Item 6");
driver.findElement(By.id("addbutton")).click();

driver.findElement(By.id("sampletodotext")).sendKeys(" List Item 7");
driver.findElement(By.id("addbutton")).click();

driver.findElement(By.id("sampletodotext")).sendKeys(" List Item 8");
driver.findElement(By.id("addbutton")).click();

System.out.println("Checking Another Box");
driver.findElement(By.name("li1")).click();

System.out.println("Checking Another Box");
driver.findElement(By.name("li3")).click();

status="passed";
}
catch (Exception e)
{
System.out.println(e.getMessage());
status="failed";
}
}
@After
public void tearDown() throws Exception
{
if (driver != null)
{
driver.executeScript("lambda-status=" + status);
driver.quit();
}
}

}
```

```java
package com.lambdatest;

import io.appium.java_client.MobileBy;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

public class iosWeb {

String username = System.getenv("LT_USERNAME") == null ? "LT_USERNAME"   //Enter the Username here
: System.getenv("LT_USERNAME");
String accessKey = System.getenv("LT_ACCESS_KEY") == null ? "LT_ACCESS_KEY"   //Enter the Access key here
: System.getenv("LT_ACCESS_KEY");
public static RemoteWebDriver driver = null;
public String gridURL = "@hub.lambdatest.com/wd/hub";
public String status = "passed";
@Before
public void setUp() throws Exception {
DesiredCapabilities capabilities = new DesiredCapabilities();

capabilities.setCapability("build", "HYP Web RD Demo");
capabilities.setCapability("name", "Java JUnit iOS Web Test");
capabilities.setCapability("platformName", "ios");
capabilities.setCapability("deviceName", "iPhone.*");
capabilities.setCapability("isRealMobile", true);
// capabilities.setCapability("platformVersion","14");
capabilities.setCapability("deviceOrientation", "portrait");
capabilities.setCapability("console",true);
capabilities.setCapability("network",true);
capabilities.setCapability("visual",true);

try
{
driver = new RemoteWebDriver(new URL("https://" + username + ":" + accessKey + gridURL), capabilities);
}
catch (MalformedURLException e)
{
System.out.println("Invalid grid URL");
} catch (Exception e)
{
System.out.println(e.getMessage());
}
}

@Test
public void testSimple() throws Exception
{
try
{
driver.manage().timeouts().setScriptTimeout(10, TimeUnit.SECONDS);
driver.get("https://lambdatest.github.io/sample-todo-app/");
driver.findElement(By.name("li1")).click();

System.out.println("Checking Another Box");
driver.findElement(By.name("li2")).click();

System.out.println("Checking Box");
driver.findElement(By.name("li3")).click();

System.out.println("Checking Another Box");
driver.findElement(By.name("li4")).click();

driver.findElement(By.id("sampletodotext")).sendKeys(" List Item 6");
driver.findElement(By.id("addbutton")).click();

driver.findElement(By.id("sampletodotext")).sendKeys(" List Item 7");
driver.findElement(By.id("addbutton")).click();

driver.findElement(By.id("sampletodotext")).sendKeys(" List Item 8");
driver.findElement(By.id("addbutton")).click();

System.out.println("Checking Another Box");
driver.findElement(By.name("li1")).click();

System.out.println("Checking Another Box");
driver.findElement(By.name("li3")).click();
status="passed";
}
catch (Exception e)
{
System.out.println(e.getMessage());
status="failed";
}
}
@After
public void tearDown() throws Exception
{
if (driver != null)
{
driver.executeScript("lambda-status=" + status);
driver.quit();
}
}

}
```

**Step 2:** Execute Your Test Case. Debug and run your code.

Once you have run your tests, you can view the test execution along with logs. You will be able to see the test cases passing or failing. You can view the same at TestMu AI Automation.

### Sample YAML 0.2

```bash
version: "0.1"
runson: win

autosplit: true

concurrency: 2

testDiscovery:
command: cat tests.txt
mode: static
type: raw

testRunnerCommand: mvn test -P $test

framework:
name: appium
```

> The ```region``` parameter specifies the region or location where the Appium tests will be executed. Our platform supports the following three regions:
- ap (Asia-Pacific)
- us (United States)
- eu (European Union)

### More About Desired Capabilities for WebApp
Sample Capabilities for both android and iOS web app mentioned below -

```java
{
"deviceName": "Galaxy Tab S4",
"platformName": "android",
"platformVersion": "10",
"visual": True,
"console": True,
"deviceOrientation": "PORTRAIT",
"build": "new-12",
"isRealMobile": True,
}
```

```java
{
"deviceName": "iPhone 12 Mini",
"platformName": "ios",
"platformVersion": "14",
"isRealMobile": True,
"visual": True,
"console": True,
"build": "lt-web-4",
"network": True,
}
```

> Refer to the [Automation Capabilities Generator](https://www.testmuai.com/capabilities-generator/) to understand more about it.

## Appium Virtual Device Testing

Appium Virtual Device testing runs your Appium tests on emulators (Android) and simulators (iOS) instead of physical hardware. The workflow mirrors real-device testing, but you upload your app to the `virtualDevice` endpoint and set the `isRealMobile` capability to `false` so the session launches on a virtual device.

### Steps to Run Your Test

#### Step 1: Upload your Application
Upload your _android_ application (.apk file) to the TestMu AI servers using our REST API. Use the `virtualDevice` upload endpoint. You need to provide your Username and AccessKey in the format `Username:AccessKey` in the cURL command for authentication. Make sure to add the path of the appFile in the cURL request. Here is an example cURL request to upload your app using our REST API:

{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST 'https://manual-api.lambdatest.com/app/upload/virtualDevice' --form 'name="Android_App"' --form 'appFile=@""'
`}

{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/virtualDevice" -F "appFile=@"""
`}

{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" \\
--location --request POST 'https://manual-api.lambdatest.com/app/upload/virtualDevice' \\
--form 'name="Android_App"' \\
--form 'url="https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk"'`}

{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST "https://manual-api.lambdatest.com/app/upload/virtualDevice" --header "Content-Type: application/x-www-form-urlencoded" --data-urlencode "url=:https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk" --data-urlencode "name=Proverbial_App"`}

> Response of above cURL will be a **JSON** object containing the `App URL` of the format - ``lt://APP123456789123456789`` and will be used in the next step.

#### Step 2: Configure your Test Script
Write Your Automation Script in the client language of your choice from the ones supported by Appium. An automation script for the sample applications have been provided below.

Here is a sample automation script in Java for the sample app downloaded above. Ensure to update the `app_url`, `username` and `accesskey` in the below code.

```java reference title="AndroidEmulator.java"
https://github.com/LambdaTest/hyperexecute-appium-testng/blob/android-emulator/src/main/java/AndroidEmulator.java
```

#### Step 3: Update your XML file
Create `.XML` file in order to run your test and define device capabilities. Please find sample code below for the same.

```xml reference title="android-emulator.xml"
https://github.com/LambdaTest/hyperexecute-appium-testng/blob/android-emulator/src/test/java/android-emulator.xml
```

#### Step 4: Configure YAML and Execute your Script
```yaml reference title="android-emulator.yaml"
https://github.com/LambdaTest/hyperexecute-appium-testng/blob/android-emulator/yaml/hyp-android-emulator.yaml
```

#### Step 5: Execute your Test Suite
> **NOTE :** In case of MacOS, if you get a permission denied warning while executing CLI, simply run **`chmod u+x ./hyperexecute`** to allow permission. In case you get a security popup, allow it from your **System Preferences** → **Security & Privacy** → **General tab**.

Run the below command in your terminal at the root folder of the project:

```bash
./hyperexecute --config RELATIVE_PATH_OF_YOUR_YAML_FILE
```

OR use this command if you have not exported your username and access key.

    {`./hyperexecute --user ${ YOUR_LAMBDATEST_USERNAME()} --key ${ YOUR_LAMBDATEST_ACCESS_KEY()} --config RELATIVE_PATH_OF_YOUR_YAML_FILE `}

### Virtual Device Integration with HyperExecute

This section outlines how to execute your Virtual Device tests on HyperExecute with [YAML 0.2](/support/docs/deep-dive-into-hyperexecute-yaml/#hyperexecute-yaml-v02-framework-flags-and-discovery-config)

**Note**

Currently, App Automation is available for Emulators and Simulators in the Beta phase, with support for the Appium framework. To use this feature, [Contact Sales](https://www.testmuai.com/contact-us/).

#### Prerequisites

To run the Tests on HyperExecute from your Local System, you are required:

- Install [Appium Java Client](https://github.com/appium/java-client).
- Your TestMu AI [Username and Access key](/support/docs/hyperexecute-running-your-first-job/#how-to-get-my-username-and-access-key)
- [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) in order to initiate a test execution Job .
- Setup the [Environmental Variable](/support/docs/hyperexecute-running-your-first-job/#set-up-authentication-and-environment-variables)
- [HyperExecute YAML](/support/docs/deep-dive-into-hyperexecute-yaml/#hyperexecute-yaml-v02-framework-flags-and-discovery-config) file which contains all the necessary instructions.
- You have an access to an **Android** app (*.apk* or *.aab* file) or an **iOS** *zip* file (containing *.app* file).

Run your samplе tеsts on HyperExecute using our samplе Android and iOS applications:
* [Samplе Android App](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk)
* [Samplе iOS App](https://prod-mobile-artefacts.lambdatest.com/assets/docs/firefox.zip)

#### Step 1: Setup Your Test Suite

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

#### Step 2: Setup the CLI in your Test Suite

After cloning / downloading the sample repo, you need to setup the CLI and the environment variables.

##### Download the HyperExecute CLI

The CLI is used for triggering the tests on HyperExecute. It is recommend to download the CLI binary on the host system and keep it in the root directory of the suite to perform the tests on HyperExecute.

You can download the CLI for your desired platform from the below mentioned links:

| Platform | HyperExecute CLI |
| ---------| ---------------- |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| MacOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |

##### Setup Environment Variable

Now, you need to export your environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in the [TestMu AI Profile page](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/details/profile).

Run the below mentioned commands in your terminal to setup the CLI and the environment variables.

  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

  {`set LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
set LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

#### Step 3: Upload your Application

Upload your **iOS** application (*.app* file) or **Android** application (*.apk* file) to the TestMu AI servers using our **REST API**. You need to provide your **Username** and **AccessKey** in the format `Username:AccessKey` in the **cURL** command for authentication. Make sure to add the path of the **appFile** in the cURL request. Here is an example cURL request to upload your app using our REST API:

{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST 'https://manual-api.lambdatest.com/app/upload/virtualDevice' --form 'name="Android_App"' --form 'appFile=@"/Users/macuser/Downloads/proverbial_android.apk"'
`}

{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST 'https://manual-api.lambdatest.com/app/upload/virtualDevice' --form 'name="Android_App"' --form 'appFile=@"/Users/macuser/Downloads/proverbial_android.apk"'
`}

{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST 'https://manual-api.lambdatest.com/app/upload/virtualDevice' --form 'name="Android_App"' --form 'url="https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk"'`}

{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST "https://manual-api.lambdatest.com/app/upload/virtualDevice" --header "Content-Type: application/x-www-form-urlencoded" --data-urlencode "url=:https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk" --data-urlencode "name=Proverbial_App"`}

> Response of above cURL will be a **JSON** object containing the `App URL` of the format `lt://APP123456789123456789`

#### Step 4: Update Your Automation Script

Here is a sample automation script in Java for the sample app downloaded above. In the below test script, ensure to update the `app_url`, or `app_id`

**Set the Capability**
To run the test on Emulator/Simulator, set the `isRealMobile` capability to `false`.

```java
@Test
@org.testng.annotations.Parameters(value = {"device", "version", "platform"})
public void AndroidApp1(String device, String version, String platform) {
version = System.getProperty("platformVersion");
try {
DesiredCapabilities capabilities = new DesiredCapabilities();
capabilities.setCapability("build","Java TestNG Android");
capabilities.setCapability("name",platform+" "+device+" "+version);
capabilities.setCapability("deviceName", device);
capabilities.setCapability("platformVersion",version);
capabilities.setCapability("platformName", platform);
// highlight-next-line
capabilities.setCapability("isRealMobile", false);

// highlight-next-line
capabilities.setCapability("app", "lt://APP1123456789"); //Enter your app url
capabilities.setCapability("deviceOrientation", "PORTRAIT");
capabilities.setCapability("console", true);
capabilities.setCapability("network", false);
// capabilities.setCapability("visual", true);
capabilities.setCapability("devicelog", true);
//capabilities.setCapability("geoLocation", "HK");
```

```java
@Test
@org.testng.annotations.Parameters(value = {"device", "version", "platform"})
public void iOSApp1(String device, String version, String platform) {
try {
DesiredCapabilities capabilities = new DesiredCapabilities();
capabilities.setCapability("build","Java TestNG iOS");
capabilities.setCapability("name",platform+" "+device+" "+version);
capabilities.setCapability("deviceName", device);
capabilities.setCapability("platformVersion",version);
capabilities.setCapability("platformName", platform);
// highlight-next-line
capabilities.setCapability("isRealMobile", false);

// highlight-next-line
capabilities.setCapability("app", "lt://APP123456789"); //Enter your app url
capabilities.setCapability("deviceOrientation", "PORTRAIT");
capabilities.setCapability("console", true);
capabilities.setCapability("network", false);
// capabilities.setCapability("visual", true);
capabilities.setCapability("devicelog", true);
//capabilities.setCapability("geoLocation", "HK");
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

#### Step 5: Configure YAML in your Test Suite

```yaml
---
version: 0.2
globalTimeout: 150
testSuiteTimeout: 150
testSuiteStep: 150

runson: android

concurrency: 2

autosplit: true

retryOnFailure: false
maxRetries: 1

appium: true
framework:
name: maven/testng
defaultReports: false
discoveryType: xmltest
flags: ["-Pios-single"]

jobLabel: ['HYP', 'Virtual Device', 'iOS', 'Single Device']
```

#### Step 6: Execute your Test Suite

> **NOTE :** In case of MacOS, if you get a permission denied warning while executing CLI, simply run **`chmod u+x ./hyperexecute`** to allow permission. In case you get a security popup, allow it from your **System Preferences** → **Security & Privacy** → **General tab**.

Run the below command in your terminal at the root folder of the project:

```bash
./hyperexecute --config RELATIVE_PATH_OF_YOUR_YAML_FILE
```

OR use this command if you have not exported your username and access key.

    {`./hyperexecute --user ${ YOUR_LAMBDATEST_USERNAME()} --key ${ YOUR_LAMBDATEST_ACCESS_KEY()} --config RELATIVE_PATH_OF_YOUR_YAML_FILE `}

Visit the [HyperExecute Dashboard](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/hyperexecute) and check your Job status 🚀

## Navigation in Automation Dashboard

Every test run on the HyperExecute has a unique *jobId* associated with it. Each *jobId* can in turn constitute single (or multiple) *groupId*(s). You can visit [HyperExecute automation dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/hyperexecute/) for checking the status of the test execution.

The snapshot below shows how to navigate to the respective *testID* for viewing the Selenium logs:
