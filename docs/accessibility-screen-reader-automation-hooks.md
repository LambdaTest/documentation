---
id: accessibility-screen-reader-automation-hooks
title: "Screen Reader Automation: Executor Hooks"
sidebar_label: Executor Hooks
description: "Control TalkBack and VoiceOver from your Appium script on TestMu AI real devices with lambda_executor hooks: enable the screen reader, perform navigation gestures, read the spoken output, and assert on it in your tests."
keywords:
  - screen reader executor
  - lambda_executor screenReader
  - screenReaderGesture
  - screenReaderSpokenDescription
  - voiceOverToggle
  - voiceOverGesture
  - getVoiceOverElement
  - talkback automation
  - voiceover automation
  - appium accessibility
url: https://www.testmuai.com/support/docs/accessibility-screen-reader-automation-hooks/
site_name: TestMu AI
slug: accessibility-screen-reader-automation-hooks/
canonical: https://www.testmuai.com/support/docs/accessibility-screen-reader-automation-hooks/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import RealDeviceTag from '../src/component/realDevice';

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
          "name": "Screen Reader Automation",
          "item": `${BRAND_URL}/support/docs/accessibility-screen-reader-automation/`
        },{
          "@type": "ListItem",
          "position": 4,
          "name": "Executor Hooks",
          "item": `${BRAND_URL}/support/docs/accessibility-screen-reader-automation-hooks/`
        }]
      })
    }}
></script>

# Screen Reader Automation: Executor Hooks

<RealDeviceTag value="Real Device" />

Executor Hooks let your Appium script **drive the screen reader** on a <BrandName /> real device. Through the `lambda_executor` interface you can turn TalkBack or VoiceOver on and off, move focus with the same gestures a screen reader user makes, and read back which element has focus and exactly what was spoken for it. Because every call returns data to your script, you can write assertions and turn screen reader validation into a CI check.

The hooks are language-agnostic. Anything that can call `executeScript` on an Appium session can use them.

## When to use this

Use Executor Hooks when you need a **deterministic pass or fail** on specific controls or flows: the primary button on every screen speaks a sensible name, a form field announces its label and error, a checkout flow can be completed with screen reader navigation alone, and the traversal order on a critical screen has not regressed. For broad, assertion-free coverage across the whole suite, use [Auto Report](/support/docs/accessibility-screen-reader-automation-auto-report/). Both can run in the same session.

## Prerequisites

