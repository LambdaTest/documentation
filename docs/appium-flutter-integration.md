---
id: appium-flutter-integration
title: Appium Flutter Integration Driver Testing
sidebar_label: Flutter Integration Driver
description: Guide to testing Flutter apps using Appium Flutter Integration Driver on TestMu AI real device cloud.
keywords:
  - flutter app testing
  - appium flutter integration
  - real device testing
  - testmu ai
  - flutter automation
  - mobile test automation
url: https://www.testmu.ai/support/docs/appium-flutter-integration
site_name: LambdaTest
slug: appium-flutter-integration
canonical: https://www.testmu.ai/support/docs/appium-flutter-integration/
---

import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import RealDeviceTag from '../src/component/realDevice';
import VirtualDeviceTag from '../src/component/virtualDevice';

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<RealDeviceTag value="Real Device" /> <VirtualDeviceTag value="Virtual Device" />
<BrandName /> supports testing Flutter applications on real Android and iOS devices using the [**Appium Flutter Integration Driver**](https://github.com/AppiumTestDistribution/appium-flutter-integration-driver/). This driver enables you to automate Flutter app testing in multiple programming languages, providing a powerful and flexible way to validate your Flutter apps on real devices in the cloud.

Testing Flutter apps requires embedding the **Flutter Integration Server** inside your app to enable communication between Appium and Flutter UI elements.

After preparing your Flutter app with this integration (refer to the setup documentation below), you can build, upload, and execute your tests on <BrandName /> real devices using the Appium Flutter Integration Driver.

---

## Native Flutter Integration Driver vs Appium Flutter Integration Driver 

| Feature / Use Case                                   | Native Flutter Driver | Appium Flutter Integration Driver |
|----------------------------------------------------|----------------------|----------------------------------|
| Writing tests in languages other than Dart          | No                   | Yes                              |
| Support for Flutter apps with embedded webviews or native views | No                   | Yes                              |
| Running tests on multiple devices simultaneously   | No                   | Yes                              |
| Compatible with device farms supporting Appium     | No                   | Yes                              |
| Interaction beyond Flutter context (e.g., OTP apps) | No                   | Yes                              |


---

## Why Use Appium Flutter Integration Driver?

- **Multi-language support:** Write tests in Java, Python, Ruby, JavaScript, and more.
- **Automatic UI synchronization:** Waits intelligently for UI elements and animations to complete.
- **Seamless context switching:** No manual switching between Flutter and native app contexts.
- **Powerful gesture support:** Supports long press, drag and drop, scroll to element, double-click, and more.
- **Element chaining:** Easily find child elements under specific parent widgets.
- **Real device cloud ready:** Supported on <BrandName /> real Android and iOS devices.

---

## Getting Your Flutter App Ready for Testing 

### 1. Add the Flutter Integration Server dependency

In your Flutter app’s `pubspec.yaml`, add:

```yaml
dev_dependencies:
  appium_flutter_server: 0.0.28
```

### 2. Create integration test files 

Create an `integration_test` folder at the root of your Flutter project. Inside it, create `appium_test.dart` with:

```dart
import 'package:appium_flutter_server/appium_flutter_server.dart';
import 'package:your_app_package/main.dart'; // Replace with your app's main.dart import

void main() {
  initializeTest(app: const MyApp());
}
```

Or with setup callback:

```dart
import 'package:your_app_package/main.dart' as app;

void main() {
  initializeTest(
    callback: (WidgetTester tester) async {
      // Add prerequisite setup here
      await tester.pumpWidget(const app.MyApp());
    },
  );
}
```

### 3. Build your Flutter app with integration test

<Tabs>
  <TabItem value="android" label="Android" default>
    <CodeBlock className="language-bash">
{`./gradlew app:assembleDebug -Ptarget=$(pwd)/../integration_test/appium_test.dart`}
    </CodeBlock>
  </TabItem>

  <TabItem value="ios-simulator" label="iOS Simulator">
    <CodeBlock className="language-bash">
{`flutter build ios integration_test/appium_test.dart --simulator`}
    </CodeBlock>
  </TabItem>

  <TabItem value="ios-device" label="iOS Real Device">
    <CodeBlock className="language-bash">
{`flutter build ipa --release integration_test/appium_test.dart`}
    </CodeBlock>
  </TabItem>
</Tabs>

---

## Uploading Your Flutter App to <BrandName />



- For detailed instructions on how to upload your application to <BrandName />, please refer to our comprehensive guide.
- Visit the [**Upload your Application**](/support/docs/application-setup-via-api/#upload-your-application) documentation to learn more.
- Use the returned **App ID** from above step in your automation scripts.



---

## Sample Desired Capabilities <RealDeviceTag value="Real Device" /> <VirtualDeviceTag value="Virtual Device" />

<Tabs>
  <TabItem value="android" label="Android" default>
    <CodeBlock className="language-java">
{`desired_caps = {
    "deviceName":"Galaxy S20",
    "platformName":"Android",
    "platformVersion":"15",
    "isRealMobile":True,  // Use False for Virtual Devices
    "app":"YOUR_APP_URL",
    "build":"Sample Build",
    "name":"Sample Test",
    "automationName": "FlutterIntegration" #Using Flutter Integration Driver
}

`}
    </CodeBlock>
  </TabItem>

  <TabItem value="ios" label="iOS">
    <CodeBlock className="language-java">
{`desired_caps = {
    "deviceName":"iPhone 16",
    "platformName":"ios",
    "platformVersion":"18",
    "isRealMobile":True, // Use False for Virtual Devices
    "app":"YOUR_APP_URL",
    "build":"Sample Build",
    "name":"Sample Test",
    "automationName": "FlutterIntegration" #Using Flutter Integration Driver
}

`}
    </CodeBlock>
  </TabItem>
</Tabs>

:::tip

- You must add the generated **APP_URL** to the `app` capability in the config file.
- You must set **isRealMobile** capability to `False` in the config file to run on **Virtual Devices**
- You can generate capabilities for your test requirements with the help of our inbuilt [**Capabilities Generator tool**](https://www.lambdatest.com/capabilities-generator/).For more details, please refer to our guide on [**Desired Capabilities in Appium**](/support/docs/desired-capabilities-in-appium/).

:::

