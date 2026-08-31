# How to Upload Files and Media on TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Uploading files and media on TestMu AI pushes media and non-media files to cloud real devices during testing. The uploadMedia capability works across App and Browser automation, enriching test scenarios and letting you validate your application's functionality with realistic files.

**Supported on:** Real devices

## Objectives
By the end of this topic, you will be able to:

1. Use Upload File and Media feature in Manual App testing.
2. Use Upload File and Media feature in App Automation.
3. Use Upload File and Media feature in Browser (web) Automation.



## File Storage Paths on Devices

Where an uploaded file lands on the device depends on whether it is an **App** or **Browser** session. Everything else about the upload flow is identical.

| Category        | Platform | App session location                             | Browser session location                                        | File Type         |
|-----------------|----------|--------------------------------------------------|-----------------------------------------------------------------|-------------------|
| Media Files     | Android  | Default gallery app, `/sdcard/Pictures` / `/sdcard/Movies` | Downloads (reachable from the browser file picker)     | Images, Videos    |
|                 | iOS      | Camera Roll, `/private/var/mobile/Media/DCIM/`   | Photo Library (reachable from the native *Photo Library* picker) | Images, Videos    |
| Non-Media Files | Android  | Default Downloads folder of the device           | Downloads (reachable from the browser file picker)              | Files             |
|                 | iOS      | App’s directory: Files app → On My iPhone → Your app's directory | Files app → On My iPhone → **Chrome** (even in Safari) | Files             |

### Supported File Types

TestMu AI supports various file types for upload, ensuring flexibility in your testing scenarios. Below are the supported file types:

- **Images**: JPG, JPEG, PNG, GIF, BMP (Maximum size: 10 MB)
- **Videos**: MP4  (Maximum size: 50 MB)
- **Files**: XLS, XLSX, DOC, DOCX, PDF, CSV, TXT, CRT, CER, GED, GPX, XML, PBIX, ZIP, JSON (Maximum size: 15 MB)

## Upload File and Media feature in App & Browser Automation

This section provides a comprehensive guide on leveraging this feature within automation tests. The steps are identical for **app automation** and **browser (web) automation** on real devices. It comprises two fundamental steps:

- Uploading the files and obtaining the `media_url`.
- Using `media_url` into your tests using `uploadMedia` capability.

### Step 1 : Uploading the files on TestMu AI Cloud

#### Using REST API

You can use the following curl command to upload any file `media` and `non-media` from your system to the TestMu AI cloud.



{`curl --user "${YOUR_LAMBDATEST_USERNAME()}:${YOUR_LAMBDATEST_ACCESS_KEY()}" -X POST "https://api.lambdatest.com/mfs/v1.0/media/upload" -F "media_file=@"/Users/macuser/Downloads/image.jpeg"" -F "type=image" -F "custom_id=SampleImage"`
}



**Request Parameters**
- `media_file`: This parameter denotes the media file to be uploaded from your local.
- `type`: This parameter denotes file type out of image,video and doc.
- `custom_id`: This parameter specifies a custom identifier for the media file.

Below is a sample response demonstrating the return of the `media_url` parameter value:

```bash
{
"media_url": "lt://MEDIAb48ab11c599944ee9dcd26b3e2978d3c",
"name": "sample.csv",
"status": "success",
"custom_id": "Sample"
}
```
#### Using App Automation Interface

You can also utilize TestMu AI's user-friendly UI to upload the files on TestMu AI cloud and get the `media_url` using the upload button located at the top of the automation dashboard.



### Step 2 : Setting Capability in Your Test Script

Once the files are uploaded to TestMu AI's cloud, seamlessly integrate files into your automation tests via the capability. Set the **uploadMedia** capability to the **media_url** parameter returned in the API response.





        {`DesiredCapabilities desiredCapabilities = new DesiredCapabilities();
desiredCapabilities.setCapability("uploadMedia", Arrays.asList("lt://MEDIAfcdb39b9602d474f825d6002416a3969", "lt://MEDIA8d13e569b3e140c18e82b066022518bd"));`}







        {`DesiredCapabilities desiredCapabilities = new DesiredCapabilities();
desiredCapabilities.setCapability("uploadMedia", ["lt://MEDIAfcdb39b9602d474f825d6002416a3969", "lt://MEDIA8d13e569b3e140c18e82b066022518bd"]);`}







        {`desired_capabilities = {
  "uploadMedia": ["lt://MEDIAf446d4170cd946aa9ec307d10cb679b9", "lt://MEDIA8d13e569b3e140c18e82b066022518bd"]
}`}







- Each automation session permits a maximum of five file uploads.
- The `uploadMedia` capability is set the same way for **app** and **browser (web)** automation.
- In manual testing, iOS app needs to installed first to upload non-media files.
- For non-media files, make sure your iOS app's Info.plist file includes the UIFileSharingEnabled and LSSupportsOpeningDocumentsInPlace keys set to true. This configuration is necessary to enable your app's folder accessibility within the Files app.



**Browser automation: differences to note**
- **iOS documents** uploaded in a browser session appear under **Chrome** in the Files app, even when testing in Safari. This is by design, as only Chrome on iOS exposes a browsable file container. Pick the file via *Choose File → On My iPhone → Chrome*.
- **iOS images and videos** appear in the **Photo Library** and are picked from the native *Photo Library* picker.
- On Android, all uploaded files land in **Downloads**, reachable from the browser file picker. Inputs using `accept="image/*"` may open the photo picker instead; the default file input works across the board.
