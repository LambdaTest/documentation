---
id: camera-image-injection
title: Camera Image Injection
sidebar_label: Camera Image Injection
description: Simulate camera input to test camera-based features like QR scanning and document capture without needing physical devices.
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
url: https://www.testmu.ai/support/docs/camera-image-injection
site_name: LambdaTest
slug: camera-image-injection
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RealDeviceTag from '../src/component/realDevice';
import VirtualDeviceTag from '../src/component/virtualDevice';

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
<RealDeviceTag value="Real Device" /> <VirtualDeviceTag value="Virtual Device" />
Camera Image Injection feature allows you to test **image capturing, QR code scanning**, and **barcode scanning** functionalities in your app across **10000+ real devices** on the LambdaTest Real Device Cloud platform.

This tool is ideal for testing features such as:

- Scanning QR codes linked to embedded URLs
- Check scanning
- Capturing profile photos
- Uploading images to your app

## How It Works
LambdaTest utilizes **Sensor Instrumentation** to integrate with various mobile sensors, including the camera. When you enable Image Injection for a session, LambdaTest injects its camera code module into your app through Sensor Instrumentation. This module then mocks or overrides the Android or iOS SDK used in your app.

### Key Features

- Compatible with 3000+ real mobile devices
- Supports image capturing, QR code scanning, and barcode scanning
- Seamless integration with your existing app testing workflow

:::warning note
- For iOS apps signed with Enterprise Certificates, app resigning (a prerequisite for using the Image Injection tool) is not available.
- For virtual devices this feature is available on Android App Automation Testing.

:::

## Supported Camera APIs

Below given is the list of Camera APIs which are supported by LambdaTest Image Injection tool. Please ensure that your app uses these APIs only to enable Image Injection.

<Tabs className="docs__val">

<TabItem value="bash" label="iOS >= version 13" default>

  <div className="lambdatest__codeblock">
    | Supported APIs |
    |----------------|
    | `didFinishPickingMediaWithInfo` API of `UIImagePickerController` iOS SDK class for capturing an image. <br /><br /> 📕 For details, please check [Apple documentation](https://developer.apple.com/documentation/uikit/uiimagepickercontrollerdelegate/1619126-imagepickercontroller)|
    | `AVCapturePhoto` iOS SDK class for receiving captured photos from `AVCapturePhotoOutput` API. <br /><br />📕 For details, please check [Apple Documentation](https://developer.apple.com/documentation/avfoundation/avcapturephoto).|
    | `AVMetadataMachineReadableCodeObject` is a subclass of `AVMetadataObject` iOS SDK class for scanning QR/Barcodes. <br /><br />📕 For more details, please check [AVMetadataMachineReadableCodeObject Documentation](https://developer.apple.com/documentation/avfoundation/avmetadatamachinereadablecodeobject) |
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

## Image Injection in App Automation

This section explains how to use Image Injection with App automation. This section will also teach you how to use image injection for all the possible test cases for your app along with other useful information.

### Step 1: Upload image to LambdaTest

You can use the following curl command to upload any image of your choice to the LambdaTest cloud. Please note that we support only **JPG, JPEG, and PNG formats which can be 10 MB or less**.

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://mobile-mgm.lambdatest.com/mfs/v1.0/media/upload" -F "media_file=@"/Users/macuser/Downloads/image.jpeg"" -F "type="image"" -F "custom_id="SampleImage""`}
</CodeBlock>
</div>

Response of above cURL will be a JSON object containing the `media_url` of the format - lt://MEDIA123456789123456789 as shown below.

```js
{
"media_url":"lt://MEDIA123456789123456789",
"name":"IMG_123.jpg",
"status":"success",
"custom_id":"SampleImage"
}
```

### Step 2: Enable Image injection in the Appium Session

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

### Step 3: Inject the image

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

### Step 4: Capture the desired image through camera

You need to first add a logic to inject the uploaded image in the script. Thereafter add the logic to click the camera button in the mobile app. This will show you the last injected image on your mobile app screen.

> 📕 Check the [documentation for Camera Image Injection](/support/docs/camera-image-injection-on-real-devices/) feature in Manual App Testing on Real devices


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
