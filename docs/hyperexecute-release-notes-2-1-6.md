---
id: hyperexecute-release-notes-2-1-6
title: Version 2.1.6
hide_title: false
sidebar_label: Version 2.1.6
description: Version 2.1.6
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
  - FAQs
url: https://www.testmu.ai/support/docs/hyperexecute-release-notes-2-1-6
site_name: LambdaTest
slug: hyperexecute-release-notes-2-1-6
---

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
          "item": `${BRAND_URL}/support/docs/hyperexecute-release-notes-2-1-6/`
        }]
      })
    }}
></script>
## Improved test execution flow with `alwaysRunPostSteps` flag

The `alwaysRunPostSteps` flag provides finer control over post-step execution. When enabled, this flag ensures that all post-steps within a stage always execute, regardless of whether any preceding test scenarios within that stage fail. This guarantees the completion of critical post-execution actions, regardless of the test execution outcome.

This enhancement streamlines your testing workflow by ensuring essential post-steps are consistently executed, even in the presence of failing test scenarios.

```bash
alwaysRunPostSteps: true
```

> 📕 Check the documentation to understand more about the [alwaysRunPostSteps](/support/docs/deep-dive-into-hyperexecute-yaml/#alwaysrunpoststeps) flag