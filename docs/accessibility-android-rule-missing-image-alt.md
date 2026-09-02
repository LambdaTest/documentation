---
id: accessibility-android-rule-missing-image-alt
title: Missing Image Alt
sidebar_label: Missing Image Alt
description: Rule-level Accessibility guidance for Missing Image Alt.
slug: accessibility-android-rule-missing-image-alt/
---

# Missing Image Alt

Meaningful images in Android experiences need an accessible description.

:::info WCAG Reference
**Maps to:** WCAG 1.1.1 Non-text Content | **Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html)
:::

## What this rule checks

This rule checks whether meaningful Android images expose a useful accessibility description for TalkBack and related assistive technologies.

## Why it matters

If meaningful imagery is silent to assistive technology, users can miss content, state, or action context that is visible on screen.

## Common failure patterns

- product or profile images with no `contentDescription`
- icon buttons with visual meaning but no accessible label
- decorative images announced unnecessarily

## Remediation guidance

- add a clear `contentDescription` to meaningful images
- use an empty description for decorative content when appropriate
- verify that image-based controls expose both purpose and action

## Related docs

- [Android Rule Repository](/support/docs/accessibility-android-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
