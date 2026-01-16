---
id: hyperexecute-release-notes-2-7-3
title: Version 2.7.3
hide_title: false
sidebar_label: Version 2.7.3
description: Version 2.7.3
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
  - FAQs
url: https://www.testmu.ai/support/docs/hyperexecute-release-notes-2-7-3/
site_name: LambdaTest
slug: hyperexecute-release-notes-2-7-3/
canonical: https://www.testmu.ai/support/docs/hyperexecute-release-notes-2-7-3/
---

import NewReleaseTag from '../src/component/newRelease.js';
import EnhancementTag from '../src/component/enhancementTag';
import BugFixTag from '../src/component/bugFixTag';
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
          "item": `${BRAND_URL}/support/docs/hyperexecute-release-notes-2-7-3/`
        }]
      })
    }}
></script>

## `globalPre` and `globalPost` flag in HyperExecute YAML
The [`globalPre`](/support/docs/deep-dive-into-hyperexecute-yaml/#globalpre) and [`globalPost`](/support/docs/deep-dive-into-hyperexecute-yaml/#globalpost) flags in the HyperExecute YAML configuration allow for global setup and teardown operations for test execution. These flags enable users to define commands that run before any tests begin (globalPre) and after all tests have completed (globalPost), providing greater control over test executions.

```yaml title="hyperexecute.yaml"
# globalPre
globalPre:
  mode: remote #local or remote
  commands:
    - "echo 'Setting up environment'"
    - "apt-get update && apt-get install -y curl"
    - "curl -X POST https://api.example.com/init"
  runson: linux

# globalPost
globalPost:
  mode: remote #local or remote
  commands:
    - "echo 'Cleaning up test environment'"
    - "rm -rf /tmp/test-results"
    - "curl -X POST https://api.example.com/cleanup"
  runson: linux
```

<img loading="lazy" src={require('../assets/images/hyperexecute/release-notes/globalPre-globalPost.png').default} alt="cmd" className="doc_img"/>

> 📘 Refer to our detailed documentation for [`globalPre`](/support/docs/deep-dive-into-hyperexecute-yaml/#globalpre) and [`globalPost`](/support/docs/deep-dive-into-hyperexecute-yaml/#globalpost) flags.