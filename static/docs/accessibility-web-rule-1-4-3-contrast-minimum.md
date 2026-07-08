# Contrast (Minimum) (1.4.3)

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/llms.txt).

Text and important visual elements need sufficient contrast to remain readable.

**WCAG Reference**
**Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** AA | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)

## What this rule checks

This rule checks whether text and important UI elements meet the minimum contrast requirements needed for readable, usable interfaces.

## Why it matters

Low contrast makes content difficult to read for users with low vision, color-vision differences, or difficult viewing conditions.

## Common failure patterns

- light gray text on a white background
- status text that uses color with weak contrast
- disabled-looking controls that are still interactive

## Remediation guidance

- increase the contrast between foreground and background colors
- verify contrast after hover, focus, and active-state styling is applied
- avoid relying on color tokens that look correct in one theme but fail in another

## Related docs

- [Web Rule Repository](/support/docs/accessibility-web-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
