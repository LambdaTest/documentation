---
id: hyperexecute-how-to-find-correct-concurrency
title: How to Find the Correct Concurrency for my Job
hide_title: true
sidebar_label: How to Find the Correct Concurrency 
description: Discover the right concurrency levels with HyperExecute using TestMu AI's guide for effective automation testing.
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
  - How to Find the Correct Concurrency 
url: https://www.testmuai.com/support/docs/hyperexecute-how-to-find-correct-concurrency/
site_name: TestMu AI
slug: hyperexecute-how-to-find-correct-concurrency/
canonical: https://www.testmuai.com/support/docs/hyperexecute-how-to-find-correct-concurrency/
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
          "name": "Integrations",
          "item": `${BRAND_URL}/support/docs/hyperexecute-how-to-configure-tunnel/`
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
      "@id": "https://www.testmuai.com/support/docs/hyperexecute-how-to-find-correct-concurrency/"
    },
    "headline": "How to Find the Correct Concurrency for my Job",
    "description": "Discover the right concurrency levels with HyperExecute using TestMu AI's guide for effective automation testing.",
    "url": "https://www.testmuai.com/support/docs/hyperexecute-how-to-find-correct-concurrency/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "HyperExecute",
    "keywords": [
      "TestMu AI Hyperexecute",
      "TestMu AI Hyperexecute help",
      "TestMu AI Hyperexecute documentation"
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
        "name": "How to Find the Correct Concurrency for my Job",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "concurrency: 10   "
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

# How to Find the Correct Concurrency for my Job

This page explains how you can find what concurrency would be best suited for your test execution job.
***
    
The `concurrency` is one of the parameters in the HyperExecute Yaml. It indicates the number of concurrent tasks to run for processing all your test scenarios/test-cases. A HyperExecute job, thus triggered, creates as many threads(also known as tasks) as per the value provided in the `concurrency` key. 

<VerifiedTag value="Verified" />

```bash
concurrency: 10   
```

This is a **required** parameter in case you are using [autosplit](/support/docs/hyperexecute-auto-split-strategy/). However if you are using [matrix](/support/docs/hyperexecute-matrix-multiplexing-strategy/) the number of concurrent threads is automatically defined by the possible permutations and combinations of parameters give.

The platform automatically analyzes your usage and test cases and will guide you to increase the concurrency to obtain substantial time savings. You can find this information on the left side banner. <br/>

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/videos/hyperexecute/knowledge-base/correct-concurrency/concurrency.mp4').default} type="video/mp4" />
</video>

You can also see the overall concurrency trends using our analytics widgets. [Learn more](/support/docs/analytics-modules-resource-utilization/#concurrency-trends)
 

>If you have more questions, feel free to <span className="doc__lt" onClick={() => window.openLTChatWidget()}>Chat</span> with us.

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={BRAND_URL}>
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
       HyperExecute General FAQs
      </span>
    </li>
  </ul>
</nav>
