---
id: accessibility-ios-rule-missing-accessibility-labels
title: Missing Accessibility Labels
sidebar_label: Missing Accessibility Labels
description: Rule-level Accessibility guidance for Missing Accessibility Labels.
slug: accessibility-ios-rule-missing-accessibility-labels/
---

# Missing Accessibility Labels

Interactive iOS elements need accessible names that assistive technologies can announce.

:::info WCAG Reference
**Maps to:** WCAG 4.1.2 Name, Role, Value | **Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
:::

## What this rule checks

This rule checks whether meaningful iOS controls and interactive elements expose accessible names through labels and related accessibility properties.

## Why it matters

VoiceOver users depend on clear accessible names to understand what each control does and to move through the interface confidently.

## Common failure patterns

- custom buttons with no `accessibilityLabel`
- image-based controls with no accessible name
- duplicate labels that make multiple controls sound identical

## Remediation guidance

- add accurate labels for meaningful interactive elements
- make labels action-oriented when the element performs an action
- verify the spoken output in VoiceOver after implementation

## Related docs

- [iOS Rule Repository](/support/docs/accessibility-ios-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
