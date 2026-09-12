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

# C# with Playwright: Running Your First Test
* * *

Learn how to use Playwright with C# to automate web application testing across real browsers and operating systems on <BrandName /> cloud platform.


## Prerequisites
***

1. You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
Download or clone the code sample for the Playwright C# from the <BrandName /> GitHub repository to run the tests.

<a href="https://github.com/LambdaTest/playwright-sample/tree/main/playwright-csharp" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

<VerifiedTag value="Verified" />

```js
git clone https://github.com/LambdaTest/playwright-sample.git
cd playwright-sample
cd playwright-csharp
```

2. Install the npm dependencies.

<VerifiedTag value="Verified" />

```
npm install
```

3. A <BrandName /> Username and Access key. You can get it from your <BrandName /> Profile section. Don't have an account, <a href="https://www.testmuai.com/register/" onClick={CookieTrackingSignup}>sign up for free</a>.

<img loading="lazy" src={require('../assets/images/auth_lt.png').default} alt="Image" width="1444" height="703"  className="doc_img"/>

4. To run Playwright tests, set your <BrandName /> Username and Access key in the Environment Variables.

## Run your Playwright tests with C#
---

Navigate to the `PlaywrightTestSingle.cs` file in the `playwright-csharp` directory.

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

1. Pass the below command in the terminal:

<VerifiedTag value="Verified" />

```js
dotnet build
```

2. To run the test, pass the below command:

<VerifiedTag value="Verified" />

```js
dotnet run single
```

**Note**: To run sessions on custom devices with emulation, run `dotnet run iphonetest` or `dotnet run ipadtest`.

## View your test results
---

Go to the [<BrandName /> Web Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build) to see your Playwright C# test results.






## Using the Playwright Agent Skill with TestMu AI
***

The [playwright-skill](https://github.com/LambdaTest/agent-skills/tree/main/playwright-skill) is a part of [TestMu AI Skills](https://github.com/LambdaTest/agent-skills/) that guide AI coding assistants in generating production-ready test automation.

The playwright-skill package includes:

<VerifiedTag value="Verified" />

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
***

Install a Playwright Agent Skill using the command below:

<VerifiedTag value="Verified" />

```
# Clone the repo and copy the skill you need
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/playwright-skill .claude/skills/

# Or for Cursor / Copilot
cp -r agent-skills/playwright-skill .cursor/skills/
```

**Note**: If you prefer installing all available framework skills instead of only playwright-skill, clone the repository directly into your tool's skills directory (for example, .claude/skills/, .cursor/skills/, .gemini/skills/, or .agent/skills/).
