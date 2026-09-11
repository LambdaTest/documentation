---
id: rook-command-report
toc_max_heading_level: 2
title: Rook /report Command
sidebar_label: /report
description: Print findings from a local Rook run and optionally generate root-cause analysis for failure clusters.
slug: rook-command-report/
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
          "name": "Rook /report Command",
          "item": `${BRAND_URL}/support/docs/rook-command-report/`
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
      "@id": "https://www.testmuai.com/support/docs/rook-command-report/"
    },
    "headline": "Rook /report Command",
    "description": "Print findings from a local Rook run and optionally generate root-cause analysis for failure clusters.",
    "url": "https://www.testmuai.com/support/docs/rook-command-report/",
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

# <code>/report</code> Command

Use <code>/report</code> to read a stored run from disk. Without a run ID, Rook uses the most recent run for the active agent.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-report.png').default} alt="Current Rook report command help showing run ID, RCA, and allow options" className="doc_img"/>

## Syntax

<VerifiedTag value="Verified" />

~~~text
/report [run-id]
/report [run-id] --rca
/report [run-id] --rca --allow '<rule>'
~~~

The shell form is <code>rook report</code> with the same argument and options.

Without <code>--rca</code>, report is a free local read: it does not contact the target, create a session, or spend credits. With <code>--rca</code>, Rook groups failures, investigates likely causes, writes explanations into the report, and spends credits.

Use repeatable <code>--allow</code> rules only when an RCA verifier needs a reviewed tool operation in unattended execution.

## Related Commands

[Results and evidence](/support/docs/agent-assurance-results-and-evidence/) · [<code>/run</code>](/support/docs/rook-command-run/) · [<code>/ui</code>](/support/docs/rook-command-ui/)
