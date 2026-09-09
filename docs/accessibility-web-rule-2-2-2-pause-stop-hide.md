---
id: accessibility-web-rule-2-2-2-pause-stop-hide
title: Pause, Stop, Hide (2.2.2)
sidebar_label: Pause, Stop, Hide (2.2.2)
description: Rule-level Accessibility guidance for Pause, Stop, Hide (WCAG 2.2.2 Level A).
slug: accessibility-web-rule-2-2-2-pause-stop-hide/
---

# Pause, Stop, Hide (2.2.2)

Moving, blinking, scrolling, or auto-updating content must include a mechanism to pause, stop, or hide it.

:::info WCAG Reference
**Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html)
:::

## What this rule checks

The scanner identifies animations, auto-scrolling regions, and auto-updating feeds that run for more than five seconds without user controls.

## Why it matters

Motion on screen can be distracting or physically harmful for users with attention disorders, vestibular conditions, or cognitive disabilities. Continuous updates can also interfere with screen-reader announcements.

## Common failure patterns

- auto-scrolling news tickers or marquees with no pause button
- animated hero banners that loop indefinitely
- live data feeds that push updates into the DOM without user consent
- background video that plays continuously with no stop control

## Remediation guidance

- add visible pause, stop, or hide controls for any auto-moving content
- respect the `prefers-reduced-motion` media query to minimize or remove animation
- for live feeds, allow the user to opt in to updates rather than pushing them automatically
- ensure controls are keyboard accessible and announced by screen readers

## Related docs

- [Web Rule Repository](/support/docs/accessibility-web-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
