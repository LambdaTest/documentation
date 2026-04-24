---
id: accessibility-android-rule-misplaced-field-label
title: Misplaced Field Label
sidebar_label: Misplaced Field Label
description: Rule-level Accessibility guidance for Misplaced Field Label on Android.
slug: accessibility-android-rule-misplaced-field-label/
---

# Misplaced Field Label

Form field labels in Android apps must be positioned correctly relative to their associated input so assistive technologies can pair them accurately.

:::info WCAG Reference
**Maps to:** WCAG 3.3.2 Labels or Instructions | **Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html)
:::

## What this rule checks

The scanner verifies that labels associated with form fields through `labelFor` or proximity are positioned in a way that creates a clear visual and programmatic association.

## Why it matters

If a label appears far from its field or near the wrong field, TalkBack may announce the wrong label for a control. This causes confusion and can lead users to enter data in the wrong field.

## Common failure patterns

- a `TextView` label placed below the input field instead of above or beside it
- labels that are visually near the correct field but programmatically linked to a different field via `labelFor`
- dynamic layouts where field reordering breaks label-field proximity

## Remediation guidance

- place labels immediately above or to the start of their associated input field
- use `android:labelFor` on the label `TextView` pointing to the correct input `id`
- in Jetpack Compose, use `Modifier.semantics { contentDescription = "..." }` or explicit label composables
- test with TalkBack to confirm the announced label matches the visual label for each field

## Related docs

- [Android Rule Repository](/support/docs/accessibility-android-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
