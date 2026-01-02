---
id: test-runs-configurations
title: 'Configurations in KaneAI & Test Manager'
hide_title: false
sidebar_label: Configurations
description: Learn how to levearge configurations to execute your tests in multiple environments.
keywords:
  - testmu ai automation
  - kaneai
  - test manager
  - configurations
url: https://www.testmu.ai/support/docs/test-runs-configurations
site_name: LambdaTest
slug: test-runs-configurations
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
          "name": "Configurations in KaneAI & Test Manager",
          "item": `${BRAND_URL}/support/docs/test-runs-configurations`
        }]
      })
    }}
></script>
# Configurations in KaneAI & Test Manager
This document explains how application and environment configurations behave across **Test Manager (TM)** and **KaneAI** for **Desktop**, **Real Device** and **Virtual Device** within test runs.

## Creation of Configuration
A new configuration can be created during creation or edit of a test run. While creating a configuration, users can choose either Desktop, Virtual Device or Real device. 

:::info
Virtual device option will only be available for non-KaneAI generated test runs.
:::

### Desktop Configuration

#### How to create a new configuration?
Within a test run, while adding configuration to a test instance, you can choose to create a new configuration. By default, a desktop configuration is selected. You can then add the `Configuration Name` and the `Configuration Details`. You need to add the following fields:
- Operating System
- OS Version
- Browser
- Browser Version
- Resolution

<img loading="lazy" src={require('../assets/images/kane-ai/app-test/DesktopConfig.png').default} alt="kaneai-desktop-config" className="doc_img"/>

---

### Real Device Configuration

Real device configuration supports two options for `native app` and `mobile browser` configurations. The option for `native app` is supported for only KaneAI test runs, while `mobile browser` is supported for both KaneAI and non-KaneAI test runs.

#### Native Application

##### How to select?
Within a test run, while adding configuration to a test instance, you can choose to create a new configuration and select the `Real Device` section from the top navigation. You can then add the `Configuration Name` and the `Configuration Details`. You need to add the following fields:
- Device Type
- Operating System
- Manufacturer
- Device
- OS Version
- App

<img loading="lazy" src={require('../assets/images/kane-ai/app-test/RealDeviceConfig.png').default} alt="kaneai-real-device-config" className="doc_img"/>

:::info
The following options are only available for only KaneAI generated test runs
:::

###### Device Type: Private Cloud vs Public Cloud
Available for organisations with a private cloud real device plan with <BrandName />. The option allows for users to choose from set of public pool of devices vs private pool dedicated specifically for that organisation.

##### Multi‑select for KaneAI configurations
* KaneAI allows multi‑select for Manufacturer, Device, and OS Version to allow for larger set of device pool for any configuration. Using multiple devices ensures that you always are able to proceed with executions on HyperExecute.

##### Application

* **Auto Update** – If you have new builds for application being uploaded quite frequently, ensure to check the `Update automatically when a new version is uploaded` option while selecting application in the configuration. This ensures that based on `appPackage` or `bundleId`, we automatically update your configuration with the latest build.

<img loading="lazy" src={require('../assets/images/kane-ai/app-test/UpdateApp.png').default} alt="kaneai-update-app-config" className="doc_img"/>

* **Custom ID** – In case you are using [API](/support/docs/application-setup-via-api/#upload-your-application) to upload your application and using the custom_id parameter, you can choose to add a custom ID while creating a configuration, so  that the application gets updated automatically each time you upload a new app with the same custom_id.

<img loading="lazy" src={require('../assets/images/kane-ai/app-test/CustomID.png').default} alt="kaneai-custom-id-app" className="doc_img"/>

* **Private Device Type** - When private device type is chosen, you will get an option to `Select Pre‑Installed App in Session`; choosing it maps the app capability to `Stock` allowing you to proceed with creating a configuration without explicitly defining an application. This option should be used only when your test case has first step as "Open xyz application" where xyz is the application pre-installed in the device.

<img loading="lazy" src={require('../assets/images/kane-ai/app-test/PreinstalledApp.png').default} alt="kaneai-preinstalled-app" className="doc_img"/>

#### Browser

:::info
Available for only non-KaneAI generated test runs
:::

##### How to select?
Within a non-KaneAI generated test run, while adding configuration to a test instance, you can choose to create a new configuration and select the `Real Device` section from the top navigation. The choose the `Web Browser` option. You can then add the `Configuration Name` and the `Configuration Details`. You need to add the following fields:
- Operating System
- Browser
- Manufacturer
- Device
- OS Version

<img loading="lazy" src={require('../assets/images/kane-ai/app-test/RDWebBrowser.png').default} alt="kaneai-rd-web-config" className="doc_img"/>

---

### Virtual Device Configuration
:::info
Available for only non-KaneAI generated test runs
:::

#### Native Application
Within a non-KaneAI generated test run, while adding configuration to a test instance, you can choose to create a new configuration and select the `Virtual Device` section from the top navigation. The choose the `Mobile App` option. You can then add the `Configuration Name` and the `Configuration Details`. You need to add the following fields:
- Operating System
- Manufacturer
- Device
- OS Version
- App

<img loading="lazy" src={require('../assets/images/kane-ai/app-test/VirtualWeb.png').default} alt="kaneai-virtual-web-config" className="doc_img"/>


#### Browser

##### How to select?
Within a non-KaneAI generated test run, while adding configuration to a test instance, you can choose to create a new configuration and select the `Virtual Device` section from the top navigation. The choose the `Web Browser` option. You can then add the `Configuration Name` and the `Configuration Details`. You need to add the following fields:
- Operating System
- Browser
- Manufacturer
- Device
- OS Version
- URL (Optional)

<img loading="lazy" src={require('../assets/images/kane-ai/app-test/VirtualApp.png').default} alt="kaneai-virtual-app-config" className="doc_img"/>

---

## Addition of Configuration in Test Runs

### Using the UI
1. Open the **Add Configuration** dialog in a test run
2. You can add configurations in two ways:
   - Create a new configuration
   - Select from existing configurations

### Filtering and Selection Options
* Use the filter chips to narrow down configurations by:
  - Operating System
  - Device Type
  - Browser
* Use the search bar to find specific configurations
* Use the **Select All** toggle to:
  - Select all configurations matching current filters
  - Mass assign configurations to test instances

---

## Best Practices
1. Use descriptive configuration names for easy identification
2. Leverage filters to quickly find relevant configurations
3. Use the **Select All** feature when you need to apply the same configuration to multiple test instances
