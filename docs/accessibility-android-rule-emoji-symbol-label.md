---
id: accessibility-android-rule-emoji-symbol-label
title: Emoji or Symbol Used in Accessibility Label
sidebar_label: Emoji or Symbol in Label
description: Rule-level Accessibility guidance for Emoji or Symbol Used in Accessibility Label on Android.
slug: accessibility-android-rule-emoji-symbol-label/
---

# Emoji or Symbol Used in Accessibility Label

Accessible labels should rely on descriptive text rather than emoji or symbols, which screen readers announce inconsistently.

:::info WCAG Reference
**Maps to:** Best Practice (Accessibility Label Quality) — no specific WCAG success criterion
:::

## What this rule checks

The scanner flags interactive elements whose accessible label is made up mostly or entirely of emoji, arrows, geometric shapes, or other special symbols instead of descriptive text. A label is flagged when half or more of its meaningful characters are emoji or symbols. Ordinary punctuation is acceptable; static (non-interactive) text is not checked.

## Why it matters

Screen readers announce emoji and symbols by their Unicode names, which are often verbose, ambiguous, or inconsistent across devices and screen reader versions. A button labeled "→" may be read as "rightwards arrow" — which says nothing about what the button does. A label like "🔥🔥🔥" produces "fire fire fire": noise, not meaning. Users who rely on the spoken label get no usable information about the control's purpose.

## Common failure patterns

- icon-only buttons labeled with the emoji itself ("❤️", "★", "✓") instead of an action description
- decorative symbols included in the accessible name alongside little or no text

## Remediation guidance

- determine intent — check whether the emoji is functional (represents an action) or decorative
- replace functional emoji with a descriptive verb, e.g. change "❤️" to "Add to Favorites"
- hide decorative icons from the focus order instead of labeling them — set `android:importantForAccessibility="no"`

## Related docs

- [Android Rule Repository](/support/docs/accessibility-android-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
