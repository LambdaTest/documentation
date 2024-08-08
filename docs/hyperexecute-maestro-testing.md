---
id: hyperexecute-maestro-testing
title: Execute Maestro Framework Tests on HyperExecute
sidebar_label: Maestro
description: Follow the instructions in this documentation, so that you can seamlessly execute Maestro tests on HyperExecute via LambdaTest.
keywords:
  - maestro
  - raw
  - java
  - lambdatest java
  - framework on lambdatest
  - testng
  - app testing
  - real devices
# image: /assets/images/og-images/espresso-testing-og-image.jpg
url: https://www.lambdatest.com/support/docs/hyperexecute-maestro-testing/
site_name: LambdaTest
slug: hyperexecute-maestro-testing/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Getting Started With Maestro Testing on LambdaTest",
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-maestro-testing/"
        }]
      })
    }}
></script>

This page outlines how to execute your Maestro tests on HyperExecute with [YAML 0.2](/support/docs/hyperexecute-yaml-version0.2/)

## Prerequisites

To run the Tests on HyperExecute from your Local System, you are required:

- Your LambdaTest [Username and Access key](/support/docs/hyperexecute-how-to-get-my-username-and-access-key/)
- [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) in order to initiate a test execution Job .
- Setup the [Environmental Variable](/support/docs/hyperexecute-environment-variable-setup/)
- [HyperExecute YAML](/support/docs/hyperexecute-yaml-version0.2/) file which contains all the necessary instructions.

## Step 1: Setup Your Test Suite

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo

Download or Clone the code sample for the Maestro framework from the LambdaTest GitHub repository to run the tests on the HyperExecute.

<a href="https://github.com/LambdaTest/maestro-sample-test" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>

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

### Setup Environment Variable

Now, you need to export your environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in the [LambdaTest Profile page](https://accounts.lambdatest.com/detail/profile).

Run the below mentioned commands in your terminal to setup the CLI and the environment variables.

<Tabs className="docs__val">

<TabItem value="bash" label="Linux / MacOS" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
  {`set LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
set LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>

</TabItem>
</Tabs>

## Step 3: Upload your Application

Upload your <b>_android_</b> application (.apk file) to the LambdaTest servers using our <b>REST API</b>. You need to provide your <b>Username</b> and <b>AccessKey</b> in the format `Username:AccessKey` in the <b>cURL</b> command for authentication.

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

Enter your `<APP_ID>` in the YAML file (line 52) that you have fetched in the above step.

```yaml
---
# Define the version of the configuration file
version: "0.2"

# Specify the target platform for test execution (Android in this case)
runson: android

# Enable autosplit for test execution
autosplit: true

# Set the concurrency level for test execution (2 devices in parallel)
concurrency: 1

# Only report the status of the test framework
frameworkStatusOnly: true

# Enable dynamic allocation of resources
dynamicAllocation: true

# Pre-install required dependencies using pip
# will need java and maestro inside the container
pre:
  - chmod +x ./maestro-test/setup-script.sh
  - chmod +x ./maestro-test/runTest.sh

env:
  MAESTRO: true

# Test discovery configuration
testDiscovery:
  # Command to discover tests from the test.txt file
  command: cat ./maestro-test/discover.txt
  # Test discovery mode can be static/dynamic
  mode: static
  # Test type is raw (custom test implementation)
  type: raw

# Command to run the tests using the testRunnerCommand
testRunnerCommand: ./maestro-test/runTest.sh $test

# Test framework configuration
framework:
  # Name of the test framework (raw in this case)
  name: raw
  args:
    # List of devices to run tests on (two Pixel 5 devices in this case)
    devices: ["Galaxy S22 Ultra 5G"]
    # Enable or disable video recording support
    video: true
    # Enable or disable device log support
    deviceLog: true
    # App ID to be installed (mandatory field, using <app_id>)
    # highlight-next-line
    appId: lt://<app-id>
    # Build name for identification on the automation dashboard
    buildName: maestro-t1
    # All devices are in a private cloud
    privateCloud: true
    # Timeout for device queue
    queueTimeout: 600
    # Configuration fields specific to running raw tests
    region: ap
    disableReleaseDevice: true
    isRealMobile: true
    reservation: false
    platformName: android

jobLabel: [maestro-testing, android, autosplit]
```

## Step 5: Execute your Test Suite

> **NOTE :** In case of MacOS, if you get a permission denied warning while executing CLI, simply run **`chmod u+x ./hyperexecute`** to allow permission. In case you get a security popup, allow it from your **System Preferences** → **Security & Privacy** → **General tab**.

Run the below command in your terminal at the root folder of the project:

```bash
./hyperexecute --config RELATIVE_PATH_OF_YOUR_YAML_FILE
```

OR use this command if you have not exported your username and access key in the step 2.

<div className="lambdatest__codeblock">
  <CodeBlock className="language-bash">
    {`./hyperexecute --user ${ YOUR_LAMBDATEST_USERNAME()} --key ${ YOUR_LAMBDATEST_ACCESS_KEY()} --config RELATIVE_PATH_OF_YOUR_YAML_FILE `}
  </CodeBlock>
</div>

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/maestro/1.png').default} alt="JUnit HyperExecute Terminal Logs"  width="1920" height="868" className="doc_img"/>

## Step 6: Monitor the Test Execution

Visit the [HyperExecute Dashboard](https://hyperexecute.lambdatest.com/hyperexecute) and check your Job status. 

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/maestro/2.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>