---
id: rook-command-budget
toc_max_heading_level: 2
title: Monitor Rook Credits
description: Understand the credit balance and per-session spending shown by the current Rook interface.
slug: rook-command-budget/
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
          "name": "Monitor Rook Credits",
          "item": `${BRAND_URL}/support/docs/rook-command-budget/`
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
      "@id": "https://www.testmuai.com/support/docs/rook-command-budget/"
    },
    "headline": "Monitor Rook Credits",
    "description": "Understand the credit balance and per-session spending shown by the current Rook interface.",
    "url": "https://www.testmuai.com/support/docs/rook-command-budget/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
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
    "dateModified": "2026-09-04T12:50:18+05:30"
  }) }}
/>

# Monitor Rook Credits

The current Rook command surface does not provide a <code>/budget</code> command. The TUI status bar shows the account balance and how many credits the current session has spent. Use <code>/plan</code> for the authenticated account and available balance.

Model-backed phases report what they spend. Rook checks credit boundaries between calls and preserves completed local work when credits are exhausted.

## Related Commands

[<code>/plan</code>](/support/docs/rook-command-plan/) · [<code>/status</code>](/support/docs/rook-command-status/)
