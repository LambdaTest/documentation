---
id: accessibility-screen-reader-automation-auto-report
title: "Screen Reader Automation: Auto Report"
sidebar_label: Auto Report
description: "Auto-generate a Screen Reader Report from your Appium tests on TestMu AI real devices: the screenReader capabilities, Standard and Linear coverage modes, the eight screen reader checks, and where to find the report."
keywords:
  - screen reader report
  - autoReport capability
  - linearNavigation
  - linearNavigationTimeout
  - talkback report
  - voiceover report
  - screen reader automation
  - appium accessibility
url: https://www.testmuai.com/support/docs/accessibility-screen-reader-automation-auto-report/
site_name: TestMu AI
slug: accessibility-screen-reader-automation-auto-report/
canonical: https://www.testmuai.com/support/docs/accessibility-screen-reader-automation-auto-report/
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
          "name": "Auto Report",
          "item": `${BRAND_URL}/support/docs/accessibility-screen-reader-automation-auto-report/`
        }]
      })
    }}
></script>

# Screen Reader Automation: Auto Report

<RealDeviceTag value="Real Device" />

Auto Report generates a **Screen Reader Report** for an Appium session with no change to your test code. You add a `screenReader` block to your capabilities, <BrandName /> turns on TalkBack or VoiceOver on the allocated real device, and as your test moves through the app every stable screen is traversed with the screen reader. The report records the focus order, the text spoken for each element, and the result of eight screen reader checks.

## When to use this

Use Auto Report when you want screen reader coverage across **everything your suite already touches**, on every build, without writing assertions. It is the fastest way to get audit evidence and to spot screens where focus skips a control or the spoken output is empty or generic. When you need a hard pass or fail on a specific control, add [Executor Hooks](/support/docs/accessibility-screen-reader-automation-hooks/) on top.

## Prerequisites

- An Appium test project targeting <BrandName /> **real devices** (Android 11 or later, iOS 15 or later).
- `LT_USERNAME` / `LT_ACCESS_KEY` available to the process.
- Screen Reader Automation enabled for your organization. See [Screen Reader Automation (Overview)](/support/docs/accessibility-screen-reader-automation/#supported-platforms).

## Capabilities reference

All keys sit inside `LT:Options`, alongside the existing accessibility capabilities.

| Capability | Path | Type | Default | Description |
|---|---|---|---|---|
| `accessibility` | `LT:Options.accessibility` | boolean | `false` | Master switch. Must be `true` for any screen reader key to take effect. |
| `screenReader` | `LT:Options.accessibilityOptions.screenReader` | object | – | Screen Reader Automation block. |
| `autoReport` | `…screenReader.autoReport` | boolean | `false` | Generates the Screen Reader Report for the session. |
| `linearNavigation` | `…screenReader.linearNavigation` | boolean | `false` | `false` runs **Standard mode** (viewport only). `true` runs **Linear mode** (full traversal, including scrollable content). See [Coverage modes](#coverage-modes). |
| `linearNavigationTimeout` | `…screenReader.linearNavigationTimeout` | integer (ms) | `300000` | Maximum active traversal time per screen in Linear mode. Accepted range is 300000 to 480000. See [Linear navigation timeout](#linear-navigation-timeout). |

:::warning
The `screenReader` block is honoured only when `accessibility` is `true`. If `accessibility` is absent or `false`, the block is ignored and a warning is written to the session logs: *"screenReader ignored — accessibility capability is not enabled."* No report is generated.
:::

## Example: enabling the report

Enable accessibility, generate the report, and use Linear mode with the default timeout.

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
      "screenReader": {
        "autoReport": true,
        "linearNavigation": true,
        "linearNavigationTimeout": 300000
      }
    }
    //highlight-end
  }
}
```

  </TabItem>
  <TabItem value="java" label="Java">

```java
Map<String, Object> screenReader = new HashMap<>();
screenReader.put("autoReport", true);
screenReader.put("linearNavigation", true);
screenReader.put("linearNavigationTimeout", 300000);

Map<String, Object> accessibilityOptions = new HashMap<>();
accessibilityOptions.put("screenReader", screenReader);

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
        "screenReader": {
            "autoReport": True,
            "linearNavigation": True,
            "linearNavigationTimeout": 300000,
        }
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
      screenReader: {
        autoReport: true,
        linearNavigation: true,
        linearNavigationTimeout: 300000,
      },
    },
    //highlight-end
  },
};
```

  </TabItem>
  <TabItem value="yaml" label="YAML (HyperExecute)">

```yaml
accessibility: true
accessibilityOptions:
  screenReader:
    autoReport: true
    linearNavigation: true
    linearNavigationTimeout: 300000
