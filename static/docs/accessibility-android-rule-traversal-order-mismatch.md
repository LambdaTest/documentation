# Traversal Order Does Not Match Visual Layout

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

TalkBack's reading order should follow the screen's visual layout, and Android's traversal overrides shouldn't create loops or contradict that order.

This is a **Beta rule**. Coverage and accuracy may continue to change as it matures.

**WCAG Reference**
**Maps to:** WCAG 2.4.3 Focus Order | **Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html)

## What this rule checks

The scanner examines misuse of Android's reading-order overrides (`accessibilityTraversalBefore` / `accessibilityTraversalAfter`, and Compose's `traversalIndex`) that break TalkBack navigation. Two failure modes are reported:

1. **Circular traversal chains** — overrides that form a loop, leaving TalkBack's reading order undefined and potentially trapping users cycling among the same elements.
2. **Reading order contradicts visual order** — the developer-defined traversal chain reads elements in a different sequence than they appear on screen (top-to-bottom, left-to-right).

## Why it matters

Screen reader users build a mental model of the screen from the order in which elements are announced. When reading order diverges from the visual layout — a footnote announced before its heading, form fields read out of sequence — content becomes disorienting and forms can be filled in incorrectly. Cycles are worse: navigation loses forward progress entirely.

## Common failure patterns

- `accessibilityTraversalBefore`/`After` attributes added to "fix" one screen and left pointing at the wrong targets after a redesign
- Compose `Modifier.semantics { traversalIndex = N }` values that reorder announcements away from the visual layout
- two overrides that reference each other, forming a loop

## Remediation guidance

- compare what you see on screen with the order TalkBack reads it
- reorder elements in the view hierarchy so their code order matches the visual layout — the default (layout) order is correct for most screens, so prefer removing overrides
- if reordering in code isn't possible, set the reading order deliberately with `android:accessibilityTraversalBefore` / `android:accessibilityTraversalAfter`, and verify the full chain reads in a meaningful sequence with no loops

## Related docs

- [Android Rule Repository](/support/docs/accessibility-android-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
