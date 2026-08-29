# How to Shard Espresso Tests on TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Sharding Espresso tests on TestMu AI splits your suite into shards that run in parallel across real devices with HyperExecute, cutting total execution time. Configure a simple YAML file to distribute tests, orchestrate runs, and review results on the dashboard.

**Supported on:** Real &amp; Virtual devices

Running **Espresso** tests sequentially can be laborious and time-intensive. This guide offers an efficient solution by introducing the concept of **sharding**. By breaking down tests into shards, they can be executed in parallel, significantly trimming down the total testing duration.

**HyperExecute** is a test orchestration platform that executes Espresso end-to-end tests on real devices at high speed, configured through a `YAML` file.

**Note**
You can learn more about the HyperExecute portal and UI by going through our [Guided Walkthrough](/support/docs/hyperexecute-guided-walkthrough/) page. It contains all the relevant information that you need to optimize your testing process with HyperExecute.


## Objectives



By the end of this topic, you will be able to:
1. Speed up your Espresso tests with sharding
2. Learn more about HyperExecute
3. Explore advanced features of TestMu AI

## Prerequisites



Before you start performing your App automation testing with Espresso, please make sure:

- You have access to TestMu AI username and accessKey. If you have not registered yet, you can do the same by visiting our website. You will be able to access the credentials at the [TestMu AI Profile](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/details/profile)
- Make sure you have App Automation Cloud plans on your account.


## Uploading your App & Test suite

### Step 1: Upload Your Application

Upload your **android** application (.apk file) to the TestMu AI servers using our **REST API**. You need to provide your **Username** and **AccessKey** in the format ```Username:AccessKey``` in the **cURL** command for authentication. Make sure to add the path of the **appFile** in the cURL request.

Here is an example cURL request to upload your app using our REST API:


**Using App File:**







  {`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" \\
--location --request POST 'https://manual-api.lambdatest.com/app/uploadFramework' \\
--form 'appFile=@"/Users/macuser/Downloads/proverbial.apk"' \\
--form 'type="espresso-android"'`}









