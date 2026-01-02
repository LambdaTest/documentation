---
id: virtual-device-flutter-apps
title: How to test flutter apps using Appium framework on Virtual Devices
hide_title: false
sidebar_label: Flutter Apps
description: Learn how to test flutter apps for Appium testing across 3000+ real Android and iOS devices for virtual devices
keywords:
- how to test flutter apps
- how to test flutter apps on android
- test flutter apps on ios
- test flutter apps on iphone
- flutter test app
url: https://www.testmu.ai/support/docs/virtual-device-flutter-apps
site_name: LambdaTest
slug: virtual-device-flutter-apps
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Virtual Devices Flutter Apps With Appium",
          "item": `${BRAND_URL}/support/docs/virtual-device-flutter-apps/`
        }]
      })
    }}
></script>
Google's Flutter is an open-source tool for developing native mobile apps. It enables developers to create cross-platform apps for both Android and iOS using a single codebase and programming language.

You can now test Flutter apps on the <BrandName /> Appium testing platform across 3000+ real Android and iOS devices. <BrandName /> supports Appium's Flutter driver that lets you test Flutter apps using the Appium framework. To test Flutter apps, you will need to upload apps on <BrandName /> cloud servers and then run your automated tests. 

## Prerequisites

Before automating Flutter apps using Appium, make sure you have the following things configured.
- Your Flutter App must be compiled in `debug` or `profile` mode, as  Appium Flutter Driver does not support Flutter App running in release mode. 
- Add the below dependencies in Flutter app's `pubspec.yaml`

```yaml
dev_dependencies:
  test: Demo
  flutter_test:
    sdk: flutter
  flutter_driver:
    sdk: flutter
```

- In `main.dart` file, ensure the app has `enableFlutterDriverExtension()` enabled before `runApp`.

```javascript
void main() {
  enableFlutterDriverExtension();
  init();
  runApp(MyApp());
}
 ```

- Set the `automationName` capability to `flutter` in Appium desired capabilities.

```javascript
desiredCapabilities.setCapability("automationName", "flutter");
```

Shown below is the test script for automating Flutter apps on <BrandName /> platform.

```javascript
import os

from appium.webdriver import Remote
from appium_flutter_finder.flutter_finder import FlutterElement, FlutterFinder

driver = Remote('http://LT_USERNAME:LT_ACCESS_KEY@mobile-hub.lambdatest.com/wd/hub/', dict(
  platformName='Android',
  automationName='flutter',
  platformVersion='11',
  deviceName='Google Pixel 4',
  app='<App URL>',
  isRealMobile=false
))

finder = FlutterFinder()

text_finder = finder.by_text('You have pushed the button this many times:')
text_element = FlutterElement(driver, text_finder)
print(text_element.text)

key_finder = finder.by_value_key("next_route_key")
goto_next_route_element = FlutterElement(driver, key_finder)
print(goto_next_route_element.text)
goto_next_route_element.click()

back_finder = finder.page_back()
back_element = FlutterElement(driver, back_finder)
back_element.click()

tooltip_finder = finder.by_tooltip("Increment")
driver.execute_script('flutter:waitFor', tooltip_finder, 100)

floating_button_element = FlutterElement(driver, tooltip_finder)
floating_button_element.click()

counter_finder = finder.by_value_key("counter")
counter_element = FlutterElement(driver, counter_finder)
print(counter_element.text)
```
