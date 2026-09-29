# Rule and Category Exclusion in DevTools and Scheduled Scans

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

The **Evaluation Rules** panel lets you switch off individual accessibility rules, or entire rule categories, before a web scan runs. It is available in two places:

- **Accessibility DevTools**, in the extension's **Scan Settings** tab. Selections are saved per user.
- **Scheduled scans**, in Step 1 of the Create Scheduler wizard. Selections are saved with the schedule.

A rule that is switched off never runs. It is absent from the findings and from the score, and the report records which rules ran and why the rest did not. A scan with nothing switched off behaves exactly as before.

## When to use this

Use the panel when your team has a **known, accepted deviation** that should not appear in every scan, for example a design-system colour token whose contrast has been signed off, or a third-party component you cannot change. Switching the rule off at source keeps the score honest and keeps the finding out of every future run, instead of hiding it in each report after the fact.

To suppress a single finding in a report that has already been produced, use [Hide and Restore Issues](/support/docs/accessibility-hide-restore-issues/) instead.

This page covers the **DevTools extension** and **scheduled scans**. For Selenium and Playwright sessions, the same exclusions are set through capabilities: see [Rule and Category Exclusion for Web Accessibility Automation](/support/docs/accessibility-web-automation-rule-exclusion/). For mobile apps, see [Rule and Category Exclusion for Mobile App Accessibility](/support/docs/accessibility-mobile-rule-exclusion/).

## The Evaluation Rules panel

The panel lists every rule the scan will evaluate, grouped into the twelve web rule categories:

ARIA, Structure and Semantics, Text Alternatives, Keyboard, Name Role Value, Tables, Forms, Language, Time and Media, Color Contrast, Sensory and Visual Cues, Parsing.

Each category shows how many of its rules are in scope for the current settings. The panel offers:

| Control | What it does |
|---|---|
| **On/Off toggle** on each rule | Switches that single rule off or on |
| **Checkbox** on each category header | Switches every rule in the category together. It has three states, all on, some on and all off, so a partly selected category is visible at a glance |
| **Search** | Dims the categories with no matching rules |
| **Select All / Clear All** | Switches every listed rule on or off in one action |

Rules outside the selected WCAG version and level are not listed in the panel at all, and do not appear in the report's Applied Settings. A Best Practice rule while Best Practices is off is shown greyed out with a tooltip saying why. The panel never offers a switch that would do nothing. Raise the WCAG target or turn Best Practices on to bring those rules into scope.

The AI-powered rules below are supported in both DevTools and scheduled scans. They are listed with the rest and can be switched off like any other rule.

| Rule ID | WCAG | What it evaluates |
|---|---|---|
| `alt-descriptive` | 1.1.1 | Whether an image's alt text is meaningful for its context |
| `alt-decorative-hidden` | 1.1.1 | Whether an element is truly decorative and correctly hidden from assistive technology |
| `image-in-text` | 1.4.5 | Whether an image contains embedded text |
| `html-title-descriptive` | 2.4.2 | Whether the page `` describes the page content |
| `html-lang-matches-visible-language` | 3.1.1 | Whether the `lang` attribute matches the visible language on the page |
 Rules that axe-core marks as deprecated are not listed, because they never run.

{/* IMAGE PLACEHOLDER: Evaluation Rules panel showing categories with the tri-state checkbox, per-rule toggles, the search box and Select All / Clear All. Save the screenshot at the path below, then uncomment.

*/}

## In Accessibility DevTools

1. Open the Accessibility DevTools extension and go to the **Scan Settings** tab.
2. In **Evaluation Rules**, switch off the rules or categories you want to skip. Use the search box to find a rule.
3. Click **Save**.

What to expect:

- Saved selections persist in the browser and are also stored as your **last-used configuration** on the server, so they follow you across reinstalls.
- They apply to **full-page, multi-page, workflow and assisted** scans run from the extension.
- A selection that leaves no rule to run **cannot be saved**. Turn at least one rule back on.
- The **AI-Enhanced Rules** toggle now persists across sessions as a user setting.

See [Configure Accessibility DevTools](/support/docs/accessibility-devtools-settings/) for the other DevTools settings.

{/* IMAGE PLACEHOLDER: DevTools Scan Settings tab with the Evaluation Rules panel and the Save button. Save the screenshot at the path below, then uncomment.

*/}

## In scheduled scans

1. Start creating a scheduled scan. See [Steps to Schedule an Accessibility Scan](/support/docs/accessibility-test-scheduling-scan/).
2. In **Step 1** of the Create Scheduler wizard, beside the WCAG version selector, open **Evaluation Rules** and switch off the rules or categories you want to skip.
3. Continue through the wizard and schedule the scan as usual.

What to expect:

