# Interactive Role Undefined

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Custom, tappable views must expose an accessibility role so VoiceOver can announce what they are and how to interact with them.

**WCAG Reference**
**Maps to:** WCAG 4.1.2 Name, Role, Value | **Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)

## What this rule checks

The scanner finds custom views that behave like controls but expose no role to assistive technology. An element is flagged only when all of the following hold:

- it is visible on screen with a real, non-zero size
- it is tappable and enabled
- it is **not a native control type** — buttons, switches, links, text fields, sliders, cells, images, static text, and many other native types carry implicit roles and are excluded
- it is **not a container or decorative type** — groups, windows, scroll views, tables, collection views, navigation bars, tab bars, toolbars, keyboards, progress indicators, web views, maps, and pickers are excluded
- it exposes **no accessibility role at all**

In practice this narrows to a custom view that has been made tappable without being given a role.

## Why it matters

VoiceOver users depend on the announced role ("button", "link", "adjustable") to know an element is actionable and what kind of interaction to expect. A custom card view with a tap gesture and a label announces as just its text. A checkout tile labelled "Order summary" is spoken as "Order summary", identical to a piece of body copy. The user has no reason to attempt activation, so a primary action becomes effectively invisible. Switch Control and Voice Control, which enumerate actionable elements by role, will not surface it at all.

## Common failure patterns

- a tap gesture attached directly to a plain view or container instead of using a button
- custom controls composed of a view plus a label and an image, with no semantic control inside and no role set
- SwiftUI `.onTapGesture { }` on a plain `VStack` or `HStack` without `.accessibilityAddTraits(.isButton)`

## Remediation guidance

- add the role so it is announced: `view.accessibilityTraits = .button` (UIKit), or `.accessibilityAddTraits(.isButton)` (SwiftUI)
- prefer a real control (a `UIButton` or SwiftUI `Button`) over a tappable container — the control brings the role, the focus behaviour, and the activation semantics for free
- ensure the element is also an accessibility element (`isAccessibilityElement = true`) and carries a descriptive label
- confirm with VoiceOver that the announcement ends with the role

## Related docs

- [iOS Rule Repository](/support/docs/accessibility-ios-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
