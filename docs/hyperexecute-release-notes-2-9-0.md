---
id: hyperexecute-release-notes-2-9-0
title: Version 2.9.0
hide_title: false
sidebar_label: Version 2.9.0
description: Version 2.9.0
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
  - FAQs
url: https://www.testmuai.com/support/docs/hyperexecute-release-notes-2-9-0/
site_name: LambdaTest
slug: hyperexecute-release-notes-2-9-0/
canonical: https://www.testmuai.com/support/docs/hyperexecute-release-notes-2-9-0/
---

import NewReleaseTag from '../src/component/newRelease.js';
import EnhancementTag from '../src/component/enhancementTag';
import BugFixTag from '../src/component/bugFixTag';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
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
          "item": `${BRAND_URL}/support/docs/hyperexecute-release-notes-2-9-0/`
        }]
      })
    }}
></script>
## Git Token Support & Git Validation Improvements in HyperExecute Projects
We’ve enhanced Projects in HyperExecute to streamline Git integration. You can now also provide a `git_token` instead of PAT Token during project creation for GitHub authentication. If a token isn’t provided at request time, HyperExecute will resolve it in the following order:
- Request-level token
- User-level secret
- Organization-level secret

You can now integrate Enterprise GitHub accounts seamlessly into Projects.

> 📘 Refer to our detailed documentation for [`Projects`](/support/docs/hyperexecute-projects/).
