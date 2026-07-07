# Siesta Integration

Siesta is a JavaScript and UI testing tool for web pages and Node.js processes. You can run tests in browsers, Node.js, and Deno on Linux, macOS, and Windows.

TestMu AI and Siesta integration lets you perform automated browser testing of your locally hosted websites or web apps across 3000+ real browsers and OS combinations.

## Prerequisites

1. A TestMu AI account. In case, you don't have an TestMu AI account, sign up for free.

2. Download Siesta from official Bryntum website.

3. In order to run your Siesta tests, you will need to set your TestMu AI username and access key in the environment variables. Click the Access Key button at the top-right of the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build) to access it.

**Windows**

```js
set LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
set LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```

**macOS/Linux**

```js
export LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
export LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```

## Running Single Test With Siesta

Configure your local web server "localhost" on port 80 and then run the below command in the CMD terminal -

```js
C:\xampp\htdocs\siesta\bin\webdriver http://localhost/siesta/examples/browser/index.html --filter basic --lambdatest LT_USERNAME, LT_ACCESS_KEY --cap browserName=firefox --cap platform=windows
```

To generate desired capabilities for your test script, head over to our [Desired Capabilities Generator](https://www.testmuai.com/capabilities-generator/).

## Parallel Testing With Siesta

TestMu AI lets you to perform parallel testing with Siesta across 3000+ browsers and OS. You can run one test case across multiple browsers, or you can run multiple test case scenarios in the same browser with different browser versions.

To run your tests in parallel, pass the below command in the CMD terminal-

```js
C:\xampp\htdocs\siesta\bin\webdriver http://localhost/siesta/examples/browser/index.html --filter basic --lambdatest LT_USERNAME, LT_ACCESS_KEY --cap browserName=firefox --cap platform=windows --max-workers
```

> If you come across any issue or doubt, feel free to reach out to us via our **24/7 chat support**. Or you can even mail us at [support@testmuai.com](mailto:support@testmuai.com) Happy Testing!!
