# How to migrate from Sauce Labs to TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

();\nsauceOptions.put(\"username\", \"YOUR_USERNAME\");\nsauceOptions.put(\"accessKey\", \"YOUR_ACCESS_KEY\");\nsauceOptions.put(\"build\", \"\");\nsauceOptions.put(\"name\", \"\");\nsauceOptions.put(\"armRequired\", true);\nbrowserOptions.setCapability(\"sauce:options\", sauceOptions);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "TestMu AI Capabilities",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "SafariOptions browserOptions = new SafariOptions();\nbrowserOptions.setPlatformName(\"MacOS Tahoe\");\nbrowserOptions.setBrowserVersion(\"26\");\nHashMap ltOptions = new HashMap();\nltOptions.put(\"username\", \"\");\nltOptions.put(\"accessKey\", \"\");\nltOptions.put(\"w3c\", true);\nbrowserOptions.setCapability(\"LT:Options\", ltOptions);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Shown below are the screenshots of capabilities generator of Sauce Labs and TestMu AI (Sauce Labs Capabilities)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "SafariOptions browserOptions = new SafariOptions();\nbrowserOptions.setCapability(\"platformName\", \"macOS 15\");\nbrowserOptions.setCapability(\"browserVersion\", \"latest\");\nMap sauceOptions = new HashMap<>();\nsauceOptions.put(\"build\", \"\");\nsauceOptions.put(\"name\", \"\");\nsauceOptions.put(\"username\", \"YOUR_USERNAME\");\nsauceOptions.put(\"accessKey\", \"YOUR_ACCESS_KEY\");\nsauceOptions.put(\"armRequired\", true);\nbrowserOptions.setCapability(\"sauce:options\", sauceOptions);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "TestMu AI Capabilities",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "DesiredCapabilities capabilities = new DesiredCapabilities();\ncapabilities.setCapability(\"browserName\", \"Safari\");\ncapabilities.setCapability(\"browserVersion\", \"26\");\nHashMap ltOptions = new HashMap();\nltOptions.put(\"username\", \"\");\nltOptions.put(\"accessKey\", \"\");\nltOptions.put(\"platformName\", \"MacOS Tahoe\");\nltOptions.put(\"visual\", true);\nltOptions.put(\"video\", true);\ncapabilities.setCapability(\"LT:Options\", ltOptions);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Test Scenario (TestMu AI Execution With Selenium 4 Capabilities)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "// TextValidationTest.java\nimport org.openqa.selenium.WebDriver;\nimport org.openqa.selenium.remote.RemoteWebDriver;\nimport org.openqa.selenium.JavascriptExecutor;\nimport org.openqa.selenium.safari.SafariOptions;\n\nimport java.net.URL;\nimport java.util.HashMap;\n\npublic class TextValidationTest {\n\n\n    public static void main(String[] args) throws Exception {\n\n        String username = System.getenv(\"LT_USERNAME\") == null ? \n        \"Your LT Username\" : System.getenv(\"LT_USERNAME\");\n\n        String authkey = System.getenv(\"LT_ACCESS_KEY\") == null ? \n        \"Your LT AccessKey\\n\"  : System.getenv(\"LT_ACCESS_KEY\");\n\n        String GRID_URL = \"https://\" + username + \":\" + authkey + \"@hub.lambdatest.com/wd/hub\";\n\n\n        SafariOptions browserOptions = new SafariOptions();\n        browserOptions.setPlatformName(\"MacOS Tahoe\");\n        browserOptions.setBrowserVersion(\"26\");\n        HashMap ltOptions = new HashMap();\n        ltOptions.put(\"username\", \"\");\n        ltOptions.put(\"accessKey\", \"\");\n        ltOptions.put(\"project\", \"Text Validation Test\");\n        ltOptions.put(\"build\", \"Text Validation Test Build\");\n        ltOptions.put(\"w3c\", true);\n        browserOptions.setCapability(\"LT:Options\", ltOptions);\n\n        WebDriver driver = new RemoteWebDriver(new URL(GRID_URL), browserOptions);\n\n        try {\n\n            driver.get(\"https://ecommerce-playground.lambdatest.io/\");\n\n            String expectedText = \"This is a dummy website for Web Automation Testing\";\n            boolean isTextPresent = driver.getPageSource().contains(expectedText);\n\n            if (isTextPresent) {\n                ((JavascriptExecutor) driver).executeScript(\"lambda-status=passed\");\n                System.out.println(\"\u2714 Text validation PASSED\");\n            } else {\n                ((JavascriptExecutor) driver).executeScript(\"lambda-status=failed\");\n                System.out.println(\"\u2718 Text validation FAILED\");\n            }\n\n        } catch (Exception e) {\n            ((JavascriptExecutor) driver).executeScript(\"lambda-status=pass\");\n            e.printStackTrace();\n        } finally {\n            driver.quit();   // \ud83d\udd39 Correctly placed \u2013 runs even if test fails\n        }\n    }\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "TestMu AI Execution With Selenium 3 Capabilities",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "// TextValidationTest.java \u2013 Selenium 3 Configuration\nimport org.openqa.selenium.WebDriver;\nimport org.openqa.selenium.remote.DesiredCapabilities;\nimport org.openqa.selenium.remote.RemoteWebDriver;\nimport org.openqa.selenium.JavascriptExecutor;\n\nimport java.net.URL;\nimport java.util.HashMap;\n\npublic class TextValidationTest {\n\n\n    public static void main(String[] args) throws Exception {\n\n        String username = System.getenv(\"LT_USERNAME\") == null ? \n        \"Your LT Username\" : System.getenv(\"LT_USERNAME\");\n\n        String authkey = System.getenv(\"LT_ACCESS_KEY\") == null ? \n        \"Your LT AccessKey\" : System.getenv(\"LT_ACCESS_KEY\");\n\n        String GRID_URL = \"https://\" + username + \":\" + authkey + \"@hub.lambdatest.com/wd/hub\";\n        \n        DesiredCapabilities capabilities = new DesiredCapabilities();\n        capabilities.setCapability(\"browserName\", \"Safari\");\n        capabilities.setCapability(\"browserVersion\", \"26\");\n        HashMap ltOptions = new HashMap();\n        ltOptions.put(\"username\", \"\");\n        ltOptions.put(\"accessKey\", \"\");\n        ltOptions.put(\"platformName\", \"MacOS Tahoe\");\n        ltOptions.put(\"visual\", true);\n        ltOptions.put(\"video\", true);\n        capabilities.setCapability(\"LT:Options\", ltOptions);\n\n        WebDriver driver = new RemoteWebDriver(new URL(GRID_URL), capabilities);\n\n        try {\n\n            driver.get(\"https://ecommerce-playground.lambdatest.io/\");\n\n            String expectedText = \"This is a dummy website for Web Automation Testing\";\n            boolean isTextPresent = driver.getPageSource().contains(expectedText);\n\n            if (isTextPresent) {\n                ((JavascriptExecutor) driver).executeScript(\"lambda-status=passed\");\n                System.out.println(\"\u2714 Text validation PASSED\");\n            } else {\n                ((JavascriptExecutor) driver).executeScript(\"lambda-status=failed\");\n                System.out.println(\"\u2718 Text validation FAILED\");\n            }\n\n        } catch (Exception e) {\n            ((JavascriptExecutor) driver).executeScript(\"lambda-status=pass\");\n            e.printStackTrace();\n        } finally {\n            driver.quit();   // \ud83d\udd39 Correctly placed \u2013 runs even if test fails\n        }\n    }\n}\n"
      }
    ],
    "dateModified": "2026-08-17T11:15:18+05:30"
  }) }}
