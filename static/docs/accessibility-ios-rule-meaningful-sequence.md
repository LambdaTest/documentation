# Meaningful Sequence

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

The programmatic reading order must match the meaningful visual sequence of the content, or screen reader users hear it in a confusing order.

**WCAG Reference**
**Maps to:** WCAG 1.3.2 Meaningful Sequence | **Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence.html)

## What this rule checks

The scanner checks whether the programmatic reading order matches the meaningful visual sequence. Where [Traversal Order Does Not Match Visual Layout](/support/docs/accessibility-ios-rule-traversal-order-mismatch/) targets focusable controls, this rule concerns the sequence of the content itself.

## Why it matters

Content whose meaning depends on order — steps in a process, a heading followed by its body, a price next to its product — loses that meaning when announced out of sequence. The user hears all the pieces but cannot reconstruct the whole.

## Common failure patterns

- multi-column layouts read column-by-column when the meaning flows row-by-row
- captions announced before the content they describe
- visual ordering achieved purely through positioning while the hierarchy retains insertion order

## Remediation guidance

- reorder views in the layout to match the visual reading order
- set the `accessibilityElements` array on the container to define the correct VoiceOver reading sequence

## Related docs

- [Traversal Order Does Not Match Visual Layout](/support/docs/accessibility-ios-rule-traversal-order-mismatch/)
- [iOS Rule Repository](/support/docs/accessibility-ios-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
