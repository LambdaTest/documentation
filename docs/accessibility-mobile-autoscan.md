---
id: accessibility-mobile-autoscan
title: AutoScan for Mobile App Accessibility
sidebar_label: AutoScan
description: "Scan every screen of an Appium app flow automatically on TestMu AI real devices with accessibility.autoScan, tune duplicate-screen skipping with intelligentScan, and pause or resume scanning from your test."
keywords:
  - accessibility autoScan
  - mobile accessibility autoscan
  - appium automatic accessibility scan
  - intelligentScan
  - intelligentScanThreshold
  - pause accessibility scan
  - android ios accessibility automation
url: https://www.testmuai.com/support/docs/accessibility-mobile-autoscan/
site_name: TestMu AI
slug: accessibility-mobile-autoscan/
canonical: https://www.testmuai.com/support/docs/accessibility-mobile-autoscan/
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
          "name": "Native App Automation",
          "item": `${BRAND_URL}/support/docs/accessibility-native-app-automation-test/`
        },{
          "@type": "ListItem",
          "position": 4,
          "name": "AutoScan",
          "item": `${BRAND_URL}/support/docs/accessibility-mobile-autoscan/`
        }]
      })
    }}
></script>

# AutoScan for Mobile App Accessibility

<RealDeviceTag value="Real Device" />

AutoScan runs an accessibility scan **automatically** after every Appium command that changes the screen, so an app flow is covered end to end without a `lambda-accessibility-scan` call at each step. You turn it on with a single capability, and <BrandName /> scans as your existing test drives the app.

Because a test usually taps several times on the same screen, AutoScan also ships with **intelligent scan**: before each scan the current screen is compared with the last one that was scanned, and a screen that has not visibly changed is skipped. Intelligent scan is **on by default**, so the common case is one scan per distinct screen rather than one scan per tap.

AutoScan is the mobile counterpart of the web `accessibility.autoscan` capability described in [Automating Accessibility Testing with Selenium](/support/docs/accessibility-automation-test/). Both platforms are supported on real devices: **Android** and **iOS**.

## When to use this

Use AutoScan when you want accessibility coverage across **everything your Appium suite already walks through**, and you do not want to maintain a hook call at every screen. It is the fastest way to go from no mobile accessibility coverage to full-flow coverage, and it removes the most common cause of empty reports, which is a screen that no one remembered to scan.

Keep using the [`lambda-accessibility-scan` hook](/support/docs/accessibility-native-app-automation-test/) instead when you need **exact control** over when each scan runs, for example on a screen with late-loading asynchronous content, or when you want a fixed, predictable number of scans per run.

