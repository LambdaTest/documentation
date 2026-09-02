# Selenium With C#

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Run your C# Selenium tests on the TestMu AI cloud grid across 10,000+ browser/device combinations. The setup is the same for every framework: you connect to the grid and pass your capabilities. This guide covers that shared flow once, then gives you a per-framework quickstart in the tabs below.

## Prerequisites

Complete these before running any framework below.

## Step 1: Clone the Sample Project

Every framework authenticates the same way: your Username and Access Key are read from environment variables. Set them once. Pick your operating system:

  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

  {`set LT_USERNAME=${ YOUR_LAMBDATEST_USERNAME()}
set LT_ACCESS_KEY=${ YOUR_LAMBDATEST_ACCESS_KEY()}`}

## Step 3: Configure Your Test Capabilities

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

## Step 4: Run the Test

Execute a sample C# Selenium test against the TestMu AI cloud grid.

Use the following commands to run your single and parallel tests.

**Single test**

```csharp
dotnet run single
```

**Parallel test**

```csharp
dotnet run parallel
```

## Step 5: View Your Results

Check the test output on the console and the TestMu AI dashboard.

Visit the [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/) to view your test results. The dashboard provides:

- Text logs for each test step
- Screenshots captured during execution
- Video recordings of the full test session

## Run C# Selenium Tests Using Agent Skills

Each tab lists the framework-specific pieces. Clone the matching repo (it contains the full, ready-to-run project), then build and run.

NUnit runs from the Visual Studio Test Explorer, or from the CLI on Linux/macOS.

1. Clone the [sample GitHub project](https://github.com/LambdaTest/CSharp-NUnit-Selenium):

```bash
git clone https://github.com/LambdaTest/CSharp-NUnit-Selenium
cd CSharp-NUnit-Selenium
```

Install all available framework skills at once by cloning the repository directly into your tool's skills directory (e.g., `.claude/skills/`, `.cursor/skills/`).
