# How to Run Espresso Tests on TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Running Espresso tests on TestMu AI executes Android UI automation on real and virtual devices. Upload your app and Espresso test APKs, set the desired capabilities, trigger the build, and review results on the dashboard without a local device lab.

**Supported on:** Real &amp; Virtual devices

Espresso is a widely-used testing framework for Android, designed to simplify the process of writing reliable and efficient UI tests. It allows developers to create automated tests that simulate user interactions within an app, ensuring that the app's UI behaves as expected. With its straightforward API and synchronization capabilities, Espresso provides a robust solution for validating the functionality and performance of Android applications.

## Prerequisites

- Your TestMu AI [Username and Access key](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/security).
- Access to an **Android** app (.apk) and an **Espresso Test** app (.apk file).

If you do not have any **Android** app (.apk) and an **Espresso Test** app (.apk) file, you can run your sample tests on TestMu AI by using our sample :link: [Android app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk) and a sample :link: [Espresso Test](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android_expressotest.apk).

## Running Your First Test: A Step-by-Step Guide

### Step 1: Upload Your Application

To begin testing, upload your Android application (.apk file) to TestMu AI's servers. You'll use our **REST API** for this process.

- **Authentication :** You'll need your TestMu AI Username and AccessKey. Combine them in the format `Username:AccessKey`.
- **Uploading the App :** Use **cURL command** to send a request to our API. The request should include the path to your application file (**appFile**).

  {`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST 'https://manual-api.lambdatest.com/app/uploadFramework' --form 'appFile=@""' --form 'type="espresso-android"'`}

