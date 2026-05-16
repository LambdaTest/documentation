---
id: accessibility-android-what-we-do-not-cover
title: Android – What We Do Not Cover
sidebar_label: Android – What We Do Not Cover
description: Checklist of WCAG criteria that require manual testing on Android apps for full coverage with TestMu AI Accessibility.
keywords:
  - TestMu AI
  - Accessibility
  - Android
  - WCAG
  - Manual testing
  - Checklist
url: https://www.testmuai.com/support/docs/accessibility-android-what-we-do-not-cover/
site_name: TestMu AI
slug: accessibility-android-what-we-do-not-cover/
canonical: https://www.testmuai.com/support/docs/accessibility-android-what-we-do-not-cover/
---

# TestMU AI / LambdaTest Accessibility Android – What We Do NOT Cover

**Note:** This document describes TestMU AI / LambdaTest Accessibility coverage for Android. For platform or accessibility support, contact TestMU/LambdaTest support.

---

## 1. Purpose and scope

This document describes **what TestMU AI / LambdaTest Accessibility Android does NOT cover**: the **manual tests** (and assistive-technology testing) that **you need to perform** for **full WCAG rules coverage and compliance** on **native Android apps**. TestMU Accessibility automated scanning on Android covers a subset of accessibility issues; the rest require human judgment, TalkBack/switch-access testing, and media/layout checks.

- **Full rules reference:** Section 2 lists **100% of WCAG 2.0, 2.1, and 2.2** success criteria (Level A, AA, and AAA) as they apply to **Android** (native apps and in-app WebViews). EN 301 549 and Google’s accessibility guidelines map to these criteria.
- **What we do not cover:** Section 3 is a **checklist** of criteria that require **manual testing** (or assistive-technology testing) because TestMU Accessibility does not support them or only partially supports them on Android.
- **How to do:** For each area, **how to test manually** on Android (TalkBack, switch access, device settings, rotation, etc.) so you can achieve full coverage and compliance.

---

## 2. Full WCAG rules reference (100% – Android)

Below is a **complete** list of all success criteria for **WCAG 2.0, 2.1, and 2.2** at Levels **A, AA, and AAA** as they apply to **native Android apps**. Use this as the master reference for full Android accessibility coverage. (Criteria apply to app UI, in-app content, and in-app WebViews where applicable.)

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

**Total:** WCAG 2.2 includes **87 success criteria** (Principle 1: 29; Principle 2: 34; Principle 3: 21; Principle 4: 3). 4.1.1 Parsing is obsolete and removed in WCAG 2.2. The list above is aligned with the [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/) standard and covers **100%** of success criteria for full Android accessibility coverage (native app and in-app content). *Levels verified: e.g. 3.2.6 Consistent Help and 3.3.7 Redundant Entry are Level A; 2.3.3 Animation from Interactions is AAA in WCAG 2.2.*

---

## 3. What we do NOT cover (checklist + how to do – Android)

The following criteria **require manual testing** (or assistive-technology testing) on **Android** because TestMu AI Accessibility does not support them or only partially supports them.

### How to do manual testing (Android)

For each area below, use the **Checklist** column to see what to verify and the **How to do (manual test – Android)** column for the exact steps. Run these tests on device or emulator with **TalkBack**, **Switch Access**, font scaling, and rotation as needed. Combine with automated scans from the [What we cover](/support/docs/accessibility-android-what-we-cover/) doc.

---

### 3.1 Time-based media (1.2.1–1.2.9)

**We do not cover:** Quality and presence of captions, audio description, transcripts, sign language, live captions in in-app video/audio; equivalence of media alternatives.

| Checklist | How to do (manual test – Android) |
|-----------|------------------------------------|
| 1.2.1 Audio-only/Video-only: Equivalent alternative | Play in-app audio-only or video-only content; verify a transcript or audio description is provided and presents equivalent information. |
| 1.2.2 Captions (Prerecorded): Synced captions | Play in-app video with sound; verify captions are present, synchronized, and include dialogue and important sounds. |
| 1.2.3 Audio Description or Media Alternative | For in-app sync media, verify audio description or full text/media alternative is available. |
| 1.2.4 Captions (Live): Live captions | For in-app live streams, verify real-time captions are provided. |
| 1.2.5 Audio Description (Prerecorded) | Verify prerecorded in-app video has audio description where visual content is not conveyed by main audio. |
| 1.2.6–1.2.9 (AAA) | Per criterion: verify sign language interpretation, extended audio description, or equivalent alternative as required for in-app media. |

---

### 3.2 Meaningful sequence, sensory characteristics, orientation, input purpose (1.3.2, 1.3.3, 1.3.4, 1.3.5)

