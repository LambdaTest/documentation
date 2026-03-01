---
id: desired-capabilities-in-appium
title: Desired Capabilities 
sidebar_label: Desired Capabilities
description: This document will teach you how to leverage TestMu AI Capability Generator to easily for declaring desired capabilities in Appium to run your App Automation leveraging Appium Desktop.
keywords:
  - cross browser testing
  - appium capabilities generator
  - appium desired capabilities
  - testmu ai appium grid capabilities
  - testmu ai automation capabilities generator
  - appium capability configuration
  - appium automation testing
  - appium automation grid online
  - configure appium tests with desired capabilities
  - appium webdriver capabilities for running tests on testmu ai

url: https://www.testmuai.com/support/docs/desired-capabilities-in-appium/
site_name: TestMu AI
slug: desired-capabilities-in-appium/
canonical: https://www.testmuai.com/support/docs/desired-capabilities-in-appium/
---

import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import RealDeviceTag from '../src/component/realDevice';
import VirtualDeviceTag from '../src/component/virtualDevice';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


<RealDeviceTag value="Real Device" /> 
<VirtualDeviceTag value="Virtual Device" />

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
          "name": "Desired Capabilities In appium",
          "item": `${BRAND_URL}/support/docs/desired-capabilities-in-appium/`
        }]
      })
    }}
