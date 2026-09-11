---
id: hyperexecute-espresso-testing
title: Espresso Testing On HyperExecute
sidebar_label: Espresso
description: Follow the instructions in this documentation, so that you can seamlessly execute Espresso tests on HyperExecute via TestMu AI.
keywords:
  - espresso
  - java
  - testmu ai java
  - framework on testmu ai
  - testng
  - app testing
  - real devices
url: https://www.testmuai.com/support/docs/hyperexecute-espresso-testing/
site_name: TestMu AI
slug: hyperexecute-espresso-testing/
canonical: https://www.testmuai.com/support/docs/hyperexecute-espresso-testing/
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
          "name": "Getting Started With espresso Testing on TestMu AI",
          "item": `${BRAND_URL}/support/docs/hyperexecute-espresso-testing/`
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
      "@id": "https://www.testmuai.com/support/docs/hyperexecute-espresso-testing/"
    },
    "headline": "Espresso Testing On HyperExecute",
    "description": "Follow the instructions in this documentation, so that you can seamlessly execute Espresso tests on HyperExecute via TestMu AI.",
    "url": "https://www.testmuai.com/support/docs/hyperexecute-espresso-testing/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
    "keywords": [
      "espresso",
      "java",
      "testmu ai java"
    ],
    "proficiencyLevel": "Beginner",
    "dependencies": "Your TestMu AI Username and Access key; HyperExecute CLI in order to initiate a test execution Job .; Setup the Environmental Variable; HyperExecute YAML file which contains all the necessary instructions.; An Android app (.apk or .aab file)..",
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
        "name": "Step 5: Configure YAML in your Test Suite (Auto Sharding)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "---\nversion: \"0.2\"\nglobalTimeout: 150\ntestSuiteTimeout: 150\ntestSuiteStep: 150\n\nconcurrency: 2\n\nrunson: android\n\nautosplit: true\n\nreport: true #to generate reports\n\nframework:\n  name: \"android/espresso\"\n  args:\n    buildName: \"Espresso\"\n    video: true\n    deviceLog: true\n    artifacts: true #to generate artifacts\n\n    # You can use either the appId (lt://APP1234567) or provide the path of the application using appPath. Both examples are given below.\n    appPath: proverbial_android.apk\n    testSuitePath: proverbial_android_expressotest.apk\n    # We have used the appPath and testSuitePath here. \n    \n    # highlight-next-line\n    appId: lt://<APP_ID>\n    # highlight-next-line\n    testSuiteAppId: lt://<TEST_SUITE_ID>\n    # We have used the appId and testSuiteAppID here.\n\n    deviceSelectionStrategy: all\n    devices: [\"Galaxy.*\", \"Pixel.*\"]\n\njobLabel: ['HYP', 'Espresso', 'Auto Sharding']"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "We have used the appId and testSuiteAppID here. (Manual Sharding)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "---\nversion: \"0.2\"\nglobalTimeout: 150\ntestSuiteTimeout: 150\ntestSuiteStep: 150\n\nconcurrency: 2\n\nrunson: android\n\nautosplit: false\n\nreport: true #to generate reports\n\nframework:\n  name: android/espresso\n  args:\n    buildName: Espresso\n    video: true\n    deviceLog: true\n    artifacts: true #to generate artifacts\n\n    # highlight-next-line\n    appPath: proverbial_android.apk\n    # highlight-next-line\n    testSuitePath: proverbial_android_expressotest.apk # We have used the appPath and testSuitePath here. \n    # highlight-next-line\n    appId: lt://APP123456789\n    # highlight-next-line\n    testSuiteAppId: lt://APP123456789 # We have used the appId and testSuiteAppID here.\n    deviceSelectionStrategy: all\n    devices:\n      - Galaxy.*\n      - Pixel.*\n    shards:\n      mappings:\n        - name: shard1\n          strategy: class\n          values:\n            - com.lambdatest.proverbial.BrowserTest\n    # The strategy for this shard is based on \"class\".\n    # This shard will run all tests from the class com.lambdatest.proverbial.BrowserTest.\n        - name: shard2\n          strategy: package\n          values:\n            - com.lambdatest.proverbial\n    # The strategy for this shard is based on \"package\". \n    # This shard will run all tests that belong to the package com.lambdatest.proverbial.l.\n        - name: shard3\n          strategy: skipClass\n          values:\n            - com.lambdatest.proverbial.BrowserTest\n    # The strategy for this shard is to skip a specific class. \n    # This shard will avoid running tests from the class com.lambdatest.proverbial.BrowserTest.\n\njobLabel: ['HYP', 'Espresso', 'Manual Sharding']"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "This shard will avoid running tests from the class com.lambdatest.proverbial.BrowserTest.",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "privateCloud: true \npreservedDevice: true"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "To generate artifacts for your Espresso tests, add the artifacts: true, and report: true flag in your YAML file",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "report: true\n\nframework:\n  name: \"android/espresso\"\n  args:\n    artifacts: true\n    ...//"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Run the below command in your terminal at the root folder of the project",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "./hyperexecute --config RELATIVE_PATH_OF_YOUR_YAML_FILE --download-artifacts --download-report"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "The espresso-skill package includes",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "espresso-skill/\n\u251c\u2500\u2500 SKILL.md\n\u2514\u2500\u2500 reference/\n    \u251c\u2500\u2500 playbook.md\n    \u2514\u2500\u2500 advanced-patterns.md"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Install a Espresso Agent Skill using the command below",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "codeRepository": "https://github.com/LambdaTest/agent-skills",
        "text": "# Clone the repo and copy the skill you need\ngit clone https://github.com/LambdaTest/agent-skills.git\ncp -r agent-skills/espresso-skill .claude/skills/\n\n# Or for Cursor / Copilot\ncp -r agent-skills/espresso-skill .cursor/skills/"
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
      "name": "Espresso Testing On HyperExecute",
      "description": "Follow the instructions in this documentation, so that you can seamlessly execute Espresso tests on HyperExecute via TestMu AI.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Setup Your Test Suite",
          "text": "You can use your own project to configure and test it. For demo purposes, we are using the sample repository. Download or Clone the code sample for the Espresso framework from the TestMu AI GitHub repository to run the tests on the HyperExecute.",
          "url": "https://www.testmuai.com/support/docs/hyperexecute-espresso-testing/#step-1-setup-your-test-suite"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Setup the CLI in your Test Suite",
          "text": "After cloning / downloading the sample repo, you need to setup the CLI and the environment variables. The CLI is used for triggering the tests on HyperExecute. It is recommend to download the CLI binary on the host system and keep it in the root directory of the suite to perform the tests on HyperExecute. You can download the CLI for your desired platform from the below mentioned links: Now, you need to export your environment variables LTUSERNAME and LTACCESSKEY* that are available in the TestMu AI Profile page. Run the below mentioned commands in your terminal to setup the CLI and the environment variables. {`export LTUSERNAME=\"${ YOURLAMBDATEST_USERNAME()}\" export LTACCESSKEY=\"${ YOURLAMBDATESTACCESS_KEY()}\"`} {`set LTUSERNAME=\"${ YOURLAMBDATEST_USERNAME()}\" set LTACCESSKEY=\"${ YOURLAMBDATESTACCESS_KEY()}\"`}",
          "url": "https://www.testmuai.com/support/docs/hyperexecute-espresso-testing/#step-2-setup-the-cli-in-your-test-suite"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 3: Upload your Application",
          "text": "Upload your android application (.apk file) to the TestMu AI servers using our REST API. You need to provide your Username and AccessKey in the format Username:AccessKey in the cURL command for authentication. Enter your local path of your android app instead of `` in the below cURL command. {`curl -u \"${ YOURLAMBDATESTUSERNAME()}:${ YOURLAMBDATESTACCESS_KEY()}\" -X POST \"https://manual-api.lambdatest.com/app/upload/realDevice\" -F \"appFile=@\"\"\" -F \"name=\"sampleApp\"\" `} Response of above cURL will be a JSON object containing the App ID of the format - `` and will be used in the next step.",
          "url": "https://www.testmuai.com/support/docs/hyperexecute-espresso-testing/#step-3-upload-your-application"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Step 4: Upload your Test Suite",
          "text": "Upload your test suite (.apk file) to the TestMu AI servers using our REST API by providing your Username and AccessKey in the format Username:AccessKey in the cURL command for authentication. Here is an example cURL request to upload your app using our REST API: Enter your local path of your test suite app instead of `` in the below cURL command.",
          "url": "https://www.testmuai.com/support/docs/hyperexecute-espresso-testing/#step-4-upload-your-test-suite"
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Step 5: Configure YAML in your Test Suite",
          "text": "Enter your ` and ` in the YAML file that you have fetched in the above step. You can use either the appId and testSuiteAppId or provide the path of the application using appPath and testSuitePath. Both examples are given below. The uploadArtefact flag is currently not available for Espresso framework tests. To run adb commands in the pre and post-steps, include the following two flags in your YAML file: To execute it, you must have purchased an equivalent number of parallels for both HyperExecute and Real Device.",
          "url": "https://www.testmuai.com/support/docs/hyperexecute-espresso-testing/#step-5-configure-yaml-in-your-test-suite"
        },
        {
          "@type": "HowToStep",
          "position": 6,
          "name": "Step 6: Generate Reports and Artifacts",
          "text": "To generate artifacts for your Espresso tests, add the artifacts: true, and report: true flag in your YAML file: To download these artifacts in your local machine, you can pass the --download-artifacts and --download-report flag with the CLI command to execute the tests as shown in the next step.",
          "url": "https://www.testmuai.com/support/docs/hyperexecute-espresso-testing/#step-6-generate-reports-and-artifacts"
        },
        {
          "@type": "HowToStep",
          "position": 7,
          "name": "Step 7: Execute your Test Suite",
          "text": "NOTE : In case of MacOS, if you get a permission denied warning while executing CLI, simply run chmod u+x ./hyperexecute to allow permission. In case you get a security popup, allow it from your System Preferences \u2192 Security & Privacy \u2192 General tab. Run the below command in your terminal at the root folder of the project: OR use this command if you have not exported your username and access key in the step 2. {./hyperexecute --user ${ YOURLAMBDATESTUSERNAME()} --key ${ YOURLAMBDATESTACCESSKEY()} --config RELATIVEPATHOFYOURYAMLFILE --download-artifacts --download-report} Visit the HyperExecute Dashboard and check your Job status. If you are stumbling upon errors during Espresso test execution, then refer to the Espresso Troubleshoot guide for detailed explanations to your common errors.",
          "url": "https://www.testmuai.com/support/docs/hyperexecute-espresso-testing/#step-7-execute-your-test-suite"
        }
      ]
    }
  ]) }}
