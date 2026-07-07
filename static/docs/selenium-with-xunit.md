# Selenium With xUnit

Run xUnit Selenium tests on the TestMu AI cloud grid. This guide covers setup, running a sample test, configuring capabilities, and running tests in parallel.

**Sample repo**
All the code used in this guide is available in the sample repository.

 View on GitHub

## Prerequisites

Make sure you have the following set up before you start.

1. [Create a TestMu AI account](https://www.testmuai.com/register/) if you don't have one.
2. Get your **Username** and **Access Key** from the [TestMu AI Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard).
3. Install [.NET Core SDK](https://dotnet.microsoft.com/download) 8.0 or later.
4. Download [Selenium WebDriver](https://www.selenium.dev/downloads/) Language Binding for C#.

## Step 1: Clone the Sample Project

Pull the sample repo to your local machine and navigate into the project directory.

```bash
git clone https://github.com/LambdaTest/CSharp-xUnit-Selenium
cd CSharp-xUnit-Selenium
```

## Step 2: Set Your Credentials

Add your TestMu AI credentials as environment variables so the test can authenticate with the grid.

Visit the [TestMu AI Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard), navigate to the left sidebar, and select **Credentials**. Copy your **Username** and **Access Key**, then set them as environment variables:

  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

  {`set LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
set LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

## Step 3: Configure Your Test Capabilities

Define the browser, version, and OS for your test run.

Update the `config.json` file with your desired capabilities:

```csharp
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
{
"browserName": "chrome"
},
{
"browserName": "firefox"
},
{
"browserName": "safari"
}
],

"TunnelOptions": {
"tunnel": false
}
}
```

Use the [Capabilities Generator](https://www.testmuai.com/capabilities-generator/) to auto-generate capabilities for any browser, version, and OS combination.

## Step 4: Run the Test

Build and run xUnit tests from Visual Studio or the command line.

**From Visual Studio:** Build the solution and run tests from the Test Explorer.

**From the terminal (macOS/Linux):**

```bash
dotnet clean
dotnet test --filter "profile=single"
```

To run tests in parallel:

```bash
dotnet test --filter "profile=parallel"
```

## Step 5: View Your Results

Check the Automation Dashboard to see exactly what happened during your test.

Visit the [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build) to see your test results. Each session includes:

- **Video recording** of the full test execution
- **Screenshots** captured at each step
- **Console logs** from the browser
- **Network logs** for every request and response
- **Selenium command logs** showing each driver action

## Run xUnit Tests Using Agent Skills

Use AI coding assistants to generate and run xUnit tests with the TestMu AI Agent Skill.

The [xunit-skill](https://github.com/LambdaTest/agent-skills/tree/main/xunit-skill) is part of [TestMu AI Agent Skills](https://github.com/LambdaTest/agent-skills/) - structured packages that teach AI coding assistants how to write production-grade test automation.

Install the skill:

```bash
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/xunit-skill .claude/skills/

# For Cursor / Copilot
cp -r agent-skills/xunit-skill .cursor/skills/
```

Install all available framework skills at once by cloning the repository directly into your tool's skills directory (e.g., `.claude/skills/`, `.cursor/skills/`).
