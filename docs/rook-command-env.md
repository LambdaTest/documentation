---
id: rook-command-env
toc_max_heading_level: 2
title: Rook /env Command
sidebar_label: /env
description: Store and manage secret values referenced by Rook invocation profiles.
slug: rook-command-env/
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
          "name": "Rook /env Command",
          "item": `${BRAND_URL}/support/docs/rook-command-env/`
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
      "@id": "https://www.testmuai.com/support/docs/rook-command-env/"
    },
    "headline": "Rook /env Command",
    "description": "Store and manage secret values referenced by Rook invocation profiles.",
    "url": "https://www.testmuai.com/support/docs/rook-command-env/",
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

# <code>/env</code> Command

Use <code>/env</code> to manage tokens, endpoint values, and other variables referenced by profiles without writing literal secrets into project files.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-env.png').default} alt="Rook environment command help with list set show and remove" className="doc_img"/>

## Syntax

<VerifiedTag value="Verified" />

~~~text
/env
/env list
/env set <json>
/env show <key>
/env rm <key>
~~~

The same commands work from a shell by replacing the leading slash with <code>rook</code>, for example <code>rook env list</code> and <code>rook env set '&#123;"API_KEY":"…"&#125;'</code>.

## Subcommands

| Command | Effect |
|---|---|
| <code>/env list</code> | List variable names and masked values. |
| <code>/env set &#123;"KEY":"value"&#125;</code> | Set one or several string values from one JSON object. Names are normalized to uppercase. |
| <code>/env show KEY</code> | Print the complete value into terminal scrollback. |
| <code>/env rm KEY</code> | Remove the stored value. |

## Recommended secret flow

<VerifiedTag value="Verified" />

~~~text
/env set {"REFUND_API_TOKEN":"paste-value-here","AGENT_BASE_URL":"https://staging.example.com"}
/env list
/profile add staging
~~~

The generated hook script reads <code>process.env.REFUND_API_TOKEN</code>, and the profile records only the variable name and its purpose.

The current command requires the value as an argument. For sensitive values, prefer an attended TUI session and clear the terminal afterward; a shell command can remain in shell history. Avoid <code>/env show</code> unless full disclosure into scrollback is intentional.

## Storage and scope

Variables are stored with restrictive permissions in one file below the global Rook home. They are not written into the workspace's <code>.testmuai/rook/</code> profile files.

Each value is scoped to the current workspace's absolute path. Another workspace using the same Rook home does not inherit it. A variable exported by the shell shadows a different stored value with the same name.

When <code>/profile add</code> finds a credential in supplied material, the generated script must read it from an environment variable. Use the exact name shown by the authoring flow.

## Common problems

- Missing-variable profile error: set the exact case-sensitive key.
- Wrong endpoint or account: remove and reset the value, then rerun <code>/profile test</code>.
- Secret shown in a screenshot: rotate it immediately; masking in <code>/env list</code> does not undo earlier disclosure.

## Related commands

[<code>/profile</code>](/support/docs/rook-command-profile/) · [Prompt-based profiles](/support/docs/agent-assurance-profiles/) · [Lifecycle phases and hooks](/support/docs/rook-hooks-and-phases/)
