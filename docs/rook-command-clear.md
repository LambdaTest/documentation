---
id: rook-command-clear
toc_max_heading_level: 2
title: Rook /clear Control
sidebar_label: /clear
description: Clear command output from the current Rook TUI without changing project or session state.
slug: rook-command-clear/
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
          "name": "Rook /clear Control",
          "item": `${BRAND_URL}/support/docs/rook-command-clear/`
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
      "@id": "https://www.testmuai.com/support/docs/rook-command-clear/"
    },
    "headline": "Rook /clear Control",
    "description": "Clear command output from the current Rook TUI without changing project or session state.",
    "url": "https://www.testmuai.com/support/docs/rook-command-clear/",
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

# <code>/clear</code> Control

Enter <code>/clear</code> in the TUI to clear retained command-output state and return to the prompt.

<VerifiedTag value="Verified" />

~~~text
/clear
~~~

This does not delete projects, agents, scenarios, profiles, runs, evidence, credentials, variables, permissions, or authentication. The startup context remains because it belongs to the current TUI session. Output already committed to terminal scrollback can remain visible until the terminal itself is cleared or Rook is restarted.

There is no <code>rook clear</code> shell command.

## Related Controls

[<code>/help</code>](/support/docs/rook-command-help/) · [<code>/exit</code>](/support/docs/rook-command-exit/)
