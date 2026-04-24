---
id: accessibility-android-rule-interactive-role-undefined
title: Interactive Role Undefined
sidebar_label: Interactive Role Undefined
description: Rule-level Accessibility guidance for Interactive Role Undefined on Android.
slug: accessibility-android-rule-interactive-role-undefined/
---

# Interactive Role Undefined

Interactive Android elements must expose a meaningful accessibility role so TalkBack can announce what the element is and how to interact with it.

:::info WCAG Reference
**Maps to:** WCAG 4.1.2 Name, Role, Value | **Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
:::

## What this rule checks

The scanner flags interactive elements (buttons, switches, checkboxes, sliders) that do not expose a recognized accessibility role to the Android accessibility framework.

## Why it matters

TalkBack announces both the accessible name and the role ("Button", "Switch", "Checkbox") to tell users what kind of control they are interacting with. Without a role, users hear the name but cannot tell whether to tap, swipe, or double-tap.

## Common failure patterns

- custom clickable `View` elements with no `accessibilityClassName` override
- `LinearLayout` or `FrameLayout` used as a button with an `onClickListener` but no role
- Jetpack Compose elements using `clickable` without a `role` parameter in `Modifier.semantics`

## Remediation guidance

- use native Android widgets (`Button`, `Switch`, `CheckBox`) whenever possible
- for custom views, override `getAccessibilityClassName()` to return the appropriate widget class name
- in Jetpack Compose, set `role = Role.Button` (or the appropriate role) inside `Modifier.semantics { }`
- test with TalkBack to confirm the announced role matches the element's behavior

## Related docs

- [Android Rule Repository](/support/docs/accessibility-android-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
