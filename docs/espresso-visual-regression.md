---
id: espresso-visual-regression
title: Getting Started With Visual Regression Testing Using Espresso On SmartUI Real Devices
sidebar_label: Espresso
description: Dive into our detailed Appium Visual Regression support documentation for step-by-step guidance! Efficiently perform visual testing, manage applications, and ensure your mobile apps are visually perfect before launch.
keywords:
  - Visual Regression
  - Visual Regression Testing Guide
  - Visual Regression Test Automation
  - Visual Regression Automation Testing
  - Running Visual Regression Tests
  - Visual Regression Testing Online
  - Run Visual Regression
  - Visual Regression Run Specific Test
  - Visual Regression Testing Environment
  - How to Run Visual Regression Tests

url: https://www.testmuai.com/support/docs/espresso-visual-regression/
site_name: TestMu AI
slug: espresso-visual-regression/
canonical: https://www.testmuai.com/support/docs/espresso-visual-regression/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import CodeBlock from '@theme/CodeBlock';
import NewTag from '../src/component/newTag';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import VerifiedTag from '@site/src/component/verifiedTag';


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
          "name": "SmartUI-Hooks",
          "item": `${BRAND_URL}/support/docs/espresso-visual-regression/`
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
      "@id": "https://www.testmuai.com/support/docs/espresso-visual-regression/"
    },
    "headline": "Getting Started With Visual Regression Testing Using Espresso On SmartUI Real Devices",
    "description": "Dive into our detailed Appium Visual Regression support documentation for step-by-step guidance! Efficiently perform visual testing, manage applications, and ensure your mobile apps are visually perfect before launch.",
    "url": "https://www.testmuai.com/support/docs/espresso-visual-regression/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "SmartUI",
    "keywords": [
      "Visual Regression",
      "Visual Regression Testing Guide",
      "Visual Regression Test Automation"
    ],
    "proficiencyLevel": "Beginner",
    "dependencies": "Your TestMu AI Username and Access key.; Access to an Android app (.apk) and an Espresso Test app (.apk file).; Go to TestMu AI SmartUI and login along with your credentials..",
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
        "name": "Step 3: Update your App Configurations",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "implementation 'io.github.lambdatest:lambdatest-espresso:1.0.1'"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 3: Update your App Configurations",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\nNow build your application.\n\n## Step 4: Upload your Application\n\nTo begin testing, upload your Android application (.apk file) to <BrandName />'s servers. You'll use our **REST API** for this process.\n\n- **Authentication :** You'll need your <BrandName /> Username and AccessKey. Combine them in the format `Username:AccessKey`.\n- **Uploading the App :** Use **cURL command** to send a request to our API. The request should include the path to your application file (**appFile**).\n\n<Tabs className='docs__val'>\n\n<TabItem value='bash' label='Linux / MacOS' default>\n\n  <div className=\"lambdatest__codeblock\">\n    <CodeBlock className=\"language-bash\">\n{`curl -u \"${YOUR_LAMBDATEST_USERNAME}:${YOUR_LAMBDATEST_ACCESS_KEY}\" --location --request POST 'https://manual-api.lambdatest.com/app/uploadFramework' --form 'appFile=@\"<PATH_OF_YOUR_ANDROID_APP>\"' --form 'type=\"espresso-android\"'`}\n  <\/CodeBlock>\n<\/div>\n\n<\/TabItem>\n\n<TabItem value='powershell' label='Windows' default>\n\n  <div className=\"lambdatest__codeblock\">\n    <CodeBlock className=\"language-powershell\">\n{`curl -u \"${YOUR_LAMBDATEST_USERNAME}:${YOUR_LAMBDATEST_ACCESS_KEY}\" --location --request POST \"https://manual-api.lambdatest.com/app/uploadFramework\" --form \"appFile=@\"<PATH_OF_YOUR_ANDROID_APP>\"\" --form \"type=\\\"espresso-android\\\"\"`}\n  <\/CodeBlock>\n<\/div>\n\n<\/TabItem>\n<\/Tabs>\n\n:::info\n- Provide the path of your android application in the above URL in place of `<PATH_OF_YOUR_ANDROID_APP>`\n- Response of above cURL will be a **JSON** object containing the `App URL` of the format - `lt://APP123456789123456789` and will be used in the last step.\n:::\n\n## Step 5: Upload Your Test Suite\n\nUpload your Espresso test suite (.apk) file to <BrandName /> servers using our REST API.\n\nThe following sample cURL command shows how to upload a test suite:\n\n<Tabs className='docs__val'>\n\n<TabItem value='bash' label='Linux / MacOS' default>\n\n  <div className=\"lambdatest__codeblock\">\n    <CodeBlock className=\"language-bash\">\n{`curl -u \"${YOUR_LAMBDATEST_USERNAME}:${YOUR_LAMBDATEST_ACCESS_KEY}\" --location --request POST 'https://manual-api.lambdatest.com/app/uploadFramework' --form 'appFile=@\"<PATH_OF_YOUR_TEST_SUITE_APP>\"' --form 'type=\"espresso-android\"'`}\n  <\/CodeBlock>\n<\/div>\n\n<\/TabItem>\n\n<TabItem value='powershell' label='Windows' default>\n\n  <div className=\"lambdatest__codeblock\">\n    <CodeBlock className=\"language-powershell\">\n{`curl -u \"${YOUR_LAMBDATEST_USERNAME}:${YOUR_LAMBDATEST_ACCESS_KEY}\" --location --request POST \"https://manual-api.lambdatest.com/app/uploadFramework\" --form \"appFile=@\"<PATH_OF_YOUR_TEST_SUITE_APP>\"\" --form \"type=\\\"espresso-android\\\"\"`}\n  <\/CodeBlock>\n<\/div>\n\n<\/TabItem>\n<\/Tabs>\n\n:::info\n- Provide the path of your android application in the above URL in place of `<PATH_OF_YOUR_TEST_SUITE_APP>`\n- Response of above cURL will be a **JSON** object containing the `App URL` of the format - `lt://APP123456789123456789` and will be used in the last step.\n:::\n\n## Step 6: Executing The Test\n\n- You will need **base64 encoded authentication** in order to execute your Espresso automation test suite. Enter your `username:accesskey`\u00a0in **[Basic Authentication Header Generator](https://mixedanalytics.com/knowledge-base/api-connector-encode-credentials-to-base-64/)** to generate your auth token.\n\nTake note of the\u00a0base64\u00a0encoded authentication which needs to be added in the next step.\n\n<div className=\"lambdatest__codeblock\">\n    <CodeBlock className=\"language-powershell\">\n{`${YOUR_LAMBDATEST_USERNAME}:${YOUR_LAMBDATEST_ACCESS_KEY}`}\n  <\/CodeBlock>\n<\/div>\n\n- Once you have uploaded your app and test suite, you can execute your test by running the following command:\n \n> Enter your **BASIC_AUTH_TOKEN**, **APP_ID** (generated in the fourth step) and **TEST_SUITE_ID** (generated in the fifth step) in the below command.\n\n```javascript\ncurl --location 'https://mobile-api.lambdatest.com/framework/v1/espresso/build' \\\n--header 'Authorization: Basic BASIC_AUTH_TOKEN' \\\n--header 'Content-Type: application/json' \\\n--data '{\n    \"app\": \"APP_ID\", //enter your app-id\n    \"testSuite\": \"TEST_SUITE_ID\", //enter your test-suite id\n    \"device\": [\n        \"Galaxy.*\"\n    ],\n    \"smartUI.project\": \"Espresso-SmartUI-Project\", \n    \"smartUI.build\": \"Espresso-SmartUI-Build\", // Optional\n    \"smartUI.cropNavigationBar\" : true, // Optional (By default false)\n    \"smartUI.cropStatusBar\" : true, // Optional (By default true)\n    \"queueTimeout\": 300,\n    \"IdleTimeout\": 30,\n    \"deviceLog\": true,\n    \"network\": false,\n    \"visual\": true,\n    \"build\": \"Proverbial-Espresso-Test\",\n    \"singleRunnerInvocation\": false\n}'"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "This shard will avoid running tests from the class com.lambdatest.proverbial.BrowserTest.",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n\n:::tip When shards are added\n\nIf you are using the `deviceSelectionStrategy: all`,then in that case all the specified shards will be executed on every device available.<br/>\n**For example:** If there are 3 shards, 2 devices in list (d1, d2) and test suites contains total 10 test cases.\nThen, d1 has 3 shards, i.e., total 3 devices of d1 configuration will be used. 10 test cases distributed among these 3 shards and similarly d2 also has 3 shards, i.e., total 3 devices of d2 configuration will be used. 10 test cases will be distributed among these 3 shards.\n\nIf you are using the `deviceSelectionStrategy: any`, then in that case all the mentioned shards will be executed on just one device from the provided list.<br/>\n**For example:** If there are 2 shards mentioned in `.yaml`and 3 devices mentioned, the system will create 2 shards. These shards might use any 2 devices from the given 3 configurations. It's also possible that the same device configuration could be used for both shards. In this setup, test cases will be distributed between these shards.\n:::\n\n---\n\n\n**Auto Sharding** : The system intelligently determines the distribution of tests across devices, employing specific criteria to optimize the testing process.\n\nRefer to the sample `.yaml` file here\n\n```bash title=\"SampleYamlFile.yaml\"\nversion: \"0.2\"\nconcurrency: 2\nrunson: android\nautosplit: true\nglobalTimeout: 180  #MAXQUEUETIMEOUT\n\nframework:\n  name: \"android/espresso\"\n  args:\n    buildName: \"Espresso\"\n    video: true\n    deviceLog: true\n    \n    # You can use either the appId (lt://APP1234567) or provide the path of the application using appPath. Both examples are given below.\n\n    #highlight-next-line\n    appPath: Proverbial.apk \n\n    testSuitePath: ProverbialExpressoTest.apk\n    # We have used the appPath and testSuitePath here. \n\n    \n    #highlight-next-line\n    appId: lt://APP1010461471690377432133206\n    testSuiteAppId: lt://APP10104592261690377454846669\n    # We have used the appId and testSuiteAppID here.\n\n    smartUI:\n      project: \"Espresso-SmartUI-Project\"\n\n    deviceSelectionStrategy: all\n    devices: [\"Galaxy.*\", \"Pixel.*\"]\n"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Project and Build Naming",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JSON",
        "text": "{\n  \"smartUI.project\": \"MyApp-VisualTests\",\n  \"smartUI.build\": \"Release-1.0.0\"\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Verify visual: true is set in API request",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JSON",
        "text": "   {\n     \"visual\": true,\n     \"smartUI.project\": \"ProjectName\"\n   }"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Increase queueTimeout and IdleTimeout",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JSON",
        "text": "   {\n     \"queueTimeout\": 600,\n     \"IdleTimeout\": 60\n   }"
      }
    ],
    "dateModified": "2026-08-18T16:55:27+05:30"
  }) }}
