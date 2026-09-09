---
id: accessibility-ios-rule-accessibility-role-definition
title: Accessibility Role Definition
sidebar_label: Accessibility Role Definition
description: Rule-level Accessibility guidance for Accessibility Role Definition on iOS.
slug: accessibility-ios-rule-accessibility-role-definition/
---

# Accessibility Role Definition

Interactive iOS elements must expose the correct accessibility traits so VoiceOver announces their role (button, link, switch, header) accurately.

:::info WCAG Reference
**Maps to:** WCAG 4.1.2 Name, Role, Value | **Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
:::

## What this rule checks

The scanner verifies that interactive elements have appropriate `accessibilityTraits` set, such as `.button`, `.link`, `.header`, `.adjustable`, or `.selected`, matching their actual behavior.

## Why it matters

VoiceOver uses traits to tell users what kind of element they are interacting with and how to use it. Without the correct trait, users may not know they can tap, swipe, or adjust a control.

## Common failure patterns

- custom interactive views with no `accessibilityTraits` set (defaults to `.none`)
- links styled as buttons but missing `.link` trait
- section headers in lists without `.header` trait
- slider-like controls missing `.adjustable` trait

## Remediation guidance

- set `accessibilityTraits` on every interactive element to match its behavior
- use `.button` for tappable controls, `.link` for navigation links, `.header` for section headings
- for adjustable controls (sliders, steppers), set `.adjustable` and implement `accessibilityIncrement()` and `accessibilityDecrement()`
- in SwiftUI, use `.accessibilityAddTraits()` to add the appropriate traits
- test with VoiceOver and confirm the announced trait matches the element's behavior

## Related docs

- [iOS Rule Repository](/support/docs/accessibility-ios-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
