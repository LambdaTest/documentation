---
id: rook-command-ui
toc_max_heading_level: 2
title: Rook /ui Command
sidebar_label: /ui
description: Open hosted Rook results or serve a read-only viewer directly from local workspace evidence.
slug: rook-command-ui/
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
          "name": "Rook /ui Command",
          "item": `${BRAND_URL}/support/docs/rook-command-ui/`
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
      "@id": "https://www.testmuai.com/support/docs/rook-command-ui/"
    },
    "headline": "Rook /ui Command",
    "description": "Open hosted Rook results or serve a read-only viewer directly from local workspace evidence.",
    "url": "https://www.testmuai.com/support/docs/rook-command-ui/",
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

# <code>/ui</code> Command

Use <code>/ui</code> to review synchronized results in the hosted TestMu AI application. Add <code>--local</code> to serve the evidence currently on disk.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-ui.png').default} alt="Current Rook UI command help showing local and no-open options" className="doc_img"/>

## Syntax

<VerifiedTag value="Verified" />

~~~text
/ui
/ui --local
/ui --local --no-open
~~~

The shell form is <code>rook ui</code> with the same options.

| Form | Result |
|---|---|
| <code>/ui</code> | Print and open the hosted application. It displays content recorded by sync and run uploads. |
| <code>/ui --local</code> | Start a loopback server over the current workspace's files and open it. |
| <code>--no-open</code> | Print the URL without launching a browser. |

The local viewer is read-only, makes no external request for workspace data, and does not require authentication or network access. It continues serving until the command or TUI session exits.

Use the hosted view for shared project history. Use <code>--local</code> for unsynchronized work, offline investigation, or the exact evidence present on this machine.

## Related Commands

[Results and evidence](/support/docs/agent-assurance-results-and-evidence/) · [<code>/sync</code>](/support/docs/rook-command-sync/) · [<code>/report</code>](/support/docs/rook-command-report/)