/>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "Getting Started With Visual Regression Testing Using Espresso On SmartUI Real Devices",
      "description": "Dive into our detailed Appium Visual Regression support documentation for step-by-step guidance! Efficiently perform visual testing, manage applications, and ensure your mobile apps are visually perfect before launch.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Create a SmartUI Project",
          "text": "The first step is to create a project with the application in which we will combine all your builds run on the project. To create a SmartUI Project, follow these steps: Go to Projects page Click on the new project button Select the platform as Real Device for executing your Espresso tests. Add name of the project, approvers for the changes found, tags for any filter or easy navigation. Click on the Submit. -->",
          "url": "https://www.testmuai.com/support/docs/espresso-visual-regression/#step-1-create-a-smartui-project"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Set up your Authentication",
          "text": "Now, you need to export your environment variables LTUSERNAME and LTACCESS_KEY that are available in the TestMu AI Profile page. Run the below mentioned commands in your terminal to setup the CLI and the environment variables. {`export LTUSERNAME=\"${YOURLAMBDATEST_USERNAME}\" export LTACCESSKEY=\"${YOURLAMBDATESTACCESS_KEY}\"`} {`set LTUSERNAME=\"${YOURLAMBDATEST_USERNAME}\" set LTACCESSKEY=\"${YOURLAMBDATESTACCESS_KEY}\"`}",
          "url": "https://www.testmuai.com/support/docs/espresso-visual-regression/#step-2-set-up-your-authentication"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 3: Update your App Configurations",
          "text": "It should be in your app configurations then only you can perform the Espresso integration. In your build.gradle file, add the lambdatest-espresso dependency: Initialize this dependency in your test classes. You can do it as follows: Now build your application.",
          "url": "https://www.testmuai.com/support/docs/espresso-visual-regression/#step-3-update-your-app-configurations"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Step 4: Upload your Application",
          "text": "To begin testing, upload your Android application (.apk file) to TestMu AI's servers. You'll use our REST API for this process. Authentication : You'll need your TestMu AI Username and AccessKey. Combine them in the format Username:AccessKey. Uploading the App : Use cURL command to send a request to our API. The request should include the path to your application file (appFile). {curl -u \"${YOURLAMBDATESTUSERNAME}:${YOURLAMBDATESTACCESS_KEY}\" --location --request POST 'https://manual-api.lambdatest.com/app/uploadFramework' --form 'appFile=@\"\"' --form 'type=\"espresso-android\"'} {curl -u \"${YOURLAMBDATESTUSERNAME}:${YOURLAMBDATESTACCESS_KEY}\" --location --request POST \"https://manual-api.lambdatest.com/app/uploadFramework\" --form \"appFile=@\"\"\" --form \"type=\\\"espresso-android\\\"\"} Provide the path of your android application in the above URL in place of `` Response of above cURL will be a JSON object containing the App URL of the format - lt://APP123456789123456789 and will be used in the last step.",
          "url": "https://www.testmuai.com/support/docs/espresso-visual-regression/#step-4-upload-your-application"
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Step 5: Upload Your Test Suite",
          "text": "Upload your Espresso test suite (.apk) file to TestMu AI servers using our REST API. The following sample cURL command shows how to upload a test suite: {curl -u \"${YOURLAMBDATESTUSERNAME}:${YOURLAMBDATESTACCESS_KEY}\" --location --request POST 'https://manual-api.lambdatest.com/app/uploadFramework' --form 'appFile=@\"\"' --form 'type=\"espresso-android\"'} {curl -u \"${YOURLAMBDATESTUSERNAME}:${YOURLAMBDATESTACCESS_KEY}\" --location --request POST \"https://manual-api.lambdatest.com/app/uploadFramework\" --form \"appFile=@\"\"\" --form \"type=\\\"espresso-android\\\"\"} Provide the path of your android application in the above URL in place of `` Response of above cURL will be a JSON object containing the App URL of the format - lt://APP123456789123456789 and will be used in the last step.",
          "url": "https://www.testmuai.com/support/docs/espresso-visual-regression/#step-5-upload-your-test-suite"
        },
        {
          "@type": "HowToStep",
          "position": 6,
          "name": "Step 6: Executing The Test",
          "text": "You will need base64 encoded authentication in order to execute your Espresso automation test suite. Enter your username:accesskey in Basic Authentication Header Generator to generate your auth token. Take note of the base64 encoded authentication which needs to be added in the next step. {${YOURLAMBDATESTUSERNAME}:${YOURLAMBDATESTACCESS_KEY}} Once you have uploaded your app and test suite, you can execute your test by running the following command: Enter your BASICAUTHTOKEN, APPID (generated in the fourth step) and TESTSUITEID** (generated in the fifth step) in the below command. You can check the executed builds over at TestMu AI SmartUI.",
          "url": "https://www.testmuai.com/support/docs/espresso-visual-regression/#step-6-executing-the-test"
        }
      ]
    }
  ]) }}
