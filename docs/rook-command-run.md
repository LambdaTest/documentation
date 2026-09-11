---
id: rook-command-run
toc_max_heading_level: 2
title: Rook /run Command
sidebar_label: /run
description: Plan and run scenarios through prepare, open, execute, close, collect, and judge phases against a live agent.
slug: rook-command-run/
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
          "name": "Rook /run Command",
          "item": `${BRAND_URL}/support/docs/rook-command-run/`
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
      "@id": "https://www.testmuai.com/support/docs/rook-command-run/"
    },
    "headline": "Rook /run Command",
    "description": "Plan and run scenarios through prepare, open, execute, close, collect, and judge phases against a live agent.",
    "url": "https://www.testmuai.com/support/docs/rook-command-run/",
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

# <code>/run</code> Command

Use <code>/run</code> to plan a selection, execute the active profile's lifecycle hooks, collect evidence, and judge each acceptance criterion.

<img loading="lazy" src={require('../assets/images/rook/commands/rook-command-run.png').default} alt="Current Rook run command help with lifecycle phases, continuation, selection, profile, test, resume, and RCA options" className="doc_img"/>

## Syntax

<VerifiedTag value="Verified" />

~~~text
/run [selection options] [-- free-text instruction]
~~~

The shell form is <code>rook run</code> with the same options.

| Option | Purpose |
|---|---|
| <code>--only &lt;ids&gt;</code> | Run only comma-separated scenario IDs. |
| <code>--class &lt;names&gt;</code> | Filter by <code>functional</code>, <code>non_functional</code>, or <code>adversarial</code>. |
| <code>--category &lt;names&gt;</code> | Filter by comma-separated categories. |
| <code>--tag &lt;names&gt;</code> | Filter by comma-separated tags. |
| <code>--profile &lt;ref&gt;</code> | Override the active profile for this run. |
| <code>--name &lt;name&gt;</code> | Give the run a readable label. |
| <code>--phases &lt;names&gt;</code> | Run only a contiguous selection of <code>prepare</code>, <code>open</code>, <code>execute</code>, <code>close</code>, <code>collect</code>, and <code>judge</code>. |
| <code>--skip &lt;names&gt;</code> | Run everything except the named phases. Cannot be combined with <code>--phases</code>. |
| <code>--concurrency &lt;n&gt;</code> | Run 1 to 8 scenarios at once. An explicit value overrides the planner. |
| <code>--test</code> | Run the current tree without placing the result on the shared project timeline. |
| <code>--run &lt;id&gt;</code> | Continue that same run in place with the phases selected by <code>--phases</code>. |
| <code>--resume &lt;id&gt;</code> | Carry compatible completed work forward from an earlier run. |
| <code>--rca</code> | Explain failure clusters and what to change; this spends additional credits. |
| <code>--allow &lt;rule&gt;</code> | Pre-authorize one exact tool rule for this launch. Repeatable. |
| <code>--json</code> | Emit machine-readable events. |
| <code>--verbose</code> | Show tool activity and credits as work happens. |

## Examples

<VerifiedTag value="Verified" />

~~~text
/run --only SC-001,SC-004 --concurrency 1
/run --class adversarial --profile staging --name security-gate
/run --test -- investigate the current unsynchronized changes
/run --phases prepare,open,execute,close
/run --run 01JABC... --phases collect,judge
/run --resume 01JABC... --rca
~~~

Before target execution, Rook writes and shows a run plan. In the TUI you can proceed, discard it, or describe a change. Headless runs proceed with the written plan, so use explicit filters in version-controlled CI configuration.

A normal timeline run requires an agent that has been synchronized at least once. If the current tree changed, use <code>/sync</code> or intentionally choose <code>--test</code>.

## Lifecycle Phase Selection

The fixed order is:

<VerifiedTag value="Verified" />

~~~text
prepare → open → execute → close → collect → judge
~~~

The first five points are profile hooks; <code>judge</code> is Rook's evaluation phase. <code>prepare</code> runs once per run, <code>execute</code> runs once per turn, and <code>open</code>, <code>close</code>, and <code>collect</code> run per scenario when the profile defines them.

Partial execution is useful when logs or traces arrive later. Run the target through <code>close</code>, keep the run ID, then use <code>--run</code> to add <code>collect</code> and <code>judge</code> to the same run. This differs from <code>--resume</code>, which starts a new run and carries compatible completed work into it.

Rook sorts selected phases into lifecycle order and refuses an invalid hole when a later phase depends on a defined phase that was skipped.

:::warning Live side effects
The target's writes are real. Rook cannot roll them back. Use staging data and start with one harmless scenario.
:::

## Related Commands

[Lifecycle phases and hooks](/support/docs/rook-hooks-and-phases/) · [Run tests](/support/docs/agent-assurance-run-tests/) · [<code>/sync</code>](/support/docs/rook-command-sync/) · [<code>/runs</code>](/support/docs/rook-command-runs/) · [<code>/report</code>](/support/docs/rook-command-report/)
