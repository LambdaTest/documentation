---
id: accessibility-ios-what-we-cover
title: iOS Accessibility Checklist
sidebar_label: iOS Checklist
description: Supported iOS accessibility rules with links to rule pages, plus a manual test checklist for human-led review.
keywords:
  - TestMu AI
  - Accessibility
  - iOS
  - WCAG
  - Checklist
url: https://www.testmuai.com/support/docs/accessibility-ios-what-we-cover/
site_name: TestMu AI
slug: accessibility-ios-what-we-cover/
canonical: https://www.testmuai.com/support/docs/accessibility-ios-what-we-cover/
---

# iOS Accessibility Checklist

Use this page to see **which rules App Scanner / automation can report** (with links to rule-level guidance) and a **manual test checklist** for areas best validated by people. For remediation detail, use the [iOS Rule Repository](/support/docs/accessibility-ios-rule-repository/).

**Other platforms:** [Web checklist](/support/docs/accessibility-web-what-we-cover/) · [Android checklist](/support/docs/accessibility-android-what-we-cover/)

---

## Supported (rules in this product)

| Rule | WCAG (maps) | Doc |
|------|-------------|-----|
| Missing Accessibility Labels | 4.1.2 | [Rule →](/support/docs/accessibility-ios-rule-missing-accessibility-labels/) |
| Color Contrast Issues | 1.4.3 | [Rule →](/support/docs/accessibility-ios-rule-color-contrast-issues/) |
| Touch Target Sizing | 2.5.5 | [Rule →](/support/docs/accessibility-ios-rule-touch-target-sizing/) |
| Assistive Technology Access | 4.1.2 | [Rule →](/support/docs/accessibility-ios-rule-assistive-technology-access/) |
| Text Truncation Issues | 1.4.4 | [Rule →](/support/docs/accessibility-ios-rule-text-truncation-issues/) |
| Accessibility Role Definition | 4.1.2 | [Rule →](/support/docs/accessibility-ios-rule-accessibility-role-definition/) |
| Dynamic Type Support | 1.4.4 | [Rule →](/support/docs/accessibility-ios-rule-dynamic-type-support/) |
| Accessibility Label Not Punctuated | 3.3.2 | [Rule →](/support/docs/accessibility-ios-rule-accessibility-label-not-punctuated/) |
| Missing Image Element Label | 1.1.1 | [Rule →](/support/docs/accessibility-ios-rule-missing-image-element-label/) |
| Missing Button Element Label | 1.3.1 | [Rule →](/support/docs/accessibility-ios-rule-missing-button-element-label/) |
| Button Element Capitalisation Check | 3.1.6 | [Rule →](/support/docs/accessibility-ios-rule-button-element-capitalisation-check/) |
| Missing Checkbox Element Label | 1.3.1 | [Rule →](/support/docs/accessibility-ios-rule-missing-checkbox-element-label/) |
| Missing Editable Element Label | 1.3.1 | [Rule →](/support/docs/accessibility-ios-rule-missing-editable-element-label/) |
| Missing Switch Element Label | 1.3.1 | [Rule →](/support/docs/accessibility-ios-rule-missing-switch-element-label/) |
| Duplicate Accessibility Label | 4.1.2 | [Rule →](/support/docs/accessibility-ios-rule-duplicate-accessibility-label/) |

---

## Manual test checklist

Plan extra time for **VoiceOver**, **Switch Control**, **device rotation**, and real-world flows (media, authentication, motion) even when automation is green. Use [Understanding WCAG 2.2](https://www.w3.org/WAI/WCAG22/Understanding/) and Apple’s Human Interface Guidelines alongside this list.

| Area | Manual verification focus |
|------|---------------------------|
| **1.2.x Time-based media** | In-app video/audio — captions, descriptions, live captions — validate with real content. |
| **1.3.2–1.3.5 structure & input purpose** | Meaningful sequence, sensory-only instructions, orientation lock justification, `UITextContentType` / WebView `lang` — design and assistive-tech pass. |
| **2.x keyboard / focus / timing (full)** | Complete tasks with VoiceOver and hardware keyboard; session timeouts and motion — exercise beyond rule snapshots. |
| **3.x language, errors, help** | Error suggestion quality, legal safeguards, help consistency — product and compliance review. |
| **AAA criteria** | Optional stretch goals — schedule only when AAA is explicitly in scope. |

## Related docs

- [iOS Rule Repository](/support/docs/accessibility-ios-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
