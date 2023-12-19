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

---

###  Swipe
**adb shell input swipe**

The command is used to generate a swipe gesture by defining the coordinates of starting and ending point of the swipe. The following is a Python sample of using the adb swipe command with LambdaTest executor.

```bash
params = {"command":"input-swipe", "startX":200,"startY":900,"endX": 200,"endY":300}
result = driver.execute_script("lambda-adb",params)
```

###  Clipboard

**adb shell input sendKeys**

The command is used to sends text as if typed at the keyboard in the real devices. The following is a Python sample of using the adb sendKeys command with LambdaTest executor.

```bash
params = {"command":"input-text", "text":"this is my text"}
result = driver.execute_script("lambda-adb",params)
```

###  Home Button

- **Navigate to the home screen**

The command is used to navigate to the home screen of the device while running an app automation test script. The following is a Python sample of using the adb command to navigate to the home screen with LambdaTest executor.

```bash
params = {"command":"keyevent", "keycode":3}
result = driver.execute_script("lambda-adb",params)
```

### Enable/Disable auto rotate

- **enableAutoRotate**

The command is used to auto rotate the screen of the device while running an app automation test script. The following is a Python sample using the adb command to allow auto rotation with LambdaTest executor.

```bash
params = {"command":"autorotate", "enableAutoRotate", true}
result = driver.execute_script("lambda-adb",params)
```
### ADB Shell Command

- **adb shell dumpsys**

This command is used to obtain detailed information about installed packages on device. When you run this command, it provides a list of information for each package installed on the device. The output includes various details about each package.The following is a Python sample using the adb command:

```bash
params = {"command": "shell", "text": "dumpsys package <package_info>"}
result = driver.execute_script("lambda-adb",params)
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
      ADB Commands Support </span>
    </li>
  </ul>
</nav>
