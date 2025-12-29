---
id: hyperexecute-release-notes-2-3-7
title: Version 2.3.7
hide_title: false
sidebar_label: Version 2.3.7
description: Version 2.3.7
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
  - FAQs
url: https://www.lambdatest.com/support/docs/hyperexecute-release-notes-2-3-7/
site_name: LambdaTest
slug: hyperexecute-release-notes-2-3-7/
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
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-release-notes-2-3-7/"
        }]
      })
    }}
></script>

## Improved Data Handling for Distributed Tests

[`dataJsonBuilder`](/support/docs/deep-dive-into-hyperexecute-yaml/#datajsonbuilder) flag provides you a more efficient way to manage JSON data for distributed testing scenarios.

It empowers you to:

- **Read JSON data:** Specify the path to your JSON file using the `path` configuration.
- **Filter data (optional):** Employ the filters configuration to target specific data based on user-defined criteria.
  - Leverage queries for complex filtering logic.
  - Utilize attributes for simpler filtering with higher precedence over queries.
- **Index JSON objects**: Enhance distribution efficiency by indexing objects using a chosen key with the index configuration.

