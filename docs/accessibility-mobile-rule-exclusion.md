---
id: accessibility-mobile-rule-exclusion
title: Rule and Category Exclusion for Mobile App Accessibility
sidebar_label: Rule & Category Exclusion
description: "Exclude individual accessibility rules or whole rule categories from mobile app accessibility scans on Android and iOS, through Appium capabilities in automation or the category toggle in the manual App Scanner."
keywords:
  - accessibility excludeRules
  - accessibility excludeRuleCategories
  - mobile accessibility rule exclusion
  - exclude accessibility rule category
  - appium accessibility capabilities
url: https://www.testmuai.com/support/docs/accessibility-mobile-rule-exclusion/
site_name: TestMu AI
slug: accessibility-mobile-rule-exclusion/
canonical: https://www.testmuai.com/support/docs/accessibility-mobile-rule-exclusion/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

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
          "name": "Accessibility Testing",
          "item": `${BRAND_URL}/support/docs/accessibility-testing/`
        },{
          "@type": "ListItem",
          "position": 4,
          "name": "Rule and Category Exclusion (Mobile)",
          "item": `${BRAND_URL}/support/docs/accessibility-mobile-rule-exclusion/`
        }]
      })
    }}
></script>

# Rule and Category Exclusion for Mobile App Accessibility

Rule and category exclusion lets you remove individual accessibility rules, or entire rule categories, from a mobile app accessibility scan **before it runs**. It is available on both mobile surfaces:

- **Appium automation**, through two capabilities: `accessibility.excludeRules` and `accessibility.excludeRuleCategories`.
- **Manual App Scanner**, through a one-click checkbox on each category header in the scan settings panel, alongside the per-rule toggles that already existed.

Excluded rules are skipped on the device, so they never appear in the findings, never affect the score, and are recorded with the report so any result can be reproduced later. A session that sets no exclusions behaves exactly as before.

## When to use this

Use exclusion when your team has a **known, accepted deviation** that should not fail every scan, for example a design-system contrast token that has been signed off, or an intentionally non-standard traversal order. Without exclusion the only options were to live with permanently failing builds, or to hide the issue in the report afterwards, which distorts the score and cannot be enforced in CI.

Exclusion is part of the **scan configuration**, so it is enforceable in CI and applies consistently to every scan in the session. To suppress a single finding after a scan has run, use [Hide and Restore Issues](/support/docs/accessibility-hide-restore-issues/) instead.

:::note
The capabilities on this page are **mobile-only** (Android and iOS). For web, see [Rule and Category Exclusion for Web Accessibility Automation](/support/docs/accessibility-web-automation-rule-exclusion/) and [Rule and Category Exclusion in DevTools and Scheduled Scans](/support/docs/accessibility-devtools-rule-exclusion/).
:::

## Appium automation

### Prerequisites

- An Appium test project targeting <BrandName /> **real devices** (Android or iOS).
- Accessibility enabled on the session with `accessibility: true`.
- Scans triggered with the `lambda-accessibility-scan` hook at each stable screen. See [Native App Automation (Overview)](/support/docs/accessibility-native-app-automation-test/).

### Capabilities reference

| Capability | Type | Effect |
|---|---|---|
| `accessibility.excludeRules` | array of rule IDs, or a comma-separated string | Each named rule is removed from the effective rule set for the session |
| `accessibility.excludeRuleCategories` | array of category slugs, or a comma-separated string | Every rule in each named category is removed from the effective rule set |

Both capabilities are optional and can be combined. They sit alongside the existing scan configuration capabilities (`accessibility.wcagVersion`, `accessibility.bestPractice`, `accessibility.betaRules`, `accessibility.aiEnabled`) described in [Scan Configurations via Capabilities](/support/docs/accessibility-automation-scan-configurations/).

### Rule IDs

Rule IDs are the mobile rule catalog's own identifiers, passed exactly as the catalog publishes them. Matching is case-insensitive. Examples include `DuplicateAccessibilityCheck`, `TraversalOrderMismatch`, `UndersizedTouchTarget` and `image-in-text`.

The catalog carries more than one naming style: most rules are PascalCase, AI-powered rules are kebab-case, and a few iOS-only rules are camelCase. Use the ID as published rather than inferring it from the display name. The full rule list for each platform is in the [Android Rule Repository](/support/docs/accessibility-android-rule-repository/) and the [iOS Rule Repository](/support/docs/accessibility-ios-rule-repository/).

### Category slugs

A category slug is the lowercase, hyphenated form of the category's display name. The mobile catalog has ten categories, shared by Android and iOS:

| Category | Slug |
|---|---|
| Accessibility Labels | `accessibility-labels` |
| Accessible Elements | `accessible-elements` |
| Accessible Images | `accessible-images` |
| Color Contrast | `color-contrast` |
| Content Structure | `content-structure` |
| Display Orientation | `display-orientation` |
| Focus and Navigation | `focus-and-navigation` |
| Input Purpose | `input-purpose` |
| Readable Text and Layout | `readable-text-and-layout` |
| Touch Target Size and Spacing | `touch-target-size-and-spacing` |

