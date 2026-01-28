---
id: hyperexecute-release-notes-2-1-1
title: Version 2.1.1
hide_title: false
sidebar_label: Version 2.1.1
description: Version 2.1.1
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
  - FAQs
url: https://www.testmuai.com/support/docs/hyperexecute-release-notes-2-1-1/
site_name: LambdaTest
slug: hyperexecute-release-notes-2-1-1/
canonical: https://www.testmuai.com/support/docs/hyperexecute-release-notes-2-1-1/
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
          "item": `${BRAND_URL}/support/docs/hyperexecute-release-notes-2-1-1/`
        }]
      })
    }}
></script>
## Email Delivery of HyperExecute Job Artifacts

You can now receive [Job Artifacts](/support/docs/hyperexecute-artifacts/) directly via email, streamlining the process of accessing and managing your execution results.

To receive the Artifacts via mail, you simply need to pass a `email` flag in your YAML file.

```bash
uploadArtifacts:
    ...
    email:
      to: 
        - <your_email_id@example.com>
        - <another_email_id@example.com>
```

> Refer to the detailed documentation on [how to receive artifacts via email](/support/docs/hyperexecute-email-reports/#how-to-receive-your-artifacts-via-email)