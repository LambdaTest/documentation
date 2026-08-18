# Non-Descriptive Link Text

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Link text should describe its destination on its own, without relying on generic phrases like "Click here".

**WCAG Reference**
**Maps to:** WCAG 2.4.4 Link Purpose (In Context) | **Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html)

## What this rule checks

The scanner flags links whose entire accessible name is a generic call-to-action that says nothing about the destination — labels like "Click here", "Read more", "Learn more", "Tap here", "More info", "Details", "Go", or "Link". Only exact matches are flagged: "Click here for pricing details" passes; a link whose whole text is "Click here" fails. The rule applies to elements containing actual links (URL-backed text).

## Why it matters

Screen reader users frequently navigate by pulling up a list of all links on a screen, or by jumping link to link. Out of context, a list reading "Read more, Read more, Learn more, Click here" is unusable — every entry sounds identical and none reveals where it leads. Descriptive link text lets users decide whether to follow a link without reading the surrounding content.

## Common failure patterns

- repeated "Read more" / "Learn more" links under every article or card
- links whose visible text is a bare "here", "Details", or "Link"

## Remediation guidance

- replace vague link text with a label that says what the link does (e.g., "Read more" → "Read our privacy policy")
- if the visible text can't be changed, add a descriptive accessible label instead — set `android:contentDescription` with a clear label, or rewrite the visible `android:text`

## Related docs

- [Android Rule Repository](/support/docs/accessibility-android-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
