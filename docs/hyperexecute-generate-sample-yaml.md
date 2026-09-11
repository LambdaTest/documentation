---
id: hyperexecute-generate-sample-yaml
title: Generate your HyperExecute YAML file
hide_title: false
sidebar_label: Generate your HyperExecute YAML
description: This document helps you to understand how to generate the HyperExecute YAML files using the HyperExecute dashboard and then a sample yaml file for understanding the YAML
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
url: https://www.testmuai.com/support/docs/hyperexecute-generate-sample-yaml/
site_name: TestMu AI generating hyperexecute yaml
slug: hyperexecute-generate-sample-yaml/
canonical: https://www.testmuai.com/support/docs/hyperexecute-generate-sample-yaml/
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
          "name": "Generate HyperExecute YAML",
          "item": `${BRAND_URL}/support/docs/hyperexecute-generate-sample-yaml/`
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
      "@id": "https://www.testmuai.com/support/docs/hyperexecute-generate-sample-yaml/"
    },
    "headline": "HyperExecute YAML generator: create your config file",
    "description": "This document helps you to understand how to generate the HyperExecute YAML files using the HyperExecute dashboard and then a sample yaml file for understanding the YAML",
    "url": "https://www.testmuai.com/support/docs/hyperexecute-generate-sample-yaml/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
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
        "name": "A sample HyperExecute YAML file looks like this",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "---\nversion: 0.1\nrunson: linux\n\nautosplit: true\nconcurrency: 2\n\npre:\n  - mvn dependency:resolve\n\ntestDiscovery:\n  type: raw\n  mode: static\n  command: grep 'test name' xml/testng_linux.xml | awk '{print$2}' | sed 's/name=//g' | sed 's/>//g'\n\ntestRunnerCommand: mvn test -Dplatname=linux -Dmaven.repo.local=./.m2 dependency:resolve -DselectedTests=$test\n\nretryOnFailure: true\nmaxRetries: 1\n\njobLabel: [selenium-testng, linux, v1, autosplit]"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>
You can also generate the HyperExecute YAML directly from the HyperExecute Portal. To accomplish this, follow the below mentioned steps:

**Step 1:**  Go to [HyperExecute dashboard](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/hyperexecute), click on the **Help Center**  and select **Generate YAML** from the dropdown.  

**Step 2:** Select your preferred test automation framework.

**Step 3:** You will be redirected to the configuring section, where you can configure the HyperExecute YAML parameters. Click on **Generate YAML** button. 

**Step 4:**  Once done, you can download the YAML file using the small icon on top. Alternatively, you can copy the contents of the file and modify them further according to your needs on your favorite IDE.  

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/images/hyperexecute/yaml/output.mp4').default} type="video/mp4" />
</video>

> HyperExecute supports multiple languages and testing frameworks. See the comprehensive list & samples [here](/support/docs/hyperexecute-supported-languages-and-frameworks/).

## Sample HyperExecute YAML
A sample HyperExecute YAML file looks like this:

<VerifiedTag value="Verified" />

```yaml
---
version: 0.1
runson: linux

autosplit: true
concurrency: 2

pre:
  - mvn dependency:resolve

testDiscovery:
  type: raw
  mode: static
  command: grep 'test name' xml/testng_linux.xml | awk '{print$2}' | sed 's/name=//g' | sed 's/>//g'

testRunnerCommand: mvn test -Dplatname=linux -Dmaven.repo.local=./.m2 dependency:resolve -DselectedTests=$test

retryOnFailure: true
maxRetries: 1

jobLabel: [selenium-testng, linux, v1, autosplit]
```
