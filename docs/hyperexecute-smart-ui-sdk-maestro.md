---
id: hyperexecute-smart-ui-maestro
title: UI Testing with Maestro using HyperExecute and SmartUI SDK
hide_title: false
sidebar_label: Maestro
description: Use the Maestro framework to run visual tests on Android apps via HyperExecute and SmartUI. Capture screenshots for visual comparison in mobile test automation.
keywords:
    - smartui mobile testing
    - hyperexecute android tests
    - maestro visual regression
    - appium alternative
    - visual testing android emulator
    - smartui app screenshots
    - hyperexecute yaml mobile
url: https://www.lambdatest.com/support/docs/hyperexecute-smart-ui-maestro/
site_name: LambdaTest
slug: hyperexecute-smart-ui-maestro/
---

import CodeBlock from '@theme/CodeBlock';
import { YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY } from "@site/src/component/keys";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
       "@type": "BreadcrumbList",
       "itemListElement": [{
         "@type": "ListItem",
         "position": 1,
         "name": "LambdaTest",
         "item": "https://www.lambdatest.com"
       },{
         "@type": "ListItem",
         "position": 2,
         "name": "Support",
         "item": "https://www.lambdatest.com/support/docs/"
       },{
         "@type": "ListItem",
         "position": 3,
         "name": "UI Testing with Maestro",
         "item": "https://www.lambdatest.com/support/docs/hyperexecute-smart-ui-maestro/"
       }]
     })
   }}
></script>

This document guides you on how to perform visual regression testing for your Android applications by running your Maestro tests on the HyperExecute platform and capturing screenshots with the SmartUI SDK.

## Prerequisites

Before you begin, ensure you have the following prerequisites in place:

