---
id: how-to-use-in-session-testing-tools
title: How to use in-session testing tools?
hide_title: true
sidebar_label: Testing Tools
description: With TestMu AI, perform live interactive testing of websites and web applications on real Android and iOS devices to ensure seamless user experience.
keywords:
  - real device app testing
  - real device browser testing
  - mobile app testing
  - app automation
url: https://www.testmu.ai/support/docs/how-to-use-in-session-testing-tools
site_name: LambdaTest
slug: how-to-use-in-session-testing-tools
canonical: https://www.testmu.ai/support/docs/how-to-use-in-session-testing-tools/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "TestMu AI",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "How to use in-session testing tools?",
          "item": `${BRAND_URL}/support/docs/how-to-use-in-session-testing-tools/`
        }]
      })
    }}
></script>

# How to Use In-Session Testing Tools ?
With <BrandName />’s Real Device browser testing, you get access to a plethora of features that helps QA ease their real device browser testing process, without the need of leaving the instance window. From features such as mark as bug and changing IP geolocation, to in-depth Chrome DevTools and Safari Web Inspector, <BrandName />'s Real Device browser testing offers it all.

Let us get an overview of all the features in our real device instance:

## Comprehensive Sidebar

<div className="storylane-iframe">
  <script async src="https://js.storylane.io/js/v2/storylane.js"></script>
  <div className="sl-embed">
    <iframe loading="lazy" className="sl-demo" src="https://app.storylane.io/demo/rodprkjklrvp?embed=inline"  name="sl-embed" allow="fullscreen" allowfullscreen></iframe>
  </div>
</div>

### Home

The **Home** feature on the left-sidebar allows you to go to the home screen of your selected real device instantly. 

### Screenshot

The **Screenshot** feature allows you to take a screenshot in an instant of the current screen of the device that you are currently testing on. You can access the screenshots and even download them in the gallery section. 

### Record Session

The **Record Session** feature allows you to screen record the current test session inside the real device. As you click on the button a timer would start, indicating the recording time. You can click on the stop button to stop the video recording.

Just as your screenshots, you can find your recorded video in the gallery. You can also download the recording by clicking on the download button.

<img loading="lazy" src={require('../assets/images/real-device-browser-testing/record-browser-testing.webp').default} alt="add" width="1346" height="647" className="doc_img"/>

### Mark As Bug

The **Mark as Bug** feature allows you to push your UI related issues/edited screenshot to your integrated workspace instantly. 

<img loading="lazy" src={require('../assets/images/real-device-browser-testing/mark-as-bug-browser-testing.webp').default} alt="add" width="1346" height="647" className="doc_img"/>

### Gallery

All screenshots and video recordings from test sessions are stored in the Gallery. To access, select **Gallery** from the left toolbar and you'll find the saved screenshots and videos.To download the screenshots or videos to your local machine, click on the Download icon.

<img loading="lazy" src={require('../assets/images/real-device-browser-testing/gallery-browser-testing.webp').default} alt="add" width="1346" height="647" className="doc_img"/>

### IP Geolocation

The **IP Geolocation** feature allows you to emulate website and mobile experiences from more than 45 countries using local IP addresses. This enables you to test localized elements like pricing, languages, and product offerings. With IP Geolocation activated, you can verify that your app's traffic is coming from a particular country, facilitating thorough global testing.

<img loading="lazy" src={require('../assets/images/real-device-browser-testing/ip-geolocation-browser-testing.webp').default} alt="add" width="1346" height="647" className="doc_img"/>

Check out our detailed support documentation to know more about the [IP Geolocation](/support/docs/list-of-supported-locales/) feature.

### GPS Location

**GPS Geolocation** testing allows you to simulate specific device locations using exact GPS coordinates to evaluate location-based app scenarios. You can enter your preferred location by entering the name of the location. 

However, if your preferred location is not showing, you can specify the exact location by entering the lattitude and longitude of the location. 

<img loading="lazy" src={require('../assets/images/real-device-browser-testing/gps-location-browser-testing.webp').default} alt="add" width="1346" height="647" className="doc_img"/>


### Network Throttling

With <BrandName />’s **Network Throttling**, you can test mobile applications across a range of network conditions, including offline, as well as specific network profiles like 3G, 3G+, 4G LTE, 4G Advanced and even custom network profile with its extensive real mobile device cloud.

