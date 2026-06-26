---
id: hyperexecute-maestro-testing
title: Execute Maestro Framework Tests on HyperExecute
sidebar_label: Maestro
description: Follow the instructions in this documentation, so that you can seamlessly execute Maestro tests on HyperExecute via TestMu AI.
keywords:
  - maestro
  - raw
  - java
  - testmu ai java
  - framework on testmu ai
  - testng
  - app testing
  - real devices
url: https://www.testmuai.com/support/docs/hyperexecute-maestro-testing/
site_name: TestMu AI
slug: hyperexecute-maestro-testing/
canonical: https://www.testmuai.com/support/docs/hyperexecute-maestro-testing/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Getting Started With Maestro Testing on TestMu AI",
          "item": `${BRAND_URL}/support/docs/hyperexecute-maestro-testing/`
        }]
      })
    }}
></script>

This page outlines how to execute your Maestro tests on HyperExecute with [YAML 0.2](/support/docs/hyperexecute-yaml-version0.2/)

## Prerequisites
To run the Tests on HyperExecute from your Local System, you are required:

- Your <BrandName /> [Username and Access key](/support/docs/hyperexecute-how-to-get-my-username-and-access-key/)
- [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) in order to initiate a test execution Job .
- Setup the [Environmental Variable](/support/docs/hyperexecute-environment-variable-setup/)
- [HyperExecute YAML](/support/docs/hyperexecute-yaml-version0.2/) file which contains all the necessary instructions.

## Step 1: Setup Your Test Suite
You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
Download or Clone the code sample for the Maestro framework from the <BrandName /> GitHub repository to run the tests on the HyperExecute.
<a href="https://github.com/LambdaTest/hyperexecute-maestro-sample-test" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

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

## Step 3: Upload your Application
Upload your <b>_android_</b> application (.apk file) or <b>iOS</b> application (.ipa file) to the <BrandName /> servers using our <b>REST API</b>. You need to provide your <b>Username</b> and <b>AccessKey</b> in the format `Username:AccessKey` in the <b>cURL</b> command for authentication.

:::info
Enter your local path of the code repository instead of `<YOUR_LOCAL_APP_PATH>` in the below cURL command.
:::

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "appFile=@"<YOUR_LOCAL_APP_PATH>"" -F "name="sampleApp""
`}
</CodeBlock>
</div>

> Response of above cURL will be a **JSON** object containing the `App ID` of the format - `<APP123456789012345678901234567>` and will be used in the next step.

## Step 4: Configure YAML in your Test Suite
Enter your `APP_ID` in the YAML file that you have fetched in the above step.

<Tabs className="docs__val">
<TabItem value="android-emu" label="Android-Emulator" default>

> To enable this for your organizaton, connect with us through our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 chat support**</span> or drop us an email to [support@testmuai.com](mailto:support@testmuai.com).

```yaml reference title="hyperexecute.yaml"
https://github.com/LambdaTest/hyperexecute-maestro-sample-test/blob/main/yaml/android/android-emulator.yaml
```
</TabItem>

<TabItem value="android-rd" label="Android-Real Device">

```yaml reference title="hyperexecute.yaml"
https://github.com/LambdaTest/hyperexecute-maestro-sample-test/blob/main/yaml/android/android-realdevice.yaml
```
</TabItem>

<TabItem value="ios-simu" label="iOS-Simulator">

> To enable this for your organizaton, connect with us through our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 chat support**</span> or drop us an email to [support@testmuai.com](mailto:support@testmuai.com).

```yaml reference title="hyperexecute.yaml"
https://github.com/LambdaTest/hyperexecute-maestro-sample-test/blob/main/yaml/ios/ios-simulator.yaml
```
</TabItem>

</Tabs>
> HyperExecute now supports [tunnel capabilities](/support/docs/hyperexecute-how-to-configure-tunnel/) for Maestro tests running on both virtual devices and real devices using the Raw Framework configuration.

### Run Tests on iOS Virtual Devices
To run tests on iOS Virtual Devices, make the following changes in your `hyperexecute.yaml` file:

- Change the `runson` key to `ios26`.
- Set the `devices` array to `["iPhone 17"]`.

Here is the complete `hyperexecute.yaml` for running Maestro tests on iOS Virtual Devices:

```yaml title="hyperexecute.yaml"
# Define the version of the configuration file
version: "0.2"

