---
id: accessibility-voiceover-macos
title: VoiceOver on macOS
sidebar_label: VoiceOver on macOS
description: "VoiceOver on macOS for manual accessibility validation: turn on, rotor, web navigation, and checklist."
slug: accessibility-voiceover-macos/
url: https://www.testmuai.com/support/docs/accessibility-voiceover-macos/
site_name: TestMu AI
canonical: https://www.testmuai.com/support/docs/accessibility-voiceover-macos/
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
          "name": "VoiceOver on macOS",
          "item": `${BRAND_URL}/support/docs/accessibility-voiceover-macos/`
        }]
      })
    }}
></script>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/accessibility-voiceover-macos/"
    },
    "headline": "VoiceOver on macOS",
    "description": "VoiceOver on macOS for manual accessibility validation: turn on, rotor, web navigation, and checklist.",
    "url": "https://www.testmuai.com/support/docs/accessibility-voiceover-macos/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Accessibility Testing",
    "keywords": [],
    "author": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "url": "https://www.testmuai.com/"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
      "url": "https://www.testmuai.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testmuai.com/logo.png"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testmu-ai/",
        "https://x.com/testmuai",
        "https://www.youtube.com/@TestMuAI"
      ]
    },
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

# VoiceOver on macOS

Use this page as the macOS-specific reference for **VoiceOver** when validating **Safari** or **Chrome** experiences after automated Accessibility findings.

## When to use this

Use VoiceOver on macOS when your team needs to understand how desktop macOS users experience navigation, labels, landmarks, and interactive content.

## Onboarding: enable VoiceOver and browse the web

1. Open **System Settings → Accessibility → VoiceOver** (names vary slightly by macOS version) and turn VoiceOver **On**, or press **Command + F5**.
2. Accept the quick-start tutorial the first time. It teaches the **VO** modifier (Control + Option by default).
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
