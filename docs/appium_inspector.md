---
id: appium-inspector
title: Appium Inspector Integration on TestMu AI
sidebar_label: Appium Inspector
description: This documentation will help you integrate Appium Inspector with TestMu AI to interact with TestMu AI's Real Devices. With TestMu AI mobile testing cloud, you can test your mobile applications on wide range of real Android and iOS devices.
keywords:
  - mobile app testing
  - realtime mobile testing on real devices
  - mobile app manual testing
  - how to test mobile apps manually
  - manual mobile app testing tools
  - appium desktop
  - appium inspector

url: https://www.testmu.ai/support/docs/appium-inspector-integration/
site_name: LambdaTest
slug: appium-inspector-integration
canonical: https://www.testmu.ai/support/docs/appium-inspector-integration/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
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
          "name": "Appium Inspector Integration on TestMu AI",
          "item": `${BRAND_URL}/support/docs/appium-inspector-integration/`
        }]
      })
    }}
></script>

---

This post will help you in integrating **Appium Inspector** to interact with **<BrandName />'s Real Devices**.

## Introduction

---

A **GUI inspector** for mobile apps and more, powered by a (separately installed) **Appium server**. Appium Inspector is an Appium client (like WebdriverIO, Appium's Java client, Appium's Python client, etc) with a User Interface. We can use the interface for specifying Appium Server Version, Setting Capabilities. Once the Appium Server is up & running with the App, we can interact with elements and run other Appium Commands.

By the end of this topic, you will be able to:

1. Upload your Application to <BrandName /> Server & Receive the Unique App URL.
2. Run the Test using the Unique App URL.

:::tip

Please download the latest version of Appium Inspector - :link: [Official Appium Inspector](https://github.com/appium/appium-inspector/releases).

:::

## Starting an Appium Session

---

### Step 1: Upload your Application.

Upload your **_iOS_** application (.ipa file) or **_android_** application (.apk file) to the <BrandName /> servers using our **REST API**. You need to provide your **Username** and **AccessKey** in the format `Username:AccessKey` in the **cURL** command for authentication. Make sure to add the path of the **appFile** in the cURL request. Here is an example cURL request to upload your app using our REST API:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Using App File:**

<Tabs className="docs__val" groupId="os">
<TabItem value="macos" label="Linux / MacOS" default>

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" \\
--location --request POST 'https://manual-api.lambdatest.com/app/upload/realDevice' \\
--form 'name="Android_App"' \\
--form 'appFile=@"/Users/macuser/Downloads/proverbial_android.apk"' 
`}
</CodeBlock>
</div>

</TabItem>

<TabItem value="windows" label="Windows" default>
<div className="lambdatest__codeblock">
<CodeBlock className="language-powershell">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "appFile=@"/Users/macuser/Downloads/proverbial_android.apk""`}
</CodeBlock>
</div>
</TabItem>
</Tabs>

**Using App URL:**

<Tabs className="docs__val" groupId="os">
<TabItem value="macos" label="Linux / MacOS" default>

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" --location --request POST "https://manual-api.lambdatest.com/app/upload/realDevice" --header "Content-Type: application/x-www-form-urlencoded" --data-urlencode "url=:https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk" --data-urlencode "name=Proverbial_App"`}
</CodeBlock>
</div>

</TabItem>

<TabItem value="windows" label="Windows" default>
<div className="lambdatest__codeblock">
<CodeBlock className="language-powershell">
{`curl --location --request POST "https://manual-api.lambdatest.com/app/upload/realDevice" -u "${YOUR_LAMBDATEST_USERNAME()}:${YOUR_LAMBDATEST_ACCESS_KEY()}" --header "Content-Type: application/x-www-form-urlencoded" --data-urlencode "url=https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk" --data-urlencode "name=test" --data-urlencode "custom_id=my_app"`}
</CodeBlock>
</div>
</TabItem>
</Tabs>

:::tip

- If you do not have any **.apk** or **.ipa** file, you can run your sample tests on <BrandName /> by using our sample :link: [Android app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_android.apk) or sample :link: [iOS app](https://prod-mobile-artefacts.lambdatest.com/assets/docs/proverbial_ios.ipa).
- Response of above cURL will be a **JSON** object containing the `App URL` of the format - ``lt://APP123456789123456789`` and will be used in the next step.

:::

---

### Step 2: Start a Session on Appium Inspector

Start the Appium Inspector & Select <BrandName /> from the list of Cloud Test Providers.

---

### Step 3: Configure your Credentials

Enter in your UserName & Access Key. You may find the credentials available on [<BrandName /> Dashboard](https://appautomation.lambdatest.com/)

---

### Step 4: Configure Desired Capabilities & Start the Session

Configure <BrandName /> capabilities in the desired capabilities tab on Appium inspector. Use the unique app URL obtained in Step 1 to set the app capability Value.For more details, please refer to our guide on [Desired Capabilities in Appium](/support/docs/desired-capabilities-in-appium/).

Alternatively, we can also go to our [capabilities generator](https://www.lambdatest.com/capabilities-generator/) and generate the Capability Representation using GUI.

<img loading="lazy" src={require('../assets/images/appium-inspector/appium_inspector2.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>

Once this is complete, you can now run the test by clicking on start session. Once you start the session, a video recording along with detailed information and logs of the test run will be available on the [<BrandName /> Dashboard](https://appautomation.lambdatest.com/build).

<img loading="lazy" src={require('../assets/images/appium-inspector/appium_inspector1.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>

## Attaching to a running session in Appium Inspector

### Step 1: Configure your Credentials
After you have added your credentials from [Step 2 of Starting an Appium Session](/support/docs/appium-inspector-integration/#attaching-to-a-running-session-in-appium-inspector), click on Attach to Session.

<img loading="lazy" src={require('../assets/images/appium-inspector/appium_inspector3.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>

### Step 2: Run a session
Start an App Automation that you'd like to attach to.

### Step 3: Choose the session to attach
Click on the refresh button and choose a session to attach to.

<img loading="lazy" src={require('../assets/images/appium-inspector/appium_inspector4.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>

### Step 4: Attach to Session
Once you have selected a session, click on Attach to Session.

<img loading="lazy" src={require('../assets/images/appium-inspector/appium_inspector5.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>

### Step 5: Viewing the session
We have now successfully attached to the session and can see & perform operations as well.

<img loading="lazy" src={require('../assets/images/appium-inspector/appium_inspector6.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>

> Got any questions?<br/>
> Please reach out at our <span className="doc\_\_lt" onClick={() => window.openLTChatWidget()}>**24x7 Chat Support**</span> or you could also mail us at [support@testmu.ai](https://support.lambdatest.com/).

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
      Appium Inspector 
      </span>
    </li>
  </ul>
</nav>
