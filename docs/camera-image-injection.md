---
id: camera-image-injection
title: Camera Image Injection
hide_title: true
sidebar_label: Camera Image Injection
description: Simulate camera input in apps and mobile browsers to test QR scanning, KYC selfie and document capture without needing physical devices.
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
  - mobile browser image injection
  - web camera injection
url: https://www.testmuai.com/support/docs/camera-image-injection/
site_name: TestMu AI
slug: camera-image-injection/
canonical: https://www.testmuai.com/support/docs/camera-image-injection/
toc_max_heading_level: 2
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import RealDeviceTag from '@site/src/component/realDevice';
import VirtualDeviceTag from '@site/src/component/virtualDevice';
import VerifiedTag from '@site/src/component/verifiedTag';



<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/camera-image-injection/"
    },
    "headline": "Camera Image Injection",
    "description": "Simulate camera input to test camera-based features like QR scanning and document capture without needing physical devices.",
    "url": "https://www.testmuai.com/support/docs/camera-image-injection/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "App Automation",
    "keywords": [
      "image injection",
      "app test automation",
      "camera image"
    ],
    "proficiencyLevel": "Beginner",
    "author": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "url": "https://www.testmuai.com/"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
      "url": "https://www.testmuai.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testmuai.com/logo.png"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testmu-ai/",
        "https://x.com/testmuai",
        "https://www.youtube.com/@TestMuAI"
      ]
    },
    "hasPart": [
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 1: Upload image to TestMu AI",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "{\n\"media_url\":\"lt://MEDIA123456789123456789\",\n\"name\":\"IMG_123.jpg\",\n\"status\":\"success\",\n\"custom_id\":\"SampleImage\"\n}"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "Image Injection in App Automation",
      "description": "This section explains how to use Image Injection with App automation. This section will also teach you how to use image injection for all the possible test cases for your app along with other useful information.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Upload image to TestMu AI",
          "text": "You can use the following curl command to upload any image of your choice to the TestMu AI cloud. Please note that we support only JPG, JPEG, and PNG formats which can be 10 MB or less. {curl -u \"${ YOURLAMBDATESTUSERNAME()}:${ YOURLAMBDATESTACCESSKEY()}\" -X POST \"https://mobile-mgm.lambdatest.com/mfs/v1.0/media/upload\" -F \"mediafile=@\"/Users/macuser/Downloads/image.jpeg\"\" -F \"type=\"image\"\" -F \"custom_id=\"SampleImage\"\"} Response of above cURL will be a JSON object containing the media_url of the format - lt://MEDIA123456789123456789 as shown below.",
          "url": "https://www.testmuai.com/support/docs/camera-image-injection/#step-1-upload-image-to-testmu-ai"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Enable Image injection in the Appium Session",
          "text": "You can use the appium capability to turn the image injection on in your application. Just add \"enableImageInjection\": True in the desired capabilities while writing the automation script. By adding this capability the app undergoes Sensor Instrumentation, which was described earlier in the documentation. Also adding media url \"media\": \"lt://MEDIA123456789123456789\" in the capabilities to inject the image is now optional and can be passed in LambdaHook as mentioned in step 3. {`desired_capabilities = { \"enableImageInjection\": True, \"media\": \"lt://MEDIAf446d4170cd946aa9ec307d10cb679b9\", #Add media_url here (optional) }`} {`DesiredCapabilities desiredCapabilities = new DesiredCapabilities(); desiredCapabilities.setCapability(\"enableImageInjection\", \"true\");`}",
          "url": "https://www.testmuai.com/support/docs/camera-image-injection/#step-2-enable-image-injection-in-the-appium-session"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 3: Inject the image",
          "text": "Refer to the code snippets given below to upload the image with the action ImageInjection. Please make sure that the image needs to be injected before the camera is triggered in your application. This is due to the fact that the camera only captures the image injected at the last. {driver.executescript(\"lambda-image-injection=mediaurl\") #Add media_url here} {driver.executescript(\"lambda-image-injection=mediaurl\") //Add media_url here} Use Case: This feature can be used when you want to test injecting more than one images in single test at different instances. The image injected through above process will replace the image which you put in previous steps.",
          "url": "https://www.testmuai.com/support/docs/camera-image-injection/#step-3-inject-the-image"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Step 4: Capture the desired image through camera",
          "text": "You need to first add a logic to inject the uploaded image in the script. Thereafter add the logic to click the camera button in the mobile app. This will show you the last injected image on your mobile app screen. \ud83d\udcd5 Check the documentation for Camera Image Injection feature in Manual App Testing on Real devices Home Support Camera Image Injection",
          "url": "https://www.testmuai.com/support/docs/camera-image-injection/#step-4-capture-the-desired-image-through-camera"
        }
      ]
    }
  ]) }}
