---
id: accessibility-ios-rule-dynamic-type-support
title: Dynamic Type Support
sidebar_label: Dynamic Type Support
description: Rule-level Accessibility guidance for Dynamic Type Support on iOS.
slug: accessibility-ios-rule-dynamic-type-support/
---

# Dynamic Type Support

iOS apps must support Dynamic Type so text scales according to the user's preferred text size setting.

:::info WCAG Reference
**Maps to:** WCAG 1.4.4 Resize Text | **Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** AA | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html)
:::

## What this rule checks

The scanner verifies that text elements use scalable font styles (either system text styles or custom fonts registered with `UIFontMetrics`) and respond to the user's Dynamic Type preference.

## Why it matters

Users with low vision set a larger preferred text size in iOS Settings. If an app uses fixed font sizes, text remains small regardless of the user's preference, defeating the purpose of the system-wide accessibility feature.

## Common failure patterns

- hard-coded font sizes (e.g., `UIFont.systemFont(ofSize: 14)`) instead of text styles
- custom fonts that are not registered with `UIFontMetrics` for scaling
- layouts that break at large text sizes because they use fixed dimensions
- text that scales but containers do not, causing clipping

## Remediation guidance

- use `UIFont.preferredFont(forTextStyle:)` or register custom fonts with `UIFontMetrics`
- set `adjustsFontForContentSizeCategory = true` on labels and text views
- use Auto Layout with constraints that accommodate text growth
- test with all Dynamic Type sizes, including the five Accessibility sizes beyond the standard range
- in SwiftUI, use `.font(.body)` or other text styles which scale automatically

## Related docs

- [iOS Rule Repository](/support/docs/accessibility-ios-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
