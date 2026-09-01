# Inside TestMu AI App Automation Dashboard

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

You can view your App automated test results on TestMu AI App Automation Dashboard. TestMu AI App Automation dashboard enables you to debug failed test sessions utilizing different test logs. The capabilities for a given test session may be specified in the test script and generated using the TestMu AI Capability Generator.

## Debugging Tests

TestMu AI allows you to debug and fix failed test cases using extensive test logs such as Appium logs, device logs, network logs, screenshots, and video logs.

1. **Device Logs**

Device logs allows you to capture system logs for Android and iOS apps. It allows the user to keep track of the application logs in case the application malfunctions.

Use the `devicelog` capability to enable the Device logs.

```java
capabilities.setCapability("devicelog", "true")
```

2. **Network Logs**

Network logs enables you to take screenshots of multiple network requests during testing and to monitor the performance of network requests and responses.

Use the `network` capability to enable the Network logs.

```java
capabilities.setCapability("network", "true")
```

3. **Appium Logs**

Appium logs allows you to capture the logs created by the Appium server during test execution, that include a comprehensive session log.

>**Note**: On TestMu AI platform, Appium logs are enabled by default.

4. **Visual Logs**

With Visual logs, you can capture the screenshots of the entire test session.

Use the `visual` capability to enable the Visual logs.

```java
capabilities.setCapability("visual", "true")
```

5. **Video Logs**

Visual logs enables you to record the video of the complete test session.

Use the `video` capability to enable the Video logs.

```java
capabilities.setCapability("video", "true")
```

## Muting Known-Broken Tests

If an Appium test is known to be broken or flaky, you can **mute** it instead of letting it fail the whole build. A muted test still runs on the device and still records its real result, but it is left out of the build's pass/fail verdict and summary counts.

Open the test's options menu on the dashboard and select **Mute Test...**. You can mute that single run, or mute the **combination** (test name, OS, OS version, device, and real vs. virtual device) so the mute is reapplied automatically on every future build until you unmute it. Muting works for both app and web flows on real and virtual devices, and needs no capability in your test script.

For the full workflow, matching rules, and limitations, see [Mute Test Scenarios](/support/docs/mute-test-scenarios/).

>In case you have any questions or need any additional information, drop them at our **24X7 Chat Support** or mail us directly at support@testmuai.com.
