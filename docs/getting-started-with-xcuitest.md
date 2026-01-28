---
id: getting-started-with-xcui-testing
title: XCUI Testing on TestMu AI
sidebar_label: XCUI Testing
description: Master XCUITest automation with TestMu AI! Learn to run scripts, utilize capabilities, and execute tests on real iOS devices effortlessly. Get started now!
keywords:
  - xcuitest
  - app test automation
  - testmu ai xcuitest
  - framework on testmu ai
  - app testing xcuitest
  - app testing
  - real devices
url: https://www.testmuai.com/support/docs/getting-started-with-xcuitest/
site_name: LambdaTest
slug: getting-started-with-xcuitest/
canonical: https://www.testmuai.com/support/docs/getting-started-with-xcuitest/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import RealDeviceTag from '../src/component/realDevice';
import VirtualDeviceTag from '../src/component/virtualDevice';
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
          "name": "XCUI Testing on TestMu AI",
          "item": `${BRAND_URL}/support/docs/getting-started-with-xcuitest/`
        }]
      })
    }}
></script>
<RealDeviceTag value="Real Device" /> <VirtualDeviceTag value="Virtual Device" />
Developed by Apple, XCUITest is a framework for user-interface (UI) testing for iOS applications. It is built on top of XCTest, an integrated test framework in Apple's Xcode IDE. <BrandName /> lets you perform automated app testing of your iOS apps using XCUITest across 10000+ real devices and OS combinations.

## Prerequisites

- Your <BrandName /> [Username and Access key](https://accounts.lambdatest.com/security).
- Access to an **iOS** app (.ipa) and an **XCUI Test** app (.ipa file).

:::tip

If you do not have any **iOS** app (.ipa) and an **XCUI Test** app (.ipa) file, you can run your sample tests on <BrandName /> by using our sample :link: [iOS app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_ios.ipa) and a sample :link: [XCUI Test](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_ios_xcuitest.ipa).

:::

## Running Your First Test: A Step-by-Step Guide

### Step 1: Upload Your Application

To begin testing, upload your iOS application (.ipa file) to <BrandName />'s servers. You'll use our **REST API** for this process.

- **Authentication :** You'll need your <BrandName /> Username and AccessKey. Combine them in the format `Username:AccessKey`.
- **Uploading the App :** Use **cURL command** to send a request to our API. The request should include the path to your application file (**appFile**).

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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

### Step 2: Upload Your Test Suite

Upload your iOS test suite (.ipa) file to <BrandName /> servers using our REST API.

The following sample cURL command shows how to upload a test suite:

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

### Step 3: Executing The Test

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

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">

```bash
curl --location --request POST 'https://mobile-api.lambdatest.com/framework/v1/xcui/build' \
--header 'Authorization: Basic BASIC_AUTH_TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{
  "app" : "APP_ID",
  "testSuite": "TEST_SUITE_ID",
  "device" :  ["iPhone 11-14"],
  "video" : true,
  "queueTimeout": 10800,
  "idleTimeout": 150,
  "devicelog": true,
  "network": false,
  "build" : "Proverbial-XCUITest"
}'
```

</CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="lamguage-powershell">

```bash
curl --location --request POST "https://mobile-api.lambdatest.com/framework/v1/xcui/build" \
--header "Authorization: Basic BASIC_AUTH_TOKEN" \
--header "Content-Type: application/json" \
--data-raw "{
  "app" : "APP_ID",
  "testSuite": "TEST_SUITE_ID",
  "device" :  ["iPhone 11-14"],
  "video" : true,
  "queueTimeout": 10800,
  "idleTimeout": 150,
  "devicelog": true,
  "network": false,
  "build" : "Proverbial-XCUITest"
}"
```
  </CodeBlock>
</div>

</TabItem>
</Tabs>

### Step 4: View Test Execution

Once you have run your tests, you can view the test execution along with logs. You will be able to see the test cases passing or failing. You can view the same at [<BrandName /> Automation](https://accounts.lambdatest.com/login).

<img loading="lazy" src={require('../assets/images/xcui/xcui-test.jpeg').default} alt="Image" width="521" height="268" className="doc_img"/>

## Running Tests in Parallel

You can run tests in parallel on multiple devices by passing the device name in comma separated format in the execute command as show below:

```bash
curl --location --request POST 'https://mobile-api.lambdatest.com/framework/v1/xcui/build' \
--header 'Authorization: Basic BASIC_AUTH_TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{
  "app" : "APP_ID",
  "testSuite": "TEST_SUITE_ID",
  "device" :  ["iPhone 11-14","iPhone 12 Pro-15","iPhone X-13"],
  "queueTimeout": 10800,
  "IdleTimeout": 150,
  "deviceLog": true,
  "build" : "Proverbial-XCUITest"
}'
```

:::info
- For Virtual Devices, both the App file and Test-suite should be in the `Zip format`.
- We need to pass the following capability `isvirtualdevice:true` as well when we are running test for Virtual Devices.
:::

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
      XCUI Testing
      </span>
    </li>
  </ul>
</nav>
