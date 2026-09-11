---
id: rook-command-explore
toc_max_heading_level: 2
title: Rook /explore Command
sidebar_label: /explore
description: Discover agent behavior from documents, images, source files, or a local workspace.
slug: rook-command-explore/
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
          "name": "Rook /explore Command",
          "item": `${BRAND_URL}/support/docs/rook-command-explore/`
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
      "@id": "https://www.testmuai.com/support/docs/rook-command-explore/"
    },
    "headline": "Rook /explore Command",
    "description": "Discover agent behavior from documents, images, source files, or a local workspace.",
    "url": "https://www.testmuai.com/support/docs/rook-command-explore/",
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

# <code>/explore</code> Command

Use <code>/explore</code> to tell Rook what local material describes your agent. The target can be a PRD, an office document, an image, a documentation folder, an agent source directory, or a complete local repository.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-explore.png').default} alt="Rook explore command help with force and free-text guidance" className="doc_img"/>

## Syntax

<VerifiedTag value="Verified" />

~~~text
/explore [path] [instruction...] [--force] [--allow <exact-rule>] [--json] [--verbose]
~~~

From a shell, replace the leading slash with <code>rook</code>.

| Option | Purpose |
|---|---|
| <code>path</code> | Local file or directory. Defaults to the current directory. |
| <code>--force</code> | Re-read even when tracked files appear unchanged. |
| <code>instruction...</code> | Free-text guidance about what to emphasize or ignore. |
| <code>--allow &lt;rule&gt;</code> | Pre-authorize one exact tool rule for this launch. Repeatable. |
| <code>--json</code> | Emit machine-readable events. |
| <code>--verbose</code> | Include tool activity and credit-use details. |

## Real-world examples

PRD only:

<VerifiedTag value="Verified" />

~~~text
/explore docs/refund-agent-prd.md
~~~

PRD and knowledge base:

<VerifiedTag value="Verified" />

~~~text
/explore docs focus on PRD.md and knowledge, and treat them as intended behavior
~~~

Source workspace:

<VerifiedTag value="Verified" />

~~~text
/explore services/travel-agent
~~~

Headless:

<VerifiedTag value="Verified" />

~~~bash
rook explore docs/refund-agent-prd.md focus on refund approval rules --json
~~~

## Step-by-step

1. Select or create a project with <code>/project</code>, then choose the narrowest target path that contains enough evidence.
2. Add guidance when filenames alone do not express the intended scope.
3. Start exploration. Rook scans and hashes the target, and its discovery tools may read files immediately.
4. Review any later permission request before allowing a shell command or another gated operation.
5. Review the discovered features, tools, sources, and open questions.
6. Choose the active agent with <code>/agent</code>, generate scenarios, and use <code>/sync</code> when the local tree is ready to share.

## State and evidence

Discovery writes agent and feature records below the selected project's directory in <code>.testmuai/rook/projects/</code>. Incremental exploration reuses unchanged material; <code>--force</code> bypasses that optimization. Exploration is local-first and does not publish a new project version until <code>/sync</code> succeeds.

A PRD or knowledge base describes what should happen. It cannot prove which tools the deployed agent implements or whether a live action succeeded.

## Limitations and errors

- URLs are rejected as exploration targets. For GitHub, clone your own repository and explore the local checkout.
- Rook extracts text and structure from PDF, DOCX, and XLSX files and can inspect common image formats. Password-protected, corrupt, or unsupported files are reported instead of silently treated as text.
- There is no pre-read approval screen. For a target inside the launch workspace, the path narrows discovery but is not a filesystem access boundary: discovery tools remain rooted at the launch workspace and can inspect sibling files. If siblings are sensitive, copy the allowed materials into an isolated workspace before starting Rook, or configure explicit deny rules.
- If the result contains the wrong boundary, rerun with a narrower path and explicit guidance.

## Related commands

[<code>/project</code>](/support/docs/rook-command-project/) · [<code>/agent</code>](/support/docs/rook-command-agent/) · [<code>/generate</code>](/support/docs/rook-command-generate/) · [<code>/sync</code>](/support/docs/rook-command-sync/)
