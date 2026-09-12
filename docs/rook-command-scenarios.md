---
id: rook-command-scenarios
toc_max_heading_level: 2
title: Rook /scenarios Command
sidebar_label: /scenarios
description: List scenario runnability or include, exclude, and permanently delete scenarios for the active agent.
slug: rook-command-scenarios/
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
          "name": "Rook /scenarios Command",
          "item": `${BRAND_URL}/support/docs/rook-command-scenarios/`
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
      "@id": "https://www.testmuai.com/support/docs/rook-command-scenarios/"
    },
    "headline": "Rook /scenarios Command",
    "description": "List scenario runnability or include, exclude, and permanently delete scenarios for the active agent.",
    "url": "https://www.testmuai.com/support/docs/rook-command-scenarios/",
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

# <code>/scenarios</code> Command

Use <code>/scenarios</code> to inspect the active agent's suite and curate what runs by default.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-scenarios.png').default} alt="Current Rook scenarios command help showing list, exclude, include, and delete" className="doc_img"/>

## Syntax

<VerifiedTag value="Verified" />

~~~text
/scenarios
/scenarios list [--json]
/scenarios exclude <ids...> [--json]
/scenarios include <ids...> [--json]
/scenarios delete <ids...> [--json]
~~~

The shell form uses <code>rook scenarios</code>. <code>list</code> is the default subcommand, so <code>/scenarios</code> and <code>/scenarios list</code> are equivalent.

| Subcommand | Effect |
|---|---|
| <code>list</code> | Show what would run, stale or blocked scenarios, and reasons a profile cannot execute a scenario. |
| <code>exclude</code> | Keep scenarios on disk and in history, but omit them from default runs. |
| <code>include</code> | Return excluded scenarios to the default run set. |
| <code>delete</code> | Permanently remove the named local scenario files. |

Use explicit IDs. Unknown IDs are reported so a typo cannot look like a successful exclusion.

## Related Commands

[Scenario guide](/support/docs/agent-assurance-scenarios/) · [<code>/generate</code>](/support/docs/rook-command-generate/) · [<code>/run</code>](/support/docs/rook-command-run/)
