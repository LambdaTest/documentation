---
id: accessibility-web-what-we-cover
title: Web Accessibility Checklist
sidebar_label: Web Checklist
description: Supported WCAG web rules with links to rule pages, plus a manual test checklist for areas that need human review.
keywords:
  - TestMu AI
  - Accessibility
  - Web
  - WCAG
  - Checklist
url: https://www.testmuai.com/support/docs/accessibility-web-what-we-cover/
site_name: TestMu AI
slug: accessibility-web-what-we-cover/
canonical: https://www.testmuai.com/support/docs/accessibility-web-what-we-cover/
---

# Web Accessibility Checklist

Use this page to see **which WCAG-aligned checks the product supports** (with links to rule-level guidance) and a **manual test checklist** for areas that benefit from human review. For deeper remediation after a scan, use the [Web Rule Repository](/support/docs/accessibility-web-rule-repository/).

**Other platforms:** [iOS checklist](/support/docs/accessibility-ios-what-we-cover/) · [Android checklist](/support/docs/accessibility-android-what-we-cover/)

---

## Supported (rules in this product)

Each row links to the rule doc for that check. Configuration may limit which WCAG version or level runs in your project.

| WCAG | Rule | Doc |
|------|------|-----|
| 1.1.1 | Non-text Content | [Rule →](/support/docs/accessibility-web-rule-1-1-1-non-text-content/) |
| 1.3.1 | Info and Relationships | [Rule →](/support/docs/accessibility-web-rule-1-3-1-info-and-relationships/) |
| 1.3.4 | Orientation | [Rule →](/support/docs/accessibility-web-rule-1-3-4-orientation/) |
| 1.4.1 | Use of Color | [Rule →](/support/docs/accessibility-web-rule-1-4-1-use-of-color/) |
| 1.4.2 | Audio Control | [Rule →](/support/docs/accessibility-web-rule-1-4-2-audio-control/) |
| 1.4.3 | Contrast (Minimum) | [Rule →](/support/docs/accessibility-web-rule-1-4-3-contrast-minimum/) |
| 1.4.10 | Reflow | [Rule →](/support/docs/accessibility-web-rule-1-4-10-reflow/) |
| 1.4.11 | Non-text Contrast | [Rule →](/support/docs/accessibility-web-rule-1-4-11-non-text-contrast/) |
| 1.4.12 | Text Spacing | [Rule →](/support/docs/accessibility-web-rule-1-4-12-text-spacing/) |
| 2.1.1 | Keyboard | [Rule →](/support/docs/accessibility-web-rule-2-1-1-keyboard/) |
| 2.1.2 | No Keyboard Trap | [Rule →](/support/docs/accessibility-web-rule-2-1-2-no-keyboard-trap/) |
| 2.1.4 | Character Key Shortcuts | [Rule →](/support/docs/accessibility-web-rule-2-1-4-character-key-shortcuts/) |
| 2.2.1 | Timing Adjustable | [Rule →](/support/docs/accessibility-web-rule-2-2-1-timing-adjustable/) |
| 2.2.2 | Pause, Stop, Hide | [Rule →](/support/docs/accessibility-web-rule-2-2-2-pause-stop-hide/) |
| 2.3.1 | Three Flashes or Below Threshold | [Rule →](/support/docs/accessibility-web-rule-2-3-1-three-flashes/) |
| 2.4.1 | Bypass Blocks | [Rule →](/support/docs/accessibility-web-rule-2-4-1-bypass-blocks/) |
| 2.4.2 | Page Titled | [Rule →](/support/docs/accessibility-web-rule-2-4-2-page-titled/) |
| 2.4.3 | Focus Order | [Rule →](/support/docs/accessibility-web-rule-2-4-3-focus-order/) |
| 2.4.4 | Link Purpose (In Context) | [Rule →](/support/docs/accessibility-web-rule-2-4-4-link-purpose/) |
| 2.4.7 | Focus Visible | [Rule →](/support/docs/accessibility-web-rule-2-4-7-focus-visible/) |
| 2.4.11 | Focus Not Obscured (Minimum) | [Rule →](/support/docs/accessibility-web-rule-2-4-11-focus-not-obscured/) |
| 2.5.1 | Pointer Gestures | [Rule →](/support/docs/accessibility-web-rule-2-5-1-pointer-gestures/) |
| 2.5.2 | Pointer Cancellation | [Rule →](/support/docs/accessibility-web-rule-2-5-2-pointer-cancellation/) |
| 2.5.3 | Label in Name | [Rule →](/support/docs/accessibility-web-rule-2-5-3-label-in-name/) |
| 2.5.4 | Motion Actuation | [Rule →](/support/docs/accessibility-web-rule-2-5-4-motion-actuation/) |
| 2.5.7 | Dragging Movements | [Rule →](/support/docs/accessibility-web-rule-2-5-7-dragging-movements/) |
| 2.5.8 | Target Size (Minimum) | [Rule →](/support/docs/accessibility-web-rule-2-5-8-target-size/) |
| 3.2.1 | On Focus | [Rule →](/support/docs/accessibility-web-rule-3-2-1-on-focus/) |
| 3.2.2 | On Input | [Rule →](/support/docs/accessibility-web-rule-3-2-2-on-input/) |
| 3.2.6 | Consistent Help | [Rule →](/support/docs/accessibility-web-rule-3-2-6-consistent-help/) |
| 3.3.1 | Error Identification | [Rule →](/support/docs/accessibility-web-rule-3-3-1-error-identification/) |
| 3.3.2 | Labels or Instructions | [Rule →](/support/docs/accessibility-web-rule-3-3-2-labels-or-instructions/) |
| 3.3.7 | Redundant Entry | [Rule →](/support/docs/accessibility-web-rule-3-3-7-redundant-entry/) |
| 3.3.8 | Accessible Authentication (Minimum) | [Rule →](/support/docs/accessibility-web-rule-3-3-8-accessible-authentication/) |
| 4.1.1 | Parsing (obsolete in WCAG 2.2) | [Rule →](/support/docs/accessibility-web-rule-4-1-1-parsing/) |
| 4.1.2 | Name, Role, Value | [Rule →](/support/docs/accessibility-web-rule-4-1-2-name-role-value/) |
| 4.1.3 | Status Messages | [Rule →](/support/docs/accessibility-web-rule-4-1-3-status-messages/) |