The two can be combined. A session with AutoScan on can still call the hook for a one-off scan at a moment of your choosing, and the hook doubles as a [pause and resume switch](#pausing-and-resuming-autoscan).

## Prerequisites

- An Appium test project targeting <BrandName /> **real devices** (Android or iOS).
- `LT_USERNAME` / `LT_ACCESS_KEY` available to the process.
- Accessibility enabled on the session with the `accessibility` master capability.
- A **native** Android or iOS app. Hybrid apps with embedded webview content are not supported.

## Capabilities reference

| Capability | Type | Default | Description |
|---|---|---|---|
| `accessibility` | boolean | `false` | Master switch. Must be `true` for any accessibility capability to take effect. |
| `accessibility.autoScan` | boolean | `false` | Scans automatically after every screen-changing command. See [What triggers a scan](#what-triggers-a-scan). |
| `accessibility.intelligentScan` | boolean | `true` | Skips a scan when the screen has not visibly changed since the last one. Pass `false` to scan after every triggering command. |
| `accessibility.intelligentScanThreshold` | integer, 0 to 99 | `95` | Visual similarity percentage at or above which a screen counts as unchanged and the scan is skipped. Lower is more aggressive deduplication. |

:::note
`accessibility.intelligentScan` and `accessibility.intelligentScanThreshold` only have meaning when `accessibility.autoScan` is `true`. In a session where AutoScan is off, both keys are dropped and the session runs as before, with hook-driven scans only.
:::

These capabilities sit alongside the scan-scoping capabilities (`accessibility.wcagVersion`, `accessibility.bestPractice`, `accessibility.betaRules`, `accessibility.aiEnabled`) described in [Scan Configurations via Capabilities](/support/docs/accessibility-automation-scan-configurations/), and the exclusion capabilities described in [Rule and Category Exclusion for Mobile App Accessibility](/support/docs/accessibility-mobile-rule-exclusion/). All of them apply to every AutoScan-triggered scan exactly as they apply to a hook-triggered one.

## Example: enabling AutoScan

Enable accessibility, turn AutoScan on, target WCAG 2.1 AA, and leave intelligent scan at its default.

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
    "accessibility.autoScan": true,
    //highlight-end
    "accessibility.wcagVersion": "wcag21aa"
  }
}
```

  </TabItem>
  <TabItem value="java" label="Java">

```java
MutableCapabilities caps = new MutableCapabilities();
caps.setCapability("isRealMobile", true);
//highlight-start
caps.setCapability("accessibility", true);
caps.setCapability("accessibility.autoScan", true);
//highlight-end
caps.setCapability("accessibility.wcagVersion", "wcag21aa");
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
    "accessibility.autoScan": True,
    #highlight-end
    "accessibility.wcagVersion": "wcag21aa",
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
    'accessibility.autoScan': true,
    //highlight-end
    'accessibility.wcagVersion': 'wcag21aa',
  },
};
```

  </TabItem>
  <TabItem value="yaml" label="YAML (HyperExecute)">

```yaml
accessibility: true
accessibility.autoScan: true
accessibility.wcagVersion: wcag21aa
```

  </TabItem>
</Tabs>

To scan after **every** triggering command, including repeated actions on the same screen, switch intelligent scan off:

<Tabs className="docs__val">
  <TabItem value="json" label="JSON" default>

```json
{
  "accessibility": true,
  "accessibility.autoScan": true,
  "accessibility.intelligentScan": false
}
```

  </TabItem>
  <TabItem value="java" label="Java">

```java
caps.setCapability("accessibility", true);
caps.setCapability("accessibility.autoScan", true);
caps.setCapability("accessibility.intelligentScan", false);
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
caps = {
    "accessibility": True,
    "accessibility.autoScan": True,
    "accessibility.intelligentScan": False,
}
```

  </TabItem>
  <TabItem value="javascript" label="JavaScript">

```js
const capabilities = {
  accessibility: true,
  'accessibility.autoScan': true,
  'accessibility.intelligentScan': false,
};
```

  </TabItem>
</Tabs>

No change to your test code is required. The scan runs after the command that <BrandName /> already receives from your Appium client.

## What triggers a scan

AutoScan fires after a command that can **change what is on the screen**, and only when that command succeeded. Read-only commands never trigger a scan, so element lookups, attribute and text reads, explicit waits, source dumps and screenshots add nothing to your scan count.

| Action in your test | Triggers a scan |
|---|---|
| Tap, click, long press, double tap | Yes |
| Type into a field, clear a field | Yes |
| Swipe, scroll, flick | Yes |
| A W3C actions sequence (`performActions`) | Yes |
| Device back navigation | Yes |
| Changing device orientation | Yes |
| Navigating to a URL in a webview context | Yes |
| `findElement`, `findElements` | No |
| Reading text, attributes or element state | No |
| Explicit and implicit waits | No |
| Taking a screenshot, fetching page source | No |
| A command that failed or returned an error | No |

The scan is taken **after** the command completes, so it captures the screen your app arrived at, not the one it left.

:::note
A command that changes the screen only after an asynchronous load, for example a tap that opens a screen whose content arrives over the network, can be scanned before that content is painted. Add an explicit wait after the command, or use the `lambda-accessibility-scan` hook for that screen, if the timing matters. This is the same behaviour as autoScan on web. See [Accessibility FAQ](/support/docs/accessibility-faq/).
:::

## Intelligent scan

Intelligent scan is what keeps an interaction-heavy test from producing dozens of near-identical reports.

Before each triggered scan, <BrandName /> compares the current screen with the last screen that was scanned and produces a **visual similarity percentage**. If that percentage is at or above `accessibility.intelligentScanThreshold`, the screen is treated as unchanged and the scan is skipped.

| Threshold | Effect |
|---|---|
| `95` (default) | Skips repeat scans of the same screen while still catching small but real changes, such as a validation error appearing under a field. |
| Higher, for example `98` | Stricter. Almost any pixel difference counts as a new screen, so more scans run. |
| Lower, for example `50` | Aggressive. Only clearly different screens are scanned, which is useful on flows with a lot of animation or changing content. |
| `intelligentScan: false` | No comparison at all. Every triggering command produces a scan. Expect roughly twice the scans of a default AutoScan run on an interaction-heavy flow. |

Comparison is always against the **last screen that was actually scanned**, so a flow that moves A → A → B scans A once and B once.

## Pausing and resuming AutoScan

Some parts of a run are not worth scanning: a login sequence, a fixture setup, or a third-party payment screen you do not own. The `lambda-accessibility-scan` hook doubles as a pause and resume switch for an AutoScan session.

<Tabs className="docs__val">
  <TabItem value="java" label="Java" default>

```java
// Stop AutoScan from scanning the next part of the flow
driver.executeScript("lambda-accessibility-scan", Map.of("scan", false));

