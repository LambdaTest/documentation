---
id: accessibility-web-what-we-cover
title: Web – What We Cover
sidebar_label: Web – What We Cover
description: Full WCAG reference, checklist, how coverage works, and how to use TestMu AI Accessibility on web. Covers WCAG 2.0, 2.1, 2.2 and remediation.
keywords:
  - TestMu AI
  - Accessibility
  - Web
  - WCAG
  - Checklist
url: https://www.testmuai.com/support/docs/accessibility-web-what-we-cover/
site_name: LambdaTest
slug: accessibility-web-what-we-cover/
canonical: https://www.testmuai.com/support/docs/accessibility-web-what-we-cover/
---

# TestMU AI / LambdaTest Accessibility Web – What We Cover

**Note:** This document describes TestMU AI / LambdaTest Accessibility coverage for web. For platform or accessibility support, contact TestMU/LambdaTest support.

---

## 1. Purpose and scope

This document describes **what TestMU AI / LambdaTest Accessibility Web covers**: a **full WCAG rules reference** (100% for web), a **checklist** of rules the platform can check, **how coverage works** (semantic vs syntactic and why gaps exist), **how to use** the accessibility testing platform to run scans and view results, and **how to check** / **how to do** (remediation) for **websites and web apps**. It is intended for teams who:

- Run accessibility scans on web content via TestMU AI / LambdaTest Accessibility (browser extension, Web Scanner, or automation).
- Need a single reference for **what is checked** on web, **how to use** the platform, and **how to verify or fix** issues.
- Target **WCAG 2.0, 2.1, and 2.2** (Level A, AA, and selected AAA) as applicable to web.

**Technology:** TestMU AI / LambdaTest Accessibility for **web** (websites and web apps). Rule set and tags depend on your TestMU configuration (e.g. WCAG 2.0, 2.1, 2.2 Level A/AA).

---

## 2. Full WCAG rules reference (100% – web)

Below is a **complete** list of all success criteria for **WCAG 2.0, 2.1, and 2.2** at Levels **A, AA, and AAA** as they apply to **web**. Use this as the master reference for full web accessibility coverage. The **checklist in Section 3** shows which of these TestMU AI / LambdaTest Accessibility Web can check automatically or with supported rules.

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

## 3. Checklist (what we cover) – WCAG rules and versions

Below is a consolidated checklist of success criteria that TestMU AI / LambdaTest Accessibility Web can check against, by WCAG version. **Level** is A or AA; **Impact** is typical severity in reports (Critical, Serious, Moderate, Minor). Use **Section 5 – How to use the platform to test (Web)** to run scans.

### 3.1 WCAG 2.0 (Level A and AA)

| Rule / Area | WCAG | Level | Impact | What we cover |
|-------------|------|-------|--------|----------------|
| Image alternative (alt text) | 1.1.1 Non-text Content | A | Critical | Informative images have text alternatives; decorative images have empty or no text alternative. |
| Info and relationships | 1.3.1 Info and Relationships | A | Serious | Structure (headings, lists, tables, form labels) is programmatically determinable. |
| Use of color | 1.4.1 Use of Color | A | Serious | Information is not conveyed by color alone. |
| Audio control | 1.4.2 Audio Control | A | Critical | User can pause, stop, or control auto-playing audio. |
| Contrast (minimum) | 1.4.3 Contrast (Minimum) | AA | Serious | Text contrast ≥ 4.5:1 (normal), ≥ 3:1 (large text). |
| Keyboard | 2.1.1 Keyboard | A | Critical | All functionality available via keyboard. |
| No keyboard trap | 2.1.2 No Keyboard Trap | A | Serious | Keyboard focus is not trapped in a component. |
| Timing adjustable | 2.2.1 Timing Adjustable | A | Critical | User can adjust or extend time limits (or turn off). |
| Pause, stop, hide | 2.2.2 Pause, Stop, Hide | A | Serious | User can pause, stop, or hide auto-updating content. |
| Three flashes | 2.3.1 Three Flashes | A | Critical | No content flashes more than 3 times per second (seizure risk). |
| Bypass blocks | 2.4.1 Bypass Blocks | A | Moderate | Mechanism to skip repeated blocks (e.g. skip link). |
| Page titled | 2.4.2 Page Titled | A | Serious | Pages have descriptive titles. |
| Focus order | 2.4.3 Focus Order | A | Serious | Focus order preserves meaning and operability. |
| Link purpose (in context) | 2.4.4 Link Purpose (In Context) | A | Serious | Link purpose determinable from link text or context. |
| Focus visible | 2.4.7 Focus Visible | AA | Serious | Visible keyboard focus indicator. |
| On focus | 3.2.1 On Focus | A | Serious | No change of context on focus alone. |
| On input | 3.2.2 On Input | A | Serious | No change of context on input alone (without user intent). |
| Error identification | 3.3.1 Error Identification | A | Serious | Input errors are identified and described to the user. |
| Labels or instructions | 3.3.2 Labels or Instructions | A | Serious | Labels or instructions provided for user input. |
| Parsing | 4.1.1 Parsing | A | Moderate | Markup parses correctly (where applicable; obsolete in WCAG 2.2). |
| Name, role, value | 4.1.2 Name, Role, Value | A | Critical | UI components have accessible name, role, and value/state. |

