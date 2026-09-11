---
id: xctestplan
title: XCTestPlan
sidebar_label: XCTestPlan
description: Manage iOS, iPadOS, macOS, watchOS, and tvOS tests with XCTestPlan on TestMu AI. Learn how to upload apps, configure tests, and view execution logs efficiently.
keywords:
  - XCUI test filters
  - app test automation
  - XCUI
  - filter
  - testmu ai
  - framework on testmu ai
  - testing in XCUI
  - XCUI testing
  - real devices
url: https://www.testmuai.com/support/docs/xctestplan/
site_name: TestMu AI
slug: xctestplan/
canonical: https://www.testmuai.com/support/docs/xctestplan/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import RealDeviceTag from '../src/component/realDevice';
import CookieTrackingLogin from '@site/src/component/CookieTracking';

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
          "name": "Filters for XCUI Test",
          "item": `${BRAND_URL}/support/docs/xctestplan/`
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
      "@id": "https://www.testmuai.com/support/docs/xctestplan/"
    },
    "headline": "XCTestPlan",
    "description": "Manage iOS, iPadOS, macOS, watchOS, and tvOS tests with XCTestPlan on TestMu AI. Learn how to upload apps, configure tests, and view execution logs efficiently.",
    "url": "https://www.testmuai.com/support/docs/xctestplan/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "App Automation",
    "keywords": [
      "XCUI test filters",
      "app test automation",
      "XCUI"
    ],
    "proficiencyLevel": "Beginner",
    "dependencies": "Your TestMu AI Username and Access key.; Access to an iOS app (.ipa) and an XCUI Test app (.ipa file)..",
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
        "name": "Code sample 1",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\nThis will only be used for filtering tests using xctestplan. You can use the following capability in xcui/build api:\n`\"xctestplan\" : \"lt://APP1234567891234567890\"` and use the following curl to upload xctestplan file.\n\n```bash \ncurl --location --request POST 'https://manual-api.lambdatest.com/app/xctestplan' \\\n--header 'Cookie: cf_use_ob=0' \\\n--header 'Authorization: Basic <Enter_Basic_Auth>' \\\n--form 'appFile=@\"/path/to/file\"' \\\n--form 'type=\"xctestplan\"'"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 3: Executing The Test (Linux / MacOS)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "curl --location --request POST 'https://mobile-api.lambdatest.com/framework/v1/xcui/build' \\\n--header 'Authorization: Basic BASIC_AUTH_TOKEN' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n  \"app\" : \"lt://APP_ID\",\n  \"testSuite\": \"lt://TEST_SUITE_ID\",\n  \"xctestplan\" : \"lt://YOUR_XC_TEST_PLAN_ID\" #only when you want to use XCTestPlan\n  \"device\" :  [\"iPhone 11-14\"],\n  \"video\" : true,\n  \"queueTimeout\": 10800,\n  \"idleTimeout\": 150,\n  \"devicelog\": true,\n  \"network\": false,\n  \"build\" : \"Proverbial-XCUITest\"\n}'"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Windows",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "curl --location --request POST \"https://mobile-api.lambdatest.com/framework/v1/xcui/build\" \\\n--header \"Authorization: Basic BASIC_AUTH_TOKEN\" \\\n--header \"Content-Type: application/json\" \\\n--data-raw \"{\n  \"app\" : \"lt://APP_ID\",\n  \"testSuite\": \"lt://TEST_SUITE_ID\",\n  \"xctestplan\" : \"lt://YOUR_XC_TEST_PLAN_ID\" #only when you want to use XCTestPlan\n  \"device\" :  [\"iPhone 11-14\"],\n  \"video\" : true,\n  \"queueTimeout\": 10800,\n  \"idleTimeout\": 150,\n  \"devicelog\": true,\n  \"network\": false,\n  \"build\" : \"Proverbial-XCUITest\"\n}\""
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
      "name": "XCTestPlan",
      "description": "Manage iOS, iPadOS, macOS, watchOS, and tvOS tests with XCTestPlan on TestMu AI. Learn how to upload apps, configure tests, and view execution logs efficiently.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Upload Your Application",
          "text": "To begin testing, upload your iOS application (.ipa file) to TestMu AI's servers. You'll use our REST API for this process. Authentication : You'll need your TestMu AI Username and AccessKey. Combine them in the format Username:AccessKey. Uploading the App : Use cURL command to send a request to our API. The request should include the path to your application file (appFile). {curl -u \"${ YOURLAMBDATESTUSERNAME()}:${ YOURLAMBDATESTACCESS_KEY()}\" --location --request POST 'https://manual-api.lambdatest.com/app/uploadFramework' --form 'appFile=@\"\"' --form 'type=\"xcuit-ios\"'} {curl -u \"${ YOURLAMBDATESTUSERNAME()}:${ YOURLAMBDATESTACCESS_KEY()}\" -X POST \"https://manual-api.lambdatest.com/app/uploadFramework\" -F \"appFile=@\"\"\" -F \"type=\"xcuit-ios\"\"} Provide the path of your android application in the above URL in place of `` Response of above cURL will be a JSON object containing the App URL of the format - lt://APP123456789123456789 and will be used in the last step.",
          "url": "https://www.testmuai.com/support/docs/xctestplan/#step-1-upload-your-application"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Upload Your Test Suite and XCTestRun File",
          "text": "Upload your iOS test suite (.ipa) file to TestMu AI servers using our REST API. The following sample cURL command shows how to upload a test suite: {curl -u \"${ YOURLAMBDATESTUSERNAME()}:${ YOURLAMBDATESTACCESS_KEY()}\" --location --request POST 'https://manual-api.lambdatest.com/app/uploadFramework' --form 'appFile=@\"\"' --form 'type=\"xcuit-ios\"'} {curl -u \"${ YOURLAMBDATESTUSERNAME()}:${ YOURLAMBDATESTACCESS_KEY()}\" --location --request POST \"https://manual-api.lambdatest.com/app/uploadFramework\" --form \"appFile=@\"\"\" --form \"type=\\\"xcuit-ios\\\"\"} Provide the path of your android application in the above URL in place of `` Response of above cURL will be a JSON object containing the App URL of the format - lt://APP123456789123456789 and will be used in the last step. This is a sample xctestplan file which is compatible with our sample application provided above. This will only be used for filtering tests using xctestplan. You can use the following capability in xcui/build api: \"xctestplan\" : \"lt://APP1234567891234567890\" and use the following curl to upload xctestplan file.",
          "url": "https://www.testmuai.com/support/docs/xctestplan/#step-2-upload-your-test-suite-and-xctestrun-file"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 3: Executing The Test",
          "text": "You will need base64 encoded authentication in order to execute your Espresso automation test suite. Enter your username:accesskey\ufffdin Basic Authentication Header Generator to generate your auth token. Take note of the\ufffdbase64\ufffdencoded authentication which needs to be added in the next step. {${ YOURLAMBDATESTUSERNAME()}:${ YOURLAMBDATESTACCESS_KEY()}} Once you have uploaded your app and test suite, you can execute your test by running the following command: Enter your BASICAUTHTOKEN, APPID (generated in the first step) and TESTSUITEID** (generated in the second step) in the below command.",
          "url": "https://www.testmuai.com/support/docs/xctestplan/#step-3-executing-the-test"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Step 4: View Test Execution",
          "text": "Once you have run your tests, you can view the test execution along with logs. You will be able to see the test cases passing or failing. You can view the same at TestMu AI Automation. NOTE: You cannot use XCTestPlan and Filters simultaneously To learn how to use XCTestPlan with sharding in XCUI, refer to the detailed guide in Sharding for XCUI.",
          "url": "https://www.testmuai.com/support/docs/xctestplan/#step-4-view-test-execution"
        }
      ]
    }
  ]) }}
/>
<RealDeviceTag value="Real Device" />
XCTestPlan is a feature within Xcode used for building iOS, iPadOS, macOS, watchOS, tvOS, and audioOS applications. XCTestPlan helps manage how you run automated tests written with the XCTest framework.

XCTestPlan improves the organization and efficiency of running automated tests within Xcode. It allows you to create targeted test runs and manage various testing scenarios effectively.

## Prerequisites

- Your <BrandName /> [Username and Access key](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/security).
- Access to an **iOS** app (.ipa) and an **XCUI Test** app (.ipa file).

:::tip

If you do not have any **iOS** app (.ipa) and an **XCUI Test** app (.ipa) file, you can run your sample tests on <BrandName /> by using our sample :link: [iOS app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_ios.ipa) and a sample :link: [XCUI Test](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_ios_xcuitest.ipa).

:::

## Step 1: Upload Your Application

To begin testing, upload your iOS application (.ipa file) to <BrandName />'s servers. You'll use our **REST API** for this process.

- **Authentication :** You'll need your <BrandName /> Username and AccessKey. Combine them in the format `Username:AccessKey`.
- **Uploading the App :** Use **cURL command** to send a request to our API. The request should include the path to your application file (**appFile**).

<Tabs className="docs__val">

<TabItem value="bash" label="Linux / MacOS" default>

  <VerifiedTag value="Verified" />

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST 'https://manual-api.lambdatest.com/app/uploadFramework' --form 'appFile=@"<PATH_OF_YOUR_iOS_APP>"' --form 'type="xcuit-ios"'`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows" default>

  <VerifiedTag value="Verified" />

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/uploadFramework" -F "appFile=@"<PATH_OF_YOUR_iOS_APP>"" -F "type="xcuit-ios""`}
  </CodeBlock>
