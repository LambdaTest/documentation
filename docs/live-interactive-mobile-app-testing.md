---
id: live-interactive-mobile-app-testing
title: Realtime Native Mobile App Testing
hide_title: true
sidebar_label: Realtime Native Mobile App Testing
description: With TestMu AI, perform live interactive testing of mobile applications on Android emulators and iOS simulators and ensure your apps work seamlessly across multiple versions of Android emulators and iOS simulators.
keywords:
- mobile app testing 
- testmu ai manual app testing 
- live-interactive mobile app testing testmu ai
- geolocation app testing
url: https://www.testmu.ai/support/docs/live-interactive-mobile-app-testing
site_name: LambdaTest
slug: live-interactive-mobile-app-testing
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
          "name": "Native Mobile App Testing",
          "item": `${BRAND_URL}/support/docs/live-interactive-mobile-app-testing/`
        }]
      })
    }}
></script>

# Realtime Native Mobile App Testing

***

Mobile app testing is the process of testing a mobile application to ensure that their functionality and usability is not comprised when installed across multiple Android and iOS devices. With <BrandName />, you can test mobile applications manually to ensure they perform seamlessly across all Android emulators and iOS simulators.

## Uploading An App

* * *

You can upload an app via a browser/finder or a public cloud link. If you don't already have an app, the <BrandName /> sample app will help you easily get started with native app testing.

### Uploading An App Via Browser

* * *

**Step 1**: Login to your <BrandName /> account. Visit **'Real Time Testing**' from the left panel and navigate to the **'App Testing'**.

**Step 2**: Click on **'Upload'**. You can select an application either by drag and drop or browse for and select the application. The uploading process will take few moments depending upon the application'size.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/native-app-testing-1.webp').default} alt="Native Mobile App Testing"  className="doc_img" width="1366" height="629"/>

Your application will be uploaded successfully. Currently, you can upload `.apk` files up to 1GB.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/native-app-testing-2.webp').default} alt="Native Mobile App Testing"  className="doc_img" width="1366" height="629"/>

### Uploading An App Via Public Cloud Link

* * *

**Step 1**: Login to your <BrandName /> account. Visit **'Real Time Testing**' from the left panel and you'll be routed to the App testing console page.

**Step 2**: Click on **'URL'**. Enter the App source URL and press Enter.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/native-app-testing-3.webp').default} alt="Native Mobile App Testing"  className="doc_img" width="1366" height="629"/>

Your application will be uploaded successfully.

## Testing Mobile Applications On Android/iOS

* * *

You can test your native mobile apps on Android emulators and iOS simulators. For demonstration, we will be picking up Android.

**Step 1**: Select Real Time Testing from the left panel and navigate to **'App Testing'**.

**Step 2**: Upload your Android app, select the device brand, choose the device and click on **'START'**.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/native-app-testing-4.webp').default} alt="Native Mobile App Testing"  className="doc_img" width="1366" height="629"/> 

An Android emulator will fire up where you can perform native application testing of your mobile apps. 

<img loading="lazy" src={require('../assets/images/mobile-app-testing/Screenshot-239.webp').default} alt="Native Mobile App Testing"  className="doc_img" width="1366" height="629"/>

>
**Note**: Similarly, you can perform mobile app testing on iOS simulators where all the steps and features will remain same.

## Capturing Screenshots And Logging Bugs

* * *

Once the virtual machine is launched, you'll notice the controller buttons on the left panel.

**Step 1**: Click on the **'Mark As Bug'** icon

<img loading="lazy" src={require('../assets/images/mobile-app-testing/Screenshot-240.webp').default} alt="Native Mobile App Testing"  className="doc_img" width="1366" height="629"/>

**Step 2**: Once the screenshot has been captured, you can download the captured screenshot by **'Down Arrow'** icon or can use the built-in image editor tools to mark any bugs or tasks. After that click on **'Mark as Bug'**.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/Screenshot-241.webp').default} alt="Native Mobile App Testing"  className="doc_img" width="1366" height="629"/>

