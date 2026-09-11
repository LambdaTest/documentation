---
id: rook-command-help
toc_max_heading_level: 2
title: Rook /help Command
sidebar_label: /help
description: List current Rook commands by purpose or show one command's subcommands and options.
slug: rook-command-help/
---

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/rook-command-help/"
    },
    "headline": "Rook /help Command",
    "description": "List current Rook commands by purpose or show one command's subcommands and options.",
    "url": "https://www.testmuai.com/support/docs/rook-command-help/",
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

# <code>/help</code> Command

Use <code>/help</code> to list the current command surface or inspect one command in full.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-help.png').default} alt="Current Rook help command help" className="doc_img"/>

## Syntax

~~~text
/help
/help <command>
~~~

From a shell:

~~~bash
rook help
rook help <command>
~~~

The overview groups commands into the testing sequence, workspace operations, and session/product operations. Command-specific help lists subcommands separately from cumulative options.

Help, slash-command completion, and shell parsing are derived from the same command registry. A renamed flag therefore changes all three surfaces together.

## Related Commands

[All commands](/support/docs/agent-assurance-command-reference/) · [<code>/guide</code>](/support/docs/rook-command-guide/) · [<code>/docs</code>](/support/docs/rook-command-docs/)