/>

<RealDeviceTag value="Real Device" /> <VirtualDeviceTag value="Virtual Device" />

# Camera Image Injection

Camera image injection on TestMu AI feeds custom images into an app's camera during automated tests, letting you validate QR scanning, barcode reading, and document capture across real Android and iOS devices without physical hardware or any manual scanning setup.

This tool is ideal for testing features such as:

- Scanning QR codes linked to embedded URLs
- Check scanning
- Capturing profile photos
- Uploading images to your app

## How It Works
<BrandName /> utilizes **Sensor Instrumentation** to integrate with various mobile sensors, including the camera. When you enable Image Injection for a session, <BrandName /> injects its camera code module into your app through Sensor Instrumentation. This module then mocks or overrides the Android or iOS SDK used in your app.

### Key Features

- Compatible with 50,000+ real mobile devices
- Supports image capturing, QR code scanning, and barcode scanning
- Seamless integration with your existing app testing workflow

:::warning note
- For iOS apps signed with Enterprise Certificates, app resigning (a prerequisite for using the Image Injection tool) is not available.
- For virtual devices this feature is available on Android App Automation Testing.
- The app must be uploaded to TestMu AI as an .apk (android) or .ipa (iOS) file. TestMu AI process the uploaded app to enable Image Injection and other supported features.
- Image Injection is not enabled for apps installed directly from the Google Play Store or App Store because TestMu AI does not receive the APK/IPA for processing, the app is installed directly on the device during the live Manual or Automation Session.

:::

## Supported Camera APIs

Below given is the list of Camera APIs which are supported by <BrandName /> Image Injection tool. Please ensure that your app uses these APIs only to enable Image Injection.

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

### Step 1: Upload image to <BrandName />

You can use the following curl command to upload any image of your choice to the <BrandName /> cloud. Please note that we support only **JPG, JPEG, and PNG formats which can be 10 MB or less**.

<VerifiedTag value="Verified" />

