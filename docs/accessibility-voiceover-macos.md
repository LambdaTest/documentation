---
id: accessibility-voiceover-macos
title: VoiceOver on macOS
sidebar_label: VoiceOver on macOS
description: VoiceOver on macOS for manual accessibility validation—turn on, rotor, web navigation, and checklist.
slug: accessibility-voiceover-macos/
url: https://www.testmuai.com/support/docs/accessibility-voiceover-macos/
site_name: TestMu AI
canonical: https://www.testmuai.com/support/docs/accessibility-voiceover-macos/
---

# VoiceOver on macOS

Use this page as the macOS-specific reference for **VoiceOver** when validating **Safari** or **Chrome** experiences after automated Accessibility findings.

## When to use this

Use VoiceOver on macOS when your team needs to understand how desktop macOS users experience navigation, labels, landmarks, and interactive content.

## Onboarding: enable VoiceOver and browse the web

1. Open **System Settings → Accessibility → VoiceOver** (names vary slightly by macOS version) and turn VoiceOver **On**, or press **Command + F5**.
2. Accept the quick-start tutorial the first time—it teaches the **VO** modifier (Control + Option by default).
3. Open **Safari**, load your URL, and use **VO + Right Arrow** to move by rotor setting (start with **DOM** or **auto** mode for web).
4. Practice the **rotor** (VO + U) to jump by headings, links, or form controls.
5. Use **Tab** and **Shift+Tab** alongside VoiceOver to confirm focus order matches visual order.

## What to validate

- heading and landmark structure
- control names and hints
- form labels and error messaging
- keyboard and screen-reader navigation consistency

## 20-minute smoke checklist

| Step | Action |
|------|--------|
| 1 | Landmarks: VO + U → Landmarks; ensure main/nav are sensible. |
| 2 | Headings: navigate by headings; levels should not skip arbitrarily. |
| 3 | Buttons/links: every interactive element speaks a name (not just “button”). |
| 4 | Forms: errors associate with fields; required state is announced. |

## Related docs

- [Screen Reader](/support/docs/screen-reader-on-accessibility/)
- [Accessibility DevTools (Overview)](/support/docs/accessibility-devtools/)
