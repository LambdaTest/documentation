---
id: real-device-adb-shell
title: ADB Shell
hide_title: true
sidebar_label: ADB Shell
description: ADB shell support in LambdaTest for direct command execution on Android devices during manual testing.
keywords:
- real device app testing 
- adb shell
- adb command

url: https://www.lambdatest.com/support/docs/real-device-adb-shell/
site_name: LambdaTest
slug: real-device-adb-shell/
---

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "LambdaTest",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Getting Started with Real Device App Testing",
          "item": "https://www.lambdatest.com/support/docs/real-device-adb-shell/"
        }]
      })
    }}
></script>

# Execute ADB shell commands

The integration of Android Debug Bridge (ADB) shell support within the LambdaTest Manual Testing platform for app testing on Android devices empowers users to run supported ADB shell commands directly on devices during manual testing sessions, receiving instant output. This feature addresses the challenge of remote device communication, enabling users to interact with devices as if they were physically present.

---

## Benefits

- Unlock new testing scenarios that require direct device interaction, simplifying the development process.
- Speed up testing by easily accessing native device capabilities and APIs, reducing reliance on framework-specific commands.
- Gain better control over device configurations to execute specific commands tailored to your test cases.


## Accessing ADB Shell Terminal

**Step 1:** Login to your LambdaTest account and navigate to **App Testing** under **Real Device** from the left sidebar.

**Step 2:** Choose the OS version (Android), select your application and device from the device listing, and start your test session.

**Step 3:** Access **ADB Shell**
- Once in the test session, find the **ADB Shell** icon on the top bar.
- Click the ADB Shell icon to open the terminal and start running supported ADB shell commands.
- With a single click, you can clear the terminal content or download the terminal output as a `.txt` file.

<img loading="lazy" src={require('../assets/images/real-device-app-testing/adbmanual.webp').default} alt="ADB Shell Access"  className="doc_img" width="1366" height="629"/>

## Supported ADB Commands
To ensure security and compatibility, we have a list of ADB commands that can be executed within our Real Device Cloud. Please refer to the following list of supported commands:

| **ADB Command**                                  | **Description**                                                  |
|--------------------------------------------------|------------------------------------------------------------------|
| am start                                         | Launches an activity specified by an intent.                     |
| am force-stop                                    | Stops the specified application package.   |
| pm clear                                         | Deletes all data associated with a package. |
| input                                            | Sends touch or key events to the device.                         |
| ls                                               | Lists directory contents on the device.                          |
| echo                                             | Displays messages on the device.                                 |
| grep                                             | Searches for patterns in files on the device.                    |
| pwd                                              | Prints the current working directory on the device.              |
| dumpsys                                          | Dumps system information from the device.                        |
| getprop                                          | Retrieves device properties.                                     |
| cat                                         | Helps in compatibility checks, debugging and system diagnostics.                  |



> If the command you require is not listed, please reach out at our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>24x7 Chat Support</span> or you could also mail us at support@lambdatest.com.





<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href="https://www.lambdatest.com">
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
        Real Device App Testing
      </span>
    </li>
  </ul>
</nav>
