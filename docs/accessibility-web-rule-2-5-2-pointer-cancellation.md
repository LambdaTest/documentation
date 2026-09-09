---
id: accessibility-web-rule-2-5-2-pointer-cancellation
title: Pointer Cancellation (2.5.2)
sidebar_label: Pointer Cancellation (2.5.2)
description: Rule-level Accessibility guidance for Pointer Cancellation (WCAG 2.5.2 Level A).
slug: accessibility-web-rule-2-5-2-pointer-cancellation/
---

# Pointer Cancellation (2.5.2)

For single-pointer actions, at least one of the following must be true: the down-event does not trigger the action, the action is triggered on the up-event and can be aborted, the up-event reverses any outcome of the down-event, or completing the action on the down-event is essential.


:::info WCAG Reference
**Applies to:** WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.1 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/pointer-cancellation.html)
:::


## What this rule checks

The scanner verifies that interactive elements do not fire irreversible actions on `mousedown` or `touchstart` alone, allowing users to abort by moving the pointer away before releasing.

## Why it matters

Users with motor impairments frequently trigger accidental clicks. Firing on the up-event (click/mouseup/touchend) allows them to move the pointer off the target before releasing, cancelling the action.

## Common failure patterns

- destructive actions (delete, submit, purchase) triggered on `mousedown`
- drag-and-drop that commits on `pointerdown` with no undo
- custom buttons that respond to `touchstart` instead of `click`

## Remediation guidance

- use `click` events rather than `mousedown` or `touchstart` for actions
- if down-event activation is needed, provide an undo or confirmation step
- implement drag cancellation by allowing users to drop outside the target zone
- test by pressing down on a button, dragging away, and releasing to confirm no action occurs

## Related docs

- [Web Rule Repository](/support/docs/accessibility-web-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