Matching is case-insensitive and tolerates spaces, so `"Color Contrast"` is accepted as well as `color-contrast`.

### Example

Enable accessibility, target WCAG 2.1 AA, skip two specific rules, and skip the whole Color Contrast category.

<Tabs className="hidden">
<TabItem value="json" label="Capabilities (JSON)" default>

```json
"LT:Options": {
  "accessibility": true,
  "accessibility.wcagVersion": "wcag21aa",
  "accessibility.excludeRules": ["UndersizedTouchTarget", "DuplicateAccessibilityCheck"],
  "accessibility.excludeRuleCategories": "color-contrast"
}
```

</TabItem>
<TabItem value="java" label="Java">

```java
MutableCapabilities caps = new MutableCapabilities();
caps.setCapability("accessibility", true);
caps.setCapability("accessibility.wcagVersion", "wcag21aa");
caps.setCapability("accessibility.excludeRules", Arrays.asList("UndersizedTouchTarget", "DuplicateAccessibilityCheck"));
caps.setCapability("accessibility.excludeRuleCategories", "color-contrast");
```

</TabItem>
<TabItem value="python" label="Python">

```python
caps = {
    "accessibility": True,
    "accessibility.wcagVersion": "wcag21aa",
    "accessibility.excludeRules": ["UndersizedTouchTarget", "DuplicateAccessibilityCheck"],
    "accessibility.excludeRuleCategories": "color-contrast",
}
```

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
const capabilities = {
  "accessibility": true,
  "accessibility.wcagVersion": "wcag21aa",
  "accessibility.excludeRules": ["UndersizedTouchTarget", "DuplicateAccessibilityCheck"],
  "accessibility.excludeRuleCategories": "color-contrast",
};
```

</TabItem>
</Tabs>

The scan is then triggered at each stable screen as usual:

```java
driver.executeScript("lambda-accessibility-scan");
```

### How the effective rule set is resolved

Exclusion is applied on top of the existing scan configuration. Every step only removes rules, so an exclusion can never add a rule back, and the first step that removes a rule is the reason recorded for it:

1. **Platform.** Only rules that apply to the session's platform (Android or iOS) are in scope.
2. **WCAG version and level.** Cumulative, as before: `wcag21aa` includes every WCAG 2.0 and 2.1 rule at level A or AA.
3. **Group toggles.** Rules behind an off toggle (Best Practice, Beta, AI-powered, Needs Review) are removed.
4. **Excluded categories.** Every rule in a category named in `accessibility.excludeRuleCategories` is removed.
5. **Excluded rules.** Every rule named in `accessibility.excludeRules` is removed.

Consequences of this order:

- A rule named in `excludeRules` that also belongs to an excluded category is attributed to the **category**.
- A rule that is already outside the WCAG range and is also named in `excludeRules` is a silent no-op.
- A rule that is already off because of a group toggle is attributed to the **toggle**, not to the exclusion.

### What happens at session creation

Exclusions are validated when the session is created, before a device is allocated.

| Input | Outcome |
|---|---|
| Valid rule ID or category slug | Applied |
| Unknown rule ID | Logged and dropped; the session proceeds |
| Unknown category slug | Logged and dropped; the session proceeds |
| Rule exists but does not apply to this platform | Logged and dropped; the session proceeds |
| Wrong type (a number, for example) | The capability is ignored with a warning; the session proceeds |
| Every entry invalid | The scan runs with the full configured rule set |
| Exclusions remove every in-scope rule | **Session creation is rejected.** No test is created and no device is allocated |
| Platform is not Android or iOS | Rejected. The capabilities are mobile-only |

A misspelled rule ID or category never fails your Appium session. The scan runs with whatever exclusions were valid, and the session log records which entries were dropped and why.

#### Excluding every rule rejects the session

If the exclusions leave nothing to evaluate, whether by naming every rule, excluding every category, or a mix of both, the session is refused at creation with an HTTP 400 error. The error surfaces at driver initialisation in your test, no test record is created, and no device time is used. The message states how many rules were in scope and how many each list removed, for example:

```
All 25 rules in scope for WCAG 2.1 AA were excluded by this configuration (12 by category, 13 by rule).
Include at least one rule to run an accessibility scan. Remove a value from accessibility.excludeRuleCategories
or accessibility.excludeRules, or set accessibility=false to disable accessibility scanning for this session.
```

Remove at least one entry, or set `accessibility` to `false` if that session should not run an accessibility scan at all.

### After the scan

- **In your test.** The value returned by the `lambda-accessibility-scan` command carries a notice, once per test, naming each rule the exclusions removed and why, for example:

  ```
  ACCESSIBILITY_RULES_EXCLUDED: 2 rule(s) will not be evaluated — UndersizedTouchTarget (excluded_rule), ...
  ```

  A scan with nothing to report returns the same value as before, so existing callers see no change.
- **In the report.** The **Applied Settings** panel groups removed rules under **Excluded by category** and **Excluded by rule**, and greys out a category that was excluded as a whole.
- **In the data.** The resolved exclusion set, with the reason each rule was removed, is stored with the test and returned by the test-detail API, so a historical result can be reproduced.

{/* IMAGE PLACEHOLDER: report Applied Settings panel showing the "Excluded by category" and "Excluded by rule" sections for an automation scan. Save the screenshot at the path below, then uncomment.
<img loading="lazy" src={require('../assets/images/accessibility-testing/features/rule-exclusion/applied-settings-excluded-mobile.png').default} alt="Accessibility report Applied Settings panel with a greyed-out Color Contrast category under Excluded by category and two rules listed under Excluded by rule" className="doc_img"/>
*/}

## Manual App Scanner

Category exclusion is also available in manual mobile tests, through the App Scanner's scan settings panel.

1. Start a mobile app accessibility scan through the Manual flow and open the **scan configuration** panel.
2. Each category header has a **checkbox** that switches all of the category's rules off or on together. It has three states, all on, partly on and all off, so a partly selected category is visible at a glance.
3. Rules can still be switched off one at a time within a category, as before.
4. A category with no rules in scope for the selected WCAG version and level stays disabled.
5. Run the scan. Only the selected rules are evaluated on the device.

Excluding a category here produces the same effective rule set as passing its slug in `accessibility.excludeRuleCategories` on automation. The panel records **why** each rule is off, whether it was excluded as part of a category or switched off individually, and sends that with the scan. The report's Applied Settings panel uses it to grey out a category that was excluded whole, while rules turned off one by one are listed as before.

Last-used selections, including category exclusions, are remembered per user and per platform and pre-fill the panel the next time it is opened. See [Scan Configurations (Manual)](/support/docs/accessibility-app-scanner-scan-configurations/) for the rest of the panel.

{/* IMAGE PLACEHOLDER: App Scanner scan configuration panel showing the tri-state checkbox on a category header. Save the screenshot at the path below, then uncomment.
<img loading="lazy" src={require('../assets/images/accessibility-testing/features/rule-exclusion/app-scanner-category-checkbox.png').default} alt="App Scanner scan configuration panel with the Color Contrast category checkbox switched off and every rule in the category disabled" className="doc_img"/>
*/}

## What to expect in results

- **Filtered before execution.** Excluded rules are never run on the device. They are absent from the findings and from the score by construction, not filtered out of the results afterwards.
- **Score reflects the evaluated set.** The accessibility score is computed only over the rules that ran.
- **Only exclusions are reported.** Rules removed by the WCAG range or by a group toggle are not listed as excluded, so a session that sets no exclusions sees no new notices.
- **Reproducible.** The exclusion set and the reason for each removed rule are persisted with the test and visible in the report.

## FAQ

**Can I exclude a rule for one screen only?**
No. Exclusions apply to every scan in the session. To suppress a single finding after the fact, use [Hide and Restore Issues](/support/docs/accessibility-hide-restore-issues/).

**Is there an include list?**
No. Exclusion only removes rules. To run a narrower set, lower the WCAG target or switch off group toggles, then exclude what remains.

**What if I pass a web rule ID or category on a mobile session?**
It is logged and dropped as not applicable to the platform, and the session proceeds.

**Why does my exclusion not appear in the report?**
Check the session log for a dropped entry (a misspelled ID or slug), and check whether the rule was already removed by the WCAG range or a group toggle. A rule removed earlier in the resolution order is attributed to that step, not to the exclusion.

**Do I need to change anything if I do not use exclusions?**
No. The capabilities are opt-in. A session that sets neither produces the same rule set as before.

## Related docs

- [Scan Configurations via Capabilities (Automation)](/support/docs/accessibility-automation-scan-configurations/)
- [Scan Configurations (Manual)](/support/docs/accessibility-app-scanner-scan-configurations/)
- [Native App Automation (Overview)](/support/docs/accessibility-native-app-automation-test/)
- [Accessibility App Scanner (Overview)](/support/docs/accessibility-app-scanner/)
- [Rule and Category Exclusion for Web Accessibility Automation](/support/docs/accessibility-web-automation-rule-exclusion/)
- [Rule and Category Exclusion in DevTools and Scheduled Scans](/support/docs/accessibility-devtools-rule-exclusion/)
- [Hide and Restore Issues](/support/docs/accessibility-hide-restore-issues/)
- [Android Rule Repository](/support/docs/accessibility-android-rule-repository/)
- [iOS Rule Repository](/support/docs/accessibility-ios-rule-repository/)
