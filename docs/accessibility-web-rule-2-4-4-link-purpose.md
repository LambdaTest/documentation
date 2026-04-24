---
id: accessibility-web-rule-2-4-4-link-purpose
title: Link Purpose in Context (2.4.4)
sidebar_label: Link Purpose (2.4.4)
description: Rule-level Accessibility guidance for Link Purpose in Context (WCAG 2.4.4 Level A).
slug: accessibility-web-rule-2-4-4-link-purpose/
---

# Link Purpose in Context (2.4.4)

The purpose of each link must be determinable from the link text alone or from the link text combined with its programmatically determined context.

:::info WCAG Reference
**Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html)
:::

## What this rule checks

The scanner flags links whose text is generic (e.g., "click here", "read more", "learn more") without surrounding context that clarifies the destination or action.

## Why it matters

Screen-reader users often navigate by listing all links on a page. If every link says "Read more," the list is useless. Clear link text lets users decide which link to follow without reading the surrounding paragraph.

## Common failure patterns

- repeated "Click here" or "Read more" links across a page
- links that use a URL as the visible link text
- icon-only links (e.g., a pencil icon) with no accessible name
- links whose purpose changes based on visual position but whose text is identical

## Remediation guidance

- write link text that describes the destination or action (e.g., "View order #1234" instead of "Click here")
- use `aria-label` or `aria-labelledby` to provide context when the visible text must remain short
- add `aria-label` to icon-only links that describes the action
- when multiple links share text, add visually hidden context (e.g., "Read more about pricing")

## Related docs

- [Web Rule Repository](/support/docs/accessibility-web-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
