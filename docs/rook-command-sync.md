---
id: rook-command-sync
toc_max_heading_level: 2
title: Rook /sync Command
sidebar_label: /sync
description: Record the current local Rook project tree upstream as one deliberate write.
slug: rook-command-sync/
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
          "name": "Rook /sync Command",
          "item": `${BRAND_URL}/support/docs/rook-command-sync/`
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
      "@id": "https://www.testmuai.com/support/docs/rook-command-sync/"
    },
    "headline": "Rook /sync Command",
    "description": "Record the current local Rook project tree upstream as one deliberate write.",
    "url": "https://www.testmuai.com/support/docs/rook-command-sync/",
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

# <code>/sync</code> Command

Use <code>/sync</code> after exploration, generation, profile changes, or manual edits to record the local project tree upstream.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-sync.png').default} alt="Rook sync command help showing agent and JSON options" className="doc_img"/>

## Syntax

<VerifiedTag value="Verified" />

~~~text
/sync
/sync --agent <id>
/sync --json
~~~

The shell form is <code>rook sync</code> with the same options.

## What Sync Records

By default, Rook sends every local agent in the selected project as one transaction. The payload includes each agent's specification, features, scenarios, profiles, call relationships, and content hashes. Secret values are not included; profiles record required environment-variable names while hook scripts read values from <code>process.env</code>.

An agent version pins its specification, features, and scenarios. Profile revisions are recorded separately, so changing an endpoint does not create a new agent version.

## No-op and Conflict Behavior

- If nothing changed, Rook sends nothing and does not create a duplicate version.
- If local content changed, sync advances the upstream version.
- If another machine advanced the same agent first, Rook records the local version as a branch and reports the conflict instead of overwriting upstream state.
- An agent directory with no readable specification is skipped and reported.

Use <code>/status</code> before and after synchronization to see the local/upstream relationship.

## Run Requirement

A timeline run requires the agent to have been synchronized at least once. When the tree changes later, an attended run can ask whether to sync or use test mode. In CI, choose explicitly between <code>rook sync</code> and <code>rook run --test</code>.

## Related Commands

[<code>/status</code>](/support/docs/rook-command-status/) · [<code>/run</code>](/support/docs/rook-command-run/) · [<code>/runs</code>](/support/docs/rook-command-runs/)
