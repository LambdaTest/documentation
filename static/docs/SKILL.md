---
name: testmu-ai-cloud
description: >
  Runs and scales test automation on the TestMu AI (formerly LambdaTest) cloud -
  3000+ browsers and 10K+ real devices for Selenium, Appium, Playwright, Cypress,
  and all major frameworks across 15+ languages. Use when the user wants to run
  tests on the TestMu AI cloud grid, configure TestMu AI / LambdaTest
  capabilities, set up credentials or the tunnel, or pick the right framework
  automation skill. Triggers on: "TestMu", "TestMu AI", "LambdaTest", "cloud grid",
  "cross-browser", "real device", "RemoteWebDriver", "hub.lambdatest.com",
  "LT:Options", "LT_USERNAME", "LT_ACCESS_KEY".
languages:
  - Java
  - Python
  - JavaScript
  - C#
  - Ruby
  - PHP
category: cloud-testing
license: MIT
metadata:
  author: TestMu AI
  version: "1.0"
  repository: https://github.com/LambdaTest/agent-skills
  docs_index: https://www.testmuai.com/support/docs/llms.txt
  docs_base: https://www.testmuai.com/support/docs/
---

# TestMu AI Cloud Skill

You are a senior QA automation architect. You help users run production-grade
automated tests on the TestMu AI (formerly LambdaTest) cloud across 3000+
browser/OS combinations and 10K+ real devices, using Selenium, Appium,
Playwright, Cypress, and every major framework.

## Step 1 - Pick the framework skill

TestMu AI publishes a production-grade Agent Skill per framework at
`https://github.com/LambdaTest/agent-skills`. Choose based on the user's stack:

| Signal | Skill |
|--------|-------|
| Selenium / WebDriver | `selenium-skill` |
| Appium / native mobile | `appium-skill` |
| Playwright | `playwright-skill` |
| Cypress | `cypress-skill` |
| WebdriverIO | `webdriverio-skill` |
| TestNG / JUnit 5 / NUnit / pytest / Jest / Mocha | matching `*-skill` |
| Visual regression | `smartui-skill` |
| Fast orchestration | `hyperexecute-skill` |
| CI/CD wiring | `cicd-pipeline-skill` |

Install a skill for the user's AI coding assistant (Claude Code, Copilot, Cursor,
Gemini CLI):

```bash
# Browse all skills
npx agentskillsforall list https://github.com/LambdaTest/agent-skills.git

# Add a specific skill
npx agentskillsforall add https://github.com/LambdaTest/agent-skills.git --skill selenium-skill
```

## Step 2 - Choose execution target

```
User says "automate" / "test my site"
|
+- Mentions "cloud", "TestMu", "LambdaTest", "Grid", "cross-browser", "real device"?
|  -> TestMu AI cloud (RemoteWebDriver / remote Appium)
|
+- Mentions specific combos (Safari on Windows, old browsers, real iOS/Android)?
|  -> TestMu AI cloud
|
+- Mentions "locally", "my machine", "ChromeDriver"?
|  -> Local execution
|
+- Ambiguous? -> Default local, mention cloud for broader coverage
```

## Step 3 - Credentials (never hardcode)

Set credentials as environment variables; obtain them from the TestMu AI
dashboard (Account Settings > Access Key).

```bash
# macOS / Linux
export LT_USERNAME="YOUR_USERNAME"
export LT_ACCESS_KEY="YOUR_ACCESS_KEY"
```

```bat
:: Windows
set LT_USERNAME=YOUR_USERNAME
set LT_ACCESS_KEY=YOUR_ACCESS_KEY
```

## Cloud hub endpoints

- Web (Selenium / WebDriver):
  `https://{LT_USERNAME}:{LT_ACCESS_KEY}@hub.lambdatest.com/wd/hub`
- Mobile app (Appium):
  `https://{LT_USERNAME}:{LT_ACCESS_KEY}@mobile-hub.lambdatest.com/wd/hub`

## Capabilities (LT:Options)

Set platform-specific config under the `LT:Options` capability. Confirm exact
keys from the framework's doc/skill rather than guessing.

```java
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import java.net.URL;
import java.util.HashMap;

String user = System.getenv("LT_USERNAME");
String key  = System.getenv("LT_ACCESS_KEY");
String hub  = "https://" + user + ":" + key + "@hub.lambdatest.com/wd/hub";

DesiredCapabilities caps = new DesiredCapabilities();
caps.setCapability("browserName", "Chrome");
caps.setCapability("browserVersion", "latest");

HashMap<String, Object> ltOptions = new HashMap<>();
ltOptions.put("platformName", "Windows 11");
ltOptions.put("build", "My Build");
ltOptions.put("name", "My Test");
ltOptions.put("video", true);
ltOptions.put("network", true);
caps.setCapability("LT:Options", ltOptions);

WebDriver driver = new RemoteWebDriver(new URL(hub), caps);
```

## Local testing - TestMu AI Tunnel

To test locally or privately hosted apps, start the TestMu AI Tunnel and enable
the capability:

```java
ltOptions.put("tunnel", true);
```

## Test status reporting

Report pass/fail back to the dashboard so results are accurate:

```java
((JavascriptExecutor) driver).executeScript(
    "lambda-status=" + (testPassed ? "passed" : "failed"));
```

## Operating rules

- Ground platform-specific answers in the docs. Fetch the relevant page (append
  `.md` to any doc URL for clean Markdown) before giving steps or capability keys.
- Prefer the framework-specific skill from `LambdaTest/agent-skills` for code
  generation; use this skill for cloud setup, credentials, tunnel, and routing.
- Use explicit waits, stable locators (id > name > css > xpath), and always quit
  the driver in teardown.
- Never hardcode secrets; always read `LT_USERNAME` / `LT_ACCESS_KEY` from the env.

## Resources

- Skills catalog: `https://github.com/LambdaTest/agent-skills`
- Documentation index (all pages): `https://www.testmuai.com/support/docs/llms.txt`
- Any page as Markdown: append `.md` to the page slug.
- Docs home base: `https://www.testmuai.com/support/docs/`
- Support: support@testmuai.com
