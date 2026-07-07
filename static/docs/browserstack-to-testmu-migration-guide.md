# Migration from BrowserStack to TestMu AI

TestMu AI and BrowserStack both offer the cloud-based Selenium Grid. Hence, you can easily migrate your existing Selenium test automation scripts (or suites) from BrowserStack to TestMu AI

[Note: This guide covers the migration of tests running on the cloud grid that uses Selenium 4 and Selenium 3]

## Authentication
Firstly, you need to change the authentication in your configuration settings of your test suite. For running tests on TestMu AI Selenium Grid, you need to have a valid user_name and access_key to perform tests on our Grid. In case you do not have an account on TestMu AI, visit the TestMu AI signup page and create a new account.

When migrating your Selenium 4 tests from BrowserStack to TestMu AI, the following updates are required in your existing code:

1.  Get TestMu AI Credentials: You can find these credentials under Account Settings > [Password & Security](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/security/username-accesskey) and copy your Username and Access Key, then add them to the .env file to keep them safe from public exposure.

2. Create .env file: Securely store your TestMu AI credentials, create a .env file in the root of your project and add the following values:

```
LT_USERNAME="<your_username>"
LT_ACCESS_KEY="<your_access_key>"
```

Once the .env file is set up, ensure your test framework correctly reads these variables at runtime. This helps keep your authentication secure and avoids hard-coding credentials within your scripts. With the credentials in place, you’re now ready to update your Hub URL for TestMu AI execution.

## Changes in Hub URL
You need to now change the hub URL in the configuration settings of your test suite. Hub URL is of type String and it defines the Hub location to which the Selenium tests would be submitted for execution.

```js
@hub-cloud.browserstack.com/wd/hub
```

```js
@hub.lambdatest.com/wd/hub
```

## Configuring Selenium 4 Tests on TestMu AI

Migrating your Selenium 4 tests from BrowserStack to TestMu AI requires only a few small updates. In this guide, we’ll walk through how to apply TestMu AI’s W3C-compliant capabilities, configure authentication, and execute your Selenium 4 test sessions on real browsers hosted in the TestMu AI cloud.

### TestMu AI Automation Capabilities

Capabilities generator let you configure the desired capabilities (or capabilities) which are configuration options that let you set the following:
* Desired browser
* Desired browser version
* Desired platform (or operating system)

Optionally, you can also choose the Selenium version and other advanced options present in the Selenium Capabilities Generator. For this migration guide, we have only restricted to the three capabilities listed above.

