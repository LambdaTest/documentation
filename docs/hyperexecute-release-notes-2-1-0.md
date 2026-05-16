---
id: hyperexecute-release-notes-2-1-0
title: Version 2.1.0
hide_title: false
sidebar_label: Version 2.1.0
description: Version 2.1.0
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
  - FAQs
url: https://www.testmuai.com/support/docs/hyperexecute-release-notes-2-1-0/
site_name: TestMu AI
slug: hyperexecute-release-notes-2-1-0/
canonical: https://www.testmuai.com/support/docs/hyperexecute-release-notes-2-1-0/
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
          "item": `${BRAND_URL}/support/docs/hyperexecute-release-notes-2-1-0/`
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
