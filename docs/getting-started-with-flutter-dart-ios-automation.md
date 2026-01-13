---
id: getting-started-with-flutter-dart-ios-automation
title: Flutter Dart Testing On TestMu AI - iOS
sidebar_label: Flutter Dart iOS
description: This guide details running your first Flutter Dart test on real iPhones using TestMu AI's Real Device Cloud.
keywords:
- flutter
- testmu ai
- framework on testmu ai
- app testing
- real devices
url: https://www.testmu.ai/support/docs/getting-started-with-flutter-dart-ios-automation
site_name: LambdaTest
slug: getting-started-with-flutter-dart-ios-automation
canonical: https://www.testmu.ai/support/docs/getting-started-with-flutter-dart-ios-automation/
---

import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
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
          "name": "Getting Started With Flutter Tests on TestMu AI",
          "item": `${BRAND_URL}/support/docs/getting-started-with-flutter-dart-android-automation/`
        }]
      })
    }}
></script>

<RealDeviceTag value="Real Device" /> 
Flutter, an open-source UI toolkit created by Google, is a popular choice among developers to build natively compiled applications for mobile, web, and desktop from a single codebase. With Dart as its programming language, Flutter enables fast development of beautiful apps with a highly productive, extensible and open-source set of features.

In this guide, we will explore how to run your first Flutter Dart test on an iOS device using the <BrandName /> Real Device Cloud. By combining the capabilities of Flutter Dart and <BrandName />, you can ensure the proper functioning of your app across different devices and make your app more reliable and robust.

## Prerequisites for Getting Started

1. Flutter SDK installed on your system
2. You will need a <BrandName /> username and access key. To obtain your access credentials, [purchase a plan](https://billing.lambdatest.com/billing/plans) or access the [automation dashboard](https://appautomation.lambdatest.com/).
3. Access to a Flutter **Sample** test suite (.zip).

:::tip

If you do not have any **Flutter iOS** test suite (.zip), you can run your sample tests on <BrandName /> by using our sample :link: [Flutter iOS](https://prod-mobile-artefacts.lambdatest.com/assets/docs/Flutter_iOS.zip).

:::

## Run Your First Test

### Step 1: Upload Your Test Suite

Upload your **iOS** test suite (.zip file) to the <BrandName /> servers using our **REST API**. You need to provide your **Username** and **AccessKey** in the format `Username:AccessKey` in the **cURL** command for authentication. Make sure to add the path of the **appFile** in the cURL request. Here is an example cURL request to upload your app using our REST API:

**Using App File:**

<Tabs className="docs__val">

<TabItem value="bash" label="Linux / MacOS" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" \\
--location --request POST 'https://manual-api.lambdatest.com/app/uploadFramework' \
--form 'appFile=@"/Users/macuser/Downloads/flutter-ios.zip"' \
--form 'type="flutter-ios"'
--form 'name="Sample App"'
--form 'custom_id="Sample"'`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST "https://manual-api.lambdatest.com/app/uploadFramework" --form "appFile=@"C:/Users/winuser/Downloads/flutter-ios.zip"" --form "type=\"flutter-ios\"" --form "name=\"Sample App\"" --form "custom_id=\"Sample\""`}
  </CodeBlock>
</div>

</TabItem>
</Tabs>

:::note

Response of above cURL will be a **JSON** object containing the `App id` of the format - ``lt://APP123456789123456789123456789`` and will be used in the last step.

:::

### Step 2: Executing The Test

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

Once you have uploaded your test suite, you can execute your test by running the following command:

:::info
Make sure to enter your **basic authentication** and **app id** (generated in the first step) in the below command.
:::

<Tabs className="docs__val">

<TabItem value="bash" label="Linux / MacOS" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">

```bash
curl --location --request POST 'https://mobile-api.lambdatest.com/framework/v1/flutter/ios/build' \
--header 'Authorization: Basic <Enter_Basic_Auth>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "testSuite": "lt://App_id",
    "device": ["iPhone.*-16"],
    "video": true,
    "deviceLog": true,
    "queueTimeout": 9000,
    "network": true,
    "build": "Flutter iOS"
}'
```

</CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="lamguage-powershell">

```powershell
curl --location --request POST "https://mobile-api.lambdatest.com/framework/v1/flutter/ios/build" --header "Content-Type: application/json" --header "Authorization: Basic <Enter the Auth here>" --data-raw "{\"testSuite\": \"lt://APP_ID\",\"device\" :  [\"Pixel 6-12\"], \"video\": true, \"deviceLog\": true, \"queueTimeout\" : \"9000\",\"idleTimeout\" : \"600\"\"network\": true,\"build\" : \"Flutter iOS\"}"
```

  </CodeBlock>
</div>

</TabItem>
</Tabs>

### Step 3: View Test Execution

Once you have run your tests, you can view the test execution along with logs. You will be able to see the test cases passing or failing. You can view the same at [<BrandName /> Automation](https://appautomation.lambdatest.com/builds).

## Capabilities Supported

The following capabilities are supported:

1. **testSuite:** Enter the app id generated while uploading the app. Example:`lt://APP123456789123456789123456789`
2. **device:** Enter the name and os version of the device in "DeviceName-OSVersion" format. Example: `iPhone 14-16` or `iPhone 15 Pro-17`. You can also choose to use regular expression for device name such as `iPhone.*-16`.
3. **video:** Generate video for all the tests that have run. Example: `true`.
4. **queueTimeout:** Enter the time in seconds for total execution time of the build. Example: `9000`. Minimum queueTimeout: `1800`, Maximum queueTimeout: `10800`
5. **network:** Boolean value to generate network logs. Example: `"network": true`.  
6. **build:** Set the name of the Flutter iOS test build. Example: `My Flutter iOS`.
7. **deviceLog:** Boolean value to generate device logs. Example: `true`.  
8. **tunnel:** Boolean value to run build via Tunnel. Example: `true`.  
9. **tunnelName:** Name of the tunnel to be used in conjunction with `tunnel` capability.  
10. **region:** String to device the region from which device will be allocated. Example - `eu`,`us`,`ap`.
11. **gpsLocation:** This capability should be defined to override the device’s default GPS coordinates and should be provided as a comma-separated string. Example: `"location": {"lat": "-50","long": "150.028333"}`.
12. **enableBluetooth:** This capability is used to enable the bluetooth functionality during the session. Example: `enableBluetooth: true`

:::note
Ensure that the latitude is between -90 and 90, and the longitude is between -180 and 180. Otherwise, an error will occur like "Invalid GPS location: Latitude must be between -90 and +90, Longitude must be between -180 and +180."
:::


## Running Tests in Parallel

You can run tests in parallel on multiple devices by passing the device name in comma separated format in the execute command as show below:

```bash
curl --location --request POST 'https://mobile-api.lambdatest.com/framework/v1/flutter/build' \
--header 'Authorization: Basic <Enter_Basic_Auth>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "testSuite": "lt://App_id",
    "device": ["iPhone.*-16","iPhone 14-16","iPhone 15-17"],
    "video": true,
    "deviceLog": true,
    "queueTimeout": 9000,
    "network": true,
    "build": "Flutter iOS - Parallel"
}'
```

:::tip

Do note that Flutter builds when run in parallel, result in separate builds being generated for each parallel run.

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
      Flutter Testing 
      </span>
    </li>
  </ul>
</nav>
