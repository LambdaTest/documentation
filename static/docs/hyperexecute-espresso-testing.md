# Espresso Testing On HyperExecute

This page outlines how to execute your Espresso tests on HyperExecute with [YAML 0.2](/support/docs/hyperexecute-yaml-version0.2/)

## Prerequisites

To run the Tests on HyperExecute from your Local System, you are required:

- Your TestMu AI [Username and Access key](/support/docs/hyperexecute-how-to-get-my-username-and-access-key/)
- [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) in order to initiate a test execution Job .
- Setup the [Environmental Variable](/support/docs/hyperexecute-environment-variable-setup/)
- [HyperExecute YAML](/support/docs/hyperexecute-yaml-version0.2/) file which contains all the necessary instructions.
- An Android app (.apk or .aab file).

## Step 1: Setup Your Test Suite

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

**Sample repo**

Download or Clone the code sample for the Espresso framework from the TestMu AI GitHub repository to run the tests on the HyperExecute.

 View on GitHub

## Step 2: Setup the CLI in your Test Suite

After cloning / downloading the sample repo, you need to setup the CLI and the environment variables.

### Download the HyperExecute CLI

The CLI is used for triggering the tests on HyperExecute. It is recommend to download the CLI binary on the host system and keep it in the root directory of the suite to perform the tests on HyperExecute.

You can download the CLI for your desired platform from the below mentioned links:

| Platform | HyperExecute CLI |
| ---------| ---------------- |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| MacOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |

### Setup Environment Variable

Now, you need to export your environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in the [TestMu AI Profile page](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/details/profile).

Run the below mentioned commands in your terminal to setup the CLI and the environment variables.

  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

  {`set LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
set LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

## Step 3: Upload your Application

Upload your _android_ application (.apk file) to the TestMu AI servers using our REST API. You need to provide your Username and AccessKey in the format `Username:AccessKey` in the cURL command for authentication.

Enter your local path of your android app instead of `` in the below cURL command.

{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "appFile=@""" -F "name="sampleApp""
`}

> Response of above cURL will be a **JSON** object containing the `App ID` of the format - `` and will be used in the next step.

## Step 4: Upload your Test Suite

Upload your **test suite (.apk file)** to the TestMu AI servers using our REST API by providing your **Username** and **AccessKey** in the format `Username:AccessKey` in the cURL command for authentication.

Here is an example cURL request to upload your app using our REST API:

Enter your local path of your test suite app instead of `` in the below cURL command.

## Step 5: Configure YAML in your Test Suite

Enter your `` and `` in the YAML file that you have fetched in the above step.

```yaml
---
version: "0.2"
globalTimeout: 150
testSuiteTimeout: 150
testSuiteStep: 150

concurrency: 2

runson: android

autosplit: true

report: true #to generate reports

framework:
name: "android/espresso"
args:
buildName: "Espresso"
video: true
deviceLog: true
artifacts: true #to generate artifacts

# You can use either the appId (lt://APP1234567) or provide the path of the application using appPath. Both examples are given below.
appPath: proverbial_android.apk
testSuitePath: proverbial_android_expressotest.apk
# We have used the appPath and testSuitePath here.

# highlight-next-line
appId: lt://<APP_ID>
# highlight-next-line
testSuiteAppId: lt://<TEST_SUITE_ID>
# We have used the appId and testSuiteAppID here.

deviceSelectionStrategy: all
devices: ["Galaxy.*", "Pixel.*"]

jobLabel: ['HYP', 'Espresso', 'Auto Sharding']
```

You can use either the `appId` and `testSuiteAppId` or provide the path of the application using `appPath` and `testSuitePath`. Both examples are given below.

```yaml
---
version: "0.2"
globalTimeout: 150
testSuiteTimeout: 150
testSuiteStep: 150

concurrency: 2

runson: android

autosplit: false

report: true #to generate reports

framework:
name: android/espresso
args:
buildName: Espresso
video: true
deviceLog: true
artifacts: true #to generate artifacts

# highlight-next-line
appPath: proverbial_android.apk
# highlight-next-line
testSuitePath: proverbial_android_expressotest.apk # We have used the appPath and testSuitePath here.
# highlight-next-line
appId: lt://APP123456789
# highlight-next-line
testSuiteAppId: lt://APP123456789 # We have used the appId and testSuiteAppID here.
deviceSelectionStrategy: all
devices:
- Galaxy.*
- Pixel.*
shards:
mappings:
- name: shard1
strategy: class
values:
- com.lambdatest.proverbial.BrowserTest
# The strategy for this shard is based on "class".
# This shard will run all tests from the class com.lambdatest.proverbial.BrowserTest.
- name: shard2
strategy: package
values:
- com.lambdatest.proverbial
# The strategy for this shard is based on "package".
# This shard will run all tests that belong to the package com.lambdatest.proverbial.l.
- name: shard3
strategy: skipClass
values:
- com.lambdatest.proverbial.BrowserTest
# The strategy for this shard is to skip a specific class.
# This shard will avoid running tests from the class com.lambdatest.proverbial.BrowserTest.

jobLabel: ['HYP', 'Espresso', 'Manual Sharding']
```

