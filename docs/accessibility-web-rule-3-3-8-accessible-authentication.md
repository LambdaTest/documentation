---
id: accessibility-web-rule-3-3-8-accessible-authentication
title: Accessible Authentication (Minimum) (3.3.8)
sidebar_label: Accessible Authentication (3.3.8)
description: Rule-level Accessibility guidance for Accessible Authentication (WCAG 3.3.8 Level AA).
slug: accessibility-web-rule-3-3-8-accessible-authentication/
---

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/accessibility-web-rule-3-3-8-accessible-authentication/"
    },
    "headline": "Accessible Authentication (Minimum) (3.3.8)",
    "description": "Rule-level Accessibility guidance for Accessible Authentication (WCAG 3.3.8 Level AA).",
    "url": "https://www.testmuai.com/support/docs/accessibility-web-rule-3-3-8-accessible-authentication/",
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

# Accessible Authentication (Minimum) (3.3.8)

Authentication steps must not require a cognitive function test (such as remembering a password, solving a puzzle, or recognizing images) unless an alternative method, an assistance mechanism, or an object-recognition exception applies.


:::info WCAG Reference
**Applies to:** WCAG 2.2
**Introduced in:** WCAG 2.2 | **Level:** AA | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum.html)
:::


## What this rule checks

The scanner flags login flows that rely solely on cognitive challenges (CAPTCHAs, image puzzles, memory-based knowledge questions) without offering an accessible alternative.

## Why it matters

Users with cognitive disabilities may not be able to solve puzzles, remember complex passwords, or complete CAPTCHAs. Authentication barriers lock these users out of services entirely.

## Common failure patterns

- image-based CAPTCHAs with no audio or alternative verification option
- security questions that rely on memory ("What was your first pet's name?")
- login flows that block password managers from auto-filling credentials
- two-factor authentication that requires memorizing a code without allowing paste

## Remediation guidance

- allow password managers to auto-fill login fields (do not use `autocomplete="off"` on authentication fields)
- provide an accessible CAPTCHA alternative (audio CAPTCHA, email verification, or WebAuthn)
- support passwordless authentication (magic links, biometrics, passkeys)
- allow pasting into verification code fields for users who receive codes via email or authenticator apps

## Related docs

- [Web Rule Repository](/support/docs/accessibility-web-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
