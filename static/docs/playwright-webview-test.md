# Playwright Webview Testing

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

WebView testing is an essential process for ensuring the functionality and reliability of applications that rely on embedded web browsers. This guide provides detailed steps to perform WebView testing using Playwright. It is designed for developers, QA engineers, and anyone involved in software quality assurance.

## Steps to perform Webview testing

### Step 1: Setup your test suite

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

**sample repo**
Download or Clone the code sample from the TestMu AI GitHub repository to run your tests.

 View on GitHub

- If you are using your own project, configure the `browserWSEndpoint` (browser end point URL) in your test script to run the test on TestMu AI

```javascript
wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
```

- Here is the sample test script for your reference:

```javascript reference title="playwrightwebview.js"
https://github.com/LambdaTest/playwright-sample/blob/main/playwrightwebview.js
```

### Step 2: Update the dependencies
Before proceeding forward, run the below command to update the outdated dependencies

```bash
npm install
```

### Step 3: Update your test Capabilities
Include the following field in the capabilities object to enable WebView testing:

```javascript title="playwrightwebview.js"
const capabilities = {
"LT:Options": {
"platformName": "android",
"isRealMobile": true, //if true, test will run on real devices
// highlight-next-line
"isPwMobileWebviewTest": true, //mandatory capability to enable WebView testing
},
```

Use our [Capability Generator](https://www.lambdatest.com/capabilities-generator/) to select from a wide range of options for customizing your tests.

### Step 4: Setup your TestMu AI credentials

In your terminal (as per your respective Operating System), run these command to setup your TestMu AI credentials.
> You can see your credentials below if you have logged into our platform.

  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

  {`set LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
set LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

### Step 5: Execute your test
Replace the `TEST_FILE_NAME` in the below command with your desired test file to execute that particular test on TestMu AI:

```bash
node playwrightwebview.js
```

Visit the [TestMu AI Web Automation](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build) page to check the status of your test execution.
