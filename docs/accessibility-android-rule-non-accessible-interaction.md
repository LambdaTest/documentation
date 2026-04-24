---
id: accessibility-android-rule-non-accessible-interaction
title: Non-accessible Interaction
sidebar_label: Non-accessible Interaction
description: Rule-level Accessibility guidance for Non-accessible Interaction on Android.
slug: accessibility-android-rule-non-accessible-interaction/
---

# Non-accessible Interaction

Interactive elements in Android apps must be operable through assistive technology gestures, not just direct touch.

:::info WCAG Reference
**Maps to:** WCAG 4.1.2 Name, Role, Value | **Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
:::

## What this rule checks

The scanner identifies elements that respond to touch events but are not reachable or activatable through TalkBack gestures (double-tap to activate, swipe to navigate).

## Why it matters

TalkBack users interact with the screen through gestures: swiping to move focus and double-tapping to activate. If an element responds only to direct touch coordinates, TalkBack users cannot use it.

## Common failure patterns

- custom views that intercept `onTouchEvent` without implementing accessibility actions
- gesture-based interactions (long press, swipe) with no accessibility alternative
- views that use `OnTouchListener` without a corresponding `OnClickListener`
- canvas-drawn interactive elements with no accessibility node info

## Remediation guidance

- implement `OnClickListener` alongside any touch listeners
- add `AccessibilityAction` entries for custom gestures (long press, swipe)
- for canvas-drawn elements, create virtual child accessibility nodes using `ExploreByTouchHelper`
- test with TalkBack to confirm every interactive element can be reached by swiping and activated by double-tapping

## Related docs

- [Android Rule Repository](/support/docs/accessibility-android-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
