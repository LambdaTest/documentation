# XCTestPlan

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

XCTestPlan is a feature within Xcode used for building iOS, iPadOS, macOS, watchOS, tvOS, and audioOS applications. XCTestPlan helps manage how you run automated tests written with the XCTest framework.

XCTestPlan improves the organization and efficiency of running automated tests within Xcode. It allows you to create targeted test runs and manage various testing scenarios effectively.

## Prerequisites

- Your TestMu AI [Username and Access key](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/security).
- Access to an **iOS** app (.ipa) and an **XCUI Test** app (.ipa file).

If you do not have any **iOS** app (.ipa) and an **XCUI Test** app (.ipa) file, you can run your sample tests on TestMu AI by using our sample :link: [iOS app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_ios.ipa) and a sample :link: [XCUI Test](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_ios_xcuitest.ipa).

## Step 1: Upload Your Application

To begin testing, upload your iOS application (.ipa file) to TestMu AI's servers. You'll use our **REST API** for this process.

- **Authentication :** You'll need your TestMu AI Username and AccessKey. Combine them in the format `Username:AccessKey`.
- **Uploading the App :** Use **cURL command** to send a request to our API. The request should include the path to your application file (**appFile**).

  {`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST 'https://manual-api.lambdatest.com/app/uploadFramework' --form 'appFile=@""' --form 'type="xcuit-ios"'`}

{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/uploadFramework" -F "appFile=@""" -F "type="xcuit-ios""`}

- Provide the path of your android application in the above URL in place of ``
- Response of above cURL will be a **JSON** object containing the `App URL` of the format - `lt://APP123456789123456789` and will be used in the last step.

## Step 2: Upload Your Test Suite and XCTestRun File

Upload your iOS test suite (.ipa) file to TestMu AI servers using our REST API. The following sample cURL command shows how to upload a test suite:

  {`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST 'https://manual-api.lambdatest.com/app/uploadFramework' --form 'appFile=@""' --form 'type="xcuit-ios"'`}

{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST "https://manual-api.lambdatest.com/app/uploadFramework" --form "appFile=@""" --form "type=\"xcuit-ios\""`}

- Provide the path of your android application in the above URL in place of ``
- Response of above cURL will be a **JSON** object containing the `App URL` of the format - `lt://APP123456789123456789` and will be used in the last step.

> This is a sample xctestplan file which is compatible with our sample application provided above.

```js title="testLaunch.xctestplan"
{
"configurations" : [
{
"id" : "1D354D3E-7B86-4201-A441-6D23AF535802",
"name" : "Configuration 1",
"options" : {
}
}
],
"defaultOptions" : {
},
"testTargets" : [
{
// highlight-next-line
"skippedTests" : [
// highlight-next-line
"LambdaUiKitIOSUITests\/testverifyAppLaunch()"
// highlight-next-line
],
"target" : {
"containerPath" : "container:LambdaUiKitIOS.xcodeproj",
"identifier" : "84946A3027745AFD000E2562",
"name" : "LambdaUiKitIOSUITests"
}
}
],
"version" : 1
}
```

This will only be used for filtering tests using xctestplan. You can use the following capability in xcui/build api:
`"xctestplan" : "lt://APP1234567891234567890"` and use the following curl to upload xctestplan file.

```bash
curl --location --request POST 'https://manual-api.lambdatest.com/app/xctestplan' \
--header 'Cookie: cf_use_ob=0' \
--header 'Authorization: Basic <Enter_Basic_Auth>' \
--form 'appFile=@"/path/to/file"' \
--form 'type="xctestplan"'
```

## Step 3: Executing The Test

- You will need **base64 encoded authentication** in order to execute your Espresso automation test suite. Enter your `username:accesskey`�in **[Basic Authentication Header Generator](https://mixedanalytics.com/knowledge-base/api-connector-encode-credentials-to-base-64/)** to generate your auth token.

Take note of the�base64�encoded authentication which needs to be added in the next step.

{`${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}`}

- Once you have uploaded your app and test suite, you can execute your test by running the following command:

> Enter your **BASIC_AUTH_TOKEN**, **APP_ID** (generated in the first step) and **TEST_SUITE_ID** (generated in the second step) in the below command.

```yaml
curl --location --request POST 'https://mobile-api.lambdatest.com/framework/v1/xcui/build' \
--header 'Authorization: Basic BASIC_AUTH_TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{
"app" : "lt://APP_ID",
"testSuite": "lt://TEST_SUITE_ID",
"xctestplan" : "lt://YOUR_XC_TEST_PLAN_ID" #only when you want to use XCTestPlan
"device" :  ["iPhone 11-14"],
"video" : true,
"queueTimeout": 10800,
"idleTimeout": 150,
"devicelog": true,
"network": false,
"build" : "Proverbial-XCUITest"
}'
```

```yaml
curl --location --request POST "https://mobile-api.lambdatest.com/framework/v1/xcui/build" \
--header "Authorization: Basic BASIC_AUTH_TOKEN" \
--header "Content-Type: application/json" \
--data-raw "{
"app" : "lt://APP_ID",
"testSuite": "lt://TEST_SUITE_ID",
"xctestplan" : "lt://YOUR_XC_TEST_PLAN_ID" #only when you want to use XCTestPlan
"device" :  ["iPhone 11-14"],
"video" : true,
"queueTimeout": 10800,
"idleTimeout": 150,
"devicelog": true,
"network": false,
"build" : "Proverbial-XCUITest"
}"
```

## Step 4: View Test Execution

Once you have run your tests, you can view the test execution along with logs. You will be able to see the test cases passing or failing. You can view the same at TestMu AI Automation.

> **NOTE:** You cannot use XCTestPlan and [Filters](/support/docs/speedup-xcui/) simultaneously

To learn how to use XCTestPlan with sharding in XCUI, refer to the detailed guide in [Sharding for XCUI](/support/docs/sharding-rd-hyperexec/#xctestplan-in-sharding).
