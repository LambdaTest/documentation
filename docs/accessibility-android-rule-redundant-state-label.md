---
id: accessibility-android-rule-redundant-state-label
title: Redundant State Keyword in Accessibility Label
sidebar_label: Redundant State in Label
description: Rule-level Accessibility guidance for Redundant State Keyword in Accessibility Label on Android.
slug: accessibility-android-rule-redundant-state-label/
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
          "name": "Redundant State Keyword in Accessibility Label",
          "item": `${BRAND_URL}/support/docs/accessibility-android-rule-redundant-state-label/`
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-android-rule-redundant-state-label/"
    },
    "headline": "Redundant State Keyword in Accessibility Label",
    "description": "Rule-level Accessibility guidance for Redundant State Keyword in Accessibility Label on Android.",
    "url": "https://www.testmuai.com/support/docs/accessibility-android-rule-redundant-state-label/",
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

# Redundant State Keyword in Accessibility Label

Accessible labels shouldn't bake in state words like "on", "off", or "selected" that TalkBack already announces from the control itself.

:::info WCAG Reference
**Maps to:** WCAG 4.1.2 Name, Role, Value | **Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
:::

## What this rule checks

The scanner flags accessible names that embed the control's state — words like "on", "off", "checked", "selected", "disabled" — on controls whose state TalkBack already announces automatically. Only state words TalkBack actually speaks for that control type are flagged: "on"/"off" for switches and toggles, "checked"/"not checked" for checkboxes, "selected" for selected elements, and "disabled" for disabled interactive elements.

## Why it matters

TalkBack derives state from the control itself and appends it to every announcement. When the state is also written into the label, users hear it twice — "WiFi ON, on, Switch". Worse, the hardcoded state does not update when the control changes: after toggling, TalkBack announces "WiFi ON, off, Switch" — the label now contradicts the real state, and the user cannot tell which is true.

## Common failure patterns

- toggle labels that bake in the current state: "Dark mode off", "Notifications ON"
- labels updated manually in code to mirror state instead of relying on the control's state APIs

## Remediation guidance

- audit dynamic text and remove status words like "On", "Checked", or "Expanded" from the label string
- stabilize the label — keep it static (e.g., "Notifications") rather than describing its current state
- map state to platform APIs instead — use `stateDescription` or `android:checked="true"` so TalkBack announces it correctly and it stays in sync

## Related docs

- [Android Rule Repository](/support/docs/accessibility-android-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
