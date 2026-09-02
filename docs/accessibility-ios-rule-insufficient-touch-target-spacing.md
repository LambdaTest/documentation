---
id: accessibility-ios-rule-insufficient-touch-target-spacing
title: Insufficient Touch Target Spacing
sidebar_label: Insufficient Touch Target Spacing
description: Rule-level Accessibility guidance for Insufficient Touch Target Spacing on iOS.
slug: accessibility-ios-rule-insufficient-touch-target-spacing/
---

# Insufficient Touch Target Spacing

Undersized interactive elements need enough clear space between them so an imprecise tap still lands on the intended control.

:::info WCAG Reference
**Maps to:** WCAG 2.5.8 Target Size (Minimum) | **Applies to:** WCAG 2.2
**Introduced in:** WCAG 2.2 | **Level:** AA | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)
:::

## What this rule checks

This is a screen-level rule. The scanner collects every interactive element that is visible, on-screen, enabled, and reachable by touch, then measures the edge-to-edge gap between each pair:

- if the elements overlap or touch on both axes, the gap is zero
- if they are separated on one axis only, the gap is that axis's separation
- if separated on both axes, the gap is the diagonal distance between the nearest corners

A pair is reported when the gap is less than 8 points. Both elements in the pair are reported. A pair is skipped when both elements already meet the 44x44pt minimum (an intentional design, not a hazard), and parent-child pairs are also skipped, since a control nested inside another has zero gap by construction.

## Why it matters

WCAG 2.5.8 allows a target smaller than the minimum provided it is surrounded by enough clear space that an imprecise tap still lands correctly. The converse is the failure this rule detects: small targets crowded together, where the spacing offers no margin for error. A user with a tremor aiming at a 30pt icon 3pt from its neighbour will hit the neighbour a meaningful fraction of the time, and if the neighbour is "Delete", the consequence is not recoverable by trying again.

## Common failure patterns

- rows of compact icon buttons in a toolbar or a table cell's accessory area
- increment and decrement steppers with tightly packed arrows
- inline "edit" and "delete" affordances placed side by side in a list row
- densely packed tab bars or segmented controls with custom sizing

## Remediation guidance

- increase the spacing to at least 8pt between adjacent small targets, or
- enlarge both targets to 44x44pt, at which point the pair is exempt
- prefer separating destructive actions from their neighbours by more than the minimum, or placing them behind a confirmation

## Related docs

- [Touch Target Sizing](/support/docs/accessibility-ios-rule-touch-target-sizing/)
- [iOS Rule Repository](/support/docs/accessibility-ios-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
