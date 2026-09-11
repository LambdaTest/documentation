---
id: rook-command-ask
toc_max_heading_level: 2
title: rook ask Command
sidebar_label: rook ask
description: Give Rook a natural-language request and let its orchestrator answer from state or dispatch a command.
slug: rook-command-ask/
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
          "name": "rook ask Command",
          "item": `${BRAND_URL}/support/docs/rook-command-ask/`
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
      "@id": "https://www.testmuai.com/support/docs/rook-command-ask/"
    },
    "headline": "rook ask Command",
    "description": "Give Rook a natural-language request and let its orchestrator answer from state or dispatch a command.",
    "url": "https://www.testmuai.com/support/docs/rook-command-ask/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Agent Assurance Platform",
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
    "dateModified": "2026-09-11"
  }) }}
/>

# <code>rook ask</code> Command

Use <code>rook ask</code> for one natural-language orchestrator turn without opening the TUI. Inside the TUI, prose entered without a leading slash follows the same classify-and-dispatch path.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-ask.png').default} alt="Current Rook ask command help showing JSON and verbose options" className="doc_img"/>

## Syntax

<VerifiedTag value="Verified" />

```bash
rook ask <prompt...>
rook ask <prompt...> --verbose
rook ask <prompt...> --json
```

| Option | Purpose |
|---|---|
| <code>--verbose</code> | Show subagent activity, tool activity, and credits while the request runs. |
| <code>--json</code> | Return machine-readable output for this command. |

The orchestrator can answer questions from Rook workspace state or dispatch an existing command. Requests that spend credits, invoke a target, or need permission still pass through the same gates as the explicit command.

<VerifiedTag value="Verified" />

```bash
rook ask "Which agent is active and is its tree synchronized?"
rook ask "Run only the boundary scenarios with the staging profile"
rook ask "Explain the latest failures" --verbose
```

For deterministic automation, prefer the explicit command and flags. Natural language is useful for attended work and one-off requests, but it is not a stable machine interface.

## Related Commands

[Command reference](/support/docs/agent-assurance-command-reference/) · [<code>/status</code>](/support/docs/rook-command-status/) · [<code>/help</code>](/support/docs/rook-command-help/)