**info**
- The **uploadArtefact** flag is currently not available for Espresso framework tests.
- To run **adb commands** in the **pre** and **post-steps**, include the following two flags in your YAML file: To execute it, you must have purchased an equivalent number of parallels for both HyperExecute and Real Device.

```yaml
privateCloud: true
preservedDevice: true
```

## Step 6: Generate Reports and Artifacts
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

## Step 7: Execute your Test Suite

> **NOTE :** In case of MacOS, if you get a permission denied warning while executing CLI, simply run **`chmod u+x ./hyperexecute`** to allow permission. In case you get a security popup, allow it from your **System Preferences** → **Security & Privacy** → **General tab**.

Run the below command in your terminal at the root folder of the project:

```bash
./hyperexecute --config RELATIVE_PATH_OF_YOUR_YAML_FILE --download-artifacts --download-report
```

OR use this command if you have not exported your username and access key in the step 2.

    {`./hyperexecute --user ${ YOUR_LAMBDATEST_USERNAME()} --key ${ YOUR_LAMBDATEST_ACCESS_KEY()} --config RELATIVE_PATH_OF_YOUR_YAML_FILE --download-artifacts --download-report`}

> Visit the [HyperExecute Dashboard](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/hyperexecute) and check your Job status.

**Troubleshoot Guide**

If you are stumbling upon errors during Espresso test execution, then refer to the [**Espresso Troubleshoot**](/support/docs/troubleshoot-espresso-tests/#sharded-espresso-errors) guide for detailed explanations to your common errors.

## Additional Details

### Sharding

**Sharding** is a mobile test automation technique that distributes test cases across multiple real and virtual devices via parallel testing. It entails breaking down test suites into smaller subsets known as shards and running each shard concurrently on separate test execution environments.

There are two types of Sharding:

### Manual Sharding
This feature enables users to manually specify shards along with their definitions, offering multiple strategies such as class, package, and more. By doing so, users can have greater flexibility and control over the sharding process.

### Auto Sharding
The system intelligently determines the distribution of tests across devices, employing specific criteria to optimize the testing process.

- **When Shards are added :**
   - If you are using the `deviceSelectionStrategy: all`,then in that case all the specified shards will be executed on every device available.

   - If you are using the `deviceSelectionStrategy: any`, then in that case all the specified shards will be executed on just one device from the provided list.

- **When Shards are not added :**
   - If you are using the `deviceSelectionStrategy: all`, then in that case the tests will be executed on all mentioned devices in `.yaml` based on the concurrency.

   - If you are using the `deviceSelectionStrategy: any`, then in that case all the specified tests will be executed on each device from the provided list, considering the concurrency setting.

## Conclusion
By following the instructions in this documentation, you can seamlessly execute the Espresso tests on HyperExecute, leveraging its secure cloud infrastructure, advanced features, and optimized test execution workflow.

## Using the Espresso Agent Skill with TestMu AI

The [espresso-skill](https://github.com/LambdaTest/agent-skills/tree/main/espresso-skill) is a part of [TestMu AI Skills](https://github.com/LambdaTest/agent-skills/) that guide AI coding assistants in generating production-ready test automation.

The espresso-skill package includes:

```
espresso-skill/
├── SKILL.md
└── reference/
├── playbook.md
└── advanced-patterns.md
```

It provides structured guidance for:

* Project structure and setup
* Dependency configuration
* Local execution
* TestMu AI cloud execution
* Debugging patterns
* CI/CD integration

### Installing Espresso Agent Skill

Install a Espresso Agent Skill using the command below:

```
# Clone the repo and copy the skill you need
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/espresso-skill .claude/skills/

# Or for Cursor / Copilot
cp -r agent-skills/espresso-skill .cursor/skills/
```

**Note**: If you prefer installing all available framework skills instead of only espresso-skill, clone the repository directly into your tool's skills directory (for example, .claude/skills/, .cursor/skills/, .gemini/skills/, or .agent/skills/).
