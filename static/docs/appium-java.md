# How to Run Appium Java Tests on TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Running Appium Java tests on TestMu AI automates native and hybrid mobile apps across real Android and iOS devices. Set credentials, upload the app, configure desired capabilities, then execute with Vanilla Java, JUnit, JBehave, Cucumber, or TestNG and view results.

**Supported on:** Real &amp; Virtual devices

Appium lets you automate native and hybrid mobile apps in **Java**, and TestMu AI runs those tests across a cloud of real Android and iOS devices. Along the way you'll set the [**desired capabilities**](/support/docs/desired-capabilities-in-appium/) for Appium testing and explore other advanced features of TestMu AI.

The account setup, environment variables, and app upload are the same for every framework, so those are covered first. Pick your framework in the [Run a Test With Your Framework](#run-a-test-with-your-framework) section, where each tab carries the complete, framework-specific flow, code, capabilities, run commands, and all.

## Prerequisites

Make sure you have the following set up before you start.

- Your TestMu AI [Username and Access key](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/security).
- You should have the [Java client library](https://github.com/appium/java-client) installed for Selenium and Appium.
- Install the latest Java development environment i.e. JDK 8 or higher. We recommend using the < JDK 11 version.
- Download and install **Maven** from [the official website](https://maven.apache.org/). For **Linux/macOS** you can use [Homebrew](https://brew.sh/) package manager.

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

Choose your Java test framework below. Each tab contains the complete flow for that framework, get the sample project, update the automation script, configure the capabilities, and execute your tests. Ensure you have already set your credentials and uploaded your app as described above.

Trigger an automation script of **Java** for application testing with **Appium** on TestMu AI using plain, framework-free Vanilla Java.

### Step 1: Get a Sample Project

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

**Sample repo**
All the code samples in this documentation can be found on **TestMu AI's Github Repository**. You can either download or clone the repository to quickly run your tests.  View on GitHub

### Step 2: Update your Automation Script

An automation script for the sample application given above has been provided here. Ensure to update the `APP_URL`, `username` and `accessKey` in the code scripts before running the tests.

```java title="vanilla_android.java"

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileBy;
import io.appium.java_client.MobileElement;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import java.net.MalformedURLException;
import java.net.URL;

public class vanilla_android {
//highlight-next-line
public static String userName = System.getenv("LT_USERNAME") == null ? "LT_USERNAME"  //Add LambdaTest username here
: System.getenv("LT_USERNAME");
//highlight-next-line
public static String accessKey = System.getenv("LT_ACCESS_KEY") == null ? "LT_ACCESS_KEY" //Add LambdaTest accessKey here
: System.getenv("LT_ACCESS_KEY");

private static AppiumDriver driver;

public static void main(String args[]) throws MalformedURLException, InterruptedException {

try {
DesiredCapabilities capabilities = new DesiredCapabilities();
capabilities.setCapability("deviceName", "Galaxy S20");
capabilities.setCapability("platformVersion", "11");
capabilities.setCapability("platformName", "Android");
capabilities.setCapability("isRealMobile", true);
//highlight-next-line
capabilities.setCapability("app", "APP_URL");     //Enter your app url
capabilities.setCapability("deviceOrientation", "PORTRAIT");
capabilities.setCapability("build", "Java Vanilla - Android");
capabilities.setCapability("name", "Sample Test Java");
capabilities.setCapability("console", true);
capabilities.setCapability("network", false);
capabilities.setCapability("visual", true);
capabilities.setCapability("devicelog", true);

driver = new AppiumDriver(new URL("https://" +userName + ":" + accessKey + "@mobile-hub.lambdatest.com/wd/hub"), capabilities);

MobileElement color = (MobileElement) driver.findElement(MobileBy.id("com.lambdatest.proverbial:id/color"));
color.click();

MobileElement text = (MobileElement) driver.findElement(MobileBy.id("com.lambdatest.proverbial:id/Text"));
//Changes the text to proverbial
text.click();

//toast is visible
MobileElement toast = (MobileElement) driver.findElement(MobileBy.id("com.lambdatest.proverbial:id/toast"));
toast.click();

//notification is visible
MobileElement notification = (MobileElement) driver.findElement(MobileBy.id("com.lambdatest.proverbial:id/notification"));
notification.click();

//Open the geolocation page
MobileElement geo = (MobileElement) driver.findElement(MobileBy.id("com.lambdatest.proverbial:id/geoLocation"));
geo.click();
Thread.sleep(5000);

//takes back to home page
MobileElement el3 = (MobileElement) driver.findElementByAccessibilityId("Home");

driver.navigate().back();
Thread.sleep(2000);

//Takes to speed test page
MobileElement speedtest = (MobileElement) driver.findElement(MobileBy.id("com.lambdatest.proverbial:id/speedTest"));
speedtest.click();
Thread.sleep(5000);

driver.navigate().back();

//Opens the browser
MobileElement browser = (MobileElement) driver.findElement(MobileBy.AccessibilityId("Browser"));
browser.click();

MobileElement url = (MobileElement) driver.findElement(MobileBy.id("com.lambdatest.proverbial:id/url"));
url.sendKeys("https://www.testmuai.com");
MobileElement find = (MobileElement) driver.findElement(MobileBy.id("com.lambdatest.proverbial:id/find"));
find.click();

} catch (AssertionError a) {
((JavascriptExecutor) driver).executeScript("lambda-status=failed");
a.printStackTrace();
}
// The driver.quit statement is required, otherwise the test continues to execute, leading to a timeout.
driver.quit();
}
}
```

```java title="vanilla_ios.java"
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileBy;
import io.appium.java_client.MobileElement;
import io.appium.java_client.ios.IOSDriver;

import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.net.URL;

public class vanilla_ios {
//highlight-next-line
public static String userName = System.getenv("LT_USERNAME") == null ? "LT_USERNAME"  //Add LambdaTest username here
: System.getenv("LT_USERNAME");
//highlight-next-line
public static String accessKey = System.getenv("LT_ACCESS_KEY") == null ? "LT_ACCESS_KEY" //Add LambdaTest accessKey here
: System.getenv("LT_ACCESS_KEY");

public static final String URL = "https://" + userName + ":" + accessKey + "@mobile-hub.lambdatest.com/wd/hub";
public static IOSDriver driver = null;

public static void main(String[] args) throws Exception {

try {
DesiredCapabilities caps = new DesiredCapabilities();
caps.setCapability("platformVersion", "15");
caps.setCapability("deviceName", "iPhone 12");
caps.setCapability("isRealMobile", true);
//highlight-next-line
caps.setCapability("app", "APP_URL"); //Enter your app url
caps.setCapability("platformName", "iOS");
caps.setCapability("build", "Java Vanilla - iOS");
caps.setCapability("name", "Sample Test Java");
caps.setCapability("devicelog", true);
caps.setCapability("network", false);

driver = new IOSDriver(new URL("https://" + userName + ":" + accessKey + "@beta-hub.lambdatest.com/wd/hub"), caps);

Thread.sleep(2000);

//Changes color

driver.findElement(MobileBy.id("color")).click();
Thread.sleep(1000);

//Back to black color
driver.navigate().back();

Thread.sleep(1000);

//Changes the text to proverbial
driver.findElement(MobileBy.id("Text")).click();
Thread.sleep(1000);

//toast is visible
driver.findElement(MobileBy.id("toast")).click();
Thread.sleep(1000);

//notification is visible
driver.findElement(MobileBy.id("notification")).click();
Thread.sleep(2000);

//Open the geolocation page
driver.findElement(MobileBy.id("geoLocation")).click();
Thread.sleep(4000);
driver.navigate().back();
Thread.sleep(1000);

//Takes to speed test page
driver.findElement(MobileBy.id("speedTest")).click();
Thread.sleep(5000);
driver.navigate().back();
Thread.sleep(1000);

//Opens the browser
MobileElement browser = (MobileElement) driver.findElementByAccessibilityId("Browser");
browser.click();
Thread.sleep(3000);

WebDriverWait el7 =  new WebDriverWait(driver, 30);
el7.until(ExpectedConditions.elementToBeClickable(MobileBy.id("url")));
driver.findElementById("url").sendKeys("https://www.testmuai.com/");

//Clicks on the text box
WebDriverWait el = new WebDriverWait(driver,90);
MobileElement el4 = (MobileElement) driver.findElementByAccessibilityId("find");
el.until(ExpectedConditions.elementToBeClickable(el4));
el4.click();
el4.sendKeys("Lambdatest");

//((JavascriptExecutor) driver).executeScript("lambda-status=passed");
driver.quit();

} catch (Exception t) {
System.out.println(t);
driver.quit();

}
}
}
```

- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**

### Step 3: Configure the Test Capabilities

You can update your custom capabilities in test scripts. In this sample project, we are passing platform name, platform version, device name and app url _(generated earlier)_ along with other capabilities like build name and test name via capabilities object.

The capabilities object in the sample code are defined as:

```java
DesiredCapabilities capabilities = new DesiredCapabilities();
capabilities.setCapability("deviceName", "Galaxy S20");
capabilities.setCapability("platformVersion", "11");
capabilities.setCapability("platformName", "Android");
capabilities.setCapability("isRealMobile", true);
//highlight-next-line
capabilities.setCapability("app", "YOUR_APP_URL"); //Enter your app url
capabilities.setCapability("deviceOrientation", "PORTRAIT");
capabilities.setCapability("build", "Java Vanilla - Android");
capabilities.setCapability("name", "Sample Test Java");
capabilities.setCapability("console", true);
capabilities.setCapability("network", false);
capabilities.setCapability("visual", true);
capabilities.setCapability("devicelog", true);
```

- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**

```java
DesiredCapabilities caps = new DesiredCapabilities();
caps.setCapability("platformVersion", "15");
caps.setCapability("deviceName", "iPhone 12");
caps.setCapability("isRealMobile", true);
//highlight-next-line
caps.setCapability("app", "YOUR_APP_URL"); //Enter your app url
caps.setCapability("platformName", "iOS");
caps.setCapability("build", "Java Vanilla - iOS");
caps.setCapability("name", "Sample Test Java");
caps.setCapability("devicelog", true);
caps.setCapability("network", false);
```

- You must add the generated **APP_URL** to the `app` capability in the config file.
- You must set **isRealMobile** capability to `false` in the config file to run on **Virtual Devices**
- You can generate capabilities for your test requirements with the help of our inbuilt [**Capabilities Generator tool**](https://www.testmuai.com/capabilities-generator/).For more details, please refer to our guide on [**Desired Capabilities in Appium**](/support/docs/desired-capabilities-in-appium/).

### Step 4: Execute and Monitor your Tests

- Run the following commands to install the required dependencies:

```bash
mvn clean install
```

- The tests can be executed in the terminal using the following command:

```bash
mvn test -P android
```

```bash
mvn test -P ios
```

  > Your test results would be displayed on the test console (or CLI if you are using terminal/cmd) and on the [TestMu AI App Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/build).

Trigger an automation script of **JUnit** for application testing with **Appium** on TestMu AI.

### Step 1: Get a Sample Project

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

**Sample repo**
All the code samples in this documentation can be found on **TestMu AI's Github Repository**. You can either download or clone the repository to quickly run your tests.  View on GitHub

### Step 2: Update your Automation Script

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

### Step 3: Configure the Test Capabilities

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

### Step 4: Execute and Monitor your Tests

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

Trigger an automation script of **JBehave** for application testing with **Appium** on TestMu AI, running behavior-driven stories across single and parallel device configurations.

### Step 1: Get a Sample Project

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

**Sample repo**
All the code samples in this documentation can be found on **TestMu AI's Github Repository**. You can either download or clone the repository to quickly run your tests.  View on GitHub

### Step 2: Update your Automation Script

An automation script for the sample application given above has been provided here. Ensure to update the `APP_URL`, `username` and `accessKey` in the code scripts before running the tests.

```java

package com.lambdatest;
import java.io.FileReader;
import java.net.URL;
import java.util.Map;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Iterator;
import java.util.Collection;
import java.lang.reflect.Constructor;
import org.json.simple.JSONObject;
import org.json.simple.JSONArray;
import org.json.simple.parser.JSONParser;

import org.jbehave.core.embedder.Embedder;
import org.junit.Test;
import org.junit.After;
import org.junit.Before;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.junit.runners.Parameterized.Parameters;
import org.junit.runners.Parameterized.Parameter;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;

@RunWith(Parameterized.class)
public class LambdaTestJBehaveRunner {

public WebDriver driver;
// private Local l;

private static JSONObject config;

@Parameter(value = 0)
public int taskID;

@Parameters
public static Collection<Object[]> data() throws Exception {
List<Object[]> taskIDs = new ArrayList<Object[]>();
if(System.getProperty("config") != null) {
JSONParser parser = new JSONParser();
config = (JSONObject) parser.parse(new FileReader("src/test/resources/conf/" + System.getProperty("config")));
int envs = ((JSONArray)config.get("environments")).size();

for(int i=0; i<envs; i++) {
taskIDs.add(new Object[] {i});
}
}

return taskIDs;
}

@Before
public void setUp() throws Exception {
JSONArray envs = (JSONArray) config.get("environments");

DesiredCapabilities capabilities = new DesiredCapabilities();

capabilities.setCapability("isRealMobile", true);
capabilities.setCapability("app","APP_URL");    //Enter app_url here

Map<String, String> envCapabilities = (Map<String, String>) envs.get(taskID);
Iterator it = envCapabilities.entrySet().iterator();
while (it.hasNext()) {
Map.Entry pair = (Map.Entry)it.next();
capabilities.setCapability(pair.getKey().toString(), pair.getValue().toString());
}

Map<String, String> commonCapabilities = (Map<String, String>) config.get("capabilities");
it = commonCapabilities.entrySet().iterator();
while (it.hasNext()) {
Map.Entry pair = (Map.Entry)it.next();
if(capabilities.getCapability(pair.getKey().toString()) == null){
capabilities.setCapability(pair.getKey().toString(), pair.getValue().toString());
}
}

String username = System.getenv("LT_USERNAME") == null ? "YOUR_LT_USERNAME" : System.getenv("LT_USERNAME");  //Replace YOUR_LT_USERNAME with your LambdaTest username

String accessKey = System.getenv("LT_ACCESS_KEY") == null ? "YOUR_LT_ACCESS_KEY" : System.getenv("LT_ACCESS_KEY"); //Replace YOUR_LT_ACCESS_KEY with your LambdaTest accessKey

driver = new RemoteWebDriver(new URL("http://"+username+":"+accessKey+"@"+config.get("server")+"/wd/hub"), capabilities);
}

@After
public void tearDown() throws Exception {
driver.quit();
}

@Test
public void runStories() throws Exception {
Class<?> c = Class.forName(System.getProperty("embedder"));
Constructor<?> cons = c.getConstructor(WebDriver.class);
Embedder storyEmbedder = (Embedder) cons.newInstance(driver);

List<String> storyPaths = Arrays.asList(System.getProperty("stories"));
storyEmbedder.runStoriesAsPaths(storyPaths);
}
}
```

- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**

### Step 3: Configure the Test Capabilities

You can update your custom capabilities in test scripts. In this sample project, we are passing platform name, platform version, device name and app url _(generated earlier)_ along with other capabilities like build name and test name via capabilities object.

The capabilities object in the sample code are defined as:

```java
//Single Tests
{
"server": "mobile-hub.lambdatest.com",

"capabilities": {
"build": "jbehave-LambdaTest-AppAutomate-Single",
"name": "Single Test 1"
},

"environments": [
{
"platformName": "android",
"deviceName": "Galaxy S21 5G",
"platformVersion": "11"
}
]
}
```

```java
//Parallel Tests
{
"server": "mobile-hub.lambdatest.com",

"capabilities": {
"build": "jbehave-LambdaTest-AppAutomate-Parallel",
"name": "Parallel Test 1"
},

"environments": [
{
"platformName": "android",
"deviceName": "Galaxy S21 5G",
"platformVersion": "11"
},
{
"platformName": "android",
"deviceName": "OnePlus 10 Pro",
"platformVersion": "12"
},
{
"platformName": "android",
"deviceName": "Pixel 3a",
"platformVersion": "10"
}
]
}
```

- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**

- You must add the generated **APP_URL** to the `app` capability in the config file.
- You can generate capabilities for your test requirements with the help of our inbuilt [**Capabilities Generator tool**](https://www.testmuai.com/capabilities-generator/).For more details, please refer to our guide on [**Desired Capabilities in Appium**](/support/docs/desired-capabilities-in-appium/).

### Step 4: Execute and Monitor your Tests

- Run the following commands to install the required dependencies:

```bash
mvn clean install
```

- The tests can be executed in the terminal using the following command:

```bash
mvn test -P single
```

```bash
mvn test -P parallel
```

  > Your test results would be displayed on the test console (or CLI if you are using terminal/cmd) and on the [TestMu AI App Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/build).

Trigger an automation script of **Cucumber** for application testing with **Appium** on TestMu AI, driving your BDD scenarios across single and parallel device suites.

Cucumber for Java requires the latest Java development environment i.e. JDK 8 or higher. We recommend using the < JDK 11 version.

### Step 1: Get a Sample Project

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

**Sample repo**
All the code samples in this documentation can be found on **TestMu AI's Github Repository**. You can either download or clone the repository to quickly run your tests.  View on GitHub

### Step 2: Update your Automation Script

An automation script for the sample application given above has been provided here. Ensure to update the `APP_URL`, `username` and `accessKey` in the code scripts before running the tests.

```java
package MyRunner;
import java.net.URL;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;
import io.cucumber.testng.TestNGCucumberRunner;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.AppiumDriver;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Parameters;

import org.openqa.selenium.JavascriptExecutor;
import java.net.MalformedURLException;

@CucumberOptions(
features = "src/main/java/Features/todo.feature",
glue = {"stepDefinitions"},
plugin = "json:target/cucumber-reports/CucumberTestReport.json")

public class TestRunner extends AbstractTestNGCucumberTests {

private TestNGCucumberRunner testNGCucumberRunner;

public static RemoteWebDriver connection;

@BeforeClass(alwaysRun = true)
public void setUpCucumber() {
testNGCucumberRunner = new TestNGCucumberRunner(this.getClass());
}

@BeforeMethod(alwaysRun = true)
@Parameters({ "deviceName", "platformVersion", "platformName" })
public void setUpClass(String deviceName, String platformVersion, String platformName) throws Exception {

String username = System.getenv("LT_USERNAME") == null ? "YOUR_LT_USERNAME" : System.getenv("LT_USERNAME");      //Enter your LambdaTest username at the place of YOUR_LT_USERNAME
String accesskey = System.getenv("LT_ACCESS_KEY") == null ? "YOUR_LT_ACCESSKEY" : System.getenv("LT_ACCESS_KEY");     //Enter your LambdaTest accessKey at the place of YOUR_LT_ACCESSKEY

DesiredCapabilities capability = new DesiredCapabilities();

capability.setCapability("platformName", platformName);
capability.setCapability("deviceName", deviceName);
capability.setCapability("platformVersion",platformVersion);

capability.setCapability("build", "Native App automate Demo");
capability.setCapability("test", "Test Parallel");
capability.setCapability("isRealMobile", true);
// highlight-next-line
capability.setCapability("app","lt://proverbial-android");     //Enter the app url here
capability.setCapability("network", false);
capability.setCapability("video", true);
capability.setCapability("console", true);
capability.setCapability("visual", true);

String gridURL = "https://" + username + ":" + accesskey + "@mobile-hub.lambdatest.com/wd/hub";
System.out.println(gridURL);
connection = new RemoteWebDriver(new URL(gridURL), capability);
System.out.println(capability);
System.out.println(connection.getSessionId());
}

@DataProvider
public Object[][] features() {
return testNGCucumberRunner.provideScenarios();
}

@AfterClass(alwaysRun = true)
public void tearDownClass() {
testNGCucumberRunner.finish();
}
}
```

- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**

### Step 3: Configure the Test Capabilities

You can update your custom capabilities in test scripts. In this sample project, we are passing platform name, platform version, device name and app url _(generated earlier)_ along with other capabilities like build name and test name via capabilities object.

The capabilities object in the sample code are defined as:

```java
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE suite SYSTEM "http://testng.org/testng-1.0.dtd">
<suite name="BDD Test Suite" verbose="1" parallel="tests"
thread-count="3" >
<test name="ANDROIDTEST" annotations="JDK"
preserve-order="true">
<parameter name="deviceName" value=".*"/>
<parameter name="platformVersion" value="12"/>
<parameter name="platformName" value="Android"/>
<classes>
<class name="MyRunner.TestRunner" />
</classes>
</test> <!-- Test -->
</suite>
```

```java
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE suite SYSTEM "http://testng.org/testng-1.0.dtd">
<suite name="BDD Test Suite" verbose="1" parallel="tests"
thread-count="2">
<test name="Galaxy" annotations="JDK"
preserve-order="true">
<parameter name="deviceName" value="Galaxy.*"/>
<parameter name="platformVersion" value="11"/>
<parameter name="platformName" value="Android"/>
<classes>
<class name="MyRunner.TestRunner"/>
</classes>
</test> <!-- Test -->
<test name="OnePlus" annotations="JDK"
preserve-order="true">
<parameter name="deviceName" value="Pixel.*"/>
<parameter name="platformVersion" value="12"/>
<parameter name="platformName" value="Android"/>
<classes>
<class name="MyRunner.TestRunner"/>
</classes>
</test> <!-- Test -->

</suite>
```

- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**

- You must add the generated **APP_URL** to the `app` capability in the config file.
- You can generate capabilities for your test requirements with the help of our inbuilt [**Capabilities Generator tool**](https://www.testmuai.com/capabilities-generator/).For more details, please refer to our guide on [**Desired Capabilities in Appium**](/support/docs/desired-capabilities-in-appium/).

### Step 4: Execute and Monitor your Tests

- Run the following commands to install the required dependencies:

```bash
mvn clean install
```

- The tests can be executed in the terminal using the following command:

```bash
mvn test -D suite=single.xml
```

```bash
mvn test -D suite=parallel.xml
```

  > Your test results would be displayed on the test console (or CLI if you are using terminal/cmd) and on the [TestMu AI App Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/build).

Trigger an automation script of **TestNG** for application testing with **Appium** on TestMu AI.

### Step 1: Get a Sample Project

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

**Sample repo**
All the code samples in this documentation can be found on **TestMu AI's Github Repository**. You can either download or clone the repository to quickly run your tests.  View on GitHub

### Step 2: Update your Automation Script

An automation script for the sample application given above has been provided here. Ensure to update the `APP_URL`, `username` and `accessKey` in the code scripts before running the tests.

```java title="AndroidApp.java"
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileBy;
import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidElement;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.Test;

import java.net.URL;
import java.util.List;

public class AndroidApp {

String userName = System.getenv("LT_USERNAME") == null ?
"username" : System.getenv("LT_USERNAME"); //Add username here
String accessKey = System.getenv("LT_ACCESS_KEY") == null ?
"accessKey" : System.getenv("LT_ACCESS_KEY"); //Add accessKey here

public String gridURL = "@mobile-hub.lambdatest.com/wd/hub";

AppiumDriver driver;

@Test
@org.testng.annotations.Parameters(value = {"device", "version", "platform"})
public void AndroidApp1(String device, String version, String platform) {
try {
DesiredCapabilities capabilities = new DesiredCapabilities();
capabilities.setCapability("build","Java TestNG Android");
capabilities.setCapability("name",platform+" "+device+" "+version);
capabilities.setCapability("deviceName", device);
capabilities.setCapability("platformVersion",version);
capabilities.setCapability("platformName", platform);
capabilities.setCapability("isRealMobile", true);
// highlight-next-line
capabilities.setCapability("app", "APP_URL"); //Enter your app (.apk) url
capabilities.setCapability("deviceOrientation", "PORTRAIT");
capabilities.setCapability("console", true);
capabilities.setCapability("network", false);
capabilities.setCapability("visual", true);
capabilities.setCapability("devicelog", true);

String hub = "https://" + userName + ":" + accessKey + gridURL;
driver = new AppiumDriver(new URL(hub), capabilities);

MobileElement color = (MobileElement) driver.findElementById("com.lambdatest.proverbial:id/color");
//Changes color to pink
color.click();
Thread.sleep(1000);
//Back to original color
color.click();

MobileElement text = (MobileElement) driver.findElementById("com.lambdatest.proverbial:id/Text");
//Changes the text to "Proverbial"
text.click();

//toast will be visible
MobileElement toast = (MobileElement) driver.findElementById("com.lambdatest.proverbial:id/toast");
toast.click();

//notification will be visible
MobileElement notification = (MobileElement) driver.findElementById("com.lambdatest.proverbial:id/notification");
notification.click();
Thread.sleep(2000);

//Opens the geolocation page
MobileElement geo = (MobileElement) driver.findElementById("com.lambdatest.proverbial:id/geoLocation");
geo.click();
Thread.sleep(5000);

//takes back to home page
MobileElement home = (MobileElement) driver.findElementByAccessibilityId("Home");
home.click();

//Takes to speed test page
MobileElement speedtest = (MobileElement) driver.findElementById("com.lambdatest.proverbial:id/speedTest");
speedtest.click();
Thread.sleep(5000);

MobileElement Home = (MobileElement) driver.findElementByAccessibilityId("Home");
Home.click();

//Opens the browser
MobileElement browser = (MobileElement) driver.findElementByAccessibilityId("Browser");
browser.click();

MobileElement url = (MobileElement) driver.findElementById("com.lambdatest.proverbial:id/url");
url.sendKeys("https://www.testmuai.com");

MobileElement find = (MobileElement) driver.findElementById("com.lambdatest.proverbial:id/find");
find.click();

driver.quit();

} catch (Exception e) {
e.printStackTrace();
try{
driver.quit();
}catch(Exception e1){
e.printStackTrace();
}
}
}
}
```

```java title="iOSApp.java"
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileBy;
import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidElement;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.remote.DesiredCapabilities;
import java.net.URL;
import org.testng.annotations.Test;

public class iOSApp {

String userName = System.getenv("LT_USERNAME") == null ?
"username" : System.getenv("LT_USERNAME"); //Add username here
String accessKey = System.getenv("LT_ACCESS_KEY") == null ?
"accessKey" : System.getenv("LT_ACCESS_KEY"); //Add accessKey here

public String gridURL = "@mobile-hub.lambdatest.com/wd/hub";

AppiumDriver driver;

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
capabilities.setCapability("isRealMobile", true);
// highlight-next-line
capabilities.setCapability("app", "APP_URL"); //Enter your app (.ipa) url
capabilities.setCapability("deviceOrientation", "PORTRAIT");
capabilities.setCapability("console", true);
capabilities.setCapability("network", false);
capabilities.setCapability("visual", true);
capabilities.setCapability("devicelog", true);
//capabilities.setCapability("geoLocation", "HK");

String hub = "https://" + userName + ":" + accessKey + gridURL;
driver = new AppiumDriver(new URL(hub), capabilities);

WebDriverWait Wait = new WebDriverWait(driver,30);

//Changes the color of the text
Wait.until(ExpectedConditions.presenceOfElementLocated(MobileBy.AccessibilityId("color"))).click();
Thread.sleep(1000);

//Changes the text to "Proverbial"
Wait.until(ExpectedConditions.presenceOfElementLocated(MobileBy.AccessibilityId("Text"))).click();
Thread.sleep(1000);

//Toast will be visible
Wait.until(ExpectedConditions.presenceOfElementLocated(MobileBy.AccessibilityId("toast"))).click();
Thread.sleep(1000);

//Notification will be visible
Wait.until(ExpectedConditions.presenceOfElementLocated(MobileBy.AccessibilityId("notification"))).click();
Thread.sleep(4000);

//Opens the geolocation page
Wait.until(ExpectedConditions.presenceOfElementLocated(MobileBy.AccessibilityId("geoLocation"))).click();
Thread.sleep(4000);

//Takes back
driver.navigate().back();

//Takes to speedtest page
Wait.until(ExpectedConditions.presenceOfElementLocated(MobileBy.AccessibilityId("speedTest"))).click();
Thread.sleep(4000);

driver.navigate().back();

//Opens the browser
Wait.until(ExpectedConditions.presenceOfElementLocated(MobileBy.AccessibilityId("Browser"))).click();
Thread.sleep(1000);

MobileElement url = (MobileElement) driver.findElementByAccessibilityId("url");
url.click();
url.sendKeys("https://www.testmuai.com");

Wait.until(ExpectedConditions.presenceOfElementLocated(MobileBy.AccessibilityId("find"))).click();
Thread.sleep(1000);

driver.quit();

} catch (Exception e) {
e.printStackTrace();
try{
driver.quit();
}catch(Exception e1){
e.printStackTrace();
}
}

}
}
```

- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**

### Step 3: Configure the Test Capabilities

You can update your custom capabilities in test scripts. In this sample project, we are passing platform name, platform version, device name and app url _(generated earlier)_ along with other capabilities like build name and test name via capabilities object.

The capabilities object in the sample code are defined as:

```java
DesiredCapabilities capabilities = new DesiredCapabilities();
capabilities.setCapability("build","Java TestNG Android");
capabilities.setCapability("name",platform+" "+device+" "+version);
capabilities.setCapability("deviceName", device);
capabilities.setCapability("platformVersion",version);
capabilities.setCapability("platformName", platform);
capabilities.setCapability("isRealMobile", true);
// highlight-next-line
capabilities.setCapability("app", "APP_URL"); //Enter your app (.apk) url
capabilities.setCapability("deviceOrientation", "PORTRAIT");
capabilities.setCapability("console", true);
capabilities.setCapability("network", false);
capabilities.setCapability("visual", true);
capabilities.setCapability("devicelog", true);
```

```java
DesiredCapabilities capabilities = new DesiredCapabilities();
capabilities.setCapability("build","Java TestNG iOS");
capabilities.setCapability("name",platform+" "+device+" "+version);
capabilities.setCapability("deviceName", device);
capabilities.setCapability("platformVersion",version);
capabilities.setCapability("platformName", platform);
capabilities.setCapability("isRealMobile", true);
// highlight-next-line
capabilities.setCapability("app", "APP_URL"); //Enter your app (.ipa) url
capabilities.setCapability("deviceOrientation", "PORTRAIT");
capabilities.setCapability("console", true);
capabilities.setCapability("network", false);
capabilities.setCapability("visual", true);
capabilities.setCapability("devicelog", true);
```

- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**

- You must add the generated **APP_URL** to the `app` capability in the config file.
- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**
- You can generate capabilities for your test requirements with the help of our inbuilt [**Capabilities Generator tool**](https://www.testmuai.com/capabilities-generator/).For more details, please refer to our guide on [**Desired Capabilities in Appium**](/support/docs/desired-capabilities-in-appium/).

### Step 4: Execute and Monitor your Tests

- Run the following commands to install the required dependencies:

```bash
mvn clean install
```

- The tests can be executed in the terminal using the following command:

```bash
mvn test -P android-single
```

```bash
mvn test -P ios-single
```

  > Your test results would be displayed on the test console (or CLI if you are using terminal/cmd) and on the [TestMu AI App Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/build).

## View Your Results

Your test results would be displayed on the test console (or CLI if you are using terminal/cmd) and on the [TestMu AI App Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/build). Each session includes a video recording, step-by-step screenshots, device logs, and network logs.

## Next Steps

Continue with these related guides:

- [Advanced Configuration for Capabilities](/support/docs/desired-capabilities-in-appium/)
- [How to test locally hosted apps](/support/docs/testing-locally-hosted-pages/)
- [How to integrate TestMu AI with CI/CD](/support/docs/integrations-with-ci-cd-tools/)