### 3.2 WCAG 2.1 (additional; Level A and AA)

| Rule / Area | WCAG | Level | Impact | What we cover |
|-------------|------|-------|--------|----------------|
| Orientation | 1.3.4 Orientation | AA | Moderate | Content not restricted to a single orientation (unless essential). |
| Reflow | 1.4.10 Reflow | AA | Serious | No horizontal scrolling at 320px width (vertical scroll only). |
| Non-text contrast | 1.4.11 Non-text Contrast | AA | Serious | UI components and graphics meet 3:1 contrast. |
| Text spacing | 1.4.12 Text Spacing | AA | Moderate | No loss of content/functionality with increased text spacing. |
| Character key shortcuts | 2.1.4 Character Key Shortcuts | A | Moderate | Single-key shortcuts can be turned off or remapped. |
| Pointer gestures | 2.5.1 Pointer Gestures | A | Moderate | Multipoint/path gestures have single-pointer alternative. |
| Pointer cancellation | 2.5.2 Pointer Cancellation | A | Moderate | No irreversible action on down-event only (unless essential). |
| Label in name | 2.5.3 Label in Name | A | Serious | Accessible name includes the visible label text. |
| Motion actuation | 2.5.4 Motion Actuation | A | Moderate | Functionality not dependent on device/user motion only. |
| Status messages | 4.1.3 Status Messages | AA | Serious | Status messages can be programmatically determined (e.g. live regions). |

### 3.3 WCAG 2.2 (additional; where supported)

| Rule / Area | WCAG | Level | Impact | What we cover |
|-------------|------|-------|--------|----------------|
| Focus not obscured (minimum) | 2.4.11 Focus Not Obscured (Minimum) | AA | Serious | Focused element is at least partially visible (e.g. not fully covered by sticky UI). |
| Dragging movements | 2.5.7 Dragging Movements | AA | Moderate | Dragging has single-pointer alternative (unless essential). |
| Target size (minimum) | 2.5.8 Target Size (Minimum) | AA | Moderate | Touch targets at least 24×24 CSS pixels (with exceptions). |
| Consistent help | 3.2.6 Consistent Help | AA | Moderate | Help mechanism in consistent relative order on repeated pages. |
| Redundant entry | 3.3.7 Redundant Entry | AA | Moderate | No re-entry of same information in same process (where possible). |
| Accessible authentication (minimum) | 3.3.8 Accessible Authentication (Minimum) | AA | Critical | Auth does not rely solely on cognitive function tests without an alternative. |

**Note:** Exact rule IDs and tags depend on your TestMU/LambdaTest Accessibility configuration. Check TestMU docs for the latest web rule list and WCAG version/level options.

---

## 4. How coverage works: semantic vs syntactic (and why gaps exist)

