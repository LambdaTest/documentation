---
id: accessibility-web-rule-1-3-4-orientation
title: Orientation (1.3.4)
sidebar_label: Orientation (1.3.4)
description: Rule-level Accessibility guidance for Orientation (WCAG 1.3.4 Level AA).
slug: accessibility-web-rule-1-3-4-orientation/
---

# Orientation (1.3.4)

Content must not restrict its view and operation to a single display orientation (portrait or landscape) unless a specific orientation is essential.


:::info WCAG Reference
**Applies to:** WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.1 | **Level:** AA | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/orientation.html)
:::


## What this rule checks

The scanner detects CSS or viewport meta configurations that lock the page to a single orientation, preventing users from rotating their device.

## Why it matters

Users with motor disabilities may mount their device in a fixed orientation. Users with low vision may prefer landscape for wider text columns. Locking orientation can make content inaccessible or uncomfortable to use.

## Common failure patterns

- CSS `@media (orientation: portrait)` rules that hide or break content in landscape
- JavaScript that forces a redirect or overlay when the device is rotated
- viewport meta tags that disable user scaling combined with fixed-orientation assumptions

## Remediation guidance

- support both portrait and landscape orientations through responsive design
- remove JavaScript orientation locks unless the content genuinely requires a specific orientation (e.g., a piano keyboard app)
- test the layout in both orientations on real devices
- if a specific orientation is essential, clearly document why

## Related docs

- [Web Rule Repository](/support/docs/accessibility-web-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
