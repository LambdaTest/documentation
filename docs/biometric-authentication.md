---
id: biometric-authentication
title: Biometric Authentication
sidebar_label: Biometric Authentication
description: Now you can test biometric authentication functionalities such as fingerprint or face recognition in your app on LambdaTest Real Device Cloud Platform with 3000+ real mobile devices.
keywords:
  - biometric authentication
  - Fingerprint authentication
  - app test automation
  - Biometric security
  - Biometric Authentication Testing
  - Barcode scanning
  - lambdatest capture code
  - framework on lambdatest
  - Facial recognition
  - app testing appium
  - app testing
  - real devices
url: https://www.lambdatest.comsupport/docs/biometric-authentication/
site_name: LambdaTest
slug: biometric-authentication/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
          "name": "Biometric Authentication",
          "item": "https://www.lambdatest.com/support/docs/biometric-authentication/"
        }]
      })
    }}
></script>

## Introduction
---

Biometric Authentication is a security process that leverages the unique biological characteristics of individuals to verify their identities. In native applications, it is often used to provide a seamless, secure, and efficient user experience. 

LambdaTest now supports Biometric Authentication for real devices (iOS and android). This new feature allows you to test your application's biometric authentication functionality more accurately and ensures your app provides an optimal user experience across a range of devices and platforms.

:::info
**OS Version:** Biometric authentication is supported only on Android devices with OS version `11` or `above`, and on iOS devices with OS version `13` or `above`.
:::
### Biometric Authentication APIs supported

Below given is the list of Biometric Authentication APIs which are supported. Please ensure that your app uses these APIs only to enable Biometric Authentication.

| OS                  | Devices                                 | Supported APIs   |
| -------------------- | ------------------------------ | ----------------- |
| Android        | Android 11 and higher      | `BiometricPrompt` class's `authenticate` method from the **AndroidX Biometric library** is used for Biometric authentication on Android devices. For details, please check [AndroidX Biometric Documentation](https://developer.android.com/jetpack/androidx/releases/biometric). |
|  |  | **Android's Native** `BiometricPrompt` API is part of the Android platform and is used for Biometric authentication on Android devices. For details, please check [Android Developers Documentation](https://developer.android.com/reference/android/hardware/biometrics/BiometricPrompt). |
|iOS||`LAContext`: The LAContext class is used to interact with the local authentication framework.|
|||`evaluatePolicy`: The evaluatePolicy(_:localizedReason:reply:) method of LAContext used to actually perform the biometric authentication, such as verifying a user's face or fingerprint.
|||`canEvaluatePolicy`: The canEvaluatePolicy(_:error:) method of LAContext that checks whether a specific biometric authentication policy can be evaluated on the device.


Note: The OS versions and APIs mentioned above are subject to change as per the latest OS updates and best practices recommended by Android and iOS.
## Biometric Authentication in Real Device App Testing

----

This feature allows you to simulate successful or failed biometric authentication during real-time app testing. Follow the steps below to enable biometric authentication in your testing session:

1. Go to **App Testing** under the **Real Devices** section given in the side bar of your LambdaTest console.
2. On the **App testing** page upload your application.
:::tip
After uploading your application, please wait atleast for 1-2 minutes for the application file patching process to complete.
:::
3. Hover over the app for which you wish to enable Biometric Authentication and click on the **Settings** icon. You'll find a **toggle** for Biometric Authentication; switch it on, as depicted in the image below. After toggling the switch, remember to click on Save changes. Then, proceed by clicking on **Start** to initiate the session and run your app on the selected device.

<img loading="lazy" src={require('../assets/images/biometric-authentication/biometric-authentication.png').default} alt="Image" width="100" height="100" className="doc_img"/>

4. Once your session starts and biometric authentication is enabled for the app, use Lambdatest's **Biometric Authentication** pop-up shown below to interact with any instance where biometric authentication is invoked.

<img loading="lazy" src={require('../assets/images/biometric-authentication/biometric-ss.png').default} alt="Image" width="100" height="100" className="doc_img"/>


## Biometric Authentication in App Automation
---
### Using desired Capabilities 

To enable biometric authentication feature in your automation script, set the capability `enableBiometricsAuthentication` to `true`.

```java
DesiredCapabilities capabilities = new DesiredCapabilities();
capabilities.setCapability("build","Java TestNG Android");
capabilities.setCapability("name",platform+" "+device+" "+version);
capabilities.setCapability("deviceName", device);
capabilities.setCapability("platformVersion",version);
capabilities.setCapability("platformName", platform);
capabilities.setCapability("isRealMobile", true);
capabilities.setCapability("app", "APP_URL"); //Enter your app (.apk) url
capabilities.setCapability("deviceOrientation", "PORTRAIT");
capabilities.setCapability("console", true);
capabilities.setCapability("network", false);
capabilities.setCapability("visual", true);
capabilities.setCapability("devicelog", true);
capabilities.setcapability("enableBiometricsAuthentication",true)
```


### Using Lambda-Hook

To implement `pass` or `fail` conditions for biometric authentication in your automation script, you have to use our Lambda-hook mentioned below:

```python
driver.execute_script("lambda-biometric-injection=fail")
```
-----

| TYPE          | KEY                           | DATA TYPE| VALUES                                      |
| ------------- | ----------------------------- |-|------------------------------------------- |
| capability (for both iOS & android)|enableBiometricsAuthentication|boolean| `true` <br/> OR <br/> `false` 
| lambda-hook   | lambda-biometric-injection  || `lambda-biometric-injection=fail` <br/> OR <br/> `lambda-biometric-injection=pass` |

:::info
To use the web hook, passing **biometric** or **enableBiometricsAuthentication** capability is mandatory.
:::

-----
## Important Notes

1. If you plan to use the **Uninstall Lambda Hook**, and then the **Install Lambda Hook** for the same application, biometric authentication can be used afterwards only via the lambda-hook. In this case, the initial capability won't be applicable anymore.
2. Biometric authentication will work for all the applications that were uploaded after 23rd June 2023. 


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
      Biometric Authentication</span>
    </li>
  </ul>
</nav>