<div className="lambdatest__codeblock">
<CodeBlock className="language-bash">
{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://mobile-mgm.lambdatest.com/mfs/v1.0/media/upload" -F "media_file=@"/Users/macuser/Downloads/image.jpeg"" -F "type="image"" -F "custom_id="SampleImage""`}
</CodeBlock>
</div>

Response of above cURL will be a JSON object containing the `media_url` of the format - lt://MEDIA123456789123456789 as shown below.

<VerifiedTag value="Verified" />

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
  <VerifiedTag value="Verified" />

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
  <VerifiedTag value="Verified" />

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
  <VerifiedTag value="Verified" />

  <div className="lambdatest__codeblock">
  <CodeBlock className="language-python">
  {`driver.execute_script("lambda-image-injection=media_url") #Add media_url here`}
  </CodeBlock>
  </div>
</TabItem>


<TabItem value="JavaScript" label="JavaScript" default>
  <VerifiedTag value="Verified" />

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



## Image Injection on Mobile Browsers and In-App Web Pages

Image injection also works on **web pages** that open the device camera, such as KYC selfie and ID capture steps, document scanners, and QR scanners. The web page sees your uploaded image as a camera named **LambdaTest Injected Camera**, instead of the real device camera.

You use the same media upload, the same `enableImageInjection` and `media` capabilities, and the same `lambda-image-injection` hook as native app image injection. No new capabilities or SDK are required.

:::note Enablement Required
Image injection for mobile browsers and in-app web pages is enabled per organization. If your web session with `enableImageInjection` is refused, the feature is not yet switched on for your account. Native app image injection is not affected either way.

To unlock this feature, please contact your <BrandName /> support representative, reach out to our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**[24×7 Chat Support]**</span>, or email us at **support@testmuai.com**.
:::

### Supported browsers and surfaces

| Platform | Browser or surface | Automation | Notes |
|---|---|---|---|
| Android | **Chrome** | ✅ Web Automation | Chrome is used when `browserName` is omitted. |
| Android | **Web pages inside native apps** (KYC SDKs, hybrid apps) | ✅ App Automation | Use the native app image injection capabilities. |
| iOS | **Safari** | ✅ Web Automation | No setup needed. |
| iOS | **Chrome** | ❌ | iOS Chrome is not available for real device web automation. Use [manual Browser Testing](/support/docs/camera-image-injection-on-real-devices/#image-injection-in-real-device-browser-testing) instead. |
| Android | Other browsers (Samsung Internet, Firefox, and others) | ❌ | The session is refused. |
| iOS | Web pages inside iOS apps | ❌ | Not supported. |

:::warning note
- Available on **real devices only**. Virtual devices (emulators and simulators) are not supported.
- **Images only.** Video `media` is not supported for browser sessions or in-app web pages. Video injection for native apps is unchanged.
:::

### Step 1: Upload the image

Upload the image with the same cURL command as [Step 1 for app automation](#step-1-upload-image-to-testmu-ai). Note the `media_url` (for example `lt://MEDIA123456789123456789`) from the response.

### Step 2: Add the capabilities

| Capability | Type | Value | Description |
|---|---|---|---|
| `enableImageInjection` | Boolean | `true` | Required. Turns on image injection for the session. |
| `media` | String | `lt://MEDIA...` | The image the camera shows from the start of the session. Images only. |
| `browserName` | String | Android: `Chrome`, iOS: `Safari` | Optional. Any other browser is refused with `enableImageInjection capability is not supported with browserName "<name>"`. |

<Tabs className="docs__val">

<TabItem value="ios-safari" label="iOS Safari" default>

  <div className="lambdatest__codeblock">
  <CodeBlock className="language-python">
  {`caps = {
    "browserName": "Safari",
    "platformName": "ios",
    "lt:options": {
        "isRealMobile": True,
        "deviceName": "iPhone 15",
        "platformVersion": "18",
        "enableImageInjection": True,
        "media": "lt://MEDIA123456789123456789",
    },
}`}
  </CodeBlock>
  </div>
</TabItem>

<TabItem value="android-chrome" label="Android Chrome">

  <div className="lambdatest__codeblock">
  <CodeBlock className="language-python">
  {`caps = {
    "browserName": "Chrome",
    "platformName": "android",
    "lt:options": {
        "isRealMobile": True,
        "deviceName": "Galaxy S24",
        "platformVersion": "14",
        "enableImageInjection": True,
        "media": "lt://MEDIA123456789123456789",
    },
}`}
  </CodeBlock>
  </div>
</TabItem>

<TabItem value="android-in-app" label="Android in-app web page">

  <div className="lambdatest__codeblock">
  <CodeBlock className="language-python">
  {`caps = {
    "platformName": "android",
    "lt:options": {
        "isRealMobile": True,
        "deviceName": "Galaxy S24",
        "platformVersion": "14",
        "app": "lt://APP123456789123456789",
        "enableImageInjection": True,
        "media": "lt://MEDIA123456789123456789",
    },
}`}
  </CodeBlock>
  </div>
</TabItem>
</Tabs>

For web pages inside Android apps, use the same capabilities as native app image injection. Camera steps on web pages inside the app get the injected image too.

### Step 3: Swap the image during the test

Call the `lambda-image-injection` hook with another `media_url`. The new image replaces the camera picture on the open page live, without a page reload. For example, inject the front of an ID, then the back, then a selfie.

<div className="lambdatest__codeblock">
<CodeBlock className="language-python">
{`driver.execute_script("lambda-image-injection=lt://MEDIA123456789123456789")`}
</CodeBlock>
</div>

- The image persists across navigation and new pages. The camera always shows the **latest** injected image.
- On **iOS Safari**, if no open page can take the image, the hook returns an error to your test instead of reporting success.
- Each hook call appears in the session's command logs with the media ID and its result.

### What to expect

- **Image fit:** the whole image is shown, not cropped, in the page's orientation. Empty space is padded. For face or liveness steps, use a tightly cropped portrait image so the face fills the frame.
- **Permission prompt:** the camera permission prompt usually does not appear while injection is on.
- **Android in-app web pages:** until the first image is set, the page shows the real camera. The first injection switches it to the image live.
- **iOS Safari, camera opened on page load:** on pages that open the camera as soon as they load, the real camera starts first and then switches to your image. The page shows the image, but the iPhone's camera-in-use indicator stays on.
- **iOS Safari, Appium logs:** a short `execute` call appears in the logs every 2 seconds. It keeps the image on new pages and is expected.

### Limitations

| Limitation | What you see | Workaround |
|---|---|---|
| Android apps uploaded before this feature was released | Camera steps on web pages inside the app show the real camera. | Upload the app again. |
| Espresso tests (app and test APK) | The run can crash at start if the app and test APK were uploaded at different times around the release. | Upload **both** the app and the test APK again. |
| Camera inside a cross-site iframe | Not supported on Android Chrome. Not verified on iOS. | Open the camera step in the top-level page where possible. |
| KYC SDKs with anti-injection checks | Some SDKs keep using the real camera or flag injected images. | Contact support with the SDK name and version. |
