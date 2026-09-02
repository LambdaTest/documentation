# Supported Appium Versions and Plugins on TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Supported Appium versions and plugins on TestMu AI let you pick the exact Appium version for tests on real and virtual devices and extend Appium with optional plugins. Listed here are supported versions per platform, driver versions, and supported plugins.

**Supported on:** Real &amp; Virtual devices

- We also provide Support for Appium 3.0.2 on following versions
  - **Android Devices:** 13, 15, 16
  - **iOS Devices:** 16, 17, 18, 26

## Appium Version Configuration for Real Devices

To configure the Appium version for your tests on TestMu AI, use the `appiumVersion` capability in your test scripts. Below is a table of supported Appium versions for different platforms:

| Platform Versions | Supported Versions | Default Version | Latest Version |
|-------------------|--------------------|-----------------|----------------|
| Android (All) | 1.21.0, 1.22.0, 1.22.3, 2.0.0, 2.1.3, 2.2.1, 2.3.0, 2.4.1, 2.5.4, 2.6.0, 2.10.3, 2.11.2, 2.11.4, 2.12.1, 3.0.2 | 2.2.1 | 2.3.0 |
| iOS (12, 13, 14) | 1.22.3, 2.0.0, 2.1.3, 2.2.1 | 2.2.1 | 2.2.1 |
| iOS (15, 16, 17, 18) | 1.22.3, 2.0.0, 2.1.3, 2.2.1, 2.3.0, 2.4.1, 2.5.4, 2.6.0, 2.10.3, 2.11.2, 2.11.4, 2.12.1, 3.0.2 | 2.2.1 | 2.3.0 |
| fireos | 1.21.0, 1.22.0, 1.22.3, 2.0.0, 2.1.3, 2.2.1, 2.3.0 | 2.2.1 | 2.3.0 |
| tvos | 1.22.3, 2.2.1 | 1.22.3 | 1.22.3 |

**Java Example:**
```java
// Java code for configuring Appium version in tests on LambdaTest
DesiredCapabilities capabilities = new DesiredCapabilities();
capabilities.setCapability("appiumVersion", "2.2.1");
capabilities.setCapability("platformName", "ios");
// Add other capabilities as needed
```

**Latest Version**: We update the `latest` version for all platforms, including Android and iOS, to stay aligned with the latest stable releases of Appium. This ensures users always have access to the most current and reliable versions.To use the latest version, pass `latest` in **appiumVersion** capability.

**Default Version**: A new `default` version is supported when the user does not explicitly specify a appium version or pass `default` in **appiumVersion** capability.

## Supported Driver Versions

Each Appium version maps to specific iOS and Android driver versions. Use the table below to confirm the driver versions bundled with your chosen Appium version:

| Appium Version | iOS Driver                     | Android Driver                        |
|----------------|--------------------------------|---------------------------------------|
| 1.22.0         | -                              | appium-uiautomator2-driver@1.69.0     |
| 1.21.0         | -                              | appium-uiautomator2-driver@1.65.0     |
| 1.22.3         | appium-xcuitest-driver@3.59.0  | appium-uiautomator2-driver@1.70.1     |
| 2.0.0          | appium-xcuitest-driver@4.32.9  | appium-uiautomator2-driver@2.27.0     |
| 2.1.3          | appium-xcuitest-driver@5.7.0   | appium-uiautomator2-driver@2.32.3     |
| 2.2.1          | appium-xcuitest-driver@5.7.0   | appium-uiautomator2-driver@2.32.3     |
| 2.3.0          | appium-xcuitest-driver@5.12.2  | appium-uiautomator2-driver@2.35.0     |
| 2.4.1          | appium-xcuitest-driver@5.12.2  | appium-uiautomator2-driver@2.35.0     |
| 2.5.4          | appium-xcuitest-driver@7.13.0  | appium-uiautomator2-driver@3.5.1      |
| 2.6.0          | appium-xcuitest-driver@7.13.0  | appium-uiautomator2-driver@3.5.1      |
| 2.10.3         | appium-xcuitest-driver@7.17.4  | appium-uiautomator2-driver@3.5.3      |
| 2.11.2         | appium-xcuitest-driver@7.23.1  | appium-uiautomator2-driver@3.7.2      |
| 2.11.4         | appium-xcuitest-driver@7.26.4  | appium-uiautomator2-driver@3.7.11     |
| 2.12.1         | appium-xcuitest-driver@7.28.3  | appium-uiautomator2-driver@3.8.0      |

- If a user passes any Appium version other than the mentioned versions, appropriate error will be thrown.
- For devices running iOS 17 and newer, it is recommended to use Appium versions `2.2.1` and `above` to ensure the best compatibility and performance.

## Appium Version Configuration for Virtual Devices

For virtual devices, the following Appium versions are supported per platform:

| Platform Versions | Supported Versions |
|-------------------|--------------------|
| Android | 1.21.0, 1.22.3, 2.0.0, 2.1.3, 2.16.2 |
| iOS |1.22.3, 2.0.0, 2.1.3, 2.16.2 |

## Supported Appium Plugins

Enhance your testing experience on TestMu AI by leveraging a variety of Appium plugins. Plugins offer various ways to extend or modify Appium's behavior. They are completely optional and are not needed for standard automation functionality, but you may find them useful for more specialized automation workflows.
By using these plugins, you can tailor your testing environment to better suit your project's specific needs, leading to more efficient and effective test automation.

Below is a list of the supported Appium plugins on TestMu AI:

| Plugin Name       |  Description                                                                                  | Example                    |
|-------------------|-------------------------------------------------------------------------------------------------------|---------------------------------------------------|
| `images`          | Enables image comparison features in tests. Allows for verification of visual elements through images. | "appiumPlugins": ["images"] |
| `element-wait`    | Provides enhanced wait capabilities for elements, allowing tests to wait for elements to be in a certain state.For further details, please check [this documentation](https://github.com/AppiumTestDistribution/appium-wait-plugin). | "appiumPlugins": ["element-wait"] |
| `gestures`        | Adds support for gesture-based interactions, enabling tests to perform complex gestures like swipe, pinch, and zoom. For further details, please check [this documentation](https://github.com/AppiumTestDistribution/appium-gestures-plugin). | "appiumPlugins": ["gestures"] |

**Python Example:**

```python
capabilities = {
"appiumVersion": "2.2.1",
"platformName": "iOS",
"appiumPlugins": ["images", "element-wait", "gestures"],
# Add other capabilities as needed
}
```

- Appium plugins are only supported with version 2.0.0 and above appium versions. Please ensure that the `appiumVersion` capability is set correctly to utilize these plugins.

## Next Steps

Continue with these related guides:

- [Run your first Appium test](/support/docs/getting-started-with-appium-testing/)
- [Appium automation capabilities](/support/docs/desired-capabilities-in-appium/)
- [Appium languages and frameworks](/support/docs/appium-agent-skills/#supported-languages-and-frameworks)
