# Non-text Content (1.1.1)

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Meaningful images and non-text elements need accessible text alternatives.

**WCAG Reference**
**Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html)

## What this rule checks

This rule checks whether meaningful non-text content exposes an accessible text alternative that explains its purpose or information.

## Why it matters

Screen-reader users and other assistive technology users rely on accessible names or descriptions to understand images, icons, and other non-text elements.

## Common failure patterns

- meaningful images with no alt text
- icon-only controls with no accessible name
- charts or visual indicators with no text alternative

## Remediation guidance

- add accurate alt text for meaningful content
- mark decorative content as decorative so it is ignored correctly
- ensure icon-only controls expose an accessible name through the appropriate attribute or label

## Related docs

- [Web Rule Repository](/support/docs/accessibility-web-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