></script>
Desired capabilities in [Appium](https://www.lambdatest.com/appium) are essential for guiding the Appium server to create the correct test automation environment. Represented as a set of key-value pairs within a JSON object, these capabilities allow [QA automation](https://www.lambdatest.com/blog/qa-automation/) engineers to specify the desired mobile platform and configuration for their test sessions. 

By setting these parameters, QAs can ensure that the Appium server accurately targets the intended test environment, facilitating effective and efficient [mobile app testing](https://www.lambdatest.com/mobile-app-testing). 

> **Note:** With <BrandName /> [capabilities generator](https://www.lambdatest.com/capabilities-generator/) run your App Automation leveraging Appium Desktop.

<div class="desired-capabilities-page">

## Mandatory capabilities
| KEY | VALUES | CAPABILITY DESCRIPTION | SUPPORTED ON |
|-----|------- | ---------------------- |--------------|
| user | TYPE: STRING | Your `LT_USERNAME` | <VirtualDeviceTag value="Virtual-Device" />  <RealDeviceTag value="Real-Device" /> |
| accessKey | TYPE: STRING | Your `LT_Access_Key`| <VirtualDeviceTag value="Virtual Device" />  <RealDeviceTag value="Real Device" /> |
| isRealMobile | TYPE: BOOLEAN <br/>DEFAULT: FALSE<br/>`isRealMobile=TRUE` <br/>OR<br/>`isRealMobile=FALSE` | This capability is used to run the test on Real Device  with True value. | <VirtualDeviceTag value="Virtual Device" /> <RealDeviceTag value="Real Device" />  |
| deviceName | TYPE: STRING <br/> `iPhone 13` | Name of the device. | <VirtualDeviceTag value="Virtual Device" /> <RealDeviceTag value="Real Device" /> |
| platformName | TYPE: STRING <br/> `ios` | Name of the OS. |  <VirtualDeviceTag value="Virtual Device" /> <RealDeviceTag value="Real Device" /> |
| platformVersion    | TYPE: STRING <br/> `14` | OS version. | <VirtualDeviceTag value="Virtual Device" /> <RealDeviceTag value="Real Device" />  |

## Debugging Options
| KEY | VALUES | CAPABILITY DESCRIPTION | SUPPORTED ON |
|-----|--------| -----------------------|--------------|
| video | TYPE: BOOLEAN <br/> DEFAULT: TRUE <br/> `video=TRUE` <br/> OR <br/> `video=FALSE` | Video recording of the complete screen. | <VirtualDeviceTag value="Virtual Device" />  <RealDeviceTag value="Real Device" /> |
| devicelog | TYPE: BOOLEAN <br/> DEFAULT: FALSE <br/> `devicelog=TRUE` <br/> OR <br/> `devicelog=FALSE` | Enable Device logs. | <VirtualDeviceTag value="Virtual Device" />  <RealDeviceTag value="Real Device" /> |
| network | TYPE: BOOLEAN <br/> DEFAULT: FALSE <br/> `network=TRUE` <br/> OR <br/> `network=FALSE` | Enable Network logs. | <VirtualDeviceTag value="Virtual Device" />  <RealDeviceTag value="Real Device" /> |
| console | TYPE: Boolean<br/> DEFAULT: FALSE <br/>`console: true` | Used to fetch the console logs.| <VirtualDeviceTag value="Virtual Device" />  <RealDeviceTag value="Real Device" /> |

## Test configuration
| KEY | VALUES | CAPABILITY DESCRIPTION | SUPPORTED ON |
|-----|--------| -----------------------|--------------|
| build | TYPE: STRING <br/> DEFAULT: Untitled <br/> `build=iOS Small Run` | You can group your tests like a job containing multiple tests. | <VirtualDeviceTag value="Virtual Device" />  <RealDeviceTag value="Real Device" /> |
| name | TYPE: STRING <br/> DEFAULT: TestID of the Test. In case the Name is not passed. <br/> `name=iphone 6 Small Run` | Name of your test. | <VirtualDeviceTag value="Virtual Device" />  <RealDeviceTag value="Real Device" /> |
| project | Will remain blank in case 'project' is not passed in capability. <br/> `project=Small Run` | You can group your builds like a project containing multiple jobs. | <VirtualDeviceTag value="Virtual Device" />  <RealDeviceTag value="Real Device" /> |
| queueTimeout | TYPE: Integer <br/> DEFAULT: 600 <br/> `queueTimeout=300` | This capability can be used to modify the Queue timeout value within a range. queueTimeout Range : 300-900. | <VirtualDeviceTag value="Virtual Device" />  <RealDeviceTag value="Real Device" /> |
| idleTimeout | TYPE: Integer <br/> DEFAULT: 120 <br/> `idleTimeout=120` | This capability can be used to modify the timeout value. | <VirtualDeviceTag value="Virtual Device" />  <RealDeviceTag value="Real Device" /> |
| deviceOrientation | TYPE: STRING <br/> DEFAULT: PORTRAIT <br/> `deviceOrientation=portrait` <br/> OR <br/> `deviceOrientation=landscape` | Change the screen orientation of the device. | <VirtualDeviceTag value="Virtual Device" />  <RealDeviceTag value="Real Device" /> |
| orientation | TYPE: STRING <br/> `orientation=auto` | This capability allows the app or browser to automatically adjust its display based on the physical orientation of the device. | <VirtualDeviceTag value="Virtual Device" />  <RealDeviceTag value="Real Device" /> |
| newCommandTimeout | TYPE: STRING <br/> DEFAULT: 60 <br/> `newCommandTimeout=60` | How long (in seconds) Appium will wait for a new command from the client before assuming the client quit and ending the session. | <VirtualDeviceTag value="Virtual Device" />  <RealDeviceTag value="Real Device" /> |
| automationName | TYPE: STRING <br/> DEFAULT (Android): UiAutomator2 <br/> DEFAULT (iOS): XCUITest <br/> `automationName = UiAutomator2` | Choose which automation engine you'd like to use. <br/> Android - `UiAutomator2`, `Flutter`. <br/> iOS - `XCUITest`, `Flutter`. | <VirtualDeviceTag value="Virtual Device" />  <RealDeviceTag value="Real Device" /> |
| eventTimings | TYPE: BOOLEAN <br/> DEFAULT: FALSE <br/> `true` | Enable or disable the reporting of the timings for various Appium-internal events (e.g., the start and end of each command, etc.). To enable, use true. The timings are then reported as events property on response to querying the current session. See the event timing docs for the the structure of this response. | <VirtualDeviceTag value="Virtual Device" />  <RealDeviceTag value="Real Device" /> |
| otherApps | TYPE: ARRAY OF STRINGS <br/> DEFAULT: [ ] or Empty Array <br/> `"otherApps":` <br/> `["lt://APP1002211081648217405891389",` <br/> `"lt://APP1002211081648217429465823"]` | Accepts a list of App URLs returned after uploading an app on the <BrandName /> servers. <br/> Conditions to be satisfied:<br/>1. App should also be passed if "otherApps" is passed.<br/> 2. Length of app URL <br/>array &le; 3.<br/>3. At max 3 other apps can be installed.<br/>4. App should not be present inside 'otherApp' array.<br/>5. No duplicates in ‘otherApp’ array. | <VirtualDeviceTag value="Virtual Device" />  <RealDeviceTag value="Real Device" /> |
| globalHttpProxy | TYPE: BOOLEAN <br/> DEFAULT: FALSE <br/>  globalHttpProxy = true | This is only for Android specific applications and devices. <br/> If the customer’s app requires Proxy to enable Data Transfer that is not possible otherwise, they can reach out to the CS & LT will enable it for them from BE.This is not available for customers directly unless set from BE by LT. | <RealDeviceTag value="Real Device" /> |
| region | TYPE: STRING <br/> DEFAULT: Location of the nearest data center <br/> `region = US` | 1. By default, it picks the location of the nearest data center.<br/>2.  If you would like to change the region of the Data Center manually, you can pass this capability.<br/> 3. Currently, only three regions are supported: Europe - "EU", USA - "US" and Asia-Pacific - "AP" | <VirtualDeviceTag value="Virtual Device" />  <RealDeviceTag value="Real Device" /> |
| waitForIdleTimeout | TYPE: BOOLEAN <br/> `waitForIdleTimeout = 0` | 1. Sets the timeout for waiting for the user interface to go into an idle state before starting a UI Automator action.<br/>2.  It changes the timeout of the configuration in UIAutomator and could help to make interaction speed faster.| <VirtualDeviceTag value="Virtual Device" />  <RealDeviceTag value="Real Device" /> |
| privateCloud | TYPE: BOOLEAN <br/> DEFAULT: FALSE <br/>`privateCloud: True`| If your organization has opted for Private Cloud, then using this flag will fetch the devices from your Private Cloud. <br/> If your organization has not opted for Private Cloud, your test can fail if this capability is passed.| <VirtualDeviceTag value="Virtual Device" />  <RealDeviceTag value="Real Device" /> |
| w3c | TYPE: Boolean<br/> DEFAULT: FALSE <br/>`w3c: true` | Appium will use the W3C webdriver protocol when it's set to true.| <VirtualDeviceTag value="Virtual Device" />  <RealDeviceTag value="Real Device" /> |
| autoLaunch | TYPE: Boolean<br/> DEFAULT: TRUE <br/>`autoLaunch: false`| If the user doesn't pass this, the app will start on boot. Else, it will not open on boot.| <VirtualDeviceTag value="Virtual Device" />  <RealDeviceTag value="Real Device" /> |

### Android
| KEY | VALUES | CAPABILITY DESCRIPTION | SUPPORTED ON |
|-----|--------| -----------------------|--------------|
| playStoreLogin | TYPE: STRINGS OF HASHMAP <br/> DEFAULT: FALSE <br/>`"playStoreLogin":`<br/>`{"email":user@gmail.com","password":"ejndfdfs"}` | The capability is used to login to Play Store on Android devices. <br/> Conditions to be specified: <br/>1. The account should not be using any kind 2 factor authentication, otherwise the test can fail. <br/> 2. The account should not require you to login using a trusted device using popup or OTP. <br/> 3. Since we clean the Device after each session, please make sure you are logging into the account during each session.|  <RealDeviceTag value="Real Device" /> |
| appActivity   | TYPE: String <br/>`com.lambdatest.proverbial/.home`| Launch the activity directly on the device using the App Activity. **Only for Android**.| <VirtualDeviceTag value="Virtual Device" />  <RealDeviceTag value="Real Device" /> |
| appPackage   | TYPE: String <br/>`com.lambdatest.proverbial`| Launch the app directly on the device using the App Package. **Only for Android**.| <VirtualDeviceTag value="Virtual Device" />  <RealDeviceTag value="Real Device" /> |

### iOS
| KEY | VALUES | CAPABILITY DESCRIPTION | SUPPORTED ON |
|-----|--------| -----------------------|--------------|
| resignApp | TYPE: BOOLEAN <br/> DEFAULT: True <br/> `resignApp = true` | 1. By default, if this capability is not passed, your app will be re-signed.<br/> 2. You can pass "false" as a capability to prevent your apps from being re-signed.<br/> 3. This is only for iOS-specific applications and devices |  <RealDeviceTag value="Real Device" /> |
| bundleId | TYPE: String <br/>`com.whatsapp`| Launch the app directly on the device using the Bundle ID. **Only for iOS**.| <VirtualDeviceTag value="Virtual Device" />  <RealDeviceTag value="Real Device" /> |
| autoDismissAlerts | TYPE: BOOLEAN <br/> DEFAULT: False <br/> `autoDismissAlerts=TRUE` <br/> OR <br/> `autoDismissAlerts=FALSE` | Appium capability to Dismiss alerts/popups on iOS Devices. | <VirtualDeviceTag value="Virtual Device" />  <RealDeviceTag value="Real Device" /> |
| autoAcceptAlerts | TYPE: BOOLEAN <br/> DEFAULT: True <br/> `autoAcceptAlerts=TRUE` <br/> OR <br/> `autoAcceptAlerts=FALSE` | Appium capability to Accept alerts/popups on iOS Devices. | <VirtualDeviceTag value="Virtual Device" />  <RealDeviceTag value="Real Device" /> |
| noReset | TYPE: BOOLEAN <br/> DEFAULT: False <br/>`true` | Don't reset app state before this session. See [here](https://appium.readthedocs.io/en/stable/en/writing-running-appium/other/reset-strategies/) for more details.                                                                                                                               | <VirtualDeviceTag value="Virtual Device" />  <RealDeviceTag value="Real Device" /> |
## Real User conditions
| KEY | VALUES | CAPABILITY DESCRIPTION | SUPPORTED ON |
|-----|--------| -----------------------|--------------|
| language | TYPE: STRING <br/> `fr` | Language to set for iOS (XCUITest driver only) and Android. | <VirtualDeviceTag value="Virtual Device" />  <RealDeviceTag value="Real Device" /> |
| locale | TYPE: STRING <br/> `fr_CA, CA` | Locale to set for iOS (XCUITest driver only) and Android. fr_CA format (language code and country name abbreviationfor iOS). CA format (country name abbreviation) for Android.<br/> For more info, [click here.](/support/docs/list-of-supported-locales/) | <VirtualDeviceTag value="Virtual Device" />  <RealDeviceTag value="Real Device" /> |
| disableAnimation | TYPE: BOOLEAN <br/> DEFAULT: False <br/>`disableAnimation = true` | Disable all kinds of animations on the complete device [including all applications] that is running the test.| <VirtualDeviceTag value="Virtual Device" />  <RealDeviceTag value="Real Device" /> |
| lambdaMaskCommands | TYPE: Array of Strings <br/> DEFAULT: Empty Array <br/>`["setValues", "setCookies", "getCookies"]` | Used to make sure that the values aren't shown on the device. The text could be a Password.| <VirtualDeviceTag value="Virtual Device" />  <RealDeviceTag value="Real Device" /> |
| timezone | TYPE: String <br/>`timezone=UTC+13:00`<br/>`timezone=UTC-0400` | Used to set the timezone on the device using the UTC Time. <br/>If this capability is not passed, the device will auto update the timezone based on the physical location of the device.| <VirtualDeviceTag value="Virtual Device" />  <RealDeviceTag value="Real Device" /> |
| geoLocation | TYPE: String <br/>`geoLocation=US`<br/>`geoLocation=FR` | Used to change the geolocation of the device to the location provided. <br/> If this capability is not passed, the device will auto update the Geo Location based on the physical location of the device.| <VirtualDeviceTag value="Virtual Device" />  <RealDeviceTag value="Real Device" /> |
| enableImageInjection | TYPE: Boolean<br/> DEFAULT: false <br/>`enableImageInjection: true` | Used to enable the Image Injection for the app. <br/>Must send "media" capability along with this capability.| <VirtualDeviceTag value="Virtual Device" />  <RealDeviceTag value="Real Device" /> |
| media | TYPE: STRING <br/>`media: Path to the image`|Used to provide the media to upload the file to the app for Image Injection. If this capability is not passed, then the no media will be sent to the device. <br/>Must send "enableImageInjection" capability along with this capability.|  <RealDeviceTag value="Real Device" /> |
| enableBluetooth | TYPE: Boolean<br/> DEFAULT: false <br/>`enableBluetooth: true` | Used to enable the bluetooth functionality during the session.|  <RealDeviceTag value="Real Device" /> |
| location | TYPE: HashMap <br/> <br/> Python example: <br/> `location: {"lat": "28.6235192", "long": "77.3662948"}` <br/> <br/> For examples in other languages, please head over to [Capability Generator](https://www.lambdatest.com/capabilities-generator/)  | Used to change the GPS Geolocation of the device to the location provided. <br/> If this capability is not passed, the device will auto update the Geo Location based on the physical location of the device. <br/> It needs to be passed in a HashMap structure with `lat` & `long` being passed separately. | <VirtualDeviceTag value="Virtual Device" />  <RealDeviceTag value="Real Device" /> |


## Device configuration
| KEY | VALUES | CAPABILITY DESCRIPTION | SUPPORTED ON |
|-----|--------| -----------------------|--------------|
| autoGrantPermissions | TYPE: BOOLEAN <br/> `autoGrantPermissions=TRUE` <br/> OR <br/> `autoGrantPermissions=FALSE` | Have Appium automatically determine which permissions your app requires and grant them to the app on install. Defaults to false. If noReset is true, this capability doesn't work. | <VirtualDeviceTag value="Virtual Device" />  <RealDeviceTag value="Real Device" /> |
| proxyUrl  | TYPE: STRING <br/>`proxyUrl: 192.168.1.1:8080`| Used to change the Proxy Address of the device. Data will pass through the specified proxy address. <br/>If this capability is not passed, then there'll be no proxy being added to the device.| <VirtualDeviceTag value="Virtual Device" />  <RealDeviceTag value="Real Device" /> |

## Network configuration
| KEY | VALUES | CAPABILITY DESCRIPTION | SUPPORTED ON |
|-----|--------| -----------------------|--------------|
| tunnel | TYPE: BOOLEAN <br/> `tunnel=TRUE` <br/> OR <br/> `tunnel=FALSE` | To test local applications with <BrandName />.| <VirtualDeviceTag value="Virtual Device" />  <RealDeviceTag value="Real Device" /> |
| tunnelName | TYPE: STRING <br/> `tunnelName=RabbitHole` | Name of the tunnel. | <VirtualDeviceTag value="Virtual Device" />  <RealDeviceTag value="Real Device" /> |
| dedicatedProxy | TYPE: BOOLEAN <br/> `dedicatedProxy=TRUE` <br/> OR <br/> `dedicatedProxy=FALSE` | Dedicated Proxy. | <VirtualDeviceTag value="Virtual Device" />  <RealDeviceTag value="Real Device" /> |
| blockDomains | TYPE: Array of Strings <br/> `"blockDomains": ["www.facebook.com", "www.amazon.com"]  ` | It is used to block the mentioned domains on the device.|  <RealDeviceTag value="Real Device" /> |

</div>

> Got any questions?<br/>
> Please reach out at our <span className="doc\_\_lt" onClick={() => window.openLTChatWidget()}>**24x7 Chat Support**</span> or you could also mail us at [support@testmuai.com](https://support.lambdatest.com/).


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
       Desired Capabilities In Appium
      </span>
    </li>
  </ul>
</nav>