/>

# Migrating From Sauce Labs To TestMu AI

TestMu AI and Sauce Labs both offer the cloud-based Selenium Grid. Hence, you can easily migrate your existing Selenium test automation scripts (or suites) from Sauce Labs to TestMu AI.

[Note: This guide covers the migration of tests running on the cloud grid that uses Selenium 4 and Selenium 3]

## Authentication
Firstly, you need to change the authentication in your configuration settings of your test suite. For running tests on TestMu AI Selenium Grid, you need to have a valid user_name and access_key to perform tests on our Grid. In case you do not have an account on TestMu AI, visit the TestMu AI signup page and create a new account.

When migrating your Selenium 4 tests from BrowserStack to TestMu AI, the following updates are required in your existing code:

1.  Get TestMu AI Credentials: You can find these credentials under Account Settings > [Password & Security](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/security/username-accesskey) and copy your Username and Access Key, then add them to the .env file to keep them safe from public exposure.

2. Create .env file: Securely store your TestMu AI credentials, create a .env file in the root of your project and add the following values:

```js
public static final String user_name = "SauceLabs_UserName";
public static final String access_key = "SauceLabs_AccessKey";
```

```
LT_USERNAME="<your_username>"
LT_ACCESS_KEY="<your_access_key>"
```

Once the .env file is set up, ensure your test framework correctly reads these variables at runtime. This helps keep your authentication secure and avoids hard-coding credentials within your scripts. With the credentials in place, you’re now ready to update your Hub URL for TestMu AI execution.

