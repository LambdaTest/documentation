---
id: accessibility-nvda-windows
title: NVDA on Windows
sidebar_label: NVDA on Windows
description: Platform-specific screen reader reference for NVDA on Windows—setup, navigation basics, and what to validate after automated scans.
slug: accessibility-nvda-windows/
url: https://www.testmuai.com/support/docs/accessibility-nvda-windows/
site_name: TestMu AI
canonical: https://www.testmuai.com/support/docs/accessibility-nvda-windows/
---

# NVDA on Windows

Use this page as the Windows-specific reference for **NVDA** when validating **web** accessibility after DevTools scans, automation, or scheduling.

## When to use this

Use NVDA on Windows when you want to understand how screen-reader users experience page structure, labels, navigation, and interactive controls in desktop web workflows.

## Onboarding: install and basic usage

1. Download **NVDA** from [https://www.nvaccess.org/](https://www.nvaccess.org/) and install on Windows 10/11.
2. Start NVDA with **Ctrl + Alt + N** (default) or from the Start menu.
3. Learn **single-key navigation**: `H` headings, `F` form fields, `B` buttons, `K` links (NVDA browse mode).
4. Open your target URL in **Chrome or Edge** (match what you scan in Accessibility Automation).
5. Use **Tab / Shift+Tab** to follow focus order; listen for **name, role, and state** announcements.
6. Toggle **speech viewer** (NVDA menu → Tools) if you need to capture text for bug tickets.

## What to validate

- page titles and headings
- link and button names
- form labels and instructions
- focus order and keyboard navigation
- state announcements for dynamic UI

## Suggested first session (30 minutes)

| Step | Action |
|------|--------|
| 1 | Open homepage; confirm title and landmark announcements. |
| 2 | Tab through primary nav; every focusable control should speak a sensible name. |
| 3 | Open a form; each control should expose label + instructions + errors. |
| 4 | Trigger a live region or toast; confirm polite/assertive behavior matches design. |

## Related docs

- [Screen Reader](/support/docs/screen-reader-on-accessibility/)
- [Keyboard Scan](/support/docs/accessibility-keyboard-scan/)
