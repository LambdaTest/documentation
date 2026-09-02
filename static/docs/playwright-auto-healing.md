# How to Use Auto-Healing for Playwright on TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

When Playwright tests break because a locator changed after a UI update, Auto Healing on TestMu AI recovers the session instead of failing the run. It detects broken locators at runtime and generates new ones, which reduces flakiness and keeps your test suites reliable. You turn it on by passing a single `autoHeal: true` capability in your Playwright configuration.

## Enable Auto Healing With the autoHeal Capability

To turn on Auto Healing, pass `autoHeal: true` as a capability in your Playwright configuration. The example below shows it inside the `LT:Options` block alongside the other test options.

```js
const capabilities = {
browserName: "Chrome",
browserVersion: "latest",
"LT:Options": {
platform: "Windows 10",
build: "Playwright Auto Heal Build",
name: "Playwright Auto Heal Test",
user: process.env.LT_USERNAME,
accessKey: process.env.LT_ACCESS_KEY,
network: true,
video: true,
console: true,
autoHeal: true,
},
};
```

Auto Healing has no prerequisites. Enable it directly through the `autoHeal` capability.

### Enable Auto Healing in Your Language

The `autoHeal` capability works the same way across languages. Select your language below to see how to pass it when connecting to the TestMu AI Playwright endpoint.

For **JavaScript/NodeJS**, you can use the following code:

```javascript
// playwright.config.js
module.exports = {
use: {
connectOptions: {
wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify({
'browserName': 'Chrome',
'browserVersion': 'latest',
'LT:Options': {
'platform': 'Windows 10',
'build': 'Playwright Auto Heal Build',
'name': 'Playwright Auto Heal Test',
'autoHeal': true,
'user': process.env.LT_USERNAME,
'accessKey': process.env.LT_ACCESS_KEY,
}
}))}`
}
}
};
```

For **Python**, you can use the following code:

```python
import asyncio
import json
import urllib.parse
from playwright.async_api import async_playwright

capabilities = {
'browserName': 'Chrome',
'browserVersion': 'latest',
'LT:Options': {
'platform': 'Windows 10',
'build': 'Playwright Auto Heal Build',
'name': 'Playwright Auto Heal Test',
'autoHeal': True,
'user': 'your_username',
'accessKey': 'your_access_key',
}
}

async def run():
async with async_playwright() as playwright:
browser = await playwright.chromium.connect(
ws_endpoint=f"wss://cdp.lambdatest.com/playwright?capabilities={urllib.parse.quote(json.dumps(capabilities))}"
)
```

For **C#**, you can use the following code:

```csharp
using Microsoft.Playwright;

var capabilities = new Dictionary<string, object>()
{
["browserName"] = "Chrome",
["browserVersion"] = "latest",
["LT:Options"] = new Dictionary<string, object>()
{
["platform"] = "Windows 10",
["build"] = "Playwright Auto Heal Build",
["name"] = "Playwright Auto Heal Test",
["autoHeal"] = true,
["user"] = Environment.GetEnvironmentVariable("LT_USERNAME"),
["accessKey"] = Environment.GetEnvironmentVariable("LT_ACCESS_KEY"),
}
};

var browser = await Playwright.Chromium.ConnectAsync($"wss://cdp.lambdatest.com/playwright?capabilities={Uri.EscapeDataString(JsonSerializer.Serialize(capabilities))}");
```

For **Java**, you can use the following code:

```java
import com.microsoft.playwright.*;
import java.util.HashMap;
import java.util.Map;

Map<String, Object> capabilities = new HashMap<>();
capabilities.put("browserName", "Chrome");
capabilities.put("browserVersion", "latest");

Map<String, Object> ltOptions = new HashMap<>();
ltOptions.put("platform", "Windows 10");
ltOptions.put("build", "Playwright Auto Heal Build");
ltOptions.put("name", "Playwright Auto Heal Test");
ltOptions.put("autoHeal", true);
ltOptions.put("user", System.getenv("LT_USERNAME"));
ltOptions.put("accessKey", System.getenv("LT_ACCESS_KEY"));

