---
id: xcui-supported-capabilities
title: XCUI Supported Capabilities
sidebar_label: Supported Capabilities
description: Now you can run your XCUI framework on LambdaTest online grid of 3000+ real desktop browsers and real operating systems with its supported capabilities.
keywords:
  - espresso
  - java
  - lambdatest java
  - framework on lambdatest
  - testng
  - app testing
  - real devices
image: /assets/images/og-images/appium-testing-og-image.jpg
url: https://www.lambdatest.com/support/docs/xcui-supported-capabilities/
site_name: LambdaTest
slug: xcui-supported-capabilities/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
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
          "name": "Espresso Supported Capabilities",
          "item": "https://www.lambdatest.com/support/docs/xcui-supported-capabilities/"
        }]
      })
    }}
></script>
<RealDeviceTag value="Real Device" /> <VirtualDeviceTag value="Virtual Device" />
This document provide details about the features and capabilities supported for XCUI Framework on LambdaTest.

> The capabilities listed in this document are also supported for [Virtual Devices](/support/docs/app-automation-on-emulators-simulators/)

| Capability Name | Data Type | Description |
|------|-----------|-------------|
| app <RealDeviceTag value="Real Device" /> <VirtualDeviceTag value="Virtual Device" />| String | Enter the app id generated while uploading the app to the platform. Example:`lt://APP123456789123456789` |
| testSuite <RealDeviceTag value="Real Device" /> <VirtualDeviceTag value="Virtual Device" />| String | Enter the test suite id generated while uploading the test suite to the platform. Example: `lt://APP123456789123456789` |
| device <RealDeviceTag value="Real Device" /> <VirtualDeviceTag value="Virtual Device" />| String | Enter the device name and os version in `DeviceName-OSVersion` format. Example: `"device" :  ["Galaxy S20-10","Pixel 3 XL-9"]` |
| video <RealDeviceTag value="Real Device" /> <VirtualDeviceTag value="Virtual Device" />| Boolean | When you pass the `video: true`, it will generate the video for all the tests that are executed. |
| queueTimeout <RealDeviceTag value="Real Device" /> <VirtualDeviceTag value="Virtual Device" />| Integer | Enter the time in seconds after which you want your build to timeout from queue. Example: `queueTimeout: 300` |
| idleTimeout <RealDeviceTag value="Real Device" /> <VirtualDeviceTag value="Virtual Device" />| Integer | Enter the time in seconds for maximum running time of a test in a build. Example: `idleTimeout: 120`|
| deviceLog <RealDeviceTag value="Real Device" /> <VirtualDeviceTag value="Virtual Device" />| Boolean | To generate the device logs, pass the value as `deviceLog: true` |
| network <RealDeviceTag value="Real Device" /> <VirtualDeviceTag value="Virtual Device" />| String | To generate the network logs, pass the value as `network: true`. |
| build <RealDeviceTag value="Real Device" /> <VirtualDeviceTag value="Virtual Device" />| String | To set the Espresso build name. Example: `build: My Espresso Build`. |
| geoLocation <RealDeviceTag value="Real Device" />| String | Set the geolocation [country code](/support/docs/appium-ip-geolocation/#supported-ip-geolocations) if you want to enable the same in your test. Example: `geoLocation: FR`|
| gpsLocation <RealDeviceTag value="Real Device" /> <VirtualDeviceTag value="Virtual Device" />| Decimal | The capability should be defined to override the device’s default GPS coordinates and should be provided as a comma-separated string. Example: `"location": {"lat": "-50","long": "150.028333"}`.|
| tunnel, tunnelName <RealDeviceTag value="Real Device" /> <VirtualDeviceTag value="Virtual Device" />| Boolean | To activate the tunnel mode, pass the value as `tunnel: true` and provide the name of your tunnel as `tunnelName: NewTunnel` |
| enableBluetooth <RealDeviceTag value="Real Device" />| Boolean | Used to enable the bluetooth functionality during the session. Example: `enableBluetooth: true`|
| resignApp <br /> <br />Not supported in **Virtual Devices** | Boolean | Set this to `false` if you want to to prevent the apps from being re-signed. The app should be built for enterprise distribution. |
| testRemarks <br /> <br />  <RealDeviceTag value="Real Device" />| Boolean| Set to `true` to surface failure remarks at the top of the dashboard when a test fails. Has no effect on passing tests. **Default**: `false`. |
| retries <br /> <br />  <RealDeviceTag value="Real Device" />| Integer |Defines the number of times a test should automatically retry if it fails. Maximum allowed value: 5.|

:::note
Ensure that the latitude is between -90 and 90, and the longitude is between -180 and 180. Otherwise, an error will occur like "Invalid GPS location: Latitude must be between -90 and +90, Longitude must be between -180 and +180."
:::

:::caution Important
You can either use **GeoLocation** or **Tunnel** in single execute command. They both are mutually exclusive.
:::