To generate capabilities use [TestMu AI Capabilities Generator](https://www.testmuai.com/capabilities-generator/) to define key automation testing parameters, such as browser, version, operating system, and additional test settings.

For the migration, we have considered Java-based Selenium automation tests. Shown below are the screenshots of capabilities generator of BrowserStack and TestMu AI:

```js
MutableCapabilities capabilities = new MutableCapabilities();
HashMap<String, Object> bstackOptions = new HashMap<String, Object>();
capabilities.setCapability("browserName", "Safari");
bstackOptions.put("os", "OS X");
bstackOptions.put("osVersion", "Tahoe");
bstackOptions.put("browserVersion", "26.0");
bstackOptions.put("userName", "YOUR_USERNAME");
bstackOptions.put("accessKey", "YOUR_ACCESS_KEY");
capabilities.setCapability("bstack:options", bstackOptions);
```

```js
SafariOptions browserOptions = new SafariOptions();
browserOptions.setPlatformName("MacOS Tahoe");
browserOptions.setBrowserVersion("26");
HashMap<String, Object> ltOptions = new HashMap<String, Object>();
ltOptions.put("username", "<your_username>");
ltOptions.put("accessKey", "<your_access_key>");
ltOptions.put("w3c", true);
browserOptions.setCapability("LT:Options", ltOptions);
```

## Configuring Selenium 3 Tests on TestMu AI

Migrating your Selenium 3 tests from BrowserStack to TestMu AI requires only a few simple configuration changes. In the sections below, we’ll guide you through updating your test setup, applying Selenium 3–compatible capabilities, and running your test sessions on real browsers hosted on the TestMu AI cloud.

### TestMu AI Automation Capabilities

The Capabilities Generator allows you to configure the required desired capabilities for Selenium 3 test execution. These capabilities define the browser environment in which your tests will run.

With Selenium 3, the core capabilities remain:

* Desired browser
* Desired browser version
* Desired platform (or operating system)

Optionally, you may also configure Selenium versions or other advanced settings based on your test requirements. However, for this migration guide, we will primarily focus on the three fundamental capabilities listed above.

To generate capabilities for Selenium 3, you can use the [TestMu AI Capabilities Generator](https://www.testmuai.com/capabilities-generator/) , which allows you to define essential automation parameters such as browser name, browser version, operating system, along with any additional test configurations required for execution.

Below are example capability representations from BrowserStack and TestMu AI to help you understand how to adapt your existing configuration during migration.

```js
DesiredCapabilities caps = new DesiredCapabilities();
caps.setCapability("browser", "Safari");
caps.setCapability("os", "OS X");
caps.setCapability("os_version", "Tahoe");
caps.setCapability("browser_version", "26.0");
caps.setCapability("browserstack.user", "YOUR_USERNAME");
caps.setCapability("browserstack.key", "YOUR_ACCESS_KEY");
```

```js
DesiredCapabilities capabilities = new DesiredCapabilities();
capabilities.setCapability("browserName", "Safari");
capabilities.setCapability("browserVersion", "26");
HashMap<String, Object> ltOptions = new HashMap<String, Object>();
ltOptions.put("username", "<your_username>");
ltOptions.put("accessKey", "<your_access_key>");
ltOptions.put("platformName", "MacOS Tahoe");
ltOptions.put("visual", true);
ltOptions.put("video", true);
capabilities.setCapability("LT:Options", ltOptions);
```

## Hands On Guide -  TestMu AI Migration

Let’s walk through a practical example demonstrating how to migrate a Selenium 4 test to TestMu AI. In this scenario, we launch the latest Chrome browser on a Windows 10 machine.

**Test Scenario**:

This test script performs a basic text validation on the website [TestMu AI eCommerce Playground](https://ecommerce-playground.lambdatest.io/) and shows the expected execution results when running the test in the TestMu AI cloud.

```java
// TextValidationTest.java
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.safari.SafariOptions;

import java.net.URL;
import java.util.HashMap;

public class TextValidationTest {

public static void main(String[] args) throws Exception {

String username = System.getenv("LT_USERNAME") == null ?
"Your LT Username" : System.getenv("LT_USERNAME");

String authkey = System.getenv("LT_ACCESS_KEY") == null ?
"Your LT AccessKey\n"  : System.getenv("LT_ACCESS_KEY");

String GRID_URL = "https://" + username + ":" + authkey + "@hub.lambdatest.com/wd/hub";

SafariOptions browserOptions = new SafariOptions();
browserOptions.setPlatformName("MacOS Tahoe");
browserOptions.setBrowserVersion("26");
HashMap<String, Object> ltOptions = new HashMap<String, Object>();
ltOptions.put("username", "<your_username>");
ltOptions.put("accessKey", "<your_access_key>");
ltOptions.put("project", "Text Validation Test");
ltOptions.put("build", "Text Validation Test Build");
ltOptions.put("w3c", true);
browserOptions.setCapability("LT:Options", ltOptions);

WebDriver driver = new RemoteWebDriver(new URL(GRID_URL), browserOptions);

try {

driver.get("https://ecommerce-playground.lambdatest.io/");

String expectedText = "This is a dummy website for Web Automation Testing";
boolean isTextPresent = driver.getPageSource().contains(expectedText);

if (isTextPresent) {
((JavascriptExecutor) driver).executeScript("lambda-status=passed");
System.out.println("✔ Text validation PASSED");
} else {
((JavascriptExecutor) driver).executeScript("lambda-status=failed");
System.out.println("✘ Text validation FAILED");
}

} catch (Exception e) {
((JavascriptExecutor) driver).executeScript("lambda-status=pass");
e.printStackTrace();
} finally {
driver.quit();   // 🔹 Correctly placed – runs even if test fails
}
}
}

```

```java
// TextValidationTest.java – Selenium 3 Configuration
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.JavascriptExecutor;

import java.net.URL;
import java.util.HashMap;

public class TextValidationTest {

public static void main(String[] args) throws Exception {

String username = System.getenv("LT_USERNAME") == null ?
"Your LT Username" : System.getenv("LT_USERNAME");

String authkey = System.getenv("LT_ACCESS_KEY") == null ?
"Your LT AccessKey" : System.getenv("LT_ACCESS_KEY");

String GRID_URL = "https://" + username + ":" + authkey + "@hub.lambdatest.com/wd/hub";

DesiredCapabilities capabilities = new DesiredCapabilities();
capabilities.setCapability("browserName", "Safari");
capabilities.setCapability("browserVersion", "26");
HashMap<String, Object> ltOptions = new HashMap<String, Object>();
ltOptions.put("username", "<your_username>");
ltOptions.put("accessKey", "<your_access_key>");
ltOptions.put("platformName", "MacOS Tahoe");
ltOptions.put("visual", true);
ltOptions.put("video", true);
capabilities.setCapability("LT:Options", ltOptions);

WebDriver driver = new RemoteWebDriver(new URL(GRID_URL), capabilities);

try {

driver.get("https://ecommerce-playground.lambdatest.io/");

String expectedText = "This is a dummy website for Web Automation Testing";
boolean isTextPresent = driver.getPageSource().contains(expectedText);

if (isTextPresent) {
((JavascriptExecutor) driver).executeScript("lambda-status=passed");
System.out.println("✔ Text validation PASSED");
} else {
((JavascriptExecutor) driver).executeScript("lambda-status=failed");
System.out.println("✘ Text validation FAILED");
}

} catch (Exception e) {
((JavascriptExecutor) driver).executeScript("lambda-status=pass");
e.printStackTrace();
} finally {
driver.quit();   // 🔹 Correctly placed – runs even if test fails
}
}
}
```

**Result**

Visit TestMu AI Web Automation dashboard to view your test execution result.
