---
id: espresso-env-variables-settings
title: Espresso Environment Variable Settings
sidebar_label: Environment Variable Settings
description: Now you can run your Espresso framework on LambdaTest and this particular feature allows users to pass and retrieve environment variables (like STAGE, PROD, or DEV) during automated Android tests.
keywords:
  - espresso
  - environment
  - lambdatest java
  - stage
  - production
  - testng
  - app testing
  - real devices
image: /assets/images/og-images/appium-testing-og-image.jpg
url: https://www.lambdatest.com/support/docs/espresso-env-variables-settings/
site_name: LambdaTest
slug: espresso-env-variables-settings/
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
          "name": "Environment Variable Settings",
          "item": "https://www.lambdatest.com/support/docs/espresso-env-variables-settings/"
        }]
      })
    }}
></script>

Espresso is a powerful UI testing framework for Android that allows you to write automated UI tests for Android apps. When testing your Android apps on LambdaTest, you may need to pass environment variables for various configurations (e.g., STAGE, PROD, DEV) to manage different environments seamlessly.

This guide will walk you through setting up, accessing, and using environment variables for Espresso tests on LambdaTest. You'll learn how to define and retrieve these variables using different configuration formats (JSON, YAML), integrate them with LambdaTest, and run your tests smoothly.

## Prerequisites

- Your LambdaTest [Username and Access key](https://accounts.lambdatest.com/security).
- Access to an **Android** app (.apk) and an **Espresso Test** app (.apk file).

:::tip

If you do not have any **Android** app (.apk) and an **Espresso Test** app (.apk) file, you can run your sample tests on LambdaTest by using our sample :link: [Android app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk) and a sample :link: [Espresso Test](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android_expressotest.apk).

:::

## Step 1: Setup Environment Variable

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

## Step 2: Upload your Application and Test Suite

### Upload your App

Upload your **android** application (.apk file) to the LambdaTest servers using our **REST API**. You need to provide your **Username** and **AccessKey** in the format ```Username:AccessKey``` in the **cURL** command for authentication. Make sure to add the path of the **appFile** in the cURL request.

Here is an example cURL request to upload your app using our REST API:

<Tabs className="docs__val">

<TabItem value="bash" label="Linux / MacOS" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" \\
--location --request POST 'https://manual-api.lambdatest.com/app/uploadFramework' \\
--form 'appFile=@"/Users/macuser/Downloads/proverbial.ipa"' \\
--form 'type="espresso-android"'`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/uploadFramework" -F "appFile=@"/Users/macuser/Downloads/proverbial.ipa"" -F "type="espresso-android""`}
  </CodeBlock>
</div>

</TabItem>
</Tabs>

:::note
Response of above cURL will be a **JSON** object containing the `App URL` of the format - `APP123456789123456789` and will be used in the last step as `appId`.
:::

### Upload your Test Suite

Upload your **test suite** (.apk file) to the LambdaTest servers using our **REST API**. You need to provide your **Username** and **AccessKey** in the format `Username:AccessKey` in the **cURL** command for authentication. Make sure to add the path of the **appFile** in the cURL request. Here is an example cURL request to upload your app using our REST API:

<Tabs className="docs__val">

<TabItem value="bash" label="Linux / MacOS" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" \\
--location --request POST 'https://manual-api.lambdatest.com/app/uploadFramework' \
--form 'appFile=@"/Users/macuser/Downloads/proverbial_ios_xcuitest.ipa"' \
--form 'type="espresso-android"'`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST "https://manual-api.lambdatest.com/app/uploadFramework" --form "appFile=@"C:/Users/varunkumarb/Downloads/proverbial_ios_xcuitest.ipa"" --form "type=\"espresso-android\""`}
  </CodeBlock>
</div>

</TabItem>
</Tabs>

:::note

Response of above cURL will be a **JSON** object containing the `App URL` of the format - `APP123456789123456789` and will be used in the next step as ``testSuiteAppId``

:::

## Step 3: Configure YAML in your Test Suite
Enter your `<RELATIVE_APP_PATH>` and `<RELATIVE_TEST_SUITE_PATH>` in the YAML file

```yaml
---
version: "0.2"
concurrency: 4
runson: android
autosplit: true
maxRetries: 2
# highlight-start
env:
  STAGE: stg1
  PROD: prod1
  DEV: dev
# highlight-end
framework:
  name: "android/espresso"
  args:
    reservation: false 
    buildName: "Test Espresso Sharding"
    appId: <TARGET_SUITE>
    testSuiteAppId: <TEST_SUITE>
    deviceSelectionStrategy: any
    devices: [".*"]
    shards:
      mappings:
      - name: shard1
        strategy: "only-testing/skip-testing"
        values: ["<className>/<className/testName>"]
     - name: shard2
       strategy: "only-testing/skip-testing"
       values: ["<className>/<className/testName>", "<className>/<className/testName>"]
``` 

## Step 4: Generate Reports and Artifacts
To generate artifacts for your XCUI tests, add the `artifacts: true` and `report: true` flag in your YAML file:

```yaml
report: true

framework:
  name: "android/espresso"
  args:
    artifacts: true
    ...//
```

To download these artifacts in your local machine, you can pass the `--download-artifacts` and `--download-report` flag with the CLI command to execute the tests as shown in the next step.

## Step 5: Execute your Test Suite

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

## Step 6: Monitor the Test Execution

Visit the dashboard and check your job status. 

<img loading="lazy" src={require('../assets/images/espresso/environment-variable-success.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

## Benefits of Using Environment Variables in Espresso

### Environment Flexibility: 
Easily switch between different configurations (STAGE, PROD, DEV) without changing the test code.

### Reusability: 
Use the same test script for different environments by only changing the environment variables.

### Cleaner Configurations: 
Manage and switch environment settings via Postman or YAML without modifying your test code.

### Cross-Platform Compatibility: 
LambdaTest allows you to run your Espresso tests on multiple Android devices in parallel, ensuring broader coverage.

## Troubleshooting Tips
### Problem: Environment Variables Not Loading
Ensure that the environment variables are correctly defined in Postman or YAML and properly linked to LambdaTest.
Double-check that the correct environment variable names are being used in your Espresso test code.

### Problem: Environment Variable Not Found
Verify that the environment variable name in the LambdaTest capability and the test code match exactly.
Check the syntax in the Postman or YAML file for any typos or missing parameters.

### Problem: Test Fails on LambdaTest
Make sure the Appium server or Espresso test is correctly set up on LambdaTest.
Ensure that the environment variable values are being passed and accessed properly in the code.


