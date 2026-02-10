---
id: accessibility-web-what-we-do-not-cover
title: Web – What We Do Not Cover
sidebar_label: Web – What We Do Not Cover
description: Checklist of WCAG criteria that require manual testing on web for full coverage with TestMu AI Accessibility.
keywords:
  - TestMu AI
  - Accessibility
  - Web
  - WCAG
  - Manual testing
  - Checklist
url: https://www.testmuai.com/support/docs/accessibility-web-what-we-do-not-cover/
site_name: LambdaTest
slug: accessibility-web-what-we-do-not-cover/
canonical: https://www.testmuai.com/support/docs/accessibility-web-what-we-do-not-cover/
---

# TestMU AI / LambdaTest Accessibility Web – What We Do NOT Cover

**Note:** This document describes TestMU AI / LambdaTest Accessibility coverage for web. For platform or accessibility support, contact TestMU/LambdaTest support.

---

## 1. Purpose and scope

This document describes **what TestMU AI / LambdaTest Accessibility Web does NOT cover**: the **manual tests** (and assistive-technology testing) that **you need to perform** for **full WCAG rules coverage and compliance**. TestMU Accessibility automated scanning on web typically covers a subset of accessibility issues; the rest require human judgment, keyboard/screen-reader testing, and media/layout checks.

- **Full rules reference:** Section 2 lists **100% of WCAG 2.0, 2.1, and 2.2** success criteria (Level A, AA, and AAA) for web.
- **What we do not cover:** Section 3 is a **checklist** of criteria that require **manual testing** (or assistive-technology testing) because TestMU Accessibility does not support them or only partially supports them.
- **How to do:** For each area, **how to test manually** (or with assistive technology) so you can achieve full coverage and compliance.

**Why these are manual:** The companion **"What we cover"** document explains *how* coverage works (syntactic vs semantic, AI-enhanced rules, and what "partial" means) and *why* some criteria fall into manual-only categories (dynamic behavior, human judgment, complex visual rendering). Use that doc for the reasoning; use this doc for the manual test procedures.

---

## 2. Full WCAG rules reference (100% – web)

Below is a **complete** list of all success criteria for **WCAG 2.0, 2.1, and 2.2** at Levels **A, AA, and AAA**. Use this as the master reference for full web accessibility coverage.

### 2.1 Principle 1 – Perceivable

| ID | Success criterion | Level | WCAG |
|----|--------------------|-------|------|
| 1.1.1 | Non-text Content | A | 2.0 |
| 1.2.1 | Audio-only and Video-only (Prerecorded) | A | 2.0 |
| 1.2.2 | Captions (Prerecorded) | A | 2.0 |
| 1.2.3 | Audio Description or Media Alternative (Prerecorded) | A | 2.0 |
| 1.2.4 | Captions (Live) | AA | 2.0 |
| 1.2.5 | Audio Description (Prerecorded) | AA | 2.0 |
| 1.2.6 | Sign Language (Prerecorded) | AAA | 2.0 |
| 1.2.7 | Extended Audio Description (Prerecorded) | AAA | 2.0 |
| 1.2.8 | Media Alternative (Prerecorded) | AAA | 2.0 |
| 1.2.9 | Audio-only (Live) | AAA | 2.0 |
| 1.3.1 | Info and Relationships | A | 2.0 |
| 1.3.2 | Meaningful Sequence | A | 2.0 |
| 1.3.3 | Sensory Characteristics | A | 2.0 |
| 1.3.4 | Orientation | AA | 2.1 |
| 1.3.5 | Identify Input Purpose | AA | 2.1 |
| 1.3.6 | Identify Purpose | AAA | 2.1 |
| 1.4.1 | Use of Color | A | 2.0 |
| 1.4.2 | Audio Control | A | 2.0 |
| 1.4.3 | Contrast (Minimum) | AA | 2.0 |
| 1.4.4 | Resize Text | AA | 2.0 |
| 1.4.5 | Images of Text | AA | 2.0 |
| 1.4.6 | Contrast (Enhanced) | AAA | 2.0 |
| 1.4.7 | Low or No Background Audio | AAA | 2.0 |
| 1.4.8 | Visual Presentation | AAA | 2.0 |
| 1.4.9 | Images of Text (No Exception) | AAA | 2.0 |
| 1.4.10 | Reflow | AA | 2.1 |
| 1.4.11 | Non-text Contrast | AA | 2.1 |
| 1.4.12 | Text Spacing | AA | 2.1 |
| 1.4.13 | Content on Hover or Focus | AA | 2.1 |

