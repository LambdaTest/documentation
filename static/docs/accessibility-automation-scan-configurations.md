# Scan Configurations via Capabilities (Automation)

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Scan configuration in automation is a set of Appium **capabilities** that scope each accessibility scan to a WCAG target and a set of rule groups. Because there is no scan-configuration panel in automation, every test carries its own configuration and the effective rule set is derived from the capability values you pass. This is the automation counterpart to the manual [Scan Configurations](/support/docs/accessibility-app-scanner/) panel.

Per-rule enable/disable picking is a **Manual-only** feature and is not used in automation. In automation, the rule set is computed from the WCAG version plus the group toggles.

**autoScan is not supported on real devices.** The `accessibility.autoscan` capability is a **web automation** capability only. It cannot be used to scan a whole app flow on a real device the way it scans a whole web flow on desktop.

On real devices, every scan must be triggered explicitly with the `lambda-accessibility-scan` hook at each stable screen. A screen that is never followed by a hook call is never scanned. See how to [run accessibility scans with Selenium on web](/support/docs/accessibility-automation-test/) for autoScan behavior.

## When to Use Scan Capabilities

Reach for these capabilities when you already run Appium against TestMu AI real devices and want each accessibility scan scoped to a specific WCAG target and rule set, without opening a UI.

Each test embeds its own scan configuration, so a build's results are reproducible from the capabilities alone. For the surrounding test setup and the `lambda-accessibility-scan` hook, see how to [set up Appium accessibility scans](/support/docs/accessibility-native-app-automation-test/).

## Prerequisites

Before you set these capabilities, confirm the following are in place.

- An Appium test project targeting TestMu AI **real devices** (Android or iOS).
- `LT_USERNAME` / `LT_ACCESS_KEY` available to the process.
- Accessibility enabled on the session via the `accessibility` master capability.

## Capabilities Reference

The table below lists every accessibility scan capability, its type, allowed values, and the default applied for Real Device App Automation.

| Capability | Type | Allowed values | Default (RD App Automation) |
|---|---|---|---|
| `accessibility` | boolean | `true` / `false` | - (master toggle, must be `true` to enable a11y scanning) |
| `accessibility.wcagVersion` | string | `wcag2a`, `wcag2aa`, `wcag2aaa`, `wcag21a`, `wcag21aa`, `wcag21aaa`, `wcag22a`, `wcag22aa`, `wcag22aaa` | `wcag21aa` |
| `accessibility.bestPractice` | boolean | `true` / `false` | `true` |
| `accessibility.betaRules` | boolean | `true` / `false` | `true` |
| `accessibility.aiEnabled` | boolean | `true` / `false` | `false` |

Keep these constraints in mind when reading the defaults above.

- Defaults apply only when `accessibility` is `true` and the specific capability is omitted.
- `accessibility.aiEnabled` is the same AI toggle used elsewhere in accessibility; it is reused here.
- A backend capability `accessibility.needsReview` also exists but is not part of the standard automation scan config (defaults off).

## How the Effective Rule Set Is Computed

The rule set for a test is derived from the WCAG version and the group toggles, using the same logic as the manual panel.

- **WCAG inheritance.** A higher version or level includes the lower ones. Selecting `wcag21aa` runs every rule whose success criterion is in WCAG **2.0 or 2.1** at level **A or AA**. WCAG 2.2 rules and AAA-only rules are not included until the version or level is raised.
- **Group combination.** Some rules carry a Best Practice, Beta, or AI tag. A rule runs only if **both** its WCAG criterion is in range **and** every tag it carries is switched on. For example, a Best Practice rule is skipped when `accessibility.bestPractice` is `false`, even if its WCAG criterion is in range.

## Set Capabilities on a Test

Enable accessibility, target WCAG 2.1 AA, keep Best Practice and Beta rules on, and leave AI rules off. Select your language below and copy the capability block into your Appium session setup.

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

With these capabilities in place, trigger the scan at each stable screen with the `lambda-accessibility-scan` hook.

```java
driver.executeScript("lambda-accessibility-scan");
```

Only the rules in the effective set are evaluated, and the report for that build contains results for exactly those rules.

## What the Scan Reports Back

