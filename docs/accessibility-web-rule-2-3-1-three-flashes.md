---
id: accessibility-web-rule-2-3-1-three-flashes
title: Three Flashes or Below Threshold (2.3.1)
sidebar_label: Three Flashes (2.3.1)
description: Rule-level Accessibility guidance for Three Flashes or Below Threshold (WCAG 2.3.1 Level A).
slug: accessibility-web-rule-2-3-1-three-flashes/
---

# Three Flashes or Below Threshold (2.3.1)

Pages must not contain anything that flashes more than three times per second, unless the flash is below general flash and red flash thresholds.

:::info WCAG Reference
**Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html)
:::

## What this rule checks

The scanner flags content that produces rapid flashing (more than three flashes per second) in a large enough area to exceed safety thresholds.

## Why it matters

Rapid flashing can trigger seizures in people with photosensitive epilepsy. This is a critical safety requirement, not just a usability concern.

## Common failure patterns

- animated GIFs or videos with rapid light-to-dark transitions
- strobe effects in promotional content or loading animations
- rapid color cycling in game-like or interactive elements
- auto-playing video ads with flashing transitions

## Remediation guidance

- limit flashing to three or fewer per second in any region of the page
- use the Photosensitive Epilepsy Analysis Tool (PEAT) to test video and animation content
- provide a warning before content that contains known flashing and allow the user to skip it
- respect `prefers-reduced-motion` to suppress flashing animations

## Related docs

- [Web Rule Repository](/support/docs/accessibility-web-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
