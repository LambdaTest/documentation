# Overlapping Interactive Elements

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Interactive elements should not occupy the same screen space, or which control receives a tap becomes an implementation detail invisible to the user.

**WCAG Reference**
**Maps to:** WCAG 2.5.5 Target Size (Enhanced) | **Applies to:** WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.1 | **Level:** AAA | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html)

## What this rule checks

This is a screen-level rule. The scanner collects every interactive element that is visible, on-screen, enabled, and reachable by touch, then compares each pair. A pair is treated as overlapping when they share a significant portion of the smaller element's area. Overlapping controls are joined into clusters, so a chain of mutually overlapping controls is reported as one group rather than as many pairs.

Three exclusions prevent false positives: parent-child pairs are skipped (a control nested inside another necessarily overlaps it); cross-layer pairs are skipped (elements inside a fixed overlay like a navigation bar, tab bar, or toolbar are never compared against content elements, since the content scrolls beneath the overlay); and system scroll indicators are ignored.

## Why it matters

When two tappable elements occupy the same pixels, which one receives a tap is determined by view hierarchy order, an implementation detail invisible to the user. A sighted user with a steady hand may never notice, because they aim at whichever control they want and usually get it. A user relying on VoiceOver's touch exploration, or with limited motor precision, gets whichever control the hierarchy happens to favour. The interface is not merely hard to use; it is unpredictable from the user's point of view.

## Common failure patterns

- an absolutely positioned "close" button laid over a card that is itself tappable
- custom transitions that leave two interactive layers on screen simultaneously
- hit areas expanded with negative insets until they collide with a neighbour
- overlapping frames introduced by dynamic text sizing pushing content into adjacent controls

## Remediation guidance

- adjust layout so interactive frames do not intersect
- if one control genuinely sits above another (a badge on a button), make the pair a single accessibility element with one clear action, or set `isAccessibilityElement = false` on the passive one
- where a control is intentionally layered above scrolling content, confirm it lives inside a proper overlay container (navigation bar, tab bar, toolbar), which the rule already exempts

## Related docs

- [Touch Target Sizing](/support/docs/accessibility-ios-rule-touch-target-sizing/)
- [iOS Rule Repository](/support/docs/accessibility-ios-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