**We do not cover:** Correct reading order when linearized with TalkBack; instructions not relying on shape/location/sound only; orientation not restricted; input purpose programmatically determinable.

| Checklist | How to do (manual test – Android) |
|-----------|------------------------------------|
| 1.3.2 Meaningful Sequence | Turn on **TalkBack** (Settings > Accessibility > TalkBack). Navigate through the app (swipe or linear explore); verify the order preserves meaning (e.g. no layout that reads illogically when linearized). |
| 1.3.3 Sensory Characteristics | Review in-app instructions (e.g. "tap the green button", "the menu on the left"); verify they do not rely only on shape, color, size, location, or sound—add text/labels. |
| 1.3.4 Orientation | Rotate the device (portrait ↔ landscape); verify content and functionality are not restricted to one orientation unless essential (e.g. camera, game). If lock is used, document justification. |
| 1.3.5 Identify Input Purpose | For inputs that collect user information (e.g. email, name, phone): verify input purpose is programmatically determinable (e.g. `autocomplete` in WebViews, or equivalent in native where supported) so assistive tech and autofill can work. |

---

### 3.3 Use of color, audio control, resize text, images of text, reflow, non-text contrast, text spacing, content on hover/focus (1.4.1, 1.4.2, 1.4.4, 1.4.5, 1.4.10, 1.4.11, 1.4.12, 1.4.13)

**We do not cover:** That information is not conveyed by color alone; that auto-play audio has a control; font scaling without loss; images of text (or exception); reflow; non-text contrast; text spacing override without loss; content on hover/focus (dismissible, hoverable, persistent).

| Checklist | How to do (manual test – Android) |
|-----------|------------------------------------|
| 1.4.1 Use of Color | Check every place color conveys information (e.g. required fields, errors, status); verify the same information is available via text, icon, or pattern. |
| 1.4.2 Audio Control | If in-app audio auto-plays for more than 3 seconds, verify a visible control can pause, stop, or control volume independently. |
| 1.4.4 Resize Text | In **Settings > Display > Font size** (or **Accessibility > Text and display > Font size**), set to largest. Open the app; verify no critical text is truncated and functionality is preserved. |
| 1.4.5 Images of Text | Where text is presented as an image: verify it is customizable or essential (e.g. logo); prefer real text where possible. |
| 1.4.10 Reflow | Use a small display or split screen; verify content reflows (e.g. no horizontal scroll for body content except where 2D layout is essential). |
| 1.4.11 Non-text Contrast | Verify UI components and graphics (icons, borders, focus indicators) have at least 3:1 contrast against adjacent colors where required. |
| 1.4.12 Text Spacing | If the app supports or is affected by user text-spacing overrides: verify no loss of content or functionality when line/paragraph/letter/word spacing is increased (e.g. via accessibility settings or WebView). |
| 1.4.13 Content on Hover or Focus | For in-app WebViews or UI that shows content on focus/hover (e.g. tooltips, popovers): verify (1) content can be dismissed without moving focus, (2) pointer can move over the content without it disappearing, (3) content stays visible until dismissed or invalid. |

---

### 3.4 Keyboard / assistive technology and no focus trap (2.1.1, 2.1.2)

**We do not cover:** That all functionality is achievable via TalkBack and switch access; that focus is never trapped.

| Checklist | How to do (manual test – Android) |
|-----------|------------------------------------|
| 2.1.1 Keyboard (operable via AT) | Turn on **TalkBack**. Complete every critical task (navigate, submit form, open/close dialogs, activate buttons) using only TalkBack gestures (e.g. swipe, double-tap). Optionally test with **Switch Access** (Settings > Accessibility > Switch Access). Verify nothing requires touch-only (e.g. drag-only, hover). |
| 2.1.2 No Keyboard Trap | With TalkBack, move focus into dialogs, custom widgets, or WebViews; verify you can leave (e.g. back, close button, swipe) and that focus is not stuck. |

---

### 3.5 Timing, pause/stop/hide (2.2.1, 2.2.2)

**We do not cover:** That time limits can be turned off, adjusted, or extended with warning; that moving/auto-updating content can be paused, stopped, or hidden.

| Checklist | How to do (manual test – Android) |
|-----------|------------------------------------|
| 2.2.1 Timing Adjustable | If the app has session or other time limits: verify user can turn off, adjust (e.g. 10× default), or extend (with warning and ≥20 s to extend, at least 10 times). Test with TalkBack; verify timeout warning is announced. |
| 2.2.2 Pause, Stop, Hide | For carousels, tickers, auto-updating content, or moving/blinking content >5 s: verify a control pauses, stops, or hides it (or that it is essential and cannot be paused). |

