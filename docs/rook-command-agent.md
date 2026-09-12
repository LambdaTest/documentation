---
id: rook-command-agent
toc_max_heading_level: 2
title: Rook /agent Command
sidebar_label: /agent
description: List or select autonomous agents discovered in the active Rook project.
slug: rook-command-agent/
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
          "name": "Rook /agent Command",
          "item": `${BRAND_URL}/support/docs/rook-command-agent/`
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
      "@id": "https://www.testmuai.com/support/docs/rook-command-agent/"
    },
    "headline": "Rook /agent Command",
    "description": "List or select autonomous agents discovered in the active Rook project.",
    "url": "https://www.testmuai.com/support/docs/rook-command-agent/",
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

# <code>/agent</code> Command

Use <code>/agent</code> when the selected project contains several discovered agents or when you need to confirm which agent later phases use.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-agent.png').default} alt="Current Rook agent command help showing the use subcommand" className="doc_img"/>

## Syntax

<VerifiedTag value="Verified" />

~~~text
/agent
/agent use <id>
~~~

From a shell:

<VerifiedTag value="Verified" />

~~~bash
rook agent
rook agent use <id>
~~~

Bare <code>/agent</code> opens a picker and marks the active agent. Bare <code>rook agent</code> prints the same inventory. There is no separate <code>list</code> subcommand.

Selecting an agent changes the active-agent pointer inside the selected project; it does not invoke the live target. The active agent determines which specification, features, scenarios, profiles, runs, reports, and sync state later commands use.

Agent removal is intentionally not a command. Rook's project data is stored as readable files; remove or edit it through the reviewed repository workflow when that is genuinely required.

## Example

<VerifiedTag value="Verified" />

~~~text
/agent
/agent use refund-agent
/generate --total 12 -- focus on eligibility and duplicate refunds
~~~

## Related Commands

[<code>/project</code>](/support/docs/rook-command-project/) · [<code>/explore</code>](/support/docs/rook-command-explore/) · [<code>/generate</code>](/support/docs/rook-command-generate/)
