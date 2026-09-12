---
id: kane-cli-checkpoint-title
title: Title Assertions
sidebar_label: Title
description: "Verify the browser tab document.title, useful for confirming navigation reached the expected page."
keywords:
  - page title assertion
  - document.title
  - kane cli
  - testmu ai
url: https://www.testmuai.com/support/docs/kane-cli-checkpoint-title/
site_name: TestMu AI
slug: kane-cli-checkpoint-title/
canonical: https://www.testmuai.com/support/docs/kane-cli-checkpoint-title/
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
          "name": "Title Assertions",
          "item": "https://www.testmuai.com/support/docs/kane-cli-checkpoint-title/"
        }]
      }) }}
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
      "@id": "https://www.testmuai.com/support/docs/kane-cli-checkpoint-title/"
    },
    "headline": "Title Assertions",
    "description": "Verify the browser tab document.title, useful for confirming navigation reached the expected page.",
    "url": "https://www.testmuai.com/support/docs/kane-cli-checkpoint-title/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Kane CLI",
    "keywords": [
      "page title assertion",
      "document.title",
      "kane cli"
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
        "name": "Assertions",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "Assert: page title contains \"Dashboard\"\nAssert: title is \"My Account - Settings\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Extractions",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "Store the page title"
      }
    ],
    "dateModified": "2026-07-03T19:09:57+05:30"
  }) }}
/>

Title assertions check the browser tab's document title (`document.title`).

## When It's Used

- Page title verification: "title contains Dashboard"
- Navigation confirmation: "title is Home Page"

## Examples

### Assertions

<VerifiedTag value="Verified" />

```
Assert: page title contains "Dashboard"
Assert: title is "My Account - Settings"
```

### Extractions

<VerifiedTag value="Verified" />

```
Store the page title
```

## How It Works

1. KaneAI reads `page.title()` directly
2. The title string is compared against the expected value
3. No screenshot or DOM analysis needed, this is a direct read
