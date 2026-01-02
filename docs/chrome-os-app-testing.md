---
id: chrome-os-app-testing
title: ChromeOS App Testing
hide_title: false
sidebar_label: ChromeOS App Testing
description: TestMu AI provides a powerful solution for testing apps designed for Chromebooks by offering live interactive testing capabilities, and device emulation for responsive design testing.
keywords:
    - ChromeOS
    - ChromeOS App
    - TestMu AI
    - Virtual Testing
    - Emulator
    - Simulator
    - real time
    - application
url: https://www.testmu.ai/support/docs/chrome-os-app-testing
site_name: LambdaTest
slug: chrome-os-app-testing
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "LambdaTest",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "ChromeOS App Testing",
          "item": `${BRAND_URL}/support/docs/chrome-os-app-testing/`
        }]
      })
    }}
></script>
This document outlines how you can leverage the features like mark as bug, changing IP geolocation, in-depth device logs and network logs etc to ease your Real Time App testing process.

## Steps to start your ChromeOS App Testing

**Step 1:** Click on the Real Time option from your <BrandName /> dashboard.<br />
**Step 2:** Click on the **Virtual Mobile** option in **App Testing** section.<br />
**Step 3:** Select the **ChromeOS** option, and upload your application to the <BrandName />. (We are using the sample application for the demo purpose)<br />
**Step 4:** Select your screen resolution and click on **Start** button.

<img loading="lazy" src={require('../assets/videos/real-time/chromeos-app/launch-chrome-app.gif').default} style={{ height: '380px' }} className="doc_img"/>

## Device Controls
This transcend basic volume adjustments and lock/unlock functionalities. It empowers you to interact with the emulated ChromeOS device programmatically, automating tasks and integrating them within your testing scripts. This gives you fine-grained control over the device's state, tailoring the testing environment to your specific needs.

<img loading="lazy" src={require('../assets/videos/real-time/chromeos-app/device-control.gif').default} style={{ height: '350px' }} className="doc_img"/> 

## App Controls
This provide programmatic control over the applications installed within the emulator (e.g., install new app, kill the existing app, or uninstall the app).  App Controls give you the power to do it all programmatically. This streamlines your testing process by eliminating the need for manual app manipulation within the emulator.
  
<img loading="lazy" src={require('../assets/videos/real-time/chromeos-app/app-control.png').default} style={{ height: '350px' }} className="doc_img"/>

## Screenshot
Screenshots remain a cornerstone for capturing static images of the current emulator screen.  These screenshots serve as invaluable visual references throughout the testing process, aiding in bug reporting, test case documentation, and visual regression testing.

<img loading="lazy" src={require('../assets/videos/real-time/chromeos-app/screenshot.gif').default} style={{ height: '350px' }} className="doc_img"/>
 
## Record Session
This allows you to record a video of your testing session, providing a detailed playback for in-depth bug analysis, test case demonstrations, and comprehensive test case documentation.

<img loading="lazy" src={require('../assets/videos/real-time/chromeos-app/record-session.gif').default} style={{ height: '350px' }} className="doc_img"/>
 
## Gallery
Serves as your central hub for all captured screenshots and recorded sessions from your ChromeOS testing endeavors. This eliminates the need to search for these assets across different locations. The Gallery provides easy access, allowing you to review, download, and organize your testing assets effortlessly.
 
<img loading="lazy" src={require('../assets/videos/real-time/chromeos-app/gallery.gif').default} style={{ height: '350px' }} className="doc_img"/>
 
## Mark as Bug
It empowers you to streamline bug reporting within the testing environment itself. Encounter a UI glitch? Simply capture a screenshot, optionally annotate it with relevant details using shapes, text, and color coding, and seamlessly report the bug via your preferred integrated project management tool. This integration eliminates the need for context switching and facilitates efficient bug reporting.
  
<img loading="lazy" src={require('../assets/videos/real-time/chromeos-app/mark-bug.gif').default} style={{ height: '350px' }} className="doc_img"/>
 

## IP Geolocation
This transcends basic location selection. It allows you to spoof the IP address of your emulated device, simulating various geographical locations across over 45 countries. This enables you to test geo-restricted features, localized content delivery, and the overall user experience for a global audience.
  
<img loading="lazy" src={require('../assets/videos/real-time/chromeos-app/ip-location.png').default} style={{ height: '350px' }} className="doc_img"/>
 
## Network Throttling
It goes beyond simply simulating different network speeds (3G, 4G). It empowers you to create custom network setups, allowing you to test your app's behavior under a wide range of bandwidth limitations and network configurations. This is crucial for optimizing app performance and ensuring a seamless user experience even in areas with limited or unreliable internet connectivity.
  
<img loading="lazy" src={require('../assets/videos/real-time/chromeos-app/network.png').default} style={{ height: '350px' }} className="doc_img"/>
 

<!-- ## Projects
Organizes your testing sessions within the <BrandName /> platform by grouping them into projects for better manageability and collaboration.

  
<img loading="lazy" src={require('../assets/videos/real-time/chromeos-app/projects.png').default} style={{ height: '350px' }} className="doc_img"/>
  -->

## Settings
Settings provide a central location to configure various aspects of your emulated ChromeOS environment. Change the language settings to conduct localized testing, or define the timeout scenario to manage test session duration based on your needs.
  
<img loading="lazy" src={require('../assets/videos/real-time/chromeos-app/setting.png').default} style={{ height: '350px' }} className="doc_img"/>
 

## Switch
Switch allows you to seamlessly switch between multiple emulated devices within the same project.  This eliminates the need to tear down and rebuild individual emulators, streamlining your testing workflow and enabling you to compare app behavior across different ChromeOS device configurations.
  
<img loading="lazy" src={require('../assets/videos/real-time/chromeos-app/switch.gif').default} style={{ height: '350px' }} className="doc_img"/>

## End Session
Terminates the current emulator instance, freeing up resources and allowing you to start a fresh session with a clean slate.

## Advance Tools

<img loading="lazy" src={require('../assets/videos/real-time/chromeos-app/advance-tool.gif').default} style={{ height: '350px' }} className="doc_img"/>

### UI Inspector
This is designed to examine and interact with the user interface (UI) elements of your mobile apps, or desktop applications. It acts like a behind-the-scenes detective, allowing you to delve into the inner workings of your app's interface.

### DevTools
This provide access to all types of logs (Device, Network, and App) and you can also sort them as per their status (Activity, Warning, Debug, Error). You can also download these logs.

### Adb Shell
It provides a Unix-like shell environment, allowing you to execute commands on the device itself. It is used for interacting with the Android operating system directly on a connected Android device or emulator.