- The selection is **saved with the schedule** and pre-fills when the schedule is edited.
- It applies to **every run** of the schedule, and to URL, sitemap, CSV and crawler schedules alike.
- If the selection leaves nothing to evaluate, **Next** is disabled with the tooltip "Turn on at least one rule to continue".

{/* IMAGE PLACEHOLDER: Create Scheduler wizard Step 1 with the Evaluation Rules panel beside the WCAG version selector. Save the screenshot at the path below, then uncomment.

*/}

## How the effective rule set is resolved

The panel applies on top of the other scan settings. Every step only removes rules, so switching a rule off can never add another rule back, and the first step that removes a rule is the reason recorded for it:

1. **WCAG version and level.** Cumulative: WCAG 2.1 AA includes every WCAG 2.0 and 2.1 rule at level A or AA.
2. **Best Practices toggle.** Best Practice rules are removed while Best Practices is off. This is the only rule-level group toggle on web.
3. **Categories switched off.**
4. **Rules switched off.**

AI-powered rules sit behind their own gate (the AI-Enhanced Rules toggle, the organisation's AI entitlement and screenshot capture) before the panel applies, and are reported as **AI disabled** when that gate is closed.

**Needs Review is not part of this.** It filters uncertain results after a rule has run, and a single rule can produce both a violation and a needs-review item in the same scan, so there is nothing rule-level to switch off. It never appears as a row in Applied Settings.

## Equivalent automation capabilities

A selection made in the panel produces the same effective rule set as the corresponding capabilities on a Selenium or Playwright session:

| In the panel | In automation |
|---|---|
| Switch off a rule | Name its ID in `accessibility.excludeRules` |
| Switch off a category with the header checkbox | Name its slug in `accessibility.excludeRuleCategories` |
| Rule not listed (out of WCAG range) or greyed out (Best Practices off) | Not needed: the WCAG version and `accessibility.bestPractice` already remove it |

Rule IDs and category slugs are listed in [Rule and Category Exclusion for Web Accessibility Automation](/support/docs/accessibility-web-automation-rule-exclusion/).

## What to expect in results

- **Filtered before execution.** A rule switched off in the panel is switched off in axe before the scan runs. It is absent from the findings and from the score by construction, not filtered out of the results afterwards.
- **Score reflects the evaluated set.** The accessibility score is computed only over the rules that ran.
- **Applied Settings on every web report.** The **Applied Settings** popover groups the rules by category. A category switched off in the panel is greyed out, and an individually switched-off rule is shown as **Off**.
- **Reproducible.** Both lists are stored with the test and returned by the test-detail API. Merged reports fold in the lists of their source reports.

## Exclusion versus hiding an issue

| | Evaluation Rules (this page) | [Hide and Restore Issues](/support/docs/accessibility-hide-restore-issues/) |
|---|---|---|
| When it applies | Before the scan runs | After the report is produced |
| Granularity | Rule or category | Individual issue, element or page |
| Effect on the score | Rule is not evaluated, so it never counts | Issue is removed from the visible report and stats |
| Scope | Every scan run with that configuration | The report, and optionally future scans of the same page |

## FAQ

**Can I switch off a rule for one page only?**
No. The selection applies to every scan run with that configuration. To suppress a single finding, use Hide and Restore Issues.

**Why is a rule greyed out in the panel?**
It is a Best Practice rule and Best Practices is off. Hover over it for the reason, and turn Best Practices on to bring the rule into scope. Rules outside the selected WCAG version and level are not listed at all; raise the WCAG target to bring them in.

**Why can I not save an empty selection?**
A scan with no rules would produce nothing, so the panel refuses to save it in DevTools and disables Next in the scheduler wizard. Turn at least one rule back on.

**Does the selection carry over from DevTools to scheduled scans?**
No. DevTools selections are saved per user, and scheduled-scan selections are saved with each schedule. Set them separately.

**Where do I find a rule's ID?**
It is shown with each finding in the report. The full axe-core list is in the [axe-core rule descriptions](https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md).

## Related docs

- [Configure Accessibility DevTools](/support/docs/accessibility-devtools-settings/)
- [Steps to Schedule an Accessibility Scan](/support/docs/accessibility-test-scheduling-scan/)
- [Edit Scheduled Scan](/support/docs/accessibility-test-scheduling-edit/)
- [Rule and Category Exclusion for Web Accessibility Automation](/support/docs/accessibility-web-automation-rule-exclusion/)
- [Rule and Category Exclusion for Mobile App Accessibility](/support/docs/accessibility-mobile-rule-exclusion/)
- [Hide and Restore Issues](/support/docs/accessibility-hide-restore-issues/)
- [Web Rule Repository](/support/docs/accessibility-web-rule-repository/)
