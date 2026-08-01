---
id: accessibility-android-rule-misplaced-field-label
title: Misplaced Field Label
sidebar_label: Misplaced Field Label
description: Rule-level Accessibility guidance for Misplaced Field Label on Android.
slug: accessibility-android-rule-misplaced-field-label/
---

# Misplaced Field Label

A control's accessible name must begin with its visible text, not bury it behind other context, so voice control matching stays fast and reliable.

:::note
This is a **Beta rule**. Coverage and accuracy may continue to change as it matures.
:::

:::info WCAG Reference
**Maps to:** WCAG 2.5.3 Label in Name | **Applies to:** WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.1 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html)
:::

## What this rule checks

The scanner flags controls whose accessible name contains their visible text but does not begin with it. This is the companion to [Mismatched Label Text](/support/docs/accessibility-android-rule-mismatched-label-text/): where that rule requires the visible text to appear in the accessible name at all, this one requires it to appear at the start.

## Why it matters

Voice control matches names from the front. Screen reader users also hear extra context before the label they can see on screen, which slows recognition of the control they're focused on.

## Common failure patterns

- prefixing context onto the label: "Order summary, Edit" on a control that visibly reads "Edit"
- composing a combined label so the control's own text lands last

## Remediation guidance

- start the accessible name with the visible label; put any extra context after it ("Edit, order summary", not "Order summary, Edit")
- **Android:** if `contentDescription` is set on a control with visible text, begin it with that text

## Related docs

- [Mismatched Label Text](/support/docs/accessibility-android-rule-mismatched-label-text/)
- [Android Rule Repository](/support/docs/accessibility-android-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
