---
id: accessibility-android-rule-missing-input-value
title: Missing Input Value
sidebar_label: Missing Input Value
description: Rule-level Accessibility guidance for Missing Input Value on Android.
slug: accessibility-android-rule-missing-input-value/
---

# Missing Input Value

Android input fields must expose their current value to assistive technologies so TalkBack users can verify what they have entered.

:::info WCAG Reference
**Maps to:** WCAG 4.1.2 Name, Role, Value | **Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
:::

## What this rule checks

The scanner verifies that `EditText`, `AutoCompleteTextView`, and custom input elements expose their current text value through the accessibility framework.

## Why it matters

TalkBack users cannot see the screen to verify their input. If the current value is not announced, users cannot confirm what they typed, leading to errors in forms, searches, and text entry.

## Common failure patterns

- custom input views that render text visually but do not expose it through `AccessibilityNodeInfo`
- masked fields (passwords, PINs) that hide the value without providing a character count or confirmation mechanism
- programmatically set text that does not trigger an accessibility event

## Remediation guidance

- use standard `EditText` or `TextInputLayout` which expose values automatically
- for custom inputs, populate `AccessibilityNodeInfo.setText()` with the current value
- fire `TYPE_VIEW_TEXT_CHANGED` events when the value changes programmatically
- test with TalkBack by focusing the input field and confirming the current value is announced

## Related docs

- [Android Rule Repository](/support/docs/accessibility-android-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
