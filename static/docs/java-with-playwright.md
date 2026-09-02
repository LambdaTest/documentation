# How to Run Playwright Tests With JUnit on TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Run your Java Playwright tests on the TestMu AI cloud grid to reach 50+ real desktop browsers and operating systems without maintaining local infrastructure. You connect Playwright over a CDP WebSocket, pass your capabilities, then run the sample suite with JUnit.

## Prerequisites

Complete these before running the test below.

1. A TestMu AI **Username** and **Access Key**. Get them from your TestMu AI Profile. Don't have an account? Sign up for free.

2. [JDK](https://www.oracle.com/java/technologies/downloads/) 8 or later and [Apache Maven](https://maven.apache.org/) installed. The sample projects are Maven projects, so Maven resolves the dependencies when you build.
3. Clone the sample repository. Each framework lives in its own subdirectory.

**Sample repo**
 View on GitHub

```bash
git clone https://github.com/LambdaTest/playwright-sample.git
cd playwright-sample
```

## Set Your Credentials

Your Username and Access Key are read from environment variables. Set them once. Pick your operating system:

  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

  {`set LT_USERNAME=${ YOUR_LAMBDATEST_USERNAME()}
set LT_ACCESS_KEY=${ YOUR_LAMBDATEST_ACCESS_KEY()}`}

## How the Sample Test Works

The test builds a `capabilities` object that carries the browser, version, platform, and your `LT:Options`, then connects Playwright to the grid at `wss://cdp.lambdatest.com/playwright`. The credentials come from the `LT_USERNAME` and `LT_ACCESS_KEY` environment variables you set above:

```java
JsonObject capabilities = new JsonObject();
JsonObject ltOptions = new JsonObject();

String user = System.getenv("LT_USERNAME");
String accessKey = System.getenv("LT_ACCESS_KEY");

capabilities.addProperty("browserName", "Chrome"); // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
capabilities.addProperty("browserVersion", "latest");
ltOptions.addProperty("platform", "Windows 10");
ltOptions.addProperty("user", user);
ltOptions.addProperty("accessKey", accessKey);
capabilities.add("LT:Options", ltOptions);
```

JUnit wraps this same connection in a `@DataProvider` so one test runs across multiple browser configurations, as the steps below show.

## Run the Test With JUnit

JUnit runs the connection through a `@DataProvider`, so a single test runs across multiple browser configurations (here Chrome and Microsoft Edge). You can use your own project, or the sample below.

1. Clone the sample project and move into the JUnit subdirectory:

**Sample repo**
 View on GitHub

```bash
git clone https://github.com/LambdaTest/playwright-sample.git
cd playwright-sample
cd playwright-java-junit
```

2. Install the npm dependencies:

```
npm install
```

3. Open the `LTCapability.java` file and provide your TestMu AI Username and Access Key. It supplies the parameterized capabilities through a `@DataProvider`:

```java title="LTCapability.java"
import com.google.gson.JsonObject;
import com.tngtech.java.junit.dataprovider.DataProvider;

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

4. Run the test from the terminal:

```bash
mvn clean test
```

## View Your Results

Your test results, including video, network logs, and command-by-command execution, appear on the [TestMu AI Web Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build). A green status confirms the test passed.

## Related Playwright Guides

Continue with these related guides:

- [Run Your Playwright Tests With JavaScript on TestMu AI](/support/docs/javascript-with-playwright/)
- [Configure Playwright Capabilities for the TestMu AI Grid](/support/docs/capabilities-for-playwright/)
- [Get Started With Playwright Testing on TestMu AI](/support/docs/playwright-testing/)
