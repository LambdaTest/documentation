---
id: accessibility-web-rule-1-4-12-text-spacing
title: Text Spacing (1.4.12)
sidebar_label: Text Spacing (1.4.12)
description: Rule-level Accessibility guidance for Text Spacing (WCAG 1.4.12 Level AA).
slug: accessibility-web-rule-1-4-12-text-spacing/
---

# Text Spacing (1.4.12)

Content must remain readable and functional when users override text spacing properties — line height, paragraph spacing, letter spacing, and word spacing — up to specified thresholds.


:::info WCAG Reference
**Applies to:** WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.1 | **Level:** AA | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html)
:::


## What this rule checks

The scanner tests whether content is clipped, truncated, or overlapping when text spacing is increased to WCAG-specified thresholds: line height 1.5x font size, paragraph spacing 2x font size, letter spacing 0.12x font size, word spacing 0.16x font size.

## Why it matters

Users with dyslexia and other reading disabilities use custom text spacing to improve readability. If a page clips or overlaps text when spacing is increased, those users lose access to the content.

## Common failure patterns

- fixed-height containers that clip text when line height increases
- `overflow: hidden` on text containers that truncates content with increased spacing
- absolutely positioned labels that overlap adjacent content when letter spacing grows
- tooltip or badge text that overflows its container

## Remediation guidance

- avoid fixed heights on text containers; use `min-height` or auto-height
- do not use `overflow: hidden` on elements that contain user-facing text
- test with a text-spacing bookmarklet that applies the WCAG thresholds
- ensure layouts flex and reflow when text occupies more space

## Related docs

- [Web Rule Repository](/support/docs/accessibility-web-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
