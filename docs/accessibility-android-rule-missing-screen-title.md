---
id: accessibility-android-rule-missing-screen-title
title: Missing Screen Title
sidebar_label: Missing Screen Title
description: Rule-level Accessibility guidance for Missing Screen Title on Android.
slug: accessibility-android-rule-missing-screen-title/
---

# Missing Screen Title

Each screen or activity in an Android app must have a descriptive title so users can identify where they are in the app.

:::info WCAG Reference
**Maps to:** WCAG 2.4.2 Page Titled | **Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/page-titled.html)
:::

## What this rule checks

The scanner verifies that each `Activity` or navigable screen exposes a title through the `android:label` attribute, toolbar title, or accessibility pane title.

## Why it matters

TalkBack announces the screen title when a user navigates to a new screen. Without a title, users cannot tell which screen they are on, making navigation through an app disorienting and slow.

## Common failure patterns

- activities with no `android:label` in the manifest
- fragments used as top-level destinations without setting an accessibility pane title
- dynamic screen titles that are set programmatically but omit the TalkBack announcement
- toolbar titles that are set to empty strings or the app name on every screen

## Remediation guidance

- set `android:label` on every `<activity>` in `AndroidManifest.xml`
- for fragment-based navigation, call `ViewCompat.setAccessibilityPaneTitle(view, "Screen Name")`
- ensure toolbar titles reflect the specific screen, not just the app name
- test by navigating between screens with TalkBack to confirm announcements

## Related docs

- [Android Rule Repository](/support/docs/accessibility-android-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
