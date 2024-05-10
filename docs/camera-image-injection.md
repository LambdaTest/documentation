---
id: camera-image-injection
title: Camera Image Injection
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
url: https://www.lambdatest.com/support/docs/camera-image-injection/
site_name: LambdaTest
slug: camera-image-injection/
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
          "name": "Camera Image Injection",
          "item": "https://www.lambdatest.com/support/docs/camera-image-injection/"
        }]
      })
    }}
></script>
---

Now you can test **Image capturing, QR code and Barcode scanning** in your app on **LambdaTest Real Device Cloud Platform** with **3000+ real mobile devices**.

If you want to test the features such as scanning QR code linked to an embedded URL, check scanning, clicking picture for a profile photo or uploading an image to your app, then you can use **LambdaTest's Image Injection tool**. This document details all you need to know about the tool.

## Objectives

---

By the end of this topic, you will be able to:

1. Enable the Image Injection tool
2. Use Image Injection in App testing
3. Use Image Injection in App Automation

## Introduction

---

### How does Image Injection work

LambdaTest uses **Sensor Instrumentation** to support your app's integration with various mobile sensors like Camera. If you enable Image injection for a specific session, then LambdaTest's camera code module is injected into the app through the process of Sensor Instrumentation. This code module mocks or overrides Android or iOS SDK used in your app.

:::info
These features are not yet supported by Image Injection:
- Capturing video or any other media type from the camera.
- In case of iOS apps signed with Enterprise Certificates, the resigning of app is not available which is a prerequisite to use the Image injection tool.
:::

### Camera APIs supported

Below given is the list of Camera APIs which are supported by LambdaTest Image Injection tool. Please ensure that your app uses these APIs only to enable Image Injection.

| OS                  | Devices                                                                                                                                                                   | Supported APIs                                                                                                                                                                                                                                                                                                                                                        |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| iOS               | iOS 13 and higher                                                                                                                                                             | `didFinishPickingMediaWithInfo` API of `UIImagePickerController` iOS SDK class for capturing an image. For details, please check [Apple documentation](https://developer.apple.com/documentation/uikit/uiimagepickercontrollerdelegate/1619126-imagepickercontroller).                                                                                                                                                                                                                                                                                                                                                             |
|           |                                                                                                                                                              | `AVCapturePhoto` iOS SDK class for receiving captured photos from `AVCapturePhotoOutput` API. For details, please check [Apple Documentation](https://developer.apple.com/documentation/avfoundation/avcapturephoto).                                                                                                                                                                                                                                                                                                                                                              |
| Android               | Android 9 and higher                                                                                                                                                             | `CameraX` API is used. For details, please check [CameraX Documentation](https://developer.android.com/training/camerax)                                                                                                                                                                                                                                                                                                                                                                                |
|           |                                                                                                                                                              | `Camera` API is used. For details, please check [this link](https://developer.android.com/training/camera-deprecated).                                                                                                                             |
|           |                                                                                                                                                              | `Camera2` API is used. For details, please check [this link](https://developer.android.com/training/camera2).                                                                                                                                                                                                                                                                                                                                                |
|           |                                                                                                                                                              | `ACTION_IMAGE_CAPTURE` is standard Intent action that can be sent to have the camera application capture an image and return it. For details please check [this link](https://developer.android.com/reference/android/provider/MediaStore).                                                                                                                                                                                                                                                                                                                                                 |

## Image Injection in Real Time App Testing

----

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

## Image Injection in App Automation

---

This section explains how to use Image Injection with App automation. This section will also teach you how to use image injection for all the possible test cases for your app along with other useful information.

#### 1. How to upload image to LambdaTest

You can use the following curl command to upload any image of your choice to the LambdaTest cloud. Please note that we support only **JPG, JPEG, and PNG formats which can be 10 MB or less**.

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://mobile-mgm.lambdatest.com/mfs/v1.0/media/upload" -F "media_file=@"/Users/macuser/Downloads/image.jpeg"" -F "type="image"" -F "custom_id="SampleImage""`}
</CodeBlock>
</div>

Response of above cURL will be a JSON object containing the `media_url` of the format - lt://MEDIA123456789123456789 as shown below.

```bash
{"media_url":"lt://MEDIA123456789123456789","name":"IMG_123.jpg","status":"success","custom_id":"SampleImage"}
```

#### 2. How to enable Image injection in the Appium Session

You can use the appium capability to turn the image injection on in your application. Just add `"enableImageInjection": True` in the desired capabilities while writing the automation script. By adding this capability the app undergoes Sensor Instrumentation, which was described earlier in the documentation. Also adding media url `"media": "lt://MEDIA123456789123456789"` in the capabilities to inject the image is now optional and can be passed in LambdaHook as mentioned in step 3.


<Tabs className="docs__val">

<TabItem value="python" label="Python" default>
  <div className="lambdatest__codeblock">
  <CodeBlock className="language-python">
  {`desired_capabilities = {
    "enableImageInjection": True,
    "media": "lt://MEDIAf446d4170cd946aa9ec307d10cb679b9", #Add media_url here (optional)
  }`}
  </CodeBlock>
  </div>
</TabItem>


<TabItem value="JavaScript" label="JavaScript" default>
  <div className="lambdatest__codeblock">
  <CodeBlock className="language-javascript">
  {`DesiredCapabilities desiredCapabilities = new DesiredCapabilities();
desiredCapabilities.setCapability("enableImageInjection", "true");`}
  </CodeBlock>
  </div>
</TabItem>
</Tabs>

#### 3. When and How to inject the image

Refer to the code snippets given below to upload the image with the action `ImageInjection`. Please make sure that the image needs to be injected before the camera is triggered in your application. This is due to the fact that the camera only captures the image injected at the last. 

<Tabs className="docs__val">

<TabItem value="python" label="Python" default>
  <div className="lambdatest__codeblock">
  <CodeBlock className="language-python">
  {`driver.execute_script("lambda-image-injection=media_url") #Add media_url here`}
  </CodeBlock>
  </div>
</TabItem>


<TabItem value="JavaScript" label="JavaScript" default>
  <div className="lambdatest__codeblock">
  <CodeBlock className="language-javascript">
  {`driver.execute_script("lambda-image-injection=media_url") //Add media_url here`}
  </CodeBlock>
  </div>
</TabItem>
</Tabs>

:::info

**Use Case**: This feature can be used when you want to test injecting more than one images in single test at different instances. The image injected through above process will replace the image which you put in previous steps.

:::

#### 4. Capture the desired image through camera

You need to first add a logic to inject the uploaded image in the script. Thereafter add the logic to click the camera button in the mobile app. This will show you the last injected image on your mobile app screen.


<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com">
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com/support/docs/">
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
      Camera Image Injection
      </span>
    </li>
  </ul>
</nav>