/>

This page outlines how to execute your Espresso tests on HyperExecute with [YAML 0.2](/support/docs/hyperexecute-yaml-version0.2/)

## Prerequisites

To run the Tests on HyperExecute from your Local System, you are required:

- Your <BrandName /> [Username and Access key](/support/docs/hyperexecute-how-to-get-my-username-and-access-key/)
- [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) in order to initiate a test execution Job .
- Setup the [Environmental Variable](/support/docs/hyperexecute-environment-variable-setup/)
- [HyperExecute YAML](/support/docs/hyperexecute-yaml-version0.2/) file which contains all the necessary instructions.
- An Android app (.apk or .aab file).

## Step 1: Setup Your Test Suite

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo

Download or Clone the code sample for the Espresso framework from the <BrandName /> GitHub repository to run the tests on the HyperExecute.

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

Now, you need to export your environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in the [<BrandName /> Profile page](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/details/profile).

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

Upload your <b>_android_</b> application (.apk file) to the <BrandName /> servers using our <b>REST API</b>. You need to provide your <b>Username</b> and <b>AccessKey</b> in the format `Username:AccessKey` in the <b>cURL</b> command for authentication.

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

Upload your **test suite (.apk file)** to the <BrandName /> servers using our REST API by providing your **Username** and **AccessKey** in the format `Username:AccessKey` in the cURL command for authentication.

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

> Visit the [HyperExecute Dashboard](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/hyperexecute) and check your Job status. 

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




## Using the Espresso Agent Skill with TestMu AI
***

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
***

Install a Espresso Agent Skill using the command below:

```
# Clone the repo and copy the skill you need
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/espresso-skill .claude/skills/

# Or for Cursor / Copilot
cp -r agent-skills/espresso-skill .cursor/skills/
```

**Note**: If you prefer installing all available framework skills instead of only espresso-skill, clone the repository directly into your tool's skills directory (for example, .claude/skills/, .cursor/skills/, .gemini/skills/, or .agent/skills/).

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={`${BRAND_URL}/support/docs/`}>
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
