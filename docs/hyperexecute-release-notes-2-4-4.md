---
id: hyperexecute-release-notes-2-4-4
title: Version 2.4.4
hide_title: false
sidebar_label: Version 2.4.4
description: Version 2.4.4
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
  - FAQs
url: https://www.testmu.ai/support/docs/hyperexecute-release-notes-2-4-4
site_name: LambdaTest
slug: hyperexecute-release-notes-2-4-4
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
          "item": `${BRAND_URL}/support/docs/hyperexecute-release-notes-2-4-4/`
        }]
      })
    }}
></script>

## HyperExecute now integrates with k6

HyperExecute now supports k6, a powerful open-source performance testing tool. HyperExecute supports all versions of k6 (till 0.52). To use any particular version, all you have to do is mention that specific version in the [runson flag](/support/docs/deep-dive-into-hyperexecute-yaml/#runson) in your [HyperExecute YAML](/support/docs/deep-dive-into-hyperexecute-yaml/) file.

```yaml
runtime:
    addons:
      - name: k6
        version: "v0.52.0"
```

Also, add these environment variables in your YAML file to install the necessary dependencies for your tests

```yaml
env: 
  K6_BROWSER_ENABLED: true  
  K6_BROWSER_HEADLESS: false 
  HE_CONTEXT_K6_SETUP_DEFAULT_BROWSER_PATH: true
```

📕 Check the [k6 integration documentation](/support/docs/hyperexecute-k6-testing/) to learn more about it.