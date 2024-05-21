---
id: getting-started-with-xcui-testing
title: XCUI Testing on LambdaTest
sidebar_label: XCUI Testing
description: Master XCUITest automation with LambdaTest! Learn to run scripts, utilize capabilities, and execute tests on real iOS devices effortlessly. Get started now!
keywords:
  - xcuitest
  - app test automation
  - lambdatest xcuitest
  - framework on lambdatest
  - app testing xcuitest
  - app testing
  - real devices
url: https://www.lambdatest.com/support/docs/getting-started-with-xcuitest/
site_name: LambdaTest
slug: getting-started-with-xcuitest/
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
          "name": "XCUI Testing on LambdaTest",
          "item": "https://www.lambdatest.com/support/docs/getting-started-with-xcuitest/"
        }]
      })
    }}
></script>
---

Developed by Apple, XCUITest is a framework for user-interface (UI) testing for iOS applications. It is built on top of XCTest, an integrated test framework in Apple's Xcode IDE. LambdaTest lets you perform automated app testing of your iOS apps using XCUITest across 3000+ real devices and OS combinations.

## Objective

---

By the end of this topic, you will be able to:

1. Run a sample automation script of an XCUI Test.
2. Learn more about capabilities supported for XCUI Testing.


## Prerequisites for Getting Started

---

1. You will need a LambdaTest username and access key. To obtain your access credentials, [purchase a plan](https://billing.lambdatest.com/billing/plans) or access the [automation dashboard](https://appautomation.lambdatest.com/).
2. Access to an **iOS** app (.ipa) and an **XCUI Test** app (.ipa file).

:::tip

If you do not have any **iOS** app (.ipa) and an **XCUI Test** app (.ipa) file, you can run your sample tests on LambdaTest by using our sample :link: [iOS app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_ios.ipa) and a sample :link: [XCUI Test](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_ios_xcuitest.ipa).

:::

## Run Your First Test

---

### Step 1: Upload Your Application

Upload your **iOS** application (.ipa file) to the LambdaTest servers using our **REST API**. You need to provide your **Username** and **AccessKey** in the format ```Username:AccessKey``` in the **cURL** command for authentication. Make sure to add the path of the **appFile** in the cURL request.

Here is an example cURL request to upload your app using our REST API:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Using App File:**

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

Response of above cURL will be a **JSON** object containing the `App URL` of the format - ``lt://APP123456789123456789`` and will be used in the last step.

:::

### Step 2: Uploading Test Suite

Upload your **test suite** (.ipa file) to the LambdaTest servers using our **REST API**. You need to provide your **Username** and **AccessKey** in the format `Username:AccessKey` in the **cURL** command for authentication. Make sure to add the path of the **appFile** in the cURL request. Here is an example cURL request to upload your app using our REST API:

**Using App File:**

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

Response of above cURL will be a **JSON** object containing the `App URL` of the format - ``lt://APP123456789123456789`` and will be used in the next step.

:::

### Step 3: Executing The Test

#### Basic Authentication

:::info 
You will need base64 encoded authentication in order to execute your XCUI automation test suite. You need to enter your username:accesskey **[here](https://mixedanalytics.com/knowledge-base/api-connector-encode-credentials-to-base-64/)** in order and click on encode to generate the base64 authentication. Take note of the **base64** encoded authentication which needs to be added in the next step.
:::

<div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
{`${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}`}
  </CodeBlock>
</div>

#### Execute Command

Once you have uploaded your app and test suite, you need to you can execute your test by running the following command:

:::info 
Make sure to enter your **basic authentication**, **app url** (generated in the first step) and **testSuite url** (generated in the second step) in the below command.
:::


```js
curl --location --request POST 'https://mobile-api.lambdatest.com/framework/v1/xcui/build' \
--header 'Authorization: Basic <Enter_Basic_Auth>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "app" : "lt://APP_ID",
    "testSuite": "lt://TestSuite_ID",
    "device" :  ["iPhone 11-14"],
    "video" : true,
    "queueTimeout": 10800,
    "idleTimeout": 150,
    "devicelog": true,
    "network": false,
    "build" : "Proverbial-XCUITest"
}'
```

### Step 4: View Test Execution

Once you have run your tests, you can view the test execution along with logs. You will be able to see the test cases passing or failing. You can view the same at [LambdaTest Automation](https://accounts.lambdatest.com/login).

## Running Tests In Parallel
***

You can run tests in parallel on multiple devices by passing the device name in comma separated format in the execute the command as shown below:

```js
curl --location --request POST 'https://mobile-api.lambdatest.com/framework/v1/xcui/build' \
--header 'Authorization: Basic <Enter_Basic_Auth>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "app" : "lt://APP_ID",
    "testSuite": "lt://TestSuite_ID",
    "device" :  ["iPhone 11-14","iPhone 12 Pro-15","iPhone X-13"],
    "queueTimeout": 10800,
    "IdleTimeout": 150,
    "deviceLog": true,
    "build" : "Proverbial-XCUITest"
}'
```
## Setting Locale and Language
---
You can also configure both locale and language during XCUI test execution for a seamless user experience in diverse linguistic and regional contexts of your app.

**Language**

To test a localized version of your app on LambdaTest, use the `language` parameter in the XCUI test execution API request. This allows you to change the language of the application under test.

| Parameter | Description                            | Values     |
|-----------|----------------------------------------|------------|
| language  | Set the language of the app under test | Example: ‘hi’ |

**Locale**

To test a localized version of your app on LambdaTest, use the `locale` parameter in the XCUI test execution API request. This allows you to set the locale for the application under test.

| Parameter | Description                       | Values     |
|-----------|-----------------------------------|------------|
| locale    | Set locale for the app under test | Example: IN (Country name abbreviation) |

**For Example:** 

```bash
curl --location --request POST 'https://mobile-api.lambdatest.com/framework/v1/xcui/build' \
--header 'Authorization: Basic <Enter_Basic_Auth>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "app" : "lt://APP_ID",
    "testSuite": "lt://TestSuite_ID",
    "device" :  ["iPhone 11-14"],
    "video" : true,
    "queueTimeout": 10800,
    "idleTimeout": 150,
    "devicelog": true,
    "network": false,
    "build" : "Proverbial-XCUITest",
    "language": "fr",
    "locale": "CA"
}'
```

:::note
- Ensure that both the **language** and **locale** parameters are passed simultaneously in the API request.
- App should support the language and locale mentioned in the API request to work.
- For XCUI sharding tests, you have to mention this in the `.yaml` file.
:::

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
      XCUI Testing
      </span>
    </li>
  </ul>
</nav>
