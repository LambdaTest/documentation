---
id: espresso-env-variables-settings
title: Setting Up Espresso Environment Variables
sidebar_label: Environment Variable Settings
description: Now you can run your Espresso framework on TestMu AI and this particular feature allows users to pass and retrieve environment variables (like STAGE, PROD, or DEV) during automated Android tests.
keywords:
  - espresso
  - environment
  - testmu ai java
  - stage
  - production
  - testng
  - app testing
  - real devices
url: https://www.testmuai.com/support/docs/espresso-env-variables-settings/
site_name: TestMu AI
slug: espresso-env-variables-settings/
canonical: https://www.testmuai.com/support/docs/espresso-env-variables-settings/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
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
          "name": "Environment Variable Settings",
          "item": `${BRAND_URL}/support/docs/espresso-env-variables-settings/`
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
      "@id": "https://www.testmuai.com/support/docs/espresso-env-variables-settings/"
    },
    "headline": "Setting Up Espresso Environment Variables",
    "description": "Now you can run your Espresso framework on TestMu AI and this particular feature allows users to pass and retrieve environment variables (like STAGE, PROD, or DEV) during automated Android tests.",
    "url": "https://www.testmuai.com/support/docs/espresso-env-variables-settings/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "App Automation",
    "keywords": [
      "espresso",
      "environment",
      "testmu ai java"
    ],
    "proficiencyLevel": "Beginner",
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
        "name": "Step 1: Create Variables in Your Test Suite",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n``` bash title=\"Examples\"\nString stage = InstrumentationRegistry.getArguments().getString(\u201cSTAGE\u201d);\nString prod = InstrumentationRegistry.getArguments().getString(\u201cPROD\u201d);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 4: Executing The Test",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "curl --location --request POST 'https://mobile-api.lambdatest.com/framework/v1/espresso/build' \\\n--header 'Authorization: Basic BASIC_AUTH_TOKEN' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"app\" : \"APP_ID\",\n    \"testSuite\": \"TEST_SUITE_ID\",\n    \"device\" :  [\"Galaxy S21 5G-12\"],\n    \"queueTimeout\": 10800,\n    \"IdleTimeout\": 150,\n    \"deviceLog\": true,\n    \"network\": false,\n   \"build\" : \"Proverbial-Espresso\"\n   # highlight-start\n   \"envVariables\":{                     //setting up environment variables\n      \"STAGE\":\"stg1\",\n      \"PROD\":\"prod1\"\n    }\n    # highlight-end\n}'"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Run your test in HyperExecute",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "---\nversion: \"0.2\"\nconcurrency: 4\nrunson: android\nautosplit: true\nmaxRetries: 2\n# highlight-start\nenv:\n  STAGE: stg1\n  PROD: prod1\n# highlight-end\nframework:\n  name: \"android/espresso\"\n  args:\n    reservation: false \n    buildName: \"Test Espresso Sharding\"\n    appId: <TARGET_SUITE>\n    testSuiteAppId: <TEST_SUITE>\n    deviceSelectionStrategy: any\n    devices: [\".*\"]\n    shards:\n      mappings:\n      - name: shard1\n        strategy: \"only-testing/skip-testing\"\n        values: [\"<className>/<className/testName>\"]\n     - name: shard2\n       strategy: \"only-testing/skip-testing\"\n       values: [\"<className>/<className/testName>\", \"<className>/<className/testName>\"]"
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
      "name": "Setting Up Espresso Environment Variables",
      "description": "Now you can run your Espresso framework on TestMu AI and this particular feature allows users to pass and retrieve environment variables (like STAGE, PROD, or DEV) during automated Android tests.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Create Variables in Your Test Suite",
          "text": "Define environment variables in your Espresso test suite to fetch the variable values during execution.",
          "url": "https://www.testmuai.com/support/docs/espresso-env-variables-settings/#step-1-create-variables-in-your-test-suite"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Upload Your Application",
          "text": "To begin testing, upload your Android application (.apk file) to TestMu AI's servers. You'll use our REST API for this process. Authentication : You'll need your TestMu AI Username and AccessKey. Combine them in the format Username:AccessKey. Uploading the App : Use cURL command to send a request to our API. The request should include the path to your application file (appFile). {curl -u \"${ YOURLAMBDATESTUSERNAME()}:${ YOURLAMBDATESTACCESS_KEY()}\" --location --request POST 'https://manual-api.lambdatest.com/app/uploadFramework' --form 'appFile=@\"\"' --form 'type=\"espresso-android\"'} {curl -u \"${ YOURLAMBDATESTUSERNAME()}:${ YOURLAMBDATESTACCESS_KEY()}\" --location --request POST \"https://manual-api.lambdatest.com/app/uploadFramework\" --form \"appFile=@\"\"\" --form \"type=\\\"espresso-android\\\"\"} Provide the path of your android application in the above URL in place of `` Response of above cURL will be a JSON object containing the App URL of the format - lt://APP123456789123456789 and will be used in the last step.",
          "url": "https://www.testmuai.com/support/docs/espresso-env-variables-settings/#step-2-upload-your-application"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 3: Upload Your Test Suite",
          "text": "Upload your Espresso test suite (.apk) file to TestMu AI servers using our REST API. The following sample cURL command shows how to upload a test suite: {curl -u \"${ YOURLAMBDATESTUSERNAME()}:${ YOURLAMBDATESTACCESS_KEY()}\" --location --request POST 'https://manual-api.lambdatest.com/app/uploadFramework' --form 'appFile=@\"\"' --form 'type=\"espresso-android\"'} {curl -u \"${ YOURLAMBDATESTUSERNAME()}:${ YOURLAMBDATESTACCESS_KEY()}\" --location --request POST \"https://manual-api.lambdatest.com/app/uploadFramework\" --form \"appFile=@\"\"\" --form \"type=\\\"espresso-android\\\"\"} Provide the path of your android application in the above URL in place of `` Response of above cURL will be a JSON object containing the App URL of the format - lt://APP123456789123456789 and will be used in the last step.",
          "url": "https://www.testmuai.com/support/docs/espresso-env-variables-settings/#step-3-upload-your-test-suite"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Step 4: Executing The Test",
          "text": "You will need base64 encoded authentication in order to execute your Espresso automation test suite. Enter your username:accesskey in Basic Authentication Header Generator to generate your auth token. Take note of the base64 encoded authentication which needs to be added in the next step. {${ YOURLAMBDATESTUSERNAME()}:${ YOURLAMBDATESTACCESS_KEY()}} Once you have uploaded your app and test suite, you can execute your test by running the following command: Enter your BASICAUTHTOKEN, APPID (generated in the first step) and TESTSUITEID** (generated in the second step) in the below command.",
          "url": "https://www.testmuai.com/support/docs/espresso-env-variables-settings/#step-4-executing-the-test"
        }
      ]
    }
  ]) }}
/>

This feature allows you to dynamically set and test environment variables during Espresso test execution on <BrandName />.

## Step 1: Create Variables in Your Test Suite
Define environment variables in your Espresso test suite to fetch the variable values during execution.


<VerifiedTag value="Verified" />

```bash title="Sample Script"
String envVar = InstrumentationRegistry.getArguments().getString(ENV_VAR);
```

<VerifiedTag value="Verified" />

``` bash title="Examples"
String stage = InstrumentationRegistry.getArguments().getString(“STAGE”);
String prod = InstrumentationRegistry.getArguments().getString(“PROD”);
```

## Step 2: Upload Your Application

To begin testing, upload your Android application (.apk file) to <BrandName />'s servers. You'll use our **REST API** for this process.

- **Authentication :** You'll need your <BrandName /> Username and AccessKey. Combine them in the format `Username:AccessKey`.
- **Uploading the App :** Use **cURL command** to send a request to our API. The request should include the path to your application file (**appFile**).

<Tabs className="docs__val">

<TabItem value="bash" label="Linux / MacOS" default>

  <VerifiedTag value="Verified" />

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST 'https://manual-api.lambdatest.com/app/uploadFramework' --form 'appFile=@"<PATH_OF_YOUR_ANDROID_APP>"' --form 'type="espresso-android"'`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows" default>

  <VerifiedTag value="Verified" />

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST "https://manual-api.lambdatest.com/app/uploadFramework" --form "appFile=@"<PATH_OF_YOUR_ANDROID_APP>"" --form "type=\"espresso-android\""`}
  </CodeBlock>
</div>

</TabItem>
</Tabs>

:::info
- Provide the path of your android application in the above URL in place of `<PATH_OF_YOUR_ANDROID_APP>`
- Response of above cURL will be a **JSON** object containing the `App URL` of the format - `lt://APP123456789123456789` and will be used in the last step.
:::

