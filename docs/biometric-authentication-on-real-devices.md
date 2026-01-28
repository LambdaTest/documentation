---
id: biometric-authentication-on-real-devices
title: Biometric Authentication on Real Devices
sidebar_label: Biometric Authentication
description: Learn how to test biometric authentication in iOS and Android apps using TestMu AI's real device testing platform. Enhance app security and user experience.
keywords:
  - biometric authentication
  - Fingerprint authentication
  - app test automation
  - Biometric security
  - Biometric Authentication Testing
  - Barcode scanning
  - testmu ai capture code
  - framework on testmu ai
  - Facial recognition
  - app testing appium
  - app testing
  - real devices
url: https://www.testmuai.com/support/docs/biometric-authentication-on-real-devices/
site_name: LambdaTest
slug: biometric-authentication-on-real-devices/
canonical: https://www.testmuai.com/support/docs/biometric-authentication-on-real-devices/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
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
          "name": "Biometric Authentication",
          "item": `${BRAND_URL}/support/docs/biometric-authentication-on-real-devices/`
        }]
      })
    }}
></script>
Biometric Authentication is a security mechanism that utilizes unique biological traits to verify user identities. This feature is commonly implemented in native applications to enhance security while providing a frictionless user experience.

<BrandName /> has extended its testing capabilities to include Biometric Authentication support for both iOS and Android real devices. This enhancement enables developers and QA teams to thoroughly evaluate their application's biometric authentication functionality across diverse device ecosystems.

<div className="ytframe"> 
<div className="youtube" data-embed="32e7bBHiYKg">
    <div className="play-button"></div>
</div>
</div>

:::info
**OS Version:** Biometric authentication is supported only on Android devices with OS version `11` or `above`, and on iOS devices with OS version `13` or `above`.
:::

## Supported Biometric Authentication APIs

Below given is the list of Biometric Authentication APIs which are supported. Please ensure that your app uses these APIs only to enable Biometric Authentication.

<Tabs className="docs__val">

<TabItem value="bash" label="iOS" default>

  <div className="lambdatest__codeblock">
    | Supported APIs |
    |----------------|
    | `LAContext`: The LAContext class is used to interact with the local authentication framework.|
    | `evaluatePolicy`: The evaluatePolicy(_:localizedReason:reply:) method of LAContext used to actually perform the biometric authentication, such as verifying a user's face or fingerprint. |
    |`canEvaluatePolicy`: The canEvaluatePolicy(_:error:) method of LAContext that checks whether a specific biometric authentication policy can be evaluated on the device.|
  </div>

</TabItem>

<TabItem value="powershell" label="Android >= version 11" default>

  <div className="lambdatest__codeblock">
    | Supported APIs |
    |----------------|
    | `BiometricPrompt` class's `authenticate` method from the **AndroidX Biometric library** is used for Biometric authentication on Android devices. <br /><br />📕For details, please check [AndroidX Biometric Documentation](https://developer.android.com/jetpack/androidx/releases/biometric). |
    | **Android's Native** `BiometricPrompt` API is part of the Android platform and is used for Biometric authentication on Android devices.<br /><br />📕 For details, please check [Android Developers Documentation](https://developer.android.com/reference/android/hardware/biometrics/BiometricPrompt).|
  </div>

</TabItem>
</Tabs>

:::warning note
The OS versions and APIs mentioned above are subject to change as per the latest OS updates and best practices recommended by Android and iOS.
:::

## Biometric Authentication in Real Device App Testing

This feature allows you to simulate successful or failed biometric authentication during real-time app testing. Follow the steps below to enable biometric authentication in your testing session:

**Step 1:** Click on the **Real Devices** > **App Testing**

**Step 2:** Select your required device and upload your application which supports the camera APIs listed above.

**Step 3:** Now, hover over your app and click on the **Settings** icon. Toggle the **Biometric Authentication** option and click on **Save Changes** button. Click on **Start** to run your app on the selected device.

:::info
After uploading your application, please wait atleast for 1-2 minutes for the application file patching process to complete.
:::

<img loading="lazy" src={require('../assets/images/real-device-app-testing/biometric-authentication/biometric-authentication.png').default} className="doc_img"/>

**Step 4:** Once your session starts and biometric authentication is enabled for the app, use Lambdatest's **Biometric Authentication** pop-up shown below to interact with any instance where biometric authentication is invoked.

<img loading="lazy" src={require('../assets/images/real-device-app-testing/biometric-authentication/biometric-ss.png').default} className="doc_img"/>
