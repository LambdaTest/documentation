# How to Run XCUITest on TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Running XCUITest on TestMu AI executes Apple's XCTest-based UI automation for your iOS apps across 5000+ real devices and OS combinations. Upload your app and test bundle, configure capabilities, trigger the run, and review results on the TestMu AI dashboard.

**Supported on:** Real &amp; Virtual devices

Developed by Apple, XCUITest is a framework for user-interface (UI) testing for iOS applications. It is built on top of XCTest, an integrated test framework in Apple's Xcode IDE. TestMu AI lets you perform automated app testing of your iOS apps using XCUITest across 5000+ real devices and OS combinations.

## Prerequisites

- Your TestMu AI [Username and Access key](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/security).
- Access to an **iOS** app (.ipa) and an **XCUI Test** app (.ipa file).

If you do not have any **iOS** app (.ipa) and an **XCUI Test** app (.ipa) file, you can run your sample tests on TestMu AI by using our sample :link: [iOS app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_ios.ipa) and a sample :link: [XCUI Test](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_ios_xcuitest.ipa).

## Running Your First Test: A Step-by-Step Guide

### Step 1: Upload Your Application

To begin testing, upload your iOS application (.ipa file) to TestMu AI's servers. You'll use our **REST API** for this process.

- **Authentication :** You'll need your TestMu AI Username and AccessKey. Combine them in the format `Username:AccessKey`.
- **Uploading the App :** Use **cURL command** to send a request to our API. The request should include the path to your application file (**appFile**).

  {`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST 'https://manual-api.lambdatest.com/app/uploadFramework' --form 'appFile=@""' --form 'type="xcuit-ios"'`}

