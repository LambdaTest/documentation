---
id: rook-command-auth
toc_max_heading_level: 2
title: Rook /auth Command
sidebar_label: /auth
description: Verify that Rook's stored authentication token is currently valid.
slug: rook-command-auth/
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
          "name": "Rook /auth Command",
          "item": `${BRAND_URL}/support/docs/rook-command-auth/`
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
      "@id": "https://www.testmuai.com/support/docs/rook-command-auth/"
    },
    "headline": "Rook /auth Command",
    "description": "Verify that Rook's stored authentication token is currently valid.",
    "url": "https://www.testmuai.com/support/docs/rook-command-auth/",
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

# <code>/auth</code> Command

Use <code>/auth</code> to verify the effective credentials against the Rook controller.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-auth.png').default} alt="Rook auth command help showing the status subcommand" className="doc_img"/>

## Syntax

<VerifiedTag value="Verified" />

```text
/auth
/auth status
```

Headless:

<VerifiedTag value="Verified" />

```bash
rook auth status
rook whoami
```

<code>/auth</code> and <code>/auth status</code> perform the same status check. <code>rook whoami</code> is the convenient headless alias.

## Step-by-step

1. Run <code>/auth status</code>.
2. Confirm that the effective credentials and environment are correct.
3. If invalid, use <code>/login</code>.
4. Run the status check again.

## State and privacy

The status check verifies the effective authentication remotely. Exported <code>LT_USERNAME</code> and <code>LT_ACCESS_KEY</code> take precedence over a stored token. It does not print the token or change project data. Use <code>rook whoami</code> when you also want to see the authenticated identity.

Stored authentication is shared by sessions using the same Rook home, profile, and environment, not scoped to one agent workspace. See [login](/support/docs/rook-command-login/) for stage and unattended authentication.

## Common problems

- Expired or revoked token: sign in again.
- Controller unreachable: run <code>/doctor</code> and check network access.
- Wrong account: check exported LT credentials and the selected environment before changing stored login.

## Related commands

[<code>rook whoami</code>](/support/docs/rook-command-whoami/) · [<code>/login</code>](/support/docs/rook-command-login/) · [<code>/logout</code>](/support/docs/rook-command-logout/) · [<code>/doctor</code>](/support/docs/rook-command-doctor/)
