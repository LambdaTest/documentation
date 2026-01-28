---
id: web-testing-on-real-devices
title: Web Testing On Real Devices
hide_title: true
sidebar_label: Web Testing On Real Devices (Beta)
description: TestMu AI mobile testing cloud offers a wide range of real Android and iOS devices to test on.This documentation will help you perform mobile web testing of your websites and web apps on TestMu AI real device cloud. 
keywords:
- live mobile web testing
- live mobile testing
- mobile web testing
- mobile device web testing 
- manual mobile web testing
- manual android mobile testing
- manual ios mobile testing
- mobile web app testing tools 
- how to test mobile web app on real devices
- how to test mobile web apps
url: https://www.testmu.ai/support/docs/web-testing-on-real-devices/
site_name: LambdaTest
slug: web-testing-on-real-devices/
canonical: https://www.testmu.ai/support/docs/web-testing-on-real-devices/
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
          "name": "Web Testing On Real Devices",
          "item": `${BRAND_URL}/support/docs/web-testing-on-real-devices/`
        }]
      })
    }}
></script>

# Web Testing On Real Devices
***
Mobile website testing involves testing websites and web apps across numerous mobile browsers like Chrome, Safari, Opera, etc to make sure your websites (and web apps) are rendering seamlessly across different mobile browsers and devices. <BrandName /> real device cloud allows you to manually test websites and web apps on the range of real Android and iOS devices.

This documentation covers how to perform web testing across real Android and iOS devices on the <BrandName /> platform.

>**Note**: Currently Web testing on real devices is in the Beta phase. To access this feature, contact <span className="doc__lt" onClick={() => window.openLTChatWidget()}><BrandName /> Support</span>.


## Testing Websites And Web Apps On Real Devices
***

For demonstration, we will perform real-time web testing on real Android devices. 

1. Sign into your <BrandName /> account. From the left menu, navigate to Real Time Testing and click **Browser Testing** tab.

<img loading="lazy" src={require('../assets/images/mobile-testing-real-devices/browser-testing.webp').default} alt="Image"  width="1366" height="625" className="doc_img"/>

2. Select Android trademark symbol and choose the test environments like BRAND, DEVICE/OS, and BROWSER on which you wish to run the test. After that, click **START**.

<img loading="lazy" src={require('../assets/images/mobile-testing-real-devices/choose-config.webp').default} alt="Image"  width="1366" height="625" className="doc_img"/>

3. A cloud-hosted real device environment will launch where you can perform live-interactive testing of websites for filing bugs.

<img loading="lazy" src={require('../assets/images/mobile-testing-real-devices/real-device-cloud.webp').default} alt="Image"  width="1366" height="625" className="doc_img"/>

## Screenshots And Bug Logging
***

One-click bug logging allows users to capture screenshots for future reference and log bugs while performing real-time mobile browser testing.

1. To log a bug, click on the Bug icon.

<img loading="lazy" src={require('../assets/images/mobile-testing-real-devices/bug-icon.webp').default} alt="Image"  width="1366" height="625" className="doc_img"/>

2. Once the screenshot has been captured, you can either download it by clicking the download option or use the built-in image editor tools to highlight any bugs or tasks. After that, click **MARK AS BUG**.

<img loading="lazy" src={require('../assets/images/mobile-testing-real-devices/mab.webp').default} alt="Image"  width="1366" height="625" className="doc_img"/>

3. An integration ticket will pop up. Provide the bugs/issue/task details and click **Create Issue**. Your bugs will be marked to your integrated bug-tracking tool.

<img loading="lazy" src={require('../assets/images/mobile-testing-real-devices/create-issue.webp').default} alt="Image" width="1366" height="625" className="doc_img"/>


