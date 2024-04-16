---
id: getting-started-with-espresso-testing
title: Espresso Testing On LambdaTest
sidebar_label: Espresso Testing
description: Now you can run your automation scripts using Espresso framework on LambdaTest online grid of 3000+ real desktop browsers and real operating systems.
keywords:
  - espresso
  - java
  - lambdatest java
  - framework on lambdatest
  - testng
  - app testing
  - real devices
image: /assets/images/og-images/appium-testing-og-image.jpg
url: https://www.lambdatest.com/support/docs/getting-started-with-espresso-testing/
site_name: LambdaTest
slug: getting-started-with-espresso-testing/
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
          "name": "Getting Started With Espresso Testing on LambdaTest",
          "item": "https://www.lambdatest.com/support/docs/getting-started-with-espresso-testing/"
        }]
      })
    }}
></script>

---

Espresso is a testing framework that allows developers to write automation test cases for user interface (UI) testing. Developed by Google and free to use, Espresso aims to provide a simple yet powerful framework to help automate the process of testing Android apps.

## Objective

---

By the end of this topic, you will be able to:

1. Run a sample automation script of an Espresso Test
2. Learn more about capabilities supported for Espresso testing.


## Prerequisites for Getting Started

---

1. You will need a LambdaTest username and access key. To obtain your access credentials, [purchase a plan](https://billing.lambdatest.com/billing/plans) or access the [automation dashboard](https://appautomation.lambdatest.com/).
2. Access to an **Android** app (.apk) and an **Espresso Test** app (.apk file).

:::tip

If you do not have any **Android** app (.apk) and an **Espresso Test** app (.apk) file, you can run your sample tests on LambdaTest by using our sample :link: [Android app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk) and a sample :link: [Espresso Test](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android_expressotest.apk).

:::

## Run Your First Test

---

### Step 1: Upload Your Application

Upload your **android** application (.apk file) to the LambdaTest servers using our **REST API**. You need to provide your **Username** and **AccessKey** in the format `Username:AccessKey` in the **cURL** command for authentication. Make sure to add the path of the **appFile** in the cURL request. Here is an example cURL request to upload your app using our REST API:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Using App File:**

<Tabs className="docs__val">

<TabItem value="bash" label="Linux / MacOS" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" \\
--location --request POST 'https://manual-api.lambdatest.com/app/uploadFramework' \
--form 'appFile=@"/Users/macuser/Downloads/proverbial_android.apk"' \
--form 'type="espresso-android"'`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST "https://manual-api.lambdatest.com/app/uploadFramework" --form "appFile=@"C:/Users/varunkumarb/Downloads/proverbial_android.apk"" --form "type=\"espresso-android\""`}
  </CodeBlock>
</div>

</TabItem>
</Tabs>

:::note

Response of above cURL will be a **JSON** object containing the `App URL` of the format - ``lt://APP123456789123456789`` and will be used in the last step.

:::

### Step 2: Uploading Test Suite

Upload your **test suite** (.apk file) to the LambdaTest servers using our **REST API**. You need to provide your **Username** and **AccessKey** in the format `Username:AccessKey` in the **cURL** command for authentication. Make sure to add the path of the **appFile** in the cURL request. Here is an example cURL request to upload your app using our REST API:

**Using App File:**

<Tabs className="docs__val">

