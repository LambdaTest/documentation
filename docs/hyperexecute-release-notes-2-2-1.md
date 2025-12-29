---
id: hyperexecute-release-notes-2-2-1
title: Version 2.2.1
hide_title: false
sidebar_label: Version 2.2.1
description: Version 2.2.1
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
  - FAQs
url: https://www.testmu.ai/support/docs/hyperexecute-release-notes-2-2-1
site_name: LambdaTest
slug: hyperexecute-release-notes-2-2-1
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
          "name": "Version",
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-release-notes-2-2-1/"
        }]
      })
    }}
></script>
## Configure the behavior of Error Categorization of Your Job!!

The `errorCategorizedOnFailureOnly` flag lets you control when error categorization happens after a job runs. Normally, errors are categorized for every stage, even if the stage succeeded. Enabling this flag ensures that errors are only categorized for stages that failed (not green).

> Refer to the documentation for more details on the [errorCategorizedOnFailureOnly](/support/docs/deep-dive-into-hyperexecute-yaml/#errorcategorizedonfailureonly)