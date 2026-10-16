---
id: kaneai-variables-and-parameters
title: Variables & Parameters in KaneAI
hide_title: false
sidebar_label: Variables & Parameters
description: Details and information about variables & parameters in KaneAI
keywords:
  - kaneai
  - variables
  - parameters
  - secrets
  - smart variables
  - environments
url: https://www.testmuai.com/support/docs/kaneai-variables-and-parameters/
site_name: Variables & Parameters in KaneAI
slug: kaneai-variables-and-parameters/
canonical: https://www.testmuai.com/support/docs/kaneai-variables-and-parameters/
---


import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

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
          "name": "Variables & Parameters",
          "item": `${BRAND_URL}/support/docs/kaneai-variables-and-parameters`
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
      "@id": "https://www.testmuai.com/support/docs/kaneai-variables-and-parameters/"
    },
    "headline": "Variables & Parameters in KaneAI",
    "description": "Details and information about variables & parameters in KaneAI",
    "url": "https://www.testmuai.com/support/docs/kaneai-variables-and-parameters/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
    "keywords": [
      "kaneai",
      "variables",
      "parameters"
    ],
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
    "dateModified": "2026-10-13T00:00:00+05:30"
  }) }}
/>

KaneAI provides variables, secrets, smart variables, parameters, Datasets, and Files for test data. Parameters supply named inputs to a test case; Datasets provide the values for one or more executions. Files provide reusable uploaded content through `{{file.alias}}` references.

:::tip
All variables and parameters in KaneAI can be accessed from https://kaneai.lambdatest.com/variables
:::
    
<!-- ### Core Features -->
<div className="support_main">
  
  <a href = "/support/docs/kane-ai-using-variables/">
  <div className="support_inners">
    <h2>Variables</h2>
    <p>Placeholders that store dynamic values, enabling reuse and reducing redundancy in test cases.</p>
  </div>
  </a>

  <a href="/support/docs/kane-ai-secrets/">
  <div className="support_inners">
    <h2>Secrets</h2>
    <p>Securely stored sensitive data (e.g., passwords) that are used in tests without exposing them in the code.</p>
  </div>
  </a>

  <a href="/support/docs/hyperexecute-artifacts-url/">
  <div className="support_inners">
    <h2>Smart Variables</h2>
    <p>Context-aware variables that automatically pull data in real-time during test execution.</p>
  </div>
  </a>

  <a href = "/support/docs/kane-ai-using-parameters/">
  <div className="support_inners">
    <h2>Parameters</h2>
    <p>Values passed into test cases at runtime to customize test execution for different configurations or environments.</p>
  </div>
  </a>

  <a href="/support/docs/kane-ai-using-datasets/">
  <div className="support_inners">
    <h2>Datasets</h2>
    <p>Collections of test data used in a test, allowing for data-driven testing by running the same test with different inputs.</p>
  </div>
  </a>

  <a href="/support/docs/kaneai-upload-and-download-files/">
  <div className="support_inners">
    <h2>Files</h2>
    <p>Reusable uploaded files that a test step references by alias.</p>
  </div>
  </a>
  
</div>

  
