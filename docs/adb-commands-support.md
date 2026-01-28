---
id: adb-commands-support
title: ADB Commands Support
sidebar_label: ADB Commands Support
description: TestMu AI provides support for limited commands which can be executed in your app automation test scripts via javascript executors. 
keywords:
  - appium
  - java
  - testmu ai java
  - framework on testmu ai
  - testng
  - app testing
  - real devices
  - adb commands
url: https://www.testmuai.com/support/docs/adb-commands-support/
site_name: LambdaTest
slug: adb-commands-support/
canonical: https://www.testmuai.com/support/docs/adb-commands-support/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import RealDeviceTag from '../src/component/realDevice';
import VirtualDeviceTag from '../src/component/virtualDevice';
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
          "name": "ADB Commands Support",
          "item": `${BRAND_URL}/support/docs/adb-commands-support/`
        }]
      })
    }}
></script>
Android Debug Bridge (adb) is a versatile command-line tool that lets users communicate with a device. The adb command facilitates a variety of device actions, such as installing and debugging apps. 

<BrandName /> provides support for limited commands which can be executed in your app automation test scripts via javascript executors. The following command with the below mentioned parameters need to be used to execute adb command with <BrandName /> real device cloud.

```python
driver.execute_script("lambda-adb", params)
```

## Supported Commands

