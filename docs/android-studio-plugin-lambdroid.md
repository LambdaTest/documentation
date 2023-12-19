---
id: android-studio-plugin-lambdroid
title: LambDroid Espresso Plugin
sidebar_label: LambDroid Espresso Plugin
description: LambdaTest Android Studio plugin to run automated tests directly on the LambdaTest grid. 
keywords:
  - android studio
  - lambdroid
  - automation testing 
url: https://www.lambdatest.com/support/docs/android-studio-plugin-lambdroid
site_name: LambdaTest
slug: android-studio-plugin-lambdroid/
---
-----------------------------------------------------------------------------------------------------------------------------
LambdaTest have developed a new plugin to help developers execute tests on the LambdaTest Grid directly from the Android Studio (via LambDroid). The all-new LambdaTest plugin will allow developers and testers to directly run automated tests based on Espresso (Android Studio) framework on the LambdaTest real device cloud.

Google's Espresso is a native framework for automated Android testing. It is a part of the Android SDK and is easy to use for native mobile development, which helps you create tests that are close to the Android app's logic.

With this new plugin, testers and developers never have to leave Android Studio to execute a test on LambdaTest’s real device cloud. Follow these steps to install LambDroid plugin:

## How to Install LambDroid Plugin
-----------------------------------------------------------------------------------------------------------------------------
1. Press **Command (Ctrl)+ Comma (,)** to open the **Preferences** tab.
<img loading="lazy" src={require('../assets/images/lambdroid/lambdroid-preferences.webp').default} alt="Image" width="1444" height="703"  className="doc_img img_center"/>

2. Head to the **Plugins** section from the left navigation bar. 
<img loading="lazy" src={require('../assets/images/lambdroid/lambdroid-preferences.webp').default} alt="Image" width="1444" height="703"  className="doc_img img_center"/>
3. You can install LambDroid in two ways:
- You can directly search for **LambDroid** in the **Marketplace** and install it. Select **LambDroid**, click on **Apply**, and **OK**. 

 * You can head to the **Gear Icon** and click on the **Install Plugin from Disk…** option from the dropdown menu and manually install LambDroid. You can find the jar file to install LambDroid manually here. Click on **Apply** and **OK**.

> **Note:** If you don’t want to add the plugin from the marketplace, you can also use this [sample .jar file](https://lambdatestteam.slack.com/files/U023BD4RJHY/F04CB4UC5CK/lambdaandroid-1.0-snapshot-all.jar) to run the LambDroid plugin on Android Studio. 

<img loading="lazy" src={require('../assets/images/lambdroid/lambdroid-settings.webp').default} alt="Image" width="1444" height="703"  className="doc_img img_center"/>

4. Head to the Tools section in the menu bar of Android Studio in the top-left corner, and you will find <b>LambDroid</b> in the dropdown list. Launch the plugin or use the shortcut <b>(ctrl+cmd+b)</b>. 

<img loading="lazy" src={require('../assets/images/lambdroid/lambdroid-tools.webp').default} alt="Image" width="1444" height="703"  className="doc_img img_center"/><br/>
5. Enter your LambdaTest credentials - <b>Username</b> and <b>Access Key</b>. Along with this, specify the <b>APKPath</b> and <b>TestAPKPath</b>.<br/><br/>
6. Click on <b>Execute</b>. Your Android Studio tests will directly reflect on the LambdaTest Grid.<br/>
<img loading="lazy" src={require('../assets/images/lambdroid/lambdroid-application.webp').default} alt="Image" width="1444" height="703"  className="doc_img img_center"/><br/>

Once executed, your tests will reflect on the [LambdaTest dashboard](https://automation.lambdatest.com/).


> **Note:**  If you are interested in learning more about [Espresso testing](https://www.lambdatest.com/support/docs/getting-started-with-espresso-testing/), you can refer to our detailed documentation. 


<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href="https://www.lambdatest.com">
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
        LambdaTest Espresso Plugin
      </span>
    </li>
  </ul>
</nav>