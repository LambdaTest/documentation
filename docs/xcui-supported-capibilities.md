---
id: xcui-supported-capabilities
title: XCUI Supported Capabilities on TestMu AI
sidebar_label: "Supported Capabilities"
description: Now you can run your XCUI framework on TestMu AI online grid of 3000+ real desktop browsers and real operating systems with its supported capabilities.
keywords:
  - espresso
  - java
  - testmu ai java
  - framework on testmu ai
  - testng
  - app testing
  - real devices
url: https://www.testmuai.com/support/docs/xcui-supported-capabilities/
site_name: TestMu AI
slug: xcui-supported-capabilities/
canonical: https://www.testmuai.com/support/docs/xcui-supported-capabilities/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
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
          "name": "XCUI Supported Capabilities on TestMu AI",
          "item": `${BRAND_URL}/support/docs/xcui-supported-capabilities/`
        }]
      })
    }}
></script>
XCUI supported capabilities on TestMu AI let you configure iOS XCUITest automation on real and virtual devices, controlling the app, test suite, device, video, timeouts, device and network logs, build name, geolocation, GPS coordinates, tunnel, Bluetooth, and app re-signing behavior.

**Supported on:** Real &amp; Virtual devices

> These capabilities are also supported for [Virtual Devices](/support/docs/app-automation-on-emulators-simulators/)

| Capability Name | Data Type | Description |
|------|-----------|-------------|
| app Real &amp; Virtual| String | Enter the app id generated while uploading the app to the platform. Example:`lt://APP123456789123456789` |
| testSuite Real &amp; Virtual| String | Enter the test suite id generated while uploading the test suite to the platform. Example: `lt://APP123456789123456789` |
| device Real &amp; Virtual| String | Enter the device name and os version in `DeviceName-OSVersion` format. Example: `"device" :  ["Galaxy S20-10","Pixel 3 XL-9"]` |
| video Real &amp; Virtual| Boolean | When you pass the `video: true`, it will generate the video for all the tests that are executed. |
| queueTimeout Real &amp; Virtual| Integer | Enter the time in seconds after which you want your build to timeout from queue. Example: `queueTimeout: 300` |
| idleTimeout Real &amp; Virtual| Integer | Enter the time in seconds for maximum running time of a test in a build. Example: `idleTimeout: 120`|
| deviceLog Real &amp; Virtual| Boolean | To generate the device logs, pass the value as `deviceLog: true` |
| network Real &amp; Virtual| String | To generate the network logs, pass the value as `network: true`. |
| build Real &amp; Virtual| String | To set the Espresso build name. Example: `build: My Espresso Build`. |
| geoLocation Real| String | Set the geolocation [country code](/support/docs/appium-ip-geolocation/#supported-ip-geolocations) if you want to enable the same in your test. Example: `geoLocation: FR`|
| gpsLocation Real &amp; Virtual| Decimal | The capability should be defined to override the device’s default GPS coordinates and should be provided as a comma-separated string. Example: `"location": {"lat": "-50","long": "150.028333"}`.|
| tunnel, tunnelName Real &amp; Virtual| Boolean | To activate the tunnel mode, pass the value as `tunnel: true` and provide the name of your tunnel as `tunnelName: NewTunnel` |
| enableBluetooth Real| Boolean | Used to enable the bluetooth functionality during the session. Example: `enableBluetooth: true`|
| resignApp <br /> <br />Not supported in **Virtual Devices** | Boolean | Set this to `false` if you want to to prevent the apps from being re-signed. The app should be built for enterprise distribution. |
| testRemarks <br /> <br />  Real| Boolean| Set to `true` to surface failure remarks at the top of the dashboard when a test fails. Has no effect on passing tests. **Default**: `false`. |
| retries <br /> <br />  Real| Integer |Defines the number of times a test should automatically retry if it fails. Maximum allowed value: 5.|
| region Real| String | Set the region for the test execution data center. Supported values: `US`, `EU`, `AP`. **Default:** Nearest data center. Example: `region: EU` |
| uploadMedia Real| String | Upload media files to the device for testing. Provide the media URL generated after [uploading the file](/support/docs/upload-media/). **Default:** `null`. Example: `uploadMedia: lt://MEDIA123456789` |

:::note
Ensure that the latitude is between -90 and 90, and the longitude is between -180 and 180. Otherwise, an error will occur like "Invalid GPS location: Latitude must be between -90 and +90, Longitude must be between -180 and +180."
:::

:::caution Important
You can either use **GeoLocation** or **Tunnel** in single execute command. They both are mutually exclusive.
:::
