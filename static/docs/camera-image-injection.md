# Camera Image Injection

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Camera Image Injection feature allows you to test **image capturing, QR code scanning**, and **barcode scanning** functionalities in your app across **50,000+ real devices** on the TestMu AI Real Device Cloud platform.

This tool is ideal for testing features such as:

- Scanning QR codes linked to embedded URLs
- Check scanning
- Capturing profile photos
- Uploading images to your app

## How It Works
TestMu AI utilizes **Sensor Instrumentation** to integrate with various mobile sensors, including the camera. When you enable Image Injection for a session, TestMu AI injects its camera code module into your app through Sensor Instrumentation. This module then mocks or overrides the Android or iOS SDK used in your app.

### Key Features

- Compatible with 50,000+ real mobile devices
- Supports image capturing, QR code scanning, and barcode scanning
- Seamless integration with your existing app testing workflow

**note**
- For iOS apps signed with Enterprise Certificates, app resigning (a prerequisite for using the Image Injection tool) is not available.
- For virtual devices this feature is available on Android App Automation Testing.
- The app must be uploaded to TestMu AI as an .apk (android) or .ipa (iOS) file. TestMu AI process the uploaded app to enable Image Injection and other supported features.
- Image Injection is not enabled for apps installed directly from the Google Play Store or App Store because TestMu AI does not receive the APK/IPA for processing, the app is installed directly on the device during the live Manual or Automation Session.

## Supported Camera APIs

