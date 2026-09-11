---
id: rook-command-status
toc_max_heading_level: 2
title: Rook /status Command
sidebar_label: /status
description: Compare local Rook agent state with upstream versions and inspect pending run synchronization.
slug: rook-command-status/
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
          "name": "Rook /status Command",
          "item": `${BRAND_URL}/support/docs/rook-command-status/`
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
      "@id": "https://www.testmuai.com/support/docs/rook-command-status/"
    },
    "headline": "Rook /status Command",
    "description": "Compare local Rook agent state with upstream versions and inspect pending run synchronization.",
    "url": "https://www.testmuai.com/support/docs/rook-command-status/",
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

# <code>/status</code> Command

Use <code>/status</code> to understand where the current machine stands before synchronizing or running tests.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-status.png').default} alt="Rook status command help showing agent and JSON options" className="doc_img"/>

## Syntax

<VerifiedTag value="Verified" />

~~~text
/status
/status --agent <id>
/status --json
~~~

The shell form is <code>rook status</code> with the same options.

## Tree States

| State | Meaning | Next action |
|---|---|---|
| <code>unsynced</code> | This agent has never been recorded upstream. | Run <code>/sync</code>. |
| <code>clean</code> | Local content matches the recorded version. | No action. |
| <code>ahead</code> | Local content changed after the last sync. | Review and run <code>/sync</code>. |
| <code>behind</code> | Upstream advanced while this machine stayed on an older version. | Reconcile upstream changes before syncing. |
| <code>diverged</code> | Local and upstream histories both moved. | Reconcile the branch; Rook does not overwrite it silently. |
| <code>unknown</code> | Local state is known, but upstream could not be checked. | Restore connectivity and rerun status. |

Status returns upstream run information for <code>--agent</code>, or for the active agent when the option is omitted. It identifies unfinished local runs and completed runs whose scenario results still need reconciliation.

Status exits successfully even when the tree is not clean; the state is data, not a command failure. In automation, inspect the <code>--json</code> response.

## Related Commands

[<code>/sync</code>](/support/docs/rook-command-sync/) · [<code>/runs</code>](/support/docs/rook-command-runs/) · [<code>/project</code>](/support/docs/rook-command-project/)
