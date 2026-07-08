# Appium With JUnit

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

In this documentation, you will learn how to trigger a automation script of **JUnit** for application testing with **Appium** on TestMu AI, set the [**desired capabilities**](/support/docs/desired-capabilities-in-appium/) for appium testing, and other advanced features of TestMu AI.

## Prerequisites

- Your TestMu AI [Username and Access key](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/security).
- You should have [Java client library](https://github.com/appium/java-client) installed for Appium.
- Download and install **Maven** from [the official website](https://maven.apache.org/). For **Linux/macOS** you can use [Homebrew](https://brew.sh/) package manager.

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

```java
package com.lambdatest;

import io.appium.java_client.MobileBy;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.net.MalformedURLException;
import java.net.URL;

public class android {
String username = System.getenv("LT_USERNAME") == null ? "LT_USERNAME" //Enter the Username here
: System.getenv("LT_USERNAME");
String accessKey = System.getenv("LT_ACCESS_KEY") == null ? "LT_ACCESS_KEY"  //Enter the accessKey here
: System.getenv("LT_ACCESS_KEY");
public static RemoteWebDriver driver = null;
public String gridURL = "@mobile-hub.lambdatest.com/wd/hub";
public String status = "passed";
@Before
public void setUp() throws Exception {
DesiredCapabilities capabilities = new DesiredCapabilities();

capabilities.setCapability("build", "JUNIT Native App automation");
capabilities.setCapability("name", "Java JUnit Android Pixel 6");
capabilities.setCapability("platformName", "android");
capabilities.setCapability("deviceName", "Pixel 6");
capabilities.setCapability("isRealMobile", true);
capabilities.setCapability("platformVersion","12");
// highlight-next-line
capabilities.setCapability("app","APP_URL"); //Enter your app (.apk) url
capabilities.setCapability("deviceOrientation", "PORTRAIT");
capabilities.setCapability("console",true);
capabilities.setCapability("network",false);
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
WebDriverWait wait = new WebDriverWait(driver, 30);
wait.until(ExpectedConditions.elementToBeClickable(MobileBy.id("color"))).click();

wait.until(ExpectedConditions.elementToBeClickable(MobileBy.id("geoLocation"))).click();;
Thread.sleep(5000);
driver.navigate().back();

wait.until(ExpectedConditions.elementToBeClickable(MobileBy.id("Text"))).click();

wait.until(ExpectedConditions.elementToBeClickable(MobileBy.id("notification"))).click();;

wait.until(ExpectedConditions.elementToBeClickable(MobileBy.id("toast"))).click();

wait.until(ExpectedConditions.elementToBeClickable(By.id("Browser"))).click();;
Thread.sleep(10000);

wait.until(ExpectedConditions.elementToBeClickable(MobileBy.id("url"))).sendKeys("https://www.testmuai.com/");

wait.until(ExpectedConditions.elementToBeClickable(MobileBy.id("find"))).click();
Thread.sleep(5000);
driver.navigate().back();

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

- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**

```java
package com.lambdatest;

import io.appium.java_client.MobileBy;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.net.MalformedURLException;
import java.net.URL;

public class ios {
String username = System.getenv("LT_USERNAME") == null ? "LT_USERNAME"   //Add username here
: System.getenv("LT_USERNAME");
String accessKey = System.getenv("LT_ACCESS_KEY") == null ? "LT_ACCESS_KEY"   //Add accessKey here
: System.getenv("LT_ACCESS_KEY");
public static RemoteWebDriver driver = null;
public String gridURL = "@mobile-hub.lambdatest.com/wd/hub";
public String status = "passed";
@Before
public void setUp() throws Exception {
DesiredCapabilities capabilities = new DesiredCapabilities();

capabilities.setCapability("build", "JUNIT Native App automation");
capabilities.setCapability("name", "Java JUnit iOS iPhone 12");
capabilities.setCapability("platformName", "ios");
capabilities.setCapability("deviceName", "iPhone 12");
capabilities.setCapability("isRealMobile", true);
capabilities.setCapability("platformVersion","15");
// highlight-next-line
capabilities.setCapability("app","APP_URL"); //Enter your app (.ipa) url
capabilities.setCapability("deviceOrientation", "PORTRAIT");
capabilities.setCapability("console",true);
capabilities.setCapability("network",false);
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
WebDriverWait wait = new WebDriverWait(driver, 30);
wait.until(ExpectedConditions.elementToBeClickable(MobileBy.id("color"))).click();

wait.until(ExpectedConditions.elementToBeClickable(MobileBy.id("geoLocation"))).click();
Thread.sleep(5000);
driver.navigate().back();

wait.until(ExpectedConditions.elementToBeClickable(MobileBy.id("Text"))).click();

wait.until(ExpectedConditions.elementToBeClickable(MobileBy.id("notification"))).click();

wait.until(ExpectedConditions.elementToBeClickable(MobileBy.id("toast"))).click();

wait.until(ExpectedConditions.elementToBeClickable(By.id("Browser"))).click();
Thread.sleep(10000);

wait.until(ExpectedConditions.elementToBeClickable(MobileBy.id("url"))).sendKeys("https://www.testmuai.com/");;

wait.until(ExpectedConditions.elementToBeClickable(MobileBy.id("find"))).click();
Thread.sleep(5000);
driver.navigate().back();

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

- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**

### Step 5: Configure the Test Capabilities

You can update your custom capabilities in test scripts. In this sample project, we are passing platform name, platform version, device name and app url _(generated earlier)_ along with other capabilities like build name and test name via capabilities object.

The capabilities object in the sample code are defined as:

```java
DesiredCapabilities capabilities = new DesiredCapabilities();
capabilities.setCapability("build", "JUNIT Native App automation");
capabilities.setCapability("name", "Java JUnit Android Pixel 6");
capabilities.setCapability("platformName", "android");
capabilities.setCapability("deviceName", "Pixel 6");
capabilities.setCapability("isRealMobile", true);
capabilities.setCapability("platformVersion","12");
// highlight-next-line
capabilities.setCapability("app","YOUR_APP_URL");  //Enter your app (.apk) url
capabilities.setCapability("deviceOrientation", "PORTRAIT");
capabilities.setCapability("console",true);
capabilities.setCapability("network",false);
capabilities.setCapability("visual",true);
```

```java
DesiredCapabilities capabilities = new DesiredCapabilities();
capabilities.setCapability("build", "JUNIT Native App automation");
capabilities.setCapability("name", "Java JUnit iOS iPhone 12");
capabilities.setCapability("platformName", "ios");
capabilities.setCapability("deviceName", "iPhone 12");
capabilities.setCapability("isRealMobile", true);
capabilities.setCapability("platformVersion","15");
// highlight-next-line
capabilities.setCapability("app","YOUR_APP_URL");  //Enter your app (.ipa) url
capabilities.setCapability("deviceOrientation", "PORTRAIT");
capabilities.setCapability("console",true);
capabilities.setCapability("network",false);
capabilities.setCapability("visual",true);
```

- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**

- You must add the generated **APP_URL** to the `app` capability in the config file.
- You can generate capabilities for your test requirements with the help of our inbuilt [**Capabilities Generator tool**](https://www.testmuai.com/capabilities-generator/).For more details, please refer to our guide on [**Desired Capabilities in Appium**](/support/docs/desired-capabilities-in-appium/).

### Step 6: Execute and Monitor your Tests

- Run the following commands to install the required dependencies:

```bash
mvn clean
```

- The tests can be executed in the terminal using the following command:

```bash
mvn test -P android
```

```bash
mvn test -P ios
```

  > Your test results would be displayed on the test console (or CLI if you are using terminal/cmd) and on the [TestMu AI App Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/build).

## Using the JUnit 5 Agent Skill with TestMu AI

The [junit-5-skill](https://github.com/LambdaTest/agent-skills/tree/main/junit-5-skill) is a part of [TestMu AI Skills](https://github.com/LambdaTest/agent-skills/) that guide AI coding assistants in generating production-ready test automation.

The junit-5-skill package includes:

```
junit-5-skill/
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

### Installing JUnit 5 Agent Skill

Install a JUnit 5 Agent Skill using the command below:

```
# Clone the repo and copy the skill you need
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/junit-5-skill .claude/skills/

# Or for Cursor / Copilot
cp -r agent-skills/junit-5-skill .cursor/skills/
```

**Note**: If you prefer installing all available framework skills instead of only junit-5-skill, clone the repository directly into your tool's skills directory (for example, .claude/skills/, .cursor/skills/, .gemini/skills/, or .agent/skills/).

## Additional Links

- [Advanced Configuration for Capabilities](/support/docs/desired-capabilities-in-appium/)
- [How to test locally hosted apps](/support/docs/testing-locally-hosted-pages/)
- [How to integrate TestMu AI with CI/CD](/support/docs/integrations-with-ci-cd-tools/)

## Reference Guides

- [Advanced Configuration for Capabilities](/support/docs/desired-capabilities-in-appium/)
- [How to test locally hosted apps](/support/docs/testing-locally-hosted-pages/)
- [How to integrate TestMu AI with CI/CD](/support/docs/integrations-with-ci-cd-tools/)
