# Media Injection on Real Devices

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

TestMu AI's Media Injection empowers you to test various camera-related functionalities (Image Injection and Video Injection) of your app across a vast array of real mobile devices. This innovative feature supports image capture testing, QR code scanning verification and Barcode scanning assessment.

## Use Cases

- URL-embedded QR code scans
- Digital check processing
- Real-time video streaming and playback
- Video capture and upload workflows

## How It Works

The Image and Video Injection processes leverages **Sensor Instrumentation** technology. When activated for a test session, it injects TestMu AI's proprietary camera module into your application and emulates or supersedes the native Android/iOS camera SDK

### Key Features

- Extensive device compatibility (5000+ real devices)
- Comprehensive support for image and video based functionalities
- Effortless integration with existing test environments

**note**
- For iOS apps signed with Enterprise Certificates, app resigning (a prerequisite for using the Image Injection tool) is not available.


## Supported Camera APIs

Below given is the list of Camera APIs which are supported by TestMu AI Image Injection tool. Please ensure that your app uses these APIs only to enable Video Injection.






    | Supported APIs |
    |----------------|
    | `didFinishPickingMediaWithInfo` API of `UIImagePickerController` iOS SDK class for capturing an image.  📕 For details, please check [Apple documentation](https://developer.apple.com/documentation/uikit/uiimagepickercontrollerdelegate/1619126-imagepickercontroller)|
    | `AVCapturePhoto` iOS SDK class for receiving captured photos from `AVCapturePhotoOutput` API. 📕 For details, please check [Apple Documentation](https://developer.apple.com/documentation/avfoundation/avcapturephoto).  |







    | Supported APIs |
    |----------------|
    | `CameraX` API is used. 📕 For details, please check [CameraX documentation](https://developer.android.com/training/camerax) |
    | `Camera` API is used. 📕 For details, please check [Camera documentation] (https://developer.android.com/training/camera-deprecated)|
    | `Camera2` API is used. 📕 For details, please check [Camera2 documentation](https://developer.android.com/training/camera2)|
    | `ACTION_IMAGE_CAPTURE` is standard Intent action that can be sent to have the camera application capture an image and return it. 📕 For details, please check [MediaStore documentation](https://developer.android.com/reference/android/provider/MediaStore)|





## Supported Camera Video APIs

Below given is the list of Camera APIs which are supported by TestMu AI Video Injection tool. Please ensure that your app uses these APIs only to enable Image Injection.






    | Supported APIs |
    |----------------|
    | `captureOutput(_:didOutput:from:)` method of `AVCaptureVideoDataOutputSampleBufferDelegate` protocol. 📕 For details, please check [Apple Documentation](https://developer.apple.com/documentation/avfoundation/avcapturevideodataoutputsamplebufferdelegate) |








    | Supported APIs |
    |----------------|
    | `ImageReader` class for accessing video frames from the camera output. 📕 For details, please check [ImageReader documentation](https://developer.android.com/reference/android/media/ImageReader) |





## Image and Video Injection in Real Device App Testing

This feature helps you inject any video or image which you want your app to click or scan through the device camera. You just need to follow the steps given below:

**Step 1:** Click on the **Real Devices** > **App Testing**

**Step 2:** Select your required device and upload your application which supports the camera APIs listed above.

**Step 3:** Now, hover over your app and click on the **Settings** icon. Toggle the **Image Injection** and **Video Injection** option and click on **Save Changes** button. Click on **Start** to run your app on the selected device.



**Step 4:** You can see the video and image preview in the Media Injection section. You can
**delete**, **reupload** and **inject** the image or video from here.



**Step 5:** After the above config, click on the **Start** button to start the session. Now, go to **Device Controls** in the toolbar as shown below. Select Media Injection and click **Inject** to upload the desired video or image from your computer to the app.




**Step 6:** Now go to camera feature in your app, the camera pops up. When you click the image from your app, you will see a black image. Please proceed with the same by clicking on **Use Photo**.

**Step 7:** The black image is now replaced with an injected image or video.



The clicked image is black because the **Cameras** of TestMu AI Real Devices are taped for security reasons. Thus we inject image through **Sensor Instrumentation**.
