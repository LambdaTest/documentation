---
id: accessibility-ios-rule-misplaced-field-label
title: Misplaced Field Label
sidebar_label: Misplaced Field Label
description: Rule-level Accessibility guidance for Misplaced Field Label on iOS.
slug: accessibility-ios-rule-misplaced-field-label/
---

# Misplaced Field Label

A control's visible text should lead its accessible name, not trail behind other context, so Voice Control matching stays fast and reliable.

:::info WCAG Reference
**Maps to:** WCAG 3.3.2 Labels or Instructions | **Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html)
:::

## What this rule checks

This is the companion to [Mismatched Label Text](/support/docs/accessibility-ios-rule-mismatched-label-text/), using the same visible-text recognition and the same interactivity and visibility filters. This rule applies only when that one passes: it reports elements whose label **contains** the visible text but does **not begin** with it. If the label does not contain the visible text at all, Mismatched Label Text owns that finding and this one stays silent. *(Beta rule)*

## Why it matters

Voice Control is tolerant of extra words at the end of a label but not at the beginning. A button reading "Next" labelled "Proceed to payment, Next" technically satisfies label-in-name, yet the user saying "Tap Next" gets slower, less reliable matching than if the label began with the visible word. Placing the visible text first also means VoiceOver users hear the word that matches what a sighted colleague sees, before any supplementary context.

## Common failure patterns

- prefixing context onto the label: "Order summary, Edit" on a button that reads "Edit"
- composing a cell's combined label so the control's own text lands last

## Remediation guidance

- reorder so the visible text leads: "Edit, order summary" rather than "Order summary, Edit"
- keep supplementary context in `accessibilityHint` where it does not participate in name matching at all

## Related docs

- [Mismatched Label Text](/support/docs/accessibility-ios-rule-mismatched-label-text/)
- [iOS Rule Repository](/support/docs/accessibility-ios-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
