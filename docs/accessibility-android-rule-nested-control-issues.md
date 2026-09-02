---
id: accessibility-android-rule-nested-control-issues
title: Nested Control Issues
sidebar_label: Nested Control Issues
description: Rule-level Accessibility guidance for Nested Control Issues on Android.
slug: accessibility-android-rule-nested-control-issues/
---

# Nested Control Issues

Interactive Android elements should not be nested inside other interactive elements, as this creates ambiguous focus behavior for assistive technologies.

:::info WCAG Reference
**Maps to:** WCAG 4.1.2 Name, Role, Value | **Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
:::

## What this rule checks

The scanner flags interactive views (buttons, switches, checkboxes) that are nested within other interactive containers (clickable layouts, other buttons), creating a confusing accessibility tree.

## Why it matters

When TalkBack encounters nested interactive elements, it may focus on the outer container and announce a combined label that obscures the inner controls, or it may skip the inner controls entirely. Users cannot predictably reach or activate individual nested actions.

## Common failure patterns

- a clickable `LinearLayout` that contains a `Button` and a `CheckBox` as children
- a list item with an `onClickListener` on the row and separate clickable actions inside it
- nested `RecyclerView` items with overlapping click targets

## Remediation guidance

- flatten the interactive hierarchy: either the container or its children should be interactive, not both
- use `android:importantForAccessibility="no"` on the container if individual child controls should receive focus
- for list items with multiple actions, use `AccessibilityAction` to expose additional actions through TalkBack's actions menu
- test by swiping through the screen with TalkBack to confirm each control is individually reachable

## Related docs

- [Android Rule Repository](/support/docs/accessibility-android-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