{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/uploadFramework" -F "appFile=@""" -F "type="xcuit-ios""`}

- Provide the path of your iOS application in the above URL in place of ``
- Response of above cURL will be a **JSON** object containing the `App URL` of the format - `lt://APP123456789123456789` and will be used in the last step.

### Step 2: Upload Your Test Suite

Upload your iOS test suite (.ipa) file to TestMu AI servers using our REST API.

The following sample cURL command shows how to upload a test suite:

  {`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST 'https://manual-api.lambdatest.com/app/uploadFramework' --form 'appFile=@""' --form 'type="xcuit-ios"'`}

{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST "https://manual-api.lambdatest.com/app/uploadFramework" --form "appFile=@""" --form "type=\"xcuit-ios\""`}

- Provide the path of your iOS test suite in the above URL in place of ``
- Response of above cURL will be a **JSON** object containing the `App URL` of the format - `lt://APP123456789123456789` and will be used in the last step.

### Step 3: Executing The Test

- You will need **base64 encoded authentication** in order to execute your XCUITest automation test suite. Enter your `username:accesskey` in **[Basic Authentication Header Generator](https://mixedanalytics.com/knowledge-base/api-connector-encode-credentials-to-base-64/)** to generate your auth token.

Take note of the base64 encoded authentication which needs to be added in the next step.

{`${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}`}

- Once you have uploaded your app and test suite, you can execute your test by running the following command:

* On Windows, run the following `curl` command from **Command Prompt (cmd.exe)**. The command is formatted for the Windows CMD terminal and may require different syntax if executed from PowerShell or another shell.
* Before running the command, replace `BASIC_AUTH_TOKEN`, `APP_ID`, and `TEST_SUITE_ID` with your actual LambdaTest credentials and resource IDs obtained from the above curl commands.

```bash
curl --location --request POST 'https://mobile-api.lambdatest.com/framework/v1/xcui/build' \
--header 'Authorization: Basic BASIC_AUTH_TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{
"app": "APP_ID",
"testSuite": "TEST_SUITE_ID",
"device":  ["iPhone 11-14"],
"video": true,
"queueTimeout": 10800,
"idleTimeout": 150,
"devicelog": true,
"network": false,
"build": "Proverbial-XCUITest"
}'
```

```bash
curl --location --request POST "https://mobile-api.lambdatest.com/framework/v1/xcui/build" ^
--header "Authorization: Basic BASIC_AUTH_TOKEN" ^
--header "Content-Type: application/json" ^
--data "{\"app\":\"APP_ID\",\"testSuite\":\"TEST_SUITE_ID\",\"device\":[\"iPhone 15-17\"],\"video\":true,\"queueTimeout\":10800,\"idleTimeout\":150,\"devicelog\":true,\"network\":false,\"build\":\"Proverbial-XCUITest\"}"
```

```bash
curl --location --request POST 'https://mobile-api.lambdatest.com/framework/v1/xcui/build' \
--header 'Authorization: Basic BASIC_AUTH_TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{
"app": "APP_ID",
"testSuite": "TEST_SUITE_ID",
"device":  ["iPhone 11-14.0"],
"isVirtualDevice": true,
"video": true,
"queueTimeout": 10800,
"idleTimeout": 150,
"devicelog": true,
"network": false,
"build": "Proverbial-XCUITest"
}'
```

```bash
curl --location --request POST "https://mobile-api.lambdatest.com/framework/v1/xcui/build" ^
--header "Authorization: Basic BASIC_AUTH_TOKEN" ^
--header "Content-Type: application/json" ^
--data "{\"app\":\"APP_ID\",\"testSuite\":\"TEST_SUITE_ID\",\"device\":[\"iPhone 15-17.0\"],\"isVirtualDevice\":true,\"video\":true,\"queueTimeout\":10800,\"idleTimeout\":150,\"devicelog\":true,\"network\":false,\"build\":\"Proverbial-XCUITest\"}"
```

### Step 4: View Test Execution

Once you have run your tests, you can view the test execution along with logs. You will be able to see the test cases passing or failing. You can view the same at TestMu AI Automation.

## Running Tests in Parallel

You can run tests in parallel on multiple devices by passing the device name in comma separated format in the execute command as show below:

* On Windows, run the following `curl` command from **Command Prompt (cmd.exe)**. The command is formatted for the Windows CMD terminal and may require different syntax if executed from PowerShell or another shell.
* Before running the command, replace `BASIC_AUTH_TOKEN`, `APP_ID`, and `TEST_SUITE_ID` with your actual LambdaTest credentials and resource IDs obtained from the above curl commands.

```bash
curl --location --request POST 'https://mobile-api.lambdatest.com/framework/v1/xcui/build' \
--header 'Authorization: Basic BASIC_AUTH_TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{
"app": "APP_ID",
"testSuite": "TEST_SUITE_ID",
"device": ["iPhone 11-14","iPhone 12 Pro-15","iPhone X-13"],
"video": true,
"queueTimeout": 10800,
"idleTimeout": 150,
"devicelog": true,
"network": false,
"build": "Proverbial-XCUITest"
}'
```

```bash
curl --location --request POST "https://mobile-api.lambdatest.com/framework/v1/xcui/build" ^
--header "Authorization: Basic BASIC_AUTH_TOKEN" ^
--header "Content-Type: application/json" ^
--data "{\"app\":\"APP_ID\",\"testSuite\":\"TEST_SUITE_ID\",\"device\":[\"iPhone 11-14\",\"iPhone 12 Pro-15\",\"iPhone X-13\"],\"video\":true,\"queueTimeout\":10800,\"idleTimeout\":150,\"devicelog\":true,\"network\":false,\"build\":\"Proverbial-XCUITest\"}"
```

```bash
curl --location --request POST 'https://mobile-api.lambdatest.com/framework/v1/xcui/build' \
--header 'Authorization: Basic BASIC_AUTH_TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{
"app": "APP_ID",
"testSuite": "TEST_SUITE_ID",
"device":  ["iPhone 11-14.0","iPhone 12 Pro-15.0","iPhone X-13.0"],
"isVirtualDevice": true,
"video": true,
"queueTimeout": 10800,
"idleTimeout": 150,
"devicelog": true,
"network": false,
"build": "Proverbial-XCUITest"
}'
```

```bash
curl --location --request POST "https://mobile-api.lambdatest.com/framework/v1/xcui/build" ^
--header "Authorization: Basic BASIC_AUTH_TOKEN" ^
--header "Content-Type: application/json" ^
--data "{\"app\":\"APP_ID\",\"testSuite\":\"TEST_SUITE_ID\",\"device\":[\"iPhone 11-14.0\",\"iPhone 12 Pro-15.0\",\"iPhone X-13.0\"],\"video\":true,\"queueTimeout\":10800,\"isVirtualDevice\":true,\"idleTimeout\":150,\"devicelog\":true,\"network\":false,\"build\":\"Proverbial-XCUITest\"}"
```
