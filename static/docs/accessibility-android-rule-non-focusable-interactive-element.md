# Non-Focusable Interactive Element

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Clickable elements must be able to receive keyboard or d-pad focus so external-keyboard and switch-access users can reach them.

**WCAG Reference**
**Maps to:** WCAG 2.1.1 Keyboard | **Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html)

## What this rule checks

The scanner examines visible, enabled interactive elements and reports any that respond to touch but cannot receive input (keyboard/d-pad) focus, and have no focusable interactive ancestor or descendant handling the action on their behalf.

## Why it matters

Users navigating with an external keyboard, D-pad, or switch access move focus between focusable elements and activate the focused one. An element that responds to touch but cannot receive input focus is simply unreachable for them — the action exists for touch users only.

## Common failure patterns

- `setOnClickListener` sets `clickable=true` but does not set `focusable=true` — both are required, and it's easy to add one without the other
- custom controls that intercept touch events but never became focusable
- a clickable child inside a focusable container that does not actually delegate the click

## Remediation guidance

Every clickable element must also be focusable.

- add `android:focusable="true"` or `view.isFocusable = true` on custom clickable views, or use native controls (`Button`, `EditText`, `CheckBox`, `Switch`), which are focusable by default
- in Compose, use `Modifier.clickable {}` inside a `Button`, or add `.focusable()` to custom clickable containers
- where a container handles its children's click (e.g., a list row), make the container both focusable and clickable so keyboard users can reach the action

## Related docs

- [Android Rule Repository](/support/docs/accessibility-android-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
