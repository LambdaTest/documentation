---
id: screen-reader-on-accessibility
title: Test With Screen Readers and Assistive Technologies
sidebar_label: Test With Assistive Technologies
description: Test your app's accessibility with TestMu AI's Screen Reader as per the WCAG standards.
keywords:
  - screen reader
  - framework on testmu ai
  - accessibility
url: https://www.testmuai.com/support/docs/screen-reader-on-accessibility/
site_name: TestMu AI
slug: screen-reader-on-accessibility/
canonical: https://www.testmuai.com/support/docs/screen-reader-on-accessibility/
toc_max_heading_level: 2
hide_title: true
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


# Test With Screen Readers and Assistive Technologies

---

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
          "name": "Screen Reader on Accessibility",
          "item": `${BRAND_URL}/support/docs/screen-reader-on-accessibility/`
        }]
      })
    }}
></script>
A Screen Reader is an assistive technology tool that converts digital content on screens into audio output or Braille for users with visual impairments. More than a simple text-to-speech tool, it acts as a comprehensive digital interpreter, transforming complex visual interfaces into navigable auditory or tactile experiences. It helps users with visual disabilities to interact with digital content with unprecedented independence and depth.

## Why Do We Need Screen Readers?
Screen readers are essential for making digital environments accessible to visually impaired users. It helps to:

- **Enhance Inclusivity :** Users with visual disabilities can access and interact with websites, applications, and digital content.
- **Support Compliance :** Ensure adherence to accessibility standards like WCAG (Web Content Accessibility Guidelines) and legal regulations such as ADA (Americans with Disabilities Act) or Section 508.
- **Improve Usability :** Highlight areas where the user experience can be improved for all users, not just those with visual impairments.
- **Boost Engagement :** Make websites and applications more usable for a diverse audience, improving user satisfaction and reach.

## Screen Reader Support in TestMu AI Accessibility Testing
TestMu AI supports the following screen readers during Accessibility Testing, so developers and testers can evaluate how well their applications or websites perform for visually impaired users and confirm accessibility compliance and usability. Pick the path that matches the platform you test on.

