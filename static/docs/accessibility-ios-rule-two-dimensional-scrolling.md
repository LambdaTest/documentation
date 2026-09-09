# Two-Dimensional Scrolling Required

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Content should be readable without scrolling in two directions, so users who zoom or enlarge text don't have to pan horizontally on every line.

**WCAG Reference**
**Maps to:** WCAG 1.4.10 Reflow | **Applies to:** WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.1 | **Level:** AA | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html)

## What this rule checks

This is a screen-level rule detecting content that requires scrolling in two directions to be read. It looks for:

1. **Scroll views** — a scroll view that scrolls horizontally while nested inside another scrollable area, or that is wider than the screen. A text view in this state is reported as a warning rather than a violation.
2. **Tables and collection views** — a cell whose content scrolls horizontally inside a vertically scrolling table, or a collection view that scrolls horizontally at any depth.
3. **Web views** — a web view that scrolls horizontally.
4. **Element overflow** — any element whose right edge extends past the screen, attributed to the scrollable area that contains it; if there is none, the overflowing element itself is flagged.

Findings are deduplicated: once an element or one of its ancestors has been flagged, its descendants are not reported again. Legitimate horizontal scrolling is exempted through a set of recognized patterns: paging controls with a page indicator, step indicators, chip and filter bars, date pickers, image carousels, data tables, maps, and any element identified as a map, diagram, carousel, gallery, floor plan, or canvas.

## Why it matters

WCAG 1.4.10 requires content to be presentable without scrolling in two dimensions, because a user who has enlarged text or zoomed in must otherwise pan horizontally to read every single line. Reading a paragraph becomes a sequence of scroll-right, read, scroll-left-all-the-way, scroll-down operations, for each line. This is the difference between reading a screen and giving up on it. The criterion exempts content that genuinely requires two dimensions, such as maps and data tables, which is what the exemption patterns above encode.

## Common failure patterns

- a fixed-width layout inside a vertical scroll view that overflows once the text is scaled up
- horizontally scrolling content nested inside a vertically scrolling parent, where neither direction can be avoided
- web content rendered at a fixed viewport width
- cells whose content overflows the screen edge at larger Dynamic Type sizes

## Remediation guidance

- let text wrap rather than extend — use flexible widths and allow the container to grow vertically
- where content must be wide (a data table, a chart), keep it in a container that scrolls horizontally on its own while the surrounding page scrolls only vertically, and confirm the container matches one of the exemption patterns, or is genuinely exempt under 1.4.10
- test at the largest Dynamic Type size and confirm no element's right edge crosses the screen boundary
- avoid nesting a horizontal scroll view inside a vertical one unless the inner view is a carousel or paging control

## Related docs

- [iOS Rule Repository](/support/docs/accessibility-ios-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