- An Appium test project targeting <BrandName /> **real devices** (Android 11 or later, iOS 15 or later).
- `LT_USERNAME` / `LT_ACCESS_KEY` available to the process.
- Screen Reader Automation enabled for your organization. See [Screen Reader Automation (Overview)](/support/docs/accessibility-screen-reader-automation/#supported-platforms).
- The screen reader capability for your platform set on the session, as shown below. It makes sure a device that supports screen reader control is allocated.

## Capabilities

Set `accessibility: true` and the platform's screen reader capability inside `LT:Options`.

| Capability | Path | Type | Platform | Description |
|---|---|---|---|---|
| `accessibility` | `LT:Options.accessibility` | boolean | Both | Master switch. Must be `true` for the executor hooks to be accepted. |
| `talkBack` | `LT:Options.accessibilityOptions.talkBack` | boolean | Android | Allocates a device with TalkBack control and enables the TalkBack executor commands. |
| `voiceOver` | `LT:Options.accessibilityOptions.voiceOver` | boolean | iOS | Allocates a device with VoiceOver control and enables the VoiceOver executor commands. |

<Tabs className="docs__val">
  <TabItem value="json" label="JSON" default>

```json
{
  "LT:Options": {
    "platformName": "Android",
    "deviceName": "Pixel 8",
    "platformVersion": "14",
    "isRealMobile": true,
    "app": "lt://APP1234567890",
    //highlight-start
    "accessibility": true,
    "accessibilityOptions": {
      "talkBack": true
    }
    //highlight-end
  }
}
```

  </TabItem>
  <TabItem value="java" label="Java">

```java
Map<String, Object> accessibilityOptions = new HashMap<>();
accessibilityOptions.put("talkBack", true);   // Android. Use "voiceOver" on iOS.

ltOptions.put("isRealMobile", true);
//highlight-start
ltOptions.put("accessibility", true);
ltOptions.put("accessibilityOptions", accessibilityOptions);
//highlight-end

capabilities.setCapability("LT:Options", ltOptions);
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
lt_options = {
    "platformName": "iOS",
    "deviceName": "iPhone 15",
    "platformVersion": "17",
    "isRealMobile": True,
    "app": "lt://APP1234567890",
    #highlight-start
    "accessibility": True,
    "accessibilityOptions": {
        "voiceOver": True,   # iOS. Use "talkBack" on Android.
    },
    #highlight-end
}
```

  </TabItem>
  <TabItem value="javascript" label="JavaScript">

```js
const capabilities = {
  'LT:Options': {
    platformName: 'Android',
    deviceName: 'Galaxy S23',
    platformVersion: '14',
    isRealMobile: true,
    app: 'lt://APP1234567890',
    //highlight-start
    accessibility: true,
    accessibilityOptions: {
      talkBack: true, // Android. Use voiceOver on iOS.
    },
    //highlight-end
  },
};
```

  </TabItem>
</Tabs>

To also generate a Screen Reader Report in the same session, add the `screenReader` block from [Auto Report](/support/docs/accessibility-screen-reader-automation-auto-report/#capabilities-reference) next to these keys.

## Executor contract

Every hook is a `lambda_executor` call made through `executeScript`. The payload is a JSON object with an `action` and, where needed, an `arguments` object.

```python
driver.execute_script('lambda_executor: {"action": "screenReaderGesture", "arguments": {"gesture": "navigate_next"}}')
```

The return value of `executeScript` is the command's response, so assign it to a variable when you want to assert on it.

## Command reference

| Platform | Action | Arguments | What it does |
|---|---|---|---|
| Android | `screenReader` | `enable`: `"true"` or `"false"` | Turns TalkBack on or off. |
| Android | `screenReaderGesture` | `gesture`: a name from [Supported gestures](#supported-gestures) | Performs a TalkBack gesture and returns the element that received focus with its spoken output. |
| Android | `screenReaderSpokenDescription` | `resourceId`: the element's resource ID | Returns the spoken output for a specific element without moving focus. |
| iOS | `voiceOverToggle` | `enable`: `"true"` or `"false"` | Turns VoiceOver on or off. |
| iOS | `voiceOverGesture` | `gesture`: a name from [Supported gestures](#supported-gestures) | Performs a VoiceOver gesture and returns the element that received focus with its spoken output. |
| iOS | `getVoiceOverElement` | none | Returns the currently focused element and its spoken output without moving focus. |

Gesture names, argument names and the response shape are the same on both platforms, so a test can target Android and iOS with the platform-specific action names swapped and nothing else changed.

## Android (TalkBack)

### Enable or disable TalkBack

Turn TalkBack on before any other TalkBack command. Turn it off when you are done with screen reader checks so the rest of the test runs without it.

<Tabs className="docs__val">
<TabItem value="java" label="Java" default>

```java
// Enable TalkBack
driver.executeScript("lambda_executor: {\"action\": \"screenReader\", \"arguments\": {\"enable\": \"true\"}}");

// ... screen reader checks ...

// Disable TalkBack
driver.executeScript("lambda_executor: {\"action\": \"screenReader\", \"arguments\": {\"enable\": \"false\"}}");
```

</TabItem>
<TabItem value="python" label="Python">

```python
# Enable TalkBack
driver.execute_script('lambda_executor: {"action": "screenReader", "arguments": {"enable": "true"}}')

# ... screen reader checks ...

# Disable TalkBack
driver.execute_script('lambda_executor: {"action": "screenReader", "arguments": {"enable": "false"}}')
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```javascript
// Enable TalkBack
await driver.executeScript('lambda_executor: {"action": "screenReader", "arguments": {"enable": "true"}}');

// ... screen reader checks ...

// Disable TalkBack
await driver.executeScript('lambda_executor: {"action": "screenReader", "arguments": {"enable": "false"}}');
```

</TabItem>
</Tabs>

### Perform a gesture

Each gesture call moves focus the way a swipe or tap would, waits for TalkBack to speak, and returns the newly focused element together with the text that was spoken.

<Tabs className="docs__val">
<TabItem value="java" label="Java" default>

```java
Object result = driver.executeScript(
    "lambda_executor: {\"action\": \"screenReaderGesture\", \"arguments\": {\"gesture\": \"navigate_next\"}}");
```

</TabItem>
<TabItem value="python" label="Python">

```python
result = driver.execute_script('lambda_executor: {"action": "screenReaderGesture", "arguments": {"gesture": "navigate_next"}}')
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```javascript
const result = await driver.executeScript('lambda_executor: {"action": "screenReaderGesture", "arguments": {"gesture": "navigate_next"}}');
```

</TabItem>
</Tabs>

### Get the spoken output for an element

Use `screenReaderSpokenDescription` to read what TalkBack says for a specific element, identified by its resource ID, without moving focus. This is the simplest way to assert on a control's accessible name.

<Tabs className="docs__val">
<TabItem value="java" label="Java" default>

```java
Object spoken = driver.executeScript(
    "lambda_executor: {\"action\": \"screenReaderSpokenDescription\", \"arguments\": {\"resourceId\": \"com.example.app:id/sign_in\"}}");
```

</TabItem>
<TabItem value="python" label="Python">

```python
spoken = driver.execute_script('lambda_executor: {"action": "screenReaderSpokenDescription", "arguments": {"resourceId": "com.example.app:id/sign_in"}}')
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```javascript
const spoken = await driver.executeScript('lambda_executor: {"action": "screenReaderSpokenDescription", "arguments": {"resourceId": "com.example.app:id/sign_in"}}');
```

</TabItem>
</Tabs>

The response lists the spoken output keyed both by resource ID and by the element's on-screen rectangle:

```json
{
  "spoken_description": {
    "by_resource_id": {
      "com.example.app:id/sign_in": ["Sign in, Button, Double tap to activate"]
    },
    "by_rect": {
      "70 1171 1010 1297": ["Sign in, Button, Double tap to activate"]
    }
  }
}
```

The value is an array because a single element can be announced in more than one segment, for example label, role and hint.

## iOS (VoiceOver)

### Enable or disable VoiceOver

Turn VoiceOver on before any other VoiceOver command. The first enable in a session can take a few seconds longer than later calls.

<Tabs className="docs__val">
<TabItem value="java" label="Java" default>

```java
// Enable VoiceOver
driver.executeScript("lambda_executor: {\"action\": \"voiceOverToggle\", \"arguments\": {\"enable\": \"true\"}}");

// ... screen reader checks ...

// Disable VoiceOver
driver.executeScript("lambda_executor: {\"action\": \"voiceOverToggle\", \"arguments\": {\"enable\": \"false\"}}");
```

</TabItem>
<TabItem value="python" label="Python">

```python
# Enable VoiceOver
driver.execute_script('lambda_executor: {"action": "voiceOverToggle", "arguments": {"enable": "true"}}')

# ... screen reader checks ...

# Disable VoiceOver
driver.execute_script('lambda_executor: {"action": "voiceOverToggle", "arguments": {"enable": "false"}}')
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```javascript
// Enable VoiceOver
await driver.executeScript('lambda_executor: {"action": "voiceOverToggle", "arguments": {"enable": "true"}}');

// ... screen reader checks ...

// Disable VoiceOver
await driver.executeScript('lambda_executor: {"action": "voiceOverToggle", "arguments": {"enable": "false"}}');
```

</TabItem>
</Tabs>

### Perform a gesture

`voiceOverGesture` accepts every cross-platform gesture plus the iOS-only gestures listed under [Supported gestures](#supported-gestures), and returns the newly focused element with its spoken output.

<Tabs className="docs__val">
<TabItem value="java" label="Java" default>

```java
Object result = driver.executeScript(
    "lambda_executor: {\"action\": \"voiceOverGesture\", \"arguments\": {\"gesture\": \"navigate_next\"}}");
```

</TabItem>
<TabItem value="python" label="Python">

```python
result = driver.execute_script('lambda_executor: {"action": "voiceOverGesture", "arguments": {"gesture": "navigate_next"}}')
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```javascript
const result = await driver.executeScript('lambda_executor: {"action": "voiceOverGesture", "arguments": {"gesture": "navigate_next"}}');
```

</TabItem>
</Tabs>

### Get the focused element

`getVoiceOverElement` returns the element that currently has VoiceOver focus and the most recent announcement for it, without moving focus. Call it after a gesture, or after your own Appium interaction, to check what VoiceOver landed on.

<Tabs className="docs__val">
<TabItem value="java" label="Java" default>

```java
Object focused = driver.executeScript("lambda_executor: {\"action\": \"getVoiceOverElement\"}");
```

</TabItem>
<TabItem value="python" label="Python">

```python
focused = driver.execute_script('lambda_executor: {"action": "getVoiceOverElement"}')
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```javascript
const focused = await driver.executeScript('lambda_executor: {"action": "getVoiceOverElement"}');
```

</TabItem>
</Tabs>

## Supported gestures

Gesture names are case-sensitive. The cross-platform set works with both `screenReaderGesture` and `voiceOverGesture`; the iOS-only set works with `voiceOverGesture`.

| Gesture | What it does | TalkBack equivalent | VoiceOver equivalent | Platform |
|---|---|---|---|---|
| `navigate_next` | Move focus to the next element | Swipe right | Swipe right | Android, iOS |
| `navigate_previous` | Move focus to the previous element | Swipe left | Swipe left | Android, iOS |
| `activate_item` | Activate the focused element | Double tap | Double tap | Android, iOS |
| `scroll_down` | Scroll the current container down | Two-finger swipe up | Three-finger swipe up | Android, iOS |
| `scroll_up` | Scroll the current container up | Two-finger swipe down | Three-finger swipe down | Android, iOS |
| `back` | Navigate back or dismiss | Back gesture | Two-finger scrub | Android, iOS |
| `home` | Return to the home screen | Home gesture | Home | Android, iOS |
| `navigate_first` | Move focus to the first element on the screen | – | Four-finger tap, top of screen | iOS |
| `navigate_last` | Move focus to the last element on the screen | – | Four-finger tap, bottom of screen | iOS |
| `read_from_top` | Read continuously from the top of the screen | – | Two-finger swipe up | iOS |
| `read_from_current` | Read continuously from the focused element | – | Two-finger swipe down | iOS |
| `rotor_next` | Move to the next item for the current rotor setting | – | Swipe down | iOS |
| `rotor_previous` | Move to the previous item for the current rotor setting | – | Swipe up | iOS |
| `pause_speech` | Pause or resume speech | – | Two-finger tap | iOS |

`read_from_top` and `read_from_current` start continuous reading. Use `pause_speech` to stop it before the next gesture.

## Response shape

Gesture commands and `getVoiceOverElement` return an `element_description` for the element that has focus. The same field names are used on Android and iOS.

| Field | Description |
|---|---|
| `resourceId` | The element's resource ID on Android, or its accessibility identifier on iOS. |
| `className` | The native class of the element, for example `android.widget.Button` or `UIButton`. |
| `text` | The element's visible text or accessibility label. |
| `contentDescription` | The content description on Android, or the accessibility hint on iOS. |
| `bounds` | The element's on-screen rectangle. |
| `spokenOutput` | The text the screen reader spoke when the element received focus. |
| `properties` | Additional accessibility state, for example whether the element is clickable, enabled, checked or focusable. |

An illustrative response after `navigate_next` lands on a sign-in button:

```json
{
  "element_description": {
    "resourceId": "com.example.app:id/sign_in",
    "className": "android.widget.Button",
    "text": "Sign in",
    "contentDescription": "",
    "bounds": "[70,1171][1010,1297]",
    "spokenOutput": "Sign in, Button, Double tap to activate",
    "properties": {
      "clickable": true,
      "enabled": true,
      "focusable": true
    }
  }
}
```

A gesture that produces no focus change, for example `navigate_next` at the end of a list, returns success with the previously focused element rather than throwing.

## Writing assertions

Executor Hooks are most useful when the returned data feeds an assertion. Three checks cover most needs.

**Spoken output for a control.** Confirm the primary action announces a descriptive name and role.

<Tabs className="docs__val">
<TabItem value="python" label="Python" default>

```python
driver.execute_script('lambda_executor: {"action": "screenReader", "arguments": {"enable": "true"}}')

out = driver.execute_script('lambda_executor: {"action": "screenReaderSpokenDescription", "arguments": {"resourceId": "com.example.app:id/sign_in"}}')
actual = out["spoken_description"]["by_resource_id"]["com.example.app:id/sign_in"][0]
expected = "Sign in, Button, Double tap to activate"

assert actual == expected, f"Expected '{expected}', got '{actual}'"

driver.execute_script('lambda_executor: {"action": "screenReader", "arguments": {"enable": "false"}}')
```

</TabItem>
<TabItem value="java" label="Java">

```java
driver.executeScript("lambda_executor: {\"action\": \"screenReader\", \"arguments\": {\"enable\": \"true\"}}");

Map<String, Object> out = (Map<String, Object>) driver.executeScript(
    "lambda_executor: {\"action\": \"screenReaderSpokenDescription\", \"arguments\": {\"resourceId\": \"com.example.app:id/sign_in\"}}");
Map<String, Object> spoken = (Map<String, Object>) out.get("spoken_description");
Map<String, List<String>> byId = (Map<String, List<String>>) spoken.get("by_resource_id");
String actual = byId.get("com.example.app:id/sign_in").get(0);

Assert.assertEquals(actual, "Sign in, Button, Double tap to activate");

driver.executeScript("lambda_executor: {\"action\": \"screenReader\", \"arguments\": {\"enable\": \"false\"}}");
```

</TabItem>
</Tabs>

**Focusability and traversal order.** Walk the screen with `navigate_next` and compare the sequence of focused elements with the order you expect.

<Tabs className="docs__val">
<TabItem value="python" label="Python" default>

```python
driver.execute_script('lambda_executor: {"action": "voiceOverToggle", "arguments": {"enable": "true"}}')

expected_order = ["email_field", "password_field", "sign_in_button"]
actual_order = []

for _ in expected_order:
    result = driver.execute_script('lambda_executor: {"action": "voiceOverGesture", "arguments": {"gesture": "navigate_next"}}')
    element = result["element_description"]
    actual_order.append(element["resourceId"])
    assert element["spokenOutput"].strip(), f"{element['resourceId']} was focused but nothing was spoken"

assert actual_order == expected_order, f"Traversal order changed: {actual_order}"

driver.execute_script('lambda_executor: {"action": "voiceOverToggle", "arguments": {"enable": "false"}}')
```

</TabItem>
<TabItem value="java" label="Java">

```java
driver.executeScript("lambda_executor: {\"action\": \"voiceOverToggle\", \"arguments\": {\"enable\": \"true\"}}");

List<String> expectedOrder = List.of("email_field", "password_field", "sign_in_button");
List<String> actualOrder = new ArrayList<>();

for (int i = 0; i < expectedOrder.size(); i++) {
    Map<String, Object> result = (Map<String, Object>) driver.executeScript(
        "lambda_executor: {\"action\": \"voiceOverGesture\", \"arguments\": {\"gesture\": \"navigate_next\"}}");
    Map<String, Object> element = (Map<String, Object>) result.get("element_description");
    actualOrder.add((String) element.get("resourceId"));
    Assert.assertFalse(((String) element.get("spokenOutput")).isBlank(),
        element.get("resourceId") + " was focused but nothing was spoken");
}

Assert.assertEquals(actualOrder, expectedOrder, "Traversal order changed");

driver.executeScript("lambda_executor: {\"action\": \"voiceOverToggle\", \"arguments\": {\"enable\": \"false\"}}");
```

</TabItem>
</Tabs>

**Completing a flow with the screen reader.** Use `navigate_next` until the focused element is the control you want, then `activate_item`, and assert on the next screen. This proves the flow can be finished by a screen reader user, not just that each control has a label.

## Execution rules

- **Enable first.** Every gesture and spoken-output command requires the screen reader to be on. Calling one while it is off returns: *"Screen reader is not enabled for this session. Call the enable command first or set the screen reader capability."*
- **Enable and disable are idempotent.** Repeated calls in the same state return success and are logged as no-ops.
- **Commands are sequential.** Each call waits for the gesture to settle and the speech to be captured before returning. Do not fire screen reader commands in parallel on one session.
- **Speech capture has a timeout.** If no speech is captured within the gesture timeout, the command returns with the reason *"No spoken output captured within gestureTimeout for gesture '&lt;name&gt;'."* rather than a partial result.
- **Unknown locators are explicit.** `screenReaderSpokenDescription` with a resource ID that matches nothing on the current screen returns *"No element matched locator '&lt;locator&gt;' on the current screen."*
- **Elements with no metadata are still reported.** If the element exists but exposes no accessibility metadata, the response flags it so a missing label is debuggable instead of silent.
- **Platform mismatch is rejected.** Android actions on an iOS device, or VoiceOver actions on an Android device, return an error instead of being ignored.
- **The screen reader is turned off at session end.** You do not have to disable it yourself, but doing so keeps the rest of a long test faster.

## Best practices

- **Wait for a stable screen before a gesture.** Spinners and animations change what receives focus. Put your explicit waits before the first screen reader command on each screen.
- **Assert on `spokenOutput`, not on `text`.** The spoken output is what a user hears. It includes role, state and hint, which is exactly what static rules miss.
- **Prefer `screenReaderSpokenDescription` for single controls.** It does not move focus, so it can be called in any order without affecting a traversal check.
- **Keep traversal checks short.** Assert the order of the five or six controls that matter on a screen rather than walking every element. Long walks are what [Auto Report](/support/docs/accessibility-screen-reader-automation-auto-report/) is for.
- **Disable the screen reader in a `finally` block.** If an assertion fails mid-check, the rest of the test still runs without TalkBack or VoiceOver slowing it down.
- **Use the same gesture names on both platforms.** Write the check once and swap only the action names (`screenReader` / `voiceOverToggle`, `screenReaderGesture` / `voiceOverGesture`) per platform.

## Combining with Auto Report

Executor Hooks and [Auto Report](/support/docs/accessibility-screen-reader-automation-auto-report/) can be enabled in the same session. Set both the platform capability (`talkBack` or `voiceOver`) and the `screenReader` block with `autoReport: true`. Your executor calls control the screen reader as described here, and the report is still generated for every screen the test reaches. The gestures your script performs do not add extra entries to the report.

## Troubleshooting

| Symptom | What to check |
|---|---|
| Hook returns an entitlement error | Screen Reader Automation is not enabled for your organization. Contact support. |
| Hook returns *"Screen reader is not enabled for this session."* | Call `screenReader` or `voiceOverToggle` with `enable: "true"` before other commands, and make sure `accessibility: true` and the platform capability are in `LT:Options`. |
| Gesture returns the same element every time | Focus is at the end of the list or inside a container that needs `scroll_down` first. Check `spokenOutput` to confirm where focus is. |
| Spoken output is empty for an element that has a label | The element may not be focusable by the screen reader, so it is skipped. Check the `properties` in the response and the [rule repository](/support/docs/accessibility-android-rule-repository/) guidance for focusable containers. |
| iOS session cannot be allocated | The `voiceOver` capability requires a device that supports VoiceOver control. Widen the device or OS selection, or ask support which devices in your pool support it. |
| Command fails with a platform mismatch error | The action name belongs to the other platform. Use `screenReader*` actions on Android and `voiceOver*` / `getVoiceOverElement` on iOS. |

## Related docs

- [Screen Reader Automation (Overview)](/support/docs/accessibility-screen-reader-automation/)
- [Screen Reader Automation: Auto Report](/support/docs/accessibility-screen-reader-automation-auto-report/)
- [Native App Automation Appium (Overview)](/support/docs/accessibility-native-app-automation-test/)
- [Appium TestNG](/support/docs/accessibility-appium-testng/)
- [Appium WebdriverIO](/support/docs/accessibility-appium-webdriverio/)
- [Lambda Hooks for Appium](/support/docs/appium-testmu-hooks/)
