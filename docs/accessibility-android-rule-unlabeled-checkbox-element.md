---
id: accessibility-android-rule-unlabeled-checkbox-element
title: Unlabeled Checkbox Element
sidebar_label: Unlabeled Checkbox Element
description: Rule-level Accessibility guidance for Unlabeled Checkbox Element on Android.
slug: accessibility-android-rule-unlabeled-checkbox-element/
---

# Unlabeled Checkbox Element

Android checkbox elements must have an accessible label that describes what the checkbox controls.

:::info WCAG Reference
**Maps to:** WCAG 4.1.2 Name, Role, Value | **Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
:::

## What this rule checks

The scanner identifies `CheckBox` and checkbox-like views that have no `contentDescription`, no associated `<label>`, and no text content, leaving TalkBack with nothing to announce beyond "Checkbox, not checked."

## Why it matters

Without a label, TalkBack users hear "Checkbox" but cannot tell what option they are selecting or deselecting. This makes forms and settings screens unusable for blind users.

## Common failure patterns

- `CheckBox` views with no text and no `contentDescription`
- custom checkbox implementations that do not set accessibility text
- programmatically created checkboxes that skip label assignment

## Remediation guidance

- set the `android:text` attribute on the `CheckBox` element
- if visual text is provided by a separate `TextView`, use `android:labelFor` on the label pointing to the checkbox
- for icon-only checkboxes, set `contentDescription` to describe the purpose
- test with TalkBack and confirm the announced text clearly identifies the option

## Related docs

- [Android Rule Repository](/support/docs/accessibility-android-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