Beyond *what* is covered, it helps to understand **how** coverage works and **why** some criteria remain manual or partially covered. TestMU AI / LambdaTest Accessibility moves beyond **syntactic checking** (does the code look right?) toward **semantic analysis** (does the experience make sense?) where AI-enhanced rules apply.

### 4.1 The "Semantic Gap": how AI enhances coverage

Standard automated tools typically only read code; they cannot interpret content. **AI-enhanced rules** in TestMU Accessibility target the "Semantic Gap"—the difference between code being valid and code being meaningful.

| WCAG SC | Standard limitation (syntax) | AI solution (semantics) | Why this matters |
|---------|------------------------------|--------------------------|------------------|
| **1.1.1 Non-text Content** | Checks: *"Does an alt attribute exist?"* Passes: e.g. `<img alt="filename.jpg">` | **AI rule (e.g. alt-descriptive):** *"Does the alt text actually describe the visual content?"* | Reduces false positives where developers add placeholder or junk text just to pass the tool. |
| **2.4.2 Page Titled** | Checks: *"Is the title tag non-empty?"* Passes: e.g. `<title>Home</title>` | **AI rule (e.g. html-title-descriptive):** *"Does the title describe this specific page's context?"* | Catches generic titles that confuse screen reader users navigating multiple tabs. |
| **3.1.1 Language of Page** | Checks: *"Is the lang code valid?"* Passes: e.g. `lang="en"` on a Spanish page | **AI rule (e.g. html-lang-matches-visible-language):** *"Is the visible text actually in the declared language?"* | Addresses copy-paste or template errors where the page is localized but the lang attribute is not. |
| **1.4.5 Images of Text** | **Not covered** by standard tools (they cannot "see" text inside pixels). | **AI rule (e.g. html-image-no-text):** Uses OCR to detect text in images. | Allows automation of a check that was previously not feasible. |

*Note: Exact AI rule names and availability depend on your TestMU/LambdaTest Accessibility configuration.*

### 4.2 The "Partial" trap: what "partially" covered means

Many rules are marked **partially** covered. In practice, "Partial" usually means the tool checks the **code** but not the full **visual or behavioral context**.

- **1.3.1 Info and Relationships (Partial)**  
  - *What it catches:* Validates that `<th>` is inside `<table>`, or `<li>` inside `<ul>`.  
  - *What it misses:* It cannot tell if text *looks* like a heading (e.g. large, bold) but is coded as `<p>`. That requires visual analysis.

- **1.4.3 Contrast (Minimum) (Partial)**  
  - *What it catches:* Solid text on a solid background (e.g. computed hex colors).  
  - *What it misses:* Text over gradients, background images, or semi-transparent overlays, where the effective contrast cannot be derived from a single background value.

- **4.1.2 Name, Role, Value (Partial)**  
  - *What it catches:* Invalid ARIA combinations (e.g. `role="button"` without appropriate focusability).  
  - *What it misses:* Whether a custom widget *actually behaves* like the role it claims (interaction logic); that requires manual or assistive-technology testing.

### 4.3 Why some criteria are "manual only"

Criteria that are **not covered** (or only partially covered) by automation typically fall into three groups that are difficult for tools to fully test:

- **Category A: Time and change (dynamic)**  
  Examples: 2.1.1 Keyboard, 2.4.3 Focus Order, 2.4.7 Focus Visible.  
  *Reason:* They require navigating through time and sequence. A static snapshot cannot show whether tab order is logical or whether focus is trapped in a modal.

- **Category B: Human cognition (subjective)**  
  Examples: 1.3.2 Meaningful Sequence, 3.3.3 Error Suggestion, 3.3.4 Error Prevention.  
  *Reason:* Deciding if an error message is "helpful" or if a sequence is "meaningful" requires human judgment about logic and clarity, not just syntax.

- **Category C: Complex visual or physical behavior**  
  Examples: 1.4.10 Reflow, 1.4.12 Text Spacing, 2.5.1 Pointer Gestures.  
  *Reason:* Testing reflow requires rendering at specific viewport sizes (e.g. 320px) and checking for horizontal scroll or overlap; text spacing requires applying user styles and checking for clipping. These need a rendering or interaction environment, not just code parsing.

