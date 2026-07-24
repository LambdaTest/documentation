# Java with Playwright: Running Your First Test

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Run Playwright tests written in Java, either with plain Playwright or with JUnit, across 50+ real browsers and operating systems on the TestMu AI cloud platform. The setup is the same for both: you connect Playwright to the grid over a CDP WebSocket. This guide covers the shared steps once, then gives you a per-framework setup in the tabs below.

## Prerequisites

1. A TestMu AI **Username** and **Access Key**. Get them from your TestMu AI Profile. Don't have an account? Sign up for free.
2. [JDK](https://www.oracle.com/java/technologies/downloads/) 8 or later and [Apache Maven](https://maven.apache.org/) installed. The sample projects are Maven projects, so Maven resolves the dependencies when you build.
3. Clone the sample repository (each framework lives in its own subdirectory):

**Sample repo**
 View on GitHub

```bash
git clone https://github.com/LambdaTest/playwright-sample.git
cd playwright-sample
```

## Set your credentials

Set your Username and Access Key as environment variables. Pick your operating system:

  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

  {`set LT_USERNAME=${ YOUR_LAMBDATEST_USERNAME()}
set LT_ACCESS_KEY=${ YOUR_LAMBDATEST_ACCESS_KEY()}`}

## Set Up and Run in Your Framework

Both frameworks build a `capabilities` object (browser, version, platform, and your `LT:Options`) and connect Playwright to the grid at `wss://cdp.lambdatest.com/playwright`. What differs is how the test is structured. Pick your framework:

Plain Playwright with a `main()` method and no test runner.

1. Go to the sample directory:

```bash
cd playwright-java
```

2. The test lives in `PlaywrightTestSingle.java`. It builds capabilities from your env vars, connects to the grid, runs a search, and reports status:

```java title="PlaywrightTestSingle.java"
package com.lambdatest;

import com.google.gson.JsonObject;
import com.microsoft.playwright.*;

import java.net.URLEncoder;

public class PlaywrightTestSingle {
public static void main(String[] args) {
try (Playwright playwright = Playwright.create()) {
JsonObject capabilities = new JsonObject();
JsonObject ltOptions = new JsonObject();

String user = System.getenv("LT_USERNAME");
String accessKey = System.getenv("LT_ACCESS_KEY");

capabilities.addProperty("browsername", "Chrome"); // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
capabilities.addProperty("browserVersion", "latest");
ltOptions.addProperty("platform", "Windows 10");
ltOptions.addProperty("name", "Playwright Test");
ltOptions.addProperty("build", "Playwright Testing in Java");
ltOptions.addProperty("user", user);
ltOptions.addProperty("accessKey", accessKey);
capabilities.add("LT:Options", ltOptions);

BrowserType chromium = playwright.chromium();
String caps = URLEncoder.encode(capabilities.toString(), "utf-8");
String cdpUrl = "wss://cdp.lambdatest.com/playwright?capabilities=" + capabilities;
Browser browser = chromium.connect(cdpUrl);
Page page = browser.newPage();
try {
page.navigate("https://www.duckduckgo.com");
Locator locator = page.locator("#search_form_input_homepage");
locator.click();
page.fill("#search_form_input_homepage", "LambdaTest");
page.keyboard().press("Enter");
String title = page.title();

if (title.equals("LambdaTest at DuckDuckGo")) {
// Use the following code to mark the test status.
setTestStatus("passed", "Title matched", page);
} else {
setTestStatus("failed", "Title not matched", page);
}

} catch (Exception err) {
setTestStatus("failed", err.getMessage(), page);
err.printStackTrace();
}
browser.close();
} catch (Exception err) {
err.printStackTrace();
}
}

public static void setTestStatus(String status, String remark, Page page) {
Object result;
result = page.evaluate("_ => {}", "lambdatest_action: { \"action\": \"setTestStatus\", \"arguments\": { \"status\": \"" + status + "\", \"remark\": \"" + remark + "\"}}");
}
}
```

3. Run the test:

```bash
mvn -Dexec.mainClass="com.lambdatest.PlaywrightTestSingle" -Dexec.classpathScope=test test-compile exec:java
```

JUnit runs the same connection through a `@DataProvider`, so a single test runs across multiple browser configurations (here Chrome and Microsoft Edge).

1. Go to the sample directory:

```bash
cd playwright-java-junit
```

2. `LTCapability.java` supplies the parameterized capabilities:

```java title="LTCapability.java"
import com.google.gson.JsonObject;
import com.tngtech.JUnit.junit.dataprovider.DataProvider;

public class LTCapability {
@DataProvider
public static Object[] getDefaultTestCapability() {
JsonObject capabilities1 = new JsonObject();
JsonObject ltOptions1 = new JsonObject();

String user = System.getenv("LT_USERNAME");
String accessKey = System.getenv("LT_ACCESS_KEY");

capabilities1.addProperty("browserName", "Chrome"); // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
capabilities1.addProperty("browserVersion", "latest");
ltOptions1.addProperty("platform", "Windows 10");
ltOptions1.addProperty("name", "Playwright Test");
ltOptions1.addProperty("build", "Playwright Testing using Junit");
ltOptions1.addProperty("user", user);
ltOptions1.addProperty("accessKey", accessKey);
capabilities1.add("LT:Options", ltOptions1);

JsonObject capabilities2 = new JsonObject();
JsonObject ltOptions2 = new JsonObject();
capabilities2.addProperty("browserName", "MicrosoftEdge"); // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
capabilities2.addProperty("browserVersion", "latest");
ltOptions2.addProperty("platform", "Windows 10");
ltOptions2.addProperty("name", "Playwright Test");
ltOptions2.addProperty("build", "Playwright Testing using Junit");
ltOptions2.addProperty("user", user);
ltOptions2.addProperty("accessKey", accessKey);
capabilities2.add("LT:Options", ltOptions2);
return new Object[]{
capabilities1,capabilities2
};
}
}
```

3. Run the test:

```bash
mvn clean test
```

## View your test results

Go to the [TestMu AI Web Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build) to see your Playwright Java test results.