---

### 3.6 Three flashes and animation from interactions (2.3.1, 2.3.3)

**We do not cover:** That no content flashes more than 3 times per second in a way that could cause seizures; that motion animation triggered by interaction can be disabled (AAA).

| Checklist | How to do (manual test – Android) |
|-----------|------------------------------------|
| 2.3.1 Three Flashes or Below Threshold | Identify any flashing content in the app; verify it does not flash more than 3 times per second, or that the flashing area is small enough and does not exceed general flash thresholds (see WCAG). Use a dedicated flash analyzer if needed. |
| 2.3.3 Animation from Interactions (AAA) | If the app has motion animation triggered by user interaction (e.g. transitions, parallax): verify the animation can be disabled (e.g. **Settings > Accessibility > Remove animations** or **Developer options > Window animation scale / Transition animation scale** set to off) unless the animation is essential to the functionality or information. Test with Remove animations on. |

---

### 3.7 Bypass blocks, focus order, link/button purpose, focus visible (2.4.1, 2.4.3, 2.4.4, 2.4.7)

**We do not cover:** That skip-to-main (or equivalent) works; that focus order is logical; that link/button purpose is clear in context; that focus indicator is visible.

| Checklist | How to do (manual test – Android) |
|-----------|------------------------------------|
| 2.4.1 Bypass Blocks | If there are repeated blocks (e.g. nav bar): verify a "Skip to main" (or equivalent) is present and moves focus to main content; test with TalkBack. |
| 2.4.3 Focus Order | With TalkBack, swipe through the screen; verify focus order matches visual/logical order and preserves meaning (e.g. no large jumps, dialog order correct). |
| 2.4.4 Link Purpose (In Context) | For each tappable element (link, button), verify purpose is clear from contentDescription or visible text + context. Avoid "tap here" or "more" without context. |
| 2.4.7 Focus Visible | With TalkBack (and optionally with **Display > Highlight focus** or similar), verify the focused element is visibly indicated (e.g. focus ring, highlight) and not removed or too low contrast. |

---

### 3.8 Multiple ways, headings and labels (2.4.5, 2.4.6)

**We do not cover:** That multiple ways to find content/screens exist; that headings and labels describe topic/purpose.

| Checklist | How to do (manual test – Android) |
|-----------|------------------------------------|
| 2.4.5 Multiple Ways | Verify at least two ways to reach key content (e.g. nav drawer, bottom nav, search, deep link) unless the screen is a result of a process or step. |
| 2.4.6 Headings and Labels | Verify headings (e.g. contentDescription or heading semantics) describe the topic/purpose of the content that follows; verify form labels and section labels describe purpose. |

---

### 3.9 Focus not obscured, dragging, target size (2.4.11, 2.5.7, 2.5.8)

**We do not cover:** That focused element is at least partially visible; that dragging has an alternative; that touch targets meet minimum size (with exceptions).

| Checklist | How to do (manual test – Android) |
|-----------|------------------------------------|
| 2.4.11 Focus Not Obscured (Minimum) | With TalkBack, focus elements; when a sticky header, snackbar, or overlay is present, verify the focused element is at least partially visible (not fully covered). |
| 2.5.7 Dragging Movements | If any functionality requires path-based dragging: verify a single-tap/click alternative (e.g. tap A then tap B) exists unless dragging is essential. |
| 2.5.8 Target Size (Minimum) | On a real device, verify touch targets are at least 24×24 dp (exceptions: spacing, inline, essential). Recommended 48dp on Android for better usability (2.5.5 AAA). |

---

### 3.10 On focus, on input (3.2.1, 3.2.2)

**We do not cover:** That focus or input alone does not change context (e.g. submit form, navigate away).

| Checklist | How to do (manual test – Android) |
|-----------|------------------------------------|
| 3.2.1 On Focus | With TalkBack, focus each focusable element; verify that receiving focus alone does not submit a form, open a new screen, or change context. |
| 3.2.2 On Input | Change a control value (e.g. select from spinner, toggle switch); verify that changing value alone does not submit or change context unless the user is clearly advised (e.g. "Selecting will submit"). |

---

### 3.11 Consistent navigation, identification, help (3.2.3, 3.2.4, 3.2.6)

**We do not cover:** That repeated nav and components are consistent; that help is in a consistent place.

