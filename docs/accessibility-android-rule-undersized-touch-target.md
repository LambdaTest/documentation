---
id: accessibility-android-rule-undersized-touch-target
title: Undersized Touch Target
sidebar_label: Undersized Touch Target
description: Rule-level Accessibility guidance for Undersized Touch Target on Android.
slug: accessibility-android-rule-undersized-touch-target/
---

# Undersized Touch Target

Interactive Android elements must meet a minimum touch target size of 48x48 dp to ensure users with motor impairments can tap them reliably.

:::info WCAG Reference
**Maps to:** WCAG 2.5.5 Target Size (Enhanced) | **Applies to:** WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.1 | **Level:** AAA | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html)
:::

## What this rule checks

The scanner measures the rendered size of clickable and focusable elements and flags those smaller than 48x48 dp (the Android accessibility guideline minimum).

## Why it matters

Users with motor impairments, tremors, or limited dexterity need adequately sized targets to tap accurately. Small targets cause frequent mis-taps, frustration, and can make features practically unreachable.

## Common failure patterns

- icon buttons (close, favorite, menu dots) rendered at 24x24 dp without additional touch padding
- inline text links with no minimum height enforcement
- compact toolbar actions sized to the icon dimensions only
- list item action buttons (delete, edit) with minimal padding

## Remediation guidance

- set `android:minWidth` and `android:minHeight` to at least 48dp on all interactive elements
- use `android:padding` or `TouchDelegate` to expand the touch area without changing the visual size
- in Jetpack Compose, use `Modifier.sizeIn(minWidth = 48.dp, minHeight = 48.dp)`
- Material Design components enforce this by default; prefer using them over custom implementations

## Related docs

- [Android Rule Repository](/support/docs/accessibility-android-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
