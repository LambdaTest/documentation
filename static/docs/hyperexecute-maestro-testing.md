# How to Run Maestro Tests on HyperExecute

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

\n\n\n\n```yaml reference title=\"hyperexecute.yaml\"\nhttps://github.com/LambdaTest/hyperexecute-maestro-sample-test/blob/main/yaml/android/android-realdevice.yaml"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 4: Configure YAML in your Test Suite (iOS-Simulator)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "<\/TabItem>\n\n<\/Tabs>\n> HyperExecute now supports [tunnel capabilities](/support/docs/hyperexecute-how-to-configure-tunnel/) for Maestro tests running on both virtual devices and real devices using the Raw Framework configuration.\n\n### Run Tests on iOS Virtual Devices\nTo run tests on iOS Virtual Devices, make the following changes in your `hyperexecute.yaml` file:\n\n- Change the `runson` key to `ios26`.\n- Set the `devices` array to `[\"iPhone 17\"]`.\n\nHere is the complete `hyperexecute.yaml` for running Maestro tests on iOS Virtual Devices:\n\n```yaml title=\"hyperexecute.yaml\"\n# Define the version of the configuration file\nversion: \"0.2\"\n\n# Enable autosplit for test execution\nautosplit: true\n\n# Set the concurrency level for test execution (2 devices in parallel)\nconcurrency: 2\n\n# Specify the target platform for test execution (iOS in this case)\n# runson: ios\nrunson: ios26\n\n# Enable dynamic allocation of resources\ndynamicAllocation: true\n\n# Test framework configuration\nframework:\n  # Name of the test framework (raw in this case)\n  name: raw\n  args:\n    # List of devices to run tests on (iPhone 17 on iOS 26.0 in this case)\n    # devices: [\".*-.*\", \".*-.*\", \".*-.*\"]\n    devices: [\"iPhone 17\"]\n    # devices: [\".*-26.0\"]\n    # Enable or disable video recording support\n    video: true\n    # Enable or disable device log support\n    deviceLog: true\n    # App ID to be installed (mandatory field, using )\n    # x86 build\n    # appId: lt://APP10160362031781245339521143 #Need to upload .zip file\n    # ARM Build for iOS 26.0 & above\n    appId: lt://APP123456789012345678901234567\n    # Build name for identification on the automation dashboard\n    buildName: maestro-t1\n    # Timeout for device queue\n    queueTimeout: 600\n    # Configuration fields specific to running raw tests\n    # region: ap\n    disableReleaseDevice: true\n    reservation: false\n    isRealMobile: false\n    network: true\n    platformName: ios\n\nenv:\n  MAESTRO: true\n  MAESTRO_LOGS_DIR: MaestroLogs\n\n# Pre-install required dependencies using pip\n# will need java and maestro inside the container\npre:\n  - chmod +x maestro-test/setup-script-iOS.sh\n  - chmod +x ./maestro-test/runTest_ios.sh\n  - ./maestro-test/setup-script-iOS.sh\n\n# Test discovery configuration\ntestDiscovery:\n  # Command to discover tests from the test.txt file\n  command: cat ./maestro-test/discover-iOS.txt\n  # Test discovery mode can be static/dynamic\n  mode: static\n  # Test type is raw (custom test implementation)\n  type: raw\n\n# Command to run the tests using the testRunnerCommand\ntestRunnerCommand: ./maestro-test/runTest_ios.sh $test \n    \n# Only report the status of the test framework\nframeworkStatusOnly: true\n\nreport: true\npartialReports:\n  - location: .\n    type: xml\n    frameworkName: junit\n\njobLabel: ['HYP', 'Maestro', 'iOS', Simulator]"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Update the runTest.sh file to include the --format junit flag in the maestro test command",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "/home/ltuser/.maestro/bin/maestro test $1 --debug-output ./MaestroLogs --format junit"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 5: Generate JUnit XML Report",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "codeRepository": "https://github.com/LambdaTest/hyperexecute-maestro-sample-test",
        "text": "When running on iOS real devices, you need to use a dedicated script since the execution flow differs slightly from iOS simulators and Android.\n\n```yaml reference\nhttps://github.com/LambdaTest/hyperexecute-maestro-sample-test/blob/main/maestro-test/runTest_ios_realdevice.sh"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "partialReports",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n### \ud83d\udcd8 Use Cases\n#### Use Case 1: One Test per Task\nIf you're executing one test per task, a single `report.xml` will be generated per job. These individual reports can then be merged later for a consolidated result.\n\n#### Use Case 2: Multiple Tests on the same Task\nIn this case, the `report.xml` file gets overwritten after each test execution. This results in only the last test's results being preserved. To prevent overwriting, update your `testRunnerCommand` in the `hyperexecute.yaml` file to rename the report after each test:\n\n```yaml title=\"hyperexecute.yaml\"\ntestRunnerCommand: ./maestro-test/runTest.sh $test && mv report.xml $test.xml "
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "args",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "codeRepository": "https://github.com/LambdaTest/hyperexecute-maestro-sample-test",
        "text": "\nand the launcher yaml file to tells maestro to use the pre-installed Wikipedia app.\n\n```yaml reference title=\"android-launch.yaml\"\nhttps://github.com/LambdaTest/hyperexecute-maestro-sample-test/blob/main/yaml/android/android-launch.yaml"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

24/7 chat support or drop us an email to support@testmuai.com. To enable this for your organizaton, connect with us through our window.openLTChatWidget()}>24/7 chat support or drop us an email to support@testmuai.com. HyperExecute now supports tunnel capabilities for Maestro tests running on both virtual devices and real devices using the Raw Framework configuration. To run tests on iOS Virtual Devices, make the following changes in your hyperexecute.yaml file: Change the runson key to ios26. Set the devices array to [\"iPhone 17\"]. Here is the complete hyperexecute.yaml for running Maestro tests on iOS Virtual Devices: Ensure that the app is built for ARM or Universal (Dual-Architecture) and not as an x86-only binary. As shown in the appId field above, use the ARM build for iOS 26.0 and above.",
          "url": "https://www.testmuai.com/support/docs/hyperexecute-maestro-testing/#step-4-configure-yaml-in-your-test-suite"
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Step 5: Generate JUnit XML Report",
          "text": "Update the runTest.sh file to include the --format junit flag in the maestro test command: The above command will generate a report.xml file in the root directory after each test execution. Here is the complete reference of the runTest.sh file: When running on iOS real devices, you need to use a dedicated script since the execution flow differs slightly from iOS simulators and Android. Update your HyperExecute YAML file to enable the native reporting in HyperExecute using the generated JUnit XML files. If you're executing one test per task, a single report.xml will be generated per job. These individual reports can then be merged later for a consolidated result. In this case, the report.xml file gets overwritten after each test execution. This results in only the last test's results being preserved. To prevent overwriting, update your testRunnerCommand in the hyperexecute.yaml file to rename the report after each test: This ensures that each test result is saved with a unique name like test1.xml, test2.xml, etc.",
          "url": "https://www.testmuai.com/support/docs/hyperexecute-maestro-testing/#step-5-generate-junit-xml-report"
        },
        {
          "@type": "HowToStep",
          "position": 6,
          "name": "Step 6: Execute your Test Suite",
          "text": "NOTE : In case of MacOS, if you get a permission denied warning while executing CLI, simply run chmod u+x ./hyperexecute to allow permission. In case you get a security popup, allow it from your System Preferences \u2192 Security & Privacy \u2192 General tab. {./hyperexecute --user ${ YOURLAMBDATESTUSERNAME()} --key ${ YOURLAMBDATESTACCESSKEY()} --config RELATIVEPATHOFYOURYAMLFILE }",
          "url": "https://www.testmuai.com/support/docs/hyperexecute-maestro-testing/#step-6-execute-your-test-suite"
        },
        {
          "@type": "HowToStep",
          "position": 7,
          "name": "Step 7: Monitor the Test Execution",
          "text": "Visit the HyperExecute Dashboard and check your Job status.",
          "url": "https://www.testmuai.com/support/docs/hyperexecute-maestro-testing/#step-7-monitor-the-test-execution"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "Launching Pre-Installed Apps with Maestro",
      "description": "In some cases, you may want to test against a pre-installed application on the device (instead of uploading and installing a new APK/IPA). Maestro supports this by allowing you to specify the app\u2019s package identifier (Android) or bundle identifier (iOS) in your test configuration.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Identify the App ID (Package Name / Bundle ID)",
          "text": "Visit the app\u2019s page on the Google Play Store. The id parameter in the URL is the package name. Example: For the Wikipedia app \u2192 org.wikipedia. Identify the bundle identifier (e.g., com.apple.Preferences for Settings).",
          "url": "https://www.testmuai.com/support/docs/hyperexecute-maestro-testing/#step-1-identify-the-app-id-package-name--bundle-id"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Update Your HyperExecute Configuration",
          "text": "You can configure your YAML files to launch the pre-installed app instead of uploading a new one. and the launcher yaml file to tells maestro to use the pre-installed Wikipedia app.",
          "url": "https://www.testmuai.com/support/docs/hyperexecute-maestro-testing/#step-2-update-your-hyperexecute-configuration"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 3: Execute your Test Suite",
          "text": "NOTE : In case of MacOS, if you get a permission denied warning while executing CLI, simply run chmod u+x ./hyperexecute to allow permission. In case you get a security popup, allow it from your System Preferences \u2192 Security & Privacy \u2192 General tab. {./hyperexecute --user ${ YOURLAMBDATESTUSERNAME()} --key ${ YOURLAMBDATESTACCESSKEY()} --config RELATIVEPATHOFYOURYAMLFILE } The Wikipedia app will open directly on the device, and your Maestro test steps will execute against it. Example: Wikipedia Search Flow Explanation: launchApp: Opens the Wikipedia app. tapOn: \"Search Wikipedia\" \u2192 Focuses the search bar. inputText: \"Maestro framework\" \u2192 Enters the text. pressKey: Enter \u2192 Submits the search. assertVisible: \"Mobile UI testing\" \u2192 Validates results.",
          "url": "https://www.testmuai.com/support/docs/hyperexecute-maestro-testing/#step-3-execute-your-test-suite"
        }
      ]
    }
  ]) }}