### 4.4 WCAG version specifics

- **4.1.1 Parsing:** Correctly treated as **obsolete** in WCAG 2.2 (removed from the standard). The rule set reflects this.
- **2.5.8 Target Size (Minimum):** Often supported partially (e.g. a rule that checks approximate target size); measuring 24×24 CSS pixels is tractable.
- **2.5.7 Dragging Movements:** Typically **not covered** by automation; simulating drag gestures programmatically is complex. Manual testing or assistive-technology testing is required.

**Summary of depth:** The tool covers **syntax** (HTML/ARIA validation) and uses AI to extend into **static semantics** (e.g. descriptive alt, descriptive title, language match, images of text). It does not replace **dynamic behavior** testing (keyboard, focus, timing) or **complex visual rendering** checks (reflow, spacing); use the **What we do NOT cover** document and manual testing for those.

---

## 5. How to use the platform to test (Web)

Use the TestMu AI Accessibility platform to run automated accessibility scans on your **website or web app**. Follow these steps to test covered items:

| Step | How to use the platform to test |
|------|-------------------------|
| **1. Access the platform** | Log in to TestMU / LambdaTest and open the **Accessibility** (or **TestMU AI Accessibility**) section for web testing. |
| **2. Select URL or page** | Enter the **URL** of the page or web app to test, or select a page from your project. You can run a single-page scan or configure a flow (e.g. multi-page or logged-in state). |
| **3. Run an accessibility scan** | Start an **accessibility scan** for the selected page(s). The platform runs automated checks against the rules listed in Section 3 (WCAG 2.0, 2.1, 2.2 Level A, AA, and selected AAA as supported). |
| **4. View the report** | After the scan completes, open the **accessibility report**. Review **violations** (issues found), **passes** (rules that passed), and **incomplete** (items that need manual verification). |
| **5. Filter by WCAG level or rule** | Use report filters to view issues by **WCAG level** (A, AA, AAA), **rule ID**, or **impact** (Critical, Serious, Moderate, Minor). Use this to prioritize fixes (e.g. Level A and AA first). |
| **6. Export or share results** | Export the report (e.g. PDF, CSV) or share the report link with your team. Use results to fix issues (see Section 6 for remediation) and re-run scans to verify. |

**Tip:** Combine automated scans with **manual testing** (keyboard, screen reader, zoom, resize) and the **What we do NOT cover** document for full WCAG coverage and compliance.

---

## 6. How to check and how to do (by principle)

For each principle (Perceivable, Operable, Understandable, Robust), below is a concise **how to check** and **how to do** (remediation) for the areas TestMU AI / LambdaTest Accessibility Web covers.

---

### 6.1 Perceivable

**What we cover (WCAG):** 1.1.1, 1.3.1, 1.4.1, 1.4.2, 1.4.3 (2.0); 1.3.4, 1.4.10, 1.4.11, 1.4.12 (2.1).

**How to check**

- Run a full-page (or partial) accessibility scan with TestMU AI / LambdaTest Accessibility and review violations for images, headings, lists, tables, color, contrast, and layout.
- Manually: Turn on a screen reader (e.g. NVDA, VoiceOver); check that images have meaningful or empty alt; headings and structure are announced; form fields have labels; color is not the only indicator.
- Check contrast with a contrast checker (e.g. 4.5:1 for normal text, 3:1 for large text and UI components); check at 320px width for reflow and at 200% zoom for resize text.

**How to do (remediation)**

