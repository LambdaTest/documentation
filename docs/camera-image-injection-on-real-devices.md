---
id: camera-image-injection-on-real-devices
title: Media Injection on Real Devices
sidebar_label: Media Injection
description: Test camera features on real devices with TestMu AI's Image Injection. Easily inject custom images for QR codes, photos, and more.
keywords:
  - image injection
  - app test automation
  - camera image
  - QR code scanning
  - Barcode scanning
  - testmu ai capture code
  - framework on testmu ai
  - app testing appium
  - app testing
  - real devices
url: https://www.testmu.ai/support/docs/camera-image-injection-on-real-devices
site_name: LambdaTest
slug: camera-image-injection-on-real-devices
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
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
          "name": "Camera Image Injection on Real Devices",
          "item": `${BRAND_URL}/support/docs/camera-image-injection-on-real-devices/`
        }]
      })
    }}
></script>
<BrandName />'s Media Injection empowers you to test various camera-related functionalities (Image Injection and Video Injection) of your app across a vast array of real mobile devices. This innovative feature supports image capture testing, QR code scanning verification and Barcode scanning assessment.

## Use Cases

- URL-embedded QR code scans
- Digital check processing
- Real-time video streaming and playback
- Video capture and upload workflows

## How It Works

The Image and Video Injection processes leverages **Sensor Instrumentation** technology. When activated for a test session, it injects <BrandName />'s proprietary camera module into your application and emulates or supersedes the native Android/iOS camera SDK

### Key Features

- Extensive device compatibility (10000+ real devices)
- Comprehensive support for image and video based functionalities
- Effortless integration with existing test environments

:::warning note
- For iOS apps signed with Enterprise Certificates, app resigning (a prerequisite for using the Image Injection tool) is not available.
:::

## Supported Camera APIs

Below given is the list of Camera APIs which are supported by <BrandName /> Image Injection tool. Please ensure that your app uses these APIs only to enable Video Injection.

<Tabs className="docs__val">

<TabItem value="bash" label="iOS >= version 13" default>

  <div className="lambdatest__codeblock">
    | Supported APIs |
    |----------------|
    | `didFinishPickingMediaWithInfo` API of `UIImagePickerController` iOS SDK class for capturing an image. <br /><br /> 📕 For details, please check [Apple documentation](https://developer.apple.com/documentation/uikit/uiimagepickercontrollerdelegate/1619126-imagepickercontroller)|
    | `AVCapturePhoto` iOS SDK class for receiving captured photos from `AVCapturePhotoOutput` API. <br /><br />📕 For details, please check [Apple Documentation](https://developer.apple.com/documentation/avfoundation/avcapturephoto).  |
  </div>

</TabItem>

<TabItem value="powershell" label="Android >= version 9" default>

  <div className="lambdatest__codeblock">
    | Supported APIs |
    |----------------|
    | `CameraX` API is used. <br />📕 For details, please check [CameraX documentation](https://developer.android.com/training/camerax) |
    | `Camera` API is used. <br />📕 For details, please check [Camera documentation] (https://developer.android.com/training/camera-deprecated)|
    | `Camera2` API is used. <br />📕 For details, please check [Camera2 documentation](https://developer.android.com/training/camera2)|
    | `ACTION_IMAGE_CAPTURE` is standard Intent action that can be sent to have the camera application capture an image and return it. <br /><br />📕 For details, please check [MediaStore documentation](https://developer.android.com/reference/android/provider/MediaStore)|
  </div>

</TabItem>
</Tabs>

## Supported Camera Video APIs

Below given is the list of Camera APIs which are supported by <BrandName /> Video Injection tool. Please ensure that your app uses these APIs only to enable Image Injection.

<Tabs className="docs__val">

<TabItem value="bash" label="iOS >= version 13" default>

  <div className="lambdatest__codeblock">
    | Supported APIs |
    |----------------|
    | `captureOutput(_:didOutput:from:)` method of `AVCaptureVideoDataOutputSampleBufferDelegate` protocol. <br /><br />📕 For details, please check [Apple Documentation](https://developer.apple.com/documentation/avfoundation/avcapturevideodataoutputsamplebufferdelegate) |

  </div>

</TabItem>

<TabItem value="powershell" label="Android >= version 13" default>

  <div className="lambdatest__codeblock">
    | Supported APIs |
    |----------------|
    | `ImageReader` class for accessing video frames from the camera output. <br /><br />📕 For details, please check [ImageReader documentation](https://developer.android.com/reference/android/media/ImageReader) |
  </div>

</TabItem>
</Tabs>

## Image and Video Injection in Real Device App Testing

This feature helps you inject any video or image which you want your app to click or scan through the device camera. You just need to follow the steps given below:

**Step 1:** Click on the **Real Devices** > **App Testing**

**Step 2:** Select your required device and upload your application which supports the camera APIs listed above.

**Step 3:** Now, hover over your app and click on the **Settings** icon. Toggle the **Image Injection** and **Video Injection** option and click on **Save Changes** button. Click on **Start** to run your app on the selected device.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/media-injection/Step3.png').default} alt="Native Mobile App Testing"  className="doc_img" width="1366" height="629"/>

**Step 4:** You can see the video and image preview in the Media Injection section. You can
**delete**, **reupload** and **inject** the image or video from here.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/media-injection/Stepfinal.png').default} alt="Native Mobile App Testing"  className="doc_img" width="1366" height="629"/>

**Step 5:** After the above config, click on the **Start** button to start the session. Now, go to **Device Controls** in the toolbar as shown below. Select Media Injection and click **Inject** to upload the desired video or image from your computer to the app.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/media-injection/Stepfinalx.png').default} alt="Native Mobile App Testing"  className="doc_img" width="1366" height="629"/>
 

**Step 6:** Now go to camera feature in your app, the camera pops up. When you click the image from your app, you will see a black image. Please proceed with the same by clicking on **Use Photo**. 

**Step 7:** The black image is now replaced with an injected image or video.

:::info

The clicked image is black because the **Cameras** of <BrandName /> Real Devices are taped for security reasons. Thus we inject image through **Sensor Instrumentation**.

:::
