---
id: how-to-use-testing-tools-in-session
title: How to use testing tools in-session?
hide_title: true
sidebar_label: Testing Tools
description: Mobile app testing is the process of testing a mobile application to ensure that their functionality and usability is not compromised when installed across multiple Android and iOS devices. With TestMu AI, you can test mobile applications manually to ensure they perform seamlessly across all Android and iOS real devices.
keywords:
  - real device app testing
  - real device browser testing
  - mobile app testing
  - app automation
url: https://www.testmu.ai/support/docs/how-to-use-testing-tools-in-session/
site_name: LambdaTest
slug: how-to-use-testing-tools-in-session
canonical: https://www.testmu.ai/support/docs/how-to-use-testing-tools-in-session/
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
          "name": "How to use testing tools in-session?",
          "item": `${BRAND_URL}/support/docs/how-to-use-testing-tools-in-session/`
        }]
      })
    }}
></script>

# How to Use Testing Tools In-Session?

***

With <BrandName /> Real Device App Testing, you get access to a plethora of features that helps QA ease their app testing process, without the need of leaving the instance window. From mark as bug and changing IP geolocation, to in-depth device logs and network logs, <BrandName />'s real device app testing offers it all. 

Let us get an overview of all the features in our real device instance:

## Comprehensive Sidebar
***

<div className="storylane-iframe">
  <script async src="https://js.storylane.io/js/v2/storylane.js"></script>
  <div className="sl-embed">
    <iframe loading="lazy" className="sl-demo" src="https://app.storylane.io/demo/n5wnsyhh220a?embed=inline" name="sl-embed" allow="fullscreen" allowfullscreen></iframe>
  </div>
</div>

### Home

The **Home** feature on the left-sidebar allows you to go to the home screen of your selected real device instantly. 

### App Controls

The **App Control** feature offers you the ability to perform actions with your installed application within your current test session. This feature offers a dropdown with options such as:

- **Install New App:** By selecting this option you can quickly install multiple applications in your already running test session, without having to quit and start a new session. Without any installation limit. 
- **Kill App:** By selecting this option, you can easily kill all your installed applications. 
- **Uninstall App:** By selecting this option, you can easily uninstall all the installed applications. 

<img loading="lazy" src={require('../assets/images/real-device-app-testing/app-controls.webp').default} alt="add" width="1346" height="647" className="doc_img"/>

### Screenshot

The **Screenshot** feature allows you to take a screenshot of the current screen of the device that you are currently testing on. You can access the screenshots and even download them in the gallery section. 

### Record Session

The **Record Session** feature allows you to screen record the current test session inside the real device. As you click on the button a timer would start running to indicate the recording time. You can click on the stop button to stop the video recording.

Just as your screenshots, you can find your recorded video in the gallery. You can also download the recording by clicking on the download button.

<img loading="lazy" src={require('../assets/images/real-device-app-testing/record-session.webp').default} alt="add" width="1346" height="647" className="doc_img"/>

### Mark As Bug

The **Mark as Bug** feature allows you to push your UI related issues/edited screenshot to your integrated workspace instantly. 

<img loading="lazy" src={require('../assets/images/real-device-app-testing/mark-as-bug-app-testing.webp').default} alt="add" width="1346" height="647" className="doc_img"/>


### Gallery

All screenshots and video recordings from test sessions are stored in the Gallery. To access, select **Gallery** from the left toolbar and you'll find the saved screenshots and videos.To download the screenshots or videos to your local machine, click on the Download icon.

<img loading="lazy" src={require('../assets/images/real-device-app-testing/real-device-gallery.webp').default} alt="add" width="1346" height="647" className="doc_img"/>

### IP Geolocation

The **IP Geolocation** feature allows you to emulate website and mobile experiences from more than 45 countries using local IP addresses. This enables you to test localized elements like pricing, languages, and product offerings. With IP Geolocation activated, you can verify that your app's traffic is coming from a particular country, facilitating thorough global testing.

<img loading="lazy" src={require('../assets/images/real-device-app-testing/ip-geolocation.webp').default} alt="add" width="1346" height="647" className="doc_img"/>

Check out our detailed support documentation to know more about the [IP Geolocation](/support/docs/list-of-supported-locales/) feature.

### GPS Location

**GPS Geolocation** testing allows you to simulate specific device locations using exact GPS coordinates to evaluate location-based app scenarios. You can enter your preferred location by entering the name of the location. 

However, if your preferred location is not showing, you can specify the exact location by entering the lattitude and longitude of the location. 

<img loading="lazy" src={require('../assets/images/real-device-app-testing/gps-location.webp').default} alt="add" width="1346" height="647" className="doc_img"/>


### Network Throttling

With <BrandName />’s **Network Throttling**, you can test mobile applications across a range of network conditions, including offline, as well as specific network profiles like 3G, 3G+, 4G LTE, 4G Advanced and even custom network profile with its extensive real mobile device cloud.

You can simulate these network environments using either pre-defined profiles or by creating custom network profiles to suit your needs.

<img loading="lazy" src={require('../assets/images/real-device-app-testing/network-throttling-real-device.webp').default} alt="add" width="1346" height="647" className="doc_img"/>

Check out our detailed support documentation to know more about the [Network Throttling](/support/docs/app-auto-network-throttling/) feature.


### Files Upload

Real device app testing on <BrandName /> comes with preloaded media files on remote devices for testing scenarios that need file access. Additionally, you have the option to upload your own media or non-media files to cover your testing scenarios. You can upload files with formats: JPEG, PNG, MP4, 3GP, PDF, CSV, DOC and other major formats.

