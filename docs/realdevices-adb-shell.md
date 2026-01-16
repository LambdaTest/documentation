---
id: real-device-adb-shell
title: ADB Shell
hide_title: true
sidebar_label: ADB Shell
description: ADB shell support in TestMu AI for direct command execution on Android devices during manual testing.
keywords:
- real device app testing 
- adb shell
- adb command

url: https://www.testmu.ai/support/docs/real-device-adb-shell/
site_name: LambdaTest
slug: real-device-adb-shell
canonical: https://www.testmu.ai/support/docs/real-device-adb-shell/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "TestMu AI",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Getting Started with Real Device App Testing",
          "item": `${BRAND_URL}/support/docs/real-device-adb-shell/`
        }]
      })
    }}
></script>

# Execute ADB shell commands

The integration of Android Debug Bridge (ADB) shell support within the <BrandName /> Manual Testing platform for app testing on Android devices empowers users to run supported ADB shell commands directly on devices during manual testing sessions, receiving instant output. This feature addresses the challenge of remote device communication, enabling users to interact with devices as if they were physically present.

---

## Benefits

- Unlock new testing scenarios that require direct device interaction, simplifying the development process.
- Speed up testing by easily accessing native device capabilities and APIs, reducing reliance on framework-specific commands.
- Gain better control over device configurations to execute specific commands tailored to your test cases.


## Accessing ADB Shell Terminal

**Step 1:** Login to your <BrandName /> account and navigate to **App Testing** under **Real Device** from the left sidebar.

**Step 2:** Choose the OS version (Android), select your application and device from the device listing, and start your test session.

**Step 3:** Access **ADB Shell**
- Once in the test session, find the **ADB Shell** icon on the top bar.
- Click the ADB Shell icon to open the terminal and start running supported ADB shell commands.
- With a single click, you can clear the terminal content or download the terminal output as a `.txt` file.

<img loading="lazy" src={require('../assets/images/real-device-app-testing/adbmanual.webp').default} alt="ADB Shell Access"  className="doc_img" width="1366" height="629"/>

## Supported ADB Commands
To ensure security and compatibility, we have a list of ADB commands that can be executed within our Real Device Cloud. Please refer to the following list of supported commands:

### Supported ADB Commands - Public Device

| Command                               | Description                                                                       |
| -------------------------------------- | --------------------------------------------------------------------------------- |
| `am start`                            | Launches an activity on the device. Useful for opening apps or specific screens. |
| `am force-stop`                       | Force-stops an application by its package name.       |
| `am compat enable`                    | Enables app compatibility options.                    |
| `cat /sdcard/Download/`               | Displays the content of a specific file inside the Download folder.                |
| `cat /sdcard/Pictures/`               | Displays the content of a specific file inside the Pictures folder.                |
| `cat /sdcard/Movies/`                 | Displays the content of a specific file inside the Movies folder.                  |
| `cat /proc/version`                   | Displays kernel version and build info.                                            |
| `dumpsys`                             | Dumps system service information (battery, activity, memory, etc.).                |
| `echo`                                | Prints text to the terminal. Useful for testing output or scripting.               |
| `getprop`                             | Gets system properties. Often used for device diagnostics.                         |
| `grep`                                | Searches for text patterns. Useful for filtering logs or command output.           |
| `input`                               | Simulates user input like taps, swipes, or key events.                             |
| `log.tag.FA`                          | Firebase Analytics SDK logs (e.g., event recording, session start).                |
| `log.tag.FA-SVC`                      | Firebase background service logs (e.g., data uploads, scheduled jobs).             |
| `ls /sdcard/Download`                 | Lists all files and folders located in the device's Download folder.               |
| `ls /sdcard/Pictures`                 | Lists all files and folders located in the device's Pictures folder.               |
| `ls /sdcard/Movies`                   | Lists all files and folders located in the device's Movies folder.                 |
| `pm clear`                            | Clears all data associated with a package (app).       |
| `pwd`                                 | Displays the current working directory.                                            |
| `setprop debug.firebase.analytics.app` | Enables Firebase Analytics debug mode for a specific app.                          |
| `wm fixed-to-user-rotation`           | Controls screen rotation policy.                                                   |

### Supported ADB Commands - Private Device

All the public commands along with the following:

| Command                               | Description                                                                       |
| -------------------------------------- | --------------------------------------------------------------------------------- |
| `am instrument`                       | Executes instrumented tests. Often used in automated testing pipelines.  |
| `am broadcast`                        | Sends custom broadcast messages for triggering in-app actions.  |
| `am`                                  | All other app manager commands.   |
| `cmd connectivity airplane-mode`       | Toggles airplane mode on/off (requires permissions).  |
| `logcat`                              | Streams real-time logs from device, including app logs.  |
| `ls`                                  | Lists files and directories. Commonly used to inspect folders like `/sdcard/Download`.  |
| `mkdir`                               | Creates a new directory.                             |
| `pm`                                  | All other package manager commands.                   |
| `rm`                                  | Removes files or directories.                         |
| `setprop`                             | Sets custom system properties (e.g., for debugging frameworks).  |

:::note
`adb shell` is already pre-applied in our **terminal environment**. Rewriting it explicitly may prevent the command from executing properly.
:::
> If the command you require is not listed, please reach out at our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>24x7 Chat Support</span> or you could also mail us at support@testmu.ai.





<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>
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
        Real Device App Testing
      </span>
    </li>
  </ul>
</nav>
