# Java with Playwright: Running Your First Test

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/llms.txt).

Learn how to use Playwright with Java to automate web application testing across 50+ real browsers and operating systems on TestMu AI cloud platform.

## Prerequisites

1. You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

**Sample repo**
Download or clone the code sample for the Playwright Java from the TestMu AI GitHub repository to run the tests.

 View on GitHub

```js
git clone https://github.com/LambdaTest/playwright-sample.git
cd playwright-sample
cd playwright-java
```

2. Install the npm dependencies.

```
npm install
```

3. A TestMu AI Username and Access key. You can get it from your TestMu AI Profile section. Don't have an account, sign up for free.

4. To run Playwright tests, set your TestMu AI Username and Access key in the Environment Variables.

## Run your Playwright tests with Java

Navigate to the `PlaywrightTestSingle.java` file.

```java
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

Pass the below command in the terminal to run the test.

```java
mvn -Dexec.mainClass="com.lambdatest.PlaywrightTestSingle" -Dexec.classpathScope=test test-compile exec:java
```

## View your test results

Go to the [TestMu AI Web Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build) to see your Playwright Java test results.

## Using the Playwright Agent Skill with TestMu AI

The [playwright-skill](https://github.com/LambdaTest/agent-skills/tree/main/playwright-skill) is a part of [TestMu AI Skills](https://github.com/LambdaTest/agent-skills/) that guide AI coding assistants in generating production-ready test automation.

The playwright-skill package includes:

```
playwright-skill/
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

### Installing Playwright Agent Skill

Install a Playwright Agent Skill using the command below:

```
# Clone the repo and copy the skill you need
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/playwright-skill .claude/skills/

# Or for Cursor / Copilot
cp -r agent-skills/playwright-skill .cursor/skills/
```

**Note**: If you prefer installing all available framework skills instead of only playwright-skill, clone the repository directly into your tool's skills directory (for example, .claude/skills/, .cursor/skills/, .gemini/skills/, or .agent/skills/).
