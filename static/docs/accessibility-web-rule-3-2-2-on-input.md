# On Input (3.2.2)

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/llms.txt).

Changing the setting of a form control or UI component must not automatically cause an unexpected change of context unless the user has been informed beforehand.

**WCAG Reference**
**Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/on-input.html)

## What this rule checks

The scanner flags form controls that trigger navigation, submission, or DOM restructuring on value change without prior notice to the user.

## Why it matters

Users expect to review and confirm their choices before committing. Automatic context changes on input can disorient screen-reader users and cause data loss for users who accidentally select the wrong option.

## Common failure patterns

- radio buttons that submit a form or navigate to a new page on selection
- checkboxes that reload the page when toggled
- text fields that trigger search navigation on every keystroke without warning
- dropdown menus that navigate immediately on selection without a submit action

## Remediation guidance

- separate the selection action from the submission action (add a "Submit" or "Apply" button)
- if auto-submission is intentional, inform the user in advance (e.g., "Selecting a value will update the page")
- use ARIA live regions to announce dynamic content changes without a full context switch
- test all form controls by changing values and confirming no unexpected navigation occurs

## Related docs

- [Web Rule Repository](/support/docs/accessibility-web-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