/>

## Overview

Run your Maestro tests on HyperExecute with [YAML 0.2](/support/docs/hyperexecute-yaml-version0.2/). The [Prerequisites](#prerequisites), [CLI setup](#setting-up-hyperexecute-cli-for-maestro), and [app upload](#uploading-your-app-for-maestro) apply to every run. From there, execute your suite as standard [Maestro flows](#running-maestro-tests), or with [Maestro and Cucumber (BDD)](#running-maestro-tests-with-cucumber-bdd) if your tests are written in Gherkin. Both approaches conclude with the shared reporting step.

## Prerequisites
To run the Tests on HyperExecute from your Local System, you are required:

- Your TestMu AI [Username and Access key](/support/docs/hyperexecute-how-to-get-my-username-and-access-key/)
- [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) in order to initiate a test execution Job .
- Setup the [Environmental Variable](/support/docs/hyperexecute-environment-variable-setup/)
- [HyperExecute YAML](/support/docs/hyperexecute-yaml-version0.2/) file which contains all the necessary instructions.

## Setting Up HyperExecute CLI for Maestro
The CLI triggers your tests on HyperExecute. Download the binary on the host system and keep it in the root directory of your test suite.

You can download the CLI for your desired platform from the links below:

| Platform | HyperExecute CLI |
| ---------| ---------------- |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| MacOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |

## Uploading Your App for Maestro
Upload your _android_ application (.apk file) or iOS application (.ipa file) to the TestMu AI servers using our REST API. You need to provide your Username and AccessKey in the format `Username:AccessKey` in the cURL command for authentication.

Enter your local path of the code repository instead of `` in the below cURL command.

{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "appFile=@""" -F "name="sampleApp""
`}

> Response of above cURL will be a **JSON** object containing the `App ID` of the format - `` and will be used in the next step.

## Running Maestro Tests
Your tests are plain **Maestro flow files** that run directly on the grid, with no BDD layer on top.

### Setting Up Your Test Suite
You can use your own project to configure and test it. For demo purposes, we use the sample repository.

**Sample repo**
Download or Clone the code sample for the Maestro framework from the TestMu AI GitHub repository to run the tests on the HyperExecute.
 View on GitHub

### Configuring the HyperExecute YAML
Enter your `APP_ID` in the YAML file that you fetched when uploading your application. Choose your target device below.

> To enable this for your organizaton, connect with us through our **24/7 chat support** or drop us an email to [support@testmuai.com](mailto:support@testmuai.com).

```yaml reference title="hyperexecute.yaml"
https://github.com/LambdaTest/hyperexecute-maestro-sample-test/blob/main/yaml/android/android-emulator.yaml
```

```yaml reference title="hyperexecute.yaml"
https://github.com/LambdaTest/hyperexecute-maestro-sample-test/blob/main/yaml/android/android-realdevice.yaml
```

> To enable this for your organizaton, connect with us through our **24/7 chat support** or drop us an email to [support@testmuai.com](mailto:support@testmuai.com).

```yaml reference title="hyperexecute.yaml"
https://github.com/LambdaTest/hyperexecute-maestro-sample-test/blob/main/yaml/ios/ios-simulator.yaml
```

> HyperExecute now supports [tunnel capabilities](/support/docs/hyperexecute-how-to-configure-tunnel/) for Maestro tests running on both virtual devices and real devices using the Raw Framework configuration.

**Running Tests on iOS Virtual Devices**
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

Ensure that the app is built for ARM or Universal (Dual-Architecture) and not as an x86-only binary. As shown in the `appId` field above, use the ARM build for iOS 26.0 and above.

### Executing Your Test Suite
> **NOTE :** In case of MacOS, if you get a permission denied warning while executing CLI, simply run **`chmod u+x ./hyperexecute`** to allow permission. In case you get a security popup, allow it from your **System Preferences** → **Security & Privacy** → **General tab**.

    {`./hyperexecute --user ${ YOUR_LAMBDATEST_USERNAME()} --key ${ YOUR_LAMBDATEST_ACCESS_KEY()} --config RELATIVE_PATH_OF_YOUR_YAML_FILE `}

When the job completes, the [HyperExecute dashboard](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/hyperexecute) shows your Maestro run and its status:

## Running Maestro Tests with Cucumber BDD
Your tests are **Gherkin `.feature` files**, and Cucumber runs the same Maestro flows underneath. Compared to the Maestro path above, only the test suite layout and a couple of YAML keys change.

### Setting Up Your Test Suite
You can use your own project. For demo purposes, we use the Maestro + Cucumber sample repository.

**Sample repo**
Download or clone the Maestro + Cucumber sample from the TestMu AI GitHub repository to run the tests on HyperExecute.
 View on GitHub

The suite is organized so that Cucumber sits on top of Maestro:

| Path | Purpose |
| ---- | ------- |
| `features/` | Gherkin `.feature` files, one scenario per behavior |
| `step_definitions/` | Glue code that maps each Gherkin step to a Maestro flow |
| `flows/` | The underlying Maestro flow files |
| `cucumber.js` | Cucumber profiles (`android`, `ios`) |

A feature file reads as plain behavior:

```gherkin
@android @navigation
Feature: Navigation

@regression
Scenario: User opens search from the home screen
Given the Wikipedia app is installed
When I launch the app
And I skip onboarding if shown
And I tap the search icon
Then the search input should be visible
```

### Configuring the HyperExecute YAML
The Cucumber YAML uses the same `raw` framework as the Maestro flow, with a few additions so `cucumber-js` can drive Maestro:

- A `runtime` block (Java + Node) is added so `cucumber-js` can run.
- Tests are discovered dynamically: `testDiscovery.command` runs `./discover/.sh`, which lists the `.feature` files to execute.
- `testRunnerCommand` runs each feature through Cucumber via `./support/run-.sh $test`.
- `partialReports` reads the JUnit XML that Cucumber writes to the `reports/` folder.

```yaml reference title="hyperexecute.yaml"
https://github.com/LambdaTest/hyperexecute-maestro-cucumber-sample/blob/main/yaml/android/android-emulator.yaml
```

```yaml reference title="hyperexecute.yaml"
https://github.com/LambdaTest/hyperexecute-maestro-cucumber-sample/blob/main/yaml/android/android-realdevice.yaml
```

```yaml reference title="hyperexecute.yaml"
https://github.com/LambdaTest/hyperexecute-maestro-cucumber-sample/blob/main/yaml/ios/ios-simulator.yaml
```

The Cucumber sample installs the app with `appPath` (drop your build into the `apps/` folder). To run against a build you already uploaded, replace `appPath` with `appId: lt://`.

### Executing Your Test Suite
Run the CLI exactly as in the Maestro section, pointing `--config` at your Cucumber `hyperexecute.yaml`:

    {`./hyperexecute --user ${ YOUR_LAMBDATEST_USERNAME()} --key ${ YOUR_LAMBDATEST_ACCESS_KEY()} --config RELATIVE_PATH_OF_YOUR_YAML_FILE `}

When the job completes, the HyperExecute dashboard shows your Cucumber run with each feature scenario and its status:

## Generating the JUnit XML Report for Maestro
Both approaches feed HyperExecute a **JUnit XML** report through `partialReports`, with a small difference in setup:

- **Maestro**: add the `--format junit` flag to `runTest.sh` (steps below).
- **Maestro + Cucumber**: reporting is already wired. `./support/run-.sh` runs `cucumber-js` with `--format junit:reports/.xml`, and the YAML's `partialReports` (pointing at `reports/`) picks it up. You can skip step 1 below.

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

## Launching Pre-Installed Apps with Maestro
In some cases, you may want to test against a pre-installed application on the device (instead of uploading and installing a new APK/IPA). Maestro supports this by allowing you to specify the app’s package identifier (Android) or bundle identifier (iOS) in your test configuration.

### Identifying the App ID (Package Name / Bundle ID)
#### For Android:
  - Visit the app’s page on the Google Play Store.
  - The id parameter in the URL is the package name.
  - Example: For the Wikipedia app → `org.wikipedia`.

#### For iOS:
  - Identify the bundle identifier (e.g., com.apple.Preferences for Settings).

### Updating Your HyperExecute Configuration
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
https://github.com/LambdaTest/hyperexecute-maestro-sample-test/blob/main/yaml/android/android-launch.yaml
```

### Executing Your Test Suite
> **NOTE :** In case of MacOS, if you get a permission denied warning while executing CLI, simply run **`chmod u+x ./hyperexecute`** to allow permission. In case you get a security popup, allow it from your **System Preferences** → **Security & Privacy** → **General tab**.

    {`./hyperexecute --user ${ YOUR_LAMBDATEST_USERNAME()} --key ${ YOUR_LAMBDATEST_ACCESS_KEY()} --config RELATIVE_PATH_OF_YOUR_YAML_FILE `}

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
