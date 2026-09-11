---
id: rook-command-whoami
toc_max_heading_level: 2
title: rook whoami Command
sidebar_label: rook whoami
description: Check the current Rook account from a shell or automation.
slug: rook-command-whoami/
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
      "@id": "https://www.testmuai.com/support/docs/rook-command-whoami/"
    },
    "headline": "rook whoami Command",
    "description": "Check the current Rook account from a shell or automation.",
    "url": "https://www.testmuai.com/support/docs/rook-command-whoami/",
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

# <code>rook whoami</code> Command

Use <code>rook whoami</code> outside the interactive terminal to verify which TestMu AI account is authenticated.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-whoami.png').default} alt="Rook whoami command help" className="doc_img"/>

## Syntax

~~~bash
rook whoami
~~~

This is an alias for:

~~~bash
rook auth status
~~~

## Real-world uses

Verify a workstation before testing:

~~~bash
rook whoami
rook plan
~~~

Fail an automation setup step when a Rook identity is unavailable:

~~~bash
rook whoami
~~~

## State and errors

The command verifies the stored token, prints the account identity, and exits. It does not change project data or invoke an agent. Its output is human-readable in the current release.

If it reports no or invalid authentication, run <code>rook login</code>. If it reports the wrong account, log out first; credentials are shared by Rook workspaces using the same Rook home.

## Related commands

[<code>/auth</code>](/support/docs/rook-command-auth/) · [<code>/login</code>](/support/docs/rook-command-login/) · [<code>/logout</code>](/support/docs/rook-command-logout/) · [<code>/plan</code>](/support/docs/rook-command-plan/)