* A LambdaTest account. If you don't have one, [sign up for free](https://accounts.lambdatest.com/register).
* Your LambdaTest Username and Access Key. You can find these on your [LambdaTest Profile page](https://accounts.lambdatest.com/detail/profile).
* The [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) downloaded to your local machine.
* An existing Android application file (`.apk`).
* Node.js and npm installed on your system.

## Step 1: Create a SmartUI Project

First, you need to create a project in SmartUI. All your visual regression test builds for this project will be grouped here.

1.  Navigate to the [SmartUI Projects page](https://smartui.lambdatest.com/).
2.  Click on **New Project**.
3.  Select **Native App** as the platform.
4.  Provide a **Project Name**, select approvers, and add any relevant tags.
5.  Click **Submit**.

:::info
Once the project is created, you will get a unique `PROJECT_TOKEN`. Copy this token as it is required in the HyperExecute YAML configuration file later.
:::

## Step 2: Clone The Sample Repository

You can configure your own existing Maestro project or get started quickly by cloning our sample repository.

```bash
git clone [https://github.com/LambdaTest/smartui-maestro-sample.git](https://github.com/LambdaTest/smartui-maestro-sample.git)
cd smartui-maestro-sample
````

:::tip Sample Repo
You can find the complete code for this example in the following LambdaTest GitHub repository.

\<a href="https://www.google.com/search?q=https://github.com/LambdaTest/smartui-maestro-sample" className="github\_\_anchor"\>\<img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc\_img"/\> View on GitHub\</a\>
:::

## Step 3: Upload Your Application

To run your tests on LambdaTest real devices or emulators, you need to upload your Android app (`.apk`) and get an `appId`.

Run the following `cURL` command in your terminal. Ensure you have set your `LT_USERNAME` and `LT_ACCESS_KEY` as environment variables.

```bash
curl -u "$LT_USERNAME:$LT_ACCESS_KEY" \
 -X POST "[https://manual-api.lambdatest.com/app/upload/realDevice](https://manual-api.lambdatest.com/app/upload/realDevice)" \
 -F "appFile=@/path/to/your/app.apk" \
 -F "name=YourAppName"
```

From the JSON response, copy the value of `app_url`. It will be in the format `lt://...`. This is your `appId`.

## Step 4: Configure Your Test Suite

Now, let's set up the test suite to integrate with SmartUI.

#### 4.1. Install SmartUI CLI

The SmartUI CLI is required to capture and upload screenshots. Install it in your project directory:

```bash
npm i @lambdatest/smartui-cli
```

#### 4.2. Add SmartUI Screenshots to Your Maestro Flow

In your Maestro test YAML files (e.g., `maestro-test/test.yaml`), add the `takeScreenshot` command wherever you want to capture a visual checkpoint. The `path` specified will be used to name the screenshot in the SmartUI dashboard.

```yaml
- launchApp
- takeScreenshot:
    path: ./screenshots/home-screen
- tapOn: "Login"
- takeScreenshot:
    path: ./screenshots/login-page
```

#### 4.3. Set Up Environment Variables

To authenticate with the LambdaTest platform, export your LambdaTest credentials as environment variables.

\<Tabs className="docs\_\_val"\>
\<TabItem value="bash" label="Linux / MacOS" default\>
\<CodeBlock className="language-bash"\>
{`export LT_USERNAME=&quot;${YOUR_LAMBDATEST_USERNAME()}&quot; export LT_ACCESS_KEY=&quot;${YOUR_LAMBDATEST_ACCESS_KEY()}&quot;`}
\</CodeBlock\>
\</TabItem\>
\<TabItem value="powershell" label="Windows"\>
\<CodeBlock className="language-powershell"\>
{`$env:LT_USERNAME=&quot;${YOUR_LAMBDATEST_USERNAME()}&quot; $env:LT_ACCESS_KEY=&quot;${YOUR_LAMBDATEST_ACCESS_KEY()}&quot;`}
\</CodeBlock\>
\</TabItem\>
\</Tabs\>

## Step 5: Configure the HyperExecute YAML

The HyperExecute YAML file is the blueprint for your test execution. It tells HyperExecute how to set up the environment and run your tests.

You need to add your `PROJECT_TOKEN` (from Step 1) and your `appId` (from Step 3) to the YAML file. Below are example configurations for running Maestro tests on Emulators and Real Devices.

#### Example for Emulators

```yaml
version: 0.1
runson: android
concurrency: 2

jobLabel: [Maestro, Emulator, SmartUI]

env:
  # Add your Project Token from SmartUI
  PROJECT_TOKEN: "<YOUR_PROJECT_TOKEN>"
  # Enable Maestro test execution
  MAESTRO: true

pre:
  # Scripts to set up Maestro and dependencies
  - chmod +x maestro-test/setup-script.sh
  - maestro-test/setup-script.sh
  - npm i @lambdatest/smartui-cli

testDiscovery:
  # Discovers the Maestro test files to run
  command: cat ./maestro-test/discover.txt

testRunnerCommand:
  # Command to execute each test file
  ./maestro-test/runTest.sh $test
```

#### Example for Real Devices

```yaml
version: 0.1
runson: android
concurrency: 2

jobLabel: [Maestro, RealDevice, SmartUI]

env:
  # Add your Project Token from SmartUI
  PROJECT_TOKEN: "<YOUR_PROJECT_TOKEN>"
  # Enable Maestro test execution
  MAESTRO: true

# Framework-specific arguments for real devices
framework:
  name: maestro # Specifying the framework name
  args:
    # Select specific devices or use regex
    devices: [".*"]
    isRealMobile: true
    # Add your App ID from the upload step
    appId: "lt://<YOUR_APP_ID>"
```

:::info
In the real device configuration, the `testDiscovery` and `testRunnerCommand` are handled internally by the `maestro` framework integration on HyperExecute. You just need to specify the `framework` block.
:::

## Step 6: Execute Your Test Suite

Once your configuration is complete, you are ready to run the tests on HyperExecute. In your terminal, from the root directory of your project, run the following command:

```bash
# For MacOS/Linux, make the CLI executable first
chmod +x ./hyperexecute

# Execute the tests using your YAML file
./hyperexecute --config yaml/maestro_Real_Devices.yaml
```

> **NOTE:** On macOS, you might need to grant permission to the `hyperexecute` binary via **System Settings** → **Privacy & Security** if a security warning appears.

Alternatively, if you haven't set your credentials as environment variables, you can pass them as arguments:

\<CodeBlock className="language-bash"\>
{`./hyperexecute --user ${YOUR_LAMBDATEST_USERNAME()} --key ${YOUR_LAMBDATEST_ACCESS_KEY()} --config yaml/maestro_Real_Devices.yaml`}
\</CodeBlock\>

## Step 7: View Your Visual Test Results on SmartUI

After the HyperExecute job is finished, all screenshots captured using the `takeScreenshot` command will be available in your SmartUI project for review.

1.  Navigate to the [SmartUI Dashboard](https://smartui.lambdatest.com/).
2.  Select your project and the most recent build.
3.  Here, you can compare screenshots against the baseline, highlight differences, and approve or reject changes. You can use features like Smart Ignore to mask dynamic areas for more stable comparisons.

```