<TabItem value="bash" label="Linux / MacOS" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" \\
--location --request POST 'https://manual-api.lambdatest.com/app/uploadFramework' \
--form 'appFile=@"/Users/macuser/Downloads/proverbial_android_expressotest.apk"' \
--form 'type="espresso-android"'`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST "https://manual-api.lambdatest.com/app/uploadFramework" --form "appFile=@"C:/Users/varunkumarb/Downloads/proverbial_android_expressotest.apk"" --form "type=\"espresso-android\""`}
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
You will need base64 encoded authentication in order to execute your Espresso automation test suite. You need to enter your username:accesskey **[here](https://mixedanalytics.com/knowledge-base/api-connector-encode-credentials-to-base-64/)** in order and click on encode to generate the base64 authentication. Take note of the **base64** encoded authentication which needs to be added in the next step.
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

<Tabs className="docs__val">

<TabItem value="bash" label="Linux / MacOS" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">

```bash
curl --location --request POST 'https://mobile-api.lambdatest.com/framework/v1/espresso/build' \
--header 'Authorization: Basic <Enter_Basic_Auth>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "app" : "lt://APP_ID",
    "testSuite": "lt://TestSuite_ID",
    "device" :  ["Galaxy S21 5G-12"],
    "queueTimeout": 10800,
    "IdleTimeout": 150,
    "deviceLog": true,
    "network": false,
    "build" : "Proverbial-Espresso"
}'
```

</CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="lamguage-powershell">

```
curl --location --request POST "https://mobile-api.lambdatest.com/framework/v1/espresso/build" --header "Content-Type: application/json" --header "Authorization: Basic <Enter the Auth here>" --data-raw "{\"app\" : \"lt://APP_ID\",\"testSuite\": \"lt://APP_ID\",\"device\" :  [\"Pixel 6-12\"],\"queueTimeout\": 360,\"IdleTimeout\": 150,\"deviceLog\": true,\"network\": false,\"build\" : \"Proverbial-Espresso\",\"geoLocation\" : \"FR\"}"
```

  </CodeBlock>
</div>

</TabItem>
</Tabs>

### Step 4: View Test Execution

Once you have run your tests, you can view the test execution along with logs. You will be able to see the test cases passing or failing. You can view the same at [LambdaTest Automation](https://accounts.lambdatest.com/login).

## Capabilities Supported

---

The following capabilities are supported:

1. **app:** Enter the app id generated while uploading the app. Example:`lt://APP123456789123456789`
2. **testSuite:** Enter the test suite id generated while uploading the test suite. Example: `lt://APP123456789123456789`
3. **device:** Enter the name and os version of the device in “DeviceName-OSVersion” format. Example: `Pixel 3 XL-9` or `Galaxy S21 Ultra 5G-11`.
4. **video:** Generate video for all the tests that have run. Example: `true`.
5. **queueTimeout:** Enter the time in seconds after which you want your build to timeout from queue. Example: `300`.
6. **idleTimeout:** Enter the time in seconds for maximum running time on a test in the build. Example: `120`.
7. **deviceLog:** Boolean value to generate device logs. Example: `true`.
<!-- 8. **network:** Boolean value to generate network logs. Example: `false`. -->
9. **build:** Set the name of the Espresso test build. Example: `My Espresso Build`.
10. **geoLocation:** Set the geolocation country code if you want to enable the same in your test. Example - `FR`.
11. **tunnel, tunnelName:** Set tunnel as `true` and provide the tunnelName such as `NewTunnel` as needed if you are running a tunnel.
12. **disableAnimation:** Set this to `true` if you want to disable animations for espresso tests. **Default:** `false`
13. **clearPackageData:** Set this to `true` if you want to clear the app data after each test has completed running. **Default**: `false`
14. **singleRunnerInvocation:** Set this to `true` if you want to execute test cases together with a `single test runner invocation`.This can help significantly speed up the test execution time. By default, each test case is invoked separately. **Default:** `false`

:::caution Important
Only one of **GeoLocation** or **Tunnel** must be used in single execute command.
:::

## Running Tests in Parallel

---

You can run tests in parallel on multiple devices by passing the device name in comma separated format in the execute command as show below:

```bash
curl --location --request POST 'https://mobile-api.lambdatest.com/espresso/v1/build' \
--header 'Authorization: Basic <Enter_Basic_Auth>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "app" : "app_id",
    "testSuite": "testsuite_id",
    "device" :  ["Galaxy S20-10","Galaxy S20-10","Redmi Note 9-10","Galaxy S10+-10","Galaxy S7 edge-8","Galaxy S9+-8"],
    "queueTimeout": 10800,
    "IdleTimeout": 150,
    "deviceLog": true,
    "build" : "Proverbial-Espresso"
}'
```
## Setting Locale and Language
---
You can also configure both locale and language during Espresso test execution for a seamless user experience in diverse linguistic and regional contexts of your app.

**Language**

To test a localized version of your app on LambdaTest, use the `language` parameter in the Espresso test execution API request. This allows you to change the language of the application under test.

| Parameter | Description                            | Values     |
|-----------|----------------------------------------|------------|
| language  | Set the language of the app under test | Example: ‘hi’ |

**Locale**

To test a localized version of your app on LambdaTest, use the `locale` parameter in the Espresso test execution API request. This allows you to set the locale for the application under test.

| Parameter | Description                       | Values     |
|-----------|-----------------------------------|------------|
| locale    | Set locale for the app under test | Example: IN (Country name abbreviation) |

**For Example:** 

```bash
curl --location --request POST 'https://mobile-api.lambdatest.com/espresso/v1/build' \
--header 'Authorization: Basic <Enter_Basic_Auth>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "app" : "app_id",
    "testSuite": "testsuite_id",
    "device" :  ["Galaxy S20-10"],
    "queueTimeout": 360,
    "IdleTimeout": 150,
    "deviceLog": true,
    "build" : "Proverbial-Espresso",
    "language": "fr",
    "locale": "CA"
}'
```

:::note
- Ensure that both the **language** and **locale** parameters are passed simultaneously in the API request.
- App should support the language and locale mentioned in the API request to work.
- For espresso sharding tests, you have to mention this in the `.yaml` file.
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
      Espresso Testing 
      </span>
    </li>
  </ul>
</nav>
