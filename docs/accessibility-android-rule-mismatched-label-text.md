---
id: accessibility-android-rule-mismatched-label-text
title: Mismatched Label Text (Android)
sidebar_label: Mismatched Label Text
description: Rule-level Accessibility guidance for Mismatched Label Text on Android.
slug: accessibility-android-rule-mismatched-label-text/
---

# Mismatched Label Text

A control's accessible name must contain its visible text so that voice-access users can activate controls by speaking what they see.

:::note
This is a **Beta rule**. Coverage and accuracy may continue to change as it matures.
:::

:::info WCAG Reference
**Maps to:** WCAG 2.5.3 Label in Name | **Applies to:** WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.1 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html)
:::

## What this rule checks

The scanner compares the visible text of interactive elements with their computed accessible name (from `contentDescription` or labeling relationships) and flags cases where the accessible name does not contain the visible text.

## Why it matters

Voice control users speaking the visible label cannot activate the control, and screen reader users hear something different from what is on screen.

## Common failure patterns

- a button labeled "Submit" visually but with `contentDescription` set to "Send data"
- a `contentDescription` that abbreviates or paraphrases the visible text
- programmatic label updates that fall out of sync with the visible UI
- developer identifiers (`accountExists`, `user_action_login`) used as the accessible name

## Remediation guidance

- the accessible name must contain the visible label as a substring, ignoring case and punctuation. Prefer an exact match; where extra context is needed, put the visible label first: visible "Delete" may be named "Delete" or "Delete, removes item", not "Remove item"
- never use developer identifiers as accessible names
- **Android:** `contentDescription` overrides visible text — if you set it, keep the on-screen string inside it

## Related docs

- [Misplaced Field Label](/support/docs/accessibility-android-rule-misplaced-field-label/)
- [Android Rule Repository](/support/docs/accessibility-android-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
