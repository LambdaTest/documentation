---
id: hyperexecute-release-notes-3-1-4
title: Version 3.1.4
hide_title: false
sidebar_label: Version 3.1.4
description: Version 3.1.4
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
  - FAQs
url: https://www.testmu.ai/support/docs/hyperexecute-release-notes-3-1-4/
site_name: LambdaTest
slug: hyperexecute-release-notes-3-1-4/
canonical: https://www.testmu.ai/support/docs/hyperexecute-release-notes-3-1-4/
---

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
          "item": `${BRAND_URL}/support/docs/hyperexecute-release-notes-3-1-4/`
        }]
      })
    }}
></script>
## Enhanced Support for Azure Repositories in HyperExecute Projects
We have introduced an enhancement to the HyperExecute [Custom Project feature](/support/docs/hyperexecute-projects/#setup-custom-project) to support Azure Repos. This enables you with code repositories hosted in Azure DevOps to execute tests directly on HyperExecute—without relying on Jenkins or any external CI/CD tool.

With this update, you can now configure Azure Repos in the same intuitive manner as GitHub, or Bitbucket. Simply provide the repository details and Personal Access Token (PAT), and HyperExecute will fetch the code and trigger workflows seamlessly.

> 📘 **Read More:** Learn more about configuring Azure Repos, project setup, workflows, and job triggers in the [HyperExecute documentation](/support/docs/hyperexecute-projects/).