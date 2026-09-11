---
id: rook-command-login
toc_max_heading_level: 2
title: Rook /login Command
sidebar_label: /login
description: Sign in to Rook through the TestMu AI browser authentication flow.
slug: rook-command-login/
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
      "@id": "https://www.testmuai.com/support/docs/rook-command-login/"
    },
    "headline": "Rook /login Command",
    "description": "Sign in to Rook through the TestMu AI browser authentication flow.",
    "url": "https://www.testmuai.com/support/docs/rook-command-login/",
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

# <code>/login</code> Command

Use <code>/login</code> when Rook has no stored credential or the existing token is invalid.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-login.png').default} alt="Rook login command help" className="doc_img"/>

## Syntax

Interactive:

~~~text
/login
~~~

Headless launcher:

~~~bash
rook login
~~~

## Step-by-step

1. Run <code>/login</code> or <code>rook login</code>.
2. Complete the TestMu AI flow in the browser.
3. Return to the terminal.
4. Verify the identity with <code>/auth status</code> or <code>rook whoami</code>.

## State and security

Successful login stores credentials in the global Rook home, not the project directory. Do not copy that state into a repository or share it between users.

If a browser cannot open, follow the URL or instruction printed by the command. Do not paste login callbacks or tokens into tickets or screenshots.

## Common problems

- Browser opens with the wrong account: sign out there or use a separate browser profile, then retry.
- Status still invalid: run <code>/logout</code>, then start a fresh login.
- Controller unreachable: diagnose network and environment with <code>rook doctor</code>.

## Related commands

[Installation](/support/docs/rook-installation/) · [<code>/auth</code>](/support/docs/rook-command-auth/) · [<code>rook whoami</code>](/support/docs/rook-command-whoami/) · [<code>/logout</code>](/support/docs/rook-command-logout/)
