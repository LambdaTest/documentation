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