You can simulate these network environments using either pre-defined profiles or by creating custom network profiles to suit your needs.

<img loading="lazy" src={require('../assets/images/real-device-browser-testing/network-throttling-browser-testing.webp').default} alt="add" width="1346" height="647" className="doc_img"/>

Check out our detailed support documentation to know more about the [Network Throttling](/support/docs/app-auto-network-throttling/) feature.


### iOS Settings

With the **iOS settings**, you can enable the Accessibility Testing. It focuses on ensuring that applications and web content are usable by individuals with different abilities. Learn in detailed way about [Accessibility in iOS devices.](/support/docs/accessibility-settings-ios)

<img loading="lazy" src={require('../assets/images/real-device-browser-testing/ios-settings-real-device.png').default} alt="add" width="1346" height="647" className="doc_img"/>

### Device Controls

With the **Device Controls** feature, you can easily manage various settings on your device, such as adjusting the volume and changing its orientation.

Under Device Control, you'll find multiple options to customize your device's settings:

1. **Volume**: Adjust the device's volume to your preferred level.
2. **Rotate**: Change the screen orientation between landscape and portrait modes.
3. **Recent Apps** : Available on `iOS 15` and above, this feature allows you to view recent apps. Note that it is not supported on devices that rely on a physical button for accessing recent apps instead of the swipe-up gesture.
4. **Bluetooth**: Used to enable the bluetooth functionality during the session.


<img loading="lazy" src={require('../assets/images/real-device-browser-testing/rdbrowserdevicecontrol.png').default} alt="add" width="1346" height="647" className="doc_img"/>

### Settings

The **settings** section offer the following features:

- **Idle Timeout:** This feature allows you to set the idle timeout for your test session by selecting from the dropdown menu. The default Idle Timeout is 5 minutes and the maximum limit is 45 minutes. 
- **Time Zone:** With this feature, you can select the time zone of your preference from the dropdown menu. The time zone are set to GMT by default and can be changed as per preference. 
- **Language:** With this feature, you can change the language in your test session for a more localized testing experience. Language locale doc.
- **Projects:** The projects feature allows you to track your existing test session in an existing project. You can create and access your projects under **More Tools**.


<img loading="lazy" src={require('../assets/images/real-device-browser-testing/settings-real-browser-testing.webp').default} alt="add" width="1346" height="647" className="doc_img"/>

### Switch

This feature allows you to **switch** between devices, browser and their OS versions without exiting your current test session.


<img loading="lazy" src={require('../assets/images/real-device-browser-testing/switch-browser-testing.webp').default} alt="add" width="1346" height="647" className="doc_img"/>

### End Session

By clicking on the end session button, you can close your current test session. 

## Comprehensive Top Bar
***

<div className="storylane-iframe">
  <script async src="https://js.storylane.io/js/v2/storylane.js"></script>
  <div className="sl-embed">
    <iframe loading="lazy" className="sl-demo" src="https://app.storylane.io/demo/bhi7qrlpgnwr?embed=inline"  name="sl-embed" allow="fullscreen" allowfullscreen></iframe>
  </div>
</div>

### Zoom In-Out

With the zoom in-out slider, you can zoom in and out in your real device as per your preference.

### Chrome DevTools

<BrandName />’s real device browser testing offers in-built developer tools to help QA debug their websites and web applications. 

<img loading="lazy" src={require('../assets/images/real-device-browser-testing/chrome-devtools-browser-testing.webp').default} alt="add" width="1346" height="647" className="doc_img"/>



### Safari Web Inspector

<BrandName />’s real device browser testing offers in-built **Safari Web Inspector**, an open-source web development tool to simplify optimizing, prototyping, and debugging web applications for iOS and OS X.

<img loading="lazy" src={require('../assets/images/real-device-browser-testing/safari-web-inspector.webp').default} alt="add" width="1346" height="647" className="doc_img"/>




### Test Manager

Unified **Test Manager** simplifies test authoring, management, triggering, and reporting, boosting efficiency throughout all testing phases.

<img loading="lazy" src={require('../assets/images/real-device-browser-testing/test-manager-browser-testing.webp').default} alt="add" width="1346" height="647" className="doc_img"/>



> **Notes:** The max duration for running manual tests on <BrandName /> Real Device Cloud is 2 hours. In order to extend the duration, you can opt for our dedicated real device cloud.




