---
id: accessibility-web-rule-3-3-1-error-identification
title: Error Identification (3.3.1)
sidebar_label: Error Identification (3.3.1)
description: Rule-level Accessibility guidance for Error Identification (WCAG 3.3.1 Level A).
slug: accessibility-web-rule-3-3-1-error-identification/
---

# Error Identification (3.3.1)

When an input error is automatically detected, the item in error must be identified and the error described to the user in text.

:::info WCAG Reference
**Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html)
:::

## What this rule checks

The scanner verifies that form validation errors are communicated through visible text messages associated with the relevant field, not only through color or icon changes.

## Why it matters

Users who cannot perceive color, see icons, or understand positional cues need explicit text to know which field has an error and what the error is. Without text, they cannot correct the problem.

## Common failure patterns

- form fields highlighted in red with no error message text
- a generic "There are errors on this page" banner with no indication of which fields need attention
- error messages displayed visually but not programmatically associated with the field (no `aria-describedby`)
- inline validation that clears the message before the screen reader can announce it

## Remediation guidance

- display a text error message adjacent to or within the erroneous field
- associate the error message with the field using `aria-describedby` or `aria-errormessage`
- set `aria-invalid="true"` on the field when an error is detected
- move focus to the first error or provide a summary with links to each erroneous field

## Related docs

- [Web Rule Repository](/support/docs/accessibility-web-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