{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/uploadFramework" -F "appFile=@"/Users/macuser/Downloads/proverbial.apk"" -F "type="espresso-android""`}








>Response of above cURL will be a **JSON** object containing the `App URL` of the format - `lt://APP123456789123456789` and will be used in the last step as `appId`.



### Step 2: Uploading Test Suite

Upload your **test suite** (.apk file) to the TestMu AI servers using our **REST API**. You need to provide your **Username** and **AccessKey** in the format `Username:AccessKey` in the **cURL** command for authentication. Make sure to add the path of the **appFile** in the cURL request. Here is an example cURL request to upload your app using our REST API:

**Using App File:**







  {`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" \\
--location --request POST 'https://manual-api.lambdatest.com/app/uploadFramework' \
--form 'appFile=@"/Users/macuser/Downloads/ProverbialEspressoTest.apk"' \
--form 'type="espresso-android"'`}









{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST "https://manual-api.lambdatest.com/app/uploadFramework" --form "appFile=@"C:/Users/varunkumarb/Downloads/ProverbialEspressoTest.apk"" --form "type=\"espresso-android\""`}







>Response of above cURL will be a **JSON** object containing the `App URL` of the format - `lt://APP123456789123456789` and will be used in the next step as ``testSuiteAppId``


## How to use Sharding



1. Firstly, create a folder on your local.
2. Download the **HyperExecute CLI** file and put it under this folder based on your platform.
#### Download HyperExecute CLI

| Platform | HyperExecute CLI download location |
| ---------| --------------------------- |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| macOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |


## Types of Sharding
Sharding can be categorized into two types:

**Manual Sharding**: This feature enables users to manually specify shards along with their definitions, offering multiple strategies such as class, package, and more. By doing so, users can have greater flexibility and control over the sharding process.

Refer to the sample `.yaml` file here







```yaml title="SampleYamlFile.yaml"
version: "0.2"
concurrency: 2
runson: android

# Set autosplit to true to enable auto sharding.
# The system will automatically split and distribute tests across the selected devices.
#highlight-next-line
autosplit: false

globalTimeout: 180 #MAXQUEUETIMEOUT

framework:
name: "android/espresso"
args:
buildName: "Espresso"
video: true
deviceLog: true

# You can use either the appId (lt://APP1234567) or provide the path of the application using appPath.
# Both examples are given below.

appPath: Proverbial.apk
testSuitePath: ProverbialExpressoTest.apk
# We have used the appPath and testSuitePath here.

appId: lt://APP1016025651781520733656681
testSuiteAppId: lt://APP10160332171784881008900412
# We have used the appId and testSuiteAppID here.

deviceSelectionStrategy: all
devices: ["Galaxy.*", "Pixel.*"]

shards:
mappings:
- name: shard1
strategy: "class"
values:
- "com.lambdatest.proverbial.BrowserTest"
# The strategy for this shard is based on "class".
# This shard will run all tests from the class com.lambdatest.proverbial.BrowserTest.

- name: shard2
strategy: "package"
values:
- "com.lambdatest.proverbial"
# The strategy for this shard is based on "package".
# This shard will run all tests that belong to the package com.lambdatest.proverbial.

- name: shard3
strategy: "skipClass"
values:
- "com.lambdatest.proverbial.BrowserTest"
# The strategy for this shard is to skip a specific class.
# This shard will avoid running tests from the class com.lambdatest.proverbial.BrowserTest.
```









```yaml title="SampleYamlFile.yaml"
version: "0.2"
concurrency: 2
runson: android

# Set autosplit to true to enable auto sharding.
# The system will automatically split and distribute tests across the selected devices.
#highlight-next-line
autosplit: false

globalTimeout: 180 #MAXQUEUETIMEOUT

framework:
name: "android/espresso"
args:
buildName: "Espresso"
video: true
deviceLog: true

# You can use either the appId (lt://APP1234567) or provide the path of the application using appPath.
# Both examples are given below.

appPath: Proverbial.apk
testSuitePath: ProverbialExpressoTest.apk
# We have used the appPath and testSuitePath here.

appId: lt://APP1016025651781520733656681
testSuiteAppId: lt://APP10160332171784881008900412
# We have used the appId and testSuiteAppID here.

deviceSelectionStrategy: all
devices: ["Galaxy.*", "Pixel.*"]

#highlight-next-line
isVirtualDevice: true

shards:
mappings:
- name: shard1
strategy: "class"
values:
- "com.lambdatest.proverbial.BrowserTest"
# The strategy for this shard is based on "class".
# This shard will run all tests from the class com.lambdatest.proverbial.BrowserTest.

- name: shard2
strategy: "package"
values:
- "com.lambdatest.proverbial"
# The strategy for this shard is based on "package".
# This shard will run all tests that belong to the package com.lambdatest.proverbial.

- name: shard3
strategy: "skipClass"
values:
- "com.lambdatest.proverbial.BrowserTest"
# The strategy for this shard is to skip a specific class.
# This shard will avoid running tests from the class com.lambdatest.proverbial.BrowserTest.
```








**When shards are added**

If you are using the `deviceSelectionStrategy: all`,then in that case all the specified shards will be executed on every device available.
**For example:** If there are 3 shards, 2 devices in list (d1, d2) and test suites contains total 10 test cases.
Then, d1 has 3 shards, i.e., total 3 devices of d1 configuration will be used. 10 test cases distributed among these 3 shards and similarly d2 also has 3 shards, i.e., total 3 devices of d2 configuration will be used. 10 test cases will be distributed among these 3 shards.

If you are using the `deviceSelectionStrategy: any`, then in that case all the mentioned shards will be executed on just one device from the provided list.
**For example:** If there are 2 shards mentioned in `.yaml`and 3 devices mentioned, the system will create 2 shards. These shards might use any 2 devices from the given 3 configurations. It's also possible that the same device configuration could be used for both shards. In this setup, test cases will be distributed between these shards.





**Auto Sharding** : The system intelligently determines the distribution of tests across devices, employing specific criteria to optimize the testing process.

Refer to the sample `.yaml` file here







```yaml title="SampleYamlFile.yaml"
version: "0.2"
concurrency: 2
runson: android

# Set autosplit to true to enable auto sharding.
# The system will automatically split and distribute tests across the selected devices.
#highlight-next-line
autosplit: true

globalTimeout: 180 #MAXQUEUETIMEOUT

framework:
name: "android/espresso"
args:
buildName: "Espresso"
video: true
deviceLog: true

# You can use either the appId (lt://APP1234567) or provide the path of the application using appPath.
# Both examples are given below.

appPath: Proverbial.apk
testSuitePath: ProverbialExpressoTest.apk
# We have used the appPath and testSuitePath here.

appId: lt://APP1016025651781520733656681
testSuiteAppId: lt://APP10160332171784881008900412
# We have used the appId and testSuiteAppID here.

deviceSelectionStrategy: all
devices: ["Galaxy.*", "Pixel.*"]
```









```yaml title="SampleYamlFile.yaml"
version: "0.2"
concurrency: 2
runson: android

# Set autosplit to true to enable auto sharding.
# The system will automatically split and distribute tests across the selected devices.
#highlight-next-line
autosplit: true

globalTimeout: 180 #MAXQUEUETIMEOUT

framework:
name: "android/espresso"
args:
buildName: "Espresso"
video: true
deviceLog: true

# You can use either the appId (lt://APP1234567) or provide the path of the application using appPath.
# Both examples are given below.

appPath: Proverbial.apk
testSuitePath: ProverbialExpressoTest.apk
# We have used the appPath and testSuitePath here.

appId: lt://APP1016025651781520733656681
testSuiteAppId: lt://APP10160332171784881008900412
# We have used the appId and testSuiteAppID here.

#highlight-next-line
isVirtualDevice: true

deviceSelectionStrategy: all
devices: ["Galaxy.*", "Pixel.*"]
```








**When shards aren't added**

If you are using the `deviceSelectionStrategy: all`, then in that case the tests will be executed on all mentioned devices in `.yaml` based on the concurrency.
**For example:** If the concurrency is 3, 2 devices in list (d1, d2) and test suites contains total 10 test cases.
Then, d1 has 3 shards, i.e., total 3 devices of d1 configuration will be used. 10 test cases distributed among these 3 shards and similarly d2 also has 3 shards, i.e., total 3 devices of d2 configuration will be used. 10 test cases will be distributed among these 3 shards.

If you are using the `deviceSelectionStrategy: any`, then in that case all the specified tests will be executed on each device from the provided list, considering the concurrency setting.
**For example:** If the concurrency is set to 2 and 3 devices mentioned, the system will create 2 shards. These shards might use any 2 devices from the given 3 configurations. It's also possible that the same device configuration could be used for both shards. In this setup, test cases will be distributed between these shards.




4. Go to the location of the folder on the terminal and run the below commands. After the second command, you may need to give permission on **System Settings/Privacy & Security**.

```bash
chmod u+x <cliFileNAme>
./<cliFileNAme> -user <userName> -key <accessKey> --verbose -i <yamlFileName>.yaml
```

You can refer to this example and screenshot below:
```
./hyperexecute -user my_user_name -key xyx123abc --verbose -i hyperexecute.yaml
```



5. After the test is started you can follow the test on the below links.
- [TestMu AI Automation](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/build)

- [TestMu AI HyperExecute](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/hyperexecute)



**globalTimeout** ​ The globalTimeout value determines the maximum duration (in minutes) of a Job . It can be set between 5 and 180 minutes, and has a default value of 10 minutes.


## Filters in Sharding

You can filter the Classes / Tests that you'd like to execute using filters. Here's an example of the same.

```java
filters:
attributes:
- type: class
values: ["com.lambdatest.proverbial.BrowserTest","com.lambdatest.proverbial.MainActivityTest"]
- type: package
values: ["com.lambdatest.proverbial"]
```


This example will fetch all the test cases from 2 classes and 1 package as defined above and divide them with respect to concurrency given in the yaml file.

## Annotations in Sharding

You can also filter your Espresso tests based on annotations while using sharding. This helps you execute only the test cases marked with specific annotations.

```yaml
filters:
attributes:
- type: annotation
values: ["com.lambdatest.proverbial.demo1", "com.lambdatest.proverbial.demo2"]
```


This configuration will run tests annotated with multiple annotations, i.e., only the intersection of all mentioned annotations will be considered.


## Generate Reports and Artifacts
To generate artifacts for your Espresso tests, add the `artifacts: true`, and `report: true` flag in your YAML file:

```yaml
report: true
framework:
name: "android/espresso"
args:
artifacts: true
...//
```

To download these artifacts in your local machine, you can pass the `--download-artifacts` and `--download-report` flag with the CLI command to execute the tests as shown in the next step.

> Learn more about it in the [HyperExecute Espresso Documentation](/support/docs/hyperexecute-espresso-testing/)


## Additional Links



- [Advanced Configuration for Capabilities](/support/docs/desired-capabilities-in-appium/)
- [How to test locally hosted apps](/support/docs/testing-locally-hosted-pages/)
- [How to integrate TestMu AI with CI/CD](/support/docs/integrations-with-ci-cd-tools/)
