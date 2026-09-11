---
id: kane-cli-evidence-viewing
title: Viewing Evidence Packs
sidebar_label: Viewing Evidence
description: "Open a kane-cli evidence pack in the hosted viewer with kane-cli evidence serve, a localhost-only server that uploads nothing."
keywords:
  - kane cli evidence serve
  - evidence viewer
  - view evidence pack
  - evidence lambdatest com
  - kaneai
  - testmu ai
url: https://www.testmuai.com/support/docs/kane-cli-evidence-viewing/
site_name: TestMu AI
slug: kane-cli-evidence-viewing/
canonical: https://www.testmuai.com/support/docs/kane-cli-evidence-viewing/
---
import VerifiedTag from '@site/src/component/verifiedTag';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.testmuai.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.testmuai.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Kane CLI",
          "item": "https://www.testmuai.com/support/docs/kane-cli-introduction/"
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
      "@id": "https://www.testmuai.com/support/docs/kane-cli-evidence-viewing/"
    },
    "headline": "Viewing Evidence Packs",
    "description": "Open a kane-cli evidence pack in the hosted viewer with kane-cli evidence serve, a localhost-only server that uploads nothing.",
    "url": "https://www.testmuai.com/support/docs/kane-cli-evidence-viewing/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Kane CLI",
    "keywords": [
      "kane cli evidence serve",
      "evidence viewer",
      "view evidence pack"
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
    "hasPart": [
      {
        "@type": "SoftwareSourceCode",
        "name": "After a run in an interactive terminal, kane-cli offers to open the pack",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "View evidence in browser? (y/N)"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "kane-cli prints a hint line to stderr instead",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "evidence: view locally with `kane-cli evidence serve <path-to-pack>`"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Serves one or more sealed packs to the hosted viewer",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "kane-cli evidence serve .testmuai/evidence/<execution_id>.evidence"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "kane-cli evidence serve",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "serving 1 pack on http://127.0.0.1:54321\n<execution_id>.evidence\n  pack    http://127.0.0.1:54321/<token>/<execution_id>.evidence\n  viewer  https://evidence.lambdatest.com/?pack=http%3A%2F%2F127.0.0.1%3A54321%2F...\npress Ctrl-C to stop"
      }
    ],
    "dateModified": "2026-08-21T00:24:19+05:30"
  }) }}
/>

A sealed pack opens in the hosted viewer. When you serve a pack with `kane-cli evidence serve`, the server is local only and nothing is uploaded, because the viewer page reads the pack bytes from your machine.

## After a run

After a run in an interactive terminal, kane-cli offers to open the pack:

<VerifiedTag value="Verified" />

```text
View evidence in browser? (y/N)
```

Accepting starts a local server and opens the hosted viewer pointed at your pack.

In agent or non-interactive runs there is no prompt. kane-cli prints a hint line to stderr instead:

<VerifiedTag value="Verified" />

```text
evidence: view locally with `kane-cli evidence serve <path-to-pack>`
```

## `kane-cli evidence serve`

Serves one or more sealed packs to the hosted viewer:

<VerifiedTag value="Verified" />

```bash
kane-cli evidence serve .testmuai/evidence/<execution_id>.evidence
```

<VerifiedTag value="Verified" />

```text
serving 1 pack on http://127.0.0.1:54321
<execution_id>.evidence
  pack    http://127.0.0.1:54321/<token>/<execution_id>.evidence
  viewer  https://evidence.lambdatest.com/?pack=http%3A%2F%2F127.0.0.1%3A54321%2F...
press Ctrl-C to stop
```

Open the `viewer` URL in your browser.

| Flag | Description | Default |
|---|---|---|
| `--port <n>` | Pin the local port | ephemeral |
| `--viewer-url <base>` | Override the hosted viewer base URL | environment's viewer |
| `--env <name>` | Environment (`prod` or `stage`) | active profile's env |

`serve` accepts sealed `.evidence` files only. A live, unsealed pack directory is rejected.

Exit codes: `0` after a clean Ctrl-C shutdown, `2` for any bad input or a port that cannot be bound.

:::note
The server binds to `127.0.0.1` only and uses a random per-instance token in the URL path. Nothing is uploaded anywhere.
:::

## The hosted viewer

The viewer at `https://evidence.lambdatest.com` is a static page that opens packs three ways:

- a `?pack=<url>` query parameter, which is what `evidence serve` and the post-run offer construct for you,
- drag and drop of a `.evidence` file,
- a file picker.

It remembers your recently opened packs, and reads packs with ranged requests, so even a very large pack opens after fetching only a few kilobytes.

## Next steps

- [Debugging a failed run](/support/docs/kane-cli-evidence-debugging/) — what to look at first.
- [Validating packs](/support/docs/kane-cli-evidence-validate/) — if a pack will not open.
