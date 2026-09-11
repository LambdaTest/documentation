---
id: sharding-xcui
title: Sharding for XCUI
sidebar_label: Sharding for XCUI
description: This document will cover how to execute XCUI Tests on real devices with HyperExecute. Before starting, please make sure you have App Automation and HyperExecute Cloud plans on your account.
keywords:
  - sharding
  - XCUIT
  - appium
  - real devices
  - testmu ai cloud platform
  - app automation
  - real time testing
  - appium automation

url: https://www.testmuai.com/support/docs/sharding-rd-hyperexec/
site_name: TestMu AI
slug: sharding-rd-hyperexec/
canonical: https://www.testmuai.com/support/docs/sharding-rd-hyperexec/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RealDeviceTag from '../src/component/realDevice';
import VirtualDeviceTag from '../src/component/virtualDevice';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import { CookieTrackingSignup } from '@site/src/component/CookieTracking';


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
          "name": "Sharding in XCUIT",
          "item": `${BRAND_URL}/support/docs/sharding-rd-hyperexec/`
        }]
      })
    }}
></script>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/sharding-rd-hyperexec/"
    },
    "headline": "Sharding for XCUI",
    "description": "This document will cover how to execute XCUI Tests on real devices with HyperExecute. Before starting, please make sure you have App Automation and HyperExecute Cloud plans on your account.",
    "url": "https://www.testmuai.com/support/docs/sharding-rd-hyperexec/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "App Automation",
    "keywords": [
      "sharding",
      "XCUIT",
      "appium"
    ],
    "proficiencyLevel": "Beginner",
    "dependencies": "You have access to TestMu AI username and accessKey. If you have not registered yet, you can do the same by visiting our website. You will be able to access the credentials at the TestMu AI Profile; Make sure you have App Automation and HyperExecute Cloud plans on your account..",
    "author": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "url": "https://www.testmuai.com/"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
      "url": "https://www.testmuai.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testmuai.com/logo.png"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testmu-ai/",
        "https://x.com/testmuai",
        "https://www.youtube.com/@TestMuAI"
      ]
    },
    "hasPart": [
      {
        "@type": "SoftwareSourceCode",
        "name": "depending on the strategy value configured.",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n<\/CodeBlock>\n<\/div>\n<\/TabItem>\n\n<TabItem value=\"virtual-device\" label=\"Virtual Device\">\n<div className=\"lambdatest__codeblock\">\n<CodeBlock className=\"language-yaml\">\n\n```yaml title=\"SampleYamlFile.yaml\"\nversion: \"0.2\"\nconcurrency: 2\nrunson: ios\n\n# Set autosplit to true to enable auto sharding.\n# The system will automatically split and distribute tests across the selected devices.\n#highlight-next-line\nautosplit: false\n\nmaxRetries: 2\nretryOnFailure: true\nglobalTimeout: 180 #MAXQUEUETIMEOUT\n\nframework:\n  name: \"ios/xcui\"\n  args:\n    buildName: \"XCUIT\"\n    video: true\n    networkLog: true\n    deviceLog: true\n\n    # You can use either the appId (lt://APP1234567) or provide the path of the application using appPath.\n    # Both examples are given below.\n\n    appPath: ProverbialTest.ipa\n    testSuitePath: LambdaUiKitIOS.ipa\n    # We have used the appPath and testSuitePath here.\n\n    appId: lt://APP1010461471690377432133206\n    testSuiteAppId: lt://APP10104592261690377454846669\n    # We have used the appId and testSuiteAppID here.\n\n    deviceSelectionStrategy: all\n    devices: [\"iPhone 12 Pro-14\", \"iPad Air (2019)-16\"]\n\n    #highlight-next-line\n    isVirtualDevice: true\n\n    shards:\n      mappings:\n        - name: shard1\n          strategy: \"only-testing/skip-testing\"\n          values:\n            - \"<className>/<className/testName>\"\n        # The strategy for this shard is based on \"only-testing/skip-testing\".\n        # This shard will either execute only the specified test(s) or skip the specified test(s),\n        # depending on the strategy value configured.\n\n        - name: shard2\n          strategy: \"only-testing/skip-testing\"\n          values:\n            - \"<className>/<className/testName>\"\n            - \"<className>/<className/testName>\"\n        # The strategy for this shard is based on \"only-testing/skip-testing\".\n        # This shard will either execute only the specified test(s) or skip the specified test(s),\n        # depending on the strategy value configured."
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 2",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "chmod u+x <cliFileNAme>\n./<cliFileNAme> --u <userName> --k <accessKey> --verbose -i <yamlFileName>.yaml"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "You can refer to this example and screenshot below",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "./hyperexecute --u my_user_name --k xyx123abc --verbose -i hyperexecute.yaml"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Filters in Sharding",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "filters:\n      attributes:\n      - type: className\n        values: [\"LambdaUiKitIOSUITests\",\"LambdaUiKitIOSUITestsLaunchTests\"]\n      - type: testName\n        values: [\"LambdaUiKitIOSUITests/testverifyAppLaunch\"]"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "To implement the XCTestPlan in Sharding, add the xctestplan flag along with app and testSuite in the framework flag as shown below",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "framework:\n  name: \"ios/xcui\"\n  args:\n    \"app\" : \"lt://APP_ID\",\n    \"testSuite\": \"lt://TEST_SUITE_ID\",\n    \"xctestplan\" : \"lt://YOUR_XC_TEST_PLAN_ID\" #only when you want to use XCTestPlan"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "Uploading your App & Test suite",
      "description": "This document will cover how to execute XCUI Tests on real devices with HyperExecute. Before starting, please make sure you have App Automation and HyperExecute Cloud plans on your account.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Upload Your Application",
          "text": "Upload your iOS application (.ipa file) to the TestMu AI servers using our REST API. You need to provide your Username and AccessKey in the format ``Username:AccessKey`` in the cURL command for authentication. Make sure to add the path of the appFile in the cURL request. Here is an example cURL request to upload your app using our REST API: Using App File: {`curl -u \"${ YOURLAMBDATESTUSERNAME()}:${ YOURLAMBDATESTACCESS_KEY()}\" \\\\ --location --request POST 'https://manual-api.lambdatest.com/app/uploadFramework' \\\\ --form 'appFile=@\"/Users/macuser/Downloads/proverbial.ipa\"' \\\\ --form 'type=\"xcuit-ios\"'`} {curl -u \"${ YOURLAMBDATESTUSERNAME()}:${ YOURLAMBDATESTACCESS_KEY()}\" -X POST \"https://manual-api.lambdatest.com/app/uploadFramework\" -F \"appFile=@\"/Users/macuser/Downloads/proverbial.ipa\"\" -F \"type=\"xcuit-ios\"\"} Response of above cURL will be a JSON object containing the App URL of the format - APP123456789123456789 and will be used in the last step as appId.",
          "url": "https://www.testmuai.com/support/docs/sharding-rd-hyperexec/#step-1-upload-your-application"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Uploading Test Suite",
          "text": "Upload your test suite (.ipa file) to the TestMu AI servers using our REST API. You need to provide your Username and AccessKey in the format Username:AccessKey in the cURL command for authentication. Make sure to add the path of the appFile in the cURL request. Here is an example cURL request to upload your app using our REST API: Using App File: {`curl -u \"${ YOURLAMBDATESTUSERNAME()}:${ YOURLAMBDATESTACCESS_KEY()}\" \\\\ --location --request POST 'https://manual-api.lambdatest.com/app/uploadFramework' \\ --form 'appFile=@\"/Users/macuser/Downloads/proverbialiosxcuitest.ipa\"' \\ --form 'type=\"xcuit-ios\"'`} {curl -u \"${ YOURLAMBDATESTUSERNAME()}:${ YOURLAMBDATESTACCESSKEY()}\" --location --request POST \"https://manual-api.lambdatest.com/app/uploadFramework\" --form \"appFile=@\"C:/Users/varunkumarb/Downloads/proverbialios_xcuitest.ipa\"\" --form \"type=\\\"xcuit-ios\\\"\"} Response of above cURL will be a JSON object containing the App URL of the format - APP123456789123456789 and will be used in the next step as `testSuiteAppId`",
          "url": "https://www.testmuai.com/support/docs/sharding-rd-hyperexec/#step-2-uploading-test-suite"
        }
      ]
    }
  ]) }}