### 2.2 Principle 2 – Operable

| ID | Success criterion | Level | WCAG |
|----|--------------------|-------|------|
| 2.1.1 | Keyboard | A | 2.0 |
| 2.1.2 | No Keyboard Trap | A | 2.0 |
| 2.1.3 | Keyboard (No Exception) | AAA | 2.0 |
| 2.1.4 | Character Key Shortcuts | A | 2.1 |
| 2.2.1 | Timing Adjustable | A | 2.0 |
| 2.2.2 | Pause, Stop, Hide | A | 2.0 |
| 2.2.3 | No Timing | AAA | 2.0 |
| 2.2.4 | Interruptions | AAA | 2.0 |
| 2.2.5 | Re-authenticating | AAA | 2.0 |
| 2.2.6 | Timeouts | AAA | 2.1 |
| 2.3.1 | Three Flashes or Below Threshold | A | 2.0 |
| 2.3.2 | Three Flashes | AAA | 2.0 |
| 2.3.3 | Animation from Interactions | AAA | 2.2 |
| 2.4.1 | Bypass Blocks | A | 2.0 |
| 2.4.2 | Page Titled | A | 2.0 |
| 2.4.3 | Focus Order | A | 2.0 |
| 2.4.4 | Link Purpose (In Context) | A | 2.0 |
| 2.4.5 | Multiple Ways | AA | 2.0 |
| 2.4.6 | Headings and Labels | AA | 2.0 |
| 2.4.7 | Focus Visible | AA | 2.0 |
| 2.4.8 | Location | AAA | 2.0 |
| 2.4.9 | Link Purpose (Link Only) | AAA | 2.0 |
| 2.4.10 | Section Headings | AAA | 2.0 |
| 2.4.11 | Focus Not Obscured (Minimum) | AA | 2.2 |
| 2.4.12 | Focus Not Obscured (Enhanced) | AAA | 2.2 |
| 2.4.13 | Focus Appearance | AAA | 2.2 |
| 2.5.1 | Pointer Gestures | A | 2.1 |
| 2.5.2 | Pointer Cancellation | A | 2.1 |
| 2.5.3 | Label in Name | A | 2.1 |
| 2.5.4 | Motion Actuation | A | 2.1 |
| 2.5.5 | Target Size | AAA | 2.1 |
| 2.5.6 | Concurrent Input Mechanisms | AAA | 2.1 |
| 2.5.7 | Dragging Movements | AA | 2.2 |
| 2.5.8 | Target Size (Minimum) | AA | 2.2 |

### 2.3 Principle 3 – Understandable

| ID | Success criterion | Level | WCAG |
|----|--------------------|-------|------|
| 3.1.1 | Language of Page | A | 2.0 |
| 3.1.2 | Language of Parts | AA | 2.0 |
| 3.1.3 | Unusual Words | AAA | 2.0 |
| 3.1.4 | Abbreviations | AAA | 2.0 |
| 3.1.5 | Reading Level | AAA | 2.0 |
| 3.1.6 | Pronunciation | AAA | 2.0 |
| 3.2.1 | On Focus | A | 2.0 |
| 3.2.2 | On Input | A | 2.0 |
| 3.2.3 | Consistent Navigation | AA | 2.0 |
| 3.2.4 | Consistent Identification | AA | 2.0 |
| 3.2.5 | Change on Request | AAA | 2.0 |
| 3.2.6 | Consistent Help | A | 2.2 |
| 3.3.1 | Error Identification | A | 2.0 |
| 3.3.2 | Labels or Instructions | A | 2.0 |
| 3.3.3 | Error Suggestion | AA | 2.0 |
| 3.3.4 | Error Prevention (Legal, Financial, Data) | AA | 2.0 |
| 3.3.5 | Help | AAA | 2.0 |
| 3.3.6 | Error Prevention (All) | AAA | 2.0 |
| 3.3.7 | Redundant Entry | A | 2.2 |
| 3.3.8 | Accessible Authentication (Minimum) | AA | 2.2 |
| 3.3.9 | Accessible Authentication (Enhanced) | AAA | 2.2 |

