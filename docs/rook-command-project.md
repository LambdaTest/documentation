---
id: rook-command-project
toc_max_heading_level: 2
title: Rook /project Command
sidebar_label: /project
description: List, select, or create the TestMu AI project that owns the current Rook workspace.
slug: rook-command-project/
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
          "name": "Rook /project Command",
          "item": `${BRAND_URL}/support/docs/rook-command-project/`
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
      "@id": "https://www.testmuai.com/support/docs/rook-command-project/"
    },
    "headline": "Rook /project Command",
    "description": "List, select, or create the TestMu AI project that owns the current Rook workspace.",
    "url": "https://www.testmuai.com/support/docs/rook-command-project/",
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

# <code>/project</code> Command

Use <code>/project</code> to choose the TestMu AI project that owns discovered agents, versions, and runs in the current workspace.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-project.png').default} alt="Rook project command help showing use and create subcommands" className="doc_img"/>

## Syntax

<VerifiedTag value="Verified" />

~~~text
/project
/project use <id>
/project create <name>
~~~

From a shell:

<VerifiedTag value="Verified" />

~~~bash
rook project
rook project use <id>
rook project create <name>
~~~

## Behavior

| Command | Effect |
|---|---|
| <code>/project</code> | Open a TUI picker. In a shell, print available projects and mark the active one. |
| <code>/project use &lt;id&gt;</code> | Validate the project against TestMu AI and save it as the active project for this workspace. |
| <code>/project create &lt;name&gt;</code> | Create a project and select it immediately. |

The active-project pointer is stored locally, alongside a separate working tree for each selected project. TestMu AI remains the authority for the projects the account can access.

## Why Selection Comes First

Rook scopes the local agent tree below the project ID. Switching projects changes which active agent, features, scenarios, profiles, and runs Rook sees; switching back restores that project's previous active agent.

If access to the active project is revoked, Rook asks you to choose another project. Signing in again does not repair a project-level permission failure.

## Related Commands

[<code>/status</code>](/support/docs/rook-command-status/) · [<code>/explore</code>](/support/docs/rook-command-explore/) · [<code>/sync</code>](/support/docs/rook-command-sync/)
