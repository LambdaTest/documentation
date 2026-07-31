---
id: accessibility-android-rule-non-focusable-interactive-element
title: Non-Focusable Interactive Element
sidebar_label: Non-Focusable Interactive Element
description: Rule-level Accessibility guidance for Non-Focusable Interactive Element on Android.
slug: accessibility-android-rule-non-focusable-interactive-element/
---

# Non-Focusable Interactive Element

Clickable elements must be able to receive keyboard or d-pad focus so external-keyboard and switch-access users can reach them.

:::info WCAG Reference
**Maps to:** WCAG 2.1.1 Keyboard | **Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html)
:::

## What this rule checks

The scanner examines visible, enabled interactive elements and reports any that cannot receive input (keyboard/d-pad) focus and have no focusable interactive ancestor or descendant handling the action on their behalf.

## Why it matters

Users navigating with an external keyboard, d-pad, or switch access move focus between focusable elements and activate the focused one. An interactive element that cannot take focus is simply unreachable for them — the action exists for touch users only.

## Common failure patterns

- a click listener on a plain `View` or layout without `android:focusable="true"`
- custom controls that intercept touch events but never became focusable
- a clickable child inside a focusable container that does not actually delegate the click

## Remediation guidance

- use native controls (`Button`, `EditText`, `CheckBox`, `Switch`), which are focusable by default, or set `android:focusable="true"` on custom clickable views
- if a container handles the click for its children (e.g., a list row), make the container focusable and clickable so keyboard users can reach the action
- in Compose, `Modifier.clickable` makes the element focusable automatically — avoid bypassing it with raw pointer handling

## Related docs

- [Android Rule Repository](/support/docs/accessibility-android-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
