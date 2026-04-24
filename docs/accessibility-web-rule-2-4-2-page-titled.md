---
id: accessibility-web-rule-2-4-2-page-titled
title: Page Titled (2.4.2)
sidebar_label: Page Titled (2.4.2)
description: Rule-level Accessibility guidance for Page Titled (WCAG 2.4.2 Level A).
slug: accessibility-web-rule-2-4-2-page-titled/
---

# Page Titled (2.4.2)

Every web page must have a descriptive title that identifies its topic or purpose.

:::info WCAG Reference
**Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/page-titled.html)
:::

## What this rule checks

The scanner verifies that each page has a non-empty `<title>` element and that the title text meaningfully describes the page content.

## Why it matters

The page title is the first thing a screen reader announces when a page loads. It also appears in browser tabs, bookmarks, and search results. A missing or generic title forces users to explore the page to understand where they are.

## Common failure patterns

- pages with an empty `<title>` element
- all pages sharing the same generic title like "Home" or the site name
- SPA routes that do not update the document title when the view changes
- titles that describe the site but not the specific page (e.g., "Acme Corp" on every page)

## Remediation guidance

- write titles in the format "Page Purpose — Site Name" (e.g., "Order History — Acme Store")
- update `document.title` on route changes in single-page applications
- include key differentiators when pages are similar (e.g., "Edit Profile" vs. "View Profile")
- keep titles concise but specific enough to identify the page without seeing it

## Related docs

- [Web Rule Repository](/support/docs/accessibility-web-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
