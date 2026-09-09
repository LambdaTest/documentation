# Unique Option Names

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Options within the same selection group must have distinct accessible names so screen reader users can tell them apart.

**WCAG Reference**
**Maps to:** WCAG 4.1.2 Name, Role, Value | **Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)

## What this rule checks

The scanner checks children of recognized option group containers for duplicate accessible names. The recognized container types are `XCUIElementTypeSegmentedControl`, `XCUIElementTypeTabBar` / `XCUIElementTypeTabGroup`, `XCUIElementTypeRadioGroup`, `XCUIElementTypePicker`, and `XCUIElementTypeMenu` / `XCUIElementTypeMenuBar`.

Within each container, the rule collects visible, interactive children (buttons, tabs, radio buttons, menu items, picker wheels) and checks for children with the same `accessibilityLabel`. Custom views with the `.adjustable` trait are also treated as option-like children. Duplicate labels are reported with a `groupId` that clusters the matching elements together.

Unlike [Duplicate Accessibility Label](/support/docs/accessibility-ios-rule-duplicate-accessibility-label/), which checks the entire screen, this rule looks specifically inside a single selection group, where identically named options make the choice itself meaningless.

## Why it matters

A selection group exists to offer a choice. When three radio buttons all announce as "Option", a screen reader user cannot tell what they are choosing between; position in the group carries the meaning, and position is exactly what a non-visual user does not have.

## Common failure patterns

- segmented controls whose segments were labelled from a shared placeholder string
- radio groups built from custom views where each option's label was set to the group's title
- tab items differentiated only by icon, with identical fallback labels

## Remediation guidance

- give every option within a picker, radio group, or segmented control a distinct accessible name so screen reader users can tell them apart
- don't rely on position or visual styling to differentiate identically labeled options

## Related docs

- [Duplicate Accessibility Label](/support/docs/accessibility-ios-rule-duplicate-accessibility-label/)
- [iOS Rule Repository](/support/docs/accessibility-ios-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
