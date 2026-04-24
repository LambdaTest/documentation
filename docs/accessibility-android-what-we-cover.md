---
id: accessibility-android-what-we-cover
title: Android Accessibility Checklist
sidebar_label: Android Checklist
description: Supported Android accessibility rules with links to rule pages, plus a manual test checklist for human-led review.
keywords:
  - TestMu AI
  - Accessibility
  - Android
  - WCAG
  - Checklist
url: https://www.testmuai.com/support/docs/accessibility-android-what-we-cover/
site_name: TestMu AI
slug: accessibility-android-what-we-cover/
canonical: https://www.testmuai.com/support/docs/accessibility-android-what-we-cover/
---

# Android Accessibility Checklist

Use this page to see **which rules App Scanner / automation can report** (with links to rule-level guidance) and a **manual test checklist** for areas best validated by people. For remediation detail, use the [Android Rule Repository](/support/docs/accessibility-android-rule-repository/).

**Other platforms:** [Web checklist](/support/docs/accessibility-web-what-we-cover/) · [iOS checklist](/support/docs/accessibility-ios-what-we-cover/)

---

## Supported (rules in this product)

| Rule | WCAG (maps) | Doc |
|------|-------------|-----|
| Interactive Role Undefined | 4.1.2 | [Rule →](/support/docs/accessibility-android-rule-interactive-role-undefined/) |
| Missing Image Alt | 1.1.1 | [Rule →](/support/docs/accessibility-android-rule-missing-image-alt/) |
| Missing View Accessibility | 4.1.2 | [Rule →](/support/docs/accessibility-android-rule-missing-view-accessibility/) |
| Unlabeled Checkbox Element | 4.1.2 | [Rule →](/support/docs/accessibility-android-rule-unlabeled-checkbox-element/) |
| Insufficient Color Ratio | 1.4.3 | [Rule →](/support/docs/accessibility-android-rule-insufficient-color-ratio/) |
| Missing Field Label | 3.3.2 | [Rule →](/support/docs/accessibility-android-rule-missing-field-label/) |
| Non-accessible Interaction | 4.1.2 | [Rule →](/support/docs/accessibility-android-rule-non-accessible-interaction/) |
| Missing Screen Title | 2.4.2 | [Rule →](/support/docs/accessibility-android-rule-missing-screen-title/) |
| Unlabeled Toggle Control | 4.1.2 | [Rule →](/support/docs/accessibility-android-rule-unlabeled-toggle-control/) |
| Mismatched Label Text | 2.5.3 | [Rule →](/support/docs/accessibility-android-rule-mismatched-label-text/) |
| Missing Input Value | 4.1.2 | [Rule →](/support/docs/accessibility-android-rule-missing-input-value/) |
| Inaccessible Text Focus | 4.1.2 | [Rule →](/support/docs/accessibility-android-rule-inaccessible-text-focus/) |
| Misplaced Field Label | 3.3.2 | [Rule →](/support/docs/accessibility-android-rule-misplaced-field-label/) |
| Nested Control Issues | 4.1.2 | [Rule →](/support/docs/accessibility-android-rule-nested-control-issues/) |
| Unnamed Nested Element | 4.1.2 | [Rule →](/support/docs/accessibility-android-rule-unnamed-nested-element/) |
| Fixed Orientation Lock | 1.3.4 | [Rule →](/support/docs/accessibility-android-rule-fixed-orientation-lock/) |
| Undersized Touch Target | 2.5.5 | [Rule →](/support/docs/accessibility-android-rule-undersized-touch-target/) |
| Insufficient Target Spacing | 2.5.5 | [Rule →](/support/docs/accessibility-android-rule-insufficient-target-spacing/) |

---

## Manual test checklist

Reserve time for **TalkBack**, **Switch Access**, **font scaling**, and **real devices** even when automated rules pass. Use [Understanding WCAG 2.2](https://www.w3.org/WAI/WCAG22/Understanding/) and [Material accessibility](https://m3.material.io/foundations/accessibility/overview) with this checklist.

| Area | Manual verification focus |
|------|---------------------------|
| **1.2.x Time-based media** | In-app media — captions, descriptions — validate with representative assets. |
| **1.3.2–1.3.3 · 1.4.x beyond contrast** | Sequence, sensory-only instructions, resize/reflow/hover content — interactive and visual review. |
| **2.x keyboard / focus / timing (full)** | Full flows with TalkBack; session and motion behavior — validate beyond rule snapshots. |
| **3.x language, errors, help** | Error suggestions, legal safeguards — product and compliance review. |
| **AAA criteria** | Optional stretch goals — plan when AAA is explicitly in scope. |

## Related docs

- [Android Rule Repository](/support/docs/accessibility-android-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
