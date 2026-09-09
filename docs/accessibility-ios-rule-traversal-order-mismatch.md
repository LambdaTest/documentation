---
id: accessibility-ios-rule-traversal-order-mismatch
title: Traversal Order Does Not Match Visual Layout
sidebar_label: Traversal Order Mismatch
description: Rule-level Accessibility guidance for Traversal Order Does Not Match Visual Layout on iOS.
slug: accessibility-ios-rule-traversal-order-mismatch/
---

# Traversal Order Does Not Match Visual Layout

VoiceOver's reading order should follow the screen's visual layout, so navigation matches the mental model sighted users build from position.

:::info WCAG Reference
**Maps to:** WCAG 2.4.3 Focus Order | **Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html)
:::

## What this rule checks

This is a screen-level rule. The scanner walks focusable elements in the order the screen reader reads them and compares each element with the one before it. An element is flagged when it comes later in the reading order but sits earlier on screen than the element before it — its centre sits noticeably above the previous element's centre, or its centre is on the same row but noticeably to the left. In other words, it fires when the reading order jumps backwards relative to the visual layout. Only neighbouring elements are compared, so a single misplaced element does not cascade into a report for everything after it.

Excluded from the comparison: elements hidden from assistive technology, invisible or off-screen elements, zero-size elements, headers, system elements (scroll bars, the back button, page indicators), and non-interactive static text and images, since those frequently sit in a reading order that differs from their visual position without any consequence for navigation.

## Why it matters

Screen reader users build a mental model of a screen from the order in which its elements are announced. When reading order diverges from the visual layout, such as a footnote announced before its heading or form fields read out of sequence, content becomes disorienting, and forms get filled in the wrong order. WCAG 2.4.3 requires that focusable components receive focus in an order that preserves meaning and operability.

## Common failure patterns

- elements added to a view hierarchy in a different order than they are laid out, most often after a redesign that moved things visually but not in code
- an `accessibilityElements` array set once and left stale as the layout evolved
- absolutely positioned elements whose frames were adjusted without reordering their subviews

## Remediation guidance

1. Turn on VoiceOver and swipe through the screen, comparing what you hear with what you see.
2. Reorder the subviews so their hierarchy order matches the visual layout — this is the fix that keeps working after the next redesign.
3. Only if reordering is impractical, set the reading order explicitly with `accessibilityElements` on the container, and remember to update it whenever the layout changes.

## Related docs

- [Meaningful Sequence](/support/docs/accessibility-ios-rule-meaningful-sequence/)
- [iOS Rule Repository](/support/docs/accessibility-ios-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
