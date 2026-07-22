# C# with Playwright: Running Your First Test

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Learn how to use Playwright with C# to automate web application testing across 50+ real browsers and operating systems on TestMu AI cloud platform.

## Prerequisites

1. You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

**Sample repo**
Download or clone the code sample for the Playwright C# from the TestMu AI GitHub repository to run the tests.

 View on GitHub

```js
git clone https://github.com/LambdaTest/playwright-sample.git
cd playwright-sample
cd playwright-csharp
```

2. Restore the .NET dependencies.

```
dotnet restore
```

3. A TestMu AI Username and Access key. You can get it from your TestMu AI Profile section. Don't have an account, sign up for free.

4. To run Playwright tests, set your TestMu AI Username and Access key in the Environment Variables.

## Run your Playwright tests with C#

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

Go to the [TestMu AI Web Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build) to see your Playwright C# test results.

To generate Playwright tests with AI coding assistants, see [Run Tests With Agent Skills](/support/docs/playwright-agent-skills/).
