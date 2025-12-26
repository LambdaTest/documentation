---
id: hyperexecute-release-notes-2-1-0
title: Version 2.1.0
hide_title: false
sidebar_label: Version 2.1.0
description: Version 2.1.0
keywords:
  - LambdaTest Hyperexecute
  - LambdaTest Hyperexecute help
  - LambdaTest Hyperexecute documentation
  - FAQs
url: https://www.lambdatest.com/support/docs/hyperexecute-release-notes-2-1-0/
site_name: LambdaTest
slug: hyperexecute-release-notes-2-1-0/
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
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-release-notes-2-1-0/"
        }]
      })
    }}
></script>
## Clone your Private Repositories via Tunnel

You can now clone the private repositories from your Git provider that are hosted on a private network or behind a firewall via tunnel.

After specifying the details of your repository, you need to set the useInCodeSetUp flag to true as shown below.

```bash
tunnelOpts:
  useInCodeSetUp: true
## this flag is mandatory to pass to enable cloning via tunnel
```

> Refer to the detailed documentation on [how to clone your private repositories via tunnel](/support/docs/hyperexecute-how-to-configure-tunnel/#clone-a-repository-via-tunnel)