<img loading="lazy" src={require('../assets/images/real-device-app-testing/upload-files-real-device.webp').default} alt="add" width="1346" height="647" className="doc_img"/>

Check out our detailed support documentation to know more about the [Files Upload](/support/docs/upload-media/) feature.

### iOS Settings

With the **iOS settings**, you can access the crash logs as well as the app settings. For crash logs, If the app crashes at any point, the crash log gets downloaded automatically. Application settings allows you to access the default application settings in your iOS devices. 

<img loading="lazy" src={require('../assets/images/real-device-app-testing/ios-settings-real-device.png').default} alt="add" width="1346" height="647" className="doc_img"/>

- **Crash Logs :** You can download your crashed logs of the application.
- **App Settings :** This will open the settings of the application in your mobile device.
- **Accessibility :** Accessibility testing on iOS devices focuses on ensuring that applications and web content are usable by individuals with different abilities. Learn in detailed way about [Accessibility in iOS devices.](/support/docs/accessibility-settings-ios)

- **Select Date and Time :** Opens a modal where you can:
  - Toggle **Set Automatically** to sync with network time.
  - Manually select a **Date** (up to 7 days ahead).
  - Enter a **Time** in **HH:MM:SS** format.
  - Choose between **12-hour** or **24-hour** time formats.
  - Once configured, click **Update**  to apply the changes to the device.

### Device Controls

With the **Device Controls** feature, you can easily manage various settings on your device, such as adjusting the volume and changing its orientation.

Under Device Control, you'll find multiple options to customize your device's settings:

1. **Volume**: Adjust the device's volume to your preferred level.
2. **Rotate**: Change the screen orientation between landscape and portrait modes.
3. **Recent Apps** : Available on `iOS 15` and above, this feature allows you to view recent apps. Note that it is not supported on devices that rely on a physical button for accessing recent apps instead of the swipe-up gesture.
4. **Bluetooth**: Used to enable the bluetooth functionality during the session.


<img loading="lazy" src={require('../assets/images/real-device-app-testing/devicecontrolplusbluetooth.png').default} alt="add" width="1346" height="647" className="doc_img"/>

### Settings

The settings section offer the following features:

- **Idle Timeout:** This feature allows you to set the idle timeout for your test session by selecting from the dropdown menu. The default Idle Timeout is 5 minutes and the maximum limit is 45 minutes. 
- **Time Zone:** With this feature, you can select the time zone of your preference from the dropdown menu. The time zone are set to GMT by default and can be changed as per preference. 
- **Language:** With this feature, you can change the language in your test session for a more localized testing experience. Language locale doc.
- **Projects:** The projects feature allows you to track your existing test session in an existing project. You can create and access your projects under **More Tools**.


<img loading="lazy" src={require('../assets/images/real-device-app-testing/settings-real-device.webp').default} alt="add" width="1346" height="647" className="doc_img"/>

### Switch

This feature allows you to **switch** between devices, browser and their OS versions without exiting your current test session.

<img loading="lazy" src={require('../assets/images/real-device-app-testing/switch-device-real-device.webp').default} alt="add" width="1346" height="647" className="doc_img"/>

### End Session

By clicking on the end session button, you can close your current test session. 

## Comprehensive Top Bar
***

<div className="storylane-iframe">
  <script async src="https://js.storylane.io/js/v2/storylane.js"></script>
  <div className="sl-embed">
    <iframe loading="lazy" className="sl-demo" src="https://app.storylane.io/demo/me0ezcoti8ts?embed=inline" name="sl-embed" allow="fullscreen" allowfullscreen></iframe>
  </div>
</div>

### Zoom In-Out

With the **zoom in-out** slider, you can zoom in and out in your real device as per your preference.

### Network Logs

**Network Logs** record performance metrics including network traffic, latency, and HTTP requests and responses in the HAR (HTTP Archive) format. These logs provide a detailed overview of all network requests, such as REST API calls, from your app and their response times, aiding in the identification of performance bottlenecks and troubleshooting of failed REST API responses.

<img loading="lazy" src={require('../assets/images/real-device-app-testing/network-logs-real-app.webp').default} alt="add" width="1346" height="647" className="doc_img"/>

### Device Logs

**Device logs** are application-specific system logs generated by iOS or Android that provide access to your application's logs. They are particularly useful for analyzing issues when the application crashes during testing.

<img loading="lazy" src={require('../assets/images/real-device-app-testing/device-logs.webp').default} alt="add" width="1346" height="647" className="doc_img"/>



### UI Inspector

The Intelligent **UI Inspector** for real device testing streamlines mobile app testing by enabling direct interaction with devices, allowing testers to efficiently inspect app elements without the need of repeatedly opening and closing the inspector. The Intelligent UI Inspector offers the capability to crеatе custom XPaths еffortlеssly for automation test scripts.	

<img loading="lazy" src={require('../assets/images/real-device-app-testing/ui-inspector.webp').default} alt="add" width="1346" height="647" className="doc_img"/>



### Test Manager

Unified **Test Manager** simplifies test authoring, management, triggering, and reporting, boosting efficiency throughout all testing phases.

<img loading="lazy" src={require('../assets/images/real-device-app-testing/test-manager.webp').default} alt="add" width="1346" height="647" className="doc_img"/>



> **Notes:** The max duration for running manual tests on <BrandName /> Real Device Cloud is 2 hours. In order to extend the duration, you can opt for our dedicated real device cloud.


<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>
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
        Testing Tools
      </span>
    </li>
  </ul>
</nav>