# Enable autosplit for test execution
autosplit: true

# Set the concurrency level for test execution (2 devices in parallel)
concurrency: 2

# Specify the target platform for test execution (iOS in this case)
# runson: ios
runson: ios26

# Enable dynamic allocation of resources
dynamicAllocation: true

# Test framework configuration
framework:
  # Name of the test framework (raw in this case)
  name: raw
  args:
    # List of devices to run tests on (iPhone 17 on iOS 26.0 in this case)
    # devices: [".*-.*", ".*-.*", ".*-.*"]
    devices: ["iPhone 17"]
    # devices: [".*-26.0"]
    # Enable or disable video recording support
    video: true
    # Enable or disable device log support
    deviceLog: true
    # App ID to be installed (mandatory field, using <app_id>)
    # x86 build
    # appId: lt://APP10160362031781245339521143 #Need to upload .zip file
    # ARM Build for iOS 26.0 & above
    appId: lt://APP123456789012345678901234567
    # Build name for identification on the automation dashboard
    buildName: maestro-t1
    # Timeout for device queue
    queueTimeout: 600
    # Configuration fields specific to running raw tests
    # region: ap
    disableReleaseDevice: true
    reservation: false
    isRealMobile: false
    network: true
    platformName: ios

env:
  MAESTRO: true
  MAESTRO_LOGS_DIR: MaestroLogs

# Pre-install required dependencies using pip
# will need java and maestro inside the container
pre:
  - chmod +x maestro-test/setup-script-iOS.sh
  - chmod +x ./maestro-test/runTest_ios.sh
  - ./maestro-test/setup-script-iOS.sh

# Test discovery configuration
testDiscovery:
  # Command to discover tests from the test.txt file
  command: cat ./maestro-test/discover-iOS.txt
  # Test discovery mode can be static/dynamic
  mode: static
  # Test type is raw (custom test implementation)
  type: raw

# Command to run the tests using the testRunnerCommand
testRunnerCommand: ./maestro-test/runTest_ios.sh $test 
    
# Only report the status of the test framework
frameworkStatusOnly: true

report: true
partialReports:
  - location: .
    type: xml
    frameworkName: junit

jobLabel: ['HYP', 'Maestro', 'iOS', Simulator]
```

:::note
Ensure that the app is built for ARM or Universal (Dual-Architecture) and not as an x86-only binary. As shown in the `appId` field above, use the ARM build for iOS 26.0 and above.
:::

## Step 5: Generate JUnit XML Report
1. Update the `runTest.sh` file to include the `--format junit` flag in the maestro test command:

```yaml
/home/ltuser/.maestro/bin/maestro test $1 --debug-output ./MaestroLogs --format junit
```

The above command will generate a `report.xml` file in the root directory after each test execution. Here is the complete reference of the `runTest.sh` file:

```yaml reference
https://github.com/LambdaTest/hyperexecute-maestro-sample-test/blob/main/maestro-test/runTest.sh
```
When running on iOS real devices, you need to use a dedicated script since the execution flow differs slightly from iOS simulators and Android.

```yaml reference
https://github.com/LambdaTest/hyperexecute-maestro-sample-test/blob/main/maestro-test/runTest_ios_realdevice.sh
```

2. Update your HyperExecute YAML file to enable the native reporting in HyperExecute using the generated JUnit XML files.

```yaml title="hyperexecute.yaml"
report: true
partialReports:
  - location: .
    type: xml
    frameworkName: junit
