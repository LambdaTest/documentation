---
id: hyperexecute-release-notes-2-1-6
title: Release Notes 2.1.6
hide_title: true
sidebar_label: Release Notes 2.1.6
description: Release Notes 2.1.6
keywords:
  - LambdaTest Hyperexecute
  - LambdaTest Hyperexecute help
  - LambdaTest Hyperexecute documentation
  - FAQs
url: https://www.lambdatest.com/support/docs/hyperexecute-release-notes-2-1-6/
site_name: LambdaTest
slug: hyperexecute-release-notes-2-1-6/
---

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Release Notes",
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-release-notes-2-1-6/"
        }]
      })
    }}
></script>

# Release Notes 2.1.6

## Improved test execution flow with `alwaysRunPostSteps` flag

The `alwaysRunPostSteps` flag provides finer control over post-step execution. When enabled, this flag ensures that all post-steps within a stage always execute, regardless of whether any preceding test scenarios within that stage fail. This guarantees the completion of critical post-execution actions, regardless of the test execution outcome.

This enhancement streamlines your testing workflow by ensuring essential post-steps are consistently executed, even in the presence of failing test scenarios.

```bash
alwaysRunPostSteps: true
```

> 📕 Check the documentation to understand more about the [alwaysRunPostSteps](/support/docs/deep-dive-into-hyperexecute-yaml/#alwaysrunpoststeps) flag