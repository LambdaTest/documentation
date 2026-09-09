---
id: accessibility-ios-rule-emoji-symbol-label
title: Emoji or Symbol Used in Accessibility Label
sidebar_label: Emoji or Symbol in Label
description: Rule-level Accessibility guidance for Emoji or Symbol Used in Accessibility Label on iOS.
slug: accessibility-ios-rule-emoji-symbol-label/
---

# Emoji or Symbol Used in Accessibility Label

Accessible labels should rely on descriptive text rather than emoji or symbols, which VoiceOver announces inconsistently.

:::info WCAG Reference
**Maps to:** Best Practice (Accessibility Label Quality) — no specific WCAG success criterion
:::

## What this rule checks

The scanner examines whether a visible, interactive element's accessible label is made up mostly of emoji, arrows, geometric shapes, or other special symbols instead of descriptive text. A violation is reported when half or more of the label's meaningful characters are emoji or symbols. Whitespace is ignored, and ordinary punctuation is not counted as a symbol. Static (non-interactive) text is not checked.

## Why it matters

VoiceOver announces emoji and symbols by their Unicode names, which are verbose and inconsistent across iOS versions and voices. A button labelled with a right arrow may be read as "rightwards arrow", which says nothing about what it does. A label of three fire emoji produces "fire fire fire": noise, not meaning. A user relying on the spoken label gets no usable information about the control's purpose, and Voice Control users cannot speak the label at all.

## Common failure patterns

- icon-only buttons whose label is the emoji itself: a heart, an arrow, a star
- decorative symbols concatenated into the accessible name alongside little or no text
- rating displays labelled with filled and empty star characters rather than "3 out of 5 stars"

## Remediation guidance

1. **Determine intent:** is the symbol functional (it represents an action) or decorative?
2. **Replace with text:** change a heart glyph to "Add to favourites", an arrow glyph to "Next page".
3. **Hide decorative glyphs:** if the symbol is visual flair only, exclude it from the accessibility tree with `isAccessibilityElement = false` or `.accessibilityHidden(true)`.
4. For values better expressed numerically, set `accessibilityValue` ("3 out of 5") rather than repeating glyphs.

## Related docs

- [iOS Rule Repository](/support/docs/accessibility-ios-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
