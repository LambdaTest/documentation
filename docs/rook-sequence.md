---
id: rook-sequence
toc_max_heading_level: 2
title: The Rook Testing Sequence
hide_title: false
sidebar_label: The Sequence
description: Follow the Rook workflow from sign-in and discovery through scenario generation, live execution, evidence review, and synchronization.
keywords:
  - rook workflow
  - rook testing sequence
  - autonomous agent testing workflow
url: https://www.testmuai.com/support/docs/rook-sequence/
site_name: TestMu AI
slug: rook-sequence/
canonical: https://www.testmuai.com/support/docs/rook-sequence/
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
          "name": "The Rook Testing Sequence",
          "item": `${BRAND_URL}/support/docs/rook-sequence/`
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
      "@id": "https://www.testmuai.com/support/docs/rook-sequence/"
    },
    "headline": "The Rook Testing Sequence",
    "description": "Follow the Rook workflow from sign-in and discovery through scenario generation, live execution, evidence review, and synchronization.",
    "url": "https://www.testmuai.com/support/docs/rook-sequence/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Agent Assurance Platform",
    "keywords": [
      "rook workflow",
      "rook testing sequence",
      "autonomous agent testing workflow"
    ],
    "proficiencyLevel": "Beginner",
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

# The Rook Testing Sequence

The first complete Rook journey has nine steps. After the initial setup, repeat only the phases affected by your agent or test changes.

Choose the environment first: public packages default to production. Use <code>export ROOK_ENV=stage</code> for the [stage Web UI](/support/docs/rook-web-ui/).

## First-Run Sequence

| Step | Command | Result |
|---|---|---|
| 1 | `rook login` | Sign in to TestMu AI. Authentication is shared by terminals using the same Rook home. |
| 2 | `rook project` | Select the project that owns the agents, scenarios, profiles, and runs. |
| 3 | `rook explore .` | Inspect the codebase and derive the agents and features it contains. |
| 4 | `rook agent` | Select an agent when discovery found more than one. |
| 5 | `rook generate` | Create functional and adversarial scenarios for the active agent. |
| 6 | `rook profile add` | Describe how to reach the live target; Rook writes and verifies the invocation hooks. |
| 7 | `rook sync` | Publish the reviewed project tree before a timeline run. |
| 8 | `rook run` | Invoke the agent and grade each scenario. |
| 9 | `rook ui` | Open the hosted results; add `--local` for on-disk evidence. |

You can request a later operation before completing every earlier one. Rook reports what is missing, or presents the prerequisite plan and estimated cost before it spends credits. Use `rook status` at any point to see where the workspace stands.

## Interactive and Shell Surfaces

Rook has one command set with two surfaces:

<VerifiedTag value="Verified" />

```text
# Interactive TUI
/explore .
/generate
/run
```

<VerifiedTag value="Verified" />

```bash
# Shell or CI
rook explore .
rook generate
rook run
```

The leading slash belongs only to the interactive session. Command behavior and stored state are shared.

Bare `/project`, `/agent`, and `/profile` commands open pickers. Use the arrow keys and **Enter** to select the active record. The picker is the list; these command families do not require a separate `list` subcommand.

## Ask in Plain Language

Use `rook ask` when you know the outcome but not the command:

<VerifiedTag value="Verified" />

```bash
rook ask "generate adversarial tests for refund-policy bypasses"
```

Rook resolves the request to the appropriate operation. Any operation that spends credits or needs permission still shows its plan and asks first.

## Local Changes and Sync

Exploration, generation, profile authoring, and curation write plain files under `.testmuai/rook/`. They do not silently publish workspace state.

`rook sync` records the current project tree upstream. Profile files contain environment-variable references, never their secret values. Run results are saved locally as they happen and can be reconciled upstream after connectivity returns.

## When to Repeat a Step

| Change | Repeat |
|---|---|
| Agent source, prompt, tools, or policy changed | `explore`, then regenerate affected scenarios |
| Test intent changed without an implementation change | `generate` with an instruction, then curate |
| Endpoint, authentication, or response shape changed | `profile test`, then `profile fix` if needed |
| Only the deployed target changed | `run` against the intended profile |
| Evidence arrives asynchronously | Continue the same run with `--run <id> --phases collect,judge` |
| Local project metadata needs publishing | `sync` |

## Related Documentation

- [Tested quickstart](/support/docs/agent-assurance-quickstart/)
- [Rook concepts](/support/docs/rook-concepts/)
- [Profiles and hooks](/support/docs/rook-profiles-and-hooks/)
- [Running scenarios](/support/docs/agent-assurance-run-tests/)