### 2.4 Principle 4 – Robust

| ID | Success criterion | Level | WCAG |
|----|--------------------|-------|------|
| 4.1.1 | Parsing | A | 2.0 (obsolete in 2.2) |
| 4.1.2 | Name, Role, Value | A | 2.0 |
| 4.1.3 | Status Messages | AA | 2.1 |

**Total:** WCAG 2.2 includes **87 success criteria** (Principle 1: 29; Principle 2: 34; Principle 3: 21; Principle 4: 3). 4.1.1 Parsing is obsolete and removed in WCAG 2.2. The list above is aligned with the [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/) standard and covers **100%** of success criteria for full web accessibility coverage. *Levels verified: e.g. 3.2.6 Consistent Help and 3.3.7 Redundant Entry are Level A; 2.3.3 Animation from Interactions is AAA in WCAG 2.2.*

---

## 3. What we do NOT cover (checklist + how to do)

The following criteria **require manual testing** (or assistive-technology testing) because TestMu AI Accessibility does not support them or only partially supports them.

### How to do manual testing

For each area below, use the **Checklist** column to see what to verify and the **How to do (manual test)** column for the exact steps. Run these tests yourself (e.g. with keyboard, screen reader, zoom, or assistive technology) to achieve full WCAG coverage. Combine with automated scans from the [What we cover](accessibility-web-what-we-cover) doc.

---

### 3.1 Time-based media (1.2.1–1.2.9)

**We do not cover:** Quality and presence of captions, audio description, transcripts, sign language, live captions; equivalence of media alternatives.

| Checklist | How to do (manual test) |
|-----------|--------------------------|
| 1.2.1 Audio-only/Video-only: Equivalent alternative (transcript or audio track) | Play audio-only/video-only content; verify a transcript or audio description is provided and presents equivalent information. |
| 1.2.2 Captions (Prerecorded): Synced captions for sync media | Play video with sound; verify captions are present, synchronized, and include dialogue and important sounds. |
| 1.2.3 Audio Description or Media Alternative: Description or full alternative | For sync media, verify audio description or full text/media alternative is available. |
| 1.2.4 Captions (Live): Live captions for live audio | For live streams, verify real-time captions are provided. |
| 1.2.5 Audio Description (Prerecorded): Audio description for video | Verify prerecorded video has audio description where visual content is not conveyed by main audio. |
| 1.2.6–1.2.9 (AAA): Sign language, extended audio description, media alternative, live audio-only | Per criterion: verify sign language interpretation, extended audio description, or equivalent alternative as required. |

---

### 3.2 Meaningful sequence, sensory characteristics, orientation, input purpose (1.3.2, 1.3.3, 1.3.4, 1.3.5)

**We do not cover:** Correct reading order when linearized; instructions not relying on shape/location/sound only; orientation not restricted; input purpose programmatically determinable for autofill and assistive tech.

