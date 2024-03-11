---
id: hyperexecute-espresso-testing
title: Espresso Testing On HyperExecute
sidebar_label: Espresso
description: Follow the instructions in this documentation, so that you can seamlessly execute Espresso tests on HyperExecute via LambdaTest.
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

---

<!-- This post will help you in getting started with **espresso testing** on [LambdaTest Real Device cloud platform](https://www.lambdatest.com/real-device-cloud). -->

This page outlines how to execute your Espresso tests on HyperExecute using concepts of [**Sharding**](#sharding)

> HyperExecute uses [YAML 0.2](/support/docs/hyperexecute-yaml-version0.2/) to perform the tests using Espresso.

## Running Espresso Tests on HyperExecute
*** 

### Prerequisites

To run the Tests on HyperExecute from your Local System, you are required:

- Your lambdatest [Username and Access key](/support/docs/hyperexecute-how-to-get-my-username-and-access-key/)
- [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) in order to initiate a test execution [Job](/support/docs/hyperexecute-concepts/#1-jobs).
- Setup the Environmental Variable
- [HyperExecute YAML](/support/docs/hyperexecute-yaml-version0.2/) file which contains all the necessary instructions.
- Access to an **Android** app (.apk or .aab file).

<!-- 1. You will need a LambdaTest username and access key. To obtain your access credentials, [purchase a plan](https://billing.lambdatest.com/billing/plans) or access the [automation dashboard](https://appautomation.lambdatest.com/). -->


> If you do not have any **.apk** you can run your sample tests on LambdaTest by using our sample :link: [Android app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk).

#### Download HyperExecute CLI

The *HyperExecute CLI* is used for triggering tests on HyperExecute. It is recommend to download the HyperExecute CLI binary on the host system to perform the tests on HyperExecute. The CLI download site for various platforms is displayed below:

| Platform | HyperExecute CLI download location |
| ---------| --------------------------- |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| macOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |

#### Setup Environment Variable
Export the environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in the [LambdaTest Profile page](https://accounts.lambdatest.com/detail/profile).
Run the below mentioned commands in the terminal to setup the CLI and the environment variables.

***

For macOS:

```bash
export LT_USERNAME=YOUR_LT_USERNAME
export LT_ACCESS_KEY=YOUR_LT_ACCESS_KEY
```

For Linux:

```bash
export LT_USERNAME=YOUR_LT_USERNAME
export LT_ACCESS_KEY=YOUR_LT_ACCESS_KEY
```

For Windows:

```bash
set LT_USERNAME=YOUR_LT_USERNAME
set LT_ACCESS_KEY=YOUR_LT_ACCESS_KEY
```

### Steps to Run Your Test

---

#### Step 1: Upload your Application

Upload your <b>_android_</b> application (.apk file) to the LambdaTest servers using our <b>REST API</b>. You need to provide your <b>Username</b> and <b>AccessKey</b> in the format `Username:AccessKey` in the <b>cURL</b> command for authentication. Make sure to add the path of the <b>appFile</b> in the cURL request.

Here is an example cURL request to upload your app using our REST API:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Using App File:**

<Tabs className="docs__val">
<TabItem value="macos-file" label="Linux / MacOS" default>

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl -u "YOUR_LAMBDATEST_USERNAME:YOUR_LAMBDATEST_ACCESS_KEY" \\
--location --request POST 'https://manual-api.lambdatest.com/app/uploadFramework' \\
--form 'appFile=@"/Users/macuser/Downloads/proverbial.apk"' \\
--form 'type="espresso-android"' 
`}
</CodeBlock>
</div>

</TabItem>

<TabItem value="windows-file" label="Windows" default>
<div className="lambdatest__codeblock">
<CodeBlock className="language-powershell">
{`curl -u "YOUR_LAMBDATEST_USERNAME:YOUR_LAMBDATEST_ACCESS_KEY" -X POST "https://manual-api.lambdatest.com/app/uploadFramework" -F "appFile=@"/Users/macuser/Downloads/proverbial.apk"" -F "type="espresso-android""
`}
</CodeBlock>
</div>
</TabItem>
</Tabs>

> Response of above cURL will be a **JSON** object containing the `App URL` of the format - <lt://APP123456789123456789> and will be used in the next step.

#### Step 2: Upload the Test Suite

Upload your **test suite (.apk file)** to the LambdaTest servers using our REST API by providing your **Username** and **AccessKey** in the format `Username:AccessKey` in the cURL command for authentication.

Here is an example cURL request to upload your app using our REST API:

<Tabs className="docs__val">

<TabItem value="bash" label="Linux / MacOS" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" \\
--location --request POST 'https://manual-api.lambdatest.com/app/uploadFramework' \\
--form 'appFile=@"/Users/macuser/Downloads/ProverbialEspressoTest.apk"' \\
--form 'type="espresso-android"'`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST "https://manual-api.lambdatest.com/app/uploadFramework" --form "appFile=@"C:/Users/varunkumarb/Downloads/ProverbialEspressoTest.apk"" --form "type=\"espresso-android\""`}
  </CodeBlock>
</div>

</TabItem>
</Tabs>

#### Step 3: Execute the Test

Now execute your test by using the following command in your terminal:

```bash
chmod u+x <YOUR_CLI_FILE_NAME>
./<YOUR_CLI_FILE_NAME> -user <UserName> -key <AccessKey> --verbose -i <yamlFileName>.yaml
```

Example Reference with Output:

```bash
chmod u+x ./hyperexecute
./hyperexecute -user <UserName> -key <AccessKey> --verbose -i <yamlFileName>.yaml
```

- Now, go to the [HyperExecute Dashboard](https://hyperexecute.lambdatest.com/hyperexecute) and click on your executed Job.
<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/espresso/espresso-he.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>

- Click on the **View Test** button to check the logs in the App Automation Dashboard. 
<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/espresso/espress-he-app.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>


## Additional Details

### Sharding

**Sharding** is a mobile test automation technique that distributes test cases across multiple real and virtual devices via parallel testing. It entails breaking down test suites into smaller subsets known as shards and running each shard concurrently on separate test execution environments.

There are two types of Sharding:

### Manual Sharding
This feature enables users to manually specify shards along with their definitions, offering multiple strategies such as class, package, and more. By doing so, users can have greater flexibility and control over the sharding process.


### Sample Manual Sharding YAML File

```bash
version: "0.2"
concurrency: 2
runson: android
autosplit: false

framework:
  name: "android/espresso"
  args:
    buildName: "Espresso"
    video: true
    deviceLog: true
    
    # You can use either the appId (lt://APP1234567) or provide the path of the application using appPath. Both examples are given below.

    #highlight-next-line
    appPath: Proverbial.apk 

    testSuitePath: ProverbialExpressoTest.apk
    # We have used the appPath and testSuitePath here. 

    
    #highlight-next-line
    appId: lt://APP1010461471690377432133206
    testSuiteAppId: lt://APP10104592261690377454846669
    # We have used the appId and testSuiteAppID here.

    deviceSelectionStrategy: all
    devices: ["Galaxy.*", "Pixel.*"]

    shards:
      mappings:
     - name: shard1
        strategy: "class"
        values: ["com.lambdatest.proverbial.BrowserTest"]
    # The strategy for this shard is based on "class".
    # This shard will run all tests from the class com.lambdatest.proverbial.BrowserTest.
     - name: shard2
       strategy: "package"
       values: ["com.lambdatest.proverbial"]
    # The strategy for this shard is based on "package". 
    # This shard will run all tests that belong to the package com.lambdatest.proverbial.l.
     - name: shard3
       strategy: "skipClass"
       values: ["com.lambdatest.proverbial.BrowserTest"]
    # The strategy for this shard is to skip a specific class. 
    # This shard will avoid running tests from the class com.lambdatest.proverbial.BrowserTest.
```

### Auto Sharding
The system intelligently determines the distribution of tests across devices, employing specific criteria to optimize the testing process.

### Sample Auto Sharding YAML File

```bash
version: "0.2"
concurrency: 2
runson: android
autosplit: true

framework:
  name: "android/espresso"
  args:
    buildName: "Espresso"
    video: true
    deviceLog: true
    
    # You can use either the appId (lt://APP1234567) or provide the path of the application using appPath. Both examples are given below.

    #highlight-next-line
    appPath: Proverbial.apk 

    testSuitePath: ProverbialExpressoTest.apk
    # We have used the appPath and testSuitePath here. 

    
    #highlight-next-line
    appId: lt://APP1010461471690377432133206
    testSuiteAppId: lt://APP10104592261690377454846669
    # We have used the appId and testSuiteAppID here.

    deviceSelectionStrategy: all
    devices: ["Galaxy.*", "Pixel.*"]

```

:::tip

- **When Shards are added :**
   - If you are using the `deviceSelectorStrategy: all`,then in that case all the specified shards will be executed on every device available.<br/>

   - If you are using the `deviceSelectorStrategy: any`, then in that case all the specified shards will be executed on just one device from the provided list.<br/>

- **When Shards are not added :**
   - If you are using the `deviceSelectorStrategy: all`, then in that case the tests will be executed on all mentioned devices in `.yaml` based on the concurrency.  <br/>

   - If you are using the `deviceSelectorStrategy: any`, then in that case all the specified tests will be executed on each device from the provided list, considering the concurrency setting. <br/>
:::

## Conclusion
By following the instructions in this documentation, you can seamlessly execute the espresso tests on HyperExecute, leveraging its secure cloud infrastructure, advanced features, and optimized test execution workflow.


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
      espresso Testing </span>
    </li>
  </ul>
</nav>
