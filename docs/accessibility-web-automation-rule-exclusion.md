---
id: accessibility-web-automation-rule-exclusion
title: Rule and Category Exclusion for Web Accessibility Automation
sidebar_label: Rule & Category Exclusion (Automation)
description: "Exclude individual axe rules or whole rule categories from web accessibility automation scans on Selenium and Playwright sessions, on the cloud grid and on HyperExecute, with the accessibility.excludeRules and accessibility.excludeRuleCategories capabilities."
keywords:
  - accessibility excludeRules
  - accessibility excludeRuleCategories
  - web accessibility rule exclusion
  - exclude axe rule selenium playwright
  - accessibility automation capabilities
url: https://www.testmuai.com/support/docs/accessibility-web-automation-rule-exclusion/
site_name: TestMu AI
slug: accessibility-web-automation-rule-exclusion/
canonical: https://www.testmuai.com/support/docs/accessibility-web-automation-rule-exclusion/
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
          "name": "Accessibility Automation",
          "item": `${BRAND_URL}/support/docs/accessibility-automation/`
        },{
          "@type": "ListItem",
          "position": 4,
          "name": "Rule and Category Exclusion (Automation)",
          "item": `${BRAND_URL}/support/docs/accessibility-web-automation-rule-exclusion/`
        }]
      })
    }}
></script>

# Rule and Category Exclusion for Web Accessibility Automation

Rule and category exclusion lets you remove individual accessibility rules, or entire rule categories, from a web accessibility automation scan **before it runs**. Two capabilities control it, on **Selenium** and **Playwright** sessions, both on the <BrandName /> cloud grid and on **HyperExecute**:

| Capability | Type | Effect |
|---|---|---|
| `accessibility.excludeRules` | array of axe rule IDs, or a comma-separated string | Each named rule is removed from the effective rule set for the session |
| `accessibility.excludeRuleCategories` | array of category slugs, or a comma-separated string | Every rule in each named category is removed from the effective rule set |

Both are optional and can be combined. An excluded rule never runs: it is absent from the findings and from the score, the report says which rules ran and why the rest did not, and that snapshot is stored with the test so any result can be reproduced later. A session that sets neither capability behaves exactly as before.

## When to use this

Use exclusion when your team has a **known, accepted deviation** that should not fail every build, for example a design-system colour token whose contrast has been signed off, or a third-party widget you cannot change. Without exclusion the only options were to live with permanently failing builds, or to hide the finding in the report afterwards, which distorts the score and cannot be enforced in CI.

Exclusion is part of the **scan configuration**, so it is enforceable in CI and applies to every scan in the session, including scans triggered by `accessibility.autoscan`. To suppress a single finding after a scan has run, use [Hide and Restore Issues](/support/docs/accessibility-hide-restore-issues/) instead.

:::note
This page covers **automation** capabilities. For the same controls in the DevTools extension and in scheduled scans, see [Rule and Category Exclusion in DevTools and Scheduled Scans](/support/docs/accessibility-devtools-rule-exclusion/). For Appium mobile automation, see [Rule and Category Exclusion for Mobile App Accessibility](/support/docs/accessibility-mobile-rule-exclusion/).
:::

## Prerequisites

- A Selenium or Playwright project running on the <BrandName /> cloud grid or on HyperExecute, with accessibility enabled through `accessibility: true`. See [Configure Accessibility Automation](/support/docs/accessibility-automation-settings/).
- Scans triggered with the `lambda-accessibility-scan` hook, or automatically with `accessibility.autoscan`.

## Rule IDs

Web rule IDs are the standard **axe-core rule IDs**, passed as they are. Matching is case-insensitive. Examples:

| Rule | Rule ID |
|---|---|
| Elements must meet minimum colour contrast ratio thresholds | `color-contrast` |
| Images must have alternative text | `image-alt` |
| Form elements must have labels | `label` |
| Required ARIA attributes must be provided | `aria-required-attr` |
| Links must have discernible text | `link-name` |
| Links must be distinguishable without relying on colour | `link-in-text-block` |

You can copy a rule ID straight out of a report or from the [axe-core rule descriptions](https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md). Rules that axe-core marks as deprecated are not part of the catalog, because they never run. The [Web Rule Repository](/support/docs/accessibility-web-rule-repository/) maps rules to their WCAG success criteria.

The five AI-powered rules that <BrandName /> adds on top of axe have their own IDs: `alt-descriptive`, `alt-decorative-hidden`, `image-in-text`, `html-title-descriptive` and `html-lang-matches-visible-language`. AI rules do not run on automation sessions, so these IDs are dropped at validation if they are passed in `accessibility.excludeRules`. They can be switched off in DevTools and in scheduled scans.

## Category slugs

Categories are axe-core's own rule categories, addressed by a lowercase, hyphenated slug. Every rule belongs to exactly one category. The web catalog has twelve:

