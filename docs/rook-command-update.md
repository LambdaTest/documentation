---
id: rook-command-update
toc_max_heading_level: 2
title: Rook /update Command
sidebar_label: /update
description: Check for a newer public Rook release and show the upgrade command for the detected installation channel.
slug: rook-command-update/
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
          "name": "Rook /update Command",
          "item": `${BRAND_URL}/support/docs/rook-command-update/`
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
      "@id": "https://www.testmuai.com/support/docs/rook-command-update/"
    },
    "headline": "Rook /update Command",
    "description": "Check for a newer public Rook release and show the upgrade command for the detected installation channel.",
    "url": "https://www.testmuai.com/support/docs/rook-command-update/",
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
    "dateModified": "2026-09-07T12:29:55+05:30"
  }) }}
/>

# <code>/update</code> Command

Use <code>/update</code> to check for a newer public Rook release and show the appropriate upgrade command for a Homebrew, npm, or shell installation.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-update.png').default} alt="Rook update command help showing auto and JSON forms" className="doc_img"/>

## Syntax

<VerifiedTag value="Verified" />

~~~text
/update
/update auto
/update --json
~~~

The shell form is <code>rook update</code> with the same argument and option.

Public releases use semantic versions such as <code>0.1.1</code>. Shell installations keep versioned release directories side by side and record the binary directory so an update continues to use the same location.

If you previously chose “never ask again” in the TUI update notice, run <code>/update auto</code> to re-enable automatic notices.

## Related Commands

[Installation](/support/docs/rook-installation/) · [<code>/docs</code>](/support/docs/rook-command-docs/) · [<code>/doctor</code>](/support/docs/rook-command-doctor/)