| Checklist | How to do (manual test) |
|-----------|--------------------------|
| 1.3.2 Meaningful Sequence | Linearize the page (e.g. turn off CSS, or use a screen reader) and read top to bottom; verify the order preserves meaning (e.g. no layout tables that read illogically). |
| 1.3.3 Sensory Characteristics | Review instructions (e.g. "click the green button", "the menu on the left"); verify they do not rely only on shape, color, size, location, or sound—add text/labels. |
| 1.3.4 Orientation | Resize or rotate viewport; verify content and functionality are not restricted to one orientation unless essential (e.g. game, camera). |
| 1.3.5 Identify Input Purpose | For inputs that collect user information (e.g. email, name, phone, address): verify input purpose is programmatically determinable (e.g. appropriate `autocomplete` or `aria-autocomplete` / semantics) so assistive tech and browser autofill can work. |

---

### 3.3 Use of color, audio control, resize text, images of text, reflow, content on hover (1.4.1, 1.4.2, 1.4.4, 1.4.5, 1.4.10, 1.4.13)

**We do not cover:** That information is not conveyed by color alone; that auto-play audio has a control; 200% zoom without loss; images of text (or exception); reflow at 320px; hover/focus content is dismissible, hoverable, persistent.

| Checklist | How to do (manual test) |
|-----------|--------------------------|
| 1.4.1 Use of Color | Check every place color conveys information (e.g. required fields, errors, links); verify the same information is available via text, icon, or pattern. |
| 1.4.2 Audio Control | If audio auto-plays for more than 3 seconds, verify a visible control can pause, stop, or control volume independently. |
| 1.4.4 Resize Text | Zoom page to 200% (browser or OS); verify no loss of content or functionality (no clipping, no horizontal scroll for body text). |
| 1.4.5 Images of Text | Where text is presented as an image: verify it is customizable (e.g. via user styles) or essential (e.g. logo, branding); prefer real text where possible. |
| 1.4.10 Reflow | Set viewport width to 320px (or zoom to 400%); verify content reflows to single column/vertical scroll only (except where 2D layout is essential). |
| 1.4.13 Content on Hover or Focus | For custom tooltips, popups, or sub-menus that appear on hover/focus: verify (1) they can be dismissed without moving focus, (2) pointer can move over the content without it disappearing, (3) content stays visible until dismissed or invalid. |

---

### 3.4 Keyboard and keyboard trap (2.1.1, 2.1.2)

**We do not cover:** That all functionality is achievable via keyboard; that focus is never trapped.

| Checklist | How to do (manual test) |
|-----------|--------------------------|
| 2.1.1 Keyboard | Unplug mouse (or ignore it). Use only Tab, Enter, Space, arrows, Escape. Complete every critical task (submit form, open/close modal, navigate, activate buttons/links). Verify nothing requires mouse-only (e.g. hover to reveal, drag-only). |
| 2.1.2 No Keyboard Trap | Tab into modals, custom widgets, and iframes; verify you can leave with Tab, Escape, or documented method. Verify focus is not stuck in a component. |

---

### 3.5 Timing, pause/stop/hide (2.2.1, 2.2.2)

**We do not cover:** That time limits can be turned off, adjusted, or extended with warning; that moving/auto-updating content can be paused, stopped, or hidden.

| Checklist | How to do (manual test) |
|-----------|--------------------------|
| 2.2.1 Timing Adjustable | If the page has session or other time limits: verify user can turn off, adjust (e.g. 10× default), or extend (with warning and ≥20 s to extend, at least 10 times). |
| 2.2.2 Pause, Stop, Hide | For carousels, tickers, auto-updating content, or moving/blinking content >5 s: verify a control pauses, stops, or hides it (or that it is essential and cannot be paused). |

---

### 3.6 Three flashes and animation from interactions (2.3.1, 2.3.3)

**We do not cover:** That no content flashes more than 3 times per second in a way that could cause seizures; that motion animation triggered by interaction can be disabled (AAA).

| Checklist | How to do (manual test) |
|-----------|--------------------------|
| 2.3.1 Three Flashes or Below Threshold | Identify any flashing content; verify it does not flash more than 3 times per second, or that the flashing area is small enough and does not exceed general flash thresholds (see WCAG). Use a dedicated flash analyzer if needed. |
| 2.3.3 Animation from Interactions (AAA) | If the page has motion animation triggered by user interaction (e.g. transitions, parallax): verify the animation can be disabled (e.g. via `prefers-reduced-motion: reduce` or OS/browser Reduce Motion) unless the animation is essential to the functionality or information. Test with Reduce Motion enabled. |

