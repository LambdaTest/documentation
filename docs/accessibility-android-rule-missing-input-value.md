---
id: accessibility-android-rule-missing-input-value
title: Missing Input Value
sidebar_label: Missing Input Value
description: Rule-level Accessibility guidance for Missing Input Value on Android.
slug: accessibility-android-rule-missing-input-value/
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-android-rule-missing-input-value/"
    },
    "headline": "Missing Input Value",
    "description": "Rule-level Accessibility guidance for Missing Input Value on Android.",
    "url": "https://www.testmuai.com/support/docs/accessibility-android-rule-missing-input-value/",
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

# Missing Input Value

Android input fields must expose their current value to assistive technologies so TalkBack users can verify what they have entered.

:::info WCAG Reference
**Maps to:** WCAG 4.1.2 Name, Role, Value | **Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
:::

## What this rule checks

The scanner verifies that `EditText`, `AutoCompleteTextView`, and custom input elements expose their current text value through the accessibility framework.

## Why it matters

TalkBack users cannot see the screen to verify their input. If the current value is not announced, users cannot confirm what they typed, leading to errors in forms, searches, and text entry.

## Common failure patterns

- custom input views that render text visually but do not expose it through `AccessibilityNodeInfo`
- masked fields (passwords, PINs) that hide the value without providing a character count or confirmation mechanism
- programmatically set text that does not trigger an accessibility event

## Remediation guidance

- use standard `EditText` or `TextInputLayout` which expose values automatically
- for custom inputs, populate `AccessibilityNodeInfo.setText()` with the current value
- fire `TYPE_VIEW_TEXT_CHANGED` events when the value changes programmatically
- test with TalkBack by focusing the input field and confirming the current value is announced

## Related docs

- [Android Rule Repository](/support/docs/accessibility-android-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