</div>

</TabItem>
</Tabs>

:::info
- Provide the path of your android application in the above URL in place of `<PATH_OF_YOUR_iOS_APP>`
- Response of above cURL will be a **JSON** object containing the `App URL` of the format - `lt://APP123456789123456789` and will be used in the last step.
:::

## Step 2: Upload Your Test Suite and XCTestRun File

Upload your iOS test suite (.ipa) file to <BrandName /> servers using our REST API. The following sample cURL command shows how to upload a test suite:

<Tabs className="docs__val">

<TabItem value="bash" label="Linux / MacOS" default>

  <VerifiedTag value="Verified" />

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST 'https://manual-api.lambdatest.com/app/uploadFramework' --form 'appFile=@"<PATH_OF_YOUR_TEST_SUITE_APP>"' --form 'type="xcuit-ios"'`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows" default>

  <VerifiedTag value="Verified" />

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST "https://manual-api.lambdatest.com/app/uploadFramework" --form "appFile=@"<PATH_OF_YOUR_TEST_SUITE_APP>"" --form "type=\"xcuit-ios\""`}
  </CodeBlock>
</div>

</TabItem>
</Tabs>

:::info
- Provide the path of your android application in the above URL in place of `<PATH_OF_YOUR_TEST_SUITE_APP>`
- Response of above cURL will be a **JSON** object containing the `App URL` of the format - `lt://APP123456789123456789` and will be used in the last step.
:::

