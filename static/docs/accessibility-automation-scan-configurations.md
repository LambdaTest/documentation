# Scan Configurations via Capabilities (Automation)

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

In automation there is no scan-configuration panel. The scan scope is supplied through each test's **capabilities**, so every test carries its own configuration and the effective rule set is derived from these values. This is the automation counterpart to the manual [Scan Configurations](/support/docs/accessibility-app-scanner-scan-configurations/) panel.

Per-rule enable/disable picking is a **Manual-only** feature and is not used in automation. In automation, the rule set is computed from the WCAG version plus the group toggles.

**autoScan is not supported on real devices.** The `accessibility.autoscan` capability is a **web automation** capability only. It cannot be used to scan a whole app flow on a real device the way it scans a whole web flow on desktop.

On real devices, every scan must be triggered explicitly with the `lambda-accessibility-scan` hook at each stable screen. A screen that is never followed by a hook call is never scanned. See [Automating Accessibility Testing with Selenium](/support/docs/accessibility-automation-test/) for autoScan on web.

## When to use this

Use these capabilities when users **already run Appium** against TestMu AI real devices and want each accessibility scan scoped to a specific WCAG target and set of rule groups, without opening a UI. See [Native App Automation Appium (Overview)](/support/docs/accessibility-native-app-automation-test/) for the surrounding test setup and the `lambda-accessibility-scan` hook.

## Prerequisites

- An Appium test project targeting TestMu AI **real devices** (Android or iOS).
- `LT_USERNAME` / `LT_ACCESS_KEY` available to the process.
- Accessibility enabled on the session via the `accessibility` master capability.

## Capabilities reference

| Capability | Type | Allowed values | Default (RD App Automation) |
|---|---|---|---|
| `accessibility` | boolean | `true` / `false` | - (master toggle, must be `true` to enable a11y scanning) |
| `accessibility.wcagVersion` | string | `wcag2a`, `wcag2aa`, `wcag2aaa`, `wcag21a`, `wcag21aa`, `wcag21aaa`, `wcag22a`, `wcag22aa`, `wcag22aaa` | `wcag21aa` |
| `accessibility.bestPractice` | boolean | `true` / `false` | `true` |
| `accessibility.betaRules` | boolean | `true` / `false` | `true` |
| `accessibility.aiEnabled` | boolean | `true` / `false` | `false` |

Notes:

- Defaults apply only when `accessibility` is `true` and the specific capability is omitted.
- `accessibility.autoscan` is deliberately absent from this table. It is a web automation capability and is **not supported for app automation on real devices**. Use the `lambda-accessibility-scan` hook instead.
- `accessibility.aiEnabled` is the same AI toggle used elsewhere in accessibility; it is reused here.
- A backend capability `accessibility.needsReview` also exists but is not part of the standard automation scan config (defaults off).

## How the effective rule set is computed

The rule set for a test is derived from the WCAG version and the group toggles, using the same logic as the manual panel:

- **WCAG inheritance.** A higher version or level includes the lower ones. Selecting `wcag21aa` runs every rule whose success criterion is in WCAG **2.0 or 2.1** at level **A or AA**. WCAG 2.2 rules and AAA-only rules are not included until the version or level is raised.
- **Group combination.** Some rules carry a Best Practice, Beta, or AI tag. A rule runs only if **both** its WCAG criterion is in range **and** every tag it carries is switched on. For example, a Best Practice rule is skipped when `accessibility.bestPractice` is `false`, even if its WCAG criterion is in range.

## Example: setting capabilities

Enable accessibility, target WCAG 2.1 AA, keep Best Practice and Beta rules on, and leave AI rules off.

```json
{
"accessibility": true,
"accessibility.wcagVersion": "wcag21aa",
"accessibility.bestPractice": true,
"accessibility.betaRules": true,
"accessibility.aiEnabled": false
}
```

```java
MutableCapabilities caps = new MutableCapabilities();
caps.setCapability("accessibility", true);
caps.setCapability("accessibility.wcagVersion", "wcag21aa");
caps.setCapability("accessibility.bestPractice", true);
caps.setCapability("accessibility.betaRules", true);
caps.setCapability("accessibility.aiEnabled", false);
```

```python
caps = {
"accessibility": True,
"accessibility.wcagVersion": "wcag21aa",
"accessibility.bestPractice": True,
"accessibility.betaRules": True,
"accessibility.aiEnabled": False,
}
```

```javascript
const capabilities = {
"accessibility": true,
"accessibility.wcagVersion": "wcag21aa",
"accessibility.bestPractice": true,
"accessibility.betaRules": true,
"accessibility.aiEnabled": false,
};
```

With these capabilities in place, the scan is triggered at each stable screen:

```java
driver.executeScript("lambda-accessibility-scan");
```

Only the rules in the effective set are evaluated, and the report for that build contains results for exactly those rules.

## What to expect in results

- **Scoped results.** Each scan reports violations only for the rules in the test's effective set. Rules outside the WCAG range or behind an off group toggle do not appear and do not affect the accessibility score for that scan.
- **Configuration recorded with the test.** The WCAG version and group toggles are stored alongside the scan, so the team can always see how a given result was produced.
- **Applied rules are visible in the report.** The report header shows the applied configuration as tags (for example, **WCAG 2.1 AA**, **Best Practices**, **Beta Rules**), and the **Applied Settings** panel lists every rule that was evaluated, grouped by category and searchable, so the exact selected rules can be confirmed for any scan.

The report shows the applied WCAG target and group tags, and the **Applied Settings** panel lists the selected rules by category:

{/* IMAGE PLACEHOLDER: report Applied Settings panel showing the rules evaluated for the scan. Save the screenshot at the path below, then uncomment.

*/}

## Product boundary

This page covers configuring scans through **capabilities in automation**. For hand-picking individual rules and reusing last-used settings in the **manual** App Scanner flow, see [Scan Configurations (Manual)](/support/docs/accessibility-app-scanner-scan-configurations/).

## Related docs

- [Native App Automation Appium (Overview)](/support/docs/accessibility-native-app-automation-test/)
- [Scan Configurations (Manual)](/support/docs/accessibility-app-scanner-scan-configurations/)
- [Appium TestNG](/support/docs/accessibility-appium-testng/)
- [Appium WebdriverIO](/support/docs/accessibility-appium-webdriverio/)
- [Tag Support for Accessibility Scans](/support/docs/accessibility-tag-support/)
