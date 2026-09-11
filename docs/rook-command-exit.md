---
id: rook-command-exit
toc_max_heading_level: 2
title: Rook /exit Control
sidebar_label: /exit
description: Close the current Rook TUI after in-flight local bookkeeping is settled.
slug: rook-command-exit/
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
          "name": "Rook /exit Control",
          "item": `${BRAND_URL}/support/docs/rook-command-exit/`
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
      "@id": "https://www.testmuai.com/support/docs/rook-command-exit/"
    },
    "headline": "Rook /exit Control",
    "description": "Close the current Rook TUI after in-flight local bookkeeping is settled.",
    "url": "https://www.testmuai.com/support/docs/rook-command-exit/",
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

# <code>/exit</code> Control

Enter <code>/exit</code> or <code>/quit</code> at an idle TUI prompt to close Rook.

<VerifiedTag value="Verified" />

~~~text
/exit
/quit
~~~

Rook waits for pending job-end records to settle and stops any local evidence viewer owned by the session. Exiting does not log out or delete project files.

While a command is running, press <code>Esc</code> to request an orderly interruption. Completed scenario evidence is preserved. Pressing <code>Ctrl+C</code> exits the TUI and also runs the exit bookkeeping path.

There is no <code>rook exit</code> shell command.

## Related Commands

[<code>/run</code>](/support/docs/rook-command-run/) · [<code>/runs</code>](/support/docs/rook-command-runs/) · [<code>/logout</code>](/support/docs/rook-command-logout/)
