---
id: accessibility-ios-rule-missing-checkbox-element-label
title: Missing Checkbox Element Label
sidebar_label: Missing Checkbox Element Label
description: Rule-level Accessibility guidance for Missing Checkbox Element Label on iOS.
slug: accessibility-ios-rule-missing-checkbox-element-label/
---

# Missing Checkbox Element Label

Checkbox-style controls in iOS apps must have an accessibility label that describes the option they control.

:::info WCAG Reference
**Maps to:** WCAG 1.3.1 Info and Relationships | **Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
:::

## What this rule checks

The scanner flags toggle-like or checkbox-pattern elements that have no accessibility label, leaving VoiceOver to announce only the state (selected/not selected) without context.

## Why it matters

Hearing "not selected" without knowing what option is being referred to is useless. VoiceOver users need both the label and the state to understand the setting and decide whether to change it.

## Common failure patterns

- custom checkbox views built with images and tap gestures but no accessibility label
- settings toggles where the label is a separate `UILabel` not programmatically associated
- list cells with selection indicators but no per-cell accessibility description

## Remediation guidance

- set `accessibilityLabel` on the checkbox element to describe the option
- group the checkbox and its label into a single accessibility element using `shouldGroupAccessibilityChildren`
- in SwiftUI, use `.accessibilityLabel("Option description")` on toggle or checkbox views
- test with VoiceOver to confirm the full announcement includes both the label and the state

## Related docs

- [iOS Rule Repository](/support/docs/accessibility-ios-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