**Step 3**: An integration specific ticket will appear. For example, if you have integration with YouTrack then fill up the details of your bugs in the YouTrack ticket and click on **'Create Issue'**.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/Screenshot-244.webp').default} alt="Native Mobile App Testing"  className="doc_img" width="1366" height="629"/> Your bugs will be marked successfully.

## Recording Video Of A Test Session

* * *

**Step 1**: From the left panel, click on the **'Video'** icon.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/Screenshot-245.webp').default} alt="Native Mobile App Testing"  className="doc_img" width="1366" height="629"/>

**Step 2**: Once you click, the video recording of a current test session will start. To stop the recording, click again on the same video button.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/Screenshot-246.webp').default} alt="Native Mobile App Testing"  className="doc_img" width="1366" height="629"/>

**Step 3**: To view your saved recording of test sessions, click on the **'Gallery'** icon from the left panel and navigate to Video. You can even download these recordings to your local system by clicking on the **'Down Arrow'** button.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/Screenshot-247.webp').default} alt="Native Mobile App Testing"  className="doc_img" width="1366" height="629"/>

## DevTools For Live Debugging

* * *

On clicking the Dev Tools option, you will come across two options i.e., Dev Tools and UI Inspector.  

Using developer tools, you can debug mobile apps on Android and iOS. Currently, you can view your Networks Logs, App Logs, and Device Logs. To view the logs, click on the 'DevTools' icon from the left and all the logs of the current device will be displayed.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/ui-inspector-1.webp').default} alt="Native Mobile App Testing"  className="doc_img" width="1366" height="629"/>

Upon selecting the UI Inspector feature, you can view all the XML details along with the properties table. By clicking on the arrow in the top right corner, UI Inspector allows you to download all the XML details. 

> **Note:** The window of the UI inspector is horizontally expandable if the XML tree is not visible (Only case when the XML tree is not visible properly).

<img loading="lazy" src={require('../assets/images/mobile-app-testing/ui-inspector-2.webp').default} alt="Native Mobile App Testing"  className="doc_img" width="1366" height="629"/>

## Device Controls

* * *

With the device controls, you can change the keyboard language, the device orientation, put device to sleep mode, increase and decrease volume.

### Changing Keyboard Language

* * *

From the left panel, select the **'Device Controls'** icon and from the dropdown menu, select your desired keyboard language.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/Screenshot-250.webp').default} alt="Native Mobile App Testing"  className="doc_img" width="1366" height="620"/> 

After a few seconds, your keyboard language will be changed.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/Screenshot-251.webp').default} alt="Native Mobile App Testing"  className="doc_img" width="1366" height="620"/>

### Changing Device Orientation

* * *

From the left panel, select the **'Device Controls'** icon and click on the **'Rotate'** button.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/Screenshot-249.webp').default} alt="Native Mobile App Testing"  className="doc_img" width="1366" height="622"/> 

The device will be rotated successfully.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/Screenshot-248.webp').default} alt="Native Mobile App Testing"  className="doc_img" width="1353" height="608"/>

### Sleep Mode, Increase And Decrease Volume

* * *

From the left panel, select the **'Device Controls'** icon. You'll notice three buttons as highlighted below.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/Screenshot-252.webp').default} alt="Native Mobile App Testing"  className="doc_img" width="1366" height="620"/>

*   To put the device on sleep mode, click on <img loading="lazy" src={require('../assets/images/mobile-app-testing/sleep.webp').default} alt="Native Mobile App Testing"  className="doc_img" width="1366" height="622"/> icon.
*   To increase volume, click on <img loading="lazy" src={require('../assets/images/mobile-app-testing/vol_up.webp').default} alt="Native Mobile App Testing"  className="doc_img" width="1353" height="608"/> icon.
*   To decrease volume, click on <img loading="lazy" src={require('../assets/images/mobile-app-testing/vol_down.webp').default} alt="Native Mobile App Testing"  className="doc_img" width="1366" height="614"/> icon.

## Setting The Idle Time Out

