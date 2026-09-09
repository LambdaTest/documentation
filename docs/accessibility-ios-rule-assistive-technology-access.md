---
id: accessibility-ios-rule-assistive-technology-access
title: Assistive Technology Access
sidebar_label: Assistive Technology Access
description: Rule-level Accessibility guidance for Assistive Technology Access on iOS.
slug: accessibility-ios-rule-assistive-technology-access/
---

# Assistive Technology Access

Interactive iOS elements must be accessible to VoiceOver and other assistive technologies, not just direct touch interaction.

:::info WCAG Reference
**Maps to:** WCAG 4.1.2 Name, Role, Value | **Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
:::

## What this rule checks

The scanner flags interactive elements that have `isAccessibilityElement` set to `false` or are hidden from the accessibility tree while still being visually present and functional.

## Why it matters

When an interactive element is excluded from the accessibility tree, VoiceOver users cannot perceive or activate it. This effectively locks those users out of features that are available to sighted users.

## Common failure patterns

- custom views with `isAccessibilityElement = false` that contain interactive content
- `UIView` subclasses that implement touch handling but do not expose accessibility properties
- elements hidden behind other views that are accessible via direct touch but not VoiceOver navigation
- container views that suppress child accessibility without evaluating each child

## Remediation guidance

- set `isAccessibilityElement = true` on all meaningful interactive elements
- for custom container views, either make children individually accessible or provide a container-level label that summarizes the content
- implement `UIAccessibility` protocols on custom views (label, traits, value, hint)
- test with VoiceOver to confirm every interactive element is reachable by swiping

## Related docs

- [iOS Rule Repository](/support/docs/accessibility-ios-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