---

### 3.7 Bypass blocks, focus order, link purpose, focus visible (2.4.1, 2.4.3, 2.4.4, 2.4.7)

**We do not cover:** That skip links work and are usable; that focus order is logical; that link purpose is clear in context; that focus indicator is visible.

| Checklist | How to do (manual test) |
|-----------|--------------------------|
| 2.4.1 Bypass Blocks | If there are repeated blocks (e.g. nav): verify a "Skip to main" (or equivalent) link is present and moves focus to main content; test with keyboard and screen reader. |
| 2.4.3 Focus Order | Tab through the page; verify focus order matches visual/logical order and preserves meaning (e.g. no large jumps, modal order correct). |
| 2.4.4 Link Purpose (In Context) | For each link, verify purpose is clear from link text alone or from link text + context (e.g. heading, list item). Avoid "click here" or "read more" without context. |
| 2.4.7 Focus Visible | Tab through interactive elements; verify a visible focus indicator (outline, ring, etc.) and that it is not removed or too low contrast. |

---

### 3.8 Multiple ways, headings and labels (2.4.5, 2.4.6)

**We do not cover:** That multiple ways to find content exist; that headings and labels describe topic/purpose.

| Checklist | How to do (manual test) |
|-----------|--------------------------|
| 2.4.5 Multiple Ways | Verify at least two ways to find content (e.g. nav, sitemap, search, links from related content) unless page is result of a process or step. |
| 2.4.6 Headings and Labels | Verify headings describe the topic/purpose of the content that follows; verify form labels and section labels describe purpose. |

---

### 3.9 Focus not obscured, dragging, target size (2.4.11, 2.5.7, 2.5.8)

**We do not cover:** That focused element is at least partially visible; that dragging has an alternative; that touch targets meet minimum size (with exceptions).

| Checklist | How to do (manual test) |
|-----------|--------------------------|
| 2.4.11 Focus Not Obscured (Minimum) | Tab through page; when a sticky header, cookie bar, or overlay is present, verify the focused element is at least partially visible (not fully covered). |
| 2.5.7 Dragging Movements | If any functionality requires path-based dragging: verify a single-pointer alternative (e.g. click A then click B) exists unless dragging is essential. |
| 2.5.8 Target Size (Minimum) | On touch device or with touch simulation: verify touch targets are at least 24×24 CSS pixels (exceptions: spacing, inline, user agent control, essential). |

---

### 3.10 On focus, on input (3.2.1, 3.2.2)

**We do not cover:** That focus or input alone does not change context (e.g. submit form, open new window).

| Checklist | How to do (manual test) |
|-----------|--------------------------|
| 3.2.1 On Focus | Tab to each focusable element; verify that receiving focus alone does not submit a form, open a new window, or change context. |
| 3.2.2 On Input | Change form control values (e.g. select from dropdown); verify that changing value alone does not submit or change context unless the user is clearly advised (e.g. "Selecting an option will submit"). |

---

### 3.11 Consistent navigation, identification, help (3.2.3, 3.2.4, 3.2.6)

**We do not cover:** That repeated nav and components are consistent; that help is in a consistent place.

| Checklist | How to do (manual test) |
|-----------|--------------------------|
| 3.2.3 Consistent Navigation | Verify repeated navigation (e.g. main nav) appears in the same relative order on each page. |
| 3.2.4 Consistent Identification | Verify components with the same function (e.g. search, settings) are labeled/identified the same way across pages. |
| 3.2.6 Consistent Help | If help (e.g. contact, help link) appears on multiple pages, verify it is in the same relative position. |

---

### 3.12 Error identification, suggestion, prevention; labels; redundant entry; auth (3.3.1–3.3.9)

