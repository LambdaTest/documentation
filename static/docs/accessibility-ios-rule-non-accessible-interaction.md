# Non-accessible Interaction

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Every interaction available to touch users must also be reachable through VoiceOver, Switch Control, or Voice Control.

**WCAG Reference**
**Maps to:** WCAG 4.1.2 Name, Role, Value | **Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)

## What this rule checks

The scanner flags interactive elements that can't be accessed or activated via assistive technology. The action exists for touch users but is unreachable through VoiceOver, Switch Control, or Voice Control.

## Why it matters

An interaction that assistive technology cannot reach is a feature that does not exist for those users. Unlike a mislabelled control, which is confusing but present, an inaccessible interaction is silently absent: nothing announces it, nothing can focus it, and nothing can activate it.

## Common failure patterns

- gesture-only interactions (swipe, long-press, drag) with no accessible equivalent action
- a tappable view hidden from the accessibility tree while remaining visually interactive
- custom controls that never became accessibility elements

## Remediation guidance

- make sure any action (a custom button, link, or gesture) can be reached by assistive technology and has a clear description
- use descriptive labels like "Play", "Delete", rather than generic labels (e.g., "Button1")

## Related docs

- [iOS Rule Repository](/support/docs/accessibility-ios-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
