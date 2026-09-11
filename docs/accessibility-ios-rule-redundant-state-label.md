---
id: accessibility-ios-rule-redundant-state-label
title: Redundant State Keyword in Accessibility Label
sidebar_label: Redundant State in Label
description: Rule-level Accessibility guidance for Redundant State Keyword in Accessibility Label on iOS.
slug: accessibility-ios-rule-redundant-state-label/
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
          "item": `${BRAND_URL}/support/docs/accessibility-ios-rule-redundant-state-label/`
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-ios-rule-redundant-state-label/"
    },
    "headline": "Redundant State Keyword in Accessibility Label",
    "description": "Rule-level Accessibility guidance for Redundant State Keyword in Accessibility Label on iOS.",
    "url": "https://www.testmuai.com/support/docs/accessibility-ios-rule-redundant-state-label/",
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

Accessible labels shouldn't bake in state words like "on" or "selected" that VoiceOver already announces from the control itself.

:::info WCAG Reference
**Maps to:** WCAG 4.1.2 Name, Role, Value | **Applies to:** WCAG 2.0, WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.0 | **Level:** A | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
:::

## What this rule checks

The scanner examines whether a visible accessibility element's label embeds state that VoiceOver already announces from the control itself. Only state words that VoiceOver actually speaks for that control are flagged:

| Condition | Flagged keywords |
|---|---|
| Control is marked selected | `selected` |
| Control is disabled | `dimmed` |
| Switch, toggle, or checkbox | `on`, `off` |
| Disclosure triangle | `expanded` |

Matching is whole-word and case-insensitive. Deliberately not flagged, because VoiceOver does not use these words on iOS: `disabled` (VoiceOver says "dimmed"), `enabled`, `unselected`, `collapsed`, and `checked` / `unchecked` (VoiceOver says "on" / "off").

## Why it matters

VoiceOver derives state from the control and appends it to every announcement. When the state is also written into the label, the user hears it twice: "Wi-Fi on, on, switch button". Worse, a hardcoded state does not update when the control changes. After the user toggles Wi-Fi off, VoiceOver announces "Wi-Fi on, off, switch button". The label now contradicts the real state, and the user has no way to tell which one is true. A label that lies about state is more harmful than no label at all.

## Common failure patterns

- toggle labels that bake in the current value: "Dark mode off", "Notifications on"
- labels updated by hand in a state-change callback instead of relying on the control's own state
- selection state written into a segmented control's label

## Remediation guidance

1. **Remove the state word** from the label string: "Notifications on" becomes "Notifications".
2. **Keep the label static** across state changes.
3. **Drive state through the control's own API** so the system announces it: set `isOn` on a switch, add or remove `.selected` from `accessibilityTraits`, or use `accessibilityValue` for values the traits cannot express.

## Related docs

- [iOS Rule Repository](/support/docs/accessibility-ios-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
