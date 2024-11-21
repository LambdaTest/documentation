---
id: application-setup-via-gui
title: Perform Operations on your Application via GUI
sidebar_label: via GUI
description: Explore how to perform operations with your applications like uploading, deleting via gui for real and virtual devices.
keywords:
  - appium
  - application operations
  - lambdatest
  - mobile testing
  - apis
  - setup application
url: https://www.lambdatest.com/support/docs/application-setup-via-gui/
site_name: LambdaTest
slug: application-setup-via-gui/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import CodeBlock from '@theme/CodeBlock';
import NewTag from '../src/component/newTag';

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
          "name": "Applications",
          "item": "https://www.lambdatest.com/support/docs/application-setup-via-gui/"
        }]
      })
    }}
></script>
To test your iOS (.ipa file) or Android (.apk or .aab file) application on LambdaTest, you can upload them directly from the dashboard. In this documentation, we have listed the the ways via which you can upload your application for both Virtual and Real Devices.

## Real Device Dashboard
- **Access the Dashboard :** Log in to your LambdaTest account and navigate to the [Real Device dashboard](https://applive.lambdatest.com/app).
- **Initiate the Upload :** Click the Upload button in the dashboard and select your application file from your local system:
  - **For Android :** Ensure the file is in `.apk` or `.aab` format.
  - **For iOS :** Use `.ipa` format.
Wait for the file to upload and process. A success message will indicate when your application is ready.
- **Open App Settings :** Once uploaded, find your application in the list and click on the Settings button.
- **Copy the App ID :** In the settings, locate the App ID field. Copy this ID, as it will be required to reference your app in automated tests or other configurations.

<img loading="lazy" src={require('../assets/images/appium-app/application/real-device-upload.gif').default} alt="Image" className="doc_img"/>

> Learn how to [Upload Apps on LambdaTest’s Real Device Cloud](/support/docs/upload-apps-on-real-device-cloud/) in detail.

## Automation Dashboard
- **Access the App Automation Dashboard :** Log in to your LambdaTest account and navigate to the [App Automation Dashboard](https://appautomation.lambdatest.com/build).
- **Upload the Application :** Click the Browse File button in the App tab under the Real Device or Virtual Device section. Select your application file from your local system:
  - **Android :** Upload a `.aab` or `.apk` file.
  - **iOS :** Upload an `.ipa` file.
- **Copy the App URL :** After uploading, an `app_url` will be generated (format: `"lt://<app_url>"`). Copy this app_url and use it in your test scripts to identify your application.

<img loading="lazy" src={require('../assets/images/appium-app/application/automation-upload.gif').default} alt="Image" className="doc_img"/>