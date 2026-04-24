---
id: accessibility-ios-rule-accessibility-label-not-punctuated
title: Accessibility Label Not Punctuated
sidebar_label: Accessibility Label Not Punctuated
description: Rule-level Accessibility guidance for Accessibility Label Not Punctuated on iOS.
slug: accessibility-ios-rule-accessibility-label-not-punctuated/
---

# Accessibility Label Not Punctuated

Accessibility labels on iOS elements should end with appropriate punctuation so VoiceOver produces natural pauses and intonation when reading them.

:::info WCAG Reference
**Maps to:** WCAG 3.3.2 Labels or Instructions | **Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html)
:::

## What this rule checks

The scanner flags accessibility labels that do not end with proper punctuation (period, comma, question mark, or exclamation mark), which affects VoiceOver's speech cadence and clarity.

## Why it matters

VoiceOver uses punctuation to determine pacing and intonation. A label that ends abruptly without punctuation causes VoiceOver to run the label into the next announcement without a pause, making it harder for users to parse individual elements.

## Common failure patterns

- labels like "Add to cart" with no trailing period
- descriptive labels on images that read as sentences but lack ending punctuation
- multi-word labels that describe status or state without punctuation

## Remediation guidance

- end accessibility labels with a period when they form a complete phrase or sentence
- use punctuation consistent with the label's tone: period for statements, question mark for questions
- keep labels concise — a label should describe the element, not be a paragraph
- test with VoiceOver to confirm the speech rhythm sounds natural between consecutive elements

## Related docs

- [iOS Rule Repository](/support/docs/accessibility-ios-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
