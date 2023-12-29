---
id: hyperexecute-release-notes-2-1-1
title: Release Notes 2.1.1
hide_title: true
sidebar_label: Release Notes 2.1.1
description: Release Notes 2.1.1
keywords:
  - LambdaTest Hyperexecute
  - LambdaTest Hyperexecute help
  - LambdaTest Hyperexecute documentation
  - FAQs
url: https://www.lambdatest.com/support/docs/hyperexecute-release-notes-2-1-1/
site_name: LambdaTest
slug: hyperexecute-release-notes-2-1-1/
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
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-release-notes-2-1-1/"
        }]
      })
    }}
></script>

# Release Notes 2.1.1

## Email Delivery of HyperExecute Job Artifacts

You can now receive [Job Artifacts](https://www.lambdatest.com/support/docs/hyperexecute-artifacts/) directly via email, streamlining the process of accessing and managing your execution results.

To receive the Artifacts via mail, you simply need to pass a `email` flag in your YAML file.

```bash
uploadArtifacts:
    ...
    email:
      to: 
        - <your_email_id@example.com>
        - <another_email_id@example.com>
```

> Refer to the detailed documentation on [how to receive artifacts via email](https://www.lambdatest.com/support/docs/hyperexecute-email-reports/#how-to-receive-your-artifacts-via-email)