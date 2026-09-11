---
id: rook-command-login
toc_max_heading_level: 2
title: Rook /login Command
sidebar_label: /login
description: Sign in to Rook through the TestMu AI browser authentication flow.
slug: rook-command-login/
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
          "name": "Rook /login Command",
          "item": `${BRAND_URL}/support/docs/rook-command-login/`
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

# <code>/login</code> Command

Use <code>/login</code> when Rook has no stored credential or the existing token is invalid.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-login.png').default} alt="Rook login command help" className="doc_img"/>

## Syntax

Interactive:

<VerifiedTag value="Verified" />

```text
/login
```

Headless launcher:

<VerifiedTag value="Verified" />

```bash
rook login
```

## Choose the Environment

Public packages default to production. For [stage results](/support/docs/rook-web-ui/), set <code>export ROOK_ENV=stage</code> before signing in. Browser sessions and CLI credentials are separate; use the same account and environment in both.

## Unattended Authentication

Rook 0.1.3 accepts <code>LT_USERNAME</code> and <code>LT_ACCESS_KEY</code> from the shell or CI secret manager. When both are present, operations use them ahead of any stored browser login. Supplying only one is an error.

<code>rook login</code> also accepts <code>--username</code>, <code>--access-key</code>, and <code>--oauth</code>. Prefer secret-manager environment injection over literal command arguments. To use a stored OAuth account consistently, unset both LT variables in that terminal; forcing OAuth login does not stop exported credentials taking precedence in later commands.

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
- Status still invalid: check <code>ROOK_ENV</code> and whether exported LT credentials override the stored login before signing in again.
- Controller unreachable: diagnose network and environment with <code>rook doctor</code>.

## Related commands

[Installation](/support/docs/rook-installation/) · [<code>/auth</code>](/support/docs/rook-command-auth/) · [<code>rook whoami</code>](/support/docs/rook-command-whoami/) · [<code>/logout</code>](/support/docs/rook-command-logout/)
