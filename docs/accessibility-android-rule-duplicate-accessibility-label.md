---
id: accessibility-android-rule-duplicate-accessibility-label
title: Duplicate Accessibility Label
sidebar_label: Duplicate Accessibility Label
description: Rule-level Accessibility guidance for Duplicate Accessibility Label on Android.
slug: accessibility-android-rule-duplicate-accessibility-label/
---

# Duplicate Accessibility Label

Every interactive Android element on a screen must have a unique accessibility label so TalkBack and Voice Access users can tell controls apart.

:::info WCAG Reference
**Maps to:** WCAG 4.1.2 Name, Role, Value | **Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
:::

## What this rule checks

The scanner flags groups of visible, interactive elements on the same screen that share an identical accessibility label — including duplicates across different widget types, such as a Button and a Switch both labeled the same way. All elements in a duplicate group are reported together so they can be reviewed as a set.

## Why it matters

Voice Access users activate elements by speaking their labels — "Click Delete". When two elements are both labeled "Delete", the software cannot determine which one the user means. Screen reader users hear the same announcement for different controls and cannot tell them apart: three list rows each containing a button announced only as "More options" are indistinguishable when navigated element by element.

## Common failure patterns

- a static `contentDescription` (e.g., "More options", "Delete") reused on every item in a list instead of composed with the item's identity
- repeated icon buttons sharing a single generic description
- copy-pasted layouts where labels were never made unique

## Remediation guidance

- ensure each interactive element has a unique accessibility label
- make labels contextual — include the item they act on: "Delete — Order #1234", "More options for John's playlist"
- review list and grid layouts first, since repeated item templates are the most common source of duplicates

## Related docs

- [Android Rule Repository](/support/docs/accessibility-android-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
