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
url: https://www.testmu.ai/support/docs/xctestplan/
site_name: LambdaTest
slug: xctestplan/
canonical: https://www.testmu.ai/support/docs/xctestplan/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import RealDeviceTag from '../src/component/realDevice';

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
<RealDeviceTag value="Real Device" />
XCTestPlan is a feature within Xcode used for building iOS, iPadOS, macOS, watchOS, tvOS, and audioOS applications. XCTestPlan helps manage how you run automated tests written with the XCTest framework.

XCTestPlan improves the organization and efficiency of running automated tests within Xcode. It allows you to create targeted test runs and manage various testing scenarios effectively.

## Prerequisites

- Your <BrandName /> [Username and Access key](https://accounts.lambdatest.com/security).
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

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST 'https://manual-api.lambdatest.com/app/uploadFramework' --form 'appFile=@"<PATH_OF_YOUR_iOS_APP>"' --form 'type="xcuit-ios"'`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows" default>

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

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST 'https://manual-api.lambdatest.com/app/uploadFramework' --form 'appFile=@"<PATH_OF_YOUR_TEST_SUITE_APP>"' --form 'type="xcuit-ios"'`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows" default>

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

```bash 
curl --location --request POST 'https://manual-api.lambdatest.com/app/xctestplan' \
--header 'Cookie: cf_use_ob=0' \
--header 'Authorization: Basic <Enter_Basic_Auth>' \
--form 'appFile=@"/path/to/file"' \
--form 'type="xctestplan"'
```

## Step 3: Executing The Test

- You will need **base64 encoded authentication** in order to execute your Espresso automation test suite. Enter your `username:accesskey` in **[Basic Authentication Header Generator](https://mixedanalytics.com/knowledge-base/api-connector-encode-credentials-to-base-64/)** to generate your auth token.

Take note of the base64 encoded authentication which needs to be added in the next step.

<div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
{`${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}`}
  </CodeBlock>
</div>

- Once you have uploaded your app and test suite, you can execute your test by running the following command:
 
> Enter your **BASIC_AUTH_TOKEN**, **APP_ID** (generated in the first step) and **TEST_SUITE_ID** (generated in the second step) in the below command.

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

Once you have run your tests, you can view the test execution along with logs. You will be able to see the test cases passing or failing. You can view the same at [<BrandName /> Automation](https://accounts.lambdatest.com/login).

> **NOTE:** You cannot use XCTestPlan and [Filters](/support/docs/speedup-xcui/) simultaneously

:::tip
To learn how to use XCTestPlan with sharding in XCUI, refer to the detailed guide in [Sharding for XCUI](/support/docs/sharding-rd-hyperexec/#xctestplan-in-sharding).
:::
