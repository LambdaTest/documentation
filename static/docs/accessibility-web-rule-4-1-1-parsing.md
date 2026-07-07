# Parsing (4.1.1)

HTML markup must be well-formed: elements must have complete start and end tags, be nested correctly, not contain duplicate attributes, and use unique IDs.

**WCAG Reference**
**Applies to:** WCAG 2.0, WCAG 2.1 (obsolete in WCAG 2.2)
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/parsing.html)

WCAG 2.2 considers this criterion obsolete because modern browsers and assistive technologies handle parsing errors more gracefully than older ones. It may still appear in scan results when testing against WCAG 2.0 or 2.1.

## What this rule checks

The scanner validates HTML for duplicate IDs, malformed nesting, unclosed elements, and duplicate attributes that could confuse assistive technology parsers.

## Why it matters

Duplicate IDs break `aria-labelledby`, `aria-describedby`, and `` associations, causing assistive technology to reference the wrong element. Malformed markup can also cause screen readers to skip or misinterpret content.

## Common failure patterns

- multiple elements sharing the same `id` attribute
- unclosed ``, ``, or `` elements that shift the DOM tree
- duplicate attributes on the same element
- improperly nested interactive elements (e.g., `` inside ``)

## Remediation guidance

- run an HTML validator to catch structural issues
- ensure every `id` is unique within the page
- fix unclosed or misnested elements
- avoid nesting interactive elements inside each other

## Related docs

- [Web Rule Repository](/support/docs/accessibility-web-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