---

## Manual test checklist

Use this checklist for **quality beyond automated rules**: keyboard journeys, media, language, and judgment-heavy success criteria. Pair it with [WCAG 2.2 Understanding](https://www.w3.org/WAI/WCAG22/Understanding/) and your own test plan.

| Area | Manual verification focus |
|------|---------------------------|
| **1.2.x Time-based media** | Captions, audio description, transcripts, sign language — exercise with real media workflows and tooling. |
| **1.3.2 Meaningful sequence · 1.3.3 Sensory characteristics · 1.3.5 Identify input purpose** | Reading order, instructions, autofill semantics — design and assisted-tech review. |
| **1.4.4 Resize text · 1.4.5 Images of text · 1.4.13 Content on hover or focus** | Zoom, images-of-text, hover layers — interactive and visual testing. |
| **Full keyboard operability & real focus behavior** | Automated rules support you; still walk critical paths with keyboard only and assistive technologies. |
| **2.4.5–2.4.6, 2.4.8–2.4.10** | Multiple ways, headings/labels (extended), location — document expectations and verify in session. |
| **2.2.3–2.2.6 · 2.3.2–2.3.3** | Extended timing and motion — validate against your UX and policy. |
| **3.1.x Language of parts, unusual words, reading level** | Localization and plain language — content and engineering review. |
| **3.3.3–3.3.6 Error suggestion / prevention** | Error helpfulness and legal safeguards — review with design and compliance. |
| **AAA success criteria** | Optional stretch goals — plan explicitly if AAA is in scope; default automation targets A/AA-style coverage. |

## Related docs

- [Web Rule Repository](/support/docs/accessibility-web-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
