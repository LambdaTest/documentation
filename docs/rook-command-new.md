---
id: rook-command-new
toc_max_heading_level: 2
title: Start a Fresh Rook Session
description: Close and restart Rook when you need a fresh conversation while preserving project data.
slug: rook-command-new/
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
          "name": "Start a Fresh Rook Session",
          "item": `${BRAND_URL}/support/docs/rook-command-new/`
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
      "@id": "https://www.testmuai.com/support/docs/rook-command-new/"
    },
    "headline": "Start a Fresh Rook Session",
    "description": "Close and restart Rook when you need a fresh conversation while preserving project data.",
    "url": "https://www.testmuai.com/support/docs/rook-command-new/",
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

# Start a Fresh Rook Session

The current Rook command surface does not provide a <code>/new</code> command. To start a fresh conversation, enter <code>/exit</code> and launch <code>rook</code> again from the same workspace.

Project files, active project and agent pointers, profiles, scenarios, runs, credentials, and variables persist across sessions. Use their specific commands when you intend to change stored state.

## Related Commands

[<code>rook</code>](/support/docs/rook-command-start/) · [<code>/clear</code>](/support/docs/rook-command-clear/) · [<code>/exit</code>](/support/docs/rook-command-exit/)
