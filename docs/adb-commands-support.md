---
id: adb-commands-support
title: ADB Commands Support
sidebar_label: ADB Commands Support
description: LambdaTest provides support for limited commands which can be executed in your app automation test scripts via javascript executors. 
keywords:
  - appium
  - java
  - lambdatest java
  - framework on lambdatest
  - testng
  - app testing
  - real devices
  - adb commands
image: /assets/images/og-images/appium-testing-og-image.jpg
url: https://www.lambdatest.com/support/docs/adb-commands-support/
site_name: LambdaTest
slug: adb-commands-support/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import RealDeviceTag from '../src/component/realDevice';
import VirtualDeviceTag from '../src/component/virtualDevice';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "ADB Commands Support",
          "item": "https://www.lambdatest.com/support/docs/adb-commands-support/"
        }]
      })
    }}
></script>
Android Debug Bridge (adb) is a versatile command-line tool that lets users communicate with a device. The adb command facilitates a variety of device actions, such as installing and debugging apps. 

LambdaTest provides support for limited commands which can be executed in your app automation test scripts via javascript executors. The following command with the below mentioned parameters need to be used to execute adb command with LambdaTest real device cloud.

```bash
driver.execute_script("lambda-adb", params)
```

## Supported Commands

> **NOTE :** All these commands are supported on both Real and Virtual Devices except for the [**adb shell dumpsys**](/support/docs/adb-commands-support/#adb-shell-command) command, which is not supported for Virtual Device.

###  Swipe
**adb shell input swipe** <RealDeviceTag value="Real Device" /> <VirtualDeviceTag value="Virtual Device" />

The command is used to generate a swipe gesture by defining the coordinates of starting and ending point of the swipe. The following is a Python sample of using the adb swipe command with LambdaTest executor.

```bash
params = {"command":"input-swipe", "startX":200,"startY":900,"endX": 200,"endY":300}
result = driver.execute_script("lambda-adb",params)
```

###  Clipboard

**adb shell input sendKeys** <RealDeviceTag value="Real Device" /> <VirtualDeviceTag value="Virtual Device" />

The command is used to sends text as if typed at the keyboard in the real devices. The following is a Python sample of using the adb sendKeys command with LambdaTest executor.

```bash
params = {"command":"input-text", "text":"this is my text"}
result = driver.execute_script("lambda-adb",params)
```

###  Home Button

- **Navigate to the home screen** <RealDeviceTag value="Real Device" /> <VirtualDeviceTag value="Virtual Device" />

The command is used to navigate to the home screen of the device while running an app automation test script. The following is a Python sample of using the adb command to navigate to the home screen with LambdaTest executor.

```bash
params = {"command":"keyevent", "keycode":3}
result = driver.execute_script("lambda-adb",params)
```

### Enable/Disable auto rotate

- **enableAutoRotate** <RealDeviceTag value="Real Device" /> <VirtualDeviceTag value="Virtual Device" />

The command is used to auto rotate the screen of the device while running an app automation test script. The following is a Python sample using the adb command to allow auto rotation with LambdaTest executor.

```bash
params = {"command":"autorotate", "enableAutoRotate": True}
result = driver.execute_script("lambda-adb",params)
```
### ADB Shell Command

- **adb shell dumpsys** <RealDeviceTag value="Real Device" />

This command is used to obtain detailed information about installed packages on device. When you run this command, it provides a list of information for each package installed on the device. The output includes various details about each package.The following is a Python sample using the adb command:

```bash
params = {"command": "shell", "text": "dumpsys package <package_info>"}
result = driver.execute_script("lambda-adb",params)
```

### Enable/Disable Notification

- **enableNotification** <RealDeviceTag value="Real Device" /> <VirtualDeviceTag value="Virtual Device" />

These commands enable or disable your app notifications on the device based on the value provided for `enableNotification`. **True** is used to enable notifications, while **False** is used to disable them.The following is a Python sample using the adb command with LambdaTest executor:

```bash
params = {"command": "enable-notification", "enableNotification":True/False}
result = driver.execute_script("lambda-adb",params)
```

:::note
- These commands are compatible with Android versions 13 and above.
- When you disable app notification permissions using the command, the app go into the background. This behavior occurs due to limitations with ADB, and you need to reactivate the app through test script.
:::

### Enable/Disable Battery Optimization

- **disableBatteryOptimization** <RealDeviceTag value="Real Device" /> <VirtualDeviceTag value="Virtual Device" />

This command is used to enable or disable battery optimization for your app on the device. The following is a Python sample using the adb command to disable battery optimization with LambdaTest executor:

```bash
params = {"command":"disable-battery-optimization", "disableBatteryOptimization":True/False}
result = driver.execute_script("lambda-adb",params)
```

### Fixed-to-User Rotation

- **fixedToUserRotation** <RealDeviceTag value="Real Device" /> <VirtualDeviceTag value="Virtual Device" />

This command serves to lock the screen rotation in alignment with the app's default behavior and user-defined settings. Below is a Python example utilizing the adb command to enforce fixed screen rotation with the LambdaTest executor:

```bash
params = {"command":"fixed-to-user-rotation", "fixedToUserRotation":True}
result = driver.execute_script("lambda-adb",params)
```

### Disabling Animations on Android Devices <RealDeviceTag value="Real Device" /> <VirtualDeviceTag value="Virtual Device" />
Disabling animations can enhance test execution speed by preventing unnecessary visual effects. The following commands are used to disable different types of animations:

- `adb shell settings put global animator_duration_scale 0`: Disables property animation effects, such as object transitions and transformations.
- `adb shell settings put global transition_animation_scale 0`: Disables window transition animations, making UI transitions instant.
- `adb shell settings put global window_animation_scale 0`: Disables activity window animations, eliminating fade-in or zoom-in effects.

These commands set the respective global animation scales to 0, effectively disabling animations.

```java
Map<String, String> params = Map.of("command", "shell", "text", "settings get global animator_duration_scale");
androidDriver.executeScript("lambda-adb", params);
```


<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com">
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com/support/docs/">
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
      ADB Commands Support 
      </span>
    </li>
  </ul>
</nav>