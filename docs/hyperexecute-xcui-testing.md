---
id: hyperexecute-xcui-testing
title: Execute XCUI Framework Tests on HyperExecute
sidebar_label: XCUI
description: Follow the instructions in this documentation, so that you can seamlessly execute XCUI tests on HyperExecute via TestMu AI.
keywords:
  - xcui
  - iOS
  - testmu ai 
  - framework on testmu ai
  - testng
  - app testing
  - real devices
url: https://www.testmu.ai/support/docs/hyperexecute-xcui-testing/
site_name: LambdaTest
slug: hyperexecute-xcui-testing/
canonical: https://www.testmu.ai/support/docs/hyperexecute-xcui-testing/
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
          "name": "Getting Started With XCUI Testing on TestMu AI",
          "item": `${BRAND_URL}/support/docs/hyperexecute-xcui-testing/`
        }]
      })
    }}
></script>

This page outlines how to execute your XCUI tests on HyperExecute with [YAML 0.2](/support/docs/hyperexecute-yaml-version0.2/)

## Prerequisites

To run the Tests on HyperExecute from your Local System, you are required:

- Your <BrandName /> [Username and Access key](/support/docs/hyperexecute-how-to-get-my-username-and-access-key/)
- [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) in order to initiate a test execution Job .
- Setup the [Environmental Variable](/support/docs/hyperexecute-environment-variable-setup/)
- [HyperExecute YAML](/support/docs/hyperexecute-yaml-version0.2/) file which contains all the necessary instructions.

## Step 1: Setup Your Test Suite

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo

Download or Clone the code sample for the XCUI framework from the <BrandName /> GitHub repository to run the tests on the HyperExecute.

<a href="https://github.com/LambdaTest/hyperexecute-xcui-sample" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>

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

Now, you need to export your environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in the [<BrandName /> Profile page](https://accounts.lambdatest.com/detail/profile).

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

## Step 3: Upload your Application and Test Suite

### Upload your App

Upload your **iOS** application (.ipa file) to the <BrandName /> servers using our **REST API**. You need to provide your **Username** and **AccessKey** in the format ```Username:AccessKey``` in the **cURL** command for authentication. Make sure to add the path of the **appFile** in the cURL request.

Here is an example cURL request to upload your app using our REST API:

<Tabs className="docs__val">

<TabItem value="bash" label="Linux / MacOS" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" \\
--location --request POST 'https://manual-api.lambdatest.com/app/uploadFramework' \\
--form 'appFile=@"/Users/macuser/Downloads/proverbial.ipa"' \\
--form 'type="xcuit-ios"'`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/uploadFramework" -F "appFile=@"/Users/macuser/Downloads/proverbial.ipa"" -F "type="xcuit-ios""`}
  </CodeBlock>
</div>

</TabItem>
</Tabs>

:::note
Response of above cURL will be a **JSON** object containing the `App URL` of the format - `APP123456789123456789` and will be used in the last step as `appId`.
:::

### Upload your Test Suite

Upload your **test suite** (.ipa file) to the <BrandName /> servers using our **REST API**. You need to provide your **Username** and **AccessKey** in the format `Username:AccessKey` in the **cURL** command for authentication. Make sure to add the path of the **appFile** in the cURL request. Here is an example cURL request to upload your app using our REST API:

<Tabs className="docs__val">

<TabItem value="bash" label="Linux / MacOS" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" \\
--location --request POST 'https://manual-api.lambdatest.com/app/uploadFramework' \
--form 'appFile=@"/Users/macuser/Downloads/proverbial_ios_xcuitest.ipa"' \
--form 'type="xcuit-ios"'`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST "https://manual-api.lambdatest.com/app/uploadFramework" --form "appFile=@"C:/Users/varunkumarb/Downloads/proverbial_ios_xcuitest.ipa"" --form "type=\"xcuit-ios\""`}
  </CodeBlock>
</div>

</TabItem>
</Tabs>

:::note

Response of above cURL will be a **JSON** object containing the `App URL` of the format - `APP123456789123456789` and will be used in the next step as ``testSuiteAppId``

:::

## Step 4: Configure YAML in your Test Suite

Enter your `<RELATIVE_APP_PATH>` and `<RELATIVE_TEST_SUITE_PATH>` in the YAML file

```yaml
---
version: "0.2"

runson: ios

autosplit: true

concurrency: 1

retryOnFailure: true
maxRetries: 2

framework:
  name: "ios/xcui"
  args:
  # highlight-next-line
    appPath: <RELATIVE_APP_PATH>
    # highlight-next-line
    testSuitePath: <RELATIVE_TEST_SUITE_PATH>
    video: true
    filters:
      attributes:
      - type: className
        values: ["LambdaUiKitIOSUITestsLaunchTests"]
      - type: testName
        values: ["LambdaUiKitIOSUITests/testverifyAppLaunch"]
    deviceSelectionStrategy: any
    devices: [".*"]
    artifacts: true

    shards:
      mappings:
      - name: shard1
        strategy: "only-testing/skip-testing"
        values: ["<className>/<className/testName>"]
     - name: shard2
       strategy: "only-testing/skip-testing"
       values: ["<className>/<className/testName>", "<className>/<className/testName>"]

jobLabel: ['HyperExecute', 'XCUI', 'Real Device']
```

:::tip When shards are added

If you are using the `deviceSelectionStrategy: all`, then in that case all the mentioned shards will be executed on all the devices.<br/>
**For example:** There are 2 shards and 2 devices mentioned, then the 2 shards will be executed on 2 devices (2 Shards * 2 Devices).

If you are using the `deviceSelectionStrategy: any`, then in that case all the mentioned shards will be executed on any one device from the list provided.<br/>
**For example:** There are 2 shards and 2 devices mentioned, then the 2 shards will be executed on any device (2 shards * any device mentioned).

:::

:::caution When shards aren't added

If you are using the `deviceSelectionStrategy: all`, then in that case all the tests will be executed on all the devices based on the concurrency. <br/>
**For example:** There are 6 tests and 10 devices mentioned, then the 6 tests will be auto distributed on the devices based on the max concurrency.


If you are using the `deviceSelectionStrategy: any`, then in that case all the mentioned tests will be executed on any one device from the list provided. <br/>
**For example:** There are 6 tests and 10 devices mentioned, then the 6 tests will be executed on any one device.

:::

## Step 5: Generate Reports and Artifacts
To generate artifacts for your XCUI tests, add the `artifacts: true` and `report: true` flag in your YAML file:

```yaml
report: true

framework:
  name: "ios/xcui"
  args:
    artifacts: true
    ...//
```

To download these artifacts in your local machine, you can pass the `--download-artifacts` and `--download-report` flag with the CLI command to execute the tests as shown in the next step.

## Step 6: Execute your Test Suite

> **NOTE :** In case of macOS, if you get a permission denied warning while executing CLI, simply run **`chmod u+x ./hyperexecute`** to allow permission. In case you get a security popup, allow it from your **System Preferences** → **Security & Privacy** → **General tab**.

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

## Step 7: Monitor the Test Execution

Visit the [HyperExecute Dashboard](https://hyperexecute.lambdatest.com/hyperexecute) and check your Job status. 

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/xcui/1.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>
