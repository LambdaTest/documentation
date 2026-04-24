---
id: accessibility-android-rule-inaccessible-text-focus
title: Inaccessible Text Focus
sidebar_label: Inaccessible Text Focus
description: Rule-level Accessibility guidance for Inaccessible Text Focus on Android.
slug: accessibility-android-rule-inaccessible-text-focus/
---

# Inaccessible Text Focus

Meaningful text content in Android apps must be focusable by assistive technology so users can read it sequentially.

:::info WCAG Reference
**Maps to:** WCAG 4.1.2 Name, Role, Value | **Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
:::

## What this rule checks

The scanner flags `TextView` and other text-bearing elements that are not reachable through TalkBack navigation because they are marked as not important for accessibility or are hidden behind non-focusable containers.

## Why it matters

If meaningful text cannot receive TalkBack focus, blind and low-vision users miss the information entirely. This is especially problematic for status messages, instructions, and error text.

## Common failure patterns

- `TextView` elements inside containers with `importantForAccessibility="noHideDescendants"`
- dynamically added text views that do not inherit accessibility properties
- text elements positioned off-screen (used for visual spacing) that are still rendered but not focusable
- `TextView` elements with `focusable="false"` that contain meaningful information

## Remediation guidance

- ensure text elements containing meaningful content have `importantForAccessibility="yes"`
- do not suppress descendant accessibility on containers that hold readable text
- remove decorative text from the accessibility tree with `importantForAccessibility="no"` (only when truly decorative)
- test by swiping through the screen with TalkBack and confirming all meaningful text is announced

## Related docs

- [Android Rule Repository](/support/docs/accessibility-android-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
