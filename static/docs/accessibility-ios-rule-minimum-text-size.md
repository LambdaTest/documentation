# Minimum Text Size

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Text should render at or above a readable minimum size so it isn't difficult to read for users with low vision.

**WCAG Reference**
**Maps to:** Best Practice (Readable Text) — no specific WCAG success criterion

## What this rule checks

The scanner estimates the font size of text elements from their accessibility frame height using the San Francisco font's line-height ratio:

```
estimatedFontSize = frameHeight / 1.1777
```

Where 1.1777 is the constant ratio of ascender (0.9668) minus descender (−0.2109) for the San Francisco typeface. A violation is reported when the estimated font size falls below **11pt**, the Apple Human Interface Guidelines minimum.

Two guards prevent false positives from unreliable frame heights: elements with frame height below 4pt are skipped (collapsed/clipped SwiftUI composite controls), and elements whose frame touches the top or bottom screen edge (within 2pt) are skipped (partially scrolled-off elements with truncated frames).

## Why it matters

Very small text is hard to read for everyone and unreadable for users with low vision, especially when it also fails to scale with the user's font preference. Minimum sizes exist because below them, no amount of squinting recovers the content.

## Common failure patterns

- captions, timestamps, and legal text set well below the recommended minimum
- fixed-size fonts that ignore the user's text-size preference
- dense information UIs shrinking text to fit more on screen

## Remediation guidance

- increase any non-scalable text below 11pt to at least the recommended minimum
- prefer Dynamic Type styles so text scales with the user's font preference (see [Dynamic Type Support](/support/docs/accessibility-ios-rule-dynamic-type-support/))

## Related docs

- [Dynamic Type Support](/support/docs/accessibility-ios-rule-dynamic-type-support/)
- [iOS Rule Repository](/support/docs/accessibility-ios-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
