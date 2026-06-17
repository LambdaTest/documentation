---
id: playwright-android-guide
title: How To Run Playwright Tests On TestMu AI Android Devices
sidebar_label: Getting Started
description: Here you can learn how to run Playwright tests on the TestMu AI android devices.
keywords:
  - playwright testing
  - playwright mobile testing
  - playwright testing tool
  - playwright testing on testmu ai
  - playwright testing testmu ai
  - playwright android
  - playwright java android
  - playwright csharp android
  - playwright python android
  - playwright multi language mobile

url: https://www.testmuai.com/support/docs/playwright-android/
site_name: TestMu AI
slug: playwright-android/
canonical: https://www.testmuai.com/support/docs/playwright-android/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "TestMu AI",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Getting Started With Playwright Testing",
          "item": `${BRAND_URL}/support/docs/playwright-testing/`
        }]
      })
    }}
></script>

# Getting Started With Playwright Testing on Android Real Devices
* * *
Playwright Android automation is supported on <BrandName /> across **Node.js, Java, C#, and Python**. Run Playwright tests on Chrome for Android across 100+ real Android devices. This guide covers getting started with Playwright testing on Android devices on the <BrandName /> platform.

:::tip Supported Versions
- Playwright versions **v1.20.0** to **v1.59.0** are supported for Android real device testing (excluding `v1.54.0`).
- **Java, C#, and Python** use the `chromium.connect()` API. **Node.js** supports both `chromium.connect()` and the Android-native `_android.connect()` API. All use stock Playwright packages, no custom forks required.
- Playwright v1.53.0 is currently supported for Playwright C# (for Android & iOS).
:::

## Prerequisites
---

Set your <BrandName /> username and access key in the environment variables. You can get your <BrandName /> username and access key from your <BrandName /> Profile > Account Settings > Password & Security.

<img loading="lazy" src={require('../assets/images/auth_lt.png').default} alt="Access Key on TestMu AI Automation Dashboard" width="1444" height="703" className="doc_img"/>

**Windows**

```bash
set LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
set LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```

**macOS/Linux**

```bash
export LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
export LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```

### Language-Specific Setup

| Language | Supported Playwright Versions |
|----------|-------------------------------|
| **JavaScript (Node.js)** | Up to **v1.59.0** |
| **Java, Python, C#** | Up to **v1.53.2** |

<Tabs className="docs__val">

<TabItem value="nodejs" label="Node.js" default>

Install the Playwright package:

```bash
npm install playwright
```

</TabItem>

<TabItem value="python" label="Python">

Install the Playwright package:

```bash
pip install playwright
```

</TabItem>

<TabItem value="java" label="Java">

Add the Playwright dependency to your `pom.xml`:

```xml
<dependency>
    <groupId>com.microsoft.playwright</groupId>
    <artifactId>playwright</artifactId>
    <version>1.54.0</version>
</dependency>
```

</TabItem>

<TabItem value="csharp" label="C#">

Add the Playwright NuGet package:

```bash
dotnet add package Microsoft.Playwright
```

</TabItem>

</Tabs>

## Run Your First Test
---

<Tabs className="docs__val">

<TabItem value="nodejs" label="Node.js" default>

Node.js supports both the Chromium API (`chromium.connect()`) and the Android-native API (`_android.connect()`).

**Using `chromium.connect()`**

```javascript title="playwright-android-test.js"
const { chromium } = require("playwright");

(async () => {
  const capabilities = {
    "LT:Options": {
      platformName: "android",
      deviceName: "Pixel 5",
      platformVersion: "11",
      isRealMobile: true,
      build: "Playwright Android Build",
      name: "Playwright Android Test",
      user: process.env.LT_USERNAME,
      accessKey: process.env.LT_ACCESS_KEY,
      network: true,
      video: true,
      console: true,
      playwrightClientVersion: "1.53.0",
    },
  };

  const cdpUrl = `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
    JSON.stringify(capabilities)
  )}`;

  const browser = await chromium.connect(cdpUrl);
  const context = browser.contexts()[0] || (await browser.newContext());
  const page = context.pages()[0] || (await context.newPage());

  await page.goto("https://duckduckgo.com", { timeout: 30000 });
  await page.locator('[name="q"]').fill("LambdaTest");
  await page.locator('[name="q"]').press("Enter");
  await page.waitForTimeout(3000);

  const title = await page.title();
  console.log("Page title:", title);

  try {
    if (title.includes("LambdaTest")) {
      await page.evaluate(
        (_) => {},
        `lambdatest_action: ${JSON.stringify({
          action: "setTestStatus",
          arguments: { status: "passed", remark: "Title verified" },
        })}`
      );
    }
  } catch (e) {
    await page.evaluate(
      (_) => {},
      `lambdatest_action: ${JSON.stringify({
        action: "setTestStatus",
        arguments: { status: "failed", remark: e.message },
      })}`
    );
  }

  await page.close();
  await browser.close();
})();
```

