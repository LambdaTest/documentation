# Selenium With Reqnroll

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Run Reqnroll tests on the TestMu AI cloud grid. This guide covers setup, running a sample test, configuring capabilities, and testing locally hosted pages.

**Sample repo**
All the code used in this guide is available in the sample repository.

 View on GitHub

## Prerequisites

Complete the following steps before running Reqnroll Selenium tests.

1. Download and install **Selenium WebDriver** from the [official website](https://www.selenium.dev/downloads/).
2. Install the latest version of **Reqnroll**.
3. Install the **.Net** framework for developing applications using C#.
4. Download [Selenium WebDriver Language Binding](https://www.selenium.dev/downloads/) for C# and extract them to the appropriate folder.
5. Install a [.NET Core SDK](https://dotnet.microsoft.com/en-us/download) of 2.1 or greater version.
6. Get your TestMu AI Username and Access Key from the [TestMu AI Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard).

## Step 1: Clone the Sample Project

Clone the repository and set up the virtual environment.

```bash
virtualenv venv
```

Navigate to the newly created virtual environment:

```bash
source venv/bin/activate
```

## Step 2: Set Your Credentials

Configure your credentials to connect to the TestMu AI grid.

Fetch the TestMu AI Credentials from the [TestMu AI Profile Section](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard). You can export the environment variables by running the following commands in your terminal.

  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

  {`set LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
set LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

## Step 3: Configure Your Test Capabilities

Update the TestMu AI Credentials in the Makefile or export them as environment variables as shown above.

**Capabilities Generator**
Use the TestMu AI [Capabilities Generator](https://www.testmuai.com/capabilities-generator/) to auto-generate the capabilities class for your test requirements.

## Step 4: Run the Test

Build and execute the Reqnroll tests on the TestMu AI platform.

Clean temporary files:
```bash
make clean
```

Build the automation project:
```bash
make build
```

Run the Reqnroll tests:
```bash
make reqnroll-automation-test
```

## Step 5: View Your Results

Check the test output on the console and the TestMu AI dashboard.

Navigate to the [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/) to check the status of the test execution.

All the scenarios that are a part of respective *.feature(s)* files successfully executed on TestMu AI.
