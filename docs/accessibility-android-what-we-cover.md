---
id: accessibility-android-what-we-cover
title: Android Accessibility Checklist
sidebar_label: Android Checklist
description: Supported Android accessibility rules with links to rule pages, plus a manual test checklist for human-led review.
keywords:
  - TestMu AI
  - Accessibility
  - Android
  - WCAG
  - Checklist
url: https://www.testmuai.com/support/docs/accessibility-android-what-we-cover/
site_name: TestMu AI
slug: accessibility-android-what-we-cover/
canonical: https://www.testmuai.com/support/docs/accessibility-android-what-we-cover/
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
          "name": "Android Accessibility Checklist",
          "item": `${BRAND_URL}/support/docs/accessibility-android-what-we-cover/`
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-android-what-we-cover/"
    },
    "headline": "Android Accessibility Checklist",
    "description": "Supported Android accessibility rules with links to rule pages, plus a manual test checklist for human-led review.",
    "url": "https://www.testmuai.com/support/docs/accessibility-android-what-we-cover/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Accessibility Testing",
    "keywords": [
      "TestMu AI",
      "Accessibility",
      "Android"
    ],
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

# Android Accessibility Checklist

Use this page to see **which rules App Scanner / automation can report** (with links to rule-level guidance) and a **manual test checklist** for areas best validated by people. For remediation detail, use the [Android Rule Repository](/support/docs/accessibility-android-rules/).

**Other platforms:** [Web checklist](/support/docs/accessibility-web-what-we-cover/) · [iOS checklist](/support/docs/accessibility-ios-what-we-cover/)

---

## Supported (rules in this product)

| Rule | WCAG (maps) | Doc |
|------|-------------|-----|
| Interactive Role Undefined | 4.1.2 | [Rule →](/support/docs/accessibility-android-rules/#interactive-role-undefined) |
| Missing Image Alt | 1.1.1 | [Rule →](/support/docs/accessibility-android-rules/#missing-image-alt) |
| Missing View Accessibility | 4.1.2 | [Rule →](/support/docs/accessibility-android-rules/#missing-view-accessibility) |
| Unlabeled Checkbox Element | 4.1.2 | [Rule →](/support/docs/accessibility-android-rules/#unlabeled-checkbox-element) |
| Insufficient Color Ratio | 1.4.3 | [Rule →](/support/docs/accessibility-android-rules/#insufficient-color-ratio) |
| Missing Field Label | 3.3.2 | [Rule →](/support/docs/accessibility-android-rules/#missing-field-label) |
| Non-accessible Interaction | 4.1.2 | [Rule →](/support/docs/accessibility-android-rules/#non-accessible-interaction) |
| Missing Screen Title | 2.4.2 | [Rule →](/support/docs/accessibility-android-rules/#missing-screen-title) |
| Unlabeled Toggle Control | 4.1.2 | [Rule →](/support/docs/accessibility-android-rules/#unlabeled-toggle-control) |
| Mismatched Label Text *(Beta)* | 2.5.3 | [Rule →](/support/docs/accessibility-android-rules/#mismatched-label-text-beta) |
| Missing Input Value | 4.1.2 | [Rule →](/support/docs/accessibility-android-rules/#missing-input-value) |
| Inaccessible Text Focus | 4.1.2 | [Rule →](/support/docs/accessibility-android-rules/#inaccessible-text-focus) |
| Misplaced Field Label *(Beta)* | 2.5.3 | [Rule →](/support/docs/accessibility-android-rules/#misplaced-field-label-beta) |
| Nested Control Issues | 4.1.2 | [Rule →](/support/docs/accessibility-android-rules/#nested-control-issues) |
| Unnamed Nested Element | 4.1.2 | [Rule →](/support/docs/accessibility-android-rules/#unnamed-nested-element) |
| Fixed Orientation Lock | 1.3.4 | [Rule →](/support/docs/accessibility-android-rules/#fixed-orientation-lock) |
| Undersized Touch Target | 2.5.5 | [Rule →](/support/docs/accessibility-android-rules/#undersized-touch-target) |
| Insufficient Target Spacing | 2.5.5 | [Rule →](/support/docs/accessibility-android-rules/#insufficient-target-spacing) |
| Duplicate Accessibility Label | 4.1.2 | [Rule →](/support/docs/accessibility-android-rules/#duplicate-accessibility-label) |
| Button Element Capitalisation Check | 3.1.6 | [Rule →](/support/docs/accessibility-android-rules/#button-element-capitalisation-check) |
| Emoji or Symbol Used in Accessibility Label | Best Practice | [Rule →](/support/docs/accessibility-android-rules/#emoji-or-symbol-used-in-accessibility-label) |
| Redundant State Keyword in Accessibility Label | 4.1.2 | [Rule →](/support/docs/accessibility-android-rules/#redundant-state-keyword-in-accessibility-label) |
| Redundant Role Keyword in Accessibility Label | 4.1.2 | [Rule →](/support/docs/accessibility-android-rules/#redundant-role-keyword-in-accessibility-label) |
| Non-Descriptive Link Text | 2.4.4 | [Rule →](/support/docs/accessibility-android-rules/#non-descriptive-link-text) |
| Traversal Order Does Not Match Visual Layout *(Beta)* | 2.4.3 | [Rule →](/support/docs/accessibility-android-rules/#traversal-order-does-not-match-visual-layout-beta) |
| Dynamic Type Support | 1.4.4 | [Rule →](/support/docs/accessibility-android-rules/#dynamic-type-support) |
| Non-Responsive Container Clips Text | 1.4.10 | [Rule →](/support/docs/accessibility-android-rules/#non-responsive-container-clips-text) |
| Unique Option Names | 4.1.2 | [Rule →](/support/docs/accessibility-android-rules/#unique-option-names) |
| Invalid Range Values | 4.1.2 | [Rule →](/support/docs/accessibility-android-rules/#invalid-range-values) |
| Images with Text | 1.1.1 | [Rule →](/support/docs/accessibility-android-rules/#images-with-text) |
| Meaningful Sequence | 1.3.2 | [Rule →](/support/docs/accessibility-android-rules/#meaningful-sequence) |
| Non-Focusable Interactive Element | 2.1.1 | [Rule →](/support/docs/accessibility-android-rules/#non-focusable-interactive-element) |
| Minimum Text Size | Best Practice | [Rule →](/support/docs/accessibility-android-rules/#minimum-text-size) |
| Text Spacing | Best Practice | [Rule →](/support/docs/accessibility-android-rules/#text-spacing) |

---

## Manual test checklist

Reserve time for **TalkBack**, **Switch Access**, **font scaling**, and **real devices** even when automated rules pass. Use [Understanding WCAG 2.2](https://www.w3.org/WAI/WCAG22/Understanding/) and Google's Material Design accessibility guidance with this checklist.

| Area | Manual verification focus |
|------|---------------------------|
| **1.2.x Time-based media** | In-app media (captions, descriptions), validate with representative assets. |
| **1.3.2–1.3.3 · 1.4.x beyond contrast** | Sequence, sensory-only instructions, resize/reflow/hover content: interactive and visual review. |
| **2.x keyboard / focus / timing (full)** | Full flows with TalkBack; session and motion behavior, validate beyond rule snapshots. |
| **3.x language, errors, help** | Error suggestions, legal safeguards: product and compliance review. |
| **AAA criteria** | Optional stretch goals, plan when AAA is explicitly in scope. |

## Related docs

- [Android Rule Repository](/support/docs/accessibility-android-rules/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