* * *

You can set the idle time out of your test session by clicking on the **'Settings'** icon from the left panel. Select the dropdown menu and choose the desired idle time out.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/Screenshot-254.webp').default} alt="Native Mobile App Testing"  className="doc_img" width="1366" height="618"/>

## Geolocation Testing Of Mobile Apps

* * *

You can test native mobile apps from different geolocations by clicking on **'Settings'** icon from the left panel. Select the dropdown menu and choose the desired country on which you wish to perform the test.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/Screenshot-255.webp').default} alt="Native Mobile App Testing"  className="doc_img" width="1366" height="616"/>

You can perform Geolocation testing of mobile apps in the below countries.

1.  Argentina
2.  Australia
3.  Belgium
4.  Brazil
5.  Bulgaria
6.  Canada
7.  Chile
8.  China
9.  Croatia
10.  Colombia
11.  Czech Republic
12.  Denmark
13.  Finland
14.  France
15.  Georgia
16.  Germany
17.  Greece
18.  Hong Kong
19.  Hungary
20.  India
21.  Indonesia
22.  Ireland
23.  Israel
24.  Italy
25.  Japan
26.  Kuwait
27.  Malaysia
28.  Mexico
29.  Morocco
30.  Netherlands
31.  New Zealand
32.  Nigeria
33.  Norway
34.  Philippines
35.  Poland
36.  Portugal
37.  Qatar
38.  Russia
39.  Saudi Arabia
40.  Singapore
41.  South Africa
42.  South Korea
43.  Spain
44.  Sweden
45.  Switzerland
46.  Taiwan
47.  Thailand
48.  Turkey
49.  UAE
50.  Ukraine
51.  United Kingdom
52.  United States
53.  Vietnam

<div className="ytframe"> 
<div className="youtube" data-embed="Y0GDCneEYGA">
    <div className="play-button"></div>
</div>
</div>

## Installing Another App In A Running Test Session

* * *

You can upload another app inside a running test session either by uninstalling the existing app or by installing the new app. You can also upload the apps from the already uploaded app list.

**Step 1**: From the left panel, navigate to the Android icon and click on **'Install New'**.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/Screenshot-257.webp').default} alt="Native Mobile App Testing"  className="doc_img" width="1366" height="616"/>

**Step 2**: Once you click on Install New, you will need to upload your app either via browser or a URL.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/Screenshot-258.webp').default} alt="Native Mobile App Testing"  className="doc_img" width="1349" height="607"/>

Once your app is uploaded, you'll be guided to the VM where the application will be automatically downloaded and installed on the particular emulator/simulator.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/Screenshot-261.webp').default} alt="Native Mobile App Testing"  className="doc_img" width="1354" height="613"/>

## Killing The Application

* * *

You can kill/close the current running mobile application. Select the **'Android'** icon from the left panel and click on **'Kill App'**.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/Screenshot-262.webp').default} alt="Native Mobile App Testing"  className="doc_img" width="1366" height="620"/>

## Uninstalling The Application

* * *

You can uninstall the installed mobile application. Select the **'Android'** icon from the left panel and click on **'Uninstall App'**.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/Screenshot-263.webp').default} alt="Native Mobile App Testing"  className="doc_img" width="1366" height="618"/>

## Ending The Test Session

* * *

**Step 1**: From the left panel, click on the **'End Session'** icon.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/Screenshot-265.webp').default} alt="Native Mobile App Testing"  className="doc_img" width="1360" height="612"/>

**Step 2**: A confirmation pop-up box will appear. Click on **'Yes, End Session'**.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/Screenshot-266.webp').default} alt="Native Mobile App Testing"  className="doc_img" width="1366" height="616"/>

You will be logged out from the test session.

>
That's all about live-interactive mobile application testing. In case you have any questions, please reach out to us at our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24*7 Chat Portal**</span> or you could mail us at [**support@lambdatest.com**](mailto:support@lambdatest.com).

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
        Native Mobile App Testing
      </span>
    </li>
  </ul>
</nav>
