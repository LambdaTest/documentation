---
id: accessibility-web-rule-2-4-7-focus-visible
title: Focus Visible (2.4.7)
sidebar_label: Focus Visible (2.4.7)
description: Rule-level Accessibility guidance for Focus Visible (2.4.7).
slug: accessibility-web-rule-2-4-7-focus-visible/
---

# Focus Visible (2.4.7)

Keyboard users need a visible focus indicator while moving through the interface.

:::info WCAG Reference
**Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** AA | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html)
:::

## What this rule checks

This rule checks whether users can see where keyboard focus currently is as they move through interactive elements.

## Why it matters

Without a visible focus state, keyboard users can lose track of where they are on the page and may be unable to complete key tasks.

## Common failure patterns

- focus outlines removed without a replacement style
- custom components with hidden or clipped focus styling
- insufficient contrast between the focus ring and surrounding UI

## Remediation guidance

- keep the default focus indicator or replace it with an equally visible custom style
- test focus styling on links, buttons, form fields, menus, and dialogs
- verify focus visibility in light and dark themes

## Related docs

- [Web Rule Repository](/support/docs/accessibility-web-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
