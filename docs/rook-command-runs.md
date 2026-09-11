---
id: rook-command-runs
toc_max_heading_level: 2
title: Rook /runs Command
sidebar_label: /runs
description: Reconcile completed local Rook runs whose results were not fully recorded upstream.
slug: rook-command-runs/
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
          "name": "Rook /runs Command",
          "item": `${BRAND_URL}/support/docs/rook-command-runs/`
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
      "@id": "https://www.testmuai.com/support/docs/rook-command-runs/"
    },
    "headline": "Rook /runs Command",
    "description": "Reconcile completed local Rook runs whose results were not fully recorded upstream.",
    "url": "https://www.testmuai.com/support/docs/rook-command-runs/",
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

# <code>/runs</code> Command

Use <code>/runs sync</code> when a run completed locally but a network or service interruption prevented all verdicts from reaching upstream.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-runs.png').default} alt="Rook runs command help showing the sync subcommand" className="doc_img"/>

## Syntax

<VerifiedTag value="Verified" />

~~~text
/runs sync
/runs sync <agent-id>
~~~

From a shell:

<VerifiedTag value="Verified" />

~~~bash
rook runs sync
rook runs sync <agent-id>
~~~

The active agent is used when no ID is supplied.

## What It Does

Rook reads completed run evidence already on disk and posts only records still owed upstream. It does not invoke the target, rejudge scenarios, call a model, or spend credits.

This command repairs result synchronization. Use <code>/sync</code> for agent specifications, features, scenarios, and profile revisions.

## Related Commands

[<code>/status</code>](/support/docs/rook-command-status/) · [<code>/sync</code>](/support/docs/rook-command-sync/) · [<code>/report</code>](/support/docs/rook-command-report/)
