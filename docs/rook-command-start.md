---
id: rook-command-start
toc_max_heading_level: 2
title: rook Command
sidebar_label: rook
description: Start the interactive Rook terminal and continue an autonomous agent testing workflow.
slug: rook-command-start/
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
          "name": "rook Command",
          "item": `${BRAND_URL}/support/docs/rook-command-start/`
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
      "@id": "https://www.testmuai.com/support/docs/rook-command-start/"
    },
    "headline": "rook Command",
    "description": "Start the interactive Rook terminal and continue an autonomous agent testing workflow.",
    "url": "https://www.testmuai.com/support/docs/rook-command-start/",
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

# <code>rook</code> Command

Use <code>rook</code> to start the interactive terminal in the workspace whose agent material and testing state you want to use.

<img loading="lazy" src={require('../assets/images/rook/rook-terminal-home.png').default} alt="Current Rook terminal home and workflow" className="doc_img"/>

## Syntax

<VerifiedTag value="Verified" />

~~~bash
rook
rook --no-animation
rook --version
rook --help
~~~

The TUI keeps the active project, agent, profile, credits, command duration, progress, and permission questions visible. Use <code>--no-animation</code> for recordings, slow terminals, or a static startup.

## First Start

1. Change to the workspace containing your checked-out agent, PRD, or test specification.
2. Run <code>rook</code>.
3. Use <code>/login</code> if the session is not authenticated.
4. Choose a project with <code>/project</code>.
5. Enter <code>/guide</code> for the workflow or <code>/help</code> for every command.

Run Rook from the intended workspace. The current directory selects the local <code>.testmuai/rook/</code> store; project content is kept below <code>projects/&lt;project-id&gt;/</code>. The workspace is also the base for relative source, command, certificate, and evidence paths.

## Related Commands

[<code>/guide</code>](/support/docs/rook-command-guide/) · [<code>/help</code>](/support/docs/rook-command-help/) · [<code>/project</code>](/support/docs/rook-command-project/) · [<code>/exit</code>](/support/docs/rook-command-exit/)
