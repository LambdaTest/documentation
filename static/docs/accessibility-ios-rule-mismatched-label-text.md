# Mismatched Label Text

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

The accessible name of a control must contain the text visibly rendered on it, so Voice Control users can activate it by speaking what they see.

**WCAG Reference**
**Maps to:** WCAG 2.5.3 Label in Name | **Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html)

## What this rule checks

For interactive elements, the scanner compares the text visibly rendered on the control against its accessibility label. The visible text is read from the screen using on-device text recognition and attributed to the element that contains it. Both strings are normalized before comparison: lowercased and reduced to letters, numbers, and single spaces. A violation is reported when the visible text is **not contained within** the label. The rule skips elements that are non-interactive, disabled, not visible, carry no recognizable text, or have an empty label. *(Beta rule)*

## Why it matters

WCAG 2.5.3 exists for speech input. Voice Control users say what they see: a button reading "Send" is activated by saying "Tap Send". If that button's accessibility label was set to "Submit message", the spoken command matches nothing, and the control cannot be operated by voice at all. The label is not merely suboptimal — it silently removes the control from an entire input modality. The visible text is the contract with the speaking user, and the accessible name must honour it.

## Common failure patterns

- a button reading "Sign in" whose label was set to "Log in" or "Authenticate"
- localized visible text with an English accessibility label left over from development
- an accessible name written to describe the outcome ("Proceed to payment") on a button that visibly reads "Next"

## Remediation guidance

- make the accessible name contain the visible text, ideally beginning with it: a button reading "Next" may be labelled "Next, proceed to payment", but not "Proceed to payment"
- where the visible text is sufficient, simply do not override the label — UIKit derives it from the title
- when adding context, append it rather than replacing the visible string

## Related docs

- [Misplaced Field Label](/support/docs/accessibility-ios-rule-misplaced-field-label/)
- [iOS Rule Repository](/support/docs/accessibility-ios-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
