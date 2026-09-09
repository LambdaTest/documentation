---
id: accessibility-android-rule-insufficient-target-spacing
title: Insufficient Target Spacing
sidebar_label: Insufficient Target Spacing
description: Rule-level Accessibility guidance for Insufficient Target Spacing on Android.
slug: accessibility-android-rule-insufficient-target-spacing/
---

# Insufficient Target Spacing

Adjacent interactive Android elements must have adequate spacing between them to prevent accidental activation of neighboring controls.

:::info WCAG Reference
**Maps to:** WCAG 2.5.5 Target Size (Enhanced) | **Applies to:** WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.1 | **Level:** AAA | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html)
:::

## What this rule checks

The scanner measures the gap between adjacent clickable or focusable elements and flags pairs that are too close together, increasing the risk of mis-taps.

## Why it matters

Even when individual touch targets meet the minimum size, placing them too close together makes it difficult for users with motor impairments to tap one without accidentally hitting the other. Sufficient spacing reduces errors and improves usability.

## Common failure patterns

- toolbar buttons placed edge-to-edge with no gap
- action buttons in list items (edit, delete, share) packed tightly together
- bottom navigation icons with minimal spacing on small screens
- floating action buttons positioned near other interactive elements

## Remediation guidance

- add at least 8dp of spacing between adjacent interactive elements
- use `android:layout_margin` or Compose `Modifier.padding` to create clear separation
- consider grouping related actions into an overflow menu to reduce density
- test on the smallest supported screen size to confirm spacing remains adequate

## Related docs

- [Android Rule Repository](/support/docs/accessibility-android-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
