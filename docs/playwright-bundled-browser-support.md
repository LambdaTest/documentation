---
id: playwright-bundled-browser-support
title: Playwright Bundled Browser Support on TestMu AI
hide_title: true
toc_max_heading_level: 2
sidebar_label: "Bundled Browser Support"
description: Match Playwright's bundled Chromium, Firefox, and WebKit browsers to your local Playwright version on TestMu AI using the useSpecificBundleVersion capability.
keywords:
  - playwright bundled browser support
  - useSpecificBundleVersion capability
  - playwright bundled browsers testmu ai
  - playwright browser versions
  - playwright chromium firefox webkit versions

url: https://www.testmuai.com/support/docs/playwright-bundled-browser-support/
site_name: TestMu AI
slug: playwright-bundled-browser-support/
canonical: https://www.testmuai.com/support/docs/playwright-bundled-browser-support/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import VerifiedTag from '@site/src/component/verifiedTag';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "TestMu AI",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Playwright Bundled Browser Support",
          "item": `${BRAND_URL}/support/docs/playwright-bundled-browser-support/`
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
      "@id": "https://www.testmuai.com/support/docs/playwright-bundled-browser-support/"
    },
    "headline": "Playwright Bundled Browser Support on TestMu AI",
    "description": "Match Playwright's bundled Chromium, Firefox, and WebKit browsers to your local Playwright version on TestMu AI using the useSpecificBundleVersion capability.",
    "url": "https://www.testmuai.com/support/docs/playwright-bundled-browser-support/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Web Automation",
    "keywords": [
      "playwright bundled browser support",
      "useSpecificBundleVersion capability",
      "playwright bundled browsers testmu ai",
      "playwright browser versions"
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
        "name": "Enable Bundled Browser Support",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "const capabilities = { \"LT:Options\": {\"useSpecificBundleVersion\": true,}}"
      }
    ],
    "dateModified": "2026-09-27T00:00:00+05:30"
  }) }}
/>

# Playwright Bundled Browser Support on TestMu AI
***

Each Playwright release ships with its own bundled builds of Chromium, Firefox, and WebKit. When you set the [`useSpecificBundleVersion: true`](/support/docs/capabilities-for-playwright/) capability, <BrandName /> selects the Chromium, Firefox, or WebKit version that matches your local machine's Playwright version. This keeps the browsers on the grid aligned with the browsers you test against locally, so your results stay consistent.

## Enable Bundled Browser Support
***

Add the `useSpecificBundleVersion` capability to your `LT:Options` object to have <BrandName /> match the bundled browser version to your local Playwright version.

<VerifiedTag value="Verified" />

```js
const capabilities = { "LT:Options": {"useSpecificBundleVersion": true,}}
```

## Supported Bundled Browser Versions
***

The table below lists the Chromium, Firefox, and WebKit versions available for each Playwright version when `useSpecificBundleVersion` is enabled.

| Playwright Versions | Chromium | Firefox | Webkit |
|---------------------|----------|---------|--------|
|1.50| 130-133 except - 132, 126, 122 | 130-134, except - 131,133,126,122,120 | 18.0, 18.2 |
|1.49| 130-133 except - 132, 126, 122 | 130-134, except - 131,133,126,122,120 | 18.0, 18.2 |
|1.48| 130-133 except - 132, 126, 122 | 130-134, except - 131,133,126,122,120 | 18.0, 18.2 |
|1.47| 129 except - 132, 126, 122 | 130, except - 131,133,126,122,120 | 18.0 |
|1.46| 119-133, except - 132, 126, 122 | 118-134, except - 131,133, 126,122,120 | 17.4, 18.2 |
|1.45| 119-127, except - 126,122 | 119-127, except - 126,122,120 | 17.4 |
|1.44| 119-127, except - 126,122 | 119-127, except - 126,122,120 | 17.4 |
|1.43| 119-127, except - 126,122 | 119-127, except - 126,122,120 | 17.4 |
|1.42| 119-127, except - 126,122 | 119-127, except - 126,122,120 | 17.4 |
|1.41| 119-127, except - 126,122 | 119-127, except - 126,122,120 | 17.4 |
|1.40| 119-127, except - 126,122 | 119-127, except - 126,122,120 | 17.4 |
|1.39| 119-127, except - 126,122 | 119-127, except - 126,122,120 | 17.4 |
|1.38| 114-117 | 113-117 | 17 |
|1.37| 114-117 | 113-117 | 17 |
|1.36| 114-117 | 113-117 | 17 |
|1.35| 114-117 | 113-117 | 16.4 |
|1.34| 114-117 | 113-117 | 16.4 |
|1.33| 104-113 | 103-112 | 16.4 |
|1.32| 104-113 | 103-112 | 16.4 |
|1.31| 104-113 | 103-112 | 16.4 |
|1.30| 104-113 | 103-112 | 16.4 |
|1.29| 104-113 | 103-112 | 16.4 |
|1.28| 104-113 | 103-112 | 16.4 |
|1.27| 104-113 | 103-112 | 16.4 |
|1.26| 104-113 | 103-112 | 16 |
|1.25| 104-113 | 103-112 | 16 |
|1.24| 103-104 | 100-102 | 16 |

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={`${BRAND_URL}/support/docs/`}>
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
        Playwright Bundled Browser Support
      </span>
    </li>
  </ul>
</nav>