```

### 📘 Use Cases
#### Use Case 1: One Test per Task
If you're executing one test per task, a single `report.xml` will be generated per job. These individual reports can then be merged later for a consolidated result.

#### Use Case 2: Multiple Tests on the same Task
In this case, the `report.xml` file gets overwritten after each test execution. This results in only the last test's results being preserved. To prevent overwriting, update your `testRunnerCommand` in the `hyperexecute.yaml` file to rename the report after each test:

```yaml title="hyperexecute.yaml"
testRunnerCommand: ./maestro-test/runTest.sh $test && mv report.xml $test.xml 
```

This ensures that each test result is saved with a unique name like test1.xml, test2.xml, etc.

## Step 6: Execute your Test Suite
> **NOTE :** In case of MacOS, if you get a permission denied warning while executing CLI, simply run **`chmod u+x ./hyperexecute`** to allow permission. In case you get a security popup, allow it from your **System Preferences** → **Security & Privacy** → **General tab**.

<div className="lambdatest__codeblock">
  <CodeBlock className="language-bash">
    {`./hyperexecute --user ${ YOUR_LAMBDATEST_USERNAME()} --key ${ YOUR_LAMBDATEST_ACCESS_KEY()} --config RELATIVE_PATH_OF_YOUR_YAML_FILE `}
  </CodeBlock>
</div>

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/maestro/1.png').default} alt="JUnit HyperExecute Terminal Logs"  width="1920" height="868" className="doc_img"/>

## Step 7: Monitor the Test Execution
Visit the [HyperExecute Dashboard](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/hyperexecute) and check your Job status. 

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/maestro/2.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>


## Additional Information: Launching Pre-Installed Apps with Maestro
In some cases, you may want to test against a pre-installed application on the device (instead of uploading and installing a new APK/IPA). Maestro supports this by allowing you to specify the app’s package identifier (Android) or bundle identifier (iOS) in your test configuration.

### Step 1: Identify the App ID (Package Name / Bundle ID)
#### For Android:
  - Visit the app’s page on the Google Play Store.
  - The id parameter in the URL is the package name.
  - Example: For the Wikipedia app → `org.wikipedia`.

#### For iOS:
  - Identify the bundle identifier (e.g., com.apple.Preferences for Settings).

### Step 2: Update Your HyperExecute Configuration
You can configure your YAML files to launch the pre-installed app instead of uploading a new one.

```yaml title="hyperexecute.yaml"
...//
framework:
  name: raw
  args:
    #highlight-next-line
    appId: stock
```

and the launcher yaml file to tells maestro to use the pre-installed Wikipedia app.

```yaml reference title="android-launch.yaml"
https://github.com/LambdaTest/hyperexecute-maestro-sample-test/blob/main/android-launch.yaml
```

### Step 3: Execute your Test Suite
> **NOTE :** In case of MacOS, if you get a permission denied warning while executing CLI, simply run **`chmod u+x ./hyperexecute`** to allow permission. In case you get a security popup, allow it from your **System Preferences** → **Security & Privacy** → **General tab**.

<div className="lambdatest__codeblock">
  <CodeBlock className="language-bash">
    {`./hyperexecute --user ${ YOUR_LAMBDATEST_USERNAME()} --key ${ YOUR_LAMBDATEST_ACCESS_KEY()} --config RELATIVE_PATH_OF_YOUR_YAML_FILE `}
  </CodeBlock>
</div>

The Wikipedia app will open directly on the device, and your Maestro test steps will execute against it.

**Example: Wikipedia Search Flow**

```yaml title="android-launch.yaml"
appId: org.wikipedia
----
launchApp

tapOn: "Search Wikipedia"
inputText: "Maestro framework"
pressKey: Enter
assertVisible: "Mobile UI testing"
```

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/maestro/3.png').default} alt="Image"  className="doc_img"/>

**Explanation:**

- **launchApp:**  Opens the Wikipedia app.
- **tapOn:** "Search Wikipedia" → Focuses the search bar.
- **inputText:** "Maestro framework" → Enters the text.
- **pressKey:** Enter → Submits the search.
- **assertVisible:** "Mobile UI testing" → Validates results.

### Best Practices
- Make sure the app is already installed on the device; otherwise, Maestro cannot launch it.
- The same approach works for iOS using the bundle identifier.
- You can also switch between multiple apps in a single flow by providing different appId values in separate steps.
