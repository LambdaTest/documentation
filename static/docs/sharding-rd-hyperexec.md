# How to Shard XCUI Tests on TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Sharding XCUI tests on TestMu AI splits a sequential suite into shards that run in parallel across real devices, cutting execution time. HyperExecute, configured through a YAML file, orchestrates the shards so your end-to-end iOS tests finish much faster overall.

**Supported on:** Real &amp; Virtual devices

**HyperExecute** is a smart test orchestration platform that runs XCUI end-to-end tests on real devices at the fastest speed possible, configured using a YAML file.

**Note**
You can learn more about the HyperExecute portal and UI by going through our [Guided Walkthrough](/support/docs/hyperexecute-guided-walkthrough/) page. It contains all the relevant information that you need to optimise your testing process with HyperExecute.

## Objectives

By the end of this topic, you will be able to:
1. Speed up your XCUI tests with sharding
2. Learn more about HyperExecute
3. Explore advanced features of TestMu AI

## Prerequisites

Before you start performing your App automation testing with XCUI, please make sure:

- You have access to TestMu AI username and accessKey. If you have not registered yet, you can do the same by visiting our website. You will be able to access the credentials at the [TestMu AI Profile](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/details/profile)
- Make sure you have App Automation and HyperExecute Cloud plans on your account.

## Uploading your App & Test suite

### Step 1: Upload Your Application

Upload your **iOS** application (.ipa file) to the TestMu AI servers using our **REST API**. You need to provide your **Username** and **AccessKey** in the format ```Username:AccessKey``` in the **cURL** command for authentication. Make sure to add the path of the **appFile** in the cURL request.

Here is an example cURL request to upload your app using our REST API:

**Using App File:**

  {`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" \\
--location --request POST 'https://manual-api.lambdatest.com/app/uploadFramework' \\
--form 'appFile=@"/Users/macuser/Downloads/proverbial.ipa"' \\
--form 'type="xcuit-ios"'`}

