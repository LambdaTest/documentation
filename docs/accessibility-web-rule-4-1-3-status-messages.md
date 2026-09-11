---
id: accessibility-web-rule-4-1-3-status-messages
title: Status Messages (4.1.3)
sidebar_label: Status Messages (4.1.3)
description: Rule-level Accessibility guidance for Status Messages (WCAG 4.1.3 Level AA).
slug: accessibility-web-rule-4-1-3-status-messages/
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
          "name": "Status Messages (4.1.3)",
          "item": `${BRAND_URL}/support/docs/accessibility-web-rule-4-1-3-status-messages/`
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-web-rule-4-1-3-status-messages/"
    },
    "headline": "Status Messages (4.1.3)",
    "description": "Rule-level Accessibility guidance for Status Messages (WCAG 4.1.3 Level AA).",
    "url": "https://www.testmuai.com/support/docs/accessibility-web-rule-4-1-3-status-messages/",
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

# Status Messages (4.1.3)

Status messages that provide information about the success or results of an action, the waiting state of an application, or the progress of a process must be programmatically determinable through role or properties so they can be presented to the user by assistive technologies without receiving focus.


:::info WCAG Reference
**Applies to:** WCAG 2.1, WCAG 2.2
**Introduced in:** WCAG 2.1 | **Level:** AA | [Read the official specification →](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html)
:::


## What this rule checks

The scanner verifies that dynamic status messages use ARIA live regions (`role="status"`, `role="alert"`, `aria-live`) so screen readers announce them without moving focus away from the current task.

## Why it matters

Sighted users see toast notifications, search result counts, and progress indicators update on screen. Screen-reader users miss these updates entirely unless the content is announced through a live region.

## Common failure patterns

- "3 results found" text appears on screen after a search but is not in a live region
- success/error banners injected into the DOM without `role="alert"` or `role="status"`
- loading spinners with no text announcement for screen readers
- cart item count updates that are only visual

## Remediation guidance

- use `role="status"` for non-urgent updates (result counts, save confirmations)
- use `role="alert"` for urgent messages (errors, warnings)
- ensure the live region exists in the DOM before the content is injected (add content to an existing container rather than injecting the container)
- avoid overusing alerts, since frequent announcements interrupt the user's workflow

## Related docs

- [Web Rule Repository](/support/docs/accessibility-web-rule-repository/)
- [Accessibility Issue Remediation Guide](/support/docs/accessibility-issue-remediation-guide/)
