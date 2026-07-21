# Selenium With Tesbo

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Run [Tesbo](https://tesbo.io/) keyword-driven automation scripts on the TestMu AI cloud grid. Tesbo is a hybrid framework built on Selenium that lets you write automation scripts in plain English using a keyword-driven approach.

**Sample repo**
All the code used in this guide is available in the sample repository.

 View on GitHub

## Prerequisites

Make sure you have the following set up before you start.

1. [Create a TestMu AI account](https://www.testmuai.com/register/) if you don't have one.
2. Get your **Username** and **Access Key** from the [TestMu AI Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard).
3. Install [Java Development Kit (JDK)](https://www.oracle.com/java/technologies/downloads/) 1.6 or higher.
4. Install an IDE such as Eclipse or IntelliJ.

## Step 1: Clone the Sample Project

Pull the sample repo to your local machine and navigate into the project directory.

```bash
git clone https://github.com/LambdaTest/LamdaTest_Tesbo_Demo
cd LamdaTest_Tesbo_Demo
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

Update `config.json` to point to the TestMu AI Selenium Grid. Set the Selenium address, enable the grid, and define your desired capabilities:

```json
{
"run": {
"baseUrl": "https://www.seleniumeasy.com/test/",
"seleniumAddress": "https://{userName}:{ApiKey}@hub.lambdatest.com/wd/hub",
"by": {
"tag": ["FO1"]
},
"browser": {
"name": ["chrome"]
},
"capabilities": {
"chrome": {
"build": "Tesbo_With_TestMuAI",
"name": "Tesbo",
"platformName": "Windows 10",
"browserName": "Chrome",
"browserVersion": "latest"
}
},
"parallel": {
"status": false,
"count": "3"
},
"retryAnalyser": {
"count": "0"
},
"highlightElement": true,
"IsGrid": true
}
}
```

Key settings:
- **seleniumAddress** - Points to the TestMu AI hub URL with your credentials
- **IsGrid** - Set to `true` to run on the cloud grid
- **capabilities** - Define browser, version, and platform

Use the [Capabilities Generator](https://www.testmuai.com/capabilities-generator/) to auto-generate capabilities for any browser, version, and OS combination.

## Step 4: Run the Test

Trigger the test from your IDE.

Hit the run button in your IDE. Your Tesbo test scripts execute on the TestMu AI Selenium Grid.

## Step 5: Run Tests in Parallel

Run multiple Tesbo tests simultaneously across different browsers to reduce execution time.

Set the parallel status to `true` and specify the count in `config.json`:

```json
"parallel": {
"status": true,
"count": "3"
}
```

To run across multiple browsers, add more capabilities:

```json
"capabilities": {
"chrome": {
"build": "Tesbo_With_TestMuAI",
"name": "Tesbo",
"platformName": "Windows 10",
"browserName": "Chrome",
"browserVersion": "latest"
},
"firefox": {
"build": "Tesbo_With_TestMuAI",
"name": "Tesbo",
"platformName": "Windows 10",
"browserName": "Firefox",
"browserVersion": "latest"
},
"safari": {
"build": "Tesbo_With_TestMuAI",
"name": "Tesbo",
"platformName": "MacOS Catalina",
"browserName": "Safari",
"browserVersion": "latest"
}
}
```

## Step 6: View Your Results

Check the Automation Dashboard to see exactly what happened during your test.

Visit the [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build) to see your test results. Each session includes:

- **Video recording** of the full test execution
- **Screenshots** captured at each step
- **Console logs** from the browser
- **Network logs** for every request and response
- **Selenium command logs** showing each driver action
