---
id: accessibility-ios-rule-mismatched-label-text
title: Mismatched Label Text
sidebar_label: Mismatched Label Text
description: Rule-level Accessibility guidance for Mismatched Label Text on iOS.
slug: accessibility-ios-rule-mismatched-label-text/
---

# Mismatched Label Text

The accessible name of a control must contain the text visibly rendered on it, so Voice Control users can activate it by speaking what they see.

:::info WCAG Reference
**Maps to:** WCAG 2.5.3 Label in Name | **Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html)
:::

## What this rule checks

For interactive elements, the scanner compares the text visibly rendered on the control against its accessibility label. The visible text is read from the screen using on-device text recognition and attributed to the element that contains it. Both strings are normalized before comparison: lowercased and reduced to letters, numbers, and single spaces. A violation is reported when the visible text is **not contained within** the label. The rule skips elements that are non-interactive, disabled, not visible, carry no recognizable text, or have an empty label. *(Beta rule)*

## Why it matters

Voice Control users speaking the visible label cannot activate the control, and VoiceOver users hear something different from what is on screen. A button reading "Send" is activated by saying "Tap Send". If that button's accessibility label was set to "Submit message", the spoken command matches nothing, and the control cannot be operated by voice at all. The label is not merely suboptimal — it silently removes the control from an entire input modality.

## Common failure patterns

- a button reading "Sign in" whose label was set to "Log in" or "Authenticate"
- localized visible text with an English accessibility label left over from development
- an accessible name written to describe the outcome ("Proceed to payment") on a button that visibly reads "Next"
- developer identifiers (`accountExists`, `user_action_login`) used as the accessible name

## Remediation guidance

- the accessible name must contain the visible label as a substring, ignoring case and punctuation. Prefer an exact match; where extra context is needed, put the visible label first: a button reading "Next" may be labelled "Next" or "Next, proceed to payment", but not "Proceed to payment"
- never use developer identifiers as accessible names
- **iOS:** where the visible text is sufficient, simply do not override `accessibilityLabel` — UIKit derives it from the title

## Related docs

- [Misplaced Field Label](/support/docs/accessibility-ios-rule-misplaced-field-label/)
- [iOS Rule Repository](/support/docs/accessibility-ios-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
