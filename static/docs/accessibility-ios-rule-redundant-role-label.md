# Redundant Role Keyword in Accessibility Label

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Accessible labels shouldn't repeat a control's role — words like "button" or "link" — since VoiceOver already announces the role separately.

**WCAG Reference**
**Maps to:** WCAG 4.1.2 Name, Role, Value | **Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)

## What this rule checks

The scanner examines whether a visible accessibility element's label embeds the control's own role. The role words checked are drawn from the control's actual type and role, so a role word is flagged only when it matches the real control — "Play button" on a piece of static text is not reported by this rule.

| Control | Flagged keywords |
|---|---|
| Button, Toolbar button, Menu button, Pop-up button | `button` |
| Switch, Toggle | `switch` |
| Link | `link` |
| Image, Icon | `image` |
| Text field, Secure text field, Text view | `text field`, `textfield` |
| Search field | `search field`, `searchfield` |
| Slider | `adjustable` |
| Stepper | `stepper` |

Matching is whole-word and case-insensitive, with boundary checks, so "Unbutton" and "Onboarding" do not match. Deliberately not flagged: `slider`, `toggle`, `icon`, `tab`, `picker`, `menu`, `progress`, since VoiceOver does not announce those words as roles on iOS.

## Why it matters

VoiceOver appends the role to every announcement. A button labelled "Submit button" is announced as "Submit button, button", so the user hears the role twice, on every focus, forever. Across a screen this doubles the verbosity of navigation without adding any information, and it makes labels harder to distinguish from one another because the discriminating word is buried behind boilerplate.

## Common failure patterns

- labels that name the widget rather than the action: "Settings icon", "Search button"
- labels written by copying the design-system component name
- headers labelled "Section heading: Orders" where the header role is already set

## Remediation guidance

1. **Identify the role noun** in the label: "button", "link", "image", "heading".
2. **Remove it:** "Settings icon" becomes "Settings".
3. **Assign the role programmatically** instead (`accessibilityTraits = .button`, or `.accessibilityAddTraits(.isButton)` in SwiftUI) so VoiceOver supplies it.

## Related docs

- [iOS Rule Repository](/support/docs/accessibility-ios-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
