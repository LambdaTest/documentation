---
id: appium-install-uninstall-lambdatest-hooks
title: Ability to Install and Uninstall Apps in App Automation Scripts
sidebar_label: Install/Uninstall app
description: Now you can install or uninstall applications using hooks in your App Automation scripts that you run on TestMu AI.
keywords:
- appium
- testmu ai hooks
- app automation
- mobile test
- app testing
- real devices
url: https://www.testmuai.com/support/docs/appium-install-uninstall-testmu-hooks/
site_name: LambdaTest
slug: appium-install-uninstall-testmu-hooks/
canonical: https://www.testmuai.com/support/docs/appium-install-uninstall-testmu-hooks/
---
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
          "name": "TestMu AI Hooks for install or uninstall application",
          "item": `${BRAND_URL}/support/docs/appium-install-uninstall-testmu-hooks/`
        }]
      })
    }}
></script>

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RealDeviceTag from '../src/component/realDevice';
import VirtualDeviceTag from '../src/component/virtualDevice';


<RealDeviceTag value="Real Device" /> 
<VirtualDeviceTag value="Virtual Device" />

## Introduction

<BrandName /> now allows you to install and uninstall apps in the middle of your automated tests. This means you don’t need to restart the session every time you want to switch apps, upgrade them, or clean up the device.

## Installing and Uninstalling Apps  
<RealDeviceTag value="Real Device" /> <VirtualDeviceTag value="Virtual Device" />

<BrandName /> enables you to install and uninstall applications during automation test execution by using commands that can be run through WebDriver's script execution functionality.

### Install App

You can install apps uploaded to the <BrandName /> platform directly within your automation scripts using the `lambda-install-app` command followed by the app’s ID. This ID can be either the <BrandName />-generated ID or a custom ID assigned during upload.

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

Testing app upgrades is important because users often update to the latest version instead of reinstalling the app. To ensure existing user data is preserved and the app continues to function properly after an upgrade, you can use the following hooks:

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
# Send the current app in background
driver.background_app(-1)


# Payload required while installing the new upgrade 
data = {
  "appUrl": "lt://APPID",
  "retainData": True
}
driver.execute_script("lambda-install-app", data)

# Note : In case of enterprise app, user have to pass the below payload 
data = {
  "appUrl": "lt://APPID",
  "resignApp": False,
  "retainData": True
}

```
</CodeBlock>
</div>
</TabItem>


</Tabs>


## Validation Errors

You might encounter some errors while using these features. The following are some common validation errors and their meaning:

| Error Message                                  | Meaning                                                        |
| --------------------------------------------------- | -------------------------------------------------------------- |
| `No app_url has been provided for lambda-install-app. Please check and try again.`| The install command is missing the app URL or ID.              |
| `The app provided for lambda-install-app is not accessible. Please check and try again.`| The app ID does not belong to your account or is inaccessible. |
| `Failed to fetch app details.`                      | The app ID is invalid or app is not found.                     |
| `Failed to install the app using lambda-install-app.`  | Installation failed due to compatibility or other issues.      |
| `No app package or app bundle id has been provided for lambda-uninstall-app. Please check and try again.` | The uninstall command is missing the app package or bundle ID. |
| `Failed to uninstall the app using lambda-uninstall-app.`| Uninstallation failed; app may not be installed or wrong ID.|



Multiple errors may occur based on the scenario. Understanding these errors will help you identify and resolve issues more efficiently, ensuring smooth test execution. Once the code snippets are added, the tests can be executed and will appear on the[<BrandName /> App Automation Dashboard](https://appautomation.lambdatest.com/build).


> **Note:** If the user had enabled any of the following capabilities in the previously installed app, they will remain available and functional in the upgraded app as well : `EnableScreenshotUnblock`,`EnableImageInjection`,`EnableVideoInjection`,`Network`,`AppProfiling`,`EnableWebContentsDebugging`,`EnableBiometricInjection`.This ensures that key testing features continue to work seamlessly after the app is updated, without requiring additional configuration.


<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={`${BRAND_URL}/support/docs/`}>
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
