---
id: hyperexecute-failfast
title: FailFast
hide_title: false
sidebar_label: FailFast
description: Learn more about how to use HyperExecute's FailFast feature.
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
  - FailFast Feature
url: https://www.testmuai.com/support/docs/hyperexecute-failfast/
site_name: TestMu AI
slug: hyperexecute-failfast/
canonical: https://www.testmuai.com/support/docs/hyperexecute-failfast/
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
          "item": `${BRAND_URL}/support/docs/hyperexecute-failfast/`
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
      "@id": "https://www.testmuai.com/support/docs/hyperexecute-failfast/"
    },
    "headline": "FailFast",
    "description": "Learn more about how to use HyperExecute's FailFast feature.",
    "url": "https://www.testmuai.com/support/docs/hyperexecute-failfast/",
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
        "name": "To leverage the FailFast feature, simply incorporate the following command in your HyperExecute YAML file",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "failFast: \n    maxNumberOfTests: 2"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Implementing FailFast",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "failFast:\n  maxNumberOfTests: 2\n  level: scenario"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>
HyperExecute's FailFast feature lets you to optimize your testing regimen by automatically aborting jobs that surpass a specified number of consecutive failures. This intelligent feature ensures that you receive prompt feedback and maintain a well-orchestrated testing process.

<img loading="lazy" src={require('../assets/images/hyperexecute/features/failfast/failfast.png').default} alt="Image"  className="doc_img" />

## `maxNumberOfTests`

The  `maxNumberOfTests`  flag serves as a parameter that determines the number of consecutive tests that need to be failed before the job is aborted automatically.

For instance, if you set the `maxNumberOfTests` flag to 4, then your job will be aborted after four consecutive test failures. However, if three of your tests fail and the fourth one is passed, then the FailFast feature will reset and look for the next four consecutive tests that are failing.

This allows you to speed up your test execution process and provide you with faster feedback.

## Implementing FailFast

To leverage the **FailFast** feature, simply incorporate the following command in your HyperExecute YAML file:

<VerifiedTag value="Verified" />

```yaml
failFast: 
    maxNumberOfTests: 2
```


:::info
To apply `failFast` at the **scenario** level instead of the default test level, set the `level: scenario` in the YAML configuration.

<VerifiedTag value="Verified" />

```yaml
failFast:
  maxNumberOfTests: 2
  level: scenario
```
:::

> **NOTE :** You can specify `failFast` at either the test level or scenario level, depending on your requirements. Both configurations will work, but can lead to unexpected results, only one should be used at a time.

***

For a deeper understanding of the HyperExecute YAML and its versatile features, we invite you to explore our dedicated [HyperExecute YAML documentation](/support/docs/deep-dive-into-hyperexecute-yaml/) page. This resource-rich section provides valuable insights to empower your testing endeavors.

***

>If you have more questions, then just give us a <span className="doc__lt" onClick={() => window.openLTChatWidget()}>shout</span> and we will answer them for you.

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
       HyperExecute FailFast Feature
      </span>
    </li>
  </ul>
</nav>
