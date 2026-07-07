# Testim Integration

Testim provides an automated testing platform to create stable tests using AI Native capabilities, along with tools that facilitate scaling quality across your software development process.

Integrating TestMu AI with Testim lets you run Testim automated tests on TestMu AI cloud-based grid across 3000+ real browsers and OS.

## Prerequisites
- Create an account on Testim.
- Create a TestMu AI account. You can [sign up for free](https://www.testmuai.com/register/?redirectTo=https://accounts.lambdatest.com/dashboard).
- Get your TestMu AI Username and Access Key.

## Setting Up the Grid
Shown below are the steps to set up your Grid on Testim.

1. Click on your profile icon > **Grids** button.

2. Click on **Add New Grid**. Then, select **TestMu AI** as your Grid Type and click on **Next** button.

3. To configure the Grid:
    - Enter the Grid name.
    - Update your Host and Port number.
    - Enter your TestMu AI Username and Access Key and click on **Add** button.

## Recording the Tests
Shown below are the steps to record your tests on Testim.

1. Click on **New Test** > **Start Recording**.

2. Enter your app URL and click on **Create Test**.

3. It will start recording the tests. Once your testing is completed, stop the recording and save your tests.

## Configuring the Capabilities
Include the capabilities you wish to use in a `.json` file and ensure this file is located in the same directory as your Testim runner.

```json
{
"resolution": "1280x800",
"browserName": "chrome",
"version": "latest"
}
```

## Running the Testim Tests on TestMu AI
To execute the tests, check:

* If the Testim CLI is not already installed on your system, use the entire command provided by the Testim CLI or dashboard.

**For example:**
```json
npm i -g @testim/testim-cli && testim --token "2jWxWxXcmJRON0PA73YZWt92fFGU76cd" --project "GTJL28fMHad" --grid "LAMBDA-TEST" --test-id "2u8QnIm454" --selenium-caps-file "local.json"
```

* If the Testim CLI is already installed, you can run a simpler command that includes your Testim token, project ID, grid, test ID, and the name of your Selenium capabilities file.

**For example:**

```json
testim --token "2jWxWxXcmJRON0PA73YZWt92fFGU76cd" --project "GTJL28fMHad" --grid "LAMBDA-TEST" --test-id "2u8QnIm454" --selenium-caps-file "local.json"
```

To view your test results, navigate to the TestMu AI Web Automation Dashboard.

> **Note**: To explore additional configuration options, you can execute `testim --help` in PowerShell or bash, which will display further customizations available for writing and executing your test cases.
