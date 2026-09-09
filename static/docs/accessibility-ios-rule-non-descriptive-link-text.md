# Non-Descriptive Link Text

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Link text should describe its destination on its own, without relying on generic phrases like "Click here".

**WCAG Reference**
**Maps to:** WCAG 2.4.4 Link Purpose (In Context) | **Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html)

## What this rule checks

The scanner examines links whose entire accessible name is a generic call-to-action. The blocked phrases are: `click here, click this, go, here, information, learn more, more, more info, more information, right here, read more, see more, start, this, tap here, tap this, view more, link, details`.

Matching is exact, not a substring. The label must be one of these phrases in full. Before comparison the label is cleaned up: non-breaking spaces are normalized, a trailing ellipsis is removed, and surrounding whitespace and punctuation are trimmed. So "Read more..." is flagged, while "Read more about our privacy policy" passes. Links with an empty label are covered by the missing-label rules instead.

## Why it matters

VoiceOver users frequently navigate by pulling up the rotor's list of all links on a screen, or by jumping link to link. Out of context, a list reading "Read more, Read more, Learn more, Click here" is unusable. Every entry sounds identical and none reveals its destination. Descriptive link text lets a user decide whether to follow a link without first reading the surrounding paragraph, which is what the rotor exists to provide.

## Common failure patterns

- a "Read more" or "Learn more" link repeated under every article card
- links whose entire text is "here", "Details", or "Link"
- truncated link text ending in an ellipsis that reduces to a generic phrase once trimmed

## Remediation guidance

- rewrite the visible text to name the destination: "Read more" becomes "Read our privacy policy"
- if the visible text cannot change for design reasons, set a descriptive `accessibilityLabel` on the link instead — the visible text stays "Read more"; VoiceOver announces "Read our privacy policy"
- ensure the label reads sensibly in isolation, since that is how the rotor presents it

## Related docs

- [iOS Rule Repository](/support/docs/accessibility-ios-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
