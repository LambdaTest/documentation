---
id: accessibility-ios-rule-invalid-range-values
title: Invalid Range Values
sidebar_label: Invalid Range Values
description: Rule-level Accessibility guidance for Invalid Range Values on iOS.
slug: accessibility-ios-rule-invalid-range-values/
---

# Invalid Range Values

Range controls — sliders, steppers, progress indicators — must report a valid, consistent value so VoiceOver can announce their state correctly.

:::info WCAG Reference
**Maps to:** WCAG 4.1.2 Name, Role, Value | **Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
:::

## What this rule checks

The scanner checks range controls (Slider, Stepper, ProgressIndicator) and any custom view with the `.adjustable` trait for two types of violation:

1. **Missing value** — the control has no programmatic `accessibilityValue`, so VoiceOver cannot announce its current state.
2. **NaN value** — a native `UISlider` whose `minimumValue >= maximumValue` produces a `NaN` accessibility value (UIKit computes `(value - min) / (max - min)`, which yields NaN when the denominator is zero or negative).

## Why it matters

Assistive technology announces a range control's position from its reported values ("50 percent"). When the value is missing, VoiceOver says nothing about the control's state. When the value is NaN (due to an invalid min/max range), the announcement is meaningless, and adjusting the control by voice or gestures produces unpredictable results.

## Common failure patterns

- custom views with the `.adjustable` trait that never set `accessibilityValue`
- a `UISlider` whose `minimumValue` is set higher than its `maximumValue`
- a `UISlider` whose `minimumValue` equals its `maximumValue` (zero-width range)
- progress indicators or steppers with no programmatic value for assistive technology

## Remediation guidance

- ensure min < max and the current value falls within [min, max] on the control (`UISlider`/`UIStepper`)
- for custom range controls, expose the range to assistive technology via `accessibilityValue` and the `.adjustable` trait

## Limitations

- **NaN detection only.** Detection of `min >= max` relies on NaN in UIKit's auto-computed `accessibilityValue`. If a developer manually overrides `accessibilityValue` on a broken slider, the NaN is masked and the violation goes undetected.
- **Cannot detect current outside [min, max].** iOS normalizes the slider value to a percentage and does not expose raw min, max, or current values individually.

## Related docs

- [iOS Rule Repository](/support/docs/accessibility-ios-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
