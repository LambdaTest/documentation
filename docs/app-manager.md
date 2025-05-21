---
id: app-manager
title: App Manager
hide_title: false
sidebar_label: App Manager
description: Manage and test multiple app versions on real devices using LambdaTest App Manager. Supports .apk, .aab, and .ipa uploads with version control and live testing.

keywords:
    - lambdaTest
    - lambdaTest app manager
    - mobile app version control
    - manage mobile app builds
    - Accessibility Testing Settings
    - LambdaTest app storage
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

The LambdaTest App Manager is part of the Real Device App Testing suite. It allows users to upload, manage, and run multiple versions of mobile applications seamlessly. This documentation outlines the steps to access the App Manager, upload and manage apps, filter and search through apps, and run different app versions on real devices.

## Accessing App Manager
To access the App Manager in LambdaTest:

**Step 1:** Navigate to Real Device under App Testing in the LambdaTest dashboard.


**Step 2:** Click on the App Manager CTA.
<img loading="lazy" src={require('../assets/images/real-device-app-testing/APP_MANAGER_CTA.png').default} className="doc_img"/>

**Step 3:** This will open the App Manager in a new tab. 
<img loading="lazy" src={require('../assets/images/real-device-app-testing/APP_MANAGER_MAIN_SCREEN.png').default} className="doc_img"/>

## Uploading Apps on App Manager

In the App Manager window, users can upload mobile app files:

- Either click **“Click to upload”**  or **drag and drop your file** into the upload box.
<img loading="lazy" src={require('../assets/images/real-device-app-testing/APP_MANAGER_FILE_UPLOAD.png').default} className="doc_img"/>

---
:::note

**Supported formats :**
| Platform | Supported Format |
|----------|---------------------------|
| Android  | .apk, .aab        | 
| iOS      | .ipa | 

**Maximum App upload limit:** 10

**Maximum size per app:** 1 GB
:::

---

## Searching and Filtering Apps
Once your apps are uploaded, you can easily search and filter them using the tools provided:

- **Search Bar**: Search by:

- - **App Name** – the name of the app you uploaded.

- - **Package Name** – the identifier for all versions of an Android app.

- - **Bundle ID** – the identifier for all versions of an iOS app.

- **OS Filter**: 
- The OS Filter in the App Manager allows you to easily sort and view apps based on their operating system. This is especially useful when managing a mix of Android and iOS builds.
- You can filter the app list to show:

- - Android apps only

- - OS apps only

- - Both Android and iOS apps together
<img loading="lazy" src={require('../assets/images/real-device-app-testing/APP_MANAGER_FILTER_SEARCH_BAR.png').default} className="doc_img"/>

---
> To enable it for your organization, please contact us via <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24×7 chat support**</span> or you can also drop a mail to **support@lambdatest.com**.<br />
---
## Version Control
LambdaTest App Manager offers a convenient version control system for managing multiple versions of the same application:
- When you click on an app name in the file bundle section, a version panel opens.
- This panel displays all versions of the selected app that have been uploaded.
- The most recent version appears at the top, with older versions listed below.
- Users can:
- - Search through the uploaded versions.
- - Run any version by clicking the green Run App button or recent version by clicking on **Run App**.

<img loading="lazy" src={require('../assets/images/real-device-app-testing/APP_MANAGER_VERSION_CONTROL.png').default} className="doc_img"/>
---

## Launching an App on a Real Device  
Once a specific version is selected:

- **Step 1:** Click the Run App button beside the version you want to test.
- **Step 2** This action redirects you to the Real Device App Testing screen.
<img loading="lazy" src={require('../assets/images/real-device-app-testing/APP_MANAGER_RUN_TEST.png').default} className="doc_img"/>

- **Step 3** A list of available real devices is displayed. Click on the device you want to use for testing.
- **Step 4** Click on Start button.
- **Step 5** You can interact with your app in real-time.
---
## Use Case

- Maintain multiple versions of the same app for consistent version control
- Validate app behavior across different OS versions and device models
- Test patched builds quickly for hotfix verification and bug resolution
- Share builds with team members or stakeholders for review and collaboration
- Share builds with team members or stakeholders for review and collaboration
- Launch and test any uploaded version directly on real devices
- Upload and manage Android (.apk, .aab) and iOS (.ipa) app builds securely