{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/uploadFramework" -F "appFile=@"/Users/macuser/Downloads/proverbial.ipa"" -F "type="xcuit-ios""`}

Response of above cURL will be a **JSON** object containing the `App URL` of the format - `APP123456789123456789` and will be used in the last step as `appId`.

### Step 2: Uploading Test Suite

Upload your **test suite** (.ipa file) to the TestMu AI servers using our **REST API**. You need to provide your **Username** and **AccessKey** in the format `Username:AccessKey` in the **cURL** command for authentication. Make sure to add the path of the **appFile** in the cURL request. Here is an example cURL request to upload your app using our REST API:

**Using App File:**

  {`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" \\
--location --request POST 'https://manual-api.lambdatest.com/app/uploadFramework' \
--form 'appFile=@"/Users/macuser/Downloads/proverbial_ios_xcuitest.ipa"' \
--form 'type="xcuit-ios"'`}

{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST "https://manual-api.lambdatest.com/app/uploadFramework" --form "appFile=@"C:/Users/varunkumarb/Downloads/proverbial_ios_xcuitest.ipa"" --form "type=\"xcuit-ios\""`}

Response of above cURL will be a **JSON** object containing the `App URL` of the format - `APP123456789123456789` and will be used in the next step as ``testSuiteAppId``

## How to use Sharding

1. Firstly, create a folder on your local.
2. Download the HyperExecute CLI file and put it under this folder. You may download HyperExecute CLI from either of the following ways:
- Download it from our HyperExecute documentation page [here](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/), or
- "Get Started" through HyperExecute [onboarding](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/quickstart) and download the CLI.
3. Refer to the sample `.ipa` files and `.yaml` file given below. Put all of them under this folder.
- [ProverbialTest.ipa](https://prod-mobile-artefacts.lambdatest.com/assets/docs/ProverbialTest.ipa)
- [LambdaUiKitIOS.ipa](https://prod-mobile-artefacts.lambdatest.com/assets/docs/LambdaUiKitIOS.ipa)

Refer to the sample `.yaml` file here

```yaml title="SampleYamlFile.yaml"
version: "0.2"
concurrency: 2
runson: ios

# Set autosplit to true to enable auto sharding.
# The system will automatically split and distribute tests across the selected devices.
#highlight-next-line
autosplit: false

maxRetries: 2
retryOnFailure: true
globalTimeout: 180 #MAXQUEUETIMEOUT

framework:
name: "ios/xcui"
args:
buildName: "XCUIT"
video: true
networkLog: true
deviceLog: true

# You can use either the appId (lt://APP1234567) or provide the path of the application using appPath.
# Both examples are given below.

appPath: ProverbialTest.ipa
testSuitePath: LambdaUiKitIOS.ipa
# We have used the appPath and testSuitePath here.

appId: lt://APP1010461471690377432133206
testSuiteAppId: lt://APP10104592261690377454846669
# We have used the appId and testSuiteAppID here.

deviceSelectionStrategy: all
devices: ["iPhone 12 Pro-14", "iPad Air (2019)-16"]

shards:
mappings:
- name: shard1
strategy: "only-testing/skip-testing"
values:
- "<className>/<className/testName>"
# The strategy for this shard is based on "only-testing/skip-testing".
# This shard will either execute only the specified test(s) or skip the specified test(s),
# depending on the strategy value configured.

- name: shard2
strategy: "only-testing/skip-testing"
values:
- "<className>/<className/testName>"
- "<className>/<className/testName>"
# The strategy for this shard is based on "only-testing/skip-testing".
# This shard will either execute only the specified test(s) or skip the specified test(s),
# depending on the strategy value configured.
```

```yaml title="SampleYamlFile.yaml"
version: "0.2"
concurrency: 2
runson: ios

# Set autosplit to true to enable auto sharding.
# The system will automatically split and distribute tests across the selected devices.
#highlight-next-line
autosplit: false

maxRetries: 2
retryOnFailure: true
globalTimeout: 180 #MAXQUEUETIMEOUT

framework:
name: "ios/xcui"
args:
buildName: "XCUIT"
video: true
networkLog: true
deviceLog: true

# You can use either the appId (lt://APP1234567) or provide the path of the application using appPath.
# Both examples are given below.

appPath: ProverbialTest.ipa
testSuitePath: LambdaUiKitIOS.ipa
# We have used the appPath and testSuitePath here.

appId: lt://APP1010461471690377432133206
testSuiteAppId: lt://APP10104592261690377454846669
# We have used the appId and testSuiteAppID here.

deviceSelectionStrategy: all
devices: ["iPhone 12 Pro-14", "iPad Air (2019)-16"]

#highlight-next-line
isVirtualDevice: true

shards:
mappings:
- name: shard1
strategy: "only-testing/skip-testing"
values:
- "<className>/<className/testName>"
# The strategy for this shard is based on "only-testing/skip-testing".
# This shard will either execute only the specified test(s) or skip the specified test(s),
# depending on the strategy value configured.

- name: shard2
strategy: "only-testing/skip-testing"
values:
- "<className>/<className/testName>"
- "<className>/<className/testName>"
# The strategy for this shard is based on "only-testing/skip-testing".
# This shard will either execute only the specified test(s) or skip the specified test(s),
# depending on the strategy value configured.
```

**When shards are added**

If you are using the `deviceSelectionStrategy: all`, then in that case all the mentioned shards will be executed on all the devices.
**For example:** There are 2 shards and 2 devices mentioned, then the 2 shards will be executed on 2 devices (2 Shards * 2 Devices).

If you are using the `deviceSelectionStrategy: any`, then in that case all the mentioned shards will be executed on any one device from the list provided.
**For example:** There are 2 shards and 2 devices mentioned, then the 2 shards will be executed on any device (2 shards * any device mentioned).

**When shards aren't added**

If you are using the `deviceSelectionStrategy: all`, then in that case all the tests will be executed on all the devices based on the concurrency.
**For example:** There are 6 tests and 10 devices mentioned, then the 6 tests will be auto distributed on the devices based on the max concurrency.

If you are using the `deviceSelectionStrategy: any`, then in that case all the mentioned tests will be executed on any one device from the list provided.
**For example:** There are 6 tests and 10 devices mentioned, then the 6 tests will be executed on any one device.

4. Go to the location of the folder on the terminal and run the below commands. After the second command, you may need to give permission on **System Settings/Privacy & Security**.

```bash
chmod u+x <cliFileNAme>
./<cliFileNAme> --u <userName> --k <accessKey> --verbose -i <yamlFileName>.yaml
```

You can refer to this example and screenshot below:
```
./hyperexecute --u my_user_name --k xyx123abc --verbose -i hyperexecute.yaml
```

5. After the test is started you can follow the test on the below links.
- [TestMu AI Automation](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/build)

- [TestMu AI HyperExecute](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/hyperexecute)

**globalTimeout** ​ The globalTimeout value determines the maximum duration (in minutes) of a Job . It can be set between 5 and 180 minutes, and has a default value of 10 minutes.

## Filters in Sharding
You can filter the Classes / Tests that you'd like to execute using filters.
Here's an example of the same.

```yaml
filters:
attributes:
- type: className
values: ["LambdaUiKitIOSUITests","LambdaUiKitIOSUITestsLaunchTests"]
- type: testName
values: ["LambdaUiKitIOSUITests/testverifyAppLaunch"]
```
This example will run only the 2 classes & one test as mentioned from the TestSuite.

## XCTestPlan in Sharding
To implement the XCTestPlan in Sharding, add the `xctestplan` flag along with `app` and `testSuite` in the [framework](/support/docs/deep-dive-into-hyperexecute-yaml/#hyperexecute-yaml-v02-framework-flags-and-discovery-config) flag as shown below:

```yaml
framework:
name: "ios/xcui"
args:
"app" : "lt://APP_ID",
"testSuite": "lt://TEST_SUITE_ID",
"xctestplan" : "lt://YOUR_XC_TEST_PLAN_ID" #only when you want to use XCTestPlan
```

> Refer the documentation to learn how to use [XCTestPlan feature](/support/docs/xctestplan/).

## Filters for XCUI Tests

Usually, all the test cases of your XCUI test suite are executed, but there is a way to filter these. You can specify some selected classes or tests, which provides you with options to filter the test cases which you want to execute.

To filter the test cases, you just need to pass the suitable parameters in TestMu AI’s REST API request. Refer to the table below to understand how to use various filters provided by TestMu AI.

Given below is the REST API endpoint:

```bash
curl --location --request POST 'https://mobile-api.lambdatest.com/framework/v1/xcui/build' \
--header 'Authorization: Basic BASIC_AUTH_TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{
"app" : "APP_ID",
"testSuite": "TEST_SUITE_ID",
"device" :  ["iPhone 11-14"],
"video" : true,
"queueTimeout": 10800,
"idleTimeout": 150,
"devicelog": true,
"network": false,
"build" : "Proverbial-XCUITest"
}'
```

| Parameters | Description | Values | Datatype |
|----------- | ----------- | ------ | -------- |
| `only-testing` Real &amp; Virtual| Allows the user to run only those tests/classes provided in the list | Values can be of the following format: className or className/testName. E.g. `["Class1/Test1", "Class2"]` | Array |
| `skip-testing`Real &amp; Virtual| Allows the user to run all the tests/classes except the ones provided in the list | Values can be of the following format: className or className/testName. E.g. `["Class1/Test1", "Class2"]` | Array |

**Note**
You can not use the following filters simultaneously.
- `only-testing` and `skip-testing`
- `xctestplan` and `only-testing`/`skip-testing`

## Additional Links
- [Advanced Configuration for Capabilities](/support/docs/desired-capabilities-in-appium/)
- [How to test locally hosted apps](/support/docs/testing-locally-hosted-pages/)
- [How to integrate TestMu AI with CI/CD](/support/docs/integrations-with-ci-cd-tools/)
