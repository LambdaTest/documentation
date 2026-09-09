# Group Folder Redirect for iOS Apps

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

TestMu AI now supports **Group Folder Redirect** for iOS apps during automation testing with Appium.
This feature ensures your app uses its **private container directory** instead of the **shared app group container**, which becomes inaccessible after **app resigning** on Real Devices.

**Availability**
This feature is being rolled out gradually. Please contact your TestMu AI support representative to get it enabled or you could reach out at our **[24X7 Chat Support]** or mail us directly at support@testmuai.com.

 ## Use Cases

- Ensure your app maintains **file system access** after being re-signed on Real Devices.
- Prevent issues when your app relies on the **shared App Group container**, which becomes inaccessible after resigning.
- Guarantee consistent **storage and retrieval of files** by using the app’s private container.

## Steps to Enable Group Folder Redirect

### 1. Upload Your Application
- Upload your iOS app to TestMu AI following standard procedures.
- Refer to the [**Upload your Application**](/support/docs/application-setup-via-api/#upload-your-application) documentation for detailed instructions.
- Note the **App ID** returned after uploading, you will use this in your automation scripts.

### 2. Configure Desired Capabilities
Include the `groupFolderRedirectEnabled` capability in your Appium desired capabilities and set it to `True`.

{`desired_caps = {
    "deviceName":"iPhone 16",
    "platformName":"iOS",
    "platformVersion":"18",
    "isRealMobile": True,
    "app":"YOUR_APP_URL",
    "build":"Sample Build",
    "name":"Sample Test",
    #highlight-next-line
    "groupFolderRedirectEnabled": True
}`}

### 3. Run Your Automation Test
Launch your Appium test, the app will automatically use its private container for all file operations without any code changes.

- TestMu AI launches an **instrumented version** of your app with **Group Folder Redirect** support.
- All file system operations that previously relied on the App Group container now use the **private container**.
- Your tests remain compatible and functional, even after app resigning.
