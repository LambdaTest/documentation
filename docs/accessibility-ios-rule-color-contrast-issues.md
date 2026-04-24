---
id: accessibility-ios-rule-color-contrast-issues
title: Color Contrast Issues
sidebar_label: Color Contrast Issues
description: Rule-level Accessibility guidance for Color Contrast Issues on iOS.
slug: accessibility-ios-rule-color-contrast-issues/
---

# Color Contrast Issues

Text and meaningful visual elements in iOS apps must maintain sufficient contrast against their backgrounds to remain readable for all users.

:::info WCAG Reference
**Maps to:** WCAG 1.4.3 Contrast (Minimum) | **Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** AA | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
:::

## What this rule checks

The scanner measures the contrast ratio between foreground text or icon colors and their backgrounds, flagging pairs that fall below 4.5:1 for normal text or 3:1 for large text.

## Why it matters

Users with low vision, color-vision deficiencies, or those using devices in bright outdoor conditions depend on adequate contrast. Low contrast makes text illegible and UI elements indistinguishable.

## Common failure patterns

- light gray text on white backgrounds in settings or list cells
- placeholder text in `UITextField` with very low contrast
- status indicators using pale colors on light backgrounds
- custom themes or dark mode implementations where contrast ratios were not validated

## Remediation guidance

- verify text contrast against backgrounds using a color contrast analyzer or Xcode Accessibility Inspector
- use Dynamic Colors or semantic color assets that adjust automatically for light and dark modes
- ensure all text states (enabled, disabled, placeholder) meet minimum contrast ratios
- test with Increase Contrast enabled in iOS Accessibility settings

## Related docs

- [iOS Rule Repository](/support/docs/accessibility-ios-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