| Category | Slug |
|---|---|
| ARIA | `aria` |
| Structure and Semantics | `structure-and-semantics` |
| Text Alternatives | `text-alternatives` |
| Keyboard | `keyboard` |
| Name Role Value | `name-role-value` |
| Tables | `tables` |
| Forms | `forms` |
| Language | `language` |
| Time and Media | `time-and-media` |
| Color Contrast | `color-contrast` |
| Sensory and Visual Cues | `sensory-and-visual-cues` |
| Parsing | `parsing` |

Matching is case-insensitive and tolerates spaces, so `"Text Alternatives"` is accepted as well as `text-alternatives`. How many rules a category removes from a given scan depends on the selected WCAG version and level and on the Best Practices toggle, because each of those narrows the set before any exclusion applies.

:::tip
`color-contrast` is both a **rule ID** and a **category slug**. The capability you put it in decides what it means: in `accessibility.excludeRules` it removes the single contrast-ratio rule, in `accessibility.excludeRuleCategories` it removes every rule in the Color Contrast category.
:::

## Examples

Enable accessibility, target WCAG 2.1 AA, skip two specific rules, and skip the whole ARIA category.

<Tabs className="hidden">
<TabItem value="json" label="Capabilities (JSON)" default>

```json
"LT:Options": {
  "accessibility": true,
  "accessibility.wcagVersion": "wcag21aa",
  "accessibility.bestPractice": true,
  "accessibility.excludeRules": ["color-contrast", "image-alt"],
  "accessibility.excludeRuleCategories": "aria"
}
```

</TabItem>
<TabItem value="java" label="Selenium (Java)">

```java
capability.setCapability("accessibility", true);
capability.setCapability("accessibility.wcagVersion", "wcag21aa");
capability.setCapability("accessibility.bestPractice", true);
capability.setCapability("accessibility.excludeRules", Arrays.asList("color-contrast", "image-alt"));
capability.setCapability("accessibility.excludeRuleCategories", "aria");
```

</TabItem>
<TabItem value="python" label="Selenium (Python)">

```python
capabilities = {
    "accessibility": True,
    "accessibility.wcagVersion": "wcag21aa",
    "accessibility.bestPractice": True,
    "accessibility.excludeRules": ["color-contrast", "image-alt"],
    "accessibility.excludeRuleCategories": "aria",
}
```

</TabItem>
<TabItem value="javascript" label="Selenium (JavaScript)">

```javascript
const capabilities = {
  "accessibility": true,
  "accessibility.wcagVersion": "wcag21aa",
  "accessibility.bestPractice": true,
  "accessibility.excludeRules": ["color-contrast", "image-alt"],
  "accessibility.excludeRuleCategories": "aria",
};
```

</TabItem>
<TabItem value="playwright" label="Playwright">

```javascript
capabilities['accessibility'] = true;
capabilities['accessibility.wcagVersion'] = 'wcag21aa';
capabilities['accessibility.bestPractice'] = true;
capabilities['accessibility.excludeRules'] = ['color-contrast', 'image-alt'];
capabilities['accessibility.excludeRuleCategories'] = 'aria';
```

</TabItem>
</Tabs>

A comma-separated string is accepted wherever an array is, which is convenient in configuration files and CI variables:

```json
"accessibility.excludeRules": "color-contrast,image-alt",
"accessibility.excludeRuleCategories": "aria,tables"
```

**HyperExecute.** Pass the same capabilities from your test code. They are read and validated by the same logic as on the cloud grid, so nothing in `hyperexecute.yaml` needs to change. See [HyperExecute: Selenium accessibility automation](/support/docs/selenium-hyperexecute-accessibility-tests/).

## How the effective rule set is resolved

Exclusion is applied on top of the existing scan configuration. Every step only removes rules, so an exclusion can never add a rule back, and the first step that removes a rule is the reason recorded for it:

1. **WCAG version and level.** Cumulative, as before: `wcag21aa` includes every WCAG 2.0 and 2.1 rule at level A or AA.
2. **Best Practices toggle.** Best Practice rules are removed while `accessibility.bestPractice` is `false`. This is the only rule-level group toggle on web.
3. **Excluded categories.** Every rule in a category named in `accessibility.excludeRuleCategories` is removed.
4. **Excluded rules.** Every rule named in `accessibility.excludeRules` is removed.

Consequences of this order:

- A rule named in `excludeRules` that also belongs to an excluded category is attributed to the **category**, and the duplicate entry is ignored without error.
- A rule that is already outside the WCAG range and is also named in `excludeRules` is a silent no-op.
- A Best Practice rule named in `excludeRules` while `accessibility.bestPractice` is `false` is attributed to the **toggle**, not to the exclusion.

:::note
`accessibility.needsReview` is not part of exclusion. It filters uncertain results **after** a rule has run, and a single rule can produce both a violation and a needs-review item in the same scan, so there is nothing rule-level to exclude. It never appears as a row in Applied Settings.
:::

## What happens at session creation

