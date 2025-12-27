---
id: hyperexecute-espresso-testing
title: Espresso Testing On HyperExecute
sidebar_label: Espresso
description: Follow the instructions in this documentation, so that you can seamlessly execute Espresso tests on HyperExecute via TestMu AI.
keywords:
  - espresso
  - java
  - lambdatest java
  - framework on lambdatest
  - testng
  - app testing
  - real devices
# image: /assets/images/og-images/espresso-testing-og-image.jpg
url: https://www.lambdatest.com/support/docs/hyperexecute-espresso-testing/
site_name: LambdaTest
slug: hyperexecute-espresso-testing/
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
          "name": "Getting Started With espresso Testing on LambdaTest",
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-espresso-testing/"
        }]
      })
    }}
></script>

This page outlines how to execute your Espresso tests on HyperExecute with [YAML 0.2](/support/docs/hyperexecute-yaml-version0.2/)

## Prerequisites

To run the Tests on HyperExecute from your Local System, you are required:

- Your LambdaTest [Username and Access key](/support/docs/hyperexecute-how-to-get-my-username-and-access-key/)
- [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) in order to initiate a test execution Job .
- Setup the [Environmental Variable](/support/docs/hyperexecute-environment-variable-setup/)
- [HyperExecute YAML](/support/docs/hyperexecute-yaml-version0.2/) file which contains all the necessary instructions.
- An Android app (.apk or .aab file).

## Step 1: Setup Your Test Suite

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo

Download or Clone the code sample for the Espresso framework from the LambdaTest GitHub repository to run the tests on the HyperExecute.

<a href="https://github.com/LambdaTest/hyp-real-device-espresso" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>

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
Enter your local path of your android app instead of `<YOUR_LOCAL_APP_PATH>` in the below cURL command.
:::

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "appFile=@"<YOUR_LOCAL_APP_PATH>"" -F "name="sampleApp""
`}
</CodeBlock>
</div>

> Response of above cURL will be a **JSON** object containing the `App ID` of the format - `<APP123456789012345678901234567>` and will be used in the next step.

## Step 4: Upload your Test Suite

Upload your **test suite (.apk file)** to the LambdaTest servers using our REST API by providing your **Username** and **AccessKey** in the format `Username:AccessKey` in the cURL command for authentication.

Here is an example cURL request to upload your app using our REST API:

:::info
Enter your local path of your test suite app instead of `<YOUR_LOCAL_APP_PATH>` in the below cURL command.
:::


## Step 5: Configure YAML in your Test Suite

Enter your `<APP_ID>` and `<TEST_SUITE_ID>` in the YAML file that you have fetched in the above step.

<Tabs className="docs__val">

<TabItem value="bash" label="Auto Sharding" default>

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
</TabItem>

<TabItem value="powershell" label="Manual Sharding" default>

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

</TabItem>
</Tabs>

:::info info
- The **uploadArtefact** flag is currently not available for Espresso framework tests.
- To run **adb commands** in the **pre** and **post-steps**, include the following two flags in your YAML file: To execute it, you must have purchased an equivalent number of parallels for both HyperExecute and Real Device.

```yaml
privateCloud: true 
preservedDevice: true
```
:::

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

<div className="lambdatest__codeblock">
  <CodeBlock className="language-bash">
    {`./hyperexecute --user ${ YOUR_LAMBDATEST_USERNAME()} --key ${ YOUR_LAMBDATEST_ACCESS_KEY()} --config RELATIVE_PATH_OF_YOUR_YAML_FILE --download-artifacts --download-report`}
  </CodeBlock>
</div>

> Visit the [HyperExecute Dashboard](https://hyperexecute.lambdatest.com/hyperexecute) and check your Job status. 

:::tip Troubleshoot Guide

If you are stumbling upon errors during Espresso test execution, then refer to the [**Espresso Troubleshoot**](/support/docs/troubleshoot-espresso-tests/#sharded-espresso-errors) guide for detailed explanations to your common errors.
:::

## Additional Details

### Sharding

**Sharding** is a mobile test automation technique that distributes test cases across multiple real and virtual devices via parallel testing. It entails breaking down test suites into smaller subsets known as shards and running each shard concurrently on separate test execution environments.

There are two types of Sharding:

### Manual Sharding
This feature enables users to manually specify shards along with their definitions, offering multiple strategies such as class, package, and more. By doing so, users can have greater flexibility and control over the sharding process.

### Auto Sharding
The system intelligently determines the distribution of tests across devices, employing specific criteria to optimize the testing process.

:::tip

- **When Shards are added :**
   - If you are using the `deviceSelectionStrategy: all`,then in that case all the specified shards will be executed on every device available.<br/>

   - If you are using the `deviceSelectionStrategy: any`, then in that case all the specified shards will be executed on just one device from the provided list.<br/>

- **When Shards are not added :**
   - If you are using the `deviceSelectionStrategy: all`, then in that case the tests will be executed on all mentioned devices in `.yaml` based on the concurrency.  <br/>

   - If you are using the `deviceSelectionStrategy: any`, then in that case all the specified tests will be executed on each device from the provided list, considering the concurrency setting. <br/>
:::

## Conclusion
By following the instructions in this documentation, you can seamlessly execute the Espresso tests on HyperExecute, leveraging its secure cloud infrastructure, advanced features, and optimized test execution workflow.


<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com">
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com/support/docs/">
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
      Espresso Testing 
      </span>
    </li>
  </ul>
</nav>
