---
id: csharp-with-playwright
title: How to Run Playwright Tests With C# on TestMu AI
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
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import { CookieTrackingSignup } from '@site/src/component/CookieTracking';


import VerifiedTag from '@site/src/component/verifiedTag';

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

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/csharp-with-playwright/"
    },
    "headline": "Run your C# automation scripts with Playwright on TestMu AI",
    "description": "Run your C# automation scripts with Playwright on TestMu AI scalable cloud grid of 50+ real desktop browsers and operating systems.",
    "url": "https://www.testmuai.com/support/docs/csharp-with-playwright/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Web Automation",
    "keywords": [
      "csharp playwright",
      "csharp automation testing",
      "playwright csharp"
    ],
    "proficiencyLevel": "Beginner",
    "author": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "url": "https://www.testmuai.com/"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
      "url": "https://www.testmuai.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testmuai.com/logo.png"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testmu-ai/",
        "https://x.com/testmuai",
        "https://www.youtube.com/@TestMuAI"
      ]
    },
    "hasPart": [
      {
        "@type": "SoftwareSourceCode",
        "name": "Prerequisites",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "codeRepository": "https://github.com/LambdaTest/playwright-sample",
        "text": "git clone https://github.com/LambdaTest/playwright-sample.git\ncd playwright-sample\ncd playwright-csharp"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Prerequisites",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "dotnet restore"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Run your Playwright tests with C#",
        "codeSampleType": "code snippet",
        "programmingLanguage": "C#",
        "text": "using Microsoft.Playwright;\nusing System.Threading.Tasks;\nusing System;\nusing System.Collections.Generic;\nusing Newtonsoft.Json;\n\nclass PlaywrightTestSingle\n{\n    public static async Task main(string[] args)\n    {\n        using var playwright = await Playwright.CreateAsync();\n\n        string user, accessKey;\n        user = Environment.GetEnvironmentVariable(\"LT_USERNAME\");\n        accessKey = Environment.GetEnvironmentVariable(\"LT_ACCESS_KEY\");\n\n        Dictionary<string, object> capabilities = new Dictionary<string, object>();\n        Dictionary<string, string> ltOptions = new Dictionary<string, string>();\n\n        ltOptions.Add(\"name\", \"Playwright Test\");\n        ltOptions.Add(\"build\", \"Playwright C-Sharp tests\");\n        ltOptions.Add(\"platform\", \"Windows 10\");\n        ltOptions.Add(\"user\", user);\n        ltOptions.Add(\"accessKey\", accessKey);\n\n        capabilities.Add(\"browserName\", \"Chrome\");\n        capabilities.Add(\"browserVersion\", \"latest\");\n        capabilities.Add(\"LT:Options\", ltOptions);\n\n        string capabilitiesJson = JsonConvert.SerializeObject(capabilities);\n\n        string cdpUrl = \"wss://cdp.lambdatest.com/playwright?capabilities=\" + Uri.EscapeDataString(capabilitiesJson);\n\n        await using var browser = await playwright.Chromium.ConnectAsync(cdpUrl);\n        var page = await browser.NewPageAsync();\n        try {\n          await page.GotoAsync(\"https://www.bing.com\");\n          await page.Locator(\"[aria-label='Enter your search term']\").ClickAsync();\n          await page.FillAsync(\"[aria-label='Enter your search term']\", \"LambdaTest\");\n          await page.Keyboard.PressAsync(\"Enter\");\n          var title = await page.TitleAsync();\n\n          if (title.Contains(\"LambdaTest\"))\n          {\n            // Use the following code to mark the test status.\n            await SetTestStatus(\"passed\", \"Title matched\", page);\n          }\n          else {\n            await SetTestStatus(\"failed\", \"Title not matched\", page);\n          }\n        }\n        catch (Exception err) {\n          await SetTestStatus(\"failed\", err.Message, page);\n        }\n        await browser.CloseAsync();\n    }\n\n    public static async Task SetTestStatus(string status, string remark, IPage page) {\n        await page.EvaluateAsync(\"_ => {}\", \"lambdatest_action: {\\\"action\\\": \\\"setTestStatus\\\", \\\"arguments\\\": {\\\"status\\\":\\\"\" + status + \"\\\", \\\"remark\\\": \\\"\" + remark + \"\\\"}}\");\n    }\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Pass the below command in the terminal",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "dotnet build"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "To run the test, pass the below command",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "dotnet run single"
      }
    ],
    "dateModified": "2026-09-09T19:13:32+05:30"
  }) }}
