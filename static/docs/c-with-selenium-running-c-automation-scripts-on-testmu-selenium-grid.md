# Selenium With C#

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/llms.txt).

Run C# tests on the TestMu AI cloud grid. This guide covers setup, running a sample test, configuring capabilities, and testing locally hosted pages.

**Sample repo**
All the code used in this guide is available in the sample repository.

 View on GitHub

## Prerequisites

Complete the following steps before running C# Selenium tests.

1. Download and install **Selenium WebDriver** from its [official website](https://www.selenium.dev/downloads/).
2. Install the latest version of C#.
3. Install the **.Net** framework for developing applications using C#.
4. Download [Selenium WebDriver Language Binding](https://www.selenium.dev/downloads/) for C# and extract them to the appropriate folder.
5. Install a [.NET Core SDK](https://dotnet.microsoft.com/en-us/download) of 2.1 or greater version.
6. [Install .NET Runtime](https://dot.net/v1/dotnet-install.sh) to execute tests on Linux or macOS.
7. Get your TestMu AI Username and Access Key from the [TestMu AI Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard).

## Step 1: Clone the Sample Project

Clone the repository and navigate to the project directory.

```bash
git clone https://github.com/LambdaTest/CSharp-Selenium-Sample
cd CSharp-Selenium-Sample
```

## Step 2: Set Your Credentials

Configure your credentials to connect to the TestMu AI Selenium Grid.

Set TestMu AI Username and Access Key in environment variables.

  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

  {`set LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
set LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

## Step 3: Configure Your Test Capabilities

Define browser, version, and OS settings for your test run.

In the test script, update your test capabilities. This code passes browser, browser version, and operating system information, along with TestMu AI Selenium grid capabilities via the capabilities object.

```csharp
var browserOptions = new ChromeOptions();
browserOptions.PlatformName = "Windows 10";
browserOptions.BrowserVersion = "latest";

var ltOptions = new Dictionary<string, object>
{
{ "username", LT_USERNAME },
{ "accessKey", LT_ACCESS_KEY },
{ "project", "Demo LT" },
{ "w3c", true },
{ "plugin", "c#-c#" }
};
browserOptions.AddAdditionalOption("LT:Options", ltOptions);
```

**Capabilities Generator**
Use the TestMu AI [Capabilities Generator](https://www.testmuai.com/capabilities-generator/) to auto-generate the capabilities class for your test requirements.

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

Use AI coding assistants to generate and run C# Selenium tests with the TestMu AI Agent Skill.

The [selenium-skill](https://github.com/LambdaTest/agent-skills/tree/main/selenium-skill) is part of [TestMu AI Agent Skills](https://github.com/LambdaTest/agent-skills/) - structured packages that teach AI coding assistants how to write production-grade test automation.

Install the skill:

```bash
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/selenium-skill .claude/skills/

# For Cursor / Copilot
cp -r agent-skills/selenium-skill .cursor/skills/
```

Install all available framework skills at once by cloning the repository directly into your tool's skills directory (e.g., `.claude/skills/`, `.cursor/skills/`).
