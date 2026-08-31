# Device Passcode on Real Devices

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

TestMu AI’s **Device Passcode** feature allows you to test applications that require a device passcode as part of their security or authentication flow.
This is especially useful for apps in **Banking/Finance**, **Enterprise**, or those distributed via **MDM (Mobile Device Management)** that mandate passcode entry for sensitive workflows.

**Plus Plan Feature**
This feature is available exclusively with the **Real Device Plus Live** Plan.

To unlock this feature, purchase or upgrade to the required [plan](https://www.testmuai.com/pricing/). If you need assistance, please contact your TestMu AI support representative, reach out to our **[24×7 Chat Support]**, or email us at **support@testmuai.com**.




## Use Cases

- Verify app behavior when the device requires a passcode for login or secure actions.
- Test app workflows that trigger a system passcode prompt (e.g., after inactivity, or accessing secure sections).
- Validate app compliance with enterprise policies that enforce passcodes.
- Reproduce real-world scenarios for apps with heightened security requirements.

## Supported Platforms

| Platform | Version      |
|----------|--------------|
| iOS      | 14 and above |
| Android  | 11 and above |



### Android Devices
Available on **all real devices** running on **version 11 and above**.


## Default Passcode
- **iOS:**  `123456`
- **Android:**  `1234`

## Accessing Device Passcode in Manual Testing

**Step 1:** (**iOS only**) On the App Testing Dashboard, click **Advanced Settings** and enable the **Device Passcode** filter. This will refine the iOS device list to show only those with passcode support.



**Step 2:** Start a manual testing session on your selected device (iOS or Android).
- On **iOS** → Open the **iOS Settings** panel and toggle **Passcode** on.

- On **Android** → Open the **Device Controls** panel and toggle **Passcode** on.

Setup may take **15–30 seconds** depending on the platform.

**Step 4:** Trigger the workflow inside your app that requires the device passcode.
- A system passcode screen will appear.
- Since passcode entry is sensitive, the keypad or the screen may not be streamed and could appear as black in your session view.
- Use your system keyboard to enter the default passcode:
  - iOS: `123456`
  - Android: `1234`

**Step 5:** Continue your app testing once the **passcode** is validated.



- Passcode input is **not visible** in the stream for security reasons.
- You may experience a blacked-out screen briefly during passcode entry.
