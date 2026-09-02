# How to Run Selenium Tests With C# on TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Run your C# Selenium tests on the TestMu AI cloud grid across 10,000+ browser/device combinations. The setup is the same for every framework: you connect to the grid and pass your capabilities. This guide covers that shared flow once, then gives you a per-framework quickstart in the tabs below.

## Prerequisites

Complete these before running any framework below.

1. [Create a TestMu AI account](https://www.testmuai.com/register/) if you don't have one.
2. Get your **Username** and **Access Key** from the [TestMu AI Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard).
3. Install the [.NET Core SDK](https://dotnet.microsoft.com/download) 2.1 or later (MSTest needs 3.0.0).
4. Install the [Selenium WebDriver C# bindings](https://www.selenium.dev/downloads/).

## Set Your Credentials

Every framework authenticates the same way: your Username and Access Key are read from environment variables. Set them once. Pick your operating system:

  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

  {`set LT_USERNAME=${ YOUR_LAMBDATEST_USERNAME()}
set LT_ACCESS_KEY=${ YOUR_LAMBDATEST_ACCESS_KEY()}`}

## How the Sample Test Works

Every framework below connects to the grid and passes your browser and OS choices through an `LT:Options` object:

```csharp
var browserOptions = new ChromeOptions();
browserOptions.PlatformName = "Windows 10";
browserOptions.BrowserVersion = "latest";

var ltOptions = new Dictionary<string, object>
{
{ "username", LT_USERNAME },
{ "accessKey", LT_ACCESS_KEY },
{ "project", "Demo LT" },
{ "w3c", true }
};
browserOptions.AddAdditionalOption("LT:Options", ltOptions);
```

What changes between frameworks is only the test runner and how you launch it. That is what each tab covers.

Use the [Capabilities Generator](https://www.testmuai.com/capabilities-generator/) to build an `LT:Options` block for any browser, version, and OS combination.

## Run a Test in Your Framework

Each tab lists the framework-specific pieces. Clone the matching repo (it contains the full, ready-to-run project), then build and run.

NUnit runs from the Visual Studio Test Explorer, or from the CLI on Linux/macOS.

1. Clone the [sample GitHub project](https://github.com/LambdaTest/CSharp-NUnit-Selenium):

```bash
git clone https://github.com/LambdaTest/CSharp-NUnit-Selenium
cd CSharp-NUnit-Selenium
```

2. Set your browser and OS in the `LT:Options` object:

```csharp
var browserOptions = new ChromeOptions();
browserOptions.PlatformName = "Windows 10";
browserOptions.BrowserVersion = "latest";

var ltOptions = new Dictionary<string, object>
{
{ "build", "NUnit Build" },
{ "name", "NUnit Test" },
{ "w3c", true }
};
browserOptions.AddAdditionalOption("LT:Options", ltOptions);
```

3. Build the solution, then run in the Test Explorer, or on Linux/macOS:

```bash
dotnet test
```

The test then appears on the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build). A green status confirms it passed.

MSTest requires .NET Core SDK 3.0.0 and runs via `dotnet test` or the Test Explorer.

1. Clone the [sample GitHub project](https://github.com/LambdaTest/MSTest-Selenium-Sample):

```bash
git clone https://github.com/LambdaTest/MSTest-Selenium-Sample
cd MSTest-Selenium-Sample
```

2. Set your browser and OS in the `LT:Options` object:

```csharp
var browserOptions = new ChromeOptions();
browserOptions.PlatformName = "Windows 10";
browserOptions.BrowserVersion = "latest";

var ltOptions = new Dictionary<string, object>
{
{ "build", "MSTest Build" },
{ "name", "MSTest Test" },
{ "w3c", true }
};
browserOptions.AddAdditionalOption("LT:Options", ltOptions);
```

3. Run the test:

```bash
dotnet test MS-Test-Cross-Browser.csproj
```

The test then appears on the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build). A green status confirms it passed.

**Deprecated**
SpecFlow is no longer actively maintained; its vendor, Tricentis, discontinued it. For current C# BDD testing, use the **Reqnroll** framework instead (see the Reqnroll tab), its actively-maintained open-source successor.

SpecFlow is BDD for .NET: you write Gherkin feature files, and step definitions drive WebDriver. Requires SpecFlow installed.

1. Clone the [sample GitHub project](https://github.com/LambdaTest/SpecFlow-Selenium-Sample):

```bash
git clone https://github.com/LambdaTest/SpecFlow-Selenium-Sample
cd SpecFlow-Selenium-Sample
```

2. Set your browser and OS in the `LT:Options` object:

```csharp
var browserOptions = new ChromeOptions();
browserOptions.PlatformName = "Windows 10";
browserOptions.BrowserVersion = "latest";

var ltOptions = new Dictionary<string, object>
{
{ "build", "SpecFlow Build" },
{ "name", "SpecFlow Test" },
{ "w3c", true }
};
browserOptions.AddAdditionalOption("LT:Options", ltOptions);
```

3. Build the solution, then run in the Test Explorer (use **Run All** for parallel tests).

The test then appears on the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build). A green status confirms it passed.

xUnit reads its capabilities and environments from a `config.json`, filtered by profile.

1. Clone the [sample GitHub project](https://github.com/LambdaTest/CSharp-xUnit-Selenium):

```bash
git clone https://github.com/LambdaTest/CSharp-xUnit-Selenium
cd CSharp-xUnit-Selenium
```

2. Set your browsers in `config.json`. Replace the `user` and `key` values with your actual credentials, or have them read from the `LT_USERNAME` and `LT_ACCESS_KEY` environment variables you set earlier:

```json title="config.json"
{
"server": "hub.lambdatest.com",
"user": "LT_USERNAME",
"key": "LT_ACCESS_KEY",
"capabilities": {
"lt:options": {
"buildName": "xunit build",
"sessionName": "lambdatest xunit sample test",
"visual": "true",
"plugin": "xunit:sample"
}
},
"environments": [
{ "browserName": "chrome" },
{ "browserName": "firefox" },
{ "browserName": "safari" }
],
"TunnelOptions": { "tunnel": false }
}
```

3. Run a single test, or the parallel profile:

```bash
dotnet clean
dotnet test --filter "profile=single"
dotnet test --filter "profile=parallel"
```

The test then appears on the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build). A green status confirms it passed.

Reqnroll is the actively-maintained, open-source successor to SpecFlow. It is a BDD framework for .NET: you write Gherkin feature files, and step definitions drive WebDriver. Requires Reqnroll and a .NET Core SDK 2.1 or greater installed.

1. Clone the [sample GitHub project](https://github.com/LambdaTest/reqnroll-automation-sample):

```bash
git clone https://github.com/LambdaTest/reqnroll-automation-sample
cd reqnroll-automation-sample
```

2. Set your browser and OS, and your credentials, in the Makefile, or export them as the `LT_USERNAME` and `LT_ACCESS_KEY` environment variables you set earlier.
3. Build and run the tests using the project Makefile:

```bash
make clean
make build
make reqnroll-automation-test
```

The test then appears on the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build). A green status confirms it passed.

## View Your Results

Your test results appear on the TestMu AI Automation Dashboard.

Your test results, including video, network logs, and command-by-command execution, appear on the [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build).

**Next steps:** If this is your first run, walk through [running your first Selenium test](/support/docs/testmu-running-your-first-selenium-test/) end to end. From there, explore the full set of [Selenium automation capabilities](/support/docs/selenium-automation-capabilities/) you can pass to the grid, learn how to [debug your Selenium tests](/support/docs/debugging-options/), and organize and [filter your Selenium tests](/support/docs/filter-your-selenium-tests/) as your suite grows.

## Next Steps

Continue with these related guides:

- [Running Your First Selenium Test](/support/docs/testmu-running-your-first-selenium-test/)
- [Selenium Automation Capabilities](/support/docs/selenium-automation-capabilities/)
- [Debugging Options](/support/docs/debugging-options/)
- [Filter Your Selenium Tests](/support/docs/filter-your-selenium-tests/)