```

  </TabItem>
</Tabs>

The same key paths work across every <BrandName /> configuration surface: W3C capabilities, YAML config, framework service config, and [HyperExecute](/support/docs/selenium-hyperexecute-accessibility-tests/) YAML.

## How the report is captured

1. The session is allocated a real device that supports the screen reader, and TalkBack or VoiceOver is turned on before your first Appium command.
2. Each time your test performs a command that can change the screen, such as a tap, a back navigation or an `executeScript` call, the platform checks whether the screen has actually changed. Screens that look the same as one already captured are skipped, so a test that taps around a single screen does not produce duplicate entries.
3. For every new screen, the screen reader traverses the content. In Standard mode that is the initial viewport. In Linear mode the traversal continues through scrollable containers and carousels until the content is exhausted or the timeout is reached.
4. Each focus step is recorded with a screenshot, the focused element's accessibility metadata, and the exact spoken output, and the eight checks are evaluated.
5. When the session ends the screen reader is turned off, the device's accessibility settings are restored, and the report is attached to the session.

## Coverage modes

| | Standard mode | Linear navigation mode |
|---|---|---|
| **Capability** | `linearNavigation: false`, or omit the key | `linearNavigation: true` |
| **What is captured** | Elements visible in the initial viewport. One snapshot per screen. | The complete traversal path, including scrollable containers, carousels and off-screen content. Multiple snapshots per screen. |
| **Time per screen** | Shortest | Longer, and bounded by `linearNavigationTimeout` |
| **Reading order check** | Evaluated | Not applicable. The report marks it *Not applicable — linear navigation enabled* rather than as a pass. |
| **Best for** | Quick checks on every build, screens with little scrolling | Long lists, feeds, product grids, carousels, full-coverage audits |

Linear mode detects repeating traversal loops, for example infinite scroll or a cyclic carousel, and stops early instead of consuming the whole timeout.

## Linear navigation timeout

`linearNavigationTimeout` bounds the **active traversal phase** of a single screen in Linear mode.

| | Value |
|---|---|
| **Default** | 300000 ms (5 minutes) |
| **Minimum** | 300000 ms (5 minutes) |
| **Maximum** | 480000 ms (8 minutes) |

- A value below the minimum is raised to the minimum, and a value above the maximum is lowered to the maximum. A warning is written to the session logs in both cases. The session does **not** fail on an out-of-range value.
- The timeout covers traversal only. Snapshot capture, element analysis and report assembly can extend the total session time beyond it.
- If a screen hits the timeout, the report is still generated from what was captured. It is marked **partial**, shows the screen and element index where traversal stopped, and carries a banner explaining how to extend coverage.

## Checks in the report

Every focus step is evaluated against the eight checks below. Each check maps to an entry in the <BrandName /> rule repository with the same ID, description and severity used elsewhere in App Accessibility, so failures look and behave like any other accessibility issue in the dashboard.

| Check | What it verifies | WCAG |
|---|---|---|
| Focus order for interactive elements | Every interactive element receives screen reader focus. | 2.4.3 |
| Focus order for non-interactive elements | Meaningful non-interactive content receives screen reader focus. | 2.4.3 |
| Meaningful reading order | The traversal sequence follows a logical visual order. Standard mode only. | 1.3.2 |
| Meaningful spoken output | The spoken text for a focused element is descriptive, not empty or generic. | 4.1.2 |
| Meaningful spoken output for images | Images announce meaningful alternative text. | 1.1.1 |
| Duplicate state info | State is not repeated in the spoken output, for example "checked, checked". | 4.1.2 |
| Duplicate type info | The element type is not repeated in the spoken output, for example "button, button". | 4.1.2 |
| Missing visible label | The visible on-screen label is contained in the spoken output. | 2.5.3 |

See the [iOS rule repository](/support/docs/accessibility-ios-rule-repository/) and the [Android rule repository](/support/docs/accessibility-android-rule-repository/) for the full rule catalogue.

## What the report contains

- **Header.** App name and version, device, OS version, screen reader and version, coverage mode (a **Linear Navigation** pill when enabled), session ID and duration.
- **Summary.** **Elements Traversed** and **Checks Run** counts, a pass and fail count per check, and a per-screen breakdown.
- **Traversal view.** Every focus step in order: step index, element, spoken output, and a screenshot with the focused element highlighted. Select an element to see its accessibility metadata (label, role, state, hint) and the check results for that step.
- **Failures.** Each failure shows the actual spoken output next to what the check expected, plus the element's metadata, so a missing or duplicated label is visible without re-running the test. Failures can be filtered by check, screen and severity.
- **Partial banner.** If traversal was cut short by the timeout, the report says so and where it stopped.

{/* IMAGE PLACEHOLDER: Screen Reader Report detail page showing the traversal view with the highlighted element, spoken output and check results. Save the screenshot at the path below, then uncomment.
<img loading="lazy" src={require('../assets/images/accessibility-testing/screen-reader-automation/auto-report-traversal.png').default} alt="Screen Reader Report showing a device screenshot with the focused element highlighted, the spoken output for that element, and pass or fail results for each screen reader check" className="doc_img"/>
*/}

## Viewing the report

You can reach a Screen Reader Report from two places.

1. **From the session.** Open the [App Automation dashboard](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/), open the test, and click **Get report**. Tests that ran with `autoReport` open the Screen Reader Report directly.
2. **From the Accessibility dashboard.** Open the [Accessibility dashboard](https://www.testmuai.com/login/?redirectTo=https://accessibility.lambdatest.com/) and choose **Screen Reader** in the left navigation. The list shows every screen reader test in your organization and can be filtered by project, build, date and user.

{/* IMAGE PLACEHOLDER: Accessibility dashboard with Screen Reader selected in the left navigation and the list of screen reader tests. Save the screenshot at the path below, then uncomment.
<img loading="lazy" src={require('../assets/images/accessibility-testing/screen-reader-automation/screen-reader-list.png').default} alt="Accessibility dashboard with the Screen Reader entry selected in the left navigation and a filterable list of screen reader tests" className="doc_img"/>
*/}

Reports can be shared with a link and exported. The shared view includes the **Screen Reader** tab, and the export contains the full traversal with the spoken output for every step. See [Exporting & Sharing Reports](/support/docs/accessibility-exporting-sharing-reports/).

## Auto Report and rule scans together

Auto Report is independent of the rule-based accessibility scan.

- Enabling `screenReader` alone does **not** run the App Accessibility rule scan. Call `lambda-accessibility-scan` at each screen you want rule-checked, as described in [Native App Automation](/support/docs/accessibility-native-app-automation-test/).
- Calling `lambda-accessibility-scan` does **not** generate a Screen Reader Report. Set `autoReport: true` for that.
- Both can be enabled in the same session. You get a rule scan report and a Screen Reader Report for the same build.

## Troubleshooting

| Symptom | What to check |
|---|---|
| No Screen Reader Report for the session | `accessibility` must be `true` in the same `LT:Options` block as `accessibilityOptions.screenReader`. Look for the *"screenReader ignored"* warning in the session logs. Confirm the feature is enabled for your organization. |
| Session fails with *"Screen Reader Automation is supported on Android and iOS real devices only."* | The capabilities requested an emulator or simulator. Set `isRealMobile: true` and choose a real device. |
| Session fails with *"Screen Reader Automation requires Android 11+ / iOS 15+."* | Pick a device on a supported OS version. The message names the OS and version that was selected. |
| Report is marked partial | A screen hit `linearNavigationTimeout`. Raise the timeout, up to 480000 ms, or split a very long screen across test steps. |
| Meaningful reading order shows *Not applicable* | Linear mode was enabled. Run the same test in Standard mode if you need that check. |
| Fewer screens in the report than the test visits | Screens that look identical to one already captured are skipped. Check the test actually reaches a visually different screen, and that waits let the screen settle before the next command. |
| Same screen appears twice with different content | The screen changed between captures, for example a spinner resolved late. Add an explicit wait before the command that leaves the screen. |

## Related docs

- [Screen Reader Automation (Overview)](/support/docs/accessibility-screen-reader-automation/)
- [Screen Reader Automation: Executor Hooks](/support/docs/accessibility-screen-reader-automation-hooks/)
- [Native App Automation Appium (Overview)](/support/docs/accessibility-native-app-automation-test/)
- [Appium TestNG](/support/docs/accessibility-appium-testng/)
- [Appium WebdriverIO](/support/docs/accessibility-appium-webdriverio/)
- [Exporting & Sharing Reports](/support/docs/accessibility-exporting-sharing-reports/)
