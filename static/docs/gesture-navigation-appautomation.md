# Gesture Navigation on Android Real Devices

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

By default, every Android real device on TestMu AI starts a session in **3-button navigation** (the Back, Home and Recents bar). Set the `navigationMode` capability to `gesture` to switch the device to **gesture navigation** for that session. The device goes back to its original navigation mode when the session ends.

## Use Cases

- Test flows that rely on system gestures, such as a swipe from the left or right screen edge to go back.
- Check edge-to-edge layouts without the 3-button bar taking up screen space.
- Verify that in-app swipes near the screen edges do not clash with system gestures.

## Supported Platforms

| Item | Support |
|------|---------|
| Platform | Android real devices only |
| Android version | Android 10 and above |
| Device makes | Google Pixel and Samsung Galaxy (phones and tablets) |
| Session types | Appium app automation and Appium browser automation on real devices |

**Not supported**

- **iOS:** session creation fails. See [Errors](#errors).
- **Android 9 and below:** these versions have no system gesture navigation. The session starts and runs in 3-button navigation.
- **Other device makes** (Xiaomi, OnePlus, Motorola, Vivo, Oppo and others): the capability is ignored and the session runs in 3-button navigation.
- **Virtual devices (emulators):** the capability is ignored.
- **Manual (Live) real device sessions:** there is no navigation mode option.

## Enabling Gesture Navigation via Capabilities

Add the `navigationMode` capability inside `lt:options`:

```json
{
"lt:options": {
"platformName": "android",
"deviceName": "Galaxy S24",
"platformVersion": "14",
"isRealMobile": true,
"app": "YOUR_APP_URL",
// highlight-next-line
"navigationMode": "gesture"
}
}
```

| Capability | Type | Accepted value | Default |
|------------|------|----------------|---------|
| `navigationMode` | String | `gesture` (case-insensitive) | Not set: 3-button navigation |

- There is no `threeButton` value. To run in 3-button navigation, leave the capability out.
- For browser automation, replace the `app` capability with `browserName`.
- You can generate capabilities for your test requirements with the help of our inbuilt [**Capabilities Generator tool**](https://www.testmuai.com/capabilities-generator/). For more details, please refer to our guide on [**Desired Capabilities in Appium**](/support/docs/desired-capabilities-in-appium/).

## What Changes in Gesture Mode

- A swipe inward from the left or right edge is the system **Back** action.
- A swipe up from the bottom edge goes **Home**. Swipe up and hold opens **Recents**.
- The 3-button bar is replaced by a thin gesture handle, so the app gets more screen height. Screenshots and video recordings show this layout.
- `pressKeycode(4)` (the Back key) works as before, in both modes.
- App swipes that start exactly at a screen edge can be taken by the system as Back or Home. Start such swipes a little inside the edge if you do not want the system gesture.

The example below performs an edge swipe that triggers **Back** in gesture mode, using UiAutomator2:

```java
driver.executeScript("mobile: swipeGesture", Map.of(
"left", 0, "top", 1100, "width", 600, "height", 100,
"direction", "right", "percent", 0.75, "speed", 2500));
```

## Errors

| Case | Result |
|------|--------|
| Any value other than `gesture` | Session creation fails with HTTP 400: `The capability navigationMode has value  which is not supported. Supported values are [gesture]` |
| Used with a non-Android platform | Session creation fails with HTTP 400: `navigationMode capability is not supported with  platform` |
| Unsupported device make, Android 9 or below, or virtual device | No error. The session runs in 3-button navigation. |