**Using `_android.connect()`**

```javascript title="playwright-android-test.js"
const { _android } = require("playwright");

(async () => {
  const capabilities = {
    "LT:Options": {
      platformName: "android",
      deviceName: "Pixel 5",
      platformVersion: "11",
      isRealMobile: true,
      build: "Playwright Android Build",
      name: "Playwright Android Test",
      user: process.env.LT_USERNAME,
      accessKey: process.env.LT_ACCESS_KEY,
      network: true,
      video: true,
      console: true,
      playwrightClientVersion: "1.53.0",
    },
  };

  const cdpUrl = `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
    JSON.stringify(capabilities)
  )}`;

  const device = await _android.connect(cdpUrl);
  console.log(`Model: ${device.model()}, Serial: ${device.serial()}`);
  await device.shell("am force-stop com.android.chrome");

  const context = await device.launchBrowser();
  context.setDefaultTimeout(120000);
  const page = await context.newPage();

  await page.goto("https://duckduckgo.com");
  await page.locator('[name="q"]').fill("LambdaTest");
  await page.locator('[name="q"]').press("Enter");
  await page.waitForTimeout(3000);

  const title = await page.title();
  console.log("Page title:", title);

  try {
    if (title.includes("LambdaTest")) {
      await page.evaluate(
        (_) => {},
        `lambdatest_action: ${JSON.stringify({
          action: "setTestStatus",
          arguments: { status: "passed", remark: "Title verified" },
        })}`
      );
    }
  } catch (e) {
    await page.evaluate(
      (_) => {},
      `lambdatest_action: ${JSON.stringify({
        action: "setTestStatus",
        arguments: { status: "failed", remark: e.message },
      })}`
    );
  }

  await page.close();
  await device.close();
})();
```

:::tip
The timeout value specified in the Playwright configuration may default to 30 seconds on real devices. To set a custom timeout, add:

```javascript
context.setDefaultTimeout(120000);  // Set your desired timeout value.
```
:::

Run the test:

```bash
node playwright-android-test.js
```

</TabItem>

<TabItem value="python" label="Python">

```python title="playwright_android_test.py"
import os, json, urllib.parse
from playwright.sync_api import sync_playwright

def main():
    capabilities = {
        "LT:Options": {
            "platformName": "android",
            "deviceName": "Pixel 5",
            "platformVersion": "11",
            "isRealMobile": True,
            "build": "Playwright Android Build",
            "name": "Playwright Android Test",
            "user": os.environ["LT_USERNAME"],
            "accessKey": os.environ["LT_ACCESS_KEY"],
            "network": True,
            "video": True,
            "console": True,
        }
    }

    cdp_url = (
        f"wss://cdp.lambdatest.com/playwright?capabilities="
        f"{urllib.parse.quote(json.dumps(capabilities))}"
    )

    with sync_playwright() as p:
        browser = p.chromium.connect(cdp_url)
        context = browser.contexts[0] if browser.contexts else browser.new_context()
        page = context.pages[0] if context.pages else context.new_page()

        page.goto("https://duckduckgo.com", timeout=30000)
        page.locator('[name="q"]').fill("LambdaTest")
        page.locator('[name="q"]').press("Enter")
        page.wait_for_timeout(3000)

        title = page.title()
        print(f"Page title: {title}")

        try:
            if "LambdaTest" in title:
                page.evaluate(
                    "_ => {}",
                    'lambdatest_action: {"action": "setTestStatus", "arguments": {"status": "passed", "remark": "Title verified"}}',
                )
        except Exception as e:
            page.evaluate(
                "_ => {}",
                f'lambdatest_action: {json.dumps({"action": "setTestStatus", "arguments": {"status": "failed", "remark": str(e)}})}',
            )

        page.close()
        browser.close()

if __name__ == "__main__":
    main()
```

Run the test:

```bash
python playwright_android_test.py
```

</TabItem>

<TabItem value="java" label="Java">