/>

<RealDeviceTag value="Real Device" /> <VirtualDeviceTag value="Virtual Device" />
Generally the XCUI tests are run in sequence which is a time taking process. This document explains how you can speed up this process by splitting the tests into **shards**. We can divide the various tests into shards which can run parallelly and save time while running various XCUI tests. 

This document will cover how to execute **XCUI Tests** on real devices with **HyperExecute**. HyperExecute is a smart test orchestration platform to run end-to-end tests at the fastest speed possible. HyperExecute is configured using a YAML file.

:::tip Note
You can learn more about the HyperExecute portal and UI by going through our [Guided Walkthrough](/support/docs/hyperexecute-guided-walkthrough/) page. It contains all the relevant information that you need to optimise your testing process with HyperExecute. 
:::

## Objectives

---

By the end of this topic, you will be able to:
1. Speed up your XCUI tests with sharding
2. Learn more about HyperExecute
3. Explore advanced features of <BrandName />

## Prerequisites

---

Before you start performing your App automation testing with XCUI, please make sure:

- You have access to <BrandName /> username and accessKey. If you have not registered yet, you can do the same by visiting our <a href="https://www.testmuai.com/register/" onClick={CookieTrackingSignup}>website</a>. You will be able to access the credentials at the [<BrandName /> Profile](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/details/profile)
- Make sure you have App Automation and HyperExecute Cloud plans on your account.