// ... setup, login, or any flow you do not want scanned ...

// Resume automatic scanning
driver.executeScript("lambda-accessibility-scan", Map.of("scan", true));
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
driver.execute_script("lambda-accessibility-scan", {"scan": False})

# ... setup, login, or any flow you do not want scanned ...

driver.execute_script("lambda-accessibility-scan", {"scan": True})
```

  </TabItem>
  <TabItem value="javascript" label="JavaScript">

```js
await driver.execute('lambda-accessibility-scan', { scan: false });

// ... setup, login, or any flow you do not want scanned ...

await driver.execute('lambda-accessibility-scan', { scan: true });
```

  </TabItem>
</Tabs>

| Hook payload | In an AutoScan session | In a session without AutoScan |
|---|---|---|
| `{"scan": false}` | Pauses AutoScan. Triggering commands stop producing scans until it is resumed. | Accepted, no effect. |
| `{"scan": true}` | Resumes AutoScan from the next triggering command. | Accepted, no effect. |
| No payload | Runs a single scan immediately, as it always has. | Runs a single scan immediately. |

Pausing does not end the session's accessibility coverage. Everything scanned before the pause is kept, and scanning picks up again from the command after the resume. A paused session can still take a one-off scan by calling the hook without a payload.

## Android and iOS

The scan itself, the rules evaluated and the report produced are identical on both platforms. The difference is in **timing**.

| | Android | iOS |
|---|---|---|
| When the scan runs | In the background, after the Appium command has already returned to your test | Before the Appium command returns to your test |
| Added latency per scanned command | Effectively none | The scan duration, up to about 90 seconds on a dense screen |
| Effect on your test | None. The suite runs at its normal speed. | Commands that trigger a scan take noticeably longer, and total suite time grows with the number of scanned screens. |

This is a platform constraint, not a setting. On iOS the accessibility scan and the Appium session share the same device-side bridge, so the scan has to complete before the session continues.

:::warning
Plan for longer iOS runs before enabling AutoScan on a large suite. Raise any per-command or per-test timeouts in your framework, and consider a lower `accessibility.intelligentScanThreshold` so fewer screens are scanned. A quick way to gauge the cost is to run one representative test with AutoScan on and compare its duration with the same test on hook-driven scans.
:::

## Capability combinations

| `autoScan` | `intelligentScan` | `intelligentScanThreshold` | Behaviour |
|---|---|---|---|
| `false` | ignored | ignored | Hook-driven scanning only. Identical to the behaviour before AutoScan existed. |
| `true` | `true` (default) | `95` (default) | A scan after each screen-changing command, skipped when the screen is at least 95% similar to the last scanned screen. The recommended starting point. |
| `true` | `true` | `50` | Aggressive deduplication. Only clearly different screens are scanned. |
| `true` | `false` | ignored | A scan after every screen-changing command, with no deduplication. Highest coverage and highest scan consumption. |

## Scan consumption

Every scan AutoScan triggers is **one accessibility scan**, the same as a `lambda-accessibility-scan` call. A screen skipped by intelligent scan is not a scan and is not counted.

Consumption is therefore driven by the number of **distinct screens** your suite reaches, not by the number of commands it runs, as long as intelligent scan is on. Switching it off moves consumption back to one scan per triggering command. See [How scan consumption works](/support/docs/accessibility-testing/#how-scan-consumption-works).

## Working with other accessibility features

- **Scan configuration.** `accessibility.wcagVersion`, `accessibility.bestPractice`, `accessibility.betaRules` and `accessibility.aiEnabled` apply to every AutoScan-triggered scan in the session, exactly as they do to hook-triggered scans.
- **Rule and category exclusion.** `accessibility.excludeRules` and `accessibility.excludeRuleCategories` are honoured on every AutoScan trigger. See [Rule and Category Exclusion for Mobile App Accessibility](/support/docs/accessibility-mobile-rule-exclusion/).
- **AI-powered rules.** Independent of how the scan was triggered. With `accessibility.aiEnabled` on, AI analysis runs for AutoScan scans as well.
- **Screen Reader Automation.** AutoScan and [Screen Reader Auto Report](/support/docs/accessibility-screen-reader-automation-auto-report/) are **mutually exclusive** in a session. A session running the screen reader does not trigger AutoScan rule scans. Run them as two tests if you need both.
- **Tags.** Tags applied to the session apply to every scan it produces. See [Tag Support for Accessibility Scans](/support/docs/accessibility-tag-support/).

## What to expect in reports

AutoScan scans land in exactly the same place as hook-driven scans, in the Accessibility dashboard under the same build and test. There is no separate AutoScan report type to learn.

- **Per screen.** Each scan that ran is a screen entry in the report, with its screenshot, issues and score, in the order your test reached them.
- **Skipped screens.** A screen skipped by intelligent scan does not produce an entry. If your report has fewer screens than you expected, that is usually why.
- **Session level.** The test record notes whether the session's scans were produced by AutoScan or by hooks, so an AutoScan run can be told apart from a hook-driven one in the dashboard and in the test-detail API.
- **Configuration recorded.** The WCAG target, group toggles and any exclusions are stored with the test, as they are for hook-driven scans.

Individual scans within a session are not currently labelled with the trigger that produced them, so a session that mixes AutoScan with explicit hook calls shows both kinds of scan in one list.

{/* IMAGE PLACEHOLDER: Accessibility report for an AutoScan session showing the per-screen list with one entry per distinct screen. Save the screenshot at the path below, then uncomment.
<img loading="lazy" src={require('../assets/images/accessibility-testing/features/autoscan/autoscan-report-screens.png').default} alt="Accessibility report for an Appium session run with autoScan, listing one scanned screen entry per distinct app screen with issues and score" className="doc_img"/>
*/}

## Troubleshooting

| Symptom | What to check |
|---|---|
| No scans at all in an AutoScan session | `accessibility` must be `true` in the same options block as `accessibility.autoScan`. On its own, `accessibility.autoScan` is ignored. |
| Fewer screens in the report than the test visits | Intelligent scan skipped screens it judged unchanged. Lower `accessibility.intelligentScanThreshold` is more aggressive, so raise it, or set `accessibility.intelligentScan` to `false` to confirm. |
| More scans than expected | Intelligent scan is off, or the screens genuinely differ, for example because of an animation, a carousel or a live timestamp. Lower the threshold. |
| A screen is scanned before its content loads | The triggering command returned before the asynchronous content painted. Add an explicit wait, or scan that screen with the `lambda-accessibility-scan` hook instead. |
| iOS tests much slower after enabling AutoScan | Expected. On iOS the scan completes before the command returns. See [Android and iOS](#android-and-ios). Raise framework timeouts, or lower the threshold so fewer screens are scanned. |
| A setup or login flow appears in the report | Pause AutoScan around it with `{"scan": false}` and resume after. See [Pausing and resuming AutoScan](#pausing-and-resuming-autoscan). |
| Scans stopped part way through the run | AutoScan was paused with `{"scan": false}` and never resumed. Send `{"scan": true}`. |
| No screen reader results in an AutoScan session | AutoScan and Screen Reader Auto Report are mutually exclusive. Run the screen reader as a separate test. |

## FAQ

**Do I have to remove my existing `lambda-accessibility-scan` calls?**
No. Hook calls keep working in an AutoScan session and run a scan immediately. Leave them where you want a guaranteed scan at a precise moment, and remove the ones that only existed to get coverage.

**Is AutoScan supported on emulators and simulators?**
No. AutoScan is a real-device capability, the same as the rest of mobile app accessibility scanning.

**Does AutoScan work with hybrid apps?**
No. Accessibility scanning supports **native** Android and iOS apps only. To check embedded web content, test the web application directly with [web Automation](/support/docs/accessibility-automation-test/) or [Manual Testing (DevTools)](/support/docs/accessibility-devtools/).

**Can I set the threshold per screen?**
No. `accessibility.intelligentScanThreshold` is a session-level setting. To force a scan on a specific screen regardless of similarity, call the `lambda-accessibility-scan` hook there.

**What happens if the triggering command fails?**
No scan is taken. AutoScan only fires after a command that succeeded.

**Does AutoScan change what a scan checks?**
No. The rules, the WCAG scoping and the exclusions are the same regardless of what triggered the scan. Only the trigger differs.

## Related docs

- [Native App Automation Appium (Overview)](/support/docs/accessibility-native-app-automation-test/)
- [Scan Configurations via Capabilities (Automation)](/support/docs/accessibility-automation-scan-configurations/)
- [Rule and Category Exclusion for Mobile App Accessibility](/support/docs/accessibility-mobile-rule-exclusion/)
- [Appium TestNG](/support/docs/accessibility-appium-testng/)
- [Appium WebdriverIO](/support/docs/accessibility-appium-webdriverio/)
- [Screen Reader Automation: Auto Report](/support/docs/accessibility-screen-reader-automation-auto-report/)
- [Automating Accessibility Testing with Selenium](/support/docs/accessibility-automation-test/)
- [Tag Support for Accessibility Scans](/support/docs/accessibility-tag-support/)
- [Accessibility FAQ](/support/docs/accessibility-faq/)
