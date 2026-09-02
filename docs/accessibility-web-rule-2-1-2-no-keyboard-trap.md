---
id: accessibility-web-rule-2-1-2-no-keyboard-trap
title: No Keyboard Trap (2.1.2)
sidebar_label: No Keyboard Trap (2.1.2)
description: Rule-level Accessibility guidance for No Keyboard Trap (WCAG 2.1.2 Level A).
slug: accessibility-web-rule-2-1-2-no-keyboard-trap/
---

# No Keyboard Trap (2.1.2)

If keyboard focus can be moved to a component on the page, focus must also be able to move away from that component using standard keyboard navigation.

:::info WCAG Reference
**Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html)
:::

## What this rule checks

The scanner checks for components that capture keyboard focus and prevent the user from tabbing or escaping out using standard keys.

## Why it matters

A keyboard trap strands users inside a component with no way to continue navigating the page. This is one of the most severe accessibility barriers because it renders everything outside the trap completely unreachable.

## Common failure patterns

- modal dialogs that do not return focus on close or lack an Escape key handler
- embedded media players or third-party widgets that consume all key events
- custom rich-text editors that intercept Tab without an exit mechanism
- infinite tab loops inside components with no documented exit key

## Remediation guidance

- ensure Escape closes modals and returns focus to the trigger element
- implement focus trapping in modals correctly: trap while open, release on close
- allow Tab to exit custom editors (provide a documented key combination or a skip link)
- test by tabbing into and then out of every interactive region on the page

## Related docs

- [Web Rule Repository](/support/docs/accessibility-web-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
