---
id: accessibility-web-rules
title: Web Accessibility Rules
sidebar_label: Web Rules
description: Every web accessibility rule TestMu AI checks, mapped to its WCAG success criterion with remediation guidance.
slug: accessibility-web-rules/
toc_max_heading_level: 2
---

import { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Web Accessibility Rules",
          "item": `${BRAND_URL}/support/docs/accessibility-web-rules/`
        }]
      })
    }}
></script>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": ["Article","TechArticle"],
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.testmuai.com/support/docs/accessibility-web-rules/" },
    "headline": "Web Accessibility Rules",
    "description": "Every web accessibility rule TestMu AI checks, mapped to its WCAG success criterion with remediation guidance.",
    "url": "https://www.testmuai.com/support/docs/accessibility-web-rules/",
    "image": { "@type": "ImageObject", "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp", "width": 1200, "height": 630 },
    "inLanguage": "en",
    "articleSection": "Accessibility Testing",
    "author": { "@type": "Organization", "@id": "https://www.testmuai.com/#organization", "name": "TestMu AI", "url": "https://www.testmuai.com/" },
    "publisher": { "@type": "Organization", "@id": "https://www.testmuai.com/#organization", "name": "TestMu AI", "alternateName": ["TestMuAI","TestMu","LambdaTest"], "url": "https://www.testmuai.com/", "logo": { "@type": "ImageObject", "url": "https://www.testmuai.com/logo.png" }, "sameAs": ["https://www.linkedin.com/company/testmu-ai/","https://x.com/testmuai","https://www.youtube.com/@TestMuAI"] },
    "dateModified": "2026-09-24T00:00:00+05:30"
  }) }}
/>

# Web Accessibility Rules

Web rules map directly to WCAG success criteria. 37 rules in total. Every rule below is a standalone section with its WCAG mapping, what it checks, why it matters, common failures, and how to fix.

## Non-text Content (1.1.1)

**WCAG:** [1.1.1 (A)](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html)

**What it checks:** Meaningful non-text content exposes an accessible text alternative that explains its purpose or information.

**Why it matters:** Screen-reader users and other assistive technology users rely on accessible names or descriptions to understand images, icons, and other non-text elements.

**Common failures:**

- meaningful images with no alt text
- icon-only controls with no accessible name
- charts or visual indicators with no text alternative

**How to fix:**

- add accurate alt text for meaningful content
- mark decorative content as decorative so it is ignored correctly
- ensure icon-only controls expose an accessible name through the appropriate attribute or label

---

## Info and Relationships (1.3.1)

**WCAG:** [1.3.1 (A)](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)

**What it checks:** Headings, lists, tables, form groups, and landmark regions use correct semantic HTML rather than relying on visual appearance alone.

**Why it matters:** Screen-reader users navigate by structure: headings, lists, and landmarks act as signposts. When structure is only visual (e.g., bold text instead of a heading element), assistive technology cannot expose it, and users lose the ability to skim, jump, and orient themselves.

**Common failures:**

- text styled to look like a heading but using `<div>` or `<span>` instead of `<h1>`–`<h6>`
- data presented in a grid layout but not using `<table>`, `<th>`, and `<td>`
- form fields grouped visually but missing `<fieldset>` and `<legend>`
- navigation and content areas without landmark roles (`<nav>`, `<main>`, `<aside>`)

**How to fix:**

- use native semantic elements for headings, lists, tables, and form groups
- add ARIA landmarks only when native elements are not available
- verify heading levels follow a logical nesting order without skipping levels
- test with a screen reader to confirm the announced structure matches the visual layout

---

## Orientation (1.3.4)

