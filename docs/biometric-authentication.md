---
id: biometric-authentication
title: Biometric Authentication
sidebar_label: Biometric Authentication
description: Test biometric authentication functionalities such as fingerprint or face recognition in your app on TestMu AI Real Device Cloud Platform with 3000+ real mobile devices.
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
url: https://www.testmu.ai/support/docs/biometric-authentication/
site_name: LambdaTest
slug: biometric-authentication
canonical: https://www.testmu.ai/support/docs/biometric-authentication/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RealDeviceTag from '../src/component/realDevice';
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
          "item": `${BRAND_URL}/support/docs/biometric-authentication/`
        }]
      })
    }}
></script>
<RealDeviceTag value="Real Device" /> 
Biometric Authentication is a security process that leverages the unique biological characteristics of individuals to verify their identities. In native applications, it is often used to provide a seamless, secure, and efficient user experience.

<BrandName /> now supports Biometric Authentication for real devices (iOS and android). This new feature allows you to test your application's biometric authentication functionality more accurately and ensures your app provides an optimal user experience across a range of devices and platforms.

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

  :::warning note
  We don’t support apps using IOS Keychain APIs with Biometric access control. For more details [IOS Keychain Documentation](https://developer.apple.com/documentation/localauthentication/accessing-keychain-items-with-face-id-or-touch-id)
  :::

</TabItem>

<TabItem value="powershell" label="Android >= version 11" default>

  <div className="lambdatest__codeblock">
    | Supported APIs |
    |----------------|
    | `BiometricPrompt` class's `authenticate` method from the **AndroidX Biometric library** is used for Biometric authentication on Android devices. <br /><br />📕For details, please check [AndroidX Biometric Documentation](https://developer.android.com/jetpack/androidx/releases/biometric). |
    | **Android's Native** `BiometricPrompt` API is part of the Android platform and is used for Biometric authentication on Android devices.<br /><br />📕 For details, please check [Android Developers Documentation](https://developer.android.com/reference/android/hardware/biometrics/BiometricPrompt).|
    | `BiometricManager` API<br /><br /> 📕 For more details [BiometricManager Documentation](https://developer.android.com/reference/android/hardware/biometrics/BiometricManager) |
    | `KeyguardManager`  API <br /><br />📕 For more details [KeyguardManager Documentation](https://developer.android.com/reference/android/app/KeyguardManager) |
  </div>

</TabItem>
</Tabs>

:::tip
The OS versions and APIs mentioned above are subject to change as per the latest OS updates and best practices recommended by Android and iOS.
:::

## Biometric Authentication in App Automation

### Using desired Capabilities 

To enable biometric authentication feature in your automation script, set the capability `enableBiometricsAuthentication` to `true`.

```java
DesiredCapabilities capabilities = new DesiredCapabilities();
capabilities.setcapability("enableBiometricsAuthentication",true)
```

### Using Lambda-Hook

To implement `pass` or `fail` conditions for biometric authentication in your automation script, you have to use our Lambda-hook mentioned below:

```python
driver.execute_script("lambda-biometric-injection=fail")
```

| TYPE | KEY | DATA TYPE| VALUES |
|------|-----|----------|--------|
| capability (for both iOS & android)|enableBiometricsAuthentication|boolean| `true` <br/> OR <br/> `false` 
| lambda-hook | lambda-biometric-injection  || `lambda-biometric-injection=fail` <br/> OR <br/> `lambda-biometric-injection=pass` |

:::note
- To use the web hook, passing `enableBiometricsAuthentication` capability is mandatory.
- If you plan to use the **Uninstall Lambda Hook**, and then the **Install Lambda Hook** for the same application, biometric authentication can be used afterwards only via the lambda-hook. In this case, the initial capability won't be applicable anymore.
:::

> 📕 Check the [documentation for Biometrics Authentication](/support/docs/biometric-authentication-on-real-devices/) feature in Manual App Testing on Real devices
