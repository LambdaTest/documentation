---
id: accessibility-ios-rule-missing-button-element-label
title: Missing Button Element Label
sidebar_label: Missing Button Element Label
description: Rule-level Accessibility guidance for Missing Button Element Label on iOS.
slug: accessibility-ios-rule-missing-button-element-label/
---

# Missing Button Element Label

iOS button elements must have an accessibility label that describes the action they perform.

:::info WCAG Reference
**Maps to:** WCAG 1.3.1 Info and Relationships | **Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
:::

## What this rule checks

The scanner flags `UIButton` and `Button` elements that have no title text, no accessibility label, and rely only on an image or icon without an accessible name for VoiceOver.

## Why it matters

VoiceOver users hear "Button" with no additional context when a button lacks a label. They cannot tell what the button does, making it impossible to confidently interact with the interface.

## Common failure patterns

- icon-only buttons (close X, hamburger menu, share icon) with no accessibility label
- buttons with an image but no title text
- custom button subclasses that override drawing but do not set accessibility properties
- system bar button items using custom images without labels

## Remediation guidance

- set `accessibilityLabel` on every button that does not have visible title text
- for icon-only buttons, describe the action: "Close", "Open menu", "Share"
- in SwiftUI, use `.accessibilityLabel("action description")` on `Button` views
- if the button already has title text, VoiceOver uses it automatically — no additional label needed

## Related docs

- [iOS Rule Repository](/support/docs/accessibility-ios-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