> This is a sample xctestplan file which is compatible with our sample application provided above.

```js title="testLaunch.xctestplan"
{
  "configurations" : [
    {
      "id" : "1D354D3E-7B86-4201-A441-6D23AF535802",
      "name" : "Configuration 1",
      "options" : {
      }
    }
  ],
  "defaultOptions" : {
  },
  "testTargets" : [
    {
      // highlight-next-line
      "skippedTests" : [
        // highlight-next-line
        "LambdaUiKitIOSUITests\/testverifyAppLaunch()"
        // highlight-next-line
      ],
      "target" : {
        "containerPath" : "container:LambdaUiKitIOS.xcodeproj",
        "identifier" : "84946A3027745AFD000E2562",
        "name" : "LambdaUiKitIOSUITests"
      }
    }
  ],
  "version" : 1
}
```

This will only be used for filtering tests using xctestplan. You can use the following capability in xcui/build api:
`"xctestplan" : "lt://APP1234567891234567890"` and use the following curl to upload xctestplan file.

<VerifiedTag value="Verified" />

```bash 
curl --location --request POST 'https://manual-api.lambdatest.com/app/xctestplan' \
--header 'Cookie: cf_use_ob=0' \
--header 'Authorization: Basic <Enter_Basic_Auth>' \
--form 'appFile=@"/path/to/file"' \
--form 'type="xctestplan"'
```

## Step 3: Executing The Test

- You will need **base64 encoded authentication** in order to execute your Espresso automation test suite. Enter your `username:accesskey`�in **[Basic Authentication Header Generator](https://mixedanalytics.com/knowledge-base/api-connector-encode-credentials-to-base-64/)** to generate your auth token.

Take note of the�base64�encoded authentication which needs to be added in the next step.

<VerifiedTag value="Verified" />

<div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
{`${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}`}
  </CodeBlock>
</div>

- Once you have uploaded your app and test suite, you can execute your test by running the following command:
 
> Enter your **BASIC_AUTH_TOKEN**, **APP_ID** (generated in the first step) and **TEST_SUITE_ID** (generated in the second step) in the below command.

<VerifiedTag value="Verified" />

<Tabs className="docs__val">

<TabItem value="bash" label="Linux / MacOS" default>

```yaml
curl --location --request POST 'https://mobile-api.lambdatest.com/framework/v1/xcui/build' \
--header 'Authorization: Basic BASIC_AUTH_TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{
  "app" : "lt://APP_ID",
  "testSuite": "lt://TEST_SUITE_ID",
  "xctestplan" : "lt://YOUR_XC_TEST_PLAN_ID" #only when you want to use XCTestPlan
  "device" :  ["iPhone 11-14"],
  "video" : true,
  "queueTimeout": 10800,
  "idleTimeout": 150,
  "devicelog": true,
  "network": false,
  "build" : "Proverbial-XCUITest"
}'
```

</TabItem>

<TabItem value="powershell" label="Windows" default>

```yaml
curl --location --request POST "https://mobile-api.lambdatest.com/framework/v1/xcui/build" \
--header "Authorization: Basic BASIC_AUTH_TOKEN" \
--header "Content-Type: application/json" \
--data-raw "{
  "app" : "lt://APP_ID",
  "testSuite": "lt://TEST_SUITE_ID",
  "xctestplan" : "lt://YOUR_XC_TEST_PLAN_ID" #only when you want to use XCTestPlan
  "device" :  ["iPhone 11-14"],
  "video" : true,
  "queueTimeout": 10800,
  "idleTimeout": 150,
  "devicelog": true,
  "network": false,
  "build" : "Proverbial-XCUITest"
}"
```
</TabItem>
</Tabs>

## Step 4: View Test Execution

Once you have run your tests, you can view the test execution along with logs. You will be able to see the test cases passing or failing. You can view the same at <a href="https://www.testmuai.com/login/" onClick={CookieTrackingLogin}><BrandName /> Automation</a>.

> **NOTE:** You cannot use XCTestPlan and [Filters](/support/docs/speedup-xcui/) simultaneously

:::tip
To learn how to use XCTestPlan with sharding in XCUI, refer to the detailed guide in [Sharding for XCUI](/support/docs/sharding-rd-hyperexec/#xctestplan-in-sharding).
:::