## Changes in Hub URL
You need to now change the hub URL in the configuration settings of your test suite. Hub URL is of type String and it defines the Hub location to which the Selenium tests would be submitted for execution.

```js
@ondemand.us-west-1.saucelabs.com:443/wd/hub
```

```js
@hub.lambdatest.com/wd/hub
```

## Configuring Selenium 4 Tests on TestMu AI
Migrating your existing tests running on Sauce Labs Cloud to TestMu AI Selenium cloud can be done with just a few lines of change. In this guide, we will see how you can use TestMu AI desired capabilities in your tests, authenticate your test session, and run tests on the browsers in our cloud.

###  TestMu AI Automation Capabilities

Capabilities generator let you configure the desired capabilities (or capabilities) which are configuration options that let you set the following:
* Desired browser
* Desired browser version
* Desired platform (or operating system)

Optionally, you can also choose the Selenium version and other advanced options present in the Selenium Capabilities Generator. For this migration guide, we have only restricted to the three capabilities listed above.

To generate capabilities use [TestMu AI Capabilities Generator](https://www.testmuai.com/capabilities-generator/) to define key automation testing parameters, such as browser, version, operating system, and additional test settings.

For the migration, we have considered Java-based Selenium automation tests. Shown below are the screenshots of capabilities generator of Sauce Labs and TestMu AI:

```js
SafariOptions browserOptions = new SafariOptions();
browserOptions.setPlatformName("macOS 15");
browserOptions.setBrowserVersion("latest");
Map<String, Object> sauceOptions = new HashMap<>();
sauceOptions.put("username", "YOUR_USERNAME");
sauceOptions.put("accessKey", "YOUR_ACCESS_KEY");
sauceOptions.put("build", "<your build id>");
sauceOptions.put("name", "<your test name>");
sauceOptions.put("armRequired", true);
browserOptions.setCapability("sauce:options", sauceOptions);
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
Migrating your existing tests running on Sauce Labs Cloud to TestMu AI Selenium cloud can be done with just a few lines of change. In this guide, we will see how you can use TestMu AI desired capabilities in your tests, authenticate your test session, and run tests on the browsers in our cloud.

###  TestMu AI Automation Capabilities

Capabilities generator let you configure the desired capabilities (or capabilities) which are configuration options that let you set the following:
* Desired browser
* Desired browser version
* Desired platform (or operating system)

Optionally, you can also choose the Selenium version and other advanced options present in the Selenium Capabilities Generator. For this migration guide, we have only restricted to the three capabilities listed above.

To generate capabilities use [TestMu AI Capabilities Generator](https://www.testmuai.com/capabilities-generator/) to define key automation testing parameters, such as browser, version, operating system, and additional test settings.

For the migration, we have considered Java-based Selenium automation tests. Shown below are the screenshots of capabilities generator of Sauce Labs and TestMu AI:

```js
SafariOptions browserOptions = new SafariOptions();
browserOptions.setCapability("platformName", "macOS 15");
browserOptions.setCapability("browserVersion", "latest");
Map<String, Object> sauceOptions = new HashMap<>();
sauceOptions.put("build", "<your build id>");
sauceOptions.put("name", "<your test name>");
sauceOptions.put("username", "YOUR_USERNAME");
sauceOptions.put("accessKey", "YOUR_ACCESS_KEY");
sauceOptions.put("armRequired", true);
browserOptions.setCapability("sauce:options", sauceOptions);
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

## Related migration guides

- [Migrate Appium Tests from Sauce Labs](/support/docs/migrate-appium-tests-from-sauce-labs/) — move your Appium mobile test suite from Sauce Labs to TestMu AI.
