# Info and Relationships (1.3.1)

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/llms.txt).

Content structure conveyed visually through layout, formatting, or styling must also be available programmatically so assistive technologies can interpret and present it correctly.

**WCAG Reference**
**Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)

## What this rule checks

The scanner verifies that headings, lists, tables, form groups, and landmark regions use correct semantic HTML rather than relying on visual appearance alone.

## Why it matters

Screen-reader users navigate by structure: headings, lists, and landmarks act as signposts. When structure is only visual (e.g., bold text instead of a heading element), assistive technology cannot expose it, and users lose the ability to skim, jump, and orient themselves.

## Common failure patterns

- text styled to look like a heading but using `` or `` instead of ``–``
- data presented in a grid layout but not using ``, ``, and ``
- form fields grouped visually but missing `` and ``
- navigation and content areas without landmark roles (``, ``, ``)

## Remediation guidance

- use native semantic elements for headings, lists, tables, and form groups
- add ARIA landmarks only when native elements are not available
- verify heading levels follow a logical nesting order without skipping levels
- test with a screen reader to confirm the announced structure matches the visual layout

## Related docs

- [Web Rule Repository](/support/docs/accessibility-web-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