{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST "https://manual-api.lambdatest.com/app/uploadFramework" --form "appFile=@""" --form "type=\"espresso-android\""`}

- Provide the path of your android application in the above URL in place of ``
- Response of above cURL will be a **JSON** object containing the `App URL` of the format - `lt://APP123456789123456789` and will be used in the last step.

### Step 2: Upload Your Test Suite

Upload your Espresso test suite (.apk) file to TestMu AI servers using our REST API.

The following sample cURL command shows how to upload a test suite:

  {`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST 'https://manual-api.lambdatest.com/app/uploadFramework' --form 'appFile=@""' --form 'type="espresso-android"'`}

{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST "https://manual-api.lambdatest.com/app/uploadFramework" --form "appFile=@""" --form "type=\"espresso-android\""`}

- Provide the path of your android application in the above URL in place of ``
- Response of above cURL will be a **JSON** object containing the `App URL` of the format - `lt://APP123456789123456789` and will be used in the last step.

### Step 3: Executing The Test

- You will need **base64 encoded authentication** in order to execute your Espresso automation test suite. Enter your `username:accesskey` in **[Basic Authentication Header Generator](https://mixedanalytics.com/knowledge-base/api-connector-encode-credentials-to-base-64/)** to generate your auth token.

Take note of the base64 encoded authentication which needs to be added in the next step.

{`${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}`}

- Once you have uploaded your app and test suite, you can execute your test by running the following command:

* On Windows, run the following `curl` command from **Command Prompt (cmd.exe)**. The command is formatted for the Windows CMD terminal and may require different syntax if executed from PowerShell or another shell.
* Before running the command, replace `BASIC_AUTH_TOKEN`, `APP_ID`, and `TEST_SUITE_ID` with your actual LambdaTest credentials and resource IDs obtained from the above curl commands.

```bash
curl --location --request POST 'https://mobile-api.lambdatest.com/framework/v1/espresso/build' \
--header 'Authorization: Basic BASIC_AUTH_TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{
"app": "APP_ID",
"testSuite": "TEST_SUITE_ID",
"device": ["Galaxy S21 5G-12"],
"queueTimeout": 10800,
"IdleTimeout": 150,
"deviceLog": true,
"network": false,
"build": "Proverbial-Espresso",
"geoLocation": "FR"
}'
```

```bash
curl --location --request POST "https://mobile-api.lambdatest.com/framework/v1/espresso/build" ^
--header "Authorization: Basic BASIC_AUTH_TOKEN" ^
--header "Content-Type: application/json" ^
--data "{\"app\":\"APP_ID\",\"testSuite\":\"TEST_SUITE_ID\",\"device\":[\"Pixel 6-12\"],\"queueTimeout\":10800,\"IdleTimeout\":150,\"deviceLog\":true,\"network\":false,\"build\":\"Proverbial-Espresso\",\"geoLocation\":\"FR\"}"
```

```bash
curl --location --request POST 'https://mobile-api.lambdatest.com/framework/v1/espresso/build' \
--header 'Authorization: Basic BASIC_AUTH_TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{
"app": "APP_ID",
"testSuite": "TEST_SUITE_ID",
"device": ["Galaxy S21 5G-12.0"],
"isVirtualDevice": true,
"queueTimeout": 10800,
"IdleTimeout": 150,
"deviceLog": true,
"network": false,
"build": "Proverbial-Espresso",
"geoLocation": "FR"
}'
```

```bash
curl --location --request POST "https://mobile-api.lambdatest.com/framework/v1/espresso/build" ^
--header "Authorization: Basic BASIC_AUTH_TOKEN" ^
--header "Content-Type: application/json" ^
--data "{\"app\":\"APP_ID\",\"testSuite\":\"TEST_SUITE_ID\",\"device\":[\"Pixel 6-12.0\"],\"isVirtualDevice\":true,\"queueTimeout\":10800,\"IdleTimeout\":150,\"deviceLog\":true,\"network\":false,\"build\":\"Proverbial-Espresso\",\"geoLocation\":\"FR\"}"
```

### Step 4: View Test Execution

Once you have run your tests, you can view the test execution along with logs. You will be able to see the test cases passing or failing. You can view the same at TestMu AI Automation.

## Running Tests in Parallel

You can run tests in parallel on multiple devices by passing the device name in comma separated format in the execute command as show below:

* On Windows, run the following `curl` command from **Command Prompt (cmd.exe)**. The command is formatted for the Windows CMD terminal and may require different syntax if executed from PowerShell or another shell.
* Before running the command, replace `BASIC_AUTH_TOKEN`, `APP_ID`, and `TEST_SUITE_ID` with your actual LambdaTest credentials and resource IDs obtained from the above curl commands.

```bash
curl --location --request POST 'https://mobile-api.lambdatest.com/framework/v1/espresso/build' \
--header 'Authorization: Basic BASIC_AUTH_TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{
"app": "APP_ID",
"testSuite": "TEST_SUITE_ID",
"device": ["Galaxy S20-10","Galaxy S20-10","Redmi Note 9-10","Galaxy S10+-10","Galaxy S7 edge-8","Galaxy S9+-8"],
"queueTimeout": 10800,
"IdleTimeout": 150,
"deviceLog": true,
"network": false,
"build": "Proverbial-Espresso",
"geoLocation": "FR"
}'
```

```bash
curl --location --request POST "https://mobile-api.lambdatest.com/framework/v1/espresso/build" ^
--header "Authorization: Basic BASIC_AUTH_TOKEN" ^
--header "Content-Type: application/json" ^
--data "{\"app\":\"APP_ID\",\"testSuite\":\"TEST_SUITE_ID\",\"device\":[\"Galaxy S20-10\",\"Galaxy S20-10\",\"Redmi Note 9-10\",\"Galaxy S10+-10\",\"Galaxy S7 edge-8\",\"Galaxy S9+-8\"],\"queueTimeout\":10800,\"IdleTimeout\":150,\"deviceLog\":true,\"network\":false,\"build\":\"Proverbial-Espresso\",\"geoLocation\":\"FR\"}"
```

```bash
curl --location --request POST 'https://mobile-api.lambdatest.com/framework/v1/espresso/build' \
--header 'Authorization: Basic BASIC_AUTH_TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{
"app": "APP_ID",
"testSuite": "TEST_SUITE_ID",
"device": ["Galaxy S20-10.0","Galaxy S20-10.0","Redmi Note 9-10.0","Galaxy S10+-10.0","Galaxy S7 edge-8.0","Galaxy S9+-8.0"],
"isVirtualDevice": true,
"queueTimeout": 10800,
"IdleTimeout": 150,
"deviceLog": true,
"network": false,
"build": "Proverbial-Espresso",
"geoLocation": "FR"
}'
```

```bash
curl --location --request POST "https://mobile-api.lambdatest.com/framework/v1/espresso/build" ^
--header "Authorization: Basic BASIC_AUTH_TOKEN" ^
--header "Content-Type: application/json" ^
--data "{\"app\":\"APP_ID\",\"testSuite\":\"TEST_SUITE_ID\",\"device\":[\"Galaxy S20-10.0\",\"Galaxy S20-10.0\",\"Redmi Note 9-10.0\",\"Galaxy S10+-10.0\",\"Galaxy S7 edge-8.0\",\"Galaxy S9+-8.0\"],\"isVirtualDevice\":true,\"queueTimeout\":10800,\"IdleTimeout\":150,\"deviceLog\":true,\"network\":false,\"build\":\"Proverbial-Espresso\",\"geoLocation\":\"FR\"}"
```