capabilities.put("LT:Options", ltOptions);

Browser browser = playwright.chromium().connect("wss://cdp.lambdatest.com/playwright?capabilities=" + URLEncoder.encode(new Gson().toJson(capabilities), "UTF-8"));
```

## How Auto Healing Works

Auto Healing watches the page during execution and rebuilds locators that no longer match. The diagram below shows how it detects a broken locator and recovers the correct element.

Auto-healing adjusts broken locators by merging attributes and context. During runtime, it monitors the web page to identify DOM (Document Object Model) changes.

When an element is successfully located using Playwright's locator methods (`page.locator('#username').click()`, etc.), its DOM path is recorded. If that same element is later referenced on the same page and is missing, the system evaluates the current page and generates new locators for altered elements based on previous benchmarks.

## Auto Detection of a Changed Locator

Web elements often change their locators after an update to the web application. In these cases, Auto Healing detects the new locator and continues the test execution without a failure.

Here is an example test case demonstrating this:

```js
const { test } = require('../lambdatest-setup');
const { expect } = require('@playwright/test');

test.describe('Browse LambdaTest in different search engines', () => {
test('Test Auto Heal', async ({ page }) => {
await page.goto('https://www.lambdatest.com/selenium-playground/auto-healing');
await page.waitForTimeout(1000); // sleep 1s

// Locate element before DOM change
let buttonBeforeDOMChange = await page.locator('#username'); // equivalent to FindElement ByID
await buttonBeforeDOMChange.click();

// Trigger DOM change
await page.click('p.selenium_btn');
await page.waitForTimeout(1000); // sleep 1s

// Try to locate the same element after DOM change
// Auto healing will automatically detect the new locator
let buttonAfterDOMChange = await page.locator('#username'); // again check for element
await buttonAfterDOMChange.click();

await page.waitForTimeout(1000); // sleep 1s
});
});
```

The test case interacts with an element before and after a DOM change occurs on the TestMu AI auto-healing playground. Auto Healing detects that the element's locator has changed and adapts to it, so the test continues to execute successfully.

To run the test, execute the below command:

```bash
npx playwright test auto-heal.spec.js
```

## Benefits of Auto Healing

Auto Healing pays off most in suites that break often on small UI changes. The benefits below explain what you gain by enabling it.

- **Increased Test Stability:** Playwright tests remain consistent even when the web application's UI undergoes minor changes, reducing flakiness.
- **Reduced Test Maintenance:** The system automatically adapts to evolving interfaces, reducing the manual effort required to update test scripts.
- **Reliable CI/CD Pipeline:** Stable tests feeding into CI/CD pipelines reduce unexpected failures and ensure smoother deployments.

## Limitations of Auto Healing

Auto Healing handles a wide range of issues, but it does not cover every failure. Be aware of the limitations below before you rely on it.

- **Non-recoverable errors**: Auto Healing cannot recover from certain types of errors, such as Playwright browser initialization errors, network connectivity issues, or system-level failures.

- **Test accuracy**: While Auto Healing can reduce test flakiness, it may also mask real issues in your web application or test scripts. It's important to review the logs and understand why a test needed healing.

- **Performance impact**: While typically minimal, enabling Auto Healing can have a slight impact on test execution time due to the additional checks and recovery mechanisms.

- **Limited scope**: Auto Healing works best with simple locator changes (ID, class, attribute modifications) and may not be effective for complete page redesigns or fundamental workflow changes.

Auto Healing enhances test suite robustness but does not replace good test design. Review healed tests regularly for issues that may be masked by the feature.

## Related Playwright Guides

Continue with the guides below to run and configure your Playwright tests on TestMu AI.

- [Run your first Playwright test on TestMu AI](/support/docs/playwright-testing/) walks through executing a Playwright script on the cloud grid.
- [Migrate existing Playwright tests to TestMu AI](/support/docs/migrate-existing-playwright-tests/) moves your current suite onto the cloud grid.
- [Configure Playwright capabilities](/support/docs/capabilities-for-playwright/) covers the `autoHeal` capability and every other test option.
