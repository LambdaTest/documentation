---
id: accessibility-ios-rule-button-element-capitalisation-check
title: Button Element Capitalisation Check
sidebar_label: Button Element Capitalisation Check
description: Rule-level Accessibility guidance for Button Element Capitalisation Check on iOS.
slug: accessibility-ios-rule-button-element-capitalisation-check/
---

# Button Element Capitalisation Check

Button labels in iOS apps should follow standard capitalisation conventions to ensure VoiceOver reads them naturally and consistently.

:::info WCAG Reference
**Maps to:** WCAG 3.1.6 Pronunciation | **Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** AAA | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/pronunciation.html)
:::

## What this rule checks

The scanner flags button labels that use all-uppercase text (e.g., "SUBMIT"), all-lowercase text (e.g., "submit"), or inconsistent capitalisation that affects VoiceOver pronunciation.

## Why it matters

VoiceOver may spell out all-uppercase labels letter by letter (e.g., "S-U-B-M-I-T" instead of "Submit") depending on the speech engine. Inconsistent capitalisation creates an unpredictable listening experience.

## Common failure patterns

- button titles set to "DELETE" or "CANCEL" in all caps
- labels that use lowercase for stylistic reasons ("learn more")
- inconsistent capitalisation within the same screen ("Submit" on one button, "SAVE" on another)
- uppercase applied through code (`uppercased()`) rather than styling

## Remediation guidance

- use title case or sentence case for button labels ("Submit Order", "Learn more")
- if visual uppercase is desired, apply it through `UIButton.Configuration` text transform or CSS `text-transform` rather than changing the actual text string
- ensure the accessibility label uses natural capitalisation even if the visual display is uppercase
- test with VoiceOver to confirm buttons are spoken as words, not spelled out

## Related docs

- [iOS Rule Repository](/support/docs/accessibility-ios-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