> **NOTE :** All these commands are supported on both Real and Virtual Devices except for the [**adb shell dumpsys**](/support/docs/adb-commands-support/#adb-shell-command) command, which is not supported for Virtual Device.

###  Swipe
**adb shell input swipe** <RealDeviceTag value="Real Device" /> <VirtualDeviceTag value="Virtual Device" />

  The command is used to generate a swipe gesture by defining the coordinates of starting and ending point of the swipe. The following is a Python sample of using the adb swipe command with <BrandName /> executor.

  ```python
  params = {"command":"input-swipe", "startX":200,"startY":900,"endX": 200,"endY":300}
  result = driver.execute_script("lambda-adb",params)
  ```

###  Clipboard

**adb shell input sendKeys** <RealDeviceTag value="Real Device" /> <VirtualDeviceTag value="Virtual Device" />

  The command is used to sends text as if typed at the keyboard in the real devices. The following is a Python sample of using the adb sendKeys command with <BrandName /> executor.

  ```python
  params = {"command":"input-text", "text":"this is my text"}
  result = driver.execute_script("lambda-adb",params)
  ```

###  Home Button

- **Navigate to the home screen** <RealDeviceTag value="Real Device" /> <VirtualDeviceTag value="Virtual Device" />

The command is used to navigate to the home screen of the device while running an app automation test script. The following is a Python sample of using the adb command to navigate to the home screen with <BrandName /> executor.

```python
params = {"command":"keyevent", "keycode":3}
result = driver.execute_script("lambda-adb",params)
```

### Enable/Disable auto rotate

- **enableAutoRotate** <RealDeviceTag value="Real Device" /> <VirtualDeviceTag value="Virtual Device" />

  The command is used to auto rotate the screen of the device while running an app automation test script. The following is a Python sample using the adb command to allow auto rotation with <BrandName /> executor.

  ```python
  params = {"command":"autorotate", "enableAutoRotate": True}
  result = driver.execute_script("lambda-adb",params)
  ```

### ADB Shell Command

<BrandName /> allows execution of ADB shell commands during automated test runs. 

#### ADB Shell Command - Public 

- **adb shell dumpsys** <RealDeviceTag value="Real Device" />

  The `adb shell dumpsys` command is used to obtain detailed information about installed packages on device. When you run this command, it provides a list of information for each package installed on the device. The output includes various details about each package.The following is a Python sample using the adb command:

  ```python
  params = {"command": "shell", "text": "dumpsys package <package_info>"}
  result = driver.execute_script("lambda-adb",params)
  ```
  Example -
   ```python
  params = {"command": "shell", "text": "dumpsys package dumpsys input_method"}
  result = driver.execute_script("lambda-adb",params)
  ```

- **adb shell getprop** <VirtualDeviceTag value="Virtual Device" /> <RealDeviceTag value="Real Device" />

  The command `adb shell getprop` is used to retrieve system properties from an Android device. When executed, it provides a list of key-value pairs representing various system settings and configurations. These properties include information about the device's build, hardware, and other system-related details. The output can be useful for debugging, development or understanding the device's current state. The following is a Python sample using the adb command:

  ```python
  params = {"command": "shell", "text": "getprop"}
  result = driver.execute_script("lambda-adb",params)
  ```
  Example -
  ```python
  params = {"command": "shell", "text": "getprop ro.build.version.security_patch"}
  result = driver.execute_script("lambda-adb",params)
  ```

- **adb shell cat /proc/version** <RealDeviceTag value="Real Device" />

  The `adb shell cat /proc/version` command outputs detailed information about the Linux kernel version running on the Android device, including the build date and compiler details. This information is essential for debugging compatibility issues and understanding the device’s operating system internals.The following is a Python sample using the adb command:

  ```python
  params = {"command": "shell", "text": "cat /proc/version"}
  result = driver.execute_script("lambda-adb",params)
  ```

#### ADB Shell Command - Private

- **adb shell pm** <RealDeviceTag value="Real Device" />

  The `adb shell pm` command enables management of Android apps programmatically. It supports installing, uninstalling, clearing data, and querying installed packages. The following is a Python sample using the adb command:

  ```python
  params = {"command": "shell", "text": "pm list packages"}
  result = driver.execute_script("lambda-adb",params)
  ```

- **adb shell rm** <RealDeviceTag value="Real Device" />

  The `adb shell rm` command is used to delete files or directories from the Android device's filesystem directly from your terminal or during automated test execution. It helps in clearing residual data, removing temporary test files, or resetting the test environment by deleting specific logs, APKs, screenshots, or other generated data. The following is a Python sample using the adb command:

  ```python
  params = {"command": "shell", "text": "rm /sdcard/Download/tempfile.txt"}
  result = driver.execute_script("lambda-adb",params)
  ```


- **adb shell mkdir** <RealDeviceTag value="Real Device" />

  The `adb shell mkdir` command is used to create new directories on an Android device’s filesystem. It is especially useful when preparing the device environment before automated test runs—ensuring that the required folder structure exists for storing screenshots, logs, or other test-related files. The following is a Python sample using the adb command:

  ```python
  params = {"command": "shell", "text": "mkdir /sdcard/TestResults"}
  result = driver.execute_script("lambda-adb",params)
  ```

- **adb shell screencap** <RealDeviceTag value="Real Device" />

  The `adb shell screencap` command captures the current screen on a real device and saves it as an image file. It’s useful for debugging UI issues or validating visual test results during automation. The following is a Python sample using the adb command:

  ```python
  params = {"command": "shell", "text": "screencap /sdcard/screen.png"}
  result = driver.execute_script("lambda-adb",params)
  ```

- **adb shell content** <RealDeviceTag value="Real Device" />

  The `adb shell content` command interacts with Android’s content providers to query, insert, update, or delete shared data like contacts, SMS, or calendar entries. It's commonly used in tests to read data, insert test entries, or reset content to a known state. The following is a Python sample using the adb command:

  ```python
  params = {"command": "shell", "text": "content query --uri content://contacts/phones"}
  result = driver.execute_script("lambda-adb",params)
  ```


- **adb shell am** <RealDeviceTag value="Real Device" />

  The `adb shell am command` uses the Activity Manager to control app components on a real device. It’s useful for launching activities, restarting apps, or sending broadcast intents—commonly done during tests to simulate user actions or reset app state. The following is a Python sample using the adb command:

  ```python
  params = {"command": "shell", "text": "am start -n com.example/.MainActivity"}
  result = driver.execute_script("lambda-adb",params)
  ```
- **adb shell dumpsys** <RealDeviceTag value="Real Device" />

  The `adb shell dumpsys` command is used to obtain detailed information about installed packages on device. When you run this command, it provides a list of information for each package installed on the device. The output includes various details about each package.The following is a Python sample using the adb command:

  ```python
  params = {"command": "shell", "text": "dumpsys package <package_info>"}
  result = driver.execute_script("lambda-adb",params)
  ```
  Example -
   ```python
  params = {"command": "shell", "text": "dumpsys package dumpsys input_method"}
  result = driver.execute_script("lambda-adb",params)
  ```

- **adb shell getprop** <RealDeviceTag value="Real Device" />

 The `adb shell getprop` command retrieves system-level properties in the form of key-value pairs. These properties include internal runtime details such as device model, manufacturer, OS version, network state, security patch level, and debug flags.  The following is a Python sample using the adb command:

  ```python
  params = {"command": "shell", "text": "getprop"}
  result = driver.execute_script("lambda-adb",params)
  ```


- **adb shell setprop** <RealDeviceTag value="Real Device" />

  The `adb shell setprop` command sets system properties on a real device, allowing you to modify device behavior. It’s often used to change debug flags, adjust logging levels, or simulate different configurations and network conditions during testing. The following is a Python sample using the adb command:

  ```python
  params = {"command": "shell", "text": "setprop debug.test true"}
  result = driver.execute_script("lambda-adb",params)
  ```
- **adb shell cat /proc/version** <RealDeviceTag value="Real Device" />

  The `adb shell cat /proc/version` command outputs detailed information about the Linux kernel version running on the Android device, including the build date and compiler details. This information is essential for debugging compatibility issues and understanding the device’s operating system internals.The following is a Python sample using the adb command:

  ```python
  params = {"command": "shell", "text": "cat /proc/version"}
  result = driver.execute_script("lambda-adb",params)
  ```

- **adb shell ls** <RealDeviceTag value="Real Device" />

  The `adb shell ls` command lists files and directories within a specified folder on the Android device. It is commonly used during automated tests to verify the presence and contents of files created, modified, or downloaded by the app. This helps ensure test artifacts are correctly generated and stored on the device. 
  
  #### These are the `ls` commands that can are enabled:

  - `ls /sdcard/Download` — Lists all files and directories inside the Downloads folder. Typically used to check if test downloads or app-generated files exist, and to validate proper file creation or cleanup.

  - `ls /sdcard/Pictures` — Lists all files in the Pictures directory, which usually stores photos and screenshots. Useful for confirming screenshots are saved correctly or for accessing images created during tests.

  - `ls /sdcard/Movies` — Lists media files in the Movies folder. Commonly used to validate recorded or downloaded videos and manage video artifacts from test executions.

  ```python
  # List files in the Downloads folder
  params = {"command": "shell", "text": "ls /sdcard/Download"}
  result = driver.execute_script("lambda-adb", params)
  # List files in the Pictures folder
  params = {"command": "shell", "text": "ls /sdcard/Pictures"}
  result = driver.execute_script("lambda-adb", params)
  # List files in the Movies folder
  params = {"command": "shell", "text": "ls /sdcard/Movies"}
  result = driver.execute_script("lambda-adb", params)
  ```

- **adb shell cat** <RealDeviceTag value="Real Device" />

  The `adb shell cat` command in Android's shell outputs a file’s contents to the console, allowing quick access to text or binary data on the device. Short for “concatenate,” it’s a common Linux command used to read files. In automation, cat helps inspect logs, reports, images, or videos without manual device access. Text files show readable content, while binary files output raw data that may need special handling. 
  
  #### These are the cat commands that can are enabled:
    - `cat /sdcard/Download/<filename>` — Outputs the contents of a file in the Downloads folder. Typically used to read logs, reports, or downloaded test artifacts.

    - `cat /sdcard/Pictures/<filename>` — Outputs the raw binary data of an image file in the Pictures folder, useful for verifying screenshots or photos.

    - `cat /sdcard/Movies/<filename>` — Outputs raw binary content of video files in the Movies folder, helpful for validating recorded or downloaded videos.

  ```python
  params = {"command": "shell", "text": "cat /proc/version"}
  result = driver.execute_script("lambda-adb", params)
  # Read a log or report from Downloads
  params = {"command": "shell", "text": "cat /sdcard/Download/test_log.txt"}
  result = driver.execute_script("lambda-adb", params)
  # Read an image file (raw binary) from Pictures
  params = {"command": "shell", "text": "cat /sdcard/Pictures/screenshot.png"}
  result = driver.execute_script("lambda-adb", params)
  # Read a video file (raw binary) from Movies
  params = {"command": "shell", "text": "cat /sdcard/Movies/test_video.mp4"}
  result = driver.execute_script("lambda-adb", params)
  ```
<img loading="lazy" src={require('../assets/images/appium-app/adb-commands.png').default} alt="Image" width="1444" height="703"  className="doc_img img_center"/>


### Additional ADB Shell Commands

- **adb shell ping -c 4 YOUR_URL** <VirtualDeviceTag value="Virtual Device" />

  This command is used to test the network connectivity between the Android device and a specified host, such as `google.com`. When executed it sends four ICMP request packets to the host and wait for responses. The output includes details such as packet transmission time, success rate and round-trip time, which helps diagnose network connectivity and latency issues. The following is a Python sample using the adb command:

  > **Note :** The **-c** is required in this command
  ```python
  params = {"command": "shell", "text": "ping -c 4 google.com"}
  result = driver.execute_script("lambda-adb",params)
  ```


### Enable/Disable Notification

- **enableNotification** <RealDeviceTag value="Real Device" /> <VirtualDeviceTag value="Virtual Device" />

  These commands enable or disable your app notifications on the device based on the value provided for `enableNotification`. **True** is used to enable notifications, while **False** is used to disable them. The following is a Python sample using the adb command with <BrandName /> executor:

  ```python
  params = {"command": "enable-notification", "enableNotification":True/False}
  result = driver.execute_script("lambda-adb",params)
  ```

  :::note
  - These commands are compatible with Android versions 13 and above.
  - When you disable app notification permissions using the command, the app go into the background. This behavior occurs due to limitations with ADB, and you need to reactivate the app through test script.
  :::

### Enable/Disable Battery Optimization

- **disableBatteryOptimization** <RealDeviceTag value="Real Device" /> <VirtualDeviceTag value="Virtual Device" />

  This command is used to enable or disable battery optimization for your app on the device. The following is a Python sample using the adb command to disable battery optimization with <BrandName /> executor:

  ```python
  params = {"command":"disable-battery-optimization", "disableBatteryOptimization":True/False}
  result = driver.execute_script("lambda-adb",params)
  ```

### Fixed-to-User Rotation

- **fixedToUserRotation** <RealDeviceTag value="Real Device" /> <VirtualDeviceTag value="Virtual Device" />

  This command serves to lock the screen rotation in alignment with the app's default behavior and user-defined settings. Below is a Python example utilizing the adb command to enforce fixed screen rotation with the <BrandName /> executor:

  ```python
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

### Enabling Automatic Timezone and Automatic Time Using ADB <VirtualDeviceTag value="Virtual Device App" />
By default, Automatic Timezone and Automatic Time settings are enabled on the device. These settings ensure that the device updates its time and timezone automatically based on network-provided information. If needed, you can manually enable these settings using ADB shell commands. To enable these settings via ADB, run the following commands:

- `settings put global auto_time_zone 1`: Enables Automatic Timezone, allowing the device to adjust its timezone based on network data.
- `settings put global auto_time 1`: Enables Automatic Time, ensuring that the device syncs time automatically from the network.

These commands help maintain accurate time and timezone settings without requiring manual intervention. If you're using Python with <BrandName />’s App Automation, you can execute these commands using the `execute_script` function:

```python
# Define ADB commands for enabling automatic time and timezone
params_timezone = {"command": "shell", "text": "settings put global auto_time_zone 1"}
params_time = {"command": "shell", "text": "settings put global auto_time 1"}

# Execute commands using LambdaTest's ADB execution method
result_timezone = driver.execute_script("lambda-adb", params_timezone)
result_time = driver.execute_script("lambda-adb", params_time)
```
This approach is particularly useful when testing applications that rely on correct time settings, ensuring they function properly across different time zones.

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={`${BRAND_URL}/support/docs/`}>
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
