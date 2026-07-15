# Supported WCAG Versions & Browsers

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Use this page as a reference for supported WCAG version selection and browser-related considerations across Accessibility workflows.

## Supported WCAG coverage

Current Accessibility docs reference support for these WCAG targets:

- WCAG 2.0 A
- WCAG 2.0 AA
- WCAG 2.1 A
- WCAG 2.1 AA
- WCAG 2.1 AAA
- WCAG 2.2 A
- WCAG 2.2 AA

## Browser considerations

Accessibility web workflows are optimized for Chromium-based browsers. Using current supported browser versions improves compatibility for DevTools and automation-related scans.

## Important caveat

For Playwright Accessibility Automation, Chrome should be used instead of `pw-chromium` because the required extension does not load reliably in bundled Chromium sessions.

## Related docs

- [Accessibility Automation (Overview)](/support/docs/accessibility-automation/)
- [Accessibility FAQ](/support/docs/accessibility-faq/)
