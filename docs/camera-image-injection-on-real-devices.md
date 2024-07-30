---
id: camera-image-injection-on-real-devices
title: Camera Image Injection on Real Devices
sidebar_label: Camera Image Injection
description: Now you can test image capturing and QR code or Barcode scanning in your app on LambdaTest Real Device Cloud Platform with 3000+ real mobile devices.
keywords:
  - image injection
  - app test automation
  - camera image
  - QR code scanning
  - Barcode scanning
  - lambdatest capture code
  - framework on lambdatest
  - app testing appium
  - app testing
  - real devices
url: https://www.lambdatest.com/support/docs/camera-image-injection-on-real-devices/
site_name: LambdaTest
slug: camera-image-injection-on-real-devices/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
          "name": "Camera Image Injection on Real Devices",
          "item": "https://www.lambdatest.com/support/docs/camera-image-injection-on-real-devices/"
        }]
      })
    }}
></script>

LambdaTest's Camera Image Injection empowers you to test various camera-related functionalities of your app across a vast array of real mobile devices. This innovative feature supports image capture testing, QR code scanning verification and Barcode scanning assessment.

## Use Cases

- URL-embedded QR code scans
- Digital check processing
- Profile photo capture
- In-app image upload functionality

## How It Works

The Image Injection process leverages **Sensor Instrumentation** technology. When activated for a test session, it injects LambdaTest's proprietary camera module into your application and emulates or supersedes the native Android/iOS camera SDK

### Key Features

- Extensive device compatibility (3000+ real devices)
- Comprehensive support for image-based functionalities
- Effortless integration with existing test environments
:::warning note
- Video capture and other media types are not currently supported.
- For iOS apps signed with Enterprise Certificates, app resigning (a prerequisite for using the Image Injection tool) is not available.
:::

## Supported Camera APIs

Below given is the list of Camera APIs which are supported by LambdaTest Image Injection tool. Please ensure that your app uses these APIs only to enable Image Injection.

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
    | `Camera` API is used. <br />📕 For details, please check [Camera documentation](https://developer.android.com/training/camera-deprecated)|
    | `Camera2` API is used. <br />📕 For details, please check [Camera2 documentation](https://developer.android.com/training/camera2)|
    | `ACTION_IMAGE_CAPTURE` is standard Intent action that can be sent to have the camera application capture an image and return it. <br /><br />📕 For details, please check [MediaStore documentation](https://developer.android.com/reference/android/provider/MediaStore)|
  </div>

</TabItem>
</Tabs>

## Image Injection in Real Device App Testing

This feature helps you inject any image which you want your app to click or scan through the device camera. You just need to follow the steps given below:

1. Go to **App Testing** testing under the **Real Devices** section given in the side bar of your LambdaTest console.
2. On the **App testing** page select the device of your choice and upload your application which supports the camera APIs listed above.
3. Hover over the app in which you want to use Image Injection and click on **Settings** icon. You will see a **toggle** for Image Injection, turn it on as illustrated in the image below. Click on **Start** to run your app on the selected device.

<img loading="lazy" src={require('../assets/images/app-automation/Group2.png').default} alt="Image" width="1200" height="550" className="doc_img"/>

4. Once the session is started, go to **Device Controls** in the toolbar as shown below. Select Image Injection and click **Upload Image** to inject the desired image from your computer to the app.

<img loading="lazy" src={require('../assets/images/app-automation/image21.png').default} alt="Image" width="1200" height="250
" className="doc_img"/>

5. You can see the image preview in the Image Injection section. You can **delete** or **reupload** the image from here.

6. Now go to camera feature in your app, the camera pops up. When you click the image from your app, you will see a black image. Please proceed with the same by clicking on **Use Photo**. 

7. The black image is now replaced with an injected image.

:::info

The clicked image is black because the **Cameras** of LambdaTest Real Devices are taped for security reasons. Thus we inject image through **Sensor Instrumentation**.

:::
