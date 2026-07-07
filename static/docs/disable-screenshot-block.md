# Disable Screenshot Block for Android

## Introduction

If your app doesn't allow screenshot to be taken of the app and you want to test your app's performance without any hindrance, you can use this tool. You can test your apps with this tool in our app-live tests and app automation tests.
This document details all you need to know about the tool.

TestMu AI now supports disable screenshot block for Android real devices. This new feature allows you to test your application on our platform without any issue of video coming black in between or screenshots of the app not getting captured(due to app's properties)

**OS Version:** Android Disable Screenshot Unblock is supported for all os versions.

This feature is in the **beta phase**. To enable it, please reach out to our 24x7 Chat Support by clicking on  **24x7 Chat Support** or you could also mail us at [support@testmuai.com](https://support.lambdatest.com/).

## Disable Screenshot Block in Real Time App Testing

For manual testing, **disable screenshot block** toggle will be seen as soon as the user uploads any app.

After uploading your application, please wait for 3-5 minutes(depends of app file size) for the application file patching process to complete.

## Disable Screenshot Block in App Automation

For app automation also, **disable screenshot block** is enabled as soon as the user uploads any app.

### Using desired Capabilities

You can use the appium capability to turn the **Disable Screenshot Block** on in your application. Just add `"enableScreenshotUnblock": true` in the desired capabilities while writing the automation script.

```java
DesiredCapabilities capabilities = new DesiredCapabilities();
capabilities.setCapability("build","Java TestNG Android");
capabilities.setCapability("name",platform+" "+device+" "+version);
capabilities.setCapability("deviceName", device);
capabilities.setCapability("platformVersion",version);
capabilities.setCapability("platformName", platform);
capabilities.setCapability("isRealMobile", true);
capabilities.setCapability("app", "APP_URL"); //Enter your app (.apk) url
capabilities.setCapability("deviceOrientation", "PORTRAIT");
capabilities.setCapability("console", true);
capabilities.setCapability("network", false);
capabilities.setCapability("visual", true);
capabilities.setCapability("devicelog", true);
capabilities.setCapability("enableScreenshotUnblock",true); // for screenshot unblock
```

## Important Notes

**Disable Screenshot Block** will only work for applications that were uploaded after 28th June 2023.

> Got any questions?
> Please reach out at our **24x7 Chat Support** or you could also mail us at [support@testmuai.com](https://support.lambdatest.com/).
