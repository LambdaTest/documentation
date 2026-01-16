---
id: group-folder-redirect-on-real-device
title: Group Folder Redirect for iOS Apps in App Live
sidebar_label: Group Folder Redirect
description: Enable Group Folder Redirect support for iOS apps on TestMu AI Real Devices.
keywords:
  - testmu ai real devices
  - ios app live
  - group folder redirect
  - ios file system testing
  - private app container testing
url: https://www.testmu.ai/support/docs/group-folder-redirect-on-real-device/
site_name: LambdaTest
slug: group-folder-redirect-on-real-device
canonical: https://www.testmu.ai/support/docs/group-folder-redirect-on-real-device/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

# Group Folder Redirect On Real Devices  

<BrandName /> supports **Group Folder Redirect** for iOS apps on Real Devices.  
This feature ensures your app uses its **private container directory** instead of the **shared app group container**, which becomes inaccessible after **app resigning** on Real Devices.

---

## Use Cases 

- Ensure your app maintains **file system access** after being re-signed on Real Devices.  
- Prevent issues when your app relies on the **shared App Group container**, which becomes inaccessible after resigning.  
- Guarantee consistent **storage and retrieval of files** by using the app’s private container.  

---

## Using Group Folder Redirect in Manual Testing


**Step 1**: Click on the Real Devices > App Testing


**Step 2**: Upload your application. Open the **App Settings** to enable the **Group Folder Redirect** toggle.

![Group-Folder-Redirect](../assets/images/real-device-app-testing/Group-folder-redirect/Group-Folder-redirects.png)


**Step 4**: Select your device and start your Real Device testing session.  

---
:::info
- An **instrumented version** of your app with Group Folder Redirect support will launch.  
- The app will store and retrieve files from its **private container directory** instead of the shared App Group container.  
- File system features will function consistently even after app resigning.  
:::



