---
id: camera-image-injection-vd
title: Camera Image Injection Testing on Virtual Devices
sidebar_label: Camera Image Injection (Virtual Devices)
description: Learn how to automate camera injection testing on a virtual device cloud using LambdaTest.
keywords:
  - test image capture on virtual devices
  - qr code scanner testing
  - barcode scanning on virtual device cloud
  - lambdaTest virtual device testing
  - mobile app testing qr code
  - lambdatest capture code
  - simulate camera features online
url: https://www.lambdatest.com/support/docs/camera-image-injection-on-virtual-devices/
site_name: LambdaTest
slug: camera-image-injection-on-virtual-devices/
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
          "name": "Camera Image Injection Testing on Virtual Devices",
          "item": "https://www.lambdatest.com/support/docs/camera-image-injection-on-virtual-devices/"
        }]
      })
    }}
></script>
---
The camera image injection feature on LambdaTest lets you test key camera-based functionalities such as image capture, QR code scanning, and barcode scanning across a wide range of Android emulators using Appium framework.  

## How It Works?
---

LambdaTest uses sensor instrumentation to integrate with native mobile sensors. When the image injection feature is enabled during a test session, LambdaTest injects a custom camera module into the mobile app using this sensor instrumentation. This module simulates the behavior of the camera by overriding the Android SDK, allowing you to validate how your mobile app handles camera input.

### Key Features
---

- Works across various Android emulators.
- Enables testing of image capture, barcode, and QR code scanning.
- Integrates smoothly into standard app testing workflows.

## Supported Camera APIs
---

Below given is the list of camera APIs which are supported for image injection feature. Please ensure that your mobile app uses these APIs only to enable image injection.

<Tabs className="docs__val">

<TabItem value="powershell" label="Android >= version 9" default>

  <div className="lambdatest__codeblock">
    | Supported APIs |
    |----------------|
    | `CameraX` API is used. <br />📕 For details, please check [CameraX documentation](https://developer.android.com/training/camerax). |
    | `Camera` API is used. <br />📕 For details, please check [Camera documentation](https://developer.android.com/training/camera-deprecated).|
    | `Camera2` API is used. <br />📕 For details, please check [Camera2 documentation](https://developer.android.com/training/camera2).|
    | `ACTION_IMAGE_CAPTURE` is standard intent action that can be sent to have the camera application capture an image and return it. <br /><br />📕 For details, please check [MediaStore documentation](https://developer.android.com/reference/android/provider/MediaStore).|
  </div>

</TabItem>
</Tabs>

## Using Camera Image Injection for Android
---

Follow the below steps to automate camera injection testing on Android emulators with Appium:

### Step 1: Upload an Image
---
Use the following cURL command to upload an image of your choice to the LambdaTest cloud. Only JPG, JPEG, and PNG formats are supported, with a maximum file size of 10 MB.

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://mobile-mgm.lambdatest.com/mfs/v1.0/media/upload" -F "media_file=@"/Users/macuser/Downloads/sampleimage.jpg"" -F "type="image"" -F "custom_id="SampleImage""`}
</CodeBlock>
</div>

The response to the above cURL command will be a JSON object containing a `media_url` in the format `lt://MEDIA123456789123456789`, as shown below.

```js
{
"media_url":"lt://MEDIA123456789123456789",
"name":"sampleimage.jpg",
"status":"success",
"custom_id":"SampleImage"
}
```

### Step 2: Enable Image injection
---
You can enable image injection in your mobile app using `appium` capability. Simply add   `"enableImageInjection": true` capability in your automation script. Enabling this capability will trigger the sensor instrumentation in your mobile app. Now, add the media URL `"media": "lt://MEDIA123456789123456789"` capability. However, this capability is now optional and can instead be provided via LambdaHook, as described in Step 3.

<Tabs className="docs__val">

<TabItem value="python" label="Python" default>
  <div className="lambdatest__codeblock">
  <CodeBlock className="language-python">
  {`desired_capabilities = {
    "enableImageInjection": true,
    "media": "lt://MEDIAf446d4170cd946aa9ec307d10cb679b9", #Add media_url here (optional)
    "isRealMobile"=false,
  }`}
  </CodeBlock>
  </div>
</TabItem>


<TabItem value="JavaScript" label="JavaScript" default>
  <div className="lambdatest__codeblock">
  <CodeBlock className="language-javascript">
  {`DesiredCapabilities desiredCapabilities = new DesiredCapabilities();
desiredCapabilities.setCapability("enableImageInjection", "true");
desiredCapabilities.setCapability("isRealMobile", false);`}
  </CodeBlock>
  </div>
</TabItem>
</Tabs>

### Step 3: Inject an Image
---
Refer to the code snippets below to inject an image. Ensure the image is injected before your mobile app activates the camera, as the camera will only capture the most recently injected image.


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

**Use Case**: This feature allows you to inject multiple images at different points within a single test. Each new image injected using this process will replace the image injected in the previous step.

:::

### Step 4: Capture the Desired Image
---
First, add the logic to inject the uploaded image in your test script. Then, add the logic to tap the camera button in the mobile app. Make sure to inject the image before clicking the camera, as only the most recently injected image will appear on the app screen.


> 📕 Check the documentation to [automate camera image injection testing on real devices](/support/docs/camera-image-injection/).


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