Each scan returns violations only for the rules in the test's effective set, along with the configuration that produced them.

- **Scoped results.** Each scan reports violations only for the rules in the test's effective set. Rules outside the WCAG range or behind an off group toggle do not appear and do not affect the accessibility score for that scan.
- **Configuration recorded with the test.** The WCAG version and group toggles are stored alongside the scan, so the team can always see how a given result was produced.
- **Applied rules are visible in the report.** The report header shows the applied configuration as tags (for example, **WCAG 2.1 AA**, **Best Practices**, **Beta Rules**), and the **Applied Settings** panel lists every rule that was evaluated, grouped by category and searchable, so the exact selected rules can be confirmed for any scan.

The report shows the applied WCAG target and group tags, and the **Applied Settings** panel lists the selected rules by category. To open a build and read these results, see how to [review accessibility reports in the dashboard](/support/docs/accessibility-testing-navigating-dashboard/).

{/* IMAGE PLACEHOLDER: report Applied Settings panel showing the rules evaluated for the scan. Save the screenshot at the path below, then uncomment.

*/}

## Automation Settings

This section details the configuration options available for your automated accessibility tests, ensuring comprehensive and efficient assessments.

To enable the accessibility testing within your automated test suite, set the `accessibility: true` in your configuration file. You can also define other settings capabilities as described below.

```java
"accessibility" : true,                 // Enable accessibility testing
"accessibility.wcagVersion": "wcag21a", // Specify WCAG version (e.g., WCAG 2.1 Level A)
"accessibility.bestPractice": false,    // Exclude best practice issues from results
"accessibility.needsReview": true       // Include issues that need review
```

### Key Configurations Options

By configuring these options effectively, you can tailor your accessibility tests to achieve a balance between thoroughness and efficiency, ensuring your web applications are inclusive for all users.

#### 1. Enable Accessibility Checks

- **Purpose:** Activate accessibility testing within your automated test suite. This allows you to identify and address accessibility violations that might hinder usability for users with disabilities.
- **Implementation:** Set the `accessibility` property to `true` within your configuration file.

```bash
accessibility : true
```

#### 2. WCAG Version

- **Purpose:** Define the specific Web Content Accessibility Guidelines (WCAG) version your tests should evaluate against. WCAG defines internationally recognized standards for web accessibility.
- **Options:** Common options include WCAG 2.0, WCAG 2.1 Level A, or WCAG 2.1 Level AAA. Each level represents increasing accessibility requirements.
- **Implementation:** Specify the desired WCAG version using the wcagVersion property within your configuration file.

```bash
accessibility.wcagVersion: 'wcag21a'
```

#### 3. Best Practices Checks

- **Purpose:** Include or exclude checks that go beyond the defined WCAG standards but are considered good practices for optimal usability.
- **Default Value:** The default setting is false, focusing strictly on WCAG violations.
- **Implementation:** Enable best practice checks by setting bestPractice to true in your configuration file.

```bash
accessibility.bestPractice: false
```

#### 4. Needs Review

- **Purpose:** Flag potential accessibility issues that might require human evaluation for definitive assessment.
- **Implementation:** Enable needs review checks by setting needsReview to true in your configuration file. This ensures potentially ambiguous issues get flagged for manual review.

```bash
accessibility.needsReview: true
```

## Automation Versus Manual Scan Configuration

This page covers configuring scans through **capabilities in automation**. For hand-picking individual rules and reusing last-used settings in the **manual** App Scanner flow, see how to [pick rules in the manual App Scanner](/support/docs/accessibility-app-scanner/).

## Related Accessibility Automation Guides

Continue with the surrounding setup and the pages that read the scans these capabilities produce.

- [Appium Accessibility Testing (Native App Automation)](/support/docs/accessibility-native-app-automation-test/) covers the shared Appium setup, the `lambda-accessibility-scan` hook, and the TestNG and WebdriverIO runner guides.
- [Accessibility App Scanner (Manual Scan Configurations)](/support/docs/accessibility-app-scanner/) covers per-rule picking in the manual flow.
- [Tag Support for Accessibility Scans](/support/docs/accessibility-tag-support/) covers tagging scans for filtering in reports.
