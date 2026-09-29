# Screen Reader Automation (Overview)

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

[Native App Automation](/support/docs/accessibility-native-app-automation-test/) evaluates an app **statically**. It inspects the accessibility tree and runs rule checks against captured snapshots. That catches a lot, but it cannot tell you what a real screen reader actually **says**, which elements it **focuses**, or in what **order** it moves through a screen. A screen that passes every static rule can still be unusable with TalkBack or VoiceOver: a label can be present but announced as "button, button", a control can be silently skipped by focus, and the reading order can jump across the screen in a way no tree inspection will catch.

**Screen Reader Automation** closes that gap. It runs your existing Appium test on a TestMu AI real device with the native screen reader active, **TalkBack on Android** or **VoiceOver on iOS**, drives it with real gestures, and captures the actual spoken output as text.

## Two ways to use it

| | Auto Report | Executor Hooks |
|---|---|---|
| **What it does** | Turns the screen reader on for the session, traverses every screen your test reaches, and generates a **Screen Reader Report** with focus order, spoken output and seven screen reader checks. | Lets your test script **control the screen reader**: turn it on or off, perform navigation gestures, and read back the focused element and its spoken output. |
| **What you change in the test** | Capabilities only. No test code changes. | Capabilities, plus `lambda_executor` calls at the points you want to check. |
| **What you get** | A report per session in the Accessibility dashboard, shareable and exportable. | Return values inside your script, so you can **assert** on spoken text, focusability and traversal order and fail the build. |
| **Best for** | Broad coverage on every build, audit evidence for VPATs and ACRs. | Deterministic checks on critical flows, regression gates in CI. |
| **Guide** | [Auto Report](/support/docs/accessibility-screen-reader-automation-auto-report/) | [Executor Hooks](/support/docs/accessibility-screen-reader-automation-hooks/) |

Both can be enabled in the same session. Executor calls do not change what the Auto Report captures.

## When to use this

Use Screen Reader Automation when your team already runs Appium tests against TestMu AI real devices and wants screen reader validation to happen **on every build**, instead of as a manual pre-release step on a physical handset. It is the automation counterpart to the live [TalkBack](/support/docs/screen-reader-on-real-devices-app/) and [VoiceOver](/support/docs/screen-reader-voiceover-real-devices-app/) sessions in Real Device App Testing.

## Supported platforms

| Platform | App format | Screen reader | Minimum OS |
|---|---|---|---|
| Android | `.apk`, `.aab` | TalkBack | Android 11 |
| iOS | `.ipa` | VoiceOver | iOS 15 |

**Constraints**

| | |
|---|---|
| **Device type** | Real devices only (`isRealMobile: true`). Emulators and simulators are rejected at session creation. |
| **App type** | Native Android and iOS apps. |
| **Framework** | Appium, with any language binding. |
| **Master capability** | `accessibility: true`. Screen reader keys are ignored without it. |
| **Output** | Spoken output is captured as **text**. No audio is recorded. |

**Enablement Required**
Screen Reader Automation is enabled per organization. If a session that sets the screen reader capabilities is rejected with an entitlement message, the feature is not yet switched on for your account.

To unlock this feature, please contact your TestMu AI support representative, reach out to our **[24×7 Chat Support]**, or email us at **support@testmuai.com**.

## Prerequisites

- An Appium test project that already runs against TestMu AI **real devices**.
- `LT_USERNAME` / `LT_ACCESS_KEY` available to the process.
- A native app uploaded to TestMu AI (an `lt://APP...` URL).
- Accessibility enabled on the session with `accessibility: true`.

## How it works

1. Your session starts with `accessibility: true` and the screen reader capabilities. TestMu AI allocates a compatible real device and turns on TalkBack or VoiceOver before your first command runs.
2. With **Auto Report** enabled, every time your test reaches a new, stable screen the platform walks that screen with the screen reader, records each focus step and the text spoken for it, and runs the screen reader checks.
3. With **Executor Hooks**, each `lambda_executor` call performs one screen reader action and returns the focused element and its spoken output to your script.
4. At session end the screen reader is turned off and the device's accessibility settings are restored before it returns to the pool.

## Onboarding: first screen reader run

1. **Start from a green Appium test** that installs the app and reaches at least two screens.
2. **Add the capabilities** from [Auto Report](/support/docs/accessibility-screen-reader-automation-auto-report/) to that one test. Keep the rest of the suite unchanged.
3. Run the test and open the **Screen Reader Report**, either from the App Automation session or from **Screen Reader** in the Accessibility dashboard.
4. Read the traversal for one screen end to end. Confirm the focus order and spoken output match what you hear on a physical device.
5. Add one [Executor Hook](/support/docs/accessibility-screen-reader-automation-hooks/) assertion on a critical control, for example the primary button on the login screen.
6. Once both look right, roll the capabilities out to the full suite.

## Product boundary

- **Not the live screen reader.** For hands-on TalkBack or VoiceOver sessions with a real handset on screen, use [Screen Reader (TalkBack) on Android](/support/docs/screen-reader-on-real-devices-app/) and [Screen Reader (VoiceOver) on iOS](/support/docs/screen-reader-voiceover-real-devices-app/).
- **Not desktop screen readers.** NVDA, JAWS and macOS VoiceOver for web testing are covered under [Screen Reader](/support/docs/screen-reader-on-accessibility/).

## Related docs

- [Screen Reader Automation: Auto Report](/support/docs/accessibility-screen-reader-automation-auto-report/)
- [Screen Reader Automation: Executor Hooks](/support/docs/accessibility-screen-reader-automation-hooks/)
- [Native App Automation Appium (Overview)](/support/docs/accessibility-native-app-automation-test/)
- [Scan Configurations via Capabilities (Automation)](/support/docs/accessibility-automation-scan-configurations/)
- [Screen Reader](/support/docs/screen-reader-on-accessibility/)
- [Navigating the Dashboard](/support/docs/accessibility-testing-navigating-dashboard/)
