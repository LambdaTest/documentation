---
id: accessibility-supported-wcag-browsers
title: Supported WCAG Versions & Browsers
sidebar_label: Supported WCAG Versions & Browsers
description: Reference page for supported WCAG versions, browser scope, and high-level environment considerations in Accessibility Testing.
slug: accessibility-supported-wcag-browsers/
---

# Supported WCAG Versions & Browsers

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
