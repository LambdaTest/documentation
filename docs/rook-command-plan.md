---
id: rook-command-plan
toc_max_heading_level: 2
title: Rook /plan Command
sidebar_label: /plan
description: View the signed-in TestMu AI account plan and available Rook credits.
slug: rook-command-plan/
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
      "@id": "https://www.testmuai.com/support/docs/rook-command-plan/"
    },
    "headline": "Rook /plan Command",
    "description": "View the signed-in TestMu AI account plan and available Rook credits.",
    "url": "https://www.testmuai.com/support/docs/rook-command-plan/",
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

# <code>/plan</code> Command

Use <code>/plan</code> to check the TestMu AI account plan and credit balance before generating or executing a suite.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-plan.png').default} alt="Rook plan command help" className="doc_img"/>

## Syntax

~~~text
/plan
~~~

Headless:

~~~bash
rook plan
~~~

## Real-world use

Before generating 50 refund scenarios:

~~~text
/plan
/generate --total 15
~~~

The plan response is account-level information from TestMu AI. During a long operation, the TUI status bar also shows the balance and credits used by the current session.

## What changes

Nothing in the project is changed. The command reads the authenticated account and credit balance.

## Common problems

- If authentication is missing or expired, run <code>/login</code> and <code>/auth status</code>.
- If the controller cannot be reached, run <code>/doctor</code>.
- In automation, treat the command's exit status as the health check; <code>plan</code> currently prints human-readable output.

## Related commands

[<code>/auth</code>](/support/docs/rook-command-auth/) · [<code>/login</code>](/support/docs/rook-command-login/) · [<code>/status</code>](/support/docs/rook-command-status/)
