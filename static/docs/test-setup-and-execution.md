# Test Setup And Execution

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

After uploading the app to the TestMu AI cloud through REST API, you need to configure different capabilities for the uploaded app in your Appium test scripts. After that, you can run app automation tests using Appium on TestMu AI.

The **TestMu AI Desired Capabilities Generator** will help in auto-generating the capabilities class required to run your app automation scripts on the TestMu AI Appium Grid. The Desired capabilities generator will generate the entire code of the capabilities class for the selected setups and programming languages.

This documentation guides you how to configure the desired capability for app, device, group tests, debugging, and mark tests passed/failed etc.

## Configure App

In order to fetch and install apps on TestMu AI cloud, you will need to use the `app` capability to connect with your uploaded apps.

| Key | Values | Description | Desired Capability |
| -------- | -----| ------------ | --------------|
| app   |  `lt://APP10051525539885437397`  ``  `filename=` |    Configure the app to test on. Use the app ID, the custom ID that you set at upload, or the file name of the uploaded app.    | `"app":"lt://APP10051525539885437397"`  `"app":"filename=MyApp.apk"`        |

### Use the File Name Instead of the App ID

You can start a test with the file name of an uploaded app instead of its app ID (`lt://APP…`). This is useful when you upload your builds from a CI pipeline and do not want to read the app ID from the upload response, or when one team uploads the builds and another team runs the tests. Because the file name stays the same for each new build, your test configuration does not change.

Set the `app` capability to `filename=`, where `` is the **File Name** that App Manager shows for the app.

```json
{
  "lt:options": {
    "platformName": "android",
    "deviceName": "Pixel 8",
    "isRealMobile": true,
    "app": "filename=MyApp.apk"
  }
}
```

- The value works in both `lt:options.app` and `appium:app`.
- It works on real devices and virtual devices (emulators and simulators), for Android and iOS app automation.
- You can also pass `filename=` to the [`lambda-install-app` hook](/support/docs/appium-install-uninstall-testmu-hooks/) and to the Appium `installApp` command to install an app in the middle of a session. This is not available on iOS simulators, where you must set the app in the `app` capability at the start of the session.

#### How the App Is Selected

- **The latest upload is used.** File names are not unique. If more than one upload has the same file name, TestMu AI installs the most recent one. You cannot select an older version with this capability; use the app ID for that.
- **There is no fallback to an older build.** If the latest upload is not ready, is corrupt, or has expired, the session fails instead of running against an older build.
- **Use the File Name, not the App Name.** The value is matched against the File Name in App Manager (the original file name on your disk also works). The app label shown below the app icon does not work.
- **Include the extension.** Use `MyApp.apk`, not `MyApp`.
- **The match is case-sensitive.** Use the same upper case and lower case letters as the File Name in App Manager.
- **The app must be visible to you.** You can use apps that you uploaded and apps that are shared with your team.

- Use file names that contain only Latin letters, digits, `.`, `_` and `-`.
- If you upload a file that is identical to an earlier upload, TestMu AI keeps the earlier upload record. To make sure a build is picked as the latest one, upload a file with new contents.

#### Errors

TestMu AI resolves the file name before it assigns a device, so an incorrect name fails quickly and does not use device time.

| Condition | Result |
| --- | --- |
| No app has this file name | The session fails with: `No app found with file name ''. Please check the File Name in App Manager and make sure the app is shared with you` |
| The latest app with this name is for a different platform | The session fails, and the message tells you which platform the app is for. |
| The latest upload is not ready, is corrupt, or has expired | The session fails. An older build is not used. |
| The name is empty (`filename=`) | The session fails. |

## Select Device And OS

To perform Appium mobile testing on real Android and iOS devices, you need to define the `deviceName`, `platformName`, and `platformVersion` capabilities in your Appium automation scripts.

| Key | Values | Description | Desired Capability |
| -------- | -----| ------------ | --------------|
| deviceName   |  Galaxy Tab S4 |   Specify the device to test on    | `capabilities.setCapability (deviceName","Galaxy Tab S4)`  |
| platformName   |  Android |    Specify the platform name    | `capabilities.setCapability("platformName", "Android")` |
| platformVersion   |  10 |     Specify the platform version     | `capabilities.setCapability("platformVersion", "10")` |

## Group Tests

For better analysis, you can name your test cases and organize your builds by build name and project.  To organize Appium automated tests, you will need to use name, build and projectName capability.

| Key | Values | Description | Desired Capability |
| -------- | -----| ------------ | ----------------|
| build   |  5.1 |   Represent the build number for your test    |  `capabilities.setCapability("build", "5.1")`     |
| name   |  Demo |    Represents the name of a test   | `capabilities.setCapability("name", "Demo")` |
| projectName   |  Test1 |     Represent the name of a project     | `capabilities.setCapability("projectName", "Test1")` |

## Debugging

By specifying the capabilities for the debugging tools, you can debug and fix your failed Appium test sessions using Appium logs, device logs, network logs, crash logs, screenshots, video logs, or app profiling data.

>**Note**: Appium logs are enabled by default.

| Key | Values | Description | Desired Capability |
| -------- | -----| ------------ | --------------|
| network   | true/false |   Enable network logs    |  `capabilities.setCapability("network", "true")` |
| devicelog  | true/false |   Enable device logs  | `capabilities.setCapability("devicelog", "true")` |
| visual  | true/false |  Enable Visual logs to capture screenshots.  | `capabilities.setCapability("visual", "true")` |
| video   |  true/false |    Enable Video recording of the entire screen     | `capabilities.setCapability("video", "true")` |

## Viewing Appium Test Results

You can view the results of your app automation tests on the TestMu AI App Automation dashboard and using the REST API. Configure **build** and **project** capabilities to segregate your test sessions into distinct builds and projects.

| Key | Values | Description | Desired Capability |
| -------- | -----| ------------ | --------------|
| build  | My_Test |   Name of the build to group tests    |  `capabilities.setCapability("build", "My_Test")` |
| project | Sprint |   Name of the project to group tests  | `capabilities.setCapability("project", "Sprint")` |

## Mark Tests As Passed Or Failed

While performing mobile app automation on TestMu AI Appium Grid, you may encounter a scenario in which a test that you labeled as failed in your local instance turns out to be performed successfully on TestMu AI. It's crucial to mark an automated test as **Passed** or **Failed** based on your testing requirements for validating expected behavior.

By default, the Status of each test that runs successfully is marked as **Completed**, and if there are any issues, the Status is marked as **Error**.

You can mark a test status as failed/passed using JavaScript executer on TestMu AI.

1. To mark test status as **failed**.

`driver.executeScript('lambda-status=failed')`

2. To mark test status as **passed**.

`driver.executeScript('lambda-status=passed')`

>In case you have any questions or need any additional information, drop them at our **24X7 Chat Support** or mail us directly at support@testmuai.com.
