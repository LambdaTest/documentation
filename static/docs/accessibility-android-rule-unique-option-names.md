# Unique Option Names

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Options within the same selection group — radio buttons, tabs, segments — must have distinct accessible names so screen reader users can tell them apart.

**WCAG Reference**
**Maps to:** WCAG 4.1.2 Name, Role, Value | **Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)

## What this rule checks

The scanner examines selection groups — radio groups, tabs, segmented pickers — and reports options within the same group that share an identical accessible name. Unlike [Duplicate Accessibility Label](/support/docs/accessibility-android-rule-duplicate-accessibility-label/), which compares elements across the whole screen, this rule looks specifically inside a single selection group, where identically named options make the choice itself meaningless.

## Why it matters

A selection group exists to offer a choice. When three radio buttons all announce as "Option", a TalkBack user cannot tell what they are choosing between — position in the group carries the meaning, and position is exactly what a non-visual user does not have.

## Common failure patterns

- radio buttons or tabs labelled from a shared placeholder string
- options whose label was set to the group's title rather than the individual choice
- tab items differentiated only by icon, with identical fallback labels

## Remediation guidance

- give every option within a picker, radio group, or segmented control a distinct accessible name so screen reader users can tell them apart
- don't rely on position or visual styling to differentiate identically labeled options

## Limitations

- Compose `selectableGroup()` sets `CollectionInfo.selectionMode = NONE` by default. The rule only checks groups with `SINGLE` or `MULTIPLE` selection mode, so Compose selectable groups are not detected unless they expose a selection mode.

## Related docs

- [Android Rule Repository](/support/docs/accessibility-android-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
