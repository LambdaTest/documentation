---
id: accessibility-android-rule-button-capitalization-check
title: Button Element Capitalisation Check
sidebar_label: Button Capitalisation Check
description: Rule-level Accessibility guidance for Button Element Capitalisation Check on Android.
slug: accessibility-android-rule-button-capitalization-check/
---

# Button Element Capitalisation Check

Button labels on Android should use consistent, sentence-style capitalization so text-to-speech engines pronounce them correctly.

:::info WCAG Reference
**Maps to:** WCAG 3.1.6 Pronunciation | **Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** AAA | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/pronunciation.html)
:::

## What this rule checks

The scanner reviews button labels — including clickable containers acting as buttons — for irregular capitalization: labels that begin with a lowercase letter, mid-word capitalization (e.g., "SubMit", "LogIn"), or a lowercase letter after a hyphen in hyphenated labels (e.g., "Sign-in" instead of "Sign-In").

## Why it matters

Screen readers use capitalization as a pronunciation cue. Irregular casing — all-caps fragments, camel case, or mixed-case words — can cause text-to-speech engines to spell out letters, split words unnaturally, or mispronounce the label, making the button's purpose harder to understand when heard rather than read.

## Common failure patterns

- marketing-driven all-caps or camel-case strings ("BUY NOW", "LogIn") baked into the source text
- hyphenated labels with inconsistent casing ("Sign-in", "Check-out")

## Remediation guidance

- use sentence case (e.g., "Save changes") in the underlying string instead of all caps or inconsistent capitalization
- if a stylized all-caps look is desired visually, apply it through styling (`android:textAllCaps`) rather than in the source string, so the underlying accessible text remains normally cased
- check hyphenated labels render as "Sign-In" style, not "Sign-in"

## Related docs

- [Android Rule Repository](/support/docs/accessibility-android-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
