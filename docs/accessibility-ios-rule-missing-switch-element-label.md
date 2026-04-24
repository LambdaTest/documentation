---
id: accessibility-ios-rule-missing-switch-element-label
title: Missing Switch Element Label
sidebar_label: Missing Switch Element Label
description: Rule-level Accessibility guidance for Missing Switch Element Label on iOS.
slug: accessibility-ios-rule-missing-switch-element-label/
---

# Missing Switch Element Label

iOS switch controls must have an accessibility label that describes the setting they toggle.

:::info WCAG Reference
**Maps to:** WCAG 1.3.1 Info and Relationships | **Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
:::

## What this rule checks

The scanner flags `UISwitch` and `Toggle` (SwiftUI) elements that have no accessibility label, leaving VoiceOver to announce only "Switch, on" or "Switch, off" without context.

## Why it matters

Hearing "Switch, off" tells the user the state but not what the switch controls. Without a label, users cannot make informed decisions about whether to toggle the switch.

## Common failure patterns

- `UISwitch` elements in table cells where the label text is in a separate `UILabel` not programmatically linked
- settings screens where switches are visually paired with labels but not associated in the accessibility tree
- custom switch implementations that do not expose an accessible name

## Remediation guidance

- set `accessibilityLabel` on the `UISwitch` to describe the setting (e.g., "Dark mode", "Push notifications")
- use `UITableViewCell`'s built-in `textLabel` as the accessibility label for the cell when the switch is the cell's accessory view
- in SwiftUI, the `Toggle("Label text")` initializer automatically provides a label — ensure it is always populated
- test with VoiceOver to confirm the full announcement includes both the setting name and the state

## Related docs

- [iOS Rule Repository](/support/docs/accessibility-ios-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