**We do not cover:** Quality of error messages; presence of suggestions and confirmation; clarity of labels; redundant entry; accessible authentication.

| Checklist | How to do (manual test) |
|-----------|--------------------------|
| 3.3.1 Error Identification | Submit invalid form; verify errors are identified in text and associated with fields (e.g. aria-describedby); verify screen reader announces them. |
| 3.3.2 Labels or Instructions | Verify every input has a visible label or instruction; verify purpose is clear (e.g. required, format). |
| 3.3.3 Error Suggestion | When an input error occurs, verify suggestions for correction are provided where possible. |
| 3.3.4 Error Prevention (Legal, Financial, Data) | For submissions that legal/financial/data: verify confirmation (review, undo) or reversible submission. |
| 3.3.7 Redundant Entry | In multi-step processes, verify same information is not re-requested (or can be pre-filled/selected). |
| 3.3.8 Accessible Authentication (Minimum) | If login uses a cognitive function test (e.g. CAPTCHA, puzzle): verify an alternative (e.g. another CAPTCHA modality, email link, support) is available. |

---

### 3.13 Language of page and parts (3.1.1, 3.1.2)

**We do not cover:** That page language and language of parts are set so assistive technologies can use correct pronunciation.

| Checklist | How to do (manual test) |
|-----------|--------------------------|
| 3.1.1 Language of Page | Verify `<html lang="...">` is set to the primary language of the page. |
| 3.1.2 Language of Parts | Verify any passage in a different language has `lang` on the element (e.g. `<span lang="fr">`) so screen readers can switch. |

---

### 3.14 Status messages (4.1.3)

**We do not cover:** That status messages (e.g. "Saved", "Error") are announced by assistive technologies without moving focus.

| Checklist | How to do (manual test) |
|-----------|--------------------------|
| 4.1.3 Status Messages | Trigger a status update (e.g. save, validation result); with a screen reader, verify the message is announced (e.g. via live region) without focus moving to it. |

---

### 3.15 AAA and other criteria

**We do not cover:** Level AAA criteria (e.g. 1.2.6–1.2.9, 1.3.6, 1.4.6–1.4.9, 2.1.3, 2.2.3–2.2.6, 2.3.2, 2.3.3, 2.4.8–2.4.10, 2.4.12–2.4.13, 2.5.5–2.5.6, 3.1.3–3.1.6, 3.2.5, 3.3.5–3.3.6, 3.3.9) unless you target AAA. For each, follow the corresponding Understanding WCAG document and test manually or with assistive technology as required.

---

## 4. Summary

- **Support:** For TestMU platform, accessibility coverage, or scan issues contact TestMU/LambdaTest support.
- **Full rules:** Section 2 lists **100% of WCAG 2.0, 2.1, and 2.2** success criteria for web (87 total; A, AA, AAA). Use it as the master reference.
- **What we do not cover:** Section 3 lists criteria that require **manual testing** (and, where noted, assistive-technology testing) because TestMU Accessibility does not support them or only partially supports them. For each area, a **checklist** and **how to do** (manual test procedure) are provided so you can achieve full rules coverage and compliance.
- **Use this doc** as a reference for manual testing responsibilities for full accessibility coverage. For *why* these criteria are manual (semantic vs syntactic, partial coverage, and manual-only categories), see the **"What we cover"** document.

**Coverage cross-check:** Section 2 lists all **87** WCAG 2.2 success criteria (Principle 1: 29; Principle 2: 34; Principle 3: 21; Principle 4: 3). Section 3 addresses every criterion that requires manual or assistive-technology testing (including 1.2.x, 1.3.2–1.3.5, 1.4.1–1.4.5, 1.4.10–1.4.13, 2.1.x, 2.2.x, 2.3.1, 2.3.3, 2.4.x, 2.5.x, 3.1.x, 3.2.x, 3.3.x, 4.1.3, and AAA where applicable). Together with automated coverage (see "What we cover" doc), this document supports **100%** WCAG rules coverage for web.
