---
id: playwright-ios-guide
title: How To Run Playwright Tests On TestMu AI iOS Devices
sidebar_label: Test on iOS Device
description: Here you can learn how to run Playwright tests on the TestMu AI iOS real devices.
keywords:
  - playwright testing
  - playwright ios
  - playwright mobile testing
  - playwright testing on testmu ai
  - playwright testing testmu ai
  - playwright real devices
  - playwright java ios
  - playwright csharp ios
  - playwright python ios
  - playwright multi language mobile

url: https://www.testmuai.com/support/docs/playwright-ios-device/
site_name: TestMu AI
slug: playwright-ios-device/
canonical: https://www.testmuai.com/support/docs/playwright-ios-device/
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
          "item": `${BRAND_URL}/support/docs/playwright-ios-device/`
        }]
      })
    }}
></script>

# Getting Started With Playwright Testing on iOS Real Devices
* * *
Playwright test automation on real iOS devices is now supported on <BrandName /> across **Node.js, Java, C#, and Python**. Test on latest iPhone and iPad Safari combinations to catch device-specific issues that mobile emulation may miss. Integrate with your existing CI pipeline, and access logs and debugging artifacts for each test run.

This guide will cover the basics of getting started with Playwright testing on iOS devices on the <BrandName /> platform.

:::tip Supported Versions
- Playwright versions **v1.53.0** and above (until **v1.57.0**) are supported for iOS real device testing.
- All languages use the **stock Playwright packages** — no custom forks or client-side changes required.
- Playwright v1.53.2 is currently supported for Playwright C# (for Android & iOS).
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

```javascript title="playwright-ios-test.js"
const { webkit } = require("playwright");

(async () => {
  const capabilities = {
    "LT:Options": {
      "platformName": "ios",
      "deviceName": "iPhone 16",
      "platformVersion": "18",
      "isRealMobile": true,
      "build": "Playwright iOS Build",
      "name": "Playwright iOS Test",
      "user": process.env.LT_USERNAME,
      "accessKey": process.env.LT_ACCESS_KEY,
      "network": true,
      "video": true,
      "console": true,
    },
  };

  const browser = await webkit.connect(
    `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
      JSON.stringify(capabilities)
    )}`
  );

  const context = await browser.newContext();
  const page = await context.newPage();

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
  await context.close();
  await browser.close();
})();
```

Run the test:

```bash
node playwright-ios-test.js
```

</TabItem>

<TabItem value="python" label="Python">

```python title="playwright_ios_test.py"
import os, json, urllib.parse
from playwright.sync_api import sync_playwright

def main():
    capabilities = {
        "LT:Options": {
            "platformName": "ios",
            "deviceName": "iPhone 16",
            "platformVersion": "18",
            "isRealMobile": True,
            "build": "Playwright iOS Build",
            "name": "Playwright iOS Test",
            "user": os.environ["LT_USERNAME"],
            "accessKey": os.environ["LT_ACCESS_KEY"],
            "network": True,
            "video": True,
            "console": True,
        }
    }

    ws_endpoint = (
        f"wss://cdp.lambdatest.com/playwright?capabilities="
        f"{urllib.parse.quote(json.dumps(capabilities))}"
    )

    with sync_playwright() as p:
        browser = p.webkit.connect(ws_endpoint)
        context = browser.new_context()
        page = context.new_page()

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
        context.close()
        browser.close()

if __name__ == "__main__":
    main()
```

Run the test:

```bash
python playwright_ios_test.py
```

</TabItem>

<TabItem value="java" label="Java">

```java title="PlaywrightIosTest.java"
package com.lambdatest;

import com.microsoft.playwright.*;
import com.google.gson.Gson;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.Map;

public class PlaywrightIosTest {
    public static void main(String[] args) {
        Map<String, Object> ltOptions = Map.of(
            "platformName", "ios",
            "deviceName", "iPhone 16",
            "platformVersion", "18",
            "isRealMobile", true,
            "build", "Playwright iOS Build",
            "name", "Playwright iOS Test",
            "user", System.getenv("LT_USERNAME"),
            "accessKey", System.getenv("LT_ACCESS_KEY"),
            "network", true,
            "video", true,
            "console", true
        );

        Map<String, Object> capabilities = Map.of("LT:Options", ltOptions);
        String capsJson = new Gson().toJson(capabilities);
        String wsEndpoint = "wss://cdp.lambdatest.com/playwright?capabilities="
            + URLEncoder.encode(capsJson, StandardCharsets.UTF_8);

        try (Playwright playwright = Playwright.create()) {
            Browser browser = playwright.webkit().connect(wsEndpoint);
            BrowserContext context = browser.newContext();
            Page page = context.newPage();

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
            context.close();
            browser.close();
        }
    }
}
```

Run the test:

```bash
mvn compile exec:java -Dexec.mainClass="com.lambdatest.PlaywrightIosTest"
```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp title="PlaywrightIosTest.cs"
using Microsoft.Playwright;
using System.Text.Json;
using System.Web;

var capabilities = new Dictionary<string, object>
{
    ["LT:Options"] = new Dictionary<string, object>
    {
        ["platformName"] = "ios",
        ["deviceName"] = "iPhone 16",
        ["platformVersion"] = "18",
        ["isRealMobile"] = true,
        ["build"] = "Playwright iOS Build",
        ["name"] = "Playwright iOS Test",
        ["user"] = Environment.GetEnvironmentVariable("LT_USERNAME")!,
        ["accessKey"] = Environment.GetEnvironmentVariable("LT_ACCESS_KEY")!,
        ["network"] = true,
        ["video"] = true,
        ["console"] = true,
        ["playwrightClientVersion"] = "1.53.2",
    }
};

var capsJson = JsonSerializer.Serialize(capabilities);
var wsEndpoint = $"wss://cdp.lambdatest.com/playwright?capabilities={HttpUtility.UrlEncode(capsJson)}";

using var playwright = await Playwright.CreateAsync();
var browser = await playwright.Webkit.ConnectAsync(wsEndpoint);
var context = await browser.NewContextAsync();
var page = await context.NewPageAsync();

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
await context.CloseAsync();
await browser.CloseAsync();
```

Run the test:

```bash
dotnet run
```

</TabItem>

</Tabs>

## View your Playwright test results
***

The <BrandName /> Automation Dashboard is where you can see the results of your Playwright iOS tests after running them on the <BrandName /> platform. 

The below screenshot of <BrandName /> Automation Dashboard shows the Playwright build on the left and the build sessions associated with the selected build on the right.

<img loading="lazy" src={require('../assets/images/playwright-ios-build-view.png').default} alt="Playwright iOS build and session details on TestMu AI Automation Dashboard" width="1444" height="703"  className="doc_img"/>

:::note

- Safari is the supported browser for iOS real device testing. All four languages — **Node.js, Java, C#, and Python** — are supported using stock Playwright packages.

- Playwright testing on real iOS devices is currently supported on latest iOS versions (iOS 17, iOS 18, and iOS 26) across both iPhones and iPads.

:::




