---
id: accessibility-web-rule-1-4-11-non-text-contrast
title: Non-text Contrast (1.4.11)
sidebar_label: Non-text Contrast (1.4.11)
description: Rule-level Accessibility guidance for Non-text Contrast (WCAG 1.4.11 Level AA).
slug: accessibility-web-rule-1-4-11-non-text-contrast/
---

# Non-text Contrast (1.4.11)

Visual elements needed to identify UI components and graphical objects must have a contrast ratio of at least 3:1 against adjacent colors.


:::info WCAG Reference
**Applies to:** WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.1 | **Level:** AA | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)
:::


## What this rule checks

The scanner checks the contrast of interactive component boundaries (input borders, button outlines, focus indicators) and meaningful graphical objects (icons, chart segments) against their backgrounds.

## Why it matters

Users with low vision need sufficient contrast to perceive form field boundaries, button edges, icon shapes, and chart data. Without adequate contrast, these elements blend into the background and become invisible.

## Common failure patterns

- input fields with light gray borders on a white background (below 3:1)
- icon-only buttons where the icon color is too close to the background
- chart segments that rely on low-contrast color fills to convey data
- focus indicators with insufficient contrast against the surrounding area

## Remediation guidance

- ensure input and button borders meet the 3:1 ratio against adjacent background colors
- verify icon contrast against both light and dark backgrounds
- add borders or patterns to chart segments alongside color fills
- test all interactive states (default, hover, focus, active) for contrast compliance

## Related docs

- [Web Rule Repository](/support/docs/accessibility-web-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