Exclusions are validated when the session is created, before a browser is allocated. This applies on the cloud grid and on HyperExecute.

| Input | Outcome |
|---|---|
| Valid rule ID or category slug | Applied |
| Unknown rule ID | Logged and dropped; the session proceeds |
| Unknown category slug | Logged and dropped; the session proceeds |
| AI rule ID passed on an automation session | Dropped; AI rules do not run on automation |
| Wrong type (a number, for example) | The capability is ignored with a warning; the session proceeds |
| Every entry invalid | The scan runs with the full configured rule set |
| Exclusions remove every in-scope rule | **Session creation is rejected.** No test is created and no browser is allocated |
| Rule catalog temporarily unreachable | The lists are applied as written without validation; the scan still refuses to run against an empty rule set |
| Session is a real-device mobile browser | Rejected. The capabilities support desktop web and native Android and iOS apps only |

A misspelled rule ID or category never fails your functional test. The scan runs with whatever exclusions were valid, and the session log records which entries were dropped and why.

### Excluding every rule rejects the session

If the exclusions leave nothing to evaluate, whether by naming every rule, excluding every category, or a mix of both, the session is refused at creation with an HTTP 400 error. The error surfaces at driver initialisation in your test, no test record is created, and no browser time is used. The message states how many rules were in scope and how many each list removed, in this form:

```
All <N> rules in scope for WCAG 2.1 AA were excluded by this configuration (<n> by category, <n> by rule).
Include at least one rule to run an accessibility scan. Remove a value from accessibility.excludeRuleCategories
or accessibility.excludeRules, or set accessibility=false to disable accessibility scanning for this session.
```

Remove at least one entry, or set `accessibility` to `false` if that session should not run an accessibility scan at all.

## What to expect in results

- **Filtered before execution.** An excluded rule is switched off in axe before the scan runs. It is absent from the findings and from the score by construction, not filtered out of the results afterwards.
- **Score reflects the evaluated set.** The accessibility score is computed only over the rules that ran.
- **Applied Settings on every web report.** The **Applied Settings** popover, previously available only on mobile app reports, now appears on every web report. It groups the rules that ran and the rules that did not by category, with a reason on each disabled rule: excluded by rule, excluded by category, or switched off by a group toggle.
- **Reproducible.** Both lists are stored with the test and returned by the test-detail API, so any historical result can be reproduced. Merged reports fold in the lists of their source reports.

{/* IMAGE PLACEHOLDER: web automation report Applied Settings popover showing rules that ran and rules that did not, with "Excluded by rule" and "Excluded by category" reasons. Save the screenshot at the path below, then uncomment.
<img loading="lazy" src={require('../assets/images/accessibility-testing/features/rule-exclusion/applied-settings-excluded-web.png').default} alt="Web accessibility report Applied Settings popover listing the ARIA category as excluded by category and the color-contrast and image-alt rules as excluded by rule" className="doc_img"/>
*/}

## FAQ

**Can I exclude a rule for one page only?**
No. Exclusions apply to every scan in the session, including scans triggered by `accessibility.autoscan`. To suppress a single finding after the fact, use [Hide and Restore Issues](/support/docs/accessibility-hide-restore-issues/).

**Is there an include list?**
No. Exclusion only removes rules. To run a narrower set, lower the WCAG target or switch off Best Practices, then exclude what remains.

**Can I exclude a single element or selector rather than a rule?**
No. Exclusion works at rule and category level. Use Hide and Restore Issues for a specific element in a report.

**Why does my exclusion not appear in the report?**
Check the session log for a dropped entry (a misspelled ID or slug), and check whether the rule was already removed by the WCAG range or the Best Practices toggle. A rule removed earlier in the resolution order is attributed to that step, not to the exclusion.

**Do the capabilities work on Cypress or on real-device mobile browsers?**
This release supports Selenium and Playwright sessions on desktop browsers, on the cloud grid and on HyperExecute. Cypress is not part of this release. A session on a real-device mobile browser is rejected.

**Do I need to change anything if I do not use exclusions?**
No. The capabilities are opt-in. A session that sets neither produces the same rule set as before.

## Related docs

- [Configure Accessibility Automation](/support/docs/accessibility-automation-settings/)
- [Accessibility Automation (Overview)](/support/docs/accessibility-automation/)
- [Selenium: Accessibility Automation setup](/support/docs/accessibility-automation-test/)
- [Playwright](/support/docs/playwright-accessibility-test/)
- [HyperExecute: Selenium accessibility automation](/support/docs/selenium-hyperexecute-accessibility-tests/)
- [Rule and Category Exclusion in DevTools and Scheduled Scans](/support/docs/accessibility-devtools-rule-exclusion/)
- [Rule and Category Exclusion for Mobile App Accessibility](/support/docs/accessibility-mobile-rule-exclusion/)
- [Hide and Restore Issues](/support/docs/accessibility-hide-restore-issues/)
- [Web Rule Repository](/support/docs/accessibility-web-rule-repository/)