/>

Espresso is a widely-used testing framework for Android, designed to simplify the process of writing reliable and efficient UI tests. It allows developers to create automated tests that simulate user interactions within an app, ensuring that the app's UI behaves as expected.

In this documentation, you will learn step-by-step how to perform regression testing and find Visual UI Regression bugs easily with the help of Smart Testing.

## Prerequisites

- Your <BrandName /> [Username and Access key](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/security).
- Access to an **Android** app (.apk) and an **Espresso Test** app (.apk file).
- Go to [`TestMu AI SmartUI`](https://www.testmuai.com/login/?redirectTo=https://smartui.lambdatest.com/) and login along with your credentials.

:::tip
If you do not have any **Android** app (.apk) and an **Android Test** app (.apk) file, you can run your sample tests on <BrandName /> by using our sample :link: [Android app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/espresso/proverbial_android-app.apk) and a sample :link: [Espresso Test](https://prod-mobile-artefacts.lambdatest.com/assets/docs/espresso/proverbial_android_espressotest-app.apk).
:::

## Step 1: Create a SmartUI Project

The first step is to create a project with the application in which we will combine all your **builds** run on the project.
To create a SmartUI Project, follow these steps:

1. Go to [Projects page](https://www.testmuai.com/login/?redirectTo=https://smartui.lambdatest.com/)
2. Click on the `new project` button
3. Select the platform as <b>Real Device </b> for executing your `Espresso` tests.
4. Add name of the project, approvers for the changes found, tags for any filter or easy navigation.
5. Click on the **Submit**.

<!-- <img loading="lazy" src={require('../assets/images/uploads/smart-ui-1.webp').default} alt="cmd" width="768" height="373" className="doc_img"/> -->

## Step 2: Set up your Authentication

Now, you need to export your environment variables LT_USERNAME and LT_ACCESS_KEY that are available in the [<BrandName /> Profile page](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/details/profile).

Run the below mentioned commands in your terminal to setup the CLI and the environment variables.

<Tabs className='docs__val'>

<TabItem value='bash' label='Linux / MacOS' default>

  <VerifiedTag value="Verified" />

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
{`export LT_USERNAME="${YOUR_LAMBDATEST_USERNAME}"
export LT_ACCESS_KEY="${YOUR_LAMBDATEST_ACCESS_KEY}"`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value='powershell' label='Windows' default>

  <VerifiedTag value="Verified" />

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
{`set LT_USERNAME="${YOUR_LAMBDATEST_USERNAME}"
set LT_ACCESS_KEY="${YOUR_LAMBDATEST_ACCESS_KEY}"`}
  </CodeBlock>
</div>

</TabItem>
</Tabs>

## Step 3: Update your App Configurations

> It should be in your app configurations then only you can perform the Espresso integration.

- In your `build.gradle` file, add the [lambdatest-espresso](https://central.sonatype.com/artifact/io.github.lambdatest/lambdatest-espresso) dependency:

<VerifiedTag value="Verified" />

```bash
implementation 'io.github.lambdatest:lambdatest-espresso:1.0.1'
```

- Initialize this dependency in your test classes. You can do it as follows:

<VerifiedTag value="Verified" />

```bash java
import io.github.lambdatest.LTApp;
public class BrowserTest {

  LTApp smartUIApp = new LTApp();
  
  @Test
  public void checkBrowserPageIsOpened() throws InterruptedException {
    String response = smartUIApp.screenshot("LT-Espresso-Test");
  }
}
```

Now build your application.

## Step 4: Upload your Application

To begin testing, upload your Android application (.apk file) to <BrandName />'s servers. You'll use our **REST API** for this process.

- **Authentication :** You'll need your <BrandName /> Username and AccessKey. Combine them in the format `Username:AccessKey`.
- **Uploading the App :** Use **cURL command** to send a request to our API. The request should include the path to your application file (**appFile**).

<Tabs className='docs__val'>

<TabItem value='bash' label='Linux / MacOS' default>

  <VerifiedTag value="Verified" />

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
{`curl -u "${YOUR_LAMBDATEST_USERNAME}:${YOUR_LAMBDATEST_ACCESS_KEY}" --location --request POST 'https://manual-api.lambdatest.com/app/uploadFramework' --form 'appFile=@"<PATH_OF_YOUR_ANDROID_APP>"' --form 'type="espresso-android"'`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value='powershell' label='Windows' default>

  <VerifiedTag value="Verified" />

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
{`curl -u "${YOUR_LAMBDATEST_USERNAME}:${YOUR_LAMBDATEST_ACCESS_KEY}" --location --request POST "https://manual-api.lambdatest.com/app/uploadFramework" --form "appFile=@"<PATH_OF_YOUR_ANDROID_APP>"" --form "type=\"espresso-android\""`}
  </CodeBlock>
</div>

</TabItem>
</Tabs>

:::info
- Provide the path of your android application in the above URL in place of `<PATH_OF_YOUR_ANDROID_APP>`
- Response of above cURL will be a **JSON** object containing the `App URL` of the format - `lt://APP123456789123456789` and will be used in the last step.
:::

## Step 5: Upload Your Test Suite

Upload your Espresso test suite (.apk) file to <BrandName /> servers using our REST API.

The following sample cURL command shows how to upload a test suite:

<Tabs className='docs__val'>

<TabItem value='bash' label='Linux / MacOS' default>

  <VerifiedTag value="Verified" />

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
{`curl -u "${YOUR_LAMBDATEST_USERNAME}:${YOUR_LAMBDATEST_ACCESS_KEY}" --location --request POST 'https://manual-api.lambdatest.com/app/uploadFramework' --form 'appFile=@"<PATH_OF_YOUR_TEST_SUITE_APP>"' --form 'type="espresso-android"'`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value='powershell' label='Windows' default>

  <VerifiedTag value="Verified" />

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
{`curl -u "${YOUR_LAMBDATEST_USERNAME}:${YOUR_LAMBDATEST_ACCESS_KEY}" --location --request POST "https://manual-api.lambdatest.com/app/uploadFramework" --form "appFile=@"<PATH_OF_YOUR_TEST_SUITE_APP>"" --form "type=\"espresso-android\""`}
  </CodeBlock>
</div>

</TabItem>
</Tabs>

:::info
- Provide the path of your android application in the above URL in place of `<PATH_OF_YOUR_TEST_SUITE_APP>`
- Response of above cURL will be a **JSON** object containing the `App URL` of the format - `lt://APP123456789123456789` and will be used in the last step.
:::

## Step 6: Executing The Test

- You will need **base64 encoded authentication** in order to execute your Espresso automation test suite. Enter your `username:accesskey` in **[Basic Authentication Header Generator](https://mixedanalytics.com/knowledge-base/api-connector-encode-credentials-to-base-64/)** to generate your auth token.

Take note of the base64 encoded authentication which needs to be added in the next step.

<VerifiedTag value="Verified" />

<div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
{`${YOUR_LAMBDATEST_USERNAME}:${YOUR_LAMBDATEST_ACCESS_KEY}`}
  </CodeBlock>
</div>

- Once you have uploaded your app and test suite, you can execute your test by running the following command:
 
> Enter your **BASIC_AUTH_TOKEN**, **APP_ID** (generated in the fourth step) and **TEST_SUITE_ID** (generated in the fifth step) in the below command.

<VerifiedTag value="Verified" />

```javascript
curl --location 'https://mobile-api.lambdatest.com/framework/v1/espresso/build' \
--header 'Authorization: Basic BASIC_AUTH_TOKEN' \
--header 'Content-Type: application/json' \
--data '{
    "app": "APP_ID", //enter your app-id
    "testSuite": "TEST_SUITE_ID", //enter your test-suite id
    "device": [
        "Galaxy.*"
    ],
    "smartUI.project": "Espresso-SmartUI-Project", 
    "smartUI.build": "Espresso-SmartUI-Build", // Optional
    "smartUI.cropNavigationBar" : true, // Optional (By default false)
    "smartUI.cropStatusBar" : true, // Optional (By default true)
    "queueTimeout": 300,
    "IdleTimeout": 30,
    "deviceLog": true,
    "network": false,
    "visual": true,
    "build": "Proverbial-Espresso-Test",
    "singleRunnerInvocation": false
}'
```

> You can check the executed builds over at [<BrandName /> SmartUI](https://www.testmuai.com/login/?redirectTo=https://smartui.lambdatest.com/).

## Types of Sharding
Sharding can be categorized into two types:

**Manual Sharding**: This feature enables users to manually specify shards along with their definitions, offering multiple strategies such as class, package, and more. By doing so, users can have greater flexibility and control over the sharding process.

Refer to the sample `.yaml` file here

<VerifiedTag value="Verified" />

```bash title="SampleYamlFile.yaml"
version: "0.2"
concurrency: 2
runson: android
autosplit: false
globalTimeout: 180  #MAXQUEUETIMEOUT

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
    
    smartUI:
      project: "Espresso-SmartUI-Project"

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


:::tip When shards are added

If you are using the `deviceSelectionStrategy: all`,then in that case all the specified shards will be executed on every device available.<br/>
**For example:** If there are 3 shards, 2 devices in list (d1, d2) and test suites contains total 10 test cases.
Then, d1 has 3 shards, i.e., total 3 devices of d1 configuration will be used. 10 test cases distributed among these 3 shards and similarly d2 also has 3 shards, i.e., total 3 devices of d2 configuration will be used. 10 test cases will be distributed among these 3 shards.

If you are using the `deviceSelectionStrategy: any`, then in that case all the mentioned shards will be executed on just one device from the provided list.<br/>
**For example:** If there are 2 shards mentioned in `.yaml`and 3 devices mentioned, the system will create 2 shards. These shards might use any 2 devices from the given 3 configurations. It's also possible that the same device configuration could be used for both shards. In this setup, test cases will be distributed between these shards.
:::

---


**Auto Sharding** : The system intelligently determines the distribution of tests across devices, employing specific criteria to optimize the testing process.

Refer to the sample `.yaml` file here

<VerifiedTag value="Verified" />

```bash title="SampleYamlFile.yaml"
version: "0.2"
concurrency: 2
runson: android
autosplit: true
globalTimeout: 180  #MAXQUEUETIMEOUT

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

    smartUI:
      project: "Espresso-SmartUI-Project"

    deviceSelectionStrategy: all
    devices: ["Galaxy.*", "Pixel.*"]

```


:::tip When shards aren't added

If you are using the `deviceSelectionStrategy: all`, then in that case the tests will be executed on all mentioned devices in `.yaml` based on the concurrency.  <br/>
**For example:** If the concurrency is 3, 2 devices in list (d1, d2) and test suites contains total 10 test cases.
Then, d1 has 3 shards, i.e., total 3 devices of d1 configuration will be used. 10 test cases distributed among these 3 shards and similarly d2 also has 3 shards, i.e., total 3 devices of d2 configuration will be used. 10 test cases will be distributed among these 3 shards.

If you are using the `deviceSelectionStrategy: any`, then in that case all the specified tests will be executed on each device from the provided list, considering the concurrency setting. <br/>
**For example:** If the concurrency is set to 2 and 3 devices mentioned, the system will create 2 shards. These shards might use any 2 devices from the given 3 configurations. It's also possible that the same device configuration could be used for both shards. In this setup, test cases will be distributed between these shards.
:::

## Smart Crop With SmartUI

The all-new **Real Device mobile notification status bar and navigation bar crop** feature in SmartUI allows you to take your visual regression testing workflows to the next level. With Smart Crop, you can crop the status bar and navigation bar or footer from screenshots, enabling them to focus solely on the core UI elements during visual comparisons.

By leveraging machine learning algorithms, it accurately detects and crops the status bar and navigation bar from screenshots. With precise image processing techniques, SmartUI precisely identifies the location of status bar elements. By excluding it from visual comparisons, the focus is solely on critical UI elements.  

| Original Screenshot | Cropped Screenshot |
|---------------------|--------------------|
| <img loading="lazy" src={require('../assets/images/smart-visual-testing/screenshot.webp').default} alt="Profile" width="1360" height="603" className="doc_img"/> | <img loading="lazy" src={require('../assets/images/smart-visual-testing/cropped_ss.jpg').default} alt="Profile" width="1360" height="603" className="doc_img"/> |

## Best Practices

<VerifiedTag value="Verified" />

<Tabs className='docs__val' groupId='best-practices'>
<TabItem value='project-and-build-naming' label='Project and Build Naming' default>

### Project and Build Naming

- Use descriptive, consistent names for projects and builds
- Include app version or release info in build names
- Avoid special characters that might cause issues
- Use consistent naming conventions across test runs

**Example:**
```json
{
  "smartUI.project": "MyApp-VisualTests",
  "smartUI.build": "Release-1.0.0"
}
```

</TabItem>
<TabItem value='device-selection' label='Device Selection'>

### Device Selection

- Test on devices that match your user base
- Include multiple device configurations for comprehensive coverage
- Use device patterns for consistent testing (e.g., `Galaxy.*`, `Pixel.*`)

</TabItem>
<TabItem value='smart-crop-configuration' label='Smart Crop Configuration'>

### Smart Crop Configuration

- Enable `cropStatusBar` to focus on core UI elements
- Enable `cropNavigationBar` for Android devices
- Test cropped screenshots to ensure important content isn't removed

</TabItem>
<TabItem value='test-organization' label='Test Organization'>

### Test Organization

- Use sharding for parallel test execution
- Group related tests in same build
- Use meaningful test names for better organization

</TabItem>
<TabItem value='app-and-test-suite-management-1' label='App and Test Suite Management'>

### App and Test Suite Management

- Upload apps and test suites before execution
- Use app IDs (`lt://APP...`) for faster execution
- Keep app and test suite versions synchronized

</TabItem>
<TabItem value='app-and-test-suite-management-2' label='App and Test Suite Management'>

### App and Test Suite Management

- Upload apps and test suites before execution
- Use app IDs (`lt://APP...`) for faster execution
- Keep app and test suite versions synchronized

</TabItem>
</Tabs>

## Troubleshooting

<VerifiedTag value="Verified" />

<Tabs className='docs__val' groupId='troubleshooting'>
<TabItem value='screenshots-not-captured' label='Screenshots Not Captured' default>

### Issue: Screenshots Not Captured

**Symptoms**: Tests run but no screenshots appear in SmartUI dashboard

**Possible Causes**:
- `visual: true` not set in request
- Incorrect project name
- Network connectivity issues
- Authentication issues

**Solutions**:
1. Verify `visual: true` is set in API request:
   ```json
   {
     "visual": true,
     "smartUI.project": "ProjectName"
   }
   ```

2. Check project name matches exactly (case-sensitive)

3. Verify authentication token is correct:
   - Generate base64 encoded token from username:accesskey
   - Ensure token is included in Authorization header

4. Check network connectivity to <BrandName />

</TabItem>
<TabItem value='project-not-found-error' label='Project Not Found Error'>

### Issue: Project Not Found" Error

**Symptoms**: Error indicating SmartUI project cannot be found

**Possible Causes**:
- Project name typo or mismatch
- Project deleted
- Wrong account credentials

**Solutions**:
1. Verify project exists in SmartUI dashboard
2. Copy project name directly from dashboard
3. Check credentials match the account with the project
4. Ensure project name is in API request

</TabItem>
<TabItem value='app-upload-fails' label='App Upload Fails'>

### Issue: App Upload Fails

**Symptoms**: App upload returns error or fails

**Possible Causes**:
- Invalid APK file
- File size too large
- Network issues
- Authentication problems

**Solutions**:
1. Verify APK file is valid and not corrupted
2. Check file size limits
3. Retry upload with stable network connection
4. Verify authentication credentials

</TabItem>
<TabItem value='test-execution-fails' label='Test Execution Fails'>

### Issue: Test Execution Fails

**Symptoms**: Test suite execution fails or times out

**Possible Causes**:
- Invalid test suite APK
- Device not available
- Timeout settings too low
- Test suite errors

**Solutions**:
1. Verify test suite APK is valid
2. Check device availability
3. Increase `queueTimeout` and `IdleTimeout`:
   ```json
   {
     "queueTimeout": 600,
     "IdleTimeout": 60
   }
   ```

4. Review device logs for test errors

</TabItem>
<TabItem value='screenshots-show-incorrect-content' label='Screenshots Show Incorrect Content'>

### Issue: Screenshots Show Incorrect Content

**Symptoms**: Screenshots captured but show wrong screen or state

**Possible Causes**:
- App state issues
- Timing problems
- Navigation issues

**Solutions**:
1. Ensure app is in correct state before test execution
2. Add appropriate waits in test code
3. Verify test navigation flow

### Getting Help

If you encounter issues not covered here:

- Review the [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide) for detailed solutions
- Check [SmartUI Configuration Options](/support/docs/smartui-sdk-config-options) documentation
- See [Handling Dynamic Data](/support/docs/smartui-handle-dynamic-data) for dynamic content issues
- Visit [<BrandName /> Support](https://www.testmuai.com/support/) for additional resources
- Contact support at support@testmuai.com or use [24/7 Chat Support](https://www.testmuai.com/support/)

</TabItem>
</Tabs>


## Additional Resources

- [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide)
- [SmartUI Configuration Options](/support/docs/smartui-sdk-config-options)
- [Handling Dynamic Data](/support/docs/smartui-handle-dynamic-data)
- [Baseline Management](/support/docs/smartui-baseline-management)
- [Running Your First Project](/support/docs/smartui-running-your-first-project)
- [Appium Hooks Documentation](/support/docs/smartui-appium-hooks)


<nav aria-label='breadcrumbs'>
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
      <span className="breadcrumbs__link"> Getting Started with appium Visual Regression  </span>
    </li>
  </ul>
</nav>
