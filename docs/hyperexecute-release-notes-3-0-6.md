---
id: hyperexecute-release-notes-3-0-6
title: Version 3.0.6
hide_title: false
sidebar_label: Version 3.0.6
description: Version 3.0.6
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
  - FAQs
url: https://www.testmu.ai/support/docs/hyperexecute-release-notes-3-0-6
site_name: LambdaTest
slug: hyperexecute-release-notes-3-0-6
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
          "item": `${BRAND_URL}/support/docs/hyperexecute-release-notes-3-0-6/`
        }]
      })
    }}
></script>
## Feature: HyperExecute Logs Highlights
Debugging large test executions often generates extensive logs, making it difficult to identify key issues. The new **Logs Highlights** feature enhances log readability by automatically highlighting and grouping critical entries.

HyperExecute categorizes logs into Errors and Warnings using intelligent pattern detection based on regular expressions (regex). This will help you quickly locate and review the most relevant log lines during test analysis.

<img loading="lazy" src={require('../assets/images/hyperexecute/release-notes/logs-categorization.png').default} alt="Image"  className="doc_img"/> 