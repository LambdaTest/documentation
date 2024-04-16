---
id: ios-ipa-files-xcui
title: Creating iOS apps
sidebar_label: Creating iOS apps
description: Effortlessly test iOS IPA files with XCUi on LambdaTest. Ensure your apps run smoothly on all iOS devices with comprehensive testing support.
keywords:
  - xcuitest
  - app test automation
  - ipa bundle
  - .app to .ipa
  - Xcode
  - lambdatest xcuitest
  - framework on lambdatest
  - app testing xcuitest
  - app testing
  - real devices
url: https://www.lambdatest.com/support/docs/ios-ipa-files-xcui/
site_name: LambdaTest
slug: ios-ipa-files-xcui/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

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
          "name": "Creating iOS apps",
          "item": "https://www.lambdatest.com/support/docs/ios-ipa-files-xcui/"
        }]
      })
    }}
></script>

---

Creating and testing iOS applications is a multi-step process that involves a series of precise actions to ensure your app functions as intended. This document guides you through the essential steps required to prepare your app for distribution and to create test packages using **Xcode**, which will be used for XCUI testing.

## Objectives

---

By the end of this topic, you will be able to:

1. Create .ipa app for testing
2. Create an XCUITest package (with .ipa extension)
3. Aligning iOS Deployment Target for XCUITest Testing.

---
## 1. Create .ipa files for testing

In Xcode, there are two common methods to create **.ipa** files for iOS app distribution. The first method directly creates the .ipa file, while the second method involves creating an .app bundle and then converting it into an .ipa file.
### Method 1: Create .ipa app 

You can directly create .ipa files using various export methods (**Ad Hoc, Enterprise,** or **Development**) for distribution. The App Store type is not included in this method.

1. Open your project in Xcode.
2. Choose **Generic iOS Device** or **Any iOS Device (arm64).** for the project's device target.
3. Go to the **Product** menu and select **Clean** to ensure a clean build.
4. Again, go to the **Product** menu and select **Archive.** Your app will be listed under the **Archives** after the process is completed.
5. Choose your app from the list and click **Distribute App.**
6. Select an export method (**Ad Hoc, Enterprise, Development**).
7. Configure the Distribution options as follows:
   - **App Thinning:** None
   - Unselect the option **Rebuild from Bitcode.**
   - **Strip swift symbols** is optional.
   - Unselect the option **Include manifest for over-the-air installation.**
8. Choose your Distribution Certificate and Provisioning Profile (Automatic or Manual). This will create the **.ipa** file.
9. Once the export is complete, you will be prompted to specify the location where you want to save the **.ipa** file. Choose the desired location for saving the generated .ipa file.
10. You can use the generated .ipa file for testing on the **LambdaTest** Platform.
### Method 2: Create .ipa app from .app bundles

1. Open your app project in Xcode.
2. For your Product's device target, select either **Generic iOS Device** or **Any iOS Device (arm64).**
3. Go to the **Product** menu and select **Clean** to ensure a clean build.
4. Again, go to the **Product** menu and select **Build.**
5. The **.app file** is generated in your Xcode project's **Products Directory**.

6. After generating the **.app** bundle, proceed with building an **.ipa** file:

   6.1. Firstly, create an empty directory with the name `Payload`.

   6.2. Move the .app file to the `Payload` directory.

   6.3. Make an archive (.zip file) by compressing the `Payload` directory.

   6.4. Rename this archive and append `.ipa` at the end. This creates an **.ipa file**.



## 2. Create an XCUITest Package (.ipa)

1. Open your application project in Xcode.

2. Choose **Generic iOS Device** or **Any iOS Device (arm64)** for the project's device target.

3. Confirm that your UI Tests are included in **Target Membership** and the said targets are selected to be built in your **Xcode Build Scheme.** _UI Tests Targets are specially selected to be built at the "Test" build action._
<img loading="lazy" src={require('../assets/images/app-automation/ios_ipa_xcuit.png').default} alt="Image" width="1366" height="625" className="doc_img"/>

4. Create your test package by following **Product > Build For > Testing.**

5. Go to the **Products Directory** of your XCode project to find the generated **.app file**.

Now, for creating an **.ipa** from the **.app** bundle, follow these additional steps:

6. After generating the **.app** bundle, proceed with building an **.ipa** file:

   6.1. Firstly, create an empty directory with the name `Payload`.

   6.2. Move the .app files to the `Payload` directory.

   6.3. Make an archive (.zip file) by compressing the `Payload` directory.

   6.4. Rename this archive and append `.ipa` at the end. This creates an **.ipa file**.

These additional instructions allow you to transform the generated **.app** bundle into an **.ipa** file, suitable for iOS app distribution.

## 3. Aligning iOS Deployment Target for XCUITest Testing.

Match the iOS version of your app and test runner **iOS Deployment Target**. If they don't match up, the tests will run locally, but won't be able to run on LambdaTest Real Devices.

To match the version in your Xcode Project.

1. Go to the Project that you wish to build.
2. Go to the **Build Settings**, set the **iOS Deployment Target** to the iOS version of your app. This will align the app and test runner to the same iOS version.

To match the version in your Xcode Target.

1. Choose the Target of your Project.
2. Go to the **Build Settings**, set the **iOS Deployment Target** to the iOS version you want to use in your test.

:::caution Warning
This process will overwrite the **Build settings** at the Project Level to the given iOS version. While using this method, take note that the Targets can be out of sync with each other and the project settings, which will cause the tests to break. You would need to re-build the Project if you change the iOS version for one target output in order to keep all your targets in sync.
:::

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
      XCUI Testing
      </span>
    </li>
  </ul>
</nav>