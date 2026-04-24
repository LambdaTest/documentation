---
id: accessibility-web-rule-2-2-1-timing-adjustable
title: Timing Adjustable (2.2.1)
sidebar_label: Timing Adjustable (2.2.1)
description: Rule-level Accessibility guidance for Timing Adjustable (WCAG 2.2.1 Level A).
slug: accessibility-web-rule-2-2-1-timing-adjustable/
---

# Timing Adjustable (2.2.1)

When a page enforces a time limit, users must be able to turn off, adjust, or extend the time before it expires.

:::info WCAG Reference
**Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable.html)
:::

## What this rule checks

The scanner identifies session timeouts, auto-redirects, and auto-updating content that impose a fixed time limit without user control.

## Why it matters

Users with cognitive disabilities, motor impairments, or users who rely on assistive technology often need more time to read, understand, and interact with content. Unexpected timeouts can cause data loss and frustration.

## Common failure patterns

- session timeouts that log the user out without warning or extension options
- auto-advancing carousels or slideshows with no pause control
- form pages that expire and discard input after a fixed duration
- auto-refreshing dashboards that interrupt screen-reader output

## Remediation guidance

- provide a warning at least 20 seconds before a timeout and allow the user to extend it
- allow users to disable or increase time limits in account or session settings
- add pause, stop, and resume controls to auto-advancing content
- for real-time exceptions (auctions, live events), clearly document the constraint

## Related docs

- [Web Rule Repository](/support/docs/accessibility-web-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
