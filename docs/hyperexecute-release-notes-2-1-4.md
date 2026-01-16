---
id: hyperexecute-release-notes-2-1-4
title: Version 2.1.4
hide_title: false
sidebar_label: Version 2.1.4
description: Version 2.1.4
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
  - FAQs
url: https://www.testmu.ai/support/docs/hyperexecute-release-notes-2-1-4/
site_name: LambdaTest
slug: hyperexecute-release-notes-2-1-4/
canonical: https://www.testmu.ai/support/docs/hyperexecute-release-notes-2-1-4/
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
          "name": "Version",
          "item": `${BRAND_URL}/support/docs/hyperexecute-release-notes-2-1-4/`
        }]
      })
    }}
></script>
## Support for Multiple Runtime Environments 

You can now download and install **multiple languages** and and frameworks of a **specified versions** in your machine that is needed to execute your tests.

```bash
runtime:
  - language: java
    version: '17'
    addons:
      - name: gauge
        version: '1.5.6'
      - name: gradle
        version: '7.6'
  - language: python
    version: '3.10'
  - language: node
    version: '16'
```

> Go through the documentation to understand the [runtime](/support/docs/deep-dive-into-hyperexecute-yaml/#runtime) flag.