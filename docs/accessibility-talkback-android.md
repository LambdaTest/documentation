---
id: accessibility-talkback-android
title: TalkBack on Android
sidebar_label: TalkBack on Android
description: TalkBack on Android devices—enablement, gestures, and what to validate for mobile accessibility.
slug: accessibility-talkback-android/
url: https://www.testmuai.com/support/docs/accessibility-talkback-android/
site_name: TestMu AI
canonical: https://www.testmuai.com/support/docs/accessibility-talkback-android/
---

# TalkBack on Android

Use this page when validating **native or hybrid Android** experiences with **TalkBack**, especially after **App Scanner** or **Appium** accessibility runs.

## When to use this

Use TalkBack when validating Android accessibility behavior on mobile devices, especially for focus movement, labels, gestures, and control states.

## Onboarding: turn TalkBack on safely

1. On the device, open **Settings → Accessibility → TalkBack** (path varies by OEM) and toggle **On**.
2. Complete the **tutorial** gesture set (swipe right then up for default navigation) in a safe test build first.
3. Enable **Developer options → Show layout bounds** only if your policy allows—helps compare focus rectangles with visuals.
4. Open your app under test; swipe **right** to move to the next focusable element, **double-tap** to activate.
5. Use **local context menu** (swipe up then right) to jump by headings or controls when available.

## What to validate

- accessible labels on controls and media
- gesture and focus movement between interactive elements
- state changes for toggles, selections, and dynamic content
- screen-by-screen mobile usability

## Short manual matrix (pair with App Scanner)

| Flow | TalkBack checks |
|------|-----------------|
| Onboarding | Each carousel slide exposes a name; buttons not only icons. |
| Forms | Error text is reachable and associated with fields. |
| Media | Video controls expose play/pause state. |

## Related docs

- [Screen Reader](/support/docs/screen-reader-on-accessibility/)
- [Accessibility App Scanner (Overview)](/support/docs/accessibility-app-scanner/)
