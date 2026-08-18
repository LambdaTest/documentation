---
id: accessibility-android-rule-text-spacing
title: Text Spacing
sidebar_label: Text Spacing
description: Rule-level Accessibility guidance for Text Spacing on Android.
slug: accessibility-android-rule-text-spacing/
---

# Text Spacing

Text needs enough line height, word spacing, and paragraph spacing to stay readable for users with low vision, dyslexia, or cognitive disabilities.

:::info WCAG Reference
**Maps to:** Best Practice (references WCAG 1.4.12 Text Spacing) — the scanner's thresholds are a readability heuristic and do not test the literal success criterion values
:::

## What this rule checks

The scanner examines the rendered spacing of on-screen text and reports three distinct problems: line height, word spacing, or paragraph gaps rendered below a readability floor. Thresholds are calibrated for mobile typography, so default Android text styles pass.

## Why it matters

Text rendered below the readability floor is hard for users with low vision, dyslexia, or cognitive disabilities to track. When lines sit on top of each other, tracking from the end of one line to the start of the next becomes genuinely difficult; when word gaps vanish, word shapes blur together; when paragraphs have no separation, the visual structure of the content is lost.

## Common failure patterns

- `android:lineSpacingMultiplier` below 1.0 compressing line height
- negative `android:letterSpacing` shrinking word gaps
- consecutive paragraphs stacked with zero or near-zero margin

## Remediation guidance

Don't compress spacing below the platform defaults; aim for a line height of roughly 1.2–1.5x the font size for body text. The scanner enforces a minimum of 0.9x; 1.2–1.5x is recommended for best readability — a developer at exactly 1.0x will pass the scan but is still below the recommended range.

- keep `android:lineSpacingMultiplier` at 1.0 or above and avoid negative `android:letterSpacing`
- on typefaces with narrow default word spacing, set `android:letterSpacing="0.05"` explicitly on body text
- separate consecutive multi-line `TextView`s with `android:layout_marginTop`

## Limitations

- Findings are viewport-dependent: spacing is measured from the currently rendered screen, so the same content can produce different results at different scroll positions, and text outside the visible viewport is not evaluated.

## Related docs

- [Android Rule Repository](/support/docs/accessibility-android-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