```java title="PlaywrightAndroidTest.java"
package com.lambdatest;

import com.microsoft.playwright.*;
import com.google.gson.Gson;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.LinkedHashMap;
import java.util.Map;

public class PlaywrightAndroidTest {
    public static void main(String[] args) {
        Map<String, Object> ltOptions = new LinkedHashMap<>();
        ltOptions.put("platformName", "android");
        ltOptions.put("deviceName", "Pixel 5");
        ltOptions.put("platformVersion", "11");
        ltOptions.put("isRealMobile", true);
        ltOptions.put("build", "Playwright Android Build");
        ltOptions.put("name", "Playwright Android Test");
        ltOptions.put("user", System.getenv("LT_USERNAME"));
        ltOptions.put("accessKey", System.getenv("LT_ACCESS_KEY"));
        ltOptions.put("network", true);
        ltOptions.put("video", true);
        ltOptions.put("console", true);
        ltOptions.put("playwrightClientVersion", "1.53.0");

        Map<String, Object> capabilities = new LinkedHashMap<>();
        capabilities.put("LT:Options", ltOptions);

        String capsJson = new Gson().toJson(capabilities);
        String cdpUrl = "wss://cdp.lambdatest.com/playwright?capabilities="
            + URLEncoder.encode(capsJson, StandardCharsets.UTF_8);

        try (Playwright playwright = Playwright.create()) {
            Browser browser = playwright.chromium().connect(cdpUrl);
            BrowserContext context = browser.contexts().size() > 0
                ? browser.contexts().get(0) : browser.newContext();
            Page page = context.pages().size() > 0
                ? context.pages().get(0) : context.newPage();

            page.navigate("https://duckduckgo.com",
                new Page.NavigateOptions().setTimeout(30000));
            page.locator("[name=\"q\"]").fill("LambdaTest");
            page.locator("[name=\"q\"]").press("Enter");
            page.waitForTimeout(3000);

            String title = page.title();
            System.out.println("Page title: " + title);

            try {
                if (title.contains("LambdaTest")) {
                    page.evaluate("_ => {}",
                        "lambdatest_action: {\"action\": \"setTestStatus\", \"arguments\": {\"status\": \"passed\", \"remark\": \"Title verified\"}}");
                }
            } catch (Exception e) {
                page.evaluate("_ => {}",
                    "lambdatest_action: {\"action\": \"setTestStatus\", \"arguments\": {\"status\": \"failed\", \"remark\": \"" + e.getMessage() + "\"}}");
            }

            page.close();
            browser.close();
        }
    }
}
```

Run the test:

```bash
mvn compile exec:java -Dexec.mainClass="com.lambdatest.PlaywrightAndroidTest"
```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp title="PlaywrightAndroidTest.cs"
using Microsoft.Playwright;
using System.Text.Json;

var capabilities = new Dictionary<string, object>
{
    ["LT:Options"] = new Dictionary<string, object>
    {
        ["platformName"] = "android",
        ["deviceName"] = "Pixel 5",
        ["platformVersion"] = "11",
        ["isRealMobile"] = true,
        ["build"] = "Playwright Android Build",
        ["name"] = "Playwright Android Test",
        ["user"] = Environment.GetEnvironmentVariable("LT_USERNAME")!,
        ["accessKey"] = Environment.GetEnvironmentVariable("LT_ACCESS_KEY")!,
        ["network"] = true,
        ["video"] = true,
        ["console"] = true,
        ["playwrightClientVersion"] = "1.53.0",
    }
};

var capsJson = JsonSerializer.Serialize(capabilities);
var cdpUrl = $"wss://cdp.lambdatest.com/playwright?capabilities={Uri.EscapeDataString(capsJson)}";

using var playwright = await Playwright.CreateAsync();
var browser = await playwright.Chromium.ConnectAsync(cdpUrl);
var context = browser.Contexts.Count > 0
    ? browser.Contexts[0] : await browser.NewContextAsync();
var page = context.Pages.Count > 0
    ? context.Pages[0] : await context.NewPageAsync();

await page.GotoAsync("https://duckduckgo.com", new PageGotoOptions { Timeout = 30000 });
await page.Locator("[name=\"q\"]").FillAsync("LambdaTest");
await page.Locator("[name=\"q\"]").PressAsync("Enter");
await page.WaitForTimeoutAsync(3000);

var title = await page.TitleAsync();
Console.WriteLine($"Page title: {title}");

try
{
    if (title.Contains("LambdaTest"))
    {
        await page.EvaluateAsync("_ => {}",
            "lambdatest_action: {\"action\": \"setTestStatus\", \"arguments\": {\"status\": \"passed\", \"remark\": \"Title verified\"}}");
    }
}
catch (Exception e)
{
    await page.EvaluateAsync("_ => {}",
        $"lambdatest_action: {{\"action\": \"setTestStatus\", \"arguments\": {{\"status\": \"failed\", \"remark\": \"{e.Message}\"}}}}");
}

await page.CloseAsync();
await browser.CloseAsync();
```

Run the test:

```bash
dotnet run
```

</TabItem>

</Tabs>

:::tip
For Java, C#, and Python on Android, the CDP connection returns an existing browser context and page. Always check for existing contexts/pages before creating new ones, as shown in the examples above.
:::

## View your Playwright test results
***

The <BrandName /> Automation Dashboard is where you can see the results of your Playwright tests after running them on the <BrandName /> platform. 

The below screenshot of <BrandName /> Automation Dashboard shows the Playwright build on the left and the build sessions associated with the selected build on the right.

<img loading="lazy" src={require('../assets/images/playwright-android-build-view.png').default} alt="Playwright Android build and session details on TestMu AI Automation Dashboard" width="1444" height="703"  className="doc_img"/>