| If you test on… | Start here |
|------------------|------------|
| Windows desktop web | [NVDA on Windows](#nvda-on-windows) (free, common) or [JAWS on Windows](#jaws-on-windows) (enterprise) |
| macOS desktop web | [VoiceOver on macOS](#voiceover-on-macos) |
| Android app or web | [TalkBack on Android](#talkback-on-android) (often paired with [App Scanner](/support/docs/accessibility-app-scanner/)) |

For the best coverage, run an automated or DevTools scan first (start with a [DevTools Keyboard Scan](/support/docs/accessibility-devtools/#keyboard-scan/) to catch focus-order gaps), export the top issues, then walk the same URLs with a screen reader to confirm real-world impact before filing engineering bugs. The sections below walk each screen reader end to end in that order.

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/images/accessibility-testing/screen-reader/output.mp4').default} type="video/mp4" />
</video>

## NVDA on Windows

Reach for NVDA on Windows when you want to understand how screen-reader users experience page structure, labels, navigation, and interactive controls in desktop web workflows. It is the Windows-specific reference for validating web accessibility after DevTools scans, automation, or scheduling.

Follow these steps to install NVDA and start a working session:

1. Download **NVDA** from the <a href="https://www.nvaccess.org/" rel="nofollow">NV Access download page</a> and install on Windows 10/11. **Expected result:** NVDA appears in the Start menu and the system tray.
2. Start NVDA with **Ctrl + Alt + N** (default) or from the Start menu. **Expected result:** NVDA plays a start sound and begins announcing the focused item.
3. Learn **single-key navigation**: `H` headings, `F` form fields, `B` buttons, `K` links (NVDA browse mode). **Expected result:** each key jumps focus to the next element of that type and NVDA speaks it.
4. Open your target URL in **Chrome or Edge** (match what you scan in Accessibility Automation). **Expected result:** NVDA announces the page title as the tab loads.
5. Use **Tab / Shift+Tab** to follow focus order; listen for **name, role, and state** announcements. **Expected result:** every focusable control speaks a sensible name and role in visual order.
6. Toggle **speech viewer** (NVDA menu → Tools) if you need to capture text for bug tickets. **Expected result:** a window mirrors spoken output as copyable text.

As you navigate, validate:

- page titles and headings
- link and button names
- form labels and instructions
- focus order and keyboard navigation
- state announcements for dynamic UI

For a focused first pass, run this 30-minute session:

| Step | Action |
|------|--------|
| 1 | Open homepage; confirm title and landmark announcements. |
| 2 | Tab through primary nav; every focusable control should speak a sensible name. |
| 3 | Open a form; each control should expose label + instructions + errors. |
| 4 | Trigger a live region or toast; confirm polite/assertive behavior matches design. |

## VoiceOver on macOS

Use VoiceOver on macOS when your team needs to understand how desktop macOS users experience navigation, labels, landmarks, and interactive content. It is the macOS-specific reference for validating **Safari** or **Chrome** experiences after automated Accessibility findings.

Follow these steps to enable VoiceOver and browse the web:

1. Open **System Settings → Accessibility → VoiceOver** (names vary slightly by macOS version) and turn VoiceOver **On**, or press **Command + F5**. **Expected result:** VoiceOver announces "VoiceOver on" and a focus cursor appears on screen.
2. Accept the quick-start tutorial the first time. It teaches the **VO** modifier (Control + Option by default). **Expected result:** you can trigger commands with the VO keys without errors.
3. Open **Safari**, load your URL, and use **VO + Right Arrow** to move by rotor setting (start with **DOM** or **auto** mode for web). **Expected result:** the cursor advances element by element and VoiceOver speaks each item.
4. Practice the **rotor** (VO + U) to jump by headings, links, or form controls. **Expected result:** the rotor lists items by category so you can jump directly to a target.
5. Use **Tab** and **Shift+Tab** alongside VoiceOver to confirm focus order matches visual order. **Expected result:** keyboard focus and the VoiceOver cursor follow the same, logical sequence.

As you navigate, validate:

- heading and landmark structure
- control names and hints
- form labels and error messaging
- keyboard and screen-reader navigation consistency

For a quick pass, run this 20-minute smoke checklist:

| Step | Action |
|------|--------|
| 1 | Landmarks: VO + U → Landmarks; ensure main/nav are sensible. |
| 2 | Headings: navigate by headings; levels should not skip arbitrarily. |
| 3 | Buttons/links: every interactive element speaks a name (not just "button"). |
| 4 | Forms: errors associate with fields; required state is announced. |

## JAWS on Windows

Turn to JAWS when your accessibility program standardizes on Freedom Scientific tooling alongside or instead of NVDA, and you need to validate important desktop screen-reader flows on Windows and compare behavior across assistive technologies. It is the Windows-specific reference for JAWS-based validation.

Follow these steps to start a productive session:

1. Launch **JAWS** before the browser if your IT policy requires it; otherwise JAWS attaches to the active window. **Expected result:** JAWS starts speaking and its title appears in the running-apps list.
2. Open **Chrome or Edge** (match your automated scan browsers where possible). **Expected result:** JAWS announces the page title and enters the virtual cursor for web content.
3. Press **Insert + Space** to enter **Forms mode** when interacting with native controls, and return to virtual cursor for reading-heavy pages (JAWS announces mode changes). **Expected result:** JAWS speaks "Forms mode on" and keystrokes reach the control.
4. Use **Insert + F6** for headings list, **Insert + F7** for links list, fast ways to audit IA after a scan. **Expected result:** a dialog lists every heading or link so you can jump straight to one.
5. Document findings with **speech history** (Insert + Space, then H) when filing bugs. **Expected result:** recent announcements appear as text you can copy into a ticket.

As you navigate, validate:

- screen-reader announcement quality
- control labels and state changes
- table, form, and dialog behavior
- keyboard-only task completion

To connect JAWS findings back to your Accessibility reports:

1. Open a completed scan in the [Accessibility reports dashboard](/support/docs/accessibility-testing-navigating-dashboard/), then pick the **top five** automated issues from the **[All Issues view](/support/docs/accessibility-testing-navigating-dashboard/#all-issues)**. **Expected result:** the five highest-priority findings are queued for manual confirmation.
2. Reproduce each with JAWS active; note whether the issue is **real-world blocking** or a false positive. **Expected result:** each finding is classified as blocking or non-blocking with JAWS evidence.
3. Update tickets with **JAWS-specific** notes (version, synthesizer) for engineering. **Expected result:** each engineering ticket carries reproducible screen-reader context.

## TalkBack on Android

Use TalkBack when validating **native or hybrid Android** experiences on mobile devices, especially for focus movement, labels, gestures, and control states after **App Scanner** or **Appium** accessibility runs.

Follow these steps to turn TalkBack on safely and start testing:

1. On the device, open **Settings → Accessibility → TalkBack** (path varies by OEM) and toggle **On**. **Expected result:** TalkBack confirms it is on and starts announcing the focused item.
2. Complete the **tutorial** gesture set (swipe right then up for default navigation) in a safe test build first. **Expected result:** you can move focus and activate items with TalkBack gestures reliably.
3. Enable **Developer options → Show layout bounds** only if your policy allows, helps compare focus rectangles with visuals. **Expected result:** on-screen bounds make it clear which element currently holds focus.
4. Open your app under test; swipe **right** to move to the next focusable element, **double-tap** to activate. **Expected result:** focus advances one control at a time and double-tap triggers the focused control.
5. Use **local context menu** (swipe up then right) to jump by headings or controls when available. **Expected result:** a menu lists navigation options so you can jump by element type.

As you navigate, validate:

- accessible labels on controls and media
- gesture and focus movement between interactive elements
- state changes for toggles, selections, and dynamic content
- screen-by-screen mobile usability

For structured coverage, pair this short manual matrix with App Scanner:

| Flow | TalkBack checks |
|------|-----------------|
| Onboarding | Each carousel slide exposes a name; buttons not only icons. |
| Forms | Error text is reachable and associated with fields. |
| Media | Video controls expose play/pause state. |

## Related docs

- [Accessibility Testing overview](/support/docs/accessibility-testing/)
- [Accessibility DevTools guide](/support/docs/accessibility-devtools/)
- [Accessibility issue remediation guide](/support/docs/accessibility-issue-remediation-guide/)
