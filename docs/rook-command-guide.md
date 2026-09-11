---
id: rook-command-guide
toc_max_heading_level: 2
title: Rook /guide Command
sidebar_label: /guide
description: Show Rook's first-run sequence, cost boundaries, storage model, and explicit synchronization behavior.
slug: rook-command-guide/
---
import VerifiedTag from '@site/src/component/verifiedTag';
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
          "name": "Rook /guide Command",
          "item": `${BRAND_URL}/support/docs/rook-command-guide/`
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
      "@id": "https://www.testmuai.com/support/docs/rook-command-guide/"
    },
    "headline": "Rook /guide Command",
    "description": "Show Rook's first-run sequence, cost boundaries, storage model, and explicit synchronization behavior.",
    "url": "https://www.testmuai.com/support/docs/rook-command-guide/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Agent Testing",
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

# <code>/guide</code> Command

Use <code>/guide</code> when you know you want to test an agent but do not yet know which command comes next.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-guide.png').default} alt="Current Rook guide command help" className="doc_img"/>

## Syntax

<VerifiedTag value="Verified" />

~~~text
/guide
~~~

The shell form is <code>rook guide</code>.

The guide covers this sequence:

<VerifiedTag value="Verified" />

~~~text
login → project → explore → agent → generate → profile → run → sync
~~~

The built-in guide presents <code>run</code> before <code>sync</code>, but a normal timeline run requires an upstream project version. In a new project, synchronize the reviewed tree before the first normal run; use <code>run --test</code> only when the draft run should stay local.

The guide also explains which operations spend credits, where local files live, why secrets never synchronize, and how to inspect status at any point. It reads command metadata and state; it does not invoke the target or spend credits.

## Related Commands

[Quickstart](/support/docs/agent-assurance-quickstart/) · [<code>/help</code>](/support/docs/rook-command-help/) · [<code>/status</code>](/support/docs/rook-command-status/)