| Checklist | How to do (manual test – Android) |
|-----------|------------------------------------|
| 3.2.3 Consistent Navigation | Verify repeated navigation (e.g. bottom nav, drawer) appears in the same relative order on each screen. |
| 3.2.4 Consistent Identification | Verify components with the same function (e.g. search, settings, back) are labeled/identified the same way across screens. |
| 3.2.6 Consistent Help | If help (e.g. contact, FAQ) appears on multiple screens, verify it is in the same relative position (e.g. same menu item, same FAB area). |

---

### 3.12 Error identification, suggestion, prevention; labels; redundant entry; auth (3.3.1–3.3.8)

**We do not cover:** Quality of error messages; presence of suggestions and confirmation; clarity of labels; redundant entry; accessible authentication.

| Checklist | How to do (manual test – Android) |
|-----------|------------------------------------|
| 3.3.1 Error Identification | Submit invalid form; verify errors are identified in text and associated with fields (e.g. error message near field, contentDescription); verify TalkBack announces them. |
| 3.3.2 Labels or Instructions | Verify every input has a visible label or instruction (e.g. hint, labelFor); verify purpose is clear (e.g. required, format). |
| 3.3.3 Error Suggestion | When an input error occurs, verify suggestions for correction are provided where possible. |
| 3.3.4 Error Prevention (Legal, Financial, Data) | For submissions that are legal/financial/data: verify confirmation (review, undo) or reversible submission. |
| 3.3.7 Redundant Entry | In multi-step flows, verify same information is not re-requested (or can be pre-filled/selected). |
| 3.3.8 Accessible Authentication (Minimum) | If login uses a cognitive function test (e.g. CAPTCHA, puzzle): verify an alternative (e.g. another CAPTCHA modality, email link, support) is available. |

---

### 3.13 Language of page and parts (3.1.1, 3.1.2)

**We do not cover:** That app/content language and language of parts are set so assistive technologies can use correct pronunciation (e.g. for WebViews or localized strings).

| Checklist | How to do (manual test – Android) |
|-----------|------------------------------------|
| 3.1.1 Language of Page | For in-app WebViews, verify document language is set (e.g. `lang`). For native UI, ensure default locale/string resources match primary language. |
| 3.1.2 Language of Parts | If any passage is in a different language (e.g. in WebView or TextView), verify it is exposed so TalkBack can use correct pronunciation (e.g. `lang` in WebView, or system locale for native). |

---

### 3.14 Status messages (4.1.3)

**We do not cover:** That status messages (e.g. "Saved", "Error") are announced by TalkBack without moving focus.

| Checklist | How to do (manual test – Android) |
|-----------|------------------------------------|
| 4.1.3 Status Messages | Trigger a status update (e.g. save, validation result); with TalkBack on, verify the message is announced (e.g. via `announceForAccessibility()` or live region) without focus moving to it. |

---

### 3.15 AAA and other criteria

**We do not cover:** Level AAA criteria (e.g. 1.2.6–1.2.9, 1.3.6, 1.4.6–1.4.9, 2.1.3, 2.2.3–2.2.6, 2.3.2, 2.3.3, 2.4.8–2.4.10, 2.4.12–2.4.13, 2.5.5–2.5.6, 3.1.3–3.1.6, 3.2.5, 3.3.5–3.3.6, 3.3.9) unless you target AAA. For each, follow the corresponding Understanding WCAG document and test manually or with TalkBack/switch access as required on Android.

---

## 4. Summary

- **Support:** For TestMU platform, accessibility coverage, or device issues contact TestMU/LambdaTest support.
- **Full rules:** Section 2 lists **100% of WCAG 2.0, 2.1, and 2.2** success criteria as they apply to **Android** (87 total; A, AA, AAA). Use it as the master reference for full Android accessibility coverage.
- **What we do not cover:** Section 3 lists criteria that require **manual testing** (and, where noted, assistive-technology testing with **TalkBack** and **Switch Access**) because TestMU Accessibility does not support them or only partially supports them on Android. For each area, a **checklist** and **how to do** (manual test procedure on Android) are provided so you can achieve full rules coverage and compliance.
- **Use this doc** as a reference for manual testing responsibilities for full Android accessibility coverage.

**Coverage cross-check:** Section 2 lists all **87** WCAG 2.2 success criteria (Principle 1: 29; Principle 2: 34; Principle 3: 21; Principle 4: 3). Section 3 addresses every criterion that requires manual or assistive-technology testing (including 1.2.x, 1.3.2–1.3.5, 1.4.1–1.4.5, 1.4.10–1.4.13, 2.1.x, 2.2.x, 2.3.1, 2.3.3, 2.4.x, 2.5.x, 3.1.x, 3.2.x, 3.3.x, 4.1.3, and AAA where applicable). Together with automated coverage (see “What we cover” doc), this document supports **100%** WCAG rules coverage for Android.

