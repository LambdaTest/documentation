---
id: appium-install-uninstall-lambdatest-hooks
title: Ability to Install and Uninstall Apps in App Automation Scripts
sidebar_label: Install/Uninstall app
description: Now you can install or uninstall applications using hooks in your App Automation scripts that you run on LambdaTest.
keywords:
- appium
- lambdatest hooks
- app automation
- mobile test
- app testing
- real devices
url: https://www.lambdatest.com/support/docs/appium-install-uninstall-lambdatest-hooks/
site_name: LambdaTest
slug: appium-install-uninstall-lambdatest-hooks/
---

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
          "name": "LambdaTest Hooks for install or uninstall application",
          "item": "https://www.lambdatest.com/support/docs/appium-install-uninstall-lambdatest-hooks/"
        }]
      })
    }}
></script>

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introduction

LambdaTest has introduced features that allow users to install and uninstall specified applications within app automation scripts. This document outlines the usage and provides examples of these features.

## Installing and Uninstalling Apps

LambdaTest supports commands that allow you to install or uninstall apps during the execution of an automation test. These commands can be executed using the script execution functionality of the WebDriver.

### Install App

You can install apps that have been uploaded to the LambdaTest platform within your automation scripts. To install an app, use the command `lambda-install-app` followed by the app's ID. The ID can either be the LambdaTest-generated app ID or a custom ID provided while uploading the app.

**Python example:**
```python
driver.execute_script("lambda-install-app=myApp")
driver.execute_script("lambda-install-app=lt://APP100000000123456789123456789")
```

### Uninstall App

You can uninstall apps during the execution of an automation test using the command `lambda-uninstall-app` followed by the app's package name (for Android apps) or bundle ID (for iOS apps).

**Python example:**
```python
driver.execute_script("lambda-uninstall-app=com.myApp.beta")
driver.execute_script("lambda-uninstall-app=com.apple.myApp")
```
### Test App Upgrades with Hooks

Testing app upgrades is vital because new app versions are frequently delivered to users. Users upgrade to the latest app version rather than performing a fresh installation. During these upgrades, existing user data may need to be migrated to ensure the app functions correctly.You can use the below hooks for the same : 

**Python example:**

<Tabs className="docs__val">
<TabItem value="macos-file" label="Android" default>

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">

```python
# Payload required to retain app data while uninstalling it
data = {
  "appPackage": "sampleapp.android.app",
  "retainData": True
}

driver.execute_script("lambda-uninstall-app", data)

# Payload required to reuse data of the old app while installing the new one
data = {
  "appUrl": "lt://APPID",
  "retainData": True
}
driver.execute_script("lambda-install-app", data)
```
</CodeBlock>
</div>

</TabItem>

<TabItem value="windows-file" label="iOS" default>
<div className="lambdatest__codeblock">
<CodeBlock className="language-powershell">

```python
# Payload required while uninstalling app
data = {
  "appPackage": "sampleapp.ios.app",
}

driver.execute_script("lambda-uninstall-app", data)

# Payload required while installing the new upgrade 
data = {
  "appUrl": "lt://APPID",
}
driver.execute_script("lambda-install-app", data)

# Note : In case of enterprise app, user have to pass the below payload 
data = {
  "appUrl": "lt://APPID",
  "resignApp": False
}
```
</CodeBlock>
</div>
</TabItem>


</Tabs>




## Validation Errors

You might encounter some errors while using these features. The following are some common validation errors and their meaning:

- **App URL is empty while using the install app command:**

  `No app_url has been provided for lambda-install-app. Please check and try again.`

- **App URL does not belong to the user while using the install app command:**

  `The app provided for lambda-install-app is not accessible. Please check and try again.`

- **App details are not found while using the install app command:**

  `Failed to fetch app details.`

- **App installation fails:**

  `Failed to install the app using lambda-install-app.`

- **App package is empty while using the uninstall app command:**

  `No app package or app bundle id has been provided for lambda-uninstall-app. Please check and try again.`

- **App package uninstallation fails:**

  `Failed to uninstall the app using lambda-uninstall-app.`

Multiple options can be selected. By understanding these errors, you can debug issues faster and ensure smooth execution of your tests. Once you have added the code snippet, the tests can be executed and will be visible on the [LambdaTest App Automation Dashboard](https://appautomation.lambdatest.com/build).

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
      Install or Uninstall App
      </span>
    </li>
  </ul>
</nav>
