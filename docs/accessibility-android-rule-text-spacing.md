---
id: accessibility-android-rule-text-spacing
title: Text Spacing
sidebar_label: Text Spacing
description: Rule-level Accessibility guidance for Text Spacing on Android.
slug: accessibility-android-rule-text-spacing/
---

# Text Spacing

Text needs enough line height, word spacing, and paragraph spacing to stay readable for users with dyslexia and low vision.

:::info WCAG Reference
**Maps to:** WCAG 1.4.12 Text Spacing | **Applies to:** WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.1 | **Level:** AA | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html)
:::

## What this rule checks

The scanner examines the rendered spacing of on-screen text and reports three distinct problems: line height compressed below the readable minimum, word gaps crushed by negative letter spacing, and consecutive paragraphs stacked without enough vertical separation. Thresholds are calibrated for mobile typography, so default Android text styles pass.

## Why it matters

Dense text is exhausting for people with dyslexia and low vision. When lines sit on top of each other, tracking from the end of one line to the start of the next becomes genuinely difficult; when word gaps vanish, word shapes blur together; when paragraphs have no separation, the visual structure of the content is lost.

## Common failure patterns

- `android:lineSpacingMultiplier` below 1.0 compressing line height
- negative `android:letterSpacing` shrinking word gaps
- consecutive paragraphs stacked with zero or near-zero margin

## Remediation guidance

1. Identify the text rendered with compressed line height, word spacing, or paragraph gaps.
2. Avoid compressing text spacing below the font's defaults — keep `android:lineSpacingMultiplier` at or above 1.0 and avoid negative `android:letterSpacing`.
3. Separate consecutive paragraphs with vertical spacing of at least twice their line spacing so text blocks stay visually distinct.

## Limitations

- Findings are viewport-dependent: spacing is measured from the currently rendered screen, so the same content can produce different results at different scroll positions, and text outside the visible viewport is not evaluated.

## Related docs

- [Android Rule Repository](/support/docs/accessibility-android-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