- **1.1.1 (Images):** Add short `alt` text for informative images; use `alt=""` or `role="presentation"` for decorative images. For complex images, provide a short alt plus long description (e.g. in text or `longdesc`/link).
- **1.3.1 (Structure):** Use semantic HTML (`<main>`, `<nav>`, `<article>`, `<section>`, `<aside>`, `<header>`, `<footer>`); use heading hierarchy (`<h1>`–`<h6>`); use `<ul>`/`<ol>`/`<dl>` for lists; use `<table>` with `<th>`, `scope`, or `id`/`headers` for data tables; associate form labels with controls via `<label for="id">` or `aria-labelledby`.
- **1.4.1 (Color):** Ensure information is also conveyed by text, pattern, or icon, not only by color.
- **1.4.2 (Audio):** Provide a visible control to pause, stop, or mute auto-playing audio; do not auto-play audio > 3 seconds without user control.
- **1.4.3 (Contrast):** Increase contrast so text meets 4.5:1 (normal) or 3:1 (large); ensure UI components and graphics meet 3:1 where required (1.4.11).
- **1.3.4 (Orientation):** Avoid locking to one orientation unless essential (e.g. camera, game).
- **1.4.10 (Reflow):** Use responsive layout so at 320px width content reflows vertically without horizontal scrolling (except where 2D layout is essential).
- **1.4.11 (Non-text contrast):** Ensure controls and graphical objects have at least 3:1 contrast against adjacent colors.
- **1.4.12 (Text spacing):** Avoid fixed heights that clip text when user increases line/paragraph/letter/word spacing; test with user styles (e.g. 200% line height, extra word/letter spacing).

---

### 6.2 Operable

**What we cover (WCAG):** 2.1.1, 2.1.2, 2.2.1, 2.2.2, 2.3.1, 2.4.1–2.4.4, 2.4.7 (2.0); 2.1.4, 2.5.1–2.5.4 (2.1); 2.4.11, 2.5.7, 2.5.8 (2.2).

**How to check**

- Run the scan and review violations for keyboard, focus, links, buttons, timing, and moving content.
- Manually: Use only keyboard (Tab, Enter, Space, arrows, Escape); complete key tasks; confirm no focus trap; confirm visible focus; check skip link or landmark order (bypass blocks); check link text and button labels; check that time limits can be extended or turned off; check that auto-updating and moving content can be paused/stopped; ensure nothing flashes more than 3 times per second in a large area.

**How to do (remediation)**

- **2.1.1 (Keyboard):** Make every interactive element focusable and activatable via keyboard; use `<button>`, `<a href>`, or ensure custom controls have `tabindex="0"` and key handlers (Enter, Space, arrows, Escape as appropriate).
- **2.1.2 (No keyboard trap):** Ensure focus can leave modals and custom widgets (e.g. Tab and Escape return focus to trigger or close).
- **2.2.1 (Timing):** Allow users to turn off, adjust, or extend time limits (e.g. session timeout); warn before expiry and allow extension with a simple action.
- **2.2.2 (Pause, stop, hide):** Provide controls to pause, stop, or hide carousels, tickers, and auto-updating content; for moving/blinking content > 5 seconds, provide a pause/stop control.
- **2.3.1 (Three flashes):** Remove or reduce flashing so nothing flashes more than 3 times per second in a 10-degree field (or keep area small and avoid general flash).
- **2.4.1 (Bypass blocks):** Add a "Skip to main content" link or use landmarks so repeated blocks can be skipped.
- **2.4.2 (Page titled):** Set a unique, descriptive `<title>` per page.
- **2.4.3 (Focus order):** Keep DOM order logical; avoid positive `tabindex` that reorders focus; use `tabindex="0"` only where needed for custom widgets.
- **2.4.4 (Link purpose):** Use link text (or link + context) that describes the destination or action; avoid "click here" alone.
- **2.4.7 (Focus visible):** Do not remove outline without a visible replacement (e.g. `:focus-visible` with clear ring); ensure focus indicator has sufficient contrast.
- **2.1.4 (Character key shortcuts):** Allow users to turn off or remap single-key shortcuts (or avoid single-key shortcuts).
- **2.5.1–2.5.4 (Gestures, cancellation, label in name, motion):** Provide single-pointer alternatives for path-based gestures; avoid triggering critical actions on key-down only; ensure accessible name includes visible label; do not rely on device motion alone.
- **2.4.11 (Focus not obscured):** Ensure sticky headers, cookie bars, or overlays do not fully cover the focused element (allow at least partial visibility).
- **2.5.7 (Dragging):** Provide a single-pointer alternative to drag-and-drop where possible.
- **2.5.8 (Target size):** Make touch targets at least 24×24 CSS pixels (with defined exceptions).