## Step 3: Upload Your Test Suite

Upload your Espresso test suite (.apk) file to <BrandName /> servers using our REST API.

The following sample cURL command shows how to upload a test suite:

<Tabs className="docs__val">

<TabItem value="bash" label="Linux / MacOS" default>

  <VerifiedTag value="Verified" />

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST 'https://manual-api.lambdatest.com/app/uploadFramework' --form 'appFile=@"<PATH_OF_YOUR_TEST_SUITE_APP>"' --form 'type="espresso-android"'`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows" default>

  <VerifiedTag value="Verified" />

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST "https://manual-api.lambdatest.com/app/uploadFramework" --form "appFile=@"<PATH_OF_YOUR_TEST_SUITE_APP>"" --form "type=\"espresso-android\""`}
  </CodeBlock>
</div>

</TabItem>
</Tabs>

:::info
- Provide the path of your android application in the above URL in place of `<PATH_OF_YOUR_TEST_SUITE_APP>`
- Response of above cURL will be a **JSON** object containing the `App URL` of the format - `lt://APP123456789123456789` and will be used in the last step.
:::

## Step 4: Executing The Test

- You will need **base64 encoded authentication** in order to execute your Espresso automation test suite. Enter your `username:accesskey` in **[Basic Authentication Header Generator](https://mixedanalytics.com/knowledge-base/api-connector-encode-credentials-to-base-64/)** to generate your auth token.

Take note of the base64 encoded authentication which needs to be added in the next step.

<VerifiedTag value="Verified" />

<div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
{`${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}`}
  </CodeBlock>
</div>

- Once you have uploaded your app and test suite, you can execute your test by running the following command:
 
> Enter your **BASIC_AUTH_TOKEN**, **APP_ID** (generated in the first step) and **TEST_SUITE_ID** (generated in the second step) in the below command.

<VerifiedTag value="Verified" />

```bash
curl --location --request POST 'https://mobile-api.lambdatest.com/framework/v1/espresso/build' \
--header 'Authorization: Basic BASIC_AUTH_TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{
    "app" : "APP_ID",
    "testSuite": "TEST_SUITE_ID",
    "device" :  ["Galaxy S21 5G-12"],
    "queueTimeout": 10800,
    "IdleTimeout": 150,
    "deviceLog": true,
    "network": false,
   "build" : "Proverbial-Espresso"
   # highlight-start
   "envVariables":{                     //setting up environment variables
      "STAGE":"stg1",
      "PROD":"prod1"
    }
    # highlight-end
}'
```

## Run your test in HyperExecute
To execute your test suite in HyperExecute, configure your YAML file by specifying the `<RELATIVE_APP_PATH>` and `<RELATIVE_TEST_SUITE_PATH>`.

<VerifiedTag value="Verified" />

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




