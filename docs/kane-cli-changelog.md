---
id: kane-cli-changelog
title: Changelog
sidebar_label: Changelog
description: Kane CLI release history, version notes, and links to GitHub releases.
keywords:
  - kane cli changelog
  - kane cli releases
  - kaneai
  - testmu ai
url: https://www.testmuai.com/support/docs/kane-cli-changelog/
site_name: TestMu AI
slug: kane-cli-changelog/
displayed_sidebar: KaneCLISidebar
canonical: https://www.testmuai.com/support/docs/kane-cli-changelog/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.testmuai.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.testmuai.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Kane CLI",
          "item": "https://www.testmuai.com/support/docs/kane-cli-introduction/"
        }]
      })
    }}
></script>

Full release notes and version history are published on GitHub:

**[github.com/LambdaTest/kane-cli/releases](https://github.com/LambdaTest/kane-cli/releases)**

---

## Stay Updated

Subscribe to releases on GitHub to get notified when a new version ships:

1. Go to [github.com/LambdaTest/kane-cli](https://github.com/LambdaTest/kane-cli)
2. Click **Watch → Custom → Releases**

Update to the latest version at any time:

```bash
npm update -g @testmuai/kane-cli
```

Check your current version:

```bash
kane-cli --version
```

## 0.2.11 — 2026-05-04

**Setup & project/folder**
- Project list loads instantly even on large accounts; type to search immediately.
- KaneAI blocks test execution until a project and folder are selected, preventing lost runs.
- Press **Esc** during setup to accept "KaneAI Generated" / "Untitled" defaults and move on immediately.
- Switching profiles no longer carries the previous profile's project selection across.

**Login**
- Invalid username or access key is reported immediately so you can correct it before credentials are saved.
- `kane-cli login --oauth` and username/access-key headless login no longer hang at completion.

**In-browser indicator**
- The floating badge now streams the current reasoning step (e.g. "Clicking the Add to cart button…") in real time.
- Shows an animated "Thinking…" state between steps.
- No longer appears in the macOS Dock or Windows/Linux taskbar.
- Hides automatically when focus leaves Chrome and reappears when you return.

**TUI / help**
- `/help` opens a tabbed screen: Commands, Shortcuts, Setup, About.
- Every slash command shows a confirmation box (✓ / ✗) with the outcome.
- Breadcrumb at the bottom tracks your position in any flow.
- Consistent keyboard-shortcut hints on every screen.

**Text editing**
- Cursor is visible even when the input box is empty.
- **Tab** completes a slash command; **Enter** runs it (previously required two Enter presses).
- Word-jump and word-delete shortcuts (Option/Ctrl + Arrow, Option/Ctrl + Delete) work correctly on macOS, Windows, and Linux.

**New defaults**
- Code Export is **on** by default.
- Run mode defaults to **Testing** (uploads to TMS automatically).
- A one-time upgrade summary is shown on first launch; use `/config` to revert any default.

---

## Reporting Issues

Found a bug or unexpected behavior? Open an issue on GitHub:

**[github.com/LambdaTest/kane-cli/issues](https://github.com/LambdaTest/kane-cli/issues)**

See [Troubleshooting](/support/docs/kane-cli-troubleshooting/#filing-a-bug-report) for the information to include in your report.
