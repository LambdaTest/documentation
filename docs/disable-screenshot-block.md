---
id: disable-screenshot-block
title: Disable Screenshot Block for Android
sidebar_label: Disable Screenshot Block
description: Discover how to disable screenshot blocking on LambdaTest Real Device Cloud Platform. Test biometric authentication functionalities without limitations on 10000+ real mobile devices.
keywords:
  - screenshot unblock
  - disable screenshot block
  - app test automation
  - Biometric security
  - lambdatest capture code
  - framework on lambdatest
  - screenshot disable
  - app testing appium
  - app testing
  - real devices
url: https://www.lambdatest.comsupport/docs/disable-screenshot-block/
site_name: LambdaTest
slug: disable-screenshot-block/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RealDeviceTag from '../src/component/realDevice';
import VirtualDeviceTag from '../src/component/virtualDevice';

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
          "name": "Biometric Authentication",
          "item": "https://www.lambdatest.com/support/docs/disable-screenshot-block/"
        }]
      })
    }}
></script>

<RealDeviceTag value="Real Device" /> <VirtualDeviceTag value="Virtual Device" />

## Introduction
---

If your app doesn't allow screenshot to be taken of the app and you want to test your app's performance without any hindrance, you can use this tool. You can test your apps with this tool in our app-live tests and app automation tests.
This document details all you need to know about the tool.

LambdaTest now supports disable screenshot block for Android real devices. This new feature allows you to test your application on our platform without any issue of video coming black in between or screenshots of the app not getting captured(due to app's properties)

:::info
**OS Version:** Android Disable Screenshot Unblock is supported for all os versions.

This feature is in the **beta phase**. To enable it, please reach out to our 24x7 Chat Support by clicking on  <span className="doc\_\_lt" onClick={() => window.openLTChatWidget()}>**24x7 Chat Support**</span> or you could also mail us at [support@lambdatest.com](https://support.lambdatest.com/).

:::

## Disable Screenshot Block in Real Time App Testing

----
For manual testing, **disable screenshot block** toggle will be seen as soon as the user uploads any app.

<img loading="lazy" src={require('../assets/images/disable-screenshot-block/disable-toggle.png').default} alt="Image" width="100" height="100" className="doc_img"/>

:::tip
After uploading your application, please wait for 3-5 minutes(depends of app file size) for the application file patching process to complete.
:::


## Disable Screenshot Block in App Automation

----

For app automation also, **disable screenshot block** is enabled as soon as the user uploads any app.

### Using desired Capabilities 

You can use the appium capability to turn the **Disable Screenshot Block** on in your application. Just add `"enableScreenshotUnblock": true` in the desired capabilities while writing the automation script.

  ```java
    DesiredCapabilities capabilities = new DesiredCapabilities();
    capabilities.setCapability("build","Java TestNG Android");
    capabilities.setCapability("name",platform+" "+device+" "+version);
    capabilities.setCapability("deviceName", device);
    capabilities.setCapability("platformVersion",version);
    capabilities.setCapability("platformName", platform);
    capabilities.setCapability("isRealMobile", true);
    capabilities.setCapability("app", "APP_URL"); //Enter your app (.apk) url
    capabilities.setCapability("deviceOrientation", "PORTRAIT");
    capabilities.setCapability("console", true);
    capabilities.setCapability("network", false);
    capabilities.setCapability("visual", true);
    capabilities.setCapability("devicelog", true);
    capabilities.setCapability("enableScreenshotUnblock",true); // for screenshot unblock
  ```


## Important Notes

**Disable Screenshot Block** will only work for applications that were uploaded after 28th June 2023.

> Got any questions?<br/>
> Please reach out at our <span className="doc\_\_lt" onClick={() => window.openLTChatWidget()}>**24x7 Chat Support**</span> or you could also mail us at [support@lambdatest.com](https://support.lambdatest.com/).

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
      Disable Screenshot Block
      </span>
    </li>
  </ul>
</nav>