# How to Test Flutter Apps on Virtual Devices on TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Testing Flutter apps on TestMu AI runs Appium's Flutter driver across 5000+ real Android and iOS devices, letting you automate cross-platform apps from a single codebase. Compile your app in debug or profile mode, upload it, and execute automated tests.

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

Shown below is the test script for automating Flutter apps on TestMu AI platform.

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
