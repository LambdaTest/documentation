---
id: espresso-supported-capabilities
title: Espresso Supported Capabilities
sidebar_label: Supported Capabilities
description: Now you can run your Espresso framework on TestMu AI online grid of 3000+ real desktop browsers and real operating systems with its supported capabilities.
keywords:
  - espresso
  - java
  - testmu ai java
  - framework on testmu ai
  - testng
  - app testing
  - real devices
image: /assets/images/og-images/appium-testing-og-image.jpg
url: https://www.testmu.ai/support/docs/espresso-supported-capabilities
site_name: LambdaTest
slug: espresso-supported-capabilities
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
          "name": "Espresso Supported Capabilities",
          "item": "https://www.lambdatest.com/support/docs/espresso-supported-capabilities/"
        }]
      })
    }}
></script>

This document provide details about the features and capabilities supported for Espresso Framework on LambdaTest.

> The capabilities listed in this document are also supported for [Virtual Devices](/support/docs/app-automation-on-emulators-simulators/)

| Capability Name | Data Type | Description |
|------|-----------|-------------|
| app | String | Enter the app id generated while uploading the app to the platform. Example:`lt://APP123456789123456789` |
| testSuite | String | Enter the test suite id generated while uploading the test suite to the platform. Example: `lt://APP123456789123456789` |
| device | String | Enter the device name and os version in `DeviceName-OSVersion` format. Example: `"device" :  ["Galaxy S20-10","Pixel 3 XL-9"]` |
| video | Boolean | When you pass the `video: true`, it will generate the video for all the tests that are executed. |
| queueTimeout | Integer | Total execution time of the build. Example: `queueTimeout: 300`. Maximum value is `10800`|
| idleTimeout | Integer | Enter the time in seconds for maximum running time of a test in a build. Example: `idleTimeout: 120`|
| deviceLog | Boolean | To generate the device logs, pass the value as `deviceLog: true` |
| network | Boolean | To generate the network logs , pass the value as `network: true` |
| network.har | Boolean | To generate the network logs in .har format, pass the value as `network.har: true` only works with `network:true` |
| build | String | To set the Espresso build name. Example: `build: My Espresso Build`. |
| geoLocation | String | Set the geolocation [country code](/support/docs/appium-ip-geolocation/#supported-ip-geolocations) if you want to enable the same in your test. Example - `geoLocation: FR`|
| gpsLocation | Decimal | The capability should be defined to override the device’s default GPS coordinates and should be provided as a comma-separated string. Example: `"location": {"lat": "-50","long": "150.028333"}`|
| enableBluetooth | Boolean | Used to enable the bluetooth functionality during the session. Example: `enableBluetooth: true`|
| tunnel, tunnelName | Boolean | To activate the tunnel mode, pass the value as `tunnel: true` and provide the name of your tunnel as `tunnelName: NewTunnel` |
| disableAnimation | Boolean | Set this to `true` if you want to disable animations for espresso tests. **Default:** `false` |
| clearPackageData | Boolean | Set this to `true` if you want to clear the app data after each test has completed running. **Default**: `false` |
| singleRunnerInvocation | Boolean | Set this to `true` if you want to execute test cases together with a `single test runner invocation`.This can help significantly speed up the test execution time. By default, each test case is invoked separately. **Default:** `false` |
| testRemarks <br /> <br /> | Boolean | Set to `true` to surface failure remarks at the top of the dashboard when a test fails. Has no effect on passing tests. **Default**: `false`. |
| retries <br /> <br /> | Integer |Defines the number of times a test should automatically retry if it fails. Maximum allowed value: 5.|

:::note
Ensure that the latitude is between -90 and 90, and the longitude is between -180 and 180. Otherwise, an error will occur like "Invalid GPS location: Latitude must be between -90 and +90, Longitude must be between -180 and +180."
:::


<!-- | env | Map | This feature allows users to pass and retrieve environment variables (like STAGE, PROD, or DEV) during automated Android tests. That is, users can dynamically switch configurations between environments without changing the test code, enabling seamless testing across multiple setups. Learn more about [Environment Variables](/support/docs/espresso-env-variables-settings/) | -->
:::caution Important
You can either use **GeoLocation** or **Tunnel** in single execute command. They both are mutually exclusive.
:::
