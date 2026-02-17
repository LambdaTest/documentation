---
id: csharp-with-playwright
title: Run your C# automation scripts with Playwright on TestMu AI
hide_title: true
sidebar_label: C#
description: Run your C# automation scripts with Playwright on TestMu AI scalable cloud grid of 50+ real desktop browsers and operating systems.
keywords:
  - csharp playwright
  - csharp automation testing
  - playwright csharp
  - playwright csharp testing guide
  - csharp playwright framework

url: https://www.testmuai.com/support/docs/csharp-with-playwright/
site_name: TestMu AI
slug: csharp-with-playwright/
canonical: https://www.testmuai.com/support/docs/csharp-with-playwright/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import { CookieTrackingSignup } from '@site/src/component/CookieTracking';


<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "C# with Playwright",
          "item": `${BRAND_URL}/support/docs/csharp-with-playwright/`
        }]
      })
    }}
></script>

# C# with Playwright: Running Your First Test
* * *

Learn how to use Playwright with C# to automate web application testing across 50+ real browsers and operating systems on <BrandName /> cloud platform.


## Prerequisites
***

1. You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
Download or clone the code sample for the Playwright C# from the <BrandName /> GitHub repository to run the tests.

<a href="https://github.com/LambdaTest/playwright-sample/tree/main/playwright-csharp" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

```js
git clone https://github.com/LambdaTest/playwright-sample.git
cd playwright-sample
cd playwright-csharp
```

2. Install the npm dependencies.

```
npm install
```

3. A <BrandName /> Username and Access key. You can get it from your <BrandName /> Profile section. Don't have an account, <a href="https://accounts.lambdatest.com/register" onClick={CookieTrackingSignup}>sign up for free</a>.

<img loading="lazy" src={require('../assets/images/auth_lt.png').default} alt="Image" width="1444" height="703"  className="doc_img"/>

4. To run Playwright tests, set your <BrandName /> Username and Access key in the Environment Variables.

## Run your Playwright tests with C#
---

Navigate to the `PlaywrightTestSingle.cs` file in the `playwright-csharp` directory.

```csharp
using Microsoft.Playwright;
using System.Threading.Tasks;
using System;
using System.Collections.Generic;
using Newtonsoft.Json;

class PlaywrightTestSingle
{
    public static async Task main(string[] args)
    {
        using var playwright = await Playwright.CreateAsync();

        string user, accessKey;
        user = Environment.GetEnvironmentVariable("LT_USERNAME");
        accessKey = Environment.GetEnvironmentVariable("LT_ACCESS_KEY");

        Dictionary<string, object> capabilities = new Dictionary<string, object>();
        Dictionary<string, string> ltOptions = new Dictionary<string, string>();

        ltOptions.Add("name", "Playwright Test");
        ltOptions.Add("build", "Playwright C-Sharp tests");
        ltOptions.Add("platform", "Windows 10");
        ltOptions.Add("user", user);
        ltOptions.Add("accessKey", accessKey);

        capabilities.Add("browserName", "Chrome");
        capabilities.Add("browserVersion", "latest");
        capabilities.Add("LT:Options", ltOptions);

        string capabilitiesJson = JsonConvert.SerializeObject(capabilities);

        string cdpUrl = "wss://cdp.lambdatest.com/playwright?capabilities=" + Uri.EscapeDataString(capabilitiesJson);

        await using var browser = await playwright.Chromium.ConnectAsync(cdpUrl);
        var page = await browser.NewPageAsync();
        try {
          await page.GotoAsync("https://www.bing.com");
          await page.Locator("[aria-label='Enter your search term']").ClickAsync();
          await page.FillAsync("[aria-label='Enter your search term']", "LambdaTest");
          await page.Keyboard.PressAsync("Enter");
          var title = await page.TitleAsync();

          if (title.Contains("LambdaTest"))
          {
            // Use the following code to mark the test status.
            await SetTestStatus("passed", "Title matched", page);
          }
          else {
            await SetTestStatus("failed", "Title not matched", page);
          }
        }
        catch (Exception err) {
          await SetTestStatus("failed", err.Message, page);
        }
        await browser.CloseAsync();
    }

    public static async Task SetTestStatus(string status, string remark, IPage page) {
        await page.EvaluateAsync("_ => {}", "lambdatest_action: {\"action\": \"setTestStatus\", \"arguments\": {\"status\":\"" + status + "\", \"remark\": \"" + remark + "\"}}");
    }
}
```

1. Pass the below command in the terminal:

```js
dotnet build
```

2. To run the test, pass the below command:

```js
dotnet run single
```

**Note**: To run sessions on custom devices with emulation, run `dotnet run iphonetest` or `dotnet run ipadtest`.

## View your test results
---

Go to the [<BrandName /> Web Automation Dashboard](https://automation.lambdatest.com/build) to see your Playwright C# test results.