/>


# How to Run Playwright Tests With C# on TestMu AI
***

Run your C# Playwright tests on the TestMu AI cloud grid to reach 50+ real desktop browsers and operating systems without maintaining local infrastructure. You connect Playwright over a CDP WebSocket, pass your capabilities, then run the sample with dotnet.

## Prerequisites
***

Complete these before running the test below.

1. A TestMu AI **Username** and **Access Key**. Get them from your TestMu AI Profile. Don't have an account? <a href="https://www.testmuai.com/register/" onClick={CookieTrackingSignup}>Sign up for free</a>.

<img loading="lazy" src={require('../assets/images/auth_lt.png').default} alt="TestMu AI Profile page showing the Username and Access Key credentials" width="1444" height="703"  className="doc_img"/>

2. The [.NET SDK](https://dotnet.microsoft.com/en-us/download) installed. The sample project uses the built-in Playwright tooling for .NET, so `dotnet restore` resolves the dependencies when you build.
3. Clone the sample repository and move into the C# subdirectory.

:::tip Sample repo
<a href="https://github.com/LambdaTest/playwright-sample/tree/main/playwright-csharp" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="GitHub icon linking to the Playwright C# sample subdirectory" className="doc_img"/> View on GitHub</a>
:::

<VerifiedTag value="Verified" />

```bash
git clone https://github.com/LambdaTest/playwright-sample.git
cd playwright-sample
cd playwright-csharp
```

4. Restore the .NET dependencies from the project directory:

<VerifiedTag value="Verified" />

```bash
dotnet restore
```

## Set Your Credentials
***

Your Username and Access Key are read from environment variables. Set them once. Pick your operating system:

<Tabs className="docs__val" groupId="os">

<TabItem value="macos" label="macOS / Linux" default>

<VerifiedTag value="Verified" />

<div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="win-cmd" label="Windows (CMD)">

<VerifiedTag value="Verified" />

<div className="lambdatest__codeblock">
    <CodeBlock className="language-batch">
  {`set LT_USERNAME=${ YOUR_LAMBDATEST_USERNAME()}
set LT_ACCESS_KEY=${ YOUR_LAMBDATEST_ACCESS_KEY()}`}
  </CodeBlock>
</div>

</TabItem>

</Tabs>

## How the Sample Test Works
***

The test builds a `capabilities` dictionary that carries the browser, version, platform, and your `LT:Options`, then connects Playwright to the grid at `wss://cdp.lambdatest.com/playwright`. The credentials come from the `LT_USERNAME` and `LT_ACCESS_KEY` environment variables you set above. The full sample lives in `PlaywrightTestSingle.cs` in the `playwright-csharp` directory:

<VerifiedTag value="Verified" />

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

The `SetTestStatus` helper reports pass or fail back to the grid so the result shows on your dashboard.

## Run the Test With dotnet
***

Build and run the sample from the `playwright-csharp` directory. You can use your own project or the sample above.

1. Build the project:

<VerifiedTag value="Verified" />

```bash
dotnet build
```

2. Run the single test:

<VerifiedTag value="Verified" />

```bash
dotnet run single
```

:::note
To run sessions on custom devices with emulation, run `dotnet run iphonetest` or `dotnet run ipadtest`.
:::

## View Your Results
***

Your test results, including video, network logs, and command-by-command execution, appear on the [TestMu AI Web Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build). A green status confirms the test passed.

## Related Playwright Guides
***

Continue with these related guides:

- [Configure Playwright Capabilities for the TestMu AI Grid](/support/docs/capabilities-for-playwright/)
- [Get Started With Playwright Testing on TestMu AI](/support/docs/playwright-testing/)
- [Set Up Playwright Test Execution on TestMu AI](/support/docs/playwright-test-execution-setup/)

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={`${BRAND_URL}/support/docs/`}>
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
      C# with Playwright
      </span>
    </li>
  </ul>
</nav>