*<BrandName /> offers 65+ integrations with your favourite tool for Bug tracking, CI/CD, Project Management, Codeless Automation, and more. Check out [<BrandName /> integrations](https://www.lambdatest.com/integrations).*


## Video Recording Of A Test Session
***

1. Click on the Video recorder icon from the left tool bar.

<img loading="lazy" src={require('../assets/images/mobile-testing-real-devices/video-icon.webp').default} alt="Image"  width="1366" height="625" className="doc_img"/>

2. The video recording of the current test session will start. To stop the test session recording, click again on the same Video recorder icon.

<img loading="lazy" src={require('../assets/images/mobile-testing-real-devices/video-timer.webp').default} alt="Image"  width="1366" height="625" className="doc_img"/>

## Viewing Gallery
***

All the captured screenshots and test session video recordings are saved in the Gallery.

1. To view the screenshots (or videos), click on the Gallery icon from the left tool bar.

<img loading="lazy" src={require('../assets/images/mobile-testing-real-devices/gallery.webp').default} alt="Image"  width="1366" height="625" className="doc_img"/>

2. You can download these screenshots (or video recordings) to your local system. To download, click on the download option.

<img loading="lazy" src={require('../assets/images/mobile-testing-real-devices/download.webp').default} alt="Image"  width="1366" height="625" className="doc_img"/>

## Accessing DevTools
***

DevTools allows you to launch a web app within a mobile browser and do the live-debugging.

1. To access the DevTools, click on **DevTools** icon.

<img loading="lazy" src={require('../assets/images/mobile-testing-real-devices/devtools.webp').default} alt="Image"  width="1366" height="625" className="doc_img"/>

The DevTools will be launched and you can perform the live-debugging of your websites.

<img loading="lazy" src={require('../assets/images/mobile-testing-real-devices/chrome-devtools.webp').default} alt="Image"  width="1366" height="625" className="doc_img"/>

## Geolocation Testing And Setting GPS Geolocation
***

You can test mobile websites on different geolocations and GPS geolocations.

1. Click on the location icon from the left tool bar and you'll notice a dropdown to select a geolocation.

<img loading="lazy" src={require('../assets/images/mobile-testing-real-devices/select-country.webp').default} alt="Image"  width="1366" height="625" className="doc_img"/>

2. From the the dropdown, select the desired country on which you want to run the test.

<img loading="lazy" src={require('../assets/images/mobile-testing-real-devices/choose-geo.webp').default} alt="Image"  width="1366" height="625" className="doc_img"/>

Based on the selected country, the cloud machine would subsequently be routed to a specified IP address.


You can also test your websites based on the specific GPS Geolocation. 

1. Click on the location icon and select **Set Location**.

<img loading="lazy" src={require('../assets/images/mobile-testing-real-devices/set-location.webp').default} alt="Image"  width="1366" height="625" className="doc_img"/>

2. Enter the location address (or latitude and longitude) and then click **Yes**.

<img loading="lazy" src={require('../assets/images/mobile-testing-real-devices/confirm-loc.webp').default} alt="Image"  width="1366" height="625" className="doc_img"/>

After few seconds, your GPS location will be set.

## Device Controls
***

Using the device controls, you can change the keyboard language, rotate between portrait and landscape modes, return to the previous page, and increase/decrease the volume.

<!---### Switching Keyboard Language
***

Select Device Controls icon. From the dropdown, choose your preferred keyboard language. After a few seconds, your keyboard language will be switched to the selected language.

<img loading="lazy" src={require('../assets/images/mobile-testing-real-devices/keyboard-language.webp').default} alt="Image"   width="1366" height="625" className="doc_img"/>--->

### Device Orientation
***

From the left toolbar, click on the **Rotate** button. 

<img loading="lazy" src={require('../assets/images/mobile-testing-real-devices/rotate.webp').default} alt="Image"   width="1366" height="625" className="doc_img"/>

The device will be rotated to landscape mode or vice-versa.

<img loading="lazy" src={require('../assets/images/mobile-testing-real-devices/landscape.webp').default} alt="Image"   width="1366" height="625" className="doc_img"/>


### Return To Previous Page, Increase And Decrease Volume
***

Click on **Device Controls** icon and you'll notice the three icons for return to the previous page, increase volume and decrease volume. 

<img loading="lazy" src={require('../assets/images/mobile-testing-real-devices/device-controls.webp').default} alt="Image"  width="10" height="10" className="doc_img"/> 

Here are following list of buttons with along with their respective action.

| Action | Icon | Description |
|--------|------|-------------|
| Return |   <img loading="lazy" src={require('../assets/images/mobile-testing-real-devices/back.webp').default} alt="Image"   width="25" height="25" className="doc_img"/>   | Return to the previous page.|
| Increase |  <img loading="lazy" src={require('../assets/images/mobile-testing-real-devices/increase.webp').default} alt="Image"   width="25" height="25" className="doc_img"/>    | Increase the volume.|
| Decrease |   <img loading="lazy" src={require('../assets/images/mobile-testing-real-devices/decrease.webp').default} alt="Image"   width="25" height="25" className="doc_img"/>   | Decrease the volume.|

<!---## Selecting (Or Creating) A Project
***

You can create a project or search for any project. 

1. Click on the **Settings** icon.

<img loading="lazy" src={require('../assets/images/mobile-testing-real-devices/settings.webp').default} alt="Image"  width="1366" height="625" className="doc_img"/>

2. Select the dropdown and click on **Create New**.

<img loading="lazy" src={require('../assets/images/mobile-testing-real-devices/create-new.webp').default} alt="Image"  width="1366" height="625"className="doc_img"/>

3. Enter the Project name and then select **Create New**.

<img loading="lazy" src={require('../assets/images/mobile-testing-real-devices/name-project.webp').default} alt="Image"  width="1366" height="625" className="doc_img"/>

Your new Project will be created.--->

## Ending A Test Session
***

1. Click on the End Session icon. 

<img loading="lazy" src={require('../assets/images/mobile-testing-real-devices/end.webp').default} alt="Image"  width="10" height="10" className="doc_img"/> 

2. A pop-up box will appear, select **Yes, End Session**.

<img loading="lazy" src={require('../assets/images/mobile-testing-real-devices/end-session.webp').default} alt="Image"  width="10" height="10" className="doc_img"/> 

>In case you have any questions or need any additional information, drop them at our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24X7 Chat Support**</span> or mail us directly at support@testmuai.com.

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
       Web Testing On Real Devices
      </span>
    </li>
  </ul>
</nav>

