Below given is the list of Camera APIs which are supported by TestMu AI Image Injection tool. Please ensure that your app uses these APIs only to enable Image Injection.

    | Supported APIs |
    |----------------|
    | `didFinishPickingMediaWithInfo` API of `UIImagePickerController` iOS SDK class for capturing an image.  📕 For details, please check [Apple documentation](https://developer.apple.com/documentation/uikit/uiimagepickercontrollerdelegate/1619126-imagepickercontroller)|
    | `AVCapturePhoto` iOS SDK class for receiving captured photos from `AVCapturePhotoOutput` API. 📕 For details, please check [Apple Documentation](https://developer.apple.com/documentation/avfoundation/avcapturephoto).|
    | `AVMetadataMachineReadableCodeObject` is a subclass of `AVMetadataObject` iOS SDK class for scanning QR/Barcodes. 📕 For more details, please check [AVMetadataMachineReadableCodeObject Documentation](https://developer.apple.com/documentation/avfoundation/avmetadatamachinereadablecodeobject) |

    | Supported APIs |
    |----------------|
    | `CameraX` API is used. 📕 For details, please check [CameraX documentation](https://developer.android.com/training/camerax) |
    | `Camera` API is used. 📕 For details, please check [Camera documentation](https://developer.android.com/training/camera-deprecated)|
    | `Camera2` API is used. 📕 For details, please check [Camera2 documentation](https://developer.android.com/training/camera2)|
    | `ACTION_IMAGE_CAPTURE` is standard Intent action that can be sent to have the camera application capture an image and return it. 📕 For details, please check [MediaStore documentation](https://developer.android.com/reference/android/provider/MediaStore)|

## Image Injection in App Automation

This section explains how to use Image Injection with App automation. This section will also teach you how to use image injection for all the possible test cases for your app along with other useful information.

### Step 1: Upload image to TestMu AI

You can use the following curl command to upload any image of your choice to the TestMu AI cloud. Please note that we support only **JPG, JPEG, and PNG formats which can be 10 MB or less**.

{`curl -u "${ YOUR_LAMBDATEST_USERNAME()}:${ YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://mobile-mgm.lambdatest.com/mfs/v1.0/media/upload" -F "media_file=@"/Users/macuser/Downloads/image.jpeg"" -F "type="image"" -F "custom_id="SampleImage""`}

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

  {`desired_capabilities = {
    "enableImageInjection": True,
    "media": "lt://MEDIAf446d4170cd946aa9ec307d10cb679b9", #Add media_url here (optional)
  }`}

  {`DesiredCapabilities desiredCapabilities = new DesiredCapabilities();
desiredCapabilities.setCapability("enableImageInjection", "true");`}

### Step 3: Inject the image

Refer to the code snippets given below to upload the image with the action `ImageInjection`. Please make sure that the image needs to be injected before the camera is triggered in your application. This is due to the fact that the camera only captures the image injected at the last.

  {`driver.execute_script("lambda-image-injection=media_url") #Add media_url here`}

  {`driver.execute_script("lambda-image-injection=media_url") //Add media_url here`}

**Use Case**: This feature can be used when you want to test injecting more than one images in single test at different instances. The image injected through above process will replace the image which you put in previous steps.

### Step 4: Capture the desired image through camera

You need to first add a logic to inject the uploaded image in the script. Thereafter add the logic to click the camera button in the mobile app. This will show you the last injected image on your mobile app screen.

> 📕 Check the [documentation for Camera Image Injection](/support/docs/camera-image-injection-on-real-devices/) feature in Manual App Testing on Real devices

## Image Injection on Mobile Browsers and In-App Web Pages

Image injection also works on **web pages** that open the device camera, such as KYC selfie and ID capture steps, document scanners, and QR scanners. The web page sees your uploaded image as a camera named **LambdaTest Injected Camera**, instead of the real device camera.

You use the same media upload, the same `enableImageInjection` and `media` capabilities, and the same `lambda-image-injection` hook as native app image injection. No new capabilities or SDK are required.

**Enablement Required**
Image injection for mobile browsers and in-app web pages is enabled per organization. If your web session with `enableImageInjection` is refused, the feature is not yet switched on for your account. Native app image injection is not affected either way.

To unlock this feature, please contact your TestMu AI support representative, reach out to our **[24×7 Chat Support]**, or email us at **support@testmuai.com**.

### Supported browsers and surfaces

| Platform | Browser or surface | Automation | Notes |
|---|---|---|---|
| Android | **Chrome** | ✅ Web Automation | Chrome is used when `browserName` is omitted. |
| Android | **Web pages inside native apps** (KYC SDKs, hybrid apps) | ✅ App Automation | Use the native app image injection capabilities. |
| iOS | **Safari** | ✅ Web Automation | No setup needed. |
| iOS | **Chrome** | ❌ | iOS Chrome is not available for real device web automation. Use [manual Browser Testing](/support/docs/camera-image-injection-on-real-devices/#image-injection-in-real-device-browser-testing) instead. |
| Android | Other browsers (Samsung Internet, Firefox, and others) | ❌ | The session is refused. |
| iOS | Web pages inside iOS apps | ❌ | Not supported. |

**note**
- Available on **real devices only**. Virtual devices (emulators and simulators) are not supported.
- **Images only.** Video `media` is not supported for browser sessions or in-app web pages. Video injection for native apps is unchanged.

### Step 1: Upload the image

Upload the image with the same cURL command as [Step 1 for app automation](#step-1-upload-image-to-testmu-ai). Note the `media_url` (for example `lt://MEDIA123456789123456789`) from the response.

### Step 2: Add the capabilities

| Capability | Type | Value | Description |
|---|---|---|---|
| `enableImageInjection` | Boolean | `true` | Required. Turns on image injection for the session. |
| `media` | String | `lt://MEDIA...` | The image the camera shows from the start of the session. Images only. |
| `browserName` | String | Android: `Chrome`, iOS: `Safari` | Optional. Any other browser is refused with `enableImageInjection capability is not supported with browserName ""`. |

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

For web pages inside Android apps, use the same capabilities as native app image injection. Camera steps on web pages inside the app get the injected image too.

### Step 3: Swap the image during the test

Call the `lambda-image-injection` hook with another `media_url`. The new image replaces the camera picture on the open page live, without a page reload. For example, inject the front of an ID, then the back, then a selfie.

{`driver.execute_script("lambda-image-injection=lt://MEDIA123456789123456789")`}

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
