---
id: app-manager
title: "App Manager on Real Devices"
hide_title: false
sidebar_label: App Manager
description: Manage and test multiple app versions on real devices using TestMu AI App Manager. Supports .apk, .aab, and .ipa uploads with version control and live testing.

keywords:
    - lambdaTest
    - lambdaTest app manager
    - mobile app version control
    - manage mobile app builds
    - Accessibility Testing Settings
    - TestMu AI app storage
    - test .apk .aab .ipa files
url: https://www.lambdatest.com/support/docs/app-manager/
site_name: LambdaTest
slug: app-manager/
---
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
          "name": "Accessibility Test Scheduling",
          "item": "https://www.lambdatest.com/support/docs/app-manager/"
        }]
      })
    }}
></script>


The LambdaTest App Manager is a tool within the Real Device App Testing section. It lets you easily upload, manage, and test different versions of your mobile apps. This guide explains how to access the App Manager, upload apps, search and filter them, and run any version on Real Devices.

:::info Currently in BETA

To enable it for your organization, please contact us via <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24×7 chat support**</span> or you can also drop a mail to **support@lambdatest.com**.<br />

:::

---

## Accessing App Manager
To access the App Manager in LambdaTest:

**Step 1:** Navigate to **Real Device** under **App Testing** in the LambdaTest dashboard.


**Step 2:** Click on the **App Manager** CTA.
<img loading="lazy" src={require('../assets/images/real-device-app-testing/APP_MANAGER_CTA.png').default} className="doc_img"/>

**Step 3:** This will open the **App Manager** in a new tab. 
<img loading="lazy" src={require('../assets/images/real-device-app-testing/APP_MANAGER_MAIN_SCREEN.png').default} className="doc_img"/>

## Uploading Apps on App Manager

In the **App Manager** window, users can **upload mobile app** files Either by click **“Click to upload”**  or **drag and drop your file** into the upload box.

<img loading="lazy" src={require('../assets/images/real-device-app-testing/APP_MANAGER_FILE_UPLOAD.png').default} className="doc_img"/>

---
:::note

**Supported formats :**
| Platform | Supported Format |
|----------|---------------------------|
| Android  | .apk, .aab        | 
| iOS      | .ipa | 

**Maximum App upload limit (Per batch):** 10

**Maximum size per app:** 1 GB
:::

---

## Searching and Filtering Apps
Once your apps are uploaded, you can easily search and filter them using the tools provided:

- **Search Bar**: Search by:

  - **App Name** – the name of the app you uploaded.

  - **Package Name** – the identifier for all versions of an Android app.

  - **Bundle ID** – the identifier for all versions of an iOS app.

- **OS Filter**: 
  The OS Filter in the App Manager allows you to easily sort and view apps based on their operating system. This is especially useful when managing a mix of Android and iOS builds.
  - You can filter the app list to show:

    - **Android** apps only

    - **iOS** apps only

    - Both **Android** and **iOS** apps together

<img loading="lazy" src={require('../assets/images/real-device-app-testing/APP_MANAGER_FILTER_SEARCH_BAR.png').default} className="doc_img"/>

---
## Version Control

**LambdaTest App Manager** offers a convenient version control system for managing multiple versions of the same application:
- When you click on an app name in the file bundle section, a **App Card** opens.
- This **App Card** displays all versions of the selected app that have been uploaded.

<img loading="lazy" src={require('../assets/images/real-device-app-testing/APP_MANAGER_APP_CARD.png').default} className="doc_img"/>
- The **most recent version** appears at the top, with older versions listed below.
- Users can:
  -  **Search** through the uploaded App versions.
  -  Run any version by clicking the **Green Run** button or recent version by clicking on **Run App**.

<img loading="lazy" src={require('../assets/images/real-device-app-testing/APP_MANAGER_VERSION_CONTROL.png').default} className="doc_img"/>
---

### Release Notes for Versions
For each app version, you can add multiline release notes to help differentiate between multiple builds.
- To add release notes, open the three dots menu on the desired version in the App Card and click Version Details.
<img loading="lazy" src={require('../assets/images/real-device-app-testing/App_Manager_r1.png').default} className="doc_img"/>
- Inside Version Details, you’ll see an option to enter release notes.
<img loading="lazy" src={require('../assets/images/real-device-app-testing/App_Manager_r2.png').default} className="doc_img"/>
- Once added, a notes icon appears on the version. On hover, the release note is shown directly from the App Card. 
<img loading="lazy" src={require('../assets/images/real-device-app-testing/App_Manager_r3.png').default} className="doc_img"/>

:::info
- Maximum release notes length is upto 500 characters.
- On hover, only the first 100 characters are displayed, followed by ... if the text is longer.
- Only the owner of the version has permission to add or edit release notes, Other users can only view them.
:::

---

## Launching an App on a Real Device  
Once a specific version is selected:

 **Step 1:** Click the **Run App** button beside the version you want to test.

 **Step 2** This action redirects you to the **Real Device App Testing** screen 
<img loading="lazy" src={require('../assets/images/real-device-app-testing/APP_MANAGER_RUN_TEST.png').default} className="doc_img"/>

 **Step 3** A list of available Real devices is displayed. Click on the device you want to use for testing.

 **Step 4** Click on **Start button**.

 **Step 5** This will **launch your Session**.

---
## Use Case

- Maintain multiple versions of the same app for **consistent version control**
- Validate app behavior across different OS versions and device models
- Compare versions for **debugging** or **verifying fixes**
- Share builds with team members or stakeholders for **review and collaboration**
- **Launch and test** any uploaded version directly on real devices
- Maintain version history for **compliance** and **QA tracking**