---

### 6.3 Understandable

**What we cover (WCAG):** 3.2.1, 3.2.2, 3.3.1, 3.3.2 (2.0); 3.2.6, 3.3.7, 3.3.8 (2.2).

**How to check**

- Run the scan and review form labels, error messages, and component names.
- Manually: Change focus and input without submitting forms or opening new contexts; verify error messages are announced and associated with fields; verify labels and instructions are present; check that help is in a consistent place (3.2.6); check that users are not forced to re-enter the same information (3.3.7); check that login does not rely solely on cognitive tests without an alternative (3.3.8).

**How to do (remediation)**

- **3.2.1 (On focus):** Do not submit forms, open new windows, or change context when an element only receives focus.
- **3.2.2 (On input):** Do not change context on input (e.g. select) without a deliberate submit or "go" action.
- **3.3.1 (Error identification):** Identify errors in text; use `aria-invalid` and `aria-describedby` to associate errors with fields; ensure errors are announced by screen readers.
- **3.3.2 (Labels or instructions):** Provide visible labels and/or instructions; associate with controls via `<label for="id">` or `aria-labelledby`/`aria-describedby`.
- **3.2.6 (Consistent help):** Place repeated help mechanisms (e.g. help link, contact) in the same relative order across pages.
- **3.3.7 (Redundant entry):** Pre-fill or allow selection of previously entered or provided information in multi-step processes.
- **3.3.8 (Accessible authentication):** Provide an alternative to cognitive function tests (e.g. CAPTCHA) for authentication, or use mechanisms that do not rely solely on cognition (e.g. biometric, email link).

---

### 6.4 Robust

**What we cover (WCAG):** 4.1.1 (2.0; obsolete in 2.2), 4.1.2 (2.0), 4.1.3 (2.1).

**How to check**

- Run the scan and review "Name, role, value" and "Status messages" violations.
- Manually: Use a screen reader to verify every interactive element has an accessible name and correct role; verify custom widgets expose state and value; verify status messages (e.g. "Saved", "Error") are in live regions or otherwise announced.

**How to do (remediation)**

- **4.1.2 (Name, role, value):** Use native HTML controls where possible (`<button>`, `<input>`, `<select>`, `<a href>`). For custom widgets, use ARIA: `role`, `aria-label` or `aria-labelledby`, `aria-describedby`, and state/property attributes (`aria-expanded`, `aria-checked`, `aria-selected`, `aria-current`, etc.). Ensure keyboard behavior matches the role (see [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)).
- **4.1.3 (Status messages):** Use `role="status"` or `role="alert"` (or `aria-live="polite"`/`aria-live="assertive"`) for status updates so assistive technologies announce them without moving focus.
- **4.1.1 (Parsing):** Ensure valid HTML and unique IDs where applicable (obsolete in WCAG 2.2 but good practice).

---

## 7. Summary

- **Support:** For TestMU platform, accessibility coverage, or scan issues contact TestMU/LambdaTest support.
- **Full WCAG reference:** Section 2 lists **100% of WCAG 2.0, 2.1, and 2.2** success criteria (87 total) as they apply to web. Use it as the master reference.
- **What we cover:** Section 3 is the **checklist** of rules TestMu AI Accessibility Web can check (WCAG 2.0, 2.1, 2.2 Level A, AA, and selected AAA). Section 4 explains **how coverage works** (semantic vs syntactic, partial coverage, and why some criteria are manual only). Section 5 describes **how to use the platform to test** (run scan, view report, filter, export). Section 6 provides **how to check** and **how to do** (remediation) for each principle.
- **Use this doc** as a single reference for what is covered on web, how coverage works, how to use the platform, and how to verify or fix issues.