**WCAG:** [1.3.4 (AA)](https://www.w3.org/WAI/WCAG22/Understanding/orientation.html)

**What it checks:** CSS or viewport meta configurations that lock the page to a single orientation, preventing users from rotating their device.

**Why it matters:** Users with motor disabilities may mount their device in a fixed orientation. Users with low vision may prefer landscape for wider text columns. Locking orientation can make content inaccessible or uncomfortable to use.

**Common failures:**

- CSS `@media (orientation: portrait)` rules that hide or break content in landscape
- JavaScript that forces a redirect or overlay when the device is rotated
- viewport meta tags that disable user scaling combined with fixed-orientation assumptions

**How to fix:**

- support both portrait and landscape orientations through responsive design
- remove JavaScript orientation locks unless the content genuinely requires a specific orientation (e.g., a piano keyboard app)
- test the layout in both orientations on real devices
- if a specific orientation is essential, clearly document why

---

## Use of Color (1.4.1)

**WCAG:** [1.4.1 (A)](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html)

**What it checks:** Instances where meaning is communicated exclusively through color without a secondary visual indicator such as text, icons, patterns, or underlines.

**Why it matters:** Users with color-vision deficiency, low vision, or monochrome displays cannot distinguish elements when the only differentiator is color. Adding a secondary cue ensures everyone perceives the intended meaning.

**Common failures:**

- required form fields marked only with red text
- chart series differentiated only by color with no patterns or labels
- links within body text that are distinguished only by color (no underline or icon)
- status indicators (success/error) using only green/red with no text or icon

**How to fix:**

- pair color with a text label, icon, pattern, or border change
- underline links or add a visible icon to distinguish them from surrounding text
- use patterns, hatching, or data labels in charts alongside color
- test the interface with a color-blindness simulator to confirm the secondary cue is visible

---

## Reflow (1.4.10)

**WCAG:** [1.4.10 (AA)](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html)

**What it checks:** Content that causes horizontal scrolling at 320px viewport width (equivalent to 400% zoom on a 1280px desktop display).

**Why it matters:** Users with low vision who zoom to 400% or more should not have to scroll horizontally to read each line of text. Horizontal scrolling makes reading extremely difficult and slow.

**Common failures:**

- fixed-width layouts or containers that do not respond to viewport changes
- wide data tables presented as the primary reading content without a scrollable wrapper
- images or embedded media with fixed pixel widths that overflow the viewport
- multi-column layouts that do not collapse to a single column at narrow widths

**How to fix:**

- use responsive CSS (relative units, `max-width`, flexbox/grid) to allow single-column reflow
- wrap wide tables in a scrollable container so the rest of the page still reflows
- set images to `max-width: 100%` so they scale within their container
- test at 320px viewport width (or 400% zoom) and fix any horizontal overflow

---

## Non-text Contrast (1.4.11)

**WCAG:** [1.4.11 (AA)](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)

**What it checks:** The contrast of interactive component boundaries (input borders, button outlines, focus indicators) and meaningful graphical objects (icons, chart segments) against their backgrounds.

**Why it matters:** Users with low vision need sufficient contrast to perceive form field boundaries, button edges, icon shapes, and chart data. Without adequate contrast, these elements blend into the background and become invisible.

**Common failures:**

- input fields with light gray borders on a white background (below 3:1)
- icon-only buttons where the icon color is too close to the background
- chart segments that rely on low-contrast color fills to convey data
- focus indicators with insufficient contrast against the surrounding area

**How to fix:**

- ensure input and button borders meet the 3:1 ratio against adjacent background colors
- verify icon contrast against both light and dark backgrounds
- add borders or patterns to chart segments alongside color fills
- test all interactive states (default, hover, focus, active) for contrast compliance

---

## Text Spacing (1.4.12)

**WCAG:** [1.4.12 (AA)](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html)

**What it checks:** Content is clipped, truncated, or overlapping when text spacing is increased to WCAG-specified thresholds: line height 1.5x font size, paragraph spacing 2x font size, letter spacing 0.12x font size, word spacing 0.16x font size.

**Why it matters:** Users with dyslexia and other reading disabilities use custom text spacing to improve readability. If a page clips or overlaps text when spacing is increased, those users lose access to the content.

**Common failures:**

- fixed-height containers that clip text when line height increases
- `overflow: hidden` on text containers that truncates content with increased spacing
- absolutely positioned labels that overlap adjacent content when letter spacing grows
- tooltip or badge text that overflows its container

**How to fix:**

- avoid fixed heights on text containers; use `min-height` or auto-height
- do not use `overflow: hidden` on elements that contain user-facing text
- test with a text-spacing bookmarklet that applies the WCAG thresholds
- ensure layouts flex and reflow when text occupies more space

---

## Audio Control (1.4.2)

**WCAG:** [1.4.2 (A)](https://www.w3.org/WAI/WCAG22/Understanding/audio-control.html)

**What it checks:** Pages where audio or video with sound starts automatically and runs beyond three seconds without an accessible pause or volume control.

**Why it matters:** Screen-reader users hear both the assistive technology output and the page audio simultaneously. Autoplaying audio can drown out the screen reader, making the page unusable until the user can locate and silence the media.

**Common failures:**

- background music or ambient audio that starts on page load with no pause button
- video banners set to autoplay with sound enabled
- audio players that autoplay and are positioned below the fold, requiring scroll to reach controls

**How to fix:**

- never autoplay audio; if autoplay is required, start muted and let the user opt in
- provide a visible, keyboard-accessible pause or mute control near the top of the page
- ensure the control is the first or one of the first focusable elements so screen-reader users reach it quickly

---

## Contrast (Minimum) (1.4.3)

**WCAG:** [1.4.3 (AA)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)

**What it checks:** Text and important UI elements meet the minimum contrast requirements needed for readable, usable interfaces.

**Why it matters:** Low contrast makes content difficult to read for users with low vision, color-vision differences, or difficult viewing conditions.

**Common failures:**

- light gray text on a white background
- status text that uses color with weak contrast
- disabled-looking controls that are still interactive

**How to fix:**

- increase the contrast between foreground and background colors
- verify contrast after hover, focus, and active-state styling is applied
- avoid relying on color tokens that look correct in one theme but fail in another

---

## Keyboard (2.1.1)

**WCAG:** [2.1.1 (A)](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html)

**What it checks:** Interactive elements (links, buttons, form controls, and custom widgets) are reachable and operable using keyboard alone: Tab, Shift+Tab, Enter, Space, and arrow keys as appropriate.

**Why it matters:** Users who cannot use a mouse, including people who rely on switch devices, voice control, or screen readers, depend entirely on keyboard access. If a control cannot be reached or activated by keyboard, those users are blocked.

**Common failures:**

- custom dropdowns or modals that respond only to mouse clicks
- drag-and-drop interfaces with no keyboard alternative
- `<div>` or `<span>` elements used as buttons without `tabindex` or keyboard event handlers
- interactive components that require hover to reveal sub-menus

**How to fix:**

- use native interactive elements (`<button>`, `<a>`, `<select>`) whenever possible
- add `tabindex="0"` and keyboard event listeners to custom interactive widgets
- provide keyboard-equivalent actions for drag-and-drop, swipe, and hover interactions
- test the entire flow using only the keyboard (Tab, Enter, Space, Escape, arrows)

---

## No Keyboard Trap (2.1.2)

**WCAG:** [2.1.2 (A)](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html)

**What it checks:** For components that capture keyboard focus and prevent the user from tabbing or escaping out using standard keys.

**Why it matters:** A keyboard trap strands users inside a component with no way to continue navigating the page. This is one of the most severe accessibility barriers because it renders everything outside the trap completely unreachable.

**Common failures:**

- modal dialogs that do not return focus on close or lack an Escape key handler
- embedded media players or third-party widgets that consume all key events
- custom rich-text editors that intercept Tab without an exit mechanism
- infinite tab loops inside components with no documented exit key

**How to fix:**

- ensure Escape closes modals and returns focus to the trigger element
- implement focus trapping in modals correctly: trap while open, release on close
- allow Tab to exit custom editors (provide a documented key combination or a skip link)
- test by tabbing into and then out of every interactive region on the page

---

## Character Key Shortcuts (2.1.4)

**WCAG:** [2.1.4 (A)](https://www.w3.org/WAI/WCAG22/Understanding/character-key-shortcuts.html)

**What it checks:** Keyboard shortcuts bound to single character keys that are active globally on the page rather than scoped to a focused component.

**Why it matters:** Voice-input users dictate text that produces character keystrokes. If a page binds actions to single letters (e.g., pressing "s" to search), voice dictation can accidentally trigger those shortcuts, causing unexpected behavior.

**Common failures:**

- global shortcuts like "s" for search, "j/k" for navigation, or "?" for help
- single-character shortcuts that remain active even when focus is inside a text field
- shortcuts documented only in a help modal, with no way to disable or remap them

**How to fix:**

- require a modifier key (Ctrl, Alt, Shift) for global shortcuts
- scope single-character shortcuts so they only work when the relevant component is focused
- provide a settings UI to disable or remap character shortcuts
- if modifier keys are not feasible, ensure the shortcut deactivates when a text input has focus

---

## Timing Adjustable (2.2.1)

**WCAG:** [2.2.1 (A)](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable.html)

**What it checks:** Session timeouts, auto-redirects, and auto-updating content that impose a fixed time limit without user control.

**Why it matters:** Users with cognitive disabilities, motor impairments, or users who rely on assistive technology often need more time to read, understand, and interact with content. Unexpected timeouts can cause data loss and frustration.

**Common failures:**

- session timeouts that log the user out without warning or extension options
- auto-advancing carousels or slideshows with no pause control
- form pages that expire and discard input after a fixed duration
- auto-refreshing dashboards that interrupt screen-reader output

**How to fix:**

- provide a warning at least 20 seconds before a timeout and allow the user to extend it
- allow users to disable or increase time limits in account or session settings
- add pause, stop, and resume controls to auto-advancing content
- for real-time exceptions (auctions, live events), clearly document the constraint

---

## Pause, Stop, Hide (2.2.2)

**WCAG:** [2.2.2 (A)](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html)

**What it checks:** Animations, auto-scrolling regions, and auto-updating feeds that run for more than five seconds without user controls.

**Why it matters:** Motion on screen can be distracting or physically harmful for users with attention disorders, vestibular conditions, or cognitive disabilities. Continuous updates can also interfere with screen-reader announcements.

**Common failures:**

- auto-scrolling news tickers or marquees with no pause button
- animated hero banners that loop indefinitely
- live data feeds that push updates into the DOM without user consent
- background video that plays continuously with no stop control

**How to fix:**

- add visible pause, stop, or hide controls for any auto-moving content
- respect the `prefers-reduced-motion` media query to minimize or remove animation
- for live feeds, allow the user to opt in to updates rather than pushing them automatically
- ensure controls are keyboard accessible and announced by screen readers

---

## Three Flashes or Below Threshold (2.3.1)

**WCAG:** [2.3.1 (A)](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html)

**What it checks:** Content that produces rapid flashing (more than three flashes per second) in a large enough area to exceed safety thresholds.

**Why it matters:** Rapid flashing can trigger seizures in people with photosensitive epilepsy. This is a critical safety requirement, not just a usability concern.

**Common failures:**

- animated GIFs or videos with rapid light-to-dark transitions
- strobe effects in promotional content or loading animations
- rapid color cycling in game-like or interactive elements
- auto-playing video ads with flashing transitions

**How to fix:**

- limit flashing to three or fewer per second in any region of the page
- use the Photosensitive Epilepsy Analysis Tool (PEAT) to test video and animation content
- provide a warning before content that contains known flashing and allow the user to skip it
- respect `prefers-reduced-motion` to suppress flashing animations

---

## Bypass Blocks (2.4.1)

**WCAG:** [2.4.1 (A)](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html)

**What it checks:** Verifies the presence of skip-navigation links, landmark regions, or heading structures that allow users to bypass repeated content and jump directly to the main content area.

**Why it matters:** Keyboard and screen-reader users must tab or listen through every repeated element on every page load. Without a bypass mechanism, navigating a site becomes extremely tedious and time-consuming.

**Common failures:**

- no "skip to main content" link at the top of the page
- missing `<main>` landmark so screen readers cannot jump to primary content
- skip links that exist in the DOM but are permanently hidden and never become visible on focus
- pages with no heading structure, removing another way to skip ahead

**How to fix:**

- add a "Skip to main content" link as the first focusable element, visible on focus
- use `<main>` to wrap primary content and `<nav>` for navigation blocks
- ensure heading levels provide meaningful structure users can navigate by
- test by pressing Tab immediately after page load to confirm the skip link appears and works

---

## Focus Not Obscured (Minimum) (2.4.11)

**WCAG:** [2.4.11 (AA)](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html)

**What it checks:** Focused elements are not fully concealed behind sticky navigation bars, cookie banners, chat widgets, or other fixed-position elements.

**Why it matters:** Keyboard users need to see which element has focus to understand where they are on the page. If the focused element is hidden behind a sticky header or modal backdrop, the user loses orientation and cannot confirm their next action.

**Common failures:**

- focused items scrolled behind a sticky navigation header
- cookie consent banners that cover the bottom of the viewport where focused elements appear
- chat widgets or help bubbles that overlay interactive elements
- modal backdrops that remain visible and cover page content behind them

**How to fix:**

- add scroll padding (e.g., `scroll-padding-top`) to account for sticky header height
- ensure cookie banners and chat widgets do not overlap focusable page content
- implement `scrollIntoView` with appropriate offsets when managing focus programmatically
- test by tabbing through the entire page and confirming every focused element is at least partially visible

---

## Page Titled (2.4.2)

**WCAG:** [2.4.2 (A)](https://www.w3.org/WAI/WCAG22/Understanding/page-titled.html)

**What it checks:** Each page has a non-empty `<title>` element and that the title text meaningfully describes the page content.

**Why it matters:** The page title is the first thing a screen reader announces when a page loads. It also appears in browser tabs, bookmarks, and search results. A missing or generic title forces users to explore the page to understand where they are.

**Common failures:**

- pages with an empty `<title>` element
- all pages sharing the same generic title like "Home" or the site name
- SPA routes that do not update the document title when the view changes
- titles that describe the site but not the specific page (e.g., "Acme Corp" on every page)

**How to fix:**

- write titles in the format "Page Purpose - Site Name" (e.g., "Order History - Acme Store")
- update `document.title` on route changes in single-page applications
- include key differentiators when pages are similar (e.g., "Edit Profile" vs. "View Profile")
- keep titles concise but specific enough to identify the page without seeing it

---

## Focus Order (2.4.3)

**WCAG:** [2.4.3 (A)](https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html)

**What it checks:** The tab order of interactive elements follows a logical reading sequence and does not jump unexpectedly between unrelated sections.

**Why it matters:** Keyboard users experience a page as a linear sequence of focusable elements. An illogical focus order makes it difficult to understand context, complete multi-step forms, or predict where focus will move next.

**Common failures:**

- positive `tabindex` values that override the natural DOM order
- visually reordered layouts (CSS Grid/Flexbox `order`) where DOM order does not match visual order
- dynamically injected content that receives focus before the user reaches the trigger
- modals or drawers that do not move focus into themselves on open

**How to fix:**

- rely on DOM source order rather than positive `tabindex` values
- ensure CSS visual reordering matches the underlying DOM sequence
- move focus into modals, dialogs, and drawers when they open, and return it when they close
- test with keyboard-only navigation to confirm the sequence feels natural

---

## Link Purpose in Context (2.4.4)

**WCAG:** [2.4.4 (A)](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html)

**What it checks:** Links whose text is generic (e.g., "click here", "read more", "learn more") without surrounding context that clarifies the destination or action.

**Why it matters:** Screen-reader users often navigate by listing all links on a page. If every link says "Read more," the list is useless. Clear link text lets users decide which link to follow without reading the surrounding paragraph.

**Common failures:**

- repeated "Click here" or "Read more" links across a page
- links that use a URL as the visible link text
- icon-only links (e.g., a pencil icon) with no accessible name
- links whose purpose changes based on visual position but whose text is identical

**How to fix:**

- write link text that describes the destination or action (e.g., "View order #1234" instead of "Click here")
- use `aria-label` or `aria-labelledby` to provide context when the visible text must remain short
- add `aria-label` to icon-only links that describes the action
- when multiple links share text, add visually hidden context (e.g., "Read more about pricing")

---

## Focus Visible (2.4.7)

**WCAG:** [2.4.7 (AA)](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html)

**What it checks:** Users can see where keyboard focus currently is as they move through interactive elements.

**Why it matters:** Without a visible focus state, keyboard users can lose track of where they are on the page and may be unable to complete key tasks.

**Common failures:**

- focus outlines removed without a replacement style
- custom components with hidden or clipped focus styling
- insufficient contrast between the focus ring and surrounding UI

**How to fix:**

- keep the default focus indicator or replace it with an equally visible custom style
- test focus styling on links, buttons, form fields, menus, and dialogs
- verify focus visibility in light and dark themes

---

## Pointer Gestures (2.5.1)

**WCAG:** [2.5.1 (A)](https://www.w3.org/WAI/WCAG22/Understanding/pointer-gestures.html)

**What it checks:** Interactions that require multi-touch gestures (pinch, two-finger swipe) or precise path-based gestures (drawing a shape, swiping in a specific direction) without a single-click or single-tap alternative.

**Why it matters:** Users with motor disabilities may not be able to perform multi-finger gestures or trace precise paths. Providing a single-pointer alternative ensures these users can still access the functionality.

**Common failures:**

- pinch-to-zoom as the only way to resize a map or image (no +/- buttons)
- swipe-to-delete with no alternative button or menu option
- drawing-based interactions (signatures, annotations) with no keyboard or button fallback
- two-finger scroll required to navigate within an embedded region

**How to fix:**

- add button controls for zoom, pan, and delete alongside gesture support
- provide single-tap or single-click alternatives for every multi-point gesture
- for path-based input, offer an alternative method (e.g., typed input, button sequences)
- test with a single mouse click/tap only to confirm all features remain accessible

---

## Pointer Cancellation (2.5.2)

**WCAG:** [2.5.2 (A)](https://www.w3.org/WAI/WCAG22/Understanding/pointer-cancellation.html)

**What it checks:** Interactive elements do not fire irreversible actions on `mousedown` or `touchstart` alone, allowing users to abort by moving the pointer away before releasing.

**Why it matters:** Users with motor impairments frequently trigger accidental clicks. Firing on the up-event (click/mouseup/touchend) allows them to move the pointer off the target before releasing, cancelling the action.

**Common failures:**

- destructive actions (delete, submit, purchase) triggered on `mousedown`
- drag-and-drop that commits on `pointerdown` with no undo
- custom buttons that respond to `touchstart` instead of `click`

**How to fix:**

- use `click` events rather than `mousedown` or `touchstart` for actions
- if down-event activation is needed, provide an undo or confirmation step
- implement drag cancellation by allowing users to drop outside the target zone
- test by pressing down on a button, dragging away, and releasing to confirm no action occurs

---

## Label in Name (2.5.3)

**WCAG:** [2.5.3 (A)](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html)

**What it checks:** Compares the visible label text with the computed accessible name and flags mismatches where the visible text is not included in the accessible name.

**Why it matters:** Voice-input users say "click [visible label]" to interact with controls. If the accessible name differs from the visible label, the voice command fails and the user cannot activate the control.

**Common failures:**

- a button that shows "Submit" visually but has `aria-label="Send form data"`
- an input labeled "Email" visually but `aria-labelledby` points to a hidden element with different text
- icon buttons with visible tooltip text that does not match the `aria-label`

**How to fix:**

- ensure the accessible name starts with or contains the visible label text
- prefer visible `<label>` elements over `aria-label` when visible text is available
- when `aria-label` is needed, include the visible text within it (e.g., `aria-label="Submit order form"` for a button labeled "Submit")
- test with voice-input software to confirm controls can be activated by speaking their visible label

---

## Motion Actuation (2.5.4)

**WCAG:** [2.5.4 (A)](https://www.w3.org/WAI/WCAG22/Understanding/motion-actuation.html)

**What it checks:** Interactions driven by device sensors (accelerometer, gyroscope, camera) that do not offer an alternative button or control and cannot be disabled.

**Why it matters:** Users who have their device mounted in a fixed position, users with tremors, or users who cannot perform specific physical motions need an alternative way to trigger the same functionality.

**Common failures:**

- "shake to undo" with no on-screen undo button
- tilt-to-scroll with no scroll controls or keyboard alternative
- camera-based gesture recognition with no button fallback

**How to fix:**

- provide an on-screen button or control for every motion-triggered action
- allow users to disable motion-based activation in settings
- if motion is essential to the functionality (e.g., a step counter), document the exception
- test with the device in a fixed position to confirm all functionality is reachable through UI controls

---

## Dragging Movements (2.5.7)

**WCAG:** [2.5.7 (AA)](https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html)

**What it checks:** Drag-and-drop interactions, slider controls, and reorderable lists that do not offer an alternative single-click or keyboard-based method.

**Why it matters:** Users with motor disabilities may not be able to hold a pointer button while moving the cursor. A single-pointer alternative (click source, click target) or keyboard method ensures these users can still accomplish the task.

**Common failures:**

- kanban boards that require drag-and-drop to move cards between columns
- sliders that can only be adjusted by dragging the thumb
- file upload areas that only accept drag-and-drop with no browse button
- sortable lists with no move-up/move-down buttons

**How to fix:**

- add move-up/move-down buttons or a "Move to" menu for reorderable lists
- support click-on-source then click-on-destination as an alternative to drag-and-drop
- ensure sliders can be adjusted with arrow keys, or provide a text input alternative
- always include a file browse button alongside drag-and-drop upload zones

---

## Target Size (Minimum) (2.5.8)

**WCAG:** [2.5.8 (AA)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)

**What it checks:** Measures the rendered size of interactive elements (buttons, links, form controls) and flags those smaller than 24x24 CSS pixels that do not meet any exception criteria.

**Why it matters:** Users with motor impairments, tremors, or limited dexterity need adequately sized targets to tap or click accurately. Small targets lead to frequent mis-taps and frustration.

**Common failures:**

- icon buttons (close, favorite, share) rendered at 16x16 pixels with no padding
- densely packed toolbar buttons with no spacing between them
- small checkbox or radio button hit areas that rely on the browser default size
- action links in compact table rows with minimal padding

**How to fix:**

- ensure clickable areas are at least 24x24 CSS pixels (44x44 is recommended for touch interfaces)
- add padding or transparent borders to increase the hit area without changing the visual size
- use `min-width` and `min-height` on interactive elements
- increase spacing between adjacent small targets so users can tap accurately

---

## On Focus (3.2.1)

**WCAG:** [3.2.1 (A)](https://www.w3.org/WAI/WCAG22/Understanding/on-focus.html)

**What it checks:** Elements that initiate a context change (navigation, submit, new window) when they receive keyboard focus rather than when they are explicitly activated.

**Why it matters:** Keyboard and screen-reader users move focus to explore the page before deciding to act. If focus alone triggers an action, users lose control and may be taken to an unexpected page or state.

**Common failures:**

- dropdown selects that navigate to a new page as soon as an option receives focus
- links or buttons that auto-submit a form on focus
- components that open a new browser window or tab when tabbed into

**How to fix:**

- trigger context changes only on explicit activation (click, Enter, Space)
- for select menus that act as navigation, add a separate "Go" button
- never attach `onfocus` handlers that cause navigation, submission, or window changes
- test by tabbing through all interactive elements without pressing Enter

---

## On Input (3.2.2)

**WCAG:** [3.2.2 (A)](https://www.w3.org/WAI/WCAG22/Understanding/on-input.html)

**What it checks:** Form controls that trigger navigation, submission, or DOM restructuring on value change without prior notice to the user.

**Why it matters:** Users expect to review and confirm their choices before committing. Automatic context changes on input can disorient screen-reader users and cause data loss for users who accidentally select the wrong option.

**Common failures:**

- radio buttons that submit a form or navigate to a new page on selection
- checkboxes that reload the page when toggled
- text fields that trigger search navigation on every keystroke without warning
- dropdown menus that navigate immediately on selection without a submit action

**How to fix:**

- separate the selection action from the submission action (add a "Submit" or "Apply" button)
- if auto-submission is intentional, inform the user in advance (e.g., "Selecting a value will update the page")
- use ARIA live regions to announce dynamic content changes without a full context switch
- test all form controls by changing values and confirming no unexpected navigation occurs

---

## Consistent Help (3.2.6)

**WCAG:** [3.2.6 (A)](https://www.w3.org/WAI/WCAG22/Understanding/consistent-help.html)

**What it checks:** Help-related UI elements maintain consistent placement and ordering across pages within the same site.

**Why it matters:** Users with cognitive disabilities rely on predictable patterns to find help. If a help link or chat button moves to a different position on every page, users must search for it each time, increasing cognitive load and frustration.

**Common failures:**

- a "Contact Support" link in the footer on some pages and in the header on others
- a help chat widget that appears on the right on some pages and the left on others
- FAQ links included on product pages but missing from checkout pages
- help navigation items in a different order across different sections of the site

**How to fix:**

- place help mechanisms in the same relative position across all pages (e.g., always last in the footer)
- use a shared layout component to ensure consistent ordering automatically
- if multiple help options exist, keep their order fixed (e.g., FAQ, then Chat, then Email)
- audit help element placement across page templates to confirm consistency

---

## Error Identification (3.3.1)

**WCAG:** [3.3.1 (A)](https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html)

**What it checks:** Form validation errors are communicated through visible text messages associated with the relevant field, not only through color or icon changes.

**Why it matters:** Users who cannot perceive color, see icons, or understand positional cues need explicit text to know which field has an error and what the error is. Without text, they cannot correct the problem.

**Common failures:**

- form fields highlighted in red with no error message text
- a generic "There are errors on this page" banner with no indication of which fields need attention
- error messages displayed visually but not programmatically associated with the field (no `aria-describedby`)
- inline validation that clears the message before the screen reader can announce it

**How to fix:**

- display a text error message adjacent to or within the erroneous field
- associate the error message with the field using `aria-describedby` or `aria-errormessage`
- set `aria-invalid="true"` on the field when an error is detected
- move focus to the first error or provide a summary with links to each erroneous field

---

## Labels or Instructions (3.3.2)

**WCAG:** [3.3.2 (A)](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html)

**What it checks:** Form inputs have visible labels programmatically associated with the control, and that fields requiring specific formats include instructions.

**Why it matters:** Without labels, screen-reader users hear only "edit text" or "combo box" with no indication of what information is expected. Sighted users benefit from persistent labels too, especially when revisiting a partially completed form.

**Common failures:**

- input fields that rely on placeholder text as the only label (disappears on focus)
- labels that exist visually but are not associated with the input (`for`/`id` mismatch)
- date or phone fields with no format hint (e.g., "MM/DD/YYYY")
- groups of related fields (address, payment) with no group label or `<fieldset>`

**How to fix:**

- add a visible `<label>` element with a matching `for` attribute for every form control
- include format instructions or examples near the field (e.g., "Enter date as MM/DD/YYYY")
- use `<fieldset>` and `<legend>` for logically grouped fields
- never use placeholder as a substitute for a visible label

---

## Redundant Entry (3.3.7)

**WCAG:** [3.3.7 (A)](https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry.html)

**What it checks:** Multi-step flows where users are asked to re-enter information they have already provided in a previous step (e.g., name, address, email) without auto-fill or a selection option.

**Why it matters:** Re-entering the same information is difficult for users with cognitive disabilities, motor impairments, or short-term memory challenges. It increases error rates and abandonment in multi-step workflows.

**Common failures:**

- checkout forms that ask for the shipping address and then require the billing address to be typed again from scratch
- multi-page forms that do not pre-fill fields from earlier pages
- account creation flows that ask for the email on step 1 and again on step 3
- support ticket forms that require re-entering contact details already available from the user profile

**How to fix:**

- auto-populate fields with information provided in earlier steps of the same process
- offer a "same as shipping" checkbox for billing address forms
- use session storage or form state management to carry data across steps
- if security requires re-entry (e.g., password confirmation), document the exception

---

## Accessible Authentication (Minimum) (3.3.8)

**WCAG:** [3.3.8 (AA)](https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum.html)

**What it checks:** Login flows that rely solely on cognitive challenges (CAPTCHAs, image puzzles, memory-based knowledge questions) without offering an accessible alternative.

**Why it matters:** Users with cognitive disabilities may not be able to solve puzzles, remember complex passwords, or complete CAPTCHAs. Authentication barriers lock these users out of services entirely.

**Common failures:**

- image-based CAPTCHAs with no audio or alternative verification option
- security questions that rely on memory ("What was your first pet's name?")
- login flows that block password managers from auto-filling credentials
- two-factor authentication that requires memorizing a code without allowing paste

**How to fix:**

- allow password managers to auto-fill login fields (do not use `autocomplete="off"` on authentication fields)
- provide an accessible CAPTCHA alternative (audio CAPTCHA, email verification, or WebAuthn)
- support passwordless authentication (magic links, biometrics, passkeys)
- allow pasting into verification code fields for users who receive codes via email or authenticator apps

---

## Parsing (4.1.1)

**WCAG:** [4.1.1 (A)](https://www.w3.org/WAI/WCAG22/Understanding/parsing.html)

**What it checks:** Validates HTML for duplicate IDs, malformed nesting, unclosed elements, and duplicate attributes that could confuse assistive technology parsers.

**Why it matters:** Duplicate IDs break `aria-labelledby`, `aria-describedby`, and `<label for>` associations, causing assistive technology to reference the wrong element. Malformed markup can also cause screen readers to skip or misinterpret content.

**Common failures:**

- multiple elements sharing the same `id` attribute
- unclosed `<div>`, `<span>`, or `<li>` elements that shift the DOM tree
- duplicate attributes on the same element
- improperly nested interactive elements (e.g., `<a>` inside `<button>`)

**How to fix:**

- run an HTML validator to catch structural issues
- ensure every `id` is unique within the page
- fix unclosed or misnested elements
- avoid nesting interactive elements inside each other

---

## Name, Role, Value (4.1.2)

**WCAG:** [4.1.2 (A)](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)

**What it checks:** Interactive elements have an accessible name, an appropriate ARIA or native role, and that state changes (expanded, checked, selected, disabled) are communicated programmatically.

**Why it matters:** Assistive technologies rely on the accessibility tree to describe controls to users. If a custom widget lacks a role, name, or state information, screen-reader users cannot tell what the control is, what it does, or what state it is in.

**Common failures:**

- custom toggle switches built with `<div>` that have no `role="switch"` or `aria-checked`
- accordion headers that do not expose `aria-expanded`
- custom dropdowns that do not announce the selected value
- buttons with no accessible name (empty text, no `aria-label`)

**How to fix:**

- use native HTML elements whenever possible (`<button>`, `<input>`, `<select>`)
- for custom widgets, add the appropriate ARIA role and maintain state attributes (`aria-expanded`, `aria-checked`, `aria-selected`)
- ensure every interactive element has an accessible name through visible text, `aria-label`, or `aria-labelledby`
- update ARIA states dynamically when the user interacts with the control

---

## Status Messages (4.1.3)

**WCAG:** [4.1.3 (AA)](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html)

**What it checks:** Dynamic status messages use ARIA live regions (`role="status"`, `role="alert"`, `aria-live`) so screen readers announce them without moving focus away from the current task.

**Why it matters:** Sighted users see toast notifications, search result counts, and progress indicators update on screen. Screen-reader users miss these updates entirely unless the content is announced through a live region.

**Common failures:**

- "3 results found" text appears on screen after a search but is not in a live region
- success/error banners injected into the DOM without `role="alert"` or `role="status"`
- loading spinners with no text announcement for screen readers
- cart item count updates that are only visual

**How to fix:**

- use `role="status"` for non-urgent updates (result counts, save confirmations)
- use `role="alert"` for urgent messages (errors, warnings)
- ensure the live region exists in the DOM before the content is injected (add content to an existing container rather than injecting the container)
- avoid overusing alerts, since frequent announcements interrupt the user's workflow

---
