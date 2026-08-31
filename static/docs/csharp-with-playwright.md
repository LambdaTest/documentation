# How to Run Playwright Tests With C# on TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Run your C# Playwright tests on the TestMu AI cloud grid to reach 50+ real desktop browsers and operating systems without maintaining local infrastructure. You connect Playwright over a CDP WebSocket, pass your capabilities, then run the sample with dotnet.

## Prerequisites


Complete these before running the test below.

1. A TestMu AI **Username** and **Access Key**. Get them from your TestMu AI Profile. Don't have an account? Sign up for free.



2. The [.NET SDK](https://dotnet.microsoft.com/en-us/download) installed. The sample project uses the built-in Playwright tooling for .NET, so `dotnet restore` resolves the dependencies when you build.
3. Clone the sample repository and move into the C# subdirectory.

**Sample repo**
 View on GitHub


```bash
git clone https://github.com/LambdaTest/playwright-sample.git
cd playwright-sample
cd playwright-csharp
```

4. Restore the .NET dependencies from the project directory:

```bash
dotnet restore
```

## Set Your Credentials


Your Username and Access Key are read from environment variables. Set them once. Pick your operating system:







  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}









  {`set LT_USERNAME=${ YOUR_LAMBDATEST_USERNAME()}
set LT_ACCESS_KEY=${ YOUR_LAMBDATEST_ACCESS_KEY()}`}







## How the Sample Test Works


The test builds a `capabilities` dictionary that carries the browser, version, platform, and your `LT:Options`, then connects Playwright to the grid at `wss://cdp.lambdatest.com/playwright`. The credentials come from the `LT_USERNAME` and `LT_ACCESS_KEY` environment variables you set above. The full sample lives in `PlaywrightTestSingle.cs` in the `playwright-csharp` directory:

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


Build and run the sample from the `playwright-csharp` directory. You can use your own project or the sample above.

1. Build the project:

```bash
dotnet build
```

2. Run the single test:

```bash
dotnet run single
```


To run sessions on custom devices with emulation, run `dotnet run iphonetest` or `dotnet run ipadtest`.


## View Your Results


Your test results, including video, network logs, and command-by-command execution, appear on the [TestMu AI Web Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build). A green status confirms the test passed.

## Related Playwright Guides


Continue with these related guides:

- [Configure Playwright Capabilities for the TestMu AI Grid](/support/docs/capabilities-for-playwright/)
- [Get Started With Playwright Testing on TestMu AI](/support/docs/playwright-testing/)
- [Set Up Playwright Test Execution on TestMu AI](/support/docs/playwright-test-execution-setup/)