## Uploading your App & Test suite

### Step 1: Upload Your Application

Upload your **iOS** application (.ipa file) to the <BrandName /> servers using our **REST API**. You need to provide your **Username** and **AccessKey** in the format ```Username:AccessKey``` in the **cURL** command for authentication. Make sure to add the path of the **appFile** in the cURL request.

Here is an example cURL request to upload your app using our REST API:


**Using App File:**

<Tabs className="docs__val">

<TabItem value="bash" label="Linux / MacOS" default>

  <VerifiedTag value="Verified" />

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

  <VerifiedTag value="Verified" />

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

### Step 2: Uploading Test Suite

Upload your **test suite** (.ipa file) to the <BrandName /> servers using our **REST API**. You need to provide your **Username** and **AccessKey** in the format `Username:AccessKey` in the **cURL** command for authentication. Make sure to add the path of the **appFile** in the cURL request. Here is an example cURL request to upload your app using our REST API:

**Using App File:**

<Tabs className="docs__val">

<TabItem value="bash" label="Linux / MacOS" default>

  <VerifiedTag value="Verified" />

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

  <VerifiedTag value="Verified" />

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
## How to use Sharding

---

1. Firstly, create a folder on your local.
2. Download the HyperExecute CLI file and put it under this folder. You may download HyperExecute CLI from either of the following ways:
- Download it from our HyperExecute documentation page [here](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/), or
- "Get Started" through HyperExecute [onboarding](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/quickstart) and download the CLI.
3. Refer to the sample `.ipa` files and `.yaml` file given below. Put all of them under this folder.
- [ProverbialTest.ipa](https://prod-mobile-artefacts.lambdatest.com/assets/docs/ProverbialTest.ipa)
- [LambdaUiKitIOS.ipa](https://prod-mobile-artefacts.lambdatest.com/assets/docs/LambdaUiKitIOS.ipa) 

Refer to the sample `.yaml` file here

<VerifiedTag value="Verified" />

<Tabs className="docs__val">

<TabItem value="real-device" label="Real Device" default>
<div className="lambdatest__codeblock">
<CodeBlock className="language-yaml">

```yaml title="SampleYamlFile.yaml"
version: "0.2"
concurrency: 2
runson: ios

# Set autosplit to true to enable auto sharding.
# The system will automatically split and distribute tests across the selected devices.
#highlight-next-line
autosplit: false

maxRetries: 2
retryOnFailure: true
globalTimeout: 180 #MAXQUEUETIMEOUT

framework:
  name: "ios/xcui"
  args:
    buildName: "XCUIT"
    video: true
    networkLog: true
    deviceLog: true

    # You can use either the appId (lt://APP1234567) or provide the path of the application using appPath.
    # Both examples are given below.

    appPath: ProverbialTest.ipa
    testSuitePath: LambdaUiKitIOS.ipa
    # We have used the appPath and testSuitePath here.

    appId: lt://APP1010461471690377432133206
    testSuiteAppId: lt://APP10104592261690377454846669
    # We have used the appId and testSuiteAppID here.

    deviceSelectionStrategy: all
    devices: ["iPhone 12 Pro-14", "iPad Air (2019)-16"]

    shards:
      mappings:
        - name: shard1
          strategy: "only-testing/skip-testing"
          values:
            - "<className>/<className/testName>"
        # The strategy for this shard is based on "only-testing/skip-testing".
        # This shard will either execute only the specified test(s) or skip the specified test(s),
        # depending on the strategy value configured.

        - name: shard2
          strategy: "only-testing/skip-testing"
          values:
            - "<className>/<className/testName>"
            - "<className>/<className/testName>"
        # The strategy for this shard is based on "only-testing/skip-testing".
        # This shard will either execute only the specified test(s) or skip the specified test(s),
        # depending on the strategy value configured.
```

</CodeBlock>
</div>
</TabItem>

<TabItem value="virtual-device" label="Virtual Device">
<div className="lambdatest__codeblock">
<CodeBlock className="language-yaml">

```yaml title="SampleYamlFile.yaml"
version: "0.2"
concurrency: 2
runson: ios

# Set autosplit to true to enable auto sharding.
# The system will automatically split and distribute tests across the selected devices.
#highlight-next-line
autosplit: false

maxRetries: 2
retryOnFailure: true
globalTimeout: 180 #MAXQUEUETIMEOUT

framework:
  name: "ios/xcui"
  args:
    buildName: "XCUIT"
    video: true
    networkLog: true
    deviceLog: true

    # You can use either the appId (lt://APP1234567) or provide the path of the application using appPath.
    # Both examples are given below.

    appPath: ProverbialTest.ipa
    testSuitePath: LambdaUiKitIOS.ipa
    # We have used the appPath and testSuitePath here.

    appId: lt://APP1010461471690377432133206
    testSuiteAppId: lt://APP10104592261690377454846669
    # We have used the appId and testSuiteAppID here.

    deviceSelectionStrategy: all
    devices: ["iPhone 12 Pro-14", "iPad Air (2019)-16"]

    #highlight-next-line
    isVirtualDevice: true

    shards:
      mappings:
        - name: shard1
          strategy: "only-testing/skip-testing"
          values:
            - "<className>/<className/testName>"
        # The strategy for this shard is based on "only-testing/skip-testing".
        # This shard will either execute only the specified test(s) or skip the specified test(s),
        # depending on the strategy value configured.

        - name: shard2
          strategy: "only-testing/skip-testing"
          values:
            - "<className>/<className/testName>"
            - "<className>/<className/testName>"
        # The strategy for this shard is based on "only-testing/skip-testing".
        # This shard will either execute only the specified test(s) or skip the specified test(s),
        # depending on the strategy value configured.
```

</CodeBlock>
</div>
</TabItem>

</Tabs>

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


4. Go to the location of the folder on the terminal and run the below commands. After the second command, you may need to give permission on **System Settings/Privacy & Security**. 

<VerifiedTag value="Verified" />

```bash
chmod u+x <cliFileNAme>
./<cliFileNAme> --u <userName> --k <accessKey> --verbose -i <yamlFileName>.yaml
```

You can refer to this example and screenshot below:

<VerifiedTag value="Verified" />

```
./hyperexecute --u my_user_name --k xyx123abc --verbose -i hyperexecute.yaml
```
<img loading="lazy" src={require('../assets/images/app-automation/example-folder.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>


5. After the test is started you can follow the test on the below links.
- [<BrandName /> Automation](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/build)
<img loading="lazy" src={require('../assets/images/app-automation/sharding-appauto.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>
- [<BrandName /> HyperExecute](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/hyperexecute)
<img loading="lazy" src={require('../assets/images/app-automation/sharding-he.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>

:::note
**globalTimeout** ​ The globalTimeout value determines the maximum duration (in minutes) of a Job . It can be set between 5 and 180 minutes, and has a default value of 10 minutes. 
:::

## Filters in Sharding
You can filter the Classes / Tests that you'd like to execute using filters.
Here's an example of the same.

```java
filters:
      attributes:
      - type: className
        values: ["LambdaUiKitIOSUITests","LambdaUiKitIOSUITestsLaunchTests"]
      - type: testName
        values: ["LambdaUiKitIOSUITests/testverifyAppLaunch"]
```
This example will run only the 2 classes & one test as mentioned from the TestSuite.

## XCTestPlan in Sharding
To implement the XCTestPlan in Sharding, add the `xctestplan` flag along with `app` and `testSuite` in the [framework](/support/docs/hyperexecute-yaml-version0.2/#framework) flag as shown below:

<VerifiedTag value="Verified" />

```yaml
framework:
  name: "ios/xcui"
  args:
    "app" : "lt://APP_ID",
    "testSuite": "lt://TEST_SUITE_ID",
    "xctestplan" : "lt://YOUR_XC_TEST_PLAN_ID" #only when you want to use XCTestPlan
```

> Refer the documentation to learn how to use [XCTestPlan feature](/support/docs/xctestplan/).

## Additional Links
- [Advanced Configuration for Capabilities](/support/docs/desired-capabilities-in-appium/)
- [How to test locally hosted apps](/support/docs/testing-locally-hosted-pages/)
- [How to integrate <BrandName /> with CI/CD](/support/docs/integrations-with-ci-cd-tools/)
