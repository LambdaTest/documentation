---
id: application-setup-via-gui
title: Perform Operations on your Application via GUI
sidebar_label: via GUI
description: Explore how to perform operations with your applications like uploading, deleting via gui for real and virtual devices.
keywords:
  - appium
  - application operations
  - testmu ai
  - mobile testing
  - apis
  - setup application
url: https://www.testmuai.com/support/docs/application-setup-via-gui/
site_name: TestMu AI
slug: application-setup-via-gui/
canonical: https://www.testmuai.com/support/docs/application-setup-via-gui/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import CodeBlock from '@theme/CodeBlock';
import NewTag from '../src/component/newTag';
import RealDeviceTag from '../src/component/realDevice';
import VirtualDeviceTag from '../src/component/virtualDevice';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


<RealDeviceTag value="Real Device" /> 
<VirtualDeviceTag value="Virtual Device" />

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
          "name": "Applications",
          "item": `${BRAND_URL}/support/docs/application-setup-via-gui/`
        }]
      })
    }}
></script>
To test your iOS (.ipa file) or Android (.apk or .aab file) application on <BrandName />, you can upload them directly from the dashboard. In this documentation, we have listed the the ways via which you can upload your application for both Virtual and Real Devices.

## Real Device Dashboard
- **Access the Dashboard :** Log in to your <BrandName /> account and navigate to the [Real Device dashboard](https://applive.lambdatest.com/app).
- **Initiate the Upload :** Click the Upload button in the dashboard and select your application file from your local system:
  - **For Android :** Ensure the file is in `.apk` or `.aab` format.
  - **For iOS :** Use `.ipa` format.
Wait for the file to upload and process. A success message will indicate when your application is ready.
- **Open App Settings :** Once uploaded, find your application in the list and click on the Settings button.
- **Copy the App ID :** In the settings, locate the App ID field. Copy this ID, as it will be required to reference your app in automated tests or other configurations.

<img loading="lazy" src={require('../assets/images/appium-app/application/real-device-upload.gif').default} alt="Image" className="doc_img"/>


> Learn how to [Upload Apps on <BrandName />’s Real Device Cloud](/support/docs/upload-apps-on-real-device-cloud/) in detail.

:::info
- You can access the [**Virtual Device Dashboard**](https://app.lambdatest.com/console/realtime/app).
- For **Virtual Devices**, the steps remain identical to those for Real Devices.  
- The only difference is that for **iOS applications**, you must upload a **.zip** file instead of an `.ipa` file, as simulators accept `.zip` format.  
:::

## Automation Dashboard
- **Access the App Automation Dashboard :** Log in to your <BrandName /> account and navigate to the [App Automation Dashboard](https://appautomation.lambdatest.com/build).
- **Upload the Application :** Click the Browse File button in the App tab under the Real Device or Virtual Device section. Select your application file from your local system:
  - **Android :** Upload a `.aab` or `.apk` file.
  - **iOS :** Upload an `.ipa` file.
- **Copy the App URL :** After uploading, an `app_url` will be generated (format: `"lt://<app_url>"`). Copy this app_url and use it in your test scripts to identify your application.

<img loading="lazy" src={require('../assets/images/appium-app/application/automation-upload.gif').default} alt="Image" className="doc_img"/>


:::info
- The **App Automation Dashboard** supports both **Real** and **Virtual Devices**.  
- To perform testing on Virtual Devices, simply select the **Virtual Device** option during upload — the rest of the flow remains identical.
:::
